let btnAdd=document.getElementById("add");
let btnClear=document.getElementById("clear");

let inputTask=document.getElementById("input");

let ulList=document.getElementById("list");

btnAdd.addEventListener("click",(e)=>{
    let task=inputTask.value;
    addTask(task);
    inputTask.value="";
});

btnClear.addEventListener('click',(e)=>{
    clearAllTask();
    console.log("Cleared all tasks");
});

function addTask(name){

    if(name !=""){
        let task=document.createElement("li");
        task.innerText=name;
        ulList.append(task);
        console.log("Task added sucessfully")
    }else{
        console.log("No Task found");
    }
}

function clearAllTask(){

    let list=document.querySelectorAll("li")

    for(li of list){
        li.remove()
    }
}