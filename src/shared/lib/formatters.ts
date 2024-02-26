export const formatAMPM = (date: Date): string => {
    let hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12

    const formattedHours = hours ? hours : 12 // the hour '0' should be '12'
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
    const strTime = formattedHours + ':' + formattedMinutes + ' ' + ampm

    return strTime
}
