!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Sketchfab=e():t.Sketchfab=e()}(self,()=>(()=>{"use strict";var n={d:(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},t={};function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(t,{default:()=>i});function s(t,s){t.forEach(function(n){this[n]=function(){var t,e=s._requestIdCounter++,i=Array.prototype.slice.call(arguments);0<i.length&&"function"==typeof i[i.length-1]&&(t=i.pop()),t&&(s._pendingRequests[e]=t.bind(this)),s._target.postMessage({type:"api.request",instanceId:s.getIdentifier(),requestId:e,member:n,arguments:i},s.getDomain())}},this),this.addEventListener=function(t,e,i){"viewerready"===t&&s.isViewerReady&&e(),s._eventListeners[t]||(s._eventListeners[t]=[]),s._eventListeners[t].push(e),i&&this.setListenerOptions&&(i.name=t,this.setListenerOptions(i))},this.removeEventListener=function(t,e){!s._eventListeners[t]||-1!==(e=s._eventListeners[t].indexOf(e))&&s._eventListeners[t].splice(e,1)}}var e=function(t,e,i){this._target=t,this._requestIdCounter=0,this._pendingRequests={},this._eventListeners={},this._ready=!1,this._domain=i,this._instanceId=e,this.listenServer()};e.prototype={getIdentifier:function(){return this._instanceId},getDomain:function(){return this._domain},setIdentifier:function(t){this._instanceId=t},use:function(t,n){this._version=t,this._ready=!0;var e=this._requestIdCounter++;this._pendingRequests[e]=function(t,e,i){t?n.call(this,t):n.call(this,null,new s(i,this))}.bind(this),this._target.postMessage({type:"api.initialize",requestId:e,name:t,instanceId:this._instanceId},this._domain)},listenServer:function(){var r;this._serverReceiveMessageBinded||(r=["api.initialize.result","api.request.result","api.event"],this._serverReceiveMessageBinded=function(t){var e,i,n,s,o;t.origin===this._domain&&t.data&&t.data.type&&t.data.instanceId&&t.data.instanceId===this.getIdentifier()&&(e=t.data.type,-1!==r.indexOf(e)&&("api.event"===e?(o=(i=t.data.results)[0],this._eventListeners["*"]||this._eventListeners.all?["*","all"].forEach(function(t){t=this._eventListeners[t];t&&t.forEach(function(t){t.apply(t,i)})},this):(n=i.slice(1),(s=this._eventListeners[o])?s.forEach(function(t){t.apply(t,n)}):"viewerready"===o&&(this.isViewerReady=!0))):(s=t.data.requestId,(o=this._pendingRequests[s])&&(o.apply(null,t.data.results),this._pendingRequests[s]=void 0))))}.bind(this),window.addEventListener("message",this._serverReceiveMessageBinded))}};var r=/[&|;]+/g;window.SketchfabAPIClient=e;e=function(t,e){var i=t,e=e;"object"===o(t)&&(e=t,i=null),this._version=i,this._target=e,window.sketchfabAPIinstances||(window.sketchfabAPIinstances=[]),window.sketchfabAPIinstances.push(this),this._apiId=window.sketchfabAPIinstances.length.toString(),this._target.id&&(this._apiId+="_"+this._target.id),this._target.allow||(this._target.allow="autoplay; fullscreen"),this._client=void 0,this._options=void 0,this._domain="sketchfab.com",this._domain="same-as-current"===this._domain?window.location.hostname:this._domain,this._urlTemplate="https://YYYY/models/XXXX/embed",this._url=this._urlTemplate.replace("YYYY",this._domain),this._transmitOptions={},this._getURLOptions()};e.prototype={_urlOptionsDict:{skfb_api_version:{default:"1.12.1",type:"string"}},_optionsLoaded:function(t){this._urlOptions=t,this._version=this._getURLOption("skfb_api_version",this._version)},_getURLOption:function(t,e){var i=this._urlOptionsDict[t];if(!i)return e;null==e&&(e=i.default);t=this._urlOptions[t];return t&&t.length?t[0]:e},_getURLOptions:function(){if(!window||!window.location.search)return this._optionsLoaded({});var t,e,i,n,s="object"===o(t=window.location.search)?(e=t,i={},Object.keys(e).forEach(function(t){i[t]=Array.isArray(e[t])?e[t]:[e[t]]}),i):("?"===t[0]&&(t=t.substr(1)),t.split(r).reduce(function(t,e){if(0===e.length)return t;var i=e.indexOf("=");-1===i&&(i=e.length);var n=decodeURIComponent(e.substr(0,i).replace(/\+/g,"%20")),i=decodeURIComponent(e.substr(i+1).replace(/\+/g,"%20"));return void 0===t[n]&&(t[n]=[]),t[n].push(i),t},{}));for(n in s)n.startsWith("skfb_")&&(this._transmitOptions[n.substr(5)]=s[n]);return this._optionsLoaded(s)},getEmbedURL:function(t,e){var i=this._url+"?api_version="+this._version+"&api_id="+this._apiId+"&ui_infos=0&ui_stop=0&ui_inspector=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_animations=0&ui_watermark_link=0&ui_watermark=0";e&&Object.keys(e).forEach(function(t){null!=e[t]&&"function"!=typeof e[t]&&(i+="&"+t.toString()+"="+e[t].toString())});var n=this._transmitOptions;return Object.keys(this._transmitOptions).forEach(function(t){i+="&"+t.toString()+"="+n[t].toString()}),i.replace("XXXX",t)},init:function(t,e){this._options=e,this._uid=t,this._realInit()},_initializeAPIEmbed:function(t){if(t.data&&t.data.instanceId&&this._apiId===t.data.instanceId&&"api.ready"===t.data.type&&this._target.src){if(void 0!==t.data.error)return this.error(t.data.error),void window.removeEventListener("message",this._initializeAPIEmbedBinded);t="https://"+(t=this._target.src.split("/"))[2];this._client&&(console.log("reusing a Sketchfab instance for multiple client is not supported, please create a new sketchfab instance"),window.removeEventListener("message",this._client._serverReceiveMessageBinded)),this._client=new window.SketchfabAPIClient(this._target.contentWindow,this._apiId,t),this._client.use(this._version,function(t,e){if(t)throw t;this.success.call(this,e)}.bind(this)),window.removeEventListener("message",this._initializeAPIEmbedBinded)}},_realInit:function(){this._initializeAPIEmbedBinded||(this._initializeAPIEmbedBinded=this._initializeAPIEmbed.bind(this)),window.addEventListener("message",this._initializeAPIEmbedBinded),this._target.src=this.getEmbedURL(this._uid,this._options)},success:function(t){this._options.success&&"function"==typeof this._options.success&&this._options.success(t)},error:function(t){this._options.error&&"function"==typeof this._options.error&&this._options.error(t)},show:function(){var t=this._target.style.top;this._target.style.top="-1000vh",Promise.resolve().then(function(){this._target.style.top=t}.bind(this))}};const i=e;return t.default})());





    var iframe = document.getElementById( 'iframe3d' );
var uid = $.query.get('id');
uid = decode(uid);
        var uid = uid;
        var client = null;

        function loadmodel() {





            document.addEventListener('load', () => console.log( 'viewerready' ));

            var client = new Sketchfab( iframe );
            client.init( uid, {
                success: function onSuccess(api) {
      //              console.log( 'Success' );

                    api.load();
                    api.start();




                    api.addEventListener( 'viewerready', function() {
                 //       console.log( 'Viewer is ready' );

$("#loding3d").addClass("d-none");
$(".loding3d").remove();

$("#iframe3d").removeClass("d-none");

$("#viewerHand").removeClass("d-none");


$(window).blur(function () {
$("#viewerHand").addClass("d-none");            
});



resize3DframeFs();


                    } );
                },
                error: function onError( callback ) {
                    console.log( this.error );
                    $("#loding3d").addClass("d-none");
                    //هذا المحتوى غير متوفر

$("#alertError").removeClass("d-none");
$("#btnsfs").addClass("d-none");
                },

    camera: 1,
    blending: 1,
    autospin: 0.1,
    autostart: 1,
    transparent: 0,
annotations_visible:0,



            } );
        }










function resize3DframeFs(){



var ww = $(window).width();
var wh = $(window).height();
$(".Wrapper3d").css('width','100%');
$(".Wrapper3d").css('height',wh+'px');
$(".Wrapper3d").css('overflow','hidden');
$(".requestfullscreen,.exitfullscreen").css('position','absolute');
$("#iframe3d").css('width','100%');
$("#iframe3d").css('height','100%');
var getHiframe3d = $("#iframe3d").height();
var getDiframe3d = $("#Wrapper3d").height();
$(".requestfullscreen,.exitfullscreen").css('bottom',(10)+'px');
$(".requestfullscreen,.exitfullscreen").css('right',(20)+'px');


}

$(window).resize(function() {
resize3DframeFs()
});
resize3DframeFs()

	$('#Wrapper3d .requestfullscreen').click(function() {
		goFullscreen("Wrapper3d")
	});
	$('#Wrapper3d .exitfullscreen').click(function() {
		goFullscreen("Wrapper3d")
	});









	function goFullscreen(divObj) {
		var element = document.getElementById(divObj);
		if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || document.mozRequestFullScreen || document.webkitRequestFullScreen) {
			$('#Wrapper3d .requestfullscreen').show();
			$('#Wrapper3d .exitfullscreen').hide();

          resize3DframeFs();
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			}
		} else {
			if (divObj.requestFullscreen) {
				divObj.requestFullscreen();
			fshide()
			} else if (divObj.msRequestFullscreen) {
				divObj.msRequestFullscreen();
				fshide()
			} else if (divObj.mozRequestFullScreen) {
				divObj.mozRequestFullScreen();
				fshide()
			} else if (divObj.webkitRequestFullscreen) {
				divObj.webkitRequestFullscreen();
				fshide()
			} else if (element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
				fshide()
			} else if (element.webkitRequestFullScreen) {
				element.webkitRequestFullScreen();
				fshide()
			} else {
				console.log("Fullscreen API is not supported");
			}
		}
		
	}
