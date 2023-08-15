import React from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import { connect } from "react-redux";

const Home  = (props) =>{
    console.log(props.productList);

    return (
        <div className="home-page">
            {props.productList.map((product)=>(
                <div key={product.id} className="prod">
                <div className="home-product-container">
                    <img src={product.img}/>
                    <p className="product-title">{product.title}</p>
                    <button className="add-button"><AiOutlinePlus style={{fontSize:"1.2rem",marginTop:"5px"}}/></button>
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
        cart: state.addedItems,
    }
}


export default connect(mapStateToProps)(Home);