
var ModeMobileScreenIsNight = /ModeMobileScreenIsNight/.test(navigator.userAgent);
var GeoArabicAndroid = /GeoArabicAndroid/.test(navigator.userAgent);




$(document).ready(function(){

setmanager();
});

function setmanager(){
var getAcS = checkCookie('get','AcSettings',null);

if(getAcS !== undefined && getAcS != ''){
var AccountStatusC = getAcS.AccountStatus;
if(AccountStatusC == "3"){
$("#UserSidebar #userlistRigth").append("<li class='mb-1'><button aria-expanded='false' class='btn btn-toggle align-items-center rounded collapsed px-1' data-bs-target='#manager-collapse' data-bs-toggle='collapse'> إدارة </button><div class='collapse' id='manager-collapse'><ul class='list-unstyled fw-normal pb-1 small'><li class='nav-item'><a class='w-100 rounded btnRippleBlack nav-link text-white privacy' href='/p/create-post.html'><i class='fa-solid fa-circle-plus'></i> إنشاء مشاركة جديدة </a></li><li class='nav-item'><a class='w-100 rounded btnRippleBlack nav-link text-white privacy-policy' href='/p/editing-post.html'><i class='fa-solid fa-pen-to-square'></i> تعديل المشاركات </a></li><li class='nav-item'><a class='w-100 rounded btnRippleBlack nav-link text-white privacy-policy' href='/p/publish-and-unpublish.html'><i class='fa-solid fa-eye-slash'></i> نشر وإلغاء نشر المشاركات </a></li><li class='nav-item'><a class='w-100 rounded btnRippleBlack nav-link text-white privacy-policy' href='/p/users.html'><i class='fa-solid fa-user'></i> المستخدمين </a></li><li class='nav-item'><a class='w-100 rounded btnRippleBlack nav-link text-white privacy-policy' href='/p/manager.html'><i class='fa-solid fa-square-sliders'></i> المزيد من الإجرائات </a></li></ul></div></li>");
  
}


}

}


  var getPathName = window.location.pathname;
  var getSearch = window.location.search;
    $(window).on('hashchange', function (event) {

      if(location.hash == "#UserSidebar") {
		 $('#UserSidebar').offcanvas('show');
		  
		  
		  
		  
		if(getPathName == "/"){
			  $('#UserSidebar a.home').addClass('active');
		}else if(getPathName == "/p/user.html"){
			  $('#UserSidebar a.myprofile').addClass('active');
		}else if(getPathName == "/p/my-posts.html"){
			  $('#UserSidebar a.my-posts').addClass('active');
		}else if(getPathName == "/p/my-favorite.html"){
			  $('#UserSidebar a.my-favorite').addClass('active');
		}else if(getPathName == "/p/content-options.html"){
			  $('#UserSidebar a.my-content-options').addClass('active');
		}else if(getPathName == "/p/edit-profile.html"){
			  $('#UserSidebar a.edit-profile').addClass('active');
		}else if(getPathName == "/p/filter.html"){
			  $('#UserSidebar a.filter_Sidebar').addClass('active');
		}else if(getSearch.includes("%D8%A7%D9%84%D8%AB%D8%AF%D9%8A%D9%8A%D8%A7%D8%AA")){
			  $('#UserSidebar a.Mammals_Sidebar').addClass('active');
		}else if(getSearch.includes("%D8%B7%D9%8A%D9%88%D8%B1")){
			  $('#UserSidebar a.birds_Sidebar').addClass('active');
		}else if(getSearch.includes("%D8%A3%D8%B3%D9%85%D8%A7%D9%83")){
			  $('#UserSidebar a.fish_Sidebar').addClass('active');
		}else if(getSearch.includes("%D8%A7%D9%84%D8%B2%D9%88%D8%A7%D8%AD%D9%81")){
			  $('#UserSidebar a.reptiles_Sidebar').addClass('active');
		}else if(getSearch.includes("%D8%A7%D9%84%D8%AD%D8%B4%D8%B1%D8%A7%D8%AA")){
			  $('#UserSidebar a.insects_Sidebar').addClass('active');
		}else if(getSearch.includes("%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%A7%D8%A6%D9%8A%D8%A7%D8%AA")){
			  $('#UserSidebar a.Amphibians_Sidebar').addClass('active');
		}else if(getSearch.includes("%D8%A7%D9%84%D9%84%D8%A7%D9%81%D9%82%D8%A7%D8%B1%D9%8A%D8%A7%D8%AA")){
			  $('#UserSidebar a.invertebrates_Sidebar').addClass('active');
		}else if(getSearch.includes("%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA%20%D9%85%D8%A7%20%D9%82%D8%A8%D9%84%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE")){
			  $('#UserSidebar a.prehistoric_animals_Sidebar').addClass('active');
		}else if(getSearch.includes("type=all")){
			  $('#UserSidebar a.all_Sidebar').addClass('active');
		}
		  
		  
		 
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
        }else{
			$('#UserSidebar').offcanvas('hide');
        }
      
      
      
      
      
      
      
      
      
      
      
    }); 



$('#UserSidebar').on('hidden.bs.offcanvas', function () {
if(window.location.hash == "#UserSidebar") {

}
});

$('#UserSidebar').on('hide.bs.offcanvas', function () {
if(window.location.hash == "#UserSidebar") {
window.history.go(-1);

}
});

$('#UserSidebar').on('show.bs.offcanvas', function () {
		window.location.hash = "UserSidebar";
if(scrollY == 0){
  window.scrollTo(0, 1);
}
});




    function signout() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");


        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
name = name.replace(' ','');
//Cookies.remove(name)
checkCookie('remove',name,null);
		if(cookies.length == (i+1)){
		signoutdone();
		}
    }

}
function signoutdone(){
setnote("تم تسجيل الخروج بنجاح");
location.reload();
}


$("#sidebar").click(function(){
$('#UserSidebar').offcanvas('show');
});




var showif,ww;
$('.nav_draggable').udraggable({
      distance: 15,
    containment: 'parent',
    //axis:        'x',
    start: function (e, ui) {
      var pos = ui.position;
      showif = pos.left;
if(scrollY == 0){
  window.scrollTo(0, 1);
}
    },
    stop: function (e, ui) {

      var pos = ui.position;
      var w = $(window).width();
      ww = w -25;
      $('.nav_draggable').attr('style', 'inset: 0 auto auto '+ww+'px; position:absolute;');
      var showiftrue = showif - 50;
$('.navicons').attr('style','right:-11rem;opacity:0;');
      if(showiftrue > pos.left){
var UserSidebar = document.getElementById('UserSidebar')
var bsOffcanvas = new bootstrap.Offcanvas(UserSidebar)
bsOffcanvas.show();
      }
    },
    drag: function (e, ui) {
      var pos = ui.position;
      var w = $(window).width();
var sl = $(window).width() - 75;
var s2 = $(window).width() - 40;

      ww = w -25;
      var showiftrue1 = showif - 50;

if(showiftrue1 > pos.left){
$('.navicons i').attr('style','color:#20c997');
}else{
$('.navicons i').attr('style','color:#dc3545');
}
if(pos.left <= sl){
$('.navicons').attr('style','left:'+s2+'px;top:'+pos.top+'px;position: fixed!important;opacity:1;');
}else{
$('.navicons').attr('style','right:-11rem');
}
}
});

$(window).resize(function() {
$('.nav_draggable').attr('style','inset:0 0 auto auto;position:absolute;');
});


if (ModeMobileScreenIsNight){
$('body').addClass('bg-dark').removeClass('bg-light');
setnote(ModeMobileScreenIsNight)
}


$(document).ready(function(){
if (ModeMobileScreenIsNight){
$('body').addClass('bg-dark').removeClass('bg-light').attr('style','background-color: #161616!important;');
$('body.bg-dark .logo-svg-sidebar').attr('style','filter: brightness(9)');
$('body.bg-dark .logo-svg-sidebar #defultlogo').attr('style','filter:brightness(0);');
$('body.bg-dark #cardslistall .card a.list-group-item').attr('style','background-color:black !important;');
$('body.bg-dark #cardslistall .card').attr('style','border:1px solid rgb(76 76 76)!important;border-radius: 0.25rem!important;');
$('body.bg-dark #cardslistall h4.typeicone').removeClass('bg-gradient').removeClass('bg-danger').attr('style','background-color:#560008!important;');
$('body.bg-dark #cardslistall .card .rounded-bottom a').attr('style','background-color:#212529!important');
	
	}

});

function appScreenIsNight(){
if (ModeMobileScreenIsNight){
$('body').addClass('bg-dark').removeClass('bg-light').attr('style','background-color: #161616!important;');
$('body.bg-dark .logo-svg-sidebar').attr('style','filter: brightness(9)');
$('body.bg-dark .logo-svg-sidebar #defultlogo').attr('style','filter:brightness(0);');
$('body.bg-dark #cardslistall .card a.list-group-item').attr('style','background-color:black !important;');
$('body.bg-dark #cardslistall .card').attr('style','border:1px solid rgb(76 76 76)!important;border-radius: 0.25rem!important;');
$('body.bg-dark #cardslistall h4.typeicone').removeClass('bg-gradient').removeClass('bg-danger').attr('style','background-color:#560008!important;');
$('body.bg-dark #cardslistall .card .rounded-bottom a').attr('style','background-color:#212529!important');
}}


