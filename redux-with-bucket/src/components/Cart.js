import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { increaseProduct,decreaseProduct,removeProductFromCart } from "../actions";

const Cart = (props) =>{
    //const totalPrice = props.cart.reduce((total ,item) => (total += item.price),0);
    

    return (
        <>
        <div className="header">
            <Link to="/" style={{textDecoration:"none", fontSize:"1.3rem" }}>Product List</Link>
           <h2>My Cart</h2>
        </div>
        <h2>Total Price: {props.totalPrice.toFixed(2)}</h2>
        {props.cart.length > 0 ? props.cart.map((book) =>(
            
            <div key={book.id} className="product">
               
            <div className="img-area">
                <img src={book.image} width="100px"/>
            </div>
            <div className="product-info">
                <h1>{book.name}</h1>
                <h3>Author: {book.author}</h3>
                <h3>Price: {book.price}</h3>
                <h4>Pieces: {book.pieces}</h4>
                <button onClick={() => props.increaseProduct(book.id)}>+</button> 
                <button onClick={() => props.removeProductFromCart(book.id)}>Remove to Cart</button>
                <button onClick={() => props.decreaseProduct(book.id)}>-</button>
            </div>
            
            
        </div>
        )) : <div>Cart is empty</div>}
            </>
    )
}

const mapStateToProps = state =>{
    return {
      cart: state.cart,
      totalPrice:state.totalPrice
    }
}

const mapActionToProps = {increaseProduct,decreaseProduct,removeProductFromCart}

export default connect(mapStateToProps,mapActionToProps)(Cart);