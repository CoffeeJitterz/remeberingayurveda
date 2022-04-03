import Header from '../shared/Header'
import Bio from "../components/Bio"

export default function BioPage() {
  return (
    <div>
        <Header />
        <Bio expand={true}/>
    </div>
  )
}
