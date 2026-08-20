function nextPage(pageNumber) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + pageNumber)
        .classList.add("active");
}

function startExperience() {

    const music = document.getElementById("bgMusic");

    music.volume = 0.4;

    music.play().catch(error => {
        console.log("Music gagal diputar:", error);
    });

    nextPage(2);
}

function toggleMusic() {

    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicButton");

    if (music.paused) {

        music.play();
        button.innerHTML = "🔊 Music";

    } else {

        music.pause();
        button.innerHTML = "🔇 Music";

    }
}


/* Tombol NO kabur */

const noButton = document.getElementById("noButton");

noButton.addEventListener("mouseover", moveButton);
noButton.addEventListener("touchstart", moveButton);

function moveButton() {

    const maxX = 150;
    const maxY = 100;

    const x = Math.random() * maxX - maxX / 3;
    const y = Math.random() * maxY - maxY / 3;

    noButton.style.transform =
        `translate(${x}px, ${y}px)`;

}


/* Kalau YES */

function yesAnswer() {

    nextPage(6);

    createConfetti();

}


/* Confetti */

function createConfetti() {

    const symbols = ["❤️", "💖", "💕", "✨", "🎉", "💗"];

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";

        confetti.style.zIndex = "9999";

        confetti.style.animation =
            `fall ${Math.random() * 2 + 2}s linear forwards`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

}


/* Floating hearts background */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
        ["❤️", "💕", "💗", "💖"][Math.floor(Math.random() * 4)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    heart.style.fontSize =
        Math.random() * 15 + 15 + "px";

    document.querySelector(".hearts")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 700);


/* Confetti animation */

const style = document.createElement("style");

style.innerHTML = `

@keyframes fall {

    from {
        transform:
            translateY(0)
            rotate(0deg);
        opacity: 1;
    }

    to {
        transform:
            translateY(110vh)
            rotate(720deg);
        opacity: 0;
    }

}

`;

document.head.appendChild(style);