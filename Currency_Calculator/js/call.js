const showRatesButton = document.getElementById('button');
const submitBtn = document.getElementById('btn');
//References to the hidden rates p tag below the show rates button
let allRates = document.getElementById('allRates');

//XML HTTP Request

//The XML HTTP Constructor initializes an XML HTTP Request
let request = new XMLHttpRequest();
//Checks the XML request for the ready state to change
request.onreadystatechange = () => {
    //Checks the request object's ready state
    if (request.readyState === 4) {
        //Checks if the request responds with a status of 200
        if (request.status === 200) {
          console.log('Request successful');
          //Parses through the request object's responseText property
          let currencyRates = JSON.parse(request.responseText);
          //Creates a new variable to store the rates from the xml response
          let rateObject = currencyRates['rates'];
          //Declares the base currency to exchange currency to and from
          fx.base = "USD";
          //Sets each of the rates for the library to exchange between
          fx.rates = rateObject;

          // When the button is clicked show the exchange rates
          showRatesButton.addEventListener('click', function() {
            console.log(rateObject);
            //Changes the text inside of the p tag for all rates to show the rates from the api
            allRates.innerHTML = "These rates are from the base currency of euro's " + JSON.stringify(rateObject);
          });
        } else {
            allRates.innerHTML = 'An error occurred: ' + request.status + ' ' + request.statusText;
        }
    }
}


//Opens and xml http request to get data from the fixer api
request.open('GET', 'http://api.fixer.io/latest');

//Adds an event listener on the submit button to listen for a click
submitBtn.addEventListener('click', function() {
    //Sets the amount variable to the user inputed amount
    let amount = parseFloat(document.getElementById('amount').value);
    //Sets the type of currency to convert to the user selected currency
    let currencyType = document.getElementById('currencyType').value;
    //Converts the amount specified into the desired currency
    let converted = fx(amount).from('USD').to(currencyType);
    //Rounds the converted currency up or down
    Math.round(converted);
    console.log(amount + ' converted to ' + converted)
    //Refers to a p tag specified on the page below the see rates button.
    let convertedCurrency = document.getElementById('currencies');
    convertedCurrency.innerHTML = converted;
});

request.send();
