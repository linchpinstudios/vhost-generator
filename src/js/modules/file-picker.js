class FilePicker {
  constructor( wrapperElement, pickerClass, outputClass ) {
    this.wrapper = wrapperElement;
    this.selector = this.wrapper.querySelectorAll( "." + pickerClass )[0];
    this.output = this.wrapper.querySelectorAll( "." + outputClass )[0];

    this.init();
  }

  init() {
    console.log('picker init');
    this.addEvents();

  }

  /*
  * Add events
  */
  addEvents( wrapper ) {
    this.selector.addEventListener('change', this.updateOutputValue );
  }

  /*
  * Remove events
  */
  removeEvents( wrapper ) {
    this.selector.removeEventListener('change', this.updateOutputValue );
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
