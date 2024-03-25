var slideIndex = 0;
function Feature() {
  var i;
  var x = document.getElementsByClassName("Myslide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(Feature,4000); 
}
function Modern_Consulting() {
  var i;
  var x = document.getElementsByClassName("Myslide1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(Modern_Consulting,4000); 
}
var slideIndex1 = [1,1];
var slideId = ["Myslide2","Myslide3"]
function plusDivs(n, no) {
  showDivs(slideIndex1[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex1[no] = 1}
  if (n < 1) {slideIndex1[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex1[no]-1].style.display = "block";  
}
if(window.innerWidth<450){
showDivs(1, 0);
showDivs(1, 1);
Feature();
Modern_Consulting();
Option_Boder();
}