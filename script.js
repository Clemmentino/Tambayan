window.onload = function () {
  if (typeof gsap !== "undefined") {
    // Grab nav items in DOMINO (center-out) order
    const navItems = [
      document.querySelector(".nav-left li:nth-child(4)"), // CONTACTS
      document.querySelector(".nav-left li:nth-child(3)"), // LOCATION
      document.querySelector(".nav-left li:nth-child(2)"), // ABOUT
      document.querySelector(".nav-left li:nth-child(1)"), // MENU
      document.querySelector(".nav-center img"),           // LOGO
      document.querySelector(".nav-right li:nth-child(1)"),// SEARCH
      document.querySelector(".nav-right li:nth-child(2)"),// ACCOUNT
      document.querySelector(".nav-right li:nth-child(3)"),// CART
    ];

    // Animate each one with domino-style delay
    gsap.from(navItems, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2, // domino delay
    });

    // Animate title & subtext after nav
    gsap.from([".titletext", ".subtext"], {
      opacity: 0,
      y: 20,
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.3,
      delay: 0.1 * navItems.length,
    });

    // Animate ORDER button after text
    gsap.from(".order", {
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      delay: 0.1 * navItems.length + 0.5,
    });
  } else {
    console.error("GSAP is not loaded.");
  }

  // Scroll blur effect
  window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    let scrollY = window.scrollY;

    if (scrollY === 0) {
      gsap.set(navbar, {
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
      });
    }

    let blurAmount = Math.min((scrollY / 200) * 10, 5);
    let bgOpacity = Math.min((scrollY / 1150) * 0.8, 0.7);

    gsap.set(navbar, {
      backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
      backdropFilter: `blur(${blurAmount}px)`,
    });
  });
};

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

  // Settings
  { name: "Account", type: "settings, account", location: "account.html" },
  { name: "Username", type: "settings, username", location: "accout.html" },
  { name: "Forgot Password", type: "settings, forgot, password, forgot password", location: "account.html" },
  { name: "Email", type: "settings, mail, email, em", location: "account.html" },
  { name: "Password", type: "settings, pass, password", location: "account.html" },

];

const openSearchBtn = document.getElementById('openSearchBtn');
const searchDropdown = document.getElementById('searchDropdown');
const searchInput = searchDropdown?.querySelector('input[type="text"]') ?? null;
const searchResultsList = searchDropdown?.querySelector('ul#searchResultsList') ?? null;

function performSearch(query) {
  if (!searchResultsList) {
    console.error("Search results list element not found! Make sure you have <ul id=\"searchResultsList\"> inside your search dropdown.");
    return;
  }

  searchResultsList.innerHTML = "";

  if (query.length > 1) {
    const lowerQuery = query.toLowerCase();
    const filteredItems = items.filter((item) => {
      return (
        item.name.toLowerCase().includes(lowerQuery) ||
        item.type.toLowerCase().includes(lowerQuery)
      );
    });

    if (filteredItems.length > 0) {
      filteredItems.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.name;
        li.dataset.location = item.location;
        li.style.cursor = 'pointer';

        searchResultsList.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.textContent = "No results found";
      li.style.cursor = 'default';
      searchResultsList.appendChild(li);
    }
  } else {
    const li = document.createElement("li");
    li.style.cursor = 'default';
    searchResultsList.appendChild(li);
  }
}

if (openSearchBtn && searchDropdown) {
  openSearchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchDropdown.classList.add('active');
    if (searchInput) {
      searchInput.focus();
      performSearch("");
    }
  });

  document.addEventListener('click', (e) => {
    if (searchDropdown && openSearchBtn) {
      const isClickInsideDropdown = searchDropdown.contains(e.target);
      const isClickOnSearchButton = openSearchBtn.contains(e.target);

      if (!isClickInsideDropdown && !isClickOnSearchButton) {
        searchDropdown.classList.remove('active');
        if (searchResultsList) searchResultsList.innerHTML = "";
        if (searchInput) searchInput.value = "";
      }
    }
  });
}

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    performSearch(query);
  });
}

if (searchResultsList) {
  searchResultsList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI' && e.target.dataset.location) {
      const location = e.target.dataset.location;
      window.location.href = location;
      if (searchDropdown) searchDropdown.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  const searchDropdown = document.getElementById('searchDropdown');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('menu-open');
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isExpanded);
      document.body.classList.toggle('no-scroll');
      if (searchDropdown && searchDropdown.classList.contains('active')) {
        searchDropdown.classList.remove('active');
        const searchResultsList = searchDropdown.querySelector('ul#searchResultsList');
        const searchInput = searchDropdown.querySelector('input[type="text"]');
        if (searchResultsList) searchResultsList.innerHTML = "";
        if (searchInput) searchInput.value = "";
      }
    });

    document.querySelectorAll('nav ul li a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          nav.classList.remove('menu-open');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('no-scroll');
        }
      });
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
      document.body.classList.add('resize-animation-stopper');
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
        if (window.innerWidth > 768 && nav) {
          if (nav.classList.contains('menu-open')) {
            nav.classList.remove('menu-open');
            if(hamburger) hamburger.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
          }
          if (searchDropdown && searchDropdown.classList.contains('active')) {
            searchDropdown.classList.remove('active');
            const searchResultsList = searchDropdown.querySelector('ul#searchResultsList');
            const searchInput = searchDropdown.querySelector('input[type="text"]');
            if (searchResultsList) searchResultsList.innerHTML = "";
            if (searchInput) searchInput.value = "";
          }
        }
      }, 400);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  if (hamburger && nav) {
      hamburger.addEventListener('click', () => {
          nav.classList.toggle('menu-open');
          // Optional: Toggle aria-expanded attribute for accessibility
          const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
          hamburger.setAttribute('aria-expanded', !isExpanded);
           // Optional: Toggle a class on body to prevent scrolling when menu is open
          document.body.classList.toggle('no-scroll');
      });

      // Optional: Close menu when clicking a link inside the menu
      document.querySelectorAll('nav ul li a').forEach(link => {
          link.addEventListener('click', () => {
              // Check if the link is part of the mobile menu (inside a hidden ul at desktop)
              // This might need adjustment based on your final menu structure
               if (window.innerWidth <= 768) { // Only close menu on mobile click
                  nav.classList.remove('menu-open');
                  hamburger.setAttribute('aria-expanded', 'false');
                  document.body.classList.remove('no-scroll');
               }
          });
      });

       // Optional: Close menu when clicking outside the nav
      document.addEventListener('click', (event) => {
          if (window.innerWidth <= 768 && nav.classList.contains('menu-open')) {
              const isClickInsideNav = nav.contains(event.target);
              const isClickOnHamburger = hamburger.contains(event.target);
              if (!isClickInsideNav && !isClickOnHamburger) {
                  nav.classList.remove('menu-open');
                  hamburger.setAttribute('aria-expanded', 'false');
                  document.body.classList.remove('no-scroll');
              }
          }
      });

       // Optional: Add a class to body when menu is open to prevent scrolling
       // Add this to your CSS body.no-scroll { overflow: hidden; }


  }

  // Optional: Close menu on resize if it was open
  let resizeTimer;
  window.addEventListener('resize', () => {
      document.body.classList.add('resize-animation-stopper');
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
          document.body.classList.remove('resize-animation-stopper');
           if (window.innerWidth > 768 && nav.classList.contains('menu-open')) {
               nav.classList.remove('menu-open');
               hamburger.setAttribute('aria-expanded', 'false');
               document.body.classList.remove('no-scroll');
           }
      }, 400);
  });

});

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
