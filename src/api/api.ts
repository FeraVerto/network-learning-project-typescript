import axios from "axios";

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

    getUsersPhoto() {
        return instance.get(`/profile/photo`).then(response => response.data)
    },

    getUser(userId: string) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },

    follow(id: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    },

    unfollow(id: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    }
}

export const authAPI = {
    me () {
        return instance.get('auth/me')
    }
}
