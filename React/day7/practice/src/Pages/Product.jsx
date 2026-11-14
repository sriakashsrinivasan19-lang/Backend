import { useParams } from "react-router-dom"

const Product = () => {
  
    const productItems = [{ productName: "Laptop", productPrice:20000},
                    { productName: "Laptop", productPrice:20000},
                    { productName: "Laptop", productPrice:20000},
                    { productName: "Laptop", productPrice:20000},
                    { productName: "Laptop", productPrice:20000}]
        let copy = [...productItems]

        const{userId} = useParams();
        
        copy= copy.find((e,i)=>i==userId)
        console.log(copy);
    return (

    <>
   
   <h1>{userId}</h1>
    <p>{copy.productName}</p>
    <p>{copy.productPrice}</p>
    </>

)
}

export default Product