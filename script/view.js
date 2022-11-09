
// document.querySelector(".heart").click(function(){
//     this.classList.toggle("clicked");
//   });
  
  document.querySelector(".shuffle").click(function(){
    this.classList.toggle("clicked");
  });
  

  // ["mouseover", "mouseout"].forEach((type)=>{
  //   document.getElementById("player").addEventListener(type,function(){ 
  //     document.querySelector(".info").classList.toggle("up");
  //   });
  // })
  document.getElementById("player").addEventListener('mouseover',function(){ 
    document.querySelector(".info").classList.toggle("up");
  });
  document.getElementById("player").addEventListener('mouseout',function(){ 
    document.querySelector(".info").classList.toggle("up");
  });
  

  //music player settings
  
  
  
  
  document.querySelector(".pause").style.display = "none"; 
  
  
  document.querySelector(".play").click(function(){
    audio.play();
     document.querySelector(".play").style.display = "none";
     document.querySelector(".pause").style.display = "";
  });
  
  
   document.querySelector(".pause").click(function(){
    audio.pause();
     document.querySelector(".play").style.display = "";
     document.querySelector(".pause").style.display = "none";
  });

