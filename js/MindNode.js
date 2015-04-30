//This file defines some constructor of some object type

//A constructor of MindNode type
function MindNode(type,pNode,position){
    this.type = type;
    this.parent = pNode;
    this.children = [];
    this.position = position;
    this.scope = SCUTMind.initNodeScope(type,position,"");
    this.area = SCUTMind.initNewNodeArea(this);
    this.text = "";
}

MindNode.prototype = {
    constructor : MindNode,
    /*
     @method addChild
     @param node {MindNode} the child node which you want to add.
     @return this {MindNode}
     */
    addChild : function (node) {
        this.children.push(node);
        SCUTMind.updateArea(node);
        return this;
    },
    /*
     @method deleteChild
     @param node {MindNode} the child node which you want to delete.
     @return this {MindNode}
     */
    deleteChild : function (node) {
        this.children.splice(this.children.indexOf(node),1);
        this.area = SCUTMind.updateArea(node);
        return this;
    },
    /*
     @method changeText
     @param text {string} text you want to change.
     @return this {MindNode}
     */
    changeText : function (text) {
        if(text.length <= 15)
            this.text = text;
        else
            alert("The input text is too long!");
        this.scope = SCUTMind.initNodeScope(this.type,this.position,text);
        SCUTMind.updateArea(this);
        return this;
    },
    /*
     @method contains
     @param position {array} the position you want to judge.
     @return {bool}
     */
    contains : function (position) {
        return ((position[0] >= this.scope[0]) && (position[0] <= this.scope[2]) && (position[1] >= this.scope[1]) && (position[1] <= this.scope[3]));
    }
};