let FilePickers = require('./file-picker');

// base application
class App {
  constructor() {
    console.log("app init");
    this.enableFilePickers();
  }

  enableFilePickers() {
    this.pickers = new FilePickers('file-picker', 'selector', 'output');
  }
}

module.exports = App;
