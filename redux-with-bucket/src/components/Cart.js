import { Link } from "react-router-dom";
import { connect } from "react-redux";



const Cart = (props) =>{
    return (
        <>
        <div className="header">
            <Link to="/" style={{textDecoration:"none", fontSize:"1.3rem" }}>Product List</Link>
           <h2>My Cart</h2>
        </div>
        {props.cart.map((book,index) =>(
            <div key={index} className="product">
            <div className="img-area">
                <img src={book.image} width="100px"/>
            </div>
            <div className="product-info">
                <h1>{book.name}</h1>
                <h3>{book.author}</h3>
                <h3>{book.price}</h3>
                <button>Remove to Cart</button>
            </div>
        </div>
        ))}
            </>
    )
}





const mapStateToProps = state =>{
    return {
      bookList: state.bookList,
      cart: state.cart
    }
}


export default connect(mapStateToProps)(Cart);