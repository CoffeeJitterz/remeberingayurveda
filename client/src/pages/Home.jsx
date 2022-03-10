import Header from '../shared/Header'
import Card from '../shared/Card'
import About from '../components/About'
import EventFeed from '../components/EventFeed'

export default function Home() {
  return (
    <div>
        <Header />
        <Card>
        <h1>HOME</h1>
        <About />
        <EventFeed expand={null}/>
        </Card>
    </div>
  )
}
