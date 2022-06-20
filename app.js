import { Location } from "./class/Location.js";

var locs = new Array(
    new Array (
        new Location(0,0),
        new Location(4,0),
        new Location(0,4),
        new Location(4,4),
    ),
    new Array (
        new Location(-2,0),
        new Location(-4,0),
        new Location(-2,-2),
        new Location(-4,-2),
    ),
);

Location.drawPlane();

var lines = new Array();
locs.forEach(element => {
    element.forEach(loc => {
        loc.drawPoint();
        console.log(loc.getXY());
        lines.push(loc.getX());
        lines.push(loc.getY());
    });
});

console.log(lines);