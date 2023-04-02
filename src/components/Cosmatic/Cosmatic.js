import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
const Cosmatic = (props) => {

    const {name,price,id}=props.cosmatic;
    const addToCart=(id)=>{
  addToDb(id);

    }
    
    const removeFromCart = id => {
    removeFromDb(id);

    }


// const addToCartWithParam =()=>addToCart(id)

    return (
        <div style={{border:'2px solid red', padding:'10px', margin:'10px'}}>
          <h2>Buy This :{name}</h2>
          <p>Only for:${price}</p>
       <p><small>Id :{id}</small></p>

       {/* <button onClick={addToCartWithParam}>Add to Cart : system 1 optional</button> */}


{/* : system 2 allways use this system */}
       <button onClick={()=>addToCart(id)}>Add to Cart </button>
       <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmatic;