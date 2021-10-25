
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
            let newOption = new Option('role.role', '1');
            $('.deleteForm #roles1').add(newOption);

/*            user.roles.forEach(role => $('.deleteForm #roles1').attr('readonly','readonly').);
            if($('.deleteForm #roles1').options.clear()) {
                for (let i = 0; i < $('.deleteForm #roles1').options.length; i++) {
                    $('.deleteForm #roles1').options[i] = null;
                }
            }
            $('.deleteForm #roles1').options.clear();
            user.roles.forEach(role => {
                let newOption = new Option(role.role, '');
                $('.deleteForm #roles1').add(newOption);
            });*/
        });
    })

/*    $(' .table .dBtn').on('click', function (event){
        event.preventDefault();
        let href = $(this).attr('href');
        $.get(href, function (user) {
            $('.deleteForm #id1').attr('readonly','readonly').val(user.id);
            $('.deleteForm #username1').attr('readonly','readonly').val(user.name);
            $('.deleteForm #password1').attr('readonly','readonly').val(user.password);

        });

        $('.deleteForm #exampleModal').modal();

    });*/
});