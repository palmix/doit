$(document).ready(function() {

   

$('#g1').on('change', function(){
var t = $(this).val();
$('#getcollapse2').append('<img src="'+t+'"/>');
});
$('#g9').on('change', function(){
var t = $(this).val();
$('#getcollapse3').append('<img src="'+t+'"/>');
});
  
$('#ImgCover').on('change', function(){
var t = $(this).val();
$('#getcollapse25').append('<img src="'+t+'"/>');
});
  
setTimeout(function(){
var get__1 = $('#g1').val();
$('#getcollapse2').append('<img src="'+get__1+'"/>');
  
var get__2 = $('#g9').val();
$('#getcollapse3').append('<img src="'+get__2+'"/>');
  
var get__3 = $('#ImgCover').val();
$('#getcollapse25').append('<img src="'+get__3+'"/>');
  
},2000);
  
  
});
   
   
   
   
   
   
   
   
   
$("#addnewinfo").click(function() {
var numberOfOptions = $("#DidYoUKnowNum .infonumbers").length + 1;
$('#DidYoUKnowNum').append('<div class="input-group mb-1"><span class="input-group-text">'+numberOfOptions+'</span> <span class="input-group-text">هل تعلم</span><input type="text" class="form-control infonumbers" placeholder="أدخل معلومة '+numberOfOptions+'"></div>');
$("#DidYoUKnowNum .infonumbers").last().focus();
});

$("#addnewMultipleimages").click(function() {
var numberOfOptions = $("#MultipleimagesNum .Multipleimages").length + 1;
$('#MultipleimagesNum').append('<div class="input-group mb-1"><span class="input-group-text">'+numberOfOptions+'</span> <span class="input-group-text">صورة</span><input type="text" class="form-control Multipleimages" placeholder="أدخل صورة '+numberOfOptions+'"></div>');
$("#MultipleimagesNum .Multipleimages").last().focus();
});
   
   
   
   
   
   
   
   
   
   
   
$('#Name_publishing').val('yes');
function publishingChecked(){
if($('input#publishingChecked').is(':checked')){
$('#Name_publishing').val('yes');
}else{
$('#Name_publishing').val('no');
}
}
   
   
function g6_5(){
if($('input#g6_5').is(':checked')){
$('.g6_classshow').css('display','none');
$('.g6_classhide').css('display','block');
}else{
$('.g6_classhide').css('display','none');
$('.g6_classshow').css('display','block');
}
}
function g7_5(){
if($('input#g7_5').is(':checked')){
$('.g7_classshow').css('display','none');
$('.g7_classhide').css('display','block');
}else{
$('.g7_classhide').css('display','none');
$('.g7_classshow').css('display','block');
}
}
function g8_5(){
if($('input#g8_5').is(':checked')){
$('.g8_classshow').css('display','none');
$('.g8_classhide').css('display','block');
}else{
$('.g8_classhide').css('display','none');
$('.g8_classshow').css('display','block');
}
}

function ga3_5(){
if($('input#ga3_5').is(':checked')){
$('.ga3_classshow').css('display','none');
$('.ga3_classhide').css('display','block');
}else{
$('.ga3_classhide').css('display','none');
$('.ga3_classshow').css('display','block');
}
}

function ga4_5(){
if($('input#ga4_5').is(':checked')){
$('.ga4_classshow').css('display','none');
$('.ga4_classhide').css('display','block');
}else{
$('.ga4_classhide').css('display','none');
$('.ga4_classshow').css('display','block');
}
}
function ga5_5(){
if($('input#ga5_5').is(':checked')){
$('.ga5_classshow').css('display','none');
$('.ga5_classhide').css('display','block');
}else{
$('.ga5_classhide').css('display','none');
$('.ga5_classshow').css('display','block');
}
}


 function yalla(){


 var g1 = $('#g1').val();
 var g1_01 = g1.replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi, '/w136-h136-p/');
  g1_01 = g1_01.replace('=s120', '=w136-h136-p');
 
 var g9 = $('#g9').val();
 var g9_01 = g9.replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi, '/s160/');

   
 var g9_1 = 'الحجم بالنسبة لل'+$("#g9_1 option:selected").text();
 var g9_2 = $('#g9_1').val();
   if(g9_2 == 0){
     g9_1 = 'مقارنة الحجم';
   }else{
     g9_1 = 'الحجم بالنسبة لل'+$("#g9_1 option:selected").text();
   }
   
 
 var img1_url152 = g1_01;//صورة الحيوان حجم صغير
 var img1_url1600 = g1_01.replace('/w136-h136-p/','/s1600/');//صورة الحيوان حجم كبيرة
 img1_url1600 = img1_url1600.replace('=w136-h136-p', '=s1600');
   
 var img2_url160 = g9_01;//صورة مقارنة
 var img2_url1600 = g9_01.replace('/s160/','/s1600/');//صورة مقارنة
 
  var g2 = $('#g2').val();//الاسم الشائع
  var g2_En = $('#g2_En').val();//الاسم بالإنجليزية
  var g3 = $('#g3').val();//الاسم العلمي
  var g4 = $('#g4').val();//النوع
	if(g4 == 'None'){
		g4 = "";
	}else{
   		g4 = $("#g4 option:selected").text();
    }
	var g4_1 = $('#g4').val();//النوع
    var Birthandeggs = 'عدد الصغار';
	if(g4_1 != 'None'&&g4_1 != 'Mammals'){
     Birthandeggs = 'عدد البيض';
     $('#Birthandeggs').html('عدد البيض')
    }else{
     Birthandeggs = 'عدد الصغار';
     $('#Birthandeggs').html('عدد الصغار');
    }
 
 
 
 
 
  var g5 = $('#g5').val();//النظام الغذائي
	if(g5 == 'None'){
		g5 = "";
	}else{
    	g5 = $("#g5 option:selected").text();
    }
  var g6 = $('#g6_4').val();//متوسط العمر
  var g6_a = 0;
  if($('input#g6_5').is(':checked')){
  g6 = $('#g6_4').val();
 	if(g6 ==''){
 	 g6_a = 0;
  	  }else{
     g6_a = 1;
      }
  }else{
  var g6_1 = $('#g6_1').val();//من
  var g6_2 = $('#g6_2').val();//الى
  var g6_3 = $("#g6_3 option:selected").text();//الزمن
  	if(g6_1 == 0||g6_1 == ''){
    g6 = g6_2 + ' ' + g6_3
    }else{
    g6 = g6_1 + '–' + g6_2 + ' ' + g6_3
    }
 	if(g6_2 == 0){
 	 g6_a = 0;
  	}else{
    g6_a = 1;
    }
  }
 var g6_3_a = $("#g6_3").val();
 var g6_3_b = 0;
