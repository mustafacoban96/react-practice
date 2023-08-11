
export const Product = ({product}) => {
   
    
   
    return(
        
        <div className="product">
           <h3 className="product-title">{product.pName}</h3>
           <h5 className="product-price">{product.price}</h5>
           <button>Sepete Ekle</button>
        </div>
        
        
    )
}