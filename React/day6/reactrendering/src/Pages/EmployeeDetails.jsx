
const EmployeeDetails = () => {
  
    const employeeName = "Sriakash";
    const employeeId = 6339;
    const employeeDesignation = "MernStack";
    const employeeSalary = 40000;
    const employeeCompony = "ZOHO";
  
  
  return (


    <>
    <div className="flex justify-center items-center my-50"> 
      <div className="w-60 h-60 border shadow-2xl text-center  ">
      <h2>{`Employee ID: ${employeeId}`}</h2>
      <h1>{`Name: ${employeeName}`}</h1>
      <h3>{`Designation: ${employeeDesignation}`}</h3>
      <h4>{`Salary: ${employeeSalary}`}</h4>
      <p>{`Company: ${employeeCompony}`}</p>
    </div>
    </div>
 
    
    </>

)
}

export default EmployeeDetails