if (g6_3_a == 'None'){
g6_3_b = 0;
}else{
g6_3_b = 1;
}

 
  var g7 = $('#g7_4').val();//الحجم
  if($('input#g7_5').is(':checked')){
  g7 = $('#g7_4').val();
  }else{
  var g7_1 = $('#g7_1').val();//من
  var g7_2 = $('#g7_2').val();//الى
  var g7_3 = $("#g7_3 option:selected").text();//الكتلة
  	if(g7_1 == 0||g7_1 == ''){
    g7 = g7_2 + ' ' + g7_3
    }else{
    g7 = g7_1 + '–' + g7_2 + ' ' + g7_3
    }
  }
  var g7_3_a = $("#g7_3").val();
  
  
  var g8 = $('#g8_4').val();//الوزن
  if($('input#g8_5').is(':checked')){
  g8 = $('#g8_4').val();
  }else{
  var g8_1 = $('#g8_1').val();//من
  var g8_2 = $('#g8_2').val();//الى
  var g8_3 = $("#g8_3 option:selected").text();//الكتلة
  	if(g8_1 == 0||g8_1 == ''){
    g8 = g8_2 + ' ' + g8_3
    }else{
    g8 = g8_1 + '–' + g8_2 + ' ' + g8_3
    }
  }
 var g8_3_a = $("#g8_3").val();

 
 
    var g10 = $('#g10').val();//اتجاه السكان
 	if(g10=='Decreasing'){
    g10 = '-';
    }else if(g10=='stable'){
    g10 = '-+';
    }else if(g10=='Increasing'){
    g10 = '+';
    }
 
   var g11 = $('#g11').val();//الحالة
   var g12 = ''//هل تعلم
   var g12_json = '';
 
 
 

var MImages = '';
var MImages_json = '';
var getMultipleimagesnumbers = $("#MultipleimagesNum .Multipleimages");
var Multipleimagesvalnumber = "";
var i;
for (i = 0; i < getMultipleimagesnumbers.length; i++) {
  Multipleimagesvalnumber += $('#CreateData .Multipleimages:eq('+i+')').val()+ "\n";
}
	var SortingImgs = Multipleimagesvalnumber;
	SortingImgs = SortingImgs.trim();
	SortingImgs = SortingImgs.replace(/(\r\n|\n|\r)/gm,'\r\n\r\n');
	SortingImgs = SortingImgs.replace(/(\r\n|\r|\n){2,}/g, '$1\n');
	SortingImgs = SortingImgs.replace(/(\n\n)/gm, '</li><li>');
	SortingImgs = SortingImgs.replace(/(\r\n|\n|\r)/gm,'');
	SortingImgs = SortingImgs.replace(/<\/li>/gm, '</li>');
    if(SortingImgs ==""){
    SortingImgs = "";
    }else{
	SortingImgs = "<li>" + SortingImgs + "</li>"; 
	}
   


//for json
	var SortingImgsJson = Multipleimagesvalnumber;
	SortingImgsJson = SortingImgsJson.trim();
	SortingImgsJson = SortingImgsJson.replace(/(\r\n|\n|\r)/gm,'\r\n\r\n');
	SortingImgsJson = SortingImgsJson.replace(/(\r\n|\r|\n){2,}/g, '$1\n');
	SortingImgsJson = SortingImgsJson.replace(/(\n\n)/gm, '}{"img":"');
	SortingImgsJson = SortingImgsJson.replace(/(\r\n|\n|\r)/gm,'"');
	SortingImgsJson = SortingImgsJson.replace(/}/gm, '},');
    if(SortingImgsJson ==""){
    SortingImgsJson = "";
    }else{
	SortingImgsJson = '{"img":"' + SortingImgsJson + '"}'; 
	}
   
if(SortingImgs == ''){
MImages = '';
MImages_json = '';
}else{
MImages = '<ul>'+SortingImgs+'</ul>';
MImages_json = SortingImgsJson;
 }
   
 
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
var getinfonumbers = $("#DidYoUKnowNum .infonumbers");
var infovalnumber = "";
var i;
for (i = 0; i < getinfonumbers.length; i++) {
  infovalnumber += $('#CreateData .infonumbers:eq('+i+')').val()+ "\n";
}
	var SortingInfo = infovalnumber;
	SortingInfo = SortingInfo.trim();
	SortingInfo = SortingInfo.replace(/(\r\n|\n|\r)/gm,'\r\n\r\n');
	SortingInfo = SortingInfo.replace(/(\r\n|\r|\n){2,}/g, '$1\n');
	SortingInfo = SortingInfo.replace(/(\n\n)/gm, '</li><li>');
	SortingInfo = SortingInfo.replace(/(\r\n|\n|\r)/gm,'');
	SortingInfo = SortingInfo.replace(/<\/li>/gm, '</li>');
    if(SortingInfo ==""){
    SortingInfo = "";
    }else{
	SortingInfo = "<li>" + SortingInfo + "</li>"; 
	}
   


