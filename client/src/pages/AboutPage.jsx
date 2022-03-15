import Header from '../shared/Header'
import About from "../components/About"

export default function AboutPage() {
  return (
    <div>
        <Header />
        <About expand={true}/>
    </div>
  )
}
