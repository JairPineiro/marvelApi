import { NavLink } from 'react-router-dom'
import './header.css'
export const HeaderNav = () => {
    const linkIsActive = (isActive) => {
        return isActive ? 'header__item-link header__item-link--is--active' : 'header__item-link'
    }
    return (
        <header>
            <nav className="header">
                <NavLink href="/" className="header_logo">Marvel</NavLink>
                <ul className="header__nav-list">
                    <li className='header__list-item'> 
                        <NavLink to='/' className={({ isActive }) => linkIsActive(isActive)}>Home</NavLink>
                    </li>
                    <li className='header__list-item'> 
                        <NavLink to='/dashboard' className={({ isActive }) => linkIsActive(isActive)}>Dashboard</NavLink>
                    </li>
                   
                </ul>
            </nav>
        </header>
    )
}