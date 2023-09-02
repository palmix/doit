$(document).ready(function() {
$('.loadingFullscreen').addClass('d-none');
});

function selecttypetext(){
$('#g4').val('none');
$('#g9_1').val('none');
$('#AnimalClass').val('none');
$('#g5').val('none');
$('#g10').val('none');
$('#g11').val('none');
$('#ga8_1').val('none');
$('#Multipleimages').val('none');

var selecttypetextvar = $('#selecttypetext').val();
if(selecttypetextvar != 'sortby1'){
  $('.sortby1').addClass('d-none');
}else{
  $('.sortby1').removeClass('d-none');
}
if(selecttypetextvar != 'sortby2'){
  $('.sortby2').addClass('d-none');
}else{
  $('.sortby2').removeClass('d-none');
}
if(selecttypetextvar != 'sortby3'){
  $('.sortby3').addClass('d-none');
}else{
  $('.sortby3').removeClass('d-none');
}
if(selecttypetextvar != 'sortby4'){
  $('.sortby4').addClass('d-none');
}else{
  $('.sortby4').removeClass('d-none');
}
if(selecttypetextvar != 'sortby5'){
  $('.sortby5').addClass('d-none');
}else{
  $('.sortby5').removeClass('d-none');
}
if(selecttypetextvar != 'sortby6'){
  $('.sortby6').addClass('d-none');
} else{
  $('.sortby6').removeClass('d-none');
}
if(selecttypetextvar != 'sortby7'){
  $('.sortby7').addClass('d-none');
} else{
  $('.sortby7').removeClass('d-none');
}
if(selecttypetextvar != 'sortby8'){
  $('.sortby8').addClass('d-none');
}else{
  $('.sortby8').removeClass('d-none');
}
  
$('#btnfilter').attr("disabled", "disabled");

  
}
   
   
   
   
   
   
   
function g9_1(){
var s = $('#g9_1').val();
if(s != 'none'){
$('#btnfilter').removeAttr("disabled");
}else{
$('#btnfilter').attr("disabled","disabled");
}
}

   

  
  
function g4(){
var s = $('#g4').val();
if(s != 'none'){
$('#btnfilter').removeAttr("disabled");
}else{
$('#btnfilter').attr("disabled","disabled");
}
}
  
  
function AnimalClass(){
var s = $('#AnimalClass').val();
if(s != 'none'){
$('#btnfilter').removeAttr("disabled");
}else{
$('#btnfilter').attr("disabled","disabled");
}
}
  
  
function g5(){
var s = $('#g5').val();
if(s != 'none'){
$('#btnfilter').removeAttr("disabled");
}else{
$('#btnfilter').attr("disabled","disabled");
}
}
  
function g10(){
var s = $('#g10').val();
if(s != 'none'){
$('#btnfilter').removeAttr("disabled");
}else{
$('#btnfilter').attr("disabled","disabled");
}
}
  
  
function g11(){
var s = $('#g11').val();
if(s != 'none'){
$('#btnfilter').removeAttr("disabled");
}else{
$('#btnfilter').attr("disabled","disabled");
}
}
  
  
function ga8_1(){
var s = $('#ga8_1').val();
if(s != 'none'){
$('#btnfilter').removeAttr("disabled");
}else{
$('#btnfilter').attr("disabled","disabled");
}
}
  
