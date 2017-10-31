function getJSON(url) {
  //print("getJSON " + url);
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () { //callback
    //print('req status:: ' + JSON.stringify(xhr.status))
    //print('req status2:: ' + xhr.status)
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      var user = {};
      var userdata = data;
      var pca = JSON.parse(data.pca);
      var base = pca['base-clusters'];
      user = userdata.famous;
      for (var i in user) {
        var bid = user[i].bid;
        for (var b in base.id) {
          if (base['id'][b] == bid) {
            var index = b;
            var x = base.x[index];
            var y = base.y[index];
          }
        }
        user[i].x = x;
        user[i].y = y;
        var texture = '';
        if (user[i]['fb__fb_link'] !== null) {
          texture = user[i].facebook['fb_picture'].replace('width=40', 'width=500').replace('height=40', 'height=500');
        } else {
          texture = 'https://avatars.pdis.nat.gov.tw/twitter/' + user[i].twitter['screen_name'] + '/audreyt?size=large';
        }
        console.log(texture)
        //var pos = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));
        //console.log(JSON.stringify(MyAvatar.position))
        var pos = {
          "x": 100 + user[i].x * 5,
          "y": 205,
          "z": 100 + user[i].y * 5
        }
        var dimension = {
          "x": 1,
          "y": 1,
          "z": 1
        }
        var properties = {
          type: "Sphere",
          position: pos,
          dimensions: dimension,
          name: 'polis-uberx',
          color: {
            red: 0,
            green: 255,
            blue: 0
          },
          textures: texture
        };

        // Add the sphere
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

getJSON('https://raw.githubusercontent.com/XanxusX/polis-uber/master/polis-uber.json');
