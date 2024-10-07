import request from "./request";
import { LoginData } from "./schemas/auth"
export function login(data: LoginData) {
    return request({
        url: '/MemberShip/Login',
        method: 'post',
        data
    })
}
