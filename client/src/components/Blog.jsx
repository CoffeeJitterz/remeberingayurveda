import Card from "../shared/Card"

export default function Blog({title, date, body}) {
  return (
    <div className="post_container">
      <Card>
        <h3>{title}</h3>
        <date>{date}</date>
        <p>{body}</p>
      </Card>
    </div>
  )
}
