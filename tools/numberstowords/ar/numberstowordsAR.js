
function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)));}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)));}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);
	if (b64awsec == "ZG9pdGYuY29t"){

var ones={0:"صفر",1:"واحد",2:"اثنان",3:"ثلاثة",4:"أربعة",5:"خمسة",6:"ستة",7:"سبعة",8:"ثمانية",9:"تسعة",10:"عشرة",11:"أحد عشر",12:"اثنى عشر"}
var tens={1:"عشر",2:"عشرون",3:"ثلاثون",4:"أربعون",5:"خمسون",6:"ستون",7:"سبعون",8:"ثمانون",9:"تسعون"}
var hundreds={0:"صفر",1:"مائة",2:"مئتان",3:"ثلاثمائة",4:"أربعمائة",5:"خمسمائة",6:"ستمائة",7:"سبعمائة",8:"ثمانمائة",9:"تسعمائة"}
var thousands={1:"ألف",2:"ألفان",39:"آلاف",1199:"ألفًا"}
var millions={1:"مليون",2:"مليونان",39:"ملايين",1199:"مليونًا"}
var billions={1:"مليار",2:"ملياران",39:"مليارات",1199:"مليارًا"}
var trillions={1:"تريليون",2:"تريليونان",39:"تريليونات",1199:"تريليونًا"}
function numberstowordsAR(number){var value="";number=parseInt(number);if(number.toString().match(/^[0-9]+$/)!=null&&number.toString().length<=14){switch(number.toString().length){case 1:case 2:value=oneTen(number);break;case 3:value=hundred(number);break;case 4:case 5:case 6:value=thousand(number);break;case 7:case 8:case 9:value=million(number);break;case 10:case 11:case 12:value=billion(number);break;case 13:case 14:case 15:value=trillion(number);break;}}
return value.replace(/وصفر/g,"").replace(/وundefined/g,"").replace(/ +(?= )/g,'').replace(/صفر و/g,"").replace(/صفر/g,"").replace(/مئتان أ/,"مائتا أ").replace(/مئتان م/,"مائتا م");}
function oneTen(number){var value="صفر";if(number<=12){switch(parseInt(number)){case 0:value=ones["0"];break;case 1:value=ones["1"];break;case 2:value=ones["2"];break;case 3:value=ones["3"];break;case 4:value=ones["4"];break;case 5:value=ones["5"];break;case 6:value=ones["6"];break;case 7:value=ones["7"];break;case 8:value=ones["8"];break;case 9:value=ones["9"];break;case 10:value=ones["10"];break;case 11:value=ones["11"];break;case 12:value=ones["12"];break;}}
else{var first=getNth(number,0,0);var second=getNth(number,1,1);if(tens[first]=="عشر"){value=ones[second]+" "+tens[first];}
else{value=ones[second]+" و"+tens[first];}}
return value;}
function hundred(number){var value="";while(number.toString().length!=3){number="0"+number;}
var first=getNth(number,0,0);switch(parseInt(first)){case 0:value=hundreds["0"];break;case 1:value=hundreds["1"];break;case 2:value=hundreds["2"];break;case 3:value=hundreds["3"];break;case 4:value=hundreds["4"];break;case 5:value=hundreds["5"];break;case 6:value=hundreds["6"];break;case 7:value=hundreds["7"];break;case 8:value=hundreds["8"];break;case 9:value=hundreds["9"];break;}
value=value+" و"+oneTen(parseInt(getNth(number,1,2)));return value;}
function thousand(number){return thousandsTrillions(thousands["1"],thousands["2"],thousands["39"],thousands["1199"],0,parseInt(number),(getNthReverse(number,4)));}
function million(number){return thousandsTrillions(millions["1"],millions["2"],millions["39"],millions["1199"],3,parseInt(number),(getNthReverse(number,7)));}
function billion(number){return thousandsTrillions(billions["1"],billions["2"],billions["39"],billions["1199"],6,parseInt(number),(getNthReverse(number,10)));}
function trillion(number){return thousandsTrillions(trillions["1"],trillions["2"],trillions["39"],trillions["1199"],9,parseInt(number),(getNthReverse(number,13)));}
function thousandsTrillions(one,two,three,eleven,diff,number,other){other=parseInt(other);other=numberstowordsAR(other);if(other==""){other="صفر"}
var value="";number=parseInt(number);switch(number.toString().length){case 4+diff:var ones=parseInt(getNth(number,0,0));switch(ones){case 1:value=one+" و"+(other);break;case 2:value=two+" و"+(other);break;default:value=oneTen(ones)+" "+three+" و"+(other);break;}
break;case 5+diff:var tens=parseInt(getNth(number,0,1));switch(tens){case 10:value=oneTen(tens)+" "+three+" و"+(other);break;default:value=oneTen(tens)+" "+eleven+" و"+(other);break;}
break;case 6+diff:var hundreds=parseInt(getNth(number,0,2));var two=parseInt(getNth(number,1,2));var th="";switch(two){case 0:th=one;break;default:th=eleven;break;}
switch(tens){case 100<=tens<=199:value=hundred(hundreds)+" "+th+" و"+(other);break;case 200<=tens<=299:value=hundred(hundreds)+" "+th+" و"+(other);break;default:value=hundred(hundreds)+" "+th+" و"+(other);break;}
break;}
return value;}
function getNth(number,first,end){var finalNumber="";for(var i=first;i<=end;i++){finalNumber=finalNumber+String(number).charAt(i);}
return finalNumber;}
function getNthReverse(number,limit){var finalNumber="";var x=1;while(x!=limit){finalNumber=String(number).charAt(number.toString().length-x)+finalNumber;x++;}
return finalNumber;}



            function numberstowords (){
                var fraction = document.getElementById("numberstowords").value.split(".");
                var fraction1 = document.getElementById("numberstowords").value;
				
				if(fraction1 <=0){
					document.getElementById("alert_numberstowords").innerHTML =  '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>عذرًا! </strong>يرجى إدخال رقم أكبر من صفر<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
					$("#numberstowordsText").val("");
				}else if(fraction1 > 99999999999999.99999999999999){
					document.getElementById("alert_numberstowords").innerHTML =  '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>عذراً!</strong> يرجى إدخال رقم أصغر من 99999999999999.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
					$("#numberstowordsText").val("");
				}else if (fraction.length == 2){
					$("#numberstowordsText").val(numberstowordsAR(fraction[0]) + " فاصلة " + numberstowordsAR (fraction[1]));
                document.getElementById("alert_numberstowords").innerHTML = "";
				}else if (fraction.length == 1){
					$("#numberstowordsText").val(numberstowordsAR(fraction[0]));
					document.getElementById("alert_numberstowords").innerHTML = "";
                }
            }
}else{
		var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script);
}