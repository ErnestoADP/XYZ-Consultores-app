export default class Impuestos {
    constructor(monto_bruto_anual, deducciones) {
        this._monto_bruto_anual = monto_bruto_anual;
        this._deducciones = deducciones;
    }
    get montoBruto() {
        return this._monto_bruto_anual;
    }

    get deducciones() {
        return this._deducciones;
    }
    set montoBruto(montoAnualNuevo) {
        this._monto_bruto_anual = montoAnualNuevo;
    }

    set deducciones(deduccionesNuevas) {
        this._deducciones = deduccionesNuevas;
    }
}