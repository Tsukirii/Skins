$(document).ready(function () {
    $('#myst-act-content').hide();
    $('#myst-act-content').appendTo('#wrap');

    $('#myst-act').click(function(){
        $('#myst-act-content').fadeToggle();
    });
  if(!document.getElementById('logout')){
    $('#myst-act').unbind('click');
    $('#myst-act').click(function(){
        alert("Necesitas estar conectado para ver las actividades")
    });
  }
});
$(document).keyup(function(e) {
    if (e.which == 27) {
        $("#myst-act-content").fadeOut(300); 
    }
});
$(document).mouseup(function (e){
    var container = $("#myst-act-content");
    if (!container.is(e.target)
        && container.has(e.target).length === 0) 
    {
        container.fadeOut(300);
    }
});
