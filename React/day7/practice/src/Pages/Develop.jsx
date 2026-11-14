import { useState } from "react"

const Develop = () => {
  
  const [change,setChange] = useState(0)
  
    const handleIncreament=()=>{
      setChange(change+1);
  }

   const handleDecreament=()=>{
      setChange(change-1);
  }

   const handleReset=()=>{
      setChange(0);
  }
  

  return (

    <>

    <h1 className="text-3xl flex justify-center items-center mt-50">{change}</h1>
    <div className="flex gap-20 justify-center items-center my-20 ">
        <button onClick={handleIncreament} className="bg-black text-white p-1 w-30 rounded">Increament</button>
        <button  onClick={handleDecreament} className="bg-black text-white p-1 w-30 rounded">Decrement</button>
        <button  onClick={handleReset} className="bg-black text-white p-1 w-30 rounded">Reset</button>
    </div>
  
    
    </>

  )
}

export default Develop