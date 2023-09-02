/// Cookie theme

var cookieValuethemes = document.cookie.replace(/(?:(?:^|.*;\s*)themes\s*\=\s*([^;]*).*$)|^.*$/, "$1");
var cookieValuethemesmode = document.cookie.replace(/(?:(?:^|.*;\s*)themesmode\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (cookieValuethemes) {
if(cookieValuethemes == "default"){
 }else{
  var themecss = document.createElement("link");
 themecss.href = "https://get.doitf.com/tools/codemirror/theme/"+cookieValuethemes+".css";
 themecss.rel = "stylesheet";
 document.getElementsByTagName('head')[0].appendChild(themecss);
 }
    editor.setOption("theme", cookieValuethemesmode);
    $("#selecttheme").val(cookieValuethemes);

} 




/// Cookie Option
function getCookieValue(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}

$(document).ready(function(){

    var inputc1El = $('input[value="inputc1"]');
    var inputc2El = $('input[value="inputc2"]');
    var inputc3El = $('input[value="inputc3"]');
    var inputc4El = $('input[value="inputc4"]');
    var inputc5El = $('input[value="inputc5"]');
    var inputc6El = $('input[value="inputc6"]');
    var inputc7El = $('input[value="inputc7"]');
    var inputc8El = $('input[value="inputc8"]');
    var inputc9El = $('input[value="inputc9"]');
    var inputc10El = $('input[value="inputc10"]');
    var inputc11El = $('input[value="inputc11"]');
    var inputc12El = $('input[value="inputc12"]');
    var inputc13El = $('input[value="inputc13"]');

    if (document.cookie.indexOf('inputc1=') != -1) {
        inputc1El.prop("checked", $.parseJSON(getCookieValue("inputc1")));
                  if (inputc1El.prop('checked')==true){
        editor.setOption("direction", "rtl")
      }else{
        editor.setOption("direction", "ltr")
      }
    }
    if (document.cookie.indexOf('inputc2=') != -1) {
        inputc2El.prop("checked", $.parseJSON(getCookieValue("inputc2")));
      if (inputc2El.prop('checked')==true){
        editor.setOption("lineWrapping", true)
      }else{
        editor.setOption("lineWrapping", false)
      }
        
    }

    if (document.cookie.indexOf('inputc3=') != -1) {
        inputc3El.prop("checked", $.parseJSON(getCookieValue("inputc3")));
            if (inputc3El.prop('checked')==true){
        editor.setOption("autoCloseTags", true)
      }else{
        editor.setOption("autoCloseTags", false)
      }
    }
    if (document.cookie.indexOf('inputc4=') != -1) {
        inputc4El.prop("checked", $.parseJSON(getCookieValue("inputc4")));
            if (inputc4El.prop('checked')==true){
        editor.setOption("autoCloseBrackets", true)
      }else{
        editor.setOption("autoCloseBrackets", false)
      }
    }
    if (document.cookie.indexOf('inputc5=') != -1) {
        inputc5El.prop("checked", $.parseJSON(getCookieValue("inputc5")));
            if (inputc5El.prop('checked')==true){
        editor.setOption("lineNumbers", true)
      }else{
        editor.setOption("lineNumbers", false)
      }
    }
    if (document.cookie.indexOf('inputc6=') != -1) {
        inputc6El.prop("checked", $.parseJSON(getCookieValue("inputc6")));
            if (inputc6El.prop('checked')==true){
        editor.setOption("foldGutter", true)
      }else{
        editor.setOption("foldGutter", false)
      }
    }
    if (document.cookie.indexOf('inputc7=') != -1) {
        inputc7El.prop("checked", $.parseJSON(getCookieValue("inputc7")));
            if (inputc7El.prop('checked')==true){
        editor.setOption("styleActiveLine", true)
      }else{
        editor.setOption("styleActiveLine", false)
      }
    }
    if (document.cookie.indexOf('inputc8=') != -1) {
        inputc8El.prop("checked", $.parseJSON(getCookieValue("inputc8")));
            if (inputc8El.prop('checked')==true){
    editor.setOption("highlightSelectionMatches", {showToken: /\w/, annotateScrollbar: true})
      }else{
        editor.setOption("highlightSelectionMatches", false)
      }
    }
    if (document.cookie.indexOf('inputc9=') != -1) {
        inputc9El.prop("checked", $.parseJSON(getCookieValue("inputc9")));
            if (inputc9El.prop('checked')==true){
var link1 = document.createElement('link');
link1.href = "https://get.doitf.com/tools/codemirror/addon/lint/lint.css";
link1.rel = "stylesheet";
document.getElementsByTagName('head')[0].appendChild(link1);


var script1 = document.createElement('script');
script1.src = "https://unpkg.com/jshint@2.9.6/dist/jshint.js";
document.getElementsByTagName('head')[0].appendChild(script1);

var script2 = document.createElement('script');
script2.src = "https://unpkg.com/jsonlint@1.6.3/web/jsonlint.js";
document.getElementsByTagName('head')[0].appendChild(script2);

var script3 = document.createElement('script');
script3.src = "https://unpkg.com/csslint@1.0.5/dist/csslint.js";
document.getElementsByTagName('head')[0].appendChild(script3);


var script4 = document.createElement('script');
script4.src = "https://get.doitf.com/tools/codemirror/addon/lint/javascript-lint.js";
document.getElementsByTagName('head')[0].appendChild(script4);

var script5 = document.createElement('script');
script5.src = "https://get.doitf.com/tools/codemirror/addon/lint/json-lint.js";
document.getElementsByTagName('head')[0].appendChild(script5);

var script6 = document.createElement('script');
script6.src = "https://get.doitf.com/tools/codemirror/addon/lint/css-lint.js";
document.getElementsByTagName('head')[0].appendChild(script6);
    editor.setOption("linterror", true)  

      }else{
        editor.setOption("linterror", false)
      }
    }
    if (document.cookie.indexOf('inputc10=') != -1) {
        inputc10El.prop("checked", $.parseJSON(getCookieValue("inputc10")));
            if (inputc10El.prop('checked')==true){
      $(".inputc3").toggle(inputc10El.prop("checked", false));
      }else{
      $(".inputc3").toggle(inputc10El.prop("checked", false));
      }
    }
    if (document.cookie.indexOf('inputc11=') != -1) {
        inputc11El.prop("checked", $.parseJSON(getCookieValue("inputc11")));
            if (inputc11El.prop('checked')==true){
        editor.setOption("showTrailingSpace", true)
      }else{
        editor.setOption("showTrailingSpace", false)
      }
    }
    if (document.cookie.indexOf('inputc12=') != -1) {
        inputc12El.prop("checked", $.parseJSON(getCookieValue("inputc12")));
            if (inputc12El.prop('checked')==true){
        editor.setOption("hintOptions", true)
      }else{
        editor.setOption("hintOptions", false)
      }
    }
    if (document.cookie.indexOf('inputc13=') != -1) {
      var checkBoxsize = document.getElementById("setsizecodes");
        inputc13El.prop("checked", $.parseJSON(getCookieValue("inputc13")));
            if (inputc13El.prop('checked')==true){
document.getElementsByClassName("CodeMirror")[0].style.height = "auto";
checkBoxsize.style.display = "none"
      }else{
document.getElementsByClassName("CodeMirror")[0].style.height = checkBoxsize.value+"px";
checkBoxsize.style.display = "inline-block";
      }
    }


    $(".inputc1").toggle(inputc1El.prop("checked"));
    $(".inputc2").toggle(inputc2El.prop("checked"));
    $(".inputc3").toggle(inputc3El.prop("checked"));
    $(".inputc4").toggle(inputc4El.prop("checked"));
    $(".inputc5").toggle(inputc5El.prop("checked"));
    $(".inputc6").toggle(inputc6El.prop("checked"));
    $(".inputc7").toggle(inputc7El.prop("checked"));
    $(".inputc8").toggle(inputc8El.prop("checked"));
    $(".inputc9").toggle(inputc9El.prop("checked"));
    $(".inputc10").toggle(inputc10El.prop("checked"));
    $(".inputc11").toggle(inputc11El.prop("checked"));
    $(".inputc12").toggle(inputc12El.prop("checked"));
    $(".inputc13").toggle(inputc13El.prop("checked"));

    $('input[type="checkbox"]').click(function(){

        var expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 9600);
        expiryDate = expiryDate.toUTCString();

        if($(this).attr("value")=="inputc1"){
            $(".inputc1").toggle(this.checked);
            document.cookie="inputc1=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc2"){
            $(".inputc2").toggle(this.checked);
            document.cookie="inputc2=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc3"){
            $(".inputc3").toggle(this.checked);
            document.cookie="inputc3=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc3"){
            $(".inputc3").toggle(this.checked);
            document.cookie="inputc3=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc4"){
            $(".inputc4").toggle(this.checked);
            document.cookie="inputc4=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc5"){
            $(".inputc5").toggle(this.checked);
            document.cookie="inputc5=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc6"){
            $(".inputc6").toggle(this.checked);
            document.cookie="inputc6=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc7"){
            $(".inputc7").toggle(this.checked);
            document.cookie="inputc7=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc8"){
            $(".inputc8").toggle(this.checked);
            document.cookie="inputc8=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc9"){
            $(".inputc9").toggle(this.checked);
            document.cookie="inputc9=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc10"){
            $(".inputc10").toggle(this.checked);
            document.cookie="inputc10=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc11"){
            $(".inputc11").toggle(this.checked);
            document.cookie="inputc11=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc12"){
            $(".inputc12").toggle(this.checked);
            document.cookie="inputc12=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc13"){
            $(".inputc13").toggle(this.checked);
            document.cookie="inputc13=" + this.checked.toString() + "; expires=" + expiryDate;
        }
    });
    $("#clear-cart").click( function(e){
document.cookie ='inputc1=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc2=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc3=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc4=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc5=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc6=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc7=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc8=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc9=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc10=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc11=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc12=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc13=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='themes=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='themesmode=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';




editor.setOption("theme", "default");
editor.setOption("direction", "ltr");
editor.setOption("lineWrapping", true);
editor.setOption("autoCloseTags", false);
editor.setOption("autoCloseBrackets", false);
editor.setOption("lineNumbers", true);
editor.setOption("foldGutter", true);
editor.setOption("styleActiveLine", true);
editor.setOption("highlightSelectionMatches", false);
editor.setOption("linterror", false);
editor.setOption("showTrailingSpace", false);
editor.setOption("hintOptions", false);

$(".inputc1").toggle(inputc1El.prop("checked", false));
$(".inputc2").toggle(inputc2El.prop("checked", true));
$(".inputc3").toggle(inputc3El.prop("checked", false));
$(".inputc4").toggle(inputc4El.prop("checked", false));
$(".inputc5").toggle(inputc5El.prop("checked", true));
$(".inputc6").toggle(inputc6El.prop("checked", true));
$(".inputc7").toggle(inputc7El.prop("checked", true));
$(".inputc8").toggle(inputc8El.prop("checked", false));
$(".inputc9").toggle(inputc9El.prop("checked", false));
$(".inputc10").toggle(inputc10El.prop("checked", false));
$(".inputc11").toggle(inputc11El.prop("checked", false));
$(".inputc12").toggle(inputc12El.prop("checked", false));
$(".inputc13").toggle(inputc13El.prop("checked", false));
$("#selecttheme").val("default");
document.getElementById("previewiframe").style.display = "none";
var checkBoxsize = document.getElementById("setsizecodes");
document.getElementsByClassName("CodeMirror")[0].style.height = "400px";
checkBoxsize.removeAttribute("disabled");
checkBoxsize.style.display = "inline-block";
});
});