
var vidID = $.query.get("v");
vidID = decode(vidID);
if (vidID.length != 11){
	$('#player').html('<div class="alert alert-danger d-flex align-items-center" role="alert"><svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg><div>حدث خطأ ما في جلب الفيديو ، يرجى المحاولة لاحقًا</div></div>')
}else{




        var _location = window.location.search;
        var _isMobile = _location.includes('m=1');
        var GeoArabicAndroid = /GeoArabicAndroid/.test(navigator.userAgent);
		var GoogleChrome = /Chrome/.test(navigator.userAgent);
		
    const rangeVolumePlayer = document.querySelectorAll('input#volumeVideoRange[type="range"]')
    const rangeVideoPlayer = document.querySelectorAll('input#rangeVideoPlayer[type="range"]')

    function handleVolumeChange(e) {
        let target = e.target
        if (e.target.type !== 'range') {
            target = document.getElementById('volumeVideoRange')
        }
        var min = target.min
        var max = target.max
        var val = target.value

        target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
        if (val < 1) {
            $("#mutes i").attr('class', 'fas fa-volume-mute');
        }else if (val == 1) {
            $("#mutes i").attr('class', 'fas fa-volume-off');
        }else if (val <= 20 && val >= 1) {
            $("#mutes i").attr('class', 'fas fa-volume-off');
        } else if (val <= 50 && val >= 21) {
            $("#mutes i").attr('class', 'fas fa-volume-down');
        } else if (val >= 51) {
            $("#mutes i").attr('class', 'fas fa-volume-up');
        }
player.unMute();
player.setVolume(val);
$('#volumeVideo').css('background-image','linear-gradient(#ff4500, #ff4500)');

    }


    function handleVideoChange(e) {
        let target = e.target
        if (e.target.type !== 'range') {
            target = document.getElementById('rangeVideoPlayer')
        }
        var min = target.min;
        var max = target.max;
        var val = target.value;

        var t1 = (val - min) * 100 / (max - min);
        
        if(t1 <= 10){
        target.style.backgroundSize = (t1+.5) + '% 100%';
        }else if(t1 <= 20){
        target.style.backgroundSize = (t1+.4) + '% 100%';
        }else if(t1 <= 30){
        target.style.backgroundSize = (t1+.3) + '% 100%';
        }else if(t1 <= 40){
        target.style.backgroundSize = (t1+.25) + '% 100%';
        }else if(t1 <= 45){
        target.style.backgroundSize = (t1+.15) + '% 100%';
        }else if(t1 <= 55){
        target.style.backgroundSize = t1 + '% 100%';
        }else if(t1 <= 60){
        target.style.backgroundSize = (t1-.05) + '% 100%';
        }else if(t1 <= 70){
        target.style.backgroundSize = (t1-.1) + '% 100%';
        }else if(t1 <= 80){
        target.style.backgroundSize = (t1-.15) + '% 100%';
        }else if(t1 <= 90){
        target.style.backgroundSize = (t1-.2) + '% 100%';
        }else if(t1 <= 99){
        target.style.backgroundSize = (t1-.3) + '% 100%';
        }else{
        target.style.backgroundSize = t1 + '% 100%';
        }
        let totalSeconds = val;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = totalSeconds % 60;

            minutes = String(minutes).padStart(2, "0");
            hours = String(hours).padStart(2, "0");
            seconds = parseInt(seconds);
            seconds = String(seconds).padStart(2, "0");


        player.seekTo(val,true);
        if(hours <=0){
        $('#LiveTime').text(minutes + ":" + seconds);
        }else{
        $('#LiveTime').text(hours + ":" + minutes + ":" + seconds);
        }


    }

    rangeVolumePlayer.forEach(input => {
        input.addEventListener('input', handleVolumeChange)
    });

    rangeVideoPlayer.forEach(input => {
        input.addEventListener('input', handleVideoChange)
    });


    //$('#volumeVideo').on('input', function() { 
    //    var newVal = $(this).val();

    //    player.setVolume(newVal)
    //});

    $("#playerIframe").css("opacity",0);

    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);




    function goFullscreen(divObj) {
    

    
        var element = document.getElementById(divObj);
        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || document.mozRequestFullScreen || document.webkitRequestFullScreen) {
$('#goFullscreen i').addClass('fa-expand').removeClass('fa-compress');
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
$('#goFullscreen i').addClass('fa-compress').removeClass('fa-expand');
            } else if (divObj.msRequestFullscreen) {
                divObj.msRequestFullscreen();
$('#goFullscreen i').addClass('fa-compress').removeClass('fa-expand');
            } else if (divObj.mozRequestFullScreen) {
                divObj.mozRequestFullScreen();
$('#goFullscreen i').addClass('fa-compress').removeClass('fa-expand');
            } else if (divObj.webkitRequestFullscreen) {
                divObj.webkitRequestFullscreen();
$('#goFullscreen i').addClass('fa-compress').removeClass('fa-expand');
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
$('#goFullscreen i').addClass('fa-compress').removeClass('fa-expand');
            } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
