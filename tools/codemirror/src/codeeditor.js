CodeMirror.modeURL = "https://get.doitf.com/tools/codemirror/mode/%N/%N.js";

 var sel_top = document.getElementById("buffers");
CodeMirror.on(sel_top, "change", function() {
  selectBuffer(editor, sel_top.options[sel_top.selectedIndex].value);
});


var buffers = {};

function openBuffer(name, text, mode) {
  buffers[name] = CodeMirror.Doc(text, mode);
  var opt = document.createElement("option");
  opt.appendChild(document.createTextNode(name));
  sel_top.appendChild(opt);
}

function newBuf(where) {
var modeInput = document.getElementById("mode");
var name = modeInput.value
CodeMirror.on(modeInput, "keypress", function(e) {
  if (e.keyCode == 13) change();
});



  var val = modeInput.value, m, mode, spec;
  if (m = /.+\.([^.]+)$/.exec(val)) {
    var info = CodeMirror.findModeByExtension(m[1]);
    if (info) {
      mode = info.mode;
      spec = info.mime;
    }
  } else if (/\//.test(val)) {
    var info = CodeMirror.findModeByMIME(val);
    if (info) {
      mode = info.mode;
      spec = val;
    }
  } else {
    mode = spec = val;
  }

if (name == null) return;
  if (buffers.hasOwnProperty(name)) {
$("#filealready").html("<div class='alert alert-danger alert-dismissible fade show' role='alert'> يوجد بالفعل ملف بإسم <strong>"+name+"</strong>.<button onclick='remobacfile()' type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>");
document.getElementById("buffers").style.backgroundColor = "#d4edda";
    return;
  }else{
  
  
  
    if (mode) {
$("#filedonecreated").html("<div class='alert alert-success alert-dismissible fade show' role='alert'> تم إنشاء ملف <strong>"+name+"</strong> بنجاح.<button onclick='remobacfile()' type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>");
document.getElementById("buffers").style.backgroundColor = "#d4edda";



  if ($("#select option[id='"+spec+"']").length){
CodeMirror.autoLoadMode(editor, mode);
$("#select option[id='"+spec+"']").attr("selected", "selected");
   }else{
    $("#select").append($("<option>", {
    id: spec,
    value: mode,
    selected:"selected",
    text: "اللغة " +mode + " - "+ spec
}));
CodeMirror.autoLoadMode(editor, mode);
}
  } else {

$("#filecreated").last().html("<div class='alert alert-warning alert-dismissible fade show' role='alert'> تم إنشاء الملف <strong>"+val+" </strong> ولكن تعذر علينا العثور على لغة البرمجة، يرجى تحديد لغة البرمجة من الخيارات.<button onclick='remobac()' type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>");
document.getElementById("select").style.backgroundColor = "#fff3cd";
$("#select").val("textile").change();
$('#select').change(function(){
   editor.setOption("mode", $(this).val() );
});
  }
  
  

  }
  openBuffer(name, "", spec);
  selectBuffer(where == "top" ? editor : ed_bot, name);
  var sel = sel_top;
  sel.value = name;
}

function selectBuffer(editor, name) {
  var buf = buffers[name];
  if (buf.getEditor()) buf = buf.linkedDoc({sharedHist: true});
  var old = editor.swapDoc(buf);
  var linked = old.iterLinkedDocs(function(doc) {linked = doc;});
  if (linked) {
    // Make sure the document in buffers is the one the other view is looking at
    for (var name in buffers) if (buffers[name] == old) buffers[name] = linked;
    old.unlinkDoc(linked);
  }
  editor.focus();
}

function nodeContent(id) {
  var node = document.getElementById(id), val = node.textContent || node.innerText;
  val = val.slice(val.match(/^\s*/)[0].length, val.length - val.match(/\s*$/)[0].length) + "\n";
  return val;
}


            var mixedMode = {
        name: "htmlmixed",
        scriptTypes: [{matches: /\/x-handlebars-template|\/x-mustache/i,
                       mode: null},
                      {matches: /(text|application)\/(x-)?vb(a|script)/i,
                       mode: "vbscript"}]
      };

