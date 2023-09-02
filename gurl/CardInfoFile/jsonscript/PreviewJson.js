function PreviewJson(){
$(document).ready(function(){
var NameAnimal = $("#textareajson").val();  
var hrefshare = window.location.protocol+'//'+window.location.hostname+window.location.pathname;


function getNumbers(string) 
{
   var numsStr = string.replace(/[^0-9]/g,'');
   return parseInt(numsStr);
}

var getJSONs = $("#textareajson").val(); 
var result = JSON.parse(getJSONs);


   
    var gets,godrid,spancardinfo,btncardinf,infolistDidYouKnow,img1,img2,getInfoRedList,PstatusSymbol,PopulationTrendnum,Enemy,FeedOn,Color;
    gets = result.info;
	img1 = gets.Img.Answer;
	img2 = gets.ImgSizeComparison.Answer;
    getInfoRedList = gets.RedList.Num;
    PopulationTrendnum = gets.PopulationTrend.Num;
    Enemy = gets.Enemy.Answer;
    FeedOn = gets.FeedOn.Answer;
    Color = gets.Color.Answer;

    
    img1 = img1.replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,"/w136-h136-p/");
    img1 = img1.replace("=s120","=w136-h136-p");
    img2 = img2.replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,"/s160/");
	Enemy = Enemy.replace(/-/gi,",");
	FeedOn = FeedOn.replace(/-/gi,",");
	Color = Color.replace(/-/gi,",");


    
    if(PopulationTrendnum == 1){
    PstatusSymbol = '<span class="cardinfo_stable"></span>';
    }else if(PopulationTrendnum == 1){
    PstatusSymbol = '<span class="cardinfo_stable"></span>';
    }else if(PopulationTrendnum == 0){
    PstatusSymbol = '<span class="cardinfo_decreasing"></span>';
    }else if(PopulationTrendnum == 2){
    PstatusSymbol = '<span class="cardinfo_increase"></span>';
    }else{
    PstatusSymbol = '';
    }
    
  var titleeng = gets.CommonName.Answer_En;
  if(titleeng != ''){
  var titleeng = 'title="'+titleeng+'"';
  }

  var table = ['<span class="incardbackgroundimage"><span class="cardbackgroundimage" style="background-image: url(&quot;'+img1+'&quot;);"></span></span>'];
    

  table.push('<table class="FastFactsTable" style="overflow-x:auto"><tbody>');
  
if(gets.CommonName.Answer.length >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.CommonName.Question+'</td><td class="answercardinfo" '+titleeng+'>'+gets.CommonName.Answer+'</td></tr>');
}
if(gets.ScientificName.Answer.length >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.ScientificName.Question+'</td><td class="answercardinfo">'+gets.ScientificName.Answer+'</td></tr>');
}
if(gets.Type.Answer != gets.Class.AnswerAR){
if(gets.Type.Answer.length >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.Type.Question+'</td><td class="answercardinfo">'+gets.Type.Answer+'</td></tr>');
}
}
if(gets.Class.AnswerAR.length >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.Class.Question+'</td><td class="answercardinfo">'+gets.Class.AnswerAR+'</td></tr>');
}


if(gets.Order.Answer.length >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.Order.Question+'</td><td class="answercardinfo">'+gets.Order.Answer+'</td></tr>');
}
if(gets.Subfamily.Answer.length >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.Subfamily.Question+'</td><td class="answercardinfo">'+gets.Subfamily.Answer+'</td></tr>');
}
if(gets.EcologicalHabitat.Answer.length >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.EcologicalHabitat.Question+'</td><td class="answercardinfo">'+gets.EcologicalHabitat.Answer+'</td></tr>')
}
if(gets.Diet.Answer.length >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.Diet.Question+'</td><td class="answercardinfo">'+gets.Diet.Answer+'</td></tr>');
}
if(FeedOn.length >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.FeedOn.Question+'</td><td class="answercardinfo">'+FeedOn+'</td></tr>');
}

