/*
1. Application take command line arguments in the form of process.argv ✅
2. Application can take unlimited arguments ✅
3. If no numbers are provided, the app does nothing ✅
4. If the input is a negative, ignore or skip it ✅
5. If the input is NaN, ignore or skip it ✅
*/

const input = process.argv.slice(2);

for (let i = 0; i < input.length; i++) {
  if (input[i] > 0) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, input[i] * 1000);
  }
}

console.log(input);