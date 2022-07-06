import instance from '../index'
export function getDetail(data) {
    return instance({
        method: "GET",
        url: `/playlist/detail?id=${data}`
    })
}
export function getMusicItemList(data) {
    return instance({
        method: "GET",
        url: `/playlist/track/all?id=${data}&limit=20&offset=0`
    })
}
export function getMusicLyric(data) {
    return instance({
        method: "GET",
        url: `/lyric?id=${data}`
    })
}