//for json
	var SortingInfoJson = infovalnumber;
	SortingInfoJson = SortingInfoJson.trim();
	SortingInfoJson = SortingInfoJson.replace(/(\r\n|\n|\r)/gm,'\r\n\r\n');
	SortingInfoJson = SortingInfoJson.replace(/(\r\n|\r|\n){2,}/g, '$1\n');
	SortingInfoJson = SortingInfoJson.replace(/(\n\n)/gm, '}{"info":"');
	SortingInfoJson = SortingInfoJson.replace(/(\r\n|\n|\r)/gm,'"');
	SortingInfoJson = SortingInfoJson.replace(/}/gm, '},');
    if(SortingInfoJson ==""){
    SortingInfoJson = "";
    }else{
	SortingInfoJson = '{"info":"' + SortingInfoJson + '"}'; 
	}


if(SortingInfo == ''){
g12 = '';
g12_json = '';
}else{
g12 = '<ul>'+SortingInfo+'</ul>';
g12_json = SortingInfoJson;
 }

 
 
   var ga3 = $('#ga3_4').val();// السرعة
  var ga3_a = 0;
  if($('input#ga3_5').is(':checked')){
  ga3 = $('#ga3_4').val();
 	if(ga3 ==''){
 	 ga3_a = 0;
  	  }else{
     ga3_a = 1;
      }
  }else{
  var ga3_1 = $('#ga3_1').val();//من
  var ga3_2 = $('#ga3_2').val();//الى
  var ga3_3 = $("#ga3_3 option:selected").text();//الزمن/الساعة
  	if(ga3_1 == 0||ga3_1 == ''){
    ga3 = ga3_2 + ' ' + ga3_3
    }else{
    ga3 = ga3_1 + '–' + ga3_2 + ' ' + ga3_3
    }
 	if(ga3_2 == 0||ga3_2 == ''){
 	 ga3_a = 0;
  	}else{
    ga3_a = 1;
    }
  }
 
 
   var ga4 = $('#ga4_4').val();//مدة الحمل
  var ga4_a = 0;
  if($('input#ga4_5').is(':checked')){
  ga4 = $('#ga4_4').val();
 	if(ga4 ==''){
 	 ga4_a = 0;
  	  }else{
     ga4_a = 1;
      }
  }else{
  var ga4_1 = $('#ga4_1').val();//من
  var ga4_2 = $('#ga4_2').val();//الى
  var ga4_3 = $("#ga4_3 option:selected").text();//زمن مدة الحمل
  var ga4_4 = $("#ga4_3 option:selected").val();//زمن مدة الحمل
  if(ga4_4 == "None"){
  ga4_3 = '';
  }
  	if(ga4_1 == 0||ga4_1 == ''){
    ga4 = ga4_2 + ' ' + ga4_3
    }else{
    ga4 = ga4_1 + '–' + ga4_2 + ' ' + ga4_3
    }
 	if(ga4_2 == 0||ga4_2 == ''){
 	 ga4_a = 0;
  	}else{
    ga4_a = 1;
    }
  }
 
 
   var ga5 = $('#ga5_4').val();//عدد الصغار
  var ga5_a = 0;
  if($('input#ga5_5').is(':checked')){
  ga5 = $('#ga5_4').val();
 	if(ga5 ==''){
 	 ga5_a = 0;
  	  }else{
     ga5_a = 1;
      }
  }else{
  var ga5_1 = $('#ga5_1').val();//من
  var ga5_2 = $('#ga5_2').val();//الى
  	if(ga5_1 == 0||ga5_1 == ''){
    ga5 = ga5_2
    }else{
    ga5 = ga5_1 + '–' + ga5_2
    }
 	if(ga5_2 == 0||ga5_2 == ''){
 	 ga5_a = 0;
  	}else{
    ga5_a = 1;
    }
  }
 
   var ga1 = $('#ga1').val();//الفصيلة
   var ga1_n = $('#ga1_n').val();//الرتبة
   var ga2 = $('#ga2').val();//الموطن البيئي
   var ga6 = $('#ga6').val();//اللون
    ga6 = ga6.replace(/-|,|،/gi, ',');
   var ga7 = $('#ga7').val();//الأعداء
    ga7 = ga7.replace(/-|,|،/gi, ',');
   var ga13 = $('#ga13').val();//الغذاء
    ga13 = ga13.replace(/-|,|،/gi, ',');
   
   var ga8_1 = $('#ga8_1').val();//مخصص1 
   var ga8 = $('#ga8').val();//مخصص1 االنتيجة
   
   var ga9_1 = $('#ga9_1').val();//مخصص2 
   var ga9 = $('#ga9').val();//مخصص2 النتيجة
   
   var ga10_1 = $('#ga10_1').val();//مخصص3
   var ga10 = $('#ga10').val();//مخصص3 النتيجة
   
   var ga11_1 = $('#ga11_1').val();//مخصص4
   var ga11 = $('#ga11').val();//مخصص4 النتيجة
   
   //var 00000 = $('#00000').val();//00000
 
 
 
