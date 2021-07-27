/*
  example for optimizing
*/
const start = new Date()

const ITRATIONS = 20000

function myFunc(obj) {
  return obj.x
}
// monomorphic
const obj1 = { x: 1 }
for (let i = 0; i < ITRATIONS; ++i) {
  myFunc(obj1);
}
// polymorphic
const obj2 = { x: true }
for (let i = 0; i < ITRATIONS; ++i) {
  myFunc(obj2);
}

const obj3 = { x: ["1", "2"] }
for (let i = 0; i < ITRATIONS; ++i) {
  myFunc(obj3);
}

// megamorphic
const obj4 = { x: "String" }
for (let i = 0; i < ITRATIONS; ++i) {
  myFunc(obj4);
}
console.log(`total time: ${new Date() - start}`)