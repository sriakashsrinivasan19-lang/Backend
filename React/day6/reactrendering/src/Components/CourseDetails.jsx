
const CourseDetails = () => {
 
    const course = "Full Stack MERN";
    const trainerName = "BalaMugund";
    const duration = "6Months";
    const fees = "₹40000";
 
    return (


    <>
    <div className=" w-50 h-50 flex justify-center items-center mx-150 my-20 border shadow-2xl text-center  ">
        <div>
            <h2 className="font-bold text-2xl mb-5"> Course Details...</h2>
            <h1>{course}</h1>
            <h1>{trainerName}</h1>
            <h1>{duration}</h1>
            <h1>{fees}</h1>
        </div>
    </div>
  
    
    </>

)
}

export default CourseDetails