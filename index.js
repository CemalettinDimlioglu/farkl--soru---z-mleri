// // //?How to create an empty array
// // const arr =Array()
// // console.log(arr);
// // const arr1 = []
// // console.log(arr1);
// // const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
// // console.log(numbers.reverse());
// // const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
// // console.log(countries);
// // const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"];
// // console.log(webTechs.length);

// // const arr3= [
// // "cdo",
// // 267,
// // true,
// // {countries:"finland",city:"helsinki"}
// // ]
// // console.log(arr3);
// // //?Creating an array using split
// // let js = "JavaScript";
// // const charsInJavaScript = js.split("");
// // console.log(charsInJavaScript.reverse());
// // let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// // const companies = companiesString.split(",");
// // console.log(companies);
// // let txt =
// //   "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
// // const words = txt.split(" ");
// // console.log(words.reverse());

// // //?Accessing array items using index

// // const fruits = ["banana", "orange", "mango", "lemon"];
// // let firstFruit = fruits[0]; 
// // console.log(fruits.length);
// // let lastFruits = fruits.length-1
// // console.log(lastFruits);

// // const webTechs1 = [
// //   "HTML",
// //   "CSS",
// //   "JavaScript",
// //   "React",
// //   "Redux",
// //   "Node",
// //   "MongoDB",
// // ];
// // console.log(webTechs1[6]);
// // let lastIndex1 = webTechs.length-1
// // console.log(webTechs[lastIndex1]);
// // //?Modifying array element

// // const numbers1 = [1, 2, 3, 4, 5]
// // numbers[0] = 10     
// // numbers[1] = 20
// // console.log(numbers);


// // const countries2 = [
// //   "Albania",
// //   "Bolivia",
// //   "Canada",
// //   "Denmark",
// //   "Ethiopia",
// //   "Finland",
// //   "Germany",
// //   "Hungary",
// //   "Ireland",
// //   "Japan",
// //   "Kenya",
// // ];
// // countries2[4] = "turkey"
// // countries2[2] = "eşekli"
// // console.log(countries2);

// // const eightEmptyValues = Array(8).fill("3");
// // console.log(eightEmptyValues);

// // const firstList = [1, 2, 3];
// // const secondList = [4, 5, 6];
// // const thirdList = firstList.concat(secondList);
// // console.log(thirdList);

// // const fruits1 = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
// // const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
// // const fruitsAndVegetables = fruits.concat(vegetables) 
// // console.log(fruitsAndVegetables.length);    

// // const numbers2 = [1, 2, 3, 4, 5];// concatenate the two arrays
// // console.log(numbers2.indexOf(5));
// // console.log(numbers2.indexOf(2));
// // console.log(numbers2.indexOf(3));
// // console.log(numbers2.indexOf(1));

// // // const fruits2 = ["banana", "orange", "mango", "lemon"];
// // // let index = fruit2.indexOf("banana");
// // // console.log(indexOf);
// // const cruits = ["banana", "orange", "mango", "lemon"];
// // let index = fruits.indexOf("banana"); // 0

// // if (index === 1) {
// //   console.log("This fruit does not exist in the array");
// // } else {
// //   console.log("This fruit does exist in the array");

// // //   const numbers = [1, 2, 3, 4, 5, 3, 1, 2];
// //   const num = 33,

// // //   console.log(numbers.indexOf(2)); // 7
  
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.toString())
// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// console.log(names.toString());


// const numbers1 = [1, 2, 3, 4, 5];
// console.log(numbers.join(7));
// const names1 = ["Asabeneh", "Mathias", "Elias", "Brook"];
// console.log(names1.join(" ,,"));

//  const numbers5 = [1, 2, 3, 4, 5];

//  console.log(numbers5.slice()); // -> it copies all  item
//  console.log(numbers5.slice(0)); // -> it copies all  item
//  console.log(numbers5.slice(0, numbers.length)); // it copies all  item
//  console.log(numbers5.slice(1, 2));

//  const numbers4 = [1, 2, 3, 4, 5];
//  numbers4.splice(0,2);
//  console.log(numbers4); 

//  const nnumbers = [1, 2, 3, 4, 5, 6];
//  nnumbers.splice(3, 3, 7, 8, 9);
//  console.log(nnumbers.splice(3, 3, 7, 8, 9));

//  let fruits = ["banana", "orange", "mango", "lemon"];
//  fruits.pop();
//  console.log(fruits);

//  const webTechs = [
//    "HTML",
//    "CSS",
//    "JavaScript",
//    "React",
//    "Redux",
//    "Node",
//    "MongoDB",
//  ];

//  webTechs.sort(); 
//  console.log(webTechs);
//  webTechs.reverse()
//  console.log(webTechs);




// for(let i = 0; i <= 5; i++){
//     console.log(`${i}*${i}=${i*i}`);
// }
// const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];

// const newArr = [];

// for(let i = 0; i<countries.length ;i++){
//     newArr.push(countries[i].toUpperCase())
// }
// console.log(newArr);


// // const numbers3 = [1, 2, 3, 4, 5];
// // let sum = 0
// // for (let i  = 0; i  < array.length; i ++) {
// //     sum += numbers3[i]
    
// // }
// const numbers3 = [1, 2, 3, 4, 5];
// const newArray = [];
// for(let i = 0; i<numbers.length;i++){
//     newArray.push(numbers3[i]**2)
// }
// console.log(newArray);

 

// const countries1 = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];

// const newArr1 = [];

// for (let i = 0; i < countries1.length; i++) {
//   newArr1.push(countries1[i].toLocaleLowerCase());
// }
// console.log(newArr1);

// let i= 0
// while (i<=100){
// //     console.log(i);
//     1++
// }
const numbers = [1, 2, 3, 4, 5]
for (const num of numbers) {
  console.log(num);
}

for (const c of numbers) {
  console.log(c);
}

for (const a of numbers) {
  console.log(a * a);
}

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (const a of webTechs) {
  console.log(a.toUpperCase());
}

let sum ="";
for(let i =0; i< 7;i++){
    sum = sum+"#"
    console.log(sum);
}
// for (let i = 1; i <=7; i++){
// console.log(("#".repeat(i));
// }
for (let i = 0; i <= 10; i++) {
  console.log(`${i}  ${i*i}  ${i * i *i}`);
}


for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

for (let i= 0; i<=100;i++){

    if( i%2 !==0){
        console.log(i);
    }
}