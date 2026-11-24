import React, { useEffect, useState } from 'react'

const Fetch = () => {
  
   

    const [productList, setProductList] = useState([])

    

        const fetchProducts = async () => {

            try {
                const response = await fetch(
                    "https://dummyjson.com/products?limit=3"
                )

                const productData = await response.json()

                setProductList(productData.products)

            }
            catch (error) {
                console.log(error)
            }

        }
    useEffect(() => {
        fetchProducts()

    }, [])


    return (
        <>

           
         <h2 className='text-3xl text-center mt-10'>Product List</h2>
            <div className="flex justify-between items-center w-300  h-100 gap-4">
                
                {productList.map((e) => (

                    <div key={e.id} className="border w-70 h-50 flex flex-col items-center text-xl p-4">

                        <img
                            src={e.title}
                            alt={e.category}
                            className="w-32"
                        />

                        <h3>{e.title}</h3>

                        <p>Price: ${e.price}</p>

                    </div>

                ))}

            </div>

        </>
    )
}




export default Fetch