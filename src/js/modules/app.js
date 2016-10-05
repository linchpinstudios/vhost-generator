let PickerManager = require('./file-picker-manager');
let Settings = require('./settings');

// base application
class App {
  constructor() {
    console.log("app init");
    this.enableSettings();
    this.enableFilePickers();
    this.listHosts();
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

  /*
   * get url base
   * @return: base url string
   */
  getUrlBase() {
    return "dev.local"
  }

  /*
   * Get hosts from database
   * @return: A list of saved hosts
   */
  getHosts() {
    return [
      {
        hostName: "AwesomeSauce",
        path: "/user/projects/awesome-sauce-incorporated/"
      },
      {
        hostName: "AwesomeSauce",
        path: "/user/projects/awesome-sauce-incorporated/"
      }
    ];
  }

  /*
   * List hosts
   */
  listHosts() {
    let baseurl = this.getUrlBase();
    let hosts = this.getHosts();
  }
}

module.exports = App;
