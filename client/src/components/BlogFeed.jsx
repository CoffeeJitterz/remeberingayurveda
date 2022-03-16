import { Link } from "react-router-dom"

import Blog from "./Blog"

export default function BlogFeed( { blogs } ) {

const output = blogs.map((item) => {
    return <Blog 
    title={item.title}
    date={item.date}
    body={item.body}
    />
})

  return (
<div>
   {output}
</div>

  )
}
