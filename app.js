// state - count: 0
// action - increment, decrement, reset
// reducer
// store
// dispatch

const { createStore } = require('redux')

// Constant Variable
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"
const ADD_USER = "ADD_USER"

const initialState = {
    count: 1,
    users: ['sadik']
}

const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

// const incrementCounterAction = () => {
//     return {
//         type: INCREMENT
//     }
// }

// const decrementCounterAction = () => {
//     return {
//         type: DECREMENT
//     }
// }

// const resetCounterAction = () => {
//     return {
//         type: RESET
//     }
// }

// const incrementCounterByValue = (value) => {
//     return {
//         type: INCREMENT_BY_VALUE,
//         payload: value
//     }
// }

// create reducer for counter
// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state,
//                 count: state.count + 1
//             }
//         case DECREMENT:
//             return {
//                 ...state,
//                 count: state.count - 1
//             }
//         case RESET:
//             return {
//                 ...state,
//                 count: 0
//             }
//         case INCREMENT_BY_VALUE:
//             return {
//                 ...state,
//                 count: state.count + action.payload
//             }

//         default:
//             state;
//     }
// }

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                count: state.count + 1,
                users: [...state.users, action.payload]
            }

        default:
            state;
    }
}

// store
// const store = createStore(counterReducer)
const store = createStore(userReducer)

store.subscribe(() => {
    console.log(store.getState());
})

// dispatch
// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(decrementCounterAction())
// store.dispatch(resetCounterAction())
// store.dispatch(incrementCounterByValue(5))
// store.dispatch(incrementCounterByValue(10))
store.dispatch(addUser("sabbir"))
store.dispatch(addUser("tamim"))