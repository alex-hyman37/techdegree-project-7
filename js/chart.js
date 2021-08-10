let line = document.getElementById('traffic-chart').getContext('2d');
let bar = document.getElementById('daily-chart').getContext('2d');
let donut = document.getElementById('donut-chart').getContext('2d');


// Line chart
let lineChart = new Chart(line, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
      data: [700, 1200, 1000, 2000, 1500, 1700, 1200, 1900, 2300, 1500, 2500],
      backgroundColor: 'rgba(75, 75, 192, 0.2)',
      fill: true,
      lineTension:  0.5,
      pointBorderWidth: 1,
      borderWidth: 1
    }],
    
  },
  options: {
    responsive: true,
    
    plugins: {
      legend: {
        display: false,
      }
    }
  }
});

// Bar chart
let barChart = new Chart(bar, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      data: [70, 120, 170, 130, 230, 200, 100],
      backgroundColor: 'rgba(116, 119, 191)',
      fill: true,
      pointBorderWidth: 1,
      borderWidth: 1
    }],
    
  },
  options: {
    responsive: true,
    
    plugins: {
      legend: {
        display: false,
      }
    }
  }
});

// Donut chart
let donutChart = new Chart(donut, {
  type: 'doughnut',
  data: {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
      data: [70, 15, 15],
      backgroundColor: [
        'rgb(116, 119, 191)',
        'rgb(129,201,143)',
        'rgb(81,182,200)',
      ],
      fill: true,
      pointBorderWidth: 1,
      borderWidth: 0,
    }],
    
  },
  options: {
    responsive: true,
    // circumference: 700 * Math.PI,
    aspectRatio: 2,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 20,
          font: {
            weight: 'bold'
          }
        }
      }
    }
  }
});