$('#goFullscreen i').addClass('fa-compress').removeClass('fa-expand');
            } else {
                console.log("Fullscreen API is not supported");
            }


        }
        resizevideo();
    }



    function resizevideo() {
        var video_w = $('#videoWrapper').width();
        var win_w = $(window).width();
        if (video_w != win_w) {
            //$('#goFullscreen i').addClass('fa-compress').removeClass('fa-expand');
            setTimeout(function() {
                setVideo();
                resizevideo();
            }, 100);
        }
    }


    $("#playerIframe").resize(function() {
        setTimeout(function() {
            setVideo();
        }, 400)
    });
$(window).on('resize', function () {
        setTimeout(function() {
            setVideo();
        }, 400)
});


    $(window).resize(function() {
        setVideo();
    });

    function setVideo() {



        var vid_h = $('#videoWrapper').height();
        var vid_w = $('#videoWrapper').width();

if (!GeoArabicAndroid){

if (vid_w <= 476){
	$("#videosettingquality").css("display","none");
}else{
	$("#videosettingquality").css("display","block");
}


if (vid_w <= 410){
	$("#volumevideo").addClass("dnone");
	$("#mutes2").removeClass("dnone");
	player.setVolume(100);
	
}else{
	$("#volumevideo").removeClass("dnone");
	$("#mutes2").addClass("dnone");
}

if (vid_w <= 335){
	$(".timerVideo").addClass("dnone");
	
}else{
	$(".timerVideo").removeClass("dnone");
}

if (vid_w <= 182){
	$("#mutes2").addClass("dnone");
	$("#videosetting").addClass("dnone");
	$("#btnplay").addClass("dnone");
	}else{
	$("#videosetting").removeClass("dnone");
	$("#btnplay").removeClass("dnone");
}



}


        var body_h = $(window).height();

        var stylecss = '';
        stylecss += 'width:100%;';
        stylecss += 'height:' + body_h + 'px;';




        var stylecssiframe = 'margin-top:-' + (1000) + 'px;';
        stylecssiframe += 'margin-bottom:-' + (1000) + 'px;';

        stylecssiframe += 'height:' + (2000 + vid_h) + 'px;';
        stylecssiframe += 'width:' + vid_w + 'px;';




        $("#videoWrapper").attr('style', stylecss);
        $("#videoWrapper iframe").attr('style', stylecssiframe);


        $("#videoWrapper .btCliknplay").css('width', vid_w + 'px');
        $("#videoWrapper .btCliknplay").css('height', vid_h + 'px');

        var mt = (vid_h / 2) - 17;
        var ml = (vid_w / 2) - 15;
        //$("#videoWrapper .playStatus div").css('margin-top', mt + 'px');
        //$("#videoWrapper .playStatus div").css('left', ml + 'px');




        $("#videoWrapper .imgbackground").css('width', vid_w + 'px');
        $("#videoWrapper .imgbackground").css('height', vid_h + 'px');
        var imgvideo = $("#videoWrapper .imgbackground").attr('data-img');
        $("#videoWrapper .imgbackground").css('background-image', 'url(' + imgvideo + ')');

        $(".btCliknplay").removeClass("d-none");
        $("#btnplay i").attr("class", "far fa-play-circle");
        $("#player").removeClass("d-none");



    }




    
    
    
    
    var players
    var player;
    var vid_h = '100%' //$('#videoWrapper').height();
    var vid_w = 300 //$('#videoWrapper').width();

    function onYouTubePlayerAPIReady() {

$('#imgbackground').attr('data-img','https://img.youtube.com/vi/'+vidID+'/0.jpg');
        player = new YT.Player('playerIframe', {
            height: vid_h,
            width: vid_w,
            videoId: vidID,
            playerVars: {
                'playsinline': 1,
                'rel': 1,
                'start': 1,
                'controls': 0,
                'autoplay': 0,
                'enablejsapi': 1,
                'iv_load_policy': 3,
                'disablekb': 0,
                'origin': 'https://www.geoarabic.com'
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': playState,
                'onError': onPlayerError,
                'onPlaybackQualityChange':onQualityChange
            }

        });
    }




    function onPlayerReady(event) {
        var _location = window.location.search;
		var windowWidth = $(window).width();
        var _isMobile1 = 'm=1';
        var _isMobile0 = 'm=0';
        var t = new Array(player.getAvailablePlaybackRates());
        var m = t[0];
        var s = m.length;
        s = s - 1;

        var videospeed = ['']
        for (var i = 0; i <= s; i++) {
            var n = i + 1;
            if (m[i] == 1) {
                videospeed.push('<li><input type="radio" class="btn-check" onclick="setPbR(' + m[i] + ')" name="speedPlay" id="speedPlay' + n + '" autocomplete="off" checked><label class="btn-outline-danger dropdown-item border-bottom border-dark" for="speedPlay' + n + '">' + m[i] + '</label></li>');
            } else {
                videospeed.push('<li><input type="radio" class="btn-check" onclick="setPbR(' + m[i] + ')" name="speedPlay" id="speedPlay' + n + '" autocomplete="off"><label class="btn-outline-danger dropdown-item border-bottom border-dark" for="speedPlay' + n + '">' + m[i] + '</label></li>');
            }

//<button onclick="javascript:  startedd=false;  numSetQuality='tiny'; player.pauseVideo(); player.setPlaybackQuality('tiny');  player.playVideo();  void(0);" name="videoQuality" id="vidQuality6" class="dropdown-item">144p</button>



            $("#videospeed").html(videospeed.join(''));



            if (GeoArabicAndroid || windowWidth <= 500) {
                setVideo();
                player.setVolume(100);
                $("#player").removeClass("d-none");
                $(".btCliknplay").addClass("d-none");
                $(".imgbackground").addClass("d-none");
                $("#volumevideo").addClass("d-none");
                $("#btnplay").addClass("d-none");
				
videoControls(0);
            } else {
                player.setVolume(70);
                setVideo();
	
            }

 

        }


        let totalSecondsTotal = player.getDuration();
        let hoursTotal = Math.floor(totalSecondsTotal / 3600);
        totalSecondsTotal %= 3600;
        let minutesTotal = Math.floor(totalSecondsTotal / 60);
        let secondsTotal = totalSecondsTotal % 60;

        minutesTotal = String(minutesTotal).padStart(2, "0");
        hoursTotal = String(hoursTotal).padStart(2, "0");
        secondsTotal = parseInt(secondsTotal);
        secondsTotal = String(secondsTotal).padStart(2, "0");



        if(hoursTotal <=0){
        $('#totalTime').text(" \/ " + minutesTotal + ":" + secondsTotal);
        }else{
        $('#totalTime').text(" \/ " + hoursTotal + ":" + minutesTotal + ":" + secondsTotal);
        }
        
        $('#rangeVideoPlayer').attr("max",totalSecondsTotal)















var imgid = vidID;
var img = new Image();
img.onload = function() {
if(this.width > 120){
$('#imgbackground').attr('data-img',this.src);
$('#imgbackground').css('background-image','url("'+this.src+'")');
}else {
GetImg_sddefault();
}}
img.src = 'https://img.youtube.com/vi/'+imgid+'/maxresdefault.jpg';


function GetImg_sddefault(){
var img = new Image();
img.onload = function() {
if(this.width > 120){
$('#imgbackground').attr('data-img',this.src);
$('#imgbackground').css('background-image','url("'+this.src+'")');
}else {
GetImg_hqdefault();
}}
img.src = 'https://img.youtube.com/vi/'+imgid+'/sddefault.jpg';
}





function GetImg_hqdefault(){
var img = new Image();
img.onload = function() {
if(this.width > 121){
$('#imgbackground').attr('data-img',this.src);
$('#imgbackground').css('background-image','url("'+this.src+'")');
}else {
GetImg_mqdefault()
}
}
img.src = 'https://img.youtube.com/vi/'+imgid+'/hqdefault.jpg';
}








function GetImg_mqdefault(){
var img = new Image();
img.onload = function() {
if(this.width > 120){
$('#imgbackground').attr('data-img',this.src);
$('#imgbackground').css('background-image','url("'+this.src+'")');
}else {
GetImg_default();
}}
img.src = 'https://img.youtube.com/vi/'+imgid+'/mqdefault.jpg';
}






function GetImg_default(){
var img = new Image();
img.onload = function() {
$('#imgbackground').attr('data-img',this.src);
$('#imgbackground').css('background-image','url("'+this.src+'")');
}
img.src = 'https://img.youtube.com/vi/'+imgid+'/default.jpg';
}


$(document).keydown(function (key) {
      var set0,set1,set2,set3,set4,set5,set6,set7,set8,set9,getcurrenttimenow,volumeVideoRange,KeyCodeIs,getp;
      getcurrenttimenow = player.getCurrentTime();
      volumeVideoRange = player.getVolume();
      KeyCodeIs = key.keyCode;
      getp = player.getDuration();
set0 = getp * 0.0;
set1 = getp * 0.1;
set2 = getp * 0.2;
set3 = getp * 0.3;
set4 = getp * 0.4;
set5 = getp * 0.5;
set6 = getp * 0.6;
set7 = getp * 0.7;
set8 = getp * 0.8;
set9 = getp * 0.9;
      
  if(KeyCodeIs == 48 || KeyCodeIs == 96){
 player.seekTo(set0);
     }
  if(KeyCodeIs == 49 || KeyCodeIs == 97){
 player.seekTo(set1);
     }
  if(KeyCodeIs == 50 || KeyCodeIs == 98){
 player.seekTo(set2);
     }
  if(KeyCodeIs == 51 || KeyCodeIs == 99){
 player.seekTo(set3);
     }
  if(KeyCodeIs == 52 || KeyCodeIs == 100){
 player.seekTo(set4);
     }
  if(KeyCodeIs == 53 || KeyCodeIs == 101){
 player.seekTo(set5);
     }
  if(KeyCodeIs == 54 || KeyCodeIs == 102){
 player.seekTo(set6);
     }
  if(KeyCodeIs == 55 || KeyCodeIs == 103){
 player.seekTo(set7);
     }
  if(KeyCodeIs == 56 || KeyCodeIs == 104){
 player.seekTo(set8);
     }
  if(KeyCodeIs == 57 || KeyCodeIs == 105){
 player.seekTo(set9);
     }

  
  
  
  
  
  
  
  
  


  
  if(KeyCodeIs == 32){
      PlayPausVideo()
     }
  if(KeyCodeIs == 38){
 setVolumeVideo(volumeVideoRange + 5);
     }
  if(KeyCodeIs == 40){
  setVolumeVideo(volumeVideoRange - 5)
     }
  if(KeyCodeIs == 37){
      player.seekTo(getcurrenttimenow - 5);
     }
  if(KeyCodeIs == 39){
      player.seekTo(getcurrenttimenow + 5);
     }

  
  
  
  if(KeyCodeIs == 70 && key.shiftKey == true){
    goFullscreen('videoWrapper');
  	}
  
  
  
  
  if(KeyCodeIs == 80 && key.shiftKey == true){
            PlayPausVideo()
     }
  if(KeyCodeIs == 77 && key.shiftKey == true){
            $("#mutes").click()
     }
});




$("#lodingvideopage").addClass('d-none');


    }

  
  function setVolumeVideo(Volume){
        let volumeID = $("#volumeVideoRange");
        var min = volumeID.attr('min');
        var max = volumeID.attr('max');
        var val = Volume;
    volumeID.css('backgroundSize',(val - min) * 100 / (max - min) + '% 100%')
    volumeID.val(val);
 player.setVolume(val);
        if (val < 1) {
            $("#mutes i").attr('class', 'fas fa-volume-mute');
        }else if (val == 1) {
            $("#mutes i").attr('class', 'fas fa-volume-off');
        }else if (val <= 20 && val >= 1) {
            $("#mutes i").attr('class', 'fas fa-volume-off');
        } else if (val <= 50 && val >= 21) {
            $("#mutes i").attr('class', 'fas fa-volume-down');
        } else if (val >= 51) {
            $("#mutes i").attr('class', 'fas fa-volume-up');
        }
  }
  
  
  
  
