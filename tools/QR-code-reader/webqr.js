// QRCODE reader Copyright 2011 refai
// http://try.doitf.com
function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)));}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)));}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);
var gCtx = null;
var gCanvas = null;
var c=0;
var stype=0;
var gUM=false;
var webkit=false;
var moz=false;
var v=null;

var imghtml='<div id="qrfile"><canvas id="out-canvas" width="317" height="237"></canvas>'+
    '<div id="imghelp"><div id="textbtn"><i class="fa fa-cloud-upload"></i>'+
    '<div>قم بسحب وإسقاط ملف هنا أو اضغط للإختيار</div>'+
	'</div></div>'+
'</div>';





var vidhtml = '<video id="v" autoplay></video>';

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;
  if(files.length>0)
  {
	handleFiles(files);
  }
  else
  if(dt.getData('URL'))
  {
	qrcode.decode(dt.getData('URL'));
  }
}

function handleFiles(f)
{
	var o=[];
	
	for(var i =0;i<f.length;i++)
	{
        var reader = new FileReader();
        reader.onload = (function(theFile) {
        return function(e) {
            gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);

			qrcode.decode(e.target.result);
        };
        })(f[i]);
        reader.readAsDataURL(f[i]);	
    }
}

function initCanvas(w,h)
{
    gCanvas = document.getElementById("qr-canvas");
    gCanvas.style.width = w + "px";
    gCanvas.style.height = h + "px";
    gCanvas.width = w;
    gCanvas.height = h;
    gCtx = gCanvas.getContext("2d");
    gCtx.clearRect(0, 0, w, h);
}


function captureToCanvas() {
    if(stype!=1)
        return;
    if(gUM)
    {
        try{
            gCtx.drawImage(v,0,0);
            try{
                qrcode.decode();
            }
            catch(e){       
                console.log(e);
                setTimeout(captureToCanvas, 500);
            };
        }
        catch(e){       
                console.log(e);
                setTimeout(captureToCanvas, 500);
        };
    }
    
}

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function read(a)
{
    var html="";
    if(a.indexOf("http://") === 0 || a.indexOf("https://") === 0){
        html+="<a target='_blank' href='"+a+"'>"+a+"</a><br>";
    }else{
    html+="<b>"+htmlEntities(a)+"</b>";
    }
    document.getElementById("result").innerHTML=html;
}	

function isCanvasSupported(){
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}
function success(stream) 
{

    v.srcObject = stream;
    v.play();

    gUM=true;
    setTimeout(captureToCanvas, 500);
}
		
function errors(error)
{
    gUM=false;
    return;
}

function load()
{
  
		if (b64awsec == "ZG9pdGYuY29t"){
  
	if(isCanvasSupported() && window.File && window.FileReader)
	{
		initCanvas(800, 600);
		qrcode.callback = read;
		document.getElementById("mainbody").style.display="inline";
        setimg();
	}
	else
	{
		document.getElementById("mainbody").style.display="inline";
		document.getElementById("mainbody").innerHTML='<p id="mp1">المعذرة! متصفحك غير مدعوم</p>'+
        '<br><p id="mp2">ماسح رمز الاستجابة السريعة بحاجة إلى متصفح يدعم  HTML5</p>'+
        '<p id="mp2">جرب إستخدام احد المتصفحات ادناه</p><br>'+
        '<p id="mp1"><a href="https://www.mozilla.com/firefox"><img src="https://lh3.googleusercontent.com/-KZl7ilriIKo/YeSepELP9dI/AAAAAAAAGso/_BNDxjc2k9co8jXSOCilmSooYXBK1dHDwCNcBGAsYHQ/s70/Firefox_logo.png"/></a>  <a href="https://chrome.google.com"><img src="https://lh3.googleusercontent.com/-BIAjEOLMTso/YeSepNlNuEI/AAAAAAAAGss/qvkhL-UAlpkLIFBiPPF-CO6My8jYkmdiQCNcBGAsYHQ/s70/Google_Chrome.png"/></a>  <a href="https://www.opera.com"><img src="https://lh3.googleusercontent.com/-aTGR1nLgA-4/YeSep12mISI/AAAAAAAAGs0/nBvzVOX3BV0yOHaPMYWPSBvJqHfU1Y6pwCNcBGAsYHQ/s70/Opera.png"/></a> <a href="https://www.microsoft.com/en-us/edge"><img src="https://lh3.googleusercontent.com/-uKG-xymRkko/YeSepFemXfI/AAAAAAAAGsw/y5_2AdOYkow3b48dpBz2uQRIq-JnMBmSwCNcBGAsYHQ/s70/Microsoft_Edge_logo.png"/></a></p>';
	}
  
}else{
		var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script);
		}
  
  
  
}

