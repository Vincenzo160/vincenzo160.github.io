var currentTheme = document.getElementsByTagName("meta")[0].content
var savedTheme = getCookie("theme")
var savedVariation = getCookie("variation")


if (savedTheme === "") {
    setTheme("sgt")
} else if (!(currentTheme === savedTheme)) {
    setTheme(savedTheme)
}

if (!(savedVariation === "")) {
    setVariation(savedVariation,savedTheme)
}

let selectTheme = document.querySelector(".theme-selector");

selectTheme.addEventListener("change", (event) => {
    var selection = event.target.value
    if (parseInt(selection.slice(6).slice(-1)) === 1) {
        setVariationC(selection.slice(6).slice(-1))
        setTheme(selection.slice(6, -1))
    } else {
        setVariationC("0")
        setTheme(selection.slice(6))
    }
})

function setVariationC(variation) {
    document.cookie = "variation="+ variation +"; expires=Thu, 18 Dec 9999 12:00:00 UTC; path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

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

function setVariation(savedVariation,savedTheme) {
    if (!(savedVariation === "0")) {
        if (savedTheme === "sgt") {
            var savedTheme = "main"
        }
        document.getElementById("stylesheet").setAttribute("href", "/css/"+savedTheme+savedVariation+".css");
    }
}