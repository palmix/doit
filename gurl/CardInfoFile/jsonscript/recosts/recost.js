function load_recost(){ 
    var tablesheet = 'MWJyNEdqUGtINXBiMkw3emV2dmduZFRBSG9wT1VEd3pkTjB6eFJaamM2Rkk=',
     geoark = 'QUl6YVN5RFh3RFRXMldudlVsTVc2U1Q3aFJGWWZ1dE5TN3RiNUU4',
     geturl = 'aHR0cHM6Ly9zaGVldHMuZ29vZ2xlYXBpcy5jb20vdjQvc3ByZWFkc2hlZXRzLw==',
     setfields = 'c2hlZXRzKGRhdGEucm93RGF0YS52YWx1ZXMuZm9ybWF0dGVkVmFsdWUp';
    tablesheet = decode(tablesheet),
    geoark = decode(geoark),
    geturl = decode(geturl),
    setfields = decode(setfields);
    jQuery.getJSON(geturl + tablesheet + "/?", {
        key: geoark,
        alt: "json",
        fields: setfields
    }).catch(function(error) {
        try {
            if (jQuery.isFunction(recost_error)) {
                recost_error(error)
            }
        } catch (e) {}
        try {
            if (jQuery.isFunction(recostSearch_error)) {
                setnote("حدث خطأ");
                console.log('Error', error);
            }
        } catch (e) {}
    }).done(function(recosts) {
        try {
            if (jQuery.isFunction(recost_done)) {
                recost_done(recosts)
            }
        } catch (e) {}
        try {
            if (jQuery.isFunction(recostSearch_done)) {
                recostSearch_done(recosts)
            }
        } catch (e) {}
    });
}




$(document).ready(function() {
function gethn() {
var url = location.host;
var hn = url.split(".").slice(-2).join(".");
return encode(hn)
}
if(gethn() == "ZG9pdGYuY29t" || gethn() == "Z2VvYXJhYmljLmNvbQ==")
load_recost()
});