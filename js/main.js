// In this file, you can write the binding function.

// The beginning function.
$(document).ready(function() {
    var canvas = document.getElementById('canvas');
    var cxt = canvas.getContext('2d');
	$('.sideBar-btn').click(function(event) {

	});
	$('.sibling-btn').click(function(event) {
        if(SCUTMind.currNode.type == "main"){
            alert("You can add a sibling element of the rootNode");
            return false;
        }
        var position = [];
        if(SCUTMind.currPattern == SCUTMind.patterns.default){
            position[0] = SCUTMind.currNode.position[0];
            position[1] = SCUTMind.currNode.position[1] + SCUTMind.currNode.area[1]/2 + SCUTMind.currTheme.brother_margin + SCUTMind.currTheme.ch_element_height/2;
        }
        else{
            position[0] = SCUTMind.currNode.position[0] + SCUTMind.currNode.area[0]/2 + SCUTMind.currTheme.brother_margin + SCUTMind.currTheme.ch_element_width/2;
            position[1] = SCUTMind.currNode.position[1];
        }
		var newNode = new MindNode("child",SCUTMind.currNode.parent, position);
        SCUTMind.currNode.parent.addChild(newNode);
        SCUTMind.updateArea(newNode);
		if(SCUTMind.currPattern == SCUTMind.patterns.default)
			SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[1] - SCUTMind.rootNode.area[1]/2);
		else
			SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[0] - SCUTMind.rootNode.area[0]/2);
		SCUTMind.updateScope(SCUTMind.rootNode);
		cxt.clearRect(0,0,canvas.width,canvas.height);
		SCUTMind.draws(cxt, SCUTMind.rootNode);
		return false;
	});
	$('.child-btn').click(function(event) {
        var position = [];
        if(SCUTMind.currPattern == SCUTMind.patterns.default){
            position[0] = SCUTMind.currNode.scope[2] + SCUTMind.currTheme.father_child_margin + SCUTMind.currTheme.ch_element_width/2;
            if(SCUTMind.currNode.children.length == 0){
                position[1] = SCUTMind.currNode.position[1];
            }
            else{
                position[1] = SCUTMind.currNode.children[SCUTMind.currNode.children.length-1].position[1] + SCUTMind.currNode.children[SCUTMind.currNode.children.length-1].area[1]/2 + SCUTMind.currTheme.brother_margin + SCUTMind.currTheme.ch_element_height/2;
            }
        }
        else{
            position[1] = SCUTMind.currNode.scope[3] + SCUTMind.currTheme.father_child_margin + SCUTMind.currTheme.ch_element_height/2;
            if(SCUTMind.currNode.children.length == 0){
                position[0] = SCUTMind.currNode.position[0];
            }
            else{
                position[0] = SCUTMind.currNode.children[SCUTMind.currNode.children.length-1].position[0] + SCUTMind.currNode.children[SCUTMind.currNode.children.length-1].area[0]/2 + SCUTMind.currTheme.brother_margin + SCUTMind.currTheme.ch_element_width/2;
            }
        }
		var newNode = new MindNode("child",SCUTMind.currNode,position);
		SCUTMind.currNode.addChild(newNode);
		SCUTMind.updateArea(newNode);
		if(SCUTMind.currPattern == SCUTMind.patterns.default)
			SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[1] - SCUTMind.rootNode.area[1]/2);
		else
			SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[0] - SCUTMind.rootNode.area[0]/2);
		SCUTMind.updateScope(SCUTMind.rootNode);
		cxt.clearRect(0,0,canvas.width,canvas.height);
		SCUTMind.draws(cxt, SCUTMind.rootNode);
		return false;
	});
    $('.delete-btn').click(function(){
    	if(SCUTMind.currNode.type == "main"){
            alert("You can't delete the rootNode!");
            return false;
        }
        var newCurrNode = SCUTMind.currNode.parent;
        SCUTMind.currNode.parent.deleteChild(SCUTMind.currNode);
        SCUTMind.currNode = newCurrNode;
        SCUTMind.updateArea(SCUTMind.currNode);
		if(SCUTMind.currPattern == SCUTMind.patterns.default)
			SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[1] - SCUTMind.rootNode.area[1]/2);
		else
			SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[0] - SCUTMind.rootNode.area[0]/2);
		SCUTMind.updateScope(SCUTMind.rootNode);
		cxt.clearRect(0,0,canvas.width,canvas.height);
		SCUTMind.draws(cxt, SCUTMind.rootNode);
        return false;
    });
    canvas.addEventListener("click", function (event) {
        var mousePos = SCUTMind.getMousePos(canvas, event);
        SCUTMind.updateCurrNode(SCUTMind.rootNode, mousePos);
        cxt.clearRect(0,0,canvas.width,canvas.height);
		SCUTMind.draws(cxt, SCUTMind.rootNode);
    }, false);
});