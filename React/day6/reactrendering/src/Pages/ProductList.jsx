
const ProductList = () => {
 
 const product = {Id: 6339, Name: "Acer Laptop", Price:20000, Brand: "Acer", Catogory: "Electronics" }
 

  return (

    <>
    
    <div>
      <p>{product.Id}</p>
      <p>{product.Name}</p>
      <p>{product.Price}</p>
      <p>{product.Brand}</p>
      <p>{product.Catogory}</p>
      <p>{product.Price * 0.9}</p>
    </div>

    </>

);
}

export default ProductList