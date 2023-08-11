import { useContext } from "react"
import { ProductContext } from "./contexts/ProductContext"
import { Bucket } from "./Bucket";

export const BucketList = () =>{

    const context = useContext(ProductContext);
   //console.log(context.bucket)

    return (
        <>
        <button onClick={() => context.emptyBucket()}>empty bucket</button>
        <div className="product-list">
            {context.bucket.map((product,index) =>(
                <Bucket key={index} product={product}/>
            ))} 
        </div> 
        </>  
    )
    
}