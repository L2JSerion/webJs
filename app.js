import { Location } from "./class/Location.js";

// Agregando cordenadas
var locs = new Array(
    new Array (
        new Location(30,30),
        new Location(30,120),
        new Location(120,120),
        new Location(120,30),
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
Location.randomLoc(locs).drawPoint("#10fa08");
Location.randomLoc(locs).drawPoint("#10fa08");
Location.randomLoc(locs).drawPoint("#10fa08");
Location.randomLoc(locs).drawPoint("#10fa08");
Location.randomLoc(locs).drawPoint("#10fa08");
//console.log(Location.randomLoc(locs))


if(locs[0].length > 2) {
    document.getElementById("change").classList.add("active");
}


// test function
spawnCalcArea(locs);

function spawnCalcArea(locations = new Array) {
    var pA = 0;
    var pC = 0;
    var pD = 0;

    for(let i = 0; i < locs[0].length; i++) {
        if(i == 0) {
            pA = locs[0][i]
            console.log(`Punto A: (${pA.getX()},${pA.getY()})`)
        }

        if(i == 2) {
            pC = locs[0][i]
            console.log(`Punto C: (${pC.getX()},${pC.getY()})`)
        }

        if(i == 3) {
            pD = locs[0][i]
            console.log(`Punto D: (${pD.getX()},${pD.getY()})`)
        }
    }

    let xpA = pA.getX();
    let ypA = pA.getY();
    let xpC = pC.getX();
    let ypC = pC.getY();
    let xpD = pD.getX();

    let pmX = (xpA+xpC)/2;
    let pmY = (ypA+ypC)/2;

    console.log(`Punto M: (${pmX},${pmY})`)
    new Location(pmX,pmY).drawPoint("#eee");

    let l = xpD-xpA;

    

    console.log(`Longitud: ${l}`)
    console.log(l/2)

    let x = 0;
    let y = 0;
}