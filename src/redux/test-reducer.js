const COUNT_PLUS = 'counter/incremented'
const COUNT_MINUS = 'counter/decremented'

let initialState = {
    value: 0
}


function testReducer(state = initialState, action) {
    switch (action.type) {
        case 'counter/incremented':
            return {
                ...state,
                value: state.value + action.value
            }
        case 'counter/decremented':
            return {
                ...state,
                value: state.value - action.value
            }
        default:
            return state
    }
}


export const testINAC = (value) => {
    return {
        type: COUNT_PLUS,
        value:value
    }
}

export const testDEAC = (value) => {
    return {
        type: COUNT_MINUS,
        value:value
    }
}


export default testReducer