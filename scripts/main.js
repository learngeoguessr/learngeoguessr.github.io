var hidden = true;

function toggleSidebar() {
  if (hidden) {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("content").style.marginLeft = "250px";
    this.hidden = false;
  } else {
    document.getElementById("mySidebar").style.width = "85px";
    document.getElementById("content").style.marginLeft = "85px";
    this.hidden = true;
  }
}

function showDiv(x){
  const collection = document.getElementsByClassName("section");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.display = "none";
  }
  collection[x].style.display = "block";
}

function fadeIn(){
  const main = document.getElementById("content");
  main.classList.add("animate__animated", "animate__fadeIn");

  document.getElementById("mySidebar").style.width = "85px";
  document.getElementById("content").style.marginLeft = "85px";
  this.mini = true;

  showDiv(0);
}

fadeIn();