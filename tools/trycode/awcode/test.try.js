
submitTryit()

$(".onchanges").on('keyup', function (){
var codesave = editor.getValue();
 codesave = codesave.replace(/&/ig, "&amp;");
 codesave = codesave.replace(/</ig, "&lt;");
 codesave = codesave.replace(/>/ig, "&gt;");
 codesave = codesave.replace(/"/ig, '&quot;');
 codesave = codesave.replace(/'/ig, "&#039;");
 codesave = codesave.replace(/±/ig, "&plusmn;");
 codesave = codesave.replace(/©/ig, "&copy;");
 codesave = codesave.replace(/®/ig, "&reg;");
 codesave = codesave.replace(/ya'll/ig, "ya'll");
 codesave = codesave.replace(/on/ig, "setonthiscodesdoit");
 codesave = codesave.replace(/javascript/ig, "setjava_scriptthiscodesdoit");
 codesave = codesave.replace(/alert/ig, "setalertthiscodesdoit");
 codesave = codesave.replace(/ /ig, "setspacethiscodesdoit");
 codesave = codesave.replace(/	/ig, "settapethiscodesdoit");
var inputtexttitle = $( "#inputtexttitle" ).val();
var inputemail = $( "#inputemail" ).val();
 $( "#input_5" ).val("<pre id='getthiscode'>"+codesave+"</pre>");
 $( "#input_6" ).val(inputtexttitle);
 $( "#input_8" ).val(inputemail);
});


$('#getdcodes').on('click', function () {
var awh = window.innerHeight;
awh = (awh - 250)+"px";
 $( "#getdcodes" ).css('display','none');
 $( "#showcodenow" ).css('max-height',awh);
 $( "#showcodenow" ).css('overflow','overlay');
 $( "#showcodenow" ).css('display','block');
 $( "#savecodenow" ).css('display','none');
 $( "#saveandgo" ).addClass('showseve');
  dataget();
});
$('#savedcodes').on('hidden.bs.modal', function (e) {
 $( "#getdcodes" ).css('display','block');
 $( "#showcodenow" ).css('display','none');
 $( "#savecodenow" ).css('display','block');
 $( "#saveandgo" ).removeClass('showseve');
 $( "#inputtexttitle" ).val('');
 $( "#inputtexttitle" ).removeClass('is-invalid');
 $( "#inputtexttitle" ).removeClass('is-valid ');
});




function dataget() {
$('#refreshbtnlink').addClass('disabled');
var id,published;
 $("#listusercode").html("");
  $('#loding').css('display','block');
  var getusercode = "https://www.googleapis.com/blogger/v3/blogs/552728391948484058/posts?";
  $.getJSON(getusercode, {
    key: "AIzaSyAUS8nJSagIa4TIbSTwzyj10ENDD92sm4c",
    fields: "items(title,url,id,published)",
    alt: "json",
    maxResults: 30
  })
    .done(function( data ) {
      $.each(data.items,function( i, item ) {
       id = item.id;
       published = item.published;
       published = published.substring(0,10);

       title = item.title;
 id = id.replace(/0/ig,"a");
 id = id.replace(/1/ig,"b");
 id = id.replace(/2/ig,"c");
 id = id.replace(/3/ig,"d");
 id = id.replace(/4/ig,"e");
 id = id.replace(/5/ig,"f");
 id = id.replace(/6/ig,"g");
 id = id.replace(/7/ig,"h");
 id = id.replace(/8/ig,"i");
 id = id.replace(/9/ig,"j");
        

$( "<a>" ).attr("class","list-group-item list-group-item-action Searchcode").attr("target","_blank").attr("href","https://try.doitf.com/p/try.html?view="+id).html(title+"<span id='activepublished' class='badge badge-primary badge-pill' style='float:left'>"+published+"</span>").appendTo( "#listusercode" );
      });
$( "<a>" ).attr("class","list-group-item list-group-item-action Searchcode active").attr("target","_blank").attr("href","https://try.doitf.com/p/user-code.html").html("عرض جميع المحفوظات").appendTo( "#listusercode" );
 $('#refreshbtnlink').removeClass('disabled');
 $('#loding').css('display','none');
 $('#activepublished').removeClass('badge-primary').addClass('badge-success');
  $("#listSearchcode").on("keyup", function() {
    var valueSearchs = $(this).val().toLowerCase();
    $("#listusercode .Searchcode").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(valueSearchs) > -1)
    });
  });

    });
}

 
 







