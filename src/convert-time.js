function convertTime(time) {
    if (time.slice(11, 12) === '0') {
        return time.slice(12);
    } else {
        return time.slice(11);
    }
}

export { convertTime };