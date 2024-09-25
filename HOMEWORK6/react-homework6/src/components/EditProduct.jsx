import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { editProduct } from "../store/productSlice";

function EditProduct({ product }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState(true);  
    const [formVisible, setFormVisible] = useState(false);  

    const dispatch = useDispatch();

    useEffect(() => {
        if (product) {
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setAvailable(product.available);
        }
    }, [product]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
          editProduct({ id: product.id, name, description, price: parseFloat(price), available }),
        );
        setFormVisible(false); 
    };

    const toggleFormVisibility = () => {
        setFormVisible(!formVisible);
    }  
    
    return ( 
        <div>
            <button style={{backgroundColor: 'lightgreen', borderRadius: '7px', padding: '5px'}} onClick={toggleFormVisibility}>Edit</button>
            {formVisible && (
                <form onSubmit={handleSubmit}>
                <p style={{color: 'red'}}>Отредактируйте имеющиеся данные продукта и нажмите Save для применения изменений</p>
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  &nbsp;&nbsp;
                  <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                  <br></br>
                  <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                  <br></br>
                  <label>
                    Available:
                    <input
                      type="checkbox"
                      checked={available}
                      onChange={(e) => setAvailable(e.target.checked)}
                    />
                  </label>
                  <br></br>
                  <button style={{backgroundColor: 'yellow', borderRadius: '7px', padding: '5px'}} type="submit">Save</button>
                </form>
            )}
        </div>
    );
}

export default EditProduct;