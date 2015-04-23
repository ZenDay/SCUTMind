//In this file,you can write the global function or variable.

//This is a extension Javascript Object for SCUTMind application.
var SCUTMind = {};

//Global function and variable can be added in the extension Object.

//Global variable
SCUTMind.themes = {
    "default" : "default"
//add theme in this object.
};

//*Function init is to initialize the whole canvas.
SCUTMind.init = function () {

};

//*Function draws is to draw the nodes.
//@@parameter cxt to as the node and parent node of the node which we want to draw.
//@@parameter node to as the canvas context which we want to draw in.
SCUTMind.draws = function (cxt,node) {
    node.drawIn(cxt);
    for (var i = 0; i < node.children.length; i++) {
        this.draws(cxt, node.children[i]);
    }
    return true;
};

//*Function createMainNode is to create the main node.
//@@parameter position is used to as the position of this node.
//@@parameter theme is used to as the theme of this node.
SCUTMind.createMainNode = function (position,theme) {
    return new MindNode("main",null,position,theme);
};