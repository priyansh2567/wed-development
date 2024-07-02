console.log("loop for in and for of");

let d = {
    name :"priyansh",
    ID : 12,
    website: "www.hello java .com",

}

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(key , object);
        
    }
}

for (const a of priyansh) {
    console.log(a);
    
}