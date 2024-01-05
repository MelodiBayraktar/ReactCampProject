export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
//magic string

export function addToCart(product){ //action yaptığında obje gönder
    return {
        type : ADD_TO_CART,     //action ismi
        payload : product ,    //actionla beraber state i etkileyecek şey
    }
}

export function removeFromCart(product){ //action yaptığında obje gönder
    return {
        type : REMOVE_FROM_CART,  //action ismi
        payload : product ,      //actionla beraber state i etkileyecek şey
    }
}