let userInputName = document.getElementById('userManName').value;
let userInputAge = document.getElementById('userManAge').value;

function Man(name, age){
  this.name = name;
  this.age = age;
}

let guy = new Man(userInputName, userInputAge);
console.log(guy);
