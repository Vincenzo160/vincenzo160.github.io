var currentTheme = document.getElementsByTagName("meta")[0].content
var savedTheme = document.cookie.slice(6)
var defaultTheme = "sgt"

if (!(currentTheme === savedTheme)) {
    setTheme(savedTheme)
} else if (savedTheme === "") {
    selectTheme(defaultTheme)
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
    setCookie(theme)
    if (theme === defaultTheme) {
        location.replace("/")
    } else {
        location.replace("/themes/"+theme)
    }
}
