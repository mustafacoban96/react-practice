import { useState } from 'react';
import './App.css';
import { ProductList } from './ProdcutList';
import { ProductContext } from './contexts/ProductContext';
import { BucketList } from './BucketList';


const data = [

  {id:1,pName:"IPhone12",price:14000},
  {id:2,pName:"Galaxy S20",price:6500},
  {id:3,pName:"Huawei P40",price:10000},
]



function App() {
  const [products,setProduct] = useState(data);
  const [bucket,setBukcet] = useState([]);

  const addProductHandler = (product) =>{
    setBukcet((bucket) => [...bucket,product])
  }

  const emptyBucket = () =>{
    setBukcet([]);
  }




  return (
    <ProductContext.Provider value={{products,addProductHandler,bucket,emptyBucket}}>
      <div className="App">
        <h1>Products</h1>
        <ProductList/>
        <h1>Bucket</h1>
        <BucketList/>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
