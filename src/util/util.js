export const limitRecentList = (array, count) => {
    let sortedArray = [...array]
    return sortedArray
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, count)
}

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
