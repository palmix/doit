



 
 
 
 
 function loadSimilarPosts_error(error){
   $(".setSheetHideSite").removeClass("setSheetHideSite");
   $("#similarPosts").html('<div class="alert alert-danger d-flex align-items-center mx-4" role="alert"><i class="fa fa-info-circle my-2" aria-hidden="true"></i><div>حدث خطأ في المنشورات المشابهة، رمز الخطأ: '+error.status+'</div></div>');
 }
 
 

   
 var cards1 = [''];
var get_thisCard = [];
 function loadSimilarPosts(recosts,gettype,cards_num,num_return,get_ScientificName_Answer,get_Subfamily_Answer,get_Order_Answer,get_Class_AnswerAR,get_Type_Answer,get_Diet_Answer,get_ImgSizeComparison_Question){
   
   
var findcards;
  num_return += 1;
var UserAccountIdcw = "";
var getAcS = checkCookie('get','AcSettings',null);
if(getSC !== undefined && getSC != ''){
UserAccountIdcw = getAcS.UserAccountId;
}








     
     
     
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
var MultipleImages_Question = item_Question.values[67].formattedValue;//صور متعددة

   
   
   
   
   
   
   
   
   
$.each(recosts_each,function( i, item ) {



var Img_W = 214;
var Img_H = 160;
var widthcard = '15rem;';
var paddingx = 2;
var margint = 2;
var mx = 'auto';
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
  
  
var Openframe = 0;
  
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
  


  
  
  
  
  
 
if (ScientificName_Answer == get_ScientificName_Answer) {
get_thisCard.push(ResponseNumber);
}
  


  
	  
if(Subfamily_Answer == gettype && gettype != "NoData" && num_return == 1 && cards_num <= 19 && ScientificName_Answer != get_ScientificName_Answer){
findcards = get_thisCard.filter(i => get_thisCard.indexOf(ResponseNumber) >= 0);
if(findcards.length == 0){
get_thisCard.push(ResponseNumber);
cards_num += 1;
GetList(cards1);
}
}else if(Order_Answer == gettype && gettype != "NoData" && num_return == 2 && cards_num <= 19 && ScientificName_Answer != get_ScientificName_Answer){
findcards = get_thisCard.filter(i => get_thisCard.indexOf(ResponseNumber) >= 0);
if(findcards.length == 0){
get_thisCard.push(ResponseNumber);
cards_num += 1;
GetList(cards1);
}
  
  
}else if(Diet_Answer == gettype && get_Type_Answer == Type_Answer && get_ImgSizeComparison_Question == ImgSizeComparison_Question && gettype != "NoData" && num_return == 3 && cards_num <= 19 && ScientificName_Answer != get_ScientificName_Answer){
findcards = get_thisCard.filter(i => get_thisCard.indexOf(ResponseNumber) >= 0);
if(findcards.length == 0){
get_thisCard.push(ResponseNumber);
cards_num += 1;
GetList(cards1);
}
  
  
}else if(Class_AnswerAR == gettype && gettype != "NoData" && num_return == 4 && cards_num <= 19 && ScientificName_Answer != get_ScientificName_Answer){
findcards = get_thisCard.filter(i => get_thisCard.indexOf(ResponseNumber) >= 0);
if(findcards.length == 0){
get_thisCard.push(ResponseNumber);
cards_num += 1;
GetList(cards1);
}


}else if(Type_Answer == gettype && gettype != "NoData" && num_return == 5 && cards_num <= 19 && ScientificName_Answer != get_ScientificName_Answer){
findcards = get_thisCard.filter(i => get_thisCard.indexOf(ResponseNumber) >= 0);
if(findcards.length == 0){
get_thisCard.push(ResponseNumber);
cards_num += 1;
GetList(cards1);
}
}
        
        
        

  
  
  

  

  
  
  
  
  
  
  
}






});



     
   
   
   

   
   




if(cards_num == 20 || num_return == 5){
$("#PageCardName").removeClass("d-none");



$("#similarPosts").addClass(['row','row-cols-1','row-cols-md-3','g-4','mt-2']).html(cards1.join(''));
$(document).ready(function() {



  
  
  
if(UserAccountIdcw != undefined && UserAccountIdcw != ''){
var u = UserAccountIdcw;
var userID = "U" + u;
setUserPostFavoriteAll(userID);
}
  });
onCompletePage();
}else{


if(num_return == 1){
  gettype = get_Order_Answer;
loadSimilarPosts(recosts,gettype,cards_num,num_return,get_ScientificName_Answer,get_Subfamily_Answer,get_Order_Answer,get_Class_AnswerAR,get_Type_Answer,get_Diet_Answer,get_ImgSizeComparison_Question);

}else if(num_return == 2){
gettype = get_Diet_Answer;
loadSimilarPosts(recosts,gettype,cards_num,num_return,get_ScientificName_Answer,get_Subfamily_Answer,get_Order_Answer,get_Class_AnswerAR,get_Type_Answer,get_Diet_Answer,get_ImgSizeComparison_Question);


}else if(num_return == 3){
  gettype = get_Class_AnswerAR;
loadSimilarPosts(recosts,gettype,cards_num,num_return,get_ScientificName_Answer,get_Subfamily_Answer,get_Order_Answer,get_Class_AnswerAR,get_Type_Answer,get_Diet_Answer,get_ImgSizeComparison_Question);

}else if(num_return == 4){
  gettype = get_Type_Answer;
loadSimilarPosts(recosts,gettype,cards_num,num_return,get_ScientificName_Answer,get_Subfamily_Answer,get_Order_Answer,get_Class_AnswerAR,get_Type_Answer,get_Diet_Answer,get_ImgSizeComparison_Question);
}

    
    
    

  
  
}
   
   
   
   
  

   
   
   
   
   
   
 }


