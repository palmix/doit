function setItmePost_Error(){document.getElementById("cardinfo").innerHTML='<div class="alert alert-warning" role="alert"> حدث خطأ في جلب البطاقة </div>',codesheet=0}function setItmePost(e,a){if("New"==a){console.log(a);var t=e.sheets[0].data[0].rowData[1],s=t.values[4].formattedValue,o=t.values[6].formattedValue,r=t.values[7].formattedValue,l=t.values[8].formattedValue,n=t.values[10].formattedValue,d=t.values[11].formattedValue,i=t.values[12].formattedValue,u=t.values[13].formattedValue,c=t.values[14].formattedValue,f=t.values[15].formattedValue,p=(t.values[19].formattedValue,t.values[21].formattedValue),m=t.values[22].formattedValue,h=t.values[16].formattedValue,v=t.values[25].formattedValue,w=t.values[26].formattedValue,g=t.values[27].formattedValue,b=t.values[28].formattedValue,I=(t.values[29].formattedValue,t.values[30].formattedValue,t.values[31].formattedValue,t.values[32].formattedValue,t.values[43].formattedValue,t.values[52].formattedValue,t.values[61].formattedValue,t.values[62].formattedValue,t.values[63].formattedValue,t.values[64].formattedValue),V=(t.values[67].formattedValue,getIdCard.replace("ID1000000","")),A=parseInt(V),y=A+2,D=e.sheets[0].data[0].rowData.reverse()[y],N=D.values[1].formattedValue;getIdCard!=N&&(D=e.sheets[0].data[0].rowData.reverse()[y]);var k=D.values[0].formattedValue,C=(D.values[1].formattedValue,D.values[2].formattedValue),S=D.values[3].formattedValue,P=D.values[4].formattedValue,x=D.values[5].formattedValue,Q=D.values[6].formattedValue,q=D.values[7].formattedValue,z=D.values[8].formattedValue,U=D.values[9].formattedValue,E=D.values[10].formattedValue,T=D.values[11].formattedValue,B=D.values[12].formattedValue,L=D.values[13].formattedValue,M=D.values[14].formattedValue,_=D.values[15].formattedValue,F=D.values[16].formattedValue,G=(D.values[17].formattedValue,D.values[18].formattedValue),O=(D.values[19].formattedValue,D.values[20].formattedValue),H=D.values[21].formattedValue,R=D.values[22].formattedValue,j=D.values[23].formattedValue,J=D.values[24].formattedValue,X=D.values[25].formattedValue,Y=D.values[26].formattedValue,W=D.values[27].formattedValue,K=D.values[28].formattedValue,Z=D.values[29].formattedValue,ee=D.values[30].formattedValue,ae=(D.values[31].formattedValue,D.values[32].formattedValue,D.values[33].formattedValue),te=D.values[34].formattedValue,se=D.values[35].formattedValue,oe=D.values[36].formattedValue,re=D.values[37].formattedValue,le=D.values[38].formattedValue,ne=D.values[39].formattedValue,de=D.values[40].formattedValue,ie=D.values[41].formattedValue,ue=D.values[42].formattedValue,ce=D.values[43].formattedValue,fe=D.values[44].formattedValue,pe=(D.values[45].formattedValue,D.values[46].formattedValue),me=D.values[47].formattedValue,he=(D.values[48].formattedValue,D.values[49].formattedValue),ve=(D.values[50].formattedValue,D.values[51].formattedValue,D.values[52].formattedValue),we=D.values[53].formattedValue,ge=(D.values[54].formattedValue,D.values[55].formattedValue,D.values[56].formattedValue,D.values[57].formattedValue,D.values[58].formattedValue,D.values[59].formattedValue,D.values[60].formattedValue,D.values[61].formattedValue),be=D.values[62].formattedValue,Ie=D.values[63].formattedValue,Ve=D.values[64].formattedValue,Ae=(D.values[65].formattedValue,D.values[66].formattedValue,D.values[67].formattedValue)}else{console.log(a);var ye=JSON.parse(textjson);ye=ye.info;var k=ye.Timestamp.Answer,C="3",S=(ye.ResponseNumber.Answer,ye.UserStatus.Answer),s=ye.CommonName.Question,P=ye.CommonName.Answer,x=ye.CommonName.Answer_En,o=ye.ScientificName.Question,Q=ye.ScientificName.Answer,r=ye.Type.Question,q=ye.Type.Answer,l=ye.Class.Question,z=ye.Class.AnswerAR,U=ye.Class.AnswerEN,n=ye.Order.Question,E=ye.Order.Answer,d=ye.Subfamily.Question,T=ye.Subfamily.Answer,i=ye.Diet.Question,B=ye.Diet.Answer,u=ye.Age.Question,L=ye.Age.Answer,c=ye.Size.Question,M=ye.Size.Answer,f=ye.Weight.Question,_=ye.Weight.Answer,h=ye.PopulationTrend.Question,F=ye.PopulationTrend.Answer,G=(ye.PopulationTrend.Code,ye.PopulationTrend.Num),O=(ye.RedList.Question,ye.RedList.Answer,ye.RedList.Num),p=ye.Speed.Question,H=ye.Speed.Answer,m=ye.DurationPregnancy.Question,R=ye.DurationPregnancy.Answer,j=ye.NumBirths.Question,J=ye.NumBirths.Answer,v=ye.EcologicalHabitat.Question,X=ye.EcologicalHabitat.Answer,w=ye.Color.Question,Y=ye.Color.Answer,g=ye.Enemy.Question,W=ye.Enemy.Answer,b=ye.FeedOn.Question,K=ye.FeedOn.Answer,Z=(ye.Img.Question,ye.Img.Answer),ee=(ye.ImgInDrive.Question,ye.ImgInDrive.Answer,ye.ImgCover.Question,ye.ImgCover.Answer),ae=(ye.MultipleImages.Question,ye.MultipleImages.Answer,ye.JsonFileIdInDrive.Question,ye.JsonFileIdInDrive.Answer,ye.ImgSizeComparison.Question),te=ye.ImgSizeComparison.Answer,se=ye.info1.Question,oe=ye.info1.Answer,re=ye.info2.Question,le=ye.info2.Answer,ne=ye.info3.Question,de=ye.info3.Answer,ie=ye.info4.Question,ue=ye.info4.Answer,ce=(ye.DidYouKnow.Question,ye.DidYouKnow.Answer),fe=ye.UserAccountId,pe=(ye.UserLoginWith,ye.UserAccountImg),me=ye.UserName,he=(ye.UserEmail,ye.Name_publishing.Answer),ve=(ye.PageTitle,ye.PageLink,ye.SourceInfo.Question,ye.SourceInfo.Answer_Title),we=ye.SourceInfo.Answer_link,ge=(ye.dateID,ye.PostUrlInSite.Question,ye.PostUrlInSite.Answer),be=(ye.PostIdInSite.Question,ye.PostIdInSite.Answer),Ie=(ye.SummaryPage.Question,ye.SummaryPage.Answer),I=ye.ImgMaps.Question,Ve=ye.ImgMaps.Answer}var De=getIdCard,Ne=ge.toString();Ne=Ne.replace("http://","https://");var ke=P.toString(),Ce=Ie.toString();""!=Ne&&"NoData"!=Ne||(Ne="https://card.geoarabic.com"),""!=ke&&"NoData"!=ke||(ke="جيو عربي"),""!=Ce&&"NoData"!=Ce||(Ce="بطاقة معلومات الحيوانات"),$("#IDURL").val(Ne),$("#IDTitle").val(ke),$("#IDDescription").val(Ce),$("#linkcardb").val(De),C=parseInt(C),S=parseInt(S),G=parseInt(G),O=parseInt(O),Z=Z.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,"/w136-h136-p/"),Z=Z.replace("=s120","=w136-h136-p"),te=te.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,"/s160/"),te=te.replace("=s120","=s160");var Se=Z.replace("/w136-h136-p/","/s1600/");Se=Se.replace("=s120","=s1600"),"NoData"!=ee||""!=ee?(ee=ee.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,"/s1600/"),ee=ee.replace("=s120","=s1600"),Se=ee):Se=Se;var Pe;Pe=1==G?'<i class="fas fa-arrow-left text-body mx-1"></i>':0==G?'<i class="fas fa-arrow-down text-danger mx-1"></i>':2==G?'<i class="fas fa-arrow-up text-success mx-1"></i>':"";var xe,Qe,qe,ze;if(ze="NoData"!=x?" ("+x+")":"",xe='data-description="',Qe='"',qe=": ",0==C)var Ue=['<div class="alert alert-secondary" role="alert"> هذه البطاقة غير متوفرة! </div>'];else{var Ee=xe+Ie+Qe;"NoData"==Ie&&(Ee="");var Ue=["<span "+Ee+' class="incardbackgroundimage"><span class="cardbackgroundimage" style="background-image: url(&quot;'+Z+'&quot;);"></span></span>'];if(Ue.push('<div class="TableDiv">'),Ue.push('<table class="FastFactsTable" style="overflow-x:auto"><tbody>'),"NoData"!=P&&"undefined"!=typeof P&&""!=P&&($("#showingCard").html(P),$("title").html(P+" - جيو عربي"),Ue.push("<tr "+xe+s+qe+P+ze+Qe+'><td class="cardinfoname">'+s+'</td><td class="answercardinfo">'+P+"</td></tr>")),"NoData"!=Q&&"undefined"!=typeof Q&&""!=Q&&Ue.push("<tr "+xe+o+qe+Q+Qe+'><td class="cardinfoname">'+o+'</td><td class="answercardinfo">'+Q+"</td></tr>"),"NoData"!=q&&"undefined"!=typeof q&&""!=q&&q.toString()!=z.toString()&&Ue.push("<tr "+xe+r+qe+q+Qe+'><td class="cardinfoname">'+r+'</td><td class="answercardinfo">'+q+"</td></tr>"),"None"!=U&&"NoData"!=z&&"undefined"!=typeof z&&""!=z&&Ue.push("<tr "+xe+l+qe+z+Qe+'><td class="cardinfoname">'+l+'</td><td class="answercardinfo">'+z+"</td></tr>"),"NoData"!=E&&"undefined"!=typeof E&&""!=E&&Ue.push("<tr "+xe+n+qe+E+Qe+'><td class="cardinfoname">'+n+'</td><td class="answercardinfo">'+E+"</td></tr>"),"NoData"!=T&&"undefined"!=typeof T&&""!=T&&Ue.push("<tr "+xe+d+qe+T+Qe+'><td class="cardinfoname">'+d+'</td><td class="answercardinfo">'+T+"</td></tr>"),"NoData"!=_&&"undefined"!=typeof _&&""!=_&&Ue.push("<tr "+xe+f+qe+_+Qe+'><td class="cardinfoname">'+f+'</td><td class="answercardinfo">'+_+"</td></tr>"),"NoData"!=M&&"undefined"!=typeof M&&""!=M&&Ue.push("<tr "+xe+c+qe+M+Qe+'><td class="cardinfoname">'+c+'</td><td class="answercardinfo">'+M+"</td></tr>"),"NoData"!=L&&"undefined"!=typeof L&&""!=L&&Ue.push("<tr "+xe+u+qe+L+Qe+'><td class="cardinfoname">'+u+'</td><td class="answercardinfo">'+L+"</td></tr>"),"NoData"!=X&&"undefined"!=typeof X&&""!=X&&Ue.push("<tr "+xe+v+qe+X+Qe+'><td class="cardinfoname">'+v+'</td><td class="answercardinfo">'+X+"</td></tr>"),"NoData"!=B&&"undefined"!=typeof B&&""!=B&&Ue.push("<tr "+xe+i+qe+B+Qe+'><td class="cardinfoname">'+i+'</td><td class="answercardinfo">'+B+"</td></tr>"),"NoData"!=K&&"undefined"!=typeof K&&""!=K&&Ue.push("<tr "+xe+b+qe+K+Qe+'><td class="cardinfoname">'+b+'</td><td class="answercardinfo">'+K+"</td></tr>"),"NoData"!=W&&"undefined"!=typeof W&&""!=W&&Ue.push("<tr "+xe+g+qe+W+Qe+'><td class="cardinfoname">'+g+'</td><td class="answercardinfo">'+W+"</td></tr>"),"NoData"!=H&&"undefined"!=typeof H&&""!=H&&Ue.push("<tr "+xe+p+qe+H+Qe+'><td class="cardinfoname">'+p+'</td><td class="answercardinfo">'+H+"</td></tr>"),"NoData"!=R&&"undefined"!=typeof R&&""!=R&&Ue.push("<tr "+xe+m+qe+R+Qe+'><td class="cardinfoname">'+m+'</td><td class="answercardinfo">'+R+"</td></tr>"),"NoData"!=J&&"undefined"!=typeof J&&""!=J&&Ue.push("<tr "+xe+j+qe+J+Qe+'><td class="cardinfoname">'+j+'</td><td class="answercardinfo">'+J+"</td></tr>"),"NoData"!=Y&&"undefined"!=typeof Y&&""!=Y&&Ue.push("<tr "+xe+w+qe+Y+Qe+'><td class="cardinfoname">'+w+'</td><td class="answercardinfo">'+Y+"</td></tr>"),"NoData"!=oe&&"undefined"!=typeof oe&&""!=oe&&Ue.push("<tr "+xe+se+qe+oe+Qe+'><td class="cardinfoname">'+se+'</td><td class="answercardinfo">'+oe+"</td></tr>"),"NoData"!=le&&"undefined"!=typeof le&&""!=le&&Ue.push("<tr "+xe+re+qe+le+Qe+'><td class="cardinfoname">'+re+'</td><td class="answercardinfo">'+le+"</td></tr>"),"NoData"!=de&&"undefined"!=typeof de&&""!=de&&Ue.push("<tr "+xe+ne+qe+de+Qe+'><td class="cardinfoname">'+ne+'</td><td class="answercardinfo">'+de+"</td></tr>"),"NoData"!=ue&&"undefined"!=typeof ue&&""!=ue&&Ue.push("<tr "+xe+ie+qe+ue+Qe+'><td class="cardinfoname">'+ie+'</td><td class="answercardinfo">'+ue+"</td></tr>"),G>=0&&2>=G&&Ue.push("<tr "+xe+h+qe+F+Qe+'><td class="cardinfoname">'+h+'</td><td class="answercardinfo">'+F+Pe+"</td></tr>"),"NoData"!=Ae&&"undefined"!=typeof Ae&&""!=Ae&&4==IncludeImg&&setAllMultipleImages(Ue,IncludeImg,Q,P,x,Ae),Ue.push("</tbody></table>"),O>=1&&9>=O){var Te;1==IncludeIUCN&&(Te="",8!=O&&9!=O||(Te="d-none"),SetIUCNHTML(Ue,Te,O))}if("NoData"!=te&&"undefined"!=typeof te&&""!=te&&"NoData"!=Ve&&"undefined"!=typeof Ve&&""!=Ve?1==IncludeSizeComparison&&1==IncludePresenceMap?Ue.push('<hr/><div class="container overflow-hidden"><div class="row row-cols-1 row-cols-md-2 row-cols-sm-2 g-2 mt-2">'):1!=IncludeSizeComparison&&1!=IncludePresenceMap||Ue.push('<hr/><div class="container overflow-hidden">'):"NoData"!=te&&"undefined"!=typeof te&&""!=te?1==IncludeSizeComparison&&Ue.push('<hr/><div class="container overflow-hidden">'):"NoData"!=Ve&&"undefined"!=typeof Ve&&""!=Ve&&1==IncludePresenceMap&&Ue.push('<hr/><div class="container overflow-hidden">'),1==IncludeSizeComparison&&"NoData"!=te&&"undefined"!=typeof te&&""!=te){var Be=te.toString().replace(/\/s200\/|\/s320\/|\/s160\/|\/h160\/|\/h120\/|\/s120\/|\/s1600\//gi,"/s162/");Be=Be.replace(/=s200|=s162|=s320|=s160|=h160|=h120|=s120|=s1600|=s1900/gi,"=s162"),Be=Be.replace("=s162","=s400"),Ue.push('<div class="col"><div class="card"><img src="'+Be+'" class="card-img-top" alt="'+ae+'"><div class="card-body p-1 text-center border-top"><p class="card-text">'+ae+"</p></div></div></div>")}if(1==IncludePresenceMap&&"NoData"!=Ve&&"undefined"!=typeof Ve&&""!=Ve){var Le=Ve.toString().replace(/\/s200\/|\/s320\/|\/s160\/|\/h160\/|\/h120\/|\/s120\/|\/s1600\//gi,"/s162/");Le=Le.replace(/=s200|=s162|=s320|=s160|=h160|=h120|=s120|=s1600|=s1900/gi,"=s162"),Le=Le.replace("=s162","=s400"),Ue.push('<div class="col"><div class="card"><img src="'+Le+'" class="card-img-top" alt="'+I+'"><div class="card-body p-1 text-center"><p class="card-text">'+I+"</p></div></div></div>")}if("NoData"!=te&&"undefined"!=typeof te&&""!=te&&"NoData"!=Ve&&"undefined"!=typeof Ve&&""!=Ve?1==IncludeSizeComparison&&1==IncludePresenceMap?Ue.push("</div></div>"):1!=IncludeSizeComparison&&1!=IncludePresenceMap||Ue.push("</div>"):"NoData"!=te&&"undefined"!=typeof te&&""!=te?1==IncludeSizeComparison&&Ue.push("</div>"):"NoData"!=Ve&&"undefined"!=typeof Ve&&""!=Ve&&1==IncludePresenceMap&&Ue.push("</div>"),"NoData"!=ce&&"undefined"!=typeof ce&&""!=ce&&1==IncludeDidUknow){var Me=ge;conDidYouKnow(Ue,ce,Me)}"NoData"!=Ae&&"undefined"!=typeof Ae&&""!=Ae&&4!=IncludeImg&&setAllMultipleImages(Ue,IncludeImg,Q,P,x,Ae)}var _e=getIdCard,Fe=P,Ge=k,Oe=me,He=pe;fe=fe,He=He.toString().replace("=s96-c","=s50-c"),Fe="NoData"!=ve&&"undefined"!=typeof ve&&""!=ve?"معلومات حول "+P+" - "+Q:"معلومات حول "+P;var Re="",je="";0==S?(He="https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png",Oe="مجهول"):1==S?(Oe=Oe,He=pe):2==S?(Oe="<i aria-hidden='true' onclick='properties(&quot;vip&quot;)' class='fa fa-crown text-success'></i> "+Oe,He=pe):3==S?(Oe="<i class='fa-solid fa-badge-check text-primary' onclick='properties(&quot;trust&quot;)' aria-hidden='true'></i> "+Oe,He=pe):4==S?(Oe="<i class='fas fa-user-shield text-primary' onclick='properties(&quot;admin&quot;)' aria-hidden='true'></i> "+Oe,He=pe):(He="https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png",Oe="مجهول"),"no"==he&&(He="https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png",Oe="<i class='fas fa-user-lock text-secondary' onclick='properties(&quot;unknown&quot;)'></i> مجهول"),0==C&&(Re="<hr/><div class='alert alert-danger' role='alert'><h5 class='alert-heading'>تم إزالة هذه البطاقة</h5><p class='alertp'>تم إزالة هذه البطاقة لعدم صحة البيانات الواردة بها او لعدم كفاية المعلومات المطلوبة.</p></div><hr style='background-color:#999999'/>",je=" d-none",He="https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png",Oe="مجهول");var Me=ge;Ue.push("<div class='container p-0 m-0'><div class='row'>"),Ue.push("<div class='col-auto me-auto'><div class='btn p-0 btndown' data-bs-toggle='collapse' onclick='InfoaboutpublisherItme()' data-bs-target='#Infoaboutpublisher' role='button' aria-expanded='false' aria-controls='Infoaboutpublisher'><i title='حول هذه البطاقة' class='fa fa-info-circle' aria-hidden='true'></i></div></div>"),Ue.push("<div class='col-auto item-control blog-admin'><a name='"+be+"'></a> <i class='fa fa-eye'></i><span id='postviews'></span></div>"),Ue.push("<div class='col-auto'><div class='mx-1' id='btn_print'><div class='btn-group dropup'><button aria-expanded='false' class='btn p-0 mr-0 btndown' data-bs-auto-close='outside' data-bs-toggle='dropdown' id='monitor' type='button'><i class='fa-solid fa-print'></i></button><ul aria-labelledby='monitor' class='dropdown-menu py-0'><li><label class='bg-dark py-2 rounded-0 rounded-top text-center text-light w-100'>حدد محتوى الطباعة</label></li><li><input autocomplete='off' class='btn-check' id='printtextTable' type='checkbox' checked> <label class='btn rounded-0 btn-outline-danger dropdown-item shadow-none' for='printtextTable'>الجدول <i class='fa-solid float-end mt-1 fa-table'></i></label></li><hr class='m-0 p-0'><li><input autocomplete='off' class='btn-check' id='printcardDescription' type='checkbox' checked> <label class='btn rounded-0 btn-outline-danger dropdown-item shadow-none' for='printcardDescription'>الوصف <i class='fa-solid float-end mt-1 fa-align-right'></i></label></li><hr class='m-0 p-0'><li><input autocomplete='off' class='btn-check' id='printIUCNClass' type='checkbox' checked> <label class='btn rounded-0 btn-outline-danger dropdown-item shadow-none' for='printIUCNClass'>القائمة الحمراء <i class='fa-solid float-end mt-1 fa-siren-on'></i></label></li><hr class='m-0 p-0'><li><input autocomplete='off' class='btn-check' id='printimgmapandsize' type='checkbox' checked> <label class='btn rounded-0 btn-outline-danger dropdown-item shadow-none' for='printimgmapandsize'>الحجم والخرائط <i class='fa-solid float-end mt-1 fa-earth-asia'></i></label></li><hr class='m-0 p-0'><li><input autocomplete='off' class='btn-check' id='printdidyouknow' type='checkbox' checked> <label class='btn rounded-0 btn-outline-danger dropdown-item shadow-none' for='printdidyouknow'>محتوى هل تعلم <i class='fa-solid float-end mt-1 fa-head-side-brain'></i></label></li><hr class='m-0 p-0'><li><input autocomplete='off' class='btn-check' id='printcarouselImg' type='checkbox' checked> <label class='btn rounded-0 btn-outline-danger dropdown-item shadow-none' for='printcarouselImg'>تضمين الصور <i class='fa-solid float-end mt-1 fa-image'></i></label></li><li><input autocomplete='off' class='btn-check' id='printuserpublisher' type='checkbox'> <label class='btn rounded-0 btn-outline-danger dropdown-item shadow-none' for='printuserpublisher'>ناشر البطاقة <i class='fa-solid float-end mt-1 fa-user'></i></label></li><hr class='m-0 p-0'><li><span class='btn btn rounded-0 btn-outline-primary btn-outline-success rounded-bottom w-100' onclick='idElementPrint(this)'>طبـاعــة <i class='fa-solid fa-print'></i></span></li></ul></div></div></div>"),Ue.push("<div class='col-auto'><div class='btn p-0 btndown' onclick='openmodalshare()'><i title='مشاركة' class='fa fa-share-alt' aria-hidden='true'></i></div></div>"),Ue.push("</div></div>"),Ue.push("<div id='Infoaboutpublisher' class='collapse'><hr style='background-color:#999999'/>"),Ue.push("<div class='my-2 mt-4 Infoaboutpublisher'>"),Ue.push(Re),Ue.push("<ul class='list-group list-group-flush text-center'>"),Ue.push("<div id='UserInfo'></div>"),"Old"==a&&(Fe=P,Ge=k,Oe=me.Answer,He=pe.Answer,fe=fe.Answer),"New"==a&&setUserInfo(He,Oe,he,fe),Ue.push("<li class='list-group-item'>"+Ge+"</li>"),Ue.push("<li class='list-group-item d-none"+je+"'><a class='sharer sharer-fb' href='https://www.facebook.com/dialog/feed?app_id=453684218377321&display=popup&link="+Me+"&redirect_uri="+Me+"&quote="+Fe+"&hashtag=#جيو_عربي' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='Facebook'><i class='fa fa-facebook-square' aria-hidden='true'></i></a><a class='sharer sharer-tw' href='https://twitter.com/intent/tweet?hashtags=جيو_عربي&url="+Me+"&text="+Fe+"&via=GeoArabs&related=GeoArabs' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='Twitter'><i class='fa fa-twitter' aria-hidden='true'></i></a> <a class='sharer sharer-wa' data-action='share/whatsapp/share' href='https://api.whatsapp.com/send?text="+Fe+"   "+Me+"' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='WhatsApp'><i class='fa fa-whatsapp' aria-hidden='true'></i></a><div class='sharer sharer-copy copy' data-clipboard-target='#linkShareforcopy' rel='nofollow' title='copy link'><i class='fa fa-clone' aria-hidden='true'></i></div></li>"),Ue.push("</ul>"),$("#linkcardb").val(_e),"NoData"!=we&&"undefined"!=typeof we&&""!=we&&Ue.push("<hr/><p class='py-2 fspcard'>المزيد من المعلومات حول "+P+": <a href='"+we+"' target='_blank'>"+ve+" <i class='fa fa-external-link fa-flip-horizontal' style='font-size:0.8rem' aria-hidden='true'></i></a></p>"),Ue.push(setCreatedCardInfo()),Ue.push("</div></div>"),document.getElementById("cardinfo").innerHTML=Ue.join(""),setiframe(),postviews(ge,be,V,Z,P,fe),"NoData"!=ce&&"undefined"!=typeof ce&&""!=ce&&1==IncludeDidUknow&&$("#cardinfo #didyouknow .owl-carousel").owlCarousel({responsiveClass:!0,autoHeight:!0,rtl:!0,items:1,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,stagePadding:30,loop:!0,margin:50,nav:!0}),dataDescription(),onCompletePost(Ie,O,te,Ve,ce,Ae,he)}var textjson=textjson,obj=JSON.parse(textjson);obj=obj.info;var getIdCard=obj.ResponseNumber.Answer,IdCard=getIdCard.replace("ID1000000",""),IdCards=parseInt(IdCard),IdCard=IdCards+3;""!=getBackgroundCard&&$("body.bg-light").attr("style","background-color:#"+getBackgroundCard+"!important"),$.getJSON("https://sheets.googleapis.com/v4/spreadsheets/"+sheetId+"/?",{key:keyGeoArabic,alt:"json",fields:"sheets(data.rowData.values.formattedValue)"})["catch"](function(e){setItmePost_Error(e)}).done(function(e){var a=e.sheets[0].data[0].rowData[0],t=a.values[4].formattedValue;"CommonName_Answer"==t?setItmePost(e,"New"):setItmePost(e,"Old")});