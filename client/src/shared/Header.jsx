import {NavLink} from 'react-router-dom'
const logo = require('../images/logo.png')

export default function Header() {

const navColor = ({ isActive }) =>
isActive
  ? { color: 'black', fontSize: 'xx-large', fontWeight: 'bold'}
  : { color: 'rgb(127, 0, 255)'}

  return (
    <div className='header'>
        <div>
            <NavLink to='/' className='remembering'>
            <img src={logo} height={120} alt='alt'/>
            </NavLink >
        </div>
        <div>
        <NavLink to='/services' className='events_blog_about' style={navColor}>
            SERVICES
        </NavLink>
        <NavLink to='/events' className='events_blog_about' style={navColor}>
            EVENTS
        </NavLink>
        <NavLink to='/bio' className='events_blog_about' style={navColor}>
            BIO
        </NavLink>
        <NavLink to='/blogs' className='events_blog_about' style={navColor}>
            BLOG
        </NavLink>
        </div>
    </div>
  )
}
