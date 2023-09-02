

	
var ss = window.location.pathname;
var getnumCards = $.query.get("card");

if(ss == "/%d8%ad%d9%8a%d9%88%d8%a7%d9%86%d8%a7%d8%aa/%d8%af%d9%8a%d9%86%d8%a7%d8%b5%d9%88%d8%b1%d8%a7%d8%aa-%d8%ad%d9%8a%d9%88%d8%a7%d9%86%d8%a7%d8%aa-%d9%85%d8%a7-%d9%82%d8%a8%d9%84-%d8%a7%d9%84%d8%aa%d8%a7%d8%b1%d9%8a%d8%ae/"){
var getnumCards1 = getnumCards + 1;
var getlink = $('.entry .so-widget-sow-editor a:eq('+getnumCards1+')').attr('href');
if(getnumCards1 <= 29){
	
window.location.href = getlink + "?card=" + getnumCards1;
}else{
alert("تم الإنتهاء من العملية")
}
}else{





	
$("#topcontrol").remove();



var set = "<div id='getcard'>";
set +="<link href='https://get.doitf.com/jsite/bootstrap/bootstrap-5/dist/css/bootstrap.rtl.min.css?v=1.1'rel='stylesheet'crossorigin='anonymous'integrity='sha384-mUkCBeyHPdg0tqB6JDd+65Gpw5h/l8DKcCTV2D2UpaMMFd7Jo8A+mDAosaWgFBPl'><link href='https://get.doitf.com/font-awesome-4.7.0/css/font-awesome.min.css'rel='stylesheet'>";

set +="<div class='row g-3'><div id='CreateData'><div class='my-4'id='statuslogin'></div><div class='needs-validation'novalidate><div class='row g-3'><div class='accordion'id='accordionCard'><div class='accordion-item'><h2 class='accordion-header'id='heading1'><button class='accordion-button'type='button'aria-controls='getcollapse1'aria-expanded='true'data-bs-target='#getcollapse1'data-bs-toggle='collapse'>الإسم الشائع</button></h2><div class='accordion-collapse collapse show'id='getcollapse1'aria-labelledby='heading1'data-bs-parent='#accordionCard'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='g2'>الإسم الشائع</label><div class='input-group'><input class='form-control'id='g2'placeholder='أدخل إسم الحيوان'required><div class='invalid-feedback'>يرجى إدخال إسم الحيوان</div></div></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse2'aria-expanded='false'data-bs-target='#getcollapse2'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading2'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse2'aria-expanded='false'data-bs-target='#getcollapse2'data-bs-toggle='collapse'>صورة الحيوان</button></h2><div class='accordion-collapse collapse'id='getcollapse2'aria-labelledby='heading2'data-bs-parent='#accordionCard'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='g1'>صورة الحيوان <span class='text-muted'>(رابط URL)</span></label> <input class='form-control'id='g1'placeholder='أدخل رابط الصورة...'dir='ltr'></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse3'aria-expanded='false'data-bs-target='#getcollapse3'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading3'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse3'aria-expanded='false'data-bs-target='#getcollapse3'data-bs-toggle='collapse'>مقارنة الحجم</button></h2><div class='accordion-collapse collapse'id='getcollapse3'aria-labelledby='heading3'data-bs-parent='#accordionCard'><div class='row accordion-body'><div class='col-md-4'><label class='form-label'for='g9_1'>الحجم بالنسبة لل</label> <select class='form-select'id='g9_1'><option value='0'selected>اختر مقارنة ...</option><option value='1'>دبوس</option><option value='2'>فنجان</option><option value='3'>إنسان</option><option value='4'>حافلة</option></select></div><div class='col-md-8'><label class='form-label'for='g9'>رابط صورة المقارنة</label> <input class='form-control'id='g9'placeholder='أدخل رابط الصورة...'dir='ltr'></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse4'aria-expanded='false'data-bs-target='#getcollapse4'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading4'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse4'aria-expanded='false'data-bs-target='#getcollapse4'data-bs-toggle='collapse'>الاسم بالإنجليزية</button></h2><div class='accordion-collapse collapse'id='getcollapse4'aria-labelledby='heading4'data-bs-parent='#accordionCard'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='g2_En'>الاسم بالإنجليزية</label> <input class='form-control'id='g2_En'placeholder='إسم الحيوان بالإنجليزية'></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse5'aria-expanded='false'data-bs-target='#getcollapse5'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading5'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse5'aria-expanded='false'data-bs-target='#getcollapse5'data-bs-toggle='collapse'>الإسم العلمي</button></h2><div class='accordion-collapse collapse'id='getcollapse5'aria-labelledby='heading5'data-bs-parent='#accordionCard'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='g3'>الإسم العلمي</label> <input class='form-control'id='g3'placeholder='الاسم العلمي للحيوان'></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse6'aria-expanded='false'data-bs-target='#getcollapse6'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading6'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse6'aria-expanded='false'data-bs-target='#getcollapse6'data-bs-toggle='collapse'>الطائفة</button></h2><div class='accordion-collapse collapse'id='getcollapse6'aria-labelledby='heading6'data-bs-parent='#accordionCard'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='g4'>نوع الحيوان</label><div class='input-group'><div class='input-group-text'>النوع</div><select class='form-select'id='g4'><option value='None'selected>اختر النوع...</option><option value='Mammalia'>الثدييات</option><option value='Aves'>طيور</option><option value='Pisces'>أسماك</option><option value='Reptilia'>الزواحف</option><option value='Amphibia'>البرمائيات</option><option value='Insecta'>الحشرات</option><option value='Invertebrata'>اللافقاريات</option><option value='Dinosauria'>ديناصورات</option></select></div></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse7'aria-expanded='false'data-bs-target='#getcollapse7'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading_6'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse_6'aria-expanded='false'data-bs-target='#getcollapse_6'data-bs-toggle='collapse'>الطائفة</button></h2><div class='accordion-collapse collapse'id='getcollapse_6'aria-labelledby='heading_6'data-bs-parent='#accordionCard'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='AnimalClass'>طائفة الحيوان</label><div class='input-group'><div class='input-group-text'>الطائفة</div><select class='form-select'id='AnimalClass'><option value='None'selected>اختر الطائفة...</option><option value='Mammalia'>الثدييات</option><option value='Aves'>طيور</option><option value='Pisces'>أسماك</option><option value='Reptilia'>الزواحف</option><option value='Amphibia'>البرمائيات</option><option value='Insecta'>الحشرات</option><option value='Invertebrata'>اللافقاريات</option><option value='Dinosauria'>ديناصورات</option><option value='Actinopterygii'>شعاعيات الزعانف</option><option value='Chondrichthyes'>الأسماك الغضروفية</option><option value='Sarcopterygii'>لحميات الزعانف</option><option value='Arachnida'>العنكبيات</option><option value='Arthropoda'>المفصليات</option><option value='Worms'>الديدان</option><option value='Mollusks'>الرخويات</option><option value='Gastropoda'>بطنيات القدم</option><option value='Chilopoda'>شفويات الأرجل</option><option value='Cephalopoda'>رأسيات القدم</option><option value='Sponges'>إسفنجيات</option><option value='Bivalvia'>ذوات الصدفتين</option><option value='Crustaceans'>القشريات</option><option value='Echiniderms'>شوكيات الجلد</option><option value='Annelida'>حلقيات</option><option value='Malacostraca'>لينات الدرقة</option><option value='Scyphozoa'>فنجانيات</option><option value='Actiniaria'>شقائق نعمان البحر</option><option value='Anthozoa'>زهريات شعاعية</option><option value='Hydrozoa'>أبابيات</option><option value='Asteroidea'>نجم البحر</option></select></div></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse7'aria-expanded='false'data-bs-target='#getcollapse7'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading7'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse7'aria-expanded='false'data-bs-target='#getcollapse7'data-bs-toggle='collapse'>النظام الغذائي</button></h2><div class='accordion-collapse collapse'id='getcollapse7'aria-labelledby='heading7'data-bs-parent='#accordionCard'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='g5'>النظام الغذائي</label><div class='input-group'><div class='input-group-text'>النظام الغذائي</div><select class='form-select'id='g5'><option value='None'selected>اختر النظام...</option><option value='Carnivore'>آكل لحوم</option><option value='Herbivore'>آكل أعشاب</option><option value='Omnivore'>قارت</option><option value='Fungivore'>آكل فطريات</option><option value='Bacterivore'>آكل بكتيريا</option><option value='Planktivore'>يتغذى على العوالق</option></select></div></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse8'aria-expanded='false'data-bs-target='#getcollapse8'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading8'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse8'aria-expanded='false'data-bs-target='#getcollapse8'data-bs-toggle='collapse'>متوسط العمر</button></h2><div class='accordion-collapse collapse'id='getcollapse8'aria-labelledby='heading8'data-bs-parent='#accordionCard'><div class='row accordion-body'><div class='col-6'><label class='form-label'for='g6_1'>متوسط العمر</label></div><div class='col-6'><div class='form-check'><input class='form-check-input'id='g6_5'type='checkbox'onchange='g6_5()'> <label class='form-check-label'for='g6_5'>مخصص</label></div></div><div class='col-12 mt-0 g6_classhide'style='display:none'><label class='visually-hidden'for='g6_4'>نص مخصص</label><div class='input-group'><div class='input-group-text'>متوسط العمر</div><input class='form-control'id='g6_4'placeholder='أدخل نص مخصص لمتوسط العمر'></div></div><div class='col-6 mt-0 g6_classshow'><div class='input-group'><div class='input-group-text'>من</div><input class='form-control'id='g6_1'placeholder='أدخل رقم'type='number'value='0'></div></div><div class='col-6 mt-0 g6_classshow'><div class='input-group'><div class='input-group-text'>إلى</div><input class='form-control'id='g6_2'placeholder='أدخل رقم'type='number'value='0'></div></div><div class='col-12 mt-1 g6_classshow'><label class='visually-hidden'for='g6_3'>الزمن</label><div class='input-group'><div class='input-group-text'>الزمن</div><select class='form-select'id='g6_3'><option value='None'selected>حدد الزمن...</option><option value='hour'>ساعة</option><option value='day'>يوم</option><option value='week'>أسبوع</option><option value='Month'>شهر</option><option value='Year'>عام</option></select></div></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse9'aria-expanded='false'data-bs-target='#getcollapse9'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading9'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse9'aria-expanded='false'data-bs-target='#getcollapse9'data-bs-toggle='collapse'>الحجم</button></h2><div class='accordion-collapse collapse'id='getcollapse9'aria-labelledby='heading9'data-bs-parent='#accordionCard'><div class='row accordion-body'><div class='col-6'><label class='form-label'for='g7_1'>الحجم</label></div><div class='col-6'><div class='form-check'><input class='form-check-input'id='g7_5'type='checkbox'onchange='g7_5()'> <label class='form-check-label'for='g7_5'>مخصص</label></div></div><div class='col-12 mt-0 g7_classhide'style='display:none'><label class='visually-hidden'for='g7_4'>نص مخصص</label><div class='input-group'><div class='input-group-text'>الحجم</div><input class='form-control'id='g7_4'placeholder='أدخل نص مخصص للحجم'></div></div><div class='col-6 mt-0 g7_classshow'><div class='input-group'><div class='input-group-text'>من</div><input class='form-control'id='g7_1'placeholder='أدخل رقم'type='number'value='0'></div></div><div class='col-6 mt-0 g7_classshow'><div class='input-group'><div class='input-group-text'>إلى</div><input class='form-control'id='g7_2'placeholder='أدخل رقم'type='number'value='0'></div></div><div class='col-12 mt-1 g7_classshow'><label class='visually-hidden'for='g7_3'>وحدة القياس</label><div class='input-group'><div class='input-group-text'>وحدة القياس</div><select class='form-select'id='g7_3'><option value='None'selected>حدد الوحدة...</option><option value='mm'>مليمتر</option><option value='cm'>سنتيمتر</option><option value='m'>متر</option></select></div></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse10'aria-expanded='false'data-bs-target='#getcollapse10'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading10'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse10'aria-expanded='false'data-bs-target='#getcollapse10'data-bs-toggle='collapse'>الوزن</button></h2><div class='accordion-collapse collapse'id='getcollapse10'aria-labelledby='heading10'data-bs-parent='#accordionCard'><div class='row accordion-body'><div class='col-6'><label class='form-label'for='g8_1'>الوزن</label></div><div class='col-6'><div class='form-check'><input class='form-check-input'id='g8_5'type='checkbox'onchange='g8_5()'> <label class='form-check-label'for='g8_5'>مخصص</label></div></div><div class='col-12 mt-0 g8_classhide'style='display:none'><label class='visually-hidden'for='g8_4'>نص مخصص</label><div class='input-group'><div class='input-group-text'>الوزن</div><input class='form-control'id='g8_4'placeholder='أدخل نص مخصص للوزن'></div></div><div class='col-6 mt-0 g8_classshow'><div class='input-group'><div class='input-group-text'>من</div><input class='form-control'id='g8_1'placeholder='أدخل رقم'type='number'value='0'></div></div><div class='col-6 mt-0 g8_classshow'><div class='input-group'><div class='input-group-text'>إلى</div><input class='form-control'id='g8_2'placeholder='أدخل رقم'type='number'value='0'></div></div><div class='col-12 mt-1 g8_classshow'><label class='visually-hidden'for='g8_3'>وحدة الكتلة</label><div class='input-group'><div class='input-group-text'>الوحدة</div><select class='form-select'id='g8_3'><option value='None'selected>حدد الوحدة...</option><option value='g'>غرام</option><option value='kg'>كيلوغرام</option><option value='t'>طن</option></select></div></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse11'aria-expanded='false'data-bs-target='#getcollapse11'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading11'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse11'aria-expanded='false'data-bs-target='#getcollapse11'data-bs-toggle='collapse'>إتجاه السكان الحالي</button></h2><div class='accordion-collapse collapse'id='getcollapse11'aria-labelledby='heading11'data-bs-parent='#accordionCard'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='g10'>إتجاه السكان الحالي</label> <select class='form-select'id='g10'><option value='None'selected>اختر حالة...</option><option value='Decreasing'>تناقص</option><option value='stable'>مستقر</option><option value='Increasing'>إزدياد</option><option value='unknown'>غير معروف</option></select></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse12'aria-expanded='false'data-bs-target='#getcollapse12'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading12'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse12'aria-expanded='false'data-bs-target='#getcollapse12'data-bs-toggle='collapse'>حالة القائمة الحمراء</button></h2><div class='accordion-collapse collapse'id='getcollapse12'aria-labelledby='heading12'data-bs-parent='#accordionCard'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='g11'>حالة القائمة الحمراء</label> <select class='form-select'id='g11'><option value='0'selected>إختر حالة...</option><option value='1'>1 - الأنواع غير المهددة</option><option value='2'>2 - الأنواع القريبة من التهديد</option><option value='3'>3 - الأنواع المعرضة للانقراض</option><option value='4'>4 - الأنواع المهددة بالانقراض</option><option value='5'>5 - الأنواع المهددة بشكل حرج بالانقراض</option><option value='6'>6 - الأنواع المنقرضة من الحياة البرية</option><option value='7'>7 - الأنواع المنقرضة</option><option value='8'>8 - الأنواع التي لا تتوفر عنها معلومات كافية</option><option value='9'>9 - الأنواع التي لم تقيَّم</option></select></div></div></div></div></div><button class='collapsed btn btn-sm my-2 btn-secondary'type='button'aria-controls='collapseall'aria-expanded='false'data-bs-target='#collapseall'data-bs-toggle='collapse'><i class='fa-sliders-h fas'style='padding:0 5px'></i>إدخال المزيد من المعلومات</button><div class='row g-3 collapse mx-0 px-0'id='collapseall'><div class='accordion'id='accordionCardMore'><div class='accordion-item'><h2 class='accordion-header'id='heading13'><button class='accordion-button'type='button'aria-controls='getcollapse13'aria-expanded='true'data-bs-target='#getcollapse13'data-bs-toggle='collapse'>الفصيلة</button></h2><div class='accordion-collapse show'id='getcollapse13'aria-labelledby='heading13'data-bs-parent='#accordionCardMore'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='ga1'>الفصيلة</label> <input class='form-control'id='ga1'placeholder='فصيلة الحيوان'></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse14'aria-expanded='false'data-bs-target='#getcollapse14'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading14'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse14'aria-expanded='false'data-bs-target='#getcollapse14'data-bs-toggle='collapse'>الرتبة</button></h2><div class='accordion-collapse collapse'id='getcollapse14'aria-labelledby='heading14'data-bs-parent='#accordionCardMore'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='ga1_n'>الرتبة</label> <input class='form-control'id='ga1_n'placeholder='رتبة الحيوان'></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse15'aria-expanded='false'data-bs-target='#getcollapse15'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading15'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse15'aria-expanded='false'data-bs-target='#getcollapse15'data-bs-toggle='collapse'>السرعة</button></h2><div class='accordion-collapse collapse'id='getcollapse15'aria-labelledby='heading15'data-bs-parent='#accordionCardMore'><div class='row accordion-body'><div class='col-6'><label class='form-label'for='ga3_1'>السرعة</label></div><div class='col-6'><div class='form-check'><input class='form-check-input'id='ga3_5'type='checkbox'onchange='ga3_5()'> <label class='form-check-label'for='ga3_5'>مخصص</label></div></div><div class='col-12 mt-0 ga3_classhide'style='display:none'><label class='visually-hidden'for='ga3_4'>نص مخصص</label><div class='input-group'><div class='input-group-text'>الوزن</div><input class='form-control'id='ga3_4'placeholder='أدخل نص مخصص للسرعة'></div></div><div class='col-6 mt-0 ga3_classshow'><div class='input-group'><div class='input-group-text'>من</div><input class='form-control'id='ga3_1'placeholder='أدخل رقم'type='number'value='0'></div></div><div class='col-6 mt-0 ga3_classshow'><div class='input-group'><div class='input-group-text'>إلى</div><input class='form-control'id='ga3_2'placeholder='أدخل رقم'type='number'value='0'></div></div><div class='col-12 mt-1 ga3_classshow'><label class='visually-hidden'for='ga3_3'>المسافة/الزمن</label><div class='input-group'><div class='input-group-text'>المسافة/الزمن</div><select class='form-select'id='ga3_3'><option value='None'>حدد المسافة...</option><option value='kmh'selected>كم/ساعة</option></select></div></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse16'aria-expanded='false'data-bs-target='#getcollapse16'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading16'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse16'aria-expanded='false'data-bs-target='#getcollapse16'data-bs-toggle='collapse'>مدة الحمل</button></h2><div class='accordion-collapse collapse'id='getcollapse16'aria-labelledby='heading16'data-bs-parent='#accordionCardMore'><div class='row accordion-body'><div class='col-6'><label class='form-label'for='ga4_1'>مدة الحمل</label></div><div class='col-6'><div class='form-check'><input class='form-check-input'id='ga4_5'type='checkbox'onchange='ga4_5()'> <label class='form-check-label'for='ga4_5'>مخصص</label></div></div><div class='col-12 mt-0 ga4_classhide'style='display:none'><label class='visually-hidden'for='ga4_4'>نص مخصص</label><div class='input-group'><div class='input-group-text'>مدة الحمل</div><input class='form-control'id='ga4_4'placeholder='أدخل نص مخصص لمدة الحمل'></div></div><div class='col-6 mt-0 ga4_classshow'><div class='input-group'><div class='input-group-text'>من</div><input class='form-control'id='ga4_1'placeholder='أدخل رقم'type='number'value='0'></div></div><div class='col-6 mt-0 ga4_classshow'><div class='input-group'><div class='input-group-text'>إلى</div><input class='form-control'id='ga4_2'placeholder='أدخل رقم'type='number'value='0'></div></div><div class='col-12 mt-1 ga4_classshow'><label class='visually-hidden'for='ga4_3'>الزمن</label><div class='input-group'><div class='input-group-text'>الزمن</div><select class='form-select'id='ga4_3'><option value='None'selected>حدد الزمن...</option><option value='1'>يوم</option><option value='2'>شهر</option><option value='3'>عام</option></select></div></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse17'aria-expanded='false'data-bs-target='#getcollapse17'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading17'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse17'aria-expanded='false'data-bs-target='#getcollapse17'data-bs-toggle='collapse'>عدد الصغار</button></h2><div class='accordion-collapse collapse'id='getcollapse17'aria-labelledby='heading17'data-bs-parent='#accordionCardMore'><div class='row accordion-body'><div class='col-6'><label class='form-label'for='ga5_1'>عدد الصغار</label></div><div class='col-6'><div class='form-check'><input class='form-check-input'id='ga5_5'type='checkbox'onchange='ga5_5()'> <label class='form-check-label'for='ga5_5'>مخصص</label></div></div><div class='col-12 mt-0 ga5_classhide'style='display:none'><label class='visually-hidden'for='ga5_4'>نص مخصص</label><div class='input-group'><div class='input-group-text'>عدد الصغار</div><input class='form-control'id='ga5_4'placeholder='أدخل نص مخصص لعدد الصغار'></div></div><div class='col-6 mt-0 ga5_classshow'><div class='input-group'><div class='input-group-text'>من</div><input class='form-control'id='ga5_1'placeholder='أدخل رقم'type='number'value='0'></div></div><div class='col-6 mt-0 ga5_classshow'><div class='input-group'><div class='input-group-text'>إلى</div><input class='form-control'id='ga5_2'placeholder='أدخل رقم'type='number'value='0'></div></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse18'aria-expanded='false'data-bs-target='#getcollapse18'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading18'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse18'aria-expanded='false'data-bs-target='#getcollapse18'data-bs-toggle='collapse'>الموطن البيئي</button></h2><div class='accordion-collapse collapse'id='getcollapse18'aria-labelledby='heading18'data-bs-parent='#accordionCardMore'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='ga2'>الموطن البيئي</label> <input class='form-control'id='ga2'placeholder='الموطن البيئي للحيوان'></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse19'aria-expanded='false'data-bs-target='#getcollapse19'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading19'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse19'aria-expanded='false'data-bs-target='#getcollapse19'data-bs-toggle='collapse'>اللون</button></h2><div class='accordion-collapse collapse'id='getcollapse19'aria-labelledby='heading19'data-bs-parent='#accordionCardMore'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='ga6'>اللون</label> <input class='form-control'id='ga6'placeholder='ألوان الحيوان'></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse20'aria-expanded='false'data-bs-target='#getcollapse20'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading20'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse20'aria-expanded='false'data-bs-target='#getcollapse20'data-bs-toggle='collapse'>الأعداء</button></h2><div class='accordion-collapse collapse'id='getcollapse20'aria-labelledby='heading20'data-bs-parent='#accordionCardMore'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='ga7'>الأعداء</label> <input class='form-control'id='ga7'placeholder='أعداء الحيوان'></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse21'aria-expanded='false'data-bs-target='#getcollapse21'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading21'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse21'aria-expanded='false'data-bs-target='#getcollapse21'data-bs-toggle='collapse'>الغذاء</button></h2><div class='accordion-collapse collapse'id='getcollapse21'aria-labelledby='heading21'data-bs-parent='#accordionCardMore'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='ga13'>الغذاء</label> <input class='form-control'id='ga13'placeholder='طعام الحيوان'></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse22'aria-expanded='false'data-bs-target='#getcollapse22'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading22'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse22'aria-expanded='false'data-bs-target='#getcollapse22'data-bs-toggle='collapse'>إدخال معلومات خاصة</button></h2><div class='accordion-collapse collapse'id='getcollapse22'aria-labelledby='heading22'data-bs-parent='#accordionCardMore'><div class='row accordion-body'><div class='col-12 mt-1'><div class='input-group'><input class='form-control input-group-text'id='ga8_1'placeholder='أدخل معلومة'> <input class='form-control w-25'id='ga8'placeholder='أدخل إجابة المعلومة'></div></div><div class='col-12 mt-1'><div class='input-group'><input class='form-control input-group-text'id='ga9_1'placeholder='أدخل معلومة'> <input class='form-control w-25'id='ga9'placeholder='أدخل إجابة المعلومة'></div></div><div class='col-12 mt-1'><div class='input-group'><input class='form-control input-group-text'id='ga10_1'placeholder='أدخل معلومة'> <input class='form-control w-25'id='ga10'placeholder='أدخل إجابة المعلومة'></div></div><div class='col-12 mt-1'><div class='input-group'><input class='form-control input-group-text'id='ga11_1'placeholder='أدخل معلومة'> <input class='form-control w-25'id='ga11'placeholder='أدخل إجابة المعلومة'></div></div><button class='collapsed btn btn-sm my-2 btn-primary col-auto mx-3'type='button'aria-controls='getcollapse23'aria-expanded='false'data-bs-target='#getcollapse23'data-bs-toggle='collapse'>التالي</button></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading23'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse23'aria-expanded='false'data-bs-target='#getcollapse23'data-bs-toggle='collapse'>هل تعلم</button></h2><div class='accordion-collapse collapse'id='getcollapse23'aria-labelledby='heading23'data-bs-parent='#accordionCardMore'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='DidYoUKnowNumfirst'>أدخل معلومة في كل خانة</label><div id='DidYoUKnowNum'><div class='input-group mb-1'><span class='input-group-text'>1</span> <span class='input-group-text'>هل تعلم</span> <input class='form-control infonumbers'id='DidYoUKnowNumfirst'placeholder='أدخل معلومة 1'></div></div><button class='btn btn-sm my-2 btn-success'type='button'id='addnewinfo'>إضافة خانة جديدة <i class='fa fa-plus'aria-hidden='true'></i></button></div></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading24'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse24'aria-expanded='false'data-bs-target='#getcollapse24'data-bs-toggle='collapse'>صور متعددة</button></h2><div class='accordion-collapse collapse'id='getcollapse24'aria-labelledby='heading24'data-bs-parent='#accordionCardMore'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='MultipleimagesNumfirst'>أدخل رابط صورة في كل خانة</label><div id='MultipleimagesNum'></div><button class='btn btn-sm my-2 btn-success'type='button'id='addnewMultipleimages'>إضافة خانة جديدة <i class='fa fa-plus'aria-hidden='true'></i></button></div></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading26'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse26'aria-expanded='false'data-bs-target='#getcollapse26'data-bs-toggle='collapse'>خارطة تواجد الحيوانات</button></h2><div class='accordion-collapse collapse'id='getcollapse26'aria-labelledby='heading26'data-bs-parent='#accordionCardMore'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='ImgMaps'>رابط صورة الخارطة</label> <input class='form-control'id='ImgMaps'placeholder='أدخل رابط صورة الخارطة'></div></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading27'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse27'aria-expanded='false'data-bs-target='#getcollapse27'data-bs-toggle='collapse'>صورة الغلاف</button></h2><div class='accordion-collapse collapse'id='getcollapse27'aria-labelledby='heading27'data-bs-parent='#accordionCardMore'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='ImgCover'>رابط صورة الغلاف</label> <input class='form-control'id='ImgCover'placeholder='أدخل رابط صورة غلاف البطاقة'></div></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading28'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse28'aria-expanded='false'data-bs-target='#getcollapse28'data-bs-toggle='collapse'>المراجع</button></h2><div class='accordion-collapse collapse'id='getcollapse28'aria-labelledby='heading28'data-bs-parent='#accordionCardMore'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='SourceInfo_Title'>عنوان المراجع</label> <input class='form-control'id='SourceInfo_Title'placeholder='أدخل عنوان الموضوع'></div><div class='col-12 mt-1'><label class='form-label'for='SourceInfo_Link'>رابط المراجع</label> <input class='form-control'id='SourceInfo_Link'placeholder='أدخل رابط الموضوع'></div></div></div></div><div class='accordion-item'><h2 class='accordion-header'id='heading29'><button class='collapsed accordion-button'type='button'aria-controls='getcollapse29'aria-expanded='false'data-bs-target='#getcollapse29'data-bs-toggle='collapse'>html table</button></h2><div class='accordion-collapse collapse'id='getcollapse29'aria-labelledby='heading29'data-bs-parent='#accordionCardMore'><div class='row accordion-body'><div class='col-12'><label class='form-label'for='htmlTables'>html table</label> <textarea class='form-control mb-2'cols='36'dir='ltr'id='htmlTables'placeholder='more....'rows='4'></textarea></div></div></div></div></div></div></div></div></div></div>";

set +="<button class='btn btn-primary btn-sm'id='SendSettings'onclick='yalla()'type='button'><span id='viewsender'>إنشاء </span><i aria-hidden='true'class='fa fa-eye'></i></button>";






set +="<iframe width='200' height='200' name='sendcodenow' id='frame1'></iframe>";

set +="<form action='https://script.google.com/macros/s/AKfycbwNvLL5_H2Ndtue_SRCReCkeCFq7ZWFoKIt0ck8GhPI7IKaqIzptz-m0w/exec'class='gform pure-form pure-form-stacked'data-email='example@email.net'method='POST'target='sendcodenow'><div class='form-sheet'style='display:none'><textarea id='Published'name='Published'rows='1'>1</textarea> <textarea id='UserStatus'name='UserStatus'rows='1'>1</textarea> <textarea id='CommonName_Question'name='CommonName_Question'rows='1'></textarea> <textarea id='CommonName_Answer'name='CommonName_Answer'rows='1'></textarea> <textarea id='CommonName_Answer_En'name='CommonName_Answer_En'rows='1'></textarea> <textarea id='ScientificName_Question'name='ScientificName_Question'rows='1'></textarea> <textarea id='ScientificName_Answer'name='ScientificName_Answer'rows='1'></textarea> <textarea id='Type_Question'name='Type_Question'rows='1'></textarea> <textarea id='Type_Answer'name='Type_Answer'rows='1'></textarea> <textarea id='Order_Question'name='Order_Question'rows='1'></textarea> <textarea id='Order_Answer'name='Order_Answer'rows='1'></textarea> <textarea id='Subfamily_Question'name='Subfamily_Question'rows='1'></textarea> <textarea id='Subfamily_Answer'name='Subfamily_Answer'rows='1'></textarea> <textarea id='Diet_Question'name='Diet_Question'rows='1'></textarea> <textarea id='Diet_Answer'name='Diet_Answer'rows='1'></textarea> <textarea id='Age_Question'name='Age_Question'rows='1'></textarea> <textarea id='Age_Answer'name='Age_Answer'rows='1'></textarea> <textarea id='Size_Question'name='Size_Question'rows='1'></textarea> <textarea id='Size_Answer'name='Size_Answer'rows='1'></textarea> <textarea id='Weight_Question'name='Weight_Question'rows='1'></textarea> <textarea id='Weight_Answer'name='Weight_Answer'rows='1'></textarea> <textarea id='PopulationTrend_Question'name='PopulationTrend_Question'rows='1'></textarea> <textarea id='PopulationTrend_Answer'name='PopulationTrend_Answer'rows='1'></textarea> <textarea id='PopulationTrend_Code'name='PopulationTrend_Code'rows='1'></textarea> <textarea id='PopulationTrend_Num'name='PopulationTrend_Num'rows='1'></textarea> <textarea id='RedList_Question'name='RedList_Question'rows='1'></textarea> <textarea id='RedList_Answer'name='RedList_Answer'rows='1'></textarea> <textarea id='RedList_Num'name='RedList_Num'rows='1'></textarea> <textarea id='Speed_Question'name='Speed_Question'rows='1'></textarea> <textarea id='Speed_Answer'name='Speed_Answer'rows='1'></textarea> <textarea id='DurationPregnancy_Question'name='DurationPregnancy_Question'rows='1'></textarea> <textarea id='DurationPregnancy_Answer'name='DurationPregnancy_Answer'rows='1'></textarea> <textarea id='NumBirths_Question'name='NumBirths_Question'rows='1'></textarea> <textarea id='NumBirths_Answer'name='NumBirths_Answer'rows='1'></textarea> <textarea id='EcologicalHabitat_Question'name='EcologicalHabitat_Question'rows='1'></textarea> <textarea id='EcologicalHabitat_Answer'name='EcologicalHabitat_Answer'rows='1'></textarea> <textarea id='Color_Question'name='Color_Question'rows='1'></textarea> <textarea id='Color_Answer'name='Color_Answer'rows='1'></textarea> <textarea id='Enemy_Question'name='Enemy_Question'rows='1'></textarea> <textarea id='Enemy_Answer'name='Enemy_Answer'rows='1'></textarea> <textarea id='FeedOn_Question'name='FeedOn_Question'rows='1'></textarea> <textarea id='FeedOn_Answer'name='FeedOn_Answer'rows='1'></textarea> <textarea id='ImgInDrive_Question'name='ImgInDrive_Question'rows='1'></textarea> <textarea id='ImgInDrive_Answer'name='ImgInDrive_Answer'rows='1'>https://drive.google.com/file/d/1jryqqXjG2kV1c352DjXS6G-IwIwEopBx</textarea> <textarea id='JsonFileIdInDrive_Question'name='JsonFileIdInDrive_Question'rows='1'></textarea> <textarea id='JsonFileIdInDrive_Answer'name='JsonFileIdInDrive_Answer'rows='1'></textarea> <textarea id='Img_Question'name='Img_Question'rows='1'></textarea> <textarea id='Img_Answer'name='Img_Answer'rows='1'></textarea> <textarea id='ImgCover_Question'name='ImgCover_Question'rows='1'></textarea> <textarea id='ImgCover_Answer'name='ImgCover_Answer'rows='1'></textarea><textarea id='ImgMaps_Question'name='ImgMaps_Question'rows='1'></textarea> <textarea id='ImgMaps_Answer'name='ImgMaps_Answer'rows='1'></textarea> <textarea id='MultipleImages_Question'name='MultipleImages_Question'rows='1'></textarea> <textarea id='MultipleImages_Answer'name='MultipleImages_Answer'rows='1'></textarea> <textarea id='ImgSizeComparison_Question'name='ImgSizeComparison_Question'rows='1'></textarea> <textarea id='ImgSizeComparison_Answer'name='ImgSizeComparison_Answer'rows='1'></textarea> <textarea id='info1_Question'name='info1_Question'rows='1'></textarea> <textarea id='info1_Answer'name='info1_Answer'rows='1'></textarea> <textarea id='info2_Question'name='info2_Question'rows='1'></textarea> <textarea id='info2_Answer'name='info2_Answer'rows='1'></textarea> <textarea id='info3_Question'name='info3_Question'rows='1'></textarea> <textarea id='info3_Answer'name='info3_Answer'rows='1'></textarea> <textarea id='info4_Question'name='info4_Question'rows='1'></textarea> <textarea id='info4_Answer'name='info4_Answer'rows='1'></textarea> <textarea id='DidYouKnow_Question'name='DidYouKnow_Question'rows='1'></textarea> <textarea id='DidYouKnow_Answer'name='DidYouKnow_Answer'rows='1'></textarea> <textarea id='SourceInfo_Question'name='SourceInfo_Question'rows='1'></textarea> <textarea id='SourceInfo_Answer_Title'name='SourceInfo_Answer_Title'rows='1'></textarea> <textarea id='SourceInfo_Answer_link'name='SourceInfo_Answer_link'rows='1'></textarea> <textarea id='PostUrlInSite_Question'name='PostUrlInSite_Question'rows='1'></textarea> <textarea id='PostUrlInSite_Answer'name='PostUrlInSite_Answer'rows='1'></textarea> <textarea id='PostIdInSite_Question'name='PostIdInSite_Question'rows='1'></textarea> <textarea id='PostIdInSite_Answer'name='PostIdInSite_Answer'rows='1'></textarea> <textarea id='html_table'name='html_table'rows='1'></textarea><textarea id='UserName'name='UserName'rows='1'></textarea> <textarea id='UserEmail'name='UserEmail'rows='1'></textarea> <textarea id='UserAccountImg'name='UserAccountImg'rows='1'></textarea> <textarea id='UserAccountId'name='UserAccountId'rows='1'></textarea> <textarea id='UserLoginWith'name='UserLoginWith'rows='1'></textarea> <textarea id='Name_publishing'name='Name_publishing'rows='1'></textarea> <textarea id='PageTitle'name='PageTitle'rows='1'></textarea> <textarea id='PageLink'name='PageLink'rows='1'></textarea> <textarea id='TheState'name='TheState'rows='1'></textarea> <textarea id='CountryCode'name='CountryCode'rows='1'></textarea> <textarea id='IPAddress'name='IPAddress'rows='1'></textarea> <textarea id='ScreenWidth'name='ScreenWidth'rows='1'></textarea> <textarea id='ScreenHeight'name='ScreenHeight'rows='1'></textarea> <textarea id='MoreInformation'name='MoreInformation'rows='1'></textarea> <textarea id='Class_Question'name='Class_Question'rows='1'></textarea> <textarea id='Class_AnswerAR'name='Class_AnswerAR'rows='1'></textarea> <textarea id='Class_AnswerEN'name='Class_AnswerEN'rows='1'></textarea><textarea id='dateID'name='dateID'rows='1'></textarea><textarea id='SummaryPage_Answer'name='SummaryPage_Answer'rows='1'></textarea> <button class='button-success button-xlarge pure-button'id='sendToSheetHide'></button></div><div class='thankyou_message'style='display:none'><h2><em>Thanks</em> for contacting us! We will get back to you soon!</h2></div></form>";
set +="<button class='awsub btn btn-primary btn-sm flat-button-white my-4 ripple'onclick='test()'style='position:fixed;bottom:0;right:0'type='button'><div class='splash-wrapper'></div>اختبار</button>";
set +="<div id='tablediv'><table id='tableid'></table></div>";


set +="</div>";








document.getElementById("comments").innerHTML = set;



   // انشاء الرمز
  function g6_5(){
if($('input#g6_5').is(':checked')){
$('.g6_classshow').css('display','none');
$('.g6_classhide').css('display','block');
}else{
$('.g6_classhide').css('display','none');
$('.g6_classshow').css('display','block');
}
}
function g7_5(){
if($('input#g7_5').is(':checked')){
$('.g7_classshow').css('display','none');
$('.g7_classhide').css('display','block');
}else{
$('.g7_classhide').css('display','none');
$('.g7_classshow').css('display','block');
}
}
function g8_5(){
if($('input#g8_5').is(':checked')){
$('.g8_classshow').css('display','none');
$('.g8_classhide').css('display','block');
}else{
$('.g8_classhide').css('display','none');
$('.g8_classshow').css('display','block');
}
}

function ga3_5(){
if($('input#ga3_5').is(':checked')){
$('.ga3_classshow').css('display','none');
$('.ga3_classhide').css('display','block');
}else{
$('.ga3_classhide').css('display','none');
$('.ga3_classshow').css('display','block');
}
}

function ga4_5(){
if($('input#ga4_5').is(':checked')){
$('.ga4_classshow').css('display','none');
$('.ga4_classhide').css('display','block');
}else{
$('.ga4_classhide').css('display','none');
$('.ga4_classshow').css('display','block');
}
}
function ga5_5(){
if($('input#ga5_5').is(':checked')){
$('.ga5_classshow').css('display','none');
$('.ga5_classhide').css('display','block');
}else{
$('.ga5_classhide').css('display','none');
$('.ga5_classshow').css('display','block');
}
}


 function yalla(){
 var g1 = $('#g1').val();
 var g1_01 = g1.replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi, '/w136-h136-p/');
  g1_01 = g1_01.replace('=s120', '=w136-h136-p');
 
 var g9 = $('#g9').val();
 var g9_01 = g9.replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi, '/s160/');

   
 var g9_1 = 'الحجم بالنسبة لل'+$("#g9_1 option:selected").text();
 var g9_2 = $('#g9_1').val();
   if(g9_2 == 0){
     g9_1 = 'مقارنة الحجم';
   }else{
     g9_1 = 'الحجم بالنسبة لل'+$("#g9_1 option:selected").text();
   }
   
 
 var img1_url152 = g1_01;//صورة الحيوان حجم صغير
 var img1_url1600 = g1_01.replace('/w136-h136-p/','/s1600/');//صورة الحيوان حجم كبيرة
 img1_url1600 = img1_url1600.replace('=w136-h136-p', '=s1600');
   
 var img2_url160 = g9_01;//صورة مقارنة
 var img2_url1600 = g9_01.replace('/s160/','/s1600/');//صورة مقارنة
 
  var g2 = $('#g2').val();//الاسم الشائع
  var g2_En = $('#g2_En').val();//الاسم بالإنجليزية
  var g3 = $('#g3').val();//الاسم العلمي
  var g4 = $('#g4').val();//النوع
	if(g4 == 'None'){
		g4 = "";
	}else{
   		g4 = $("#g4 option:selected").text();
    }
	var g4_1 = $('#g4').val();//النوع
    var Birthandeggs = 'عدد الصغار';
	if(g4_1 != 'None'&&g4_1 != 'Mammals'){
     Birthandeggs = 'عدد البيض';
     $('#Birthandeggs').html('عدد البيض')
    }else{
     Birthandeggs = 'عدد الصغار';
     $('#Birthandeggs').html('عدد الصغار');
    }
 
 
 
 
 
  var g5 = $('#g5').val();//النظام الغذائي
	if(g5 == 'None'){
		g5 = "";
	}else{
    	g5 = $("#g5 option:selected").text();
    }
  var g6 = $('#g6_4').val();//متوسط العمر
  var g6_a = 0;
  if($('input#g6_5').is(':checked')){
  g6 = $('#g6_4').val();
 	if(g6 ==''){
 	 g6_a = 0;
  	  }else{
     g6_a = 1;
      }
  }else{
  var g6_1 = $('#g6_1').val();//من
  var g6_2 = $('#g6_2').val();//الى
  var g6_3 = $("#g6_3 option:selected").text();//الزمن
  	if(g6_1 == 0||g6_1 == ''){
    g6 = g6_2 + ' ' + g6_3
    }else{
    g6 = g6_1 + '–' + g6_2 + ' ' + g6_3
    }
 	if(g6_2 == 0){
 	 g6_a = 0;
  	}else{
    g6_a = 1;
    }
  }
 var g6_3_a = $("#g6_3").val();
 var g6_3_b = 0;
