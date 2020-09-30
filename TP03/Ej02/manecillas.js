class Manecilla {

    context;
    x;
    y;
    largo;
    largo_sobrante;
    direccion;
    color;
    line_width;

    constructor(context, x, y, largo, largo_sobrante = 0, direccion, color = "#000000FF", line_width = 2) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.largo = largo;
        this.largo_sobrante = largo_sobrante;
        this.direccion = this.determinarAnguloEnDireccion(direccion);
        this.color = color;
        this.line_width = line_width;
    }
    setDireccion(new_direccion) {
        this.direccion = this.determinarAnguloEnDireccion(new_direccion);
    }
    determinarAnguloEnDireccion(direccion) {
        let pi = Math.PI;
        return pi - ((direccion * 2 * pi));
    }

    draw() {
        let inicio_aguja = this.getDirectionPoint(this.largo_sobrante, this.direccion + Math.PI);
        let fin_aguja = this.getDirectionPoint(this.largo, this.direccion);

        this.context.beginPath();
        this.context.moveTo(inicio_aguja.x, inicio_aguja.y);
        this.context.lineTo(fin_aguja.x, fin_aguja.y);
        // this.context.moveTo(10,10);
        // this.context.lineTo(500,500);
        this.context.lineWidth = this.line_width;
        this.context.strokeStyle = this.color;
        this.context.stroke();

    }
    getDirectionPoint(hipotenusa = this.largo, angulo = this.direccion) {
        let new_point = {
            x: this.x,
            y: this.y
        }

        new_point.x += hipotenusa * Math.sin(angulo);
        new_point.y += hipotenusa * Math.cos(angulo);

        return new_point;
    }

}