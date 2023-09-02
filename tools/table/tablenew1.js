
  var editor = CodeMirror.fromTextArea(document.getElementById("newCode"), {
    mode: "text/html",
    readOnly: true,
    htmlMode: true,
   lineNumbers: true,
    lineWrapping: true,
    smartIndent: false,
    addModeClass: true

  });
document.addEventListener('DOMContentLoaded', function () {
		
	var sizeCols = "";
	var sizeRows = "";
	var tableColor = "";
	var tableColor2 = "";
	var tableColor2b = "";
	var tableDesign = "";
	var tableInfo = "";
	var tableHighlight = ""
	var tableJS = "";
	var tableCSS = "";
	var tableHTML = "";
	var pageTableHTML = "";
	var tableEND = "";
	var newTable = "";
	var newTableCode = "";
	var awHighlight = "";
	var awHighlightb = "";
	
	function makeTableCode(){

		tableColor = document.getElementById('tableColor').value;
		tableDesign = document.getElementById('tableDesign').value;
		sizeCols = document.getElementById('sizeCols').value;
		sizeRows = document.getElementById('sizeRows').value;
		if (sizeCols == "0"){sizeCols = "1";document.getElementById('sizeCols').value = "1"}
		if (sizeRows == "0"){sizeRows = "1";document.getElementById('sizeRows').value = "1"}
		tableInfo = document.getElementById('tableInfo');
		tableHighlight = document.getElementById('tableHighlight');
		
		if(tableDesign == "alternating"){
			tableCSS = "";
			if(tableColor == "Blue"){
				var blue1 = "#acc8cc";var blue2 = "#d4e3e5"; var blue3 = "#729ea5";
				tableColor2 = "#d4e3e5";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.awtable {font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #729ea5;border-collapse: collapse;}\n';
				tableCSS += '.awtable th {font-size:12px;background-color:#acc8cc;border-width: 1px;padding: 8px;border-style: solid;border-color: #729ea5;text-align:left;}\n';
				tableCSS += '.awtable tr {background-color:#d4e3e5;}\n';
				tableCSS += '.awtable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #729ea5;}\n';
              
              
  if (tableHighlight.checked == true){if(tableColor != "None"){tableCSS += '.awtable tr:hover {background-color:#ffffff;}\n';}}          
              
              
              
				tableCSS += '</style>\n\n';
			}else if(tableColor == "Green"){
				var green1 = "#abd28e";var green2 = "#bedda7"; var green3 = "#9dcc7a";
				tableColor2 = "#bedda7";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.awtable {font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #9dcc7a;border-collapse: collapse;}\n';
				tableCSS += '.awtable th {font-size:12px;background-color:#abd28e;border-width: 1px;padding: 8px;border-style: solid;border-color: #9dcc7a;text-align:left;}\n';
				tableCSS += '.awtable tr {background-color:#bedda7;}\n';
				tableCSS += '.awtable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #9dcc7a;}\n';
if (tableHighlight.checked == true){if(tableColor != "None"){tableCSS += '.awtable tr:hover {background-color:#ffffff;}\n';}} 
				tableCSS += '</style>\n\n';
			
			}else if(tableColor == "Grey"){
				var grey1 = "#b8b8b8";var grey2 = "#cdcdcd"; var grey3 = "#a9a9a9";
				tableColor2 = "#cdcdcd";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.awtable {font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #a9a9a9;border-collapse: collapse;}\n';
				tableCSS += '.awtable th {font-size:12px;background-color:#b8b8b8;border-width: 1px;padding: 8px;border-style: solid;border-color: #a9a9a9;text-align:left;}\n';
				tableCSS += '.awtable tr {background-color:#cdcdcd;}\n';
				tableCSS += '.awtable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #a9a9a9;}\n';
if (tableHighlight.checked == true){if(tableColor != "None"){tableCSS += '.awtable tr:hover {background-color:#ffffff;}\n';}} 
				tableCSS += '</style>\n\n';
				
			}else if(tableColor == "Orange"){
				var orange1 = "#e6983b";var orange2 = "#f0c169"; var orange3 = "#ebab3a";
				tableColor2 = "#f0c169";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.awtable {font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #ebab3a;border-collapse: collapse;}\n';
				tableCSS += '.awtable th {font-size:12px;background-color:#e6983b;border-width: 1px;padding: 8px;border-style: solid;border-color: #ebab3a;text-align:left;}\n';
				tableCSS += '.awtable tr {background-color:#f0c169;}\n';
				tableCSS += '.awtable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #ebab3a;}\n';
if (tableHighlight.checked == true){if(tableColor != "None"){tableCSS += '.awtable tr:hover {background-color:#ffffff;}\n';}} 
              tableCSS += '</style>\n\n';
				
			}else if(tableColor == "Brown"){
				var brown1 = "#ded0b0";var brown2 = "#e9dbbb"; var brown3 = "#bcaf91";
				tableColor2 = "#e9dbbb";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.awtable {font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #bcaf91;border-collapse: collapse;}\n';
				tableCSS += '.awtable th {font-size:12px;background-color:#ded0b0;border-width: 1px;padding: 8px;border-style: solid;border-color: #bcaf91;text-align:left;}\n';
				tableCSS += '.awtable tr {background-color:#e9dbbb;}\n';
				tableCSS += '.awtable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #bcaf91;}\n';
if (tableHighlight.checked == true){if(tableColor != "None"){tableCSS += '.awtable tr:hover {background-color:#ffffff;}\n';}} 
              tableCSS += '</style>\n\n';
				
			}else if(tableColor == "Black"){
				var black1 = "#171515";var black2 = "#2f2f2f"; var black3 = "#686767";
				tableColor2 = "#2f2f2f"
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.awtable {font-size:12px;color:#fbfbfb;width:100%;border-width: 1px;border-color: #686767;border-collapse: collapse;}\n';
				tableCSS += '.awtable th {font-size:12px;background-color:#171515;border-width: 1px;padding: 8px;border-style: solid;border-color: #686767;text-align:left;}\n';
				tableCSS += '.awtable tr {background-color:#2f2f2f;}\n';
				tableCSS += '.awtable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #686767;}\n';
              if (tableHighlight.checked == true){if(tableColor != "None"){tableCSS += '.awtable tr:hover {background-color:#171515;}\n';}} 
				tableCSS += '</style>\n\n';
				
			}else if(tableColor == "None"){
				
			}		
		}else if(tableDesign == "minimal"){
			tableCSS = "";
			if(tableColor == "Blue"){
				var blue3 = "#a9c6c9";
				tableColor2 = "#ffffff";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.awtable {font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #729ea5;border-collapse: collapse;}\n';
				tableCSS += '.awtable th {font-size:12px;background-color:#acc8cc;border-width: 1px;padding: 8px;border-style: solid;border-color: #729ea5;text-align:left;}\n';
				tableCSS += '.awtable tr {background-color:#ffffff;}\n';
				tableCSS += '.awtable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #729ea5;}\n';
              if (tableHighlight.checked == true){if(tableColor != "None"){tableCSS += '.awtable tr:hover {background-color:#ffff99;}\n';}} 

				tableCSS += '</style>\n\n';
				
				
			}else if(tableColor == "Green"){
				var green3 = "#9dcc7a";
				tableColor2 = "#ffffff";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.awtable {font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #9dcc7a;border-collapse: collapse;}\n';
				tableCSS += '.awtable th {font-size:12px;background-color:#abd28e;border-width: 1px;padding: 8px;border-style: solid;border-color: #9dcc7a;text-align:left;}\n';
				tableCSS += '.awtable tr {background-color:#ffffff;}\n';
				tableCSS += '.awtable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #9dcc7a;}\n';
              if (tableHighlight.checked == true){if(tableColor != "None"){tableCSS += '.awtable tr:hover {background-color:#ffff99;}\n';}} 

				tableCSS += '</style>\n\n';
				
			
			}else if(tableColor == "Grey"){
				var grey3 = "#a9a9a9";
				tableColor2 = "#ffffff";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.awtable {font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #a9a9a9;border-collapse: collapse;}\n';
				tableCSS += '.awtable th {font-size:12px;background-color:#b8b8b8;border-width: 1px;padding: 8px;border-style: solid;border-color: #a9a9a9;text-align:left;}\n';
				tableCSS += '.awtable tr {background-color:#ffffff;}\n';
				tableCSS += '.awtable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #a9a9a9;}\n';
              if (tableHighlight.checked == true){if(tableColor != "None"){tableCSS += '.awtable tr:hover {background-color:#ffff99;}\n';}} 
				tableCSS += '</style>\n\n';
				
			}else if(tableColor == "Orange"){
				var orange3 = "#e6983b";
				tableColor2 = "#ffffff";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.awtable {font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #ebab3a;border-collapse: collapse;}\n';
				tableCSS += '.awtable th {font-size:12px;background-color:#e6983b;border-width: 1px;padding: 8px;border-style: solid;border-color: #ebab3a;text-align:left;}\n';
				tableCSS += '.awtable tr {background-color:#ffffff;}\n';
				tableCSS += '.awtable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #ebab3a;}\n';
              if (tableHighlight.checked == true){if(tableColor != "None"){tableCSS += '.awtable tr:hover {background-color:#ffff99;}\n';}} 
				tableCSS += '</style>\n\n';
				
			}else if(tableColor == "Brown"){
				var brown3 = "#ebab3a";
				tableColor2 = "#ffffff";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.awtable {font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #bcaf91;border-collapse: collapse;}\n';
				tableCSS += '.awtable th {font-size:12px;background-color:#ded0b0;border-width: 1px;padding: 8px;border-style: solid;border-color: #bcaf91;text-align:left;}\n';
				tableCSS += '.awtable tr {background-color:#ffffff;}\n';
				tableCSS += '.awtable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #bcaf91;}\n';
              if (tableHighlight.checked == true){if(tableColor != "None"){tableCSS += '.awtable tr:hover {background-color:#ffff99;}\n';}} 
				tableCSS += '</style>\n\n';
				
			}else if(tableColor == "Black"){
				var black3 = "#ebab3a";
				tableColor2 = "#171515";
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.awtable {font-size:12px;color:#fbfbfb;width:100%;border-width: 1px;border-color: #686767;border-collapse: collapse;}\n';
				tableCSS += '.awtable th {font-size:12px;background-color:#171515;border-width: 1px;padding: 8px;border-style: solid;border-color: #686767;text-align:left;}\n';
				tableCSS += '.awtable tr {background-color:#171515;}\n';
				tableCSS += '.awtable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #686767;}\n';
              if (tableHighlight.checked == true){if(tableColor != "None"){tableCSS += '.awtable tr:hover {background-color:#666666;}\n';}} 

				tableCSS += '</style>\n\n';
				
			}else if(tableColor == "None"){
				
			}
		}else if(tableDesign == "alternatingXY"){
			tableCSS = "<!-- alternatingXY -->\n";
		}else if(tableDesign == "minimalXY"){
			tableCSS = "<!-- minimalXY -->\n";
		}else if(tableDesign == "noStyle"){
			tableCSS = "";
		}
			
		//Start table
		tableHTML = '<table class="awtable" border="1">\n<tr>';
		//Make header
		var ii = 0;
		var iii = 0;
		var iiii = 0;
		while(ii< sizeCols){
			iii = ii + 1;
           if (tableInfo.checked == true){
			tableHTML += '<th>عنوان '+iii+'</th>';
           }else{
           tableHTML += '<th> </th>';
           }
			ii++;
		}
		tableHTML += "</tr>\n";
		//make rows
		var i = 0;
		while(i< sizeRows -1){
			tableHTML = tableHTML + "<tr>";
			var ii = 0;
			while(ii< sizeCols){
				iii = i + 1;
				iiii = ii + 1;
              
              
              
         if (tableInfo.checked == true){
     	tableHTML = tableHTML + "<td>صف:"+iii+" عمود:"+iiii+"</td>";
              }else{
      		tableHTML = tableHTML + "<td> </td>";
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

		
	}
	
	
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

 
  var ifr = document.createElement("div");
  ifr.setAttribute("frameborder", "0");
  ifr.setAttribute("id", "iframeResult");
  ifr.setAttribute("name", "iframeResult");  
  ifr.setAttribute("allowfullscreen", "true");  
  document.getElementById("newTable").innerHTML = newTableCode;
  document.getElementById("newTable").appendChild(ifr);
btncopy.setAttribute('data-clipboard-text' , newTableCode);
	  
 	};	 
	
	
	//intialize on entry
	makeTableCode(); 


});

