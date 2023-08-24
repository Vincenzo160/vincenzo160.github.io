let selectTheme = document.querySelector(".theme-selector");

selectTheme.addEventListener("change", (event) => {
    var selection = event.target.value
    if (selection == "theme-sgt") {
        location.replace("/")
    } else if (selection == "theme-glass") {
        location.replace("/themes/glass.html")
    }
})

