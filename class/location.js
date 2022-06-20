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
        lineX.style.cssText = `width: ${xWidth+200}px; transform: translateX(-${xWidth/2+100}px);`;
        lineY.style.cssText = `height: ${yHeight+200}px; top: -${yHeight/2+100}px;`;
        origin.appendChild(lineX);
        origin.appendChild(lineY);
    }

    drawPoint() {
        const pointLoc = document.getElementById("origin");
        
        if(this.x === 0 && this.y === 0) {
            const point = document.createElement("div");
            point.className = "point";
            point.style.cssText = `top: 2.25px; left: 2.25px`;
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

            point.style.cssText = `top: ${2.25+(20*_y)}px; left: ${2.25+(20*_x)}px`;
            pointLoc.appendChild(point);
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

    setLine(points = new Array()) {
        console.log(points);
    }
}