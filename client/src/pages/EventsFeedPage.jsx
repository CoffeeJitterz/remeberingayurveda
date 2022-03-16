import Header from "../shared/Header"
import Card from "../shared/Card"
import EventFeed from "../components/EventFeed"

export default function EventsFeedPage( { events } ) {

  return (
    <div>
        <Header />
        <Card>
        <EventFeed expand={true} events={events}  />
        </Card>
        
    </div>
  )
}