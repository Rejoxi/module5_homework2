let arr=[];
for(i=0;i<10;i++){
  let a = Math.round( Math.random() * 100 );
  arr.push(a);
}
console.log(arr);
console.log("Длинна массива: "+arr.length)
arr.forEach(function(item, index, arr) {
  console.log(item, index, arr);
});