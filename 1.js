var a = prompt("Plese write something");
var a = + a;
console.log(typeof(a))
console.log(a)
if(typeof(a)==='number'){
  if(a%2 === 0){
    console.log("Число чётное")
  }
  else if (a%2 !== 0) {
    console.log("Число нечётное")
  }
  else if(a === 'NaN'){
    console.log("Упс, кажется, вы ошиблись")
  }
}
else{
  console.log("Упс, кажется, вы ошиблись")
}