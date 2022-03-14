import Card from "../shared/Card"

export default function Event({title, date, description, image, events}) {
  if(!events){
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
  } else {
    return (
      <span className='event'>
        <Card>
          <h3>{title}</h3>
          <h5>{date}</h5>
          <p>{description}</p>
          <h6>{image}</h6>
        </Card>
      </span> )
  }
}
