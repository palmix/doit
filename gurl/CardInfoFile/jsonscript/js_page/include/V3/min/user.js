function recost_error(e){$(".setSheetHideSite").removeClass("setSheetHideSite"),$("#cardslistallUser").html('<div class="alert alert-danger d-flex align-items-center mx-4" role="alert"><i class="fa fa-info-circle my-2" aria-hidden="true"></i><div>حدث خطأ ما! يرجى إعادة المحاولة، رمز الخطأ: '+e.status+"</div></div>"),$(".loadingFullscreen").addClass("d-none"),$("#PageCardName").addClass("d-none")}function recost_done(e){profileSet(e)}function setUserPost(e,a,t,r){var l="",s=checkCookie("get","AcSettings",null);void 0!==getSC&&""!=getSC&&(l=s.UserAccountId);var o=a,d=t,u=r,i='<div class="row row-cols-1 row-cols-md-3 g-4 mt-2">',n=[i],m=0,v=(window.innerWidth,window.innerHeight,e.sheets[0].data[0].rowData.reverse()),f=v[1].values[1].formattedValue;"ID"==f&&(v=e.sheets[0].data[0].rowData.reverse());var c=e.sheets[0].data[0].rowData[1],g=e.sheets[0].data[0].rowData[1],V=c.values[4].formattedValue;"الإسم الشائع"!=V&&(c=e.sheets[0].data[0].rowData.reverse()[1],g=e.sheets[0].data[0].rowData.reverse()[1]);var V=g.values[4].formattedValue;g.values[6].formattedValue,g.values[7].formattedValue,g.values[8].formattedValue,g.values[10].formattedValue,g.values[11].formattedValue,g.values[12].formattedValue,g.values[13].formattedValue,g.values[14].formattedValue,g.values[15].formattedValue,g.values[19].formattedValue,g.values[21].formattedValue,g.values[22].formattedValue,g.values[16].formattedValue,g.values[25].formattedValue,g.values[26].formattedValue,g.values[27].formattedValue,g.values[28].formattedValue,g.values[29].formattedValue,g.values[30].formattedValue,g.values[31].formattedValue,g.values[32].formattedValue,g.values[43].formattedValue,g.values[52].formattedValue,g.values[61].formattedValue,g.values[62].formattedValue,g.values[63].formattedValue,g.values[64].formattedValue,g.values[67].formattedValue;$.each(v,function(e,a){function t(e){if(e.push('<div class="col mx-'+f+" px-"+i+" mt-"+v+'" style="width:'+u+'">'),e.push('<div class="card">'),void 0!=l&&""!=l){var a=I,t=l;a=a.toString(),t=t.toString();var o="'P"+a+"','U"+t+"','"+g+"'",d="P"+a;e.push('<button type="button" onclick="btn_favorite('+o+')" data-name="'+p+'" data-img="'+D+'" class="btn btn-sm btn-outline-warning btn_favorite '+d+' d-none"> <input type="checkbox" class="btn-check post_favorite" autocomplete="off" ><i class="far fa-star"></i><div class="spinner-grow text-warning spinner-grow-sm d-none" role="status"><span class="visually-hidden">إنتظر...</span></div></button>')}e.push('<a href="'+M+'" data-post-id="'+I+'" data-card-href="'+A+'" style="height:'+s+'px;" class="'+k+' dataimg rounded-top" onclick="'+N+'" data-id="'+g+'" title="'+S+'">'),e.push('<img src="'+C+'" width="'+r+'" height="'+s+'" loading="lazy" class="card-img-top lazyload" alt="'+p+'">'),e.push("</a>"),e.push('<div class="card-body text-center p-0 rounded-bottom">'),e.push('<a href="'+M+'" data-post-id="'+I+'" data-card-href="'+A+'" data-id="'+g+'" onclick="'+F+'" title="'+w+'" class="list-group-item list-group-item-action border-0 '+L+'">'+p+"</a>"),e.push("</div>"),e.push("</div>"),e.push("</div>")}var r=214,s=160,u="15rem;",i=2,v=2,f="auto",c=window.innerWidth;window.innerHeight;350>=c?(r=272,s=203,u="100%;",i=3,v=2):c>=351&&400>=c?(r=166,s=124,u="11rem;",i=1,v=2):c>=401&&457>=c?(r=182,s=136,u="12rem;",i=1,v=2):c>=458&&934>=c?(r=190,s=148,u="13rem;",i=1,v=2):c>=935&&(r=214,s=160,u="15rem;",i=2,v=3,f=0);var g=(a.values[0].formattedValue,a.values[1].formattedValue),V=a.values[2].formattedValue,h=a.values[3].formattedValue,p=a.values[4].formattedValue,w=a.values[5].formattedValue,S=a.values[6].formattedValue,y=(a.values[7].formattedValue,a.values[8].formattedValue,a.values[9].formattedValue,a.values[10].formattedValue,a.values[11].formattedValue,a.values[12].formattedValue,a.values[13].formattedValue,a.values[14].formattedValue,a.values[15].formattedValue,a.values[16].formattedValue,a.values[17].formattedValue,a.values[18].formattedValue),x=(a.values[19].formattedValue,a.values[20].formattedValue),P=(a.values[21].formattedValue,a.values[22].formattedValue,a.values[23].formattedValue,a.values[24].formattedValue,a.values[25].formattedValue,a.values[26].formattedValue,a.values[27].formattedValue,a.values[28].formattedValue,a.values[29].formattedValue),C=a.values[30].formattedValue,b=(a.values[31].formattedValue,a.values[32].formattedValue,a.values[33].formattedValue,a.values[34].formattedValue,a.values[35].formattedValue,a.values[36].formattedValue,a.values[37].formattedValue,a.values[38].formattedValue,a.values[39].formattedValue,a.values[40].formattedValue,a.values[41].formattedValue,a.values[42].formattedValue,a.values[43].formattedValue,a.values[44].formattedValue),U=(a.values[45].formattedValue,a.values[46].formattedValue,a.values[47].formattedValue,a.values[48].formattedValue,a.values[49].formattedValue),M=(a.values[50].formattedValue,a.values[51].formattedValue,a.values[52].formattedValue,a.values[53].formattedValue,a.values[54].formattedValue,a.values[55].formattedValue,a.values[56].formattedValue,a.values[57].formattedValue,a.values[58].formattedValue,a.values[59].formattedValue,a.values[60].formattedValue,a.values[61].formattedValue),I=a.values[62].formattedValue;a.values[63].formattedValue,a.values[64].formattedValue,a.values[65].formattedValue,a.values[66].formattedValue,a.values[67].formattedValue;h=parseInt(h),y=parseInt(y),x=parseInt(x);var A="http://card.geoarabic.com/p/card.html?id="+g;p.length>=30&&(p=p.substring(0,30)+"..."),""!=S&&"NoData"!=S||(S=""),""!=w&&"NoData"!=w||(w=""),""!=P&&"NoData"!=P||(P="https://lh3.googleusercontent.com/-nngQTpjLnLk/WwI4sFyHQfI/AAAAAAAACdM/CFZJhtiKCMgR6syKazo7tsM4_xVtpML7gCEwYBhgL/w214-h160-p/GeoArabic.png");var D=P;if(C=C.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,"/w"+r+"-h"+s+"-p/"),C=C.replace("=s120","=w"+r+"-h"+s+"-p"),P=P.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,"/w"+r+"-h"+s+"-p/"),P=P.replace("=s120","=w"+r+"-h"+s+"-p"),"NoData"!=C&&""!=C||(C=P),"0"===V);else if("حالة النشر"===V);else if("Published"===V);else{var k="showModal",N="return false;",L="showModal",F="return false;";0==Openframe?(k="",N="",L="",F=""):1==Openframe?(k="",N="",L="showModal",F="return false;"):2==Openframe&&(k="showModal",N="return false;",L="showModal",F="return false;"),o==b&&"yes"==U&&(m+=1,t(n),$("#PageCardName").addClass("mt-4 bg-danger bg-gradient text-light mb-0 p-2 rounded-top text-center typeicone").html("<h5>مشاركات "+d+"</h5>"))}}),0>=m&&("Female"==u?$("#PageCardName").addClass("mt-4").html('<div class="alert alert-primary d-flex align-items-center" role="alert"><i class="fa fa-info-circle mx-2 fs-4" aria-hidden="true"></i><div>لم تقم '+d+" بإنشاء أي مشاركات</div></div>"):$("#PageCardName").addClass("mt-4").html('<div class="alert alert-primary d-flex align-items-center" role="alert"><i class="fa fa-info-circle mx-2 fs-4" aria-hidden="true"></i><div>لم يقم '+d+" بإنشاء أي مشاركات</div></div>")),$("#UserPosts").html(m),n.push("</div>"),document.getElementById("cardslistallUser").innerHTML="",m>1&&(document.getElementById("cardslistallUser").innerHTML+=n.join("")),$(document).ready(function(){if($(".showModal").click(function(){var a=$(this).attr("data-id"),t=!0;setPostCard(e,c,a,l,t)}),void 0!=l&&""!=l){var a=l,t="U"+a;setUserPostFavoriteAll(t)}}),onCompletePage()}function profileSet(e){function a(e,a){var t=a.toString();t="A"+a+":Z"+a,$.getJSON(getusercodedrive,{key:"AIzaSyDpCuvAcL0ESYhI5X9amoy12NGpswwXdlQ",range:t,majorDimension:"COLUMNS"}).done(function(a){var t=a.values,r=(t[0].toString(),t[1].toString()),l=t[2].toString(),s=t[3].toString(),o=t[4].toString(),d=t[5].toString(),u=t[6].toString(),i=t[7].toString(),n=t[8].toString(),m=t[9].toString(),v=(t[10].toString(),t[11].toString()),f=t[12].toString(),c=t[13].toString();s=decode(s),o=decode(o),d=decode(d),u=decode(u),i=decode(i),n=decode(n),v=decode(v),m=decode(m),l=decode(l),s=s.toString(),o=o.toString(),d=d.toString(),u=u.toString(),i=i.toString(),n=n.toString(),v=v.toString(),l=l.toString(),$("#AccountStatus").val(l);var g=n.replace("=s120","=s1600"),V=n.replace("=s120","=w360-h360-p"),h=r.replace("ID1000000","");h=parseInt(h),h+=2,$("#UserName1").html(s+" "+o),$("#UserUserID1").html("@"+u),$("#UserImgProfile1").attr("src",V),$("#UserImgProfile1").attr("alt",s+" "+o),$("#UserImgProfileLink1").attr("href",g),$("#UserGender1").html(i),$("#TheState1").html(f),setPropertiesUser(l),setProfileViews(h),setUserPost(e,c,s,i)})}var t="";try{t=$.query.get("user")}catch(r){$("#MyProfile").html('<div class="alert alert-warning d-flex align-items-center my-4" role="alert"> <i class="fa fa-exclamation-triangle mx-2" aria-hidden="true"></i> <div> حدث خطأ في في جلب الملف الشخصي </div> </div>')}void 0!=t&&""!=t?$.getJSON(getusercodedrive,{key:"AIzaSyDpCuvAcL0ESYhI5X9amoy12NGpswwXdlQ",range:"G:G",majorDimension:"ROWS"}).done(function(r){var l=t;l=l.toString().toLowerCase();var s,o=!1,d=0,u=r.values;for(s=0;s<u.length;s++){var i=u[s].toString();i=decode(i),i=i.toString().toLowerCase(),i==l&&(o=!0,d=s+1)}1==o?a(e,d):($("#MyProfile").removeClass("d-none"),$("#MyProfile").html('<div class="alert alert-warning d-flex align-items-center my-4" role="alert"> <i class="fa fa-exclamation-triangle mx-2" aria-hidden="true"></i> <div> لا يوجد ملف شخصي لهذا الإسم </div> </div>'))}):($("#MyProfile").removeClass("d-none"),$("#MyProfile").html('<div class="alert alert-warning d-flex align-items-center my-4" role="alert"> <i class="fa fa-exclamation-triangle mx-2" aria-hidden="true"></i> <div> يبدو أنك إتبعت رابط خاطئ </div> </div>'))}function setPropertiesUser(e){var a,t,r=e;4==r?t='<i class="fas fa-user-shield text-primary mx-1" onclick="properties(&#039;admin&#039;)" aria-hidden="true"></i>':3==r?t='<i class="fa fa-check-circle text-primary mx-1" onclick="properties(&#039;trust&#039;)" aria-hidden="true"></i>':2==r?t='<i class="fa fa-crown text-success mx-1" onclick="properties(&#039;vip&#039;)" aria-hidden="true"></i>':1==r&&(t=""),a=$("#UserName1").html();var l=a.substring(0,1),s=/^[A-Za-z0-9]*$/;1==s.test(l)?$("#UserName1").html(t+a):$("#UserName1").html(a+t)}function setProfileViews(e){var a=$("#ViewProfile"),t=e;t-=2,t=t.toString(),t="ID1000000"+t;var r=new Firebase("https://geoarabic1.firebaseio.com/user/id/"+t);r.once("value",function(e){var l=e.val(),s=!1;null==l&&(l={},l.value=0,l.id=t,s=!0),a.text(l.value),l.value++,s?r.set(l):r.child("value").set(l.value)}),$("#MyProfile").removeClass("d-none")}var getusercodedrive="https://sheets.googleapis.com/v4/spreadsheets/1MSVD6mO_FyPZS5KM2n7sx3fld45BfjtvrFQw-Ldkm5Q/values/responses?";