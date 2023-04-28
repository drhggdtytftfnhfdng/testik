var pages = ["index_slide1.html", "index_slide2.html", "index_slide3.html",  "index_slide4.html" , "index_slide5.html"]
var currentindex = 0
function showPage(){
    var page = pages[currentindex];
}
function next(){
    currentindex++;
    if (currentindex>= pages.length){
        currentindex = 0
    }
    showPage();
}
function prev(){
    currentindexx--;
    if(currentindex<0){
        currentindex = pages.length -1;
    }
    showPage()
}
document.addEventListener("DOMContentLoaded", showPage);
document.getElementById("nextButton").addEventListener("click", next);
document.getElementById("prevButton").addEventListener("click", prev);