window.onload = function(e) {

    var logger = document.getElementsByTagName("textarea")[0];
    function log(newtext) {
        logger.value += newtext + "\n";
        logger.scrollTop = logger.scrollHeight; 
    }
    var divs = document.getElementsByTagName("div");
    for(var i=0; i < divs.length; i++) {
        (function(){
            var div = divs[i];
            div.onmouseover = function(e) {
                if(div.id === "depth1") {
                    log(div.id);
                }
                else if(div.id === "depth2")  {                    
                    log(div.id);
                }
                else if(div.id === "depth3") {
                    log(div.id);
                }
            }
        })();
    }
}