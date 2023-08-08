import {Link} from 'react-router-dom'
export const Navbar = () => {
    return (
        <nav class="nav-bar">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/profile">Profile</Link></li>
              </ul>
            </nav>
    );
}