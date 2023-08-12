import { Link } from "react-router-dom";



const Product = () =>{



    return (
        <>
        <div className="header">
           <h2>Kitap listesi</h2>
            <Link to="/cart" style={{textDecoration:"none", fontSize:"1.3rem" }}>My Cart</Link>
        </div>
         <div class="product">
                <div className="img-area">
                    <img src='https://i.dr.com.tr/cache/500x400-0/originals/0000000064552-1.jpg' width="150px"/>
                </div>
                <div className="product-info">
                    <h1>Simyacı</h1>
                    <h3>Yazar: Paulo Coelho</h3>
                    <h3>Price: $ 19.99</h3>
                    <button>Add to Cart</button>
                </div>
        </div>
            </>
    )
}

export default Product;