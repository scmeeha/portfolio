// $('.sliderContain').slick({
//     dots: true,
//     arrows:false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,

//   });

$(document).ready(function(){
  $('.sliderContain').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: false,
    // cssEase: 'linear'
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
});
const mobilemenu = document.querySelector('.menubar');
const mainmenu = document.querySelector('.mainmenu');
const menuLinks = document.querySelectorAll('.mainmenu a');

mobilemenu.addEventListener('click', function () {
    mobilemenu.classList.toggle('open');
    mainmenu.classList.toggle('show');
});

// Close the menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        mobilemenu.classList.remove('open');
        mainmenu.classList.remove('show');
    });
});


document.getElementById("contactform").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.send("service_mru156d", "template_4pakcl7", {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
  }, "D5Ec067BQpfMmnrK7")
  .then(response => alert("Message sent successfully!"))
  .catch(error => alert("Failed to send message."));
});