import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, toggleAvailability, editProduct, updateProduct } from "../store/productSlice";
import EditProduct from "./EditProduct";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  console.log("products: ", products);
  const dispatch = useDispatch();

  return (
    <div >
      <h2 style={{paddingTop: '24px'}}>Product List</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li style={{backgroundColor: '#f4f5fa', border: '1px solid lightblue', borderRadius: '10%', padding: '32px', margin: '10px', width: '240px'}} key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Available: {product.available ? "Yes" : "No"}</p>
              <button style={{backgroundColor: 'red', borderRadius: '7px', padding: '5px'}} onClick={() => dispatch(deleteProduct(product.id))}>
                Delete
              </button>
              <br></br>
              <button style={{backgroundColor: 'lightblue', borderRadius: '7px', padding: '5px'}} onClick={() => dispatch(toggleAvailability(product.id))}>
                Toggle Availability
              </button>
              <EditProduct onChange={() => dispatch(updateProduct(product.id))} product={product}/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
