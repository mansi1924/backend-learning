// const num = [22, 55, 85, 12, 63, 74, 15, 19, 4, 42];

// for (let i = 0; i < num.length; i++) {
//     sum += num[i];
// }

// console.log(sum);


// let sum = 0;
// num.forEach(printNum);

// function printNum(e) {
//     sum += e
// }



// console.log(sum)

// const num = [2, 3, 4, 5, 6, 13, 8, 10, 15, 17, 18, 19];

// [4,9,16,25,36]

// let sum = []
// num.forEach(squareNum);

// function squareNum(n) {
//     let square = n*n
//     // sum = n*n
//     sum.push(square);
// }
// console.log(sum)

// const square = num.map(n => n * n);
// console.log(square)

// const square = num.map(squareNum);
// function squareNum(n) {
//     return n * n
// }
// console.log(square)


// const odd = num.filter(oddNum);
// function oddNum(n) {
//     // return n % 2 === 1;
//     return n > 10;
// }

// console.log(odd)

// let odd = num.filter(oddNum);
// function oddNum(n) {
//     return n > 15;
// }

// let result = 0
// odd.forEach(sumNum);
// function sumNum(n) {
//     result += n
// }

// console.log(result)


// let initialValue = 0;
// num.reduce(printSum, initialValue);

// function printSum(a, b) {
//     return a + b
// }

// let valueNum = odd.reduce(printSum);

// function printSum(a, b) {
//     return a + b;
// }
// console.log(valueNum)


// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };
// let obj3 = { e: 5, f: 6 };

// let addValue = [obj1, obj2, obj3];
// let initialValue = {}
// const result = addValue.reduce(func, initialValue);

// function func (a,b){
//     return {...a, ...b}
// }

// console.log(result)

// const shoppingCart = [
//     { name: 'Apple', price: '1.99', quantity: 3 },
//     { name: 'Apple', price: '1.99', quantity: 3 },
//     { name: 'Xiomi', price: '2.99', quantity: 2 },
//     { name: 'Samsung', price: '3.99', quantity: 1 },
//     { name: 'Tesla', price: '3.99', quantity: 1 },
//     { name: 'Tesla', price: '4.99', quantity: 4 },
//     { name: 'Nokia', price: '4.99', quantity: 4 },
//     { name: 'Oppo', price: '1.99', quantity: 2 },
// ];
// let initialValue = {};

// const result = shoppingCart.reduce(groupItems, initialValue);

// function groupItems(acc, item) {

//     if (!acc[item.name]) {
//         acc[item.name] = [];
//     }
//     acc[item.name].push(item);

//     return acc;
// }

// console.log(result);

// const obj = {
//     phone: "123-456-7890",
//     age: 30,
//     name: "Rohit",
// };

// const reversed = {};
// const keys = Object.keys(obj);
// for (let i = keys.length - 1; i >= 0; i--) {
//     const key = keys[i];
//     reversed[key] = obj[key];
// }

// console.log(reversed);


// const country = ["india", "South Africa", "argentina", "Indonesia", "USA", "Uruguay", "Afghanistan", "Iran", "Pakistan", "china", "Portugal", "Finland",]
// const groupedCountries = country
//     .sort()
//     .reduce((acc, country) => {
//         const firstLetter = country[0].toUpperCase();
//         if (!acc[firstLetter]) {

//             acc[firstLetter] = country;
//         } else {
//             acc[firstLetter] = [];

//             acc[firstLetter].push(country);
//         }
//         return acc;
//     }, {});

// console.log(groupedCountries);


// let str = "JavaScript";
// let output = str
//     .toLowerCase()
//     .split('')
//     .map((char, i) => i % 2 === 0 ? char.toUpperCase() : char)
//     .join('')
//     .slice(2, -2);

// console.log(output);

// const person = {
//     name: "Mansi",
//     phone: "123-456-7890",
//     age: 30,
//     email: "mansi@gmail.com",
//     address: {
//         city: "Agra",
//         state: "Uttar Pradesh",
//     }
// }

// for (let [key, value] of Object.entries(person)) {
//     if (typeof value === "object") {
//         for (let [innerKey, innerValue] of Object.entries(value)) {
//             document.write(innerKey + ": " + innerValue + "<br>");
//         }
//     } else {
//         document.write(key + ": " + value + "<br>");
//     }
// }


// for (let x in person) {
//     if (typeof person[x] === "object") {
//         for (let y in person[x]) {
//             document.write(y + ": " + person[x][y] + "<br>");
//         }
//     } else {
//         document.write(x + ": " + person[x] + "<br>");
//     }
// }

// const categoryTree = {
//     name: "Electronics",
//     children: [
//         { name: "Laptops", children: [{ name: "MacBook" }, { name: "Surface" }] },
//         { name: "Phones", children: [{ name: "iPhone" }] }
//     ]
// };

// function printNames(node) {
//     console.log(node.name); // Print current node name

//     if (node.children) {
//         // Recursively call for each child
//         node.children.forEach(child => printNames(child));
//     }
// }

// printNames(categoryTree);


// document.write("my name is " + person.name + "<br>");
// alert("my name is " + person.name);
// console.log("my name is " + person.name);

// addEventListener("click", printFun);

// function printFun(event) {
//     // alert("my name is " + person.name);
//     let x = event.clientX;
//     let y = event.clientY;
//     console.log("X: " + x + ", Y: " + y);
//     document.write("X: " + x + ", Y: " + y);
// }

// let screenLog = document.querySelector("#objectHeading");
// document.addEventListener("click", printFun);

// function printFun(e) {
//     screenLog.innerText = `
//     Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}`;
// }

// let colorIndex = 0;
// document.addEventListener("click", changeBackgroundColor);

// function changeBackgroundColor() {
//     const dots = document.createElement("div");
//     document.body.appendChild(dots);
//     // document.body.style.backgroundColor = colorsCode[Math.floor(Math.random() * colorsCode.length)];
// };


const clickBtn = document.querySelector("#click");
const nameInput = document.querySelector("#nameInput");
const timeInput = document.querySelector("#timeInput");
const stopBtn = document.querySelector("#stop");
const printName = document.getElementById("printName");

let timer;
let seconds = 1;

clickBtn.addEventListener("click", function () {
    const name = nameInput.value;

    timeInput.value = "1 sec";

    timer = setInterval(() => {
        seconds++;
        timeInput.value = seconds + " sec";
    }, 1000);
});

stopBtn.addEventListener("click", function () {
    const name = nameInput.value;
    const time = timeInput.value;
    clearInterval(timer);
    printName.innerText = `Name: ${name}, Time: ${time}`;

    nameInput.value = "";
    timeInput.value = "";
});

