//In this file, you can write the global function or variable.

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
        ancestor_shape : "rectangle",
        child_shape : "rectangle",
        line_shape : "straight",

        //decoration
        background_color : "#0c9",
        line_color : "#8e8e8e",
        focus_border_color : "rgba(0,0,0,.2)",
        common_border_color : "#ccc",
        focus_border_width : 2,
        common_border_width : 2,

        //ancestor_color
        anc_element_color : "#ccc",
        anc_text_color : "#fff",

        //child_color
        ch_element_color : "#E0DFE0",
        ch_text_color : "#000",

        //element_margin
        father_child_margin : 60,
        brother_margin : 15,

        //ancestor_size
        anc_element_width : 80,
        anc_element_height : 45,

        //child_size
        ch_element_width : 60,
        ch_element_height : 25,

        //else
        background_img : "none"
    },
    theme_green : {
        //shape
        ancestor_shape : "rectangle",
        child_shape : "rectangle",
        line_shape : "straight",

        //decoration
        background_color : "#fff",
        line_color : "#8e8e8e",
        focus_border_color : "#09816A",
        common_border_color : "#00c5ad",
        focus_border_width : 1,
        common_border_width : 1,

        //ancestor_color
        anc_element_color : "#00c5ad",
        anc_text_color : "#fff",

        //child_color
        ch_element_color : "#A6FBD8",
        ch_text_color : "#000",

        //element_margin
        father_child_margin : 60,
        brother_margin : 15,

        //ancestor_size
        anc_element_width : 80,
        anc_element_height : 45,

        //child_size
        ch_element_width : 60,
        ch_element_height : 25,

        //else
        background_img : "none"
    },
    theme_pink : {
        //shape
        ancestor_shape : "rectangle",
        child_shape : "rectangle",
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
        anc_text_color : "#fff",

        //child_color
        ch_element_color : "#FEE4C2",
        ch_text_color : "#000",

        //element_margin
        father_child_margin : 20,
        brother_margin : 15,

        //ancestor_size
        anc_element_width : 80,
        anc_element_height : 35,

        //child_size
        ch_element_width : 60,
        ch_element_height : 25,

        //else
        background_img : "none"
    },
    theme_purple : {
        //shape
        ancestor_shape : "rectangle",
        child_shape : "rectangle",
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
        anc_text_color : "#fff",

        //child_color
        ch_element_color : "#FEE4C2",
        ch_text_color : "#000",

        //element_margin
        father_child_margin : 20,
        brother_margin : 15,

        //ancestor_size
        anc_element_width : 80,
        anc_element_height : 35,

        //child_size
        ch_element_width : 60,
        ch_element_height : 25,

        //else
        background_img : "none"
    },
    theme_blue : {
        //shape
        ancestor_shape : "rectangle",
        child_shape : "rectangle",
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
        anc_text_color : "#fff",

        //child_color
        ch_element_color : "#FEE4C2",
        ch_text_color : "#000",

        //element_margin
        father_child_margin : 20,
        brother_margin : 15,

        //ancestor_size
        anc_element_width : 80,
        anc_element_height : 35,

        //child_size
        ch_element_width : 60,
        ch_element_height : 25,

        //else
        background_img : "none"
    },
    theme_yellow : {
        //shape
        ancestor_shape : "rectangle",
        child_shape : "rectangle",
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
        anc_text_color : "#fff",

        //child_color
        ch_element_color : "#FEE4C2",
        ch_text_color : "#000",

        //element_margin
        father_child_margin : 20,
        brother_margin : 15,

        //ancestor_size
        anc_element_width : 80,
        anc_element_height : 35,

        //child_size
        ch_element_width : 60,
        ch_element_height : 25,

        //else
        background_img : "none"
    },
    theme_classic : {
        //shape
        ancestor_shape : "rectangle",
        child_shape : "rectangle",
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
        anc_text_color : "#fff",

        //child_color
        ch_element_color : "#FEE4C2",
        ch_text_color : "#000",

        //element_margin
        father_child_margin : 20,
        brother_margin : 15,

        //ancestor_size
        anc_element_width : 80,
        anc_element_height : 35,

        //child_size
        ch_element_width : 60,
        ch_element_height : 25,

        //else
        background_img : "none"
    },
    theme_soft : {
        //shape
        ancestor_shape : "rectangle",
        child_shape : "rectangle",
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
        anc_text_color : "#fff",

        //child_color
        ch_element_color : "#FEE4C2",
        ch_text_color : "#000",

        //element_margin
        father_child_margin : 20,
        brother_margin : 15,

        //ancestor_size
        anc_element_width : 80,
        anc_element_height : 35,

        //child_size
        ch_element_width : 60,
        ch_element_height : 25,

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
        focus_border_color : "#C38707",
        focus_border_width : 2,
        common_border_width : 1,

        //ancestor_color
        anc_element_color : "#e8e88e",
        anc_text_color : "#D4C070",

        //child_color
        ch_element_color : "#88F6AE",
        ch_text_color : "#000",

        //element_margin
        father_child_margin : 50,
        brother_margin : 15,

        //ancestor_size
        anc_element_width : 90,
        anc_element_height : 90,

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
SCUTMind.init = function (cxt,bgWidth,bgHeight,canvasW,canvasH) {
    this.backgroundCanvas = [bgWidth,bgHeight];
    this.backgroundCenter = [bgWidth/2,bgHeight/2];
    this.currCanvasScope = [(bgWidth - canvasW)/2,(bgHeight - canvasH)/2,(bgWidth + canvasW)/2,(bgHeight + canvasH)/2];
    this.currPattern = this.patterns.default;
    this.currTheme = this.themes.default;
    this.rootNode = new MindNode("main",null,this.backgroundCenter);
    this.currNode = this.rootNode;
    this.draws(cxt, this.rootNode);
    return this;
};

/*
 @method draws
 @param cxt {Object} the context of web page's canvas.
 @param node {MindNode} the root node of the tree which you want to draws.
 @return this {SCUTMind}
 */
SCUTMind.draws = function (cxt,node) {
    if(node.type == "main"){
        cxt.beginPath();
        cxt.fillStyle = SCUTMind.currTheme.background_color;
        cxt.rect(0, 0, canvas.width, canvas.height);
        cxt.fill();
        cxt.closePath();
    }
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
 @method changePattern.
 @param pattern {string} the new pattern.
 @nothing to return.
*/
SCUTMind.changePattern = function(pattern){
    this.currPattern = pattern;
    this.updateArea(this.rootNode);
    if(pattern == this.patterns.default){
        this.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[1] - SCUTMind.rootNode.area[1]/2);
    }
    else{
        SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[0] - SCUTMind.rootNode.area[0]/2);
    }
    this.updateScope(this.rootNode);
    this.draws(cxt, this.rootNode);
};


