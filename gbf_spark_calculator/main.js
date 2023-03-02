// Modern front-end applications often use JavaScript module bundlers, so we’ve picked Parcel as a nice zero-configuration build tool. We’re also installing Chart.js v4 and a JavaScript client for Cube , an open-source API for data apps we’ll use to fetch real-world data (more on that later).

let button = document.getElementById('button_calculate');

function calculateSpark() {
    let tix = parseInt(document.getElementById('tix').value);
    let ten_tix = parseInt(document.getElementById('ten_tix').value);
    let crystals = parseInt(document.getElementById('crystals').value);
    let rolls = tix + 10*ten_tix + Math.floor(crystals/300);
    // let rolls = Math.floor(crystals/300);
    let perc = parseFloat(rolls / 3).toFixed(2);
    document.getElementById('draws').innerHTML=rolls;
    document.getElementById('percentage').innerHTML=perc;
    
};

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});