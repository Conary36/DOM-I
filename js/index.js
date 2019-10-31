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
console.log(logo);

const mycodeImage = document.getElementById('cta-img');
mycodeImage.setAttribute('src', siteContent['cta']['img-src']);
console.log(mycodeImage);

const arrayNav = document.querySelectorAll('a');
arrayNav[0].textContent = (siteContent['nav']['nav-item-1']);
arrayNav[1].textContent = (siteContent['nav']['nav-item-2']);
arrayNav[2].textContent = (siteContent['nav']['nav-item-3']);
arrayNav[3].textContent = (siteContent['nav']['nav-item-4']);
arrayNav[4].textContent = (siteContent['nav']['nav-item-5']);
arrayNav[5].textContent = (siteContent['nav']['nav-item-6']);

const ctaH1 = document.querySelectorAll('h1');
ctaH1[0].textContent = (siteContent['cta']['h1']);

const ctaButton = document.querySelectorAll('button');
ctaButton[0].textContent = (siteContent['cta']['button']);

const mainFeaturesH4 = document.querySelectorAll('h4');
mainFeaturesH4[0].textContent = (siteContent['main-content']['features-h4']);

const pTagContent = document.querySelectorAll('p');
pTagContent[0].textContent = (siteContent['main-content']['features-content']);

const topContent2 = document.querySelectorAll('h4');
topContent2[1].textContent = (siteContent['main-content']['about-h4']);

const pTagContent2 = document.querySelectorAll('p');
pTagContent2[1].textContent = (siteContent['main-content']['about-content']);

const logo2 = document.getElementById("middle-img");
logo2.setAttribute('src', siteContent['main-content']['middle-img-src']);

const bottomH4 = document.querySelectorAll('h4');
bottomH4[2].textContent = (siteContent['main-content']['services-h4']);

const pTagBottom = document.querySelectorAll('p');
pTagBottom[2].textContent = (siteContent['main-content']['services-content']);

const bottomH41 = document.querySelectorAll('h4');
bottomH41[3].textContent = (siteContent['main-content']['product-h4']);

const ptagBottom1 = document.querySelectorAll('p');
ptagBottom1[3].textContent = (siteContent['main-content']['product-content']);

const bottomH42 = document.querySelectorAll('h4');
bottomH42[4].textContent = (siteContent['main-content']['vision-h4']);

const ptagBottom2 = document.querySelectorAll('p');
ptagBottom2[4].textContent = (siteContent['main-content']['vision-content']);

const contactInfoH4 = document.querySelectorAll('h4');
contactInfoH4[5].textContent = (siteContent['contact']['contact-h4']);

const ptagContact = document.querySelectorAll('p');
ptagContact[5].textContent = (siteContent['contact']['address']);

const ptagContact1 = document.querySelectorAll('p');
ptagContact1[6].textContent = (siteContent['contact']['phone']);

const ptagContact2 = document.querySelectorAll('p');
ptagContact2[7].textContent = (siteContent['contact']['email']);

const footerInfo = document.getElementsByTagName('p');
footerInfo[8].textContent = (siteContent['footer']['copyright']);