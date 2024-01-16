const today = new Date();
const christmas = new Date("2023/12/25");
let difference = today.getTime() - christmas.getTime();
let days = Math.ceil(difference / (1000 * 3600 * 24));

console.log(today);
console.log(christmas);
console.log(difference);

console.log(days + " since Christmas last year!");
