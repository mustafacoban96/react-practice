



export const Bucket = ({product}) => {
    
    

    return (
        <div className="product">
          <p>{product?.pName}</p>
          <p>{product?.price}</p>
        </div>
    )
}