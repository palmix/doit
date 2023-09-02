
    
	var getusercodedrive = "https://sheets.googleapis.com/v4/spreadsheets/1NUFImF8vi4_lzTDrfO4tbGp9jfS4PciiG-gg8vYVXUE/?";
  
   $.getJSON(getusercodedrive, {
    key: "AIzaSyDpCuvAcL0ESYhI5X9amoy12NGpswwXdlQ",
    alt: "json",
    fields: "sheets(data.rowData.values.formattedValue)"

  }).done(function(recosts) {
  var setalltable = "";
  var setallcss = "";

$.each(recosts.sheets[0].data[0].rowData.reverse(),function( i, item ) {

var published = item.values[0].formattedValue;
var id = item.values[1].formattedValue;

published = published.substring(30,10);
published = published.replace(/\//gi,"-");



var valuelink = 'https://table.doitf.com/search?q='+id;
var name =  item.values[2].formattedValue;
var stylename = item.values[4].formattedValue;

if(name > 30){
name =  name.substring(0,20)+'...';
}
if(stylename > 23){
stylename =  stylename.substring(0,20)+'...';
}


var inputtexttitle = item.values[2].formattedValue;
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
				backgroundrows2 = true;
      	      }else{
				backgroundrows2 = false;
    		  }

              if(tabletrhover == "TRUE"){
				tabletrhover = true;
      	      }else{
				tabletrhover = false;
    		  }

              if(cellbacolor == "TRUE"){
				cellbacolor = true;
      	      }else{
				cellbacolor = false;
    		  }

              if(bordershow == "TRUE"){
				bordershow = true;
      	      }else{
				bordershow = false;
    		  }

              if(bordertables == "TRUE"){
				bordertables = true;
      	      }else{
				bordertables = false;
    		  }

              if(bordercells == "TRUE"){
				bordercells = true;
      	      }else{
				bordercells = false;
    		  }
              if(switchtablecolor4hovers == "TRUE"){
				switchtablecolor4hovers = true;
      	      }else{
				switchtablecolor4hovers = false;
    		  }
              if(switchtablecolor5hovers == "TRUE"){
				switchtablecolor5hovers = true;
      	      }else{
				switchtablecolor5hovers = false;
    		  }

if(id === "ID"){
}else{









  




setallcss += ".TM"+id+"{";

if(bordertables == true){
setallcss += "border-radius:"+bordertable+"px;";
setallcss += "overflow:hidden;";
}		

if(bordershow == true){
setallcss += "border-width:"+BorderWidth+"px;";
setallcss += "border-color:"+tablecolor3+";";
}else{
setallcss += "border-width:0px;";
}
setallcss += "border-collapse:collapse;";
setallcss += "width:100%;";
setallcss += "}";


	

		



setallcss += ".TM"+id+" th{";
setallcss += "font-family:"+selectfontfamily+";";
setallcss += "text-align:"+textaligntable+";";
setallcss += "color:"+tablecolor4+";";
setallcss += "font-size:"+awtablefontsize+"px;";
setallcss += "background-color:"+tablecolor1+";";

if(bordercells == true){
setallcss += "border-radius:"+bordercell+"px;";
}

if(bordershow == true){
setallcss += "border-width:"+BorderWidth+"px;";
setallcss += "border-style:"+BorderStyle+";";
setallcss += "border-color:"+tablecolor3+";";
}else{
setallcss += "border-width:0px;";
}

setallcss += "padding:5px;";
setallcss += "}";




if(switchtablecolor4hovers == true){
setallcss += ".TM"+id+" thead th:hover{color:"+tablecolor4hover+"}";
}

setallcss += ".TM"+id+" tr{background-color:"+tablecolor2+";}";



	
		

		
		
	





setallcss += ".TM"+id+" td{";
setallcss += "font-size:"+awtdfontsize+"px;";
setallcss += "font-family:"+selectfontfamilycells+";";
setallcss += "text-align:"+textaligncells+";";

if(bordershow == true){
setallcss += "border-width:"+BorderWidth+"px;";
setallcss += "border-style:"+BorderStyle+";";
setallcss += "border-color:"+tablecolor3+";";
}else{
setallcss += "border-width:0px;";
}
if(bordercells == true){
setallcss += "border-radius:"+bordercell+"px;";
}
setallcss += "padding:8px;";
setallcss += "color:"+tablecolor5+";";
setallcss += "}";


if(switchtablecolor5hovers == true){
setallcss += ".TM"+id+" tr td:hover{color:"+tablecolor5hover+"}";
}


if(cellbacolor == true){
setallcss += ".TM"+id+" tr td:hover{background-color:"+tablecolor7+"}";
}




if(backgroundrows2 == true){
setallcss += ".TM"+id+" tr:nth-of-type(odd){background-color:"+tablecolor8+"}";
}
if(tabletrhover == true){
setallcss += ".TM"+id+" tr:hover,."+id+" tr:nth-of-type(odd):hover{background-color:"+tablecolor6+"}";
}


    







setalltable += "<div class='col mb-4'>";
setalltable += "<div class='card h-100' style='min-width:18rem;'>";
setalltable += "<table class='TM"+id+"'><thead><tr><th>FirstName</th><th>LastName</th><th>Age</th></tr></thead><tbody><tr><td>Jill</td><td>Smith</td><td>50</td></tr><tr><td>Eve</td><td>Jackson</td><td>94</td></tr><tr><td>John</td><td>Doe</td><td>80</td></tr><tr><td>Ayla</td><td>Dern</td><td>19</td></tr></tbody></table>";
setalltable += "<div class='card-body'>";
setalltable += "<h5 class='card-title'>"+stylename+"</h5>";
setalltable += "<p class='card-text'>"+setcardtext1+" "+name+".</p>";
setalltable += "<footer>";
setalltable += "<small class='text-muted'>";
setalltable += setPostedon+" <cite title='Source Title'>"+published+"</cite>";
setalltable += "</small>";
setalltable += "<a class='btn btn-sm btn-primary float-right' href='https://table.doitf.com/search?q="+id+setview+"' target='_blank' role='button'>"+setUseitnow+"</a>";
setalltable += "</footer>";
setalltable += "</div>";
setalltable += "</div>";
setalltable += "</div>";
      
      
        
        
              
        
          
        
      
      
    
  






}









});

setallcss = '<style type="text/css">@import url("https://fonts.googleapis.com/css2?family=Open Sans&family=Pangolin&family=Russo One&family=Lobster&family=Antic Slab&family=Bebas Neue&family=Comfortaa&family=Exo 2&family=Shadows Into Light&family=Do Hyeon&family=Monda&family=Fredoka One&family=Righteous&family=Caveat&family=Maven Pro&family=Rajdhani&family=Bangers&family=Architects Daughter&family=Kalam&family=Great Vibes&family=Patrick Hand&display=swap");'+setallcss+'</style>';
document.getElementById('cardtable').innerHTML =setallcss+setalltable


			$("#lodspinner").html('');
});
