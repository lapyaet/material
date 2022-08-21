
  const labels = ["85%","65%","60%","35%","85%","60%"];
  const data = {
    labels: labels,
    datasets: [{
      label: "none",
      data: [85, 65, 60, 35, 85, 60],
      backgroundColor: [
        'rgb(39, 188, 173)',
        'rgb(39, 188, 173)',
        'rgb(39, 188, 173)',
        'rgb(39, 188, 173)',
        'rgb(39, 188, 173)',
        'rgb(39, 188, 173)'
      ],
      borderColor: [
        'rgb(39, 188, 173)',
        'rgb(39, 188, 173)',
        'rgb(39, 188, 173)',
        'rgb(39, 188, 173)',
        'rgb(39, 188, 173)',
        'rgb(39, 188, 173)'
      ],
      borderWidth: 1,
      barThickness :50
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          grid : {
            display : false,
            drawOnChartArea : false,
            drawBorder : false,
          }
        },
        x : {
            grid : {
                display :false,
                drawOnChartArea : false,
                drawBorder : false,
            }
        }
      }
    },
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );