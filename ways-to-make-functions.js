// function doctorize(name) {
//     return `Dr. ${name}`;
// }

//Anon Function - it throws error
// function(name) {
//   return `Dr. ${name}`;
// }

// Function Expression
// const doctorize = function (name) {
//   return `Dr. ${name}`;
// };

// normal functions can be access before initialization in js
// console.log(doctorize("Wes"));
// function doctorize(name) {
//   return `Dr. ${name}`;
// }

//Arrow functions - doesn't need to write return keyword
// const inchToCM = (inches) => inches * 2.54;
//if only one parameter
// const inchToCM = (inches) => inches * 2.54;

//arrow functions returning object
const makeBaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

//IIF

//Methos !!!
const wes = {
  name: "wes Bos",
  sayHI: function () {
    console.log(`Hey ${this.name}`);
    return "Hey Wes";
  },

  //short hand func
  yellHi() {
    console.log("Hey Wesssssss");
  },
  //Arrow func
  wisperHi: () => {
    console.log("Hey wes I am a mouse");
  },
};

//callback functions
// const button = document.querySelector(".clickMe");
// button.addEventListener("click", wes.yellHi);

//2nd way
// function handledClick() {
//   console.log("Great Clicking!!");
// }
// button.addEventListener("click", handledClick);

//3rd way
// button.addEventListener("click", function () {
//   console.log("Nice Click!!");
// });
