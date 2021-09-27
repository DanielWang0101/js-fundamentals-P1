function exercise12() {
  // Exercise 12
  //
  // Write a program that generates a list of all prime numbers from 1 and 200.
  // Prime numbers have exactly two factors.
  // A prime number is a number that is ONLY divisible by 1 and itself.
  //
  // 6 -> NOT prime (2 * 3)
  // 7 -> PRIME (can only be divided by 1 and 7, no other numbers)
  // 12 -> NOT prime (3 * 4, 2 * 6)
  // 37 -> PRIME ()
  //
  //
  // EXPECTED OUTPUT: [2, 3, 5, 7, 11, 13, ...]
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  let result = [];
  for (let i = 1; i <= 200; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
      result.push(i);
    }
  }
  return console.log(result);
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-12

module.exports = exercise12;
