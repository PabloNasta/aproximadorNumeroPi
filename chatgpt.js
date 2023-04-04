function approximatePi(radius, numDarts, numSimulations) {
  let numDartsInsideCircle = 0;
  let piApproximations = [];

  for (let i = 1; i <= numSimulations; i++) {
    let numDartsInsideCurrentCircle = 0;

    for (let j = 1; j <= numDarts; j++) {
      let x = Math.random() * radius;
      let y = Math.random() * radius;

      if (x * x + y * y <= radius * radius) {
        numDartsInsideCircle++;
        numDartsInsideCurrentCircle++;
      }
    }

    let piApproximation = (4 * numDartsInsideCurrentCircle) / numDarts;
    piApproximations.push(piApproximation);
  }

  let piAverage =
    piApproximations.reduce((a, b) => a + b) / piApproximations.length;

  return {
    numDartsInsideCircle: numDartsInsideCircle,
    piApproximations: piApproximations,
    piAverage: piAverage,
  };
}

// Ejemplo de uso
let approximation = approximatePi(1, 1000, 10);
console.log(approximation);
console.log("cualquier cosa");
