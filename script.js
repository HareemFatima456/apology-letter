// ======================================
// SELECT ELEMENTS
// ======================================

const openBtn = document.getElementById("openBtn");
const heartsContainer = document.getElementById("hearts-container");
const rosesContainer = document.getElementById("roses-container");
const bgMusic = document.getElementById("bgMusic");

// ======================================
// OPEN BUTTON
// ======================================

openBtn.addEventListener("click", () => {

    // Music Start
    bgMusic.play();

    // Button Animation
    openBtn.innerHTML = "Opening... 💌";

    openBtn.disabled = true;

    setTimeout(() => {

        showLetter();

    },800);

});

// ======================================
// FLOATING HEARTS
// ======================================

function createHeart(){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(15+Math.random()*25)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,350);

// ======================================
// FALLING ROSES
// ======================================

function createRose(){

    const rose=document.createElement("div");

    rose.classList.add("rose");

    rose.innerHTML="🌹";

    rose.style.left=Math.random()*100+"%";

    rose.style.fontSize=(20+Math.random()*20)+"px";

    rose.style.animationDuration=(6+Math.random()*5)+"s";

    rosesContainer.appendChild(rose);

    setTimeout(()=>{

        rose.remove();

    },12000);

}

setInterval(createRose,900);

// ======================================
// CREATE LETTER
// ======================================

function showLetter(){

    const card=document.querySelector(".card");

    card.innerHTML=`

    <div class="letter">

        <h1 class="title">
            Dear Dani ❤️
        </h1>

        <img src="images/dani.jpg" class="letter-image">

        <p id="typingText"></p>

        <button id="nextBtn">

            Continue ➜

        </button>

    </div>

    `;

    typeLetter();

}
// ======================================
// TYPING EFFECT
// ======================================

const message=

`Every beautiful story begins with a smile.

You are one of the most beautiful people I have ever met.

Your kindness...

Your smile...

Your presence...

makes every moment special.

Today I just wanted to say...

You mean a lot to me ❤️`;

let index=0;

function typeLetter(){

    const text=document.getElementById("typingText");

    index=0;

    const timer=setInterval(()=>{

        text.innerHTML+=message.charAt(index);

        index++;

        if(index>=message.length){

            clearInterval(timer);

        }

    },40);

}

// ======================================
// CONTINUE BUTTON
// ======================================

document.addEventListener("click",(e)=>{

    if(e.target.id==="nextBtn"){

        showQuestionPage();

    }

});

// ======================================
// QUESTION PAGE
// ======================================

function showQuestionPage(){

    const card=document.querySelector(".card");

    card.innerHTML=`

    <h1 class="title">

        One Question ❤️

    </h1>

    <p class="subtitle">

        Will you always keep smiling for me? 😊

    </p>

    <div class="buttonBox">

        <button id="yesBtn">

            Yes ❤️

        </button>

        <button id="noBtn">

            No 💔

        </button>

    </div>

    <p id="hint"></p>

    `;

    noButton();

    yesButton();

}

// ======================================
// NO BUTTON
// ======================================

function noButton(){

    const noBtn=document.getElementById("noBtn");

    const hint=document.getElementById("hint");

    const messages=[

        "Please don't say No 🥺",

        "Think again ❤️",

        "I'm waiting... 😊",

        "No isn't allowed 😅",

        "Come on... click Yes ❤️"

    ];

    let count=0;

    function move(){

        const x=Math.random()*220-110;

        const y=Math.random()*150-75;

        noBtn.style.transform=`translate(${x}px,${y}px)`;

        hint.innerHTML=messages[count%messages.length];

        count++;

        sendResponse("NO 💔");

    }

    noBtn.addEventListener("mouseover",move);

    noBtn.addEventListener("click",move);

}

// ======================================
// YES BUTTON
// ======================================

function yesButton(){

    const yes=document.getElementById("yesBtn");

    yes.addEventListener("click",()=>{

        sendResponse("YES ❤️");

        launchConfetti();

        heartExplosion();

        roseRain();

        showToast("Response Submitted ❤️");

        setTimeout(()=>{

            showSuccess();

        },1200);

    });

}

// ======================================
// FORMSPREE
// ======================================

const formspreeURL="https://formspree.io/f/xzdnaoyw";

function sendResponse(answer){

    fetch(formspreeURL,{

        method:"POST",

        headers:{

            "Content-Type":"application/json",

            "Accept":"application/json"

        },

        body:JSON.stringify({

            response:answer,

            date:new Date().toLocaleString(),

            website:"Special Wish"

        })

    }).catch(err=>console.log(err));

}

// ======================================
// SUCCESS PAGE
// ======================================

function showSuccess(){

    const card=document.querySelector(".card");

    card.innerHTML=`

    <h1 class="title">

        Thank You ❤️

    </h1>

    <p class="description">

        You just made my day.

        Thank you for accepting my wish.

        🌹❤️

    </p>

    `;

}
// ======================================
// CONFETTI EFFECT
// ======================================

function launchConfetti(){

    for(let i=0;i<120;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.animationDuration=(2+Math.random()*3)+"s";

        confetti.style.background=getRandomColor();

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },5000);

    }

}

function getRandomColor(){

    const colors=[

        "#ff4d88",

        "#ffd700",

        "#ff69b4",

        "#87cefa",

        "#98fb98",

        "#ffffff"

    ];

    return colors[Math.floor(Math.random()*colors.length)];

}

// ======================================
// HEART EXPLOSION
// ======================================

function heartExplosion(){

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.className="explode-heart";

        heart.innerHTML="❤️";

        heart.style.left=(window.innerWidth/2)+"px";

        heart.style.top=(window.innerHeight/2)+"px";

        heart.style.setProperty("--x",(Math.random()*600-300)+"px");

        heart.style.setProperty("--y",(Math.random()*600-300)+"px");

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },2500);

    }

}

// ======================================
// ROSE RAIN
// ======================================

function roseRain(){

    for(let i=0;i<35;i++){

        const rose=document.createElement("div");

        rose.className="rose";

        rose.innerHTML="🌹";

        rose.style.left=Math.random()*100+"vw";

        rose.style.fontSize=(20+Math.random()*20)+"px";

        rose.style.animationDuration=(4+Math.random()*3)+"s";

        document.body.appendChild(rose);

        setTimeout(()=>{

            rose.remove();

        },7000);

    }

}

// ======================================
// TOAST
// ======================================

function showToast(text){

    const toast=document.createElement("div");

    toast.className="toast";

    toast.innerHTML=text;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.remove();

    },3000);

}



