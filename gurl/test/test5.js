  
function startUpFile(){
$("#showbtnpost").addClass("awsub");
$("#showbtnpost").attr("disabled","disabled");
$("#btnModifyform").attr("disabled","disabled");
$("#btnModifyClose").attr("disabled","disabled");
$("#PreviewCardIfo").css("display","none");

$("#SetSendSummary .SetSummary").html('جاري التحقق <div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .progress-bar").css("width","5%");
$("#SetSendSummary .progress").css("display","flex");
GetUserStatus();
GetAdminStatus()
}

  
  
function uploadImg(){
$("#SetSendSummary .uploadImg").html('رفع الصور <div class="spinner-grow spinner-grow-sm text-primary" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .ImageEncoding").html('ترميز الصور <div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .CreateAFile").html('إنشاء الملف <div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .SendAFile").html('إرسال الملف <div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .GetAFile").html('إنشاء رابط <div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .SetSummary").html('جاري رفع الصور <div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .progress-bar").css("width","10%");
userInfo();

}
  

function ImageEncoding(){
$("#SetSendSummary .uploadImg").html('رفع الصور <i class="fa fa-check text-success" aria-hidden="true"></i>');
$("#SetSendSummary .ImageEncoding").html('ترميز الصورة <div class="spinner-grow spinner-grow-sm text-primary" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .CreateAFile").html('إنشاء الملف <div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .SendAFile").html('إرسال الملف <div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .GetAFile").html('إنشاء رابط <div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .SetSummary").html('جاري ترميز الصورة <div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .progress-bar").css("width","30%");

  
  
  
setTimeout(function() {
var qImg_Answer = $("#Img_Answer").val();
qImg_Answer = qImg_Answer.substring(0, 4);
if (qImg_Answer == "data" || qImg_Answer == ""){
$(".progress-bar").removeClass("bg-primary");
$(".progress-bar").addClass("bg-danger");
}
},10000);

  
  
  
setTimeout(function() {
var qImg_Answer = $("#Img_Answer").val();
var getImg_Answer = $("#ImgInDrive_Answer").val();
getImg_Answer = getImg_Answer.replace("https://drive.google.com/file/d/","");
qImg_Answer = qImg_Answer.substring(0, 4);
if (qImg_Answer == "data" || qImg_Answer == ""){
$(".progress-bar").removeClass("bg-danger");
$(".progress-bar").addClass("bg-primary");
$("#g1").val("https://lh4.googleusercontent.com/u/0/d/"+getImg_Answer+"=s120");
$("#Img_Answer").val("https://lh4.googleusercontent.com/u/0/d/"+getImg_Answer+"=s120");
UploadfileJsonToDrive();
}
},12000);
}

function CreateAFile(){
yalla();
$("#SetSendSummary .uploadImg").html('رفع الصور <i class="fa fa-check text-success" aria-hidden="true"></i>');
$("#SetSendSummary .ImageEncoding").html('ترميز الصور <i class="fa fa-check text-success" aria-hidden="true"></i>');
$("#SetSendSummary .CreateAFile").html('إنشاء الملف <div class="spinner-grow spinner-grow-sm text-primary" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .SendAFile").html('إرسال الملف <div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .GetAFile").html('إنشاء رابط <div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .SetSummary").html('جاري إنشاء ملف <div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .progress-bar").css("width","50%");
}

function SendAFile(){
$("#sendToSheetHide").click();
$("#SetSendSummary .uploadImg").html('رفع الصور <i class="fa fa-check text-success" aria-hidden="true"></i>');
$("#SetSendSummary .ImageEncoding").html('ترميز الصور <i class="fa fa-check text-success" aria-hidden="true"></i>');
$("#SetSendSummary .CreateAFile").html('إنشاء الملف <i class="fa fa-check text-success" aria-hidden="true"></i>');
$("#SetSendSummary .SendAFile").html('إرسال الملف <div class="spinner-grow spinner-grow-sm text-primary" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .GetAFile").html('إنشاء رابط <div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .SetSummary").html('جاري إرسال الملف <div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .progress-bar").css("width","80%");
}


  
function GetAFile(){
GetNumRow();
$("#SetSendSummary .uploadImg").html('رفع الصور <i class="fa fa-check text-success" aria-hidden="true"></i>');
$("#SetSendSummary .ImageEncoding").html('ترميز الصور <i class="fa fa-check text-success" aria-hidden="true"></i>');
$("#SetSendSummary .CreateAFile").html('إنشاء الملف <i class="fa fa-check text-success" aria-hidden="true"></i>');
$("#SetSendSummary .SendAFile").html('إرسال الملف <i class="fa fa-check text-success" aria-hidden="true"></i>');
$("#SetSendSummary .GetAFile").html('إنشاء رابط <div class="spinner-grow spinner-grow-sm text-primary" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .SetSummary").html('جاري إنشاء رابط <div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .progress-bar").css("width","100%");
}

function GetNumRow(){
$.getJSON("https://sheets.googleapis.com/v4/spreadsheets/15Va2cpK8HdVl9CgpAbL1g2aU94LUBVozbL5RRulAem4?", {
    key: "AIzaSyDpCuvAcL0ESYhI5X9amoy12NGpswwXdlQ",
    fields: "sheets(properties.gridProperties.rowCount)"
}).done(function(recosts) {
    var id = recosts.sheets[0].properties.gridProperties.rowCount;
 		id = id - 3;
$("#SetSendSummary .GetAFile").html('إنشاء رابط <i class="fa fa-check text-success" aria-hidden="true"></i> <a href="https://card.geoarabic.com/p/card.html?id=ID1000000'+id+'" target="_blank"><i class="fa fa-external-link fa-flip-horizontal" style="font-size:0.8rem" aria-hidden="true"></i></a>');
$("#SetSendSummary .SetSummary").html('تم إرسال الملف بنجاح <i class="fa fa-check text-success" aria-hidden="true"></i><br/><br/> نشكرك على المساهمة في جمع ونشر المعلومات <br/> سيتم مراجعة النموذج الذي أدخلته ونشره على موقعنا قريبًا<br/>ومع ذلك يمكنك مشاهدة ومشاركة بطاقتك في الرابط التالي:<br/><a href="https://card.geoarabic.com/p/card.html?id=ID1000000'+id+'" target="_blank">https://card.geoarabic.com/p/card.html?id=ID1000000'+id+'</a><br/>');
SetAFile();
});
}  
  
function SetAFile(){
		var els = $('#SendSettings');
		els.addClass('btn-success');
		els.removeClass('btn-primary');
		$('#viewsender').html('مشاهدة البطاقة المرسلة');
		$("#sendToSheet .spinner-border").css("display","none");
		$("#sendToSheet .fa-paper-plane").css("display","inline-block");
		$("#CreateData").css("display","none");
  
$("#SetSendSummary .uploadImg").html('رفع الصور <i class="fa fa-check text-success" aria-hidden="true"></i>');
$("#SetSendSummary .ImageEncoding").html('ترميز الصور <i class="fa fa-check text-success" aria-hidden="true"></i>');
$("#SetSendSummary .CreateAFile").html('إنشاء الملف <i class="fa fa-check text-success" aria-hidden="true"></i>');
$("#SetSendSummary .SendAFile").html('إرسال الملف <i class="fa fa-check text-success" aria-hidden="true"></i>');
$('form.row.g-3').trigger("reset");
$("#SetSendSummary .progress").css("display","none");
$("#SetSendSummary .progress-bar").css("width","0%");

		$(".btnNewform").css("display","inline-block");
		$("#btnModifyClose").removeAttr("disabled");
		$("#thankyou_message").css("display","block");
		$("#SendSettings").attr("onclick","javascript:SendOut()");
  var SetSendSummary = $("#SetSendSummary").html();
		$(".SummarySendit").html(SetSendSummary);
  
var ShowPreviewCardIfos = document.getElementById('ShowPreviewCardIfo')
ShowPreviewCardIfos.addEventListener('hidden.bs.modal', function (event) {
$("#SetSendSummary").css("display","none");
});
}