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
SCUTMind.currTheme = null;
SCUTMind.themes = {
    default : {
        //shape
        ancestor_shape : "capsule",
        child_shape : "rounded_rectangle",
        line_shape : "straight",

        //decoration
        background_color : "#fff",
        line_color : "#8e8e8e",
        focus_border_color : "#000000",
        common_border_color : "#ccc",
        focus_border_width : 2,
        common_border_width : 1,

        //ancestor_color
        anc_element_color : "#ccc",
        anc_text_color : "#fff",

        //child_color
        ch_element_color : "#E0DFE0",
        ch_text_color : "#000",

        //grandchild_color 
        gra_element_color : "#fff",
        gra_text_color : "#000",

        //element_margin
        father_child_margin : 20,
        brother_margin : 15,

        //ancestor_size
        anc_element_width : 80,
        anc_element_height : 35,

        //child_size
        ch_element_width : 60,
        ch_element_height : 27,

        //else
        background_img : "none"
    },
    theme_yellow : {
        //shape
        ancestor_shape : "capsule",
        child_shape : "rounded_rectangle",
        line_shape : "straight",

        //decoration
        background_color : "#fff",
        line_color : "#8e8e8e",
        focus_border_color : "#C38707",
        common_border_color : "#fac75b",
        focus_border_width : 2,
        common_border_width : 1,

        //ancestor_color
        anc_element_color : "#fac75b",
        anc_text_color : "fff",

        //child_color
        ch_element_color : "#FEE4C2",
        ch_text_color : "#000",

        //grandchild_color 
        gra_element_color : "#fff",
        gra_text_color : "#000",

        //element_margin
        father_child_margin : 20,
        brother_margin : 15,

        //ancestor_size
        anc_element_width : 80,
        anc_element_height : 35,

        //child_size
        ch_element_width : 60,
        ch_element_height : 27,

        //else
        background_img : "none"
    },
    theme_green : {
        //shape
        ancestor_shape : "capsule",
        child_shape : "rounded_rectangle",
        line_shape : "straight",

        //decoration
        background_color : "#fff",
        line_color : "#8e8e8e",
        focus_border_color : "#09816A",
        common_border_color : "#00c5ad",
        focus_border_width : 2,
        common_border_width : 1,

        //ancestor_color
        anc_element_color : "#00c5ad",
        anc_text_color : "fff",

        //child_color
        ch_element_color : "#A6FBD8",
        ch_text_color : "#000",

        //grandchild_color
        gra_element_color : "#fff",
        gra_text_color : "#000",

        //element_margin
        father_child_margin : 20,
        brother_margin : 15,

        //ancestor_size
        anc_element_width : 80,
        anc_element_height : 35,

        //child_size
        ch_element_width : 60,
        ch_element_height : 27,

        //else
        background_img : "none"
    },
    theme_circle : {
        //shape
        ancestor_shape : "circle",
        child_shape : "capsule",
        line_shape : "straight",

        //decoration
        background_color : "#4CDBF4",
        line_color : "#667b99",
        focus_border : "none",
        common_border : "none",
        focus_element_color : "#5B1156",

        //ancestor_color
        anc_element_color : "#e8e88e",
        anc_text_color : "#D4C070",

        //child_color
        ch_element_color : "#88F6AE",
        ch_text_color : "#000",

        //grandchild_color
        gra_element_color : "#4cdbf4",
        gra_text_color : "#000",

        //element_margin
        father_child_margin : 20,
        brother_margin : 15,

        //ancestor_size
        anc_element_width : 80,
        anc_element_height : 35,

        //child_size
        ch_element_width : 60,
        ch_element_height : 27,

        //else
        background_img : "none"
    }
//add theme in this object.
};
SCUTMind.patterns = {
    default : "toRightMind",
    tree : "treeMind",
    organize : "organizeMind"
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
    this.currTheme = theme;
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
    for (var i = 0; i<node.children.length; i++) {
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
 @method movingRegion
 @param node {MindNode} the node you need to moving in method computePosition.
 @nothing to return.
*/
SCUTMind.movingRegion = function(node){
    node.position[1] -= (node.area[1]/2 + SCUTMind.currTheme.brother_margin/2);
    for(var i=0; i<node.children.length; i++){
        SCUTMind.movingRegion(node.children[i]);
    }
}


/*
 @method updatePosition.
 @param node {MindNode} the node you which you want to operate.
 @param x_or_y {int} the top or left of the node's area you want to operate.
 @nothing to return.
*/
SCUTMind.updatePosition = function(node, x_or_y){
    var margin = 0;
    if (SCUTMind.currPattern == SCUTMind.patterns.default) {
        if(node.type !="main") {
            node.position[1] = x_or_y + node.area[1] / 2;
        }
        for (var i = 0; i < node.children.length; i++) {
            this.updatePosition(node.children[i], x_or_y + margin);
            margin += SCUTMind.currTheme.brother_margin + node.children[i].area[1];
        }
    }
    else{
        if(node.type !="main")
            node.position[0] = x_or_y + node.area[0]/2;
        for (var i = 0; i < node.children.length; i++) {
            this.updatePosition(node.children[i], x_or_y + margin);
            margin += SCUTMind.currTheme.brother_margin + node.children[i].area[0];
        }
    }
};

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
    var node_width = SCUTMind.currTheme.ch_element_width;
    var node_height = SCUTMind.currTheme.ch_element_height;
    nodeScope[0] = position[0] - node_width/2;
    nodeScope[1] = position[1] - node_height/2;
    nodeScope[2] = position[0] + node_width/2;
    nodeScope[3] = position[1] + node_height/2;

    return nodeScope;
};

/*
 @method initNodeArea
 @param node {MindNode} the node you want to init its area.
 @nothing to return.
*/
SCUTMind.initNodeArea = function (node){
    var currFirstNode = node;
    var currLastNode = node;
    while (currFirstNode.children.length != 0) {
        currFirstNode = currFirstNode.children[0];
    }
    while (currLastNode.children.length != 0) {
        currLastNode = currLastNode.children[currLastNode.children.length - 1];
    }
    if(SCUTMind.currPattern == SCUTMind.patterns.default){
        var mostRight_node = currFirstNode;
        if(currFirstNode.position[0] < currLastNode.position[0])
            mostRight_node = currLastNode;
        node.area[0] = mostRight_node.position[0] - node.position[0] + SCUTMind.currTheme.ch_element_width;
        node.area[1] = currLastNode.position[1] + (currLastNode.scope[3]-currLastNode.scope[1])/2 - currFirstNode.position[1] + (currFirstNode.scope[3]-currFirstNode.scope[1])/2;
    }
    else if(SCUTMind.currPattern == SCUTMind.patterns.tree || SCUTMind.currPattern == SCUTMind.patterns.organize){
        var mostBottom_node = currFirstNode;
        if(currFirstNode.position[1] < currLastNode.position[1])
            mostBottom_node = currLastNode;
        node.area[0] = currLastNode.position[0] - currLastNode.position[0] + SCUTMind.currTheme.ch_element_width;
        node.area[1] = mostBottom_node.position[1] + (mostBottom_node.scope[3]-mostBottom_node.scope[1])/2 - node.position[1] + (node.scope[3]-node.scope[1])/2;
    }
    this.initNodeArea(SCUTMind.rootNode);
};


/*
 @method updateArea
 @param node {MindNode} this node and its ancestors' areas will be init.
 @nothing to return.
*/
SCUTMind.updateArea = function(node){
    this.initNodeArea(node);
    if(node.parent != null){
        this.updateArea(node.parent);
    }
}
