// JavaScript Document for slider settings

        jQuery(document).ready(function ($) {
			
	            var options = {$FillMode:5,
                $AutoPlay: false,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
                $AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
                $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, default value is 1

                $ArrowKeyNavigation: false,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
                $SlideDuration: 300,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
                $SlideWidth: 250,                                   //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                $SlideHeight: 275,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                $SlideSpacing: 0, 					                //[Optional] Space between each slide in pixels, default value is 0
                $DisplayPieces: 4,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                $ParkingPosition: 2,                              //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, default value is 1
                $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)


                $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 0,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 4                                       //[Optional] Steps to go for each navigation request, default value is 1
                }
            };


            var jssor_slider2 = new $JssorSlider$("releasesSlider", options);

            

            if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
                $(window).bind('resize', ScaleSlider);
            }


            if (navigator.userAgent.match(/(iPhone|iPod|iPad)/)) {
                $(window).bind("orientationchange", ScaleSlider);
            }
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes
            function ScaleSlider() {
                // var clientWidth = ('#content').width();        
                // var bodyWidth = document.body.width();
                // if ($(window).width()<=1024) {
                //     jssor_slider2.$ScaleWidth(clientWidth-20);}
                // else {
                // if ($(window).width()>=1025) {
                //     jssor_slider2.$ScaleWidth(clientWidth-25);
                // }
                // if ($(window).width()>1280) {
                //     jssor_slider2.$ScaleWidth(clientWidth);
                // }
                // }
                //window.setTimeout(ScaleSlider, 30);
                var bodyWidth = $('#content').width();
                if($(window).width()<1025)bodyWidth=bodyWidth-20;
                if($(window).width()>=1025)bodyWidth=bodyWidth-25;
                if($(window).width()>1280)bodyWidth=1120;
                if (bodyWidth){
                    jssor_slider2.$ScaleWidth(bodyWidth);
					$(window).load(function() {
					   $('.newRel').each(function() {
						var maxWidth = 225; // Max width for the image
						var maxHeight = 245;    // Max height for the image
						var ratio = 0;  // Used for aspect ratio
						var width = $( this ).children( 'img' ).width();    // Current image width
						var height = $(this).height();  // Current image height
						// Check if the current width is larger than the max
						if(width > maxWidth){
							ratio = maxWidth / width;   // get ratio for scaling image
							$(this).css("width", maxWidth); // Set new width
							$(this).css("height", 245);//height * ratio);  // Scale height based on ratio
							height = 245;//height * ratio;    // Reset height to match scaled image
							width = width * ratio;    // Reset width to match scaled image
						}
				
						// Check if current height is larger than max
						if(height > maxHeight){
							ratio = maxHeight / height; // get ratio for scaling image
							$(this).css("height", 245);//, maxHeight);   // Set new height
							$(this).css("width", width * ratio);    // Scale width based on ratio
							width = width * ratio;    // Reset width to match scaled image
							height = 245;//height * ratio;    // Reset height to match scaled image
						}
						 //$(this).css('left','calc(50% - '+width/2+'px)');
						 $('.hoverelement').css("overflows", "visible");
						 $(this).css("visibility", "visible");
						});
					});
				}
                else
                    window.setTimeout(ScaleSlider, 30);
            }

            ScaleSlider();

			   });