//this is some function about front end achievement
/*
 @method draw
 @param cxt {Object} the context of web page's canvas.
 @param node {MindNode} the node which you want to draws.
 @return this {SCUTMind}
 */
SCUTMind.draw = function (cxt,node) {
    var need_newline = false;
    var text_num = node.text.length;
    if(text_num > 4){
        need_newline = true;
        var front_text = node.text.substr(0,4);
        var last_text = node.text.substr(4);
    }
    if(node.type == "main"){
        if(SCUTMind.currTheme == SCUTMind.themes.theme_circle){
            cxt.beginPath();
            cxt.fillStyle = SCUTMind.currTheme.anc_element_color;
            cxt.arc(node.position[0], node.position[1], SCUTMind.currTheme.anc_element_width/2, 0*Math.PI, 2*Math.PI);
            cxt.fill();
            cxt.closePath();
            if(SCUTMind.currNode == node){
                cxt.beginPath();
                cxt.lineWidth = SCUTMind.currTheme.focus_border_width;
                cxt.strokeStyle = SCUTMind.currTheme.focus_border_color;
                cxt.arc(node.position[0], node.position[1], SCUTMind.currTheme.anc_element_width/2+SCUTMind.currTheme.focus_border_width, 0*Math.PI, 2*Math.PI);
                cxt.stroke();
                cxt.closePath();
            }
            else{
                cxt.beginPath();
                cxt.lineWidth = SCUTMind.currTheme.common_border_width;
                cxt.strokeStyle = SCUTMind.currTheme.common_border_color;
                cxt.arc(node.position[0], node.position[1], SCUTMind.currTheme.anc_element_width/2+SCUTMind.currTheme.common_border_width, 0*Math.PI, 2*Math.PI);
                cxt.stroke();
                cxt.closePath();
            }
        }
        else{
            cxt.beginPath();
            cxt.fillStyle = SCUTMind.currTheme.anc_element_color;
            cxt.rect(node.scope[0], node.scope[1], SCUTMind.currTheme.anc_element_width, node.scope[3]-node.scope[1]);
            cxt.fill();
            cxt.closePath();
            if(SCUTMind.currNode == node){
                cxt.beginPath();
                cxt.lineWidth = SCUTMind.currTheme.focus_border_width;
                cxt.strokeStyle = SCUTMind.currTheme.focus_border_color;
                cxt.rect(node.scope[0]-SCUTMind.currTheme.focus_border_width/2, node.scope[1]-SCUTMind.currTheme.focus_border_width/2, SCUTMind.currTheme.anc_element_width+SCUTMind.currTheme.focus_border_width, node.scope[3]-node.scope[1]+SCUTMind.currTheme.focus_border_width);
                cxt.stroke();
                cxt.closePath();
            }
            else{
                cxt.beginPath();
                cxt.lineWidth = SCUTMind.currTheme.common_border_width;
                cxt.strokeStyle = SCUTMind.currTheme.common_border_color;
                cxt.rect(node.scope[0]-SCUTMind.currTheme.common_border_width/2, node.scope[1]-SCUTMind.currTheme.common_border_width/2, SCUTMind.currTheme.anc_element_width+SCUTMind.currTheme.common_border_width, node.scope[3]-node.scope[1]+SCUTMind.currTheme.common_border_width);
                cxt.stroke();
                cxt.closePath();
            }
        }
        cxt.font = "bold 19px BELLB";
        cxt.fillStyle = SCUTMind.currTheme.anc_text_color;
        if(need_newline) {
            cxt.fillText(front_text, node.position[0]-40, node.position[1]-1);
            cxt.fillText(last_text, node.position[0]-(text_num-4)*20/2, node.position[1] + 21);
        }
        else{
            cxt.fillText(node.text, node.position[0]-text_num*20/2, node.position[1]+9);
        }
    }
    else{
        cxt.beginPath();
        cxt.fillStyle = SCUTMind.currTheme.ch_element_color;
        cxt.rect(node.scope[0], node.scope[1], SCUTMind.currTheme.ch_element_width, node.scope[3]-node.scope[1]);
        cxt.fill();
        cxt.closePath();
        if(SCUTMind.currNode == node) {
            cxt.beginPath();
            cxt.lineWidth = SCUTMind.currTheme.focus_border_width;
            cxt.strokeStyle = SCUTMind.currTheme.focus_border_color;
            cxt.rect(node.scope[0]-SCUTMind.currTheme.focus_border_width/2, node.scope[1] - SCUTMind.currTheme.focus_border_width/2, SCUTMind.currTheme.ch_element_width+SCUTMind.currTheme.focus_border_width, node.scope[3]-node.scope[1]+SCUTMind.currTheme.focus_border_width);
            cxt.stroke();
            cxt.closePath();
        }
        else{
            cxt.beginPath();
            cxt.lineWidth = SCUTMind.currTheme.focus_border_width;
            cxt.strokeStyle = SCUTMind.currTheme.common_border_color;
            cxt.rect(node.scope[0]-SCUTMind.currTheme.common_border_width/2, node.scope[1] - SCUTMind.currTheme.common_border_width/2, SCUTMind.currTheme.ch_element_width+SCUTMind.currTheme.common_border_width, node.scope[3]-node.scope[1]+SCUTMind.currTheme.common_border_width);
            cxt.stroke();
            cxt.closePath();
        }

        cxt.font = "bold 12px BELLB";
        cxt.fillStyle = SCUTMind.currTheme.ch_text_color;
        if(need_newline) {
            cxt.fillText(front_text, node.position[0]-24, node.position[1]-1);
            cxt.fillText(last_text, node.position[0]-(text_num-4)*12/2, node.position[1] + 13);
        }
        else{
            cxt.fillText(node.text, node.position[0]-text_num*12/2, node.position[1] + 5);
        }
    }
    cxt.strokeStyle = SCUTMind.currTheme.line_color;
    cxt.lineWidth = "2";
    cxt.beginPath();
    if(SCUTMind.currPattern == SCUTMind.patterns.default) {
        if (node.children.length != 0) {
            if (node.children.length == 1) {
                cxt.moveTo(node.scope[2], node.position[1]);
                cxt.lineTo(node.children[0].scope[0], node.children[0].position[1]);
            }
            else {
                cxt.moveTo(node.scope[2], node.position[1]);
                cxt.lineTo(node.scope[2] + SCUTMind.currTheme.father_child_margin / 2, node.position[1]);
                cxt.moveTo(node.scope[2] + SCUTMind.currTheme.father_child_margin / 2, node.children[0].position[1]);
                cxt.lineTo(node.scope[2] + SCUTMind.currTheme.father_child_margin / 2, node.children[node.children.length - 1].position[1]);
                for (var i = 0; i < node.children.length; i++) {
                    cxt.moveTo(node.scope[2] + SCUTMind.currTheme.father_child_margin / 2, node.children[i].position[1]);
                    cxt.lineTo(node.children[i].scope[0], node.children[i].position[1]);
                }
            }
        }
    }
    else if(SCUTMind.currPattern == SCUTMind.patterns.tree) {
       for (var i = 0; i < node.children.length; i++) {
           cxt.moveTo(node.position[0], node.scope[3]);
           cxt.lineTo(node.children[i].position[0], node.children[i].scope[1]);
       }
    }
    else{
        if (node.children.length != 0) {
            if (node.children.length == 1) {
                cxt.moveTo(node.position[0], node.scope[3]);
                cxt.lineTo(node.children[0].position[0], node.children[0].scope[1]);
            }
            else {
                cxt.moveTo(node.position[0], node.scope[3]);
                cxt.lineTo(node.position[0], node.scope[3] + SCUTMind.currTheme.father_child_margin / 2);
                cxt.moveTo(node.children[0].position[0], node.scope[3] + SCUTMind.currTheme.father_child_margin / 2);
                cxt.lineTo(node.children[node.children.length-1].position[0], node.scope[3] + SCUTMind.currTheme.father_child_margin / 2);
                for (var i = 0; i < node.children.length; i++) {
                    cxt.moveTo(node.children[i].position[0], node.scope[3] + SCUTMind.currTheme.father_child_margin / 2);
                    cxt.lineTo(node.children[i].position[0], node.children[i].scope[1]);
                }
            }
        }
    }
    cxt.stroke();
    cxt.closePath();
};

