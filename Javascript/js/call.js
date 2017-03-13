let button = document.getElementById('button');
let btn = document.getElementById('btn');

fx.base = "EUR";
fx.rates = {
  "AUD": 1.4095,
  "BGN": 1.9558,
  "BRL": 3.3694,
  "CAD": 1.4322,
  "CHF": 1.0743,
  "CNY": 7.3336,
  "CZK": 27.021,
  "DKK": 7.4331,
  "GBP": 0.8725,
  "HKD": 8.2367,
  "HRK": 7.419,
  "HUF": 312.27,
  "IDR": 14186,
  "ILS": 3.9086,
  "INR": 70.672,
  "JPY": 122.42,
  "KRW": 1226.3,
  "MXN": 20.968,
  "MYR": 4.7231,
  "NOK": 9.1405,
  "NZD": 1.5348,
  "PHP": 53.281,
  "PLN": 4.3259,
  "RON": 4.549,
  "RUB": 62.696,
  "SEK": 9.5778,
  "SGD": 1.5041,
  "THB": 37.556,
  "TRY": 3.9801,
  "USD": 1.0606,
  "ZAR": 14.068,
}

btn.addEventListener('click', function(){
  let amount = parseInt(document.getElementById('amount').value);
  let currencyType = document.getElementById('currencyType').value;
  let converted = fx(amount).from('EUR').to(currencyType);
  let convertedCurrency = document.getElementById('currencies');
  convertedCurrency.innerHTML = converted;
})




let request = new XMLHttpRequest();

request.onreadystatechange = ()=> {
  let rates = document.getElementById('rates');
  if(request.readyState === 4) {
    currencies.style.border = '1px solid #e8e8e8';
    if(request.status === 200) {
      rates.innerHTML = "These rates are from the base currency of euro's " + request.responseText;
    } else {
      rates.innerHTML = 'An error occurred: ' +  request.status + ' ' + request.statusText;
    }
  }
}

request.open('GET', 'http://api.fixer.io/latest');

button.addEventListener('click', function() {
  request.send();
});
