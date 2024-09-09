import Cliente from './Cliente.js';
import Impuesto from './Impuesto.js';

// Crear una instancia de Impuesto
// Crear una instancia de Cliente
// Calcular e imprimir el impuesto total a pagar

const impuesto1 = new Impuesto(100000, 20000);

const cliente1 = new Cliente('XYZ Consultores', impuesto1);

console.log(`El impuesto total a pagar por ${cliente1.nombre} es: ${cliente1.calcularImpuesto()}`);
