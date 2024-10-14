export default class Cl_vBodega {
    constructor(controlador) {
        this.vista = document.getElementById("mainForm"); 
        this.inIni10 = document.getElementById("mainForm_inIni10");
        this.inIni20 = document.getElementById("mainForm_inIni20");
        this.inIni50 = document.getElementById("mainForm_inIni50");
        this.btInicializar = document.getElementById("mainForm_btInicializar");
        this.tabla = document.getElementById("mainForm_tabla");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.lblInicial10 = document.getElementById("mainForm_lblInicial10");
        this.lblInicial20 = document.getElementById("mainForm_lblInicial20");
        this.lblInicial50 = document.getElementById("mainForm_lblInicial50");
        this.lblMontoBill10 = document.getElementById("mainForm_lblMontoBill10");
        this.lblMontoBill20 = document.getElementById("mainForm_lblMontoBill20");
        this.lblMontoBill50 = document.getElementById("mainForm_lblMontoBill50");
        this.lblMontoTotal = document.getElementById("mainForm_lblMontoTotal");
        this.btInicializar.onclick = () => controlador.inicializarBodega({
            cantBill10: this.inIni10.value,
            cantBill20: this.inIni20.value,
            cantBill50: this.inIni50.value
        });
        this.btAgregar.onclick = () => controlador.mostrarVistaCliente();
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
    reportarBilletes({
        iniBill10,
        iniBill20,
        iniBill50
    }){
        this.lblInicial10.innerHTML = iniBill10;
        this.lblInicial20.innerHTML = iniBill20;
        this.lblInicial50.innerHTML = iniBill50;
    }
    reportarDatos({
        cedula,
        denominacion,
        cantidad,
        montoCuenta,
        montoBill10,
        montoBill20,
        montoBill50,
        montoTotal,
    }) {
        this.tabla.innerHTML += `
        <tr>
            <td>${cedula}</td>
            <td>$${denominacion}</td>
            <td>${cantidad}</td>
            <td>$${montoCuenta}</td>
        </tr>
        `;
        this.lblMontoBill10.innerHTML = montoBill10;
        this.lblMontoBill20.innerHTML = montoBill20;
        this.lblMontoBill50.innerHTML = montoBill50;
        this.lblMontoTotal.innerHTML = montoTotal;
    }
}