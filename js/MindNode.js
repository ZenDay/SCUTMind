//This file defines some constructor of some object type

//A constructor of MindNode type
function MindNode(type,pNode,position,theme){
    this.type = type;
    this.parent = pNode;
    this.children = [];
    this.position = position;
    this.theme = theme;
    this.scope = SCUTMind.initNodeScope(theme,position,"");
    this.text = "";
    this.textColor = "#ffffff";
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
        return this;
    },
    /*
     @method deleteChild
     @param node {MindNode} the child node which you want to delete.
     @return this {MindNode}
     */
    deleteChild : function (node) {
        this.children.splice(this.children.indexOf(node),1);
        return this;
    },
    /*
     @method changeText
     @param text {string} text you want to change.
     @return this {MindNode}
     */
    changeText : function (text) {
        this.text = text;
        this.scope = SCUTMind.initNodeScope(this.type,this.theme,this.position,text);
        return this;
    },
    /*
     @method changeText
     @param text {string} text you want to change.
     @return this {MindNode}
     */
    changePosition : function (position) {
        this.position = position;
        this.scope = SCUTMind.initNodeScope(this.type,this.theme,position,this.text);
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