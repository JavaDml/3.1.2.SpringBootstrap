
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

    let deleteModal = document.getElementById('deleteModal')
    deleteModal.addEventListener('show.bs.modal', function (event) {
        let button = event.relatedTarget
        let href = button.getAttribute('data-bs-whatever')
        $.get(href, function (user) {
            $('.deleteForm #id1').attr('readonly','readonly').val(user.id);
            $('.deleteForm #username1').attr('readonly','readonly').val(user.name);
            $('.deleteForm #password1').attr('readonly','readonly').val(user.password);
            $('.deleteForm #roles1').empty();
            user.roles.forEach(role => $('.deleteForm #roles1').append(new Option(role.role)));
            $('.deleteForm #deleteFormBody').attr('action', '/admin/del_user/'+(user.id));

        });
    })
});