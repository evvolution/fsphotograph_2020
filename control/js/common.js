
/*
    note：总控
    anthor：zx
*/

var step = $("#step");
var commonlink = 'https://server.foshanplus.com/';

var video_name_toupload = "";
var pic_name_toupload = ""

$(document).ready(function() {
    initMainview()
    initSize();
    initFile();
    initLiteswitchp3();
    initLitestep();
    initModals();
    initnews();
    uploadx_btn();
    uploads_btn();
    
    inittype();
    getoldprjs();
});

window.onload = function() {
    
}
