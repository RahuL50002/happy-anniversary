const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const proposalBox = document.getElementById("proposalBox");
const finalScreen = document.getElementById("finalScreen");
const music = document.getElementById("music");

const noTexts = [
  "Are you sure? 🥺",
  "Laadoo please 😭",
  "Think again ❤️",
  "My heart says YES 💔",
  "I won’t accept no 🙈"
];

let i = 0;

noBtn.onclick = () => {
  noBtn.innerText = noTexts[i % noTexts.length];
  i++;
};

yesBtn.onclick = () => {
  proposalBox.style.display = "none";
  finalScreen.style.display = "block";
  music.play();
};
