import { useState } from "react";

const Update = () => {
  
  const [change,setChange] = useState("React");
  
  const handleChange = ()=>{
    setChange("Node");
  }

    return (


    <>
    
    <h1 className="mx-155 mt-50 my-5">{change}</h1>
    <button onClick={handleChange} className="bg-black text-white text-2xl p-1 rounded mx-140 ">click To Change</button>
    
    </>
)
}

export default Update