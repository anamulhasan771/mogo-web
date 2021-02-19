$(document).ready(function(){

    /* TOP Menu Stick  */
  $(window).on('scroll',function() {
    if ($(this).scrollTop() > 1){  
        $('#sticky-header').addClass("sticky");
      }
      else{
        $('#sticky-header').removeClass("sticky");
      }
    });
    
  
    // counter-area start  //
    $('.counter').counterUp(3000);
    // counter-area end  //


     // one page nav start //
     $('#nav').onePageNav();

     // one page nav end //
     

     // parallax-active start //
     $('.bg').parallax("50%", 0.4);

     // parallax-active end //
    
    // mobile - menu -active //
    jQuery('#mobile-menu-active').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",

    });




    // slider - active
    $('.slider-active').owlCarousel({
        loop:true,
        nav:false,
        responsive:{  
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    // slider end //



  // testimonial slider start //
    $('.testimonial-active').owlCarousel({
        loop:true,
       
        nav:false,
        responsive:{  
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
  // testimonial slider end //



    // footer-slider-active slider start //
    $('.footer-slider-active').owlCarousel({
        smartSpeed:3000,
        loop:true,
        nav:true,
        dots:true,
        responsive:{  
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
  // blog-active slider end //
  
// hover li
$("li.fore").hover(function () { 
    //toggleClass() switches the active class 
    $(this).toggleClass("active"); 
}); 




  function before(){ 
    document.getElementById('myImage') 
    .src="img/photo1.jpg"; 
    document.getElementById('message') 
    .innerHTML="Hii! GeeksforGeeks people"; 
} 
  
function afterr(){ 
    document.getElementById('myImage') 
    .src="img/photo2.jpg"; 
    document.getElementById('message') 
    .innerHTML="Bye! GeeksforGeeks people"; 
} 

   


// li hover
$(".fore list active").hover( 
    function () { 
        //toggleClass() switches the active class 
        $(this).toggleClass("active"); 
    }, 
    function () { 
        $(this).addClass("visited"); 
    } 
); 

//   // Add active class to the current button (highlight it)


   // google map start //
        function basicmap() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 11,
                scrollwheel: false,
                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(40.6700, -73.9400), // New York
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": .2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
            };
            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('contact-map');
    
            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);
    
            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                map: map,
                title: 'Cryptox'
            });
        }
        if ($('#contact-map').length != 0) {
            google.maps.event.addDomListener(window, 'load', basicmap);
        }
 
    








});
