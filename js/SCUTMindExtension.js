//In this file,you can write the global function or variable.

//This is a extension Javascript Object for SCUTMind application.
var SCUTMind = {};

//Global function and variable can be added in the extension Object.

//Global variable
SCUTMind.backgroundCanvas = [];
SCUTMind.backgroundCenter = [];
SCUTMind.currCanvasScope = [];
SCUTMind.rootNode = null;
SCUTMind.currNode = null;
SCUTMind.currPattern = null;
SCUTMind.themes = {
    default : "default"
//add theme in this object.
};
SCUTMind.patterns = {
    default : "toRightMind",
    tree : "treeMind",
    organize : "organizeMind"
//add pattern in this object.
};
SCUTMind.theme = SCUTMind.themes.default;
SCUTMind.pattern = SCUTMind.patterns.default;


/*
 @method init
 @param cxt {Object} the context of web page's canvas.
 @param theme {string} the theme user choose.
 @param bgWidth & bgHeight {number} the whole canvas size.
 @param canvasW & canvasH {number} the size of web page's canvas.
 @return this {SCUTMind}
 */
SCUTMind.init = function (cxt,theme,pattern,bgWidth,bgHeight,canvasW,canvasH) {
    this.backgroundCanvas = [bgWidth,bgHeight];
    this.backgroundCenter = [bgWidth/2,bgHeight/2];
    this.currCanvasScope = [(bgWidth - canvasW)/2,(bgHeight - canvasH)/2,(bgWidth + canvasW)/2,(bgHeight + canvasH)/2];
    this.currPattern = pattern;
    if (SCUTMind.rootNode) {
        this.rootNode = new MindNode("main",null,this.backgroundCenter,theme);
    }
    this.draws(cxt,this.rootNode);
    return this;
};

/*
 @method draws
 @param cxt {Object} the context of web page's canvas.
 @param node {MindNode} the root node of the tree which you want to draws.
 @return this {SCUTMind}
 */
SCUTMind.draws = function (cxt,node) {
    this.draw(cxt,node);
    for (var i = 0; i < node.children.length; i++) {
        this.draws(cxt, node.children[i]);
    }
    return this;
};

/*
 @method findNode
 @param position {array} the position you want to judge.
 @param node {MindNode} the root node of the tree which you want to judge.
 @return {MindNode} if there are some node contains the position.
 @return false if there aren't any node contains the position.
 */
SCUTMind.findNode = function (position,node) {
    var thisChild;
    if (node.contains(position)){
        return node;
    }else{
        for (var i = 0; i < node.children.length; i++){
            thisChild = this.findNode(position,node);
            if(thisChild){
                return thisChild;
            }
        }
    }
    return false;
};

/*
 @method moveCanvas
 @param changeX & changeY {number} the X & Y distance which the canvas move.
 @return this {SCUTMind}
 */
SCUTMind.moveCanvas = function (changeX,changeY) {
    this.currCanvasScope[0] += changeX;
    this.currCanvasScope[1] += changeX;
    this.currCanvasScope[2] += changeY;
    this.currCanvasScope[3] += changeY;
    return this;
};

/*
 @method changeTheme
 @param theme {string} the new theme.
 @param node {MindNode} the root node of the tree which you want to change its theme.
 @return this {SCUTMind}
 */
SCUTMind.changeTheme = function (theme,node) {
    node.theme = theme;
    for (var i = 0; i < node.children.length; i++) {
        this.changeTheme(theme, node.children[i]);
    }
    return this;
};




//this is some function about front end achievement
/*
 @method draw
 @param cxt {Object} the context of web page's canvas.
 @param node {MindNode} the node which you want to draws.
 @return this {SCUTMind}
 */
SCUTMind.draw = function (cxt,node) {};

/*
 @method initNodeScope
 @param type {string} the type of the node.
 @param theme {string} the theme of the node.
 @param position {array} the position of the node.
 @param text {string} the text of the node.
 @return nodeScope {array}
 */
SCUTMind.initNodeScope = function (type,theme,position,text) {
    var nodeScope = [];
    var node_width = theme.element_width;
    var node_height;
    if(text.length <= 5){
        node_height = theme.element_height;
    }
    else if(text.length <= 10){
        node_height = theme.element_height + 20;
    }
    else if(text.length <= 15){
        node_height = theme.element_height + 25;
    }

    nodeScope[0] = position[0] - node_width/2;
    nodeScope[1] = position[1] - node_height/2;
    nodeScope[2] = position[0] + node_width/2;
    nodeScope[3] = position[1] + node_height/2;

    return nodeScope;
};

/*
 @method initNodeArea
 @param pattern {string} the pattern of the SCUTMind.
 @param changNode {MindNode} the node you want to change.
 @return nodeArea {array}
*/
SCUTMind.initNodeArea = function (pattern,changeNode){
    var nodeArea = [];
    if(pattern == SCUTMind.patterns.default) {
        if (changeNode.children.length != 0) {
            nodeArea[0] = changeNode.scope[0];
            nodeArea[1] = changeNode.children[0].scope[1];
            nodeArea[2] = changeNode.children[changeNode.children.length - 1].scope[2];
            nodeArea[3] = changeNode.children[changeNode.children.length - 1].scope[3];
        }
        else{
            nodeArea = changeNode.scope;
        }
    }
    else if(pattern == SCUTMind.patterns.tree || pattern == SCUTMind.patterns.organize){
        if (changeNode.children.length != 0) {
            nodeArea[0] = changeNode.children[0].scope[0];
            nodeArea[1] = changeNode.scope[1];
            nodeArea[2] = changeNode.children[changeNode.children.length - 1].scope[2];
            nodeArea[3] = changeNode.children[changeNode.children.length - 1].scope[3];
        }
        else{
            nodeArea = changeNode.scope;
        }
    }
    return nodeArea;
};