var setmoreinfo = '';
var AnimalFamily = '';
var AnimalOrder = '';
if(ga3_a !== 0){
setmoreinfo += '<tr><td class="cardinfoname">السرعة</td><td class="answercardinfo">'+ga3+'</td></tr>';
}else{
ga3 = '';
}
if(ga4_a !== 0){
setmoreinfo += '<tr><td class="cardinfoname">مدة الحمل</td><td class="answercardinfo">'+ga4+'</td></tr>';
}else{
ga4 = '';
}
if(ga5_a !== 0){
setmoreinfo += '<tr><td class="cardinfoname">'+Birthandeggs+'</td><td class="answercardinfo">'+ga5+'</td></tr>';
}else{
ga5 = '';
Birthandeggs = '';
}
if(ga1 !== ''){
AnimalFamily = '<tr><td class="cardinfoname">الفصيلة</td><td id="getAnimalFamily" class="answercardinfo">'+ga1+'</td></tr>';
}else{
ga1 = '';
}
if(ga1_n !== ''){
setmoreinfo += '<tr><td class="cardinfoname">الرتبة</td><td class="answercardinfo">'+ga1_n+'</td></tr>';
}else{
ga1_n = '';
}
if(ga2 !== ''){
setmoreinfo += '<tr><td class="cardinfoname">الموطن البيئي</td><td class="answercardinfo">'+ga2+'</td></tr>';
}else{
ga2 = '';
}
if(ga6 !== ''){
setmoreinfo += '<tr><td class="cardinfoname">اللون</td><td class="answercardinfo">'+ga6+'</td></tr>';
}else{
ga6 = '';
}
if(ga7 !== ''){
setmoreinfo += '<tr><td class="cardinfoname">الأعداء</td><td class="answercardinfo">'+ga7+'</td></tr>';
}else{
ga7 = '';
}

if(ga8 !== ''){
setmoreinfo += '<tr><td class="cardinfoname">'+ga8_1+'</td><td class="answercardinfo">'+ga8+'</td></tr>';
}else{
ga8 = '';
ga8_1 = '';
}
if(ga9 !== ''){
setmoreinfo += '<tr><td class="cardinfoname">'+ga9_1+'</td><td class="answercardinfo">'+ga9+'</td></tr>';
}else{
ga9 = '';
ga9_1 = '';
}
if(ga10 !== ''){
setmoreinfo += '<tr><td class="cardinfoname">'+ga10_1+'</td><td class="answercardinfo">'+ga10+'</td></tr>';
}else{
ga10 = '';
ga10_1 = '';
}
if(ga11 !== ''){
setmoreinfo += '<tr><td class="cardinfoname">'+ga11_1+'</td><td class="answercardinfo">'+ga11+'</td></tr>';
}else{
ga11 = '';
ga11_1 = '';
}
if(ga13 !== ''){
setmoreinfo += '<tr><td class="cardinfoname">الغذاء</td><td class="answercardinfo">'+ga13+'</td></tr>';
}else{
ga13 = '';
}


 
function setcode(){
 var go = document.getElementById("newText");
 var htmlcode = '<table border="1" id="FastFactsTableNoShow"><tbody><tr><td>صورة الحيوان</td><td id="cardinfo0"><a href="'+img1_url1600+'" imageanchor="1"><img border="0" data-original-height="152" data-original-width="152" src="'+img1_url152+'" height="152" width="152"/></a></td></tr><tr><td>الاسم الشائع</td><td id="cardinfo1">'+g2+'</td></tr><tr><td>الاسم بالإنجليزية</td><td id="cardinfo1_En">'+g2_En+'</td></tr><tr><td>الاسم العلمي</td><td id="cardinfo2">'+g3+'</td></tr><tr><td>النوع</td><td id="cardinfo3">'+g4+'</td></tr>'+AnimalFamily+'<tr><td>النظام الغذائي</td><td id="cardinfo4">'+g5+'</td></tr><tr><td>متوسط العمر الافتراضي في البرية</td><td id="cardinfo5">'+g6+'</td></tr><tr><td>الحجم</td><td id="cardinfo6">'+g7+'</td></tr><tr><td>الوزن</td><td id="cardinfo7">'+g8+'</td></tr><tr><td id="cardinfo08">'+g9_1+'</td></tr><tr><td id="cardinfo8"><a href="'+img2_url160+'" imageanchor="1"><img border="0" data-original-height="100" data-original-width="160" src="'+img2_url1600+'"/></a></td></tr><tr><td>حالة القائمة الحمراء</td><td id="cardinfo9">'+g11+'</td></tr><tr><td>إتجاه السكان الحالي</td><td id="cardinfo10">'+g10+'</td></tr><tr><td>هل كنت تعلم؟</td><td id="cardinfo11">'+g12+'</td></tr></tbody><tbody id="cardinfonew">'+setmoreinfo+'</tbody></table>';
 go.value = htmlcode;
  
  }
  

var g10_Answer,g11_Answer,g10_Num;
  	if(ga3_2 == 0||ga3_2 == ''){
 	 ga3 = '';
  	}else{
    ga3 = ga3;
    }
  	if(ga4_2 == 0||ga4_2 == ''){
 	 ga4 = '';
  	}else{
    ga4 = ga4;
    }
	if(g10 == '-+'){
      g10_Answer
    }
   
    if(g11 == '1'){
    g11_Answer = 'الأنواع غير المهددة';
    }else if(g11 == '2'){
    g11_Answer = 'الأنواع القريبة من التهديد';
    }else if(g11 == '3'){
    g11_Answer = 'الأنواع المعرضة للانقراض';
    }else if(g11 == '4'){
    g11_Answer = 'الأنواع المهددة بالانقراض';
    }else if(g11 == '5'){
    g11_Answer = 'الأنواع المهددة بشكل حرج بالانقراض';
    }else if(g11 =='6'){
    g11_Answer = 'الأنواع المنقرضة من الحياة البرية';
    }else if(g11 == '7'){
    g11_Answer = 'الأنواع المنقرضة';
    }else if(g11 == '8'){
    g11_Answer = 'الأنواع التي لا تتوفر عنها معلومات كافية';
    }else if(g11 == '9'){
    g11_Answer = 'الأنواع التي لم تقيَّم';
    }else{
    g11_Answer = '';
    }
   
   
   
    if(g10 == '+-'){
    g10_Answer = 'مستقر';
    g10_Num = 1;
    }else if(g10 == '-+'){
    g10_Answer = 'مستقر';
    g10_Num = 1;
    }else if(g10 == '-'){
    g10_Answer = 'تناقص';
    g10_Num = 0;
    }else if(g10 == '+'){
    g10_Answer = 'إزدياد';
    g10_Num = 2;
    }else{
    g10_Answer = 'غير معروف';
    g10_Num = 3;
    }
   
   

