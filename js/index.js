const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// Nav

const navLinks = document.querySelectorAll("nav a");
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

// cta

const firstSection = document.querySelector("h1");
const ctaButton = document.querySelector("button");
const ctaImg = document.querySelector("#cta-img");

firstSection.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// Main Content
// Main Top

const mainContent = document.querySelector(".top-content");
const topContent = mainContent.querySelectorAll("h4");
const textOne = mainContent.querySelectorAll("p");
const middleImg = document.querySelector("#middle-img")

topContent[0].textContent = siteContent["main-content"]["features-h4"];
textOne[0].textContent = siteContent["main-content"]["features-content"];
topContent[1].textContent = siteContent["main-content"]["about-h4"];
textOne[1].textContent = siteContent["main-content"]["about-content"];
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Main Bottom

const bottomContent = document.querySelector(".bottom-content");
const headerBottom = bottomContent.querySelectorAll("h4");
const bottomText = bottomContent.querySelectorAll("p");

headerBottom[0].textContent = siteContent["main-content"]["services-h4"];
headerBottom[1].textContent = siteContent["main-content"]["product-h4"];
headerBottom[2].textContent = siteContent["main-content"]["vision-h4"];
bottomText[0].textContent = siteContent["main-content"]["services-content"];
bottomText[1].textContent = siteContent["main-content"]["product-content"];
bottomText[2].textContent = siteContent["main-content"][ "vision-content"];

//Contact

const contactInfo = document.querySelector(".contact");
const contactH4 = contactInfo.querySelector("h4");
const contactText = contactInfo.querySelectorAll("p");

contactH4.textContent = siteContent["contact"]["contact-h4"];
contactText[0].textContent = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];

//Footer

const copyRight = document.querySelector("footer");
const copyRightText = copyRight.querySelector("p");

copyRightText.textContent = siteContent["footer"]["copyright"];

//Color Change





// New Content

const mainLink = document.createElement("a");
mainLink.textContent = "Great Idea";
mainLink.href = "#";
document.querySelector("nav").prepend(mainLink);

const blogLink = document.createElement("a");
blogLink.textContent = "Blog";
blogLink.href = "#";
document.querySelector("nav").appendChild(blogLink);