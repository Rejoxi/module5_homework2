const arr = [1, 2, 3, 2, 7, 1];
for(let i = 0;i<=arr.length-1;i++){
  for(let k = i+1;k<=arr.length;k++){
    if(arr[i] == arr[k]){
      console.log("true");
    }
  }
  break;
}