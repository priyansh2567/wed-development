const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const neewNums = myNumers.map( (num) => { return num + 10})

console.log(neewNums);
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
const neeewNums = myNumers.filter( (num) => num >= 5)

console.log(neeewNums);

const shope = [
    { product:"soap",
        price: 23

    },
    { product:"gum",
        price: 120

    },
    { product:"coffe",
        price: 56

    },
    { product:"pen",
        price: 20

    },
]

const neeeewNums = shope.reduce( (num , iteam) => num + iteam.price,0)

console.log(neeeewNums);


