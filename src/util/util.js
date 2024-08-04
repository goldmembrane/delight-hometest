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
