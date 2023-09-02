var getIdCard = $.query.get("id");
var getBackgroundCard = $.query.get("b");
  
var IncludeImg = $.query.get("ii");
var IncludeDidUknow = $.query.get("iduc");
var IncludeIUCN = $.query.get("iiucn");
var IncludePresenceMap = $.query.get("isc");
var IncludeSizeComparison = $.query.get("ipm");


        var d = '&iiucn=1';
        var e = '&isc=1';
        var f = '&ipm=1';
  
getBackgroundCard = getBackgroundCard.toString().replace(/z/gi,'0')

  
if(getBackgroundCard != ""){
$("body.bg-light").attr("style","background-color:#"+getBackgroundCard+"!important")
}
  

  

if(IncludeImg == 1){
	IncludeImg = 5;
}else if(IncludeImg == 2){
	IncludeImg = 4;
}else{
	IncludeImg = 0;
}

  

  
if (typeof IncludeDidUknow == "string"){
IncludeDidUknow = 0;
}else{
	if(IncludeDidUknow == 1){
IncludeDidUknow = 1;
    }else{
IncludeDidUknow = 0;
    }
}
  
  
if (typeof IncludeIUCN == "string"){
IncludeIUCN = 0;
}else{
	if(IncludeIUCN == 1){
IncludeIUCN = 1;
    }else{
IncludeIUCN = 0;
    }
}
  
if (typeof IncludePresenceMap == "string"){
IncludePresenceMap = 0;
}else{
	if(IncludePresenceMap == 1){
IncludePresenceMap = 1;
    }else{
IncludePresenceMap = 0;
    }
}

if (typeof IncludeSizeComparison == "string"){
IncludeSizeComparison = 0;
}else{
	if(IncludeSizeComparison == 1){
IncludeSizeComparison = 1;
    }else{
IncludeSizeComparison = 0;
    }
}
  
