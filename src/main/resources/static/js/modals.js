
$(document).ready(function (){

    let deleteModal = document.getElementById('deleteModal');
    let editModal = document.getElementById('editModal');

    deleteModal.addEventListener('show.bs.modal', function (event) {
        let button = event.relatedTarget;
        let href = button.getAttribute('data-bs-whatever');
        $.get(href, function (user) {
            $('.deleteForm #id1').attr('readonly','readonly').val(user.id);
            $('.deleteForm #username1').attr('readonly','readonly').val(user.name);
            $('.deleteForm #password1').attr('readonly','readonly').val(user.password);
            $('.deleteForm #roles1').empty();
            user.roles.forEach(role => $('.deleteForm #roles1').append(new Option(role.role)));
            $('.deleteForm #deleteFormBody').attr('action', '/admin/del_user/'+(user.id));
        });
    });

    editModal.addEventListener('show.bs.modal', function (event) {
        let button = event.relatedTarget;
        let href = button.getAttribute('data-bs-whatever');
        $.get(href, function (user) {
            $('.editForm #id2').val(user.id);
            $('.editForm #username2').val(user.name);
            $('.editForm #password2').val(user.password);
            $('.editForm #originalPass').val(user.password);
            $('.editForm #roles2 option:first').prop('selected', false);
            $('.editForm #roles2 option:last').prop('selected', false);
            user.roles.forEach(role => {
                if(role.role == "USER_ROLE") {
                    $('.editForm #roles2 option[value=USER_ROLE]').prop('selected', true);
                }
                if(role.role == "USER_ADMIN") {
                    $('.editForm #roles2 option[value=USER_ADMIN]').prop('selected', true);
                }
            });
            $('.editForm #editFormBody').attr('action', '/admin/addOrEdit_user');
        });
    });
});