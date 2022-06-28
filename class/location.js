export class Location {

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    static drawPlane() {
        let xWidth = window.innerWidth / 2;
        let yHeight = window.innerHeight / 2;

        // Generando el punto de origen
        const origin = document.createElement("div");
        origin.id = "origin";
        origin.style.cssText = `margin-left: ${xWidth}px !important; margin-top: ${yHeight}px !important;`;
        document.body.appendChild(origin);

        // creando lineas de cordenadas X, Y
        const lineX = document.createElement("div");
        const lineY = document.createElement("div");
        lineX.id = "x";
        lineY.id = "y";
        lineX.style.cssText = `width: ${xWidth}px; transform: translateX(-${xWidth/2}px);`;
        lineY.style.cssText = `height: ${yHeight}px; top: -${yHeight/2}px;`;
        origin.appendChild(lineX);
        origin.appendChild(lineY);
    }

    drawPoint(color = "#ff0000") {
        const pointLoc = document.getElementById("origin");
        if(pointLoc) {
            if(this.x === 0 && this.y === 0) {
                const point = document.createElement("div");
                point.className = "point";
                point.style.cssText = `top: 2.25px; left: 2.25px; background-color: ${color};`;
                pointLoc.appendChild(point);
            }
            else {
                let _x = 0;
                let _y = 0;
                const point = document.createElement("div");
                point.className = "point";
    
                if(this.x > 0) {
                    for(let i = 0; i < this.x; i++) {
                        _x++;
                    }
                }
                else {
                    for(let i = 0; i > this.x; i--) {
                        _x--;
                    }
                }
    
                if(this.y > 0) {
                    for(let i = 0; i < this.y; i++) {
                        _y--;
                    }
                }
                else {
                    for(let i = 0; i > this.y; i--) {
                        _y++;
                    }
                }
    
                point.style.cssText = `top: ${2.25+_y}px; left: ${2.25+_x}px; background-color: ${color};`;
                pointLoc.appendChild(point);
                
            }
        }
        else {
            throw new Error("Debes llamar el metodo static drawPlane para ver el mapa.");
        }
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getXY() {
        return `[${this.x},${this.y}]`;
    }

    getLocation() {
        const location = document.querySelector(".point");
        return `[${location.getBoundingClientRect().left},${location.getBoundingClientRect().top}]`;
    }

    static randomLoc(locations = new Array) {
        let xAxis = 0, yAxis = 0;
        let xMin = 999, xMax = -999, yMin = 999, yMax = -999;
        for (const iterator of locations) {
            for (const i of iterator) {
                
                if(i.getX() < xMin) {
                    xMin = i.getX();
                }

                if(i.getX() > xMax) {
                    xMax = i.getX();
                }

                if(i.getY() < yMin) {
                    yMin = i.getY();
                }

                if(i.getY() > yMax) {
                    yMax = i.getY();
                }
            }
        }

        xAxis = Math.floor(Math.random() * (xMax - xMin + 1)) + xMin;
        yAxis = Math.floor(Math.random() * (yMax - yMin + 1)) + yMin;

        return new Location(xAxis, yAxis);
    }
}