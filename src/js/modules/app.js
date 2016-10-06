let PickerManager = require('./file-picker-manager');
let Vhost = require('./vhost-structure');
let Settings = require('./settings');

// base application
class App {
  constructor() {
    console.log("app init");
    this.baseUrl = "dev.local";
    this.output =  document.getElementById('vhosts');
    this.addButton =  document.querySelectorAll('.add-host')[0];

    this.setBinds();
    this.enableSettings();
    this.enableFilePickers();
    this.listHosts();
  }

  setBinds() {
    this.addButton.addEventListener('click', this.addHost.bind(this));
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
    this.pickerManager = new PickerManager('file-picker', 'selector', 'output');
  }

  /*
   * Get hosts from database
   * @return: A list of saved hosts
   */
  getHosts() {
    return [
      {
        hostName: "CoolProject",
        path: "/user/projects/awesome-sauce-incorporated/"
      },
      {
        hostName: "NotSoCoolProject",
        path: "/user/projects/less-awesome-sauce.biz/"
      }
    ];
  }

  /*
   * List hosts
   */
  listHosts() {
    let hosts = this.getHosts();

    // this.pickerManager.disablePickers();

    for( let i = 0, n = hosts.length; i < n; i++ ) {
      let vhost = new Vhost(this.baseUrl, i, hosts[i]);
      vhost.render( this.output );
      this.count = i;
    }

    this.pickerManager.init();
  }

  addHost() {
    this.count++;
    let vhost = new Vhost(this.baseUrl, this.count);
    vhost.render( this.output );
  }
}

module.exports = App;
