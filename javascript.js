// Add event listener to nav links
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => link.classList.remove("active"));

    link.classList.add("active");
  });
});
// Get the socials and programming languages lists
const socialsList = document.getElementById("socials");
const programmingLanguagesList = document.getElementById(
  "programming-languages"
);

// Define the socials and programming languages data
const socialsData = [
  { name: "GitHub", url: "https://github.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Git", url: "https://git.com" },
];

const programmingLanguagesData = [
  { name: "JavaScript", url: "https://www.javascript.com" },
  { name: "Kotlin", url: "https://kotlinlang.org" },
  { name: "Java", url: "https://www.java.com" },
  { name: "Python", url: "https://www.python.org" },
  { name: "C++", url: "https://isocpp.org" },
];

// Function to create a list item
function createListItem(data) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = data.url;
  link.target = "_blank";
  link.textContent = data.name;
  listItem.appendChild(link);
  return listItem;
}

// Function to create an infinite loop of socials and programming languages
function createInfiniteLoop(list, data) {
  let index = 0;
  setInterval(() => {
    const listItem = createListItem(data[index]);
    list.appendChild(listItem);
    index = (index + 1) % data.length;
  }, 1000);
}

// Create an infinite loop of socials and programming languages
createInfiniteLoop(socialsList, socialsData);
createInfiniteLoop(programmingLanguagesList, programmingLanguagesData);

// Used to make sure that the contact form can send and can be recieved-->
type = "text/javascript";
src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
type = "text/javascript"(function () {
  emailjs.init({
    publicKey: "ac1CkAuOZMcJFKbEm",
  });
})();

var templateParams = {
  name: "",
  email: "",
  message: "",
};

emailjs.send("service_x3jcmgx", "template_9gxn2bk", templateParams).then(
  (response) => {
    console.log("SUCCESS!", response.status, response.text);
  },
  (error) => {
    console.log("FAILED...", error);
  }
);
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("contact_service", "contact_form", this).then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    });
};
