let map = document.querySelector ('.map-iframe'); 
let maplistner = function (e) { 
    let frame = document.createElement ('iframe'); 
    frame.src = this.getAttribute ('data-src');  
    map.appendChild (frame); 
    map.removeEventListener ("mouseover", maplistner); 
}; 
map.addEventListener ('mouseover', maplistner);  