/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});


/* =========================================
   SEARCH OVERLAY
========================================= */

const searchButton = document.getElementById("searchButton");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", () => {

  searchOverlay.classList.add("active");

  setTimeout(() => {
    searchInput.focus();
  }, 100);

});


closeSearch.addEventListener("click", () => {
  searchOverlay.classList.remove("active");
});


/* ESC TO CLOSE SEARCH */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    searchOverlay.classList.remove("active");
  }

});


/* =========================================
   SEARCH DATA
========================================= */

const topics = [

  "NovaBook setup and troubleshooting",
  "NovaPhone account help",
  "NovaPad software updates",
  "Nova Watch connectivity",
  "Nova Audio pairing",
  "Nova Cloud storage",
  "Reset account password",
  "Manage subscription",
  "Repair and service",
  "Contact support"

];


/* =========================================
   SEARCH FUNCTION
========================================= */

function performSearch(query) {

  const results = document.getElementById("searchResults");

  query = query.trim().toLowerCase();

  if (!query) {

    results.innerHTML = "";

    return;
  }

  const matches = topics.filter(topic =>
    topic.toLowerCase().includes(query)
  );

  if (matches.length === 0) {

    results.innerHTML = `
      <div class="result">
        No results found for "<strong>${query}</strong>"
      </div>
    `;

    return;
  }

  results.innerHTML = matches
    .map(topic => `
      <div class="result">
        ${topic}
      </div>
    `)
    .join("");

}


/* SEARCH OVERLAY */

searchInput.addEventListener("input", () => {

  performSearch(searchInput.value);

});


/* =========================================
   HERO SEARCH
========================================= */

const heroSearch = document.getElementById("heroSearch");
const heroSearchButton =
  document.getElementById("heroSearchButton");

heroSearchButton.addEventListener("click", () => {

  const query = heroSearch.value.trim();

  if (!query) {

    heroSearch.focus();

    return;
  }

  searchOverlay.classList.add("active");

  searchInput.value = query;

  performSearch(query);

  setTimeout(() => {
    searchInput.focus();
  }, 100);

});


heroSearch.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {
    heroSearchButton.click();
  }

});


/* =========================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
========================================= */

document.querySelectorAll(".mobile-menu a")
  .forEach(link => {

    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });

  });