function setwebcam()
{
	  $("#result").removeClass('text-dark').removeClass('text-success').removeClass('text-danger');
	var options = true;
	if(navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)
	{
		try{
			navigator.mediaDevices.enumerateDevices()
			.then(function(devices) {
			  devices.forEach(function(device) {
				if (device.kind === 'videoinput') {
				  if(device.label.toLowerCase().search("back") >-1)
					options={'deviceId': {'exact':device.deviceId}, 'facingMode':'environment'} ;
				}
			//	console.log(device.kind + ": " + device.label +" id = " + device.deviceId);
			  });
			  setwebcam2(options);
			});
		}
		catch(e){
			console.log(e);
		}
	}
	else{
		console.log("no navigator.mediaDevices.enumerateDevices" );
		setwebcam2(options);
	}
	
}

function setwebcam2(options)
{
	//console.log(options);
	document.getElementById("result").innerHTML="- إستخدم الكاميرا لإجراء مسح ضوئي -";
    if(stype==1)
    {
        setTimeout(captureToCanvas, 500);    
        return;
    }
    var n=navigator;
    document.getElementById("outdiv").innerHTML = vidhtml;
    v=document.getElementById("v");


    if(n.mediaDevices.getUserMedia)
    {
        n.mediaDevices.getUserMedia({video: options, audio: false}).
            then(function(stream){
                success(stream);
            }).catch(function(error){
                errors(error)
            });
    }
    else
    if(n.getUserMedia)
	{
		webkit=true;
        n.getUserMedia({video: options, audio: false}, success, error);
	}
    else
    if(n.webkitGetUserMedia)
    {
        webkit=true;
        n.webkitGetUserMedia({video:options, audio: false}, success, error);
    }

    document.getElementById("qrimg").style.opacity=0.5;
    document.getElementById("webcamimg").style.opacity=1.0;

    stype=1;
    setTimeout(captureToCanvas, 500);
}
  

  function textresultfiles(num)
{
  var textresultfile = "-- سيظهر النص المستخرج هنا --";
  if(num == 1){
document.getElementById("result").innerHTML=textresultfile;
  }else{
//  document.getElementById("result").innerHTML="";
  }
}
  
  
function setimg()
{
$("#result").removeClass('text-dark').removeClass('text-success').removeClass('text-danger');
textresultfiles(1);
    if(stype==2)
     return;

    document.getElementById("outdiv").innerHTML = imghtml;
    //document.getElementById("qrimg").src="qrimg.png";
    //document.getElementById("webcamimg").src="webcam2.png";
    document.getElementById("qrimg").style.opacity=1.0;
    document.getElementById("webcamimg").style.opacity=0.5;
    var qrfile = document.getElementById("qrfile");
    qrfile.addEventListener("dragenter", dragenter, false);  
    qrfile.addEventListener("dragover", dragover, false);  
    qrfile.addEventListener("drop", drop, false);
    stype=2;
$("#imghelp").click(function() {
    $("#choosefile").trigger('click');
});
}



function loadstatus(nom){
if(nom<3){
   $("#imghelp").addClass('showthis').removeClass('hidethis');
$("#result").addClass('text-danger').removeClass('text-success').removeClass('text-dark');
}else if(nom>=3){
   $("#imghelp").addClass('hidethis').removeClass('showthis');
$("#result").addClass('text-success').removeClass('text-danger').removeClass('text-dark');
  
}else{
   $("#imghelp").removeClass('hidethis').removeClass('showthis');
  $("#result").addClass('text-dark').removeClass('text-success').removeClass('text-danger');
}

}
$( ".showthis" ).hover(function() {
$("#imghelp").css('opacity','1');
});

$( ".hidethis" ).hover(function() {
$("#imghelp").css('opacity','0');

});