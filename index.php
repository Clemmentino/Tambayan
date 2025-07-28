<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tambayan</title>
    <link rel="icon" type="image/png" href="Pictures/favicon.png" />
    <link rel="stylesheet" href="tambayanstyles.css" />
    <script src="script.js" defer></script>

    <!-- GSAP Core -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

    <!-- ScrollSmoother (Host from GSAP) -->
    <script src="https://assets.codepen.io/16327/ScrollSmoother.min.js"></script>

    <!-- Lenis (Smooth Scroll) -->
    <script src="https://unpkg.com/@studio-freight/lenis@1.0.38/dist/lenis.min.js"></script>

    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />

    <!-- Bootstrap JS -->
    <script
      defer
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
  </head>

  <body id="background">
    <!-- Popper JS (for Bootstrap tooltips and popovers) -->
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
      integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
      crossorigin="anonymous"
    ></script>

    <section>
      <div class="smooth-wrapper">
        <main id="main">
          <div class="smooth-content">
            <section class="bg-container">
              <nav>
                <ul class="nav-left">
                  <li class="fade-in"><a href="#menu">MENU</a></li>
                  <li class="fade-in"><a href="#about">ABOUT</a></li>
                  <li class="fade-in"><a href="#location">LOCATION</a></li>
                  <li class="fade-in"><a href="#contacts">CONTACTS</a></li>
                </ul>

                <div class="nav-center">
                  <a class="nav-center" href="index.html">
                    <img class="fade-in" src="Pictures/logo.png" alt="Logo" />
                  </a>
                </div>

                <ul class="nav-right">
                  <li class="fade-in"><a href="#search">SEARCH</a></li>
                  <li class="fade-in"><a href="#account">ACCOUNT</a></li>
                  <li class="fade-in"><a href="#cart">CART(0)</a></li>
                </ul>
              </nav>

              <div>
                <div class="title">
                  <h1 class="titletext">
                    Whether you're savoring a fresh cup of coffee or sharing a
                    meal with friends, our café is the perfect place to relax
                    and create great memories.
                  </h1>
                  <br />
                  <div class="sub">
                    <p class="subtext">
                      At TAMBAYAN, we’re more than just a café — we’re a place
                      where good drinks, great food, and even better company
                      come together to make every visit feel like home.
                    </p>
                  </div>
                  <div>
                    <a href="#menu">
                      <button class="order">ORDER NOW</button>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </section>

    <!-- New Section -->
    <div>
      <section class="content1">
        <h2>New Section</h2>
        <p>This section is under construction and on photoshop.</p>
      </section>
    </div>

    <!-- New Section -->
    <div>
      <section class="content2">
        <h2>New Section</h2>
        <p>This section is under construction and on photoshop.</p>
      </section>
    </div>
  </body>
</html>
