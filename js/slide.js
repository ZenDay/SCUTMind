    function showDlg()
    {
        //显示遮盖的层
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
        
        //调整位置至居中
        adjustLocation();
        
    }
    
    function cancel()
    {
        document.getElementById('divBox').className='hideDlg';
        document.getElementById("deck").className="hideDeck";
        hideOrShowSelect(false);
    }
    
    function hideOrShowSelect(v)
    {
        var allselect = document.getElementsByTagName("select");
        for (var i=0; i<allselect.length; i++)
        {
            //allselect[i].style.visibility = (v==true)?"hidden":"visible";
            allselect[i].disabled =(v==true)?"disabled":"";
        }
    }
    
    function adjustLocation()
    {
        var obox=document.getElementById('divBox');
        if (obox !=null && obox.style.display !="none")
        {
            var w=368;
            var h=129;
            var oLeft,oTop;
            
            if (window.innerWidth)
            {
                oLeft=(window.pageXOffset+(window.innerWidth-w)/2) *0.8+"px";
                oTop=(window.pageYOffset+(window.innerHeight-h)/2)*0.5 +"px";
            }
            else
            {
                var dde=document.documentElement;
                oLeft=dde.scrollLeft+(dde.offsetWidth-w)/2 +"px";
                oTop=dde.scrollTop+(dde.offsetHeight-h)/2 +"px";
            }
            
            obox.style.left=oLeft;
            obox.style.top=oTop;
        }
    }
    