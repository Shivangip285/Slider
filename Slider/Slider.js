const right=document.querySelector(".right");
const left=document.querySelector(".left");
const slider=document.querySelector(".slider");
const images=document.querySelectorAll(".image");
const bottom=document.querySelector(".bottom");

let slideNumber=1;
let prevSlideNumber=9;
const totalSlides=images.length;
const setButtonColor = (index) => {for(let i=0;i<9;i++){
    buttons[i].style.background= "transparent";
  buttons[index].style.background= "white";}}

right.addEventListener("click",()=>{
    setButtonColor(slideNumber);
    slider.style.transform = `translateX(-${800*((slideNumber))}px)`;
    slideNumber++;
    slideNumber=slideNumber%9;
}); 

left.addEventListener("click",()=>{
    slider.style.transform =(slideNumber>1)?`translateX(-${800*((slideNumber-2))}px)`:`translateX(-${800*((8))}px)`;
    slideNumber=slideNumber>1?slideNumber-1:8;
    setButtonColor(slideNumber-1);
}); 

for(let i=0;i<9;i++){
   const div=document.createElement("div");
   div.className="button";
   bottom.appendChild(div);
}

const buttons=document.querySelectorAll(".button");
buttons[0].style.background= "white";
buttons.forEach((button,index)=>{button.addEventListener("click",()=>{
    setButtonColor(index);
     slideNumber=index+1; 
    slider.style.transform = `translateX(-${800*((index))}px)`;})})
