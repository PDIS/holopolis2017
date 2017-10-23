(function () {
  // Every great app starts with a great name (keep it short so that it can fit in the tablet button)
  var APP_NAME = "Holopolis";
  // Get a reference to the tablet 
  var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
  // "Install" your cool new app to the tablet
  // The following lines create a button on the tablet's menu screen
  var button = tablet.addButton({
    text: APP_NAME
  });
  // Provide a way to "uninstall" the app
  // Here, we write a function called "cleanup" which gets executed when
  // this script stops running. It'll remove the app button from the tablet.
  function cleanup() {
    tablet.removeButton(button);
  }
  Script.scriptEnding.connect(cleanup);
}());