class FilePicker {
  constructor( wrapperClass, pickerClass, inputClass ) {
    this.wrapperClass = "." + wrapperClass;
    this.pickerClass = "." + pickerClass;
    this.inputClass = "." + inputClass;

    this.init();
  }

  init() {
    let pickerList = this.getPickers();

    for ( let picker of pickerList ) {
      this.addEvents( picker );
    }
  }

  /*
  * @return: a list of elements with the designated picker class
  */
  getPickers() {
    return document.querySelectorAll( this.wrapperClass );
  }

  /*
  * @return: a list of elements with the designated picker class
  */
  addEvents( wrapper ) {
    let picker = wrapper.querySelectorAll( this.pickerClass )[0];
    let input = wrapper.querySelectorAll( this.inputClass )[0];

    picker.addEventListener('change', () => { input.value = picker.files[0].path });
  }
}

module.exports = FilePicker;
