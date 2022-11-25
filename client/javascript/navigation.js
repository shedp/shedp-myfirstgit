document.getElementById("menubutton").addEventListener("click", openInnerMenu)

function openInnerMenu(e){
    if(document.querySelector(".innerNavigation").style.display == "block") {
    document.querySelector(".innerNavigation").style.transition = "all 0.5s ease-in"
    document.querySelector(".innerNavigation").style.display = "none";
    } else {document.querySelector(".innerNavigation").style.transition = "all 0.5s ease-in"
    document.querySelector(".innerNavigation").style.display = "block";}
}