
var snavi=document.getElementById("snavi")
function toggle(){
  snavi.style.left="0"
}


function closee(){
    snavi.style.left="-60%"
  }
var enteredText=""
 var container=document.querySelector(".container")
 var search=document.querySelector(".search")
 var productlist=container.querySelectorAll("div")

 search.addEventListener("keyup",function(event){
   enteredText=event.target.value.toUpperCase()
  for(count=0;count<productlist.length;count++)
  {
    var productname=productlist[count].querySelector("h3").textContent
    if(productname.toUpperCase().indexOf(enteredText)<0)
      {
       productlist[count].style.display="none"
      }
      else{
        productlist[count].style.display="block"
      }
  }
 })