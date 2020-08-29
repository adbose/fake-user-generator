const url = "https://randomuser.me/api/";

let avatar = document.getElementById("avatar");
let fullname = document.getElementById("fullname");
let username = document.getElementById("username");
let email = document.getElementById("email");
let city = document.getElementById("city");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(printError);
});

function handleErrors(res) {
    if (!res.ok) {
        throw error(res.status);
    }
    console.log(res);
    return res;
}

function parseJSON(res) {
    return res.json();
}

function updateProfile(response) {
    profile = response.results[0];
    avatar.src = profile.picture.medium;
    fullname.innerHTML =
        profile.name.first + " " + profile.name.last;
    username.innerHTML = profile.login.username;
    email.innerHTML = profile.email;
    city.innerHTML = profile.location.city;
    return 1;
}

function printError(error) {
    console.log(error);
}