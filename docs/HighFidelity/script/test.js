var multiple_timer = Script.setInterval(function () {
  var obj = [{ 'id': '1' }, { 'id': '3' }]
  for (var o of obj) {
    if (o.id.indexOf('3') >= 0) {
      console.log('ya')
    }
  }
}, 1000);
