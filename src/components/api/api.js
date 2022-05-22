import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b670215c-ddc3-47bc-b6a2-e3183e8a3d81"
    }
})


export const usersAPI = {
    getUsers(pageNumber, pageSize) {
        return instance.get(`users?page=${ pageNumber }&count=${ pageSize }`,
        )
            .then(response => {
                return response.data
            })
    },
    
    follow(userid) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${ userid }`)
    },
    unfollow(userid) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${ userid }`,)
    }
}