if (g6_3_a == 'None'){
g6_3_b = 0;
}else{
g6_3_b = 1;
}

 
  var g7 = $('#g7_4').val();//الحجم
  if($('input#g7_5').is(':checked')){
  g7 = $('#g7_4').val();
  }else{
  var g7_1 = $('#g7_1').val();//من
  var g7_2 = $('#g7_2').val();//الى
  var g7_3 = $("#g7_3 option:selected").text();//الكتلة
  	if(g7_1 == 0||g7_1 == ''){
    g7 = g7_2 + ' ' + g7_3
    }else{
    g7 = g7_1 + '–' + g7_2 + ' ' + g7_3
    }
  }
  var g7_3_a = $("#g7_3").val();
  
  
  var g8 = $('#g8_4').val();//الوزن
  if($('input#g8_5').is(':checked')){
  g8 = $('#g8_4').val();
  }else{
  var g8_1 = $('#g8_1').val();//من
  var g8_2 = $('#g8_2').val();//الى
  var g8_3 = $("#g8_3 option:selected").text();//الكتلة
  	if(g8_1 == 0||g8_1 == ''){
    g8 = g8_2 + ' ' + g8_3
    }else{
    g8 = g8_1 + '–' + g8_2 + ' ' + g8_3
    }
  }
 var g8_3_a = $("#g8_3").val();

 
 
    var g10 = $('#g10').val();//اتجاه السكان
 	if(g10=='Decreasing'){
    g10 = '-';
    }else if(g10=='stable'){
    g10 = '-+';
    }else if(g10=='Increasing'){
    g10 = '+';
    }
 
   var g11 = $('#g11').val();//الحالة
   var g12 = ''//هل تعلم
   var g12_json = '';
 
 
 

