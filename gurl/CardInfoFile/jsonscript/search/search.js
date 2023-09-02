$("#boxSearch").on("keyup", function() {
$('.SummarySearchspinner').css('display','inline-block');
$('#SummarySearch').css('display','none');
$("#dropdownSummarySearch").dropdown('show');
if($(this).val() == ""){
$("#dropdownSummarySearch").dropdown('hide');
}else{
searchTimeout.setup();
}
});


$("#boxSearch2").on("keyup", function() {
$('.SummarySearchspinner2').css('display','inline-block');
$('#SummarySearch2').css('display','none');
$("#dropdownSummarySearch2").dropdown('show');
if($(this).val() == ""){
$("#dropdownSummarySearch2").dropdown('hide');
}else{
searchTimeout2.setup();
}
});


 const searchTimeout = {
  remind: function() {


var valueSearchs = $("#boxSearch").val().toLowerCase();
valueSearchs = valueSearchs.replace(/أ|ا|آ|إ/gi,"ا");
valueSearchs = valueSearchs.replace(/ى|ي/gi,"ي");



var getcodedrive = "https://sheets.googleapis.com/v4/spreadsheets/15Va2cpK8HdVl9CgpAbL1g2aU94LUBVozbL5RRulAem4/?";
$.getJSON(getcodedrive, {
    key: "AIzaSyDpCuvAcL0ESYhI5X9amoy12NGpswwXdlQ",
    alt: "json",
    fields: "sheets(data.rowData.values.formattedValue)"
}).done(function(recosts) {
    var cards = '';
    var windowW = window.innerWidth;
    var windowH = window.innerHeight;
    $.each(recosts.sheets[0].data[0].rowData.reverse(), function(i, item) {
        var Img_W = 30;
        var Img_H = 30;
        var windowW = window.innerWidth;
        var windowH = window.innerHeight;
var Timestamp = item.values[0].formattedValue;//تاريخ النشر
var ResponseNumber = item.values[1].formattedValue;//ID
var Published = item.values[2].formattedValue;//حالة النشر
var UserStatus = item.values[3].formattedValue;//حالة الحساب
var CommonName_Question = item.values[4].formattedValue;//الإسم الشائع
var CommonName_Answer = item.values[5].formattedValue;//الإسم الشائع هو
var CommonName_Answer_En = item.values[6].formattedValue;//الإسم الشائع بالانجليزية هو
var ScientificName_Question = item.values[7].formattedValue;//الاسم العلمي
var ScientificName_Answer = item.values[8].formattedValue;//الاسم العلمي هو
var Type_Question = item.values[9].formattedValue;//النوع
var Type_Answer = item.values[10].formattedValue;//النوع هو
var Class_Question = item.values[11].formattedValue;//الطائفة
var Class_AnswerAR = item.values[12].formattedValue;//إسم الطائفة
var Class_AnswerEN = item.values[13].formattedValue;//الإسم العلمي للطائفة
var Order_Question = item.values[14].formattedValue;//الرتبة
var Order_Answer = item.values[15].formattedValue;//الرتبة هي
var Subfamily_Question = item.values[16].formattedValue;//الفصيلة
var Subfamily_Answer = item.values[17].formattedValue;//الفصيلة هي
var Diet_Question = item.values[18].formattedValue;//النظام الغذائي
var Diet_Answer = item.values[19].formattedValue;//النظام الغذائي هو
var Age_Question = item.values[20].formattedValue;//متوسط العمر
var Age_Answer = item.values[21].formattedValue;//متوسط العمر هو
var Size_Question = item.values[22].formattedValue;//الحجم
var Size_Answer = item.values[23].formattedValue;//الحجم هو
var Weight_Question = item.values[24].formattedValue;//الوزن
var Weight_Answer = item.values[25].formattedValue;//الوزن هو
var PopulationTrend_Question = item.values[26].formattedValue;//إتجاه السكان الحالي
var PopulationTrend_Answer = item.values[27].formattedValue;//إتجاه السكان الحالي هو
var PopulationTrend_Code = item.values[28].formattedValue;//رمز إتجاه السكان الحالي
var PopulationTrend_Num = item.values[29].formattedValue;//رقم إتجاه السكان الحالي
var RedList_Question = item.values[30].formattedValue;//حالة القائمة الحمراء (IUCN)
var RedList_Answer = item.values[31].formattedValue;//حالة القائمة الحمراء (IUCN) هي
var RedList_Num = item.values[32].formattedValue;//رقم حالة القائمة الحمراء (IUCN)
var Speed_Question = item.values[33].formattedValue;//السرعة
var Speed_Answer = item.values[34].formattedValue;//السرعة هي
var DurationPregnancy_Question = item.values[35].formattedValue;//مدة الحمل
var DurationPregnancy_Answer = item.values[36].formattedValue;//مدة الحمل هي
var NumBirths_Question = item.values[37].formattedValue;//عدد الصغار/البيض
var NumBirths_Answer = item.values[38].formattedValue;//عدد الصغار/البيض هو
var EcologicalHabitat_Question = item.values[39].formattedValue;//الموطن البيئي
var EcologicalHabitat_Answer = item.values[40].formattedValue;//الموطن البيئي هو
var Color_Question = item.values[41].formattedValue;//الألوان
var Color_Answer = item.values[42].formattedValue;//الألوان هي
var Enemy_Question = item.values[43].formattedValue;//الأعداء
var Enemy_Answer = item.values[44].formattedValue;//الأعداء هم
var FeedOn_Question = item.values[45].formattedValue;//الغذاء
var FeedOn_Answer = item.values[46].formattedValue;//الغذاء هو
var Img_Question = item.values[47].formattedValue;//صورة الحيوان
var Img_Answer = item.values[48].formattedValue;//عنوان صورة الحيوان
var ImgInDrive_Question = item.values[49].formattedValue;//الصورة في درايف
var ImgInDrive_Answer = item.values[50].formattedValue;//رابط الصور في درايف
var ImgCover_Question = item.values[51].formattedValue;//صورة الغلاف
var ImgCover_Answer = item.values[52].formattedValue;//عنوان صورة الغلاف
var MultipleImages_Question = item.values[53].formattedValue;//صور متعددة
var MultipleImages_Answer = item.values[54].formattedValue;//روابط الصور المتعددة
var JsonFileIdInDrive_Question = item.values[55].formattedValue;//ملف Json
var JsonFileIdInDrive_Answer = item.values[56].formattedValue;//معرف ملف Json
var ImgSizeComparison_Question = item.values[57].formattedValue;//صورة مقارنة الحجم
var ImgSizeComparison_Answer = item.values[58].formattedValue;//عنوان صورة مقارنة الحجم
var info1_Question = item.values[59].formattedValue;//المعلومات الإضافية 1
var info1_Answer = item.values[60].formattedValue;//المعلومات الإضافية 1 هي
var info2_Question = item.values[61].formattedValue;//المعلومات الإضافية 2
var info2_Answer = item.values[62].formattedValue;//المعلومات الإضافية 2 هي
var info3_Question = item.values[63].formattedValue;//المعلومات الإضافية 3
var info3_Answer = item.values[64].formattedValue;//المعلومات الإضافية 3 هي
var info4_Question = item.values[65].formattedValue;//المعلومات الإضافية 4
var info4_Answer = item.values[66].formattedValue;//المعلومات الإضافية 4 هي
var DidYouKnow_Question = item.values[67].formattedValue;//هل تعلم
var DidYouKnow_Answer = item.values[68].formattedValue;//معلومات هل تعلم
var UserAccountId = item.values[69].formattedValue;//معرف حساب المستخدم
var UserLoginWith = item.values[70].formattedValue;//تسجيل دخول بإستخدام
var UserAccountImg = item.values[71].formattedValue;//صورة الملف الشخصي للمستخدم
var UserName = item.values[72].formattedValue;//إسم المستخدم
var UserEmail = item.values[73].formattedValue;//البريد الإلكتروني
var Name_publishing = item.values[74].formattedValue;//اظهار معلومات الناشر
var PageTitle = item.values[75].formattedValue;//عنوان الصفحة
var PageLink = item.values[76].formattedValue;//رابط الصفحة
var SourceInfo_Question = item.values[77].formattedValue;//المراجع
var SourceInfo_Answer_Title = item.values[78].formattedValue;//عنوان المراجع
var SourceInfo_Answer_link = item.values[79].formattedValue;//رابط المراجع
var TheState = item.values[80].formattedValue;//الدولة
var CountryCode = item.values[81].formattedValue;//رمز الدولة
var IPAddress = item.values[82].formattedValue;//عنوان IP
var ScreenWidth = item.values[83].formattedValue;//عرض الشاشة
var ScreenHeight = item.values[84].formattedValue;//إرتفاع الشاشة
var MoreInformation = item.values[85].formattedValue;//معلومات إضافية
var dateID = item.values[86].formattedValue;//معرف تاريخ المنشور
var PostUrlInSite_Question = item.values[87].formattedValue;//رابط المنشور
var PostUrlInSite_Answer = item.values[88].formattedValue;//رابط المنشور هو
var PostIdInSite_Question = item.values[89].formattedValue;//معرف المنشور
var PostIdInSite_Answer = item.values[90].formattedValue;//معرف المنشور هو
var SummaryPage_Question = item.values[91].formattedValue;//وصف الموضوع
var SummaryPage_Answer = item.values[92].formattedValue;//وصف الموضوع هو
var ImgMaps_Question = item.values[93].formattedValue;//صورة خريطة التواجد
var ImgMaps_Answer = item.values[94].formattedValue;//الخارطة URL
var folderNameBasicSheet = item.values[95].formattedValue;//إسم المجلد
var folderIDBasicSheet = item.values[96].formattedValue;//معرف المجلد


	PostUrlInSite_Answer = PostUrlInSite_Answer.replace("http://","https://");

        UserStatus = parseInt(UserStatus); //حالة الحساب
        PopulationTrend_Num = parseInt(PopulationTrend_Num); //رقم إتجاه السكان الحالي
        RedList_Num = parseInt(RedList_Num); //رقم حالة القائمة الحمراء (IUCN)
        var cardURL = 'http://card.geoarabic.com/p/card.html?id=' + ResponseNumber;
        if (CommonName_Answer.length >= 30) {
            CommonName_Answer = CommonName_Answer.substring(0, 30) + '...';
        }
        if (ScientificName_Answer == "" || ScientificName_Answer == "NoData") {
            ScientificName_Answer = "";
        }
        if (CommonName_Answer_En == "" || CommonName_Answer_En == "NoData") {
            CommonName_Answer_En = "";
        }
        if (Img_Answer == "" || Img_Answer == "NoData") {
            Img_Answer = "https://lh3.googleusercontent.com/-nngQTpjLnLk/WwI4sFyHQfI/AAAAAAAACdM/CFZJhtiKCMgR6syKazo7tsM4_xVtpML7gCEwYBhgL/h120/GeoArabic.png";
        }
        Img_Answer = Img_Answer.toString().replace(/\/s200\/|\/s320\/|\/s0\/|\/s400\/|\/s100\/|\/w200-h133\/|\/s152\/|\/h120\/|\/s1600\//gi, '/w' + Img_W + '-h' + Img_H + '-p/');
        Img_Answer = Img_Answer.replace('=s120', '=w' + Img_W + '-h' + Img_H + '-p');
        if (Published === "0") {} else if (Published === "حالة النشر") {} else if (Published === "Published") {} else {

var getreplacename = CommonName_Answer.replace(/أ|ا|آ|إ/gi,"ا");
getreplacename = getreplacename.replace(/ى|ي/gi,"ي");
var getreplaceScientificName = ScientificName_Answer.toLowerCase();
var getreplaceEnName = CommonName_Answer_En.toLowerCase();

          
          
if(getreplacename.indexOf(valueSearchs) !== -1 || getreplaceScientificName.indexOf(valueSearchs) !== -1 || getreplaceEnName.indexOf(valueSearchs) !== -1 ){
cards += '<li><a class="dropdown-item" href="' + PostUrlInSite_Answer + '" title="' + CommonName_Answer_En + '"><img src="'+Img_Answer+'" class="rounded-circle" alt="'+CommonName_Answer+'" width="30" height="30"/> ' + CommonName_Answer + '</a></li>';
setTimeout(function(){ 
$('.SummarySearchspinner').css('display','none');
$('#SummarySearch').css('display','block');
},1000)
}
          

          
        }

    });      
    cards += '';
    
    document.getElementById('SummarySearch').innerHTML = cards;







        
    }).then(function(recostss) {
    var SummarySearch = $("#SummarySearch li").length;
    if(SummarySearch <= 0){
$('.SummarySearchspinner').css('display','none');
$('#SummarySearch').css('display','block');
    $("#SummarySearch").html("<li><a class='dropdown-item'><i class='fa-regular fa-face-frown-open'></i> لا يوجد نتائج</a></li>");
    }
    
    });





    this.timeoutID = undefined;
  },
  setup: function() {
    if (typeof this.timeoutID === 'number') {
      this.cancel();
    }
    this.timeoutID = setTimeout(function() {
      this.remind();
    }.bind(this), 2000);
  },
  cancel: function() {
    clearTimeout(this.timeoutID);
  }
};


















 const searchTimeout2 = {
  remind: function() {


var valueSearchs = $("#boxSearch2").val().toLowerCase();
valueSearchs = valueSearchs.replace(/أ|ا|آ|إ/gi,"ا");
valueSearchs = valueSearchs.replace(/ى|ي/gi,"ي");



var getcodedrive = "https://sheets.googleapis.com/v4/spreadsheets/15Va2cpK8HdVl9CgpAbL1g2aU94LUBVozbL5RRulAem4/?";
$.getJSON(getcodedrive, {
    key: "AIzaSyDpCuvAcL0ESYhI5X9amoy12NGpswwXdlQ",
    alt: "json",
    fields: "sheets(data.rowData.values.formattedValue)"
}).done(function(recosts) {
    var cards = '';
    var windowW = window.innerWidth;
    var windowH = window.innerHeight;
    $.each(recosts.sheets[0].data[0].rowData.reverse(), function(i, item) {
        var Img_W = 30;
        var Img_H = 30;
        var windowW = window.innerWidth;
        var windowH = window.innerHeight;
var Timestamp = item.values[0].formattedValue;//تاريخ النشر
var ResponseNumber = item.values[1].formattedValue;//ID
var Published = item.values[2].formattedValue;//حالة النشر
var UserStatus = item.values[3].formattedValue;//حالة الحساب
var CommonName_Question = item.values[4].formattedValue;//الإسم الشائع
var CommonName_Answer = item.values[5].formattedValue;//الإسم الشائع هو
var CommonName_Answer_En = item.values[6].formattedValue;//الإسم الشائع بالانجليزية هو
var ScientificName_Question = item.values[7].formattedValue;//الاسم العلمي
var ScientificName_Answer = item.values[8].formattedValue;//الاسم العلمي هو
var Type_Question = item.values[9].formattedValue;//النوع
var Type_Answer = item.values[10].formattedValue;//النوع هو
var Class_Question = item.values[11].formattedValue;//الطائفة
var Class_AnswerAR = item.values[12].formattedValue;//إسم الطائفة
var Class_AnswerEN = item.values[13].formattedValue;//الإسم العلمي للطائفة
var Order_Question = item.values[14].formattedValue;//الرتبة
var Order_Answer = item.values[15].formattedValue;//الرتبة هي
var Subfamily_Question = item.values[16].formattedValue;//الفصيلة
var Subfamily_Answer = item.values[17].formattedValue;//الفصيلة هي
var Diet_Question = item.values[18].formattedValue;//النظام الغذائي
var Diet_Answer = item.values[19].formattedValue;//النظام الغذائي هو
var Age_Question = item.values[20].formattedValue;//متوسط العمر
var Age_Answer = item.values[21].formattedValue;//متوسط العمر هو
var Size_Question = item.values[22].formattedValue;//الحجم
var Size_Answer = item.values[23].formattedValue;//الحجم هو
var Weight_Question = item.values[24].formattedValue;//الوزن
var Weight_Answer = item.values[25].formattedValue;//الوزن هو
var PopulationTrend_Question = item.values[26].formattedValue;//إتجاه السكان الحالي
var PopulationTrend_Answer = item.values[27].formattedValue;//إتجاه السكان الحالي هو
var PopulationTrend_Code = item.values[28].formattedValue;//رمز إتجاه السكان الحالي
var PopulationTrend_Num = item.values[29].formattedValue;//رقم إتجاه السكان الحالي
var RedList_Question = item.values[30].formattedValue;//حالة القائمة الحمراء (IUCN)
var RedList_Answer = item.values[31].formattedValue;//حالة القائمة الحمراء (IUCN) هي
var RedList_Num = item.values[32].formattedValue;//رقم حالة القائمة الحمراء (IUCN)
var Speed_Question = item.values[33].formattedValue;//السرعة
var Speed_Answer = item.values[34].formattedValue;//السرعة هي
var DurationPregnancy_Question = item.values[35].formattedValue;//مدة الحمل
var DurationPregnancy_Answer = item.values[36].formattedValue;//مدة الحمل هي
var NumBirths_Question = item.values[37].formattedValue;//عدد الصغار/البيض
var NumBirths_Answer = item.values[38].formattedValue;//عدد الصغار/البيض هو
var EcologicalHabitat_Question = item.values[39].formattedValue;//الموطن البيئي
var EcologicalHabitat_Answer = item.values[40].formattedValue;//الموطن البيئي هو
var Color_Question = item.values[41].formattedValue;//الألوان
var Color_Answer = item.values[42].formattedValue;//الألوان هي
var Enemy_Question = item.values[43].formattedValue;//الأعداء
var Enemy_Answer = item.values[44].formattedValue;//الأعداء هم
var FeedOn_Question = item.values[45].formattedValue;//الغذاء
var FeedOn_Answer = item.values[46].formattedValue;//الغذاء هو
var Img_Question = item.values[47].formattedValue;//صورة الحيوان
var Img_Answer = item.values[48].formattedValue;//عنوان صورة الحيوان
var ImgInDrive_Question = item.values[49].formattedValue;//الصورة في درايف
var ImgInDrive_Answer = item.values[50].formattedValue;//رابط الصور في درايف
var ImgCover_Question = item.values[51].formattedValue;//صورة الغلاف
var ImgCover_Answer = item.values[52].formattedValue;//عنوان صورة الغلاف
var MultipleImages_Question = item.values[53].formattedValue;//صور متعددة
var MultipleImages_Answer = item.values[54].formattedValue;//روابط الصور المتعددة
var JsonFileIdInDrive_Question = item.values[55].formattedValue;//ملف Json
var JsonFileIdInDrive_Answer = item.values[56].formattedValue;//معرف ملف Json
var ImgSizeComparison_Question = item.values[57].formattedValue;//صورة مقارنة الحجم
var ImgSizeComparison_Answer = item.values[58].formattedValue;//عنوان صورة مقارنة الحجم
var info1_Question = item.values[59].formattedValue;//المعلومات الإضافية 1
var info1_Answer = item.values[60].formattedValue;//المعلومات الإضافية 1 هي
var info2_Question = item.values[61].formattedValue;//المعلومات الإضافية 2
var info2_Answer = item.values[62].formattedValue;//المعلومات الإضافية 2 هي
var info3_Question = item.values[63].formattedValue;//المعلومات الإضافية 3
var info3_Answer = item.values[64].formattedValue;//المعلومات الإضافية 3 هي
var info4_Question = item.values[65].formattedValue;//المعلومات الإضافية 4
var info4_Answer = item.values[66].formattedValue;//المعلومات الإضافية 4 هي
var DidYouKnow_Question = item.values[67].formattedValue;//هل تعلم
var DidYouKnow_Answer = item.values[68].formattedValue;//معلومات هل تعلم
var UserAccountId = item.values[69].formattedValue;//معرف حساب المستخدم
var UserLoginWith = item.values[70].formattedValue;//تسجيل دخول بإستخدام
var UserAccountImg = item.values[71].formattedValue;//صورة الملف الشخصي للمستخدم
var UserName = item.values[72].formattedValue;//إسم المستخدم
var UserEmail = item.values[73].formattedValue;//البريد الإلكتروني
var Name_publishing = item.values[74].formattedValue;//اظهار معلومات الناشر
var PageTitle = item.values[75].formattedValue;//عنوان الصفحة
var PageLink = item.values[76].formattedValue;//رابط الصفحة
var SourceInfo_Question = item.values[77].formattedValue;//المراجع
var SourceInfo_Answer_Title = item.values[78].formattedValue;//عنوان المراجع
var SourceInfo_Answer_link = item.values[79].formattedValue;//رابط المراجع
var TheState = item.values[80].formattedValue;//الدولة
var CountryCode = item.values[81].formattedValue;//رمز الدولة
var IPAddress = item.values[82].formattedValue;//عنوان IP
var ScreenWidth = item.values[83].formattedValue;//عرض الشاشة
var ScreenHeight = item.values[84].formattedValue;//إرتفاع الشاشة
var MoreInformation = item.values[85].formattedValue;//معلومات إضافية
var dateID = item.values[86].formattedValue;//معرف تاريخ المنشور
var PostUrlInSite_Question = item.values[87].formattedValue;//رابط المنشور
var PostUrlInSite_Answer = item.values[88].formattedValue;//رابط المنشور هو
var PostIdInSite_Question = item.values[89].formattedValue;//معرف المنشور
var PostIdInSite_Answer = item.values[90].formattedValue;//معرف المنشور هو
var SummaryPage_Question = item.values[91].formattedValue;//وصف الموضوع
var SummaryPage_Answer = item.values[92].formattedValue;//وصف الموضوع هو
var ImgMaps_Question = item.values[93].formattedValue;//صورة خريطة التواجد
var ImgMaps_Answer = item.values[94].formattedValue;//الخارطة URL
var folderNameBasicSheet = item.values[95].formattedValue;//إسم المجلد
var folderIDBasicSheet = item.values[96].formattedValue;//معرف المجلد


	PostUrlInSite_Answer = PostUrlInSite_Answer.replace("http://","https://");

        UserStatus = parseInt(UserStatus); //حالة الحساب
        PopulationTrend_Num = parseInt(PopulationTrend_Num); //رقم إتجاه السكان الحالي
        RedList_Num = parseInt(RedList_Num); //رقم حالة القائمة الحمراء (IUCN)
        var cardURL = 'http://card.geoarabic.com/p/card.html?id=' + ResponseNumber;
        if (CommonName_Answer.length >= 30) {
            CommonName_Answer = CommonName_Answer.substring(0, 30) + '...';
        }
        if (ScientificName_Answer == "" || ScientificName_Answer == "NoData") {
            ScientificName_Answer = "";
        }
        if (CommonName_Answer_En == "" || CommonName_Answer_En == "NoData") {
            CommonName_Answer_En = "";
        }
        if (Img_Answer == "" || Img_Answer == "NoData") {
            Img_Answer = "https://lh3.googleusercontent.com/-nngQTpjLnLk/WwI4sFyHQfI/AAAAAAAACdM/CFZJhtiKCMgR6syKazo7tsM4_xVtpML7gCEwYBhgL/h120/GeoArabic.png";
        }
        Img_Answer = Img_Answer.toString().replace(/\/s200\/|\/s320\/|\/s0\/|\/s400\/|\/s100\/|\/w200-h133\/|\/s152\/|\/h120\/|\/s1600\//gi, '/w' + Img_W + '-h' + Img_H + '-p/');
        Img_Answer = Img_Answer.replace('=s120', '=w' + Img_W + '-h' + Img_H + '-p');
        if (Published === "0") {} else if (Published === "حالة النشر") {} else if (Published === "Published") {} else {

var getreplacename = CommonName_Answer.replace(/أ|ا|آ|إ/gi,"ا");
getreplacename = getreplacename.replace(/ى|ي/gi,"ي");
var getreplaceScientificName = ScientificName_Answer.toLowerCase();
var getreplaceEnName = CommonName_Answer_En.toLowerCase();

          
          
if(getreplacename.indexOf(valueSearchs) !== -1 || getreplaceScientificName.indexOf(valueSearchs) !== -1 || getreplaceEnName.indexOf(valueSearchs) !== -1 ){
cards += '<li><a class="dropdown-item" href="' + PostUrlInSite_Answer + '" title="' + CommonName_Answer_En + '"><img src="'+Img_Answer+'" class="rounded-circle" alt="'+CommonName_Answer+'" width="30" height="30"/> ' + CommonName_Answer + '</a></li>';
setTimeout(function(){ 
$('.SummarySearchspinner2').css('display','none');
$('#SummarySearch2').css('display','block');
},1000)
}
          

          
        }

    });      
    cards += '';
    
    document.getElementById('SummarySearch2').innerHTML = cards;







        
    }).then(function(recostss) {
    var SummarySearch = $("#SummarySearch2 li").length;
    if(SummarySearch <= 0){
$('.SummarySearchspinner2').css('display','none');
$('#SummarySearch2').css('display','block');
    $("#SummarySearch2").html("<li><a class='dropdown-item'><i class='fa-regular fa-face-frown-open'></i> لا يوجد نتائج</a></li>");
    }
    
    });





    this.timeoutID = undefined;
  },
  setup: function() {
    if (typeof this.timeoutID === 'number') {
      this.cancel();
    }
    this.timeoutID = setTimeout(function() {
      this.remind();
    }.bind(this), 2000);
  },
  cancel: function() {
    clearTimeout(this.timeoutID);
  }
};