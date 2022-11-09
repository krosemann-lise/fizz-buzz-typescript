export function fizzBuzz(upperLimit: number): string[] {
  return rangeFrom1To(upperLimit).map(it => fizzBuzzOrNumber(it))
}

function rangeFrom1To(upperLimit: number): number[] {
  return [...Array(upperLimit).keys()];
}

function fizzBuzzOrNumber(number: number) {
  return number % 15 == 0
    ? "FizzBuzz"
    : number % 3 == 0
      ? "Fizz"
      : number % 5 == 0
        ? "Buzz"
        : `${number}`;
}

const subject = fizzBuzz(50)

console.log(subject)

// tests

function test(testname: string, condition: boolean) {
  if(condition)
    console.log(`Test ${testname}: Passed!`)
  else
    console.log(`Test ${testname}: Failed :(`)
}


test("First element is 1", subject[1] === "1")
test("Second element is 'Fizz'", subject[2] === "Fizz")
test("Third element is 'Fizz'", subject[3] === "Fizz")
test("Fifth element is 'Buzz'", subject[5] === "Buzz")
