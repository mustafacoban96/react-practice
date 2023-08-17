import { AiFillCaretDown,AiFillCaretUp } from "react-icons/ai";
import { connect } from "react-redux";
import { removeFromCart,addQuantity } from "../actions/cartAction";

const Cart = (props) =>{
   console.log(props.cart)


    return (
        
        
        <div className="cart-page">
            <div className="cart-page-body">
                <div className="cart-content">
                    {props.cart.length ? (
                        <>
                            <div style={{display:'flex', alignContent:'center', justifyContent:'space-between'}}>
                            <h3 style={{fontSize:"1.5rem",fontWeight:"500",letterSpacing:'3px'}}>You have oredered</h3>
                            <h3 style={{fontSize:"1.2rem",fontWeight:"500",letterSpacing:'3px'}}>Total: {props.totalPrice}$</h3>
                        </div>
                        {props.cart.map((item) => (
                            <div key={item.id} className="cart-content-inside">
                            <img src={item.img}/>
                            <div className="cart-process">
                                <h3 style={{color:'#FF033E',fontSize:'1.2rem'}}>{item.title}</h3>
                                <div>
                                    <p style={{marginTop:'6px'}}>{item.desc}</p>
                                    <h4 style={{marginTop:'6px'}}>Price: {item.price}$</h4>
                                    <h4 style={{marginTop:'6px'}}>Quantity: {item.quantity}</h4>
                                </div>
                                <div className="up-down-area">
                                    <button className="up-down-btn"><AiFillCaretDown/></button>
                                    <button className="up-down-btn" onClick={() => props.addQuantity(item.id)}><AiFillCaretUp/></button>
                                </div>
                                <button className="remove-btn" onClick={() => props.removeFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                        ))}
                        </>
                    ) : (<h3 style={{textAlign:'center'}}>Nothing</h3>)}
                
                                        
                </div>
            </div>
            
        </div>
    )
}



const mapStateToProps = state =>{
    return {
        cart:state.addedItems,
        totalPrice:state.total
    }
}
const mapDispatchToProps = {removeFromCart,addQuantity}


export default connect(mapStateToProps,mapDispatchToProps)(Cart);