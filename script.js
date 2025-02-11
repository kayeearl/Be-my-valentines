let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let yesSize = 18; // Initial font size of Yes button
let noClickCount = 0;

// Array of convincing messages
const noMessages = [
    "Are you sure? 😢",
    "Please don't do this! 🥺",
    "I will be so sad 😭",
    "Think again... 💔",
    "You are breaking my heart! 💘",
    "You're making me cry! 😿",
    "Why must you hurt me this way? 😞",
    "Come on, just say YES! 🤗",
    "Last chance before I get sadder! 😔",
    "Fine, I'm making the Yes button HUGE!"
];

yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Yay! 💖 Can't wait for our date! 😍</h1>
            <img src="https://media.giphy.com/media/xF77nzFm0dNK1MHnAc/giphy.gif?cid=790b76115eywfcn8or8q8lhiq2dee8b098ylgm8xux5wp2w8&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Excited">
            <p>I'll see you on Valentine's! 💕</p>
        </div>
    `;
});

noButton.addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

noButton.addEventListener("click", function() {
    if (noClickCount < noMessages.length) {
        this.innerText = noMessages[noClickCount];
    }

    // Increase "Yes" button size
    yesSize += 10;
    yesButton.style.fontSize = yesSize + "px";

    // If "Yes" button becomes too big, take over the screen
    if (yesSize >= 100) {
        yesButton.style.position = "fixed";
        yesButton.style.top = "0";
        yesButton.style.left = "0";
        yesButton.style.width = "100vw";
        yesButton.style.height = "100vh";
        yesButton.style.fontSize = "50px";
        yesButton.innerText = "JUST SAY YES 💘";

        // Hide the "No" button
        noButton.style.display = "none";

    }

    noClickCount++; // Move to next guilt-tripping message
});
