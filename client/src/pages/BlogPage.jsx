import { useParams } from "react-router-dom"

import Header from "../shared/Header"
import Blog from "../components/Blog"


export default function BlogPage( { blogs } ) {

const params = useParams()

const output = blogs[params.blog_id - 1]
console.log(blogs[params.blog_id])
console.log(blogs[0])

  return (
    <div>
        <Header />
        <Blog
        key={output.blog_id}
        title={output.title}
        date={output.date}
        body={output.body}
        />
    </div>
  )
}
