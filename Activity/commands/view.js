// fs is  a module to work with folder

let fs=require("fs")
let path=require("path");
// let content=fs.readFileSync("gtree.js");
// console.log("content is"+content);


function view(dirname,mode){
    if(mode=="tree"){
        viewTree(dirname,"");
    }else if(mode=="flat"){
        console.log("flat implemented");
    }else{
        console.log("Invalid Mode");
    }
}

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

module.exports={
    viewfn:view
}