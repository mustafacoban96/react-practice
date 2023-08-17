import React from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import { connect } from "react-redux";
import { addToCart } from "../actions/cartAction";
import {toast}  from "react-toastify";




const Home  = (props) =>{

    const handleClick = (id) =>{
        props.addToCart(id);
        toast.success('Product is added to your cart!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });
    }


    return (
      
        <div className="home-page">
            
            {props.productList.map((product)=>(
                <div key={product.id} className="prod">
                <div className="home-product-container">
                    <img src={product.img}/>
                    <p className="product-title">{product.title}</p>
                    <button onClick={()=>handleClick(product.id)} className="add-button"><AiOutlinePlus style={{fontSize:"1.2rem",marginTop:"5px"}}/></button>
                    
                </div>
                <div className="product-info">
                        <p className="product-desc">{product.desc}</p>
                        <h3 className="price">Price: {product.price}$</h3>
                </div>
            </div>
                
            ))}
            
        </div>
        
    )
}

const mapStateToProps = state =>{
    return {
        productList:state.items,
        cart:state.addedItems,
        
    }
}

const mapDispatchToProps = {addToCart}



export default connect(mapStateToProps,mapDispatchToProps)(Home);