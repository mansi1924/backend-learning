// let keyInput = document.getElementById("keyInput");
// let valueInput = document.getElementById("valueInput");
// let objectButton = document.getElementById("objectButton");
// let sortObject = document.getElementById("sortObject");
// let objectHeading = document.getElementById("objectHeading");

// const obj22 = {};

// // Add key-value to object
// objectButton.addEventListener("click", function () {
//     const key = keyInput.value;
//     const value = valueInput.value;

//     obj22[key] = value;

//     keyInput.value = "";
//     valueInput.value = "";
//     keyInput.focus();

//     displayObject(obj22);
// });

// // Bubble Sort Function
// function bubbleSortKeys(obj, order) {
//     let orderedKeys = Object.keys(obj);

//     for (let i = 0; i < orderedKeys.length - 1; i++) {
//         for (let j = 0; j < orderedKeys.length - i - 1; j++) {

//             let shouldSwap = false;

//             if (order === "ascending") {
//                 shouldSwap = orderedKeys[j] > orderedKeys[j + 1];
//             } else if (order === "descending") {
//                 shouldSwap = orderedKeys[j] < orderedKeys[j + 1];
//             }

//             if (shouldSwap) {
//                 let temp = orderedKeys[j];
//                 orderedKeys[j] = orderedKeys[j + 1];
//                 orderedKeys[j + 1] = temp;
//             }
//         }
//     }

//     // Rebuild sorted object
//     let sortedObj = {};
//     orderedKeys.forEach(key => {
//         sortedObj[key] = obj[key];
//     });

//     return sortedObj;
// }

// // When dropdown changes → sort
// sortObject.addEventListener("change", function () {
//     let sorted = bubbleSortKeys(obj22, sortObject.value);
//     displayObject(sorted);
// });

// // Display function
// function displayObject(obj) {
//     objectHeading.innerHTML = "Sorted Object:<br/>" + JSON.stringify(obj, null, 2);
// }

// console.log(['a','b'].push('c'));
// console.log(['a','b'].unshift('z'));
// console.log(['a','b','c'].toString());

const array = ["hey" , "hi", "hello"];
const result = array.filter((item) => item.length >= 3);
console.log(result);
