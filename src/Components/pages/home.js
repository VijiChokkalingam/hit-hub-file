import React,{useEffect,useState} from "react";
import HorizontalCard from "../shared/horizontalCard";

function Home(){
const [products,setProducts] = useState([]);
useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[]);


    // const [count,setCount] = useState(0);
    // const [count1,setCount1] = useState(0);
    // // useEffect (callBack,DependencyList)
    // useEffect(countValue,[count]);

    // function countValue(){
    //     console.log(count);
    // }
    return(
        <div className="row">
            {products.map((product,i)=>(
            <HorizontalCard product={product}/>
            ))}
           



          {/* <h1>{count}</h1>
    //       <button onClick={()=>setCount(count + 1)}>Increase Count</button>
    //       <h1>{count1}</h1>
    //       <button onClick={()=>setCount1(count1 + 1)}>Increase Count1</button> */}
        </div>
    );
}
export default Home;  