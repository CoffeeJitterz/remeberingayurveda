import Header from "../shared/Header"
import Card from "../shared/Card"
import BlogFeed from "../components/BlogFeed"

export default function Blog() {
  return (
    <div>
        <Header />
        <Card>
        <h1>BLOG</h1>
        <BlogFeed />
        </Card>
    </div>
  )
}
