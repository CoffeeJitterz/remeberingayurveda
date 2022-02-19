export default function Post({title, date, body}) {
  return (
    <div className="post_container">
        <h3>{title}</h3>
        <date>{date}</date>
        <p>{body}</p>
    </div>
  )
}
