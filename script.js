const circles = document.querySelectorAll(".socials");
let socialIndex = 0;

function updateSocialsProgress() {
  circles.forEach((circle, i) => {
    circle.classList.toggle("active", i === socialIndex);
  });
  socialIndex = (socialIndex + 1) % circles.length;
}
updateSocialsProgress();
setInterval(updateSocialsProgress, 2000);

const nameLoop = [
  "Aaron Holmes",
  "Computer Programmer",
  "Software Developer",
  "Software Engineer",
  "Full Stack Developer",
];

const displayName = document.getElementById("homeDisplay");

let index = 0;

function createNameLoop() {
  displayName.textContent = nameLoop[index];
  index = (index + 1) % nameLoop.length;
}

createNameLoop();
setInterval(createNameLoop, 3000);

const languageLoop = ["JavaScript", "Python", "Java", "C++", "Kotlin"];

const languageDisplay = document.getElementById("languageBox");

let languageIndex = 0;
function createLanguageLoop() {
  languageDisplay.textContent = languageLoop[languageIndex];
  languageIndex = (languageIndex + 1) % languageLoop.length;
}
createLanguageLoop();
setInterval(createLanguageLoop, 3000);



// Testing this out
 function toggleTheme() {
  const root = document.documentElement;
  const overlay = document.getElementById("sweep-overlay");

  // Show the sweep overlay
  overlay.classList.remove("hide");
  overlay.style.transform = "scale(1)";

  // After the sweep shows, switch theme
  setTimeout(() => {
    const currentTheme = root.getAttribute("data-theme");

    if (currentTheme === "dark") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", "dark");
    }

    // Start fading out
    overlay.classList.add("hide");
  

  // Reset overlay after transition ends
  overlay.addEventListener("transitionend", () => 
    {
    overlay.style.transform = "scale(0)";
    overlay.style.opacity="1";
  }, 
  { once: true }// `once: true` ensures it only runs once per click
);
 },600); //Waits for the  sweep to show
};
/*const lightMode = document.getElementsByClassName(lightMode);
const darkMode = document.getElementsByClassName(darkMode)
function lightbtn(){
  if (lightMode)

};*/




