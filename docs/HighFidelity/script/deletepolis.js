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

deletepolis();