let x = 1;
console.log(typeof x)
if(typeof x == "string"){
  console.log("Ваша переменная сточного типа");
}
else if(typeof x == "number"){
  console.log("Ваша переменная числового типа");
}
else if(typeof x == "boolean"){
  console.log("Ваша переменная логического типа");
}
else{
  console.log("Тип x не определён")
}