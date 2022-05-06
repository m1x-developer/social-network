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
        
        case UPDATE_NEW_MESSAGE_BODY : {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        
        case SEND_MESSAGE :
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                textPost: [...state.textPost, {id: 5, text: body}],
            }
        
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