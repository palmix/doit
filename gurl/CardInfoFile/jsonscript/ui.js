function userInfo() {
$.getJSON("https://freegeoip.app/json/", function(json) {
$("#PageTitle").val(document.title);
$("#PageLink").val(window.location.href);
$("#TheState").val(json.country_name);
$("#CountryCode").val(json.country_code);
$("#IPAddress").val(json.ip);
$("#ScreenWidth").val(window.innerWidth);
$("#ScreenHeight").val(window.innerHeight);
$("#MoreInformation").val(navigator.appVersion);
    });
};