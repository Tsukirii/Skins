jQuery(document).ready(function(){
  jQuery('body').append('<span id="chatButton" title="Open/Close Chatbox" class="sf sf-chat-bubbles-o"></span><div id="chatBox"><iframe src="/chatbox/index.forum"></iframe></div>');
  jQuery('#chatBox').hide();
  jQuery('#chatButton').css('position', 'fixed');
  jQuery('#chatBox iframe').css('position', 'fixed').css('right', '10px').css('bottom', '45px');
  if(!document.getElementById('logout')){
    jQuery('#chatButton').hide();
    jQuery('#chatBox').hide();}
    jQuery('#chatButton').click(function(){
    jQuery('#chatBox').fadeToggle();
  });
});
