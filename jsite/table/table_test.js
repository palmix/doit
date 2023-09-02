function bordercellf() {
document.getElementById("bordertables").checked = false;
document.getElementById("bordershow").checked = false;
}
function bordertablef() {
document.getElementById("bordercells").checked = false;
}
function bordershowf() {
document.getElementById("bordercells").checked = false;
}


function alltablesave() {
    var texttablesave = document.getElementById('alltablesave').value;
    var setTextsave = document.getElementById(texttablesave).value;
    var awOldTextsave = document.getElementById('awOldText');
    awOldTextsave.value = setTextsave;
}
document.getElementById("clicks").addEventListener("click", function() {

    var texttablesave = document.getElementById('awOldText').value;




    var n = $(".awsavetable").length;
    var texttablesaves = document.getElementById('alltablesave').value;
    var setTextsavec = "";
    if (texttablesaves.length) {
        setTextsavec = document.getElementById(texttablesaves).value;
    }
    var awOldTextsave = document.getElementById('awOldText');



    if (texttablesave.length > 0 && setTextsavec != awOldTextsave.value) {


        document.getElementById("tablessaved").innerHTML += "<textarea style='display:none' class='awsavetable' id='awsave" + n + "' name='awOldText' rows='0' cols='0'>" + texttablesave + "</textarea>";

        var o = new Option("option text", "awsave" + n);
        $(o).html("رقم الجدول " + (n + 1));
        $("#alltablesave").append(o);
        document.getElementById('alltablesave').selectedIndex = n;
        $('#collapsavetable').collapse('show');
    }
})



document.getElementById("awClearText").addEventListener("click", function() {
    document.getElementById("awOldText").value = "";
    document.getElementById("awOldText").focus();
});

function showadvdesign() {
    var checkBox = document.getElementById("advdesign");
    if (checkBox.checked == true) {
        $('#collapseadvdesign').collapse('show');
        $('#tableDesign').attr("disabled", "disabled");
        $('#tableColor').attr("disabled", "disabled");
        $('#basicdesign').collapse('hide');
    } else {
        $('#basicdesign').collapse('show');
        $('#collapseadvdesign').collapse('hide');
        $('#tableDesign').removeAttr("disabled", "disabled");
        $('#tableColor').removeAttr("disabled", "disabled");
        $('#textforcellscollapse').collapse('hide');
        document.getElementById("textforcells").checked = false;
    }
}




function displayCustomSep() {
    var lineSep = document.getElementById("lineSep").value;
    if (lineSep == "CustomSep") {
        $('.displayCustomSep').removeClass("displayCSnone");
        document.getElementById("CustomSep").focus();
    } else {
        $('.displayCustomSep').addClass("displayCSnone");
    }
}

function backgroundrows2() {
    var backgroundrows2 = document.getElementById("backgroundrows2");	
	var desigs = $(".desig.active");
	var desig = $("input[name=desig]",desigs).val();

	
	
    if (desig == "custom") {
        if (backgroundrows2.checked == true) {
            $('#html5color8').removeAttr("disabled", "disabled");
            $('#tablecolor8').removeAttr("disabled", "disabled");
            $('#backgroundrows1').html("خلفية الصفوف 1");

        } else {
            $('#html5color8').attr("disabled", "disabled");
            $('#tablecolor8').attr("disabled", "disabled");
            $('#backgroundrows1').html("خلفية الصفوف");
        }


    }
}




var editor = CodeMirror.fromTextArea(document.getElementById("newCode"), {
    mode: "text/html",
    readOnly: true,
    htmlMode: true,
    lineNumbers: true,
    lineWrapping: true,
    smartIndent: false,
    addModeClass: true

});

function b64EncodeUnicode(e) {
    return btoa(unescape(encodeURIComponent(e)))
}

function b64DecodeUnicode(e) {
    return decodeURIComponent(escape(atob(e)))
}
var awsec = window.location.hostname,
    awsecdom = awsec.substring(awsec.lastIndexOf(".", awsec.lastIndexOf(".") - 1) + 1),
    b64awsec = b64EncodeUnicode(awsecdom);
var html5color1 = document.getElementById('html5color1');
var html5color2 = document.getElementById('html5color2');
var html5color3 = document.getElementById('html5color3');
var html5color4 = document.getElementById('html5color4');
var html5color4hover = document.getElementById('html5color4hover');
var html5color5 = document.getElementById('html5color5');
var html5color6 = document.getElementById('html5color6');
var html5color7 = document.getElementById('html5color7');
var html5color8 = document.getElementById('html5color8');

var colorbox1 = document.getElementById('tablecolor1');
var colorbox2 = document.getElementById('tablecolor2');
var colorbox3 = document.getElementById('tablecolor3');
var colorbox4 = document.getElementById('tablecolor4');
var colorbox4hover = document.getElementById('tablecolor4hover');
var colorbox5 = document.getElementById('tablecolor5');
var colorbox5hover = document.getElementById('tablecolor5hover');
var colorbox6 = document.getElementById('tablecolor6');
var colorbox7 = document.getElementById('tablecolor7');
var colorbox8 = document.getElementById('tablecolor8');


function tablecolor1() {
    document.getElementById('tablecolor1').value = html5color1.value;
}

function tablecolor2() {
    document.getElementById('tablecolor2').value = html5color2.value;
}

function tablecolor3() {
    document.getElementById('tablecolor3').value = html5color3.value;
}

function tablecolor4() {
    document.getElementById('tablecolor4').value = html5color4.value;
}
function tablecolor4hover() {
    document.getElementById('tablecolor4hover').value = html5color4hover.value;
}

function tablecolor5() {
    document.getElementById('tablecolor5').value = html5color5.value;
}

function tablecolor5hover() {
    document.getElementById('tablecolor5hover').value = html5color5hover.value;
}

function tablecolor6() {
    document.getElementById('tablecolor6').value = html5color6.value;
}

function tablecolor7() {
    document.getElementById('tablecolor7').value = html5color7.value;
}

function tablecolor8() {
    document.getElementById('tablecolor8').value = html5color8.value;
}

