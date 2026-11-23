# Calculadora de Envíos (COP)

Aplicación web sencilla y módulo JavaScript para calcular el costo de envío de una tienda en pesos colombianos (COP), aplicando validación de entrada y pruebas unitarias automatizadas con Node.js.

## Regla de negocio

La calculadora recibe un **subtotal entero y no negativo**:
- Si el subtotal es **menor a 100.000 COP** (`0` a `99.999`), el costo de envío es de **8.000 COP**.
- Si el subtotal es **igual o superior a 100.000 COP** (`>= 100000`), el envío es **gratis (0 COP)**.
- Los montos **vacíos, negativos o con decimales** generan un error de validación (`TypeError` o `RangeError`).

## Requisitos previos

- Navegador web moderno (Google Chrome, Edge, Firefox).
- **Node.js 22 o superior** para ejecutar las pruebas unitarias.

## Cómo ejecutar la calculadora en el navegador

1. Abre el archivo `index.html` en tu navegador (puedes usar Live Server en VS Code o abrirlo directamente).
2. Ingresa el monto del subtotal **sin puntos ni comas** y haz clic en **Calcular**.

### Ejemplos de verificación manual

- **Ejemplo 1 (Envío con cobro):** Si escribes `99999` y pulsas *Calcular*, el resultado mostrado será: `Costo de envío: 8.000 COP`.
- **Ejemplo 2 (Envío gratis en el límite):** Si escribes `100000` y pulsas *Calcular*, el resultado mostrado será: `Costo de envío: 0 COP (¡Envío gratis!)`.
- **Ejemplo 3 (Error de validación):** Si dejas el campo vacío o escribes `-500`, el sistema mostrará un mensaje de error de validación en pantalla.

## Cómo ejecutar las pruebas automatizadas

Abre una terminal en la carpeta raíz del proyecto y ejecuta:

```bash
node --test
```

Todas las pruebas unitarias (casos límite, valores válidos y manejo de errores) se ejecutarán usando el runner nativo de Node.js.
