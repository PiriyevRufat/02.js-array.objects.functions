// function threeDigit(eded) {
//     let reqemler = Array.from(String(eded), Number);

//     const cem = reqemler.reduce((acc, curr) => acc + curr, 0);
//     const hasil = reqemler.reduce((acc, curr) => acc * curr, 1);
//     const orta = cem / reqemler.length;

//     return {
//         cem: cem,
//         hasil: hasil,
//         orta: orta
//     };
// }
// let eded = parseInt(prompt("Bir 3 rəqəmli ədəd daxil edin:"));
// let analiz = threeDigit(eded);

// console.log("Ədədin rəqəmlərinin cəmi: " + threeDigit.cem);
// console.log("Ədədin rəqəmlərinin hasili: " + threeDigit.hasil);
// console.log("Ədədin ortasi: " + threeDigit.orta);

//task2

// let number=parseInt(prompt("Reqemi daxil edin:"));
// console.log(`Bolenler (${number}):\n`);
// for (let i = 1; i <= number; i++) {
//     if (number % i=== 0) {
//         console.log(i);
//     }
// }

//task3

// let number=parseInt(prompt("Reqemi daxil edin:"));
// let counter=0
// for (let i = 1; i <= number; i++) {
//     if (number % i=== 0) {
//         counter++
// }
// }
// console.log(`Reqemin bolunenlerin sayi:${counter}`);

//task4

// for (let i = 0; i <= 10; i++) {
//    let hasil=i*i
//    console.log(`${i}x${i}= ${hasil}`);
// }

//task5

// console.log("i  i^2  i^3");
// for (let i = 0; i <= 10; i++) {
//     let hasil=Math.pow(i,3)
//     console.log(`${i} ${i*i} ${hasil}`);
//  }

//task6

// for (let i = 0; i <= 100; i++) {
//     if (i==0 || i==1) {
//         continue;
//     }
//     let sadeEded=true
//     for (let j = 2; j < Math.sqrt(i); j++) {
//           if (i%j==0) {
//             sadeEded=false
//             break;
//           }
//     }
//     if (sadeEded) {
//         console.log(i);
//     }
// }

//task7

// let sumcut=0
// let sumtek=0
// for (let index = 1; index <= 100; index++) {
//     if(index%2==1){
//         sumtek+=index
//     }
//     else if(index%2==0){
//         sumcut+=index
//     }
// }
// console.log(`Tek ededlerin cemi: ${sumtek}`);
// console.log(`Cut ededlerin cemi: ${sumcut}`);

//arrays

// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Davud", scores: [100, 100, 100] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },];
//   function totalScore(scores) {
//     const total = scores.reduce((acc, curr) => acc + curr, 0);
//     return total / scores.length;
//   }
//   function getTotalScores(students) {
//     return students.map(student => {
//         return { name: student.name, totalScore: totalScore(student.scores) };
//     });
// }
// const totalScoresArray = getTotalScores(students);
// console.log(totalScoresArray);

//task

// const webTechs = [
//     "HTML",
//     "CSS",
//     "JS",
//     "React",
//     "JS",
//     "Redux",
//     "Node",
//     "JS",
//     "MongDB"
// ];
// function filterWebTechsByLength(arr, minLength) {
//     return arr.filter(tech => tech.length > minLength);
// }
// const filteredTechs = filterWebTechsByLength(webTechs, 4);
// console.log(filteredTechs);

//task

// const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     },
//   ];
// const totalPrice =products.reduce((total, product) => total + product.price, 0);
// const averagePrice =totalPrice /products.length;
// console.log("Cəm:", totalPrice);
// console.log("Orta qiymət:", averagePrice);

//task

// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

// let aBaslayanBiten=countries.filter(country => country.startsWith("A") && country.endsWith("a"))
// console.log(aBaslayanBiten);

//task

// function findNumberOfDivisors(number) {
// let counter=0
// for (let i = 1; i <= number; i++) {
//     if (number % i=== 0) {
//         counter++
// }
// }
// console.log(`Reqemin bolunenlerin sayi:${counter}`);
//   }
//   let number=parseInt(prompt("Reqemi daxil edin:"));
//   let counter=findNumberOfDivisors(number)

//task

// function findSpaceCounts(str) {
//     let spaceCount = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === ' ') {
//         spaceCount++;
//       }
//     }
//     return spaceCount;
//   }

