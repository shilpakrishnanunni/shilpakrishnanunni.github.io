let button = document.getElementById('button_calculate');

function calculateSpark() {
    let tix = parseInt(document.getElementById('tix').value);
    let ten_tix = parseInt(document.getElementById('ten_tix').value);
    let crystals = parseFloat(document.getElementById('crystals').value);
    let rolls = tix + 10*ten_tix + parseInt(crystals/300);
    // let rolls = tix + 10*ten_tix
    let perc = parseFloat(rolls / 300);
    document.getElementById('draws').innerHTML=rolls;
    document.getElementById('percentage').innerHTML=perc;
};