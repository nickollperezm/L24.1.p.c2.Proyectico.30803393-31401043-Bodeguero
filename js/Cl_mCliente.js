export default class Cl_mCliente {
    constructor({ cedula, denominacion, cantidad }) {
        this.cedula = cedula;
        this.denominacion = denominacion;
        this.cantidad = cantidad;
    }
    set cedula(cedula) {
        this._cedula = +cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set denominacion(denominacion) {
        this._denominacion = +denominacion;
    }
    get denominacion() {
        return this._denominacion;
    }
    set cantidad(cantidad) {
        this._cantidad = +cantidad;
    }
    get cantidad() {
        return this._cantidad;
    }
    montoCuenta() {
        return this.denominacion * this.cantidad;
    }
}