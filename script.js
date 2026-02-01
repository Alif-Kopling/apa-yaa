// Tanggal jadian kitaa, 2 Oktober 2025 ❤️
const startDate = new Date("2025-10-02");

function updateCounter() {
    const now = new Date();
    const start = new Date(startDate);

    // Hitung detail selisihnya ya sayangg ❤️
    let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    let tempDate = new Date(start);
    tempDate.setMonth(tempDate.getMonth() + months);

    if (tempDate > now) {
        months--;
        tempDate = new Date(start);
        tempDate.setMonth(tempDate.getMonth() + months);
    }

    let diffMs = now - tempDate;
    let days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    // Susun kata-katanya biar cantik dan rapih
    let displayOutput = `
        <div style="font-size: 1.8rem; margin-top: 5px;">
            ${months > 0 ? `<span>${months} Bulan </span>` : ''}
            <span>${days} Hari</span>
        </div>
        <div style="font-size: 1.2rem; opacity: 0.8; margin-top: 5px;">
            ${hours} Jam : ${minutes} Menit : ${seconds} Detik
        </div>
    `;

    document.getElementById('days-count').innerHTML = displayOutput;
}

// Detaknya setiap detik biar kerasa idup yaa sayangg!
setInterval(updateCounter, 1000);
updateCounter();

function startEverything() {
    const music = document.getElementById('bg-music');
    music.play().catch(e => console.log("Audio play blocked"));
    document.getElementById('music-overlay').style.display = 'none';

    // Start periodic hearts
    setInterval(spawnHeart, 400);
}

function spawnHeart() {
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.innerHTML = ['💙', '💎', '✨', '☁️', '❄️'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-50px';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    heart.style.opacity = Math.random();
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}

function celebrate() {
    // Cute confetti
    const defaults = { spread: 360, ticks: 50, gravity: 0, decay: 0.94, startVelocity: 30, colors: ['00b4d8', '90e0ef', 'caf0f8', 'ffffff'] };
    confetti({ ...defaults, particleCount: 40, scalar: 1.2, shapes: ['star'] });

    const sweetMessages = [
        "Kamu lucu bangettt hari inii sayangg! 🌸",
        "Maunya bareng kamuu teruss gamau jauhh.. 🎀",
        "Akuu sayang bangettt sama kamuu tauu! ❤️",
        "Jangan lupa mam yaa sayangg, jangan capek-capek.. 🍭",
        "Pokoknyaa i love youuu more than anythinggg! ✨",
        "Maafin aku yaa kalau ada salah sayangg.. 🥺",
        "Kamu itu moodbooster terbaik akuu! 💎"
    ];

    const msg = sweetMessages[Math.floor(Math.random() * sweetMessages.length)];

    // Pencar tapi tetep rapih (simetris) sayangg ❤️
    const randomTop = Math.random() * 40 + 20; // Lebih ke tengah atas (20% - 60%)
    const randomLeft = Math.random() * 50 + 25; // Lebih ke tengah (25% - 75%)

    const toast = document.createElement('div');
    toast.style = `
        position: fixed; 
        top: ${randomTop}%; 
        left: ${randomLeft}%; 
        transform: translate(-50%, -50%);
        background: white; 
        border: 3px solid var(--primary-blue); 
        padding: 10px 15px;
        border-radius: 20px; 
        z-index: 10000; 
        box-shadow: 0 5px 0 var(--primary-blue);
        font-family: 'Fredoka', sans-serif; 
        font-weight: 600; 
        color: var(--text-color);
        pointer-events: none;
        max-width: 200px; /* Biar nggak melebar banget di HP sayangg */
        text-align: center;
        font-size: 0.9rem; /* Lebih kecil biar pas di Android */
        opacity: 0;
        animation: smoothFade 0.5s ease-out forwards;
    `;
    toast.innerText = msg;
    document.body.appendChild(toast);

    // Fade out smooth sebelum hilang
    setTimeout(() => {
        toast.style.transition = 'all 0.5s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, -100%)';
        setTimeout(() => toast.remove(), 500);
    }, 2000);
}
