
// use local storage to manage cart data
const addToDb = id =>{
    let shoppingCart ={};

// get the shopping cart from the local storage

const storeCart = localStorage.getItem('shopping-cart')
if(storeCart){
shoppingCart = JSON.parse(storeCart)
}
else{
    shoppingCart ={}
}
    const quantity = shoppingCart[id];
    if(quantity){
const newQuantity = parseInt(quantity)+1;
shoppingCart[id] = newQuantity;
    }
    else{
shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}


const removeFromDb = id =>{
const  storedCart = localStorage.getItem('shopping-cart');
if(storedCart){
    const shoppingCart =JSON.parse(storedCart);
if(id in shoppingCart){
delete shoppingCart[id];
localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));


}
}

}

export {addToDb, removeFromDb}