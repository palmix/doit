var UserAccountIdcw = "";
var AccountStatus_C = "";
var getAcS = checkCookie('get','AcSettings',null);
if(getAcS !== undefined && getAcS != ''){
UserAccountIdcw = getAcS.UserAccountId;
AccountStatus_C = getAcS.AccountStatus;
}





var textjson = textjson;
var obj = JSON.parse(textjson);
obj = obj.info;
    var getIdCard = obj.ResponseNumber.Answer;
    var IdCard = getIdCard.replace('ID1000000', '');
    var IdCards = parseInt(IdCard);
     IdCard = IdCards + 3;
    var IdCardObj = IdCards;

var GeoArabicAndroid = /GeoArabicAndroid/.test(navigator.userAgent);
if(!window.matchMedia('(min-width:576px)').matches && GeoArabicAndroid){
$("#cardinfo").css({"background-color":"#FFFFFF","margin-top":"0","padding":"1rem 1rem", "margin-bottom":"0","max-width":"100%","border":"none","border-radius":"0","box-shadow":"none"});
$(".container").css({"overflow":"hidden","padding":"0"});
$(".PageTitleandDes").addClass("d-none");
}


function recost_error(error){
setItmePost(error,IdCardObj,"site");
//setItmePost_Error(error);
 }


 function recost_done(recosts){
setItmePost(recosts,IdCardObj,"sheet");
 }



 function setItmePost_Error(error){
        document.getElementById('cardinfo').innerHTML = '<div class="alert alert-warning" role="alert"> حدث خطأ في جلب البطاقة </div>';
        codesheet = 0;
 }

 function setItmePost(recosts,IdCardObj,som){


var getSC = checkCookie('get','settings',null);
var getSC_is = false;
if(getSC !== undefined && getSC != ''){
getSC_is = true;
}

var getBackgroundCard = ''; //fff
var IncludeImg = 5; //1-5
var IncludeDidUknow = 1;
var IncludeIUCN = 1;
var IncludeSizeComparison = 1;
var IncludePresenceMap = 1;
var IncludeV3D = 1;
var IncludeImgPA = 1;
  
if(getSC_is == true){
IncludeImg = getSC.Img;
IncludeDidUknow = getSC.DidUknow;
IncludeIUCN = getSC.IUCN;
IncludeSizeComparison = getSC.SizeImg;
IncludePresenceMap = getSC.MapImg;
	if(getSC.Img3D == 0 || getSC.Img3D == 1){
		 IncludeV3D = getSC.Img3D;
		 IncludeImgPA = getSC.ImgFile;
	}
}













if(som=="sheet"){
var item_Question = recosts.sheets[0].data[0].rowData[1];
var CommonName_Question = item_Question.values[4].formattedValue;//الإسم الشائع


if(CommonName_Question != "الإسم الشائع"){
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
var MultipleImages_table_Question = item_Question.values[67].formattedValue;//صور متعددة
var Geographic_Range_Question = item_Question.values[73].formattedValue;//النطاق الجغرافي
var Modeling_3D_Question = item_Question.values[74].formattedValue;//نماذج ثلاثية الأبعاد



    var IdCard = getIdCard.replace('ID1000000', '');
    var IdCards = parseInt(IdCard)
    var IdCardx = IdCards + 2;

	
	
    
//var dataPost = $("#getjsonpost").val();
//var alldataPost = JSON.parse(dataPost);



var new_item = recosts.sheets[0].data[0].rowData[IdCardx];
var testgetcard = new_item.values[1].formattedValue;// ID
if(getIdCard != testgetcard){
new_item = recosts.sheets[0].data[0].rowData.reverse()[IdCardx];
}


  
  
  
  
  
  
  
  
  



var Timestamp = new_item.values[0].formattedValue;//تاريخ النشر
var ResponseNumber = new_item.values[1].formattedValue;//ID
var Published = new_item.values[2].formattedValue;//حالة النشر
var UserStatus = new_item.values[3].formattedValue;//حالة الحساب
var CommonName_Answer = new_item.values[4].formattedValue;//الإسم الشائع
var CommonName_Answer_En = new_item.values[5].formattedValue;//الإسم الشائع بالانجليزية هو
var ScientificName_Answer = new_item.values[6].formattedValue;//الإسم العلمي
var Type_Answer = new_item.values[7].formattedValue;//النوع
var Class_AnswerAR = new_item.values[8].formattedValue;//الطائفة
var Class_AnswerEN = new_item.values[9].formattedValue;//الإسم العلمي للطائفة
var Order_Answer = new_item.values[10].formattedValue;//الرتبة
var Subfamily_Answer = new_item.values[11].formattedValue;//الفصيلة
var Diet_Answer = new_item.values[12].formattedValue;//النظام الغذائي
var Age_Answer = new_item.values[13].formattedValue;//متوسط العمر
var Size_Answer = new_item.values[14].formattedValue;//الحجم
var Weight_Answer = new_item.values[15].formattedValue;//الوزن
var PopulationTrend_Answer = new_item.values[16].formattedValue;//إتجاه السكان الحالي
var PopulationTrend_Code = new_item.values[17].formattedValue;//رمز إتجاه السكان الحالي
var PopulationTrend_Num = new_item.values[18].formattedValue;//رقم إتجاه السكان الحالي
var RedList_Answer = new_item.values[19].formattedValue;//حالة القائمة الحمراء (IUCN)
var RedList_Num = new_item.values[20].formattedValue;//رقم حالة القائمة الحمراء (IUCN)
var Speed_Answer = new_item.values[21].formattedValue;//السرعة
var DurationPregnancy_Answer = new_item.values[22].formattedValue;//مدة الحمل
var NumBirths_Question = new_item.values[23].formattedValue;//عدد الصغار/البيض
var NumBirths_Answer = new_item.values[24].formattedValue;//عدد الصغار/البيض هو
var EcologicalHabitat_Answer = new_item.values[25].formattedValue;//الموطن البيئي
var Color_Answer = new_item.values[26].formattedValue;//الألوان
var Enemy_Answer = new_item.values[27].formattedValue;//الأعداء
var FeedOn_Answer = new_item.values[28].formattedValue;//الغذاء
var Img_Answer = new_item.values[29].formattedValue;//صورة الحيوان
var ImgCover_Answer = new_item.values[30].formattedValue;//صورة الغلاف
var MultipleImages_Answer = new_item.values[31].formattedValue;//صور متعددة
var JsonFileIdInDrive_Answer = new_item.values[32].formattedValue;//معرف ملف Json
var ImgSizeComparison_Question = new_item.values[33].formattedValue;//صورة مقارنة الحجم
var ImgSizeComparison_Answer = new_item.values[34].formattedValue;//صورة مقارنة الحجم
var info1_Question = new_item.values[35].formattedValue;//المعلومات الإضافية 1
var info1_Answer = new_item.values[36].formattedValue;//المعلومات الإضافية 1 هي
var info2_Question = new_item.values[37].formattedValue;//المعلومات الإضافية 2
var info2_Answer = new_item.values[38].formattedValue;//المعلومات الإضافية 2 هي
var info3_Question = new_item.values[39].formattedValue;//المعلومات الإضافية 3
var info3_Answer = new_item.values[40].formattedValue;//المعلومات الإضافية 3 هي
var info4_Question = new_item.values[41].formattedValue;//المعلومات الإضافية 4
var info4_Answer = new_item.values[42].formattedValue;//المعلومات الإضافية 4 هي
var DidYouKnow_Answer = new_item.values[43].formattedValue;//هل تعلم
var UserAccountId = new_item.values[44].formattedValue;//معرف حساب المستخدم
var UserLoginWith = new_item.values[45].formattedValue;//تسجيل دخول بإستخدام
var UserAccountImg = new_item.values[46].formattedValue;//صورة الملف الشخصي للمستخدم
var UserName = new_item.values[47].formattedValue;//إسم المستخدم
var UserEmail = new_item.values[48].formattedValue;//البريد الإلكتروني
var Name_publishing = new_item.values[49].formattedValue;//اظهار معلومات الناشر
var PageTitle = new_item.values[50].formattedValue;//عنوان الصفحة
var PageLink = new_item.values[51].formattedValue;//رابط الصفحة
var SourceInfo_Answer_Title = new_item.values[52].formattedValue;//عنوان المراجع
var SourceInfo_Answer_link = new_item.values[53].formattedValue;//رابط المراجع
var TheState = new_item.values[54].formattedValue;//الدولة
var CountryCode = new_item.values[55].formattedValue;//رمز الدولة
var IPAddress = new_item.values[56].formattedValue;//عنوان IP
var ScreenWidth = new_item.values[57].formattedValue;//عرض الشاشة
var ScreenHeight = new_item.values[58].formattedValue;//إرتفاع الشاشة
var MoreInformation = new_item.values[59].formattedValue;//معلومات إضافية
var dateID = new_item.values[60].formattedValue;//معرف تاريخ المنشور
var PostUrlInSite_Answer = new_item.values[61].formattedValue;//رابط المنشور
var PostIdInSite_Answer = new_item.values[62].formattedValue;//معرف المنشور
var SummaryPage_Answer = new_item.values[63].formattedValue;//وصف الموضوع
var ImgMaps_Answer = new_item.values[64].formattedValue;//صورة خريطة التواجد
var folderNameBasicSheet = new_item.values[65].formattedValue;//إسم المجلد
var folderIDBasicSheet = new_item.values[66].formattedValue;//معرف المجلد
var MultipleImages_table = new_item.values[67].formattedValue;//صور متعددة
var Common_Names = new_item.values[72].formattedValue;//الأسماء المعروفة
var Geographic_Range = new_item.values[73].formattedValue;//النطاق الجغرافي
var Modeling_3D = new_item.values[74].formattedValue;//نماذج ثلاثية الأبعاد

if(Common_Names != "" && Common_Names != undefined && Common_Names != "NoData"){
Common_Names = JSON.parse(Common_Names);
}
if(Geographic_Range != "" && Geographic_Range != undefined && Geographic_Range != "NoData"){
Geographic_Range =  JSON.parse(Geographic_Range);
}
if(Modeling_3D != "NoData" && typeof Modeling_3D !== "undefined" && Modeling_3D != ""){
Modeling_3D =  JSON.parse(Modeling_3D);
}else{
Modeling_3D == "NoData";
}


    }else if(som=="site"){
console.log(som);
var obj = JSON.parse(textjson);
obj = obj.info;

var Timestamp = obj.Timestamp.Answer;//تاريخ النشر
var Published = "3";//حالة النشر
var ResponseNumber = obj.ResponseNumber.Answer;//ID
var UserStatus = obj.UserStatus.Answer;//حالة الحساب
var CommonName_Question = obj.CommonName.Question;//الإسم الشائع
var CommonName_Answer = obj.CommonName.Answer;//الإسم الشائع هو
var CommonName_Answer_En = obj.CommonName.Answer_En;//الإسم الشائع بالانجليزية هو
var ScientificName_Question = obj.ScientificName.Question;//الاسم العلمي
var ScientificName_Answer = obj.ScientificName.Answer;//الاسم العلمي هو
var Type_Question = obj.Type.Question;//النوع 
var Type_Answer = obj.Type.Answer;//النوع هو 
var Class_Question = obj.Class.Question;//الطائفة 
var Class_AnswerAR = obj.Class.AnswerAR;//إسم الطائفة 
var Class_AnswerEN = obj.Class.AnswerEN;//الإسم العلمي للطائفة 
var Order_Question = obj.Order.Question;//الرتبة
var Order_Answer = obj.Order.Answer;//الرتبة هي
var Subfamily_Question = obj.Subfamily.Question;//الفصيلة
var Subfamily_Answer = obj.Subfamily.Answer;//الفصيلة هي
var Diet_Question = obj.Diet.Question;//النظام الغذائي
var Diet_Answer = obj.Diet.Answer;//النظام الغذائي هو
var Age_Question = obj.Age.Question;//متوسط العمر
var Age_Answer = obj.Age.Answer;//متوسط العمر هو
var Size_Question = obj.Size.Question;//الحجم
var Size_Answer = obj.Size.Answer;//الحجم هو
var Weight_Question = obj.Weight.Question;//الوزن
var Weight_Answer = obj.Weight.Answer;//الوزن هو
var PopulationTrend_Question = obj.PopulationTrend.Question;//إتجاه السكان الحالي
var PopulationTrend_Answer = obj.PopulationTrend.Answer;//إتجاه السكان الحالي هو
var PopulationTrend_Code = obj.PopulationTrend.Code;//رمز إتجاه السكان الحالي
var PopulationTrend_Num = obj.PopulationTrend.Num;//رقم إتجاه السكان الحالي
var RedList_Question = obj.RedList.Question;//حالة القائمة الحمراء (IUCN)
var RedList_Answer = obj.RedList.Answer;//حالة القائمة الحمراء (IUCN) هي
var RedList_Num = obj.RedList.Num;//رقم حالة القائمة الحمراء (IUCN)
var Speed_Question = obj.Speed.Question;//السرعة
var Speed_Answer = obj.Speed.Answer;//السرعة هي
var DurationPregnancy_Question = obj.DurationPregnancy.Question;//مدة الحمل
var DurationPregnancy_Answer = obj.DurationPregnancy.Answer;//مدة الحمل هي
var NumBirths_Question = obj.NumBirths.Question;//عدد الصغار/البيض
var NumBirths_Answer = obj.NumBirths.Answer;//عدد الصغار/البيض هو
var EcologicalHabitat_Question = obj.EcologicalHabitat.Question;//الموطن البيئي
var EcologicalHabitat_Answer = obj.EcologicalHabitat.Answer;//الموطن البيئي هو
var Color_Question = obj.Color.Question;//الألوان
var Color_Answer = obj.Color.Answer;//الألوان هي
var Enemy_Question = obj.Enemy.Question;//الأعداء
var Enemy_Answer = obj.Enemy.Answer;//الأعداء هم
var FeedOn_Question = obj.FeedOn.Question;//الغذاء
var FeedOn_Answer = obj.FeedOn.Answer;//الغذاء هو
var Img_Question = obj.Img.Question;//صورة الحيوان
var Img_Answer = obj.Img.Answer;//عنوان صورة الحيوان
var ImgInDrive_Question = obj.ImgInDrive.Question;//الصورة في درايف
var ImgInDrive_Answer = obj.ImgInDrive.Answer;//رابط الصور في درايف
var ImgCover_Question = obj.ImgCover.Question;//صورة الغلاف
var ImgCover_Answer = obj.ImgCover.Answer;//عنوان صورة الغلاف
var MultipleImages_Question = obj.MultipleImages.Question;//صور متعددة
var MultipleImages_Answer = obj.MultipleImages.Answer;//روابط الصور المتعددة
var JsonFileIdInDrive_Question = obj.JsonFileIdInDrive.Question;//ملف Json
var JsonFileIdInDrive_Answer = obj.JsonFileIdInDrive.Answer;//معرف ملف Json
var ImgSizeComparison_Question = obj.ImgSizeComparison.Question;//صورة مقارنة الحجم
var ImgSizeComparison_Answer = obj.ImgSizeComparison.Answer;//عنوان صورة مقارنة الحجم
var info1_Question = obj.info1.Question;//المعلومات الإضافية 1
var info1_Answer = obj.info1.Answer;//المعلومات الإضافية 1 هي
var info2_Question = obj.info2.Question;//المعلومات الإضافية 2
var info2_Answer = obj.info2.Answer;//المعلومات الإضافية 2 هي
var info3_Question = obj.info3.Question;//المعلومات الإضافية 3
var info3_Answer = obj.info3.Answer;//المعلومات الإضافية 3 هي
var info4_Question = obj.info4.Question;//المعلومات الإضافية 4
var info4_Answer = obj.info4.Answer;//المعلومات الإضافية 4 هي
var DidYouKnow_Question = obj.DidYouKnow.Question;//هل تعلم
var DidYouKnow_Answer = obj.DidYouKnow.Answer;//معلومات هل تعلم
var UserAccountId = obj.UserAccountId;//معرف حساب المستخدم
var UserLoginWith = obj.UserLoginWith;//تسجيل دخول بإستخدام
var UserAccountImg = obj.UserAccountImg;//صورة الملف الشخصي للمستخدم
var UserName = obj.UserName;//إسم المستخدم
var UserEmail = obj.UserEmail;//البريد الإلكتروني
var Name_publishing = obj.Name_publishing.Answer;//اظهار معلومات الناشر
var PageTitle = obj.PageTitle;//عنوان الصفحة
var PageLink = obj.PageLink;//رابط الصفحة
var SourceInfo_Question = obj.SourceInfo.Question;//المراجع
var SourceInfo_Answer_Title = obj.SourceInfo.Answer_Title;//عنوان المراجع
var SourceInfo_Answer_link = obj.SourceInfo.Answer_link;//رابط المراجع
var dateID = obj.dateID;//معرف تاريخ المنشور
var PostUrlInSite_Question = obj.PostUrlInSite.Question;//رابط المنشور
var PostUrlInSite_Answer = obj.PostUrlInSite.Answer;//رابط المنشور هو
var PostIdInSite_Question = obj.PostIdInSite.Question;//معرف المنشور 
var PostIdInSite_Answer = obj.PostIdInSite.Answer;//معرف المنشور هو
var SummaryPage_Question = obj.SummaryPage.Question;//وصف الموضوع 
var SummaryPage_Answer = obj.SummaryPage.Answer;//وصف الموضوع هو
var ImgMaps_Question = obj.ImgMaps.Question;//صورة خريطة التواجد 
var ImgMaps_Answer = obj.ImgMaps.Answer;//الخارطة URL
var Common_Names = obj.CommonNames.Answer;//الأسماء المعروفة
var Common_Names = obj.Geographic_Range.Answer;//النطاق الجغرافي
var Modeling_3D = obj.Modeling_3D.Answer;//نماذج ثلاثية الأبعاد
var Modeling_3D_Question = obj.Modeling_3D.Question;//نماذج ثلاثية الأبعاد

    }



   
if(Common_Names == "" || Common_Names == undefined || Common_Names == "NoData"){
	Common_Names = "NoData";
}
if(Geographic_Range == "" || Geographic_Range == undefined || Geographic_Range == "NoData"){
	Geographic_Range = "NoData";
}
   
   
   
var gettype = Subfamily_Answer;
var cards_num = 0;
var num_return = 0;
var get_Subfamily_Answer = Subfamily_Answer;
var get_Order_Answer = Order_Answer;
var get_Class_AnswerAR = Class_AnswerAR;
var get_Type_Answer = Type_Answer;
var get_ScientificName_Answer = ScientificName_Answer;
   
var get_Diet_Answer = Diet_Answer;
var get_ImgSizeComparison_Question = ImgSizeComparison_Question;



        

var setIDCard = getIdCard;
var IDURL = PostUrlInSite_Answer.toString();
IDURL = IDURL.replace('http://','https://');
var IDTitle = CommonName_Answer.toString();
var IDDescription = SummaryPage_Answer.toString();

      
	  
	  

if(IDURL == "" || IDURL == "NoData"){
IDURL = "https://card.geoarabic.com"
}
if(IDTitle == "" || IDTitle == "NoData"){
IDTitle = "جيو عربي"
}
if(IDDescription == "" || IDDescription == "NoData"){
IDDescription = "بطاقة معلومات الحيوانات"
}

$("#IDURL").val(IDURL);
$("#IDTitle").val(IDTitle);
$("#IDDescription").val(IDDescription);
$("#linkcardb").val(setIDCard);




Published = parseInt(Published); //حالة النشر
        UserStatus = parseInt(UserStatus); //حالة الحساب
        PopulationTrend_Num = parseInt(PopulationTrend_Num); //رقم إتجاه السكان الحالي
        RedList_Num = parseInt(RedList_Num); //رقم حالة القائمة الحمراء (IUCN)
        Img_Answer = Img_Answer.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi, "/w136-h136-p/");
        Img_Answer = Img_Answer.replace('=s120', '=w136-h136-p');
        ImgSizeComparison_Answer = ImgSizeComparison_Answer.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi, "/s160/");
        ImgSizeComparison_Answer = ImgSizeComparison_Answer.replace('=s120', '=s160');


