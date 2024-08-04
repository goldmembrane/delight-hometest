/** data 목록을 timestamp 기준 최근순으로 정렬하고 count만큼 개수를 한정, 가공하는 함수 */
export const limitRecentList = (array, count) => {
    let sortedArray = [...array]
    return sortedArray
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, count)
}

/** 주어진 timestamp 형식을 시간 + (AM,PM)이 포함된 time format으로 가공하는 함수 */
export const formatTime = (date) => {
    let dateFormat = new Date(date)

    let time = dateFormat.getHours()
    let minute = dateFormat.getMinutes()

    if (time >= 12) {
        return `${time % 12}.${minute} PM`
    } else {
        return `${time}.${minute} AM`
    }
}

/** 주어진 timestamp 형식을 월(MM) + 일(DD) + 년(YYYY) format으로 가공하는 함수 */
export const formatDate = (date, type) => {
    let dateFormat = new Date(date)

    let month = dateFormat.getMonth() + 1
    let day = dateFormat.getDate()
    let year = dateFormat.getFullYear()

    if (type === 'week') {
        return `${month} ${day}, ${year}`
    } else if (type === 'month') {
        return `${month - 1} ${day} - ${month} ${day}, ${year}`
    } else {
        return ''
    }
}
