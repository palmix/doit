function donesend(){
   $(".startsend").addClass('d-none');
   $(".endsend").removeClass('d-none');
  }
  
var GeoArabicAndroid = /GeoArabicAndroid/.test(navigator.userAgent);
  if(GeoArabicAndroid == true){
  $("#InApp").val("yes");
  }

  
function userInfo(token) {
  

  
  
var firstName = $("#firstName").val();
var lastName = $("#lastName").val();
var email = $("#email").val();
var Message = $("#Message").val();
function validateEmail(email) {
  var remail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return remail.test(email);
}
if(firstName == "" || lastName == "" || validateEmail(email) == false || Message == ""){

if(firstName == "" || firstName == " "){
$("#firstName").addClass('is-invalid');
}else{
$("#firstName").removeClass('is-invalid');
}
  
if(lastName == "" || lastName == " "){
$("#lastName").addClass('is-invalid');
}else{
$("#lastName").removeClass('is-invalid');
}
  
  
  

  
if (validateEmail(email) == false) {
$("#email").addClass('is-invalid');
}else{
$("#email").removeClass('is-invalid');
} 
  
if(Message == "" || Message == " "){
$("#Message").addClass('is-invalid');
}else{
$("#Message").removeClass('is-invalid');
}   
  
  
}else{
$("#firstName").removeClass('is-invalid')
$("#lastName").removeClass('is-invalid');
$("#email").removeClass('is-invalid');
$("#Message").removeClass('is-invalid');
$("#submit").attr('disabled','disabled');

  

var UserName = $("#firstName").val();
var lastName = $("#lastName").val();
var email = $("#email").val();
var Message = $("#Message").val();


$("#UserName").val(UserName+' '+lastName)
$("#UserEmail").val(email);
$("#TextMessage").val(Message);
  
  
$.getJSON("https://freegeoip.app/json/", function(json) {
$("#PageTitle").val(document.title);
$("#PageLink").val(window.location.href);
$("#TheState").val(json.country_name);
$("#CountryCode").val(json.country_code);
$("#IPAddress").val(json.ip);
$("#ScreenWidth").val(window.innerWidth);
$("#ScreenHeight").val(window.innerHeight);
$("#MoreInformation").val(navigator.appVersion);
$("#sendToSheetHide").click();
  console.log('تم الإرسال بنجاح');
  donesend();
    }).catch(function(error) {
$("#sendToSheetHide").click();
  console.log('تم الإرسال');
  donesend();
});
};
}