/*
 @method updatePosition.
 @param node {MindNode} the node you which you want to operate.
 @param x_or_y {int} the top or left of the node's area.
 @nothing to return.
*/
SCUTMind.updatePosition = function(node, x_or_y){
    var margin = 0;
    if (SCUTMind.currPattern == SCUTMind.patterns.default) {
        if(node.type != "main") {
            node.position[0] = node.parent.scope[2] + SCUTMind.currTheme.father_child_margin + SCUTMind.currTheme.ch_element_width/2;
            node.position[1] = x_or_y + node.area[1]/2;
        }
        for (var i = 0; i < node.children.length; i++) {
            this.updatePosition(node.children[i], x_or_y + margin);
            margin += SCUTMind.currTheme.brother_margin + node.children[i].area[1];
        }
    }
    else{
        if(node.type != "main"){
            node.position[0] = x_or_y + node.area[0]/2;
            node.position[1] = node.parent.scope[3] + SCUTMind.currTheme.father_child_margin + node.scope[3] - node.scope[1];
        }
        for (var i = 0; i < node.children.length; i++) {
            this.updatePosition(node.children[i], x_or_y + margin);
            margin += SCUTMind.currTheme.brother_margin + node.children[i].area[0];
        }
    }
};


/*
 @method initNodeScope
 @param type {string} the type of the node.
 @param theme {string} the theme of the node.
 @param position {array} the position of the node.
 @param text {string} the text of the node.
 @return nodeScope {array}
 */
