let numbers = new Map([

  [1, "one"],

  [2, "two"],

  [3, "three"]

]);

for (let name of numbers.keys()) {

  console.log("Ключ X: " + name); 
  

}

for (let mean of numbers.values()) {
  
  console.log("Значение Y: " + mean); 
  
}