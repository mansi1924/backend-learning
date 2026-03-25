// function myFunction() {
//     document.getElementById("heading").innerHTML = "Hello World";
// }

// const buttons = document.querySelectorAll('button');
// console.log(buttons);
// console.log(typeof buttons);
// console.log(buttons.length);


// const heading = document.querySelector('h2');

// btn.addEventListener("click", myFunction);

// function myFunction() {
//     heading.innerText = btn.innerText;
// }

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function () {
//         heading.innerHTML = buttons[i].innerHTML;
//         buttons[i].classList.add("active");
//     })

// }



// buttons.forEach((buttons) => {
//     buttons.addEventListener("click", function myFunction() {
//         heading.innerText = buttons.innerText;
//     });

// })


// for (let text = 100; text > 0; text--) {
//     if (text === 50) {
//         continue;
//     }
//     console.log(text);
// }

// let str = "Javascript is awesome";
// let a = str.lastIndexOf('j'); //-1
// let b = str.lastIndexOf('J'); //0
// let c = str.lastIndexOf("a"); //14
// console.log(a + b + c); //13

// let d = str.indexOf("i"); //7
// let e = str.indexOf("i", 10); //11
// console.log(d + e); //18


// let text = "Javascript is awesome. Javascript is fun.";
// let result = text.replaceAll("Javascript", "JS").indexOf("awesome") - text.lastIndexOf("is");
// console.log(result);


// let a = text.length;
// let b = text.indexOf(".");
// let c = text.length - text.lastIndexOf(".");
// console.log(a + b - c)

// let a = text.slice(10, 15);
// let b = text.slice(0, 10);
// console.log(a + b)

// let numbers = [2, 4, 6, 1, 8];
// let a = numbers.pop();
// let b = numbers.push(a);
// let c = numbers.shift();
// let d = numbers.unshift(c);

// console.log(numbers)
// console.log(numbers[0] + numbers[4]);

// let a = numbers.push(10, 11);
// let b = a++;
// let c = numbers[0];
// let d = ++c + numbers.pop();
// console.log(++d);

// let numbers = [10, 11, 12, 13];
// let a = numbers.shift();
// let b = ++a + 1;
// let c = a + b + 1;
// let d = numbers.unshift(a, b);
// let e = numbers[0] + numbers[4];
// console.log(d);

// let names = ["Ram", "Shyam", "Seeta", "Geeta"];
// let a = names.pop();
// names.unshift(a);
// let b = names.pop();
// let c = names.pop();
// names.push(c, b);
// console.log(names[0].length + names[names.length - 1].length);


// let phrase = "Hello, World";
// let result = phrase.slice(-6, -1).split("").reverse().join("+");
// console.log(result);

// let queue = ["Tom", "Jack", "Sarah"];
// queue.push("Emma");
// queue.shift();
// queue.unshift("Mike");
// queue.splice(1,1,"Anna", "Chris");
// console.log(queue.length);
// console.log(queue[2]);

// let arr = [1, 2, 3, 4];
// let result = arr.splice(1, 2);
// console.log(arr); // [1,4]
// console.log(result); //[2,3]

// let arr = [10, 20, 30];
// arr.splice(1, 0, 15);
// console.log(arr); // [10, 15, 20,30]


// let arr = [1, 2, 3, 4, 5];
// let a = arr.splice(2, 1); //[1,2,4,5]
// let b = arr.splice(1, 2);//[1,4,5]
// console.log(arr); // [1,4,5]
// console.log(a);//[3]
// console.log(b);//[2,3]

// let arr = ["a", "b", "c", "d"];
// let result = arr.splice(-2, 1, "x", "y");
// console.log(arr); //["a", "b", "x", "y","d"]
// console.log(result); //["c"]

// let x = 1;
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         x++;
//     }
// }
// console.log(x); //25

// let y = 1;
// for (let i = 1; i <= 5; i++) {
//     for (let j = i + 1; j <= 5; j++) {
//         y++;
//     }
// }
// console.log(y); 

// let z = 1;
// for (let i = 1; i <= 5; i++) {
//     for (let j = i + 1; j <= 5; j++) {
//         z = z + i;
//     }
// }
// console.log(z);

// let text = "";
// let j = 5;
// let i = 1;
// while (i <= 10) {
//     if (i === 1) {
//         text = j * i;
//     } else {
//         text = text + "," + j * i;
//     }
//     // console.log(text);
//     i++
// }
// document.getElementById("heading").innerHTML = text;

// let names = [];

// const nameInput = document.getElementById("nameInput");
// const nameButton = document.getElementById("nameButton");
// const sortButton = document.getElementById("sortButton");
// const sortOrder = document.getElementById("sortOrder");
// const para = document.getElementById("para");
// const wordCount = document.getElementById("wordCount");

// nameButton.addEventListener("click", function () {
//     const name = nameInput.value;
//     names.push(name);
//     console.log(names);
//     nameInput.value = "";
//     nameInput.focus();
//     // if (name) {
//     // document.getElementById("heading").innerHTML = "Hello, " + name + "!";
//     // } else {
//     //     document.getElementById("heading").innerHTML = "Please enter your name.";
//     // }
// });

// sortButton.addEventListener("click", function () {
//     if (sortOrder.value === "ascending") {
//         names.sort();
//     } else {
//         names.sort().reverse();
//     }
//     document.getElementById("heading").innerHTML = names.join(", ");
// });

// para.addEventListener("keyup", function () {
//     const text = para.value;
//     const reversed = text.split('').reverse().join('');

//     console.log(reversed);
//     document.getElementById("paragarph").innerHTML = reversed;
//     count = text.length;
//     document.getElementById("wordCount").innerHTML = " " + count + "/200";
//     if (count <= 170) {
//         wordCount.style.color = "black";
//     } else {
//         wordCount.style.color = "red";
//     }

//     console.log(count);
// });


// function mapArray(array, callback) {
//     const mappedArray = [];
//     for (let element of array) {
//         mappedArray.push(callback(element));
//     }
//     return mappedArray;
// };

// function double(num) {
//     return num * 2;
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log(mapArray(numbers, double)); // [2, 4, 6, 8, 10]

// ///////

// function counter() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     };
// }
// const incrementCounter = counter();
// console.log(incrementCounter());
// console.log(incrementCounter());
// console.log(incrementCounter());


// function filterArray(array, callback) {
//     const filteredArray = [];
//     for (let element of array) {
//         if (callback(element)) {
//             filteredArray.push(element);
//         }
//     }
//     return filteredArray;
// }
// function isEven(num) {
//     return num % 2 === 0;
// }

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(filterArray(number, isEven));



// function a(text, func) {
//     func(text, "Rohit");
// }

// function b(text, name) {
//     console.log(text + " " + name);
// }

// a("Hello", b);

// /////


// const obj = {
//     phone: "123-456-7890",
//     age: 30,
//     name: "Rohit",
// };

// for (let key in obj) {
//     console.log(key + ": " + obj[key]); // phone: 123-456-7890, age: 30, name: Rohit
// }

// const keys = Object.keys(obj);
// console.log(keys); // ["phone", "age", "name"]

// keys.reverse();
// console.log(keys); // ["name", "age", "phone"]


// for (let key of keys) {
//     console.log(key + ": " + obj[key]);
// }

// const person = {
//     name: "Aaryan",
//     email: "aaryan22@gmail.com",
//     phone: "123-456-7890",
//     address: {
//         city: "New York",
//         state: "NY",
//         zip: "10001"
//     },
//     isMarried: false,
// };
// console.log(Object.keys(person).length); //4
// console.log(Object.entries(person)[2].length); //2
// console.log(Object.entries(person)[2][0].length); //6


// let single = !person.isMarried; // true
// let len = Object.entries(person).length; //5
// let num = single + len; //6


// Object.freeze(person);
// person.instagram = "aaryan_insta"; // this will not added into object
// person.phone = "987-654-3210"; // also this will not updated
// console.log(Object.keys(person).length); //5
// console.log(person.phone);//123-456-7890

/////
let keyInput = document.getElementById("keyInput");
let valueInput = document.getElementById("valueInput");
let objectButton = document.getElementById("objectButton");
keyInput.addEventListener("input", function () {
    const key = keyInput.value;
    console.log(key);
});

valueInput.addEventListener("input", function () {
    const value = valueInput.value;
    console.log(value);
});

const obj22 = {};
objectButton.addEventListener("click", function () {
    // const key = keyInput.value;
    // const value = valueInput.value;
    // obj22[key] = value;
    // console.log(obj22);
    // keyInput.value = "";
    // valueInput.value = "";
    // keyInput.focus();
    console.log("nanme")
});