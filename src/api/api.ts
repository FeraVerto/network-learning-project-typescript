import axios from "axios";
import {FormDataType} from "../components/Login/Login";

let instance = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "175e24f1-c22d-463c-ba2f-3d45c5594942"
    }

})

export const usersAPI = {
    getUsers(currentPage: string | number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    getUsersPage(pageNumber: string | number, pageSize: number) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data)
    },

    getProfile(userId: string) {
        console.warn("Obsolete method. Please profileAPI object")
        return profileAPI.getProfile(userId)
    },

    follow(id: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    },

    unfollow(id: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        console.warn("Obsolete method. Please profileAPI object")
        return instance.get(`profile/${userId}`).then(response => response.data)
    },

    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },

    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },

    login(email: string, password: string, rememberMe: boolean, captcha?: boolean) {
        return instance.post('/auth/login', {email, password, rememberMe, captcha})
    },

    logout() {
        return instance.delete('/auth/login')
    }
}
