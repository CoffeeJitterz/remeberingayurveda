import Header from '../shared/Header'
import Card from '../shared/Card'
import EventFeed from '../components/EventFeed'

export default function Home() {
  return (
    <div>
        <Header />
        <Card>
        <h1>HOME</h1>
        <EventFeed expand={null}/>
        </Card>
    </div>
  )
}
