import request from "./request";
import { LoginData } from "./schemas/auth"
export function login(data: LoginData) {
    return request({
        url: '/MemberShip/Login',
        method: 'post',
        data
    })
}

export function getUserInfo() {
    return request({
        url: '/MemberShip/GetCurrentStudentInfo',
        method: 'get'
    })
}