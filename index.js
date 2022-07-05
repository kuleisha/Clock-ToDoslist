// // console.log("Hello ");
// // //alert("aletr");
// // document.write("this is write");
// // console.warn("this is warning");
// // console.error("this is error");

// const { FindOperators } = require("mongodb");

//  //variables in javascript
//  var marks={
//      isha: 30,
//      mandar:50
//  }
//  var und;
//  console.log(und);
// //   two types of data types in javascript
// //   1. primitive= undefined,numbers,bool,string,nulll,symbol
// //   2. non primitive= arrays, objects

// opeerators in javascript
// 1. arithmetic opeerators
// + - * /
// 2. assignment opeerators
// +=, -=, *=,/=
// comparision opeerators
// ==, >=, <=
// 4. logical opeerators
// &&, ||,!

let mydate=new Date();
// console.log(mydate.getTime())
let elem=document.getElementById('cli')
// console.log(elem)
let elem1=document.getElementsByClassName("container")
// console.log(elem1)
// elem1[0].style.background="yellow"
elem1[0].classList.add("bgprimary")
elem1[0].classList.add("textsuccess")
elem.innerHTML
// console.log(elem1[0].innerHTML)
let tn=document.getElementsByTagName('div')
var sel= document.querySelector('.container')
// console.log(sel)
// function clicked(){
//     console.log("The bbutton was click")
// }

// window.onload= function(){
//     console.log('"The document was loaded')
// }
// container.addEventListener('click',function(){
//     console.log("click hua")

// })

// Arrow function

// summ= (a,b)=>{
//     return a+b;
// }
// result= ()=>{
//     console.log("this is my result");
// }
//  setTimeout(result,4000);
// setInterval(result,4000);
// localStorage.setItem('name',"harry")
// localStorage

// JSON
obj= {name: "haryy", length: 1, a:{this: "that"}}
jso= JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)