var getd = new Date();
var dd = String(getd.getDate()).padStart(2, '0');
var mm = String(getd.getMonth() + 1).padStart(2, '0');
var yyyy = getd.getFullYear();
   
var dateID = getd.getTime();
var dateToday = mm + '/' + dd + '/' + yyyy;
var ImgCover_Answer = $("#ImgCover").val();
var SourceInfo_Title = $("#SourceInfo_Title").val();
var SourceInfo_Link = $("#SourceInfo_Link").val();

   

   
   
$("#CommonName_Question").val("الإسم الشائع");
$("#CommonName_Answer").val(g2);
$("#CommonName_Answer_En").val(g2_En);
$("#ScientificName_Question").val("الإسم العلمي");
$("#ScientificName_Answer").val(g3);
$("#Type_Question").val("الطائفة");
$("#Type_Answer").val(g4);
$("#Order_Question").val("الرتبة");
$("#Order_Answer").val(ga1_n);
$("#Subfamily_Question").val("الفصيلة");
$("#Subfamily_Answer").val(ga1);
$("#Diet_Question").val("النظام الغذائي");
$("#Diet_Answer").val(g5);
$("#Age_Question").val("متوسط العمر");
$("#Age_Answer").val(g6);
$("#Size_Question").val("الحجم");
$("#Size_Answer").val(g7);
$("#Weight_Question").val("الوزن");
$("#Weight_Answer").val(g8);
$("#PopulationTrend_Question").val("إتجاه السكان الحالي");
$("#PopulationTrend_Answer").val(g10_Answer);
$("#PopulationTrend_Code").val(g10);
$("#PopulationTrend_Num").val(g10_Num);
$("#RedList_Question").val("حالة القائمة الحمراء (IUCN)");
$("#RedList_Answer").val(g11_Answer);
$("#RedList_Num").val(g11);
$("#Speed_Question").val("السرعة");
$("#Speed_Answer").val(ga3);
$("#DurationPregnancy_Question").val("مدة الحمل");
$("#DurationPregnancy_Answer").val(ga4);
$("#NumBirths_Question").val(Birthandeggs);
$("#NumBirths_Answer").val(ga5);
$("#EcologicalHabitat_Question").val("الموطن البيئي");
$("#EcologicalHabitat_Answer").val(ga2);
$("#Color_Question").val("الألوان");
$("#Color_Answer").val(ga6);
$("#Enemy_Question").val("الأعداء");
$("#Enemy_Answer").val(ga7);
$("#FeedOn_Question").val("الغذاء");
$("#FeedOn_Answer").val(ga13);
$("#Img_Question").val("صورة الحيوان");
$("#Img_Answer").val(g1);
$("#ImgCover_Question").val("صورة الغلاف");
$("#ImgCover_Answer").val(ImgCover_Answer);
$("#MultipleImages_Question").val("صور متعددة");
$("#MultipleImages_Answer").val(MImages);
$("#ImgInDrive_Question").val("صورة الحيوان في درايف");
$("#ImgSizeComparison_Question").val(g9_1);
$("#ImgSizeComparison_Answer").val(img2_url1600);
$("#info1_Question").val(ga8_1);
$("#info1_Answer").val(ga8);
$("#info2_Question").val(ga9_1);
$("#info2_Answer").val(ga9);
$("#info3_Question").val(ga10_1);
$("#info3_Answer").val(ga10);
$("#info4_Question").val(ga11_1);
$("#info4_Answer").val(ga11);
$("#DidYouKnow_Question").val("هل تعلم");
$("#DidYouKnow_Answer").val(g12);
$("#SourceInfo_Question").val("المراجع");
$("#SourceInfo_Answer_Title").val(SourceInfo_Title);
$("#SourceInfo_Answer_link").val(SourceInfo_Link);
$("#PostUrlInSite_Question").val("رابط المنشور");
$("#PostIdInSite_Question").val("معرف المنشور");


   

    $(".gform textarea").each(function(){
        if ($.trim($(this).val()).length == 0){
            $(this).val("NoData");
        }
        else{
            $(this).val();
        }
    });
  
  
var UserAccountIdJ = $('#UserAccountId').val();
var UserLoginWithJ = $('#UserLoginWith').val();
var UserAccountImgJ = $('#UserAccountImg').val();
var UserNameJ = $('#UserName').val();
var UserEmailJ = $('#UserEmail').val();
var Name_publishingJ = $('#Name_publishing').val();
var PageTitleJ = $('#PageTitle').val();
var PageLinkJ = $('#PageLink').val();
var TheStateJ = $('#TheState').val();
var CountryCodeJ = $('#CountryCode').val();
var IPAddressJ = $('#IPAddress').val();
var ScreenWidthJ = $('#ScreenWidth').val();
var ScreenHeightJ = $('#ScreenHeight').val();
var MoreInformationJ = $('#MoreInformation').val();
var ImgInDriveJ = $('#ImgInDrive_Answer').val();
var ImgCoverJ = $('#ImgCover').val();
var MultipleImagesJ = MImages_json;
var PostUrlJ = $("#PostUrlInSite_Answer").val();
var PostIdJ = $("#PostIdInSite_Answer").val();
   
   
var jsoncode = '';

