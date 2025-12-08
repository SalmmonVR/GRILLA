window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1200);

    let ua = navigator.userAgent;
    if (ua.includes("OculusBrowser") || ua.includes("PicoBrowser")) {
        document.getElementById("vrNotice").style.display = "block";
    }
};

document.getElementById("menuBtn").onclick = () => {
    let menu = document.getElementById("mobileMenu");
    menu.style.left = (menu.style.left === "0%") ? "-100%" : "0%";
};
