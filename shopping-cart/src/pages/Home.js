import React from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import { connect } from "react-redux";

export const Home  = (props) =>{
    console.log(props.productList)

    return (
        <div className="home-page">
            <div className="prod">
                <div className="home-product-container">
                    <img src="images/item1.jpg"/>
                    <p className="product-title">Winter Body</p>
                    <button className=""><AiOutlinePlus style={{fontSize:"1.2rem",marginTop:"5px"}}/></button>
                </div>
                <div className="product-info">
                        <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.</p>
                        <h3 className="price">Price: 110$</h3>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        productList:state.items,
        cart: state.addedItems,
    }
}


export default connect(mapStateToProps)(Home)