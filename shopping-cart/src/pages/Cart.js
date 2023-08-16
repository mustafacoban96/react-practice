import { AiFillCaretDown,AiFillCaretUp } from "react-icons/ai";
import { connect } from "react-redux";

const Cart = (props) =>{
    console.log(props.cart);
    console.log(props.totalPrice)


    return (
        
        
        <div className="cart-page">
            <div className="cart-page-body">
                <div className="cart-content">
                    <div style={{display:'flex', alignContent:'center', justifyContent:'space-between'}}>
                        <h3 style={{fontSize:"1.5rem",fontWeight:"500",letterSpacing:'3px'}}>You have oredered</h3>
                        <h3 style={{fontSize:"1.2rem",fontWeight:"500",letterSpacing:'3px'}}>Total: 2233$</h3>
                    </div>
                    <div className="cart-content-inside">
                        <img src="images/item1.jpg"/>
                        <div className="cart-process">
                            <h3 style={{color:'#FF033E',fontSize:'1.2rem'}}>Winter body</h3>
                            <div>
                                <p style={{marginTop:'6px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.</p>
                                <h4 style={{marginTop:'6px'}}>Price: 45$</h4>
                                <h4 style={{marginTop:'6px'}}>Quantity: 2</h4>
                            </div>
                            <div className="up-down-area">
                                <button className="up-down-btn"><AiFillCaretDown/></button>
                                <button className="up-down-btn"><AiFillCaretUp/></button>
                            </div>
                            <button className="remove-btn">Remove</button>
                        </div>
                    </div>                    
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

export default connect(mapStateToProps)(Cart);