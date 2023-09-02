function send() {
    $.getJSON("https://freegeoip.app/json/", function(json) {
if(json.country_code !== "US"){
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSdjM4RIC4ZltLCZos4EHo6kq0SdeFOHtLVkMpEK8O4LEFs04w/formResponse",
            data: {
                "entry.2127026219": document.title,
                "entry.1919730613": window.location.href,
                "entry.1824039781": json.country_name,
                "entry.1860649528": json.country_code,
                "entry.477348915": json.ip,
                "entry.500751544": window.innerWidth,
                "entry.1520143025": window.innerHeight,
                "entry.49885740": navigator.appVersion,
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function() {},
                200: function() {}
            }
        });
}
    });
};
$("document").ready(function() {
    setTimeout(function() {
        send();
    }, 3000);
});