var startedd;
    function onPlayerError(event) {
        console.log(event)
$('#imgbackground').addClass('errorvideo');
$('#imgbackground').removeClass('d-none');
$('.btnSpinner').addClass('d-none');
errorVideo();
}


    function playState(event) {
        var playstate = event.data;
        $('#videoControls').removeClass('d-none');
		$("#btnplay").css('z-index','4');
        
  if (event.data==YT.PlayerState.PLAYING && !startedd) {
    setQuality(event);
    startedd=true;
  }
  
  
  
if (playstate == -1) {
            // مشكلة في التشغيل

            $('#btnplay').addClass('d-none');
            $('.btnSpinner').removeClass('d-none');
        } else if (playstate == 0) {
            // نهاية الفيديو
videoControls(1);
            $('#btnplay').removeClass('d-none');
            $('.btnSpinner').addClass('d-none');
            $('#btnplay i').attr('class','fas fa-redo');
            $('#playpause i').attr('class','fas fa-redo');
            $(".imgbackground").removeClass("d-none");
            // ended = yellow
        } else if (playstate == 1) {
            // تشغيل الفيديو
            currentTime();
            $(".btCliknplay").removeClass("d-none");
            $("#videoWrapper .imgbackground").addClass('d-none');
            $('.btnSpinner').addClass('d-none');
            $('#btnplay i').attr('class','fas fa-pause');
            $('#playpause i').attr('class','fas fa-pause');
            $('#btnplay').addClass('d-none');
videoControls(0);

        } else if (playstate == 2) {
            // ايقاف مؤقت

            $('#btnplay').removeClass('d-none');
            $('.btnSpinner').addClass('d-none');

            $('#btnplay i').attr('class','far fa-play-circle');
            $('#playpause i').attr('class','fas fa-play');
videoControls(1);
        } else if (playstate == 3) {
            // التخزين المؤقت

            $('#btnplay').addClass('d-none');
            $('.btnSpinner').removeClass('d-none');


            // buffering = purple
        } else if (playstate == 5) {

            //جديلة الفيديو

            $('.imgbackground').removeClass('d-none');
            $('#btnplay').removeClass('d-none');
            $('.btnSpinner').addClass('d-none');
            $('#btnplay i').attr('class','far fa-play-circle');
            $('#playpause i').attr('class','fas fa-play');
        }
        



        setVideo();
        $("#playerIframe").css("opacity",1);
    }




    function currentTime() {

            let totalSeconds = player.getCurrentTime();
     	    let target = document.getElementById('rangeVideoPlayer');
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = totalSeconds % 60;

            minutes = String(minutes).padStart(2, "0");
            hours = String(hours).padStart(2, "0");
            seconds = parseInt(seconds);
            seconds = String(seconds).padStart(2, "0");

        var min = target.min;
        var max = target.max;
        var val = target.value;
        
        var t1 = (val - min) * 100 / (max - min);
        
        if(t1 <= 10){
        target.style.backgroundSize = (t1+.5) + '% 100%';
        }else if(t1 <= 20){
        target.style.backgroundSize = (t1+.4) + '% 100%';
        }else if(t1 <= 30){
        target.style.backgroundSize = (t1+.3) + '% 100%';
        }else if(t1 <= 40){
        target.style.backgroundSize = (t1+.25) + '% 100%';
        }else if(t1 <= 45){
        target.style.backgroundSize = (t1+.15) + '% 100%';
        }else if(t1 <= 55){
        target.style.backgroundSize = t1 + '% 100%';
        }else if(t1 <= 60){
        target.style.backgroundSize = (t1-.05) + '% 100%';
        }else if(t1 <= 70){
        target.style.backgroundSize = (t1-.1) + '% 100%';
        }else if(t1 <= 80){
        target.style.backgroundSize = (t1-.15) + '% 100%';
        }else if(t1 <= 90){
        target.style.backgroundSize = (t1-.2) + '% 100%';
        }else if(t1 <= 99){
        target.style.backgroundSize = (t1-.3) + '% 100%';
        }else if(t1 <= 100){
        target.style.backgroundSize = (t1+.3) + '% 100%';
        }
        target.value = totalSeconds;
        if(hours <=0){
        $('#LiveTime').text(minutes + ":" + seconds);
        }else{
        $('#LiveTime').text(hours + ":" + minutes + ":" + seconds);
        }

var speedvideo = 1000;
var playbackRate = player.getPlaybackRate();

var speedvideonow = (10/playbackRate)*100;

if(playbackRate != 1){
speedvideo = speedvideonow
}


if (player.getPlayerState() == 1) {
                    setTimeout(function() {
                currentTime();
            }, speedvideo);

        }
    };




    function PlayPausVideo() {
var playIs = player.getPlayerState();
        if (playIs == 5) {
            player.playVideo();
            $("#videoWrapper .imgbackground").addClass('d-none');
        } else if (playIs == 2) {
            player.playVideo();
            $("#videoWrapper .imgbackground").addClass('d-none');
        } else if (playIs == 1) {
            player.pauseVideo();
        } else if (playIs == 0) {
            player.seekTo(1, true);
            player.playVideo();
        }

        



var imgbackground = $('#imgbackground').hasClass('errorvideo');
if(imgbackground){
errorVideo();
}





    }

    //options




    function setPbR(numSetPbR) {
        player.setPlaybackRate(numSetPbR);
    };
    var numSetQuality;
    function setQuality(event) {
	numSetQuality=numSetQuality || 'auto';
  event.target.setPlaybackQuality(numSetQuality);
    };


    $("#mutes2").click(function() {
		$("#mutes").click();
    });
    $("#playpause").click(function() {
        PlayPausVideo();
    });
    $("#restViseo").click(function() {
        player.seekTo(1, true);
    });

    $("#mutes").click(function() {
        if (player.isMuted() == false) {
            player.mute();
$("#volumeVideoRange").addClass('d-none');
$("#volumevideo").css('width','auto');


$("#volumeVideo").css('background-image','linear-gradient(#ffffff, #f9f9f9)')
$("#mutes i").addClass('fas fa-volume-mute').removeClass('fa-volume-up').removeClass('fa-volume-down').removeClass('fa-volume-off');
$("#mutes2 i").addClass('fas fa-volume-mute').removeClass('fa-volume-up');
        } else {
$("#volumevideo").css('width','');

            player.unMute();
$("#volumeVideoRange").removeClass('d-none');
$("#volumeVideo").css('background-image','linear-gradient(#ff4500, #ff4500)');
        if (player.getVolume() <= 1) {
            player.setVolume(1)
            $("#mutes i").attr('class', 'fas fa-volume-off');
        } else if (player.getVolume() <= 20 && player.getVolume() >= 1) {
            $("#mutes i").attr('class', 'fas fa-volume-off');
        } else if (player.getVolume() <= 50 && player.getVolume() >= 21) {
            $("#mutes i").attr('class', 'fas fa-volume-down');
        } else if (player.getVolume() >= 51) {
            $("#mutes i").attr('class', 'fas fa-volume-up');
        }
$("#mutes2 i").addClass('fas fa-volume-up').removeClass('fa-volume-mute'); 
            

        }
    });




    $("#volinc").click(function() {
        var volumes = player.getVolume();
        if (volumes < 100) {
            player.setVolume(volumes + 10)
        }
    });
    $("#voldec").click(function() {
        var volumes = player.getVolume();
        if (volumes > 0) {
            player.setVolume(volumes - 10)
        }
    });



    $("#goFullscreen").click(function() {
        goFullscreen('videoWrapper');
    });




  
  
