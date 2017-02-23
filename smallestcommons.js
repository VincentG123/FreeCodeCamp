function smallestCommons(arr) {
  arr = arr.sort(function(a, b){return a-b;});
  var fullArray = [];
  for (var i=arr[0]; i<=arr[1] ;i++){
    fullArray.push(i);
  }
  var multFL = fullArray[0]*fullArray[fullArray.length-1];
  var multFL2;
  var canDivide = function(e){
    return multFL2%e === 0;
  };
  var canDivideArray = [];
  var x = 1;
  while (canDivideArray.length < fullArray.length){
     multFL2 = multFL*x;
      x++;
     canDivideArray = fullArray.filter(canDivide);
   }
  return multFL2;
}      
smallestCommons([1,6]);

