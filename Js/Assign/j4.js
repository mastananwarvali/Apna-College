//Q1
let array=[1,2,3,4,5,6,2,3];
let del=6;
while(true){
    if(!array.includes(del)){
        break;
    }
    let idx=array.indexOf(del);
    array.splice(idx,1);
}
console.log("Q1 Answer is:",array);

//Q2

let number=287152;
let cnt=0;

while(number > 0){
    cnt++;
    number=parseInt(number/10);
}
console.log("Q2 Answer is:",cnt);


//Q3
let num=287152;
let sum=0;

while(num > 0){
    sum +=num%10;
    num=parseInt(num/10);
}

console.log("Q3 Answer is:",sum);

//Q4.
console.log("Q4 Answer is:",fact(7));
function fact(n){
    if(n==0){
        return 1;
    }

    return  n * fact(n-1);
}
let facty=1;

for(let i=1;i<=7;i++){
    facty=facty*i;
}
console.log("Q4 Answer is:(for)",facty);



//Q5

let arr=[5,50,6,2,9,10];
let maxi=-1;

for(e of arr){
    if(maxi < e){
        maxi=e;
    }
}
console.log("Q5 Answer is:",arr," and answer is",maxi);