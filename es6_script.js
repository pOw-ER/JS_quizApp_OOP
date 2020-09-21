// arrow functions

let welcomeES6 = ()=> {
  console.log('hello ES6');
};

welcomeES6();

// with parameters

let multiplyES6 = (x,y)=> x*y;

console.log(multiplyES6(5,6));


let splitES6 = text => text.split(' ');

console.log(splitES6('My First EcmaScript Codes'));

// Object Literals

let getProductES6 = (id,name)=>(
  {
    id: id,
    name : name
  }
);

console.log(getProductES6('1','IPhone 7'));

const phones = [
  {name:'Iphone 8', price:3000},
  {name:'Iphone 7', price:2500},
  {name:'Iphone 6', price:2000},
  {name:'Iphone 5', price:1500}
];

let pricesES6 = phones.map(phone=>phone.price);
console.log(pricesES6);

// filter

const arr=[1,2,3,6,10,20,30,50,55,61,70,83];
let evenES6 = arr.filter(a=>a%2==0);
console.log(evenES6);

let evenES6_2 = arr.filter(a=>a%2==1);
console.log(evenES6_2);


//
