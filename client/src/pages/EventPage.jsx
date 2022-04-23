import { useParams } from "react-router-dom"

import Event from "../components/Event"
import Header from "../shared/Header"

export default function EventPage( {events} ) {

  const params = useParams()

  console.log(params)
  
  const output = events[params.event_id]
  return (
    <div>
        <Header />
        {events && <Event events={events} 
              key={output.event_id}
              title={output.title}
              date={output.date}
              description={output.description}
              image={output.image}
              />}
    </div>
  )
}
