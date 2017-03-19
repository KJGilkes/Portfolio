let button = document.getElementById('submitButton');

function Man(name, age){
  this.name = name;
  this.age = age;
}

//Adds an event listener that listens for a button click
button.addEventListener('click', function(){
  let userInputName = document.getElementById('manName').value;
  let userInputAge = document.getElementById('manAge').value;
  let guy = new Man(userInputName, userInputAge);
  console.log(guy);
});
