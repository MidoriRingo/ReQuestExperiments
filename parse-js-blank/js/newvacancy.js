/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getFirstForm() {
    /*var form = $("<form><form/>",
     {
     action: '/myaction',
     id: 'first_form'
     }
     );
     form.append($("<fiedset/>"));
     
     form.append(
     $("<input/>",
     {
     type: 'text',
     placeholder: 'Keywords',
     name: 'keyword',
     style: ''
     })
     );
     
     form.append(
     $("<input/>",
     {
     type: 'submit',
     value: 'Search',
     style: 'width:30%'
     }
     )
     );
     */
    return form;
}

$(document).ready(function() {
    $("#new_vacancy").click(function() {
        // кнопка сабмита на форме
        var form = getFirstForm();
        $('#main').append(form);
    });

    $('#first_form').submit(function(e) {
        e.preventDefault();

        // здесь сабмитится форма, 2-ой способ
        $('main').empty();

        //иконка лоадинга, хорошо бы ее привязать по всему сайту $('#loader').html('<img src="../../images/ajax-loader.gif" />       Please wait...');

    });

});
