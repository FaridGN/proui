document.getElementById("search").onclick = function clksearch(){
    search.style.width = "150px";
    mobmenu.style.display = "none";
    setting.style.display = "none";
    search.style.left = "201px";
    smallphoto.style.display = "none";
    share.style.display = "none";
}

document.getElementById("search").onblur = function outofinput(){
    search.style.width = "90px";
    mobmenu.style.display = "block";
    setting.style.display = "block";
    search.style.left = "301px"; 
    smallphoto.style.display = "block";
    share.style.display = "block";
}

document.getElementById("user").onmouseover = function(){
         pfl.style.display = "block";
}

document.getElementById("user").onmouseleave = function(){
        pfl.style.display = "none";
}

document.getElementById("env").onmouseover = function(){
    msg.style.display = "block";
}

document.getElementById("env").onmouseleave = function(){
     msg.style.display = "none";
}

document.getElementById("set").onmouseover = function(){
    stg.style.display = "block";
}

document.getElementById("set").onmouseleave = function(){
     stg.style.display = "none";
}

document.getElementById("out").onmouseover = function(){
    lgt.style.display = "block";
}

document.getElementById("out").onmouseleave = function(){
     lgt.style.display = "none";
}
// document.getElementById("dash01").onmouseover = function(){
//     document.getElementById("dash01").setAttribute("data-icon", "white");
// }