import { useContext } from "react"
import { ProductContext } from "./contexts/ProductContext"

export const Product = ({product}) => {
    const context = useContext(ProductContext);
   
    return(
        
        <div className="product">
           <h3 className="product-title">{product.pName}</h3>
           <h5 className="product-price">{product.price}</h5>
           <button onClick={() => context.addProductHandler(product)}>Sepete Ekle</button>
        </div>
        
        
    )
}