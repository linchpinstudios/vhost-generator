let PickerManager = require('./file-picker-manager');

// base application
class App {
  constructor() {
    console.log("app init");
    this.enableFilePickers();
  }

  /*
   * Generate a list of file pickers
   */
  enableFilePickers( reset ) {
    this.pickerManger = new PickerManager('file-picker', 'selector', 'output');
  }
}

module.exports = App;
