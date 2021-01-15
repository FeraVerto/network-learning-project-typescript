import axios from "axios";

let instance = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "175e24f1-c22d-463c-ba2f-3d45c5594942"
    }

})

export const getUsers = (currentPage: string | number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}


export const getUsersPage = (pageNumber: number, pageSize: number) => {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data)
}

export const getUser = (userId: number) => {
    return instance.get(`profile/${userId}`).then(response => response.data)
}