var MImages = '';
var MImages_json = '';
var getMultipleimagesnumbers = $("#MultipleimagesNum .Multipleimages");
var Multipleimagesvalnumber = "";
var i;
for (i = 0; i < getMultipleimagesnumbers.length; i++) {
  Multipleimagesvalnumber += $('#CreateData .Multipleimages:eq('+i+')').val()+ "\n";
}
	var SortingImgs = Multipleimagesvalnumber;
	SortingImgs = SortingImgs.trim();
	SortingImgs = SortingImgs.replace(/(\r\n|\n|\r)/gm,'\r\n\r\n');
	SortingImgs = SortingImgs.replace(/(\r\n|\r|\n){2,}/g, '$1\n');
	SortingImgs = SortingImgs.replace(/(\n\n)/gm, '</li><li>');
	SortingImgs = SortingImgs.replace(/(\r\n|\n|\r)/gm,'');
	SortingImgs = SortingImgs.replace(/<\/li>/gm, '</li>');
    if(SortingImgs ==""){
    SortingImgs = "";
    }else{
	SortingImgs = "<li>" + SortingImgs + "</li>"; 
	}
   


//for json
	var SortingImgsJson = Multipleimagesvalnumber;
	SortingImgsJson = SortingImgsJson.trim();
	SortingImgsJson = SortingImgsJson.replace(/(\r\n|\n|\r)/gm,'\r\n\r\n');
	SortingImgsJson = SortingImgsJson.replace(/(\r\n|\r|\n){2,}/g, '$1\n');
	SortingImgsJson = SortingImgsJson.replace(/(\n\n)/gm, '}{"img":"');
	SortingImgsJson = SortingImgsJson.replace(/(\r\n|\n|\r)/gm,'"');
	SortingImgsJson = SortingImgsJson.replace(/}/gm, '},');
    if(SortingImgsJson ==""){
    SortingImgsJson = "";
    }else{
	SortingImgsJson = '{"img":"' + SortingImgsJson + '"}'; 
	}
   
