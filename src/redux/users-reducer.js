const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {
        //     id: 1,
        //     fullName: 'Maks',
        //     photoUrl:'https://abrakadabra.fun/uploads/posts/2021-12/1640528661_1-abrakadabra-fun-p-serii-chelovek-na-avu-1.png',
        //     status: 'test status 1',
        //     location: {city: 'Tula', country: 'Russia'},
        //     followed: false
        // },
        // {
        //     id: 2,
        //     fullName: 'Maks',
        //     photoUrl:'https://abrakadabra.fun/uploads/posts/2021-12/1640528661_1-abrakadabra-fun-p-serii-chelovek-na-avu-1.png',
        //     status: 'test status 2',
        //     location: {city: 'Moscow', country: 'Russia'},
        //     followed: true
        // },
        // {
        //     id: 3,
        //     fullName: 'Maks',
        //     photoUrl:'https://abrakadabra.fun/uploads/posts/2021-12/1640528661_1-abrakadabra-fun-p-serii-chelovek-na-avu-1.png',
        //     status: 'test status 3',
        //     location: {city: 'NY', country: 'USA'},
        //     followed: false
        // },
    ],
    
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}


export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}


export default usersReducer