jsoncode += '{';
jsoncode += '"info": {';
jsoncode += '"ResponseNumber": {';
jsoncode += '"Question": "تاريخ النشر",';
jsoncode += '"Answer": "'+dateToday+'"';
jsoncode += '},';
jsoncode += '"dateID": {';
jsoncode += '"Question": "ID",';
jsoncode += '"Answer": "'+dateID+'"';
jsoncode += '},';
jsoncode += '"CommonName": {';
jsoncode += '"Question": "الإسم الشائع",';
jsoncode += '"Answer": "'+g2+'",';
jsoncode += '"Answer_En": "'+g2_En+'"';
jsoncode += '},';
jsoncode += '"ScientificName": {';
jsoncode += '"Question": "الإسم العلمي",';
jsoncode += '"Answer": "'+g3+'"';
jsoncode += '},';
jsoncode += '"Type": {';
jsoncode += '"Question": "الطائفة",';
jsoncode += '"Answer": "'+g4+'"';
jsoncode += '},';
jsoncode += '"Order": {';
jsoncode += '"Question": "الرتبة",';
jsoncode += '"Answer": "'+ga1_n+'"';
jsoncode += '},';
jsoncode += '"Subfamily": {';
jsoncode += '"Question": "الفصيلة",';
jsoncode += '"Answer": "'+ga1+'"';
jsoncode += '},';
jsoncode += '"Diet": {';
jsoncode += '"Question": "النظام الغذائي",';
jsoncode += '"Answer": "'+g5+'"';
jsoncode += '},';
jsoncode += '"Age": {';
jsoncode += '"Question": "متوسط العمر",';
jsoncode += '"Answer": "'+g6+'"';
jsoncode += '},';
jsoncode += '"Size": {';
jsoncode += '"Question": "الحجم",';
jsoncode += '"Answer": "'+g7+'"';
jsoncode += '},';
jsoncode += '"Weight": {';
jsoncode += '"Question": "الوزن",';
jsoncode += '"Answer": "'+g8+'"';
jsoncode += '},';
jsoncode += '"PopulationTrend": {';
jsoncode += '"Question": "إتجاه السكان الحالي",';
jsoncode += '"Answer": "'+g10_Answer+'",';
jsoncode += '"Code": "'+g10+'",';
jsoncode += '"Num": '+g10_Num;
jsoncode += '},';
jsoncode += '"RedList": {';
jsoncode += '"Question": "حالة القائمة الحمراء (IUCN)",';
jsoncode += '"Answer": "'+g11_Answer+'",';
jsoncode += '"Num": "'+g11+'"';
jsoncode += '},';
jsoncode += '"Speed": {';
jsoncode += '"Question": "السرعة",';
jsoncode += '"Answer": "'+ga3+'"';
jsoncode += '},';
jsoncode += '"DurationPregnancy": {';
jsoncode += '"Question": "مدة الحمل",';
jsoncode += '"Answer": "'+ga4+'"';
jsoncode += '},';
jsoncode += '"NumBirths": {';
jsoncode += '"Question": "'+Birthandeggs+'",';
jsoncode += '"Answer": "'+ga5+'"';
jsoncode += '},';
jsoncode += '"EcologicalHabitat": {';
jsoncode += '"Question": "الموطن البيئي",';
jsoncode += '"Answer": "'+ga2+'"';
jsoncode += '},';
jsoncode += '"Color": {';
jsoncode += '"Question": "الألوان",';
jsoncode += '"Answer": "'+ga6+'"';
jsoncode += '},';
jsoncode += '"Enemy": {';
jsoncode += '"Question": "الأعداء",';
jsoncode += '"Answer": "'+ga7+'"';
jsoncode += '},';
jsoncode += '"FeedOn": {';
jsoncode += '"Question": "الغذاء",';
jsoncode += '"Answer": "'+ga13+'"';
jsoncode += '},';
jsoncode += '"Img": {';
jsoncode += '"Question": "صورة الحيوان",';
jsoncode += '"Answer": "'+g1+'"';
jsoncode += '},';
jsoncode += '"ImgSizeComparison": {';
jsoncode += '"Question": "'+g9_1+'",';
jsoncode += '"Answer": "'+img2_url1600+'"';
jsoncode += '},';
jsoncode += '"ImgCover": {';
jsoncode += '"Question": "صورة الغلاف",';
jsoncode += '"Answer": "'+ImgCoverJ+'"';
jsoncode += '},';
jsoncode += '"MultipleImages": {';
jsoncode += '"Question": "صورة متعددة",';
jsoncode += '"Answer": [';
jsoncode += MultipleImagesJ;
jsoncode += ']';
jsoncode += '},';
jsoncode += '"ImgInDrive": {';
jsoncode += '"Question": "صورة الحيوان في درايف",';
jsoncode += '"Answer": "'+ImgInDriveJ+'"';
jsoncode += '},';
jsoncode += '"info1": {';
jsoncode += '"Question": "'+ga8_1+'",';
jsoncode += '"Answer": "'+ga8+'"';
jsoncode += '},';
jsoncode += '"info2": {';
jsoncode += '"Question": "'+ga9_1+'",';
jsoncode += '"Answer": "'+ga9+'"';
jsoncode += '},';
jsoncode += '"info3": {';
jsoncode += '"Question": "'+ga10_1+'",';
jsoncode += '"Answer": "'+ga10+'"';
jsoncode += '},';
jsoncode += '"info4": {';
jsoncode += '"Question": "'+ga11_1+'",';
jsoncode += '"Answer": "'+ga11+'"';
jsoncode += '},';
jsoncode += '"DidYouKnow": {';
jsoncode += '"Question": "هل تعلم",';
jsoncode += '"Answer": [';
jsoncode += g12_json;
jsoncode += ']';
jsoncode += '},';
jsoncode += '"modalcardinf": {';
jsoncode += '"IUCN_AR": "';
jsoncode += "<hr/><div class='FastFactsmodalcardinfListContainer'><div class='factsLabel_3x2xkx'><span class='factsKey_rambtt'>حالة القائمة الحمراء لـ<span title='الإتحاد الدولي لحفظ الطبيعة'>IUCN<span>: </span></span><span class='factsKeyValue_card'><div id='mymodalcardinf' class='modalcardinf'><div class='modalcardinf-content'><div class='modalcardinf-header'><span class='close'>&times;</span></div><div class='modalcardinf-body'><div class='container_9m9ayv'><amp-img class='image_IUCN i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout' layout='fixed' src='https://lh3.googleusercontent.com/-zK8mjZ6lD-s/XW7RGgx5YAI/AAAAAAAADEo/AJsZz1IUNg0HDrSU7nbZd3PUJD-xPkB6QCLcBGAs/s70/iucn.adapt.133.png' width='70' height='64' i-amphtml-layout='fixed' style='width:70px;height:64px;--loader-delay-offset:0ms!important'><img decoding='async' src='https://lh3.googleusercontent.com/-zK8mjZ6lD-s/XW7RGgx5YAI/AAAAAAAADEo/AJsZz1IUNg0HDrSU7nbZd3PUJD-xPkB6QCLcBGAs/s70/iucn.adapt.133.png' class='i-amphtml-fill-content i-amphtml-replaced-content' /></amp-img><p class='descriptionaboutIUCN'>القائمة الحمراء للأنواع المهددة بالانقراض من الاتحاد الدولي لحفظ الطبيعة (IUCN) هي النهج العالمي الأكثر شمولية وموضوعية لتقييم حالة حفظ الأنواع النباتية والحيوانية.</p><div class='dividerredlist'></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor160'><span>غم</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع غير المهددة</p><p class='descriptionredlist'>الأنواع المنتشرة والمتوفرة في الطبيعة</p></div></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor174'><span>قخ</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع القريبة من التهديد</p><p class='descriptionredlist'>الأنواع التي لا تتأهل كي تصنف ضمن الفئات المذكورة في التالي ولكنها من المرجح أن تصل إلى إحدى هذه الفئات في المستقبل القريب</p></div></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor249'><span>خد</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع المعرضة للانقراض</p><p class='descriptionredlist'>الأنواع المعرضة لخطورة الانقراض من الطبيعة</p></div></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor235'><span>خم</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع المهددة بالانقراض</p><p class='descriptionredlist'>الأنواع المعرضة بشكل كبير لخطورة الانقراض من الطبيعة</p></div></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor215'><span>خق</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع المهددة بشكل حرج بالانقراض</p><p class='descriptionredlist'>الأنواع المعرضة بشدة كبيرة جدا لخطورة الانقراض من الطبيعة</p></div></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor60'><span>قب</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع المنقرضة من الحياة البرية</p><p class='descriptionredlist'>الأنواع التي تتواجد فقط في الأسر أو التربية الداخلية أو تتواجد في تجمعات غير طبيعية (تتواجد بعيدا عن التوزيع الطبيعي الأصلي لهذه الفئة)</p></div></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor25'><span>نق</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع المنقرضة</p><p class='descriptionredlist'>لا يوجد في البرية او في الأسر من هذا الفصيل على قيد الحياة</p></div></div><div class='itemredList'><div class='itemredListtext'><p class='nameredlist'>الأنواع التي لا تتوفر عنها معلومات كافية</p><p class='descriptionredlist'>لا تتوفر عنها معلومات عن توزيعها في الطبيعة أو تعرضها للتهديدات</p></div></div><div class='itemredList'><div class='itemredListtext'><p class='nameredlist'>الأنواع التي لم تقيَّم</p><p class='descriptionredlist'>الأنواع التي لم يتم تقييمها بعد</p></div></div></div></div></div></div><a href='#IUCN' id='Btnscardinfcardinf' class='btncardinfOpenmodalcardinfcard'></a></span><span id='settextstatus' class='statusValueText'></span></div></div><div class='factsextinctionsContainer000'><span class='factsextinctionsLine000'></span><div class='factsextinctions0001'><div id='setclassList1' class='extinction_notthis'><span>غم</span></div><div id='setclassList2' class='extinction_notthis'><span>قخ</span></div><div id='setclassList3' class='extinction_notthis'><span>خد</span></div><div id='setclassList4' class='extinction_notthis'><span>خم</span></div><div id='setclassList5' class='extinction_notthis'><span>خق</span></div><div id='setclassList6' class='extinction_notthis'><span>قب</span></div><div id='setclassList7' class='extinction_notthis'><span>نق</span></div></div><span class='Labelcard0001'>أقل خطورة</span><span class='Labelcard0002'>منقرضة</span></div>";
jsoncode += '",';
jsoncode += '"IUCN_EN": ""';
jsoncode += '},';

