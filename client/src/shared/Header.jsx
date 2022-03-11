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
        <NavLink to='/events'>
            EVENTS
        </NavLink>
        <NavLink to='/blog'>
            BLOG
        </NavLink>

    </div>
  )
}
