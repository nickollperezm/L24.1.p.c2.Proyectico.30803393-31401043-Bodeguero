export default class Cl_vCliente {
    constructor(controlador) {
        this.vista = document.getElementById("clienteForm");
        this.inCedula = document.getElementById("clienteForm_inCedula");
        this.inDenominacion = document.getElementById("clienteForm_inDenominacion");
        this.inCantidad = document.getElementById("clienteForm_inCantidad");
        this.btAceptar = document.getElementById("clienteForm_btAceptar");
        this.btAceptar.onclick = () => controlador.agregarCliente({
                cedula: this.inCedula.value,
                denominacion: this.inDenominacion.value,
                cantidad: this.inCantidad.value
            });
        this.ocultar();
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}