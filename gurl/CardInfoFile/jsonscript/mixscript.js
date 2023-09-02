var GeoArabicAndroid = /GeoArabicAndroid/.test(navigator.userAgent);
var getSC = checkCookie('get','settings',null);
var getAcS = checkCookie('get','AcSettings',null);
var getSC_is = false;
var getAcS_is = false;
if(getSC !== undefined && getSC != ''){
getSC_is = true;
}
if(getAcS !== undefined && getAcS != ''){
getAcS_is = true;
}

    function cardimgG() {
$('#gallery').removeClass('d-none');
		var initPhotoSwipeFromDOM = function(gallerySelector) {

			var parseThumbnailElements = function(el) {
			    var thumbElements = el.childNodes,
			        numNodes = thumbElements.length,
			        items = [],
			        el,
			        childElements,
			        thumbnailEl,
			        size,
			        item;

			    for(var i = 0; i < numNodes; i++) {
			        el = thumbElements[i];

			        // include only element nodes 
			        if(el.nodeType !== 1) {
			          continue;
			        }

			        childElements = el.children;

			        size = el.getAttribute('data-size').split('x');

			        // create slide object
			        item = {
						src: el.getAttribute('href'),
						w: parseInt(size[0], 10),
						h: parseInt(size[1], 10),
						author: el.getAttribute('data-author')
			        };

			        item.el = el; // save link to element for getThumbBoundsFn

			        if(childElements.length > 0) {
			          item.msrc = childElements[0].getAttribute('src'); // thumbnail url
			          if(childElements.length > 1) {
			              item.title = childElements[1].innerHTML; // caption (contents of figure)
			          }
			        }


					var mediumSrc = el.getAttribute('data-med');
		          	if(mediumSrc) {
		            	size = el.getAttribute('data-med-size').split('x');
		            	// "medium-sized" image
		            	item.m = {
		              		src: mediumSrc,
		              		w: parseInt(size[0], 10),
		              		h: parseInt(size[1], 10)
		            	};
		          	}
		          	// original image
		          	item.o = {
		          		src: item.src,
		          		w: item.w,
		          		h: item.h
		          	};

			        items.push(item);
			    }

			    return items;
			};

			// find nearest parent element
			var closest = function closest(el, fn) {
			    return el && ( fn(el) ? el : closest(el.parentNode, fn) );
			};

			var onThumbnailsClick = function(e) {
			    e = e || window.event;
			    e.preventDefault ? e.preventDefault() : e.returnValue = false;

			    var eTarget = e.target || e.srcElement;

			    var clickedListItem = closest(eTarget, function(el) {
			        return el.tagName === 'A';
			    });

			    if(!clickedListItem) {
			        return;
			    }

			    var clickedGallery = clickedListItem.parentNode;

			    var childNodes = clickedListItem.parentNode.childNodes,
			        numChildNodes = childNodes.length,
			        nodeIndex = 0,
			        index;

			    for (var i = 0; i < numChildNodes; i++) {
			        if(childNodes[i].nodeType !== 1) { 
			            continue; 
			        }

			        if(childNodes[i] === clickedListItem) {
			            index = nodeIndex;
			            break;
			        }
			        nodeIndex++;
			    }

			    if(index >= 0) {
			        openPhotoSwipe( index, clickedGallery );
			    }
			    return false;
			};

			var photoswipeParseHash = function() {
				var hash = window.location.hash.substring(1),
			    params = {};

			    if(hash.length < 5) { // pid=1
			        return params;
			    }

			    var vars = hash.split('&');
			    for (var i = 0; i < vars.length; i++) {
			        if(!vars[i]) {
			            continue;
			        }
			        var pair = vars[i].split('=');  
			        if(pair.length < 2) {
			            continue;
			        }           
			        params[pair[0]] = pair[1];
			    }

			    if(params.gid) {
			    	params.gid = parseInt(params.gid, 10);
			    }

			    return params;
			};

			var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
			    var pswpElement = document.querySelectorAll('.pswp')[0],
			        gallery,
			        options,
			        items;

				items = parseThumbnailElements(galleryElement);

			    // define options (if needed)
			    options = {

			        galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                    showHideOpacity:false,
			        getThumbBoundsFn: function(index) {
			            // See Options->getThumbBoundsFn section of docs for more info
			            var thumbnail = items[index].el.children[0],
			                pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
			                rect = thumbnail.getBoundingClientRect(); 

			            return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
			        },

			        addCaptionHTMLFn: function(item, captionEl, isFake) {
						if(!item.title) {
							captionEl.children[0].innerText = '';
							return false;
						}
						captionEl.children[0].innerHTML = item.title +  '<br/><small>Photo: ' + item.author + '</small>';
						return true;
			        },
					
			    };


			    if(fromURL) {
			    	if(options.galleryPIDs) {
			    		// parse real index when custom PIDs are used 
			    		// https://photoswipe.com/documentation/faq.html#custom-pid-in-url
			    		for(var j = 0; j < items.length; j++) {
			    			if(items[j].pid == index) {
			    				options.index = j;
			    				break;
			    			}
			    		}
				    } else {
				    	options.index = parseInt(index, 10) - 1;
				    }
			    } else {
			    	options.index = parseInt(index, 10);
			    }

			    // exit if index not found
			    if( isNaN(options.index) ) {
			    	return;
			    }



				var radios = document.getElementsByName('gallery-style');
				for (var i = 0, length = radios.length; i < length; i++) {
				    if (radios[i].checked) {
				        if(radios[i].id == 'radio-all-controls') {

				        } else if(radios[i].id == 'radio-minimal-black') {
				        	options.mainClass = 'pswp--minimal--dark';
					        options.barsSize = {top:0,bottom:0};
							options.captionEl = false;
							options.fullscreenEl = false;
							options.shareEl = false;
							options.bgOpacity = 0.85;
							options.tapToClose = true;
							options.tapToToggleControls = false;
				        }
				        break;
				    }
				}

			    if(disableAnimation) {
			        options.showAnimationDuration = 0;
			    }

			    // Pass data to PhotoSwipe and initialize it
			    gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

			    // see: http://photoswipe.com/documentation/responsive-images.html
				var realViewportWidth,
				    useLargeImages = false,
				    firstResize = true,
				    imageSrcWillChange;

				gallery.listen('beforeResize', function() {

					var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
					dpiRatio = Math.min(dpiRatio, 2.5);
				    realViewportWidth = gallery.viewportSize.x * dpiRatio;


				    if(realViewportWidth >= 1200 || (!gallery.likelyTouchDevice && realViewportWidth > 800) || screen.width > 1200 ) {
				    	if(!useLargeImages) {
				    		useLargeImages = true;
				        	imageSrcWillChange = true;
				    	}
				        
				    } else {
				    	if(useLargeImages) {
				    		useLargeImages = false;
				        	imageSrcWillChange = true;
				    	}
				    }

				    if(imageSrcWillChange && !firstResize) {
				        gallery.invalidateCurrItems();
				    }

				    if(firstResize) {
				        firstResize = false;
				    }

				    imageSrcWillChange = false;

				});

				gallery.listen('gettingData', function(index, item) {
				    if( useLargeImages ) {
				        item.src = item.o.src;
				        item.w = item.o.w;
				        item.h = item.o.h;
				    } else {
				        item.src = item.m.src;
				        item.w = item.m.w;
				        item.h = item.m.h;
				    }
				});

			    gallery.init();
			};

			// select all gallery elements
			var galleryElements = document.querySelectorAll( gallerySelector );
			for(var i = 0, l = galleryElements.length; i < l; i++) {
				galleryElements[i].setAttribute('data-pswp-uid', i+1);
				galleryElements[i].onclick = onThumbnailsClick;
			}

			// Parse URL and open gallery if it contains #&pid=3&gid=1
			var hashData = photoswipeParseHash();
			if(hashData.pid && hashData.gid) {
				openPhotoSwipe( hashData.pid,  galleryElements[ hashData.gid - 1 ], true, true );
			}
		};


		initPhotoSwipeFromDOM('.card-gallery');

	};
	
function replaceurl(PostUrlInSite_Answer,shortLink) {
var s = PostUrlInSite_Answer;
var shortLinks = shortLink;
if (s != "NoData" && s != "undefined" ){
s = PostUrlInSite_Answer;
}else{
s = shortLink;
}
        var t = $("#linkShareforcopy").val();
        var n = $(".answercardinfo:eq(0)").html();
        var fb = $("#Infoaboutpublisher .sharer.sharer-fb").attr("href");
        fb = fb.replace(s, t);
        $("#Infoaboutpublisher .sharer.sharer-fb").attr("href", fb);
        $(".sharerfb2").attr("href", fb);
        var tw = $("#Infoaboutpublisher .sharer.sharer-tw").attr("href");
        tw = tw.replace(s, t);
        $("#Infoaboutpublisher .sharer.sharer-tw").attr("href", tw);
        $(".sharertw2").attr("href", tw);
        var wa = $("#Infoaboutpublisher .sharer.sharer-wa").attr("href");
        wa = wa.replace(s, t);
        $("#Infoaboutpublisher  .sharer.sharer-wa").attr("href", wa);
        $(".sharerwa2").attr("href", wa);
        $(".sharerml2").attr("href", "mailto:?subject=معلومات حول "+n+"&body="+t);
		$("#Infoaboutpublisher .sharer.sharer-copy").attr("data-clipboard-text", t);
		

    $('#didyouknow').each(function() {
           $(this).find('a').each(function() {
        var didyouknowShare = $(this).attr("href");
		didyouknowShare = didyouknowShare.replace(s,t);
		$(this).attr("href", didyouknowShare);
		});
	});

		
		
    }
    $("#codebtn").click(function() {
        $("#iframeShare").css("display", "block");
        $("#linkShare").css("display", "none");
    });
    $("#linkbtn").click(function() {
        $("#iframeShare").css("display", "none");
        $("#linkShare").css("display", "block");
    });
    $(".onchangescolor").change(function() {
        $("#colorstext").val($("#colors").val());
        setiframe()
    });
    $(".onchanges").change(function() {
        setiframe();
    });

    function setiframe() {
        var colorstext = $("#colorstext").val();
        var iframeWidth = $("#iframeWidth").val();
        var iframeHeight = $("#iframeHeight").val();
        var a = colorstext.replace('#', '');
        var b = '&ii=1';
        var c = '&iduc=1';
        var d = '&iiucn=1';
        var e = '&isc=1';
        var f = '&ipm=1';
        var g = '&v3d=1';
        var i = '&ipa=1';
        var collapseimgshow = document.getElementById('collapseimgshow')
        var bsCollapseimg = new bootstrap.Collapse(collapseimgshow, {
            toggle: false
        })
        if ($('input#IncludeImg').is(':checked')) {
            bsCollapseimg.show()
            if ($('input#imgslideshow').is(':checked')) {
                b = '&ii=1'
            } else {
                b = '&ii=2'
            }
        } else {
            b = '&ii=0'
            bsCollapseimg.hide()
        }
        if ($('input#IncludeDidUknow').is(':checked')) {
            c = '&iduc=1'
        } else {
            c = '&iduc=0'
        }
        if ($('input#IncludeIUCN').is(':checked')) {
            d = '&iiucn=1'
        } else {
            d = '&iiucn=0'
        }
        if ($('input#IncludeSizeComparison').is(':checked')) {
            e = '&isc=1'
        } else {
            e = '&isc=0'
        }
        if ($('input#IncludePresenceMap').is(':checked')) {
            f = '&ipm=1'
        } else {
            f = '&ipm=0'
        }
        if ($('input#IncludeV3D').is(':checked')) {
            g = '&v3d=1'
        } else {
            g = '&v3d=0'
        }
        if ($('input#IncludeFileImage').is(':checked')) {
            i = '&ipa=1'
        } else {
            i = '&ipa=0'
        }
		
		
 
		
        var collapsecolor = document.getElementById('collapsecolor')
        var bsCollapse = new bootstrap.Collapse(collapsecolor, {
            toggle: false
        });
        if ($('input#colorschecked').is(':checked')) {
            a = a;
            bsCollapse.show()
        } else {
            a = '';
            bsCollapse.hide()
        }
        var recolorstext = a.substring(0, 1);
        var repcolorstext = a.substring(1, 30);
        if (a != '') {
            if (recolorstext == 0) {
                a = '&b=z' + repcolorstext;
            } else {
                a = '&b=' + a;
            }
        }
        var iframe = '';
        iframe += '<div style="margin:0 auto;max-width:';
        iframe += iframeWidth;
        iframe += 'px">\n';
        iframe += '<iframe ';
        iframe += 'width="';
        iframe += '100%';
        iframe += '" ';
        iframe += 'style="border-bottom:1px solid #999;" frameborder="0" src="https://card.geoarabic.com/p/iframe.html?id=';
        iframe += $("#linkcardb").val();
        iframe += a;
        iframe += b;
        iframe += c;
        iframe += d;
        iframe += e;
        iframe += f;
        iframe += g;
        iframe += i;
        iframe += '" ';
        iframe += 'height="';
        iframe += iframeHeight;
        iframe += '" allowfullscreen></iframe>';
        iframe += '\n</div>';
        $("#colors").val($("#colorstext").val())
        $("#iframeShareforcopy").val(iframe);
    };
    $(document).ready(function() {
        $('.btns').click(function() {
            $('.btns').removeClass('active');
            $(this).closest('.btns').addClass('active')
        });
    });


  
  
  var getPathName = location.pathname;
    $(window).on('hashchange', function (event) {

      if(location.hash == "#CardModal" || location.hash == "#spotlight" || location.hash == "#show") {

        if (getPathName == "/p/user.html" || getPathName == "/p/users.html"){
			if(location.hash == "#show"){
		$('#showingCardModal').modal('hide');
			}else{
			$('#showingCardModal').show();
			}
		}else{
        $('#showingCardModal').show();
		}

        $('#modalIUCN').modal('hide');
        $('#modalsharecard').modal('hide');
    
        }else if(location.hash == "#modalIUCN") {
          
            $('#modalIUCN').modal('show');
            $('#showingCardModal').modal('hide');
            $('#modalsharecard').modal('hide');
          
        }else if(location.hash == "#modalsharecard") {
            $('#modalIUCN').modal('hide');
            $('#showingCardModal').modal('hide');
            $('#modalsharecard').modal('show');
        }else{
            $('#modalIUCN').modal('hide');
            $('#showingCardModal').modal('hide');
            $('#modalsharecard').modal('hide');
        }
    }); 
  
  
  
  
  



 $('#showingCardModal').on('shown.bs.modal', function () {
  
if ( document.location.protocol === 'file:' ) {
window.location.hash = "CardModal";
}else{
var IDTitle = $('#IDTitle').val();
var IDURL = $('#IDURL').val();
history.replaceState({page:1,rand:Math.random()},IDTitle, IDURL);
 window.location.hash = "CardModal";
}
   
if(scrollY == 0){
  window.scrollTo(0, 1);
}
});
  
$('#modalsharecard').on('show.bs.modal', function () {
  $('#showingCardModal').modal('hide');
   window.location.hash = "modalsharecard";
});
  
