let deleteTextNode = (elem) => {
    let nodes = elem.childNodes;

    for (var i=nodes.length-1; i>=0; i--){
        if (nodes[i].nodeType == 3){
            nodes[i].remove()
        } else if (nodes[i].nodeType == 1) {
            deleteTextNode(nodes[i])
        }
    }
}

module.exports = deleteTextNode;