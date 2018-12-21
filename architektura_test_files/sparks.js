$(document).ready(function() {
    new MaskedPassword(document.getElementById("pass"), '\u25CF');
    new MaskedPassword(document.getElementById("password2"), '\u25CF');
    new MaskedPassword(document.getElementById("password1"), '\u25CF');

});

function countChars(txtarea, counter_id, limit) {
    var len = $(txtarea).val().length;
    if (len > limit) {
        $(txtarea).val($(txtarea).val().slice(0, limit));
        len = limit;
    }
    $("#" + counter_id).text(len + '/' + limit);
}


$(document).ready(function() {
    $("#js_user_info").load("/api/user_info/");
})