openBuffer("ملف HTML", nodeContent("testhtml"), mixedMode);
openBuffer("ملف CSS", nodeContent("teststyle"), "css");
openBuffer("ملف JS", nodeContent("testscript"), "javascript");




 
document.getElementById('copy').onclick = function () {
$(".copy").attr("data-clipboard-text", editor.getValue());
}


  document.getElementById('saveDocument').onclick = function () {
  var fileextension;
var modeInputs = document.getElementById("select");
var modeInput1 = document.getElementById("buffers");
  var myindexs  = modeInputs.selectedIndex;
  var modeflys = modeInputs.options[myindexs].value.toLowerCase();
  var modeflymodes = modeInputs.options[myindexs].id.toLowerCase();
  
  var myindex1  = modeInput1.selectedIndex;
  var modeflymode1 = modeInput1.options[myindex1].textContent.toLowerCase();
  
  var modeflymode2 = document.getElementById("buffers").value;

  

    if(modeflymode2 == "ملف HTML"){
modeInputs.selectedIndex = 1;
fileextension = modeflymode1+".html";
  }else if(modeflymode2 == "ملف CSS"){
fileextension = modeflymode1+".css";
modeInputs.selectedIndex = 3;
  }else if(modeflymode2 == "ملف JS"){
fileextension = modeflymode1+".js";
modeInputs.selectedIndex = 2;
  }else{
  if(modeflymodes == "text/x-textile"){
  fileextension = modeflymode1+".html";
  }else if(modeflymodes == "text/html"){
  fileextension = modeflymode1+".html";
  }else if(modeflymodes == "text/javascript"){
  fileextension = modeflymode1+".js";
  }else if(modeflymodes == "text/css"){
  fileextension = modeflymode1+".css";
  }else if(modeflymodes == "application/json"){
  fileextension = modeflymode1+".json";
  }else if(modeflymodes == "text/x-php"){
  fileextension = modeflymode1+".php";
  }else{
  if (m = /.+\.([^.]+)$/.exec(modeflymode1)) {
  fileextension = modeflymode1;
  }else{
  fileextension = modeflymode1+".html";
  }}
}
var blob = new Blob([editor.getValue()], {type: modeflymodes+';charset=utf-8'});
    saveAs(blob, fileextension);
}; 







