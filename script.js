const menuBtns = document.querySelectorAll(".menu-btn");
const newFeaturesSection = document.querySelector(".new-features");
const articlesSection = document.querySelector(".articles");
const navbarMenu = document.querySelector(".navbar-menu");

const newArticles = [
  {
    title: "Hydrogen VS Electric Cars",
    subtitle: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    subtitle:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    subtitle:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const articles = [
  {
    number: "01",
    title: "Reviving Retro PCs",
    subtitle: "What happens when old PCs are given modern upgrades?",
    imgSrc: "../assets/images/image-retro-pcs.jpg",
  },
  {
    number: "02",
    title: "Top 10 Laptops of 2022",
    subtitle: "Our best picks for various needs and budgets.",
    imgSrc: "../assets/images/image-top-laptops.jpg",
  },
  {
    number: "03",
    title: "The Growth of Gaming",
    subtitle: "How the pandemic has sparked fresh opportunities.",
    imgSrc: "../assets/images/image-gaming-growth.jpg",
  },
];

function toggleMenu() {
  navbarMenu.classList.toggle("show-menu");
}

menuBtns.forEach((btn) => {
  btn.addEventListener("click", toggleMenu);
});

function renderNewArticles() {
  newFeaturesSection.innerHTML = `
    <h1>New</h1>
    ${newArticles
      .map((article) => {
        return `
        <h2>${article.title}</h2>
        <h3>${article.subtitle}</h3>
        <div class="border-bottom">
        </div>
        `;
      })
      .join("")}
    `;
}

function renderArticles() {
  articlesSection.innerHTML = `
    ${articles
      .map((article) => {
        return `
      <div class="article-content">
        <div class="article-img">
          <img src=${article.imgSrc} alt=${article.title} />
        </div>
        <div class="article-info">
        <h1>${article.number}</h1>
        <h2>${article.title}</h2>
        <p>${article.subtitle}</p>
        </div>
      </div>
      `;
      })
      .join("")}
     `;
}

renderNewArticles();
renderArticles();
