const now = new Date()
let today = now.getDate()
let month = now.getMonth() + 1
let monthSelected = ''
let year = now.getFullYear()
const calendar = document.getElementById('calendar-table')

function getMonthSelected(month) {
  switch(month) {
    case 1: monthSelected = 'January'
    break
    case 2: monthSelected = 'February'
    break
    case 3: monthSelected = 'March'
    break
    case 4: monthSelected = 'April'
    break
    case 5: monthSelected = 'May'
    break
    case 6: monthSelected = 'June'
    break
    case 7: monthSelected = 'July'
    break
    case 8: monthSelected = 'August'
    break
    case 9: monthSelected = 'September'
    break
    case 10: monthSelected = 'October'
    break
    case 11: monthSelected = 'November'
    break
    case 12: monthSelected = 'December'
    break
  }
}

getMonthSelected(month)
createCalendar(month, monthSelected, year, today)

function prev() {
  month--
  if (month < 1) {
    month = 12
    year--
  }
  if (month == now.getMonth() + 1) {
    today = now.getDate()
  } else {
    today = 0
  }
  getMonthSelected(month)
  createCalendar(month, monthSelected, year, today)
}

function next() {
  month++
  if (month > 12) {
    month = 1
    year++
  }
  if (month == now.getMonth() + 1) {
    today = now.getDate()
  } else {
    today = 0
  }
  getMonthSelected(month)
  createCalendar(month, monthSelected, year, today)
}

function createCalendar(month, monthSelected, year) {
  let extension = 1
  for (var i = calendar.getElementsByTagName('tr').length; i > 2 ; i--) {
    calendar.getElementsByTagName('tr')[i - 1].remove()
  }

  document.getElementById('month').innerText = monthSelected + ' ' + year

  const monthDays = new Date(year, month, 0).getDate()
  const lastMonth = new Date(year, month - 1, 0).getDate()

  for (var i = 0; i < monthDays; ) {
    const createRow = document.createElement('tr')
    for (var j = 0; j < 7; j++) {
      const weekDays = new Date(year, +month - 1, i + 1).getDay()
      const createDays = document.createElement('td')
      if (j == weekDays) {
        createDays.innerText = i + 1
        if (i + 1 == today) {
          createDays.style.backgroundColor = '#00CBFF'
          createDays.style.color = '#FFF'
        }
        i++
      } else {
        for (var k = 6; k >= 0; k--) {
          const lastMonthWeekDays = new Date(year, +month - 2, lastMonth - k).getDay()
          if (j == lastMonthWeekDays) {
            createDays.innerText = lastMonth - k
            createDays.style.color = '#AAA'
            k = 0
          }
        }
      }

      if (i > monthDays) {
        createDays.innerText = extension
        createDays.style.color = '#AAA'
        extension++
      }

      createRow.appendChild(createDays)
    }
    calendar.appendChild(createRow)
  }
}
