import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        
            <NavLink to='/' className='remembering_ayurveda'>
        Remembering Ayurveda
            </NavLink >
        <NavLink to='/events'>
            EVENTS
        </NavLink>
        <NavLink to='/blog'>
            BLOG
        </NavLink>

    </div>
  )
}
