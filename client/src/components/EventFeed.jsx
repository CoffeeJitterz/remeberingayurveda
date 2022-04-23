import {Link} from 'react-router-dom'

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
<span>
    <h1>Upcoming Events!</h1>
    {output}   
</span>     
      </Link>

  )
}
