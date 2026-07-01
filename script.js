*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
background:#000;
font-family:Arial,Helvetica,sans-serif;
overflow-x:hidden;
color:#fff;
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
padding:20px;
}

.container{
width:100%;
max-width:700px;
text-align:center;
padding:30px 20px;
}

h1{
font-size:38px;
margin-bottom:25px;
}

h2{
margin:25px 0;
font-size:28px;
}

p{
font-size:20px;
line-height:1.8;
margin:18px 0;
}

.message{
padding:20px;
border:2px solid rgba(255,255,255,.2);
border-radius:20px;
background:rgba(255,255,255,.05);
backdrop-filter:blur(8px);
}

.rainbow{
font-weight:bold;
animation:rainbow 6s linear infinite;
}

@keyframes rainbow{
0%{color:#ff0000;}
16%{color:#ff9900;}
32%{color:#ffff00;}
48%{color:#00ff00;}
64%{color:#00ffff;}
80%{color:#0066ff;}
100%{color:#ff00ff;}
}

.btn{
display:inline-block;
margin-top:35px;
padding:15px 45px;
background:#fff;
color:#000;
text-decoration:none;
font-size:20px;
font-weight:bold;
border-radius:50px;
transition:.3s;
}

.btn:hover{
transform:scale(1.08);
box-shadow:0 0 20px #fff;
}

.emoji{
position:fixed;
font-size:32px;
animation:float 12s linear infinite;
opacity:.9;
}

.emoji:nth-child(1){left:5%;animation-delay:0s;}
.emoji:nth-child(2){left:20%;animation-delay:2s;}
.emoji:nth-child(3){left:45%;animation-delay:4s;}
.emoji:nth-child(4){left:65%;animation-delay:6s;}
.emoji:nth-child(5){left:80%;animation-delay:8s;}
.emoji:nth-child(6){left:92%;animation-delay:10s;}

@keyframes float{
0%{
transform:translateY(110vh) rotate(0deg);
}
100%{
transform:translateY(-120vh) rotate(360deg);
}
}

@media(max-width:600px){

h1{
font-size:28px;
}

h2{
font-size:22px;
}

p{
font-size:17px;
}

.btn{
width:90%;
font-size:18px;
padding:15px;
}

.message{
padding:15px;
}

.emoji{
font-size:26px;
}

}
const balloons = ["🎈","🎈","🎈","🎉","✨","❤️"];

function createBalloon(){

const balloon = document.createElement("div");
balloon.className = "balloon";

balloon.innerHTML = balloons[Math.floor(Math.random()*balloons.length)];

balloon.style.left = Math.random()*100 + "vw";
balloon.style.fontSize = (25 + Math.random()*25) + "px";
balloon.style.animationDuration = (4 + Math.random()*3) + "s";

document.body.appendChild(balloon);

setTimeout(()=>{
balloon.remove();
},7000);

}

setInterval(createBalloon,200);
