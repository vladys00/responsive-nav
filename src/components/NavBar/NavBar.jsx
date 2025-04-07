import { NavLink } from "react-router-dom"
import './NavBar.css'

function NavBar () {
    return (
        <nav>
            <ul>
                <NavLink to="/">Main</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/work">Work</NavLink>
            </ul>
        </nav>
    )
}

export default NavBar