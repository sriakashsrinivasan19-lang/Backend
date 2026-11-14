import { useNavigate } from "react-router-dom";

const ProductList = () => {
  
  const productItems = [{ productName: "Laptop", productPrice:20000},
                    { productName: "Laptop", productPrice:20000},
                    { productName: "Laptop", productPrice:20000},
                    { productName: "Laptop", productPrice:20000},
                    { productName: "Laptop", productPrice:20000}]
    const copy = [...productItems];
  
    const navigate = useNavigate()
  
    const handleClick = (userId)=>{

        navigate(`/product/${userId}`)

    }
    return (
  
        <>

            <div className="bg-blue-200 flex h-100 justify-between items-center">
              {copy.map((e,i)=>(
                <div key={i} className="flex flex-col bg-amber-50 w-30 h-30 text-center ">
                    <h1>{e.productName}</h1>
                    <p>{e.productPrice}</p>
                    <button onClick={ ()=>handleClick(i)} className="bg-black text-white w-30 flex justify-center item-center rounded-xl mt-5">buy</button>
                </div>
                
              ))}
            </div>

        </>

)
}

export default ProductList