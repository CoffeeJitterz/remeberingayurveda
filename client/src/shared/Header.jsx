import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        <div>
            <NavLink to='/' className='remembering'>
        Remembering
            </NavLink >
            <NavLink to='/' className='ayurveda'>
        Ayurveda
            </NavLink >
        </div>
        <div>
        <NavLink to='/services' className='events_blog'>
            SERVICES
        </NavLink>
        <NavLink to='/events' className='events_blog'>
            EVENTS
        </NavLink>
        <NavLink to='/blog' className='events_blog'>
            BLOG
        </NavLink>
        </div>
    </div>
  )
}