function validateEmail(email) {
  var remail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return remail.test(email);
}




function saveandgo() {
if($('#saveandgo').hasClass('showseve')){
$( "#getdcodes" ).css('display','block');
 $( "#showcodenow" ).css('display','none');
 $( "#savecodenow" ).css('display','block');
 $( "#saveandgo" ).removeClass('showseve');
}else if($('#saveandgo').hasClass('loding')){

}else{
  var result = $("#result");
  var email = $("#inputemail").val();
  var title = $("#inputtexttitle").val();
  result.html("");



 if (title == ""){
	 $("#inputtexttitle").addClass('is-invalid');
       result.text("يجب إخال العنوان أولاً");
       result.css("color", "red");
 }else{
$("#inputtexttitle").removeClass('is-invalid');
$("#inputtexttitle").addClass('is-valid');

  if (validateEmail(email)) {
$("#inputemail").removeClass('is-invalid');
$("#inputemail").addClass('is-valid');

 var codesave = editor.getValue();
 codesave = codesave.replace(/&/ig, "&amp;");
 codesave = codesave.replace(/</ig, "&lt;");
 codesave = codesave.replace(/>/ig, "&gt;");
 codesave = codesave.replace(/"/ig, '&quot;');
 codesave = codesave.replace(/'/ig, "&#039;");
 codesave = codesave.replace(/±/ig, "&plusmn;");
 codesave = codesave.replace(/©/ig, "&copy;");
 codesave = codesave.replace(/®/ig, "&reg;");
 codesave = codesave.replace(/ya'll/ig, "ya'll");
codesave = codesave.replace(/on/ig, "setonthiscodesdoit");
codesave = codesave.replace(/javascript/ig, "setjava_scriptthiscodesdoit");
 codesave = codesave.replace(/alert/ig, "setalertthiscodesdoit");
 codesave = codesave.replace(/ /ig, "setspacethiscodesdoit");
 codesave = codesave.replace(/	/ig, "settapethiscodesdoit");
 $( "#input_5" ).val("<pre id='getthiscode'>"+codesave+"</pre>");
	$('#saveandgo').addClass('loding');
	$("#saveandgo").attr('disabled','disabled');
	$("#saveandgo").html('حفظ <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>');
	$("#input_2").trigger('click');
	setTimeout(function(){
	$("#getdcodes").trigger('click');
	$("#saveandgo").removeAttr('disabled');
	$("#saveandgo").html('حفظ');
	$('#saveandgo').removeClass('loding');
	$( "#inputtexttitle" ).val('');
	},5000);
  } else {
$("#inputemail").addClass('is-invalid');
$("#inputemail").removeClass('is-valid');
  if (email == ""){
      result.text("يجب إدخال البريد الإلكتروني!");
  }else{
    result.html("<span class='font-weight-bold'>البريد الإلكتروني: </span>" + email + " غير صالح");
    }
    result.css("color", "red");
  }
  return false;
}
}
}
$("#saveandgo").on("click", saveandgo); 



function submitTryit(n) {
  if (window.editor) {
    window.editor.save();
  }
  	if (b64awsec == "ZG9pdGYuY29t"){
  var text = document.getElementById("textareaCode").value;
  var ifr = document.createElement("iframe");
  ifr.setAttribute("frameborder", "0");
  ifr.setAttribute("id", "iframeResult");
  ifr.setAttribute("name", "iframeResult");  
  ifr.setAttribute("allowfullscreen", "true");  
  document.getElementById("iframewrapper").innerHTML = "";
  document.getElementById("iframewrapper").appendChild(ifr);
 }else{
var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script)
}
    var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
    ifrw.document.open();
    ifrw.document.write(text);  
    ifrw.document.close();
    //23.02.2016: contentEditable is set to true, to fix text-selection (bug) in firefox.
    //(and back to false to prevent the content from being editable)
    //(To reproduce the error: Select text in the result window with, and without, the contentEditable statements below.)  
    if (ifrw.document.body && !ifrw.document.body.isContentEditable) {
      ifrw.document.body.contentEditable = true;
      ifrw.document.body.contentEditable = false;
    }
  document.getElementById("tryintab").onclick = function() { 

var trycodewin = window.open("","_blank");

with (trycodewin.document) {
  if (window.editor) {
    window.editor.save();
  }
var text = document.getElementById("textareaCode").value;

 open();
    write(text);  
     close();
}}
}





var currentStack=true;
if ((window.screen.availWidth <= 768 && window.innerHeight > window.innerWidth) || "" == " horizontal") {restack(true);}
function restack(horizontal) {
    var tc, ic, t, i, c, f, sv, sh, d, height, flt, width;
    tc = document.getElementById("textareacontainer");
    ic = document.getElementById("iframecontainer");
    t = document.getElementById("textarea");
    i = document.getElementById("iframe");
    c = document.getElementById("container");    
    sv = document.getElementById("stackV");
    sh = document.getElementById("stackH");
    tc.className = tc.className.replace("horizontal", "");
    ic.className = ic.className.replace("horizontal", "");        
    t.className = t.className.replace("horizontal", "");        
    i.className = i.className.replace("horizontal", "");        
    c.className = c.className.replace("horizontal", "");                        
    if (sv) {sv.className = sv.className.replace("horizontal", "")};
    if (sv) {sh.className = sh.className.replace("horizontal", "")};
    stack = "";
    if (horizontal) {
        tc.className = tc.className + " horizontal";
        ic.className = ic.className + " horizontal";        
        t.className = t.className + " horizontal";        
        i.className = i.className + " horizontal";                
        c.className = c.className + " horizontal";                
        if (sv) {sv.className = sv.className + " horizontal"};
        if (sv) {sh.className = sh.className + " horizontal"};
        stack = " horizontal";
        document.getElementById("textareacontainer").style.height = "50%";
        document.getElementById("iframecontainer").style.height = "50%";
        document.getElementById("textareacontainer").style.width = "100%";
        document.getElementById("iframecontainer").style.width = "100%";
        currentStack=false;
    } else {
        document.getElementById("textareacontainer").style.height = "100%";
        document.getElementById("iframecontainer").style.height = "100%";
        document.getElementById("textareacontainer").style.width = "50%";
        document.getElementById("iframecontainer").style.width = "50%";
        currentStack=true;        
    }
    fixDragBtn();
    showFrameSize();
}
function showFrameSize() {
  var t;
  var width, height;
  width = Number(doit_getStyleValue(document.getElementById("iframeResult"), "width").replace("px", "")).toFixed();
  height = Number(doit_getStyleValue(document.getElementById("iframeResult"), "height").replace("px", "")).toFixed();
  document.getElementById("framesize").innerHTML = "حجم صفحة المحتوى: <span>" + width + "x" + height + "</span> <a data-target='#contentModaltry' data-toggle='modal' href='#' style='margin: 0 5px;'><i aria-hidden='true' class='fa fa-info-circle'/></a>";
}
var dragging = false;
var stack;
function fixDragBtn() {
  var textareawidth, leftpadding, dragleft, containertop, buttonwidth
  var containertop = Number(doit_getStyleValue(document.getElementById("container"), "top").replace("px", ""));
  if (stack != " horizontal") {
    document.getElementById("dragbar").style.width = "5px";    
    textareasize = Number(doit_getStyleValue(document.getElementById("textareawrapper"), "width").replace("px", ""));
    leftpadding = Number(doit_getStyleValue(document.getElementById("textarea"), "padding-left").replace("px", ""));
    buttonwidth = Number(doit_getStyleValue(document.getElementById("dragbar"), "width").replace("px", ""));
    textareaheight = doit_getStyleValue(document.getElementById("textareawrapper"), "height");
    dragleft = textareasize + leftpadding + (leftpadding / 2) - (buttonwidth / 2);
    document.getElementById("dragbar").style.top = containertop + "px";
    document.getElementById("dragbar").style.right = dragleft + 7 + "px";
    document.getElementById("dragbar").style.height = textareaheight;
    document.getElementById("dragbar").style.cursor = "col-resize";
    
  } else {
    document.getElementById("dragbar").style.height = "5px";
    if (window.getComputedStyle) {
        textareawidth = window.getComputedStyle(document.getElementById("textareawrapper"),null).getPropertyValue("height");
        textareaheight = window.getComputedStyle(document.getElementById("textareawrapper"),null).getPropertyValue("width");
        leftpadding = window.getComputedStyle(document.getElementById("textarea"),null).getPropertyValue("padding-top");
        buttonwidth = window.getComputedStyle(document.getElementById("dragbar"),null).getPropertyValue("height");
    } else {
        dragleft = document.getElementById("textareawrapper").currentStyle["width"];
    }
    textareawidth = Number(textareawidth.replace("px", ""));
    leftpadding = Number(leftpadding .replace("px", ""));
    buttonwidth = Number(buttonwidth .replace("px", ""));
    dragleft = containertop + textareawidth + leftpadding + (leftpadding / 2);
    document.getElementById("dragbar").style.top = dragleft + "px";
    document.getElementById("dragbar").style.right = "5px";
    document.getElementById("dragbar").style.width = textareaheight;
    document.getElementById("dragbar").style.cursor = "row-resize";        
  }
}
function dragstart(e) {
  e.preventDefault();
  dragging = true;
  var main = document.getElementById("iframecontainer");
}
function dragmove(e) {
  if (dragging) 
  {
    document.getElementById("shield").style.display = "block";        
    if (stack != " horizontal") {
      var percentage = (e.pageX / window.innerWidth) * 100;
      if (percentage > 5 && percentage < 98) {
        var mainPercentage = 100-percentage;
        document.getElementById("iframecontainer").style.width = percentage + "%";
        document.getElementById("textareacontainer").style.width = mainPercentage + "%";
        fixDragBtn();
      }
    } else {
      var containertop = Number(doit_getStyleValue(document.getElementById("container"), "top").replace("px", ""));
      var percentage = ((e.pageY - containertop + 20) / (window.innerHeight - containertop + 20)) * 100;
      if (percentage > 5 && percentage < 98) {
        var mainPercentage = 100-percentage;
        document.getElementById("textareacontainer").style.height = percentage + "%";
        document.getElementById("iframecontainer").style.height = mainPercentage + "%";
        fixDragBtn();
      }
    }
    showFrameSize();    
  }
}
function dragend() {
  document.getElementById("shield").style.display = "none";
  dragging = false;
  var vend = navigator.vendor;
  if (window.editor && vend.indexOf("Apple") == -1) {
      window.editor.refresh();
  }
}
if (window.addEventListener) {              
  document.getElementById("dragbar").addEventListener("mousedown", function(e) {dragstart(e);});
  document.getElementById("dragbar").addEventListener("touchstart", function(e) {dragstart(e);});
  window.addEventListener("mousemove", function(e) {dragmove(e);});
  window.addEventListener("touchmove", function(e) {dragmove(e);});
  window.addEventListener("mouseup", dragend);
  window.addEventListener("touchend", dragend);
  window.addEventListener("load", fixDragBtn);
  window.addEventListener("load", showFrameSize);
}




function retheme() {
  var cc = document.body.className;
  if (cc.indexOf("darktheme") > -1) {
    document.body.className = cc.replace("darktheme", "");
    if (opener) {opener.document.body.className = cc.replace("darktheme", "");}
    localStorage.setItem("preferredmode", "light");
  } else {
    document.body.className += " darktheme";
    if (opener) {opener.document.body.className += " darktheme";}
    localStorage.setItem("preferredmode", "dark");
  }
}
(
function setThemeMode() {
  var x = localStorage.getItem("preferredmode");
  if (x == "dark") {
    document.body.className += " darktheme";
  }
})();
function colorcoding() {
  var ua = navigator.userAgent;
  //Opera Mini refreshes the page when trying to edit the textarea.
  if (ua && ua.toUpperCase().indexOf("OPERA MINI") > -1) { return false; }
  window.editor = CodeMirror.fromTextArea(document.getElementById("textareaCode"), {
    mode: "text/html",
    htmlMode: true,
    lineWrapping: true,
    smartIndent: false,
    addModeClass: true
  });
//  window.editor.on("change", function () {window.editor.save();});
}
colorcoding();

function doit_getStyleValue(elmnt,style) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(elmnt,null).getPropertyValue(style);
    } else {
        return elmnt.currentStyle[style];
    }
}



(function () {
    var viewFullScreen = document.getElementById("view-fullscreen");
    var cancelFullScreen = document.getElementById("cancel-fullscreen");


    if (viewFullScreen) {
        viewFullScreen.addEventListener("click", function () {
            var docElm = document.getElementsByClassName("entry-content")[0];
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            }
            else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen();            }
            else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            }
            else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            }
            else if (docElm.webkitRequestFullScreen) {
            }
        }, false);
    }

    if (cancelFullScreen) {
        cancelFullScreen.addEventListener("click", function () {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }, false);
    }

})();