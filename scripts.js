var Slides = {
    totalSlides : '',
 
   init : function( totalSlides ) {
      // If nothing was passed to this function, we can't continue. 
      if ( !totalSlides ) throw new Error('Please pass the total number of slides to the init method');
      Slides.totalSlides = totalSlides;
 
      // Load the slides
      Slides.loadContent();
   },
    loadContent : function() {
 
    }
}
Slides.init( 6 );;