$('#modalIUCN').on('show.bs.modal', function () {
  $('#showingCardModal').modal('hide');
   window.location.hash = "modalIUCN";
});
  
  
$('#modalsharecard,#modalIUCN').on('hidden.bs.modal', function () {
  $('#showingCardModal').modal('show');
  $("#ShareACard").css("display","block");
  $("#InfoaboutCard").css("display","block");
  $("#InfoPostViewsCard").removeClass("d-none");
})
$('#showingCardModal').on('hidden.bs.modal', function () {
  $("#ShareACard").css("display","none");
  $("#InfoaboutCard").css("display","none");
if ( document.location.protocol !== 'file:' ) {
	
setTimeout(function(){
if(location.hash != "#CardModal" && location.hash != "#modalIUCN" && location.hash != "#modalsharecard") {
clearAllSlots();
history.replaceState({state:1,rand:Math.random()},$("#IDTitleOld").val(), $("#IDURLOld").val());
$("title").text($("#IDTitleOld").val());

  $('#btn_favorite').addClass('d-none');
}
}, 500);
}
})

  
$('#modalsharecard,#modalIUCN,#showingCardModal').on('hide.bs.modal', function () {
if(location.hash == "#CardModal") {
window.history.go(-1);
}else if(location.hash == "#modalIUCN" ){
window.history.go(-1);
}else if(location.hash == "#modalsharecard" ){
window.history.go(-1);
}
});
$('#modalsharecard,#modalIUCN,#showingCardModal').on('show.bs.modal', function () {
if(location.hash == "#CardModal") {
setTimeout(function(){ window.location.hash = "CardModal"; }, 500);
}else if(location.hash == "#modalIUCN" ){
setTimeout(function(){ window.location.hash = "modalIUCN"; }, 500);
}else if(location.hash == "#modalsharecard" ){
setTimeout(function(){ window.location.hash = "modalsharecard"; }, 500);
}

if(scrollY == 0){
  window.scrollTo(0, 1);
}

});


  
  
  
    function Infoaboutpublisher() {
        $('#Infoaboutpublisher').on('shown.bs.collapse', function() {
			
            var hash = "#Infoaboutpublisher";
var cfullscreen = $('#showingCardModal .modal-dialog').hasClass('modal-fullscreen');
            var cardinfoheight = $('#cardinfo').height();
            var Infoaboutpublisherheight = $('#Infoaboutpublisher').height();
            var adsTopCardheight = $('.adsTopCard').height();
            var adsBottomCardheight = $('.adsBottomCard').height();
            var h = cardinfoheight + adsBottomCardheight + adsTopCardheight;
            var top = h - Infoaboutpublisherheight;
          if(cfullscreen == true){
			  
if ($('#showingCardModal .modal-body').is(':animated')) {
    $('#showingCardModal .modal-body').stop();
  } else {
			  
            $('#showingCardModal .modal-body').animate({
                scrollTop: top -64
            }, 500);
}
        }else{
          var showingCardModal = $('#showingCardModal').height();
           var h = cardinfoheight + adsBottomCardheight + adsTopCardheight;
            var top = h - Infoaboutpublisherheight;
			
if ($('#showingCardModal').is(':animated')) {
    $('#showingCardModal').stop();
  } else {
			
            $('#showingCardModal').animate({
                scrollTop: top -64
            }, 500);     
}
			
      }
        });
    }

        function InfoaboutpublisherItme() {
        $('#Infoaboutpublisher').on('shown.bs.collapse', function() {
            var hash = "#Infoaboutpublisher";
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 100);
        });
    }
	
function showAndroidToast(toast) {
        ScriptApp.showToast(toast);
		ScriptAppWeb.startonweb(70);
}



if (GeoArabicAndroid == true) {
  
$('[data-description]').click(function() {
var m = $(this).attr("data-description");
showAndroidToast(m)
});
}else{

$('[data-description]').hover(
function() {
var m = $(this).attr("data-description");
    $(this).attr("title",m)
  }, function() {
    $(this).removeAttr("title")
  }
);
  
}



var showADS = true;
if(getAcS_is == true && getAcS.AgeAtRegistration != '' && parseInt(getAcS.AgeAtRegistration) <= 13){
showADS = false;
}


function setSizeModal(){
var width = $("body").width();
if (width <= 299){
	
if(showADS){
refreshAdSlot1();
}

$('#showingCardModal .modal-dialog,#modalsharecard .modal-dialog').removeClass('modal-slg');
$('#showingCardModal .modal-dialog,#modalsharecard .modal-dialog').addClass('modal-fullscreen');
}else if (width >= 300 && width <= 430){
	
if(showADS){
refreshAdSlot2();
}

$('#showingCardModal .modal-dialog,#modalsharecard .modal-dialog').removeClass('modal-slg');
$('#showingCardModal .modal-dialog,#modalsharecard .modal-dialog').addClass('modal-fullscreen');
}else{

if(showADS){
refreshAdSlot3();
}

$('#showingCardModal .modal-dialog,#modalsharecard .modal-dialog').removeClass('modal-fullscreen');
$('#showingCardModal .modal-dialog,#modalsharecard .modal-dialog').addClass('modal-slg');
}
}

$('#IDURLOld').val(window.location.href);
$('#IDTitleOld').val(window.document.title);



function SetIUCNHTML(table,disnone,RedList_Num) {
table.push("<div class='IUCNClass'><div class='FastFactsmodalcardinfListContainer'><div class='factsLabel_3x2xkx'><span class='factsKey_rambtt'>حالة القائمة الحمراء لـ <span title='الإتحاد الدولي لحفظ الطبيعة'>IUCN <span></span></span><span class='factsKeyValue_card'><button type='button' class='btn btn-sm btn-light border border-1 p-0' data-bs-toggle='modal' data-bs-target='#modalIUCN' id='Btnscardinfcardinf' ><i class='fa fa-question fa-flip-horizontal p-0 px-2' aria-hidden='true'></i></button> : </span><span class='statusValueText' id='settextstatus'></span></span></div> </div> <div class='factsextinctionsContainer000 "+disnone+"'><span class='factsextinctionsLine000'></span> <div class='factsextinctions0001'> <div class='extinction_notthis' id='setclassList1' data-description='غير مهدد'><span>غم</span></div> <div class='extinction_notthis' id='setclassList2' data-description='قريب من التهديد'><span>قخ</span></div> <div class='extinction_notthis' id='setclassList3' data-description='معرض للإنقراض'><span>خد</span></div> <div class='extinction_notthis' id='setclassList4' data-description='مهدد بالإنقراض'><span>خم</span></div> <div class='extinction_notthis' id='setclassList5' data-description='مهدد بشكل حرج بالانقراض'><span>خق</span></div> <div class='extinction_notthis' id='setclassList6' data-description='منقرض من الحياة البرية'><span>قب</span></div> <div class='extinction_notthis' id='setclassList7' data-description='منقرض تماماً'><span>نق</span></div> </div><span class='Labelcard0001'>أقل خطورة</span><span class='Labelcard0002'>منقرضة</span> </div></div>");





$(document).ready(function() {
if(RedList_Num == 1){
$('#setclassList1').addClass('extinction_this extinctionbackgroundcolor160');
$('#setclassList1').removeClass('extinction_notthis');
$('#settextstatus').html('<span data-description="الأنواع المنتشرة والمتوفرة في الطبيعة">غير مهدد</span>');
$('#settextstatus').css('color','rgb(0, 160, 0)');
}else if(RedList_Num == 2){
$('#setclassList2').addClass('extinction_this extinctionbackgroundcolor174');
$('#setclassList2').removeClass('extinction_notthis');
$('#settextstatus').html('<span data-description="الأنواع التي لا تتأهل كي تصنف ضمن الفئات المذكورة في التالي ولكنها من المرجح أن تصل إلى إحدى هذه الفئات في المستقبل القريب">قريب من التهديد</span>');
$('#settextstatus').css('color','rgb(174, 202, 0)');
}else if(RedList_Num == 3){
$('#setclassList3').addClass('extinction_this extinctionbackgroundcolor249');
$('#setclassList3').removeClass('extinction_notthis');
$('#settextstatus').html('<span data-description="الأنواع المعرضة لخطورة الانقراض من الطبيعة">معرض للإنقراض</span>');
$('#settextstatus').css('color','rgb(249, 190, 2)');
}else if(RedList_Num == 4){
$('#setclassList4').addClass('extinction_this extinctionbackgroundcolor235');
$('#setclassList4').removeClass('extinction_notthis');
$('#settextstatus').html('<span data-description="الأنواع المعرضة بشكل كبير لخطورة الانقراض من الطبيعة">مهدد بالإنقراض</span>');
$('#settextstatus').css('color','rgb(235, 120, 0)');
}else if(RedList_Num == 5){
$('#setclassList5').addClass('extinction_this extinctionbackgroundcolor215');
$('#setclassList5').removeClass('extinction_notthis');
$('#settextstatus').html('<span data-description="الأنواع المعرضة بشدة كبيرة جدا لخطورة الانقراض من الطبيعة">مهدد بشكل حرج بالانقراض</span>');
$('#settextstatus').css('color','rgb(215, 41, 0)');
}else if(RedList_Num == 6){
$('#setclassList6').addClass('extinction_this extinctionbackgroundcolor60');
$('#setclassList6').removeClass('extinction_notthis');
$('#settextstatus').html('<span data-description="الأنواع التي تتواجد فقط في الأسر أو التربية الداخلية أو تتواجد في تجمعات غير طبيعية (تتواجد بعيدا عن التوزيع الطبيعي الأصلي لهذه الفئة)">منقرض من الحياة البرية</span>');
$('#settextstatus').css('color','rgb(60, 0, 168)');
}else if(RedList_Num == 7){
$('#setclassList7').addClass('extinction_this extinctionbackgroundcolor25');
$('#setclassList7').removeClass('extinction_notthis');
$('#settextstatus').html('<span data-description="لا يوجد في البرية او في الأسر من هذا الفصيل على قيد الحياة">منقرض تماماً</span>');
$('#settextstatus').css('color','rgb(25, 25, 25)');
}else if(RedList_Num == 8){
$('#settextstatus').html('<span data-description="لا تتوفر عنها معلومات عن توزيعها في الطبيعة أو تعرضها للتهديدات">لا يتوفر عنه معلومات كافية</span>');
$('#settextstatus').css('color','#000000');
}else if(RedList_Num == 9){
$('#settextstatus').html('<span data-description="الأنواع التي لم يتم تقييمها بعد">لم يقيَّم بعد</span>');
$('#settextstatus').css('color','#000000');
}else{
$('#settextstatus').html('لم يتم تحديد المعلومات');
$('#settextstatus').css('color','#5f5f5f');
}
});
}


function dataDescription() {
$(document).ready(function() {
if (GeoArabicAndroid == true) {
  
$('[data-description]').click(function() {
var m = $(this).attr("data-description");
showAndroidToast(m)
});
}else{

$('[data-description]').hover(
function() {
var m = $(this).attr("data-description");
    $(this).attr("title",m)
  }, function() {
    $(this).removeAttr("title")
  }
);
  
}
});
}


function conDidYouKnow(table,DidYouKnow_Answer,sharelink){
                    DidYouKnow_Answer = DidYouKnow_Answer.toString().replace("<br/>", "");
                    DidYouKnow_Answer = DidYouKnow_Answer.replace("<br>", "");
                    table.push("<hr/><center><div id='didyouknow'><p class='didyouknow0005'>هل تعلم</p><div class='didyouknow0004'></div><div class='owl-carousel owl-theme'>");
                   $(DidYouKnow_Answer).each(function() {
                        $(this).find('li').each(function() {
							var DidYouKnows = $(this).html();
							var btns;
							if(!GeoArabicAndroid){
							btns = "<div class='text-center'><a class='sharer sharer-tw' href='https://twitter.com/intent/tweet?hashtags=جيو_عربي&url=" + sharelink + "&text=هل تعلم: " + DidYouKnows + "&via=GeoArabs&related=GeoArabs' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='Twitter'><i class='fab fa-twitter' aria-hidden='true'> </i> </a> <a class='sharer sharer-wa' data-action='share/whatsapp/share' href='https://api.whatsapp.com/send?text=هل تعلم: " + DidYouKnows + "   " + sharelink + "' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='WhatsApp'><i class='fab fa-whatsapp' aria-hidden='true'></i></a></div>";
							}else{
							btns = "<div class='text-center'><a class='sharer sharer-tw' onclick='ShareTextTwitter(&quot;"+DidYouKnows+"&quot;)' title='Twitter'><i class='fab fa-twitter' aria-hidden='true'> </i> </a> <a class='sharer sharer-wa' onclick='ShareTextWatsApp(&quot;"+DidYouKnows+"&quot;)' rel='nofollow' target='_blank' title='WhatsApp'><i class='fab fa-whatsapp' aria-hidden='true'></i></a><a class='sharer sharer-fb' onclick='ShareTextFacebook(&quot;"+DidYouKnows+"&quot;)' rel='nofollow' target='_blank' title='WhatsApp'><i class='fa-brands fa-facebook' aria-hidden='true'></i></a></div>";
							}
                                table.push('<div class="item dukText">');
								table.push(DidYouKnows);
								table.push(btns);
								table.push('</div>');
						
								
                        });
					});
                    table.push('</div></div></center>');
 
 }
 
 

 
 function ShareTextTwitter(DidYouKnows){
	 var hashtags = "جيو_عربي";
	 var texts = DidYouKnows;
	 var url = $("#linkShareforcopy").val();
	 var via ="GeoArabs";
	 ScriptAppWeb.shareToTwitter(hashtags,texts,url,via)
 }
 
function ShareTextWatsApp(DidYouKnows){
	 var texts = DidYouKnows;
	 var url = $("#linkShareforcopy").val();
	 ScriptAppWeb.shareToWatsApp(texts,url)
}
 
function ShareTextFacebook(DidYouKnows){
	 var texts = DidYouKnows;
	 var url = $("#linkShareforcopy").val();
	 ScriptAppWeb.shareToFacebook(texts,url)
}








//function conLinkShort(PostUrlInSite_Answer){
//$("#linkShareforcopy").val(PostUrlInSite_Answer);
//        var xhr = new XMLHttpRequest();
//        xhr.open("GET", "https://api-ssl.bitly.com/v3/shorten?access_token=6ba802f80588128f34474436559fcae8556dd5c1&longUrl=" + PostUrlInSite_Answer);
//        xhr.onreadystatechange = function() {
//            if (xhr.readyState == 4) {
//                if (xhr.status == 200) {
//                    var text = xhr.responseText;
//                    var obj = JSON.parse(text);
//					var objlink = obj.data.url;
//                  if (obj.status_code == 200){
//                    $("#linkShareforcopy").val(objlink);
//					replaceurl(PostUrlInSite_Answer);
//                    }else{
//                    $("#linkShareforcopy").val(PostUrlInSite_Answer);
//					replaceurl(PostUrlInSite_Answer);
//					 }
//                }
//            }else{
 //                   $("#linkShareforcopy").val(PostUrlInSite_Answer);
//					replaceurl(PostUrlInSite_Answer);
//			}
//        }
//var obj = xhr.send();
//}


function conLinkShort(PostUrlInSite_Answer,PostIdInSite_Answer){
var PostUrl = PostUrlInSite_Answer.toString();
var PostId = PostIdInSite_Answer.toString();
PostId = "P" + PostId;
$("#linkShareforcopy").val(PostUrl);
//replaceurl(PostUrlInSite_Answer,PostUrl);

var getshorturl = "https://geoarabic1.firebaseio.com/pages/posts/"+PostId+"/url.json";

var jqxhr = $.getJSON( getshorturl, function() {

}).done(function(data) {

if(data.shortlink == null || data.shortlink == "undefined"){
getUrlShort(PostUrlInSite_Answer,PostIdInSite_Answer);
  }else{
                    $("#linkShareforcopy").val(data.shortlink);
					replaceurl(PostUrlInSite_Answer,data.shortlink);
  }

  })
  .fail(function(e) {
    console.log(e);
getUrlShort(PostUrlInSite_Answer,PostIdInSite_Answer);
  });

}





/*
function getUrlShort(PostUrlInSite_Answer,PostIdInSite_Answer) {
var Link = PostUrlInSite_Answer;
var Linkencode = Link.toString();
Linkencode = Linkencode.replace("http://","https://");
var longDynamicLink = "https://apps.geoarabic.com/?link=" + Linkencode + "&apn=com.ancard&amv=1&afl=https://play.google.com/store/apps/details?id=com.ancard";
  longDynamicLink= encodeURIComponent(longDynamicLink);
var getshorturl = "https://api-ssl.bitly.com/v3/shorten?access_token=6ba802f80588128f34474436559fcae8556dd5c1&longUrl=" + longDynamicLink;
var jqxhr = $.getJSON( getshorturl, function() {
}).done(function(datas) {
	if(datas.status_code == 200){
        var shortlink = datas.data.url;
        setUrlShort(PostUrlInSite_Answer,PostIdInSite_Answer,shortlink);
        $("#linkShareforcopy").val(shortlink);
		replaceurl(PostUrlInSite_Answer,shortlink);
	}else{
		$("#linkShareforcopy").val(Link);
		replaceurl(PostUrlInSite_Answer,Link);
		console.log(datas);
	}
		
  }).fail(function(e) {
    console.log(e);
                    $("#linkShareforcopy").val(Link);
					replaceurl(PostUrlInSite_Answer,Link);
  });
}
*/


