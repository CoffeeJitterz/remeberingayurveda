import Card from "../shared/Card"
import { useParams } from "react-router-dom"

export default function Event({title, date, description, image, events}) {
  if(!events){
    return (
      <span>
        <Card>
          <h3>{title}</h3>
          <h5>{date}</h5>
          <p>{description}</p>
          <h6>{image}</h6>
        </Card>
      </span>
    )
  } else {
    return (
      <span>
        <Card>
          <h3>{title}</h3>
          <h5>{date}</h5>
          <p>{description}</p>
          <h6>{image}</h6>
        </Card>
      </span> )
  }
}
