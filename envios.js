/**
 * Calcula el costo de envío en COP según el subtotal de la compra.
 * Regla de negocio:
 * - Subtotal entero y no negativo.
 * - Si subtotal < 100000 -> 8000 COP.
 * - Si subtotal >= 100000 -> 0 COP.
 * - Vacíos, negativos o decimales arrojan error de validación.
 */
export function calcularEnvio(subtotal) {
  if (subtotal === '' || subtotal === null || subtotal === undefined || typeof subtotal === 'boolean') {
    throw new TypeError('El subtotal es obligatorio y debe ser un número entero.');
  }

  const valor = Number(subtotal);

  if (!Number.isFinite(valor) || !Number.isInteger(valor)) {
    throw new TypeError('El subtotal debe ser un número entero válido sin decimales.');
  }

  if (valor < 0) {
    throw new RangeError('El subtotal no puede ser un valor negativo.');
  }

  return valor >= 100000 ? 0 : 8000;
}
