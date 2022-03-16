import { useParams } from "react-router-dom"

import Header from "../shared/Header"
import Blog from "../components/Blog"


export default function BlogPage( { blogs } ) {

const params = useParams()

const output = blogs[params.id]

  return (
    <div>BlogPage</div>
  )
}
