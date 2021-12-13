import Impuestos from "./impuesto";
import Cliente from "./cliente";

let impuesto1 = new Impuestos(1000, 200);

let cliente1 = new Cliente('Ernesto', impuesto1);
cliente1.calcularImpuesto();