function getUrlShort(PostUrlInSite_Answer,PostIdInSite_Answer) {
  
  
    var Link = PostUrlInSite_Answer;
    var Linkencode = Link.toString();
    Linkencode = Linkencode.replace("http://","https://");
    Linkencode= encodeURIComponent(Linkencode);
    var longDynamicLink = "https://apps.geoarabic.com/?link=" + Linkencode + "&apn=com.ancard&amv=1&afl=https://play.google.com/store/apps/details?id=com.ancard";

  
    var at = '0bcab6de428094a9d753ef0e36ab4bcc935021c9';
    var d = 'g.geoarabic.com';
    var set;
    fetch('https://api-ssl.bitly.com/v4/shorten', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer '+at,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "long_url": longDynamicLink, "domain": d})
    }).then( response => {
      set = response;
      return(response.json());
    }).then( response_json =>  {
      console.log(set.status);
      if(set.status==200 || set.status==201){
        var shortlink = response_json.link;
        setUrlShort(PostUrlInSite_Answer,PostIdInSite_Answer,shortlink);
        $("#linkShareforcopy").val(shortlink);
        replaceurl(PostUrlInSite_Answer,shortlink);

      }else{
            $("#linkShareforcopy").val(Link);
        	replaceurl(PostUrlInSite_Answer,Link);
        	console.log(response_json);
      }
      
    })

  }















function setUrlShort(PostUrlInSite_Answer,PostIdInSite_Answer,shortlink){
var PostUrl = PostUrlInSite_Answer;
var PostId = "P" + PostIdInSite_Answer;
var shortlinks = shortlink;
PostUrl = PostUrl.toString();
PostUrl = PostUrl.replace("http://","https://");
var blogStats = new Firebase("https://geoarabic1.firebaseio.com/pages/posts/"+PostId+"/url");
   blogStats.once("value", function(snapshot) {
      var data = snapshot.val();
      if (data.shortlink == null) {
blogStats.child(0).set(null);
blogStats.child("shortlink").set(shortlinks);
blogStats.child("url").set(PostUrl);
      }
   });
}























  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
      img.srcset = img.dataset.srcset;
    });
  } else {
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js';
    document.body.appendChild(script);
  }
  
  
  
  
  
  
  
  
  function setUserInfo(CUI,CUN,NP,UAId){
	  var CardUserImg = CUI;
	  var CardUserName = CUN;
	  var Name_publishing = NP;
	  var UserAccountId = UAId;
		
	  
    var blogStats = new Firebase("https://geoarabicuser-default-rtdb.firebaseio.com/profile/id/"+UserAccountId);
    blogStats.once("value", function(snapshot) {
        var data = snapshot.val();
        var NotFound = false;
        if (data == null) {
            data = {};
            data.view = 0;
            NotFound = true;
        }
        data.view++;
        
        
        
if ( NotFound == false){

try{ 
var AccountStatus = data.AccountStatus;
var LastName = data.LastName;
var LoginWith = data.LoginWith;
var UserAccountId = data.UserAccountId;
var UserEmail = data.UserEmail;
var UserUserID = data.UserUserID;
var UserGender = data.UserGender;
var UserID = data.UserID;
var UserImgProfile = data.UserImgProfile;
var UserName = data.UserName;
var edit = data.edit;



if(AccountStatus === "4"){
CardUserName = "<strong class='text-gray-dark'><i class='fas fa-user-shield text-primary' onclick='properties(&quot;admin&quot;)' aria-hidden='true'></i> <a href='https://card.geoarabic.com/p/user.html?user=" + UserUserID + "' class='link-dark fw-bold text-decoration-none'>" + UserName + " "+ LastName + "</a></strong>";
}else if(AccountStatus === "3"){
CardUserName = "<strong class='text-gray-dark'><i class='fa-solid fa-badge-check text-primary' onclick='properties(&quot;trust&quot;)' aria-hidden='true'></i> <a href='https://card.geoarabic.com/p/user.html?user=" + UserUserID + "' class='link-dark fw-bold text-decoration-none'>" + UserName + " "+ LastName + "</a></strong>";
}else if(AccountStatus === "2"){
CardUserName = "<strong class='text-gray-dark'><i aria-hidden='true' onclick='properties(&quot;vip&quot;)' class='fa fa-crown text-success'></i> <a href='https://card.geoarabic.com/p/user.html?user=" + UserUserID + "' class='link-dark fw-bold text-decoration-none'>" + UserName + " "+ LastName + "</a></strong>";
}else{
CardUserName = UserName + " " + LastName;
}

CardUserImg = data.UserImgProfile;
CardUserImg = CardUserImg.replace('=s120','=s96-c');

if (Name_publishing == "no") {
            CardUserImg = "https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/s96-c/default-user-image.png";
            CardUserName = "<i class='fas fa-user-lock text-secondary' onclick='properties(&quot;unknown&quot;)'></i> مجهول";
}



$("#UserInfo").html("<li class='list-group-item'><img src='" + CardUserImg + "' alt='Avatar' class='avatar'><br>" + CardUserName + "</li>");  






blogStats.child("view").set(data.view);

}catch(e){
if (Name_publishing == "no") {
            CardUserImg = "https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/s96-c/default-user-image.png";
            CardUserName = "مجهول";
}
$("#UserInfo").html("<li class='list-group-item'><img src='" + CardUserImg + "' alt='Avatar' class='avatar'><br>" + CardUserName + "</li>")
console.log(e)
 }
            
       
}else{
if (Name_publishing == "no") {
            CardUserImg = "https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/s96-c/default-user-image.png";
            CardUserName = "مجهول";
}
$("#UserInfo").html("<li class='list-group-item'><img src='" + CardUserImg + "' alt='Avatar' class='avatar'><br>" + CardUserName + "</li>")


}

    });
}
  
  
function postviews(PostUrlInSite_Answer,PostIdInSite_Answer,IdCard,Img_Answer,CommonName_Answer,UserAccountId){

var a = PostUrlInSite_Answer;
var b = PostIdInSite_Answer;
var c = IdCard.toString();
var d = Img_Answer.replace("=w136-h136-p","=s1600");
var e = CommonName_Answer;
var f = UserAccountId;

var elem = $("#postviews");
var blogStats = new Firebase("https://geoarabic1.firebaseio.com/pages/posts/P"+b);
blogStats.once("value", function(snapshot) {
var data = snapshot.val();
var isnew = false;
if(data == null) {
data= {};
data.value = 0;
data.url = a;
data.id = b;
data.iddrive = c;
data.img = d
data.title = e;
data.userid = f;
isnew = true;
}
elem.text(data.value);
data.value++;
if(isnew){
blogStats.set(data);
conLinkShort(a,b);
}else{
blogStats.child("value").set(data.value);
conLinkShort(a,b);
}
});
}







function setUserPostFavorite(u1,p1){
var useridf = u1;
var postidf = p1;

var blogStats = new Firebase("https://geoarabicuser-default-rtdb.firebaseio.com/favorite/"+useridf+"/"+postidf);
   blogStats.once("value", function(snapshot) {
      var data = snapshot.val();
      var isnew = false;
      if (data == null) {
         var isnew = true;
      }
      if (isnew) {
$('.'+postidf).removeAttr('disabled');
$('#btn_favorite').removeClass('d-none');
      } else {
$('.'+postidf+' .fa-star').addClass('fas').removeClass('far');
$('.'+postidf).removeAttr('disabled');         
$('#btn_favorite').removeClass('d-none');
$('.'+postidf+' input.post_favorite').prop( "checked", true );
      }
   });
}

function setUserPostFavoriteAll(UserAccountId_favorite){
$.getJSON("https://geoarabicuser-default-rtdb.firebaseio.com/favorite/"+UserAccountId_favorite+".json?", {
    alt: "json"
    }).catch(function(error) {

$('.btn_favorite').addClass('d-none');
     
    }).done(function(data) {
if(data){
var getPosts = Object.keys(data);
for (var nom = 0, len = getPosts.length; nom < len; nom++) {
    data[getPosts[nom].value] = getPosts[nom];
    if(data[getPosts[nom].value] == getPosts[nom]){		  
$('.'+getPosts[nom]+' .fa-star').addClass('fas').removeClass('far');
$('.'+getPosts[nom]).removeAttr('disabled');         
$('.'+getPosts[nom]).removeClass('d-none');
$('.'+getPosts[nom]+' input.post_favorite').prop( "checked", true );
}

    }
}
});
$('.btn_favorite').removeClass('d-none');
}



function btn_favorite(p,u,id){
var postid = p;
var userid = u;
var sheetId = id;
$('.'+postid).attr('disabled','');
$('.'+postid+' .fa-star').addClass('d-none');
$('.'+postid+' .spinner-grow').removeClass('d-none');
var UserPostFavorite = $('.'+postid+' input.post_favorite').is(':checked');
if(UserPostFavorite == true){
$('.'+postid+' input.post_favorite').prop( "checked", false );
UserPostFavorite = false;
}else{
$('.'+postid+' input.post_favorite').prop( "checked", true );
UserPostFavorite = true;
}
if(UserPostFavorite == true){
$('.'+postid+' .fa-star').addClass('fas').removeClass('far');
}else if(UserPostFavorite == false){
$('.'+postid+' .fa-star').addClass('far').removeClass('fas');
}
setPostFavorite(postid,userid,UserPostFavorite,sheetId)
};




function setPostFavorite(postid, userid, UserPostFavorite,sheetId) {
    var user = userid;
    var post = postid;
    var FavoriteStatus = UserPostFavorite;
const getDate_now = new Date();
var setDate = getDate_now.getTime();
    var blogStats = new Firebase("https://geoarabicuser-default-rtdb.firebaseio.com/favorite/" + user + "/" + post);
    blogStats.once("value", function(snapshot) {
        var data = snapshot.val();
        var tofavorite = ""
        var isnew = false;
        if (data == null) {
            data = {};
            data.favorite = FavoriteStatus;
            data.date = setDate;
            data.postID = post;
            data.sheetId = sheetId;
            var isnew = true;
        }
        if (isnew) {
            blogStats.set(data);

            if ($(window).innerWidth() <= 751) {
                setnote('تم الحفظ في قائمة المفضلة');
            } else {
                tofavorite = "yes";
                setTostFavorite(post, tofavorite);
            }

        } else {
            blogStats.child("favorite").set(null);
            blogStats.child("date").set(null);
            blogStats.child("postID").set(null);
            blogStats.child("sheetId").set(null);
            if ($(window).innerWidth() <= 751) {
                setnote('تم إزالة المشاركة من قائمة المفضلة');
            } else {
                tofavorite = "no";
                setTostFavorite(post, tofavorite);
            }
        }

        $('.' + post).removeAttr('disabled');
        $('.' + post + ' .fa-star').removeClass('d-none');
        $('.' + post + ' .spinner-grow').addClass('d-none');

    });

}


var toastsNom = 0;
function setTostFavorite(classId,tofavorite){
toastsNom++;
var dataname = $('.'+classId).attr('data-name');
var img = $('.'+classId).attr('data-img');
var name = getAcS.Name;
var lastname = getAcS.LastName;
var userimg = getAcS.Image;
var username = name + " " + lastname;

var pushHTML = [];
pushHTML.push('<div id="liveToast'+toastsNom+'" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">');
pushHTML.push('<div class="toast-header"> <img class="mx-1 rounded-circle" src="'+userimg+'" alt="'+username+'" width="30" height="30"> <strong class="me-auto">');
pushHTML.push(username);
pushHTML.push('</strong> <small>');
pushHTML.push('الآن');
pushHTML.push('</small> <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"><i aria-hidden="true" class="fa fa-times"></i></button></div>');
pushHTML.push('<div class="toast-body">');
if(img !== undefined){
pushHTML.push('<img class="mx-1 rounded-3" src="'+img+'" alt="'+name+'" width="30" height="30">');
}
if(tofavorite == "yes"){
pushHTML.push(' تم إضافة ');
pushHTML.push('<b class="text-success">'+dataname+'</b>');
pushHTML.push(' إلى ');
}else{
pushHTML.push(' تم إزالة ');
pushHTML.push('<b class="text-danger">'+dataname+'</b>');
pushHTML.push(' من ');
}

pushHTML.push('<a class="link-primary text-decoration-none" href="https://card.geoarabic.com/p/my-favorite.html">قائمة المفضلة</a>');
pushHTML.push('</div></div>');
$('#toast_favorite').append(pushHTML.join(''));
var liveToastEl = $('#liveToast'+toastsNom);
var liveToast = bootstrap.Toast.getOrCreateInstance(liveToastEl)
liveToast.show();
};



