import {Link} from 'react-router-dom'
import Card from '../shared/Card'

import Event from "./Event"

export default function EventFeed( { expand, events } ) {
    const output = events.map((event) => {   
        if (expand) {
            return (
            <Link to={`/events/${event.event_id}`} className='events_feed'>
            {events && <Event
            key={event.event_id}
            title={event.title}
            date={event.date}
            description={event.description}
            image={event.image}
            />}         
            </Link>
            
            )
        } else {
            return (
            <Link to={`/events/${event.event_id}`} className='events_feed'>
                    {events && <Event
                    key={event.event_id}
                    title={event.title}
                    date={event.date}
                    />}
            </Link>
            )
        }
    })
  return (
      <Link to='/events' className='events_feed'>
          <Card section='events'>
            <span>
                <h2>Upcoming Events!</h2>
                {output}   
            </span>     
          </Card>
      </Link>

  )
}