jsoncode += '"SourceInfo": {';
jsoncode += '"Question": "المراجع",';
jsoncode += '"Answer_Title": "'+SourceInfo_Title+'",';
jsoncode += '"Answer_link": "'+SourceInfo_Link+'"';
jsoncode += '},';

   
jsoncode += '"PostUrl": {';
jsoncode += '"Question": "رابط المنشور",';
jsoncode += '"Answer": "'+PostUrlJ+'"';
jsoncode += '},';
   
jsoncode += '"PostId": {';
jsoncode += '"Question": "معرف المنشور",';
jsoncode += '"Answer_link": "'+PostIdJ+'"';
jsoncode += '},';
   
jsoncode += '"UserAccountId": {';
jsoncode += '"Question": "معرف حساب المستخدم",';
jsoncode += '"Answer": "'+UserAccountIdJ+'"';
jsoncode += '},';

jsoncode += '"UserLoginWith": {';
jsoncode += '"Question": "تسجيل دخول بإستخدام",';
jsoncode += '"Answer": "'+UserLoginWithJ+'"';
jsoncode += '},';

jsoncode += '"UserAccountImg": {';
jsoncode += '"Question": "صورة الملف الشخصي للمستخدم",';
jsoncode += '"Answer": "'+UserAccountImgJ+'"';
jsoncode += '},';

