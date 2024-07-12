const logo = Symbol("hihihi")

const jut = {
  name: 'Jut',
  [logo] : "jjk",
  age: 18,
  gend_er: 'male',
  isHandsome: true,
  "height": 180,
  favMovies: ['Harry Potter', 'LOTR', 'Oldboy'],
  email: 'ejeyd@example.com',
}
// console.log(jut.favMovies[0])
// console.log(jut["name"])
// console.log(jut["height"])

jut.email = 'tzirw@example.com'
console.log(jut)
Object.freeze(jut)
jut.name = 'hhu'
jut.email = 'tzirw234@example.com'
console.log(jut)
console.log(jut[logo])
console.log(typeof jut[logo])
console.log(jut.logo)
console.log(typeof jut.logo)
console.log(logo)

jut.command = function () {
  console.log('execute')
}
jut.commodity = function () {
  console.log('hello ,i know your name ' + jut.name + ' and your age is ' + jut.age)
}

console.log(jut.command())
console.log(jut.commodity())  

