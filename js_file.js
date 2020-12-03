function new_img(identity, new_source){
    document.getElementById(identity).src=new_source
}

function old_img(identity, old_source){
    document.getElementById(identity).src=old_source
}

function go_to_link(url){
    window.location.href = url;
}
