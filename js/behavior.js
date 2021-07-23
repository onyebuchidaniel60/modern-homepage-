var slideIndex=0;
showSlides();

function showSlides() {

    var i;
    var slides= document.getElementsByClassName("mySlides");
    for(i=0; i<slides.length; i++){
        slides[i].style.display= "none";
    }
    slideIndex++;
    if(slideIndex>slides.length){
        slideIndex=1
    }
    slides[slideIndex-1].style.display="flex";
}
    setInterval(showSlides, 20000);
    
    
   
    function dosomething(stater){

        var containerElement =document.getElementById("main_container");
        var overlay_Element= document.getElementById("overlay");
        if(stater){
            overlay_Element.style.display="block";
            containerElement.setAttribute("class", "blur");
        }
        else{
            overlay_Element.style.display="none";
            containerElement.setAttribute("class", null);
        }
    };

    function whenhover(hovered){
        if(hovered){
        var showcat=document.getElementById("category-menu");
        showcat.style.display="block";
    }
    else{
var hoverthis=document.getElementById("sub-menu");
hoverthis.style.display="block";
    }
    };
    function nothover(staterr){
        if(staterr){
        var getit=document.getElementById("category-menu");
        getit.style.display="none";
        }
    else{
        var submenu=document.getElementById("sub-menu");
        submenu.style.display="none";
    }
};