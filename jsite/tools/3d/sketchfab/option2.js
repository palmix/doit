    var iframe = document.getElementById( 'iframe3d' );
var uid = $.query.get('id');
uid = decode(uid);
        var uid = uid;
        var client = null;

        function loadmodel() {





            document.addEventListener('load', () => console.log( 'viewerready' ));

            var client = new Sketchfab( iframe );
            client.init( uid, {
                success: function onSuccess(api) {
      //              console.log( 'Success' );

                    api.load();
                    api.start();




                    api.addEventListener( 'viewerready', function() {
                 //       console.log( 'Viewer is ready' );

$("#loding3d").addClass("d-none");
$(".loding3d").remove();

$("#iframe3d").removeClass("d-none");

$("#viewerHand").removeClass("d-none");



$(window).blur(function () {
  if ($('#Wrapper3d').is(':focus')) {
$("#viewerHand").addClass("d-none");  
    $(document.activeElement).trigger("focus");// Could trigger click event instead
  }
  else {
$("#viewerHand").addClass("d-none");  
  }                
});


resize3DframeFs();


                    } );
                },
                error: function onError( callback ) {
                    console.log( this.error );
                    $("#loding3d").addClass("d-none");
                    //هذا المحتوى غير متوفر

$("#alertError").removeClass("d-none");
$("#btnsfs").addClass("d-none");
                },

    camera: 1,
    blending: 1,
    autospin: 0.1,
    autostart: 1,
    transparent: 0,
annotations_visible:0,



            } );
        }










function resize3DframeFs(){



var ww = $(window).width();
var wh = $(window).height();
$(".Wrapper3d").css('width','100%');
$(".Wrapper3d").css('height',wh+'px');
$(".Wrapper3d").css('overflow','hidden');
$(".requestfullscreen,.exitfullscreen").css('position','absolute');
$("#iframe3d").css('width','100%');
$("#iframe3d").css('height','100%');
var getHiframe3d = $("#iframe3d").height();
var getDiframe3d = $("#Wrapper3d").height();
$(".requestfullscreen,.exitfullscreen").css('bottom',(10)+'px');
$(".requestfullscreen,.exitfullscreen").css('right',(20)+'px');


}

$(window).resize(function() {
resize3DframeFs()
});
resize3DframeFs()

	$('#Wrapper3d .requestfullscreen').click(function() {
		goFullscreen("Wrapper3d")
	});
	$('#Wrapper3d .exitfullscreen').click(function() {
		goFullscreen("Wrapper3d")
	});









	function goFullscreen(divObj) {
		var element = document.getElementById(divObj);
		if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || document.mozRequestFullScreen || document.webkitRequestFullScreen) {
			$('#Wrapper3d .requestfullscreen').show();
			$('#Wrapper3d .exitfullscreen').hide();

          resize3DframeFs();
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			}
		} else {
			if (divObj.requestFullscreen) {
				divObj.requestFullscreen();
			fshide()
			} else if (divObj.msRequestFullscreen) {
				divObj.msRequestFullscreen();
				fshide()
			} else if (divObj.mozRequestFullScreen) {
				divObj.mozRequestFullScreen();
				fshide()
			} else if (divObj.webkitRequestFullscreen) {
				divObj.webkitRequestFullscreen();
				fshide()
			} else if (element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
				fshide()
			} else if (element.webkitRequestFullScreen) {
				element.webkitRequestFullScreen();
				fshide()
			} else {
				console.log("Fullscreen API is not supported");
			}
		}
		
	}
function fshide(){
			$('#Wrapper3d .requestfullscreen').hide();
			$('#Wrapper3d .exitfullscreen').show();
  resize3DframeFs();
}









loadmodel();