function findElement(arr, func) {
  var num;
  for (var a = 0;a < arr.length; a++){
    if (func (arr[a])){
    num = arr[a];
  return num;
  }
}
  return num;
}
