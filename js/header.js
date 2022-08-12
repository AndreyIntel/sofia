
// 👻 Footer map
let map = document.getElementById ('mymap'); 
    let maplistner = function (e) { 
        let frame = document.createElement ('iframe'); 
        frame.src = this.getAttribute ('data-src'); 
        map.appendChild (frame); 
        map.removeEventListener ("mouseover", maplistner); 
    }; 
map.addEventListener ('mouseover', maplistner); 

// 👻 Header height effect
window.addEventListener("scroll", function() {
    const mediaQuery = window.matchMedia( '( min-width: 1201px )' )
    const navArea = document.querySelector("#header-content");
    if (mediaQuery.matches) {
        if (window.pageYOffset > 0) navArea.classList.add("is-sticky");
        else navArea.classList.remove("is-sticky");
    }
});

// 👻 Mobile menu open or close (for scroll mobile)
let statusMobileMenu = function(value) {
    if (value) document.body.classList.add('mobile-menu-active');
    else document.body.classList.remove('mobile-menu-active');
}