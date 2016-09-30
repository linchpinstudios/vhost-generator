let pickers = document.querySelectorAll('.host-dir-picker');

for ( let i = 0, n = pickers.length; i < n; i++ ) {
  pickers[i].addEventListener('change', function( e ) {
    console.log( this.files[0].path );
  })
}
