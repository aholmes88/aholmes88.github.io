// Add event listener to nav links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));

        link.classList.add('active');
    });
});
// Get the socials and programming languages lists
const socialsList = document.getElementById('socials');
const programmingLanguagesList = document.getElementById('programming-languages');

// Define the socials and programming languages data
const socialsData = [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Git', url: 'https://git.com' },
];

const programmingLanguagesData = [
    { name: 'JavaScript', url: 'https://www.javascript.com' },
    { name: 'Kotlin', url: 'https://kotlinlang.org' },
    { name: 'Java', url: 'https://www.java.com' },
    { name: 'Python', url: 'https://www.python.org' },
    { name: 'C++', url: 'https://isocpp.org' },
];

// Function to create a list item
function createListItem(data) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = data.url;
    link.target = '_blank';
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