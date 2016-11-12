if (mw.config.get("wgUserGroups").indexOf('sysop') > -1) {
$( document ).ready( function() {
  $( 'li > .speech-bubble-avatar' ).append( '<div class="group-tag staffcom">Staff</div>' );
} );
}
