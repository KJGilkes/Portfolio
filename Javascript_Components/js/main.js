//Creates a variable with reference to the button element from index.html with an id of submitButton
let button = document.getElementById('submitButton');

//Constructor function
//This constructor function acts as blueprints for creating an object with each of its parameters as properties
function Man(name, age){
  //Takes in the name parameter and sets it to the name property of the object
  this.name = name;
  //Takes in the age parameter and sets it to the age property of the object
  this.age = age;
}

//Adds an event listener that listens for a button click
button.addEventListener('click', function(){
  //Creates a variable with reference to the userInputName element from index.html with an id of manName
  let userInputName = document.getElementById('manName').value;
  //Creates a variable with reference to the userInputAge element from index.html with an id of manAge
  let userInputAge = document.getElementById('manAge').value;
  //Creates a new object called guy with a name and age taken from the user's input
  let guy = new Man(userInputName, userInputAge);
});
