
// fs is  a module to work with folder

let fs=require("fs")
let path=require("path");
// let content=fs.readFileSync("gtree.js");
// console.log("content is"+content);


function isFileOrNot(dirPath){

    return fs.lstatSync(dirPath).isFile();
}


function listContent(dirPath){
    return fs.readdirSync(dirPath);
}

function viewTree(dirPath,indent){
    
    let isFile=isFileOrNot(dirPath);
    if(isFile==true){
        console.log(indent,path.basename(dirPath)+"*");
    }else{
        console.log(indent,path.basename(dirPath));
        let content=listContent(dirPath);
        //console.log(content)
        //recursion

        for(let i=0;i<content.length;i++){
            let childPath=path.join(dirPath,content[i]);
            viewTree(childPath,indent+"\t")
        }

    }
}

let input=process.argv.slice(2);
// let strArr=input[0].split("\\");
// let toprint=strArr.pop();
viewTree(input[0],"");