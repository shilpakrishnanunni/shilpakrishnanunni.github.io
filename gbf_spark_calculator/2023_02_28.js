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