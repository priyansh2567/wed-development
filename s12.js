// const s3ing  = new Object();
const s5 = {}

s5.id = "heinsinkn"
s5.name = "h5654"
s5.right = true

// console.log(s5);


const s6 = {
  email : "tzirw@example.com",
  fullname:{
    fu : "hh",
    hu : "jj",
    ju :{
      ji : "jjj",
      ju : "jjjy"
    }
  }
}

// console.log(s6.fullname.ju);

const users = [
  {
      id: 1,
      email: "h@gmai66l.com"
  },
  {
      id: 1,
      email: "h@gmail.333com"
  },
  {
      id: 1,
      email: "h@gmail.com78"
  },
]

console.log(users[1].email)



console.log(Object.keys  (s5));
console.log(Object. values (s5));
console.log(Object. entries  (s5));


console.log(Object.hasOwnProperty('h5654'));


const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(course .courseInstructor);
// console.log(instructor);