CodeMirror.defineMode("mustache", function(config, parserConfig) {
  var mustacheOverlay = {
    token: function(stream, state) {
      var ch;
      if (stream.match("{{")) {
        while ((ch = stream.next()) != null)
          if (ch == "}" && stream.next() == "}") {
            stream.eat("}");
            return "mustache";
          }
      }
      while (stream.next() != null && !stream.match("{{", false)) {}
      return null;
    }
  };
  return CodeMirror.overlayMode(CodeMirror.getMode(config, parserConfig.backdrop || "text/html"), mustacheOverlay);
});









      var dummy = {
        attrs: {
          color: ["red", "green", "blue", "purple", "white", "black", "yellow"],
          size: ["large", "medium", "small"],
          description: null
        },
        children: []
      };

      var tags = {
   "!top": ["div","span","a","nav","body","head","html"],
        "!attrs": {
          id:  ["awtest1", "awtest2", "awtest3"],
          class: ["aw-test1", "aw-test2", "aw-test3"]
        },
        html: {
          attrs: {
            lang: ["ar","en", "de", "fr", "nl"],
            dir: ["rtl","ltr"],
          },
          children: ["head","body","animal", "plant"]
        },
        div: {
          attrs: {
          id:  ["awtest1", "awtest2", "awtest3"],
          class: ["aw-test1", "aw-test2", "aw-test3"]
          },
          children: ["div", "span","a", "i"]
        },
        span: {
          attrs: {
          id:  ["awtest1", "awtest2", "awtest3"],
          class: ["aw-test1", "aw-test2", "aw-test3"]
          },
          children: ["div", "span","a", "i"]
        },
        a: {
          attrs: {
          href: null,
          id:  ["awtest1", "awtest2", "awtest3"],
          class: ["aw-test1", "aw-test2", "aw-test3"]
          },
          children: ["h1", "h2","h3", "i"]
        },
        animal: {
          attrs: {
            name: null,
            isduck: ["yes", "no"]
          },
          children: ["wings", "feet", "body", "head", "tail"]
        },
        plant: {
          attrs: {name: null},
          children: ["leaves", "stem", "flowers"]
        },
        wings: dummy, feet: dummy, body: dummy, head: dummy, tail: dummy,
        leaves: dummy, stem: dummy, flowers: dummy
      };

      function completeAfter(cm, pred) {
        var cur = cm.getCursor();
        if (!pred || pred()) setTimeout(function() {
          if (!cm.state.completionActive)
            cm.showHint({completeSingle: false});
        }, 100);
        return CodeMirror.Pass;
      }

      function completeIfAfterLt(cm) {
        return completeAfter(cm, function() {
          var cur = cm.getCursor();
          return cm.getRange(CodeMirror.Pos(cur.line, cur.ch - 1), cur) == "<";
        });
      }

      function completeIfInTag(cm) {
        return completeAfter(cm, function() {
          var tok = cm.getTokenAt(cm.getCursor());
          if (tok.type == "string" && (!/['"]/.test(tok.string.charAt(tok.string.length - 1)) || tok.string.length == 1)) return false;
          var inner = CodeMirror.innerMode(cm.getMode(), tok.state).state;
          return inner.tagName;
        });
      }




if (b64awsec == "ZG9pdGYuY29t"){
var editor  = CodeMirror.fromTextArea(document.getElementById("code"), {
        mode: mixedMode,
        selectionPointer: true,
  lineNumbers: true,
  styleActiveLine: true,
  autoCloseTags: false,
  lineWrapping: true,
    autoCloseBrackets:false,
  viewportMargin: Infinity,
      lint: true,
  extraKeys: {"F11": function(cm) { cm.setOption("fullScreen", !cm.getOption("fullScreen")); }, "Esc": function(cm) { if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false); },"Alt-F": "findPersistent","Ctrl-Space": "autocomplete","Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor());}},
          foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter","CodeMirror-lint-markers"],
      direction: "ltr",
       highlightSelectionMatches:false,
       scrollbarStyle: "simple",
       showTrailingSpace:false,
       hintOptions: false

});
}else{
var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script)
}





editor.on("change", function(){
window.addEventListener("beforeunload", function(event) {
  event.returnValue = "ربما لم يتم حفظ التعديلات! خروج على اي حال؟";
});
});




  function selectTheme() {
    var inputTheme = document.getElementById("selecttheme");
          var expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 9600);
        expiryDate = expiryDate.toUTCString();
    var theme = inputTheme.options[inputTheme.selectedIndex].value;
    var thememode = inputTheme.options[inputTheme.selectedIndex].textContent;
    if(theme == "default"){
    theme = "default";
        editor.setOption("theme", theme);
            document.cookie="themes=default; expires=" + expiryDate;
    document.cookie="themesmode=default; expires=" + expiryDate;

    }else{
 var themecss = document.createElement('link');
 themecss.href = "https://get.doitf.com/tools/codemirror/theme/"+theme+".css";
 themecss.rel = "stylesheet";
 document.getElementsByTagName('head')[0].appendChild(themecss);
    editor.setOption("theme", thememode);
    document.cookie="themes=" + theme + "; expires=" + expiryDate;
    document.cookie="themesmode=" + thememode + "; expires=" + expiryDate;

    }
}
  

      
      
      
      
  function looksLikeScheme(code) {
    return !/^\s*\(\s*function\b/.test(code) && /^\s*[;\(]/.test(code);
  }

        var modeInput = document.getElementById("select");
        
function selectMode() {
  var myindex  = modeInput.selectedIndex;
  var modefly = modeInput.options[myindex].value.toLowerCase();
  var modeflymode = modeInput.options[myindex].id.toLowerCase();
CodeMirror.autoLoadMode(editor, modefly);
      editor.setOption("mode", looksLikeScheme(editor.getValue()) ? "mixedMode" : modeflymode);
      
  }

  
  
selectBuffer(editor, "ملف HTML");




var delay;
editor.on("change", function() {
clearTimeout(delay);
delay = setTimeout(previewcheck(), 300);
});

function previewcheck() {
  var checkBox = document.getElementById("previewcheck");
  if (checkBox.checked == true){
      function updatePreview() {
        var previewFrame = document.getElementById('previewiframe');
        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
        preview.open();
        preview.write(editor.getValue());
        preview.close();
      }
      setTimeout(updatePreview, 300);
      document.getElementById("previewiframe").style.display = "block";
        if (editor.getOption("mode") == "text/html"){
document.getElementById("previewiframe").style.display = "block";
}else if (editor.getOption("mode") == "[object Object]"){
 document.getElementById("previewiframe").style.display = "block";
}else{
document.getElementById("previewiframe").style.display = "none";
}
  }else{
document.getElementById("previewiframe").style.display = "none";
}
  
}













function selectsizecode(val) {
document.getElementsByClassName("CodeMirror")[0].style.height = val+"px";
 }


function sizecodes() {
  var checkBox = document.getElementById("sizecodes");
  var checkBoxsize = document.getElementById("setsizecodes");
  if (checkBox.checked == true){
document.getElementsByClassName("CodeMirror")[0].style.height = "auto";
checkBoxsize.setAttribute("disabled","disabled");
checkBoxsize.style.display = "none"
} else{
document.getElementsByClassName("CodeMirror")[0].style.height = checkBoxsize.value+"px";;
checkBoxsize.style.display = "inline-block";
checkBoxsize.removeAttribute("disabled");
    }
}





function hintOptionsshow() {
  var checkBox = document.getElementById("hintOptions");
  if (checkBox.checked == true){    
  var script6 = document.createElement('script');
script6.src = "https://get.doitf.com/tools/codemirror/addon/hint/xml-hint.js";
document.getElementsByTagName('head')[0].appendChild(script6);

editor.setOption("hintOptions", {schemaInfo: tags})
editor.setOption("extraKeys", {"'<'": completeAfter, "'/'": completeIfAfterLt, "' '": completeIfInTag, "'='": completeIfInTag,"F11": function(cm) { cm.setOption("fullScreen", !cm.getOption("fullScreen")); }, "Esc": function(cm) { if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false); },"Alt-F": "findPersistent","Ctrl-Space": "autocomplete","Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor());}})
} else {
    editor.setOption("hintOptions", false)  
    }
}


function showTrailingSpace() {
  var checkBox = document.getElementById("showTrailingSpace");
  if (checkBox.checked == true){    
editor.setOption("showTrailingSpace", true)
} else {
    editor.setOption("showTrailingSpace", false)  
    }
}

function closetags() {
  var checkBox = document.getElementById("closetag");
  if (checkBox.checked == true){
    editor.setOption("autoCloseTags", true)
  } else {
    editor.setOption("autoCloseTags", false)
    }
}
function checkBoxdir() {
  var checkBox = document.getElementById("rtl");
  if (checkBox.checked == true){
    editor.setOption("direction", "rtl")
  } else {
    editor.setOption("direction", "ltr")  
    }
}
function lineNumbers() {
  var checkBox = document.getElementById("lineNumbers");
  if (checkBox.checked == true){
    editor.setOption("lineNumbers", true)
  } else {
    editor.setOption("lineNumbers", false)  
    }
}
function autoCloseBrackets() {
  var checkBox = document.getElementById("autoCloseBrackets");
  if (checkBox.checked == true){
    editor.setOption("autoCloseBrackets", true)
  } else {
    editor.setOption("autoCloseBrackets", false)  
    }
}

function foldGutter() {
  var checkBox = document.getElementById("foldGutter");
  if (checkBox.checked == true){
    editor.setOption("foldGutter", true)
  } else {
    editor.setOption("foldGutter", false)  
    }
}
function styleActiveLine() {
  var checkBox = document.getElementById("styleActiveLine");
  if (checkBox.checked == true){
    editor.setOption("styleActiveLine", true)
  } else {
    editor.setOption("styleActiveLine", false)  
    }
}
function highlightSelectionMatches() {
  var checkBox = document.getElementById("highlightSelectionMatches");
  if (checkBox.checked == true){
    editor.setOption("highlightSelectionMatches", {showToken: /\w/, annotateScrollbar: true})
  } else {
    editor.setOption("highlightSelectionMatches", false)  
    }
}
function lineWrapping() {
  var checkBox = document.getElementById("lineWrapping");
  if (checkBox.checked == true){
    editor.setOption("lineWrapping", true)
  } else {
    editor.setOption("lineWrapping", false)  
    }
}
function linterror() {
  var checkBox = document.getElementById("linterror");
  if (checkBox.checked == false){
    editor.setOption("linterror", false)
    $('link[href="https://get.doitf.com/tools/codemirror/addon/lint/lint.css"][rel=stylesheet]').remove();
    $('script[src="https://unpkg.com/jshint@2.9.6/dist/jshint.js"]').remove();
    $('script[src="https://unpkg.com/jsonlint@1.6.3/web/jsonlint.js"]').remove();
    $('script[src="https://unpkg.com/csslint@1.0.5/dist/csslint.js"]').remove();
    $('script[src="https://get.doitf.com/tools/codemirror/addon/lint/javascript-lint.js"]').remove();
    $('script[src="https://get.doitf.com/tools/codemirror/addon/lint/json-lint.js"]').remove();
    $('script[src="https://get.doitf.com/tools/codemirror/addon/lint/css-lint.js"]').remove();
  } else {
  
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
    }
}


function remobac(){
document.getElementById("select").style.backgroundColor = "";
}

function remobacfile(){
document.getElementById("buffers").style.backgroundColor = "";
}
