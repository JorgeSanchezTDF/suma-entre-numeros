/*
Suma entre Números

• Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27
*/

let numero1: number = Number(prompt("Ingrese el primer numero"));
let numero2: number = Number(prompt("Ingrese el segundo numero"));
let suma: number = 0;

for (let i = numero1; i <= numero2; i++) {
  suma = suma + i;
}

console.log(
  "La suma de los numeros entre " + numero1 + " y " + numero2 + " es: " + suma
);