if(SortingImgs == ''){
MImages = '';
MImages_json = '';
}else{
MImages = '<ul>'+SortingImgs+'</ul>';
MImages_json = SortingImgsJson;
 }
   
 
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
var getinfonumbers = $("#DidYoUKnowNum .infonumbers");
var infovalnumber = "";
var i;
for (i = 0; i < getinfonumbers.length; i++) {
  infovalnumber += $('#CreateData .infonumbers:eq('+i+')').val()+ "\n";
}
	var SortingInfo = infovalnumber;
	SortingInfo = SortingInfo.trim();
	SortingInfo = SortingInfo.replace(/(\r\n|\n|\r)/gm,'\r\n\r\n');
	SortingInfo = SortingInfo.replace(/(\r\n|\r|\n){2,}/g, '$1\n');
	SortingInfo = SortingInfo.replace(/(\n\n)/gm, '</li><li>');
	SortingInfo = SortingInfo.replace(/(\r\n|\n|\r)/gm,'');
	SortingInfo = SortingInfo.replace(/<\/li>/gm, '</li>');
    if(SortingInfo ==""){
    SortingInfo = "";
    }else{
	SortingInfo = "<li>" + SortingInfo + "</li>"; 
	}
   


//for json
	var SortingInfoJson = infovalnumber;
	SortingInfoJson = SortingInfoJson.trim();
	SortingInfoJson = SortingInfoJson.replace(/(\r\n|\n|\r)/gm,'\r\n\r\n');
	SortingInfoJson = SortingInfoJson.replace(/(\r\n|\r|\n){2,}/g, '$1\n');
	SortingInfoJson = SortingInfoJson.replace(/(\n\n)/gm, '}{"info":"');
	SortingInfoJson = SortingInfoJson.replace(/(\r\n|\n|\r)/gm,'"');
	SortingInfoJson = SortingInfoJson.replace(/}/gm, '},');
    if(SortingInfoJson ==""){
    SortingInfoJson = "";
    }else{
	SortingInfoJson = '{"info":"' + SortingInfoJson + '"}'; 
	}


