let cartIcon = document.querySelector('.navbar img');
let sidebar = document.querySelector('.sidebar');
let overlay = document.querySelector('.overlay');
let productCardsContainer = document.querySelector('.product-cards-container');

let showSideBar = () => {
    sidebar.style.transform = "translateX(0px)";
    overlay.style.display = "block";
    // Optional - pentru blocare scroll
    // document.body.style.overflow = "hidden";
};

let hideSideBar = () => {
    sidebar.style.transform = "translateX(448px)";
    overlay.style.display = "none";
    // Optional - pentru deblocare scroll
    // document.body.style.overflow = "auto";
};

cartIcon.addEventListener("click", showSideBar);
overlay.addEventListener("click", hideSideBar);