function forceDownload(url, fileName){
if (!GeoArabicAndroid){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function(){
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = fileName;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();
}else{
ScriptAppWeb.downloadImg(url,fileName);
}
}


function openmodalshare(){
if (!GeoArabicAndroid){
$('#modalsharecard').modal('show');
}else{
	var url = $("#linkShareforcopy").val();
	var title = document.title;
ScriptAppWeb.shareThis(url,title);
}
}

function onCompletePage(){
//splashwrapper();
//appScreenIsNight();
monitoStartPlay();
}

function onCompletePost(SummaryPage_Answer,RedList_Num,ImgSizeComparison_Answer,ImgMaps_Answer,DidYouKnow_Answer,MultipleImages_table,Name_publishing,Modeling_3D){
printpost(SummaryPage_Answer,RedList_Num,ImgSizeComparison_Answer,ImgMaps_Answer,DidYouKnow_Answer,MultipleImages_table,Name_publishing);
setBtnEditing();
setOptineNameLang();
setModeling_3DOptine(Modeling_3D);
  
}


function setModeling_3DOptine(Modeling_3D){	
if (Modeling_3D != 'NoData' && typeof Modeling_3D !== 'undefined' && Modeling_3D != '') {
          var Modeling_3D_l = Modeling_3D.result.length;
          var Modeling_3D_loadimgs = Modeling_3D.result.length;
          
          for(var i = 0;i<Modeling_3D_loadimgs;i++){
            var idimgs = Modeling_3D.result[i].imgid;

                var img = new Image();
                img.onload = function() {
                    var height = img.height;
                    var width = img.width;

                  
            if(Modeling_3D_l >= 3){
                $('#cardinfo #Modeling_3Dsheet .owl-carousel').owlCarousel({
                    responsiveClass: true,
                    autoHeight: true,
                    rtl: true,
                    items: 2,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    stagePadding: 30,
                    loop: true,
                    margin: 50,
                    nav: true,
                });
                }else{
                $('#cardinfo #Modeling_3Dsheet .owl-carousel').owlCarousel({
                    responsiveClass: true,
                    autoHeight: true,
                    rtl: true,
                    items: Modeling_3D_l,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    stagePadding: 0,
                    loop: false,
                    margin: 0,
                    nav: true,
                });
                }
                  
                }
                img.src = 'https://lh4.googleusercontent.com/u/0/d/'+idimgs+'=h135-w240-c';

          }

                
                
                
                
$( ".item_modeling_3d" ).click(function() {
var getID = $(this).attr('data-id');

$( "#Modeling_3DIfreame" ).html('<iframe class="rounded" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" src="https://video.geoarabic.com/p/3d.html?id='+getID+'"></iframe>');
$( "#Modeling_3DIfreame" ).removeClass('d-none');
//$( ".Modeling_text" ).addClass('d-none');
//    var url = location.href;               //Save down the URL without hash.
//    location.href = "#Modeling_3DIfreame";                 //Go to the target element.
//    history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
  
  
  

});

  
  
  
  
}
}
function setNew3diframes(getID) {
// getID = $(this).attr('data-id');

$( "#Modeling_3DIfreame" ).html('<iframe class="rounded" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" src="https://video.geoarabic.com/p/3d.html?id='+getID+'"></iframe>');
$( "#Modeling_3DIfreame" ).removeClass('d-none');
//$( ".Modeling_text" ).addClass('d-none');
//    var url = location.href;               //Save down the URL without hash.
//    location.href = "#Modeling_3DIfreame";                 //Go to the target element.
//    history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
  
  
  

}

  

function set3dany(table,Modeling_3D){
var Modeling_3Dlength = Modeling_3D.result.length;
var Modeling_text = " نماذج ثلاثية الأبعاد";
var itemspush = [''];
table.push("<hr/>");
table.push("<center>");
table.push("<div id='Modeling_3Dsheet'>");

if(Modeling_3Dlength == 1){
Modeling_text = "نموذج ثلاثي الأبعاد";
}
table.push("<div class='fontar1 Modeling_text mb-1'><i class='fa-brands fa-unity mx-1 text-muted'></i>"+Modeling_text+"</div>");
table.push("<div id='Modeling_3DIfreame' class='ratio ratio-16x9 d-none'></div>");
table.push("<div class='didyouknow0004 mb-2'></div>");
table.push("<div class='owl-carousel owl-theme'>");








var item3d = Modeling_3D;
                    
                    
$(Modeling_3D.result).each(function(i) {
var item = Modeling_3D.result;

var title = item[i].title;
var ids = item[i].id;
var thumbnail_url = item[i].imgid;
var author_name = item[i].name;
var thumbnail_width = item[i].width;
var thumbnail_height = item[i].height;

var idsec = encode(ids);

itemspush.push('<div class="text-center">');
itemspush.push('<div class="item item_modeling_3d" data-id="'+idsec+'" onclick="setNew3diframes(\''+idsec+'\')">');
itemspush.push('<div class="btn p-0">');
//itemspush.push();
itemspush.push('<img class="img-fluid rounded" width="240" height="135" src="https://lh4.googleusercontent.com/u/0/d/'+thumbnail_url+'=h135-w240-c"  alt="'+title+'">');
itemspush.push('</div>');
itemspush.push('</div>');
itemspush.push('</div>');
//




						
								
                        });
                        
                    table.push(itemspush.join(''));
                    table.push('</div></div></center>');
                    

                    

 }

function setGeographic_Range(Geographic_Range){
var pushcountintable = [''];
var GeographicRangeInfo = [''];
var GeographicRangeHide = [''];
var mapsOp = [];

var list_obcount = [''];


  
  
   $.getJSON("https://get.doitf.com/jsite/tools/flags/iso-3166-1.json?", {
    token: "9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee"

    }).catch(function(error) {
   console.log(error)
    }).done(function(recosts) {


pushcountintable.push('<button class="btn shadow-none collapsed border-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#GeographicRangeHide" aria-expanded="false" aria-controls="GeographicRangeHide">');

var farstcont = true;




var s = Geographic_Range;





function getcon(arrs, count, i) {
var mapsOpvar = "";
var keys = count.count;
var presence = count.p;
var origin = count.o;
var distribution_code = count.dc;
  

  
var sss = recosts.Results[keys].CountryCodes.iso2;


if(sss == keys&&sss!==undefined){
var set = recosts.Results[keys];

var contNameAr = set.Names.ar;
var contNameEn = set.Names.tl;
var contNameCode = set.CountryCodes.tld;
mapsOpvar += "{";
mapsOpvar += '"code"';
mapsOpvar += ':';
mapsOpvar += '"'+contNameCode+'"';
mapsOpvar += ',';
  
mapsOpvar += '"nameAr"';
mapsOpvar += ':';
mapsOpvar += '"'+contNameAr+'"';
mapsOpvar += ',';
  
mapsOpvar += '"nameEn"';
mapsOpvar += ':';
mapsOpvar += '"'+contNameEn+'"';
mapsOpvar += ',';
mapsOpvar += '"showAsSelected"';
mapsOpvar += ':';
mapsOpvar += true;
mapsOpvar += ',';
  
if(contNameCode == "il"){
 contNameAr = 'فلسطين';
 contNameEn = 'Palestine';
 contNameCode = 'ps';
}

  
var resultlengthcon = s.result.length;


if(presence == "Extant" && farstcont){

if(resultlengthcon != 1){
pushcountintable.push(contNameAr);
pushcountintable.push('<i class="fa-solid fa-caret-down mx-1"></i>');
pushcountintable.push("<span class='resultlengthcon'>+" +(resultlengthcon-1)+"</span>");
farstcont = false;
}else{
pushcountintable.push(contNameAr);
pushcountintable.push('<i class="fa-solid fa-caret-down mx-1"></i>');
   farstcont = false;
}
  
  
  
  


}
  
var Extant_color = "#212529";
if(presence == "Extant"){
Extant_color = "#198754";
}else if(presence == "Possibly Extinct"){
Extant_color = "#ff6700";
}else if(presence == "Extinct Post-1500"){
Extant_color = "#dc3545";
}else{
Extant_color = "#212529";
}

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


if(presence == "Extant"){
  
mapsOpvar += '"color"';
mapsOpvar += ':';
mapsOpvar += '"'+Extant_color+'"';
mapsOpvar += '}';
  
  
}else if(presence == "Possibly Extinct"){
  
mapsOpvar += '"color"';
mapsOpvar += ':';
mapsOpvar += '"'+Extant_color+'"';
mapsOpvar += '}';
  
  }else if(presence == "Extinct Post-1500"){
    
mapsOpvar += '"color"';
mapsOpvar += ':';
mapsOpvar += '"'+Extant_color+'"';
mapsOpvar += '}';
     
}else{
  
mapsOpvar += '"color"';
mapsOpvar += ':';
mapsOpvar += '"'+Extant_color+'"';
mapsOpvar += '}';
  
}
mapsOp.push(mapsOpvar);

  

 
  
  
if(resultlengthcon != 1){
  
  
     

var distribution_code_ar=""
if(distribution_code == "Native"){
distribution_code_ar = "الموطن الأصلي";
}else if(distribution_code == "Introduced"){
distribution_code_ar = "دخيل";
}else if(distribution_code == "Vagrant"){
 distribution_code_ar = "متشرد";
}else if(presence == "Present - Origin Uncertain"){
distribution_code_ar = "الموطن الأصلي غير مؤكد";
}else if(distribution_code == "Possibly Extinct"){
  distribution_code_ar = "ربما انقرض إقليميًا";
}else if(distribution_code == "Regionally Extinct"){
  distribution_code_ar = "منقرض إقليميًا";
}else if(distribution_code == "Reintroduced"){
  distribution_code_ar = "تم إعادتها";
}else{
  distribution_code_ar = "";
}






list_obcount.push('<li class="list-group-item p-1 border-0">');
list_obcount.push('<svg class="shadow mx-1 rounded-1" width="12" height="12" xmlns="http://www.w3.org/2000/svg"><image href="https://get.doitf.com/jsite/tools/flags/svg/country-4x3/'+contNameCode+'.svg" height="12" width="12"/></svg>');
list_obcount.push('<span  mx-1 style="color:'+Extant_color+'">'+contNameAr+'</span>');
list_obcount.push('<span class="fw-lighter mx-1 text-muted LabelConInfo"> '+distribution_code_ar+'</span>');
list_obcount.push('</li>');

 
 
 }
}


}


Object.keys(recosts.Results).forEach(function(key,i) {
var mapsOpvar2 = "";
 try{

var setmapsconts = recosts.Results[key];

var contNameAr2 = setmapsconts.Names.ar;
var contNameEn2 = setmapsconts.Names.tl;
var contNameCode2 = setmapsconts.CountryCodes.tld;
mapsOpvar2 += "{";
mapsOpvar2 += '"code"';
mapsOpvar2 += ':';
mapsOpvar2 += '"'+contNameCode2+'"';
mapsOpvar2 += ',';
  
mapsOpvar2 += '"nameAr"';
mapsOpvar2 += ':';
mapsOpvar2 += '"'+contNameAr2+'"';
mapsOpvar2 += ',';
  
mapsOpvar2 += '"nameEn"';
mapsOpvar2 += ':';
mapsOpvar2 += '"'+contNameEn2+'"';
mapsOpvar2 += ',';
  
mapsOpvar2 += '"showAsSelected"';
mapsOpvar2 += ':';
mapsOpvar2 += false;
mapsOpvar2 += ',';
  
  
mapsOpvar2 += '"color"';
mapsOpvar2 += ':';
mapsOpvar2 += '"#FF5608"';
mapsOpvar2 += '}';

mapsOp.push(mapsOpvar2);

}catch(e){
console.log('GeoArabic Info',e)
}
  
  

  
  
  
  
});


Object.keys(s.result).forEach(function(key,i) {
 try{
 getcon(recosts.Results, s.result[i],i)
}catch(e){
  
list_obcount.push('<li class="list-group-item p-1 border-0">');
list_obcount.push('<i class="fa-duotone fa-flag fa-2xs mx-1 shadow text-success"></i>+1');
list_obcount.push('</li>');
  
  
}



});
     



     
     
var setMapGeoAr = '<div id="GeoArabicMap" style="width: 100%; height:300px;"></div>';
pushcountintable.push('</button>');
GeographicRangeHide.push('<ul class="list-group list-group-flush showmorecounts">');
GeographicRangeHide.push(list_obcount.join(''));
GeographicRangeHide.push('<ul>');


     
     
     
     
     
var setmapsOp = '{"result":['+mapsOp.join()+']}';

 

     
if(s.result.length >=2){
  GeographicRangeInfo.push('<ul class="list-group list-group-flush">')
GeographicRangeInfo.push('<li class="list-group-item p-1 border-0"><i class="fa-solid fa-square-small mx-1" style="color:#198754"></i>متواجد</li>');
GeographicRangeInfo.push('<li class="list-group-item p-1 border-0"><i class="fa-solid fa-square-small mx-1" style="color:#ff6700"></i>ربما انقرض</li>');
GeographicRangeInfo.push('<li class="list-group-item p-1 border-0"><i class="fa-solid fa-square-small mx-1" style="color:#dc3545"></i>منقرض</li>');
GeographicRangeInfo.push('<li class="list-group-item p-1 border-0"><i class="fa-solid fa-square-small mx-1" style="color:#212529"></i>غير معروف</li>');
    GeographicRangeInfo.push('</ul>')
}


$('#GeographicRangeHideCont').html(GeographicRangeHide.join(''));
$('#GeographicRangeInfo').html(GeographicRangeInfo.join(''));
$('#GeographicRange').html(pushcountintable.join(''));
$('#GeographicRangeMaps').html(setMapGeoAr);
     

setMapGeoArabic(setmapsOp);
setOptineshowmorecount();
        
    });

    }

function setOptineshowmorecount(){
var showmorenamesTimeout;
$('#GeographicRangeHide').on('hide.bs.collapse', function(){
clearTimeout(showmorenamesTimeout);
showmorenamesTimeout = setTimeout(hidemorenameAn, 1);
function hidemorenameAn() {
$('#showRangeMaps').collapse('hide');
$('.resultlengthcon').show( "slow" );
$('button[data-bs-target="#GeographicRangeHide"] i.fa-caret-down').removeClass('rotateXcaret');
}
});
$('#GeographicRangeHide').on('show.bs.collapse', function(){
clearTimeout(showmorenamesTimeout);
showmorenamesTimeout = setTimeout(showmorenameAn, 1);
function showmorenameAn() {
$('.resultlengthcon').hide( "slow" );
$('#showRangeMaps').collapse('show');
$('button[data-bs-target="#GeographicRangeHide"] i.fa-caret-down').addClass('rotateXcaret rotateXcarettr');
}
});

}



function setMapGeoArabic(results){
var data =  JSON.parse(results);
var result = data.result;
var script = document.createElement('script');
var scrtext = 'var map = AmCharts.makeChart("GeoArabicMap",{ type: "map", theme: "dark", projection: "mercator", panEventsEnabled : true, backgroundColor : "#FFFFFF", backgroundAlpha : 1, zoomControl: { zoomControlEnabled : true }, areasSettings : { autoZoom : true, color : "#D6D6D6", colorSolid : "#FF5608", selectedColor : "#FF5608", outlineColor : "#9C9C9C", rollOverColor : "#FF7308", rollOverOutlineColor : "#666666" }, dataProvider : { map : "worldHigh", getAreasFromMap : true, areas : [';
  
  
  
for(var i = 0;i<result.length;i++){
var code,code2,nameAr,nameEn,color,showAsSelected;
code = result[i].code.toUpperCase();
code2 = result[i].code;
nameAr = result[i].nameAr;
nameEn = result[i].nameEn;
color = result[i].color;
showAsSelected = result[i].showAsSelected;
  
if(code == "IL"){
 nameAr = 'فلسطين';
 nameEn = 'Palestine';
}

  
scrtext += "{";
scrtext += '"id"';
scrtext += ':';
scrtext += '"'+code+'"';
scrtext += ',';
  
scrtext += '"title"';
scrtext += ':';
scrtext += '"'+nameAr+'"';

if(showAsSelected){
scrtext += ',';
scrtext += '"selectedColor"';
scrtext += ':';
scrtext += '"'+color+'"';
scrtext += ',';
  
scrtext += '"showAsSelected"';
scrtext += ':';
scrtext += showAsSelected;
}
scrtext += '}';

  
if(i != result.length-1){
scrtext+=','
}else{
scrtext+=']}});'
}
};
  


  
script.innerText = scrtext;
document.body.appendChild(script);
}




function setOptineNameLang(){
var showmorenamesTimeout;
$('#showmorenames').on('hide.bs.collapse', function(){
clearTimeout(showmorenamesTimeout);
showmorenamesTimeout = setTimeout(hidemorenameAn, 1);
function hidemorenameAn() {
$('button[data-bs-target="#showmorenames"] i.fa-caret-down').removeClass('rotateXcaret');
}
});
$('#showmorenames').on('show.bs.collapse', function(){
clearTimeout(showmorenamesTimeout);
showmorenamesTimeout = setTimeout(showmorenameAn, 1);
function showmorenameAn() {
$('button[data-bs-target="#showmorenames"] i.fa-caret-down').addClass('rotateXcaret rotateXcarettr');
}
});

}







function setBtnEditing(){
  
  
  
  

if(getAcS_is == true){
var idcardprint = $("#linkcardb").val();
var AccountStatus = getAcS.AccountStatus;

var idreplace = idcardprint.replace("ID1000000","");
var nomId = parseInt(idreplace); 
nomId = nomId+3;



var urlediting = "https://card.geoarabic.com/p/editing-post.html?id="+nomId;

if(AccountStatus == "3" || AccountStatus == 3){
var targetSet = '';
if(!GeoArabicAndroid){
targetSet = 'target="_blank"';
}
	
	
$("#btnCardEditing").html('<a class="btn btn-sm btn-outline-dark" href="'+urlediting+'" '+targetSet+'><i class="fa-solid fa-pen"></i></a>')
}else{
$("#btnCardEditing").html("")
}
}


}

function setCreatedCardInfo(){
var infocards = "<hr /><p class='fspcard'><i class='fa-solid fa-square-info'></i> <strong>حول المعلومات الواردة هنا:</strong>  تم إنشاء واعتماد المعلومات الواردة في هذه البطاقة من مصادر عالمية موثوقة، يساهم العديد من العلماء والباحثين في رصد وجمع المعلومات حول الكائنات الحية بهدف الحفاظ عليها. اذا كنت تواجه مشكلة يرجى <a href='https://card.geoarabic.com/p/contact.html'> التواصل معنا </a></p>"
return infocards;
}



























var inpage = 1;
var get_pathname = window.location.pathname;
get_pathname = get_pathname.slice(1,5);
if(isNaN(get_pathname)){
inpage = 1;
}else if(get_pathname == 0 || get_pathname == ""){
inpage = 1;
}else{
inpage = 2;
}

function monitoStartPlay(){
if(GeoArabicAndroid){
monitorstarts();

function monitorstarts(){
setTimeout(function(){
monitorprint()
}, 2000);
}


function monitorprint(){
if(inpage == 2){
$( "#monitor .noticeMonitor i.fa-print" ).css("margin-top","-34px");
}else{
$( "#monitor .noticeMonitor i.fa-print" ).css("margin-top","-30px");
}
$("#monitor").addClass("btn-outline-danger").removeClass("btn-outline-dark");

setTimeout(function(){
  $( "#monitor .noticeMonitor i.fa-print" ).remove();
    $( "#monitor .noticeMonitor" ).append("<i class='fa-solid fa-print pb-3'></i>");
monitorpdf();
}, 3000);
}


function monitorpdf(){
if(inpage == 2){
$("#monitor .noticeMonitor i.fa-file-pdf" ).css("margin-top","-34px");
}else{
$("#monitor .noticeMonitor i.fa-file-pdf" ).css("margin-top","-30px");
}
$("#monitor").addClass("btn-outline-success").removeClass("btn-outline-danger");

setTimeout(function(){
  $( "#monitor .noticeMonitor i.fa-file-pdf" ).remove();
    $( "#monitor .noticeMonitor" ).append("<i class='fa-solid fa-file-pdf pb-3'></i>");
monitorimage();
}, 3000);
}
function monitorimage(){
if(inpage == 2){
$( "#monitor .noticeMonitor i.fa-camera-viewfinder" ).css("margin-top","-34px");
}else{
$( "#monitor .noticeMonitor i.fa-camera-viewfinder" ).css("margin-top","-30px");
}
$("#monitor").addClass("btn-outline-primary").removeClass("btn-outline-success");

setTimeout(function(){
  $( "#monitor .noticeMonitor i.fa-camera-viewfinder" ).remove();
    $( "#monitor .noticeMonitor" ).append("<i class='fa-solid fa-camera-viewfinder pb-3'></i>");
monitorsquare();
}, 3000);
}
function monitorsquare(){
if(inpage == 2){
$( "#monitor .noticeMonitor i.fa-share-from-square" ).css("margin-top","-34px");
}else{
$( "#monitor .noticeMonitor i.fa-share-from-square" ).css("margin-top","-30px");
}
$("#monitor").addClass("btn-outline-dark").removeClass("btn-outline-primary");

setTimeout(function(){
  $( "#monitor .noticeMonitor i.fa-share-from-square" ).remove();
    $( "#monitor .noticeMonitor" ).append("<i class='fa-solid fa-share-from-square pb-3'></i>");
monitorprint();
}, 3000);
}

}

}


function printpost(SummaryPage_Answer,RedList_Num,ImgSizeComparison_Answer,ImgMaps_Answer,DidYouKnow_Answer,MultipleImages_table,Name_publishing) {



if (SummaryPage_Answer == "NoData" || SummaryPage_Answer == "") {
$("#printcardDescription").prop("checked",false);
$("#printcardDescription").attr("disabled","disabled");
}else{
$("#printcardDescription").prop("checked",true);
$("#printcardDescription").removeAttr("disabled");
}

RedList_Num = parseInt(RedList_Num);
if (RedList_Num <= 0 && RedList_Num >= 10) {
$("#printIUCNClass").prop("checked",false);
$("#printIUCNClass").attr("disabled","disabled");
}else{
$("#printIUCNClass").prop("checked",true);
$("#printIUCNClass").removeAttr("disabled");
}







var imgSizeIs = 0;
var imgMapsIs = 0;
if (ImgSizeComparison_Answer != "NoData" && ImgSizeComparison_Answer != "") {
	imgSizeIs = 1
}
if (ImgMaps_Answer != "NoData" && ImgMaps_Answer != "") {
	imgMapsIs = 1
}

if(imgSizeIs == 1 || imgMapsIs == 1){
$("#printimgmapandsize").prop("checked",true);
$("#printimgmapandsize").removeAttr("disabled");
}else{
$("#printimgmapandsize").prop("checked",false);
$("#printimgmapandsize").attr("disabled","disabled");
}









if (DidYouKnow_Answer == "NoData" || DidYouKnow_Answer == "") {
$("#printdidyouknow").prop("checked",false);
$("#printdidyouknow").attr("disabled","disabled");
}else{
$("#printdidyouknow").prop("checked",true);
$("#printdidyouknow").removeAttr("disabled");
}

if (MultipleImages_table == "NoData" || MultipleImages_table == "") {
$("#printcarouselImg").prop("checked",false);
$("#printcarouselImg").attr("disabled","disabled");
}else{
$("#printcarouselImg").prop("checked",true);
$("#printcarouselImg").removeAttr("disabled");
}



if (Name_publishing != "yes") {
$("#printuserpublisher").prop("checked",false);
$("#printuserpublisher").attr("disabled","disabled");
}else{
$("#printuserpublisher").prop("checked",false);
$("#printuserpublisher").removeAttr("disabled");
}

}







const idElementPrint = ref => {

var idcardprint = $("#linkcardb").val();
var printApp = "https://card.geoarabic.com/p/print-card.html?id="+idcardprint;
var printele = 0;



if ($('#printcardDescription').is(':checked')) {
printele += 1;
printApp+= "&isp=1"
}else{
printApp+= "&isp=0"	
}


if ($('#printtextTable').is(':checked')) {
printele += 1;
printApp+= "&it=1"
}else{
printApp+= "&it=0"	
}




if ($('#printIUCNClass').is(':checked')) {
printele += 1;
printApp+= "&iiucn=1"
}else{
printApp+= "&iiucn=0"	
}

if ($('#printimgmapandsize').is(':checked')) {
printele += 1;
printApp+= "&isc=1&ipm=1"
}else{
printApp+= "&isc=0&ipm=0"	
}

if ($('#printdidyouknow').is(':checked')) {
printele += 1;
printApp+= "&iduc=1"
}else{
printApp+= "&iduc=0"	
}



if($('#printcarouselImg').is(':checked')){
printele += 1;
printApp+= "&ii=1"
}else{
printApp+= "&ii=0"	
}




if ($('#printuserpublisher').is(':checked')) {
printele += 100;
printApp+= "&ic=1"
}else{
printApp+= "&ic=0"	
}











if(GeoArabicAndroid){
	
if(printele == 100){
setnote('يرجى تحديد محتوى إضافي');
}else if(printele >= 1){
$("#monitor").dropdown("hide");
//window.open(printApp, '_blank').focus();
location.replace(printApp)
}else{
setnote('يرجى تحديد محتوى واحد على الأقل');
}
	
	
	
	
	
	
	
	
}else{
	


$("#ifrmPrCard").remove();
const createdivprint = document.createElement("div");
createdivprint.id = "ifrmPrCard";
createdivprint.style.opacity = "0";
createdivprint.style.height = "1px";
createdivprint.style.overflow = "hidden";
document.body.appendChild(createdivprint);



    function createFramePrintCard() {
		const getifrmPrCard = document.getElementById("ifrmPrCard");
        var ifrmPrCard = document.createElement("iframe");
        ifrmPrCard.style.opacity = "0";
		ifrmPrCard.src = printApp;
        ifrmPrCard.style.width = "800px";
        ifrmPrCard.style.height = "10px";
		getifrmPrCard.appendChild(ifrmPrCard, getifrmPrCard);
    }
    




if(printele == 100){
setnote('يرجى تحديد محتوى إضافي');
}else if(printele >=1){
setnote("جارٍ تنسيق محتوى الطباعة...");
$("#monitor").dropdown("hide");
   createFramePrintCard();
   }else{
   setnote('يرجى تحديد محتوى واحد على الأقل');
   }
   





	
}
}




















$( window ).resize(function() {
var Img_W = 214;
var Img_H = 160;
var widthcard = '15rem;';
var paddingx = 2;
var margint = 2;
var mx = 'auto'
var windowW = window.innerWidth;
var windowH = window.innerHeight;
if(windowW <= 350){
	Img_W = 272;
	Img_H = 203;
	widthcard = '100%;';
	paddingx = 3;
	margint = 2;
  }else if(windowW >= 351 && windowW <= 400 ){
	Img_W = 166;
	Img_H = 124;
	widthcard = '11rem;';
	paddingx = 1;
	margint = 2;
  }else if(windowW >= 401 && windowW <= 457 ){
	Img_W = 182;
	Img_H = 136;
	widthcard = '12rem;';
	paddingx = 1;
	margint = 2;
  }else if(windowW >= 458 && windowW <= 934 ){
	Img_W = 190;
	Img_H = 148;
	widthcard = '13rem;';
	paddingx = 1;
	margint = 2;
  }else if(windowW >= 935){
	Img_W = 214;
	Img_H = 160;
	widthcard = '15rem;';
	paddingx = 2;
	margint = 3;
    mx = 0;
    
}

    
$('#cardslistall .col').attr('style','width:'+widthcard);
$('.card-img-top').attr('width',Img_W);
$('.card-img-top').attr('height',Img_H);
$('#cardslistall a.showModal.dataimg').attr('style','height:'+Img_H+'px');
$('#cardslistall .col').attr('class','col px-'+paddingx+' mt-'+margint+' mx-'+mx);

});









// صور البطاقة
function setAllMultipleImages(table, IncludeImg, ScientificName_Answer, CommonName_Answer, CommonName_Answer_En, MultipleImages_table) {
	
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var galleryId = getRandomInt(999999);
	
	
	
        var titleforimgdownload = 'GeoArabic';
        if (ScientificName_Answer != 'NoData' && ScientificName_Answer != '') {
            titleforimgdownload = ScientificName_Answer;
        } else if (CommonName_Answer_En != 'NoData' && CommonName_Answer_En != '') {
            titleforimgdownload = CommonName_Answer_En;
        } else if (CommonName_Answer != 'NoData' && CommonName_Answer != '') {
            titleforimgdownload = CommonName_Answer;
        }
	
if(navigator.onLine){

    if (IncludeImg == 1) {
		        $('.pswp__button--download').attr('data-title', titleforimgdownload);
        table.push('<hr/>');
        table.push('<div id="carouselImg' + galleryId + '" class="carousel slide carousel-fade" data-bs-ride="carousel">');
        $(MultipleImages_table).each(function() {
            var imglength_new = $(this).find('tr').length;
            var imglength = $(this).find('tr').length;
            var nom = $(this).find('tr').length - 1;
            var indicators_ = [];
            var inner_ = [];
            $(this).find('tr').each(function() {
                imglength_new--;
                var width = $(this).find('td').eq(0).html();
                var height = $(this).find('td').eq(1).html();
                var ids = $(this).find('td').eq(2).html();
                var getimgs = "https://lh4.googleusercontent.com/u/0/d/" + ids;
                var getimgsFullSize = getimgs + "=h" + height + "-w" + width + "-c";
                var getimgs600 = "https://lh4.googleusercontent.com/u/0/d/" + ids + "=h300-w568-c";
                if (imglength_new == nom) {
                    indicators_.push('<button type="button" data-bs-target="#carouselImg' + galleryId + '" data-bs-slide-to="' + imglength_new + '" class="active" aria-current="true" aria-label="' + ScientificName_Answer + '-' + imglength_new + '"></button>');
                    inner_.push('<a class="carousel-item active" href="' + getimgsFullSize + '" data-size="' + width + 'x' + height + '" data-med="' + getimgsFullSize + '" data-med-size="' + width + 'x' + height + '" data-author="Geo Arabic"><img src="' + getimgs600 + '" class="card-img d-block w-100 rounded" alt="' + CommonName_Answer + ' - جيو عربي"></a>');
                } else {
                    indicators_.push('<button type="button" data-bs-target="#carouselImg' + galleryId + '" data-bs-slide-to="' + imglength_new + '" aria-label="' + ScientificName_Answer + '-' + imglength_new + '"></button>');
                    inner_.push('<a class="carousel-item" href="' + getimgsFullSize + '" data-size="' + width + 'x' + height + '" data-med="' + getimgsFullSize + '" data-med-size="' + width + 'x' + height + '" data-author="Geo Arabic"><img src="' + getimgs600 + '" class="card-img d-block w-100 rounded" alt="' + CommonName_Answer + ' - جيو عربي"></a>');
                }
                if (imglength_new == 0) {
                    setTimeout(function() {
                        var indicators_join = '<div class="carousel-indicators">' + indicators_.join("") + '</div>';
                        var inner_join = '<div class="carousel-inner card-gallery">' + inner_.join("") + '</div>';
                        var endcodes = '<button class="carousel-control-prev" type="button" data-bs-target="#carouselImg' + galleryId + '" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">السابق</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselImg' + galleryId + '" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">التالي</span></button>'
                        $("#carouselImg" + galleryId).html(indicators_join + inner_join + endcodes);
                        settingImg(IncludeImg, galleryId);
                    }, 1000)
                }
            });
        });
        table.push('</div>');
    } else if (IncludeImg == 2) {
        table.push('<hr class="hrTOPcarouselImg"/>');
        table.push("<div id='carouselImg'><div class='carouselImgspinners p-4 text-center'><strong class='mt-2'>جارٍ تحميل الصور...</strong><br/><div class='mt-2 spinner-border text-danger'role='status'></div></div><div class='owl-carousel owl-theme' id='imageGallery" + galleryId + "'>");
        $(MultipleImages_table).each(function() {
            var objMultipleImages = [];
            var imgtestload = "https://lh3.googleusercontent.com/-HM8JQeF-WfY/YcjoshR8sxI/AAAAAAAAGqw/U0XnHMowd9ASctYrdcCZeifvIk_9x1AhQCNcBGAsYHQ/s1600/logo.pall.png";
            var imglength_new = $(this).find('tr').length;
            var imglength = $(this).find('tr').length - 1;
            $(this).find('tr').each(function() {
                imglength_new--;
                var width = $(this).find('td').eq(0).html();
                var height = $(this).find('td').eq(1).html();
                var ids = $(this).find('td').eq(2).html();
                var getimgsFullSize = "https://lh4.googleusercontent.com/u/0/d/" + ids;
                var getimgs600 = "https://lh4.googleusercontent.com/u/0/d/" + ids + "=h300-w568-c";
                if (imglength_new == imglength) {
                    objMultipleImages.push('<div class="item active" style="width:100%"><a href="' + getimgsFullSize + '" class="spotlight"><img src="' + getimgs600 + '" class="d-block w-100 rounded" alt="' + CommonName_Answer + ' - جيو عربي"></a></div>');
                    imgtestload = getimgs600;
                } else {
                    objMultipleImages.push('<div class="item" style="width:100%"><a href="' + getimgsFullSize + '" class="spotlight"><img src="' + getimgs600 + '" class="d-block w-100 rounded" alt="' + CommonName_Answer + ' - جيو عربي"></a></div>');
                }
                if (imglength_new == 0) {
                    setTimeout(function() {
                        $("#imageGallery" + galleryId).html(objMultipleImages.join(''));
                        var img = new Image();
                        img.onload = function() {
                            settingImg(IncludeImg, galleryId);
                        }
                        img.src = imgtestload;
                    }, 1000);
                }
            });
        });
        table.push('</div></div>');
    } else if (IncludeImg == 3) {
        table.push('<hr/>');
        table.push("<div id='carouselImg'><div class='carouselImgspinners p-4 text-center'><strong class='mt-2'>جارٍ تحميل الصور...</strong><br/><div class='mt-2 spinner-border text-danger'role='status'></div></div><div class='owl-carousel owl-theme' id='imageGallery" + galleryId + "'>");
        $(MultipleImages_table).each(function() {
            var imglength_new = $(this).find('tr').length;
            var objMultipleImages = [];
            $(this).find('tr').each(function() {
                imglength_new--;
                var width = $(this).find('td').eq(0).html();
                var height = $(this).find('td').eq(1).html();
                var ids = $(this).find('td').eq(2).html();
                var getimgsFullSize = "https://lh4.googleusercontent.com/u/0/d/" + ids;
                var getimgs300 = "https://lh4.googleusercontent.com/u/0/d/" + ids + "=h146-w300-c";
                objMultipleImages.push('<div class="item" style="width:100%"><a href="' + getimgsFullSize + '" class="spotlight"><img src="' + getimgs300 + '" class="d-block w-100 rounded" alt="' + CommonName_Answer + ' - جيو عربي"></a></div>');
                if (imglength_new == 0) {
                    setTimeout(function() {
                        $("#imageGallery" + galleryId).append(objMultipleImages.join(''));
                        settingImg(IncludeImg, galleryId)
                    }, 1000);
                }
            });
        });
        table.push('</div></div>');
    } else if (IncludeImg == 4) {
		        $('.pswp__button--download').attr('data-title', titleforimgdownload);
        table.push('<tr><td class="cardinfoname">الصور</td><td class="answercardinfo">');
        $(MultipleImages_table).each(function() {
            var imglength_new = $(this).find('tr').length;
            var imglength = $(this).find('tr').length;
            var nom = imglength - 1;
            var indicators = [];
            $(this).find('tr').each(function() {
                imglength_new--;
                var width = $(this).find('td').eq(0).html();
                var height = $(this).find('td').eq(1).html();
                var ids = $(this).find('td').eq(2).html();
                var getimgs = "https://lh4.googleusercontent.com/u/0/d/" + ids;
                var getimgsFullSize = getimgs + "=h" + height + "-w" + width + "-c";
                if (imglength_new == nom) {
                    table.push('<div class="card-gallery">');
                }
                if (imglength_new == nom) {
                    table.push('<a href="' + getimgsFullSize + '" data-size="' + width + 'x' + height + '" data-med="' + getimgsFullSize + '" data-med-size="' + width + 'x' + height + '" data-author="Geo Arabic"><i class="fa-solid fa-images"></i></a>');
                } else {
                    table.push('<a href="' + getimgsFullSize + '" data-size="' + width + 'x' + height + '" data-med="' + getimgsFullSize + '" data-med-size="' + width + 'x' + height + '" data-author="Geo Arabic"><i class="fa-solid fa-images w-0" style="font-size: 0;"></i></a>');
                }
                if (imglength_new == 0) {
                    table.push('</div>');
                    setTimeout(function() {
                        cardimgG();
                    }, 300);
                }
            });
        });
        table.push('</td></tr>');
    } else if (IncludeImg == 5) {
        $('.pswp__button--download').attr('data-title', titleforimgdownload);
        table.push('<hr class="hrTOPcarouselImg"/>');
        table.push("<div id='carouselImg'><div class='carouselImgspinners p-4 text-center'><strong class='mt-2'>جارٍ تحميل <span id='lengthImg'></span></strong><br/><div class='spinner-border text-danger my-2' role='status'><span class='visually-hidden'>إنتظار...</span> </div></div><div class='row row-cols-2 row-cols-md-4 g-2 card-gallery mx-1 my-2 d-none' style='direction:ltr' id='imageGallery" + galleryId + "' itemscope itemtype='http://schema.org/ImageGallery'>");
        var objMultipleImages = [];
        $(MultipleImages_table).each(function() {
            var imglength_new = $(this).find('tr').length;
            var imglength_text = "الصور";
            if (imglength_new == 1) {
                imglength_text = "صورة واحدة"
            } else if (imglength_new == 2) {
                imglength_text = "صورتين"
            } else if (imglength_new >= 3 && imglength_new <= 10) {
                imglength_text = imglength_new + " صور"
            } else if (imglength_new >= 11) {
                imglength_text = imglength_new + " صورة"
            }
            setTimeout(function() {
                $("#lengthImg").html(imglength_text);
            }, 100);
            $(this).find('tr').each(function() {
                $("#imageGallery").removeClass("d-none");
                imglength_new--;
                var width = $(this).find('td').eq(0).html();
                var height = $(this).find('td').eq(1).html();
                var ids = $(this).find('td').eq(2).html();
                var getimgs = "https://lh4.googleusercontent.com/u/0/d/" + ids;
                var getimgsFullSize = getimgs + "=h" + height + "-w" + width + "-c";
                var getimgs300 = getimgs + "=s300";
                var getimgs300c = getimgs + "=h146-w300-c";
				var getimgsSrcset = getimgs + "=s300 300w,"+getimgs + "=s612 612w, "+getimgs + "=s826 826w, "+getimgs + "=s1115 1115w, "+getimgs + "=s"+width+" "+width+"w";

                objMultipleImages.push('<a class="col" href="' + getimgsFullSize + '" data-pswp-srcset="'+getimgsSrcset+'" data-size="' + width + 'x' + height + '" data-med="' + getimgsFullSize + '" data-med-size="' + width + 'x' + height + '" data-author="Geo Arabic"><img srcset="'+getimgs300c+'" src="' + getimgs300+ '" alt="' + CommonName_Answer + '" class="card-img"/></a>')
                if (imglength_new == 0) {
                    setTimeout(function() {
                        $("#imageGallery" + galleryId).append(objMultipleImages.join(''));
                        $("#imageGallery" + galleryId).removeClass("d-none");
                        $(".carouselImgspinners").addClass("d-none");
                        cardimgG();
                    }, 1000);
                }
            });
        });
        table.push('</div></div>');
    }

}else{
   table.push('<hr class="hrTOPcarouselImg"/><div class="alert alert-warning d-flex align-items-center mx-4" role="alert"><i class="fa fa-info-circle my-2" aria-hidden="true"></i><div class="mx-2">  لا يمكن تحميل الصور بدون إتصال بالإنترنت</div></div>');
}

}




// إعدادات معرض الصور
function settingImg(IncludeImg, galleryId) {
    if (IncludeImg == 1) {
        var carouselImg = document.querySelector('#carouselImg' + galleryId)
        var carousel = new bootstrap.Carousel(carouselImg, {
            interval: 5000,
            wrap: true
        });
        cardimgG();
    } else if (IncludeImg == 2) {
        $(".carouselImgspinners").css("display", "none");
        $('#carouselImg .owl-carousel').owlCarousel({
            responsiveClass: true,
            autoHeight: true,
            rtl: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            stagePadding: 0,
            loop: true,
            margin: 20,
            nav: true,
            animateOut: 'fadeOut',
            animateIn: 'flipInX',
            lazyLoad: true
        });
        $('#carouselImg .owl-next').html('<span class="fa-stack fs-4"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-angle-left fa-stack-1x fs-2"></i></span>');
        $('#carouselImg .owl-prev').html('<span class="fa-stack fs-4"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-angle-right fa-stack-1x fs-2"></i></span>');
    } else if (IncludeImg == 3) {
        $(".carouselImgspinners").css("display", "none");
        $('#carouselImg .owl-carousel').owlCarousel({
            autoHeight: true,
            rtl: true,
            items: 3,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            stagePadding: 0,
            loop: false,
            margin: 20,
            nav: false,
            lazyLoad: true,
            smartSpeed: 4000,
            dotsSpeed: 250,
            dragEndSpeed: 250
        });
        $('#carouselImg .owl-dots').css('margin-top', '10px');
    }
}













function setPostCard(recosts,recosts_Questions,recostcardId,UserAccountIdcw,postManagement){
var getBackgroundCard = ''; //fff
var IncludeImg = 5; //1-5
var IncludeDidUknow = 1;
var IncludeIUCN = 1;
var IncludeSizeComparison = 1;
var IncludePresenceMap = 1;
var IncludeV3D = 1;
var IncludeImgPA = 1;

  
var AccountStatus_C = "";
  
if(getSC_is == true){
IncludeImg = getSC.Img;
IncludeDidUknow = getSC.DidUknow;
IncludeIUCN = getSC.IUCN;
IncludeSizeComparison = getSC.SizeImg;
IncludePresenceMap = getSC.MapImg;

	if(getSC.Img3D == 0 || getSC.Img3D == 1){
		 IncludeV3D = getSC.Img3D;
		 IncludeImgPA = getSC.ImgFile;
	}


}



if(getAcS_is == true){
AccountStatus_C = getAcS.AccountStatus;
}

	
	
setSizeModal();
    $(".spinnercard").css("display","block");
    $("#cardinfo").css("display","none");
$("#showingCard").html("");
    $("#showingCardModal").modal("show");

//star




    var getIdCard = recostcardId;
    var IdCard = getIdCard.replace('ID1000000', '');
    var IdCards = parseInt(IdCard);
    IdCard = IdCards + 2;
    if (getBackgroundCard != "") {
        $("body.bg-light").attr("style", "background-color:#" + getBackgroundCard + "!important");
    }
  
  
var item_Question = recosts_Questions;
var CommonName_Question = item_Question.values[4].formattedValue;//الإسم الشائع
var ScientificName_Question = item_Question.values[6].formattedValue;//الاسم العلمي
var Type_Question = item_Question.values[7].formattedValue;//النوع
var Class_Question = item_Question.values[8].formattedValue;//الطائفة
var Order_Question = item_Question.values[10].formattedValue;//الرتبة
var Subfamily_Question = item_Question.values[11].formattedValue;//الفصيلة
var Diet_Question = item_Question.values[12].formattedValue;//النظام الغذائي
var Age_Question = item_Question.values[13].formattedValue;//متوسط العمر
var Size_Question = item_Question.values[14].formattedValue;//الحجم
var Weight_Question = item_Question.values[15].formattedValue;//الوزن
var RedList_Question = item_Question.values[19].formattedValue;//حالة القائمة الحمراء (IUCN)
var Speed_Question = item_Question.values[21].formattedValue;//السرعة
var DurationPregnancy_Question = item_Question.values[22].formattedValue;//مدة الحمل
var PopulationTrend_Question = item_Question.values[16].formattedValue;//إتجاه السكان الحالي
var EcologicalHabitat_Question = item_Question.values[25].formattedValue;//الموطن البيئي
var Color_Question = item_Question.values[26].formattedValue;//الألوان
var Enemy_Question = item_Question.values[27].formattedValue;//الأعداء
var FeedOn_Question = item_Question.values[28].formattedValue;//الغذاء
var Img_Question = item_Question.values[29].formattedValue;//صورة الحيوان
var ImgCover_Question = item_Question.values[30].formattedValue;//صورة الغلاف
var MultipleImages_Question = item_Question.values[31].formattedValue;//صور متعددة
var JsonFileIdInDrive_Question = item_Question.values[32].formattedValue;//ملف Json
var DidYouKnow_Question = item_Question.values[43].formattedValue;//هل تعلم
var SourceInfo_Question = item_Question.values[52].formattedValue;//المراجع
var PostUrlInSite_Question = item_Question.values[61].formattedValue;//رابط المنشور
var PostIdInSite_Question = item_Question.values[62].formattedValue;//معرف المنشور هو
var SummaryPage_Question = item_Question.values[63].formattedValue;//وصف الموضوع
var ImgMaps_Question = item_Question.values[64].formattedValue;//صورة خريطة التواجد
var MultipleImages_table_Question = item_Question.values[67].formattedValue;//صور متعددة
var Geographic_Range_Question = item_Question.values[73].formattedValue;//النطاق الجغرافي
var Modeling_3D_Question = item_Question.values[74].formattedValue;//نماذج ثلاثية الأبعاد

  

	
	
    
//var dataPost = $("#getjsonpost").val();
//var alldataPost = JSON.parse(dataPost);



var new_item = recosts.sheets[0].data[0].rowData.reverse()[IdCard];
var testgetcard = new_item.values[1].formattedValue;// ID
if(getIdCard != testgetcard){
new_item = recosts.sheets[0].data[0].rowData.reverse()[IdCard];
}


  
  
  
  
  
  
  
  
  



var Timestamp = new_item.values[0].formattedValue;//تاريخ النشر
var ResponseNumber = new_item.values[1].formattedValue;//ID
var Published = new_item.values[2].formattedValue;//حالة النشر
var UserStatus = new_item.values[3].formattedValue;//حالة الحساب
var CommonName_Answer = new_item.values[4].formattedValue;//الإسم الشائع
var CommonName_Answer_En = new_item.values[5].formattedValue;//الإسم الشائع بالانجليزية هو
var ScientificName_Answer = new_item.values[6].formattedValue;//الإسم العلمي
var Type_Answer = new_item.values[7].formattedValue;//النوع
var Class_AnswerAR = new_item.values[8].formattedValue;//الطائفة
var Class_AnswerEN = new_item.values[9].formattedValue;//الإسم العلمي للطائفة
var Order_Answer = new_item.values[10].formattedValue;//الرتبة
var Subfamily_Answer = new_item.values[11].formattedValue;//الفصيلة
var Diet_Answer = new_item.values[12].formattedValue;//النظام الغذائي
var Age_Answer = new_item.values[13].formattedValue;//متوسط العمر
var Size_Answer = new_item.values[14].formattedValue;//الحجم
var Weight_Answer = new_item.values[15].formattedValue;//الوزن
var PopulationTrend_Answer = new_item.values[16].formattedValue;//إتجاه السكان الحالي
var PopulationTrend_Code = new_item.values[17].formattedValue;//رمز إتجاه السكان الحالي
var PopulationTrend_Num = new_item.values[18].formattedValue;//رقم إتجاه السكان الحالي
var RedList_Answer = new_item.values[19].formattedValue;//حالة القائمة الحمراء (IUCN)
var RedList_Num = new_item.values[20].formattedValue;//رقم حالة القائمة الحمراء (IUCN)
var Speed_Answer = new_item.values[21].formattedValue;//السرعة
var DurationPregnancy_Answer = new_item.values[22].formattedValue;//مدة الحمل
var NumBirths_Question = new_item.values[23].formattedValue;//عدد الصغار/البيض
var NumBirths_Answer = new_item.values[24].formattedValue;//عدد الصغار/البيض هو
var EcologicalHabitat_Answer = new_item.values[25].formattedValue;//الموطن البيئي
var Color_Answer = new_item.values[26].formattedValue;//الألوان
var Enemy_Answer = new_item.values[27].formattedValue;//الأعداء
var FeedOn_Answer = new_item.values[28].formattedValue;//الغذاء
var Img_Answer = new_item.values[29].formattedValue;//صورة الحيوان
var ImgCover_Answer = new_item.values[30].formattedValue;//صورة الغلاف
var MultipleImages_Answer = new_item.values[31].formattedValue;//صور متعددة
var JsonFileIdInDrive_Answer = new_item.values[32].formattedValue;//معرف ملف Json
var ImgSizeComparison_Question = new_item.values[33].formattedValue;//صورة مقارنة الحجم
var ImgSizeComparison_Answer = new_item.values[34].formattedValue;//صورة مقارنة الحجم
var info1_Question = new_item.values[35].formattedValue;//المعلومات الإضافية 1
var info1_Answer = new_item.values[36].formattedValue;//المعلومات الإضافية 1 هي
var info2_Question = new_item.values[37].formattedValue;//المعلومات الإضافية 2
var info2_Answer = new_item.values[38].formattedValue;//المعلومات الإضافية 2 هي
var info3_Question = new_item.values[39].formattedValue;//المعلومات الإضافية 3
var info3_Answer = new_item.values[40].formattedValue;//المعلومات الإضافية 3 هي
var info4_Question = new_item.values[41].formattedValue;//المعلومات الإضافية 4
var info4_Answer = new_item.values[42].formattedValue;//المعلومات الإضافية 4 هي
var DidYouKnow_Answer = new_item.values[43].formattedValue;//هل تعلم
var UserAccountId = new_item.values[44].formattedValue;//معرف حساب المستخدم
var UserLoginWith = new_item.values[45].formattedValue;//تسجيل دخول بإستخدام
var UserAccountImg = new_item.values[46].formattedValue;//صورة الملف الشخصي للمستخدم
var UserName = new_item.values[47].formattedValue;//إسم المستخدم
var UserEmail = new_item.values[48].formattedValue;//البريد الإلكتروني
var Name_publishing = new_item.values[49].formattedValue;//اظهار معلومات الناشر
var PageTitle = new_item.values[50].formattedValue;//عنوان الصفحة
var PageLink = new_item.values[51].formattedValue;//رابط الصفحة
var SourceInfo_Answer_Title = new_item.values[52].formattedValue;//عنوان المراجع
var SourceInfo_Answer_link = new_item.values[53].formattedValue;//رابط المراجع
var TheState = new_item.values[54].formattedValue;//الدولة
var CountryCode = new_item.values[55].formattedValue;//رمز الدولة
var IPAddress = new_item.values[56].formattedValue;//عنوان IP
var ScreenWidth = new_item.values[57].formattedValue;//عرض الشاشة
var ScreenHeight = new_item.values[58].formattedValue;//إرتفاع الشاشة
var MoreInformation = new_item.values[59].formattedValue;//معلومات إضافية
var dateID = new_item.values[60].formattedValue;//معرف تاريخ المنشور
var PostUrlInSite_Answer = new_item.values[61].formattedValue;//رابط المنشور
var PostIdInSite_Answer = new_item.values[62].formattedValue;//معرف المنشور
var SummaryPage_Answer = new_item.values[63].formattedValue;//وصف الموضوع
var ImgMaps_Answer = new_item.values[64].formattedValue;//صورة خريطة التواجد
var folderNameBasicSheet = new_item.values[65].formattedValue;//إسم المجلد
var folderIDBasicSheet = new_item.values[66].formattedValue;//معرف المجلد
var MultipleImages_table = new_item.values[67].formattedValue;//صور متعددة جديد
var Common_Names = new_item.values[72].formattedValue;//الأسماء المعروفة
var Geographic_Range = new_item.values[73].formattedValue;//النطاق الجغرافي
var Modeling_3D = new_item.values[74].formattedValue;//نماذج ثلاثية الأبعاد



var setIDCard = getIdCard;
var IDURL = PostUrlInSite_Answer.toString();
IDURL = IDURL.replace('http://','https://');
var IDTitle = CommonName_Answer.toString();
var IDDescription = SummaryPage_Answer.toString();
var Img_Answer_favorite = Img_Answer;
if(Common_Names != "NoData" && typeof Common_Names !== "undefined" && Common_Names != ""){
Common_Names =  JSON.parse(Common_Names);
}

if(Modeling_3D != "NoData" && typeof Modeling_3D !== "undefined" && Modeling_3D != ""){
Modeling_3D =  JSON.parse(Modeling_3D);
}else{
Modeling_3D == "NoData";
}





var sharelink = PostUrlInSite_Answer;


if(IDURL == "" || IDURL == "NoData"){
IDURL = "https://card.geoarabic.com";
}
if(IDTitle == "" || IDTitle == "NoData"){
IDTitle = "جيو عربي";
}
if(IDDescription == "" || IDDescription == "NoData"){
IDDescription = "بطاقة معلومات الحيوانات";
}

$("#IDURL").val(IDURL);
$("#IDTitle").val(IDTitle);
$("#IDDescription").val(IDDescription);
$("#linkcardb").val(setIDCard);
      
      Published = parseInt(Published); //حالة النشر
        UserStatus = parseInt(UserStatus); //حالة الحساب
        PopulationTrend_Num = parseInt(PopulationTrend_Num); //رقم إتجاه السكان الحالي
        RedList_Num = parseInt(RedList_Num); //رقم حالة القائمة الحمراء (IUCN)
        Img_Answer = Img_Answer.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi, "/w136-h136-p/");
		Img_Answer = Img_Answer.replace(/=s200|=s320|=s160|=h160|=h120|=s120|=s1600/gi, "=w136-h136-p");
        ImgSizeComparison_Answer = ImgSizeComparison_Answer.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi, "/s162/");
        ImgSizeComparison_Answer = ImgSizeComparison_Answer.replace('=s120', '=s162');
        ImgMaps_Answer = ImgMaps_Answer.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi, "/s162/");
		ImgMaps_Answer = ImgMaps_Answer.replace(/=s200|=s320|=s160|=h160|=h120|=s120|=s1600/gi, "=s162");
      
        var PstatusSymbol;
        if (PopulationTrend_Num == 1) {
            PstatusSymbol = '<i class="fas fa-arrow-left text-body mx-1"></i>';
        } else if (PopulationTrend_Num == 0) {
            PstatusSymbol = '<i class="fas fa-arrow-down text-danger mx-1"></i>';
        } else if (PopulationTrend_Num == 2) {
            PstatusSymbol = '<i class="fas fa-arrow-up text-success mx-1"></i>';
        } else {
            PstatusSymbol = '';
        }








