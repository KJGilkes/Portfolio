let userInputName = document.getElementById('manName').value;
let userInputAge = document.getElementById('manAge').value;
let button = document.getElementById('submitButton');

function Man(name, age){
  this.name = name;
  this.age = age;
}

button.addEventListener('click', function(){
  let guy = new Man(userInputName, userInputAge);
  console.log(userInputName, userInputAge);
});
