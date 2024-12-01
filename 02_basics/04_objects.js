//const tinderUser = {}//non-singleton obeject

const tinderUser = new Object()//singleton obj

tinderUser.id = "123ab"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname:{
            firstname: "ram",
            lastname:"bahadur"
        }
    }
}
console.log(regularUser.fullname?.userfullname.lastname);//? is used for if their is any value available

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 ={
    3: "c",
    4: "d"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)//to merge two objects // rarely used

const obj3 = {...obj1, ...obj2}//spread operator is used mainly to merge objects
console.log(obj3);


//when data comes from DB it comes in the form of arrays of objects
const users = [
    {
        id: 1,
        email: "p@gamil.com"
    },
    {

    },
    {

    },
]
// users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//EVERY KEY VALUE PAIR IS MADE INTO DIFF ARRAY

console.log((tinderUser.hasOwnProperty('name')));//it is done to show that the property is in the obejct show that their is no crash in the system


const course = {
    cousre: "JavaScript",
    price: "333",
    courseTeacher: "Hitesh"

}

// course.courseTeacher
const {courseTeacher} = course
console.log(courseTeacher);

const {courseTeacher: teacher} = course
console.log(teacher);

// const navbar = ({company})=>{

// }
// navbar(company = "youtube")


//JSON
// {
//     "name": "Prasun",
//     "age": "21",
//     "email": "prasunsuwal@gmail.com"
// }



