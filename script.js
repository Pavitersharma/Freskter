 $(document).ready(function(){
      $('.image_slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    });




    tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: "#222831",
          accent: "#393E46",
          background: "#F5F5F5",
          text: "#1A1A1A",
          lightGray: "#E5E5E5",
        },
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          playfair: ['Playfair Display', 'serif'],
        },
        height: {
          hero: "500px",
        },
        borderRadius: {
          'xl': "1rem",
          'full': "9999px",
        },
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
      }
    }
  } 