var previousButton, nextButton;
    var rotationButton, pauseContainer, resumeContainer;
    var slidesContainer, slides;
    var dots;

    window.addEventListener('DOMContentLoaded', function(e) {
      previousButton = document.querySelector('.carousel .previous-button');
      nextButton = document.querySelector('.carousel .next-button');

      rotationButton = document.querySelector('.carousel .rotation-button');
      pauseContainer = document.querySelector('.carousel .rotation-button .pause-container');
      resumeContainer = document.querySelector('.carousel .rotation-button .resume-container');

      slidesContainer = document.querySelector('.carousel .slides');
      slides = document.querySelectorAll('.carousel .slides .slide');

      /**
        When Slick Slider loads, set up the slide dots correctly.
      */
      jQuery('.carousel .slides').on('init', function(e, slick) {
        // Ensure all the non-visible slides and their content are impossible to reach by keyboard
        hideNonVisibleSlides();

        // Retreive references to all the slide dot DOM elements
        dots = document.querySelectorAll('.carousel .slick-dots li button');

        // Give the first slide dot `aria-current="true"` on load
        dots[0].setAttribute('aria-current', true);

        dots.forEach(function(dot, index) {
          // Indicate the action the button will invoke to make it clear that these are controls, not slides themselves
          dot.innerText = 'Go to slide ' + (index + 1);

          // Disable autoplay as soon as a user activates a slide dot
          dot.addEventListener('click', function(e) {
            disableAutoplay();
          });
        });
      });

      /**
        Before each slide transition, make each slide visible and update the current slide dot
      */
      jQuery('.carousel .slides').on('beforeChange', function(e, slick, currentSlide, nextSlide) {

        // Make each slide visible during the transition animation
        slides.forEach(function(slide) {
          slide.classList.remove('is-hidden');
        });

        // Move the active dot indicator before animation for a "snappier" feel
        dots.forEach(function(dot) {
          dot.removeAttribute('aria-current');
        });

        // Indicate which slide is active through the slide dots
        dots[nextSlide].setAttribute('aria-current', true);
      });

      /**
        After each slide transition, hide all newly-non-visible slides and make focusable content in the new "current" slide reachable
      */
      jQuery('.carousel .slides').on('afterChange', function(e, slick, currentSlide) {
        // Ensure newly non-visible slides are fully hidden from all users
        hideNonVisibleSlides();

        // Allow interactive elements on the new current slide to receive keyboard focus
        slides[currentSlide].querySelectorAll('a, button').forEach(function(element) {
          element.removeAttribute('tabindex');
        });
      });

      /**
        Initialize Slick Slider with recommended configuration options
      */
      jQuery('.carousel .slides').slick({
        // The default dots markup is pretty good, though we will need to tweak them in the `init` and `afterChange` event handlers.
        dots: true,

        // This removes the inappropriate tabpanel and tab roles and disables arrow key navigation.
        // NOTE: if you want to use arrow key navigation, you should implement that separately without enabling this option. The usability benefits of key navigation don't outweigh the accessibility impact of the tab implementation.
        accessibility: false,

        // Many hero banners auto-rotate, so this demo will too.
        autoplay: true,
        autoplaySpeed: 7000,

        // Use highly-accessible custom elements from the DOM for prev/next buttons.
        // NOTE: You can also define the elements here as strings, if you prefer
        prevArrow: document.querySelector('.carousel .previous-button'),
        nextArrow: document.querySelector('.carousel .next-button')
      });

      // Disable autoplay as soon as the user activates either the Previous or Next button
      previousButton.addEventListener('click', function(e) {
        disableAutoplay();
      });

      nextButton.addEventListener('click', function(e) {
        TransitionRunning = true;
        disableAutoplay();
      });

      // Toggle autoplay when the pause/resume button is activated
      rotationButton.addEventListener('click', function(e) {
        toggleAutoplay();
      });
    });


    /**
      Fully hide non-visible slides for all users when they exit the view.
    */
    function hideNonVisibleSlides() {
      var hiddenSlides = document.querySelectorAll('.carousel .slides .slide[aria-hidden="true"]');

      hiddenSlides.forEach(function(slide) {
        // Hide each slide using `visibility: hidden` to be extra-sure
        slide.classList.add('is-hidden');

        // Prevent any interactive element on non-visible slides from receiving keyboard focus
        slide.querySelectorAll('a, button').forEach(function(element) {
          element.setAttribute('tabindex', -1);
        });
      });
    }


    /**
      Disable or enable built-in Slick Slider autoplay
    */
    function toggleAutoplay() {
      var autoplayEnabled = jQuery('.carousel .slides').slick('slickGetOption', 'autoplay');

      if(autoplayEnabled) {
        disableAutoplay();
      } else {
        enableAutoplay();
      }
    }

    function disableAutoplay() {
      // Disable autoplay and stop Slick from rotating
      jQuery('.carousel .slides').slick('slickSetOption', 'autoplay', false);
      jQuery('.carousel .slides').slick('slickPause');

      // Switch the rotation button icon to "resume"
      pauseContainer.classList.remove('is-visible');
      resumeContainer.classList.add('is-visible');
    }

    function enableAutoplay() {
      // Enable autoplay and get rotation started again
      jQuery('.carousel .slides').slick('slickSetOption', 'autoplay', true);
      jQuery('.carousel .slides').slick('slickPlay');

      // Switch the rotation button icon to "pause"
      pauseContainer.classList.add('is-visible');
      resumeContainer.classList.remove('is-visible');
    }