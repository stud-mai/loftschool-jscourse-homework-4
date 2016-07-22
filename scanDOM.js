let data = {
        tags: {},
        classes: {},
        text: 0,
        comment: 0
    };
let scanDom = (param = document.body) => {
    let children = param.childNodes,
        tags = param.tagName,
        classes = param.classList;

    function seekAndCount(tags,classes) {
        if (!data.tags[tags]){
            data.tags[tags] = 1
        } else {
            data.tags[tags] += 1
        }
        for (let cl of classes){
            if (!data.classes[cl]){
                data.classes[cl] = 1
            } else {
                data.classes[cl] += 1
            }
        }
    }
    
    if (children.length > 0) {
        for (let node of children){
            scanDom(node);
        }
        seekAndCount(tags,classes);
    }
    else {
        let nodeType = param.nodeType;
        switch (nodeType){
            case 1:
                seekAndCount(tags,classes);
                break;
            case 3:
                data.text += 1;
                break;
            case 8:
                data.comment += 1;
                break;
        }
    }

};

let printResultsInConsole = () => {
    scanDom();
    for (let tag in data.tags){
        console.log(`Тэгов ${tag[0]+tag.slice(1).toLowerCase()}: ${data.tags[tag]}`);
    }
    for (let clas in data.classes){
        console.log(`Элементов с классом ${clas}: ${data.classes[clas]}`);
    }
    console.log(`Текстовых узлов: ${data.text}`);
    console.log(`Узлов с комментариями: ${data.comment}`);
};

module.exports = printResultsInConsole;