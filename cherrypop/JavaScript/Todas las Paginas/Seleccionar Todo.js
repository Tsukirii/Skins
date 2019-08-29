function selectCode(e) {
        var doc = document
            , text = $(e).closest("dl").find(".cont_code,code").get(0)
            , range, selection
        ;
        if (doc.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) {
            selection = window.getSelection();        
            range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };
    $(function(){$("dl.codebox:not(.spoiler,.hidecode)  > dd.code, dl.codebox:not(.spoiler,.hidecode)  > dd > code").closest("dl").find('dt').append('<span onClick="selectCode(this)" class="selectCode">Seleccionar</span>')});
