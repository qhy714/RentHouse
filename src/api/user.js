
import request from '@/util/request'
import store from '@/store'

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
        method: 'POST',

    })
}

// 房屋管理
export const houseresourse = () => {
    return request({
        url: 'user/houses',
        header: {
            Authorization: store.state.user.token
        }
    })
}
// 收藏列表
export const housefavorites = () => {
    return request({
        url: 'user/favorites',
        header: {
            Authorization: store.state.user.token
        }
    })
}