import Header from "../shared/Header"
import Card from "../shared/Card"
import Postfeed from "../components/Postfeed"

export default function Blog() {
  return (
    <div>
        <Header />
        <Card>
        <h1>BLOG</h1>
        <Postfeed/>
        </Card>
    </div>
  )
}
