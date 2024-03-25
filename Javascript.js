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
slideIndex = 1;
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("Myslide2");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
if(window.innerWidth<450){
showDivs(slideIndex);
Feature();
Modern_Consulting();
Option_Boder();
}