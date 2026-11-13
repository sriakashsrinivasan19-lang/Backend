import { useState } from "react"

const ArrayProcess = () => {
  
  
    const  [arr,setArr]= useState([20,30,40,50])

    const handleClick=(()=>{
        const copy=[...arr]
        copy.push(98)
        setArr(copy);
    })

  
  
    return (

    
    <>
        <div className="flex justify-center ">
            {arr.map((e,i)=>(
            <h2 key={i}>{e}</h2>
            ))}
        </div>
       

        <div className="flex justify-evenly my-70">
            <button className="bg-black text-white p-1 rounded" onClick={handleClick}>Click to Add</button>
            {/* <button className="bg-black text-white p-1 rounded" onClick={handleUpdate}>Click to Update</button>
            <button className="bg-black text-white p-1 rounded" onClick={handleDelete}>Click to Delete</button> */}
        </div>
       

    </>

)
}

export default ArrayProcess