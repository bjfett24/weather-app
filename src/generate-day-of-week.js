function generateDay(todayOfWeek, datum) {
    const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    if (todayOfWeek + (+datum.slice(3)) <= 6) {
        return daysOfTheWeek.at(todayOfWeek + (+datum.slice(3)));
    } else {
        return daysOfTheWeek.at(todayOfWeek + (+datum.slice(3)) - 7);
    }
}

export { generateDay };