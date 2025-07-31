
filterOverlay.style.display = "none";
filterLeft.style.display = "none";

const searchBubbles = [
  {
    img: "/assets/images/first-search-bubble/1.jpg",
    title: "Personalised Kids' Tees",
  },
  {
    img: "/assets/images/first-search-bubble/2.jpg",
    title: "Personalised Kids' Sweatshirts",
  },
  {
    img: "/assets/images/first-search-bubble/3.jpg",
    title: "Personalised Backpacks",
  },
  {
    img: "/assets/images/first-search-bubble/4.jpg",
    title: "Learning & Toys",
  },
  {
    img: "/assets/images/first-search-bubble/5.jpg",
    title: "First Day of School Signs",
  },
  {
    img: "/assets/images/first-search-bubble/6.jpg",
    title: "Personalised Stickers & Labels",
  },
  {
    img: "/assets/images/first-search-bubble/7.jpg",
    title: "School Supplies",
  },
  {
    img: "/assets/images/first-search-bubble/8.jpg",
    title: "Teacher Appreciation Gifts",
  },
  {
    img: "/assets/images/first-search-bubble/9.jpg",
    title: "Printables",
  },
  {
    img: "/assets/images/first-search-bubble/10.jpg",
    title: "Backpack Accessories",
  },
  {
    img: "/assets/images/first-search-bubble/11.jpg",
    title: "Back to School Essentials On Sale",
  },
  {
    img: "/assets/images/first-search-bubble/12.jpg",
    title: "Finds with Free Delivery",
  },
];
let liString = "";
searchBubbles.forEach((bubble) => {
  liString += `
    <div class="search-bubble-item">
        <a href="" class="search-bubble-a a-text-caption">
        <img src="${bubble.img}" alt="">
        ${bubble.title}
        </a>
    </div>
    `;
});

searchBubbleContainer.innerHTML = liString;
