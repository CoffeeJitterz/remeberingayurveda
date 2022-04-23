import {NavLink} from 'react-router-dom'
const logo = require('../images/logo.png')

export default function Header() {
  return (
    <div className='header'>
        <div>
            <NavLink to='/' className='remembering'>
            <img src={logo} width={600} alt='alt'/>
            </NavLink >
        </div>
        <div>
        <NavLink to='/services' className='events_blog_about'>
            SERVICES
        </NavLink>
        <NavLink to='/events' className='events_blog_about'>
            EVENTS
        </NavLink>
        <NavLink to='/bio' className='events_blog_about'>
            BIO
        </NavLink>
        <NavLink to='/blogs' className='events_blog_about'>
            BLOG
        </NavLink>
        </div>
    </div>
  )
}
