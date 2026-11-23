import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { calcularEnvio } from './envios.js';

describe('Pruebas unitarias - Calculadora de envíos', () => {
  // 4 casos de clase
  it('1. Subtotal justo debajo del límite (99.999 COP) debe cobrar 8.000 COP', () => {
    assert.equal(calcularEnvio(99999), 8000);
  });

  it('2. Subtotal exacto en el límite (100.000 COP) debe cobrar 0 COP (envío gratis)', () => {
    assert.equal(calcularEnvio(100000), 0);
  });

  it('3. Subtotal justo encima del límite (100.001 COP) debe cobrar 0 COP', () => {
    assert.equal(calcularEnvio(100001), 0);
  });

  it('4. Subtotal negativo (-1 COP) debe lanzar RangeError', () => {
    assert.throws(() => calcularEnvio(-1), RangeError);
  });

  // Caso adicional propuesto para la entrega (Ejercicio / Actividad)
  it('5. Caso adicional: Subtotal de 0 COP (límite inferior válido) debe cobrar 8.000 COP', () => {
    assert.equal(calcularEnvio(0), 8000);
  });

  it('6. Validación adicional: Subtotal vacío o decimal debe lanzar TypeError', () => {
    assert.throws(() => calcularEnvio(''), TypeError);
    assert.throws(() => calcularEnvio(50000.5), TypeError);
  });
});
