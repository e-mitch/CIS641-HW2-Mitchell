var leftElements = document.getElementsByClassName("left");
var rightElements = document.getElementsByClassName("right");

function setupPage() {
  for(var i=0; i < leftElements.length; i++){
    leftElements[i].style.display="none";
    rightElements[i].style.display="none";
  }
  document.getElementById("interestsText").style.display="none";
  document.getElementById("technicalText").style.display="none";
  document.getElementById("projectText").style.display="none";
}

function toggleSchool(){
  if(leftElements[0].style.display == "none"){
    document.getElementsByClassName("left")[0].style.display = "inline";
    document.getElementsByClassName("right")[0].style.display = "inline";
    document.getElementsByClassName("left")[1].style.display = "inline";
    document.getElementsByClassName("right")[1].style.display = "inline";
  } else {
    document.getElementsByClassName("left")[0].style.display = "none";
    document.getElementsByClassName("right")[0].style.display = "none";
    document.getElementsByClassName("left")[1].style.display = "none";
    document.getElementsByClassName("right")[1].style.display = "none";
  }
}

function toggleWork(){
  if(leftElements[2].style.display == "none"){
    document.getElementsByClassName("left")[2].style.display = "inline";
    document.getElementsByClassName("right")[2].style.display = "inline";
    document.getElementsByClassName("left")[3].style.display = "inline";
    document.getElementsByClassName("right")[3].style.display = "inline";
  } else {
    document.getElementsByClassName("left")[2].style.display = "none";
    document.getElementsByClassName("right")[2].style.display = "none";
    document.getElementsByClassName("left")[3].style.display = "none";
    document.getElementsByClassName("right")[3].style.display = "none";
  }
}

function toggleInterests(){
  if(document.getElementById("interestsText").style.display == "none"){
    document.getElementById("interestsText").style.display = "block";
  } else {
    document.getElementById("interestsText").style.display = "none";
  }
}

function toggleTechnical(){
  if(document.getElementById("technicalText").style.display == "none"){
    document.getElementById("technicalText").style.display = "block";
  } else {
    document.getElementById("technicalText").style.display = "none";
  }
}

function toggleProject(){
  if(document.getElementById("projectText").style.display == "none"){
    document.getElementById("projectText").style.display = "block";
  } else {
    document.getElementById("projectText").style.display = "none";
  }
}
