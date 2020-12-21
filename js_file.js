var red, blue, green, black, white

red = "#FF5050";
blue = "#3BCCFF";
green = "#37BF88";
black = "#000000";
white = "#FFFFFF";

function new_img(identity, new_source){
    document.getElementById(identity).src=new_source
}

function old_img(identity, old_source){
    document.getElementById(identity).src=old_source
}

function go_to_link(url){
    window.location.href = url;
}

function openTab(tabName, elmnt, tabHead){
    var i, tabcontent, tabHeads, protocol_icons;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display="none";
    }

    tabHeads = document.getElementsByClassName("tab_head");
    for (i = 0; i < tabHeads.length; i++) {
        tabHeads[i].style.color=blue;
        tabHeads[i].style.fontWeight="normal";
        tabHeads[i].style.borderColor=white;
    }
 
    protocol_icons = document.getElementsByClassName("protocol_icon");
    for (i = 0; i < protocol_icons.length; i++) {
        protocol_icons[i].style.display="none";
    }

    document.getElementById(tabName).style.display="block";
    console.log(document.getElementById(tabHead))
    document.getElementById(tabHead).style.color=red;
    document.getElementById(tabHead).style.fontWeight="bold";
    document.getElementById(tabHead).style.borderColor=red;
    elmnt.style.color = red;
}

function toggleSubTab(subTab, elmnt){  
    subtab = document.getElementById(subTab);

    if (subtab.style.display == "") {
        subtab.style.display = "block";
        elmnt.style.color = red;
    }
    else if (subtab.style.display == "block") {
        subtab.style.display = "";            
        elmnt.style.color = blue;
    }


}