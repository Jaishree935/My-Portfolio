const themeToggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.querySelector(".navbar").classList.toggle("dark-theme");

  if (icon.classList.contains("bi-moon-fill")) {
    icon.classList.replace("bi-moon-fill", "bi-sun-fill");
  } else {
    icon.classList.replace("bi-sun-fill", "bi-moon-fill");
  }
}); 
  // Wait till typing is done (3s + 1s delay = 4s)
  setTimeout(() => {
    const typeElem = document.getElementById("typeText");
    typeElem.classList.remove("blink-cursor");
    typeElem.classList.add("cursor-hidden");
  }, 4000); // Adjust if your typing animation duration changes
  
  //for project  
  $(document).ready(function(){
    $('.project-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      dots: true,
      infinite: false, // So arrow hides at end
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });

    // Show/hide arrows at start and end
    $('.project-slider').on('afterChange', function(event, slick, currentSlide){
      var $this = $(this);
      var $prevArrow = $this.find('.slick-prev');
      var $nextArrow = $this.find('.slick-next');

      if (currentSlide === 0) {
        $prevArrow.hide();
      } else {
        $prevArrow.show();
      }

      if (currentSlide + slick.options.slidesToShow >= slick.slideCount) {
        $nextArrow.hide();
      } else {
        $nextArrow.show();
      }
    });

    // Trigger once to handle initial state
    $('.project-slider').trigger('afterChange', [$('.project-slider').slick('getSlick'), 0]);
  });
  (function() {
    emailjs.init("F-18ETuJeTPMPtqZZ"); // Replace with your EmailJS public key
  })();

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    emailjs.sendForm("service_j99scl9", "template_7e7vk79", this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
      }, (error) => {
        alert("Failed to send message. Please try again later.");
      });
  });