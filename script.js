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
const iconPath = document.getElementById("iconPath");
const root = document.documentElement;

const sunPath =
  "M12 4.5V2M12 22v-2.5M4.93 4.93l-1.77-1.77M20.84 20.84l-1.77-1.77M4.5 12H2m20 0h-2.5M4.93 19.07l-1.77 1.77M20.84 3.16l-1.77 1.77M12 7a5 5 0 100 10 5 5 0 000-10z";

const moonPath =
  "M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z";

let isDark = false;

// Set initial icon
iconPath.setAttribute("d", sunPath);

toggleBtn.addEventListener("click", () => {
  isDark = !isDark;

  const tl = gsap.timeline();

  // Morph icon
  tl.to(iconPath, {
    duration: 0.6,
    morphSVG: isDark ? moonPath : sunPath,
    ease: "power2.inOut"
  });

  // Toggle data-theme attribute for CSS
  if (isDark) {
    root.setAttribute("data-theme", "dark");
  } else {
    root.removeAttribute("data-theme");
  }

  // Animate body background/text color
  tl.to("body", {
    backgroundColor: isDark ? "#121212" : "#ffffff",
    color: isDark ? "#f1f1f1" : "#121212",
    duration: 0.8,
    ease: "power2.inOut"
  }, "<");

  // Animate sections
  tl.to(["#aboutMe", "#journey", "#what-I-Do"], {
    backgroundColor: isDark ? "#1e1e1e" : "#f9f9f9",
    color: isDark ? "#f1f1f1" : "#121212",
    duration: 0.6,
    stagger: 0.1,
    ease: "power1.out"
  }, "-=0.6");

  // Animate general text
  tl.to(["h1", "h2", "p", "a", "li","#changingNames", "#changingLanguage"], {
    color: isDark ? "#f1f1f1" : "#121212",
    duration: 0.4,
    stagger: 0.03,
    ease: "sine.out"
  }, "-=0.6");
});


