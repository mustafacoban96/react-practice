import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";






export const Navbar = () =>{


    return (
        <div className="nav-bar">
            <div className="nav-icon-area">
                <Link to="/" style={{color: "#fff",fontSize:"1.5rem",letterSpacing:"5px",margin:"0px 55px",textDecoration:"none"}}>Shopping</Link>
            </div>
            <div className="cart-area">
            <Link to="/" style={{color: "#fff",fontSize:"1.2rem",letterSpacing:"5px",textDecoration:"none"}}>Shop</Link>
            <Link to="/" style={{color: "#fff",fontSize:"1.2rem",letterSpacing:"5px",textDecoration:"none"}}>Cart <FaCartShopping/></Link>
            </div>
        </div>
    )
}