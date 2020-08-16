var usercount = 0;
function comment() {

    usercount++;
    let userName = document.querySelector("#name").value;
    let password = document.querySelector("#password").value;

    const user = document.querySelector(".user1").cloneNode(true);
    user.children[0].innerText = "User " + usercount;
    user.children[1].innerText = "Username: " + userName;
    user.children[2].innerText = "Password: " + password;

    const userIinfo = document.querySelector(".user-info");
    userIinfo.insertBefore(user, userIinfo.lastChild);
    document.querySelector("#name").value = "";
    document.querySelector("#password").value = "";


}