if(getNumbers(gets.Age.Answer) >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.Age.Question+'</td><td class="answercardinfo">'+gets.Age.Answer+'</td></tr>');
}
if(getNumbers(gets.Size.Answer) >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.Size.Question+'</td><td class="answercardinfo">'+gets.Size.Answer+'</td></tr>');
}
if(getNumbers(gets.Weight.Answer) >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.Weight.Question+'</td><td class="answercardinfo">'+gets.Weight.Answer+'</td></tr>');
}
if(gets.Speed.Answer.length >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.Speed.Question+'</td><td class="answercardinfo">'+gets.Speed.Answer+'</td></tr>');
}
if(gets.DurationPregnancy.Answer.length >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.DurationPregnancy.Question+'</td><td class="answercardinfo">'+gets.DurationPregnancy.Answer+'</td></tr>');
}
if(gets.NumBirths.Answer.length >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.NumBirths.Question+'</td><td class="answercardinfo">'+gets.NumBirths.Answer+'</td></tr>');
}
if(Color.length >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.Color.Question+'</td><td class="answercardinfo">'+Color+'</td></tr>');
}
if(gets.info1.Question.length >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.info1.Question+'</td><td class="answercardinfo">'+gets.info1.Answer+'</td></tr>');
}
if(gets.info2.Question.length >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.info2.Question+'</td><td class="answercardinfo">'+gets.info2.Answer+'</td></tr>');
}
if(gets.info3.Question.length >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.info3.Question+'</td><td class="answercardinfo">'+gets.info3.Answer+'</td></tr>');
}
if(gets.info4.Question.length >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.info4.Question+'</td><td class="answercardinfo">'+gets.info4.Answer+'</td></tr>');
}
if(Enemy.length >= 1){
  table.push('<tr><td class="cardinfoname">'+gets.Enemy.Question+'</td><td class="answercardinfo">'+Enemy+'</td></tr>');
}
if(PopulationTrendnum >= 0 && PopulationTrendnum <= 2){
  table.push('<tr><td class="cardinfoname">'+gets.PopulationTrend.Question+'</td><td class="answercardinfo">'+gets.PopulationTrend.Answer + PstatusSymbol +'</td></tr>');
}



  table.push('</tbody></table>');
  


if (getInfoRedList >= 1 && getInfoRedList <= 9) {
 table.push(gets.modalcardinf.IUCN_AR);
$(document).ready(function() {
1 == getInfoRedList ? (document.getElementById("setclassList1").className = "extinction_this extinctionbackgroundcolor160", document.getElementById("settextstatus").textContent = "غير مهدد", document.getElementById("settextstatus").style.color = "rgb(0, 160, 0)") : 2 == getInfoRedList ? (document.getElementById("setclassList2").className = "extinction_this extinctionbackgroundcolor174", document.getElementById("settextstatus").textContent = "قريب من التهديد", document.getElementById("settextstatus").style.color = "rgb(174, 202, 0)") : 3 == getInfoRedList ? (document.getElementById("setclassList3").className = "extinction_this extinctionbackgroundcolor249", document.getElementById("settextstatus").textContent = "معرض للإنقراض", document.getElementById("settextstatus").style.color = "rgb(249, 190, 2)") : 4 == getInfoRedList ? (document.getElementById("setclassList4").className = "extinction_this extinctionbackgroundcolor235", document.getElementById("settextstatus").textContent = "مهدد بالإنقراض", document.getElementById("settextstatus").style.color = "rgb(235, 120, 0)") : 5 == getInfoRedList ? (document.getElementById("setclassList5").className = "extinction_this extinctionbackgroundcolor215", document.getElementById("settextstatus").textContent = "مهدد بشكل حرج بالانقراض", document.getElementById("settextstatus").style.color = "rgb(215, 41, 0)") : 6 == getInfoRedList ? (document.getElementById("setclassList6").className = "extinction_this extinctionbackgroundcolor60", document.getElementById("settextstatus").textContent = "منقرض من الحياة البرية", document.getElementById("settextstatus").style.color = "rgb(60, 0, 168)") : 7 == getInfoRedList ? (document.getElementById("setclassList7").className = "extinction_this extinctionbackgroundcolor25", document.getElementById("settextstatus").textContent = "منقرض تماماً", document.getElementById("settextstatus").style.color = "rgb(25, 25, 25)") : 8 == getInfoRedList ? (document.getElementById("settextstatus").textContent = "لا يتوفر عنه معلومات كافية", document.getElementById("settextstatus").style.color = "000000") : 9 == getInfoRedList ? (document.getElementById("settextstatus").textContent = "لم يقيَّم بعد", document.getElementById("settextstatus").style.color = "000000") : document.getElementById("settextstatus").textContent = "لم يتم تحديد المعلومات";
});
}
    




          
if(img2.length >= 1 || gets.ImgMaps.Answer.length >= 1){
	table.push('<div class="row row-cols-1 row-cols-md-3 g-4 mt-2">');
}
if (img2.length >= 1) {
  table.push('<div class="col m-auto mb-2"  style="width:12rem"><div class="card"><img src="'+img2+'" class="card-img-top" alt="'+gets.ImgSizeComparison.Question+'"><div class="card-body p-1 text-center border-top"><p class="card-text">'+gets.ImgSizeComparison.Question+'</p></div></div></div>');
  }