document.addEventListener('DOMContentLoaded', function() {

    var sizeCols = "";
    var sizeRows = "";
    var tableColor = "";
    var tableColor2 = "";
    var tableColor2b = "";
    var tableDesign = "";
    var tableInfo = "";
    var comsc = "";
    var tableHighlight = "";
    var tabletrhover = "";
    var tableJS = "";
    var tableCSS = "";
    var tableHTML = "";
    var pageTableHTML = "";
    var tableEND = "";
    var newTable = "";
    var newTableCode = "";
    var awHighlight = "";
    var awHighlightb = "";

    var textaligntable;
    var textaligncells;
    var borderawtable;
    var backgroundtable;
    var borderth;
    var backgroundtr;
    var bordertd;
    var backgroundtrhover;
    var thfontsize;
    var tdfontsize;
    var awtableborderwidth;
    var thawtableborderwidth;
    var tdawtableborderwidth;
    var awtablewidthpx;
    var awtablewidthpercent;
    var awtablewidth;
    var awtablethpadding;
    var awtabletdpadding;
    var awtablecolor;
    var awtablecolorhover;
    var tdtablecolor;
    var tdtablecolorhover;
    var selectfontfamily;
    var selectfontfamilycells;
    var awtablefontsize;
    var awtdfontsize;
    var backgroundrows2;
    var dirtable;
    var cellbacolor;
    var bordershow;
    var placetitle;
    var textforcellsshow;
    var comscss;
	var tapcss = '';
    var bordercell;
    var bordercells;
    var bordertable;
    var bordertables;
    var BorderStyle;
    var BorderWidth;	
    var switchtablecolor4hover;	

    function makeTableCode() {
        if (b64awsec == "ZG9pdGYuY29t") {
			var desigs = $(".desig.active");
			var desig = $("input[name=desig]",desigs).val();
            //Make variables
            var lineSep = document.getElementById("lineSep").value;
            var CustomSep = document.getElementById("CustomSep").value;
            //Get old text
            var awOldText = document.getElementById("awOldText").value;
            //Split into lines
            var awOldTextArr = awOldText.split("\n");
            var awNewText = "";
            comsc = document.getElementById('comsc');
            comscss = document.getElementById('comscss');
            if (comsc.checked === true) {
                comsc = '';
            } else {
                comsc = '\n';
            }
            if (comscss.checked === true) {
                comscss = '';
                tapcss = '';
            } else {
                comscss = '\n';
                tapcss = '\t';
            }
            //Get rid of quotes at beginning and end
            for (i = 0; i < awOldTextArr.length; i++) {
                awOldTextArr[i] = awOldTextArr[i].replace(/\r/, "");
                awOldTextArr[i] = awOldTextArr[i].replace(/^\'/, "");
                awOldTextArr[i] = awOldTextArr[i].replace(/^\"/, "");
                awOldTextArr[i] = awOldTextArr[i].replace(/"$/, "");
                awOldTextArr[i] = awOldTextArr[i].replace(/'$/, "");
				awOldTextArr[i] = "<tr>" + comsc + "<td>" + awOldTextArr[i] + "</td>" + comsc + "</tr>";
            }
            //Separators
            if (lineSep == "comma") {
                var linesep = ",";
            } else if (lineSep == "commaar") {
                var linesep = "،";
            } else if (lineSep == "tab") {
                var linesep = "	";
            } else if (lineSep == "CustomSep") {
                if (CustomSep == "") {
                    linesep = ",";
                } else {
                    var linesep = "\\" + CustomSep;
                }
            } else if (lineSep == "quotecomma") {
                var linesep = '","';
            } else if (lineSep == "quotespace") {
                var linesep = "\\|";
            } else if (lineSep == "space") {
                var linesep = ' ';
            } else {
                var linesep = ' ';
            }

            //make table
            for (i = 0; i < awOldTextArr.length; i++) {
                awOldTextArr[i] = awOldTextArr[i].replace(new RegExp(linesep, "gi"), "</td>" + comsc + "<td>");
                awNewText = awNewText + awOldTextArr[i] + comsc;
            }
            var editonline = document.getElementById('editonline');
            bordershow = document.getElementById("bordershow");
            bordercells = document.getElementById("bordercells");
            bordertables = document.getElementById("bordertables");
            textforcellsshow = document.getElementById("textforcells");
            awtablefontsize = document.getElementById('awtablefontsize').value;
            bordercell = document.getElementById('bordercell').value;
            bordertable = document.getElementById('bordertable').value;
            backgroundrows2 = document.getElementById('backgroundrows2');
            awtdfontsize = document.getElementById('awtdfontsize').value;
            BorderWidth = document.getElementById('BorderWidth').value;
            selectfontfamily = document.getElementById('selectfontfamily').value;
            selectfontfamilycells = document.getElementById('selectfontfamilycells').value;
            tableColor = document.getElementById('tableColor').value;
            tableDesign = document.getElementById('tableDesign').value;
            sizeCols = document.getElementById('sizeCols').value;
            sizeRows = document.getElementById('sizeRows').value;
            textaligntable = document.getElementById('textaligntable').value;
            textaligncells = document.getElementById('textaligncells').value;
            dirtable = document.getElementById('dirtable').value;
            BorderStyle = document.getElementById('BorderStyle').value;
            cellbacolor = document.getElementById('cellbacolor');
            placetitle = document.getElementById('placetitle');
            switchtablecolor4hover = document.getElementById('switchtablecolor4hover');
			
			
            if (sizeCols <= 0) {
                sizeCols = "1";
                document.getElementById('sizeCols').value = "1";
            }
            if (sizeCols >= 999) {
                sizeCols = "999";
                document.getElementById('sizeCols').value = "999";
            }
            if (sizeRows <= 0) {
                sizeRows = "1";
                document.getElementById('sizeRows').value = "1";
            }
            if (sizeRows >= 999) {
                sizeRows = "999";
                document.getElementById('sizeRows').value = "999";
            }
            if (awtablefontsize <= 9) {
                awtablefontsize = "9";
                document.getElementById('awtablefontsize').value = "9";
            }
            if (awtdfontsize <= 9) {
                awtdfontsize = "9";
                document.getElementById('awtdfontsize').value = "9";
            }
            tableInfo = document.getElementById('tableInfo');
            tableHighlight = document.getElementById('tableHighlight');
			tabletrhover = document.getElementById('tabletrhover');
            tableCSS = "";

            if (tableColor == "Blue") {

                borderawtable = '#729ea5;';
                backgroundtable = '#acc8cc;';
                borderth = '#d4e3e5;';
                backgroundtr = '#d4e3e5;';
                bordertd = '#729ea5;';
                backgroundtrhover = '#ffffff;';
                awtablecolor = '#000;';
                tdtablecolor = '#000;';


                if (tableDesign == "alternating") {
                    backgroundtable = '#acc8cc;';
                } else if (tableDesign == "minimal") {
                    backgroundtable = '#729ea5;';
                    backgroundtr = 'none;';
                    backgroundtrhover = '#d4e3e5;';
                } else if (tableDesign == "noStyle") {
                    tableCSS = "";
                }

            } else if (tableColor == "Green") {


                borderawtable = '#9dcc7a;';
                backgroundtable = '#abd28e;';
                borderth = '#9dcc7a;';
                backgroundtr = '#bedda7;';
                bordertd = '#9dcc7a;';
                backgroundtrhover = '#ffffff;';
                awtablecolor = '#333333;';
                tdtablecolor = '#333333;';
                if (tableDesign == "alternating") {
                    backgroundtable = '#abd28e;';
                } else if (tableDesign == "minimal") {
                    backgroundtable = '#abd28e;';
                    backgroundtr = 'none';
                    backgroundtrhover = '#abd28e;';
                } else if (tableDesign == "noStyle") {
                    tableCSS = "";
                }




            } else if (tableColor == "Grey") {


                awtablecolor = '#333333;';
                borderawtable = '#a9a9a9;';
                backgroundtable = '#b8b8b8;';
                borderth = '#a9a9a9;';
                backgroundtr = '#cdcdcd;';
                bordertd = '#a9a9a9;';
                backgroundtrhover = '#ffffff;';
                tdtablecolor = '#333333;';

                if (tableDesign == "alternating") {

                } else if (tableDesign == "minimal") {
                    backgroundtable = '#b8b8b8;';
                    backgroundtr = 'none;';
                    backgroundtrhover = '#b8b8b8;';
                } else if (tableDesign == "noStyle") {
                    tableCSS = "";
                }

            } else if (tableColor == "Orange") {




                awtablecolor = '#333333;';
                tdtablecolor = '#333333;';
                borderawtable = '#ebab3a;';
                backgroundtable = '#e6983b;';
                borderth = '#ebab3a;';
                backgroundtr = '#f0c169;';
                bordertd = '#ebab3a;';
                backgroundtrhover = '#ffffff;';
                if (tableDesign == "alternating") {

                } else if (tableDesign == "minimal") {
                    backgroundtable = '#e6983b;';
                    backgroundtr = 'none;';
                    backgroundtrhover = '#e6983b;';
                } else if (tableDesign == "noStyle") {
                    tableCSS = "";
                }

            } else if (tableColor == "Brown") {




                awtablecolor = '#333333;';
                tdtablecolor = '#333333;';
                borderawtable = '#bcaf91;';
                backgroundtable = '#ded0b0;';
                borderth = '#bcaf91;';
                backgroundtr = '#e9dbbb;';
                bordertd = '#bcaf91;';
                backgroundtrhover = '#ffffff;';
                if (tableDesign == "alternating") {

                } else if (tableDesign == "minimal") {
                    backgroundtable = '#bcaf91;';
                    backgroundtr = 'none;';
                    backgroundtrhover = '#bcaf91;';
                } else if (tableDesign == "noStyle") {
                    tableCSS = "";
                }



            } else if (tableColor == "Black") {

                awtablecolor = '#fbfbfb;';
                tdtablecolor = '#fbfbfb;';
                borderawtable = '#686767;';
                backgroundtable = '#171515;';
                borderth = '#686767;';
                backgroundtr = '#2f2f2f;';
                bordertd = '#686767;';
                backgroundtrhover = '#171515;';
                if (tableDesign == "alternating") {

                } else if (tableDesign == "minimal") {
                    backgroundtable = '#686767;';
                    backgroundtr = 'none;';
                    backgroundtrhover = '#686767;';
                    tdtablecolor = '#000;';
                    awtablecolor = '#fbfbfb;';
                } else if (tableDesign == "noStyle") {
                    tableCSS = "";
                }



            }
            if (desig == 'custom') {
                awtablecolor = colorbox4.value + ';';
                awtablecolorhover = colorbox4hover.value + ';';
                tdtablecolor = colorbox5.value + ';';
                tdtablecolorhover = colorbox5hover.value + ';';
                borderawtable = colorbox3.value + ';';
                backgroundtable = colorbox1.value + ';';
                borderth = colorbox3.value + ';';
                backgroundtr = colorbox2.value + ';';
                bordertd = colorbox3.value + ';';
                backgroundtrhover = colorbox6.value + ';';
                html5color1.value = colorbox1.value;
                html5color2.value = colorbox2.value;
                html5color3.value = colorbox3.value;
                html5color4.value = colorbox4.value;
                html5color4hover.value = colorbox4hover.value;
                html5color5.value = colorbox5.value;
                html5color5hover.value = colorbox5hover.value;
                html5color6.value = colorbox6.value;
                html5color7.value = colorbox7.value;
                html5color8.value = colorbox8.value;
            }




            thfontsize = 12;
            tdfontsize = 12;
            if (desig == 'custom') {
                thfontsize = awtablefontsize;
                tdfontsize = awtdfontsize;
            }

            awtableborderwidth = 1;
            thawtableborderwidth = 1;
            tdawtableborderwidth = 1;

            awtablewidthpx = 'px;';
            awtablewidthpercent = '%;';
            awtablewidth = 100;

            awtablethpadding = 8;
            awtabletdpadding = 8;


var allfonts = '';
var ffctf,ffhtf;
var ffh = selectfontfamily;
var ffc = selectfontfamilycells;



if (ffh == "Open Sans" || ffh == "Russo One" || ffh == "Antic Slab" || ffh == "Comfortaa" || ffh == "Shadows Into Light" || ffh == "Monda" || ffh == "Righteous" || ffh == "Maven Pro" || ffh == "Bangers" || ffh == "Architects Daughter" || ffh == "Kalam" || ffh == "Great Vibes" || ffh == "Patrick Hand" || ffh == "Pangolin" || ffh == "Lobster" || ffh == "Bebas Neue" || ffh == "Exo 2" || ffh == "Do Hyeon" || ffh == "Fredoka One" || ffh == "Caveat" || ffh == "Rajdhani"){
ffhtf = true;
}else{
ffhtf = false;
}
if (ffc == "Open Sans" || ffc == "Russo One" || ffc == "Antic Slab" || ffc == "Comfortaa" || ffc == "Shadows Into Light" || ffc == "Monda" || ffc == "Righteous" || ffc == "Maven Pro" || ffc == "Bangers" || ffc == "Architects Daughter" || ffc == "Kalam" || ffc == "Great Vibes" || ffc == "Patrick Hand" || ffc == "Pangolin" || ffc == "Lobster" || ffc == "Bebas Neue" || ffc == "Exo 2" || ffc == "Do Hyeon" || ffc == "Fredoka One" || ffc == "Caveat" || ffc == "Rajdhani"){
ffctf = true;
}else{
ffctf = false;
}





if(ffhtf == true || ffctf == true){
 ffh = selectfontfamily.replace(/ /ig, "+");
 ffc = selectfontfamilycells.replace(/ /ig, "+");
 
	if(selectfontfamily == selectfontfamilycells){
		allfonts = "family="+ffh;
	}else if(ffhtf == true && ffctf == false){
		allfonts = "family="+ffh;
	}else if(ffhtf == false && ffctf == true ){
		allfonts = "family="+ffc;
	}else {
		allfonts = "family="+ ffh + "&family=" + ffc;
	}
}



			if (desig == 'custom' && ffhtf == true){
            if (selectfontfamily == "Open Sans") {
				selectfontfamily = "'Open Sans', sans-serif";
			}else if(selectfontfamily == "Pangolin") {
				selectfontfamily = "'Pangolin', cursive";
			}else if(selectfontfamily == "Russo One") {
				selectfontfamily = "'Russo One', sans-serif";
			}else if(selectfontfamily == "Lobster") {
				selectfontfamily = "'Lobster', cursive;";
			}else if(selectfontfamily == "Antic Slab") {
				selectfontfamily = "'Antic Slab', serif";
			}else if(selectfontfamily == "Bebas Neue") {
				selectfontfamily = "'Bebas Neue', cursive";
			}else if(selectfontfamily == "Comfortaa") {
				selectfontfamily = "'Comfortaa', cursive";
			}else if(selectfontfamily == "Exo 2") {
				selectfontfamily = "'Exo 2', sans-serif";
			}else if(selectfontfamily == "Shadows Into Light") {
				selectfontfamily = "'Shadows Into Light', cursive";
			}else if(selectfontfamily == "Do Hyeon") {
				selectfontfamily = "'Do Hyeon', sans-serif";
			}else if(selectfontfamily == "Monda") {
				selectfontfamily = "'Monda', sans-serif";
			}else if(selectfontfamily == "Fredoka One") {
				selectfontfamily = "'Fredoka One', cursive";
			}else if(selectfontfamily == "Righteous") {
				selectfontfamily = "'Righteous', cursive";
			}else if(selectfontfamily == "Caveat") {
				selectfontfamily = "'Caveat', cursive";
			}else if(selectfontfamily == "Maven Pro") {
				selectfontfamily = "'Maven Pro', sans-serif";
			}else if(selectfontfamily == "Rajdhani") {
				selectfontfamily = "'Rajdhani', sans-serif";
			}else if(selectfontfamily == "Bangers") {
				selectfontfamily = "'Bangers', cursive";
			}else if(selectfontfamily == "Architects Daughter") {
				selectfontfamily = "'Architects Daughter', cursive";
			}else if(selectfontfamily == "Kalam") {
				selectfontfamily = "'Kalam', cursive";
			}else if(selectfontfamily == "Great Vibes") {
				selectfontfamily = "'Great Vibes', cursive";
			}else if(selectfontfamily == "Patrick Hand") {
				selectfontfamily = "'Patrick Hand', cursive";
			}

			}
	
			if (desig == 'custom' && ffctf == true){
            if (selectfontfamilycells == "Open Sans") {
				selectfontfamilycells = "'Open Sans', sans-serif";
			}else if(selectfontfamilycells == "Pangolin") {
				selectfontfamilycells = "'Pangolin', cursive";
			}else if(selectfontfamilycells == "Russo One") {
				selectfontfamilycells = "'Russo One', sans-serif";
			}else if(selectfontfamilycells == "Lobster") {
				selectfontfamilycells = "'Lobster', cursive;";
			}else if(selectfontfamilycells == "Antic Slab") {
				selectfontfamilycells = "'Antic Slab', serif";
			}else if(selectfontfamilycells == "Bebas Neue") {
				selectfontfamilycells = "'Bebas Neue', cursive";
			}else if(selectfontfamilycells == "Comfortaa") {
				selectfontfamilycells = "'Comfortaa', cursive";
			}else if(selectfontfamilycells == "Exo 2") {
				selectfontfamilycells = "'Exo 2', sans-serif";
			}else if(selectfontfamilycells == "Shadows Into Light") {
				selectfontfamilycells = "'Shadows Into Light', cursive";
			}else if(selectfontfamilycells == "Do Hyeon") {
				selectfontfamilycells = "'Do Hyeon', sans-serif";
			}else if(selectfontfamilycells == "Monda") {
				selectfontfamilycells = "'Monda', sans-serif";
			}else if(selectfontfamilycells == "Fredoka One") {
				selectfontfamilycells = "'Fredoka One', cursive";
			}else if(selectfontfamilycells == "Righteous") {
				selectfontfamilycells = "'Righteous', cursive";
			}else if(selectfontfamilycells == "Caveat") {
				selectfontfamilycells = "'Caveat', cursive";
			}else if(selectfontfamilycells == "Maven Pro") {
				selectfontfamilycells = "'Maven Pro', sans-serif";
			}else if(selectfontfamilycells == "Rajdhani") {
				selectfontfamilycells = "'Rajdhani', sans-serif";
			}else if(selectfontfamilycells == "Bangers") {
				selectfontfamilycells = "'Bangers', cursive";
			}else if(selectfontfamilycells == "Architects Daughter") {
				selectfontfamilycells = "'Architects Daughter', cursive";
			}else if(selectfontfamilycells == "Kalam") {
				selectfontfamilycells = "'Kalam', cursive";
			}else if(selectfontfamilycells == "Great Vibes") {
				selectfontfamilycells = "'Great Vibes', cursive";
			}else if(selectfontfamilycells == "Patrick Hand") {
				selectfontfamilycells = "'Patrick Hand', cursive";
			}

			}	
	
	

            tableCSS += '<style type="text/css">' + comscss;
			
			if (desig == 'custom' && (ffhtf == true || ffctf == true)){
				
				tableCSS += tapcss +"@import url('https://fonts.googleapis.com/css2?" + allfonts + "&display=swap');" + comscss;
			}
            tableCSS += tapcss +'.awtable{'+comscss;
            tableCSS += tapcss+tapcss+'color:' + awtablecolor + comscss;
            if (desig == 'custom' && bordertables.checked == true) {
                    tableCSS += tapcss+tapcss+'border-radius:' + bordertable + 'px;'+ comscss;
                    tableCSS += tapcss+tapcss+'overflow:hidden;'+ comscss;
            }
            if (dirtable == "right") {
                 tableCSS += 'direction:rtl;'+comscss;
             } else if (dirtable == "left") {
				 tableCSS += 'direction:ltr;'+comscss;
             }

            tableCSS += tapcss+tapcss+'width:' + awtablewidth + awtablewidthpercent + comscss;
            if (desig == 'custom') {
                if (bordershow.checked == true) {
                    tableCSS += tapcss+tapcss+'border-width:' + awtableborderwidth + 'px;'+ comscss;
                    tableCSS += tapcss+tapcss+'border-color:' + borderawtable + comscss;
                }else{
                    tableCSS += tapcss+tapcss+'border-width:0px;'+ comscss;
				}
            } else if(desig == 'simple'){
                tableCSS += tapcss+tapcss+'border-width:' + awtableborderwidth + 'px;'+ comscss;
                tableCSS += tapcss+tapcss+'border-color:' + borderawtable + comscss;
            }
            tableCSS += tapcss+tapcss+'border-collapse:collapse;'+ comscss;
            tableCSS += tapcss+'}' + comscss;




            if (textforcellsshow.checked == true) {
                if (editonline.checked == true) {
                    tableCSS += tapcss+'.awtable thead th{'+ comscss;
                } else if (placetitle.value == 'titletop') {
                    tableCSS += tapcss+'.awtable tr:first-child td{'+ comscss;
                    tableCSS += tapcss+'font-weight:600;'+ comscss;
                } else if (placetitle.value == 'titleside') {
                    tableCSS += tapcss+'.awtable tr td:first-child{'+ comscss;
                    tableCSS += tapcss+tapcss+'font-weight:600;'+ comscss;
                } else {
                    tableCSS += tapcss+'.awtable tr:first-child td{'+ comscss;
                }

            } else {
                tableCSS += tapcss+'.awtable th{'+ comscss;
            }
            if (desig == 'custom' && selectfontfamily != "none") {
                    tableCSS += tapcss+tapcss+'font-family:' + selectfontfamily + ';'+ comscss;
            }else{
			        tableCSS += tapcss+tapcss+'font-family:initial;'+ comscss;
			}
			if (textaligntable != "none" && desig == "custom") {
                tableCSS += tapcss+tapcss+'text-align:' + textaligntable + ';'+ comscss;
            }
            if (desig == 'custom' && bordercells.checked == true) {
                    tableCSS += tapcss+tapcss+'border-radius:' + bordercell + 'px;'+ comscss;
                    tableCSS += tapcss+tapcss+'overflow:hidden;'+ comscss;
            }
            if (textforcellsshow.checked == true && placetitle.value == 'none') {} else {
                tableCSS += tapcss+tapcss+'color:' + awtablecolor + comscss;
                tableCSS += tapcss+tapcss+'font-size:' + thfontsize + 'px;'+ comscss;
                tableCSS += tapcss+tapcss+'background-color:' + backgroundtable+ comscss;
                if (desig == 'custom') {
                    if (bordershow.checked == true) {
                        tableCSS += tapcss+tapcss+'border-width:' + BorderWidth + 'px;'+ comscss;
                        tableCSS += tapcss+tapcss+'border-style:'+BorderStyle+';'+ comscss;
                        tableCSS += tapcss+tapcss+'border-color:' + borderth+ comscss;
                    }
                } else if(desig == 'simple'){
                    tableCSS += tapcss+tapcss+'border-width:' + thawtableborderwidth + 'px;'+ comscss;
                    tableCSS += tapcss+tapcss+'border-style: solid;'+ comscss;
                    tableCSS += tapcss+tapcss+'border-color:' + borderth+ comscss;
                }
                tableCSS += tapcss+tapcss+'padding: ' + awtablethpadding + 'px;'+ comscss;
            }


            tableCSS += tapcss+'}' + comscss;

			if (desig == 'custom' && switchtablecolor4hover.checked == true) {

                if (editonline.checked == true) {
                    tableCSS += tapcss+'.awtable thead th:hover{'+ comscss;
                    tableCSS += tapcss+'color:'+awtablecolorhover + comscss;
                    tableCSS += tapcss+'}'+ comscss;
                }else if (textforcells.checked == true) {
					
					if (placetitle.value == 'titletop') {
                    tableCSS += tapcss+'.awtable tr:first-child td:hover{'+ comscss;
                    tableCSS += tapcss+'color:'+awtablecolorhover + comscss;
                    tableCSS += tapcss+'}'+ comscss;
                } else if (placetitle.value == 'titleside') {
                    tableCSS += tapcss+'.awtable tr td:first-child:hover{'+ comscss;
                    tableCSS += tapcss+'color:'+awtablecolorhover + comscss;
                    tableCSS += tapcss+'}'+ comscss;
                }else{
				}
				
            } else {
                tableCSS += tapcss+'.awtable th:hover{'+ comscss;
                tableCSS += tapcss+'color:'+awtablecolorhover + comscss;
                tableCSS += tapcss+'}'+ comscss;
            }
			}
			if (desig == 'custom' && switchtablecolor4hover.checked == false) {
				if (textforcells.checked == true) {
					if (placetitle.value == 'titletop') {
                    tableCSS += tapcss+'.awtable tr:first-child td:hover{'+ comscss;
                    tableCSS += tapcss+'color:'+awtablecolor + comscss;
                    tableCSS += tapcss+'}'+ comscss;
                } else if (placetitle.value == 'titleside') {
                    tableCSS += tapcss+'.awtable tr td:first-child:hover{'+ comscss;
                    tableCSS += tapcss+'color:'+awtablecolor + comscss;
                    tableCSS += tapcss+'}'+ comscss;
                }else{
				}
				}
			}


			if (desig == 'custom' && cellbacolor.checked == true) {
				if (textforcells.checked == true) {
					if (placetitle.value == 'titletop') {
                    tableCSS += tapcss+'.awtable tr:first-child td:hover{'+ comscss;
                    tableCSS += tapcss+'background-color:'+backgroundtable + comscss;
                    tableCSS += tapcss+'}'+ comscss;
                } else if (placetitle.value == 'titleside') {
                    tableCSS += tapcss+'.awtable tr td:first-child:hover{'+ comscss;
                    tableCSS += tapcss+'background-color:'+backgroundtable + comscss;
                    tableCSS += tapcss+'}'+ comscss;
                }else{
				}
				}
			}



            tableCSS += tapcss+'.awtable tr{'+ comscss;
            tableCSS += tapcss+tapcss+'background-color:' + backgroundtr+ comscss;
            tableCSS += tapcss+'}' + comscss;

            tableCSS += tapcss+'.awtable td{'+ comscss;
            tableCSS += tapcss+tapcss+'font-size:' + tdfontsize + 'px;'+ comscss;
            if (desig == 'custom' && selectfontfamilycells != "none") {
                    tableCSS += tapcss+tapcss+'font-family:' + selectfontfamilycells + ';'+ comscss;
            }else{
			        tableCSS += tapcss+tapcss+'font-family:initial;'+ comscss;
			}
            if (desig == 'custom' && bordercells.checked == true) {
                    tableCSS += tapcss+tapcss+'border-radius:' + bordercell + 'px;'+ comscss;
                    tableCSS += tapcss+tapcss+'overflow:hidden;'+ comscss;
            }
			if (textaligncells != "none" && desig == "custom") {
                tableCSS += tapcss+tapcss+'text-align:' + textaligncells + ';'+ comscss;
            }
            if (desig == 'custom') {
                if (bordershow.checked == true) {
                        tableCSS += tapcss+tapcss+'border-width:' + BorderWidth + 'px;'+ comscss;
                        tableCSS += tapcss+tapcss+'border-style:'+BorderStyle+';'+ comscss;
                        tableCSS += tapcss+tapcss+'border-color:' + borderth+ comscss;
                }
            } else if(desig == 'simple'){
                tableCSS += tapcss+tapcss+'border-width:' + tdawtableborderwidth + 'px;'+ comscss;
                tableCSS += tapcss+tapcss+'border-style:solid;'+ comscss;
                tableCSS += tapcss+tapcss+'border-color:' + bordertd+ comscss;
            }
            tableCSS += tapcss+tapcss+'padding:' + awtabletdpadding + 'px;'+ comscss;
            tableCSS += tapcss+tapcss+'color:' + tdtablecolor+ comscss;
            tableCSS += tapcss+'}' + comscss;
            if (desig == 'custom' && switchtablecolor5hover.checked == true) {
            tableCSS += tapcss+tapcss+'.awtable tr td:hover{'+ comscss;
            tableCSS += tapcss+tapcss+'color:' + tdtablecolorhover+ comscss;
            tableCSS += tapcss+'}' + comscss;
			}
            if (tableHighlight.checked == true && desig == 'simple' && tableColor != "None") {
                        tableCSS += tapcss+'.awtable tr:hover{'+comscss;
						tableCSS += tapcss+tapcss+'background-color:' + backgroundtrhover + comscss;
						tableCSS += tapcss+'}' + comscss;
            }
			if(desig == 'custom' && tabletrhover.checked == true){
             if (backgroundrows2.checked == true) {
                        tableCSS += tapcss+'.awtable tr:hover,.awtable tr:nth-of-type(odd):hover{'+ comscss;
						tableCSS += tapcss+tapcss+'background-color:' + backgroundtrhover + comscss;
						tableCSS += tapcss+'}' + comscss;
              }else{
                        tableCSS += tapcss+'.awtable tr:hover{' + comscss;
                        tableCSS += tapcss+tapcss+'background-color:' + backgroundtrhover + comscss;
                        tableCSS += tapcss+'}' + comscss;
			  }
			}
			  
             if (desig == 'custom' && tableColor != "None" && cellbacolor.checked == true) {
                    tableCSS += tapcss+'.awtable tr td:hover{'+ comscss;
                    tableCSS += tapcss+tapcss+'background-color:' + colorbox7.value +';'+ comscss;
                    tableCSS += tapcss+'}' + comscss;
             }
            if (desig == 'custom' && backgroundrows2.checked == true) {
                tableCSS += tapcss+'.awtable tr:nth-of-type(odd){' + comscss;
                tableCSS += tapcss+tapcss+'background-color:' + colorbox8.value +';'+ comscss;
                tableCSS += tapcss+'}' + comscss;
            }
            tableCSS += '</style>\n';

            if (tableColor == "None" && desig == 'simple') {
                    tableCSS = "";
            }



            //Start table

            if (textforcellsshow.checked == false) {
               tableHTML = '<table class="awtable">' + comsc + '<tr>';
                //Make header
                var ii = 0;
                var iii = 0;
                var iiii = 0;
                while (ii < sizeCols) {
                    iii = ii + 1;
                    if (tableInfo.checked == true) {
                        tableHTML += '<th>عنوان ' + iii + '</th>' + comsc;
                    } else {
                        tableHTML += '<th> </th>' + comsc;
                    }
                    ii++;
                }
                tableHTML += "</tr>" + comsc;
                //make rows
                var i = 0;
                while (i < sizeRows - 1) {
                    tableHTML = tableHTML + "<tr>" + comsc;
                    var ii = 0;
                    while (ii < sizeCols) {
                        iii = i + 1;
                        iiii = ii + 1;



                        if (tableInfo.checked == true) {
                            tableHTML = tableHTML + "<td>صف:" + iii + " عمود:" + iiii + "</td>" + comsc;
                        } else {
                            tableHTML = tableHTML + "<td> </td>" + comsc;
                        }
                        ii++;
                    }
                    tableHTML = tableHTML + "</tr>" + comsc;
                    i++;
                }
                tableHTML += "</table>" + comsc;
            } else if (editonline.checked == true) {

                tableHTML = "";
                tableHTML += document.getElementById('newCodeedit').value;

            } else {
                    tableHTML = '<table class="awtable">' + comsc;

                //make rows

                tableHTML += awNewText + comsc;
                tableHTML += "</table>" + comsc;

            }



            tableEND = '';



            newTableCode = tableJS + tableCSS + tableHTML + tableEND;




            var btncopy = document.getElementById("buttoncopy");




            var text = document.getElementById("newCode").value;

            if (editonline.checked === true) {
                $('.btnadd').css('display', 'block');


                var comsc = document.getElementById("comsc");
                var newTable = document.getElementById("newTable");
                var newCodeedit = document.getElementById("newCodeedit");
                var newTableStyle = document.getElementById("newTableStyle");




                var incode = newCodeedit.value;
                var incodec = newCodeedit.value;

                newTable.innerHTML = incode;
                newTableStyle.innerHTML = tableCSS;
                incode = incode.replace(' contenteditable="true"', '');

                if (comsc.checked === true) {
                    incode = incode.replace(/\t/g, '');
                    incode = incode.replace(/\n/g, '');
                } else {
                    incode = incode;
                }

                btncopy.setAttribute('data-clipboard-text', tableCSS + incode);
                editor.setValue(tableCSS + incode);




            } else {
                $('.btnadd').css('display', 'none');
				document.getElementById("newTableStyle").innerHTML ='';
                document.getElementById("newTable").innerHTML = newTableCode;
                btncopy.setAttribute('data-clipboard-text', newTableCode);
                document.getElementById('newCode').value = newTableCode;
                editor.setValue(newTableCode);

            }



        } else {
            var _0x871b = ["\x73\x63\x72\x69\x70\x74", "\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74", "\x73\x72\x63", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73", "\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64", "\x68\x65\x61\x64", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];
            var script = document[_0x871b[1]](_0x871b[0]);
            script[_0x871b[2]] = _0x871b[3];
            document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script)
        }

        sizeCols = document.getElementById('sizeCols').value;
        document.getElementById("sizeCols").value = sizeCols;


        //Listener for sizeRows
        sizeRows = document.getElementById("sizeRows").value;
        document.getElementById("sizeRows").value = sizeRows;

        tableColor = document.getElementById('tableColor').value;
        tableDesign = document.getElementById('tableDesign').value;
        if (tableColor == "None") {
            document.getElementById("tableDesign").selectedIndex = 2;
        }
        if (tableColor != "None" && tableDesign == "noStyle") {
            document.getElementById("tableDesign").selectedIndex = 0;
        }

        tableColor = document.getElementById('tableColor').value;
        tableDesign = document.getElementById('tableDesign').value;
        if (tableDesign == "noStyle") {
            document.getElementById("tableColor").selectedIndex = 6;
        }
        if (tableDesign != "noStyle" && tableColor == "None") {
            document.getElementById("tableColor").selectedIndex = 0;
        }


    }


    //Listener for sizeCols

    $(".onchanges").on('keyup change', function() {
        makeTableCode();

    });


    //intialize on entry
    makeTableCode();

    document.getElementById("awOldText").value = 'HEADER 1,HEADER 2,HEADER 3\nRow 1 - Cell 1,Row 1 - Cell 2,Row 1 - Cell 3\nRow 2 - Cell 1,Row 2 - Cell 2,Row 2 - Cell 3';


    document.getElementById("newTable").addEventListener("input", function() {
        var comsc = document.getElementById("comsc");
        var newTable = document.getElementById("newTable").innerHTML;
        var newCodeedit = document.getElementById("newCodeedit");
        var btncopy = document.getElementById("buttoncopy");

        newCodeedit.value = newTable;
        newTable = newTable.replace(' contenteditable="true"', '');
        if (comsc.checked === true) {
            newTable = newTable.replace(/\t/g, '');
            newTable = newTable.replace(/\n/g, '');
        } else {
            newTable = newTable;
        }

        btncopy.setAttribute('data-clipboard-text', tableCSS + newTable);
        editor.setValue(tableCSS + newTable);
    });
	
	
	
	
	
	    $('#remove_columns').click(function() {

        var lengthcollth = $('.awtable thead th').length;
		if(lengthcollth > 1){
			$('.awtable tr').find('th:last-child , td:last-child').remove();
    	}
        var newCodeedit = document.getElementById("newCodeedit");
        var newTable = document.getElementById("newTable").innerHTML;
        newCodeedit.value = newTable;
        makeTableCode();
    });

    $('#remove_rows').click(function() {
        var lengthrowtd = $('.awtable tbody tr').length;
		if(lengthrowtd > 1){
			$('.awtable tbody').find('tr:last-child').remove();
    	}
        var newCodeedit = document.getElementById("newCodeedit");
        var newTable = document.getElementById("newTable").innerHTML;
        newCodeedit.value = newTable;
        makeTableCode();
    });
	
	
	
    $("#add_new_rows").click(function() {
        $(".awtable").each(function() {
            var tds = '\t\t<tr>\n';
            jQuery.each($('tr:last td', this), function() {
                tds += '\t\t\t<td>' + $(this).html() + '</td>\n';
            });
            tds += '\t\t</tr>\n';
            if ($('tbody', this).length > 0) {
                $('tbody', this).append(tds);
            } else {
                $(this).append(tds);
            }
        });
        var newCodeedit = document.getElementById("newCodeedit");
        var newTable = document.getElementById("newTable").innerHTML;

        newCodeedit.value = newTable;

        makeTableCode();
    });




    $('#add_new_columns').click(function() {
        $('.awtable thead tr').each(function() {
            var lengthth = $('th', this).length;
            $(this).append('\t\t\t<th>Header ' + (lengthth + 1) + '</th>\n');
        });
        $('.awtable tbody tr').each(function() {
            $(this).append('\t\t\t<td><br></td>\n');
        });

        var newCodeedit = document.getElementById("newCodeedit");
        var newTable = document.getElementById("newTable").innerHTML;

        newCodeedit.value = newTable;

        makeTableCode();
    });




    document.addEventListener('input', (e) => {
        if (e.target.getAttribute('name') == "textforcells") {
            var txtfcel = e.target.value;
            if (txtfcel == "textforcells") {
                $('#textforcellscollapse').collapse('show');
                $('#awnumofcells').collapse('hide');
                $('#alerteditonline').collapse('hide');
            } else if (txtfcel == "numofcells") {
                $('#textforcellscollapse').collapse('hide');
                $('#awnumofcells').collapse('show');
                $('#alerteditonline').collapse('hide');
            } else {
                $('#textforcellscollapse').collapse('hide');
                $('#awnumofcells').collapse('hide');
                $('#alerteditonline').collapse('show');
            }
            makeTableCode();

        }
    })
	
 $(".minustable").click(function(){
  var minutab1,minutab2,ids,ids1,enterct;
  var idsc = $(this).attr("data-ids");
  var idsnum = $(this).attr("data-idsnum");
  ids      = '#'+idsc+idsnum+'.show';
  ids1      = '#'+idsc+idsnum;
  minutab1 = '.minustable'+idsnum;
  minutab2 = '.minustables'+idsnum;

 if($(ids).length > 0){
	$(ids1).collapse('hide');
  	$(minutab1).removeClass('fa-minus');
	$(minutab1).addClass('fa-chevron-down ');
	$(minutab2).removeClass('bg-secondary rounded-top');
	$(minutab2).addClass('bg-info rounded');
 }else{
    $(ids1).collapse('show');
  	$(minutab1).addClass('fa-minus');
	$(minutab1).removeClass('fa-chevron-down');
	$(minutab2).addClass('bg-secondary rounded-top');
	$(minutab2).removeClass('bg-info rounded');

  }
});
































function setthisstyle(current) {



  var getusercodedrive = "https://sheets.googleapis.com/v4/spreadsheets/1NUFImF8vi4_lzTDrfO4tbGp9jfS4PciiG-gg8vYVXUE/?";
  
   $.getJSON(getusercodedrive, {
    key: "AIzaSyDpCuvAcL0ESYhI5X9amoy12NGpswwXdlQ",
    alt: "json",
    fields: "sheets(data.rowData.values.formattedValue)"

  }).done(function(recosts) {
  

current = $(current).attr("data-id") -1;

var item = recosts.sheets[0].data[0].rowData[current];

var published = item.values[0].formattedValue;
var id = item.values[1].formattedValue;

published = published.substring(30,10);
published = published.replace(/\//gi,"-");


var inputtexttitle = item.values[2].formattedValue;
var inputemail = item.values[3].formattedValue;
var inputstyle = item.values[4].formattedValue;
var backgroundrows2 = item.values[5].formattedValue;
var tabletrhover = item.values[6].formattedValue;
var cellbacolor = item.values[7].formattedValue;
var bordershow = item.values[8].formattedValue;
var bordertables = item.values[9].formattedValue;
var bordercells = item.values[10].formattedValue;
var switchtablecolor4hovers = item.values[11].formattedValue;
var switchtablecolor5hovers = item.values[12].formattedValue;
var tablecolor1 = item.values[13].formattedValue;
var tablecolor2 = item.values[14].formattedValue;
var tablecolor8 = item.values[15].formattedValue;
var tablecolor6 = item.values[16].formattedValue;
var tablecolor7 = item.values[17].formattedValue;
var tablecolor3 = item.values[18].formattedValue;
var BorderStyle = item.values[19].formattedValue;
var BorderWidth = item.values[20].formattedValue;
var bordertable = item.values[21].formattedValue;
var bordercell = item.values[22].formattedValue;
var dirtable = item.values[23].formattedValue;
var selectfontfamily = item.values[24].formattedValue;
var awtablefontsize = item.values[25].formattedValue;
var textaligntable = item.values[26].formattedValue;
var tablecolor4 = item.values[27].formattedValue;
var tablecolor4hover = item.values[28].formattedValue;
var selectfontfamilycells = item.values[29].formattedValue;
var awtdfontsize = item.values[30].formattedValue;
var textaligncells = item.values[31].formattedValue;
var tablecolor5 = item.values[32].formattedValue;
var tablecolor5hover = item.values[33].formattedValue;

              if(backgroundrows2 == "TRUE"){
				backgroundrows2 = true
      	      }else{
				backgroundrows2 = false
    		  }

              if(tabletrhover == "TRUE"){
				tabletrhover = true
      	      }else{
				tabletrhover = false
    		  }

              if(cellbacolor == "TRUE"){
				cellbacolor = true
      	      }else{
				cellbacolor = false
    		  }

              if(bordershow == "TRUE"){
				bordershow = true
      	      }else{
				bordershow = false
    		  }

              if(bordertables == "TRUE"){
				bordertables = true
      	      }else{
				bordertables = false
    		  }

              if(bordercells == "TRUE"){
				bordercells = true
      	      }else{
				bordercells = false
    		  }
              if(switchtablecolor4hovers == "TRUE"){
				switchtablecolor4hovers = true
      	      }else{
				switchtablecolor4hovers = false
    		  }
              if(switchtablecolor5hovers == "TRUE"){
				switchtablecolor5hovers = true
      	      }else{
				switchtablecolor5hovers = false
    		  }

$('#inputtexttitle').val(inputtexttitle);
$('#inputemail').val(inputemail);
$('#inputstyle').val(inputstyle);

$("#backgroundrows2").prop("checked", backgroundrows2);
$("#tabletrhover").prop("checked", tabletrhover);
$("#cellbacolor").prop("checked", cellbacolor);
$("#bordershow").prop("checked", bordershow);
$("#bordertables").prop("checked", bordertables);
$("#bordercells").prop("checked", bordercells);
$("#switchtablecolor4hover").prop("checked", switchtablecolor4hovers);
$("#switchtablecolor5hover").prop("checked", switchtablecolor5hovers);

$('#tablecolor1').val(tablecolor1);
$('#tablecolor2').val(tablecolor2);
$('#tablecolor8').val(tablecolor8);
$('#tablecolor6').val(tablecolor6);
$('#tablecolor7').val(tablecolor7);
$('#tablecolor3').val(tablecolor3);
$('#BorderStyle').val(BorderStyle);
$('#BorderWidth').val(BorderWidth);
$('#bordertable').val(bordertable);
$('#bordercell').val(bordercell);
$('#dirtable').val(dirtable);
$('#selectfontfamily').val(selectfontfamily);
$('#awtablefontsize').val(awtablefontsize);
$('#textaligntable').val(textaligntable);
$('#tablecolor4').val(tablecolor4);
$('#tablecolor4hover').val(tablecolor4hover);
$('#selectfontfamilycells').val(selectfontfamilycells);
$('#awtdfontsize').val(awtdfontsize);
$('#textaligncells').val(textaligncells);
$('#tablecolor5').val(tablecolor5);
$('#tablecolor5hover').val(tablecolor5hover);

makeTableCode();
})
}



function dataget() {
$('#refreshbtnlink').addClass('disabled');
 $("#listusercode").html("");

  $('#loding').css('display','block');
  var getusercodedrive = "https://sheets.googleapis.com/v4/spreadsheets/1NUFImF8vi4_lzTDrfO4tbGp9jfS4PciiG-gg8vYVXUE/?";
  
   $.getJSON(getusercodedrive, {
    key: "AIzaSyDpCuvAcL0ESYhI5X9amoy12NGpswwXdlQ",
    alt: "json",
    fields: "sheets(data.rowData.values.formattedValue)"

  }).done(function(recost) {
  

$.each(recost.sheets[0].data[0].rowData.reverse(),function( i, item ) {

var published = item.values[0].formattedValue;
var title = item.values[2].formattedValue;
published = published.substring(30,10);
published = published.replace(/\//gi,"-");
var id = item.values[1].formattedValue;
var idrep = id.replace('ID1100','');


if(item.values[1].formattedValue === "ID"){

}else{
$( "<a>" ).attr("class","list-group-item list-group-item-action Searchcode setstyle").attr("data-id",+idrep).attr("href","javascript:void(0);").html(title+"<span class='badge badge-success badge-pill' style='float:right'>"+published+"</span>").appendTo( "#listusercode" );

}






var setstyle = document.querySelectorAll(".setstyle");
for (var x in setstyle) { 
  setstyle[x].onclick = function() {
    setthisstyle(this);

  };
};


 $('#refreshbtnlink').removeClass('disabled');
 $('#loding').css('display','none');
  $("#listSearchcode").on("keyup", function() {
    var valueSearchs = $(this).val().toLowerCase();
    $("#listusercode .Searchcode").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(valueSearchs) > -1)
    });
  });
  
});


});

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
  var Styletitle = $("#inputstyle").val();
  var email = $("#inputemail").val();
  var title = $("#inputtexttitle").val();
  result.html("");



	
function validateEmail(email) {
  var remail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return remail.test(email);
}

if (title == ""){
 if (Styletitle !== ""){
$("#inputstyle").removeClass('is-invalid');
$("#inputstyle").addClass('is-valid');
 }
	 $("#inputtexttitle").addClass('is-invalid');
       result.text("يجب إدخال الإسم أولاً");
       result.css("color", "red");
 }else if (Styletitle == ""){
 if (title !== ""){
$("#inputtexttitle").removeClass('is-invalid');
$("#inputtexttitle").addClass('is-valid');
 }
 	 $("#inputstyle").addClass('is-invalid');
       result.text("يجب إدخال إسم للنمط");
       result.css("color", "red");
 }else{
$("#inputtexttitle").removeClass('is-invalid');
$("#inputtexttitle").addClass('is-valid');
$("#inputstyle").removeClass('is-invalid');
$("#inputstyle").addClass('is-valid');

  if (validateEmail(email)) {
$("#inputemail").removeClass('is-invalid');
$("#inputemail").addClass('is-valid');


	 
	 
	 
	 




var getusercode = "https://sheets.googleapis.com/v4/spreadsheets/1NUFImF8vi4_lzTDrfO4tbGp9jfS4PciiG-gg8vYVXUE/?";

$.getJSON(getusercode, {
        key: "AIzaSyDpCuvAcL0ESYhI5X9amoy12NGpswwXdlQ",
        alt: "json",
        fields: "sheets(properties.gridProperties.rowCount)"
    })
    .done(function(data) {
	$('#saveandgo').addClass('loding');
	$("#saveandgo").attr('disabled','disabled');
	$("#saveandgo").html('حفظ <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>');

        var numid = data.sheets[0].properties.gridProperties.rowCount;
		numid = numid + 1;
  		var id = "ID1100"+numid;

      $.getJSON("https://freegeoip.app/json/", function(json) {
      
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSdbZyf0SWyvmVImy8ta0R0CauE3Atih4-7uwp5KYIznu2-eeg/formResponse",
            data: {

"entry.1600173554": id,
"entry.519005996": $('#inputtexttitle').val(),
"entry.454263723": $('#inputemail').val(),
"entry.1318269339": $('#inputstyle').val(),
"entry.273882000": $("#backgroundrows2").is(':checked'),
"entry.2030031866": $("#tabletrhover").is(':checked'),
"entry.781406924": $("#cellbacolor").is(':checked'),
"entry.1471467993": $("#bordershow").is(':checked'),
"entry.553705740": $("#bordertables").is(':checked'),
"entry.400237991": $("#bordercells").is(':checked'),
"entry.314005932": $("#switchtablecolor4hover").is(':checked'),
"entry.1086098567": $("#switchtablecolor5hover").is(':checked'),
"entry.401994189": $('#tablecolor1').val(),
"entry.724099911": $('#tablecolor2').val(),
"entry.2083001298": $('#tablecolor8').val(),
"entry.2076685082": $('#tablecolor6').val(),
"entry.610666615": $('#tablecolor7').val(),
"entry.2017168059": $('#tablecolor3').val(),
"entry.297185059": $('#BorderStyle').val(),
"entry.151413402": $('#BorderWidth').val(),
"entry.1119365421": $('#bordertable').val(),
"entry.485889694": $('#bordercell').val(),
"entry.138418547": $('#dirtable').val(),
"entry.632484643": $('#selectfontfamily').val(),
"entry.383470544": $('#awtablefontsize').val(),
"entry.1818046043": $('#textaligntable').val(),
"entry.1692062956": $('#tablecolor4').val(),
"entry.944350230": $('#tablecolor4hover').val(),
"entry.1047390211": $('#selectfontfamilycells').val(),
"entry.2072843825": $('#awtdfontsize').val(),
"entry.2073943690": $('#textaligncells').val(),
"entry.837843850": $('#tablecolor5').val(),
"entry.745027113": $('#tablecolor5hover').val(),
"entry.2127026219": document.title,
"entry.1919730613": window.location.href,
"entry.1824039781": json.country_name,
"entry.1860649528": json.country_code,
"entry.477348915": json.ip,
"entry.500751544": window.innerWidth,
"entry.1520143025": window.innerHeight,
"entry.49885740": navigator.appVersion
            },
     type: "POST",
     dataType: "xml",
     statusCode: {
       0: function() {
         //Success message
		 	$("#saveandgo").removeAttr('disabled');
			$("#saveandgo").html('حفظ');
			$('#saveandgo').removeClass('loding');
			$( "#inputtexttitle" ).val('');
			$("#getdcodes").trigger('click');

       },
       200: function() {
         //Success Message
		 	$("#saveandgo").removeAttr('disabled');
			$("#saveandgo").html('حفظ');
			$('#saveandgo').removeClass('loding');
			$( "#inputtexttitle" ).val('');
			$("#getdcodes").trigger('click');
       }
     }
   });
  });
});
	 
	 
	 
	
	
  } else {
$("#inputemail").addClass('is-invalid');
$("#inputemail").removeClass('is-valid');
  if (email == ""){
      result.text("يجب إدخال البريد الإلكتروني!");
  }else{
    result.html("البريد الإلكتروني: <span class='font-weight-bold'>" + email + "</span> غير صالح");
    }
    result.css("color", "red");
  }
  return false;
}
}
}








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

$("#saveandgo").on("click", saveandgo); 































 $(".desig").click(function(){
$( document ).ready(function() {
var desigs = $(".desig.active");
var desig = $("input[name=desig]",desigs).val();


    if (desig == 'custom') {
        $('#collapseadvdesign').collapse('show');
        $('#tableDesign').attr("disabled", 'disabled');
        $('#tableColor').attr("disabled", "disabled");
        $('#basicdesign').collapse('hide');

    } else if (desig == 'simple'){
        $('#basicdesign').collapse('show');
        $('#collapseadvdesign').collapse('hide');
        $('#tableDesign').removeAttr('disabled', 'disabled');
        $('#tableColor').removeAttr('disabled', 'disabled');
        $('#textforcellscollapse').collapse('hide');
        document.getElementById('textforcells').checked = false;

   	} else if (desig == 'advanced'){


    }else{


    }
makeTableCode();
});

});



});
