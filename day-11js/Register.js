function Register(event) {
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var userinfo = { username: name, usernumber: number, useremail: email, userpassword: password };
    console.log(userinfo, "-userdata")

    localStorage.setItem("user", JSON.stringify(userinfo));
    document.getElementById("name").value=" ";
    document.getElementById("number").value=" ";
    document.getElementById("email").value=" ";
    document.getElementById("password").value=" ";
    alert("Data sored in localstorage.")

}