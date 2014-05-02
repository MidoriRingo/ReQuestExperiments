//$(document).ready(function(){
//    $('#allVac').click(function() {
//        $('#allVac').hasClass(".checkedVac");
//        $('#mineVac').hasClass(".uncheckedVac");
//    });
//
//});

    $('#mineVac').click(function() {
        $(this).removeClass('uncheckedVac');
        $(this).addClass('checkedVac');
        $('#allVac').removeClass('checkedVac');
        $('#allVac').addClass('uncheckedVac');
        
    });
