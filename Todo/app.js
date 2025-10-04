let option=prompt("Enter option: ");    
let todolist=[];

while(option!="exit"){
    if(option == "list"){
        console.log(todolist);
        
    }else if(option == "add"){
        let data=prompt("Enter Task to add: ");
        todolist.push(data);
    }else if(option=="delete"){
        let data=prompt("Enter Task to delete : ");
        let idx=todolist.indexOf(data);

        if(idx==-1){
            console.log(`Sorry That task: ${data} is not available`);
        }else{
            todolist.splice(idx,1);
        }
    }
    option=prompt("Enter option: ");
}