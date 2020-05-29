
/*
    note：总控
    anthor：zx
*/

var step = $("#step");
var commonlink = 'https://server.foshanplus.com/';

var video_name_toupload = "";
var video_size_toupload = "";
var video_type_toupload = "";

var pic_name_toupload = "";
var pic_size_toupload = "";
var pic_type_toupload = "";

$(document).ready(function() {
    initMainview()
    initSize();
    initLiteswitchp3();
    initLitestep();
    initModals();
    initnews();

    uploads_btn();
    uploadx_btn();
    
    inittype();
    getoldprjs();
});

window.onload = function() {
    
}
