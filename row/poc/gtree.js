let root ={
    name:"d10",
    children:[
        {
            name:"d20",
            children:[
                {
                    name:"d50",
                    children:[]
                },
                {
                    name:"d60",
                    children:[]
                }
            ]
        },
        {
            name:"d30",
            children:[
                {
                    name:"d70",
                    children:[]
                }
            ]
        },
        {
            name:"d40",
            children:[]
        }
    ]
}

function displayGtree(node){
    let meAndMyChild=""+node.name+"->";

    for(let i=0;i<node.children.length;i++){
        let child=node.children[i];
        meAndMyChild+=child.name + ",";
    }

    console.log(meAndMyChild);

    //faith
    for(let i=0;i<node.children.length;i++){
        let child=node.children[i];
        displayGtree(child);
    }
}

displayGtree(root);