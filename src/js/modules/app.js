let PickerManager = require('./file-picker-manager');
let Settings = require('./settings');

// base application
class App {
  constructor() {
    console.log("app init");
    this.enableSettings();
    this.enableFilePickers();
  }

  /*
   * Enable user to access settings section
   */
  enableSettings() {
    this.settings = new Settings();
  }

  /*
   * Generate a list of file pickers
   */
  enableFilePickers( reset ) {
    this.pickerManger = new PickerManager('file-picker', 'selector', 'output');
  }
}

module.exports = App;
