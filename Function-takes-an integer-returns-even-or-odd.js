//Create a function that takes an integer as an argument and returns "even" for even numbrs or "odd" for odd numbers

function even_or_odd(number) {
    return Math.abs(number) % 2 === 1 ? "Odd" : "Even";
  }