if(SortingInfo == ''){
g12 = '';
g12_json = '';
}else{
g12 = '<ul>'+SortingInfo+'</ul>';
g12_json = SortingInfoJson;
 }

 
 
   var ga3 = $('#ga3_4').val();// السرعة
  var ga3_a = 0;
  if($('input#ga3_5').is(':checked')){
  ga3 = $('#ga3_4').val();
 	if(ga3 ==''){
 	 ga3_a = 0;
  	  }else{
     ga3_a = 1;
      }
  }else{
  var ga3_1 = $('#ga3_1').val();//من
  var ga3_2 = $('#ga3_2').val();//الى
  var ga3_3 = $("#ga3_3 option:selected").text();//الزمن/الساعة
  	if(ga3_1 == 0||ga3_1 == ''){
    ga3 = ga3_2 + ' ' + ga3_3
    }else{
    ga3 = ga3_1 + '–' + ga3_2 + ' ' + ga3_3
    }
 	if(ga3_2 == 0||ga3_2 == ''){
 	 ga3_a = 0;
  	}else{
    ga3_a = 1;
    }
  }
 
 
   var ga4 = $('#ga4_4').val();//مدة الحمل
  var ga4_a = 0;
  if($('input#ga4_5').is(':checked')){
  ga4 = $('#ga4_4').val();
 	if(ga4 ==''){
 	 ga4_a = 0;
  	  }else{
     ga4_a = 1;
      }
  }else{
  var ga4_1 = $('#ga4_1').val();//من
  var ga4_2 = $('#ga4_2').val();//الى
  var ga4_3 = $("#ga4_3 option:selected").text();//زمن مدة الحمل
  var ga4_4 = $("#ga4_3 option:selected").val();//زمن مدة الحمل
  if(ga4_4 == "None"){
  ga4_3 = '';
  }
  	if(ga4_1 == 0||ga4_1 == ''){
    ga4 = ga4_2 + ' ' + ga4_3
    }else{
    ga4 = ga4_1 + '–' + ga4_2 + ' ' + ga4_3
    }
 	if(ga4_2 == 0||ga4_2 == ''){
 	 ga4_a = 0;
  	}else{
    ga4_a = 1;
    }
  }
 
 
   var ga5 = $('#ga5_4').val();//عدد الصغار
  var ga5_a = 0;
  if($('input#ga5_5').is(':checked')){
  ga5 = $('#ga5_4').val();
 	if(ga5 ==''){
 	 ga5_a = 0;
  	  }else{
     ga5_a = 1;
      }
  }else{
  var ga5_1 = $('#ga5_1').val();//من
  var ga5_2 = $('#ga5_2').val();//الى
  	if(ga5_1 == 0||ga5_1 == ''){
    ga5 = ga5_2
    }else{
    ga5 = ga5_1 + '–' + ga5_2
    }
 	if(ga5_2 == 0||ga5_2 == ''){
 	 ga5_a = 0;
  	}else{
    ga5_a = 1;
    }
  }
var ImgMapsvar = $('#ImgMaps').val();// خارطة التواجد
var html_table = $('#htmlTables').val();// جدول اضافي


   var ga1 = $('#ga1').val();//الفصيلة
   var ga1_n = $('#ga1_n').val();//الرتبة
   var ga2 = $('#ga2').val();//الموطن البيئي
   var ga6 = $('#ga6').val();//اللون
    ga6 = ga6.replace(/-|,|،/gi, ',');
   var ga7 = $('#ga7').val();//الأعداء
    ga7 = ga7.replace(/-|,|،/gi, ',');
   var ga13 = $('#ga13').val();//الغذاء
    ga13 = ga13.replace(/-|,|،/gi, ',');
   
   var ga8_1 = $('#ga8_1').val();//مخصص1 
   var ga8 = $('#ga8').val();//مخصص1 االنتيجة
   
   var ga9_1 = $('#ga9_1').val();//مخصص2 
   var ga9 = $('#ga9').val();//مخصص2 النتيجة
   
   var ga10_1 = $('#ga10_1').val();//مخصص3
   var ga10 = $('#ga10').val();//مخصص3 النتيجة
   
   var ga11_1 = $('#ga11_1').val();//مخصص4
   var ga11 = $('#ga11').val();//مخصص4 النتيجة
   
   //var 00000 = $('#00000').val();//00000
 
 
 
var setmoreinfo = '';
var AnimalFamily = '';
var AnimalOrder = '';
if(ga3_a !== 0){
setmoreinfo += '<tr><td class="cardinfoname">السرعة</td><td class="answercardinfo">'+ga3+'</td></tr>';
}else{
ga3 = '';
}
if(ga4_a !== 0){
setmoreinfo += '<tr><td class="cardinfoname">مدة الحمل</td><td class="answercardinfo">'+ga4+'</td></tr>';
}else{
ga4 = '';
}
if(ga5_a !== 0){
setmoreinfo += '<tr><td class="cardinfoname">'+Birthandeggs+'</td><td class="answercardinfo">'+ga5+'</td></tr>';
}else{
ga5 = '';
Birthandeggs = '';
}
if(ga1 !== ''){
AnimalFamily = '<tr><td class="cardinfoname">الفصيلة</td><td id="getAnimalFamily" class="answercardinfo">'+ga1+'</td></tr>';
}else{
ga1 = '';
}
if(ga1_n !== ''){
setmoreinfo += '<tr><td class="cardinfoname">الرتبة</td><td class="answercardinfo">'+ga1_n+'</td></tr>';
}else{
ga1_n = '';
}
if(ga2 !== ''){
setmoreinfo += '<tr><td class="cardinfoname">الموطن البيئي</td><td class="answercardinfo">'+ga2+'</td></tr>';
}else{
ga2 = '';
}
if(ga6 !== ''){
setmoreinfo += '<tr><td class="cardinfoname">اللون</td><td class="answercardinfo">'+ga6+'</td></tr>';
}else{
ga6 = '';
}
if(ga7 !== ''){
setmoreinfo += '<tr><td class="cardinfoname">الأعداء</td><td class="answercardinfo">'+ga7+'</td></tr>';
}else{
ga7 = '';
}

if(ga8 !== ''){
setmoreinfo += '<tr><td class="cardinfoname">'+ga8_1+'</td><td class="answercardinfo">'+ga8+'</td></tr>';
}else{
ga8 = '';
ga8_1 = '';
}
if(ga9 !== ''){
setmoreinfo += '<tr><td class="cardinfoname">'+ga9_1+'</td><td class="answercardinfo">'+ga9+'</td></tr>';
}else{
ga9 = '';
ga9_1 = '';
}
if(ga10 !== ''){
setmoreinfo += '<tr><td class="cardinfoname">'+ga10_1+'</td><td class="answercardinfo">'+ga10+'</td></tr>';
}else{
ga10 = '';
ga10_1 = '';
}
if(ga11 !== ''){
setmoreinfo += '<tr><td class="cardinfoname">'+ga11_1+'</td><td class="answercardinfo">'+ga11+'</td></tr>';
}else{
ga11 = '';
ga11_1 = '';
}
if(ga13 !== ''){
setmoreinfo += '<tr><td class="cardinfoname">الغذاء</td><td class="answercardinfo">'+ga13+'</td></tr>';
}else{
ga13 = '';
}


 

  

var g10_Answer,g11_Answer,g10_Num;
  	if(ga3_2 == 0||ga3_2 == ''){
 	 ga3 = '';
  	}else{
    ga3 = ga3;
    }
  	if(ga4_2 == 0||ga4_2 == ''){
 	 ga4 = '';
  	}else{
    ga4 = ga4;
    }
	if(g10 == '-+'){
      g10_Answer
    }
   
    if(g11 == '1'){
    g11_Answer = 'الأنواع غير المهددة';
    }else if(g11 == '2'){
    g11_Answer = 'الأنواع القريبة من التهديد';
    }else if(g11 == '3'){
    g11_Answer = 'الأنواع المعرضة للانقراض';
    }else if(g11 == '4'){
    g11_Answer = 'الأنواع المهددة بالانقراض';
    }else if(g11 == '5'){
    g11_Answer = 'الأنواع المهددة بشكل حرج بالانقراض';
    }else if(g11 =='6'){
    g11_Answer = 'الأنواع المنقرضة من الحياة البرية';
    }else if(g11 == '7'){
    g11_Answer = 'الأنواع المنقرضة';
    }else if(g11 == '8'){
    g11_Answer = 'الأنواع التي لا تتوفر عنها معلومات كافية';
    }else if(g11 == '9'){
    g11_Answer = 'الأنواع التي لم تقيَّم';
    }else{
    g11_Answer = '';
    }
   
   
   
    if(g10 == '+-'){
    g10_Answer = 'مستقر';
    g10_Num = 1;
    }else if(g10 == '-+'){
    g10_Answer = 'مستقر';
    g10_Num = 1;
    }else if(g10 == '-'){
    g10_Answer = 'تناقص';
    g10_Num = 0;
    }else if(g10 == '+'){
    g10_Answer = 'إزدياد';
    g10_Num = 2;
    }else{
    g10_Answer = 'غير معروف';
    g10_Num = 3;
    }
   
   

