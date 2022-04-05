import { useParams } from "react-router-dom"

import Header from "../shared/Header"
import Blog from "../components/Blog"


export default function BlogPage( { blogs } ) {

const params = useParams()

const output = blogs[params.id]

  return (
    <div>
        <Header />
        <Blog
        key={output.id}
        title={output.title}
        date={output.date}
        body={output.body}
        />
    </div>
  )
}
