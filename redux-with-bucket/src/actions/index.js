// action creator


export const addToCart = book =>{
    return {type:'ADD_TO_CART',payload: book}
};

export const increaseProduct = (id) =>{

    return {type:'INCREASE_PRODUCT',payload:id}
}

export const decreaseProduct = (id) =>{
    return {type:'DECREASE_PRODUCT', payload:id}
}

export const removeProductFromCart = (id) =>{
    return {type:'REMOVE_FROM_CART',payload:id}
}

// addToCart func dispatch inside reducer ->>>> reducer