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
const toggleBtn = document.getElementById("toggleTheme");
let isDark = false;

toggleBtn.addEventListener("click", () => {
  isDark = !isDark;

  const tl = gsap.timeline();

  // Animate the body background and text
  tl.to("body", {
    backgroundColor: isDark ? "#121212" : "#ffffff",
    color: isDark ? "#f1f1f1" : "#121212",
    duration: 0.8,
    ease: "power2.inOut"
  });

  // Animate key sections (like nav or overlay)
  tl.to(["#aboutMe", "#journey", "#what-I-Do","changingNames","changingLanguage"], {
    backgroundColor: isDark ? "#1e1e1e" : "#f9f9f9",
    color: isDark ? "#f1f1f1" : "#121212",
    duration: 0.6,
    stagger: 0.1,
    ease: "power1.out"
  }, "-=0.6");

  // Animate individual text elements (optional polish)
  tl.to(["h1", "h2", "p", "a", "li"], {
    color: isDark ? "#f1f1f1" : "#121212",
    duration: 0.4,
    stagger: 0.03,
    ease: "sine.out"
  }, "-=0.6");
});

/*const lightMode = document.getElementsByClassName(lightMode);
const darkMode = document.getElementsByClassName(darkMode)
function lightbtn(){
  if (lightMode)

};*/


