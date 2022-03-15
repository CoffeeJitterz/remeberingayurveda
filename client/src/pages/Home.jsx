import {Link} from 'react-router-dom'

import Header from '../shared/Header'
import Services from '../components/Services'
import Card from '../shared/Card'
import About from '../components/About'
import EventFeed from '../components/EventFeed'

export default function Home( { events } ) {
  return (
    <div>
        <Header />
        <Card>
          <About expand={false}/>          
        <Services expand={false} />
        <h3>Upcoming Events!</h3>
        <EventFeed expand={null} events={events}/>
        </Card>
    </div>
  )
}
