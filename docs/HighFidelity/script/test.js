var startTime = new Date();
var func = function () {
  console.log('start: ' + (new Date() - startTime));
  for (var i = 0; i < 1000000000; i++) { }
  console.log('end: ' + (new Date() - startTime));
};
Script.setInterval(func, 100);