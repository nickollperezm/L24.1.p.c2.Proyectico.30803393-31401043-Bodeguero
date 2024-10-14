export default class Cl_mBodega {
    constructor({ cantBill10, cantBill20, cantBill50 }) {
        this.cantBill10 = +cantBill10;
        this.cantBill20 = +cantBill20;
        this.cantBill50 = +cantBill50;
        this.acmBill10 = 0;
        this.acmBill20 = 0;
        this.acmBill50 = 0;
    }
    procesarCliente(cliente) {
        if (cliente.denominacion == 10) {
            this.acmBill10 += cliente.cantidad;
        } else if (cliente.denominacion == 20) {
            this.acmBill20 += cliente.cantidad;
        } else if (cliente.denominacion == 50) {
            this.acmBill50 += cliente.cantidad;
        }
    }
    iniBill10(){
        return this.cantBill10;
    }
    iniBill20(){
        return this.cantBill20;
    }
    iniBill50(){
        return this.cantBill50;
    }
    montoBill10() {
        return (this.cantBill10 * 10) + (this.acmBill10 * 10);
    }
    montoBill20() {
        return (this.cantBill20 * 20) + (this.acmBill20 * 20);
    }
    montoBill50() {
        return (this.cantBill50 * 50) + (this.acmBill50 * 50);
    }
    montoTotal() {
        return this.montoBill10() + this.montoBill20() + this.montoBill50();
    }
}