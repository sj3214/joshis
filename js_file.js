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

function openTab(tabName, elmnt){
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display="none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color=blue;
        tablinks[i].style.fontWeight="normal";
        tablinks[i].style.borderColor=white;
    }
 
    document.getElementById(tabName).style.display="block";
    elmnt.style.color = red;
    elmnt.style.fontWeight = "bold";
    elmnt.style.borderColor = red;
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