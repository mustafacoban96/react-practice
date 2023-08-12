import { Link } from "react-router-dom";
import { connect } from "react-redux";



const Product = (props) =>{
console.log(props.bookList)

    return (
        <>
        <div className="header">
           <h2>Kitap listesi</h2>
            <Link to="/cart" style={{textDecoration:"none", fontSize:"1.3rem" }}>My Cart</Link>
        </div>
        {props.bookList.map(book =>(
            <div class="product">
            <div className="img-area">
                <img src={book.image} width="100px"/>
            </div>
            <div className="product-info">
                <h1>{book.name}</h1>
                <h3>{book.author}</h3>
                <h3>{book.price}</h3>
                <button>Add to Cart</button>
            </div>
        </div>
        ))}
            </>
    )
}


const mapStateToProps = state =>{
    return {
      bookList: state.bookList
    }
}



export default connect(mapStateToProps)(Product);