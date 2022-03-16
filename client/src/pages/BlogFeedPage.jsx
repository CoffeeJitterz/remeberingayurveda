import Header from "../shared/Header"
import Card from "../shared/Card"
import BlogFeed from "../components/BlogFeed"

export default function BlogFeedPage( { blogs } ) {
  return (
    <div>
        <Header />
        <Card>
        <h1>BLOG</h1>
        <BlogFeed blogs={blogs}/>
        </Card>
    </div>
  )
}
