
class Vhost {
  constructor( baseUrl, pickerId, options ) {
    var defaults = {
      hostName: false,
      path: false
    }

    this.options = typeof options == "undefined" ? defaults : options;

    let wrap = document.createElement('div');
    wrap.setAttribute('data-id', pickerId);
    wrap.className = "vhost";

    let hiddenInput = document.createElement('input')
    hiddenInput.className = "host-name";
    hiddenInput.setAttribute('type', "hidden");

    let title = this.getTitle(baseUrl);
    let picker = this.getFilePicker( pickerId );

    let deleteButton = document.createElement('button');
    deleteButton.className = 'vhost__delete';
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener('click', this.destroy.bind(this) );

    wrap.appendChild(hiddenInput);
    wrap.appendChild(title);
    wrap.appendChild(picker);
    wrap.appendChild(deleteButton);

    this.structure = wrap;
  }

  getTitle( baseUrl ) {
    let title = document.createElement('h2');
    title.className = "vhost__title";

    let vhostName = document.createElement('span');
    let vhostNameClass = "vhost__name";
    vhostName.setAttribute('contenteditable', 'true');
    if ( this.options.hostName != false ) {
      vhostName.innerHTML = this.options.hostName;
    }
    else {
      vhostName.setAttribute("placeholder", this.getPlaceholder());
      vhostNameClass += " clean";
    }
    vhostName.className = vhostNameClass;

    let baseUrlElement = document.createElement('span');
    baseUrlElement.innerHTML = "." + baseUrl;

    title.appendChild(vhostName);
    title.appendChild(baseUrlElement);

    return title;
  }

  getFilePicker( pickerId ) {
    let wrap = document.createElement('div');
    wrap.className = "file-picker vhost__data";

    let label = document.createElement('label');
    label.className = "button vhost__selector-label";
    label.setAttribute('for', pickerId);
    label.innerHTML = 'Points to:'

    let picker = document.createElement('input');
    picker.className = 'selector vhost__selector';
    picker.setAttribute('id', pickerId);
    picker.setAttribute('name', 'file');
    picker.setAttribute('type', 'file');
    picker.setAttribute('webkitdirectory', 'webkitdirectory');
    picker.setAttribute('directory', 'directory');

    let output = document.createElement('input');
    output.className = "output vhost__output";
    if ( this.options.path != false ) {
      output.value = this.options.path;
    }
    else {
      output.setAttribute('placeholder', '/that/one/folder/');
    }

    wrap.appendChild(label);
    wrap.appendChild(picker);
    wrap.appendChild(output);

    return wrap;
  }

  getPlaceholder() {
    var examples = [
      "awesome-sauce",
      "plain-ol-sauce",
      "not-into-this-sauce",
      "saucerer",
      "secret-sauce",
    ]
    return examples[Math.floor(Math.random()*examples.length)];
  }

  render( outputLocation ) {
    outputLocation.appendChild( this.structure );
  }

  destroy( e ) {
    var elementToRemove = e.target.parentNode;
    elementToRemove.parentNode.removeChild( elementToRemove );
  }
}

module.exports = Vhost
