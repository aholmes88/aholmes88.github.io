
const circles = document.querySelectorAll(".socials");
let socialIndex = 0;

function updateSocialsProgress(){
  circles.forEach((circle ,i)=> {
    circle.classList.toggle("active", i === socialIndex);
  })
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

let  index = 0;

function createNameLoop()  {
  displayName.textContent = nameLoop[index];
  index = (index + 1 ) % nameLoop.length;
}

createNameLoop();
setInterval( createNameLoop, 3000);

const languageLoop = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Kotlin",
  ];

  const languageDisplay = document.getElementById("languageBox");

  let languageIndex = 0;
  function createLanguageLoop() {
    languageDisplay.textContent = languageLoop[languageIndex];
    languageIndex = (languageIndex + 1) % languageLoop.length;
  }
  createLanguageLoop();
  setInterval(createLanguageLoop, 3000);

  function darkMode (){
    let body = document.body;
    body.classList.toggle("darkMode")
  }

  