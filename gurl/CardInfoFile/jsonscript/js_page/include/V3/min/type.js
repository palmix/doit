function recost_error(e){$(".setSheetHideSite").removeClass("setSheetHideSite"),$("#cardslistall").html('<div class="alert alert-danger d-flex align-items-center mx-4" role="alert"><i class="fa fa-info-circle my-2" aria-hidden="true"></i><div>حدث خطأ ما! يرجى إعادة المحاولة، رمز الخطأ: '+e.status+"</div></div>"),$(".loadingFullscreen").addClass("d-none"),$("#PageCardName").addClass("d-none")}function recost_done(e){var a="",t=checkCookie("get","AcSettings",null);void 0!==getSC&&""!=getSC&&(a=t.UserAccountId);var l='</h4><div class="row row-cols-1 row-cols-md-3 g-4 mt-0">',r=$.query.get("type");l='<div class="row row-cols-1 row-cols-md-3 g-4 mt-2">';var s=[l],u=0,d=(window.innerWidth,window.innerHeight,e.sheets[0].data[0].rowData.reverse()),o=d[1].values[1].formattedValue;"ID"==o&&(d=e.sheets[0].data[0].rowData.reverse());var m=e.sheets[0].data[0].rowData[1],v=e.sheets[0].data[0].rowData[1],i=m.values[4].formattedValue;"الإسم الشائع"!=i&&(m=e.sheets[0].data[0].rowData.reverse()[1],v=e.sheets[0].data[0].rowData.reverse()[1]);var i=v.values[4].formattedValue;v.values[6].formattedValue,v.values[7].formattedValue,v.values[8].formattedValue,v.values[10].formattedValue,v.values[11].formattedValue,v.values[12].formattedValue,v.values[13].formattedValue,v.values[14].formattedValue,v.values[15].formattedValue,v.values[19].formattedValue,v.values[21].formattedValue,v.values[22].formattedValue,v.values[16].formattedValue,v.values[25].formattedValue,v.values[26].formattedValue,v.values[27].formattedValue,v.values[28].formattedValue,v.values[29].formattedValue,v.values[30].formattedValue,v.values[31].formattedValue,v.values[32].formattedValue,v.values[43].formattedValue,v.values[52].formattedValue,v.values[61].formattedValue,v.values[62].formattedValue,v.values[63].formattedValue,v.values[64].formattedValue,v.values[67].formattedValue;$.each(d,function(e,t){function l(e){if(e.push('<div class="col mx-'+f+" px-"+v+" mt-"+i+'" style="width:'+m+'">'),e.push('<div class="card">'),void 0!=a&&""!=a){var t=P,l=a;t=t.toString(),l=l.toString();var r="'P"+t+"','U"+l+"','"+V+"'",s="P"+t;e.push('<button type="button" onclick="btn_favorite('+r+')" data-name="'+g+'" data-img="'+S+'" class="btn btn-sm btn-outline-warning btn_favorite '+s+' d-none"> <input type="checkbox" class="btn-check post_favorite" autocomplete="off" ><i class="far fa-star"></i><div class="spinner-grow text-warning spinner-grow-sm d-none" role="status"><span class="visually-hidden">إنتظر...</span></div></button>')}e.push('<a href="'+M+'" data-post-id="'+P+'" data-card-href="'+D+'" style="height:'+o+'px;" class="'+N+' dataimg rounded-top" onclick="'+k+'" data-id="'+V+'" title="'+w+'">'),e.push('<img src="'+A+'" width="'+d+'" height="'+o+'" loading="lazy" class="card-img-top lazyload" alt="'+g+'">'),e.push("</a>"),e.push('<div class="card-body text-center p-0 rounded-bottom">'),e.push('<a href="'+M+'" data-post-id="'+P+'" data-card-href="'+D+'" data-id="'+V+'" onclick="'+H+'" title="'+p+'" class="list-group-item list-group-item-action border-0 '+I+'">'+g+"</a>"),e.push("</div>"),e.push("</div>"),e.push("</div>")}var d=214,o=160,m="15rem;",v=2,i=2,f="auto",n=window.innerWidth;window.innerHeight;350>=n?(d=272,o=203,m="100%;",v=3,i=2):n>=351&&400>=n?(d=166,o=124,m="11rem;",v=1,i=2):n>=401&&457>=n?(d=182,o=136,m="12rem;",v=1,i=2):n>=458&&934>=n?(d=190,o=148,m="13rem;",v=1,i=2):n>=935&&(d=214,o=160,m="15rem;",v=2,i=3,f=0);var V=(t.values[0].formattedValue,t.values[1].formattedValue),c=t.values[2].formattedValue,h=t.values[3].formattedValue,g=t.values[4].formattedValue,p=t.values[5].formattedValue,w=t.values[6].formattedValue,b=t.values[7].formattedValue,C=(t.values[8].formattedValue,t.values[9].formattedValue,t.values[10].formattedValue,t.values[11].formattedValue,t.values[12].formattedValue,t.values[13].formattedValue,t.values[14].formattedValue,t.values[15].formattedValue,t.values[16].formattedValue,t.values[17].formattedValue,t.values[18].formattedValue),y=(t.values[19].formattedValue,t.values[20].formattedValue),x=(t.values[21].formattedValue,t.values[22].formattedValue,t.values[23].formattedValue,t.values[24].formattedValue,t.values[25].formattedValue,t.values[26].formattedValue,t.values[27].formattedValue,t.values[28].formattedValue,t.values[29].formattedValue),A=t.values[30].formattedValue,M=(t.values[31].formattedValue,t.values[32].formattedValue,t.values[33].formattedValue,t.values[34].formattedValue,t.values[35].formattedValue,t.values[36].formattedValue,t.values[37].formattedValue,t.values[38].formattedValue,t.values[39].formattedValue,t.values[40].formattedValue,t.values[41].formattedValue,t.values[42].formattedValue,t.values[43].formattedValue,t.values[44].formattedValue,t.values[45].formattedValue,t.values[46].formattedValue,t.values[47].formattedValue,t.values[48].formattedValue,t.values[49].formattedValue,t.values[50].formattedValue,t.values[51].formattedValue,t.values[52].formattedValue,t.values[53].formattedValue,t.values[54].formattedValue,t.values[55].formattedValue,t.values[56].formattedValue,t.values[57].formattedValue,t.values[58].formattedValue,t.values[59].formattedValue,t.values[60].formattedValue,t.values[61].formattedValue),P=t.values[62].formattedValue;t.values[63].formattedValue,t.values[64].formattedValue,t.values[65].formattedValue,t.values[66].formattedValue;h=parseInt(h),C=parseInt(C),y=parseInt(y);var D="http://card.geoarabic.com/p/card.html?id="+V;g.length>=30&&(g=g.substring(0,30)+"..."),""!=w&&"NoData"!=w||(w=""),""!=p&&"NoData"!=p||(p=""),""!=x&&"NoData"!=x||(x="https://lh3.googleusercontent.com/-nngQTpjLnLk/WwI4sFyHQfI/AAAAAAAACdM/CFZJhtiKCMgR6syKazo7tsM4_xVtpML7gCEwYBhgL/w214-h160-p/GeoArabic.png");var S=x;if(A=A.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,"/w"+d+"-h"+o+"-p/"),A=A.replace("=s120","=w"+d+"-h"+o+"-p"),x=x.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,"/w"+d+"-h"+o+"-p/"),x=x.replace("=s120","=w"+d+"-h"+o+"-p"),"NoData"!=A&&""!=A||(A=x),"0"===c);else if("حالة النشر"===c);else if("Published"===c);else{var N="showModal",k="return false;",I="showModal",H="return false;";0==Openframe?(N="",k="",I="",H=""):1==Openframe?(N="",k="",I="showModal",H="return false;"):2==Openframe&&(N="showModal",k="return false;",I="showModal",H="return false;"),"all"==r||""==r||1==r?(u+=1,l(s),$("#PageCardName").addClass("mt-4 bg-danger bg-gradient text-light mb-0 p-2 rounded-top text-center typeicone").html("<h3>قائمة الحيوانات</h3>")):b==r?(u+=1,u>=1&&(l(s),"ال"==r.substring(0,2)?$("#PageCardName").addClass("mt-4 bg-danger bg-gradient text-light mb-0 p-2 rounded-top text-center typeicone").html("<h3>"+r+"</h3>"):$("#PageCardName").addClass("mt-4 bg-danger bg-gradient text-light mb-0 p-2 rounded-top text-center typeicone").html("<h3>ال"+r+"</h3>"))):"حيوانات ما قبل التاريخ"==r&&r==b&&(u+=1,u>=1&&(l(s),$("#PageCardName").addClass("mt-4 bg-danger bg-gradient text-light mb-0 p-2 rounded-top text-center typeicone").html("<h3>"+r+"</h3>")))}}),0>=u&&$("#PageCardName").addClass("mt-4").html('<div class="alert alert-danger d-flex align-items-center" role="alert"><i class="fa fa-info-circle mx-2" aria-hidden="true"></i><div>يبدو أنك اتبعت رابط خاطئ او قد تم إزالة هذه الصفحة</div></div>'),s.push("</div>"),document.getElementById("cardslistall").innerHTML="",u>1&&(document.getElementById("cardslistall").innerHTML+=s.join("")),$(document).ready(function(){if($(".showModal").click(function(){var t=$(this).attr("data-id"),l=0;setPostCard(e,m,t,a,l)}),void 0!=a&&""!=a){var t=a,l="U"+t;setUserPostFavoriteAll(l)}}),onCompletePage()}