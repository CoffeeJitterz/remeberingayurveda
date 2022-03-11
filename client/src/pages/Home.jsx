import Header from '../shared/Header'
import Card from '../shared/Card'
import About from '../components/About'
import EventFeed from '../components/EventFeed'

export default function Home() {
  return (
    <div>
        <Header />
        <Card>
        <About />
        <h3>Upcoming Events!</h3>
        <EventFeed expand={null}/>
        </Card>
    </div>
  )
}
