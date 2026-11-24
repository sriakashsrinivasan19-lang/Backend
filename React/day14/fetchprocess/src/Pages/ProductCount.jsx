import React, { useEffect, useState } from 'react'

const ProductCount = () => {
    const [showDatas, setShowDatas] = useState([])

   

        const loadProducts = async () => {

            try {

                const response = await fetch(
                    "https://dummyjson.com/products?limit=3"
                )

                const productResult = await response.json()

                setShowDatas(productResult.products)

            }
            catch (error) {
                console.log(error)
            }

        }
    useEffect(() => {
        loadProducts()

    }, [])


    return (
        <>

            <h2>Product List</h2>

            <h3>Total Products: {showDatas.length}</h3>

            {showDatas.map((item) => (

                <div key={item.id} className="border p-3 my-3">

                    <h3>{item.title}</h3>

                    <p>Price: ${item.price}</p>

                </div>

            ))}

        </>
    )

}

export default ProductCount