var getd = new Date();
var dd = String(getd.getDate()).padStart(2, '0');
var mm = String(getd.getMonth() + 1).padStart(2, '0');
var yyyy = getd.getFullYear();
   
var dateID = getd.getTime();
var dateToday = mm + '/' + dd + '/' + yyyy;
var ImgCover_Answer = $("#ImgCover").val();
var SourceInfo_Title = $("#SourceInfo_Title").val();
var SourceInfo_Link = $("#SourceInfo_Link").val();

var SummaryPage = $('#SummaryPage').val();
var ImgMaps = $('#ImgMaps').val();


   
var Class_AnswerAR = $("#AnimalClass option:selected").text();
var Class_AnswerEN = $("#AnimalClass option:selected").val();
   
$("#ImgMaps_Question").val("أماكن التواجد");
$("#ImgMaps_Answer").val(ImgMaps);

   
$("#CommonName_Question").val("الإسم الشائع");
$("#CommonName_Answer").val(g2);
$("#CommonName_Answer_En").val(g2_En);
$("#ScientificName_Question").val("الإسم العلمي");
$("#ScientificName_Answer").val(g3);
$("#Type_Question").val("النوع");
$("#Type_Answer").val(g4);
$("#Class_Question").val("الطائفة");
$("#Class_AnswerAR").val(Class_AnswerAR);
$("#Class_AnswerEN").val(Class_AnswerEN);
$("#Order_Question").val("الرتبة");
$("#Order_Answer").val(ga1_n);
$("#Subfamily_Question").val("الفصيلة");
$("#Subfamily_Answer").val(ga1);
$("#Diet_Question").val("النظام الغذائي");
$("#Diet_Answer").val(g5);
$("#Age_Question").val("متوسط العمر");
$("#Age_Answer").val(g6);
$("#Size_Question").val("الحجم");
$("#Size_Answer").val(g7);
$("#Weight_Question").val("الوزن");
$("#Weight_Answer").val(g8);
$("#PopulationTrend_Question").val("إتجاه السكان الحالي");
$("#PopulationTrend_Answer").val(g10_Answer);
$("#PopulationTrend_Code").val(g10);
$("#PopulationTrend_Num").val(g10_Num);
$("#RedList_Question").val("حالة القائمة الحمراء (IUCN)");
$("#RedList_Answer").val(g11_Answer);
$("#RedList_Num").val(g11);
$("#Speed_Question").val("السرعة");
$("#Speed_Answer").val(ga3);
$("#DurationPregnancy_Question").val("مدة الحمل");
$("#DurationPregnancy_Answer").val(ga4);
$("#NumBirths_Question").val(Birthandeggs);
$("#NumBirths_Answer").val(ga5);
$("#EcologicalHabitat_Question").val("الموطن البيئي");
$("#EcologicalHabitat_Answer").val(ga2);
$("#Color_Question").val("الألوان");
$("#Color_Answer").val(ga6);
$("#Enemy_Question").val("الأعداء");
$("#Enemy_Answer").val(ga7);
$("#FeedOn_Question").val("الغذاء");
$("#FeedOn_Answer").val(ga13);
$("#Img_Question").val("صورة الحيوان");
$("#Img_Answer").val(g1);
$("#ImgCover_Question").val("صورة الغلاف");
$("#ImgCover_Answer").val(ImgCover_Answer);
$("#MultipleImages_Question").val("صور متعددة");
$("#MultipleImages_Answer").val(MImages);
$("#ImgInDrive_Question").val("صورة الحيوان في درايف");
$("#ImgSizeComparison_Question").val(g9_1);
$("#ImgSizeComparison_Answer").val(img2_url1600);
$("#info1_Question").val(ga8_1);
$("#info1_Answer").val(ga8);
$("#info2_Question").val(ga9_1);
$("#info2_Answer").val(ga9);
$("#info3_Question").val(ga10_1);
$("#info3_Answer").val(ga10);
$("#info4_Question").val(ga11_1);
$("#info4_Answer").val(ga11);
$("#DidYouKnow_Question").val("هل تعلم");
$("#DidYouKnow_Answer").val(g12);
$("#SourceInfo_Question").val("المراجع");
$("#SourceInfo_Answer_Title").val(SourceInfo_Title);
$("#SourceInfo_Answer_link").val(SourceInfo_Link);
$("#PostUrlInSite_Question").val("رابط المنشور");
$("#PostIdInSite_Question").val("معرف المنشور");


   


  
  
var UserAccountIdJ = $('#UserAccountId').val();
var UserLoginWithJ = $('#UserLoginWith').val();
var UserAccountImgJ = $('#UserAccountImg').val();
var UserNameJ = $('#UserName').val();
var UserEmailJ = $('#UserEmail').val();
var Name_publishingJ = $('#Name_publishing').val();
var PageTitleJ = $('#PageTitle').val();
var PageLinkJ = $('#PageLink').val();
var TheStateJ = $('#TheState').val();
var CountryCodeJ = $('#CountryCode').val();
var IPAddressJ = $('#IPAddress').val();
var ScreenWidthJ = $('#ScreenWidth').val();
var ScreenHeightJ = $('#ScreenHeight').val();
var MoreInformationJ = $('#MoreInformation').val();
var ImgInDriveJ = $('#ImgInDrive_Answer').val();
var ImgCoverJ = $('#ImgCover').val();
var MultipleImagesJ = MImages_json;
var PostUrlJ = $("#PostUrlInSite_Answer").val();
var PostIdJ = $("#PostIdInSite_Answer").val();
   

   
var jsoncode = '';

jsoncode += '{';
jsoncode += '"info": {';
jsoncode += '"ResponseNumber": {';
jsoncode += '"Question": "تاريخ النشر",';
jsoncode += '"Answer": "'+dateToday+'"';
jsoncode += '},';
jsoncode += '"dateID": {';
jsoncode += '"Question": "ID",';
jsoncode += '"Answer": "'+dateID+'"';
jsoncode += '},';
jsoncode += '"CommonName": {';
jsoncode += '"Question": "الإسم الشائع",';
jsoncode += '"Answer": "'+g2+'",';
jsoncode += '"Answer_En": "'+g2_En+'"';
jsoncode += '},';
jsoncode += '"ScientificName": {';
jsoncode += '"Question": "الإسم العلمي",';
jsoncode += '"Answer": "'+g3+'"';
jsoncode += '},';
jsoncode += '"Type": {';
jsoncode += '"Question": "النوع",';
jsoncode += '"Answer": "'+g4+'"';
jsoncode += '},';
jsoncode += '"Class": {';
jsoncode += '"Question": "الطائفة",';
jsoncode += '"AnswerAR": "'+Class_AnswerAR+'",';
jsoncode += '"AnswerEN": "'+Class_AnswerEN+'"';
jsoncode += '},';
jsoncode += '"Order": {';
jsoncode += '"Question": "الرتبة",';
jsoncode += '"Answer": "'+ga1_n+'"';
jsoncode += '},';
jsoncode += '"Subfamily": {';
jsoncode += '"Question": "الفصيلة",';
jsoncode += '"Answer": "'+ga1+'"';
jsoncode += '},';
jsoncode += '"Diet": {';
jsoncode += '"Question": "النظام الغذائي",';
jsoncode += '"Answer": "'+g5+'"';
jsoncode += '},';
jsoncode += '"Age": {';
jsoncode += '"Question": "متوسط العمر",';
jsoncode += '"Answer": "'+g6+'"';
jsoncode += '},';
jsoncode += '"Size": {';
jsoncode += '"Question": "الحجم",';
jsoncode += '"Answer": "'+g7+'"';
jsoncode += '},';
jsoncode += '"Weight": {';
jsoncode += '"Question": "الوزن",';
jsoncode += '"Answer": "'+g8+'"';
jsoncode += '},';
jsoncode += '"PopulationTrend": {';
jsoncode += '"Question": "إتجاه السكان الحالي",';
jsoncode += '"Answer": "'+g10_Answer+'",';
jsoncode += '"Code": "'+g10+'",';
jsoncode += '"Num": '+g10_Num;
jsoncode += '},';
jsoncode += '"RedList": {';
jsoncode += '"Question": "حالة القائمة الحمراء (IUCN)",';
jsoncode += '"Answer": "'+g11_Answer+'",';
jsoncode += '"Num": "'+g11+'"';
jsoncode += '},';
jsoncode += '"Speed": {';
jsoncode += '"Question": "السرعة",';
jsoncode += '"Answer": "'+ga3+'"';
jsoncode += '},';
jsoncode += '"DurationPregnancy": {';
jsoncode += '"Question": "مدة الحمل",';
jsoncode += '"Answer": "'+ga4+'"';
jsoncode += '},';
jsoncode += '"NumBirths": {';
jsoncode += '"Question": "'+Birthandeggs+'",';
jsoncode += '"Answer": "'+ga5+'"';
jsoncode += '},';
jsoncode += '"EcologicalHabitat": {';
jsoncode += '"Question": "الموطن البيئي",';
jsoncode += '"Answer": "'+ga2+'"';
jsoncode += '},';
jsoncode += '"Color": {';
jsoncode += '"Question": "الألوان",';
jsoncode += '"Answer": "'+ga6+'"';
jsoncode += '},';
jsoncode += '"Enemy": {';
jsoncode += '"Question": "الأعداء",';
jsoncode += '"Answer": "'+ga7+'"';
jsoncode += '},';
jsoncode += '"FeedOn": {';
jsoncode += '"Question": "الغذاء",';
jsoncode += '"Answer": "'+ga13+'"';
jsoncode += '},';
jsoncode += '"Img": {';
jsoncode += '"Question": "صورة الحيوان",';
jsoncode += '"Answer": "'+g1+'"';
jsoncode += '},';
jsoncode += '"ImgSizeComparison": {';
jsoncode += '"Question": "'+g9_1+'",';
jsoncode += '"Answer": "'+img2_url1600+'"';
jsoncode += '},';
jsoncode += '"ImgCover": {';
jsoncode += '"Question": "صورة الغلاف",';
jsoncode += '"Answer": "'+ImgCoverJ+'"';
jsoncode += '},';
jsoncode += '"MultipleImages": {';
jsoncode += '"Question": "صورة متعددة",';
jsoncode += '"Answer": [';
jsoncode += MultipleImagesJ;
jsoncode += ']';
jsoncode += '},';
jsoncode += '"ImgInDrive": {';
jsoncode += '"Question": "صورة الحيوان في درايف",';
jsoncode += '"Answer": "'+ImgInDriveJ+'"';
jsoncode += '},';
jsoncode += '"info1": {';
jsoncode += '"Question": "'+ga8_1+'",';
jsoncode += '"Answer": "'+ga8+'"';
jsoncode += '},';
jsoncode += '"info2": {';
jsoncode += '"Question": "'+ga9_1+'",';
jsoncode += '"Answer": "'+ga9+'"';
jsoncode += '},';
jsoncode += '"info3": {';
jsoncode += '"Question": "'+ga10_1+'",';
jsoncode += '"Answer": "'+ga10+'"';
jsoncode += '},';
jsoncode += '"info4": {';
jsoncode += '"Question": "'+ga11_1+'",';
jsoncode += '"Answer": "'+ga11+'"';
jsoncode += '},';
jsoncode += '"DidYouKnow": {';
jsoncode += '"Question": "هل تعلم",';
jsoncode += '"Answer": [';
jsoncode += g12_json;
jsoncode += ']';
jsoncode += '},';
jsoncode += '"modalcardinf": {';
jsoncode += '"IUCN_AR": "';
jsoncode += "<hr/><div class='FastFactsmodalcardinfListContainer'><div class='factsLabel_3x2xkx'><span class='factsKey_rambtt'>حالة القائمة الحمراء لـ<span title='الإتحاد الدولي لحفظ الطبيعة'>IUCN<span>: </span></span><span class='factsKeyValue_card'><div id='mymodalcardinf' class='modalcardinf'><div class='modalcardinf-content'><div class='modalcardinf-header'><span class='close'>&times;</span></div><div class='modalcardinf-body'><div class='container_9m9ayv'><amp-img class='image_IUCN i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout' layout='fixed' src='https://lh3.googleusercontent.com/-zK8mjZ6lD-s/XW7RGgx5YAI/AAAAAAAADEo/AJsZz1IUNg0HDrSU7nbZd3PUJD-xPkB6QCLcBGAs/s70/iucn.adapt.133.png' width='70' height='64' i-amphtml-layout='fixed' style='width:70px;height:64px;--loader-delay-offset:0ms!important'><img decoding='async' src='https://lh3.googleusercontent.com/-zK8mjZ6lD-s/XW7RGgx5YAI/AAAAAAAADEo/AJsZz1IUNg0HDrSU7nbZd3PUJD-xPkB6QCLcBGAs/s70/iucn.adapt.133.png' class='i-amphtml-fill-content i-amphtml-replaced-content' /></amp-img><p class='descriptionaboutIUCN'>القائمة الحمراء للأنواع المهددة بالانقراض من الاتحاد الدولي لحفظ الطبيعة (IUCN) هي النهج العالمي الأكثر شمولية وموضوعية لتقييم حالة حفظ الأنواع النباتية والحيوانية.</p><div class='dividerredlist'></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor160'><span>غم</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع غير المهددة</p><p class='descriptionredlist'>الأنواع المنتشرة والمتوفرة في الطبيعة</p></div></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor174'><span>قخ</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع القريبة من التهديد</p><p class='descriptionredlist'>الأنواع التي لا تتأهل كي تصنف ضمن الفئات المذكورة في التالي ولكنها من المرجح أن تصل إلى إحدى هذه الفئات في المستقبل القريب</p></div></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor249'><span>خد</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع المعرضة للانقراض</p><p class='descriptionredlist'>الأنواع المعرضة لخطورة الانقراض من الطبيعة</p></div></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor235'><span>خم</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع المهددة بالانقراض</p><p class='descriptionredlist'>الأنواع المعرضة بشكل كبير لخطورة الانقراض من الطبيعة</p></div></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor215'><span>خق</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع المهددة بشكل حرج بالانقراض</p><p class='descriptionredlist'>الأنواع المعرضة بشدة كبيرة جدا لخطورة الانقراض من الطبيعة</p></div></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor60'><span>قب</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع المنقرضة من الحياة البرية</p><p class='descriptionredlist'>الأنواع التي تتواجد فقط في الأسر أو التربية الداخلية أو تتواجد في تجمعات غير طبيعية (تتواجد بعيدا عن التوزيع الطبيعي الأصلي لهذه الفئة)</p></div></div><div class='itemredList'><div class='extinction extinctionbackgroundcolor25'><span>نق</span></div><div class='itemredListtext'><p class='nameredlist'>الأنواع المنقرضة</p><p class='descriptionredlist'>لا يوجد في البرية او في الأسر من هذا الفصيل على قيد الحياة</p></div></div><div class='itemredList'><div class='itemredListtext'><p class='nameredlist'>الأنواع التي لا تتوفر عنها معلومات كافية</p><p class='descriptionredlist'>لا تتوفر عنها معلومات عن توزيعها في الطبيعة أو تعرضها للتهديدات</p></div></div><div class='itemredList'><div class='itemredListtext'><p class='nameredlist'>الأنواع التي لم تقيَّم</p><p class='descriptionredlist'>الأنواع التي لم يتم تقييمها بعد</p></div></div></div></div></div></div><a href='#IUCN' id='Btnscardinfcardinf' class='btncardinfOpenmodalcardinfcard'></a></span><span id='settextstatus' class='statusValueText'></span></div></div><div class='factsextinctionsContainer000'><span class='factsextinctionsLine000'></span><div class='factsextinctions0001'><div id='setclassList1' class='extinction_notthis'><span>غم</span></div><div id='setclassList2' class='extinction_notthis'><span>قخ</span></div><div id='setclassList3' class='extinction_notthis'><span>خد</span></div><div id='setclassList4' class='extinction_notthis'><span>خم</span></div><div id='setclassList5' class='extinction_notthis'><span>خق</span></div><div id='setclassList6' class='extinction_notthis'><span>قب</span></div><div id='setclassList7' class='extinction_notthis'><span>نق</span></div></div><span class='Labelcard0001'>أقل خطورة</span><span class='Labelcard0002'>منقرضة</span></div>";
jsoncode += '",';
jsoncode += '"IUCN_EN": ""';
jsoncode += '},';

