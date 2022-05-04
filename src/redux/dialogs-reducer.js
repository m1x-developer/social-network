const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    userName: [
        {id: 1, name: "Max"},
        {id: 2, name: "Nikita"},
        {id: 3, name: "sasha"},
        {id: 4, name: "kirill"}
    ],
    textPost: [
        {id: 1, text: "bla"},
        {id: 2, text: "bla bla "},
    ],
    newMessageBody: ""
    
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY :
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE :
            let body = state.newMessageBody
            state.newMessageBody = action.body = ''
            state.textPost.push({id: 5, text: body})
            return state
        default :
            return state
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}
export default dialogsReducer