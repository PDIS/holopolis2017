(function () {
  var APP_NAME = "Holopolis";
  var APP_URL = "https://pdis.github.io/holopolis/HighFidelity/tablet/tablet.html";
  var APP_ICON = "https://hifi-content.s3.amazonaws.com/faye/gemstoneMagicMaker/gemstoneAppIcon.svg";
  var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
  var button = tablet.addButton({
    icon: APP_ICON,
    text: APP_NAME
  });
  function onClicked() {
    tablet.gotoWebScreen(APP_URL);
  }
  button.clicked.connect(onClicked);

  function cleanup() {
    tablet.removeButton(button);
  }
  Script.scriptEnding.connect(cleanup);
}());