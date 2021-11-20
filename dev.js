function red(){
  if(document.getElementById("dev").style.backgroundColor=="yellow"){
      document.getElementById("dev").style.backgroundColor = "red";
  }
  else{
      document.getElementById("dev").style.backgroundColor="yellow";
  }
}

function green(){
  document.getElementById("p1").style.color="green";
}

function blue(){
  if(document.getElementById("dev").style.backgroundColor=="blue"){
      document.getElementById("dev").style.backgroundImage ="url(https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)";
      document.getElementById("dev").style.color="white";
  }
  else{
      document.getElementById("dev").style.backgroundColor="blue";
  }
}

function ten(){
if(document.getElementById("p1").style.fontSize == "x-large"){
      document.getElementById("p1").style.fontSize = "medium";
  }
  else{
      document.getElementById("p1").style.fontSize ="x-large";
  }
}
function twenty(){
  if(document.getElementById("p1").style.fontWeight == "400"){
    document.getElementById("p1").style.fontWeight = "600";
  }
  else{
    document.getElementById("p1").style.fontWeight ="400";
  }
}
function thirty(){
  if(document.getElementById("p1").style.lineHeight == "1"){
    document.getElementById("p1").style.lineHeight = "1.5";
  }
  else{
    document.getElementById("p1").style.lineHeight ="1";
  }
}
function mono(){
  document.getElementById("p1").style.fontFamily ="fantasy";
}
function sans(){
  document.getElementById("p1").style.fontFamily ="sans-serif";
}
function curs(){
  document.getElementById("p1").style.fontFamily ="cursive";
}