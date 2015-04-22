//This file defines some constructor of some object type

//A constructor of MindNode type
//@@parameter pNode to initialize
function MindNode(type,pNode,position,theme){
    this.type = type;
    this.parent = pNode;
    this.children = [];
    this.position = position;
    this.theme = theme;
    this.scope = null;
}

MindNode.prototype = {
    constructor : MindNode,
    //Function drawIn is used to draw this node in the canvas.
    //@@parameter cxt is used to as the canvas context which we want to draw the node in.
    drawIn : function (cxt) {

    },
    //Function addChild is used to add a child node of this node.
    //@@parameter node is used to as the child node.
    addChild : function (node) {
        this.children.push(node);
        return this;
    },
    //Function delete is used to delete a child node of this node.
    //@@parameter node is used to as the child node.
    deleteChild : function (node) {
        this.children.splice(this.children.indexOf(node),1);
        return this;
    }
};