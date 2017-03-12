let btn = document.getElementById('button');
let currencies = document.getElementById('currencies');

let request = new XMLHttpRequest();

request.onreadystatechange = ()=> {
  if(request.readyState === 4) {
    currencies.style.border = '1px solid #e8e8e8';
    if(request.status === 200) {
      currencies.innerHTML = request.responseText;
    } else {
      currencies.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
    }
  }
}

request.open('GET', 'http://api.fixer.io/latest');

btn.addEventListener('click', function() {
  request.send();
});
