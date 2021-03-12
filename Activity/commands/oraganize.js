let types={
    media:["mp4","mkv","mp3"],
    archives:['zip','7z','rar','tar','gz','ar','iso',"xz"],
    documents:['docs','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
    app:['exe','dmg','pkg',"deb"]
}

let fs=require("fs");
let path=require("path")
// to creat directory in node js we use
// 1.mkdir 2.mkdirSync

function createDir(dirpath){
    if(!fs.existsSync(dirpath)){
        fs.mkdirSync(dirpath);
    }
}

function gerDirName(dirPath){
    let strArr=dirPath.split(".");
    let ext=strArr.pop();
    //let extention=path.extname(dirPath);
    //let ext=extention.substring(1);
    for(let type in types){
        for(let i=0;i<types[type].length;i++){
            if(types[type][i]==ext){
                return type;
            }
        }
    }

    return "others";
}

function isFileOrNot(dirPath){

    return fs.lstatSync(dirPath).isFile();
}


function listContent(dirPath){
    return fs.readdirSync(dirPath);
}

//traverse the folder


function copyFileToFolder(srcFolder,destFolder){
    let orgFileName=path.basename(srcFolder);
    let destFilePath=path.join(destFolder,orgFileName);
    fs.copyFileSync(srcFolder,destFilePath);
}

function organzeDir(dirPath){
    
    let isFile=isFileOrNot(dirPath);
    if(isFile==true){
        //identify the destination folder
        let dirName=gerDirName(dirPath);
        let destFolder=path.join(orgFilePath,dirName);
         copyFileToFolder(dirPath,destFolder);
        //console.log(dirName);

    }else{
        let content=listContent(dirPath);

        for(let i=0;i<content.length;i++){
            let childPath=path.join(dirPath,content[i]);
            organzeDir(childPath)
        }

    }
}

function organizeFn(dirpath){
    let orgFilePath=path.join(dirPath,"organized_files");
    createDir(orgFilePath)
    
    
    for(let key in types){
        let innerDirPath=path.join(orgFilePath,key);
        createDir(innerDirPath)
    }
    
    let otherDir=path.join(orgFilePath,"others");
    createDir(otherDir);
    organzeDir(dirPath);
}

module.exports={
    organizeFn:organizeFn
}