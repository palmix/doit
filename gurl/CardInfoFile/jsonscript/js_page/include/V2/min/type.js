function setType_Error(a){$(".setSheetHideSite").removeClass("setSheetHideSite"),$("#cardslistall").html('<div class="alert alert-danger d-flex align-items-center mx-4" role="alert"><i class="fa fa-info-circle my-2" aria-hidden="true"></i><div>حدث خطأ ما! يرجى إعادة المحاولة، رمز الخطأ: '+a.status+"</div></div>"),$(".loadingFullscreen").addClass("d-none"),$("#PageCardName").addClass("d-none")}function setType(a){var e=Cookies.get("UserAccountId");void 0!=e&&""!=e&&(e=decode(e));var t='</h4><div class="row row-cols-1 row-cols-md-3 g-4 mt-0">',s=$.query.get("type"),t='<div class="row row-cols-1 row-cols-md-3 g-4 mt-2">',l=[t],r=0,o=(window.innerWidth,window.innerHeight,a.sheets[0].data[0].rowData[1]),d=o.values[4].formattedValue,u=o.values[6].formattedValue,n=o.values[7].formattedValue,i=o.values[8].formattedValue,f=o.values[10].formattedValue,c=o.values[11].formattedValue,m=o.values[12].formattedValue,p=o.values[13].formattedValue,v=o.values[14].formattedValue,h=o.values[15].formattedValue,g=(o.values[19].formattedValue,o.values[21].formattedValue),V=o.values[22].formattedValue,w=o.values[16].formattedValue,b=o.values[25].formattedValue,y=o.values[26].formattedValue,I=o.values[27].formattedValue,D=o.values[28].formattedValue,N=(o.values[29].formattedValue,o.values[30].formattedValue,o.values[31].formattedValue,o.values[32].formattedValue,o.values[43].formattedValue,o.values[52].formattedValue,o.values[61].formattedValue,o.values[62].formattedValue,o.values[63].formattedValue,o.values[64].formattedValue);o.values[67].formattedValue;$.each(a.sheets[0].data[0].rowData.reverse(),function(a,t){function o(a){if(a.push('<div class="col mx-'+c+" px-"+i+" mt-"+f+'" style="width:'+n+'">'),a.push('<div class="card">'),void 0!=e&&""!=e){var t=k,s=e;t=t.toString(),s=s.toString();var l="'P"+t+"','U"+s+"'",r="P"+t;a.push('<button type="button" onclick="btn_favorite('+l+')" data-name="'+g+'" data-img="'+x+'" class="btn btn-sm btn-outline-warning btn_favorite '+r+' d-none"> <input type="checkbox" class="btn-check post_favorite" autocomplete="off" ><i class="far fa-star"></i><div class="spinner-grow text-warning spinner-grow-sm d-none" role="status"><span class="visually-hidden">إنتظر...</span></div></button>')}a.push('<a href="'+A+'" data-post-id="'+k+'" data-card-href="'+C+'" style="height:'+u+'px;" class="'+S+' dataimg rounded-top" onclick="'+P+'" data-id="'+p+'" title="'+w+'">'),a.push('<img src="'+N+'" width="'+d+'" height="'+u+'" loading="lazy" class="card-img-top lazyload" alt="'+g+'">'),a.push("</a>"),a.push('<div class="card-body text-center p-0 rounded-bottom">'),a.push('<a href="'+A+'" data-post-id="'+k+'" data-card-href="'+C+'" data-id="'+p+'" onclick="'+M+'" title="'+V+'" class="list-group-item list-group-item-action border-0 '+q+'">'+g+"</a>"),a.push("</div>"),a.push("</div>"),a.push("</div>")}var d=214,u=160,n="15rem;",i=2,f=2,c="auto",m=window.innerWidth;window.innerHeight;350>=m?(d=272,u=203,n="100%;",i=3,f=2):m>=351&&400>=m?(d=166,u=124,n="11rem;",i=1,f=2):m>=401&&457>=m?(d=182,u=136,n="12rem;",i=1,f=2):m>=458&&934>=m?(d=190,u=148,n="13rem;",i=1,f=2):m>=935&&(d=214,u=160,n="15rem;",i=2,f=3,c=0);var p=(t.values[0].formattedValue,t.values[1].formattedValue),v=t.values[2].formattedValue,h=t.values[3].formattedValue,g=t.values[4].formattedValue,V=t.values[5].formattedValue,w=t.values[6].formattedValue,b=t.values[7].formattedValue,y=(t.values[8].formattedValue,t.values[9].formattedValue,t.values[10].formattedValue,t.values[11].formattedValue,t.values[12].formattedValue,t.values[13].formattedValue,t.values[14].formattedValue,t.values[15].formattedValue,t.values[16].formattedValue,t.values[17].formattedValue,t.values[18].formattedValue),I=(t.values[19].formattedValue,t.values[20].formattedValue),D=(t.values[21].formattedValue,t.values[22].formattedValue,t.values[23].formattedValue,t.values[24].formattedValue,t.values[25].formattedValue,t.values[26].formattedValue,t.values[27].formattedValue,t.values[28].formattedValue,t.values[29].formattedValue),N=t.values[30].formattedValue,A=(t.values[31].formattedValue,t.values[32].formattedValue,t.values[33].formattedValue,t.values[34].formattedValue,t.values[35].formattedValue,t.values[36].formattedValue,t.values[37].formattedValue,t.values[38].formattedValue,t.values[39].formattedValue,t.values[40].formattedValue,t.values[41].formattedValue,t.values[42].formattedValue,t.values[43].formattedValue,t.values[44].formattedValue,t.values[45].formattedValue,t.values[46].formattedValue,t.values[47].formattedValue,t.values[48].formattedValue,t.values[49].formattedValue,t.values[50].formattedValue,t.values[51].formattedValue,t.values[52].formattedValue,t.values[53].formattedValue,t.values[54].formattedValue,t.values[55].formattedValue,t.values[56].formattedValue,t.values[57].formattedValue,t.values[58].formattedValue,t.values[59].formattedValue,t.values[60].formattedValue,t.values[61].formattedValue),k=t.values[62].formattedValue;t.values[63].formattedValue,t.values[64].formattedValue,t.values[65].formattedValue,t.values[66].formattedValue,t.values[67].formattedValue;h=parseInt(h),y=parseInt(y),I=parseInt(I);var C="http://card.geoarabic.com/p/card.html?id="+p;g.length>=30&&(g=g.substring(0,30)+"..."),""!=w&&"NoData"!=w||(w=""),""!=V&&"NoData"!=V||(V=""),""!=D&&"NoData"!=D||(D="https://lh3.googleusercontent.com/-nngQTpjLnLk/WwI4sFyHQfI/AAAAAAAACdM/CFZJhtiKCMgR6syKazo7tsM4_xVtpML7gCEwYBhgL/w214-h160-p/GeoArabic.png");var x=D;if(N=N.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,"/w"+d+"-h"+u+"-p/"),N=N.replace("=s120","=w"+d+"-h"+u+"-p"),D=D.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,"/w"+d+"-h"+u+"-p/"),D=D.replace("=s120","=w"+d+"-h"+u+"-p"),"NoData"!=N&&""!=N||(N=D),"0"===v);else if("حالة النشر"===v);else if("Published"===v);else{var S="showModal",P="return false;",q="showModal",M="return false;";0==Openframe?(S="",P="",q="",M=""):1==Openframe?(S="",P="",q="showModal",M="return false;"):2==Openframe&&(S="showModal",P="return false;",q="showModal",M="return false;"),"all"==s||""==s||1==s?(r+=1,o(l),$("#PageCardName").addClass("mt-4 bg-danger bg-gradient text-light mb-0 p-2 rounded-top text-center typeicone").html("<h3>قائمة الحيوانات</h3>")):b==s?(r+=1,r>=1&&(o(l),"ال"==s.substring(0,2)?$("#PageCardName").addClass("mt-4 bg-danger bg-gradient text-light mb-0 p-2 rounded-top text-center typeicone").html("<h3>"+s+"</h3>"):$("#PageCardName").addClass("mt-4 bg-danger bg-gradient text-light mb-0 p-2 rounded-top text-center typeicone").html("<h3>ال"+s+"</h3>"))):"حيوانات ما قبل التاريخ"==s&&s==b&&(r+=1,r>=1&&(o(l),$("#PageCardName").addClass("mt-4 bg-danger bg-gradient text-light mb-0 p-2 rounded-top text-center typeicone").html("<h3>"+s+"</h3>")))}}),0>=r&&$("#PageCardName").addClass("mt-4").html('<div class="alert alert-danger d-flex align-items-center" role="alert"><i class="fa fa-info-circle mx-2" aria-hidden="true"></i><div>يبدو أنك اتبعت رابط خاطئ او قد تم إزالة هذه الصفحة</div></div>'),l.push("</div>"),document.getElementById("cardslistall").innerHTML="",r>1&&(document.getElementById("cardslistall").innerHTML+=l.join("")),$(document).ready(function(){if($(".showModal").click(function(){setSizeModal(),$(".spinnercard").css("display","block"),$("#cardinfo").css("display","none"),$("#showingCard").html(""),$("#showingCardModal").modal("show");var t=$(this).attr("data-id"),s=t.replace("ID1000000",""),l=parseInt(s),s=l+2;""!=getBackgroundCard&&$("body.bg-light").attr("style","background-color:#"+getBackgroundCard+"!important");var r=a.sheets[0].data[0].rowData.reverse()[s],o=r.values[1].formattedValue;t!=o&&(r=a.sheets[0].data[0].rowData.reverse()[s]);var A=r.values[0].formattedValue,k=(r.values[1].formattedValue,r.values[2].formattedValue),C=r.values[3].formattedValue,x=r.values[4].formattedValue,S=r.values[5].formattedValue,P=r.values[6].formattedValue,q=r.values[7].formattedValue,M=r.values[8].formattedValue,z=r.values[9].formattedValue,_=r.values[10].formattedValue,B=r.values[11].formattedValue,L=r.values[12].formattedValue,U=r.values[13].formattedValue,F=r.values[14].formattedValue,G=r.values[15].formattedValue,H=r.values[16].formattedValue,E=(r.values[17].formattedValue,r.values[18].formattedValue),T=(r.values[19].formattedValue,r.values[20].formattedValue),O=r.values[21].formattedValue,X=r.values[22].formattedValue,J=r.values[23].formattedValue,Q=r.values[24].formattedValue,R=r.values[25].formattedValue,Y=r.values[26].formattedValue,j=r.values[27].formattedValue,W=r.values[28].formattedValue,K=r.values[29].formattedValue,Z=(r.values[30].formattedValue,r.values[31].formattedValue,r.values[32].formattedValue,r.values[33].formattedValue),aa=r.values[34].formattedValue,ea=r.values[35].formattedValue,ta=r.values[36].formattedValue,sa=r.values[37].formattedValue,la=r.values[38].formattedValue,ra=r.values[39].formattedValue,oa=r.values[40].formattedValue,da=r.values[41].formattedValue,ua=r.values[42].formattedValue,na=r.values[43].formattedValue,ia=r.values[44].formattedValue,fa=(r.values[45].formattedValue,r.values[46].formattedValue),ca=r.values[47].formattedValue,ma=(r.values[48].formattedValue,r.values[49].formattedValue),pa=(r.values[50].formattedValue,r.values[51].formattedValue,r.values[52].formattedValue),va=r.values[53].formattedValue,ha=(r.values[54].formattedValue,r.values[55].formattedValue,r.values[56].formattedValue,r.values[57].formattedValue,r.values[58].formattedValue,r.values[59].formattedValue,r.values[60].formattedValue,r.values[61].formattedValue),ga=r.values[62].formattedValue,Va=r.values[63].formattedValue,wa=r.values[64].formattedValue,ba=(r.values[65].formattedValue,r.values[66].formattedValue,r.values[67].formattedValue),ya=t,Ia=ha.toString();Ia=Ia.replace("http://","https://");var Da=x.toString(),Na=Va.toString(),Aa=K;""!=Ia&&"NoData"!=Ia||(Ia="https://card.geoarabic.com"),""!=Da&&"NoData"!=Da||(Da="جيو عربي"),""!=Na&&"NoData"!=Na||(Na="بطاقة معلومات الحيوانات"),$("#IDURL").val(Ia),$("#IDTitle").val(Da),$("#IDDescription").val(Na),$("#linkcardb").val(ya),k=parseInt(k),C=parseInt(C),E=parseInt(E),T=parseInt(T),K=K.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,"/w136-h136-p/"),K=K.replace(/=s200|=s320|=s160|=h160|=h120|=s120|=s1600/gi,"=w136-h136-p"),aa=aa.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,"/s162/"),aa=aa.replace("=s120","=s162"),wa=wa.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,"/s162/"),wa=wa.replace(/=s200|=s320|=s160|=h160|=h120|=s120|=s1600/gi,"=s162");var ka;ka=1==E?'<i class="fas fa-arrow-left text-body mx-1"></i>':0==E?'<i class="fas fa-arrow-down text-danger mx-1"></i>':2==E?'<i class="fas fa-arrow-up text-success mx-1"></i>':"";var Ca,xa,Sa,Pa;if(Pa="NoData"!=S?" ("+S+")":"",Ca='data-description="',xa='"',Sa=": ",0==k)var $a=['<div class="alert alert-secondary" role="alert"> هذه البطاقة غير متوفرة! </div>'];else{var qa=Ca+Va+xa;"NoData"==Va&&(qa="");var $a=["<span "+qa+' class="incardbackgroundimage"><span class="cardbackgroundimage" style="background-image: url(&quot;'+K+'&quot;);"></span></span>'];if($a.push('<div class="TableDiv">'),$a.push('<table class="FastFactsTable" style="overflow-x:auto"><tbody>'),"NoData"!=x&&"undefined"!=typeof x&&""!=x&&($("#showingCard").html(x),$("title").html(x+" - جيو عربي"),$a.push("<tr "+Ca+d+Sa+x+Pa+xa+'><td class="cardinfoname">'+d+'</td><td class="answercardinfo">'+x+"</td></tr>")),"NoData"!=P&&"undefined"!=typeof P&&""!=P&&$a.push("<tr "+Ca+u+Sa+P+xa+'><td class="cardinfoname">'+u+'</td><td class="answercardinfo">'+P+"</td></tr>"),"NoData"!=q&&"undefined"!=typeof q&&""!=q&&q.toString()!=M.toString()&&$a.push("<tr "+Ca+n+Sa+q+xa+'><td class="cardinfoname">'+n+'</td><td class="answercardinfo">'+q+"</td></tr>"),"None"!=z&&"NoData"!=M&&"undefined"!=typeof M&&""!=M&&$a.push("<tr "+Ca+i+Sa+M+xa+'><td class="cardinfoname">'+i+'</td><td class="answercardinfo">'+M+"</td></tr>"),"NoData"!=_&&"undefined"!=typeof _&&""!=_&&$a.push("<tr "+Ca+f+Sa+_+xa+'><td class="cardinfoname">'+f+'</td><td class="answercardinfo">'+_+"</td></tr>"),"NoData"!=B&&"undefined"!=typeof B&&""!=B&&$a.push("<tr "+Ca+c+Sa+B+xa+'><td class="cardinfoname">'+c+'</td><td class="answercardinfo">'+B+"</td></tr>"),"NoData"!=G&&"undefined"!=typeof G&&""!=G&&$a.push("<tr "+Ca+h+Sa+G+xa+'><td class="cardinfoname">'+h+'</td><td class="answercardinfo">'+G+"</td></tr>"),"NoData"!=F&&"undefined"!=typeof F&&""!=F&&$a.push("<tr "+Ca+v+Sa+F+xa+'><td class="cardinfoname">'+v+'</td><td class="answercardinfo">'+F+"</td></tr>"),"NoData"!=U&&"undefined"!=typeof U&&""!=U&&$a.push("<tr "+Ca+p+Sa+U+xa+'><td class="cardinfoname">'+p+'</td><td class="answercardinfo">'+U+"</td></tr>"),"NoData"!=R&&"undefined"!=typeof R&&""!=R&&$a.push("<tr "+Ca+b+Sa+R+xa+'><td class="cardinfoname">'+b+'</td><td class="answercardinfo">'+R+"</td></tr>"),"NoData"!=L&&"undefined"!=typeof L&&""!=L&&$a.push("<tr "+Ca+m+Sa+L+xa+'><td class="cardinfoname">'+m+'</td><td class="answercardinfo">'+L+"</td></tr>"),"NoData"!=W&&"undefined"!=typeof W&&""!=W&&$a.push("<tr "+Ca+D+Sa+W+xa+'><td class="cardinfoname">'+D+'</td><td class="answercardinfo">'+W+"</td></tr>"),"NoData"!=j&&"undefined"!=typeof j&&""!=j&&$a.push("<tr "+Ca+I+Sa+j+xa+'><td class="cardinfoname">'+I+'</td><td class="answercardinfo">'+j+"</td></tr>"),"NoData"!=O&&"undefined"!=typeof O&&""!=O&&$a.push("<tr "+Ca+g+Sa+O+xa+'><td class="cardinfoname">'+g+'</td><td class="answercardinfo">'+O+"</td></tr>"),"NoData"!=X&&"undefined"!=typeof X&&""!=X&&$a.push("<tr "+Ca+V+Sa+X+xa+'><td class="cardinfoname">'+V+'</td><td class="answercardinfo">'+X+"</td></tr>"),"NoData"!=Q&&"undefined"!=typeof Q&&""!=Q&&$a.push("<tr "+Ca+J+Sa+Q+xa+'><td class="cardinfoname">'+J+'</td><td class="answercardinfo">'+Q+"</td></tr>"),"NoData"!=Y&&"undefined"!=typeof Y&&""!=Y&&$a.push("<tr "+Ca+y+Sa+Y+xa+'><td class="cardinfoname">'+y+'</td><td class="answercardinfo">'+Y+"</td></tr>"),"NoData"!=ta&&"undefined"!=typeof ta&&""!=ta&&$a.push("<tr "+Ca+ea+Sa+ta+xa+'><td class="cardinfoname">'+ea+'</td><td class="answercardinfo">'+ta+"</td></tr>"),"NoData"!=la&&"undefined"!=typeof la&&""!=la&&$a.push("<tr "+Ca+sa+Sa+la+xa+'><td class="cardinfoname">'+sa+'</td><td class="answercardinfo">'+la+"</td></tr>"),"NoData"!=oa&&"undefined"!=typeof oa&&""!=oa&&$a.push("<tr "+Ca+ra+Sa+oa+xa+'><td class="cardinfoname">'+ra+'</td><td class="answercardinfo">'+oa+"</td></tr>"),"NoData"!=ua&&"undefined"!=typeof ua&&""!=ua&&$a.push("<tr "+Ca+da+Sa+ua+xa+'><td class="cardinfoname">'+da+'</td><td class="answercardinfo">'+ua+"</td></tr>"),E>=0&&2>=E&&$a.push("<tr "+Ca+w+Sa+H+xa+'><td class="cardinfoname">'+w+'</td><td class="answercardinfo">'+H+ka+"</td></tr>"),"NoData"!=ba&&"undefined"!=typeof ba&&""!=ba&&4==IncludeImg&&setAllMultipleImages($a,IncludeImg,P,x,S,ba),$a.push("</tbody></table>"),$a.push("</div>"),T>=1&&9>=T){var Ma;1==IncludeIUCN&&(Ma="",8!=T&&9!=T||(Ma="d-none"),SetIUCNHTML($a,Ma,T))}if("NoData"!=aa&&"undefined"!=typeof aa&&""!=aa&&"NoData"!=wa&&"undefined"!=typeof wa&&""!=wa?1==IncludeSizeComparison&&1==IncludePresenceMap?$a.push('<hr/><div class="container overflow-hidden"><div class="row row-cols-1 row-cols-md-2 row-cols-sm-2 g-2 mt-2">'):1!=IncludeSizeComparison&&1!=IncludePresenceMap||$a.push('<hr/><div class="container overflow-hidden">'):"NoData"!=aa&&"undefined"!=typeof aa&&""!=aa?1==IncludeSizeComparison&&$a.push('<hr/><div class="container overflow-hidden">'):"NoData"!=wa&&"undefined"!=typeof wa&&""!=wa&&1==IncludePresenceMap&&$a.push('<hr/><div class="container overflow-hidden">'),1==IncludeSizeComparison&&"NoData"!=aa&&"undefined"!=typeof aa&&""!=aa){var za=aa.toString().replace(/\/s200\/|\/s320\/|\/s160\/|\/h160\/|\/h120\/|\/s120\/|\/s1600\//gi,"/s162/");za=za.replace(/=s200|=s162|=s320|=s160|=h160|=h120|=s120|=s1600|=s1900/gi,"=s162"),za=za.replace("=s162","=s400"),$a.push('<div class="col"><div class="card"><img src="'+za+'" class="card-img-top" alt="'+Z+'"><div class="card-body p-1 text-center border-top"><p class="card-text">'+Z+"</p></div></div></div>")}if(1==IncludePresenceMap&&"NoData"!=wa&&"undefined"!=typeof wa&&""!=wa){var _a=wa.toString().replace(/\/s200\/|\/s320\/|\/s160\/|\/h160\/|\/h120\/|\/s120\/|\/s1600\//gi,"/s162/");_a=_a.replace(/=s200|=s162|=s320|=s160|=h160|=h120|=s120|=s1600|=s1900/gi,"=s162"),_a=_a.replace("=s162","=s400"),$a.push('<div class="col"><div class="card"><img src="'+_a+'" class="card-img-top" alt="'+N+'"><div class="card-body p-1 text-center"><p class="card-text">'+N+"</p></div></div></div>")}if("NoData"!=aa&&"undefined"!=typeof aa&&""!=aa&&"NoData"!=wa&&"undefined"!=typeof wa&&""!=wa?1==IncludeSizeComparison&&1==IncludePresenceMap?$a.push("</div></div>"):1!=IncludeSizeComparison&&1!=IncludePresenceMap||$a.push("</div>"):"NoData"!=aa&&"undefined"!=typeof aa&&""!=aa?1==IncludeSizeComparison&&$a.push("</div>"):"NoData"!=wa&&"undefined"!=typeof wa&&""!=wa&&1==IncludePresenceMap&&$a.push("</div>"),"NoData"!=na&&"undefined"!=typeof na&&""!=na&&1==IncludeDidUknow){var Ba=ha;conDidYouKnow($a,na,Ba)}"NoData"!=ba&&"undefined"!=typeof ba&&""!=ba&&4!=IncludeImg&&setAllMultipleImages($a,IncludeImg,P,x,S,ba)}var La=t,Ua=x,Fa=A,Ga=ca,Ha=fa;Ha=Ha.toString().replace("=s96-c","=s50-c"),Ua="NoData"!=pa&&"undefined"!=typeof pa&&""!=pa?"معلومات حول "+x+" - "+P:"معلومات حول "+x;var Ea="",Ta="";if(0==C?(Ha="https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png",Ga="مجهول"):1==C?(Ga=Ga,Ha=fa):2==C?(Ga="<i aria-hidden='true' onclick='properties(&quot;vip&quot;)' class='fa fa-crown text-success'></i> "+Ga,Ha=fa):3==C?(Ga="<i class='fa-solid fa-badge-check text-primary' onclick='properties(&quot;trust&quot;)' aria-hidden='true'></i> "+Ga,Ha=fa):4==C?(Ga="<i class='fas fa-user-shield text-primary' onclick='properties(&quot;admin&quot;)' aria-hidden='true'></i> "+Ga,Ha=fa):(Ha="https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png",Ga="مجهول"),"no"==ma&&(Ha="https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png",Ga="<i class='fas fa-user-lock text-secondary' onclick='properties(&quot;unknown&quot;)'></i> مجهول"),0==k&&(Ea="<hr/><div class='alert alert-danger' role='alert'><h5 class='alert-heading'>تم إزالة هذه البطاقة</h5><p class='alertp'>تم إزالة هذه البطاقة لعدم صحة البيانات الواردة بها او لعدم كفاية المعلومات المطلوبة.</p></div><hr style='background-color:#999999'/>",Ta=" d-none",Ha="https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png",Ga="مجهول"),$("#ShareACard").html("<button type='button' class= 'btn btn-sm btn-danger' onclick='openmodalshare()'><i title='مشاركة' class='fa fa-share-alt' aria-hidden='true'></i> مشاركة</button>"),void 0!=e&&""!=e){var Oa=ga,Xa=e;Oa=Oa.toString(),Xa=Xa.toString();var Ja="'P"+Oa+"','U"+Xa+"'",Qa="P"+Oa;$("#btn_favorite").html('<button type="button" onclick="btn_favorite('+Ja+')" data-name="'+x+'" data-img="'+Aa+'" class="btn btn-sm btn-outline-warning btn_favorite '+Qa+'" disabled> <input type="checkbox" class="btn-check post_favorite" id="post_favorite" autocomplete="off" > <i class="far fa-star"></i> <div class="spinner-grow text-warning spinner-grow-sm d-none" role="status"> <span class="visually-hidden">Loading...</span> </div> </button>')}$("#InfoaboutCard").html("<button type='button' class='btn btn-sm btn-secondary' data-bs-toggle='collapse' onclick='Infoaboutpublisher()' data-bs-target='#Infoaboutpublisher' role='button' aria-expanded='false' aria-controls='Infoaboutpublisher'><i title='حول هذه البطاقة' class='fa fa-info-circle' aria-hidden='true'></i></button>"),$("#InfoPostViewsCard").html("<a name='"+ga+"'></a> <i class='fa fa-eye'></i> <span id='postviews'></span>"),postviews(ha,ga,s,K,x,ia),$("#ShareACard").css("display","block"),$("#InfoaboutCard").css("display","block");var Ba=ha;if($a.push("<div id='Infoaboutpublisher' class='collapse'><hr style='background-color:#999999'/>"),$a.push("<div class='my-2 mt-4 Infoaboutpublisher'>"),$a.push(Ea),$a.push("<ul class='list-group list-group-flush text-center'>"),$a.push("<div id='UserInfo'></div>"),setUserInfo(Ha,Ga,ma,ia),$a.push("<li class='list-group-item'>"+Fa+"</li>"),$a.push("<li class='list-group-item d-none"+Ta+"'><a class='sharer sharer-fb' href='https://www.facebook.com/dialog/feed?app_id=453684218377321&display=popup&link="+Ba+"&redirect_uri="+Ba+"&quote="+Ua+"&hashtag=#جيو_عربي' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='Facebook'><i class='fa fa-facebook-square' aria-hidden='true'></i></a><a class='sharer sharer-tw' href='https://twitter.com/intent/tweet?hashtags=جيو_عربي&url="+Ba+"&text="+Ua+"&via=GeoArabs&related=GeoArabs' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='Twitter'><i class='fa fa-twitter' aria-hidden='true'></i></a> <a class='sharer sharer-wa' data-action='share/whatsapp/share' href='https://api.whatsapp.com/send?text="+Ua+"   "+Ba+"' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='WhatsApp'><i class='fa fa-whatsapp' aria-hidden='true'></i></a><div class='sharer sharer-copy copy' data-clipboard-target='#linkShareforcopy' rel='nofollow' title='copy link'><i class='fa fa-clone' aria-hidden='true'></i></div></li>"),$a.push("</ul>"),$("#linkcardb").val(La),"NoData"!=va&&"undefined"!=typeof va&&""!=va&&$a.push("<hr/><p class='py-2 fspcard'>المزيد من المعلومات حول "+x+": <a href='"+va+"' target='_blank'>"+pa+" <i class='fa fa-external-link fa-flip-horizontal' style='font-size:0.8rem' aria-hidden='true'></i></a></p>"),$a.push(setCreatedCardInfo()),$a.push("</div></div>"),document.getElementById("cardinfo").innerHTML=$a.join(""),$(".spinnercard").css("display","none"),$("#cardinfo").css("display","block"),setiframe(),"NoData"!=na&&"undefined"!=typeof na&&""!=na&&1==IncludeDidUknow&&$("#didyouknow .owl-carousel").owlCarousel({responsiveClass:!0,autoHeight:!0,rtl:!0,items:1,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,stagePadding:30,loop:!0,margin:50,nav:!0}),dataDescription(),onCompletePost(Va,T,aa,wa,na,ba,ma),void 0!=e&&""!=e){var Oa=ga,Xa=e;Oa=Oa.toString(),Xa=Xa.toString();var Ra="P"+Oa,Ya="U"+Xa;setUserPostFavorite(Ya,Ra)}}),void 0!=e&&""!=e){var t=e,s="U"+t;setUserPostFavoriteAll(s)}}),onCompletePage()}$.getJSON("https://sheets.googleapis.com/v4/spreadsheets/"+sheetId+"/?",{key:keyGeoArabic,alt:"json",fields:"sheets(data.rowData.values.formattedValue)"})["catch"](function(a){setType_Error(a)}).done(function(a){setType(a)});