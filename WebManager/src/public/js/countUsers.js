const userNumbersMap = new Map([
  [1, 0],
  [2, 0],
  [3, 0],
  [4, 0],
  [5, 0],
  [6, 0],
  [7, 0],
  [8, 0],
  [9, 0],
  [10, 0],
  [11, 0],
  [12, 0],
])
function getMonth(map, users) {
  users.forEach((data) => {
    const month = new Date(data.dateCreated).getMonth() + 1
    if (map.has(month)) {
      map.set(month, map.get(month) + 1)
    }
  })
  const userNumbersPerMonths = [...userNumbersMap.values()]
  return userNumbersPerMonths
}
function userChart(data) {
  const ctx = document.getElementById('myChart').getContext('2d')
  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our datasets
    data: {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          borderColor: 'rgb(255, 99, 132)',
          data,
        },
        {
          label: 'My First dataset',
          fill: false,
          borderColor: 'rgb(0, 0, 0)',
          data: [0, 2, 4, 6, 8],
        },
      ],
    },

    // Configuration options go here
    options: {},
  })
}
const db = firebase.firestore()
db.collection('travelers').onSnapshot((snapshot) => {
  const userNumbers = document.getElementById('countUsers')
  userNumbers.innerHTML = snapshot.size
})
