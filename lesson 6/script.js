/*let bool = confirm("Are you ready?");*/

/*let age = prompt("Сколько тебе лет?", 15);

alert("Тебе " + age + " лет")*/

/*let hobby = prompt("What is your hobby?");

alert("Your hobby is " + hobby);*/

/*let accept = confirm("Are you agree?");

alert(accept);*/

/*let a = prompt("Сторона квадрата ");

console.log(Math.pow(parseInt(a), 2));*/

/*let age = parseInt(prompt("what is your age?"));

if(age < 18){
    alert("You can`t visit this site");
};

if(age >= 18){
    alert("Welcome");
};*/
/*
if(bool){
    alert("Cool");
}*/

/*let a = 6;
if(a > 5){
    alert("x>5")
};*/

/*let r = Math.random()*100;

if(r >= 0 && r<=25 || r>=50 && r<=100){
    alert("lose");
};*/

let t = document.getElementById("t");
t.innerHTML = (true&&true);
let f = document.getElementById("f");
f.innerHTML = (true&&false);
let f1 = document.getElementById("f1");
f1.innerHTML = (false&&true);
let f2 = document.getElementById("f2");
f2.innerHTML = (false&&false);


let t1_1 = document.getElementById("t1_1");
t1_1.innerHTML = (true||true);
let f_1 = document.getElementById("f_1");
f_1.innerHTML = (true||false);
let f1_1 = document.getElementById("f1_1");
f1_1.innerHTML = (false||true);
let f2_1 = document.getElementById("f2_1");
f2_1.innerHTML = (false||false);

let t1_2 = document.getElementById("t1_2");
t1_2.innerHTML = (true&&true) || (true&&false);
let f_2 = document.getElementById("f_2");
f_2.innerHTML = (true&&true) || (false&&true);
let f1_2 = document.getElementById("f1_2");
f1_2.innerHTML = (true&&false) || (true&&true);
let f2_2 = document.getElementById("f2_2");
f2_2.innerHTML = (false&&true) || (true&&true);

let a = 100%3;
let b = 19%3;
let c = 82%3;
let d = 92%3;
console.log(a);
console.log(b);
console.log(c);
console.log(d);


