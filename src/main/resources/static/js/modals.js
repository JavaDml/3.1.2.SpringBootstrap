
$(document).ready(function (){

    $('.table .eBtn').on('click', function (event){
        event.preventDefault();
        let href = $(this).attr('href');
        $.get(href, function (user) {
            $('.editForm #id').attr('readonly','readonly').val(user.id);
            $('.editForm #username').val(user.name);
            $('.editForm #password').val(user.password);

        });

        $('.editForm #exampleModal').modal();

    });

    $(' .table .dBtn').on('click', function (event){
        event.preventDefault();
        let href = $(this).attr('href');
        $.get(href, function (user) {
            $('.deleteForm #id1').attr('readonly','readonly').val(user.id);
            $('.deleteForm #username1').attr('readonly','readonly').val(user.name);
            $('.deleteForm #password1').attr('readonly','readonly').val(user.password);

        });

        $('.deleteForm #exampleModal').modal();

    });
});