var showcnt = 0;
$(".btCliknplay").click(function() {
    
if (GeoArabicAndroid || _isMobile) {

if(showcnt == 0){
videoControls(1);
showcnt = 1;
}else{
videoControls(0)
showcnt = 0;
}

}else{

PlayPausVideo();
}

    

});
  

  

  
  
  
$("#btnplay").click(function() { 
PlayPausVideo();
});
  

$(".btCliknplay").mousemove(function() {
var playIs = player.getPlayerState();
videoControls(1);
        if (playIs == 1) {
videoControls(0);
        }
    });

$(".RangeVideo").hover(
  function() {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  }
);

   
var x_mousenow = 0;
var y_mousenow = 0;
document.addEventListener('mousemove', onMouseMove, false)
function onMouseMove(e){
    x_mousenow = e.clientX;
    y_mousenow = e.clientY;
}
$('.btCliknplay').dblclick(function() {
  if (GeoArabicAndroid || _isMobile) {
    var vid_h = $('#videoWrapper').height();
    var vid_w = $('#videoWrapper').width();
    var vid_w2 = vid_w / 2;
    var getcurrenttimes = player.getCurrentTime();
    if (vid_w2 < x_mousenow) {
      player.seekTo(getcurrenttimes + 5)
    } else {
      player.seekTo(getcurrenttimes - 5)
    }
  } else {
    goFullscreen('videoWrapper');
  }
});


    $("#videoWrapper,#videoControls")
        .mouseenter(function() {
var playIs = player.getPlayerState();
if (playIs == 1) {
videoControls(1);
}
        })
        .mouseleave(function() {
var playIs = player.getPlayerState();
if (playIs == 1) {
videoControls(0);
}
        });
        

