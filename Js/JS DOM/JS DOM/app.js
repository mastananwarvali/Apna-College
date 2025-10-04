let btn=document.createElement("button");
let inputText=document.createElement("input");

btn.innerText="Click me";

document.body.append(btn,inputText);

inputText.setAttribute('placeholder',"username");

btn.setAttribute('id',"btn");
console.dir(btn);

let btnSelect=document.querySelector("#btn")
btnSelect.style.backgroundColor="blue";
btn.style.color="white";

let h1=document.createElement('h1');
h1.innerHTML="<u>DOM Practice</u>";
h1.style.color="purple";
document.body.append(h1);