/*let i = 1;
let res = 0;
let max = 0;
let min = 0;
while(i<=10){
    let n = parseInt(prompt("number" + i));
    if(max < n){
        max = n;
    }
    if(min >= n || i == 1){
        min = n;
    }
    res += n;  
    i++
}
console.log(res);
console.log(max);
console.log(min);*/

/*let i = 0;
let bigger = 0;
while(i < 10){
    let r = Math.round(Math.random()*10);
    if(r>=5){
        bigger++;
    }
    i++
}
console.log(bigger)*/

/*let i = 45;

while(i<=67){
    console.log(i);
    i++;
}

let j = 45;

while(j<=670){
    console.log(j);
    j+=10;
}*/

/*let h = parseInt(prompt("Введите итератор"));
let i = 0;
let sum = 0;
while(i<h){
    let r = Math.round(Math.random()*100);
    sum += r;
    if(r%7 == 0){
        console.log(sum + " кратна 7");
    }
    i++
}

console.log(sum);*/

let i = 0;
let s = "";
let element = document.getElementById("elem");
while(i<10){
    let r = Math.round(Math.random()*255);
    let r1 = Math.round(Math.random()*255);
    let r2 = Math.round(Math.random()*255);
    let h = Math.round(Math.random()*100);
    let w = Math.round(Math.random()*100);
    s += "<div style='background:rgba("+r+","+r1+","+r2+",0.9); height:"+h+"px; width:"+w+"px;'>"+r+"</div>";
    i++
}
element.innerHTML=s;