// 1. DOM Manipulation
const demo = document.getElementById("demo");
const div = document.getElementById("div");

function changeElement(){
  div.innerHTML = "Paragraph changed";
}
demo.addEventListener('click', changeElement);

// 2. Count Number
const demo1 = document.getElementById("demo1");
const para = document.getElementById("para");

let count = 1;

function countNumber(){
  para.innerHTML = "Count : " + count++; 
}
demo1.addEventListener('click', countNumber);

// 3. Change Image 
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const img = document.getElementById("img");

function turnOn(){
  img.src = "bulb2.png";
}
function turnOff(){
  img.src = "bulb1.png";
}

btn1.addEventListener('click', turnOn);
btn2.addEventListener('click', turnOff);

// 4. Async fetch data
function fetchData(){
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log('Error :' + error)
  })
}
fetchData();

