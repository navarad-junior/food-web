function dropdown(){
    var ul = document.getElementById("unordered-list");
    if(ul.className == "topnav"){
        ul.className += " responsive";
    }

    else{
        ul.className = "topnav";
    }
}


