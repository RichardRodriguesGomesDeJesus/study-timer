export function timeToSeconds(time: string) {
    const [hours = '0',minutes = '0',seconds = '-'] = time.split(":")

    const hoursToSecods = Number(hours) * 3600
    const minutesToSecods = Number(minutes) * 60
    return hoursToSecods + minutesToSecods + Number(seconds)
}  