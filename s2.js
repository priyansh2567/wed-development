console.log("loop for in and for of");

let d = {
    name :"priyansh",
    ID : 12,
    website: "www.hello java .com",

}

for (const key in Object) {
    if (Object.hasOwnProperty.call(Object, key)) {
        const element = Object[key];
        console.log(key , element);
        
    }
}

for (const a of Object) {
    console.log(a);
    
}