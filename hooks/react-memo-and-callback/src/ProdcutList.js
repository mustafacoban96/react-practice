import { useContext } from "react"
import { Product } from "./Product"
import {ProductContext} from './contexts/ProductContext'



export const ProductList = () => {

    const context = useContext(ProductContext);
    

    return(
        <div className="product-list">
            {context.products.map((product) =>(
                <Product key={product.id} product={product}/>
            ))}
             
        </div>
    )
}