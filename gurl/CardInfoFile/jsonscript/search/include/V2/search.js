function searchOnFocus() {
    var hasclass = $("#boxSearch").hasClass("jsontrue");
    if (!hasclass) {
        searchTimeout();
    }
}

function searchTimeout() {

    var sheetId = '1br4GjPkH5pb2L7zevvgndTAHopOUDwzdN0zxRZjc6FI';
    var keyGeoArabic = 'AIzaSyDpCuvAcL0ESYhI5X9amoy12NGpswwXdlQ';
  
$.getJSON("https://sheets.googleapis.com/v4/spreadsheets/"+sheetId+"/?", {
    key: keyGeoArabic,
    alt: "json",
    fields: "sheets(data.rowData.values.formattedValue)"
    }).catch(function(error) {
setSearchTimeout_Error(error);
    }).done(function(recosts) {
var item_Question = recosts.sheets[0].data[0].rowData[0];
var testnew = item_Question.values[4].formattedValue; 
if(testnew == "CommonName_Answer"){
setSearchTimeout(recosts);
}else{
setnote("حدث خطأ");
}
  
  
    });
  
  
  
 function setSearchTimeout_Error(error){
setnote("حدث خطأ");
console.log('Error',error);
 }
  
  
  
function setSearchTimeout(recosts) {

        $("#boxSearch").on("keyup", function() {
            $('.SummarySearchspinner').css('display', 'inline-block');
            $('#SummarySearch').css('display', 'none');
            $("#dropdownSummarySearch").dropdown('show');
            if ($(this).val() == "") {
                $("#dropdownSummarySearch").dropdown('hide');
            } else {
                searchnow(1)
            }
        });
        $("#boxSearch2").on("keyup", function() {
            $('.SummarySearchspinner2').css('display', 'inline-block');
            $('#SummarySearch2').css('display', 'none');
            $("#dropdownSummarySearch2").dropdown('show');
            if ($(this).val() == "") {
                $("#dropdownSummarySearch2").dropdown('hide');
            } else {
                searchnow(2)
            }
        });
  
  
        function searchnow(searchId) {
            var valueSearchs = $("#boxSearch");
            if (searchId == 1) {
                valueSearchs = $("#boxSearch").val().toLowerCase();
            } else if (searchId == 2) {
                valueSearchs = $("#boxSearch2").val().toLowerCase();
            }
            valueSearchs = valueSearchs.replace(/أ|ا|آ|إ/gi, "ا");
            valueSearchs = valueSearchs.replace(/ى|ي/gi, "ي");
            var cards = '';
            var windowW = window.innerWidth;
            var windowH = window.innerHeight;
          var maxnom = 10;
          var minnom= 0;
          
          
          
          
          
          
var item_Question = recosts.sheets[0].data[0].rowData[1];
  
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

          
          
$.each(recosts.sheets[0].data[0].rowData, function(i, item) {
                var Img_W = 30;
                var Img_H = 30;
                var windowW = window.innerWidth;
                var windowH = window.innerHeight;

              
              
              
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

              
              
              
              PostUrlInSite_Answer = PostUrlInSite_Answer.replace("http://", "https://");
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
                    var getreplacename = CommonName_Answer.replace(/أ|ا|آ|إ/gi, "ا");
                    getreplacename = getreplacename.replace(/ى|ي/gi, "ي");
                    
                    var getreplaceSubfamily = Class_AnswerAR.replace(/أ|ا|آ|إ/gi, "ا");
                    getreplaceSubfamily = getreplaceSubfamily.replace(/ى|ي/gi, "ي");
                    
                    var getreplaceScientificName = ScientificName_Answer.toLowerCase();
                    var getreplaceEnName = CommonName_Answer_En.toLowerCase();
                    
                    
                    
                    
                    if (getreplacename.indexOf(valueSearchs) !== -1 || getreplaceScientificName.indexOf(valueSearchs) !== -1 || getreplaceEnName.indexOf(valueSearchs) !== -1 || getreplaceSubfamily.indexOf(valueSearchs) !== -1) {
                        cards += '<hr class="m-0 p-0"><li><a class="dropdown-item py-2" href="' + PostUrlInSite_Answer + '" title="' + CommonName_Answer_En + '"><img src="' + Img_Answer + '" class="rounded-circle" alt="' + CommonName_Answer + '" width="30" height="30"/> ' + CommonName_Answer + '</a></li>';
                        setTimeout(function() {
                            if (searchId == 1) {
                                $('.SummarySearchspinner').css('display', 'none');
                                $('#SummarySearch').css('display', 'block');
                                $('#dropdownSummarySearch').dropdown('update');
                            } else if (searchId == 2) {
                                $('.SummarySearchspinner2').css('display', 'none');
                                $('#SummarySearch2').css('display', 'block');
                                $('#dropdownSummarySearch2').dropdown('update');
                            }
                        }, 1000);
minnom +=1;
if(minnom >= maxnom){
return false;
}    
                    }
                }
            });
            cards += '';
            var SummarySearch = $("#SummarySearch li").length;
            if (searchId == 1) {
                document.getElementById('SummarySearch').innerHTML = cards;
                SummarySearch = $("#SummarySearch li").length;
                if (SummarySearch <= 0) {
                    $('.SummarySearchspinner').css('display', 'none');
                    $('#SummarySearch').css('display', 'block');
                    $("#SummarySearch").html("<li><a class='dropdown-item'><i class='fa-regular fa-face-frown-open'></i> لا يوجد نتائج</a></li>");
                }
                $("#dropdownSummarySearch").dropdown("update");
            } else if (searchId == 2) {
                document.getElementById('SummarySearch2').innerHTML = cards;
                SummarySearch = $("#SummarySearch2 li").length;
                if (SummarySearch <= 0) {
                    $('.SummarySearchspinner2').css('display', 'none');
                    $('#SummarySearch2').css('display', 'block');
                    $("#SummarySearch2").html("<li><a class='dropdown-item'><i class='fa-regular fa-face-frown-open'></i> لا يوجد نتائج</a></li>");
                }
                $("#dropdownSummarySearch2").dropdown("update");
            }
        }
        $("#boxSearch").addClass("jsontrue");
  
  
  
}
  
  
  
  
  
  
  
    
};









$(document).ready(function() {
var collapsibleSearch = document.getElementById('collapseSearchPhone');
collapsibleSearch.addEventListener('shown.bs.collapse', function () {
  $("#boxSearch2").focus();
})
});