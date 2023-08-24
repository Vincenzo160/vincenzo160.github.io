var currentTheme = document.getElementsByTagName("meta")[0].content
var savedTheme = document.cookie.slice(6)

if (currentTheme === savedTheme || savedTheme === "") {
    
} else {
    setTheme(savedTheme)
}

let selectTheme = document.querySelector(".theme-selector");

selectTheme.addEventListener("change", (event) => {
    var selection = event.target.value
    if (selection == "theme-sgt") {
        setTheme(selection.slice(6))
    } else if (selection == "theme-glass") {
        setTheme(selection.slice(6))
    }
})

function setCookie(theme) {
    document.cookie = "theme="+ theme +"; expires=Thu, 18 Dec 9999 12:00:00 UTC; path=/";
}
function setTheme(theme) {
    if (theme === "sgt") {
        setCookie("sgt")
        location.replace("/")
    } else {
        setCookie(theme)
        location.replace("/themes/"+theme)
    }
}
