const gift = document.getElementById("gift");
const balloonContainer = document.getElementById("balloons");

gift.addEventListener("click", () => {

    gift.innerHTML = "🎊";
    gift.style.transform = "scale(1.2) rotate(15deg)";

    const emojis = ["🎈","🎈","🎈","🎈","🎈","🎈"];

    for(let i=0;i<40;i++){

        let balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

        balloon.style.left = Math.random()*100 + "%";
        balloon.style.animationDuration = (3 + Math.random()*3) + "s";
        balloon.style.fontSize = (35 + Math.random()*35) + "px";

        balloonContainer.appendChild(balloon);

        // Balloon Pop Animation
        setTimeout(()=>{
            balloon.innerHTML="💥";
            balloon.style.transform="scale(1.8)";
        },2000+Math.random()*2000);

        setTimeout(()=>{
            balloon.remove();
        },5000);
    }

});
