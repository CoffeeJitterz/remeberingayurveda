import Card from "../shared/Card"


export default function Event( { title, date, description, image, events } ) {
  console.log(image)
  let picture = null
  if (image) {
    const picture = require(`../images/${image}`)
    return (
      <span className='event'>
        <Card>
          {image && <img src={picture} height={400} />}
          <h3>{title}</h3>
          <h5>{date}</h5>
          <p>{description}</p>
          <h6>{image}</h6>
        </Card>
      </span>
    )
  }
  return (
    <span className='event'>
      <Card>
        <h3>{title}</h3>
        <h5>{date}</h5>
        <p>{description}</p>
        <h6>{image}</h6>
      </Card>
    </span>
  )
}
