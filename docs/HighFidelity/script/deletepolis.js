function deletepolis() {
  var ids = Entities.findEntities(MyAvatar.position, 100);
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i];
    var properties = Entities.getEntityProperties(id);
    console.log(properties.name)
    console.log(JSON.stringify(properties))
    if (properties.name == "polis-uncrewed-vehicle") {
      Entities.deleteEntity(id);
    }
  }
}