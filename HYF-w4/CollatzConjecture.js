const collatz = (n) => {
  if (n <= 0) {
    throw new Error("Input must be a positive integer.");
  }
  const sequence = [n];
  let steps = 0;
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    sequence.push(n);
    steps++;
  }
  return { sequence, steps };
};

for (let i = 1; i <= 100; i++) {
  const result = collatz(i);

  if (result.steps === 20) {
    console.log(i);
    break;
  }
}

// Example usage:
const input = 18;
const result = collatz(input);
console.log(`Collatz sequence for ${input}:`, result.sequence);
console.log(`Number of steps to reach 1:`, result.steps);
