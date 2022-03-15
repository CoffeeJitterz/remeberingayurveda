import {Link, useParams} from 'react-router-dom'
import Event from "./Event"

export default function EventFeed( { expand, events } ) {

// const events = [
// {title, date, description, image}
// ] 

    const output = events.map((event) => {   
        if (expand) {
            return (
            <Link to={`/events/${event.id}`}>
            <Event
            title={event.title}
            date={event.date}
            description={event.description}
            image={event.image}
            />         
            </Link>
            
            )
        } else {
            return (
            <Link to={`/events/${event.id}`}>
            <Event
            title={event.title}
            date={event.date}
            />
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