var IdCard = getIdCard.replace('ID1000000','');
var IdCards = parseInt(IdCard)
var IdCard = IdCards + 3;
var getusercodedrive = "https://sheets.googleapis.com/v4/spreadsheets/15Va2cpK8HdVl9CgpAbL1g2aU94LUBVozbL5RRulAem4/values/responses?";
   $.getJSON(getusercodedrive, {
    key: "AIzaSyDpCuvAcL0ESYhI5X9amoy12NGpswwXdlQ",
    range: "A"+IdCard+":DO"+IdCard,
    majorDimension: "COLUMNS"
  }).catch(function (error) {
     document.getElementById('cardinfo').innerHTML = '<div class="alert alert-warning" role="alert"> حدث خطأ في جلب البطاقة </div>';
  }).done(function(recosts) {
     


var item = recosts.values;


var Timestamp = item[0];//تاريخ النشر
var ResponseNumber = item[1];//ID
var Published = item[2];//حالة النشر
var UserStatus = item[3];//حالة الحساب
var CommonName_Question = item[4];//الإسم الشائع
var CommonName_Answer = item[5];//الإسم الشائع هو
var CommonName_Answer_En = item[6];//الإسم الشائع بالانجليزية هو
var ScientificName_Question = item[7];//الاسم العلمي
var ScientificName_Answer = item[8];//الاسم العلمي هو
var Type_Question = item[9];//النوع
var Type_Answer = item[10];//النوع هو
var Class_Question = item[11];//الطائفة
var Class_AnswerAR = item[12];//إسم الطائفة
var Class_AnswerEN = item[13];//الإسم العلمي للطائفة
var Order_Question = item[14];//الرتبة
var Order_Answer = item[15];//الرتبة هي
var Subfamily_Question = item[16];//الفصيلة
var Subfamily_Answer = item[17];//الفصيلة هي
var Diet_Question = item[18];//النظام الغذائي
var Diet_Answer = item[19];//النظام الغذائي هو
var Age_Question = item[20];//متوسط العمر
var Age_Answer = item[21];//متوسط العمر هو
var Size_Question = item[22];//الحجم
var Size_Answer = item[23];//الحجم هو
var Weight_Question = item[24];//الوزن
var Weight_Answer = item[25];//الوزن هو
var PopulationTrend_Question = item[26];//إتجاه السكان الحالي
var PopulationTrend_Answer = item[27];//إتجاه السكان الحالي هو
var PopulationTrend_Code = item[28];//رمز إتجاه السكان الحالي
var PopulationTrend_Num = item[29];//رقم إتجاه السكان الحالي
var RedList_Question = item[30];//حالة القائمة الحمراء (IUCN)
var RedList_Answer = item[31];//حالة القائمة الحمراء (IUCN) هي
var RedList_Num = item[32];//رقم حالة القائمة الحمراء (IUCN)
var Speed_Question = item[33];//السرعة
var Speed_Answer = item[34];//السرعة هي
var DurationPregnancy_Question = item[35];//مدة الحمل
var DurationPregnancy_Answer = item[36];//مدة الحمل هي
var NumBirths_Question = item[37];//عدد الصغار/البيض
var NumBirths_Answer = item[38];//عدد الصغار/البيض هو
var EcologicalHabitat_Question = item[39];//الموطن البيئي
var EcologicalHabitat_Answer = item[40];//الموطن البيئي هو
var Color_Question = item[41];//الألوان
var Color_Answer = item[42];//الألوان هي
var Enemy_Question = item[43];//الأعداء
var Enemy_Answer = item[44];//الأعداء هم
var FeedOn_Question = item[45];//الغذاء
var FeedOn_Answer = item[46];//الغذاء هو
var Img_Question = item[47];//صورة الحيوان
var Img_Answer = item[48];//عنوان صورة الحيوان
var ImgInDrive_Question = item[49];//الصورة في درايف
var ImgInDrive_Answer = item[50];//رابط الصور في درايف
var ImgCover_Question = item[51];//صورة الغلاف
var ImgCover_Answer = item[52];//عنوان صورة الغلاف
var MultipleImages_Question = item[53];//صور متعددة
var MultipleImages_Answer = item[54];//روابط الصور المتعددة
var JsonFileIdInDrive_Question = item[55];//ملف Json
var JsonFileIdInDrive_Answer = item[56];//معرف ملف Json
var ImgSizeComparison_Question = item[57];//صورة مقارنة الحجم
var ImgSizeComparison_Answer = item[58];//عنوان صورة مقارنة الحجم
var info1_Question = item[59];//المعلومات الإضافية 1
var info1_Answer = item[60];//المعلومات الإضافية 1 هي
var info2_Question = item[61];//المعلومات الإضافية 2
var info2_Answer = item[62];//المعلومات الإضافية 2 هي
var info3_Question = item[63];//المعلومات الإضافية 3
var info3_Answer = item[64];//المعلومات الإضافية 3 هي
var info4_Question = item[65];//المعلومات الإضافية 4
var info4_Answer = item[66];//المعلومات الإضافية 4 هي
var DidYouKnow_Question = item[67];//هل تعلم
var DidYouKnow_Answer = item[68];//معلومات هل تعلم
var UserAccountId = item[69];//معرف حساب المستخدم
var UserLoginWith = item[70];//تسجيل دخول بإستخدام
var UserAccountImg = item[71];//صورة الملف الشخصي للمستخدم
var UserName = item[72];//إسم المستخدم
var UserEmail = item[73];//البريد الإلكتروني
var Name_publishing = item[74];//اظهار معلومات الناشر
var PageTitle = item[75];//عنوان الصفحة
var PageLink = item[76];//رابط الصفحة
var SourceInfo_Question = item[77];//المراجع
var SourceInfo_Answer_Title = item[78];//عنوان المراجع
var SourceInfo_Answer_link = item[79];//رابط المراجع
var TheState = item[80];//الدولة
var CountryCode = item[81];//رمز الدولة
var IPAddress = item[82];//عنوان IP
var ScreenWidth = item[83];//عرض الشاشة
var ScreenHeight = item[84];//إرتفاع الشاشة
var MoreInformation = item[85];//معلومات إضافية
var dateID = item[86];//معرف تاريخ المنشور
var PostUrlInSite_Question = item[87];//رابط المنشور
var PostUrlInSite_Answer = item[88];//رابط المنشور هو
var PostIdInSite_Question = item[89];//معرف المنشور هو
var PostIdInSite_Answer = item[90];//معرف المنشور
var SummaryPage_Question = item[91];//وصف الموضوع
var SummaryPage_Answer = item[92];//وصف الموضوع هو
var ImgMaps_Question = item[93];//صورة خريطة التواجد
var ImgMaps_Answer = item[94];//الخارطة URL

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


var urlpost = PostUrlInSite_Answer;
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
                table.push('<tr '+vapp1+CommonName_Question+vapp3+CommonName_Answer+titleNameEng+vapp2+'><td class="cardinfoname">' + CommonName_Question + '</td><td class="answercardinfo">' + CommonName_Answer + '</td></tr>');
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
            }            if (MultipleImages_Answer != 'NoData' && typeof MultipleImages_Answer !== 'undefined' && MultipleImages_Answer != '') {
                if (IncludeImg == 4) {
                    table.push('<tr><td class="cardinfoname">الصور</td><td class="answercardinfo">');
                    $(MultipleImages_Answer.toString()).each(function() {
                        var nomli = -1;
                        $(this).find('li').each(function() {
                            nomli += 1;
                            var getimgs = $(this).html();
                          getimgs = getimgs.replace(/\/s200\/|\/s320\/|\/h120\/|\/s120\/|\/s400\/|\/s1600\//gi, "/s1600/");
                          getimgs = getimgs.replace(/=s200|=s320|=h120|=s120|=s400|=s1600/gi, "=s1600");

                            if (nomli == 0) {
                                table.push('<a href="' + getimgs + '" class="spotlight"><i class="fa fa-picture-o" aria-hidden="true"></i></a>');
                            } else {
                                table.push('<a href="' + getimgs + '" class="spotlight"></a>');
                            }
                        });
                    });
                    table.push('</td></tr>');
                }
            }
            table.push('</tbody></table>');
if (RedList_Num >= 1 && RedList_Num <= 9) {
var disnone; 
	if (IncludeIUCN == 1) {
		disnone = '';
	if (RedList_Num == 8 || RedList_Num == 9) {
	disnone = 'd-none';
}
			
var GeoArabicAndroid = /GeoArabicAndroid/.test(navigator.userAgent);



                  
SetIUCNHTML(table,disnone,RedList_Num);                  
                  

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


            if (DidYouKnow_Answer != 'NoData' && typeof DidYouKnow_Answer !== 'undefined' && DidYouKnow_Answer != '') {
                if (IncludeDidUknow == 1) {
var sharelink = PostUrlInSite_Answer;
conDidYouKnow(table,DidYouKnow_Answer,sharelink);
                }
            }
            if (MultipleImages_Answer != 'NoData' && typeof MultipleImages_Answer !== 'undefined' && MultipleImages_Answer != '') {
                if (IncludeImg == 1) {
                    table.push('<hr/>');
                    table.push('<div id="carouselImg" class="carousel slide carousel-fade" data-bs-ride="carousel">');
                    $(MultipleImages_Answer.toString()).each(function() {
                        table.push('<ol class="carousel-indicators">');
                        var nom = -1;
                        $(this).find('li').each(function() {
                            nom += 1;
                            if (nom == 0) {
                                table.push('<li data-bs-target="#carouselImg" data-bs-slide-to="' + nom + '" class="active"></li>');
                            } else {
                                table.push('<li data-bs-target="#carouselImg" data-bs-slide-to="' + nom + '"></li>');
                            }
                        });
                        table.push('</ol>');
                        table.push('<div class="carousel-inner">');
                        var noms = -1
                        $(this).find('li').each(function() {
                            var getimgs = $(this).html();
                            noms += 1;
                            getimgs = getimgs.replace(/\/s200\/|\/s320\/|\/h120\/|\/s120\/|\/s400\/|\/s1600\//gi, "/s120/");
                            var getimgs1600 = getimgs.replace("/s120/", "/s1600/");
                            getimgs1600 = getimgs1600.replace("=s120", "=s1600");
                            var getimgs600 = getimgs.replace("/s120/", "/h300-w568-c/");
                            getimgs600 = getimgs600.replace("=s120", "=h300-w568-c");
                            if (noms == 0) {
                                table.push('<div class="carousel-item active">');
                                table.push('<a href="' + getimgs1600 + '" class="spotlight"><img src="' + getimgs600 + '" class="d-block w-100 rounded" alt="' + CommonName_Answer + ' - جيو عربي"></a>');
                                table.push('</div>');
                            } else {
                                table.push('<div class="carousel-item">');
                                table.push('<a href="' + getimgs1600 + '" class="spotlight"><img src="' + getimgs600 + '" class="d-block w-100 rounded" alt="' + CommonName_Answer + ' - جيو عربي"></a>');
                                table.push('</div>');
                            }
                        });
                        table.push('<a class="carousel-control-prev" href="#carouselImg" role="button" data-bs-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="visually-hidden">السابق</span> </a> <a class="carousel-control-next" href="#carouselImg" role="button" data-bs-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="visually-hidden">التالي</span></a>');
                        table.push('</div>');
                    });
                    table.push('</div>');
                } else if (IncludeImg == 2) {
                    table.push('<hr/>');
                    table.push("<div id='carouselImg'><div class='carouselImgspinners p-4 text-center'><strong class='mt-2'>جارٍ تحميل الصور...</strong><br/><div class='mt-2 spinner-border text-danger'role='status'></div></div><div class='owl-carousel owl-theme'>");
                    $(MultipleImages_Answer.toString()).each(function() {
                        $(this).find('li').each(function() {
                            var getimgs = $(this).html();
                            getimgs = getimgs.replace(/\/s200\/|\/s320\/|\/h120\/|\/s120\/|\/s400\/|\/s1600\//gi, "/s120/");
                            var getimgs1600 = getimgs.replace("/s120/", "/s1600/");
                            getimgs1600 = getimgs1600.replace("=s120", "=s1600");
                            var getimgs600 = getimgs.replace("/s120/", "/h300-w568-c/");
                            getimgs600 = getimgs600.replace("=s120", "=h300-w568-c");
                            table.push('<div class="item">');
                            table.push('<a href="' + getimgs1600 + '" class="spotlight"><img src="' + getimgs600 + '" class="d-block w-100 rounded" alt="' + CommonName_Answer + ' - جيو عربي"></a>');
                            table.push('</div>');
                        });
                    });
                    table.push('</div></div>');
                } else if (IncludeImg == 3) {
                    table.push('<hr/>');
                    table.push("<div id='carouselImg'><div class='carouselImgspinners p-4 text-center'><strong class='mt-2'>جارٍ تحميل الصور...</strong><br/><div class='mt-2 spinner-border text-danger'role='status'></div></div><div class='owl-carousel owl-theme'>");
                    $(MultipleImages_Answer.toString()).each(function() {
                        $(this).find('li').each(function() {
                            var getimgs = $(this).html();
                            getimgs = getimgs.replace(/\/s200\/|\/s320\/|\/h120\/|\/s120\/|\/s400\/|\/s1600\//gi, "/s120/");
                            var getimgs1600 = getimgs.replace("/s120/", "/s1600/");
                            getimgs1600 = getimgs1600.replace("=s120", "=s1600");
                            var getimgs600 = getimgs.replace("/s120/", "/h93-w176-c/");
                            getimgs600 = getimgs600.replace("=s120", "=h93-w176-c");
                            table.push('<div class="item">');
                            table.push('<a href="' + getimgs1600 + '" class="spotlight"><img src="' + getimgs600 + '" class="d-block w-100 rounded" alt="' + CommonName_Answer + ' - جيو عربي"></a>');
                            table.push('</div>');
                        });
                    });
                    table.push('</div></div>');
                }else if(IncludeImg == 5){
					var titleforimgdownload = 'GeoArabic';
if(ScientificName_Answer != 'NoData' && ScientificName_Answer != ''){
titleforimgdownload = ScientificName_Answer;
}else if(CommonName_Answer_En != 'NoData' && CommonName_Answer_En != ''){
titleforimgdownload = CommonName_Answer_En;
}else if(CommonName_Answer != 'NoData' && CommonName_Answer != ''){
titleforimgdownload = CommonName_Answer;
}
$('.pswp__button--download').attr('data-title',titleforimgdownload);
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

img.onload = function(){
nom++
var height = img.height;
var width = img.width;
  
$('#iimmgg').append('<a class="col" href="' + getimgs1600 + '" data-size="'+width+'x'+height+'" data-med="' + getimgs1600 + '" data-med-size="'+width+'x'+height+'" data-author="Geo Arabic"><img src="'+getimgs162+'" alt="'+CommonName_Answer+'" class="card-img"/></a>');

  

        var pPos = imglength; 
        var pEarned = nom;
        var perc="";
        if(isNaN(pPos) || isNaN(pEarned)){
            perc=" ";
           }else{
           perc = ((pEarned/pPos) * 100).toFixed(3);
           perc = Math.trunc(perc)
           }
  
$('#progressImg').css('width',perc+'%');
$('#progressImg').attr('aria-valuenow',perc);
$('#progressImg').html(perc+'%');
  
  
  
if(perc == 100){
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
        }
        var getsetIdCard = getIdCard;
        var CardName = CommonName_Answer;
        var CardTimestamp = Timestamp;
        var CardUserName = UserName;
        var CardUserImg = UserAccountImg;
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
        table.push("<div class='container p-0 m-0'><div class='row'>");
        table.push("<div class='col-auto me-auto'><div class='btn p-0 btndown' data-bs-toggle='collapse' onclick='InfoaboutpublisherItme()' data-bs-target='#Infoaboutpublisher' role='button' aria-expanded='false' aria-controls='Infoaboutpublisher'><i title='حول هذه البطاقة' class='fa fa-info-circle' aria-hidden='true'></i></div></div>");
        table.push("<div class='col-auto item-control blog-admin'><a name='"+PostIdInSite_Answer+"'></a> <i class='fa fa-eye'></i><span id='postviews'></span></div>");
        table.push("<div class='col-auto'><div class='mx-1' id='btn_print'><div class='btn-group dropup'><button aria-expanded='false' class='btn p-0 mr-0 btndown' data-bs-auto-close='outside' data-bs-toggle='dropdown' id='monitor' type='button'><i class='fa-solid fa-print'></i></button><ul aria-labelledby='monitor' class='dropdown-menu py-0'><li><label class='bg-dark py-2 rounded-0 rounded-top text-center text-light w-100'>حدد محتوى الطباعة</label></li><li><input autocomplete='off' class='btn-check' id='printtextTable' type='checkbox' checked> <label class='btn rounded-0 btn-outline-danger dropdown-item shadow-none' for='printtextTable'>الجدول <i class='fa-solid float-end mt-1 fa-table'></i></label></li><hr class='m-0 p-0'><li><input autocomplete='off' class='btn-check' id='printcardDescription' type='checkbox' checked> <label class='btn rounded-0 btn-outline-danger dropdown-item shadow-none' for='printcardDescription'>الوصف <i class='fa-solid float-end mt-1 fa-align-right'></i></label></li><hr class='m-0 p-0'><li><input autocomplete='off' class='btn-check' id='printIUCNClass' type='checkbox' checked> <label class='btn rounded-0 btn-outline-danger dropdown-item shadow-none' for='printIUCNClass'>القائمة الحمراء <i class='fa-solid float-end mt-1 fa-siren-on'></i></label></li><hr class='m-0 p-0'><li><input autocomplete='off' class='btn-check' id='printimgmapandsize' type='checkbox' checked> <label class='btn rounded-0 btn-outline-danger dropdown-item shadow-none' for='printimgmapandsize'>الحجم والخرائط <i class='fa-solid float-end mt-1 fa-earth-asia'></i></label></li><hr class='m-0 p-0'><li><input autocomplete='off' class='btn-check' id='printdidyouknow' type='checkbox' checked> <label class='btn rounded-0 btn-outline-danger dropdown-item shadow-none' for='printdidyouknow'>محتوى هل تعلم <i class='fa-solid float-end mt-1 fa-head-side-brain'></i></label></li><hr class='m-0 p-0'><li><input autocomplete='off' class='btn-check' id='printcarouselImg' type='checkbox' checked> <label class='btn rounded-0 btn-outline-danger dropdown-item shadow-none' for='printcarouselImg'>تضمين الصور <i class='fa-solid float-end mt-1 fa-image'></i></label></li><li><input autocomplete='off' class='btn-check' id='printuserpublisher' type='checkbox'> <label class='btn rounded-0 btn-outline-danger dropdown-item shadow-none' for='printuserpublisher'>ناشر البطاقة <i class='fa-solid float-end mt-1 fa-user'></i></label></li><hr class='m-0 p-0'><li><span class='btn btn rounded-0 btn-outline-primary btn-outline-success rounded-bottom w-100' onclick='idElementPrint(this)'>طبـاعــة <i class='fa-solid fa-print'></i></span></li></ul></div></div></div>");

        table.push("<div class='col-auto'><div class='btn p-0 btndown' onclick='openmodalshare()'><i title='مشاركة' class='fa fa-share-alt' aria-hidden='true'></i></div></div>");
        table.push("</div></div>");


        table.push("<div id='Infoaboutpublisher' class='collapse'><hr style='background-color:#999999'/>");
        table.push("<div class='my-2 mt-4 Infoaboutpublisher'>");

		table.push(alertcard);
        table.push("<ul class='list-group list-group-flush text-center'>");
		table.push("<div id='UserInfo'></div>");
		setUserInfo(CardUserImg,CardUserName,Name_publishing,UserAccountId);

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


postviews(PostUrlInSite_Answer,PostIdInSite_Answer,IdCard,Img_Answer,CommonName_Answer,UserAccountId);


        if (MultipleImages_Answer != 'NoData' && typeof MultipleImages_Answer !== 'undefined' && MultipleImages_Answer != '') {
            if (IncludeImg == 1) {
                var carouselImg = document.querySelector('#cardinfo #carouselImg')
                var carousel = new bootstrap.Carousel(carouselImg, {
                    interval: 5000,
                    slide: "carousel",
                    wrap: true
                });
            } else if (IncludeImg == 2) {
                var img = $('#cardinfo #carouselImg img'),
                    totalImg = img.length;
                $('img').on('load', function() {
                    totalImg--;
                    if (totalImg == 0) {
                        $("#cardinfo .carouselImgspinners").css("display", "none");
                        $('#cardinfo #carouselImg .owl-carousel').owlCarousel({
                            responsiveClass: true,
                            autoHeight: true,
                            rtl: true,
                            items: 1,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            stagePadding: 0,
                            loop: true,
                            margin: 20,
                            nav: true,
                            animateOut: 'fadeOut',
                            animateIn: 'flipInX',
                            lazyLoad: true
                        });
                        $('#cardinfo #carouselImg .owl-next').html('<span class="fa-stack fs-4"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-angle-left fa-stack-1x fs-2"></i></span>');
                        $('#cardinfo #carouselImg .owl-prev').html('<span class="fa-stack fs-4"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-angle-right fa-stack-1x fs-2"></i></span>');
                    }
                }).on('error', function() {
                    $("#cardinfo .carouselImgspinners").html("حدث خطأ في تحميل الصور");
                });
            } else if (IncludeImg == 3) {
                var img = $('#cardinfo #carouselImg img'),
                    totalImg = img.length;
                $('img').on('load', function() {
                    totalImg--;
                    if (totalImg == 0) {
                        $("#cardinfo .carouselImgspinners").css("display", "none");
                        $('#carouselImg .owl-carousel').owlCarousel({
                            autoHeight: true,
                            rtl: true,
                            items: 3,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            stagePadding: 0,
                            loop: true,
                            margin: 20,
                            nav: false,
                            lazyLoad: true,
                            smartSpeed: 4000,
                            dotsSpeed: 250,
                            dragEndSpeed: 250
                        })
                        $('#cardinfo #carouselImg .owl-dots').css('margin-top', '10px');
                    }
                }).on('error', function() {
                    $("#cardinfo .carouselImgspinners").html("حدث خطأ في تحميل الصور");
                });
            }
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
onCompletePost(SummaryPage_Answer,RedList_Num,ImgSizeComparison_Answer,ImgMaps_Answer,DidYouKnow_Answer,MultipleImages_Answer,Name_publishing);
    });