if (gets.ImgMaps.Answer.length >= 1) {
  table.push('<div class="col m-auto mb-2"  style="width:12rem"><div class="card"><img src="'+gets.ImgMaps.Answer+'" class="card-img-top" alt="'+gets.ImgMaps.Question+'"><div class="card-body p-1 text-center"><p class="card-text">'+gets.ImgMaps.Question+'</p></div></div></div>');

}  
if(img2.length >= 1 || gets.ImgMaps.Answer.length >= 1){
	table.push('</div>');
}











if (gets.DidYouKnow.Answer.length != 0) {
    var entries = gets.DidYouKnow.Answer || [];
    table.push("<hr/><center><div id='didyouknow'><p class='didyouknow0005'>هل تعلم</p><div class='didyouknow0004'></div><div class='owl-carousel owl-theme'>");
    for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
	infolistDidYouKnow = entry.info;
  table.push('<div class="Contentinfo">'+infolistDidYouKnow+'<br/><a class="didyouknow-twit" href="#" title="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></div>');
  }
 }
      
  table.push('</div></div></center>');
    
    
if (getInfoRedList >= 1 && getInfoRedList <= 9) {
$(document).ready(function() {

var modalcardinfs=document.getElementById("mymodalcardinf"),
btncardinf=document.getElementById("Btnscardinfcardinf"),
spancardinfo=document.getElementsByClassName("close")[0];

btncardinf.onclick = function() {
    modalcardinfs.style.display = "block"
}, spancardinfo.onclick = function() {
    modalcardinfs.style.display = "none", history.pushState("", document.title, window.location.pathname + window.location.search)
}, window.onclick = function(t) {
    t.target == modalcardinfs && (modalcardinfs.style.display = "none")
}, document.getElementById("answercardinfoimgsize") && $("#answercardinfoimgsize a").replaceWith(function() {
    return "<span>" + this.innerHTML + "</span>"
});


});
}

  document.getElementById('cardinfo').innerHTML = table.join('');
  
    
  
  });
$(document).ready(function() {
			setTimeout(function() {
				$('#didyouknow .owl-carousel').owlCarousel({
					responsiveClass: true,
					autoHeight: true,
					rtl: true,
					items: 1,
					autoplay: false,
					autoplayTimeout: 5000,
					autoplayHoverPause: true,
					stagePadding: 30,
					loop: true,
					margin: 50,
					nav: true,
				})
			}, 1000);
		});
}