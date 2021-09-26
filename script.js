function toggleVisibility(clickedElement){
  var sectionHeaders = document.getElementById("sectionHeaders").getElementsByTagName("h3");
  var textDivs = document.getElementsByClassName("textDiv");
  for(var i = 0; i < textDivs.length; i++){
    var label = sectionHeaders[i].id;
    if(textDivs[i].id != clickedElement){
      textDivs[i].style.display = "none";
      sectionHeaders[i].style.color = "#D9E76C";
      sectionHeaders[i].style.textDecoration = "none";
    } else {
      if(textDivs[i].style.display == "inline"){
        textDivs[i].style.display = "none";
        sectionHeaders[i].style.color = "#D9E76C";
        sectionHeaders[i].style.textDecoration = "none";
      } else {
        textDivs[i].style.display = "inline";
        sectionHeaders[i].style.color="#FBFCF0";
        sectionHeaders[i].style.textDecoration="underline";
      }
    }
  }
}