function Multipleimages(){
var s = $('#Multipleimages').val();
if(s != 'none'){
$('#btnfilter').removeAttr("disabled");
}else{
$('#btnfilter').attr("disabled","disabled");
}
}




 function recost_error(error){
$('.loadingFullscreen').addClass('d-none');
   $("#cardslistall").html('<div class="alert alert-danger d-flex align-items-center" role="alert"><i class="fa fa-info-circle mx-2" aria-hidden="true"></i><div>حدث خطأ ما! يرجى إعادة المحاولة، رمز الخطأ: '+error.status+'</div></div>');
 }
 function recost_done(recosts){
$("#selecttypetext").removeAttr("disabled");
$("#btnfilter .spinner-border").addClass("d-none");
var UserAccountIdcw = "";
var getAcS = checkCookie('get','AcSettings',null);
if(getSC !== undefined && getSC != ''){
UserAccountIdcw = getAcS.UserAccountId;
}


$("#btnfilter").click(function() {



     
var cardse = '<div class="row row-cols-1 row-cols-md-3 g-4 mt-2">';
var cards1 = [cardse];
var cards1num=0;
     
     
     
var windowW = window.innerWidth;
var windowH = window.innerHeight;

   
   

var recosts_each = recosts.sheets[0].data[0].rowData.reverse();
var CommonName_Question_id = recosts_each[1].values[1].formattedValue;//id
if(CommonName_Question_id == "ID"){
recosts_each = recosts.sheets[0].data[0].rowData.reverse();
}

var recosts_Questions = recosts.sheets[0].data[0].rowData[1];
var item_Question = recosts.sheets[0].data[0].rowData[1];
var CommonName_Question = recosts_Questions.values[4].formattedValue;//الإسم الشائع


if(CommonName_Question != "الإسم الشائع"){
 recosts_Questions = recosts.sheets[0].data[0].rowData.reverse()[1];
 item_Question = recosts.sheets[0].data[0].rowData.reverse()[1];
}

  

var CommonName_Question = item_Question.values[4].formattedValue;//الإسم الشائع
var ScientificName_Question = item_Question.values[6].formattedValue;//الاسم العلمي
var Type_Question = item_Question.values[7].formattedValue;//النوع
var Class_Question = item_Question.values[8].formattedValue;//الطائفة
var Order_Question = item_Question.values[10].formattedValue;//الرتبة
var Subfamily_Question = item_Question.values[11].formattedValue;//الفصيلة
var Diet_Question = item_Question.values[12].formattedValue;//النظام الغذائي
var Age_Question = item_Question.values[13].formattedValue;//متوسط العمر
var Size_Question = item_Question.values[14].formattedValue;//الحجم
var Weight_Question = item_Question.values[15].formattedValue;//الوزن
var RedList_Question = item_Question.values[19].formattedValue;//حالة القائمة الحمراء (IUCN)
var Speed_Question = item_Question.values[21].formattedValue;//السرعة
var DurationPregnancy_Question = item_Question.values[22].formattedValue;//مدة الحمل
var PopulationTrend_Question = item_Question.values[16].formattedValue;//إتجاه السكان الحالي
var EcologicalHabitat_Question = item_Question.values[25].formattedValue;//الموطن البيئي
var Color_Question = item_Question.values[26].formattedValue;//الألوان
var Enemy_Question = item_Question.values[27].formattedValue;//الأعداء
var FeedOn_Question = item_Question.values[28].formattedValue;//الغذاء
var Img_Question = item_Question.values[29].formattedValue;//صورة الحيوان
var ImgCover_Question = item_Question.values[30].formattedValue;//صورة الغلاف
var MultipleImages_Question = item_Question.values[31].formattedValue;//صور متعددة
var JsonFileIdInDrive_Question = item_Question.values[32].formattedValue;//ملف Json
var DidYouKnow_Question = item_Question.values[43].formattedValue;//هل تعلم
var SourceInfo_Question = item_Question.values[52].formattedValue;//المراجع
var PostUrlInSite_Question = item_Question.values[61].formattedValue;//رابط المنشور
var PostIdInSite_Question = item_Question.values[62].formattedValue;//معرف المنشور هو
var SummaryPage_Question = item_Question.values[63].formattedValue;//وصف الموضوع
var ImgMaps_Question = item_Question.values[64].formattedValue;//صورة خريطة التواجد
var ImgMaps_table_Question = item_Question.values[67].formattedValue;//صور متعددة


   
$.each(recosts_each,function( i, item ) {



var Img_W = 214;
var Img_H = 160;
var widthcard = '15rem;';
var paddingx = 2;
var margint = 2;
var mx = 'auto'
var windowW = window.innerWidth;
var windowH = window.innerHeight;
if(windowW <= 350){
	Img_W = 272;
	Img_H = 203;
	widthcard = '100%;';
	paddingx = 3;
	margint = 2;
    
}else if(windowW >= 351 && windowW <= 400 ){
	Img_W = 166;
	Img_H = 124;
	widthcard = '11rem;';
	paddingx = 1;
	margint = 2;
    
}else if(windowW >= 401 && windowW <= 457 ){
	Img_W = 182;
	Img_H = 136;
	widthcard = '12rem;';
	paddingx = 1;
	margint = 2;
    
}else if(windowW >= 458 && windowW <= 934 ){
	Img_W = 190;
	Img_H = 148;
	widthcard = '13rem;';
	paddingx = 1;
	margint = 2;
    
}else if(windowW >= 935){
	Img_W = 214;
	Img_H = 160;
	widthcard = '15rem;';
	paddingx = 2;
	margint = 3;
    mx = 0;
    
}






      
var Timestamp = item.values[0].formattedValue;//تاريخ النشر
var ResponseNumber = item.values[1].formattedValue;//ID
var Published = item.values[2].formattedValue;//حالة النشر
var UserStatus = item.values[3].formattedValue;//حالة الحساب
var CommonName_Answer = item.values[4].formattedValue;//الإسم الشائع
var CommonName_Answer_En = item.values[5].formattedValue;//الإسم الشائع بالانجليزية هو
var ScientificName_Answer = item.values[6].formattedValue;//الاسم العلمي
var Type_Answer = item.values[7].formattedValue;//النوع
var Class_AnswerAR = item.values[8].formattedValue;//الطائفة
var Class_AnswerEN = item.values[9].formattedValue;//الإسم العلمي للطائفة
var Order_Answer = item.values[10].formattedValue;//الرتبة
var Subfamily_Answer = item.values[11].formattedValue;//الفصيلة
var Diet_Answer = item.values[12].formattedValue;//النظام الغذائي
var Age_Answer = item.values[13].formattedValue;//متوسط العمر
var Size_Answer = item.values[14].formattedValue;//الحجم
var Weight_Answer = item.values[15].formattedValue;//الوزن
var PopulationTrend_Answer = item.values[16].formattedValue;//إتجاه السكان الحالي
var PopulationTrend_Code = item.values[17].formattedValue;//رمز إتجاه السكان الحالي
var PopulationTrend_Num = item.values[18].formattedValue;//رقم إتجاه السكان الحالي
var RedList_Answer = item.values[19].formattedValue;//حالة القائمة الحمراء (IUCN)
var RedList_Num = item.values[20].formattedValue;//رقم حالة القائمة الحمراء (IUCN)
var Speed_Answer = item.values[21].formattedValue;//السرعة
var DurationPregnancy_Answer = item.values[22].formattedValue;//مدة الحمل
var NumBirths_Question = item.values[23].formattedValue;//عدد الصغار/البيض
var NumBirths_Answer = item.values[24].formattedValue;//عدد الصغار/البيض هو
var EcologicalHabitat_Answer = item.values[25].formattedValue;//الموطن البيئي
var Color_Answer = item.values[26].formattedValue;//الألوان
var Enemy_Answer = item.values[27].formattedValue;//الأعداء
var FeedOn_Answer = item.values[28].formattedValue;//الغذاء
var Img_Answer = item.values[29].formattedValue;//صورة الحيوان
var ImgCover_Answer = item.values[30].formattedValue;//صورة الغلاف
var MultipleImages_Answer = item.values[31].formattedValue;//صور متعددة
var JsonFileIdInDrive_Answer = item.values[32].formattedValue;//معرف ملف Json
var ImgSizeComparison_Question = item.values[33].formattedValue;//صورة مقارنة الحجم
var ImgSizeComparison_Answer = item.values[34].formattedValue;//صورة مقارنة الحجم
var info1_Question = item.values[35].formattedValue;//المعلومات الإضافية 1
var info1_Answer = item.values[36].formattedValue;//المعلومات الإضافية 1 هي
var info2_Question = item.values[37].formattedValue;//المعلومات الإضافية 2
var info2_Answer = item.values[38].formattedValue;//المعلومات الإضافية 2 هي
var info3_Question = item.values[39].formattedValue;//المعلومات الإضافية 3
var info3_Answer = item.values[40].formattedValue;//المعلومات الإضافية 3 هي
var info4_Question = item.values[41].formattedValue;//المعلومات الإضافية 4
var info4_Answer = item.values[42].formattedValue;//المعلومات الإضافية 4 هي
var DidYouKnow_Answer = item.values[43].formattedValue;//هل تعلم
var UserAccountId = item.values[44].formattedValue;//معرف حساب المستخدم
var UserLoginWith = item.values[45].formattedValue;//تسجيل دخول بإستخدام
var UserAccountImg = item.values[46].formattedValue;//صورة الملف الشخصي للمستخدم
var UserName = item.values[47].formattedValue;//إسم المستخدم
var UserEmail = item.values[48].formattedValue;//البريد الإلكتروني
var Name_publishing = item.values[49].formattedValue;//اظهار معلومات الناشر
var PageTitle = item.values[50].formattedValue;//عنوان الصفحة
var PageLink = item.values[51].formattedValue;//رابط الصفحة
var SourceInfo_Answer_Title = item.values[52].formattedValue;//عنوان المراجع
var SourceInfo_Answer_link = item.values[53].formattedValue;//رابط المراجع
var TheState = item.values[54].formattedValue;//الدولة
var CountryCode = item.values[55].formattedValue;//رمز الدولة
var IPAddress = item.values[56].formattedValue;//عنوان IP
var ScreenWidth = item.values[57].formattedValue;//عرض الشاشة
var ScreenHeight = item.values[58].formattedValue;//إرتفاع الشاشة
var MoreInformation = item.values[59].formattedValue;//معلومات إضافية
var dateID = item.values[60].formattedValue;//معرف تاريخ المنشور
var PostUrlInSite_Answer = item.values[61].formattedValue;//رابط المنشور
var PostIdInSite_Answer = item.values[62].formattedValue;//معرف المنشور
var SummaryPage_Answer = item.values[63].formattedValue;//وصف الموضوع
var ImgMaps_Answer = item.values[64].formattedValue;//صورة خريطة التواجد
var folderNameBasicSheet = item.values[65].formattedValue;//إسم المجلد
var folderIDBasicSheet = item.values[66].formattedValue;//معرف المجلد
var MultipleImages_table = item.values[67].formattedValue;//صور متعددة

  
  
  
  
 UserStatus = parseInt(UserStatus);//حالة الحساب
 PopulationTrend_Num = parseInt(PopulationTrend_Num);//رقم إتجاه السكان الحالي
 RedList_Num = parseInt(RedList_Num);//رقم حالة القائمة الحمراء (IUCN)

var cardURL = 'http://card.geoarabic.com/p/card.html?id='+ResponseNumber;

if(CommonName_Answer.length >= 30){
CommonName_Answer =  CommonName_Answer.substring(0,30)+'...';
}

  
if(ScientificName_Answer == "" || ScientificName_Answer == "NoData"){
ScientificName_Answer = "";
}
if(CommonName_Answer_En == "" || CommonName_Answer_En == "NoData"){
CommonName_Answer_En = "";
}
if(Img_Answer == "" || Img_Answer == "NoData"){
Img_Answer = "https://lh3.googleusercontent.com/-nngQTpjLnLk/WwI4sFyHQfI/AAAAAAAACdM/CFZJhtiKCMgR6syKazo7tsM4_xVtpML7gCEwYBhgL/w214-h160-p/GeoArabic.png";
}
var Img_Answer_favorite = Img_Answer;
    
    
ImgCover_Answer = ImgCover_Answer.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,'/w'+Img_W+'-h'+Img_H+'-p/');
ImgCover_Answer = ImgCover_Answer.replace('=s120', '=w'+Img_W+'-h'+Img_H+'-p');

Img_Answer = Img_Answer.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,'/w'+Img_W+'-h'+Img_H+'-p/');
Img_Answer = Img_Answer.replace('=s120', '=w'+Img_W+'-h'+Img_H+'-p');

  
  
if(ImgCover_Answer == "NoData" || ImgCover_Answer == ""){
ImgCover_Answer = Img_Answer;
}
  
  
  
  
if (Published === "0"){
}else if(Published === "حالة النشر"){
}else if(Published === "Published"){
}else{
var showModalClassImg = 'showModal';
var showModalOnClickImg = 'return false;';
var showModalClass = 'showModal';
var showModalOnClick = 'return false;';
  
  
if(Openframe == 0){
showModalClassImg = '';
showModalOnClickImg = '';
showModalClass = '';
showModalOnClick = '';
}else if(Openframe == 1){
showModalClassImg = '';
showModalOnClickImg = '';
showModalClass = 'showModal';
showModalOnClick = 'return false;';
}else if(Openframe == 2){
showModalClassImg = 'showModal';
showModalOnClickImg = 'return false;';
showModalClass = 'showModal';
showModalOnClick = 'return false;';
}
  
  
  
  
  
  
function GetList(num) {
 num.push('<div class="col mx-'+mx+' px-'+paddingx+' mt-'+margint+'" style="width:'+widthcard+'">');
 num.push('<div class="card">');
 if(UserAccountIdcw != undefined && UserAccountIdcw != ''){
var p = PostIdInSite_Answer;
var u = UserAccountIdcw;
p = p.toString();
u = u.toString();
var pu = "\'P" + p + "\',\'U" + u + "\',\'" + ResponseNumber + "\'";
var btn_favoriteID = "P" + p;
  num.push('<button type="button" onclick="btn_favorite('+pu+')" data-name="'+CommonName_Answer+'" data-img="'+Img_Answer_favorite+'" class="btn btn-sm btn-outline-warning btn_favorite '+btn_favoriteID+' d-none"> <input type="checkbox" class="btn-check post_favorite" autocomplete="off" ><i class="far fa-star"></i><div class="spinner-grow text-warning spinner-grow-sm d-none" role="status"><span class="visually-hidden">إنتظر...</span></div></button>');
  }
 num.push('<a href="'+PostUrlInSite_Answer+'" data-post-id="'+PostIdInSite_Answer+'" data-card-href="'+cardURL+'" style="height:'+Img_H+'px;" class="'+showModalClassImg+' dataimg rounded-top" onclick="'+showModalOnClickImg+'" data-id="'+ResponseNumber+'" title="'+ScientificName_Answer+'">');
 num.push('<img src="'+ImgCover_Answer+'" width="'+Img_W+'" height="'+Img_H+'" loading="lazy" class="card-img-top lazyload" alt="'+CommonName_Answer+'">');
 num.push('</a>');
 num.push('<div class="card-body text-center p-0 rounded-bottom">');
 num.push('<a href="'+PostUrlInSite_Answer+'" data-post-id="'+PostIdInSite_Answer+'" data-card-href="'+cardURL+'" data-id="'+ResponseNumber+'" onclick="'+showModalOnClick+'" title="'+CommonName_Answer_En+'" class="list-group-item list-group-item-action border-0 '+showModalClass+'">'+CommonName_Answer+'</a>');
 num.push('</div>');
 num.push('</div>');
 num.push('</div>');
}
  


  
var p1 = $('#g9_1').val();// الحجم
var p2 = $('#g4').val();// النوع
var p3 = $('#AnimalClass').val();// الطائفة
var p4 = $('#g5').val();// النظام الغذائي
var p5 = $('#g10').val();// اتجاه السكان
var p6 = $('#g11').val();// حالة الحفظ
var p7 = $('#ga8_1').val();// هل تعلم
var p8 = $('#Multipleimages').val();// بها صور


  
  
  
  
  

if(p1 != 'none'){
  if(p1 == '1'){
  	if(ImgSizeComparison_Question == 'الحجم بالنسبة للمشبك'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p1 == '2'){
  	if(ImgSizeComparison_Question == 'الحجم بالنسبة للفنجان'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p1 == '3'){
  	if(ImgSizeComparison_Question == 'الحجم بالنسبة للإنسان'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p1 == '4'){
  	if(ImgSizeComparison_Question == 'الحجم بالنسبة للحافلة'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }
}
  
  
if(p2 != 'none'){
  if(p2 == 'Mammalia'){
  	if(Type_Answer == 'الثدييات'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p2 == 'Aves'){
  	if(Type_Answer == 'طيور'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p2 == 'Pisces'){
  	if(Type_Answer == 'أسماك'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p2 == 'Reptilia'){
  	if(Type_Answer == 'الزواحف'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p2 == 'Amphibia'){
  	if(Type_Answer == 'البرمائيات'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p2 == 'Insecta'){
  	if(Type_Answer == 'الحشرات'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p2 == 'Invertebrata'){
  	if(Type_Answer == 'اللافقاريات'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p2 == 'PrehistoricAnimals'){
  	if(Type_Answer == 'حيوانات ما قبل التاريخ'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }
  }
  
  

  
  
if(p3 != 'none'){
  if(p3 == 'Mammalia'){
  	if(Class_AnswerEN == 'Mammalia'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Aves'){
  	if(Class_AnswerEN == 'Aves'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Pisces'){
  	if(Type_Answer == 'أسماك'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Reptilia'){
  	if(Class_AnswerEN == 'Reptilia'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Amphibia'){
  	if(Class_AnswerEN == 'Amphibia'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Insecta'){
  	if(Class_AnswerEN == 'Insecta'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Invertebrata'){
  	if(Class_AnswerEN == 'Invertebrata'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Dinosauria'){
  	if(Class_AnswerEN == 'Dinosauria'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Actinopterygii'){
  	if(Class_AnswerEN == 'Actinopterygii'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Chondrichthyes'){
  	if(Class_AnswerEN == 'Chondrichthyes'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Sarcopterygii'){
  	if(Class_AnswerEN == 'Sarcopterygii'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Arachnida'){
  	if(Class_AnswerEN == 'Arachnida'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Arthropoda'){
  	if(Class_AnswerEN == 'Arthropoda'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Worms'){
  	if(Class_AnswerEN == 'Worms'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Mollusks'){
  	if(Class_AnswerEN == 'Mollusks'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Gastropoda'){
  	if(Class_AnswerEN == 'Gastropoda'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Chilopoda'){
  	if(Class_AnswerEN == 'Chilopoda'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Cephalopoda'){
  	if(Class_AnswerEN == 'Cephalopoda'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Sponges'){
  	if(Class_AnswerEN == 'Sponges'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Bivalvia'){
  	if(Class_AnswerEN == 'Bivalvia'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Crustaceans'){
  	if(Class_AnswerEN == 'Crustaceans'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Echiniderms'){
  	if(Class_AnswerEN == 'Echiniderms'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Annelida'){
  	if(Class_AnswerEN == 'Annelida'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Malacostraca'){
  	if(Class_AnswerEN == 'Malacostraca'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Scyphozoa'){
  	if(Class_AnswerEN == 'Scyphozoa'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Actiniaria'){
  	if(Class_AnswerEN == 'Actiniaria'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Anthozoa'){
  	if(Class_AnswerEN == 'Anthozoa'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Hydrozoa'){
  	if(Class_AnswerEN == 'Hydrozoa'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Asteroidea'){
  	if(Class_AnswerEN == 'Asteroidea'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }
}
  
  
  
  
  
if(p4 != 'none'){
  if(p4 == 'Carnivore'){
  	if(Diet_Answer == 'آكل لحوم'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p4 == 'Herbivore'){
  	if(Diet_Answer == 'آكل أعشاب'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p4 == 'Omnivore'){
  	if(Diet_Answer == 'قارت'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p4 == 'Fungivore'){
  	if(Diet_Answer == 'آكل فطريات'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p4 == 'Bacterivore'){
  	if(Diet_Answer == 'آكل بكتيريا'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p4 == 'Planktivore'){
  	if(Diet_Answer == 'يتغذى على العوالق'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }
}
  
  
  
if(p5 != 'none'){
  if(p5 == 'Decreasing'){
  	if(PopulationTrend_Num == '0'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p5 == 'stable'){
  	if(PopulationTrend_Num == '1'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p5 == 'Increasing'){
  	if(PopulationTrend_Num == '2'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p5 == 'unknown'){
  	if(PopulationTrend_Num == '3' && RedList_Num != '7'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p5 == 'extinct'){
  	if(RedList_Num == '7'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }
}
  
  
  
  
  
if(p6 != 'none'){
  if(p6 == '1'){
  	if(RedList_Num == '1'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p6 == '2'){
  	if(RedList_Num == '2'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p6 == '3'){
  	if(RedList_Num == '3'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p6 == '4'){
  	if(RedList_Num == '4'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p6 == '5'){
  	if(RedList_Num == '5'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p6 == '6'){
  	if(RedList_Num == '6'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p6 == '7'){
  	if(RedList_Num == '7'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p6 == '8'){
  	if(RedList_Num == '8'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p6 == '9'){
  	if(RedList_Num == '9'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }
}
  
  
if(p7 != 'none'){
  if(p7 == '1'){
  	if(DidYouKnow_Answer != 'NoData'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p7 == '2'){
  	if(DidYouKnow_Answer == 'NoData'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }
}
  

if(p8 != 'none'){
  if(p8 == '1'){
  	if(MultipleImages_table != 'NoData'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p8 == '2'){
  	if(MultipleImages_table == 'NoData'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }
}
  
}








});

cards1.push('</div>');


document.getElementById('cardslistall').innerHTML = '';

if(cards1num > 1){
document.getElementById('cardslistall').innerHTML +=  cards1.join('');
}else{
document.getElementById('cardslistall').innerHTML += '<div class="alert alert-warning d-flex align-items-center mx-4" role="alert"><i class="fa fa-info-circle mx-2" aria-hidden="true"></i><div>عذرًا! لا يوجد محتوى مطابق.</div></div>';
  
}
$('.loadingFullscreen').addClass('d-none');
$(document).ready(function() {

$(".showModal").click(function(e) {
var recostcardId = $(this).attr("data-id");
var postManagement = true;
setPostCard(recosts,recosts_Questions,recostcardId,UserAccountIdcw,postManagement);
});
if(UserAccountIdcw != undefined && UserAccountIdcw != ''){
var u = UserAccountIdcw;
var userID = "U" + u;
setUserPostFavoriteAll(userID);
}
  });
onCompletePage();

 
 
 });

}

