// write your code below//
function happyHolidays() {
  return "Happy holidays!"
}

happyHolidays()

function happyHolidaysTo (name) {
  return `Happy holidays, ${name}!`
}

happyHolidaysTo("Rosanna")

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

happyHolidayTo("Easter", "Rosanna")

function holidayCountdown(holiday, days) {
  return `It\'s ${days} days until ${holiday}!`
}

holidayCountdown("Easter", 25)
