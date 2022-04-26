import Card from "../shared/Card"


export default function Event( { title, date, description, image, events } ) {
  if (image) {
    const picture = require(`../images/${image}`)
    return (
      <span className='event'>
        <Card section='event'>
          <h2>{title}</h2>
          <h5>{date}</h5>
          {image && <img src={picture} height={400} alt='alt'/>}
          <p>{description}</p>
        </Card>
      </span>
    )
  }
  return (
    <span className='event'>
      <Card section='event'>
        <h3>{title}</h3>
        <h5>{date}</h5>
        <p>{description}</p>
      </Card>
    </span>
  )
}
