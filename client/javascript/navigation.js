document.getElementById("menubutton").addEventListener("click", openinnerMenu)

function openinnerMenu(e){
    if(innerNav.style.display == "inline-block") {
    innerNav.style.transition = "all 0.5s ease-in"
    innerNav.style.display = "none";
    } else {innerNav.style.transition = "all 0.5s ease-in"
    innerNav.style.display = "inline-block";}
}

let innerNav = document.querySelector(".innerNavigation");
let searchBar = document.getElementById("searchbar");

document.getElementById("searchIcon").addEventListener("click", openSearchBar)

function openSearchBar(e){
    if (window.matchMedia("(max-width: 805px)").matches) {
        if (document.getElementById("searchbar").style.display == "none") {
            console.log("search nbar is closed")
        } 
    }
}