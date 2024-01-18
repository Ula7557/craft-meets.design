export const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    navText: false,
    smartSpeed: 1000,
    autoplay: false,
    mouseDrag: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      500: {
        items: 1.5,
      },
      600: {
        items: 1.5,
      },
      700: {
        items: 1.5,
      },
      900: {
        items: 2,
      },
      1024: {
        items: 2.3,
      },
      1400: {
        items: 3,
      },
      1500: {
        items: 4,
      },
    },
  };

  export const optionsOne = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    navText: false,
    smartSpeed: 1000,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      375: {
        items: 1,
      },
      450: {
        items: 1.5,
      },
      600: {
        items: 2,
      },
      701: {
        items: 2.5,
      },
      801: {
        items: 3,
      },
      1024: {
        items: 1,
      },
    },
  };
  export const optionsTwo = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    navText: false,
    smartSpeed: 1000,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      701: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1400: {
        items: 3,
      },
    },
  };


   export const optionss = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    autoplay:true,
    mouseDrag:false,
    responsive: {
        0: {
            items: 1,
            
        },
        400: {
            items: 1,
            dots: true,
            nav:false,
            autoplay:true,
             mouseDrag:true,
        },
        600: {
            items: 2,
            dots: true,
            nav:false,
            autoplay:true,
             mouseDrag:true,
        },
        700: {
            items: 2,
            dots: true,
            nav:false,
            autoplay:true,
             mouseDrag:true,
        },
        1000: {
            items: 3,
            mouseDrag:false,
            dots:false,
            
            

        },
        
    },
};


export const settings = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: false,
    smartSpeed: 1000,
    mouseDrag:false,
    responsive: {
        0: {
            items: 1,
            
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        701: {
            items: 3,
        },
        1024: {
            items: 4,
        },
        1400: {
            items: 4,
        },
        
    },
};

export const settings1 = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: false,
    smartSpeed: 1000,
    mouseDrag:false,
    responsive: {
        0: {
            items: 1,
            
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        701: {
            items: 3,
        },
        1024: {
            items: 3,
        },
        1400: {
            items: 4,
        },
        
    },
};


export const settings2 = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: false,
    smartSpeed: 1000,
    mouseDrag:false,
    responsive: {
        0: {
            items: 1,
            
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        701: {
            items: 3,
        },
        1024: {
            items: 3,
        },
        1400: {
            items: 4,
        },
        
    },
};

export const settingsArtisans = {
  dots: false,
  infinite: 'true',
  speed: 500,
  slidestoshow: 3,
  slidestoscroll: 1,
  arrows: 'false',
  autoplay: true,
  loop:true,

  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: "unslick",
    },
  ],
};