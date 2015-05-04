// In this file, you can write the binding function.

// The beginning function.
$(document).ready(function() {
    var canvas = document.getElementById('canvas');
    var cxt = canvas.getContext('2d');
    $('.pattern').click(function(){
        var this_id = $(this).attr("id");
        if((this_id=="right" && SCUTMind.currPattern==SCUTMind.patterns.default)||
           (this_id=="tree" && SCUTMind.currPattern==SCUTMind.patterns.tree)||
           (this_id=="organization" && SCUTMind.currPattern==SCUTMind.patterns.organize)){
            return false;
        }
        else{
            if(((this_id=="tree"||this_id=="organization")&&SCUTMind.currPattern==SCUTMind.patterns.default)||
               (this_id=="right"&&(SCUTMind.currPattern==SCUTMind.patterns.tree||SCUTMind.currPattern==SCUTMind.patterns.organize))){
                if(this_id == "right") {
                    SCUTMind.currPattern = SCUTMind.patterns.default;
                }
                else if(this_id == "tree") {
                    SCUTMind.currPattern = SCUTMind.patterns.tree;
                }
                else if(this_id == "organization") {
                    SCUTMind.currPattern = SCUTMind.patterns.organize;
                }
                SCUTMind.updateAllArea(SCUTMind.rootNode);
                for(var i=0; i<10; i++) {
                    if (SCUTMind.currPattern == SCUTMind.patterns.default)
                        SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[1] - SCUTMind.rootNode.area[1] / 2);
                    else
                        SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[0] - SCUTMind.rootNode.area[0] / 2);
                    SCUTMind.updateScope(SCUTMind.rootNode);
                }
            }
            else{
                if(this_id == "right") {
                    SCUTMind.currPattern = SCUTMind.patterns.default;
                }
                else if(this_id == "tree") {
                    SCUTMind.currPattern = SCUTMind.patterns.tree;
                }
                else if(this_id == "organization") {
                    SCUTMind.currPattern = SCUTMind.patterns.organize;
                }
            }
        }

        cxt.clearRect(0,0,canvas.width,canvas.height);
        SCUTMind.draws(cxt, SCUTMind.rootNode);
    });
	$('.sideBar-btn').click(function(event) {
        document.getElementById("aside").style.cssText="left:0;";
        document.getElementById("mask").style.cssText="left:0%;";
	});
	$('.sibling-btn').click(function(event) {
        if(SCUTMind.currNode.type == "main"){
            alert("不能有多个中心主题！");
            return false;
        }
		var newNode = new MindNode("child",SCUTMind.currNode.parent, [0,0]);
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
		var newNode = new MindNode("child",SCUTMind.currNode,[0,0]);
		SCUTMind.currNode.addChild(newNode);
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
    $('.text-btn').click(function(){
        var objDeck = document.getElementById("deck");
        if(!objDeck)
        {
            objDeck = document.createElement("div");
            objDeck.id="deck";
            document.body.appendChild(objDeck);
        }
        objDeck.className="showDeck";
        objDeck.style.filter="alpha(opacity=50)";
        objDeck.style.opacity=40/100;
        objDeck.style.MozOpacity=40/100;
        //显示遮盖的层end
        
        //禁用select
        hideOrShowSelect(true);
        
        //改变样式
        document.getElementById('divBox').className='showDlg';
    });
    $('.delete-btn').click(function(){
        if(SCUTMind.currNode.type == "main"){
            alert("您不能删除中心主题！");
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
        var this_id = $(this).attr("id");
        if(this_id == "blue")
            SCUTMind.currTheme = SCUTMind.themes.default;
        else if(this_id == "green")
            SCUTMind.currTheme = SCUTMind.themes.theme_green;
        else if(this_id == "pink")
            SCUTMind.currTheme = SCUTMind.themes.theme_pink;
        else if(this_id == "purple")
            SCUTMind.currTheme = SCUTMind.themes.theme_purple;
        else if(this_id == "gray")
            SCUTMind.currTheme = SCUTMind.themes.theme_gray;
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
    $('#mask').click(function(){
        document.getElementById("aside").style.cssText="left:-27%;";
        document.getElementById("mask").style.cssText="left:-100%;";
    });
    $('#deck').click(function(){
        document.getElementById('divBox').className='hideDlg';
        document.getElementById("deck").className="hideDeck";
        hideOrShowSelect(false);
    });
    $('#OK').click(function(){
        var text = $('#textbox').val();
        if(text != "输入少于8的文字"){
            SCUTMind.currNode.text = text;
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
        document.getElementById('divBox').className='hideDlg';
        document.getElementById("deck").className="hideDeck";
        hideOrShowSelect(false);
    });
    if(IsPC()){
        canvas.addEventListener("click", function (event) {
            var mousePos = SCUTMind.getMousePosInPC(canvas, event);
            SCUTMind.updateCurrNode(SCUTMind.rootNode, mousePos);
            cxt.clearRect(0,0,canvas.width,canvas.height);
            SCUTMind.draws(cxt, SCUTMind.rootNode);
        }, false);
    }
    canvas.addEventListener('touchstart', touchStart);
    canvas.addEventListener('touchmove', touchMove);
    canvas.addEventListener('touchend', function() {
        isMove = false;
        if(!IsPC()){
            SCUTMind.updateCurrNode(SCUTMind.rootNode, mousePos);
            cxt.clearRect(0,0,canvas.width,canvas.height);
    		SCUTMind.draws(cxt, SCUTMind.rootNode);
        }
    },false);
    function touchStart(e) {
        isMove = true;
        e.preventDefault();
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
        if(!IsPC())
            mousePos = SCUTMind.getMousePos(canvas, e);
    }
    function touchMove(e) {
        var position = [];
        if (isMove) {
            e.preventDefault();
            position[0] = (e.touches[0].pageX - x);
            position[1] = (e.touches[0].pageY - y);
            SCUTMind.rootNode.position[0] += position[0];
            SCUTMind.rootNode.position[1] += position[1];
            SCUTMind.updateAllArea(SCUTMind.rootNode);
            for (var i = 0; i < 10; i++) {
                if (SCUTMind.currPattern == SCUTMind.patterns.default)
                    SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[1] - SCUTMind.rootNode.area[1] / 2);
                else
                    SCUTMind.updatePosition(SCUTMind.rootNode, SCUTMind.rootNode.position[0] - SCUTMind.rootNode.area[0] / 2);
                SCUTMind.updateScope(SCUTMind.rootNode);
            }
            cxt.clearRect(0, 0, canvas.width, canvas.height);
            SCUTMind.draws(cxt, SCUTMind.rootNode);
            x = e.touches[0].pageX;
            y = e.touches[0].pageY;
        }
    }
});
function hideOrShowSelect(v) {
    var allselect = document.getElementsByTagName("select");
    for (var i=0; i<allselect.length; i++) {
        allselect[i].disabled =(v==true)?"disabled":"";
    }
}
function IsPC()  
{  
   var userAgentInfo = navigator.userAgent;  
   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
   var flag = true;  
   for (var v = 0; v < Agents.length; v++) {  
       if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
   }  
   return flag;  
} 

