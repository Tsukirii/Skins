$(function() {
    $('#kiwi').append('<img src=' + _userdata.avatar.match(/".*?"/) + 'class="nav-avatar">');
    (_userdata.user_id >= 0) ? jQuery('.nav-username').attr('href', '/u' + _userdata.user_id).attr("target", "_blanck"): jQuery('.nav-username').attr('href', 'javascript:void(0)');
});

$(function() {
   $('.peach-topic br').replaceWith('<p class="sf sf-more-o"></p>');
});