var btCliknplayHide = ''
function videoControls(status){
  
if (GeoArabicAndroid || _isMobile) {
  
  
if(status == 1){
$( "#videoControls .w-100" ).css("bottom","-100px");
$( "#videoControls .videoControlsbackground" ).css("opacity","0");
$('.addStyle').html('input.RangeVideo[type=range]::-webkit-slider-thumb{-webkit-appearance:none!important;height:0px!important;width:0px!important;border-radius:50%!important;background:#ff4500!important;cursor:pointer!important;box-shadow:0 0 2px 0 #555!important;transition:background .3s ease-in-out!important;-webkit-transform:scaleY(.5)!important}#rangeVideoPlayer{height:1px!important;}');
  
}else{
$( "#videoControls .videoControlsbackground" ).css("opacity","1");
$( "#videoControls .w-100" ).css("bottom","0px");
$('.addStyle').html('#rangeVideoPlayer{height:2px!important;}');
  
}
  



  
  
  
  
  
  
  
  
}else{
clearTimeout(btCliknplayHide);
if(status == 1){





$( "#videoControls .w-100" ).css("bottom","0");
$( "#videoControls .videoControlsbackground" ).css("opacity","1");
$('.btCliknplay').css('cursor', 'pointer');
}else{
btCliknplayHide = setTimeout(function() {





var ariaExpandedDiv1 = $('#videosettingspeed').dropdown();
var ariaExpandedDiv2 = $('#videosettingquality').dropdown();
var ariaExpandedDiv3 = $('#videosetting').dropdown();



var ariaExpandedis1 = ariaExpandedDiv1[0].ariaExpanded;
var ariaExpandedis2 = ariaExpandedDiv2[0].ariaExpanded;
var ariaExpandedis3 = ariaExpandedDiv3[0].ariaExpanded;
if(ariaExpandedis1 != "true"&&ariaExpandedis2 != "true"&&ariaExpandedis3 != "true"){
$( "#videoControls .videoControlsbackground" ).css("opacity","0");
$( "#videoControls .w-100" ).css("bottom","-100px");
$('.btCliknplay').css('cursor', 'none');
}
}, 3000);
}
}  
  
}

