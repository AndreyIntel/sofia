window.addEventListener("scroll", function() {
    const mediaQuery = window.matchMedia( '( min-width: 1201px )' )
    const navArea = document.querySelector("#header-content");
    if (mediaQuery.matches) {
        if (window.pageYOffset > 0) navArea.classList.add("is-sticky");
        else navArea.classList.remove("is-sticky");
    }
});