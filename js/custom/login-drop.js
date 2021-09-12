/*slide toggle log dropdown in header*/
$(document).ready(function () {
    $('#menu_login_btn_id').click(function () {
        $('.login-drop').slideToggle();
        $('.login-drop-container .login-drop').toggleClass("hide-drop show-drop");
        console.log("hi")
    });
});
