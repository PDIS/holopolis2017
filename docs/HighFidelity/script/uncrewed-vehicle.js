function getJSON(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      var users = [];
      var members = data['base-clusters'].members;
      var arrayx = data['base-clusters'].x;
      var arrayy = data['base-clusters'].y;
      for (var i in members) {
        for (var j in members[i]) {
          var user = {}
          user.id = members[i][j]
          user.x = arrayx[i]
          user.y = arrayy[i]
          users.push(user)
        }
      }

     /*  for (var i in users) {
        var ids = Entities.findEntities({ x: 1050, y: 2050, z: 1050 }, 100);
        for (var j = 0; j < ids.length; j++) {
          var id = ids[j];
          var properties = Entities.getEntityProperties(id);
          var pname = "polis-uncrewe d-vehicle-" + users[i].id
          if (properties.name == pname) {

          }
        }
      } */

     /*  var ids = Entities.findEntities({ x: 1050, y: 2050, z: 1050 }, 100);
      for (var i = 0; i < ids.length; i++) {
        var id = ids[i];
        var properties = Entities.getEntityProperties(id);
        for (var j = 0; j < users.length; j++) {
          var pname = "polis-uncrewe d-vehicle-" + users[j].id
          if (properties.name == pname) {

          }
        }
      } */

      var models = ['https://github.com/PDIS/holopolis/blob/master/docs/HighFidelity/model/male.fbx?raw=true', 'https://github.com/PDIS/holopolis/blob/master/docs/HighFidelity/model/eve-weisenhart.fbx?raw=true']

      for (var i in users) {
        var pos = {
          "x": 1050 + users[i].x * 10,
          "y": 2055 + Math.floor((Math.random() * 5)),
          "z": 1050 + users[i].y * 10
        }
        var model = models[Math.floor((Math.random() * 2))];
        var name = 'polis-uncrewed-vehicle-' + users[i].id

        var properties = {
          type: "Model",
          modelURL: model,
          position: pos,
          name: name,
          color: {
            red: 0,
            green: 0,
            blue: 0
          },
          //collisionsWillMove: true,
          shapeType: 'box',
          collisionless: false
        };
        var Ent = Entities.addEntity(properties);
        print("Entity added.");
      }
    }
  };
  xhr.send();
};

function deletepolis() {
  var ids = Entities.findEntities(MyAvatar.position, 100);
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i];
    var properties = Entities.getEntityProperties(id);
    var polisname = "polis-uncrewed-vehicle-" + i;
    if (properties.name == polisname) {
      Entities.deleteEntity(id);
    }
  }
}

//Script.setInterval(getJSON('https://polis-api-proxy.herokuapp.com/api/v3/math/pca2?conversation_id=9rfmczeith'), 1000);
getJSON('https://polis-api-proxy.herokuapp.com/api/v3/math/pca2?conversation_id=9rfmczeith');
