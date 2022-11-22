var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=lkr",
    "method": "GET",
    "headers": {}

}

$.ajax(settings).done(function(response) {
    btc.innerHTML = response.bitcoin.lkr;
    eth.innerHTML = response.ethereum.lkr;
    doge.innerHTML = response.dogecoin.lkr;

});