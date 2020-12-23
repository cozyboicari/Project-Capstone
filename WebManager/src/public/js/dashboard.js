let userNumbersPerMonths = []
let tourNumberPerMonths = []
function getMonth(users) {
  const userNumbers = new Map([
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
  users.forEach((data) => {
    const month = new Date(data.dateCreated).getMonth() + 1
    if (userNumbers.has(month)) {
      userNumbers.set(month, userNumbers.get(month) + 1)
    }
  })
  const arr = [...userNumbers.values()]
  return arr
}
function userChart(data, data2) {
  const ctx = document.getElementById('myChart').getContext('2d')
  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our datasets
    data: {
      labels: [
        'Tháng 1',
        'Tháng 2',
        'Tháng 3',
        'Tháng 4',
        'Tháng 5',
        'Tháng 6',
        'Tháng 7',
        'Tháng 8',
        'Tháng 9',
        'Tháng 10',
        'Tháng 11',
        'Tháng 12',
      ],
      datasets: [
        {
          label: 'Số người đăng ký',
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data,
        },
        {
          label: 'Số tour đã được đặt',
          fill: false,
          backgroundColor: 'rgb(54, 162, 235)',
          borderColor: 'rgb(54, 162, 235)',
          data: data2,
        },
      ],
    },

    options: {
      animation: false,
      responsive: true,
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Tháng',
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Giá trị',
            },
          },
        ],
      },
    },
  })
}
const db = firebase.firestore()
db.collection('travelers').onSnapshot((snapshot) => {
  const data = snapshot.docs.map((doc) => doc.data())
  const userNumbers = document.getElementById('countUsers')
  userNumbers.innerHTML = snapshot.size
  userNumbersPerMonths = getMonth(data)
  userChart(userNumbersPerMonths, tourNumberPerMonths)
})
db.collection('travelers')
  .where('isActive', '==', true)
  .onSnapshot((snapshot) => {
    const tourGuidesNumbers = document.getElementById('countTourguides')
    tourGuidesNumbers.innerHTML = snapshot.size
  })
db.collection('travelers').onSnapshot((snapshot) => {
  const userNumbers = document.getElementById('countUsers')
  userNumbers.innerHTML = snapshot.size
})
db.collection('tours').onSnapshot((snapshot) => {
  const tourNumbers = document.getElementById('countTours')
  tourNumbers.innerHTML = snapshot.size
})
db.collection('bookings').onSnapshot((snapshot) => {
  const data = snapshot.docs.map((doc) => doc.data())
  const tourBookingNumbers = document.getElementById('countBookings')
  tourBookingNumbers.innerHTML = snapshot.size
  tourNumberPerMonths = getMonth(data)
  userChart(userNumbersPerMonths, tourNumberPerMonths)
})
