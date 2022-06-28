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