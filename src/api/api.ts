import axios from "axios";
import {FormDataType} from "../components/Login/Login";
import {ProfileType} from "../components/Profile/ProfileContainer";

let instance = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "60b88672-b40f-4a98-87f4-2eaf9580a4aa"
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
    },

    savePhoto(photo: string) {
        const formData = new FormData()
        formData.append("image", photo)
        return instance.put(`/profile/photo`, formData,{headers: {'Content-Type': 'multipart/form-data'}})
    },

    updateProfile(dataForm: ProfileType) {
        console.log("updateProfile", dataForm)
        return instance.put(`/profile`, dataForm)
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
