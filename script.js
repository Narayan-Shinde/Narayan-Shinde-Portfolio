let devType = document.getElementById("dev-type");
let text = ["Software Developer", "Web Developer"];
let longestTextLength = Math.max(...text.map(item => item.length)); // Find the length of the longest text
devType.style.width = longestTextLength + "ch"; // Set a fixed width based on the longest text
let index = 0;
let i = 0;

setInterval(function() {
    if (i < text[index].length) {
        devType.textContent = text[index].slice(0, i + 1);
        i++;
    } else {
        i = 0;
        index = (index + 1) % text.length;
        devType.textContent = "";
    }
}, 200);

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemenu =document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}

function closemenu(){
    sidemenu.style.right="-200px";
}
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('div[id]');

window.addEventListener('hashchange', updateActiveLink);
window.addEventListener('scroll', throttle(updateActiveLink, 100)); // Throttle scroll event

function updateActiveLink() {
  const scrollPosition = window.scrollY + 100; // Adjust the offset as needed

  // Clear all active classes
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });

  // Check if the user is on a section based on scroll position
  let foundActiveSection = false;
  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
      const link = document.querySelector(`[data-page="${section.id}"]`);
      if (link) {
        link.classList.add('active');
        foundActiveSection = true;
      }
    }
  });

  // If no section is found based on scroll, check the hash
  if (!foundActiveSection) {
    const currentPage = window.location.hash.replace('#', '');
    if (currentPage) {
      const link = document.querySelector(`[data-page="${currentPage}"]`);
      if (link) {
        link.classList.add('active');
      }
    }
  }
}

// Throttle function to limit the execution of the scroll event
function throttle(func, limit) {
  let throttleTimeout;
  return function () {
    const context = this;
    const args = arguments;
    if (!throttleTimeout) {
      throttleTimeout = setTimeout(() => {
        func.apply(context, args);
        throttleTimeout = null;
      }, limit);
    }
  };
}

// Initial call to set the correct active link on page load
document.addEventListener('DOMContentLoaded', updateActiveLink);

const openFormButton = document.getElementById("open-form");

  openFormButton.addEventListener("click", () => {
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScfEifx2kss_wPgWzag4j2fT0WdNFzhy3B0b-9UmOWE07vR3g/viewform?usp=sf_link";
    window.open(formUrl, "_blank");
  });