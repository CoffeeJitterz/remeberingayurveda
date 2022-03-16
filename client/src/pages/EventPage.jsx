import { useParams } from "react-router-dom"

import Event from "../components/Event"
import Header from "../shared/Header"

export default function EventPage( {events} ) {

  const params = useParams()

  const output = events[params.id]

  return (
    <div>
        <Header />
        <Event events={events} 
              title={output.title}
              date={output.date}
              description={output.description}
              image={output.image}
              />
    </div>
  )
}
