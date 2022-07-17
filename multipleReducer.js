const { createStore, combineReducers } = require("redux")

// products constant
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'

// cart constant
const GET_CART_ITEMS = 'GET_CART_ITEMS'
const ADD_CART_ITEM = 'ADD_CART_ITEM'

// products initial state
const initialProductState = {
    products: ['sugar', 'salt'],
    numberOfProducts: 2,
}

// carts initial state
const initialCartState = {
    cart: ['sugar'],
    numberOfProducts: 1
}

// products action
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}

const addProducts = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

// cart actions
const getCart = () => {
    return {
        type: GET_CART_ITEMS
    }
}

const addCart = (product) => {
    return {
        type: ADD_CART_ITEM,
        payload: product
    }
}

// product reducer
const productsReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            };
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            };
        default:
            return state;
    }
}

// cart reducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            }
        case ADD_CART_ITEM:
            return {
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    productR: productsReducer,
    cartR: cartReducer,
})

// store
// const store = createStore(productsReducer)
// const store = createStore(cartReducer)
const store = createStore(rootReducer)

// subscribe 
store.subscribe(() => {
    console.log(store.getState());
})

// dispatch
store.dispatch(getProducts())
store.dispatch(addProducts('pen'))

store.dispatch(getCart())
store.dispatch(addCart('pen'))