SCUTMind.initNodeScope = function (type,position,text) {
    var nodeScope = [];
    var node_width = 0;
    var node_height = 0;
    if(type == "main"){
        node_width = SCUTMind.currTheme.anc_element_width;
        node_height = SCUTMind.currTheme.anc_element_height;
        var text_num = text.length;
        if(text_num > 4) {
            node_height += 20;
        }
    }
    else{
        node_width = SCUTMind.currTheme.ch_element_width;
        node_height = SCUTMind.currTheme.ch_element_height;
        var text_num = text.length;
        if(text_num > 4) {
            node_height += 15;
        }
    }
    nodeScope[0] = position[0] - node_width/2;
    nodeScope[1] = position[1] - node_height/2;
    nodeScope[2] = position[0] + node_width/2;
    nodeScope[3] = position[1] + node_height/2;
    return nodeScope;
};

/*
 @method updateScope.
 @param node {MindNode} use rootNode to update all the node's scope.
 @nothing to return.
*/
SCUTMind.updateScope = function(node){
    node.scope = this.initNodeScope(node.type, node.position, node.text);
    for(var i=0; i<node.children.length; i++){
        this.updateScope(node.children[i]);
    }
};

/*
 @method initNewNodeArea
 @param node {MindNode} the new node.
 @return area {array}.
 */
