let FilePicker = require('./file-picker');

/*
* create and manage file pickers
*/
class FilePickerManager {
  constructor(wrapperClass, pickerClass, outputClass) {
    this.wrapperClass = "." + wrapperClass;
    this.pickerClass = "." + pickerClass;
    this.outputClass = "." + outputClass;
    this.pickerList = [];

    this.init();
  }

  /*
   * Collect pickers and start them
   */
  init() {
    let pickerWrappers = this.getPickers();

    for ( let wrapper of pickerWrappers ) {
      this.addPicker( wrapper );
    }
  }

  /*
   * Add picker to overall list
   */
  addPicker( wrapperElement ) {
    let selector = wrapperElement.querySelectorAll(this.pickerClass)[0];
    let output = wrapperElement.querySelectorAll(this.outputClass)[0];
    let picker = new FilePicker( selector, output);
    this.pickerList.push( picker );
  }

  /*
   * return picker elements
   */
  getPickers() {
    return document.querySelectorAll( this.wrapperClass );
  }

  /*
   * Disable file pickers
   */
  disablePickers() {
    for ( let picker of this.pickersList ) {
      picker.removeEvents();
    }
  }

  /*
   * Enable file pickers
   */
  enablePickers() {
    for ( let picker of this.pickersList ) {
      picker.addEvents();
    }
  }
}

module.exports = FilePickerManager;