function errorVideo(){
$('#imgbackground').attr('data-img','https://lh3.googleusercontent.com/-avsZ-kqVL54/YYaK5vaWBMI/AAAAAAAAGoI/t4l5wTiWZLcKPMk_j5_6sG0AATa3uJiCQCLcBGAsYHQ/s1600/videoerror.jpg')
$('.imgbackground').removeClass('d-none');
$('.btnSpinner').addClass('d-none');
}


if (GeoArabicAndroid || _isMobile) {
  
$("#btnplay").css('z-index','0');
$("#rangeVideoPlayer").attr('style','-webkit-transform:scaleY(1);transform:scaleY(1);height:2px;');
$("#rangeVideoPlayer").addClass('hover');


}



function onQualityChange(event){
     setTimeout(function(){
        var g = new Array(event.target.getAvailableQualityLevels());
        var l = g[0];
        var o = l.length;
        o = o - 1;
        var videoQuality = [''];
        var nameIs = '';
        for (var u = 0; u <= o; u++) {
            var b = u + 1;
            var name = l[u];
            if(name == "auto"){
            nameIs = "تلقائي"
            }else if(name == "tiny"){
            nameIs = "144p"
            }else if(name == "small"){
            nameIs = "240p"
            }else if(name == "medium"){
            nameIs = "360p"
            }else if(name == "large"){
            nameIs = "480p"
            }else if(name == "hd720"){
            nameIs = "720 <kbd class='qualityhdClass fw-bold'>HD</kbd>"
            }else if(name == "hd1080"){
            nameIs = "1080 <kbd class='qualityhdClass fw-bold'>HD</kbd>"
            }else if(name == "hd1440"){
            nameIs = "1440 <kbd class='qualityhdClass fw-bold'>4K</kbd>"
            }else if(name == "hd2160"){
            nameIs = "2160 <kbd class='qualityhdClass fw-bold'>8K</kbd>"
            }else{
            nameIs = "auto"
            }
            if (event.data == name) {
                videoQuality.push('<li><button type="button" onclick="javascript:  startedd=false;  numSetQuality=\''+l[u]+'\'; player.pauseVideo(); player.setPlaybackQuality(\''+l[u]+'\');  player.playVideo();  void(0);" name="videoQuality" id="vidQuality' + b + '" class="dropdown-item bg-danger">' + nameIs + '</button><hr class="dropdown-divider m-0"></li>');
$("#videosettingquality").html(nameIs);
            } else if (name == "auto"){
                videoQuality.push('<li><button onclick="javascript:  startedd=false;  numSetQuality=\''+l[u]+'\'; player.pauseVideo(); player.setPlaybackQuality(\''+l[u]+'\');  player.playVideo();  void(0);" name="videoQuality" id="vidQuality' + b + '" class="dropdown-item active">' + nameIs + '</button><hr class="dropdown-divider m-0"></li>');
            } else {
                videoQuality.push('<li><button onclick="javascript:  startedd=false;  numSetQuality=\''+l[u]+'\'; player.pauseVideo(); player.setPlaybackQuality(\''+l[u]+'\');  player.playVideo();  void(0);" name="videoQuality" id="vidQuality' + b + '" class="dropdown-item">' + nameIs + '</button><hr class="dropdown-divider m-0"></li>');
            }
$("#videoquality").html(videoQuality.join(''));
        }
},1000);


 

}

//    alert(player.getAvailableQualityLevels())
//    alert(player.getPlaybackQuality())
//    alert(player.setPlaybackQuality())
        
}


$('#videosettingspeed,#videosettingquality,#videosetting').on('show.bs.dropdown', function () {
$(".btCliknplay").addClass('d-none');
});
$('#videosettingspeed,#videosettingquality,#videosetting').on('hide.bs.dropdown', function () {
$(".btCliknplay").removeClass('d-none');
});



function dropdownspeedShow(){

setTimeout(function(){
$("#videosettingspeed").dropdown("toggle")
}, 100);



}


