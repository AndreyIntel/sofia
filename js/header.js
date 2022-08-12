window.addEventListener("scroll", function() {
    const mediaQuery = window.matchMedia( '( min-width: 1201px )' )
    const navArea = document.querySelector("#header-content");
    if (mediaQuery.matches) {
        if (window.pageYOffset > 0) navArea.classList.add("is-sticky");
        else navArea.classList.remove("is-sticky");
    }
});

let statusMobileMenu = function(value) {
    if (value) document.body.classList.add('mobile-menu-active');
    else document.body.classList.remove('mobile-menu-active');
}