var Img_AnswerForMeta = Img_Answer.replace('/w136-h136-p/', '/s1600/');
Img_AnswerForMeta = Img_AnswerForMeta.replace('=s120', '=s1600');
if(ImgCover_Answer != "NoData" || ImgCover_Answer != ""){
ImgCover_Answer = ImgCover_Answer.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,'/s1600/');
ImgCover_Answer = ImgCover_Answer.replace('=s120', '=s1600');
Img_AnswerForMeta = ImgCover_Answer;
}else{
Img_AnswerForMeta = Img_AnswerForMeta;
}


      
      
        var PstatusSymbol;
        if (PopulationTrend_Num == 1) {
            PstatusSymbol = '<i class="fas fa-arrow-left text-body mx-1"></i>';
        } else if (PopulationTrend_Num == 0) {
            PstatusSymbol = '<i class="fas fa-arrow-down text-danger mx-1"></i>';
        } else if (PopulationTrend_Num == 2) {
            PstatusSymbol = '<i class="fas fa-arrow-up text-success mx-1"></i>';
        } else {
            PstatusSymbol = '';
        }



var vapp1,vapp2,vapp3,titleNameEng;

if (CommonName_Answer_En != 'NoData') {
titleNameEng = ' ('+CommonName_Answer_En+')';
} else {
titleNameEng = '';
}

