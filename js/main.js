// In this file, you can write the binding function.

// The beginning function.
$(document).ready(function() {
    var canvas = document.getElementById('canvas');
    var cxt = canvas.getContext('2d');
    $('.pattern').click(function(){
        var this_id = $(this).attr("id");
        if(this_id == "right"){
            SCUTMind.currPattern = SCUTMind.patterns.default;
        }
        else if(this_id == "tree"){
            SCUTMind.currPattern = SCUTMind.patterns.tree;
        }
        else if(this_id == "organization"){
            SCUTMind.currPattern = SCUTMind.patterns.organize;
        }
        SCUTMind.updateAllArea(SCUTMind.rootNode);
        for(var i=0; i<10; i++){
            if(SCUTMind.currPattern == SCUTMind.patterns.default)
                SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[1] - SCUTMind.rootNode.area[1]/2);
            else
                SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[0] - SCUTMind.rootNode.area[0]/2);
            SCUTMind.updateScope(SCUTMind.rootNode);
        }
        cxt.clearRect(0,0,canvas.width,canvas.height);
        SCUTMind.draws(cxt, SCUTMind.rootNode);
    });
	$('.sideBar-btn').click(function(event) {

	});
	$('.sibling-btn').click(function(event) {
        if(SCUTMind.currNode.type == "main"){
            alert("You can't add a sibling element of the rootNode");
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
        newNode.text = "中心主题的";
        newNode.scope = SCUTMind.initNodeScope("child",newNode.position,newNode.text);
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
    $('.swiper-slide a').click(function(){
        //alert($(this).attr("id"));
        var this_id = $(this).attr("id");
        if(this_id == "gray")
            SCUTMind.currTheme = SCUTMind.themes.default;
        else if(this_id == "green")
            SCUTMind.currTheme = SCUTMind.themes.theme_green;
        else if(this_id == "pink")
            SCUTMind.currTheme = SCUTMind.themes.theme_pink;
        else if(this_id == "purple")
            SCUTMind.currTheme = SCUTMind.themes.theme_purple;
        else if(this_id == "blue")
            SCUTMind.currTheme = SCUTMind.themes.theme_blue;
        else if(this_id == "yellow")
            SCUTMind.currTheme = SCUTMind.themes.theme_yellow;
        else if(this_id == "classic")
            SCUTMind.currTheme = SCUTMind.themes.theme_classic;
        else if(this_id == "soft")
            SCUTMind.currTheme = SCUTMind.themes.theme_soft;
        else if(this_id == "circle")
            SCUTMind.currTheme = SCUTMind.themes.theme_circle;
        SCUTMind.updateAllArea(SCUTMind.rootNode);
        for(var i=0; i<10; i++){
            if(SCUTMind.currPattern == SCUTMind.patterns.default)
                SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[1] - SCUTMind.rootNode.area[1]/2);
            else
                SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[0] - SCUTMind.rootNode.area[0]/2);
            SCUTMind.updateScope(SCUTMind.rootNode);
        }
        cxt.clearRect(0,0,canvas.width,canvas.height);
        SCUTMind.draws(cxt, SCUTMind.rootNode);
    });
    canvas.addEventListener("click", function (event) {
        var mousePos = SCUTMind.getMousePos(canvas, event);
        SCUTMind.updateCurrNode(SCUTMind.rootNode, mousePos);
        cxt.clearRect(0,0,canvas.width,canvas.height);
		SCUTMind.draws(cxt, SCUTMind.rootNode);
    }, false);
});