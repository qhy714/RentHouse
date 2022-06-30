
import request from '@/util/request'

export const login = ({ username, password }) => {
    return request({
        method: 'POST',
        url: '/user/login',
        data: {
            username,
            password
        }
    })
}
export const getUserInfo = () => {
    return request({
        url: 'user',
        // headers: {
        //     Authorization: store.state.user
        // }
    })
}

export const logout = () => {
    return request({
        url: 'user/logout',
        method:'POST',

    })
}