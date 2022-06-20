import { Location } from "./class/Location.js";

// Agregando cordenadas
var locs = new Array(
    new Array (
        new Location(-6,0),
        new Location(0,6),
        new Location(6,0),
        new Location(0,-6),
    )
);

// Dibujando plano cartesiano
Location.drawPlane();

// Dibujando cordenadas
locs.forEach(element => {
    element.forEach(loc => {
        loc.drawPoint();
    });
});

// Agregando punto aleatorio
Location.randonLoc(locs).drawPoint("#10fa08");

if(locs[0].length > 2) {
    document.getElementById("change").classList.add("active");
}