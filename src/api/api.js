import axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY":"b670215c-ddc3-47bc-b6a2-e3183e8a3d81"
    }
})




export const usersAPI= {
    getUsers (pageNumber,pageSize){
        return instance.get(baseUrl+`users?page=${ pageNumber }&count=${pageSize }`,
        )
            .then(response => {
                return response.data
            })
    }
}


