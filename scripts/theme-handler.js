var currentTheme = document.getElementsByTagName("meta")[0].content
var savedTheme = document.cookie.slice(6)

if (savedTheme === "") {
    console.log("aaaa")
    setTheme("sgt")
} else if (!(currentTheme === savedTheme)) {
    setTheme(savedTheme)
}

let selectTheme = document.querySelector(".theme-selector");

selectTheme.addEventListener("change", (event) => {
    var selection = event.target.value
    setTheme(selection.slice(6))
})

function setCookie(theme) {
    document.cookie = "theme="+ theme +"; expires=Thu, 18 Dec 9999 12:00:00 UTC; path=/";
}
function setTheme(theme) {
    console.log(theme)
    if (theme === "sgt") {
        setCookie("sgt")
        location.replace("/")
    } else {
        setCookie(theme)
        location.replace("/themes/"+theme)
    }
}