function fshide(){
			$('#Wrapper3d .requestfullscreen').hide();
			$('#Wrapper3d .exitfullscreen').show();
  resize3DframeFs();
}

loadmodel();









!function(a,b){"use strict";function c(a){a=a||{};for(var b=1;b<arguments.length;b++){var c=arguments[b];if(c)for(var d in c)c.hasOwnProperty(d)&&("object"==typeof c[d]?deepExtend(a[d],c[d]):a[d]=c[d])}return a}function d(d,g){function h(){if(y){r=b.createElement("canvas"),r.className="pg-canvas",r.style.display="block",d.insertBefore(r,d.firstChild),s=r.getContext("2d"),i();for(var c=Math.round(r.width*r.height/g.density),e=0;c>e;e++){var f=new n;f.setStackPos(e),z.push(f)}a.addEventListener("resize",function(){k()},!1),b.addEventListener("mousemove",function(a){A=a.pageX,B=a.pageY},!1),D&&!C&&a.addEventListener("deviceorientation",function(){F=Math.min(Math.max(-event.beta,-30),30),E=Math.min(Math.max(-event.gamma,-30),30)},!0),j(),q("onInit")}}function i(){r.width=d.offsetWidth,r.height=d.offsetHeight,s.fillStyle=g.dotColor,s.strokeStyle=g.lineColor,s.lineWidth=g.lineWidth}function j(){if(y){u=a.innerWidth,v=a.innerHeight,s.clearRect(0,0,r.width,r.height);for(var b=0;b<z.length;b++)z[b].updatePosition();for(var b=0;b<z.length;b++)z[b].draw();G||(t=requestAnimationFrame(j))}}function k(){i();for(var a=d.offsetWidth,b=d.offsetHeight,c=z.length-1;c>=0;c--)(z[c].position.x>a||z[c].position.y>b)&&z.splice(c,1);var e=Math.round(r.width*r.height/g.density);if(e>z.length)for(;e>z.length;){var f=new n;z.push(f)}else e<z.length&&z.splice(e);for(c=z.length-1;c>=0;c--)z[c].setStackPos(c)}function l(){G=!0}function m(){G=!1,j()}function n(){switch(this.stackPos,this.active=!0,this.layer=Math.ceil(3*Math.random()),this.parallaxOffsetX=0,this.parallaxOffsetY=0,this.position={x:Math.ceil(Math.random()*r.width),y:Math.ceil(Math.random()*r.height)},this.speed={},g.directionX){case"left":this.speed.x=+(-g.maxSpeedX+Math.random()*g.maxSpeedX-g.minSpeedX).toFixed(2);break;case"right":this.speed.x=+(Math.random()*g.maxSpeedX+g.minSpeedX).toFixed(2);break;default:this.speed.x=+(-g.maxSpeedX/2+Math.random()*g.maxSpeedX).toFixed(2),this.speed.x+=this.speed.x>0?g.minSpeedX:-g.minSpeedX}switch(g.directionY){case"up":this.speed.y=+(-g.maxSpeedY+Math.random()*g.maxSpeedY-g.minSpeedY).toFixed(2);break;case"down":this.speed.y=+(Math.random()*g.maxSpeedY+g.minSpeedY).toFixed(2);break;default:this.speed.y=+(-g.maxSpeedY/2+Math.random()*g.maxSpeedY).toFixed(2),this.speed.x+=this.speed.y>0?g.minSpeedY:-g.minSpeedY}}function o(a,b){return b?void(g[a]=b):g[a]}function p(){console.log("destroy"),r.parentNode.removeChild(r),q("onDestroy"),f&&f(d).removeData("plugin_"+e)}function q(a){void 0!==g[a]&&g[a].call(d)}var r,s,t,u,v,w,x,y=!!b.createElement("canvas").getContext,z=[],A=0,B=0,C=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),D=!!a.DeviceOrientationEvent,E=0,F=0,G=!1;return g=c({},a[e].defaults,g),n.prototype.draw=function(){s.beginPath(),s.arc(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY,g.particleRadius/2,0,2*Math.PI,!0),s.closePath(),s.fill(),s.beginPath();for(var a=z.length-1;a>this.stackPos;a--){var b=z[a],c=this.position.x-b.position.x,d=this.position.y-b.position.y,e=Math.sqrt(c*c+d*d).toFixed(2);e<g.proximity&&(s.moveTo(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY),g.curvedLines?s.quadraticCurveTo(Math.max(b.position.x,b.position.x),Math.min(b.position.y,b.position.y),b.position.x+b.parallaxOffsetX,b.position.y+b.parallaxOffsetY):s.lineTo(b.position.x+b.parallaxOffsetX,b.position.y+b.parallaxOffsetY))}s.stroke(),s.closePath()},n.prototype.updatePosition=function(){if(g.parallax){if(D&&!C){var a=(u-0)/60;w=(E- -30)*a+0;var b=(v-0)/60;x=(F- -30)*b+0}else w=A,x=B;this.parallaxTargX=(w-u/2)/(g.parallaxMultiplier*this.layer),this.parallaxOffsetX+=(this.parallaxTargX-this.parallaxOffsetX)/10,this.parallaxTargY=(x-v/2)/(g.parallaxMultiplier*this.layer),this.parallaxOffsetY+=(this.parallaxTargY-this.parallaxOffsetY)/10}var c=d.offsetWidth,e=d.offsetHeight;switch(g.directionX){case"left":this.position.x+this.speed.x+this.parallaxOffsetX<0&&(this.position.x=c-this.parallaxOffsetX);break;case"right":this.position.x+this.speed.x+this.parallaxOffsetX>c&&(this.position.x=0-this.parallaxOffsetX);break;default:(this.position.x+this.speed.x+this.parallaxOffsetX>c||this.position.x+this.speed.x+this.parallaxOffsetX<0)&&(this.speed.x=-this.speed.x)}switch(g.directionY){case"up":this.position.y+this.speed.y+this.parallaxOffsetY<0&&(this.position.y=e-this.parallaxOffsetY);break;case"down":this.position.y+this.speed.y+this.parallaxOffsetY>e&&(this.position.y=0-this.parallaxOffsetY);break;default:(this.position.y+this.speed.y+this.parallaxOffsetY>e||this.position.y+this.speed.y+this.parallaxOffsetY<0)&&(this.speed.y=-this.speed.y)}this.position.x+=this.speed.x,this.position.y+=this.speed.y},n.prototype.setStackPos=function(a){this.stackPos=a},h(),{option:o,destroy:p,start:m,pause:l}}var e="particleground",f=a.jQuery;a[e]=function(a,b){return new d(a,b)},a[e].defaults={minSpeedX:.1,maxSpeedX:.7,minSpeedY:.1,maxSpeedY:.7,directionX:"center",directionY:"center",density:1e4,dotColor:"#666666",lineColor:"#666666",particleRadius:7,lineWidth:1,curvedLines:!1,proximity:100,parallax:!0,parallaxMultiplier:5,onInit:function(){},onDestroy:function(){}},f&&(f.fn[e]=function(a){if("string"==typeof arguments[0]){var b,c=arguments[0],g=Array.prototype.slice.call(arguments,1);return this.each(function(){f.data(this,"plugin_"+e)&&"function"==typeof f.data(this,"plugin_"+e)[c]&&(b=f.data(this,"plugin_"+e)[c].apply(this,g))}),void 0!==b?b:this}return"object"!=typeof a&&a?void 0:this.each(function(){f.data(this,"plugin_"+e)||f.data(this,"plugin_"+e,new d(this,a))})})}(window,document),/**
 * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 * @see: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * @see: http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * @license: MIT license
 */
function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}();


particleground(document.getElementById('particles-foreground'), {
  dotColor: 'rgba(255, 255, 255, 1)',
  lineColor: 'rgba(255, 255, 255, 0.05)',
  minSpeedX: 0.3,
  maxSpeedX: 0.6,
  minSpeedY: 0.3,
  maxSpeedY: 0.6,
  density: 50000, // One particle every n pixels
  curvedLines: false,
  proximity: 250, // How close two dots need to be before they join
  parallaxMultiplier: 10, // Lower the number is more extreme parallax
  particleRadius: 4, // Dot size
});

particleground(document.getElementById('particles-background'), {
  dotColor: 'rgba(255, 255, 255, 0.5)',
  lineColor: 'rgba(255, 255, 255, 0.05)',
  minSpeedX: 0.075,
  maxSpeedX: 0.15,
  minSpeedY: 0.075,
  maxSpeedY: 0.15,
  density: 30000, // One particle every n pixels
  curvedLines: false,
  proximity: 20, // How close two dots need to be before they join
  parallaxMultiplier: 20, // Lower the number is more extreme parallax
  particleRadius: 2, // Dot size
});





