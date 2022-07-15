const { createStore } = require("redux")

// products constant
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'

// initial state
const initialProductState = {
    products: ['sugar', 'salt'],
    numberOfProducts: 2,
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
            state;
    }
}

// store
const store = createStore(productsReducer)

// subscribe 
store.subscribe(() => {
    console.log(store.getState());
})

// dispatch
store.dispatch(getProducts())
store.dispatch(addProducts('pen'))