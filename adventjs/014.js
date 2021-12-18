/*
¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.

👍 Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.

👎 Lo malo: la lista está desordenada y podría faltar el último...

Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (¡es el último el que falta!)
Parece fácil con una complejidad de O(n)... ¿crees que podrías hacerlo mejor?
*/
function missingReindeer(ids) {
  //sort array
  const sorted = ids.sort((a, b) => a - b);
  //get middle index
  const middle = Math.floor(sorted.length / 2);

  //if element is not 0 then 0 is missing
  if (ids.sort()[0] !== 0) {
    return 0;
  }
  //check if middle is missing
  if (ids.indexOf(middle) === -1) {
    return middle;
  }
  //get max value in array
  const ultimoIdReno = Math.max(...ids);

  for (let i = 0; i < ultimoIdReno; i++) {
    if (!ids.includes(i)) {
      return i;
    }
  }
  return ultimoIdReno + 1;
}

console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]), 8);
console.log(missingReindeer([0, 1]), 2);
console.log(missingReindeer([0]), 1);
console.log(missingReindeer([0, 2, 3]), 1);
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0]), 4);
console.log(missingReindeer([1]), 0);
console.log(missingReindeer([0, 1, 2, 3, 4, 6, 7, 8, 9, 10]), 5);
console.log(missingReindeer([0, 1, 2, 3, 5, 6, 7, 8, 9, 10]), 4);
console.log(missingReindeer([0, 1, 2, 3, 4, 5, 7, 8, 9, 10]), 6);
