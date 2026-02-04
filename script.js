const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const proposalBox = document.getElementById("proposalBox");
const finalScreen = document.getElementById("finalScreen");
const message = document.getElementById("message");
const music = document.getElementById("music");

const noMessages = [
  "Are you sure? 🥺",
  "Laadoo please 😭",
  "Think again ❤️",
  "My heart says YES 💔",
  "I won’t accept no 🙈"
];

let noIndex = 0;

// NO button behavior
noBtn.addEventListener("click", () => {
  noBtn.innerText = noMessages[noIndex % noMessages.length];
  noIndex++;

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  let size = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (size + 4) + "px";
});

// YES button behavior
yesBtn.addEventListener("click", () => {
  proposalBox.style.display = "none";
  finalScreen.style.display = "block";
  music.play();

  const text =
"My baby girl ♥️\n\n" +

"I love you —\n" +
"and I will love you till the very last breath of my life,\n" +
"and even beyond that.\n\n" +

"I see our beautiful future together:\n" +
"a happy family,\n" +
"a peaceful home,\n" +
"two lovely kids,\n" +
"and countless moments of love, laughter, and growth. 😍\n\n" +

"I don’t want this marriage to live only in my imagination.\n" +
"I want us to work together,\n" +
"walk together,\n" +
"and choose each other —\n" +
"right here, in the real world 🌍\n\n" +

"There is so much I want to say…\n" +
"but for now, let me say this:\n\n" +

"From the core of my heart 🫀\n" +
"From the aorta of my heart 💘\n" +
"From the arteries of my heart 😚\n" +
"From every single cell of my body 💖\n\n" +

"\"I love you, my future wife ♥️\"\n\n" +

"If you truly want to marry me 🫴\n" +
"then open your phone dialer and call me at:\n\n" +

"📞 +91 8373038184\n\n" +

"Forever yours,\n" +
"Your hubby 😁";

  let i = 0;
  const typing = setInterval(() => {
    message.innerText += text[i] || "";
    i++;
    if (i >= text.length) clearInterval(typing);
  }, 40);

  // Floating hearts
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerText = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "24px";
    heart.style.animation = "float 4s linear";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 300);
});
