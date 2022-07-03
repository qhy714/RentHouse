import request from '@/util/request'

export const swipper = () => {
    return request({
        url: 'home/swiper'
    })
}
export const groups = () => {
    return request({
        url: '/home/groups'
    })
}
export const getCityList = () => {
    return request({
        url: "/area/city",
        params: {
            level: 1
        }
    })
}
