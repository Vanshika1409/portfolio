// =========================
// Typing Animation
// =========================

const words = [
    "CSE Student",
    "Frontend Developer",
    "Problem Solver",
    "Web Designer"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {

    currentWord = words[wordIndex];

    if (!isDeleting) {

        document.getElementById("typing").textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        document.getElementById("typing").textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex == words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();


// =========================
// Active Navbar
// =========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


// =========================
// Scroll Animation
// =========================

const cards = document.querySelectorAll(

".project-card,.skill-card,.education-card,.certificate-card,.contact-card"

);

function revealCards(){

cards.forEach(card=>{

const top = card.getBoundingClientRect().top;

const screen = window.innerHeight;

if(top < screen-100){

card.classList.add("show");

}

});

}

window.addEventListener("scroll",revealCards);

revealCards();


// =========================
// Back To Top Button
// =========================

const btn=document.createElement("button");

btn.innerHTML="↑";

btn.id="topBtn";

document.body.appendChild(btn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400)

btn.style.display="block";

else

btn.style.display="none";

});

btn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};