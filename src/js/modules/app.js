let FilePicker = require('./file-picker');

// base application
class App {
  constructor() {
    console.log("app init");
    this.enableFilePickers();
  }

  enableFilePickers() {
    this.pickerList = [];
    let filePickers = document.querySelectorAll( '.file-picker' );

    for ( let item of filePickers ) {
      let picker = new FilePicker( item, 'selector', 'output' );
      this.pickerList.push( picker );
    }

  }
}

module.exports = App;