jsoncode += '"UserName": {';
jsoncode += '"Question": "إسم المستخدم",';
jsoncode += '"Answer": "'+UserNameJ+'"';
jsoncode += '},';

jsoncode += '"UserEmail": {';
jsoncode += '"Question": "البريد الإلكتروني",';
jsoncode += '"Answer": "'+UserEmailJ+'"';
jsoncode += '},';

jsoncode += '"Name_publishing": {';
jsoncode += '"Question": "اظهار معلومات الناشر",';
jsoncode += '"Answer": "'+Name_publishingJ+'"';
jsoncode += '},';

jsoncode += '"PageTitle": {';
jsoncode += '"Question": "عنوان الصفحة",';
jsoncode += '"Answer": "'+PageTitleJ+'"';
jsoncode += '},';

jsoncode += '"PageLink": {';
jsoncode += '"Question": "رابط الصفحة",';
jsoncode += '"Answer": "'+PageLinkJ+'"';
jsoncode += '},';

jsoncode += '"TheState": {';
jsoncode += '"Question": "الدولة",';
jsoncode += '"Answer": "'+TheStateJ+'"';
jsoncode += '},';

jsoncode += '"CountryCode": {';
jsoncode += '"Question": "رمز الدولة",';
jsoncode += '"Answer": "'+CountryCodeJ+'"';
jsoncode += '},';

jsoncode += '"IPAddress": {';
jsoncode += '"Question": "عنوان IP",';
jsoncode += '"Answer": "'+IPAddressJ+'"';
jsoncode += '},';

jsoncode += '"ScreenWidth": {';
jsoncode += '"Question": "عرض الشاشة",';
jsoncode += '"Answer": "'+ScreenWidthJ+'"';
jsoncode += '},';
   
jsoncode += '"ScreenHeight": {';
jsoncode += '"Question": "إرتفاع الشاشة",';
jsoncode += '"Answer": "'+ScreenHeightJ+'"';
jsoncode += '},';

jsoncode += '"MoreInformation": {';
jsoncode += '"Question": "معلومات إضافية",';
jsoncode += '"Answer": "'+MoreInformationJ+'"';
jsoncode += '}';
jsoncode += '}';
jsoncode += '}';
$("#textareajson").val(jsoncode);


   
   

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  if($('input#g6_5').is(':checked')){
g6_3_b = '1';
}
 if($('input#g7_5').is(':checked')){
g7_3_a = '1';
}
  if($('input#g8_5').is(':checked')){
  g8_3_a = '1';
  }
  



var UserAccount = $("#UserAccountId").val();

  if(g2 == '' || g1 == '' || UserAccount == 'NoData'){
document.getElementById("newText").value = '';
$("#SetErrorSummary").html("");
$('#SetErrorSummary').append('<div class="alert alert-danger alert-dismissible fade show" role="alert"><h6 class="alert-heading"> خطأ</h6><hr/><ol></ol><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
$("#PreviewCardIfo").css("display","none");


    
if(g2 == ''){
$("#SetErrorSummary ol").append("<li class='Nameisrequired'><strong>الإسم الشائع</strong> مطلوب</li>");
}

if(g1 == ''){
$("#SetErrorSummary ol").append("<li class='Photoisrequired'><strong>الصورة</strong> مطلوبة</li>");
}

if(UserAccount == 'NoData'){
$("#SetErrorSummary ol").append("<li><strong>تسجيل الدخول</strong> مطلوب</li>");
}
    
  }else{
$("#SetErrorSummary").html("");
$("#PreviewCardIfo").css("display","none");

setcode();

  }
   
 }
 
 function Previews(){
yalla();
var testget = $("#SetErrorSummary").html();
  if(testget == ""){
PreviewJson();
$("#PreviewCardIfo").css("display","block");
ShowPreviewCardIfo();
}
}

function test(){
$('#g1').val('https://1.bp.blogspot.com/-2YaVph8lejQ/X8eMqCWqiRI/AAAAAAAAFX0/02e-pdH06NwrMtYH2M-KxC6tTqF0YAUogCLcBGAsYHQ/h120/41bfcd0afacc650bdac09b425dbe91e37b4cd365.jpeg');
$('#g9').val('https://lh3.googleusercontent.com/-UL8EVJRbenc/X8eNC29FklI/AAAAAAAAFYk/DzMlWBVJL1UZxHZNuoXrFkhXqmdTb7bEQCLcBGAsYHQ/h120/arctic-hare_size.gif');
$('#g9_1').val(3);
$('#g2').val('أرنب قطبي');
$('#g3').val('Lepus arcticus');
$('#g4').val('Mammals');
$('#g5').val('Herbivore');
$('#g6_4').val('8 سنوات');
$('#g6_1').val(3);
$('#g6_2').val(8);
$('#g6_3').val('Year');
$('#g7_4').val('45 – 67 سم');
$('#g7_1').val(45);
$('#g7_2').val(67);
$('#g7_3').val('cm');
$('#g8_4').val('3 – 7 كغم');
$('#g8_1').val(3);
$('#g8_2').val(7);
$('#g8_3').val('kg');
$('#g10').val('stable');
$('#g11').val(1);
$('#DidYoUKnowNum .infonumbers:eq(0)').val('تقف الأرانب القطبية الشمالية على أرجلها الخلفية لمراقبة الحيوانات المفترسة.');
$('#DidYoUKnowNum .infonumbers:eq(1)').val('تتغذى الأرانب القطبية الشمالية في الغالب على صفصاف القطب الشمالي ، وتخرجها من تحت الثلج.');
$('#DidYoUKnowNum .infonumbers:eq(2)').val('الأرانب الصغيرة في القطب الشمالي بنية اللون. تتحول إلى اللون الأبيض في ما يقارب 4 أسابيع.');
 }
