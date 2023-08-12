import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../actions";



const Product = (props) =>{
console.log(props)

    return (
        <>
        <div className="header">
           <h2>Product List</h2>
            <Link to="/cart" style={{textDecoration:"none", fontSize:"1.3rem" }}>My Cart</Link>
        </div>
        {props.bookList.map((book,index) =>(
            <div key={index} className="product">
            <div className="img-area">
                <img src={book.image} width="100px"/>
            </div>
            <div className="product-info">
                <h1>{book.name}</h1>
                <h3>{book.author}</h3>
                <h3>{book.price}</h3>
                <button onClick={() => props.addToCart(book)}>Add to Cart</button>
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

const mapActionToProps = {addToCart}

// i import add to cart func, we can't use addToCart func directly ,so
// we mapped the funct via connect.

export default connect(mapStateToProps,mapActionToProps)(Product);