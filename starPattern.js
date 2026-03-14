let n = 6;

for (let i = 1; i <= n; i++) {
  let num = i % 2;
  let row = "";

  for (let j = 1; j <= i; j++) {
    row = row + num;
    num = num === 1 ? 0 : 1;
  }
  console.log(row);
}
