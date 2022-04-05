import { useParams } from "react-router-dom"

import Event from "../components/Event"
import Header from "../shared/Header"

export default function EventPage( {events} ) {

  const params = useParams()

  console.log(events[params.id])
  
  const output = events[params.id]
  return (
    <div>
        <Header />
        {events && <Event events={events} 
              key={output.id}
              title={output.title}
              date={output.date}
              description={output.description}
              image={output.image}
              />}
    </div>
  )
}