jsoncode += '"SummaryPage": {';
jsoncode += '"Question": "الوصف",';
jsoncode += '"Answer": "'+SummaryPage+'"';
jsoncode += '},';

jsoncode += '"ImgMaps": {';
jsoncode += '"Question": "خريطة التواجد",';
jsoncode += '"Answer": "'+ImgMaps+'"';
jsoncode += '},';
   
jsoncode += '"SourceInfo": {';
jsoncode += '"Question": "المراجع",';
jsoncode += '"Answer_Title": "'+SourceInfo_Title+'",';
jsoncode += '"Answer_link": "'+SourceInfo_Link+'"';
jsoncode += '},';

   
jsoncode += '"PostUrl": {';
jsoncode += '"Question": "رابط المنشور",';
jsoncode += '"Answer": "'+PostUrlJ+'"';
jsoncode += '},';
   
jsoncode += '"PostId": {';
jsoncode += '"Question": "معرف المنشور",';
jsoncode += '"Answer_link": "'+PostIdJ+'"';
jsoncode += '},';
   
jsoncode += '"UserAccountId": {';
jsoncode += '"Question": "معرف حساب المستخدم",';
jsoncode += '"Answer": "'+UserAccountIdJ+'"';
jsoncode += '},';

jsoncode += '"UserLoginWith": {';
jsoncode += '"Question": "تسجيل دخول بإستخدام",';
jsoncode += '"Answer": "'+UserLoginWithJ+'"';
jsoncode += '},';

jsoncode += '"UserAccountImg": {';
jsoncode += '"Question": "صورة الملف الشخصي للمستخدم",';
jsoncode += '"Answer": "'+UserAccountImgJ+'"';
jsoncode += '},';

jsoncode += '"UserName": {';
jsoncode += '"Question": "إسم المستخدم",';
jsoncode += '"Answer": "'+UserNameJ+'"';
jsoncode += '},';

jsoncode += '"UserEmail": {';
jsoncode += '"Question": "البريد الإلكتروني",';
jsoncode += '"Answer": "'+UserEmailJ+'"';
jsoncode += '},';

jsoncode += '"Name_publishing": {';
jsoncode += '"Question": "اظهار معلومات الناشر",';
jsoncode += '"Answer": "'+Name_publishingJ+'"';
jsoncode += '},';

jsoncode += '"PageTitle": {';
jsoncode += '"Question": "عنوان الصفحة",';
jsoncode += '"Answer": "'+PageTitleJ+'"';
jsoncode += '},';

jsoncode += '"PageLink": {';
jsoncode += '"Question": "رابط الصفحة",';
jsoncode += '"Answer": "'+PageLinkJ+'"';
jsoncode += '},';

jsoncode += '"TheState": {';
jsoncode += '"Question": "الدولة",';
jsoncode += '"Answer": "'+TheStateJ+'"';
jsoncode += '},';

jsoncode += '"CountryCode": {';
jsoncode += '"Question": "رمز الدولة",';
jsoncode += '"Answer": "'+CountryCodeJ+'"';
jsoncode += '},';

jsoncode += '"IPAddress": {';
jsoncode += '"Question": "عنوان IP",';
jsoncode += '"Answer": "'+IPAddressJ+'"';
jsoncode += '},';

jsoncode += '"ScreenWidth": {';
jsoncode += '"Question": "عرض الشاشة",';
jsoncode += '"Answer": "'+ScreenWidthJ+'"';
jsoncode += '},';
   
jsoncode += '"ScreenHeight": {';
jsoncode += '"Question": "إرتفاع الشاشة",';
jsoncode += '"Answer": "'+ScreenHeightJ+'"';
jsoncode += '},';
   
jsoncode += '"MoreInformation": {';
jsoncode += '"Question": "معلومات إضافية",';
jsoncode += '"Answer": "'+MoreInformationJ+'"';
jsoncode += '}';
jsoncode += '}';
jsoncode += '}';




   
   

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  if($('input#g6_5').is(':checked')){
g6_3_b = '1';
}
 if($('input#g7_5').is(':checked')){
g7_3_a = '1';
}
  if($('input#g8_5').is(':checked')){
  g8_3_a = '1';
  }
  



var UserAccount = $("#UserAccountId").val();

  if(2 == 1){

$("#SetErrorSummary").html("");
$('#SetErrorSummary').append('<div class="alert alert-danger alert-dismissible fade show" role="alert"><h6 class="alert-heading"> خطأ</h6><hr/><ol></ol><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
$("#PreviewCardIfo").css("display","none");


    
if(g2 == ''){
$("#SetErrorSummary ol").append("<li class='Nameisrequired'><strong>الإسم الشائع</strong> مطلوب</li>");
}

if(g1 == ''){
$("#SetErrorSummary ol").append("<li class='Photoisrequired'><strong>الصورة</strong> مطلوبة</li>");
}

if(UserAccount == 'NoData'){
$("#SetErrorSummary ol").append("<li><strong>تسجيل الدخول</strong> مطلوب</li>");
}
    
  }else{
$("#SetErrorSummary").html("");
$("#PreviewCardIfo").css("display","none");

setcode();

  }
   
 }
 

 // انتهاء جمع البيانات
 






// اختبار




