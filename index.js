// defining constants
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER = "ADD_USER"

// state
const initialState = {
    count: 0
}

const initialUser = {
    users: [{ name: "sadik hossain" }]
}

// action
const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}

const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}

const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: "Shakil" }
    }
}