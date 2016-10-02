let PickerManger = require('./file-picker-manager');

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
    if ( typeof this.pickerList == 'undefined' || reset ) {
      this.filePickerList = [];
      let filePickers = document.querySelectorAll( '.file-picker' );
    }

    for ( let item of filePickers ) {
      let picker = new FilePicker( item, 'selector', 'output' );
      this.filePickerList.push( picker );
    }
  }

  /*
   * Disable all file pickers 
   */
  disableFilePickers() {
    for ( picker of this.filePickerList ) {
      picker.
    }
  }
}

module.exports = App;