var vapp1,vapp2,vapp3,titleNameEng;

if (CommonName_Answer_En != 'NoData') {
titleNameEng = ' ('+CommonName_Answer_En+')';
} else {
titleNameEng = '';
}

vapp1 = 'data-description="';
vapp2 = '"';
vapp3 = ': ';



			var SummaryPage = vapp1+SummaryPage_Answer+vapp2;
			if(SummaryPage_Answer == "NoData"){
				SummaryPage = "";
			}
var table = [''];
  
        if (Published == 0 && postManagement == 0) {
          table.push('<div class="alert alert-secondary" role="alert"> هذه البطاقة غير متوفرة! </div>');
        } else {
          
if (Published == 0 && postManagement == 1) {
          table.push('<div class="alert alert-danger" role="alert"> هذه المشاركة غير منشورة! </div>');
}
if(Name_publishing == 'no' && postManagement == 1){
          table.push('<div class="alert alert-secondary" role="alert"> لقد قمت بنشر هذه المشاركة بشكل مجهول </div>');
}
          
          
          table.push('<span '+SummaryPage+' class="incardbackgroundimage"><span class="cardbackgroundimage" style="background-image: url(&quot;' + Img_Answer + '&quot;);"></span></span>');
            table.push('<div class="TableDiv">');
            table.push('<table class="FastFactsTable" style="overflow-x:auto"><tbody>');
            if (CommonName_Answer != 'NoData' && typeof CommonName_Answer !== 'undefined' && CommonName_Answer != '') {
                $('#showingCard').html(CommonName_Answer);
                $('title').html(CommonName_Answer + ' - جيو عربي');
				
				
				
//nams    

		
var getCommon_Names_length = Common_Names.result.length;
var obnames = [""];
for(var glnm = 0;glnm<getCommon_Names_length;glnm++){
var alpha2s = Common_Names.result[glnm].language.alpha2;
if(alpha2s == "ar"){
alpha2s = "arabic";
}else if(alpha2s == "en"){
alpha2s = "gb";
}

var setTitleLang ="";
if(GeoArabicAndroid){
setTitleLang = 'onclick="setnote(\'اللغة: '+Common_Names.result[glnm].language.arabic+'\')"'
}else{
setTitleLang = 'title="اللغة: '+Common_Names.result[glnm].language.arabic+'"'
}


if(alpha2s == "gb"||alpha2s == "arabic"||alpha2s == "es"||alpha2s == "fr"||alpha2s == "de"){
obnames.push('<svg class="shadow mx-1 rounded-1" width="12" height="12" xmlns="http://www.w3.org/2000/svg"><image href="https://get.doitf.com/jsite/tools/flags/svg/country-4x3/'+alpha2s+'.svg" height="12" width="12"/></svg>');
}else if(Common_Names.result[glnm].primary){
obnames.push('<i class="fa-duotone fa-flag fa-2xs mx-1 shadow text-success"></i>');
}else{
obnames.push('<i class="fa-duotone fa-flag fa-2xs mx-1 shadow"></i>');
}


if(Common_Names.result[glnm].primary){
obnames.push('<span class="text-success" '+setTitleLang+'>'+Common_Names.result[glnm].name+'</span>');
}else{
obnames.push('<span '+setTitleLang+'>'+Common_Names.result[glnm].name+'</span>');
}
obnames.push('<br/>');
}
                

table.push('<tr>');
table.push('<td class="cardinfoname">' + CommonName_Question + '</td>');

table.push('<td class="answercardinfo">');
table.push('<button class="btn shadow-none collapsed border-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#showmorenames" aria-expanded="false" aria-controls="showmorenames">');
table.push(CommonName_Answer);
table.push('<i class="fa-solid fa-caret-down mx-1"></i>');
table.push('</button>');
table.push('<div class="collapse" id="showmorenames">');
table.push(obnames.join(""));
if(SummaryPage_Answer != "NoData" && SummaryPage_Answer != ""&& SummaryPage_Answer != undefined){
var textSummary = '<span>'+SummaryPage_Answer+'</span>';
var wordsSummary = textSummary.split(' ');
var wordsSummarylength = textSummary.trim().split(/\s+/).length;
if(window.matchMedia('(min-width:576px)').matches){
if(wordsSummarylength > 7&& getCommon_Names_length <= 4)
textSummary = textSummary.replace(wordsSummary[5],"<br/>"+wordsSummary[5]);
if(wordsSummarylength > 12 && getCommon_Names_length <= 3)
textSummary = textSummary.replace(wordsSummary[10],"<br/>"+wordsSummary[10]);
}
table.push('<span>'+textSummary+'</span>');
}
table.push('</div>');
table.push('</td>');
table.push('</tr>');



//end nams			
				
				
            }
            if (ScientificName_Answer != 'NoData' && typeof ScientificName_Answer !== 'undefined' && ScientificName_Answer != '') {


                table.push('<tr '+vapp1+ScientificName_Question+vapp3+ScientificName_Answer+vapp2+'><td class="cardinfoname">' + ScientificName_Question + '</td><td class="answercardinfo">' + ScientificName_Answer + '</td></tr>');
            }
            if (Type_Answer != 'NoData' && typeof Type_Answer !== 'undefined' && Type_Answer != '' && Type_Answer.toString() != Class_AnswerAR.toString()) {
                table.push('<tr '+vapp1+Type_Question+vapp3+Type_Answer+vapp2+'><td class="cardinfoname">' + Type_Question + '</td><td class="answercardinfo">' + Type_Answer + '</td></tr>');
            }
            if (Class_AnswerEN != 'None' && Class_AnswerAR != 'NoData' && typeof Class_AnswerAR !== 'undefined' && Class_AnswerAR != '') {
                table.push('<tr '+vapp1+Class_Question+vapp3+Class_AnswerAR+vapp2+'><td class="cardinfoname">' + Class_Question + '</td><td class="answercardinfo">' + Class_AnswerAR + '</td></tr>');
            }
            if (Order_Answer != 'NoData' && typeof Order_Answer !== 'undefined' && Order_Answer != '') {
                table.push('<tr '+vapp1+Order_Question+vapp3+Order_Answer+vapp2+'><td class="cardinfoname">' + Order_Question + '</td><td class="answercardinfo">' + Order_Answer + '</td></tr>');
            }
            if (Subfamily_Answer != 'NoData' && typeof Subfamily_Answer !== 'undefined' && Subfamily_Answer != '') {
                table.push('<tr '+vapp1+Subfamily_Question+vapp3+Subfamily_Answer+vapp2+'><td class="cardinfoname">' + Subfamily_Question + '</td><td class="answercardinfo">' + Subfamily_Answer + '</td></tr>');
            }
            if (Weight_Answer != 'NoData' && typeof Weight_Answer !== 'undefined' && Weight_Answer != '') {
                table.push('<tr '+vapp1+Weight_Question+vapp3+Weight_Answer+vapp2+'><td class="cardinfoname">' + Weight_Question + '</td><td class="answercardinfo">' + Weight_Answer + '</td></tr>');
            }
            if (Size_Answer != 'NoData' && typeof Size_Answer !== 'undefined' && Size_Answer != '') {
                table.push('<tr '+vapp1+Size_Question+vapp3+Size_Answer+vapp2+'><td class="cardinfoname">' + Size_Question + '</td><td class="answercardinfo">' + Size_Answer + '</td></tr>');
            }
            if (Age_Answer != 'NoData' && typeof Age_Answer !== 'undefined' && Age_Answer != '') {
                table.push('<tr '+vapp1+Age_Question+vapp3+Age_Answer+vapp2+'><td class="cardinfoname">' + Age_Question + '</td><td class="answercardinfo">' + Age_Answer + '</td></tr>');
            }
            if (EcologicalHabitat_Answer != 'NoData' && typeof EcologicalHabitat_Answer !== 'undefined' && EcologicalHabitat_Answer != '') {
                table.push('<tr '+vapp1+EcologicalHabitat_Question+vapp3+EcologicalHabitat_Answer+vapp2+'><td class="cardinfoname">' + EcologicalHabitat_Question + '</td><td class="answercardinfo">' + EcologicalHabitat_Answer + '</td></tr>');
            }
            if (Geographic_Range != 'NoData' && typeof Geographic_Range !== 'undefined' && Geographic_Range != '') {

Geographic_Range =  JSON.parse(Geographic_Range);
                table.push('<tr><td class="cardinfoname">' + Geographic_Range_Question + '</td><td class="answercardinfo" id="GeographicRange">' + Geographic_Range.count + ' <div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظر...</span></div></td></tr>');
				
                table.push('<tr class="collapse" id="GeographicRangeHide" style="background-color:#fff;"><td class="answercardinfo  d-inline" id="GeographicRangeInfo"><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظر...</span></div></td><td class="answercardinfo" id="GeographicRangeHideCont"><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظر...</span></div></td></tr><tr class="d-none"></tr>');

                table.push('<tr class="collapse" id="showRangeMaps"><td colspan="2" style="background-color:#fff;" class="answercardinfo" id="GeographicRangeMaps"><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظر...</span></div></td></tr><tr class="d-none"></tr>');

				
setGeographic_Range(Geographic_Range);
}


			
			
			
			
            if (Diet_Answer != 'NoData' && typeof Diet_Answer !== 'undefined' && Diet_Answer != '') {
                table.push('<tr '+vapp1+Diet_Question+vapp3+Diet_Answer+vapp2+'><td class="cardinfoname">' + Diet_Question + '</td><td class="answercardinfo">' + Diet_Answer + '</td></tr>');
            }
            if (FeedOn_Answer != 'NoData' && typeof FeedOn_Answer !== 'undefined' && FeedOn_Answer != '') {
                table.push('<tr '+vapp1+FeedOn_Question+vapp3+FeedOn_Answer+vapp2+'><td class="cardinfoname">' + FeedOn_Question + '</td><td class="answercardinfo">' + FeedOn_Answer + '</td></tr>');
            }
            if (Enemy_Answer != 'NoData' && typeof Enemy_Answer !== 'undefined' && Enemy_Answer != '') {
                table.push('<tr '+vapp1+Enemy_Question+vapp3+Enemy_Answer+vapp2+'><td class="cardinfoname">' + Enemy_Question + '</td><td class="answercardinfo">' + Enemy_Answer + '</td></tr>');
            }
            if (Speed_Answer != 'NoData' && typeof Speed_Answer !== 'undefined' && Speed_Answer != '') {
                table.push('<tr '+vapp1+Speed_Question+vapp3+Speed_Answer+vapp2+'><td class="cardinfoname">' + Speed_Question + '</td><td class="answercardinfo">' + Speed_Answer + '</td></tr>');
            }
            if (DurationPregnancy_Answer != 'NoData' && typeof DurationPregnancy_Answer !== 'undefined' && DurationPregnancy_Answer != '') {
                table.push('<tr '+vapp1+DurationPregnancy_Question+vapp3+DurationPregnancy_Answer+vapp2+'><td class="cardinfoname">' + DurationPregnancy_Question + '</td><td class="answercardinfo">' + DurationPregnancy_Answer + '</td></tr>');
            }
            if (NumBirths_Answer != 'NoData' && typeof NumBirths_Answer !== 'undefined' && NumBirths_Answer != '') {
                table.push('<tr '+vapp1+NumBirths_Question+vapp3+NumBirths_Answer+vapp2+'><td class="cardinfoname">' + NumBirths_Question + '</td><td class="answercardinfo">' + NumBirths_Answer + '</td></tr>');
            }
            if (Color_Answer != 'NoData' && typeof Color_Answer !== 'undefined' && Color_Answer != '') {
                table.push('<tr '+vapp1+Color_Question+vapp3+Color_Answer+vapp2+'><td class="cardinfoname">' + Color_Question + '</td><td class="answercardinfo">' + Color_Answer + '</td></tr>');
            }
            if (info1_Answer != 'NoData' && typeof info1_Answer !== 'undefined' && info1_Answer != '') {
                table.push('<tr '+vapp1+info1_Question+vapp3+info1_Answer+vapp2+'><td class="cardinfoname">' + info1_Question + '</td><td class="answercardinfo">' + info1_Answer + '</td></tr>');
            }
            if (info2_Answer != 'NoData' && typeof info2_Answer !== 'undefined' && info2_Answer != '') {
                table.push('<tr '+vapp1+info2_Question+vapp3+info2_Answer+vapp2+'><td class="cardinfoname">' + info2_Question + '</td><td class="answercardinfo">' + info2_Answer + '</td></tr>');
            }
            if (info3_Answer != 'NoData' && typeof info3_Answer !== 'undefined' && info3_Answer != '') {
                table.push('<tr '+vapp1+info3_Question+vapp3+info3_Answer+vapp2+'><td class="cardinfoname">' + info3_Question + '</td><td class="answercardinfo">' + info3_Answer + '</td></tr>');
            }
            if (info4_Answer != 'NoData' && typeof info4_Answer !== 'undefined' && info4_Answer != '') {
                table.push('<tr '+vapp1+info4_Question+vapp3+info4_Answer+vapp2+'><td class="cardinfoname">' + info4_Question + '</td><td class="answercardinfo">' + info4_Answer + '</td></tr>');
            }
            if (PopulationTrend_Num >= 0 && PopulationTrend_Num <= 2) {
                table.push('<tr '+vapp1+PopulationTrend_Question+vapp3+PopulationTrend_Answer+vapp2+'><td class="cardinfoname">' + PopulationTrend_Question + '</td><td class="answercardinfo">' + PopulationTrend_Answer + PstatusSymbol + '</td></tr>');
            }
            if (MultipleImages_table != 'NoData' && typeof MultipleImages_table !== 'undefined' && MultipleImages_table != '' && IncludeImg == 4) {
setAllMultipleImages(table,IncludeImg,ScientificName_Answer,CommonName_Answer,CommonName_Answer_En,MultipleImages_table);
                
            }

            table.push('</tbody></table>');


          
            table.push('</div>');
          

          
   //       table.push('<div id="text-center p-0 m-0 overflow-visible adsCenterCard"><div id="adSlotCenter1" class="mb-0 m-auto" style="display: none;"></div> <div id="adSlotCenter2" class="mb-0 m-auto" style="display: none;"></div> <div id="adSlotCenter3" class="mb-0 m-auto" style="display: none;"></div></div>');
          
          
          
          
if (RedList_Num >= 1 && RedList_Num <= 9) {
var disnone; 
	if (IncludeIUCN == 1) {
		disnone = '';
	if (RedList_Num == 8 || RedList_Num == 9) {
	disnone = 'd-none';
}
			



                  
SetIUCNHTML(table,disnone,RedList_Num);
                  
                  

                }
            }      
     
          
          
          
          
          
          

            if (DidYouKnow_Answer != 'NoData' && typeof DidYouKnow_Answer !== 'undefined' && DidYouKnow_Answer != '') {
                if (IncludeDidUknow == 1) {
conDidYouKnow(table,DidYouKnow_Answer,sharelink);
                }
            }
          
          
           if (Modeling_3D != 'NoData' && typeof Modeling_3D !== 'undefined' && Modeling_3D != '') {
	if (IncludeV3D == 1) {
		set3dany(table,Modeling_3D);
	}
                }
          
          
          
if (ImgSizeComparison_Answer != 'NoData' && typeof ImgSizeComparison_Answer !== 'undefined' && ImgSizeComparison_Answer != '' && ImgMaps_Answer != 'NoData' && typeof ImgMaps_Answer !== 'undefined' && ImgMaps_Answer != ''){
	
if (IncludeSizeComparison == 1 && IncludePresenceMap == 1) {
	table.push('<hr/><div class="container overflow-hidden"><div class="row row-cols-1 row-cols-md-2 row-cols-sm-2 g-2 mt-2">');
}else if(IncludeSizeComparison == 1 || IncludePresenceMap == 1){
	table.push('<hr/><div class="container overflow-hidden">');
}
}else if (ImgSizeComparison_Answer != 'NoData' && typeof ImgSizeComparison_Answer !== 'undefined' && ImgSizeComparison_Answer != ''){
if(IncludeSizeComparison == 1){
	table.push('<hr/><div class="container overflow-hidden">');
}
}else if (ImgMaps_Answer != 'NoData' && typeof ImgMaps_Answer !== 'undefined' && ImgMaps_Answer != '') {
if(IncludePresenceMap == 1){
	table.push('<hr/><div class="container overflow-hidden">');
}
}

if(IncludeSizeComparison == 1){
if (ImgSizeComparison_Answer != 'NoData' && typeof ImgSizeComparison_Answer !== 'undefined' && ImgSizeComparison_Answer != '') {
var ImgSizeComparison = ImgSizeComparison_Answer.toString().replace(/\/s200\/|\/s320\/|\/s160\/|\/h160\/|\/h120\/|\/s120\/|\/s1600\//gi, "/s162/");
ImgSizeComparison = ImgSizeComparison.replace(/=s200|=s162|=s320|=s160|=h160|=h120|=s120|=s1600|=s1900/gi, "=s162");
ImgSizeComparison = ImgSizeComparison.replace("=s162", "=s400");
  table.push('<div class="col"><div class="card"><img src="'+ImgSizeComparison+'" class="card-img-top" alt="'+ImgSizeComparison_Question+'"><div class="card-body p-1 text-center border-top"><p class="card-text">'+ImgSizeComparison_Question+'</p></div></div></div>');
  }
}

if(IncludePresenceMap == 1){
if (ImgMaps_Answer != 'NoData' && typeof ImgMaps_Answer !== 'undefined' && ImgMaps_Answer != '') {
var ImgMapsAnswer = ImgMaps_Answer.toString().replace(/\/s200\/|\/s320\/|\/s160\/|\/h160\/|\/h120\/|\/s120\/|\/s1600\//gi, "/s162/");
ImgMapsAnswer = ImgMapsAnswer.replace(/=s200|=s162|=s320|=s160|=h160|=h120|=s120|=s1600|=s1900/gi, "=s162");
ImgMapsAnswer = ImgMapsAnswer.replace("=s162", "=s400");
  table.push('<div class="col"><div class="card"><img src="'+ImgMapsAnswer+'" class="card-img-top" alt="'+ImgMaps_Question+'"><div class="card-body p-1 text-center"><p class="card-text">'+ImgMaps_Question+'</p></div></div></div>');
            
}  
}

if (ImgSizeComparison_Answer != 'NoData' && typeof ImgSizeComparison_Answer !== 'undefined' && ImgSizeComparison_Answer != '' && ImgMaps_Answer != 'NoData' && typeof ImgMaps_Answer !== 'undefined' && ImgMaps_Answer != ''){
	
if (IncludeSizeComparison == 1 && IncludePresenceMap == 1) {
	table.push('</div></div>');
}else if(IncludeSizeComparison == 1 || IncludePresenceMap == 1){
	table.push('</div>');
}
}else if(ImgSizeComparison_Answer != 'NoData' && typeof ImgSizeComparison_Answer !== 'undefined' && ImgSizeComparison_Answer != ''){
if(IncludeSizeComparison == 1){
	table.push('</div>');
}
}else if(ImgMaps_Answer != 'NoData' && typeof ImgMaps_Answer !== 'undefined' && ImgMaps_Answer != '') {
if(IncludePresenceMap == 1){
	table.push('</div>');
}
}

          
          
          


          

          
          
            if (MultipleImages_table != 'NoData' && typeof MultipleImages_table !== 'undefined' && MultipleImages_table != '' && IncludeImg != 4) {
setAllMultipleImages(table,IncludeImg,ScientificName_Answer,CommonName_Answer,CommonName_Answer_En,MultipleImages_table);
              
            }
        }
        var getsetIdCard = getIdCard;
        var CardName = CommonName_Answer;
        var CardTimestamp = Timestamp;
        var CardUserName = UserName;
        var CardUserImg = UserAccountImg;
        CardUserImg = CardUserImg.toString().replace("=s96-c", "=s50-c");
              if (SourceInfo_Answer_Title != 'NoData' && typeof SourceInfo_Answer_Title !== 'undefined' && SourceInfo_Answer_Title != '') {
          CardName = "معلومات حول " + CommonName_Answer + " - " + ScientificName_Answer;
        }else{
          CardName = "معلومات حول " + CommonName_Answer;
        }

        var alertcard = "";
        var removedcard = "";
        if (UserStatus == 0) {
            CardUserImg = "https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png";
            CardUserName = "مجهول";
        } else if (UserStatus == 1) {
            CardUserName = CardUserName;
            CardUserImg = UserAccountImg;
        } else if (UserStatus == 2) {
            CardUserName = "<i aria-hidden='true' onclick='properties(&quot;vip&quot;)' class='fa fa-crown text-success'></i> " + CardUserName;
            CardUserImg = UserAccountImg;
        } else if (UserStatus == 3){
            CardUserName = "<i class='fa-solid fa-badge-check text-primary' onclick='properties(&quot;trust&quot;)' aria-hidden='true'></i> " + CardUserName;
            CardUserImg = UserAccountImg;
        } else if (UserStatus == 4){
            CardUserName = "<i class='fas fa-user-shield text-primary' onclick='properties(&quot;admin&quot;)' aria-hidden='true'></i> " + CardUserName;
            CardUserImg = UserAccountImg;
        } else {
            CardUserImg = "https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png";
            CardUserName = "مجهول";
        }
		

        if (Name_publishing == "no") {
            CardUserImg = "https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png";
            CardUserName = "<i class='fas fa-user-lock text-secondary' onclick='properties(&quot;unknown&quot;)'></i> مجهول";
        }
		
        if (Published == 0) {
            alertcard = "<hr/><div class='alert alert-danger' role='alert'><h5 class='alert-heading'>تم إزالة هذه البطاقة</h5><p class='alertp'>تم إزالة هذه البطاقة لعدم صحة البيانات الواردة بها او لعدم كفاية المعلومات المطلوبة.</p></div><hr style='background-color:#999999'/>";
            removedcard = " d-none";
            CardUserImg = "https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png";
            CardUserName = "مجهول";
        }
		
		

      
      
        

          
        

$("#ShareACard").html("<button type='button' class= 'btn btn-sm btn-danger' onclick='openmodalshare()'><i title='مشاركة' class='fa fa-share-alt' aria-hidden='true'></i> مشاركة</button>");

if(UserAccountIdcw != undefined && UserAccountIdcw != ''){
var p = PostIdInSite_Answer;
var u = UserAccountIdcw;
p = p.toString();
u = u.toString();
var pu = "\'P" + p + "\',\'U" + u + "\',\'" + ResponseNumber + "\'";
var btn_favoriteID = "P" + p;
$("#btn_favorite").html('<button type="button" onclick="btn_favorite('+pu+')" data-name="'+CommonName_Answer+'" data-img="'+Img_Answer_favorite+'" class="btn btn-sm btn-outline-warning btn_favorite '+btn_favoriteID+'" disabled> <input type="checkbox" class="btn-check post_favorite" id="post_favorite" autocomplete="off" > <i class="far fa-star"></i> <div class="spinner-grow text-warning spinner-grow-sm d-none" role="status"> <span class="visually-hidden">Loading...</span> </div> </button>');
}
$("#InfoaboutCard").html("<button type='button' class='btn btn-sm btn-secondary' data-bs-toggle='collapse' onclick='Infoaboutpublisher()' data-bs-target='#Infoaboutpublisher' role='button' aria-expanded='false' aria-controls='Infoaboutpublisher'><i title='حول هذه البطاقة' class='fa fa-info-circle' aria-hidden='true'></i></button>");


if(AccountStatus_C == "3" || AccountStatus_C == "2"){
$("#InfoPostViewsCard").removeClass("d-none").addClass("mx-1 py-1");
$("#InfoPostViewsCard").html("<a name='"+PostIdInSite_Answer+"'></a> <i class='fa fa-eye'></i><span id='postviews' class='mx-1'></span>");
}


postviews(PostUrlInSite_Answer,PostIdInSite_Answer,IdCard,Img_Answer,CommonName_Answer,UserAccountId);


$("#ShareACard").css("display","block");
$("#InfoaboutCard").css("display","block");
      
      


        table.push("<div id='Infoaboutpublisher' class='collapse'><hr style='background-color:#999999'/>");
        table.push("<div class='my-2 mt-4 Infoaboutpublisher'>");

		
		
		

		
        
		table.push(alertcard);
        table.push("<ul class='list-group list-group-flush text-center'>");
		table.push("<div id='UserInfo'></div>");
		setUserInfo(CardUserImg,CardUserName,Name_publishing,UserAccountId);

        table.push("<li class='list-group-item'>" + CardTimestamp + "</li>");
		
		
		
		
		
		
        table.push("<li class='list-group-item d-none" + removedcard + "'><a class='sharer sharer-fb' href='https://www.facebook.com/dialog/feed?app_id=453684218377321&display=popup&link=" + sharelink + "&redirect_uri=" + sharelink + "&quote="+CardName+"&hashtag=#جيو_عربي' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='Facebook'><i class='fa fa-facebook-square' aria-hidden='true'></i></a><a class='sharer sharer-tw' href='https://twitter.com/intent/tweet?hashtags=جيو_عربي&url=" + sharelink + "&text=" + CardName + "&via=GeoArabs&related=GeoArabs' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='Twitter'><i class='fa fa-twitter' aria-hidden='true'></i></a> <a class='sharer sharer-wa' data-action='share/whatsapp/share' href='https://api.whatsapp.com/send?text=" + CardName + "   " + sharelink + "' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='WhatsApp'><i class='fa fa-whatsapp' aria-hidden='true'></i></a><div class='sharer sharer-copy copy' data-clipboard-target='#linkShareforcopy' rel='nofollow' title='copy link'><i class='fa fa-clone' aria-hidden='true'></i></div></li>");
		
        table.push("</ul>");
		
		
		
		
		
		
		
        $("#linkcardb").val(getsetIdCard);
        if (SourceInfo_Answer_link != 'NoData' && typeof SourceInfo_Answer_link !== 'undefined' && SourceInfo_Answer_link != '') {
            table.push("<hr/><p class='py-2 fspcard'>المزيد من المعلومات حول " + CommonName_Answer + ": <a href='" + SourceInfo_Answer_link + "' target='_blank'>" + SourceInfo_Answer_Title + " <i class='fa fa-external-link fa-flip-horizontal' style='font-size:0.8rem' aria-hidden='true'></i></a></p>");
        }
        table.push(setCreatedCardInfo());
        table.push("</div></div>");
		
        document.getElementById('cardinfo').innerHTML = table.join('');
      $(".spinnercard").css("display","none");
$("#cardinfo").css("display","block");

        setiframe();
        if (DidYouKnow_Answer != 'NoData' && typeof DidYouKnow_Answer !== 'undefined' && DidYouKnow_Answer != '') {
            if (IncludeDidUknow == 1) {
                $('#didyouknow .owl-carousel').owlCarousel({
                    responsiveClass: true,
                    autoHeight: true,
                    rtl: true,
                    items: 1,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    stagePadding: 30,
                    loop: true,
                    margin: 50,
                    nav: true,
                });
            }
        }

          


dataDescription();
onCompletePost(SummaryPage_Answer,RedList_Num,ImgSizeComparison_Answer,ImgMaps_Answer,DidYouKnow_Answer,MultipleImages_table,Name_publishing,Modeling_3D);

if(UserAccountIdcw != undefined && UserAccountIdcw != ''){
var p1 = PostIdInSite_Answer;
var u1 = UserAccountIdcw;
p1 = p1.toString();
u1 = u1.toString();
var p2 = "P" + p1;
var u2 = "U" + u1;
setUserPostFavorite(u2,p2);
}



//end


}

