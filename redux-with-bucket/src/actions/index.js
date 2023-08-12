// action creator


export const addToCart = book =>{
    return {type:'ADD_TO_CART',payload: book}
};

// addToCart func dispatch inside reducer ->>>> reducer