vapp1 = 'data-description="';
vapp2 = '"';
vapp3 = ': ';








        if (Published == 0) {
            var table = ['<div class="alert alert-secondary" role="alert"> هذه البطاقة غير متوفرة! </div>'];
        } else {
			var SummaryPage = vapp1+SummaryPage_Answer+vapp2;
			if(SummaryPage_Answer == "NoData"){
				SummaryPage = "";
			}
            var table = ['<span '+SummaryPage+' class="incardbackgroundimage"><span class="cardbackgroundimage" style="background-image: url(&quot;' + Img_Answer + '&quot;);"></span></span>'];
            table.push('<div class="TableDiv">');
            table.push('<table class="FastFactsTable" style="overflow-x:auto"><tbody>');
            if (CommonName_Answer != 'NoData' && typeof CommonName_Answer !== 'undefined' && CommonName_Answer != '') {
                $('#showingCard').html(CommonName_Answer);
                $('title').html(CommonName_Answer + ' - جيو عربي');
				
				
if(Common_Names == "NoData"){
				
                table.push('<tr '+vapp1+CommonName_Question+vapp3+CommonName_Answer+titleNameEng+vapp2+'><td class="cardinfoname">' + CommonName_Question + '</td><td class="answercardinfo">' + CommonName_Answer + '</td></tr>');
				
}else{			
//nams    

		
var getCommon_Names_length = Common_Names.result.length;
var obnames = [""];
for(var glnm = 0;glnm<getCommon_Names_length;glnm++){
var alpha2s = Common_Names.result[glnm].language.alpha2;
if(alpha2s == "ar"){
alpha2s = "arabic";
}else if(alpha2s == "en"){
alpha2s = "gb";
}

var setTitleLang ="";
if(GeoArabicAndroid){
setTitleLang = 'onclick="setnote(\'اللغة: '+Common_Names.result[glnm].language.arabic+'\')"'
}else{
setTitleLang = 'title="اللغة: '+Common_Names.result[glnm].language.arabic+'"'
}


if(alpha2s == "gb"||alpha2s == "arabic"||alpha2s == "es"||alpha2s == "fr"||alpha2s == "de"){
obnames.push('<svg class="shadow mx-1 rounded-1" width="12" height="12" xmlns="http://www.w3.org/2000/svg"><image href="https://get.doitf.com/jsite/tools/flags/svg/country-4x3/'+alpha2s+'.svg" height="12" width="12"/></svg>');
}else if(Common_Names.result[glnm].primary){
obnames.push('<i class="fa-duotone fa-flag fa-2xs mx-1 shadow text-success"></i>');
}else{
obnames.push('<i class="fa-duotone fa-flag fa-2xs mx-1 shadow"></i>');
}

if(Common_Names.result[glnm].primary){
obnames.push('<span class="text-success" '+setTitleLang+'>'+Common_Names.result[glnm].name+'</span>');
}else{
obnames.push('<span '+setTitleLang+'>'+Common_Names.result[glnm].name+'</span>');
}
obnames.push('<br/>');
}
                

table.push('<tr>');
table.push('<td class="cardinfoname">' + CommonName_Question + '</td>');

table.push('<td class="answercardinfo">');
table.push('<button class="btn shadow-none collapsed border-0 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#showmorenames" aria-expanded="false" aria-controls="showmorenames">');
table.push(CommonName_Answer);
table.push('<i class="fa-solid fa-caret-down mx-1"></i>');
table.push('</button>');
table.push('<div class="collapse" id="showmorenames">');
table.push(obnames.join(""));


if(SummaryPage_Answer != "NoData" && SummaryPage_Answer != ""&& SummaryPage_Answer != undefined){
var textSummary = '<span>'+SummaryPage_Answer+'</span>';
var wordsSummary = textSummary.split(' ');
var wordsSummarylength = textSummary.trim().split(/\s+/).length;
if(window.matchMedia('(min-width:576px)').matches){
if(wordsSummarylength > 7&& getCommon_Names_length <= 4)
textSummary = textSummary.replace(wordsSummary[5],"<br/>"+wordsSummary[5]);
if(wordsSummarylength > 12 && getCommon_Names_length <= 3)
textSummary = textSummary.replace(wordsSummary[10],"<br/>"+wordsSummary[10]);
}
table.push('<span>'+textSummary+'</span>');
}
table.push('</div>');
table.push('</td>');
table.push('</tr>');



//end nams		
}			
				
				
				
				
				
            }
            if (ScientificName_Answer != 'NoData' && typeof ScientificName_Answer !== 'undefined' && ScientificName_Answer != '') {


                table.push('<tr '+vapp1+ScientificName_Question+vapp3+ScientificName_Answer+vapp2+'><td class="cardinfoname">' + ScientificName_Question + '</td><td class="answercardinfo">' + ScientificName_Answer + '</td></tr>');
            }
            if (Type_Answer != 'NoData' && typeof Type_Answer !== 'undefined' && Type_Answer != '' && Type_Answer.toString() != Class_AnswerAR.toString()) {
                table.push('<tr '+vapp1+Type_Question+vapp3+Type_Answer+vapp2+'><td class="cardinfoname">' + Type_Question + '</td><td class="answercardinfo">' + Type_Answer + '</td></tr>');
            }
            if (Class_AnswerEN != 'None' && Class_AnswerAR != 'NoData' && typeof Class_AnswerAR !== 'undefined' && Class_AnswerAR != '') {
                table.push('<tr '+vapp1+Class_Question+vapp3+Class_AnswerAR+vapp2+'><td class="cardinfoname">' + Class_Question + '</td><td class="answercardinfo">' + Class_AnswerAR + '</td></tr>');
            }
            if (Order_Answer != 'NoData' && typeof Order_Answer !== 'undefined' && Order_Answer != '') {
                table.push('<tr '+vapp1+Order_Question+vapp3+Order_Answer+vapp2+'><td class="cardinfoname">' + Order_Question + '</td><td class="answercardinfo">' + Order_Answer + '</td></tr>');
            }
            if (Subfamily_Answer != 'NoData' && typeof Subfamily_Answer !== 'undefined' && Subfamily_Answer != '') {
                table.push('<tr '+vapp1+Subfamily_Question+vapp3+Subfamily_Answer+vapp2+'><td class="cardinfoname">' + Subfamily_Question + '</td><td class="answercardinfo">' + Subfamily_Answer + '</td></tr>');
            }
            if (Weight_Answer != 'NoData' && typeof Weight_Answer !== 'undefined' && Weight_Answer != '') {
                table.push('<tr '+vapp1+Weight_Question+vapp3+Weight_Answer+vapp2+'><td class="cardinfoname">' + Weight_Question + '</td><td class="answercardinfo">' + Weight_Answer + '</td></tr>');
            }
            if (Size_Answer != 'NoData' && typeof Size_Answer !== 'undefined' && Size_Answer != '') {
                table.push('<tr '+vapp1+Size_Question+vapp3+Size_Answer+vapp2+'><td class="cardinfoname">' + Size_Question + '</td><td class="answercardinfo">' + Size_Answer + '</td></tr>');
            }
            if (Age_Answer != 'NoData' && typeof Age_Answer !== 'undefined' && Age_Answer != '') {
                table.push('<tr '+vapp1+Age_Question+vapp3+Age_Answer+vapp2+'><td class="cardinfoname">' + Age_Question + '</td><td class="answercardinfo">' + Age_Answer + '</td></tr>');
            }
            if (EcologicalHabitat_Answer != 'NoData' && typeof EcologicalHabitat_Answer !== 'undefined' && EcologicalHabitat_Answer != '') {
                table.push('<tr '+vapp1+EcologicalHabitat_Question+vapp3+EcologicalHabitat_Answer+vapp2+'><td class="cardinfoname">' + EcologicalHabitat_Question + '</td><td class="answercardinfo">' + EcologicalHabitat_Answer + '</td></tr>')
            }
			
			
            if (Geographic_Range != 'NoData' && typeof Geographic_Range !== 'undefined' && Geographic_Range != '') {

                table.push('<tr><td class="cardinfoname">' + Geographic_Range_Question + '</td><td class="answercardinfo" id="GeographicRange">' + Geographic_Range.count + ' <div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظر...</span></div></td></tr>');
				
                table.push('<tr class="collapse" id="GeographicRangeHide" style="background-color:#fff;"><td class="answercardinfo d-inline" id="GeographicRangeInfo"><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظر...</span></div></td><td class="answercardinfo" id="GeographicRangeHideCont"><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظر...</span></div></td></tr><tr class="d-none"></tr>');

                table.push('<tr class="collapse" id="showRangeMaps"><td colspan="2" style="background-color:#fff;" class="answercardinfo" id="GeographicRangeMaps"><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظر...</span></div></td></tr><tr class="d-none"></tr>');

				
setGeographic_Range(Geographic_Range);
}
			
			
			
            if (Diet_Answer != 'NoData' && typeof Diet_Answer !== 'undefined' && Diet_Answer != '') {
                table.push('<tr '+vapp1+Diet_Question+vapp3+Diet_Answer+vapp2+'><td class="cardinfoname">' + Diet_Question + '</td><td class="answercardinfo">' + Diet_Answer + '</td></tr>');
            }
            if (FeedOn_Answer != 'NoData' && typeof FeedOn_Answer !== 'undefined' && FeedOn_Answer != '') {
                table.push('<tr '+vapp1+FeedOn_Question+vapp3+FeedOn_Answer+vapp2+'><td class="cardinfoname">' + FeedOn_Question + '</td><td class="answercardinfo">' + FeedOn_Answer + '</td></tr>');
            }
            if (Enemy_Answer != 'NoData' && typeof Enemy_Answer !== 'undefined' && Enemy_Answer != '') {
                table.push('<tr '+vapp1+Enemy_Question+vapp3+Enemy_Answer+vapp2+'><td class="cardinfoname">' + Enemy_Question + '</td><td class="answercardinfo">' + Enemy_Answer + '</td></tr>');
            }
            if (Speed_Answer != 'NoData' && typeof Speed_Answer !== 'undefined' && Speed_Answer != '') {
                table.push('<tr '+vapp1+Speed_Question+vapp3+Speed_Answer+vapp2+'><td class="cardinfoname">' + Speed_Question + '</td><td class="answercardinfo">' + Speed_Answer + '</td></tr>');
            }
            if (DurationPregnancy_Answer != 'NoData' && typeof DurationPregnancy_Answer !== 'undefined' && DurationPregnancy_Answer != '') {
                table.push('<tr '+vapp1+DurationPregnancy_Question+vapp3+DurationPregnancy_Answer+vapp2+'><td class="cardinfoname">' + DurationPregnancy_Question + '</td><td class="answercardinfo">' + DurationPregnancy_Answer + '</td></tr>');
            }
            if (NumBirths_Answer != 'NoData' && typeof NumBirths_Answer !== 'undefined' && NumBirths_Answer != '') {
                table.push('<tr '+vapp1+NumBirths_Question+vapp3+NumBirths_Answer+vapp2+'><td class="cardinfoname">' + NumBirths_Question + '</td><td class="answercardinfo">' + NumBirths_Answer + '</td></tr>');
            }
            if (Color_Answer != 'NoData' && typeof Color_Answer !== 'undefined' && Color_Answer != '') {
                table.push('<tr '+vapp1+Color_Question+vapp3+Color_Answer+vapp2+'><td class="cardinfoname">' + Color_Question + '</td><td class="answercardinfo">' + Color_Answer + '</td></tr>');
            }
            if (info1_Answer != 'NoData' && typeof info1_Answer !== 'undefined' && info1_Answer != '') {
                table.push('<tr '+vapp1+info1_Question+vapp3+info1_Answer+vapp2+'><td class="cardinfoname">' + info1_Question + '</td><td class="answercardinfo">' + info1_Answer + '</td></tr>');
            }
            if (info2_Answer != 'NoData' && typeof info2_Answer !== 'undefined' && info2_Answer != '') {
                table.push('<tr '+vapp1+info2_Question+vapp3+info2_Answer+vapp2+'><td class="cardinfoname">' + info2_Question + '</td><td class="answercardinfo">' + info2_Answer + '</td></tr>');
            }
            if (info3_Answer != 'NoData' && typeof info3_Answer !== 'undefined' && info3_Answer != '') {
                table.push('<tr '+vapp1+info3_Question+vapp3+info3_Answer+vapp2+'><td class="cardinfoname">' + info3_Question + '</td><td class="answercardinfo">' + info3_Answer + '</td></tr>');
            }
            if (info4_Answer != 'NoData' && typeof info4_Answer !== 'undefined' && info4_Answer != '') {
                table.push('<tr '+vapp1+info4_Question+vapp3+info4_Answer+vapp2+'><td class="cardinfoname">' + info4_Question + '</td><td class="answercardinfo">' + info4_Answer + '</td></tr>');
            }
            if (PopulationTrend_Num >= 0 && PopulationTrend_Num <= 2) {
                table.push('<tr '+vapp1+PopulationTrend_Question+vapp3+PopulationTrend_Answer+vapp2+'><td class="cardinfoname">' + PopulationTrend_Question + '</td><td class="answercardinfo">' + PopulationTrend_Answer + PstatusSymbol + '</td></tr>');
            }  
            if (MultipleImages_table != 'NoData' && typeof MultipleImages_table !== 'undefined' && MultipleImages_table != '' && IncludeImg == 4) {
setAllMultipleImages(table,IncludeImg,ScientificName_Answer,CommonName_Answer,CommonName_Answer_En,MultipleImages_table);
                
            }
            table.push('</tbody></table>');

if (RedList_Num >= 1 && RedList_Num <= 9) {
var disnone; 
	if (IncludeIUCN == 1) {
		disnone = '';
	if (RedList_Num == 8 || RedList_Num == 9) {
	disnone = 'd-none';
}
			
          
SetIUCNHTML(table,disnone,RedList_Num);                  
                  

                }
            }      

            if (DidYouKnow_Answer != 'NoData' && typeof DidYouKnow_Answer !== 'undefined' && DidYouKnow_Answer != '') {
                if (IncludeDidUknow == 1) {
var sharelink = PostUrlInSite_Answer;
conDidYouKnow(table,DidYouKnow_Answer,sharelink);
                }
            }
if(som=="sheet"){
if (Modeling_3D != 'NoData' && typeof Modeling_3D !== 'undefined' && Modeling_3D != '') {
		if (IncludeV3D == 1) {
set3dany(table,Modeling_3D);
		}
}
  }
	
if (ImgSizeComparison_Answer != 'NoData' && typeof ImgSizeComparison_Answer !== 'undefined' && ImgSizeComparison_Answer != '' && ImgMaps_Answer != 'NoData' && typeof ImgMaps_Answer !== 'undefined' && ImgMaps_Answer != ''){
	
if (IncludeSizeComparison == 1 && IncludePresenceMap == 1) {
	table.push('<hr/><div class="container overflow-hidden"><div class="row row-cols-1 row-cols-md-2 row-cols-sm-2 g-2 mt-2">');
}else if(IncludeSizeComparison == 1 || IncludePresenceMap == 1){
	table.push('<hr/><div class="container overflow-hidden">');
}
}else if (ImgSizeComparison_Answer != 'NoData' && typeof ImgSizeComparison_Answer !== 'undefined' && ImgSizeComparison_Answer != ''){
if(IncludeSizeComparison == 1){
	table.push('<hr/><div class="container overflow-hidden">');
}
}else if (ImgMaps_Answer != 'NoData' && typeof ImgMaps_Answer !== 'undefined' && ImgMaps_Answer != '') {
if(IncludePresenceMap == 1){
	table.push('<hr/><div class="container overflow-hidden">');
}
}

if(IncludeSizeComparison == 1){
if (ImgSizeComparison_Answer != 'NoData' && typeof ImgSizeComparison_Answer !== 'undefined' && ImgSizeComparison_Answer != '') {
var ImgSizeComparison = ImgSizeComparison_Answer.toString().replace(/\/s200\/|\/s320\/|\/s160\/|\/h160\/|\/h120\/|\/s120\/|\/s1600\//gi, "/s162/");
ImgSizeComparison = ImgSizeComparison.replace(/=s200|=s162|=s320|=s160|=h160|=h120|=s120|=s1600|=s1900/gi, "=s162");
ImgSizeComparison = ImgSizeComparison.replace("=s162", "=s400");
  table.push('<div class="col"><div class="card"><img src="'+ImgSizeComparison+'" class="card-img-top" alt="'+ImgSizeComparison_Question+'"><div class="card-body p-1 text-center border-top"><p class="card-text">'+ImgSizeComparison_Question+'</p></div></div></div>');
  }
}

if(IncludePresenceMap == 1){
if (ImgMaps_Answer != 'NoData' && typeof ImgMaps_Answer !== 'undefined' && ImgMaps_Answer != '') {
var ImgMapsAnswer = ImgMaps_Answer.toString().replace(/\/s200\/|\/s320\/|\/s160\/|\/h160\/|\/h120\/|\/s120\/|\/s1600\//gi, "/s162/");
ImgMapsAnswer = ImgMapsAnswer.replace(/=s200|=s162|=s320|=s160|=h160|=h120|=s120|=s1600|=s1900/gi, "=s162");
ImgMapsAnswer = ImgMapsAnswer.replace("=s162", "=s400");
  table.push('<div class="col"><div class="card"><img src="'+ImgMapsAnswer+'" class="card-img-top" alt="'+ImgMaps_Question+'"><div class="card-body p-1 text-center"><p class="card-text">'+ImgMaps_Question+'</p></div></div></div>');
            
}  
}

if (ImgSizeComparison_Answer != 'NoData' && typeof ImgSizeComparison_Answer !== 'undefined' && ImgSizeComparison_Answer != '' && ImgMaps_Answer != 'NoData' && typeof ImgMaps_Answer !== 'undefined' && ImgMaps_Answer != ''){
	
if (IncludeSizeComparison == 1 && IncludePresenceMap == 1) {
	table.push('</div></div>');
}else if(IncludeSizeComparison == 1 || IncludePresenceMap == 1){
	table.push('</div>');
}
}else if(ImgSizeComparison_Answer != 'NoData' && typeof ImgSizeComparison_Answer !== 'undefined' && ImgSizeComparison_Answer != ''){
if(IncludeSizeComparison == 1){
	table.push('</div>');
}
}else if(ImgMaps_Answer != 'NoData' && typeof ImgMaps_Answer !== 'undefined' && ImgMaps_Answer != '') {
if(IncludePresenceMap == 1){
	table.push('</div>');
}
}


          

          
if(som=="sheet"){

  
            if (MultipleImages_table != 'NoData' && typeof MultipleImages_table !== 'undefined' && MultipleImages_table != '' && IncludeImg != 4) {
setAllMultipleImages(table,IncludeImg,ScientificName_Answer,CommonName_Answer,CommonName_Answer_En,MultipleImages_table)
              
            }
            
}
          else{

    var titleforimgdownload = 'GeoArabic';
    if (ScientificName_Answer != 'NoData' && ScientificName_Answer != '') {
        titleforimgdownload = ScientificName_Answer;
    } else if (CommonName_Answer_En != 'NoData' && CommonName_Answer_En != '') {
        titleforimgdownload = CommonName_Answer_En;
    } else if (CommonName_Answer != 'NoData' && CommonName_Answer != '') {
        titleforimgdownload = CommonName_Answer;
    }
    $('.pswp__button--download').attr('data-title', titleforimgdownload);
    table.push('<hr class="hrTOPcarouselImg"/>');
    table.push("<div id='carouselImg'><div class='carouselImgspinners p-4 text-center'><strong class='mt-2'>جارٍ تحميل الصور...</strong><br/><div class='progress mt-4 mb-2'><div id='progressImg' class='progress-bar progress-bar-striped progress-bar-animated bg-danger' role='progressbar' style='width:10%;' aria-valuenow='10' aria-valuemin='10' aria-valuemax='100'>0%</div></div></div><div class='row row-cols-2 row-cols-md-4 g-2 card-gallery mx-1 my-2 d-none' id='iimmgg' itemscope itemtype='http://schema.org/ImageGallery'>");
    $(MultipleImages_Answer.toString()).each(function() {
        var imglength = $(this).find('li').length;
        var nom = 0;
        $(this).find('li').each(function() {
            var getimgs = $(this).html();
            getimgs = getimgs.replace(/\/s200\/|\/s320\/|\/h120\/|\/s120\/|\/s400\/|\/s1600\//gi, "/s120/");
            getimgs = getimgs.replace(/=s200|=s320|=h120|=s120|=s400|=s1600/gi, "=s120");
            var getimgs1600 = getimgs.replace("/s120/", "/s1600/");
            getimgs1600 = getimgs1600.replace("=s120", "=s1600");
            var getimgs162 = getimgs.replace("/s120/", "/h85-w162-c/");
            getimgs162 = getimgs162.replace("=s120", "=h85-w162-c");
            var img = new Image();
            img.onload = function() {
                nom++
                var height = img.height;
                var width = img.width;
                $('#iimmgg').append('<a class="col" href="' + getimgs1600 + '" data-size="' + width + 'x' + height + '" data-med="' + getimgs1600 + '" data-med-size="' + width + 'x' + height + '" data-author="Geo Arabic"><img src="' + getimgs162 + '" alt="' + CommonName_Answer + '" class="card-img"/></a>');
                var pPos = imglength;
                var pEarned = nom;
                var perc = "";
                if (isNaN(pPos) || isNaN(pEarned)) {
                    perc = " ";
                } else {
                    perc = ((pEarned / pPos) * 100).toFixed(3);
                    perc = Math.trunc(perc)
                }
                $('#progressImg').css('width', perc + '%');
                $('#progressImg').attr('aria-valuenow', perc);
                $('#progressImg').html(perc + '%');
                if (perc == 100) {
                    $(".carouselImgspinners").css("display", "none");
                    $("#iimmgg").removeClass("d-none");
                    cardimgG();
                }
            }
            img.src = getimgs1600;
        });
    });
    table.push('</div></div>');















}
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
        }

        var getsetIdCard = getIdCard;
        var CardName = CommonName_Answer;
        var CardTimestamp = Timestamp;
        var CardUserName = UserName;
        var CardUserImg = UserAccountImg;
        UserAccountId = UserAccountId;




        
        CardUserImg = CardUserImg.toString().replace("=s96-c", "=s50-c");
        if (SourceInfo_Answer_Title != 'NoData' && typeof SourceInfo_Answer_Title !== 'undefined' && SourceInfo_Answer_Title != '') {
          CardName = "معلومات حول " + CommonName_Answer + " - " + ScientificName_Answer;
        }else{
          CardName = "معلومات حول " + CommonName_Answer;
        }

          
          
        var alertcard = "";
        var removedcard = "";
        if (UserStatus == 0) {
            CardUserImg = "https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png";
            CardUserName = "مجهول";
        } else if (UserStatus == 1) {
            CardUserName = CardUserName;
            CardUserImg = UserAccountImg;
        } else if (UserStatus == 2) {
            CardUserName = "<i aria-hidden='true' onclick='properties(&quot;vip&quot;)' class='fa fa-crown text-success'></i> " + CardUserName;
            CardUserImg = UserAccountImg;
        } else if (UserStatus == 3){
            CardUserName = "<i class='fa-solid fa-badge-check text-primary' onclick='properties(&quot;trust&quot;)' aria-hidden='true'></i> " + CardUserName;
            CardUserImg = UserAccountImg;
        } else if (UserStatus == 4){
            CardUserName = "<i class='fas fa-user-shield text-primary' onclick='properties(&quot;admin&quot;)' aria-hidden='true'></i> " + CardUserName;
            CardUserImg = UserAccountImg;
        } else {
            CardUserImg = "https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png";
            CardUserName = "مجهول";
        }


        if (Name_publishing == "no") {
            CardUserImg = "https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png";
            CardUserName = "<i class='fas fa-user-lock text-secondary' onclick='properties(&quot;unknown&quot;)'></i> مجهول";
        }
		
        if (Published == 0) {
            alertcard = "<hr/><div class='alert alert-danger' role='alert'><h5 class='alert-heading'>تم إزالة هذه البطاقة</h5><p class='alertp'>تم إزالة هذه البطاقة لعدم صحة البيانات الواردة بها او لعدم كفاية المعلومات المطلوبة.</p></div><hr style='background-color:#999999'/>";
            removedcard = " d-none";
            CardUserImg = "https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png";
            CardUserName = "مجهول";
        }
		
		

      
		var sharelink = PostUrlInSite_Answer;
        table.push("<hr/><div class='container p-0 m-0'><div class='row'>");
   
   
   
        table.push("<div class='col-auto me-auto'><div class='btn p-0 btndown' data-bs-toggle='collapse' onclick='InfoaboutpublisherItme()' data-bs-target='#Infoaboutpublisher' role='button' aria-expanded='false' aria-controls='Infoaboutpublisher'><i title='حول هذه البطاقة' class='fa fa-info-circle' aria-hidden='true'></i></div></div>");



   
   
   

   
if(UserAccountIdcw != undefined && UserAccountIdcw != ''){
var Img_Answer_favorite = Img_Answer;
var p = PostIdInSite_Answer;
var u = UserAccountIdcw;
p = p.toString();
u = u.toString();
var pu = "\'P" + p + "\',\'U" + u + "\',\'" + ResponseNumber + "\'";
var btn_favoriteID = "P" + p;
table.push('<div class="col" id="btn_favorite"><button type="button" onclick="btn_favorite('+pu+')" data-name="'+CommonName_Answer+'" data-img="'+Img_Answer_favorite+'" class="btn p-0 btndown btn_favorite '+btn_favoriteID+'" disabled> <input type="checkbox" class="btn-check post_favorite" id="post_favorite" autocomplete="off" > <i class="far fa-star"></i> <div class="spinner-grow text-warning spinner-grow-sm d-none" role="status"><span class="visually-hidden">Loading...</span> </div> </button></div>');
}
   
   
   

   
   
   
if(AccountStatus_C == "3" || AccountStatus_C == "2"){
table.push("<div class='col-auto'><button type='button' class='btn p-0 btndown'><a name='"+PostIdInSite_Answer+"'></a><i class='fa fa-eye'></i><span id='postviews' class='mx-1'></span></button></div>");
}


if(AccountStatus_C == "3"){
var idcardprint = ResponseNumber;
var idreplace = idcardprint.replace("ID1000000","");
var numId = parseInt(idreplace); 
numId = numId+3;
var targetSet = "";
if(!GeoArabicAndroid){
targetSet = "target='_blank'";
}
table.push("<div class='col-auto'><a href='https://card.geoarabic.com/p/editing-post.html?id="+numId+"' "+targetSet+" class='btn p-0 btndown'><i class='fa-solid fa-pen'></i></a></div>");
}


table.push("<div class='col-auto' id='btn_print'><div class='btn-group dropup'>");

table.push("<button aria-expanded='false' class='btn p-1 btndown border-0 bg-transparent' data-bs-auto-close='outside' data-bs-toggle='dropdown' id='monitor' type='button' ><i class='fa-star fas' style='opacity:0;'></i> <div class='noticeMonitor'> <i class='fa-solid fa-print pb-3'></i> <i class='fa-solid fa-file-pdf pb-3'></i> <i class='fa-solid fa-camera-viewfinder pb-3'></i> <i class='fa-solid fa-share-from-square pb-3'></i> </div></button>");

table.push("<ul aria-labelledby='monitor'class='dropdown-menu py-0 border-0 shadow'style='min-width:185px'><li><div class='rounded-0 w-100 bg-dark py-2 rounded-top text-center text-light'>حدد المحتوى المطلوب</div></li><li class='border border-top-0 border-bottom-0'><label class='shadow-none dropdown-item rounded-0'for='printtextTable'><input class='shadow-none form-check-input'id='printtextTable'type='checkbox'checked> الجدول <i class='fa-solid float-end mt-1 fa-table'></i></label></li><hr class='m-0 p-0'><li class='border border-top-0 border-bottom-0'><label class='shadow-none dropdown-item rounded-0'for='printcardDescription'><input class='shadow-none form-check-input'id='printcardDescription'type='checkbox'> الوصف <i class='fa-solid float-end mt-1 fa-align-right'></i></label></li><hr class='m-0 p-0'><li class='border border-top-0 border-bottom-0'><label class='shadow-none dropdown-item rounded-0'for='printIUCNClass'><input class='shadow-none form-check-input'id='printIUCNClass'type='checkbox'> القائمة الحمراء <i class='fa-solid float-end mt-1 fa-siren-on'></i></label></li><hr class='m-0 p-0'><li class='border border-top-0 border-bottom-0'><label class='shadow-none dropdown-item rounded-0'for='printimgmapandsize'><input class='shadow-none form-check-input'id='printimgmapandsize'type='checkbox'> الحجم والخرائط <i class='fa-solid float-end mt-1 fa-earth-asia'></i></label></li><hr class='m-0 p-0'><li class='border border-top-0 border-bottom-0'><label class='shadow-none dropdown-item rounded-0'for='printdidyouknow'><input class='shadow-none form-check-input'id='printdidyouknow'type='checkbox'> محتوى هل تعلم <i class='fa-solid float-end mt-1 fa-head-side-brain'></i></label></li><hr class='m-0 p-0'><li class='border border-top-0 border-bottom-0'><label class='shadow-none dropdown-item rounded-0'for='printcarouselImg'><input class='shadow-none form-check-input'id='printcarouselImg'type='checkbox'> تضمين الصور <i class='fa-solid float-end mt-1 fa-image'></i></label></li><hr class='m-0 p-0'><li class='border border-top-0 border-bottom-0'><label class='shadow-none dropdown-item rounded-0'for='printuserpublisher'><input class='shadow-none form-check-input'id='printuserpublisher'type='checkbox'> حقوق النشر <i class='fa-solid float-end mt-1 fa-user'></i></label></li><li><span class='btn btn-outline-primary rounded-0 w-100 rounded-bottom'id='svglogoprintbtn'onclick='idElementPrint(this)'><strong>تـنــفيـــذ</strong> <svg class='svglogoprintbtn'><use xlink:href='#logo_fixed_ancard_svg'/></svg></span></li></ul>");
		
table.push("</div></div>");
		
		
		
		
		
		
		
		
		
		
        table.push("<div class='col-auto'><div class='btn p-1 btndown' onclick='openmodalshare()'><i title='مشاركة' class='fa fa-share-alt' aria-hidden='true'></i></div></div>");
        table.push("</div></div>");


        table.push("<div id='Infoaboutpublisher' class='collapse'><hr style='background-color:#999999'/>");
        table.push("<div class='my-2 mt-4 Infoaboutpublisher'>");


		table.push(alertcard);
        table.push("<ul class='list-group list-group-flush text-center'>");
		table.push("<div id='UserInfo'></div>");

        
        
        
 if(som == "site"){
         CardName = CommonName_Answer;
         CardTimestamp = Timestamp;
         CardUserName = UserName.Answer;
         CardUserImg = UserAccountImg.Answer;
        UserAccountId = UserAccountId.Answer;
}
        
        
        
 if(som == "sheet"){
		setUserInfo(CardUserImg,CardUserName,Name_publishing,UserAccountId);
}
   
        table.push("<li class='list-group-item'>" + CardTimestamp + "</li>");
        table.push("<li class='list-group-item d-none" + removedcard + "'><a class='sharer sharer-fb' href='https://www.facebook.com/dialog/feed?app_id=453684218377321&display=popup&link=" + sharelink + "&redirect_uri=" + sharelink + "&quote="+CardName+"&hashtag=#جيو_عربي' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='Facebook'><i class='fa fa-facebook-square' aria-hidden='true'></i></a><a class='sharer sharer-tw' href='https://twitter.com/intent/tweet?hashtags=جيو_عربي&url=" + sharelink + "&text=" + CardName + "&via=GeoArabs&related=GeoArabs' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='Twitter'><i class='fa fa-twitter' aria-hidden='true'></i></a> <a class='sharer sharer-wa' data-action='share/whatsapp/share' href='https://api.whatsapp.com/send?text=" + CardName + "   " + sharelink + "' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='WhatsApp'><i class='fa fa-whatsapp' aria-hidden='true'></i></a><div class='sharer sharer-copy copy' data-clipboard-target='#linkShareforcopy' rel='nofollow' title='copy link'><i class='fa fa-clone' aria-hidden='true'></i></div></li>");
		
        table.push("</ul>");
		
        $("#linkcardb").val(getsetIdCard);
        if (SourceInfo_Answer_link != 'NoData' && typeof SourceInfo_Answer_link !== 'undefined' && SourceInfo_Answer_link != '') {
            table.push("<hr/><p class='py-2 fspcard'>المزيد من المعلومات حول " + CommonName_Answer + ": <a href='" + SourceInfo_Answer_link + "' target='_blank'>" + SourceInfo_Answer_Title + " <i class='fa fa-external-link fa-flip-horizontal' style='font-size:0.8rem' aria-hidden='true'></i></a></p>");
        }
        table.push(setCreatedCardInfo());
        table.push("</div></div>");


        document.getElementById('cardinfo').innerHTML = table.join('');
        setiframe();
   
   
   
        if (DidYouKnow_Answer != 'NoData' && typeof DidYouKnow_Answer !== 'undefined' && DidYouKnow_Answer != '') {
            if (IncludeDidUknow == 1) {
                $('#cardinfo #didyouknow .owl-carousel').owlCarousel({
                    responsiveClass: true,
                    autoHeight: true,
                    rtl: true,
                    items: 1,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    stagePadding: 30,
                    loop: true,
                    margin: 50,
                    nav: true,
                })
            }
        }
 

   
   
   
   
if(som == "sheet"){
console.log(som);
postviews(PostUrlInSite_Answer,PostIdInSite_Answer,IdCard,Img_Answer,CommonName_Answer,UserAccountId);
 }else{
postviews(PostUrlInSite_Answer,PostIdInSite_Answer,IdCardObj,Img_Answer,CommonName_Answer,UserAccountId);
 }

        if (DidYouKnow_Answer != 'NoData' && typeof DidYouKnow_Answer !== 'undefined' && DidYouKnow_Answer != '') {
            if (IncludeDidUknow == 1) {
                $('#cardinfo #didyouknow .owl-carousel').owlCarousel({
                    responsiveClass: true,
                    autoHeight: true,
                    rtl: true,
                    items: 1,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    stagePadding: 30,
                    loop: true,
                    margin: 50,
                    nav: true,
                })
            }
        }
dataDescription();
onCompletePost(SummaryPage_Answer,RedList_Num,ImgSizeComparison_Answer,ImgMaps_Answer,DidYouKnow_Answer,MultipleImages_table,Name_publishing,Modeling_3D);

if(UserAccountIdcw != undefined && UserAccountIdcw != ''){
var p1 = PostIdInSite_Answer;
var u1 = UserAccountIdcw;
p1 = p1.toString();
u1 = u1.toString();
var p2 = "P" + p1;
var u2 = "U" + u1;
setUserPostFavorite(u2,p2);
}

setTimeout(function(){ 
loadSimilarPosts(recosts,gettype,cards_num,num_return,get_ScientificName_Answer,get_Subfamily_Answer,get_Order_Answer,get_Class_AnswerAR,get_Type_Answer,get_Diet_Answer,get_ImgSizeComparison_Question);
}, 1000);

 
 }
