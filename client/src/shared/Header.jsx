import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <h1>Remembering Ayurveda</h1>
        <Link to='/'>
            HOME
        </Link >
        <Link to='/events'>
            EVENTS
        </Link>
        <Link to='/blog'>
            BLOG
        </Link>
    </div>
  )
}
