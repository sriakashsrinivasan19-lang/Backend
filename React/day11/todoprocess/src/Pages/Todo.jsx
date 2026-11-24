import { useState } from "react"

const Todo = () => {
  
    const [show,setShow]=useState()
        let copy = {...show}
    const handleChange= ()=>{
        
        setShow(copy)
    }
    console.log(copy);
    
  
    return (

    <>
    
    <div>
        <input type="text" onChange={handleChange} className="border w-60 mx-15 mt-20" />
        <button className="border w-20 rounded ">Add Task</button>
    </div>

    
    
    </>


)
}

export default Todo