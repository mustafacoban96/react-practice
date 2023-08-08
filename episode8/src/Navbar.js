
import {Link} from 'react-router-dom'
export const Navbar = () => {
    return (
        <nav class="nav-bar">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
    );
}