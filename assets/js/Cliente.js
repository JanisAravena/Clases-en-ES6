import Impuesto from './Impuesto.js';

export default class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(value) {
    this._nombre = value;
  }

  get impuesto() {
    return this._impuesto;
  }

  set impuesto(value) {
    this._impuesto = value;
  }

  // Método para calcular el impuesto total a pagar
  calcularImpuesto() {
    const { montoBrutoAnual, deducciones } = this._impuesto;
    return (montoBrutoAnual - deducciones) * 0.21;
  }
}
