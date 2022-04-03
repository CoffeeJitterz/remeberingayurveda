import Header from '../shared/Header'
import Services from '../components/Services'
import Card from '../shared/Card'
import Bio from '../components/Bio'
import EventFeed from '../components/EventFeed'


export default function Home( { events } ) {
  return (
    <div>
        <Header />
        <Card>
          <h2>What is Ayurveda?</h2>
          <p>Ayurveda is a complete healthcare science, 
            focused on restoring and maintaining a balance 
            of the mind, body, and spirit. The tools of 
            Ayurveda are powerful for both preventing 
            disease in those who are healthy, and for curing 
            disease in those who are ill. The practice of 
            Ayurveda involves working with the five senses; 
            taste, touch, sight, hearing and smelling. We 
            work with them by utilizing herbal formulations, 
            diet, colour, aroma, sound, yoga, meditation, 
            sense cleansing therapies and other lifestyle 
            practices to restore harmony and balance.</p>

            <p>“The Ayurvedic Route to great health involves 
                two simple steps - Doing less and being more” 
            </p>
        <Bio expand={false}/>          
        <Services expand={false} />
        {events && <EventFeed expand={null} events={events}/>}
        </Card>
    </div>
  )
}
