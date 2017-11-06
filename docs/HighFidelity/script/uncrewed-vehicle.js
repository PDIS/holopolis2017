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

      for (var i in users) {
        var pos = {
          "x": 1050 + users[i].x * 5,
          "y": 2055,
          "z": 1050 + users[i].y * 5
        }
        var dimension = {
          "x": 0.1,
          "y": 0.1,
          "z": 0.1
        }
        var properties = {
          type: "Model",
          modelURL: 'https://github.com/PDIS/holopolis/blob/master/docs/HighFidelity/model/sponge.fbx',
          position: pos,
          dimensions: dimension,
          name: 'polis-uncrewed-vehicle',
          color: {
            red: 0,
            green: 0,
            blue: 0
          },
        };
        var Ent = Entities.addEntity(properties);
        print("Entity added.");
      }
    }
  };
  xhr.send();
};

function deleteobject() {
  var foundEntitiesArray = Entities.findEntities(MyAvatar.position, 100.0);
  console.log(found)
  var Ent = Entities.getEntityProperties

  // delete the sphere you just added
  Entities.deleteEntity(Ent);
}

getJSON('https://polis-api-proxy.herokuapp.com/api/v3/math/pca2?conversation_id=9rfmczeith');
