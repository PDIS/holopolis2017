var multiple_timer = Script.setInterval(function () {
  var array = ['1', '2', '3', '1', '3', '4']
  var result = array.filter(function (element, index, arr) {
    return arr.indexOf(element) === index;
  });
  console.log(result);
}, 1000);
