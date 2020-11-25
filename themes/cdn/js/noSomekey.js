function forbidKeyboard() {
    $(document).keydown(function(e) {
        /*9:Tab键, 17：Control键, 18:Alt键, 123:F12键, 83:S键*/
        var keyboardCode = [9, 17, 18, 123];
        for (i in keyboardCode) {
            if (keyboardCode[i] == e.keyCode) {
                return false;
            }
        }
    });
}
$(function(){
    forbidKeyboard();
});
/* 禁止右键 */
document.oncontextmenu = function(){
    return false;
}