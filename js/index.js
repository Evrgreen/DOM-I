const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
// selector for all a links on document
const navbar = document.querySelectorAll("a");
// Loops through navbar array, assigns textContent to nav-item keys in nav object in Json file
navbar.forEach(
  (element, index) =>
    (element.innerHTML = siteContent["nav"][`nav-item-${index + 1}`])
);
// Selector for cta-button
document.querySelector("button").textContent = siteContent["cta"]["button"];
// Selector for changing cta-img src
document
  .getElementById("cta-img")
  .setAttribute("src", siteContent["cta"]["img-src"]);
// Selector for changing h1 tag
document.querySelector("h1").innerHTML = `${siteContent["cta"]["h1"]
  .split(" ")
  .join("</br>")}`;

// function that takes a string as argument and returns all keys in the main-content object of json file containing argument
function keyGetter(key) {
  return Object.keys(siteContent["main-content"]).filter(element =>
    element.includes(key)
  );
}
// selector for changing all h4 elements on page to content in json file
h4Array = document.querySelectorAll("h4");
h4Array.forEach(
  (element, index) =>
    (element.textContent = siteContent["main-content"][keyGetter("h4")[index]])
);
// selector for changing all p elements on page to content in json file
pArray = document.querySelectorAll("p");

pArray.forEach(
  (element, index) =>
    (element.textContent =
      siteContent["main-content"][keyGetter("content")[index]])
);

// Selector for changing middle-img src
document
  .querySelector(".middle-img")
  .setAttribute("src", siteContent["main-content"]["middle-img-src"]);
// Selector for changing contact section h4
h4Array[h4Array.length - 1].textContent = siteContent["contact"]["contact-h4"];

// Script for updating p tags inside the contact section
Array.from(pArray)
  .slice(-4, -1)
  .forEach(
    (element, index) =>
      (element.textContent =
        siteContent["contact"][Object.keys(siteContent["contact"])[index + 1]])
  );

// Selector for footer
document.querySelector("footer p").textContent =
  siteContent["footer"]["copyright"];

document
  .querySelectorAll("nav a")
  .forEach(element => (element.style.color = "green"));

const gallery = document.createElement("a");
gallery.textContent = "Gallery";
const archives = document.createElement("a");
archives.textContent = "Archives";
document.querySelector("nav").append(gallery);
document.querySelector("nav").append(archives);
document
  .querySelectorAll("nav a")
  .forEach(element => (element.style.color = "green"));

let tempSelector = document.querySelectorAll(".contact p");
console.log(tempSelector);
