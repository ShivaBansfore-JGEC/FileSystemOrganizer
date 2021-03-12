
// fs is  a module to work with folder

 let fs=require("fs")
// let content=fs.readFileSync("gtree.js");
// console.log("content is"+content);


function isFileOrNot(dirPath){

    return fs.lstatSync(dirPath).isFile();
}


function listContent(dirPath){
    return fs.readdirSync(dirPath);
}

function viewFlat(dirPath,to_print){
    
    let isFile=isFileOrNot(dirPath);
    if(isFile==true){
        console.log(to_print);
    }else{
        console.log(to_print);
        let content=listContent(dirPath);
        //console.log(content)
        //recursion

        for(let i=0;i<content.length;i++){
            let childPath=dirPath+"\\"+content[i];
            viewFlat(childPath,toprint+"\\"+content[i])
        }

    }
}

let input=process.argv.slice(2);
let strArr=input[0].split("\\");
let toprint=strArr.pop();
viewFlat(input[0],toprint);