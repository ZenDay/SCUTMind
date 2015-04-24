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
SCUTMind.pattern = {
    default : "default"
//add pattern in this object.
};


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
SCUTMind.initNodeScope = function (type,theme,position,text) {};