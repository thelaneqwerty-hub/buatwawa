// ========================================
// NEXT PAGE
// ========================================

function nextPage(pageNumber) {

    // Sembunyikan semua halaman
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    // Cari halaman tujuan
    const targetPage = document.getElementById("page" + pageNumber);

    // Kalau halaman ditemukan
    if (targetPage) {
        targetPage.classList.add("active");
    } else {
        console.error("Page tidak ditemukan: page" + pageNumber);
    }
}


// ========================================
// START EXPERIENCE
// ========================================

function startExperience() {

    const music = document.getElementById("bgMusic");

    // Atur volume
    if (music) {

        music.volume = 0.1;

        music.play().catch(error => {
            console.log("Music tidak bisa autoplay:", error);
        });

    }

    // Pindah dari Page 1 → Page 2
    nextPage(2);
}


// ========================================
// MUSIC BUTTON
// ========================================

function toggleMusic() {

    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicButton");

    if (!music || !button) {
        return;
    }

    if (music.paused) {

        music.play();

        button.innerHTML = "🔊 Music";

    } else {

        music.pause();

        button.innerHTML = "🔇 Music";

    }
}


// ========================================
// TOMBOL NO KABUR
// ========================================

function setupNoButton() {

    const noButton = document.getElementById("noButton");

    // Kalau tombol tidak ditemukan,
    // jangan hentikan seluruh JavaScript
    if (!noButton) {
        console.log("NO button belum ditemukan.");
        return;
    }

    noButton.addEventListener("mouseover", moveButton);

    noButton.addEventListener("touchstart", moveButton);

}


// Gerakkan tombol NO
function moveButton() {

    const noButton = document.getElementById("noButton");

    if (!noButton) {
        return;
    }

    const maxX = 120;
    const maxY = 60;

    const x =
        Math.random() * maxX - maxX / 2;

    const y =
        Math.random() * maxY - maxY / 2;

    noButton.style.transform =
        `translate(${x}px, ${y}px)`;

}


// ========================================
// YES
// ========================================

function yesAnswer() {

    // Pindah ke halaman sukses
    nextPage(6);

    // Jalankan confetti
    createConfetti();

}


// ========================================
// CONFETTI
// ========================================

function createConfetti() {

    const symbols = [
        "❤️",
        "💖",
        "💕",
        "✨",
        "🎉",
        "💗"
    ];

    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        confetti.style.animation =
            `fall ${Math.random() * 2 + 2}s linear forwards`;

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}


// ========================================
// FLOATING HEARTS
// ========================================

function createHeart() {

    const heartsContainer =
        document.querySelector(".hearts");

    if (!heartsContainer) {
        return;
    }

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
        [
            "❤️",
            "💕",
            "💗",
            "💖"
        ][
            Math.floor(Math.random() * 4)
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    heart.style.fontSize =
        Math.random() * 15 + 15 + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}


// Buat hati setiap 700ms
setInterval(createHeart, 700);


// ========================================
// SETUP NO BUTTON
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    setupNoButton();

});


// ========================================
// CONFETTI ANIMATION
// ========================================

const style =
    document.createElement("style");

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
