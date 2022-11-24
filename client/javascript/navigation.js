document.getElementsByClassName("ham").addEventListener("click", openInner)

function openInner(e){
    document.getElementsByClassName("innerNavigation").style.transition = "all 0.5s ease-in"
    document.getElementsByClassName("innerNavigation").style.visibility = "visible";
}