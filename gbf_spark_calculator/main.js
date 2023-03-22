// Modern front-end applications often use JavaScript module bundlers, so we’ve picked Parcel as a nice zero-configuration build tool. We’re also installing Chart.js v4 and a JavaScript client for Cube , an open-source API for data apps we’ll use to fetch real-world data (more on that later).

// let button = document.getElementById('button_calculate');

function calculateSpark() {
    let tix = parseInt(document.getElementById('tix').value);
    let ten_tix = parseInt(document.getElementById('ten_tix').value);
    let crystals = parseInt(document.getElementById('crystals').value);

    if (!tix) {
      tix = 0;
    }
    if (!ten_tix) {
      ten_tix = 0;
    }
    if (!crystals) {
      crystals = 0;
    }
    let rolls = tix + 10*ten_tix + Math.floor(crystals/300);
    // let rolls = Math.floor(crystals/300);
    let perc_tix = (tix/300)*100
    let perc_ten_tix = (ten_tix/30)*100
    let perc_crystals = (crystals/90000)*100
    let perc_empty = 100 - perc_tix - perc_ten_tix - perc_crystals
    let perc = parseFloat((tix*300 + ten_tix*3000 + crystals)/900).toFixed(2);
    document.getElementById('draws').innerHTML=rolls;
    document.getElementById('percentage').innerHTML=perc;
    
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Single Tix','10 Part Tix','Crystals'],
        datasets: [{
          // label: '# of Votes',
          data: [perc_tix,perc_ten_tix,perc_crystals,perc_empty],
          backgroundColor: [
            "rgb(0, 140, 255)",
            "rgb(0, 102, 255)",
            "rgb(0, 0, 255)",
            "rgb(150,150,150)"
          ],
          borderWidth: 1,
        }]
      },
      options: {
        cutoutPercentage: 95,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

};

