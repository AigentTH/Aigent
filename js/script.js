function signup() {
    window.open("https://app.aigentcorporation.com/signup");
}

function discord() {
    window.open("https://discord.gg/3xNa45WZfg");
}

function fb() {
    window.open("https://www.facebook.com/Aigent.corp");
}

function tw() {
    window.open("https://twitter.com/Aigent_corp");
}

function inst() {
    window.open("https://www.instagram.com/aigentcorporation/");
}

function signin() {
    window.open("https://app.aigentcorporation.com/signin");
}

function video() {
    const videos = document.getElementById("videos");
    videos.style.display = "flex";
}

function closeVideo() {
    const videos = document.getElementById("videos");
    videos.style.display = "none";
}

function menubar() {
    const menubar = document.getElementById("menubar");
    if (menubar.style.display == "flex") {
        menubar.style.display = "none";
    } else {
        menubar.style.display = "flex";
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.menu-icon')) {
        var dropdowns = document.getElementsByClassName("menubar");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display == "flex") {
                openDropdown.style.display = "none";
            }
        }
    }
}