window.onload = function () {
  if (typeof gsap !== "undefined") {
    let navItems = document.querySelectorAll(".nav-left li, .nav-right li");

    // Animate Nav Items
    gsap.from(navItems, {
      opacity: 100,
      y: 20,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.3,
    });

    
   
  }

  // Single scroll event listener handling both background color & blur effect
  window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    let scrollY = window.scrollY;

    if (scrollY === 0) {
      gsap.set(navbar, {
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
      });
    }
  });
};

const searchBtn = document.getElementById("openSearchBtn");
const searchDropdown = document.getElementById("searchDropdown");
const searchInput = searchDropdown.querySelector("input");
const searchResults = document.createElement("ul");
searchDropdown.appendChild(searchResults); // Add results container to dropdown

// Toggle dropdown visibility
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  searchDropdown.classList.toggle("active");

  if (searchDropdown.classList.contains("active")) {
    searchInput.focus();
  }
});

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {
  if (!searchBtn.contains(e.target) && !searchDropdown.contains(e.target)) {
    searchDropdown.classList.remove("active");
  }
});

// Sample data: Array of objects representing items
const items = [
  // Iced Coffee Section
  { name: "Caramel Machiatto", type: "iced coffee", location: "menu.html" },
  { name: "Mocha Coffee", type: "iced coffee", location: "menu.html" },
  { name: "Salted Caramel", type: "iced coffee", location: "menu.html" },
  { name: "Spanish Latte", type: "iced coffee", location: "menu.html" },

  // Milktea Section
  { name: "Dark Choco", type: "milktea", location: "menu.html" },
  { name: "Cookies and Cream", type: "milktea", location: "menu.html" },
  { name: "Wintermelon", type: "milktea", location: "menu.html" },
  { name: "Matcha", type: "milktea", location: "menu.html" },
  { name: "Red Velvet", type: "milktea", location: "menu.html" },
  { name: "Taro", type: "milktea", location: "menu.html" },
  { name: "Ube", type: "milktea", location: "menu.html" },
  { name: "Strawberry Cheesecake", type: "milktea", location: "menu.html" },

  // Fruity Section
  { name: "Blueberry Fruity", type: "fruity, soda", location: "menu.html" },
  { name: "Green Apple Fruity", type: "fruity, soda", location: "menu.html" },
  { name: "Strawberry Fruity", type: "fruity, soda", location: "menu.html" },
  { name: "Lychee Fruity", type: "fruity, soda", location: "menu.html" },

  // Food Section
  { name: "Pandog", type: "food", location: "menu.html" },
  { name: "Beef Burger", type: "food", location: "menu.html" },
  { name: "Waffles", type: "food", location: "menu.html" },
  { name: "French Fries", type: "food", location: "menu.html" },
];

// Function to handle search and display results
function performSearch(query) {
  searchResults.innerHTML = ""; // Clear previous results

  if (query) {
    const filteredItems = items.filter((item) => {
      return (
        item.name.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query)
      );
    });

    if (filteredItems.length > 0) {
      filteredItems.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.name;
        searchResults.appendChild(li);

        li.addEventListener("click", function () {
          window.location.href = item.location;
        });
      });
    } else {
      const li = document.createElement("li");
      li.textContent = "No results found";
      searchResults.appendChild(li);
    }
  }
}

// Event: On typing in search input
searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  performSearch(query);
});

// Event: On pressing "Enter" inside search input
searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    const query = searchInput.value.toLowerCase();
    performSearch(query);
  }
});
