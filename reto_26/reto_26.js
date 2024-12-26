/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
function getCompleted(timeWorked, totalTime) {
    const [h, m, s] = timeWorked.split(':').map(Number)
    const timeWorkedSeconds = h * 3600 + m * 60 + s
    const [th, tm, ts] = totalTime.split(':').map(Number)
    const totalTimeSeconds = th * 3600 + tm * 60 + ts

    return Math.round(100 * timeWorkedSeconds / totalTimeSeconds).toString() + '%'
}

console.log(getCompleted('01:00:00', '03:00:00')) // 33%
console.log(getCompleted('02:00:00', '04:00:00')) // 50%
console.log(getCompleted('01:00:00', '01:00:00')) // 100%
console.log(getCompleted('00:10:00', '01:00:00')) // 17%
console.log(getCompleted('01:10:10', '03:30:30')) // 33%
console.log(getCompleted('03:30:30', '05:50:50')) // 60%
console.log(getCompleted("23:59:59", "24:00:00")) // 100%