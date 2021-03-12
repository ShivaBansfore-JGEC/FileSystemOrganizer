//view 

    //tree 
    //flat

//organize 
//help

let input =process.argv.slice(2);
console.log(input);


let viewfnObj=require("./commands/view");
let helpfnObj=require("./commands/help");
let organizeObj=require("./commands/oraganize");
let cmd=input[0];

switch(cmd){
    case "view":
       viewfnObj.viewfn(input[1],input[2]);
        break;
    case "organize":
        organizeObj.organizeFn(input[1]);
        break;
    case "help":
        helpfnObj.helpfn();
        break;
    default:
        console.log("wrong command. Type help to see the list of command ");
}


