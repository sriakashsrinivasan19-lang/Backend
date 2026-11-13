
const ArrayRendering = () => {
 
    const studentList = ["sriakash", "bhuvi", "Dhana", "Abi", "Praveen"]
 

 
    return (

    <>
    
    {studentList.map((e,i)=>(
        <div className="mx-150 my-2 text-center w-20  border">
            <li key={i}>{e}</li>
        </div>
    ))}

    </>

)
}

export default ArrayRendering