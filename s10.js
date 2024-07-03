const newbird = ["bolt" , " boat", "hammer"]
const loadbird = ["apple" , "xaumi" , "realme"]

// newbird.push(loadbird)
// console.log(newbird)
// console.log(newbird[2][1])
// console.log(newbird.concat(loadbird))
// const bird = newbird.concat(loadbird)
// console.log(bird)


const newbu = [...newbird, ...loadbird] // it is better becaues we can add more arr in this as compare to concat were onlt two arr can be us
console.log(newbu)

const newbu1 = [1,2,3,[3,4,3,8,5],7,4,3]

const jj = newbu1.flat(Infinity)
console.log(jj)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting


let s =23 ; 
const s2 = 34;
var s3 = 45;

console.log(Array.of(s,s2,s3))
