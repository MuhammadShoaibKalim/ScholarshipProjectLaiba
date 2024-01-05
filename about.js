
// Our info Table by javascript

let trainingbtn = document.querySelector(".our-training");
let missionbtn = document.querySelector(".training-mission");
let visionbtn = document.querySelector(".training-vision");
let trainingdata = document.querySelector(".why-us");
let missiondata = document.querySelector(".mission");
let visiondata = document.querySelector(".vision");

missiondata.classList.add("not-show")
visiondata.classList.add("not-show")

trainingbtn.addEventListener("click",function(){
      trainingdata.classList.remove("not-show");
      missiondata.classList.add("not-show")
      visiondata.classList.add("not-show")
      trainingbtn.style.backgroundColor = "black";
      missionbtn.style.backgroundColor = "white";
      visionbtn.style.backgroundColor = "white";
      trainingbtn.style.color = "white";
      missionbtn.style.color = "black";
      visionbtn.style.color = "black";
})
missionbtn.addEventListener("click",function(){
 trainingdata.classList.add("not-show");
      missiondata.classList.remove("not-show")
      visiondata.classList.add("not-show")
      trainingbtn.style.backgroundColor = "white";
      missionbtn.style.backgroundColor = "black";
      visionbtn.style.backgroundColor = "white";
      trainingbtn.style.color = "black";
      missionbtn.style.color = "white";
      visionbtn.style.color = "black";
})
visionbtn.addEventListener("click",function(){
 trainingdata.classList.add("not-show");
      missiondata.classList.add("not-show")
      visiondata.classList.remove("not-show")
      trainingbtn.style.backgroundColor = "white";
      missionbtn.style.backgroundColor = "white";
      visionbtn.style.backgroundColor = "black";
      trainingbtn.style.color = "black";
      missionbtn.style.color = "black";
      visionbtn.style.color = "white";

})

