function getJSON(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      console.log(data)
      console.log(data['base-clusters'])
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

      var models = ['https://github.com/PDIS/holopolis/blob/master/docs/HighFidelity/model/male.fbx?raw=true','https://github.com/PDIS/holopolis/blob/master/docs/HighFidelity/model/eve-weisenhart.fbx?raw=true']

      for (var i in users) {
        var pos = {
          "x": 1050 + users[i].x * 10,
          "y": 2055,
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

getJSON('https://polis-api-proxy.herokuapp.com/api/v3/math/pca2?conversation_id=9rfmczeith');
