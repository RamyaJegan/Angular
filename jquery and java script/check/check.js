
<html>
<body>
<script>
var allArrays = [['a', 'b','c'], ['c','d','e'], ['f', 'g', 'h']]

function allPossibleCases(arr) {
  if (arr.length == 1) {
    return arr[0];
  } else {
    var result = [];
    var allCasesOfRest = allPossibleCases(arr.slice(1));  // recur with the rest of array
    for (var i = 0; i < allCasesOfRest.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        result.push(arr[0][j] + allCasesOfRest[i]);
        
      }
    }
    console.log(result);
    return result;
  }

}
allPossibleCases(allArrays);
</script>
</body>
</html>
