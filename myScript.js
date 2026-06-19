console.log("Welcome to Thando Sthe Pty Ltd");


window.alert("Get your supplies now at an affordable price");
window.alert("Contact us to get a free quote");

let age=30;
console.log(age);


let username=document.getElementById('username');
let surname=document.getElementById('surname');
let contact=document.getElementById('contact');
let date=document.getElementById('date');
let mail=document.getElementById('mail');
let texts=document.getElementById('texts');
let form=document.getElementById('form');

let errorElement=document.getElementById('error')



let price=9500;
console.log('Get a special offer if you purchase everything R{price}');


username=window.prompt("What is your name?");

console.log(username);


function sum(a,b){
    return (a+b);
}
const firstsum= sum(1500,1500);
console.log(firstsum);



const authorSearch=document.getElementById("authorSearch");
authorSearch.addEventListener;"keyup", e =>{
    let currentValue = e.target.value.toLowerCase();
    let authors=document.querySelectorAll("h5");
    authors.forEach(author=>{
        if(author.textContent.toLowerCase().includes(currentValue)){
author.parentNode.parentNode.style.display="block";
        }else{
author.parentNode.parentNode.style.display="none";
        }
    });
}; 
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();  
