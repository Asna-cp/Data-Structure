const users = [
  { firstname: "Asna", lastname: "cp", age: 26 },
  { firstname: "sna", lastname: "c", age: 40 },
  { firstname: "Aneesha", lastname: "ani", age: 43 },
  { firstname: "Athira", lastname: "pp", age: 21 },
  { firstname: "fathima", lastname: "kk", age: 20 },
];
const output = users.filter((x) => x.age > 30);
console.log(output);
