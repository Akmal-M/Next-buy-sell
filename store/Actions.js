export const ACTIONS = {
    NOTIFY: 'NOTIFY',
    AUTH: 'AUTH',
    ADD_CART: 'ADD_CART',
    ADD_MODAL: 'ADD_MODAL',
    ADD_USERS: 'ADD_USERS',
    ADD_CATEGORIES: 'ADD_CATEGORIES',
}

export const addToCart = (product, cart) => {


    const check = cart.every(item => {
        return item._id !== product._id
    })

    if(!check) return ({ type: 'NOTIFY', payload: {error: 'The product has been added to cart.'} })

    return ({ type: 'ADD_CART', payload: [...cart, {...product, quantity: 1}] })
}




export const deleteItem = (data, id, type) => {
    const newData = data.filter(item => item._id !== id)
    return ({ type, payload: newData})
}

export const updateItem = (data, id, post, type) => {
    const newData = data.map(item => (item._id === id ? post : item))
    return ({ type, payload: newData})
}