if(GeoArabicAndroid){
$('.privacy-policy').removeClass('d-none');
$('.privacy').addClass('d-none');
}


if(GeoArabicAndroid){
	
	
	
	function TouchToLeft(){

			if(window.location.hash != "#UserSidebar") {
				ScriptAppWeb.startonweb(100);
				$('#UserSidebar').offcanvas('show');
				}

	}
	
	function TouchToRight(){
		
		if(window.location.hash == "#UserSidebar") {
				ScriptAppWeb.startonweb(100);
			$('#UserSidebar').offcanvas('hide');
		}
		

	}

	
	function TouchToTop(){
			//$('#UserSidebar').offcanvas('show');
	}
	
	function TouchToBottom(){
			//$('#UserSidebar').offcanvas('hide');
	}
	
	
}


/**
//let noticeMonitorCookies = Cookies.get('noticeMonitor');
let noticeMonitorCookies = checkCookie('get','noticeMonitor',null);
if(noticeMonitorCookies != 1){
var getIDmonitor = $("#monitor").html();
$("#noticeMonitor").removeClass('d-none');
$("#monitor").addClass('rippleoverflow');
}
$("#monitor" ).click(function() {
$("#monitor").removeClass('rippleoverflow');
$("#noticeMonitor").addClass('d-none');Cookies.set('noticeMonitor',1,{expires:365});
});
**/




//start icon user 

$(".draggable").draggableTouch();
var posleft, postop;
$(".draggable").bind("dragstart", function(e, pos) {
   if (scrollY == 0) {
      window.scrollTo(0, 1);
   }
   $(".draggable").css('left', pos.left);
   $(".draggable").css('transition', '');
   posleft = pos.left;
   postop = pos.top;


}).bind("dragend", function(e, pos) {
   var h = $(window).height();
   var w = $(window).width();
   var w_ = (w - 73)
   var w_te2 = (w_ / 2);
   var lorr;
   var x = pos.left;
   var y = pos.top;
   var yt = (y + 50);
   var ht = (h - 50);
   if (w_te2 >= x) {}
   if (w_te2 >= x) {
      $('.draggable').attr('style', 'position: fixed; inset: ' + y + 'px auto auto -15px;transition:99ms');
      if (y <= 50) {
         $('.draggable').attr('style', 'position: fixed; inset: 50px auto auto -15px;transition:99ms');
      }
      if (y >= ht) {
         $('.draggable').attr('style', 'position: fixed; inset: ' + (ht - 50) + 'px auto auto -15px;transition:99ms');
      }
   } else {
      $('.draggable').attr('style', 'position: fixed; inset: ' + y + 'px auto auto ' + (w - 60) + 'px;transition:99ms');
      if (y <= 50) {
         $('.draggable').attr('style', 'position: fixed; inset: 50px auto auto ' + (w - 60) + 'px;transition:99ms');
      }
      if (y >= ht) {
         $('.draggable').attr('style', 'position: fixed; inset: ' + (ht - 50) + 'px auto auto ' + (w - 60) + 'px;transition:99ms');
      }
   }
var draggables = $('.draggable').attr('style');
var contents = {drag:draggables};
checkCookie('set','draggables',contents);




var show_top = false;
var show_left = false;

if(pos.top.toFixed() == postop.toFixed() || (pos.top.toFixed()+1) == postop.toFixed() || (pos.top.toFixed()-1) == postop.toFixed() || (pos.top.toFixed()+2) == postop.toFixed() || (pos.top.toFixed()-2) == postop.toFixed()){
var show_top = true;
}
if(pos.left.toFixed() == posleft.toFixed() || (pos.left.toFixed()+1) == posleft.toFixed() || (pos.left.toFixed()-1) == posleft.toFixed() || (pos.left.toFixed()+2) == posleft.toFixed() || (pos.left.toFixed()-2) == posleft.toFixed()){
var show_left = true;
}

   if (pos.top.toFixed() == postop.toFixed() && pos.left.toFixed() == posleft.toFixed()) {
      $('#UserSidebar').offcanvas('show');
   }
   if (show_top == true && show_left == true) {
      $('#UserSidebar').offcanvas('show');
   }


});
//end icon user 