SCUTMind.initNewNodeArea = function(node){
    var area = [];
    area[0] = node.scope[2] - node.scope[0];
    area[1] = node.scope[3] - node.scope[1];
    return area;
};

/*
 @method initNodeArea
 @param node {MindNode} the node you want to init its area.
 @nothing to return.
*/
SCUTMind.initNodeArea = function (node){
    var area;

    if(SCUTMind.currPattern == SCUTMind.patterns.default){
        area = node.scope[3]-node.scope[1];
        if(node.children.length >= 1){
            area = node.children[0].area[1];
        }
        for(var i=1; i<node.children.length; i++){
            area += (SCUTMind.currTheme.brother_margin + node.children[i].area[1]);
        }
        node.area[1] = area;
    }
    else{
        area = node.scope[2]-node.scope[0];
        if(node.children.length >= 1){
            area = node.children[0].area[0];
        }
        for(var i=1; i<node.children.length; i++){
            area += (SCUTMind.currTheme.brother_margin + node.children[i].area[0]);
        }
        node.area[0] = area;
    }
};


/*
 @method updateArea.
 @param node {MindNode} this node and its ancestors' areas will be init.
 @nothing to return.
*/
SCUTMind.updateArea = function(node){
    this.initNodeArea(node);
    if(node.parent != null){
        this.updateArea(node.parent);
    }
};

/*
 @method updateAllArea.
 @param node {MindNode} use the rootNode to init all the node.
 @nothing to return.
*/
SCUTMind.updateAllArea = function(node){
    if(node.children.length == 0){
        this.updateArea(node);
    }
    for(var i=0; i<node.children.length; i++){
        this.updateAllArea(node.children[i]);
    }
}

/*
 @method getMousePos.
 @param canvas {html element} the main canvas.
 @param event {js event} the event happen.
 @return mousePos {object} the mouse position.
*/
SCUTMind.getMousePos = function(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    var mousePos = [
        parseInt(event.clientX * (canvas.width / rect.width)),
        parseInt(event.clientY * (canvas.height / rect.height))
    ];
    return mousePos;
 };

/*
 @method updateCurrNode.
 @param node {MindNode} the rootNode of the SCUTMind.
 @param mousePos {array} the position of mouse click.
 @nothing to return.
*/
SCUTMind.updateCurrNode = function(node, mousePos){
    if(node.contains(mousePos)){
        this.currNode = node;
    }
    for(var i=0; i<node.children.length; i++) {
        this.updateCurrNode(node.children[i],mousePos);
    }
};