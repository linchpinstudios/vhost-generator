class Settings {
  constructor() {
    this.settingsSection = document.querySelectorAll('.settings-section')[0];
    this.settingsButton= document.querySelectorAll('.settings-button')[0];
    this.setBinds();
  }

  /*
   * Connect elements to functionality
   */
  setBinds() {
    this.settingsButton.addEventListener('click', this.toggleSettings.bind(this) );
  }

  /*
   * Toggle settings sectino open and close
   */
  toggleSettings() {
    if ( this.isClosed || typeof this.isClosed == 'undefined' ) {
      this.settingsSection.classList.add('open');
      this.isClosed = false;
    }
    else {
      this.settingsSection.classList.remove('open');
      this.isClosed = true;
    }
  }
}

module.exports = Settings;
