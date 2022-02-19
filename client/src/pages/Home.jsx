import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>HOME</h1>
        <Link to='/about'>
            About
        </Link>
        <Link to='/blog'>
            Blog
        </Link>
    </div>
  )
}