function test(){


$('#g6_5').click();
$('#g7_5').click();
$('#g8_5').click();
$('#ga3_5').click();
$('#ga4_5').click();
$('#ga5_5').click();


  
var i=0;
var s=0;



 $('.post-inner img').each(function() {
s +=1;
var img = $(this).attr('src')

if(s == 1){
$('#g1').val(img);
}else if(s == 2){
$('#g9').val(img);
}else if(s == 3){
$('#ImgMaps').val(img);
}

});



var SourceInfo_Title = $("h1.post-title.entry-title").text();
$('#SourceInfo_Title').val(SourceInfo_Title);

var description = $("meta[name='description']").attr('content');
$('#SummaryPage_Answer').val(description);

var diduknow = $('.box-inner-block').text();
diduknow = diduknow.replace('هل تعلم: ','');
diduknow = diduknow.replace('هل تعلم:','');
$('#DidYoUKnowNumfirst').val(diduknow)


 $('.one_fourth table tr').each(function() {
 i +=1;
var getc = $('td:eq(0)',this).text();  
var geta = $('td:eq(1)',this).text();    
 
if(i == 1){
$('#g2').val(getc)
}else if(i == 2){
$('#g2_En').val(getc)
}else{
if(getc == 'الطائفة'){


	if (geta == 'الثدييات' || geta == 'ثديات' || geta == 'الثديات' || geta == 'ألثدييات' || geta == 'حيوان من الثدييات' || geta == 'ثديي') {
        $('#AnimalClass').val('Mammalia');
    } else if (geta == 'طائر' || geta == 'طيور' || geta == 'طير' || geta == 'الطيور' || geta == 'حيوان طائر' || geta == 'الطير' || geta == 'الطائر') {
        $('#AnimalClass').val('Aves');
		$('#getcollapse17 .input-group-text').html('عدد البيض');
    } else if (geta == 'حيوان زاحف' || geta == 'زاحف' || geta == 'الحيوانات الزاحفة' || geta == 'زواحف' || geta == 'زاحفة' || geta == 'الزواحف') {
        $('#AnimalClass').val('Reptilia');
    } else if (geta == 'حيوان بحري' || geta == 'بر مائي' || geta == 'البرمائيات' || geta == 'برمائيات' || geta == 'حيوان برمائي' || geta == 'برمائي') {
        $('#AnimalClass').val('Amphibia');
    } else if (geta == 'سمك' || geta == 'اسماك' || geta == 'أسماك' || geta == 'الأسماك' || geta == 'الاسماك') {
        $('#AnimalClass').val('Pisces');
    } else if (geta == 'حشرات' || geta == 'الحشرات' || geta == 'حشرة') {
        $('#AnimalClass').val('Insecta');
    } else if (geta == 'إسفنجيات' || geta == 'اسفنجيات' || geta == 'أسفنجيات' || geta == 'الإسفنجيات' || geta == 'الاسفنجيات') {
        $('#AnimalClass').val('Sponges');
    } else if (geta == 'اللافقاريات' || geta == 'لافقاريات' || geta == 'لا فقاريات' || geta == 'اللا فقاريات'  || geta == 'لافقاري'  || geta == 'لا فقاري') {
        $('#AnimalClass').val('Invertebrata');
    } else if (geta == 'شعاعايات ألزعانف' || geta == 'شعاعيات الزعانف' || geta == 'شعاعيات زعانف' || geta == 'زعانف شعاعيات' || geta == 'زعانف الشعاعيات') {
        $('#AnimalClass').val('Actinopterygii');
    } else if (geta == 'الأسماك الغضروفية' || geta == 'الاسماك الغضروفية' || geta == 'اسماك غضروفية' || geta == 'أسماك غضروفية' || geta == 'سمك غضروفي' || geta == 'سمك غضروف') {
        $('#AnimalClass').val('Chondrichthyes');
    } else if (geta == 'لحميات الزعانف' || geta == 'لحميات زعانف' || geta == 'لحميات ألزعانف') {
        $('#AnimalClass').val('Sarcopterygii');
    } else if (geta == 'عنكبيات الشكل' || geta == 'عنكبيات' || geta == 'العنكبيات') {
        $('#AnimalClass').val('Arachnida');
    } else if (geta == 'ديناصورات' || geta == 'ديناصور' || geta == 'ديناصوريات' || geta == 'دناصورات' || geta == 'الديناصور' || geta == 'الديناصورات') {
        $('#AnimalClass').val('Dinosauria');
    } else if (geta == 'مفصليات' || geta == 'المفصليات' || geta == 'مفصلي') {
        $('#AnimalClass').val('Arthropoda');
    } else if (geta == 'الديدان' || geta == 'ديدان' || geta == 'دود'|| geta == 'الدود'|| geta == 'دويدات'|| geta == 'دودة') {
        $('#AnimalClass').val('Worms');
    } else if (geta == 'رخويات' || geta == 'الرخويات' || geta == 'رخوي') {
        $('#AnimalClass').val('Mollusks');
    } else if (geta == 'بطنيات القدم' || geta == 'البطنيات القدم' || geta == 'بطنيات الاقدام' || geta == 'بطنيات الأقدام' || geta == 'ذوات الأقدام البطنية' || geta == 'بطنيات الأرجل') {
        $('#AnimalClass').val('Gastropoda');
    } else if (geta == 'شفويات الأرجل' || geta == 'شفويات الارجل' || geta == 'شفويات القدم' || geta == 'شفويات الأقدام' || geta == 'شفويات الاقدام' || geta == 'شفوية الأقدام' || geta == 'شفوي القدم' || geta == 'ذوات الأقدام الشفافة' || geta == 'شفويات الأرجل') {
        $('#AnimalClass').val('Chilopoda');
    } else if (geta == 'رأسيات القدم' || geta == 'راسيات القدم' || geta == 'رأسيات الأرجل') {
        $('#AnimalClass').val('Cephalopoda');
    } else if (geta == 'ذوات الصدفتين' || geta == 'ذوات ألصدفتين' || geta == 'ثنائيات الصدفة') {
        $('#AnimalClass').val('Bivalvia');
    } else if (geta == 'القشريات' || geta == 'قشريات' || geta == 'من القشريات' || geta == 'قشري') {
        $('#AnimalClass').val('Crustaceans');
    } else if (geta == 'شوكيات الجلد' || geta == 'جلد شوكي' || geta == 'شوكي الجلد' || geta == 'شوكية الجلد') {
        $('#AnimalClass').val('Echiniderms');
    } else if (geta == 'حلقيات' || geta == 'الحلقيات' || geta == 'حلقي' || geta == 'الديدان الحلقية') {
        $('#AnimalClass').val('Annelida');
    } else if (geta == 'لينات الدرقة' || geta == 'اللينات درقية' || geta == 'ذوات الليات الدرقة' || geta == 'القشريات الرخوة') {
        $('#AnimalClass').val('Malacostraca');
    } else if (geta == 'فنجانيات' || geta == 'الفنجانيات' || geta == 'فنجاني' || geta == 'فنجانيات الشكل') {
        $('#AnimalClass').val('Scyphozoa');
    } else if (geta == 'شقائق النعمان' || geta == 'شقائق نعمان البحر' || geta == 'شقائق نعمان') {
        $('#AnimalClass').val('Actiniaria');
    } else if (geta == 'حيوانات وردية' || geta == 'الحيوانات الوردية' || geta == 'زهريات شعاعية') {
        $('#AnimalClass').val('Anthozoa');
    } else if (geta == 'أبابيات' || geta == 'ابابيات' || geta == 'الأبابيات' || geta == 'هدروانيات') {
        $('#AnimalClass').val('Hydrozoa');
    } else if (geta == 'نجم' || geta == 'نجم البحر' || geta == 'نجم البحار' || geta == 'نجميات') {
        $('#AnimalClass').val('Asteroidea');
    } else{
    $('#tableid').append('<tr style="background:#f1c800;"><td>'+getc+'</td><td>'+geta+'</td></tr>')
    }





}else if(getc == 'النظام الغذائي'){

    if (geta == 'حيوان عاشب' || geta == 'آكل أعشاب' || geta == 'آكل اعشاب' || geta == 'آكلة النبات' || geta == 'آكل النبات' || geta == 'عاشب' || geta == 'حيوانات عاشبة' || geta == 'آكل نبات' || geta == 'آكل نباتات' || geta == 'نباتي' || geta == 'عشبي') {
        $('#g5').val('Herbivore');
    } else if (geta == 'آكل لحوم' || geta == 'لاحم' || geta == 'آكل اللحوم' || geta == 'حيوان لاحم' || geta == 'اكل لحوم' || geta == 'حيوان اكل لحوم' || geta == 'حيوان لاحم' || geta == 'آكلة اللحوم' || geta == 'آكلة لحوم') {
        $('#g5').val('Carnivore');
    } else if (geta == 'قارت' || geta == 'آكل النبات و الحيوان' || geta == 'آكل النبات والحيوان' || geta == 'آكلة الحيوان والنبات' || geta == 'آكل الحيوان والنبات' || geta == 'آكلة النبات والحيوان' || geta == 'آكل الحيوان و النبات' || geta == 'حيوان قارت' || geta == 'قوارض' || geta == 'حيوان قارض'|| geta == 'آكل لحوم ونبات') {
        $('#g5').val('Omnivore');
    } else if (geta == 'يتغذى على العوالق') {
        $('#g5').val('Planktivore');
    } else{
    $('#tableid').append('<tr style="background:#f1c800;"><td>'+getc+'</td><td>'+geta+'</td></tr>')
    }



}else if(getc == 'متوسط العمر'|| getc == 'العمر'){
$('#g6_4').val(geta);

}else if(getc.includes('الحجم') == true){
$('#g7_4').val(geta);

}else if(getc == 'الوزن'){
$('#g8_4').val(geta);

}else if(getc == 'الفصيلة'){
$('#ga1').val(geta);
}else if(getc == 'الرتبة'){
$('#ga1_n').val(geta);
}else if(getc.includes('السرعة') == true){
$('#ga3_4').val(geta);
}else if(getc == 'مدة الحمل'|| getc == 'مده الحمل'){
$('#ga4_4').val(geta);
}else if(getc == 'عدد الصغار' || getc == 'عدد البيض' || getc == 'عدد البيوض'){
$('#ga5_4').val(geta);
}else if(getc == 'الموطن البيئي'){
$('#ga2').val(geta);
}else if(getc == 'اللون'){
$('#ga6').val(geta);
}else if(getc == 'الأعداء' || getc == 'الاعداء'){
$('#ga7').val(geta);
}else if(getc == 'الغذاء'){
$('#ga13').val(geta);
}else{
var ga8_1 = $('#ga8_1').val();
var ga9_1 = $('#ga9_1').val();
var ga10_1 = $('#ga10_1').val();
var ga11_1 = $('#ga11_1').val();

if (ga8_1 == ''){
$('#ga8_1').val(getc);
$('#ga8').val(geta);
}else if (ga9_1 == ''){
$('#ga9_1').val(getc);
$('#ga9').val(geta);
}else if (ga10_1 == ''){
$('#ga10_1').val(getc);
$('#ga10').val(geta);
}else if (ga11_1 == ''){
$('#ga11_1').val(getc);
$('#ga11').val(geta);
}else{
$('#tableid').append('<tr style="background:#00dbf1"><td>'+getc+'</td><td>'+geta+'</td></tr>')
}
}





 }
var settable = $('#tablediv').html();
var htmlTablesvar = settable;
settable = settable.replace(/\n/gi,'');
if(settable.length > 35){
settable = settable;
}else{
settable = '';
}
$('#htmlTables').val(settable);
});

 }








}

function readyCard() {
	
setTimeout(function(){
test()
},2000);


setTimeout(function(){
yalla()
},4000);
	
}
	
	


function setcode(){
	
setTimeout(function(){
$("#sendToSheetHide").click();
},2000);


setTimeout(function(){
window.location.href = "https://ajabanee.com/%d8%ad%d9%8a%d9%88%d8%a7%d9%86%d8%a7%d8%aa/%d8%af%d9%8a%d9%86%d8%a7%d8%b5%d9%88%d8%b1%d8%a7%d8%aa-%d8%ad%d9%8a%d9%88%d8%a7%d9%86%d8%a7%d8%aa-%d9%85%d8%a7-%d9%82%d8%a8%d9%84-%d8%a7%d9%84%d8%aa%d8%a7%d8%b1%d9%8a%d8%ae/?card=" + getnumCards;
},10000);

}


$(document).ready(readyCard);
















