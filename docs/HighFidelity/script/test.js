var multiple_timer = Script.setInterval(function () {
  var array = ['1', '2', '3']
  var array2 = ['1', '3', '4']
  for (var i in array) {
    for (var j in array2) {
      if (array[i] == array2[j]) {
        array.splice(i,1)
      }
    }
  }
  console.log(array)
  var result = array.filter(function (element, index, arr) {
    return arr.indexOf(element) === index;
  });
  console.log(result);
}, 1000);
