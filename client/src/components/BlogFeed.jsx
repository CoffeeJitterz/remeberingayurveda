import { Link } from "react-router-dom"

import Blog from "./Blog"

export default function BlogFeed( { blogs } ) {

const output = blogs.map(blog => {
    return (
      <Link to={`/blogs/${blog.id}`}>
        <Blog 
        key={blog.id}
        title={blog.title}
        date={blog.date}
        body={blog.body}
        />
      </Link>
      )     
})

  return (
  <span>
    {output}
  </span>
  )
}