//task

// function printFullName(firstName, lastName) {
//     console.log(`Full Name: ${firstName} ${lastName}`);
//  }
// printFullName("Anton", "Chigurh");

//task

// let number=parseInt(prompt("Reqemi daxil edin:"))
// function square(n){
//     return n*n
// }
// let squareEded=square(number)
// console.log(`Reqemin kvardati: ${squareEded}`);

//task

// function sum(a,b) {
//     return a+b
// }
// function substruct(a,b) {
//     return a-b
// }
// function multiply(a,b) {
//     return a*b
// }
// function divide(a,b) {
//     return a/b
// }
// console.log(sum(4,2));
// console.log(substruct(4,2));
// console.log(multiply(4,2));
// console.log(divide(4,2));

// function calculator(a,b,operator) {
//     if (operator== "+") {
//         return a+b
//     }
//     else if (operator== "-") {
//         return a-b
//     }
//     else if (operator== "*") {
//         return a*b
//     }
//     else if (operator== "/") {
//         return a/b
//     }
//     else{
//         return "Duzgun operator daxil edin"
//     }
// }
// console.log(calculator(2, 5, "+")); //7
// console.log(calculator(2, 5, "*")); //10
// console.log(calculator(2, 5, "/")); //0.4
// console.log(calculator(2, 5, "-")); //-3

//task

// let cem= (array) => {
//     return array[0] + array[array.length - 1];
// };
// console.log(cem([1, 2, 3])); // 4
// console.log(cem([80, 5, 58, 17, 100])); // 180
// console.log(cem([15, -500, 0, 50])); //65

//task

// function sumOfArray(array) {
//     let sum =0;
//     for (let i = 0; i < array.length; i++) {
//       sum +=array[i];
//     }
//     return sum;
//   }
//   console.log(sumOfArray([1,2,3]));

//task

// function findMax(arr){
//     let boyukEded=arr[0]
//     for (let i = 0; i < arr.length; i++) {
//             if(arr[i]>boyukEded){
//                 boyukEded=arr[i]
// }
// }
// return boyukEded
// }
// console.log(findMax([1,2,3]));

//task

// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },];
// function filterEmployees(arr) {
//     const filteredEmployees=[]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].salary>60000) {
//             filteredEmployees.push(arr[i])
//         }  
//     }
//     return filteredEmployees
// }
// console.log(filterEmployees(employees));

//task

// function findElement(arr, number) {
//     if (arr.includes(number)) {
//       return `${number} array elementlərindən biridir`;
//     } else{
//       return `${number} array elementləri arasında yoxdur`;
//     }
//   }
// console.log(findElement([33, 28, 45, 17], 45)); // 45 array elemenlərindən biridir
// function findIndex(arr, element) {
//     const index= arr.indexOf(element);
//     if (index !== -1) {
//       return `${element} array elementərindən biridir`;
//     } else{
//       return `${element} array elementəri arasında yoxdur`;
//     }
//   }
// console.log(findIndex(["a", "g", "y", "d"], "d")); // d array elementərindən biridir

//task

// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own
// hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;
// function findSpaceCounts(str) {
//         let spaceCount = 0;
//         for (let i = 0; i < str.length; i++) {
//           if (str[i] === ' ') {
//             spaceCount++;
//           }
//         }
//         return spaceCount;
// }
// console.log(findSpaceCounts(sampleNews));

//task

// function concatArray(arr1, arr2) {
//     return arr1.concat(arr2);
// }

// console.log(concatArray([1,2,3,4,5], [6,7,8,9]));

//task

// function array_filled(length, value) {
//     var arr =[];
//     for (i = 0; i < length; i++) {
//         arr.push(value);
//     }
//     return arr;
// }
// console.log(array_filled(6, 0));

//task

// function move(array, currentPosition, targetPosition) {
//     var length = array.length;
//     if (length ===0 || targetPosition >= length) {
//         return [];
//     }
//     var element = array.splice(currentPosition, 1)[0];
//     array.splice(targetPosition, 0, element);
//     return array;
// }

// console.log(move([10, 20, 30, 40, 50], 0, 2));

//task

// function range(first, last) {
//     let array = [];
//     for (let i = first; i <= last; i++) {
//         array.push(i);
//     }
//     return array;
// }
// console.log(range(1,4))
