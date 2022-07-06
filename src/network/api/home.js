import instance from ".."
export function getBanners() {
    return instance({
        method: "GET",
        url: '/banner?type=2'
    })
}
//获取发现好歌单
export function getMusicList() {
    return instance({
        method: "GET",
        url: "/personalized?limit=10"
    })
}
