jQuery(function() {
   var a = jQuery("#comments_scroll_div").clone();
var c = [];
jQuery('.module .h3:contains("Últimos temas")').closest('.inner').find('script').each(function() {
    if (!jQuery(this).attr('src')) c.push('<script>'+ jQuery(this).html() + '</' + 'script>');
});
jQuery("#contenedor-UltimosTemas").replaceWith('<div id="comments_scroll_div">' + a.html() + '</div>' + c.join(" "));
jQuery(".module .inner #comments_scroll_div ").remove()
});
