const gift = document.getElementById("gift");
const container = document.getElementById("balloons");

gift.addEventListener("click", ()=>{

gift.style.pointerEvents="none";

for(let i=0;i<35;i++){

let balloon=document.createElement("div");

balloon.className="balloon";
balloon.innerHTML="🎈";

balloon.style.left=Math.random()*100+"vw";
balloon.style.animationDuration=(4+Math.random()*3)+"s";
balloon.style.fontSize=(35+Math.random()*30)+"px";

container.appendChild(balloon);

setTimeout(()=>{
balloon.style.transition="0.3s";
balloon.style.transform="scale(1.8)";
balloon.style.opacity="0";
},2500+Math.random()*2500);

setTimeout(()=>{
balloon.remove();
},6000);

}

});
