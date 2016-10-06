class FilePicker {
  constructor( selector, output ) {
    this.selector = selector;
    this.output = output;
    this.init();
  }

  init() {
    this.addEvents();
  }

  /*
  * Add events
  */
  addEvents() {
    this.selector.addEventListener('change', this.updateOutputValue.bind(this) );
  }

  /*
  * Remove events
  */
  removeEvents() {
    this.selector.removeEventListener('change', this.updateOutputValue.bind(this) );
  }

  /*
  * Update the value of the output to be the selected file path
  */
  updateOutputValue() {
    this.output.value = this.selector.files[0].path;
    this.removeEvents();
  }

}

module.exports = FilePicker;
