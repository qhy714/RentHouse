import request from '@/util/request'
// 去出租
export const getHousesParams = () => {
    return request({
        url: 'houses/params'
    })
}


// 找房相关接口
export const findHouseInfo = () => {
    return request({
        url: '/houses'
    })
}