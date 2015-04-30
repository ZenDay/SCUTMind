// In this file, you can write the binding function.

// The beginning function.
$(document).ready(function() {
	var canvas = document.getElementById('canvas');
	var cxt = canvas.getContext('2d');
	SCUTMind.init(cxt, 500, 800, 2000, 2000);
	$('.sideBar-btn').click(function(event) {
		
	});
	$('.sibling-btn').click(function(event) {
		
	});
	$('.child-btn').click(function(event) {
		var newNode = new MindNode("child",SCUTMind.currNode,[0,0]);
		SCUTMind.currNode.addChild(newNode);
		SCUTMind.updateArea(newNode);
		if(SCUTMind.currPattern == SCUTMind.patterns.default)
			SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[1] - SCUTMind.rootNode.area[1]/2);
		else
			SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[0] - SCUTMind.rootNode.area[0]/2);
		SCUTMind.updateArea(newNode);
		if(SCUTMind.currPattern == SCUTMind.patterns.default)
			SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[1] - SCUTMind.rootNode.area[1]/2);
		else
			SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[0] - SCUTMind.rootNode.area[0]/2);
		SCUTMind.updateScope(SCUTMind.rootNode);
		cxt.clearRect(0,0,500,800);
		SCUTMind.draws(cxt, SCUTMind.rootNode);
		return false;
	});
    $('.delete-btn').click(function(){
    	
    });
});