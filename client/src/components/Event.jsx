import Card from "../shared/Card"


export default function Event( { title, date, description, image, events } ) {
  if (image) {
    const picture = require(`../images/${image}`)
    return (
      <span>
        <Card section='event'>
          {image && <img src={picture} height={400} alt='alt'/>}
          <h3>{title}</h3>
          <h5>{date}</h5>
          <p>{description}</p>
          <h6>{image}</h6>
        </Card>
      </span>
    )
  }
  return (
    <span>
      <Card section='event'>
        <h3>{title}</h3>
        <h5>{date}</h5>
        <p>{description}</p>
        <h6>{image}</h6>
      </Card>
    </span>
  )
}
