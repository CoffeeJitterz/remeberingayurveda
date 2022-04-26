import Header from "../shared/Header"
import EventFeed from "../components/EventFeed"

export default function EventsFeedPage( { events } ) {

  return (
    <div>
        <Header />
        <EventFeed expand={true} events={events}  />      
    </div>
  )
}
