export default class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombreNuevo) {
        this._nombre = nombreNuevo;
    }


    calcularImpuesto() {
        //((monto_bruto_anual − deducciones) * 21%)
        console.log((this._impuesto.montoBruto - this._impuesto.deducciones) * 0.21)
    }
}