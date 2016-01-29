/*!
 * modernizr v3.2.0
 * Build http://modernizr.com/download?-adownload-ambientlight-animation-apng-appearance-applicationcache-audio-audioloop-audiopreload-backdropfilter-backgroundblendmode-backgroundcliptext-backgroundsize-batteryapi-bdi-beacon-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-blobconstructor-bloburls-blobworkers-borderimage-borderradius-boxshadow-boxsizing-canvas-canvasblending-canvastext-canvaswinding-capture-checked-classlist-contains-contenteditable-contextmenu-cookies-cors-createelementattrs_createelement_attrs-cryptography-cssall-cssanimations-csscalc-csschunit-csscolumns-cssescape-cssexunit-cssfilters-cssgradients-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransitions-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-customevent-customprotocolhandler-dart-datachannel-datalistelem-dataset-datauri-dataview-dataworkers-details-devicemotion_deviceorientation-directory-display_runin-displaytable-documentfragment-ellipsis-emoji-es5-es5array-es5date-es5function-es5object-es5string-es5syntax-es5undefined-es6array-es6math-es6number-es6object-es6string-eventlistener-eventsource-exiforientation-fetch-fileinput-filereader-filesystem-flash-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-formattribute-formvalidation-framed-fullscreen-gamepads-generatedcontent-generators-geolocation-getrandomvalues-getusermedia-hashchange-hidden-hiddenscroll-history-hsla-htmlimports-ie8compat-indexeddb-indexeddbblob-inlinesvg-input-inputformaction-inputformenctype-inputformmethod-inputformtarget-inputtypes-intl-jpeg2000-jpegxr-json-lastchild-localizednumber-localstorage-lowbandwidth-lowbattery-mathml-mediaqueries-microdata-multiplebgs-mutationobserver-notification-nthchild-objectfit-olreversed-oninput-opacity-outputelem-overflowscrolling-pagevisibility-peerconnection-performance-picture-placeholder-pointerevents-pointerlock-postmessage-preserve3d-progressbar_meter-promises-proximity-queryselector-quotamanagement-regions-requestanimationframe-requestautocomplete-rgba-ruby-sandbox-scriptasync-scriptdefer-seamless-search-serviceworker-sessionstorage-shapes-sharedworkers-siblinggeneral-sizes-smil-speechrecognition-speechsynthesis-srcdoc-srcset-strictmode-stylescoped-subpixelfont-supports-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-target-template-templatestrings-textalignlast-textareamaxlength-textshadow-texttrackapi_track-time-todataurljpeg_todataurlpng_todataurlwebp-touchevents-transferables-typedarrays-unicode-unicoderange-unknownelements-urlparser-userdata-userselect-vibrate-video-videoautoplay-videoloop-videopreload-vml-webaudio-webgl-webglextensions-webintents-webp-webpalpha-webpanimation-webplossless_webp_lossless-websockets-websocketsbinary-websqldatabase-webworkers-willchange-wrapflow-xdomainrequest-xhr2-xhrresponsetype-xhrresponsetypearraybuffer-xhrresponsetypeblob-xhrresponsetypedocument-xhrresponsetypejson-xhrresponsetypetext-addtest-atrule-domprefixes-hasevent-load-mq-prefixed-prefixedcss-prefixes-printshiv-testallprops-testprop-teststyles-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */
!function(window,document,undefined){function is(e,t){return typeof e===t}function testRunner(){var e,t,n,i,r,o,s;for(var a in tests)if(tests.hasOwnProperty(a)){if(e=[],t=tests[a],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=is(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)o=e[r],s=o.split("."),1===s.length?Modernizr[s[0]]=i:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=i),classes.push((i?"":"no-")+s.join("-"))}}function setClasses(e){var t=docElement.className,n=Modernizr._config.classPrefix||"";if(isSVG&&(t=t.baseVal),Modernizr._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),isSVG?docElement.className.baseVal=t:docElement.className=t)}function addTest(e,t){if("object"==typeof e)for(var n in e)hasOwnProp(e,n)&&addTest(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),r=Modernizr[i[0]];if(2==i.length&&(r=r[i[1]]),"undefined"!=typeof r)return Modernizr;t="function"==typeof t?t():t,1==i.length?Modernizr[i[0]]=t:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=t),setClasses([(t&&0!=t?"":"no-")+i.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function createElement(){return"function"!=typeof document.createElement?document.createElement(arguments[0]):isSVG?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)}function getBody(){var e=document.body;return e||(e=createElement(isSVG?"svg":"body"),e.fake=!0),e}function injectElementWithStyles(e,t,n,i){var r,o,s,a,l="modernizr",d=createElement("div"),c=getBody();if(parseInt(n,10))for(;n--;)s=createElement("div"),s.id=i?i[n]:l+(n+1),d.appendChild(s);return r=createElement("style"),r.type="text/css",r.id="s"+l,(c.fake?c:d).appendChild(r),c.appendChild(d),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e)),d.id=l,c.fake&&(c.style.background="",c.style.overflow="hidden",a=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(c)),o=t(d,e),c.fake?(c.parentNode.removeChild(c),docElement.style.overflow=a,docElement.offsetHeight):d.parentNode.removeChild(d),!!o}function contains(e,t){return!!~(""+e).indexOf(t)}function domToCSS(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function nativeTestProps(e,t){var n=e.length;if("CSS"in window&&"supports"in window.CSS){for(;n--;)if(window.CSS.supports(domToCSS(e[n]),t))return!0;return!1}if("CSSSupportsRule"in window){for(var i=[];n--;)i.push("("+domToCSS(e[n])+":"+t+")");return i=i.join(" or "),injectElementWithStyles("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return undefined}function cssToDOM(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function testProps(e,t,n,i){function r(){s&&(delete mStyle.style,delete mStyle.modElem)}if(i=is(i,"undefined")?!1:i,!is(n,"undefined")){var o=nativeTestProps(e,n);if(!is(o,"undefined"))return o}for(var s,a,l,d,c,u=["modernizr","tspan"];!mStyle.style;)s=!0,mStyle.modElem=createElement(u.shift()),mStyle.style=mStyle.modElem.style;for(l=e.length,a=0;l>a;a++)if(d=e[a],c=mStyle.style[d],contains(d,"-")&&(d=cssToDOM(d)),mStyle.style[d]!==undefined){if(i||is(n,"undefined"))return r(),"pfx"==t?d:!0;try{mStyle.style[d]=n}catch(A){}if(mStyle.style[d]!=c)return r(),"pfx"==t?d:!0}return r(),!1}function fnBind(e,t){return function(){return e.apply(t,arguments)}}function testDOMProps(e,t,n){var i;for(var r in e)if(e[r]in t)return n===!1?e[r]:(i=t[e[r]],is(i,"function")?fnBind(i,n||t):i);return!1}function testPropsAll(e,t,n,i,r){var o=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+cssomPrefixes.join(o+" ")+o).split(" ");return is(t,"string")||is(t,"undefined")?testProps(s,t,i,r):(s=(e+" "+domPrefixes.join(o+" ")+o).split(" "),testDOMProps(s,t,n))}function testAllProps(e,t,n){return testPropsAll(e,undefined,undefined,t,n)}function roundedEquals(e,t){return e-1===t||e===t||e+1===t}var tests=[],ModernizrProto={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){tests.push({name:e,fn:t,options:n})},addAsyncTest:function(e){tests.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr;var classes=[],docElement=document.documentElement,isSVG="svg"===docElement.nodeName.toLowerCase(),hasOwnProp;!function(){var e={}.hasOwnProperty;hasOwnProp=is(e,"undefined")||is(e.call,"undefined")?function(e,t){return t in e&&is(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),ModernizrProto._l={},ModernizrProto.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},ModernizrProto._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,i;for(e=0;e<n.length;e++)(i=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){ModernizrProto.addTest=addTest});var omPrefixes="Moz O ms Webkit",cssomPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.split(" "):[];ModernizrProto._cssomPrefixes=cssomPrefixes;var atRule=function(e){var t,n=prefixes.length,i=window.CSSRule;if("undefined"==typeof i)return undefined;if(!e)return!1;if(e=e.replace(/^@/,""),t=e.replace(/-/g,"_").toUpperCase()+"_RULE",t in i)return"@"+e;for(var r=0;n>r;r++){var o=prefixes[r],s=o.toUpperCase()+"_"+t;if(s in i)return"@-"+o.toLowerCase()+"-"+e}return!1};ModernizrProto.atRule=atRule;var domPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(" "):[];ModernizrProto._domPrefixes=domPrefixes;var hasEvent=function(e){function t(t,i){var r;return t?(i&&"string"!=typeof i||(i=createElement(i||"div")),t="on"+t,r=t in i,!r&&n&&(i.setAttribute||(i=createElement("div")),i.setAttribute(t,""),r="function"==typeof i[t],i[t]!==e&&(i[t]=e),i.removeAttribute(t)),r):!1}var n=!("onblur"in document.documentElement);return t}();ModernizrProto.hasEvent=hasEvent;var html5;isSVG||!function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=S.elements;return"string"==typeof e?e.split(" "):e}function r(e,t){var n=S.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),S.elements=n+" "+e,d(t)}function o(e){var t=_[e[b]];return t||(t={},x++,e[b]=x,_[x]=t),t}function s(e,n,i){if(n||(n=t),g)return n.createElement(e);i||(i=o(n));var r;return r=i.cache[e]?i.cache[e].cloneNode():y.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),!r.canHaveChildren||w.test(e)||r.tagUrn?r:i.frag.appendChild(r)}function a(e,n){if(e||(e=t),g)return e.createDocumentFragment();n=n||o(e);for(var r=n.frag.cloneNode(),s=0,a=i(),l=a.length;l>s;s++)r.createElement(a[s]);return r}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return S.shivMethods?s(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(S,t.frag)}function d(e){e||(e=t);var i=o(e);return!S.shivCSS||f||i.hasCSS||(i.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||l(e,i),e}function c(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+i().join("|")+")$","i"),s=[];r--;)t=n[r],o.test(t.nodeName)&&s.push(t.applyElement(u(t)));return s}function u(e){for(var t,n=e.attributes,i=n.length,r=e.ownerDocument.createElement(C+":"+e.nodeName);i--;)t=n[i],t.specified&&r.setAttribute(t.nodeName,t.nodeValue);return r.style.cssText=e.style.cssText,r}function A(e){for(var t,n=e.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+i().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),s="$1"+C+"\\:$2";r--;)t=n[r]=n[r].split("}"),t[t.length-1]=t[t.length-1].replace(o,s),n[r]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function h(e){function t(){clearTimeout(s._removeSheetTimer),i&&i.removeNode(!0),i=null}var i,r,s=o(e),a=e.namespaces,l=e.parentWindow;return!k||e.printShived?e:("undefined"==typeof a[C]&&a.add(C),l.attachEvent("onbeforeprint",function(){t();for(var o,s,a,l=e.styleSheets,d=[],u=l.length,p=Array(u);u--;)p[u]=l[u];for(;a=p.pop();)if(!a.disabled&&T.test(a.media)){try{o=a.imports,s=o.length}catch(h){s=0}for(u=0;s>u;u++)p.push(o[u]);try{d.push(a.cssText)}catch(h){}}d=A(d.reverse().join("")),r=c(e),i=n(e,d)}),l.attachEvent("onafterprint",function(){p(r),clearTimeout(s._removeSheetTimer),s._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var f,g,m="3.7.3",v=e.html5||{},w=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,b="_html5shiv",x=0,_={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,g=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){f=!0,g=!0}}();var S={elements:v.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:v.shivCSS!==!1,supportsUnknownElements:g,shivMethods:v.shivMethods!==!1,type:"default",shivDocument:d,createElement:s,createDocumentFragment:a,addElements:r};e.html5=S,d(t);var T=/^$|\b(?:all|print)\b/,C="html5shiv",k=!g&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();S.type+=" print",S.shivPrint=h,h(t),"object"==typeof module&&module.exports&&(module.exports=S)}("undefined"!=typeof window?window:this,document);var err=function(){},warn=function(){};window.console&&(err=function(){var e=console.error?"error":"log";window.console[e].apply(window.console,Array.prototype.slice.call(arguments))},warn=function(){var e=console.warn?"warn":"log";window.console[e].apply(window.console,Array.prototype.slice.call(arguments))}),ModernizrProto.load=function(){"yepnope"in window?(warn("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. yepnope appears to be available on the page, so we\u2019ll use it to handle this call to Modernizr.load, but please update your code to use yepnope directly.\n See http://github.com/Modernizr/Modernizr/issues/1182 for more information."),window.yepnope.apply(window,[].slice.call(arguments,0))):err("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. Get it from http://yepnopejs.com. See http://github.com/Modernizr/Modernizr/issues/1182 for more information.")};var mq=function(){var e=window.matchMedia||window.msMatchMedia;return e?function(t){var n=e(t);return n&&n.matches||!1}:function(e){var t=!1;return injectElementWithStyles("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"==(window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle).position}),t}}();ModernizrProto.mq=mq;var modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem});var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style}),ModernizrProto.testAllProps=testPropsAll;var prefixed=ModernizrProto.prefixed=function(e,t,n){return 0===e.indexOf("@")?atRule(e):(-1!=e.indexOf("-")&&(e=cssToDOM(e)),t?testPropsAll(e,t,n):testPropsAll(e,"pfx"))},prefixes=ModernizrProto._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];ModernizrProto._prefixes=prefixes;var prefixedCSS=ModernizrProto.prefixedCSS=function(e){var t=prefixed(e);return t&&domToCSS(t)};ModernizrProto.testAllProps=testAllProps;var testProp=ModernizrProto.testProp=function(e,t,n){return testProps([e],undefined,t,n)},testStyles=ModernizrProto.testStyles=injectElementWithStyles;/*!
{
  "name": "a[download] Attribute",
  "property": "adownload",
  "caniuse" : "download",
  "tags": ["media", "attribute"],
  "builderAliases": ["a_download"],
  "notes": [{
    "name": "WhatWG Reference",
    "href": "http://developers.whatwg.org/links.html#downloading-resources"
  }]
}
!*/
Modernizr.addTest("adownload",!window.externalHost&&"download"in createElement("a")),/*!
{
  "name": "Ambient Light Events",
  "property": "ambientlight",
  "notes": [{
    "name": "W3C Ambient Light Events",
    "href": "http://www.w3.org/TR/ambient-light/"
  }]
}
!*/
Modernizr.addTest("ambientlight",hasEvent("devicelight",window)),/*!
{
  "name": "Application Cache",
  "property": "applicationcache",
  "caniuse": "offline-apps",
  "tags": ["storage", "offline"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/docs/HTML/Using_the_application_cache"
  }],
  "polyfills": ["html5gears"]
}
!*/
Modernizr.addTest("applicationcache","applicationCache"in window),/*!
{
  "name" : "HTML5 Audio Element",
  "property": "audio",
  "tags" : ["html5", "audio", "media"]
}
!*/
Modernizr.addTest("audio",function(){var e=createElement("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),/*!
{
  "name": "Audio Loop Attribute",
  "property": "audioloop",
  "tags": ["audio", "media"]
}
!*/
Modernizr.addTest("audioloop","loop"in createElement("audio")),/*!
{
  "name": "Audio Preload",
  "property": "audiopreload",
  "tags": ["audio", "media"],
  "async" : true,
  "warnings": ["This test is very large – only include it if you absolutely need it"]
}
!*/
Modernizr.addAsyncTest(function(){function e(n){clearTimeout(t);var r=n!==undefined&&"loadeddata"===n.type?!0:!1;i.removeEventListener("loadeddata",e,!1),addTest("audiopreload",r),i.parentNode.removeChild(i)}var t,n=300,i=createElement("audio"),r=i.style;if(!(Modernizr.audio&&"preload"in i))return void addTest("audiopreload",!1);r.position="absolute",r.height=0,r.width=0;try{if(Modernizr.audio.mp3)i.src="data:audio/mpeg;base64,//MUxAAB6AXgAAAAAPP+c6nf//yi/6f3//MUxAMAAAIAAAjEcH//0fTX6C9Lf//0//MUxA4BeAIAAAAAAKX2/6zv//+IlR4f//MUxBMCMAH8AAAAABYWalVMQU1FMy45//MUxBUB0AH0AAAAADkuM1VVVVVVVVVV//MUxBgBUATowAAAAFVVVVVVVVVVVVVV";else if(Modernizr.audio.m4a)i.src="data:audio/x-m4a;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAAAfbWRhdN4EAABsaWJmYWFjIDEuMjgAAAFoAQBHAAACiG1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAYAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAG0dHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAYAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAABUG1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAArEQAAAQAVcQAAAAAAC1oZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU291bmRIYW5kbGVyAAAAAPttaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAL9zdGJsAAAAW3N0c2QAAAAAAAAAAQAAAEttcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAACdlc2RzAAAAAAMZAAEABBFAFQAAAAABftAAAAAABQISCAYBAgAAABhzdHRzAAAAAAAAAAEAAAABAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAXAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAoAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1Mi42NC4y";else if(Modernizr.audio.ogg)i.src="data:audio/ogg;base64,T2dnUwACAAAAAAAAAAD/QwAAAAAAAM2LVKsBHgF2b3JiaXMAAAAAAUSsAAAAAAAAgLsAAAAAAAC4AU9nZ1MAAAAAAAAAAAAA/0MAAAEAAADmvOe6Dy3/////////////////MgN2b3JiaXMdAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAwNzA2MjIAAAAAAQV2b3JiaXMfQkNWAQAAAQAYY1QpRplS0kqJGXOUMUaZYpJKiaWEFkJInXMUU6k515xrrLm1IIQQGlNQKQWZUo5SaRljkCkFmVIQS0kldBI6J51jEFtJwdaYa4tBthyEDZpSTCnElFKKQggZU4wpxZRSSkIHJXQOOuYcU45KKEG4nHOrtZaWY4updJJK5yRkTEJIKYWSSgelU05CSDWW1lIpHXNSUmpB6CCEEEK2IIQNgtCQVQAAAQDAQBAasgoAUAAAEIqhGIoChIasAgAyAAAEoCiO4iiOIzmSY0kWEBqyCgAAAgAQAADAcBRJkRTJsSRL0ixL00RRVX3VNlVV9nVd13Vd13UgNGQVAAABAEBIp5mlGiDCDGQYCA1ZBQAgAAAARijCEANCQ1YBAAABAABiKDmIJrTmfHOOg2Y5aCrF5nRwItXmSW4q5uacc845J5tzxjjnnHOKcmYxaCa05pxzEoNmKWgmtOacc57E5kFrqrTmnHPGOaeDcUYY55xzmrTmQWo21uaccxa0pjlqLsXmnHMi5eZJbS7V5pxzzjnnnHPOOeecc6oXp3NwTjjnnHOi9uZabkIX55xzPhmne3NCOOecc84555xzzjnnnHOC0JBVAAAQAABBGDaGcacgSJ+jgRhFiGnIpAfdo8MkaAxyCqlHo6ORUuoglFTGSSmdIDRkFQAACAAAIYQUUkghhRRSSCGFFFKIIYYYYsgpp5yCCiqppKKKMsoss8wyyyyzzDLrsLPOOuwwxBBDDK20EktNtdVYY62555xrDtJaaa211koppZRSSikIDVkFAIAAABAIGWSQQUYhhRRSiCGmnHLKKaigAkJDVgEAgAAAAgAAADzJc0RHdERHdERHdERHdETHczxHlERJlERJtEzL1ExPFVXVlV1b1mXd9m1hF3bd93Xf93Xj14VhWZZlWZZlWZZlWZZlWZZlWYLQkFUAAAgAAIAQQgghhRRSSCGlGGPMMeegk1BCIDRkFQAACAAgAAAAwFEcxXEkR3IkyZIsSZM0S7M8zdM8TfREURRN01RFV3RF3bRF2ZRN13RN2XRVWbVdWbZt2dZtX5Zt3/d93/d93/d93/d93/d1HQgNWQUASAAA6EiOpEiKpEiO4ziSJAGhIasAABkAAAEAKIqjOI7jSJIkSZakSZ7lWaJmaqZneqqoAqEhqwAAQAAAAQAAAAAAKJriKabiKaLiOaIjSqJlWqKmaq4om7Lruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7rui4QGrIKAJAAANCRHMmRHEmRFEmRHMkBQkNWAQAyAAACAHAMx5AUybEsS9M8zdM8TfRET/RMTxVd0QVCQ1YBAIAAAAIAAAAAADAkw1IsR3M0SZRUS7VUTbVUSxVVT1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTVN0zRNIDRkJQAABADAYo3B5SAhJSXl3hDCEJOeMSYhtV4hBJGS3jEGFYOeMqIMct5C4xCDHggNWREARAEAAMYgxxBzyDlHqZMSOeeodJQa5xyljlJnKcWYYs0oldhSrI1zjlJHraOUYiwtdpRSjanGAgAAAhwAAAIshEJDVgQAUQAAhDFIKaQUYow5p5xDjCnnmHOGMeYcc44556B0UirnnHROSsQYc445p5xzUjonlXNOSiehAACAAAcAgAALodCQFQFAnACAQZI8T/I0UZQ0TxRFU3RdUTRd1/I81fRMU1U90VRVU1Vt2VRVWZY8zzQ901RVzzRV1VRVWTZVVZZFVdVt03V123RV3ZZt2/ddWxZ2UVVt3VRd2zdV1/Zd2fZ9WdZ1Y/I8VfVM03U903Rl1XVtW3VdXfdMU5ZN15Vl03Vt25VlXXdl2fc103Rd01Vl2XRd2XZlV7ddWfZ903WF35VlX1dlWRh2XfeFW9eV5XRd3VdlVzdWWfZ9W9eF4dZ1YZk8T1U903RdzzRdV3VdX1dd19Y105Rl03Vt2VRdWXZl2fddV9Z1zzRl2XRd2zZdV5ZdWfZ9V5Z13XRdX1dlWfhVV/Z1WdeV4dZt4Tdd1/dVWfaFV5Z14dZ1Ybl1XRg+VfV9U3aF4XRl39eF31luXTiW0XV9YZVt4VhlWTl+4ViW3feVZXRdX1ht2RhWWRaGX/id5fZ943h1XRlu3efMuu8Mx++k+8rT1W1jmX3dWWZfd47hGDq/8OOpqq+brisMpywLv+3rxrP7vrKMruv7qiwLvyrbwrHrvvP8vrAso+z6wmrLwrDatjHcvm4sv3Acy2vryjHrvlG2dXxfeArD83R1XXlmXcf2dXTjRzh+ygAAgAEHAIAAE8pAoSErAoA4AQCPJImiZFmiKFmWKIqm6LqiaLqupGmmqWmeaVqaZ5qmaaqyKZquLGmaaVqeZpqap5mmaJqua5qmrIqmKcumasqyaZqy7LqybbuubNuiacqyaZqybJqmLLuyq9uu7Oq6pFmmqXmeaWqeZ5qmasqyaZquq3meanqeaKqeKKqqaqqqraqqLFueZ5qa6KmmJ4qqaqqmrZqqKsumqtqyaaq2bKqqbbuq7Pqybeu6aaqybaqmLZuqatuu7OqyLNu6L2maaWqeZ5qa55mmaZqybJqqK1uep5qeKKqq5ommaqqqLJumqsqW55mqJ4qq6omea5qqKsumatqqaZq2bKqqLZumKsuubfu+68qybqqqbJuqauumasqybMu+78qq7oqmKcumqtqyaaqyLduy78uyrPuiacqyaaqybaqqLsuybRuzbPu6aJqybaqmLZuqKtuyLfu6LNu678qub6uqrOuyLfu67vqucOu6MLyybPuqrPq6K9u6b+sy2/Z9RNOUZVM1bdtUVVl2Zdn2Zdv2fdE0bVtVVVs2TdW2ZVn2fVm2bWE0Tdk2VVXWTdW0bVmWbWG2ZeF2Zdm3ZVv2ddeVdV/XfePXZd3murLty7Kt+6qr+rbu+8Jw667wCgAAGHAAAAgwoQwUGrISAIgCAACMYYwxCI1SzjkHoVHKOecgZM5BCCGVzDkIIZSSOQehlJQy5yCUklIIoZSUWgshlJRSawUAABQ4AAAE2KApsThAoSErAYBUAACD41iW55miatqyY0meJ4qqqaq27UiW54miaaqqbVueJ4qmqaqu6+ua54miaaqq6+q6aJqmqaqu67q6Lpqiqaqq67qyrpumqqquK7uy7Oumqqqq68quLPvCqrquK8uybevCsKqu68qybNu2b9y6ruu+7/vCka3rui78wjEMRwEA4AkOAEAFNqyOcFI0FlhoyEoAIAMAgDAGIYMQQgYhhJBSSiGllBIAADDgAAAQYEIZKDRkRQAQJwAAGEMppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkgppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkqppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoplVJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSCgCQinAAkHowoQwUGrISAEgFAACMUUopxpyDEDHmGGPQSSgpYsw5xhyUklLlHIQQUmktt8o5CCGk1FJtmXNSWosx5hgz56SkFFvNOYdSUoux5ppr7qS0VmuuNedaWqs115xzzbm0FmuuOdecc8sx15xzzjnnGHPOOeecc84FAOA0OACAHtiwOsJJ0VhgoSErAYBUAAACGaUYc8456BBSjDnnHIQQIoUYc845CCFUjDnnHHQQQqgYc8w5CCGEkDnnHIQQQgghcw466CCEEEIHHYQQQgihlM5BCCGEEEooIYQQQgghhBA6CCGEEEIIIYQQQgghhFJKCCGEEEIJoZRQAABggQMAQIANqyOcFI0FFhqyEgAAAgCAHJagUs6EQY5Bjw1BylEzDUJMOdGZYk5qMxVTkDkQnXQSGWpB2V4yCwAAgCAAIMAEEBggKPhCCIgxAABBiMwQCYVVsMCgDBoc5gHAA0SERACQmKBIu7iALgNc0MVdB0IIQhCCWBxAAQk4OOGGJ97whBucoFNU6iAAAAAAAAwA4AEA4KAAIiKaq7C4wMjQ2ODo8AgAAAAAABYA+AAAOD6AiIjmKiwuMDI0Njg6PAIAAAAAAAAAAICAgAAAAAAAQAAAAICAT2dnUwAE7AwAAAAAAAD/QwAAAgAAADuydfsFAQEBAQEACg4ODg==";else{if(!Modernizr.audio.wav)return void addTest("audiopreload",!1);i.src="data:audio/wav;base64,UklGRvwZAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YdgZAAAAAAEA/v8CAP//AAABAP////8DAPz/BAD9/wEAAAAAAAAAAAABAP7/AgD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAAD//wIA/v8BAAAA//8BAAAA//8BAP//AQAAAP//AQD//wEAAAD//wEA//8BAP//AQD//wEA//8BAP//AQD+/wMA/f8DAP3/AgD+/wIA/////wMA/f8CAP7/AgD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAQD+/wIA/v8CAP7/AwD9/wIA/v8BAAEA/v8CAP7/AQAAAAAAAAD//wEAAAD//wIA/f8DAP7/AQD//wEAAAD//wEA//8CAP7/AQD//wIA/v8CAP7/AQAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD9/wQA+/8FAPz/AgAAAP//AgD+/wEAAAD//wIA/v8CAP3/BAD8/wQA/P8DAP7/AwD8/wQA/P8DAP7/AQAAAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAP//AQD//wEAAAD//wEA//8BAAAAAAAAAP//AgD+/wEAAAAAAAAAAAD//wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AgD+/wIA/v8BAP//AQABAP7/AQD//wIA/v8CAP3/AwD/////AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AAABAP//AAABAP//AQD//wAAAAACAP3/AwD9/wIA//8BAP//AQD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8CAAAA/v8EAPv/BAD9/wIAAAD+/wQA+v8HAPr/BAD+/wEAAAD//wIA/f8EAPz/BAD7/wUA/P8EAPz/AwD+/wEAAAD//wEAAAAAAP//AgD8/wUA+/8FAPz/AwD9/wIA//8AAAEA/v8CAP//AQD//wAAAAABAP//AgD9/wMA/f8EAPz/AwD+/wAAAwD7/wUA/P8DAP7/AQAAAP//AgD+/wEAAQD+/wIA/v8BAAEA/v8CAP7/AQAAAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA//8AAAEA/v8DAP3/AgD//wEA//8BAP7/AwD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AgD+/wEAAQD+/wIA/////wIA//8AAAEA/f8DAP//AAABAP////8DAP3/AwD+/wEA//8BAP//AQAAAAAA//8BAP//AQD//wEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAAAAAAAAAAD//wIA/v8BAAAA//8BAAEA/v8BAAAA//8DAPz/AwD+/wIA/v8CAP3/AwD+/wEAAAD//wEA//8BAAAA//8BAAAA/v8EAPv/BAD+/wAAAAABAP7/AgD//wAAAAABAP7/AgD//wAAAAAAAAAAAAABAP3/BAD8/wQA/f8BAAAAAAABAP7/AgD+/wIA/v8CAP7/AgD+/wIA/v8BAAAAAAD//wIA/f8DAP7/AAABAP//AAACAPz/BAD9/wIA//8AAP//AwD9/wMA/P8EAP3/AwD9/wIA//8BAP//AQD+/wMA/f8DAP7/AAABAP//AQAAAP//AQD//wIA/f8DAP7/AQAAAP//AQAAAAAA//8CAP7/AQABAP7/AgD+/wEAAQD+/wIA/v8CAP////8CAP7/AgD//wAAAAABAP7/AwD9/wIAAAD+/wMA/f8CAP//AQD+/wMA/f8CAP//AAACAPz/BQD6/wUA/v///wIA/v8CAP3/BAD7/wYA+v8FAPz/AwD/////AgD+/wEAAAD//wEAAAD//wIA/f8DAP7/AQAAAP//AgD//wAA//8BAAAAAAAAAP//AQD//wEA//8AAAIA/f8DAP3/AgAAAP//AQD//wEA//8AAAEA//8BAP////8CAP//AAABAP3/BAD9/wIA/v8BAAEA//8BAP7/AgD//wEA//8AAAEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAQD+/wIA/v8BAAAAAAD//wIA/v8BAAAAAAAAAAAAAQD+/wMA/f8CAP//AQD//wIA/f8DAP7/AQD//wEA//8CAP7/AAABAP7/AwD9/wMA/v8AAAEA//8BAAAAAAD//wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP7/AgD//wAAAAAAAAAAAQD//wEA/v8DAPz/BQD8/wIA//8AAAEAAAD//wEA//8BAP//AQAAAAAA//8BAP//AgD+/wEAAAAAAP//AQD+/wMA/////wEA/v8CAP//AQD//wEA//8AAAEA//8BAAAA/v8EAPz/AwD+/wEAAAAAAAAA//8CAP7/AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AQD//wEA//8AAAEA/v8EAPv/BAD9/wIA//8BAP7/AwD9/wIA//8AAAEA//8BAP//AQD//wAAAQD//wEAAAD+/wMA/v8AAAIA/f8DAP7/AQD//wAAAQD+/wMA/f8CAP//AAABAP7/AgD+/wMA/f8CAP7/AQABAP7/AgD+/wIA/v8CAP7/AwD8/wMA//8AAAEA//8AAAAAAAABAP//AQD//wAAAQD//wIA/f8DAP3/AwD+/wAAAgD9/wIA//8AAAEAAAD+/wMA/P8FAPv/BAD9/wIA//8AAP//AgD+/wIA/v8BAAAAAAD//wEAAAAAAP//AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AAABAP//AQD//wAAAQD//wEA//8BAP//AAABAAAA//8BAP7/AwD9/wMA/f8DAP3/AgD//wEA//8BAP7/AgD//wAAAgD8/wQA/f8CAP//AQD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAAABAP7/AwD9/wIA/v8DAP3/AwD9/wIA/v8DAPz/BQD7/wQA/f8CAP7/AwD9/wMA/f8CAP//AQAAAP7/AwD+/wEA//8AAAEAAAAAAP//AAABAP//AQAAAP7/AwD9/wMA/f8CAP//AQD//wEA//8AAAIA/f8CAAAA//8BAAAA//8BAAAA/v8EAPv/BAD9/wIA//8AAAEA/v8CAP//AAABAP//AAABAP//AAABAP7/AwD8/wQA/f8CAAAA/v8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAAAAAAAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AgD//wAAAQD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAQD+/wMA/f8CAP//AQD//wEA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD9/wIA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD8/wMA/v8CAP//AAD//wIA/v8CAP7/AQABAP7/AQAAAP//AgD/////AQD//wEAAAD//wEA/v8EAPv/BAD9/wMA/v8BAAAA//8BAAEA/P8GAPr/BQD8/wMA/v8BAAAA//8CAP7/AQABAP3/BAD7/wYA+/8EAPz/AwD//wEA//8BAP7/BAD8/wMA/v8AAAIA/v8BAAAA//8BAAAA//8BAAAA//8CAP3/AwD+/wAAAgD8/wUA/P8DAP7/AAABAAAAAAD//wEAAAD//wIA/f8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/f8EAPz/AwD/////AgD+/wIA/f8DAP7/AgD+/wEA//8CAP7/AQD//wEAAAAAAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAP//AQAAAP//AAACAP3/BAD7/wQA/v8BAAAA//8BAP//AQAAAP//AQAAAP7/BAD7/wUA+/8EAP3/AgD//wAAAQD+/wIA//8AAAEA/v8CAP//AQD+/wEAAAAAAAAAAAD//wEA//8CAP3/AwD9/wIA//8AAAAAAAAAAAAA//8BAP//AgD+/wEA//8CAP7/AQAAAP//AgD/////AgD/////AgD+/wIA//8AAP//AQABAP7/AgD9/wMA/v8CAP////8BAAAAAAAAAAAA//8CAP////8DAPz/AwD+/wEAAAAAAP//AQD//wEAAAD//wEAAAD+/wQA+/8FAPz/AgAAAP//AgD9/wMA/v8BAAAAAAD//wEAAAD//wIA/v8BAAAAAAD//wIA/v8BAAAA//8BAAAA//8CAP7/AQD//wEA//8BAAAA//8BAP//AAABAP//AQAAAP7/AgD//wEA//8AAAAAAQD+/wMA/P8EAP7///8DAPz/BQD8/wEAAQD+/wMA/v8AAAEA//8BAP//AQD//wEA/v8CAP//AQD//wAAAAABAAAA//8BAP//AQAAAAAA//8BAP//AgD+/wAAAQD//wIA/f8CAP//AQAAAP7/AwD9/wMA/v8BAP//AAABAP//AgD9/wIA//8BAAAA//8BAAAA//8CAP3/AwD+/wEAAAD+/wQA/P8DAP7/AAACAP7/AQAAAP//AQAAAP//AQAAAP//AgD9/wIAAAD//wIA/f8DAP7/AQD//wEA//8CAP7/AQD//wAAAQD//wEA//8AAAAAAQD//wEAAAD9/wUA+/8FAPz/AgD//wAAAQD//wAAAQD+/wMA/f8BAAEA/v8CAP7/AgD+/wIA/v8BAAAAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP7/AQAAAP//AQAAAP//AQD//wAAAQD//wAAAQD+/wMA/f8CAAAA/v8DAP3/AgAAAP//AQAAAP7/AwD9/wMA/v8BAP//AQD//wEAAAD+/wMA/f8CAAAA/v8CAP//AAAAAAEA//8AAAEA/v8DAP3/AwD9/wIA//8BAP//AgD8/wQA/v8BAAAA/v8CAP//AQD//wAAAAAAAAEA/f8EAPz/BAD9/wIA//8AAAAAAAABAP//AAAAAAAAAAABAP3/BAD9/wIA/v8BAAEA//8AAAAA//8CAP7/AgD9/wQA+/8FAPv/BQD8/wMA/f8DAP3/AwD+/wAAAgD9/wMA/f8CAAAA/v8EAPv/BQD7/wUA/P8DAP///v8DAP3/BAD8/wMA/f8DAP7/AQD//wEAAAD//wEA/v8CAAAA/v8CAP7/AgD//wAAAAAAAAAAAQD+/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAP//AgD//wEA/v8BAAAAAQD//wAAAAAAAAEA//8AAAEA//8BAP//AAABAP//AQD+/wIA/v8DAPz/BAD8/wQA/f8BAAAAAQD+/wMA/P8DAP//AAAAAAAAAAD//wMA+/8FAP3/AQABAP3/BAD8/wMA/v8BAAAA//8CAP3/AwD+/wEAAQD9/wMA/f8EAPz/BAD7/wQA/v8BAAEA/f8DAP7/AQAAAP//AgD+/wEAAAD//wIA/v8CAP7/AgD+/wEAAQD//wEA/v8CAP7/BAD7/wQA/f8CAAAA//8AAAAAAAABAP//AQD+/wEAAQD+/wMA/f8BAAEA/v8DAPz/AwD/////AwD8/wQA/P8DAP7/AgD//wAA//8BAAAAAAAAAP//AgD+/wEAAAD//wIA/v8BAAAA//8CAP3/AgD//wAAAQD+/wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP3/BAD7/wQA/v8BAAAA//8AAAEAAAD//wIA/f8DAP7/AgD+/wIA/v8CAP7/AgD+/wEAAAAAAP//AgD9/wMA/v8BAP//AgD9/wMA/v8AAAEA//8BAP//AQD//wEA//8AAAEA/v8EAPz/AgD//wAAAQAAAP//AAABAP//AQD//wEAAAD//wEA//8BAAEA/f8DAP7/AQABAP3/AwD+/wIA/////wEAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD//wAA//8CAP3/BAD9/wAAAgD9/wMA/v8BAP//AQAAAP//AQAAAP//AgD9/wMA/f8EAPz/AwD+/wEAAAAAAAAAAAD//wIA/f8EAP3/AAABAAAA//8CAP7/AQAAAP//AQAAAAAA//8BAP//AQAAAP//AQAAAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wIA/v8CAP3/BAD9/wEAAAD//wEAAQD9/wMA/f8CAAAA/v8DAP3/AgD//wAAAQD+/wIA/v8CAP7/AQAAAP//AgD+/wEAAAAAAP//AwD7/wUA/f8BAAEA/v8BAAEA/v8DAP3/AgD//wEA//8BAP//AQD//wEA//8CAP3/BAD7/wQA/////wIA/v8AAAIA/v8CAP3/BAD7/wUA/P8DAP3/AwD9/wMA/v8AAAIA/v8CAP7/AgD+/wIA//8AAAEA/v8CAP7/AgD//wAAAAD//wEAAAAAAAAA//8BAP7/BAD7/wUA/P8CAAAA//8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD+/wEA//8CAP3/AwD+/wAAAwD8/wIAAAD//wIA/////wIA/v8CAP7/AgD+/wEAAAAAAAAAAAAAAP//AgD+/wIA//8AAAAA//8CAP7/AgD+/wEA//8CAP3/AwD9/wMA/v8BAP7/AwD9/wMA/f8CAP//AQD+/wIA//8BAP//AQD+/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAP//AgD+/wIA/v8CAP//AAAAAAEA//8BAP//AAABAAAA//8BAP//AQD//wEA//8BAP//AQAAAP//AQD//wEAAAD//wIA/f8CAAAA//8BAAAA//8BAP//AAABAP//AQD//wAAAAAAAAEA/v8CAP//AQD//wAAAAABAP7/AwD9/wIAAAD+/wIA//8BAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA/v8CAP7/AgD//wAAAAAAAAAAAAAAAP//AgD/////AgD9/wQA/f8BAAAAAAAAAAEA/f8DAP////8DAP3/AQABAP7/AgD//wAAAQD+/wMA/f8CAP7/AQABAP7/AwD7/wYA+v8FAP3/AQABAP7/AgD+/wMA/f8CAP7/AwD+/wEA//8BAP//AQAAAP7/BQD5/wcA+v8FAPz/AwD+/wIA/v8BAAAA//8DAPv/BQD8/wMA/////wEAAAAAAAAAAAD//wIA/f8DAP7/AQAAAP//AQAAAP//AgD+/wIA/v8BAAEA/f8EAPz/AwD+/wEA//8CAP7/AQD//wEA//8CAP7/AQAAAP//AgD+/wEAAAAAAAAAAAAAAAAAAAD//wIA/f8EAPz/AwD+/wEA//8CAP7/AgD+/wEAAQD+/wEAAQD+/wIA/////wIA//8AAAAAAAAAAAAAAAD//wEAAAAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AQD//wEA//8BAP//AQAAAP7/AwD9/wMA/v8BAP7/AwD9/wMA/v8BAP//AAABAP//AQD//wAAAAABAP//AAAAAAAAAQD//wEA/v8CAAAA/v8EAPv/BAD9/wIAAAD+/wMA/P8DAP//AAAAAP//AQD//wIA/f8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD9/wQA+/8FAPv/BQD8/wMA/v8BAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAAEA/f8DAP3/AgAAAP//AQD//wAAAQD//wEA//8BAP//AQD//wEA/v8DAP3/AgAAAP7/AwD9/wIAAAD//wEAAAD//wIA/f8DAP7/AgD9/wQA+/8FAPz/AgAAAP//AgD9/wIA//8BAP//AQD//wEA//8BAP//AQD//wIA/f8DAP3/AgD//wAAAQD+/wIA/v8BAAEA/v8CAP7/AgD+/wMA/P8DAP//AAABAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/v8CAP3/BAD8/wMA/v8BAAAAAAD//wEAAAAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD+/wEA//8CAP3/AwD9/wMA/f8EAPv/BAD+/wAAAQD//wEA//8BAP//AAABAP//AQD//wEAAAD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8DAP7/AAACAP3/AwD+/wEA//8BAP//AQAAAP//AQAAAP7/AwD9/wMA/v8AAAEA//8BAP//AAAAAAEA//8AAAEA/v8CAP//AAAAAAEA/v8DAPz/BAD9/wEAAQD+/wEAAQD9/wQA/P8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAQD+/wIA/////wIA/v8BAAAA//8BAP//AQD//wEA//8BAAAA/v8EAPz/AwD///7/BAD8/wMA/////wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP////8CAP7/AwD9/wIA/v8CAP//AAABAP7/AwD9/wEAAQD+/wMA/f8CAP//AAAAAAEA/v8DAPz/BAD9/wIA/v8CAP7/AgD//wAAAAD//wIA/v8CAP7/AQAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AwD8/wUA+v8GAPv/AwD//wAAAAAAAAAA//8DAPv/BQD9/wAAAgD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAAAAAAAP//AQAAAAAAAAD//wEA//8CAP3/AwD+/wAAAgD+/wEAAAD//wIA/v8CAP7/AgD/////AwD8/wUA/P8CAP//AQD//wIA/f8DAP3/AwD+/wAAAQD+/wMA/f8DAP3/AgD//wAAAQD//wEA//8BAP7/AwD+/wEA//8AAAEA//8CAPz/BAD9/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAAEA/v8CAP7/AgD//wEA/f8EAPz/BAD+////AgD//wAAAQD//wAAAQD//wEA//8BAP7/AwD+/wEA"}}catch(o){return void addTest("audiopreload",!1)}i.setAttribute("preload","auto"),i.style.cssText="display:none",docElement.appendChild(i),setTimeout(function(){i.addEventListener("loadeddata",e,!1),t=setTimeout(e,n)},0)}),/*!
{
  "name": "Web Audio API",
  "property": "webaudio",
  "caniuse": "audio-api",
  "polyfills": ["xaudiojs", "dynamicaudiojs", "audiolibjs"],
  "tags": ["audio", "media"],
  "builderAliases": ["audio_webaudio_api"],
  "authors": ["Addy Osmani"],
  "notes": [{
    "name": "W3 Specification",
    "href": "https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html"
  }]
}
!*/
Modernizr.addTest("webaudio",function(){var e="webkitAudioContext"in window,t="AudioContext"in window;return Modernizr._config.usePrefixes?e||t:t}),/*!
{
  "name": "Battery API",
  "property": "batteryapi",
  "aliases": ["battery-api"],
  "builderAliases": ["battery_api"],
  "tags": ["device", "media"],
  "authors": ["Paul Sayre"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/DOM/window.navigator.mozBattery"
  }]
}
!*/
Modernizr.addTest("batteryapi",!!prefixed("battery",navigator),{aliases:["battery-api"]}),/*!
{
  "name": "Low Battery Level",
  "property": "lowbattery",
  "tags": ["hardware", "mobile"],
  "builderAliases": ["battery_level"],
  "authors": ["Paul Sayre"],
  "notes": [{
    "name": "MDN Docs",
    "href": "http://developer.mozilla.org/en/DOM/window.navigator.mozBattery"
  }]
}
!*/
Modernizr.addTest("lowbattery",function(){var e=.2,t=prefixed("battery",navigator);return!!(t&&!t.charging&&t.level<=e)}),/*!
{
  "name": "Blob constructor",
  "property": "blobconstructor",
  "aliases": ["blob-constructor"],
  "builderAliases": ["blob_constructor"],
  "caniuse": "blobbuilder",
  "notes": [{
    "name": "W3C spec",
    "href": "http://dev.w3.org/2006/webapi/FileAPI/#constructorBlob"
  }],
  "polyfills": ["blobjs"]
}
!*/
Modernizr.addTest("blobconstructor",function(){try{return!!new Blob}catch(e){return!1}},{aliases:["blob-constructor"]}),/*!
{
  "name": "Canvas",
  "property": "canvas",
  "caniuse": "canvas",
  "tags": ["canvas", "graphics"],
  "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
}
!*/
Modernizr.addTest("canvas",function(){var e=createElement("canvas");return!(!e.getContext||!e.getContext("2d"))}),/*!
{
  "name": "canvas blending support",
  "property": "canvasblending",
  "tags": ["canvas"],
  "async" : false,
  "notes": [{
      "name": "HTML5 Spec",
      "href": "https://dvcs.w3.org/hg/FXTF/rawfile/tip/compositing/index.html#blending"
    },
    {
      "name": "Article",
      "href": "http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas"
    }]
}
!*/
Modernizr.addTest("canvasblending",function(){if(Modernizr.canvas===!1)return!1;var e=createElement("canvas").getContext("2d");try{e.globalCompositeOperation="screen"}catch(t){}return"screen"===e.globalCompositeOperation});/*!
{
  "name": "canvas.toDataURL type support",
  "property": ["todataurljpeg", "todataurlpng", "todataurlwebp"],
  "tags": ["canvas"],
  "builderAliases": ["canvas_todataurl_type"],
  "async" : false,
  "notes": [{
    "name": "MDN article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement.toDataURL"
  }]
}
!*/
var canvas=createElement("canvas");Modernizr.addTest("todataurljpeg",function(){return!!Modernizr.canvas&&0===canvas.toDataURL("image/jpeg").indexOf("data:image/jpeg")}),Modernizr.addTest("todataurlpng",function(){return!!Modernizr.canvas&&0===canvas.toDataURL("image/png").indexOf("data:image/png")}),Modernizr.addTest("todataurlwebp",function(){var e=!1;try{e=!!Modernizr.canvas&&0===canvas.toDataURL("image/webp").indexOf("data:image/webp")}catch(t){}return e}),/*!
{
  "name": "canvas winding support",
  "property": ["canvaswinding"],
  "tags": ["canvas"],
  "async" : false,
  "notes": [{
    "name": "Article",
    "href": "http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/"
  }]
}
!*/
Modernizr.addTest("canvaswinding",function(){if(Modernizr.canvas===!1)return!1;var e=createElement("canvas").getContext("2d");return e.rect(0,0,10,10),e.rect(2,2,6,6),e.isPointInPath(5,5,"evenodd")===!1}),/*!
{
  "name": "Canvas text",
  "property": "canvastext",
  "caniuse": "canvas-text",
  "tags": ["canvas", "graphics"],
  "polyfills": ["canvastext"]
}
!*/
Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof createElement("canvas").getContext("2d").fillText}),/*!
{
  "name": "Content Editable",
  "property": "contenteditable",
  "caniuse": "contenteditable",
  "notes": [{
    "name": "WHATWG spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/editing.html#contenteditable"
  }]
}
!*/
Modernizr.addTest("contenteditable",function(){if("contentEditable"in docElement){var e=createElement("div");return e.contentEditable=!0,"true"===e.contentEditable}}),/*!
{
  "name": "Context menus",
  "property": "contextmenu",
  "caniuse": "menu",
  "notes": [{
    "name": "W3C spec",
    "href": "http://www.w3.org/TR/html5/interactive-elements.html#context-menus"
  },{
    "name": "thewebrocks.com Demo",
    "href": "http://thewebrocks.com/demos/context-menu/"
  }],
  "polyfills": ["jquery-contextmenu"]
}
!*/
Modernizr.addTest("contextmenu","contextMenu"in docElement&&"HTMLMenuItemElement"in window),/*!
{
  "name": "Cookies",
  "property": "cookies",
  "tags": ["storage"],
  "authors": ["tauren"]
}
!*/
Modernizr.addTest("cookies",function(){try{document.cookie="cookietest=1";var e=-1!=document.cookie.indexOf("cookietest=");return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(t){return!1}}),/*!
{
  "name": "Cross-Origin Resource Sharing",
  "property": "cors",
  "caniuse": "cors",
  "authors": ["Theodoor van Donge"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/HTTP/Access_control_CORS"
  }],
  "polyfills": ["pmxdr", "ppx", "flxhr"]
}
!*/
Modernizr.addTest("cors","XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest);/*!
{
  "name": "Web Cryptography",
  "property": "cryptography",
  "caniuse": "cryptography",
  "tags": ["crypto"],
  "authors": ["roblarsen"],
  "notes": [{
    "name": "W3C Editor's Draft",
    "href": "http://www.w3.org/TR/WebCryptoAPI/"
  }],
  "polyfills": [
    "polycrypt"
  ]
}
!*/
var crypto=prefixed("crypto",window);Modernizr.addTest("crypto",!!prefixed("subtle",crypto));/*!
{
  "name": "getRandomValues",
  "property": "getrandomvalues",
  "caniuse": "window.crypto.getRandomValues",
  "tags": ["crypto"],
  "authors": ["komachi"],
  "notes": [{
    "name": "W3C Editor’s Draft",
    "href": "https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#RandomSource-method-getRandomValues"
  }],
  "polyfills": [
    "polycrypt"
  ]
}
!*/
var crypto=prefixed("crypto",window),supportsGetRandomValues;if(crypto&&"getRandomValues"in crypto&&"Uint32Array"in window){var array=new Uint32Array(10),values=crypto.getRandomValues(array);supportsGetRandomValues=values&&is(values[0],"number")}Modernizr.addTest("getrandomvalues",!!supportsGetRandomValues),/*!
{
  "name": "cssall",
  "property": "cssall",
  "notes": [{
    "name": "Spec",
    "href": "http://dev.w3.org/csswg/css-cascade/#all-shorthand"
  }]
}
!*/
Modernizr.addTest("cssall","all"in docElement.style),/*!
{
  "name": "CSS Animations",
  "property": "cssanimations",
  "caniuse": "css-animation",
  "polyfills": ["transformie", "csssandpaper"],
  "tags": ["css"],
  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
  "notes": [{
    "name" : "Article: 'Dispelling the Android CSS animation myths'",
    "href": "http://goo.gl/OGw5Gm"
  }]
}
!*/
Modernizr.addTest("cssanimations",testAllProps("animationName","a",!0)),/*!
{
  "name": "Appearance",
  "property": "appearance",
  "caniuse": "css-appearance",
  "tags": ["css"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-appearance"
  },{
    "name": "CSS-Tricks CSS Almanac: appearance",
    "href": "http://css-tricks.com/almanac/properties/a/appearance/"
  }]
}
!*/
Modernizr.addTest("appearance",testAllProps("appearance")),/*!
{
  "name": "Backdrop Filter",
  "property": "backdropfilter",
  "authors": ["Brian Seward"],
  "tags": ["css"],
  "notes": [
    {
      "name": "W3C Editor’s Draft specification",
      "href": "http://dev.w3.org/fxtf/filters-2/#BackdropFilterProperty"
    },
    {
      "name": "Caniuse for CSS Backdrop Filter",
      "href": "http://caniuse.com/#feat=css-backdrop-filter"
    },
    {
      "name": "WebKit Blog introduction + Demo",
      "href": "https://www.webkit.org/blog/3632/introducing-backdrop-filters/"
    }
  ]
}
!*/
Modernizr.addTest("backdropfilter",testAllProps("backdropFilter")),/*!
{
  "name": "CSS Background Blend Mode",
  "property": "backgroundblendmode",
  "caniuse": "css-backgroundblendmode",
  "tags": ["css"],
  "notes": [
    {
      "name": "CSS Blend Modes could be the next big thing in Web Design",
      "href": " https://medium.com/@bennettfeely/css-blend-modes-could-be-the-next-big-thing-in-web-design-6b51bf53743a"
    }, {
      "name": "Demo",
      "href": "http://bennettfeely.com/gradients/"
    }
  ]
}
!*/
Modernizr.addTest("backgroundblendmode",prefixed("backgroundBlendMode","text")),/*!
{
  "name": "CSS Background Clip Text",
  "property": "backgroundcliptext",
  "authors": ["ausi"],
  "tags": ["css"],
  "notes": [
    {
      "name": "CSS Tricks Article",
      "href": "http://css-tricks.com/image-under-text/"
    },
    {
      "name": "MDN Docs",
      "href": "http://developer.mozilla.org/en/CSS/background-clip"
    },
    {
      "name": "Related Github Issue",
      "href": "http://github.com/Modernizr/Modernizr/issues/199"
    }
  ]
}
!*/
Modernizr.addTest("backgroundcliptext",function(){return testAllProps("backgroundClip","text")}),/*!
{
  "name": "Background Position Shorthand",
  "property": "bgpositionshorthand",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_shorthand"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-position"
  }, {
    "name": "W3 Spec",
    "href": "http://www.w3.org/TR/css3-background/#background-position"
  }, {
    "name": "Demo",
    "href": "http://jsfiddle.net/Blink/bBXvt/"
  }]
}
!*/
Modernizr.addTest("bgpositionshorthand",function(){var e=createElement("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),/*!
{
  "name": "Background Position XY",
  "property": "bgpositionxy",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_xy"],
  "authors": ["Allan Lei", "Brandom Aaron"],
  "notes": [{
    "name": "Demo",
    "href": "http://jsfiddle.net/allanlei/R8AYS/"
  }, {
    "name": "Adapted From",
    "href": "https://github.com/brandonaaron/jquery-cssHooks/blob/master/bgpos.js"
  }]
}
!*/
Modernizr.addTest("bgpositionxy",function(){return testAllProps("backgroundPositionX","3px",!0)&&testAllProps("backgroundPositionY","5px",!0)}),/*!
{
  "name": "Background Repeat",
  "property": ["bgrepeatspace", "bgrepeatround"],
  "tags": ["css"],
  "builderAliases": ["css_backgroundrepeat"],
  "authors": ["Ryan Seddon"],
  "notes": [{
    "name": "MDN Docs",
    "href": "http://developer.mozilla.org/en/CSS/background-repeat"
  }, {
    "name": "Test Page",
    "href": "http://jsbin.com/uzesun/"
  }, {
    "name": "Demo",
    "href": "http://jsfiddle.net/ryanseddon/yMLTQ/6/"
  }]
}
!*/
Modernizr.addTest("bgrepeatround",testAllProps("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",testAllProps("backgroundRepeat","space")),/*!
{
  "name": "Background Size",
  "property": "backgroundsize",
  "tags": ["css"],
  "knownBugs": ["This will false positive in Opera Mini - http://github.com/Modernizr/Modernizr/issues/396"],
  "notes": [{
    "name": "Related Issue",
    "href": "http://github.com/Modernizr/Modernizr/issues/396"
  }]
}
!*/
Modernizr.addTest("backgroundsize",testAllProps("backgroundSize","100%",!0)),/*!
{
  "name": "Background Size Cover",
  "property": "bgsizecover",
  "tags": ["css"],
  "builderAliases": ["css_backgroundsizecover"],
  "notes": [{
    "name" : "MDN Docs",
    "href": "http://developer.mozilla.org/en/CSS/background-size"
  }]
}
!*/
Modernizr.addTest("bgsizecover",testAllProps("backgroundSize","cover")),/*!
{
  "name": "Border Image",
  "property": "borderimage",
  "caniuse": "border-image",
  "polyfills": ["css3pie"],
   "knownBugs": ["Android < 2.0 is true, but has a broken implementation"],
  "tags": ["css"]
}
!*/
Modernizr.addTest("borderimage",testAllProps("borderImage","url() 1",!0)),/*!
{
  "name": "Border Radius",
  "property": "borderradius",
  "caniuse": "border-radius",
  "polyfills": ["css3pie"],
  "tags": ["css"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
    "href": "http://muddledramblings.com/table-of-css3-border-radius-compliance"
  }]
}
!*/
Modernizr.addTest("borderradius",testAllProps("borderRadius","0px",!0)),/*!
{
  "name": "Box Shadow",
  "property": "boxshadow",
  "caniuse": "css-boxshadow",
  "tags": ["css"],
  "knownBugs": [
    "WebOS false positives on this test.",
    "The Kindle Silk browser false positives"
  ]
}
!*/
Modernizr.addTest("boxshadow",testAllProps("boxShadow","1px 1px",!0)),/*!
{
  "name": "Box Sizing",
  "property": "boxsizing",
  "caniuse": "css3-boxsizing",
  "polyfills": ["borderboxmodel", "boxsizingpolyfill", "borderbox"],
  "tags": ["css"],
  "builderAliases": ["css_boxsizing"],
  "notes": [{
    "name": "MDN Docs",
    "href": "http://developer.mozilla.org/en/CSS/box-sizing"
  },{
    "name": "Related Github Issue",
    "href": "http://github.com/Modernizr/Modernizr/issues/248"
  }]
}
!*/
Modernizr.addTest("boxsizing",testAllProps("boxSizing","border-box",!0)&&(document.documentMode===undefined||document.documentMode>7)),/*!
{
  "name": "CSS Calc",
  "property": "csscalc",
  "caniuse": "calc",
  "tags": ["css"],
  "builderAliases": ["css_calc"],
  "authors": ["@calvein"]
}
!*/
Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=createElement("a");return n.style.cssText=e+prefixes.join(t+e),!!n.style.length}),/*!
{
  "name": "CSS :checked pseudo-selector",
  "caniuse": "css-sel3",
  "property": "checked",
  "tags": ["css"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/879"
  }]
}
!*/
Modernizr.addTest("checked",function(){return testStyles("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=createElement("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),/*!
{
  "name": "CSS Font ch Units",
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "property": "csschunit",
  "tags": ["css"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/css3-values/#font-relative-lengths"
  }]
}
!*/
Modernizr.addTest("csschunit",function(){var e,t=modElem.elem.style;try{t.fontSize="3ch",e=-1!==t.fontSize.indexOf("ch")}catch(n){e=!1}return e}),/*!
{
  "name": "CSS Columns",
  "property": "csscolumns",
  "caniuse": "multicolumn",
  "polyfills": ["css3multicolumnjs"],
  "tags": ["css"]
}
!*/
function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=testAllProps("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],i=0;i<n.length;i++)e=n[i].toLowerCase(),t=testAllProps("column"+n[i]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||testAllProps(n[i])),Modernizr.addTest("csscolumns."+e,t)}(),/*!
{
  "name": "CSS Cubic Bezier Range",
  "property": "cubicbezierrange",
  "tags": ["css"],
  "builderAliases": ["css_cubicbezierrange"],
  "doc" : null,
  "authors": ["@calvein"],
  "warnings": ["cubic-bezier values can't be > 1 for Webkit until [bug #45761](https://bugs.webkit.org/show_bug.cgi?id=45761) is fixed"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
    "href": "http://muddledramblings.com/table-of-css3-border-radius-compliance"
  }]
}
!*/
Modernizr.addTest("cubicbezierrange",function(){var e=createElement("a");return e.style.cssText=prefixes.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),/*!
{
  "name": "CSS Display run-in",
  "property": "display-runin",
  "authors": ["alanhogan"],
  "tags": ["css"],
  "builderAliases": ["css_displayrunin"],
  "notes": [{
    "name": "CSS Tricks Article",
    "href": "http://css-tricks.com/596-run-in/"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/198"
  }]
}
!*/
Modernizr.addTest("displayrunin",testAllProps("display","run-in"),{aliases:["display-runin"]}),/*!
{
  "name": "CSS Display table",
  "property": "displaytable",
  "caniuse": "css-table",
  "authors": ["scottjehl"],
  "tags": ["css"],
  "builderAliases": ["css_displaytable"],
  "notes": [{
    "name": "Detects for all additional table display values",
    "href": "http://pastebin.com/Gk9PeVaQ"
  }]
}
!*/
testStyles("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2),/*!
{
  "name": "CSS text-overflow ellipsis",
  "property": "ellipsis",
  "caniuse": "text-overflow",
  "polyfills": [
    "text-overflow"
  ],
  "tags": ["css"]
}
!*/
Modernizr.addTest("ellipsis",testAllProps("textOverflow","ellipsis"));/*!
{
  "name": "CSS.escape()",
  "property": "cssescape",
  "polyfills": [
    "css-escape"
  ],
  "tags": [
    "css",
    "cssom"
  ]
}
!*/
var CSS=window.CSS;Modernizr.addTest("cssescape",CSS?"function"==typeof CSS.escape:!1),/*!
{
  "name": "CSS Font ex Units",
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "property": "cssexunit",
  "tags": ["css"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/css3-values/#font-relative-lengths"
  }]
}
!*/
Modernizr.addTest("cssexunit",function(){var e,t=modElem.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(n){e=!1}return e});/*!
{
  "name": "CSS Supports",
  "property": "supports",
  "caniuse": "css-featurequeries",
  "tags": ["css"],
  "builderAliases": ["css_supports"],
  "notes": [{
    "name": "W3 Spec",
    "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
  },{
    "name": "Related Github Issue",
    "href": "github.com/Modernizr/Modernizr/issues/648"
  },{
    "name": "W3 Info",
    "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
  }]
}
!*/
var newSyntax="CSS"in window&&"supports"in window.CSS,oldSyntax="supportsCSS"in window;Modernizr.addTest("supports",newSyntax||oldSyntax),/*!
{
  "name": "CSS Filters",
  "property": "cssfilters",
  "caniuse": "css-filters",
  "polyfills": ["polyfilter"],
  "tags": ["css"],
  "builderAliases": ["css_filters"],
  "notes": [{
    "name": "MDN article on CSS filters",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
  }]
}
!*/
Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return testAllProps("filter","blur(2px)");var e=createElement("a");return e.style.cssText=prefixes.join("filter:blur(2px); "),!!e.style.length&&(document.documentMode===undefined||document.documentMode>9)}),/*!
{
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]
}
!*/
Modernizr.addTest("flexbox",testAllProps("flexBasis","1px",!0)),/*!
{
  "name": "Flexbox (legacy)",
  "property": "flexboxlegacy",
  "tags": ["css"],
  "polyfills": ["flexie"],
  "notes": [{
    "name": "The _old_ flexbox",
    "href": "http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/"
  }]
}
!*/
Modernizr.addTest("flexboxlegacy",testAllProps("boxDirection","reverse",!0)),/*!
{
  "name": "Flexbox (tweener)",
  "property": "flexboxtweener",
  "tags": ["css"],
  "polyfills": ["flexie"],
  "notes": [{
    "name": "The _inbetween_ flexbox",
    "href": "http://www.w3.org/TR/2011/WD-css3-flexbox-20111129/"
  }],
  "warnings": ["This represents an old syntax, not the latest standard syntax."]
}
!*/
Modernizr.addTest("flexboxtweener",testAllProps("flexAlign","end",!0)),/*!
{
  "name": "Flex Line Wrapping",
  "property": "flexwrap",
  "tags": ["css", "flexbox"],
  "notes": [{
    "name": "W3C Flexible Box Layout spec",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "Does not imply a modern implementation – see documentation."
  ]
}
!*/
Modernizr.addTest("flexwrap",testAllProps("flexWrap","wrap",!0));/*!
{
  "name": "@font-face",
  "property": "fontface",
  "authors": ["Diego Perini", "Mat Marquis"],
  "tags": ["css"],
  "knownBugs": [
    "False Positive: WebOS http://github.com/Modernizr/Modernizr/issues/342",
    "False Postive: WP7 http://github.com/Modernizr/Modernizr/issues/538"
  ],
  "notes": [{
    "name": "@font-face detection routine by Diego Perini",
    "href": "http://javascript.nwbox.com/CSSSupport/"
  },{
    "name": "Filament Group @font-face compatibility research",
    "href": "https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.p"
  },{
    "name": "Filament Grunticon/@font-face device testing results",
    "href": "https://docs.google.com/spreadsheet/ccc?key=0Ag5_yGvxpINRdHFYeUJPNnZMWUZKR2ItMEpRTXZPdUE#gid=0"
  },{
    "name": "CSS fonts on Android",
    "href": "http://stackoverflow.com/questions/3200069/css-fonts-on-android"
  },{
    "name": "@font-face and Android",
    "href": "http://archivist.incutio.com/viewlist/css-discuss/115960"
  }]
}
!*/
var blacklist=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),i=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,r=533>t&&e.match(/android/gi);return n||r||i}();blacklist?Modernizr.addTest("fontface",!1):testStyles('@font-face {font-family:"font";src:url("https://")}',function(e,t){var n=document.getElementById("smodernizr"),i=n.sheet||n.styleSheet,r=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"",o=/src/i.test(r)&&0===r.indexOf(t.split(" ")[0]);Modernizr.addTest("fontface",o)}),/*!
{
  "name": "CSS Generated Content",
  "property": "generatedcontent",
  "tags": ["css"],
  "warnings": ["Android won't return correct height for anything below 7px #738"],
  "notes": [{
    "name": "W3C CSS Selectors Level 3 spec",
    "href": "http://www.w3.org/TR/css3-selectors/#gen-content"
  },{
    "name": "MDN article on :before",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
  },{
    "name": "MDN article on :after",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
  }]
}
!*/
testStyles('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=7)}),/*!
{
  "name": "CSS Gradients",
  "caniuse": "css-gradients",
  "property": "cssgradients",
  "tags": ["css"],
  "knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],
  "notes": [{
    "name": "Webkit Gradient Syntax",
    "href": "http://webkit.org/blog/175/introducing-css-gradients/"
  },{
    "name": "Mozilla Linear Gradient Syntax",
    "href": "http://developer.mozilla.org/en/CSS/-moz-linear-gradient"
  },{
    "name": "Mozilla Radial Gradient Syntax",
    "href": "http://developer.mozilla.org/en/CSS/-moz-radial-gradient"
  },{
    "name": "W3C Gradient Spec",
    "href": "dev.w3.org/csswg/css3-images/#gradients-"
  }]
}
!*/
Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="",r=0,o=prefixes.length-1;o>r;r++)e=0===r?"to ":"",i+=t+prefixes[r]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(i+=t+"-webkit-"+n);var s=createElement("a"),a=s.style;return a.cssText=i,(""+a.backgroundImage).indexOf("gradient")>-1}),/*!
{
  "name": "CSS HSLA Colors",
  "caniuse": "css3-colors",
  "property": "hsla",
  "tags": ["css"]
}
!*/
Modernizr.addTest("hsla",function(){var e=createElement("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",contains(e.backgroundColor,"rgba")||contains(e.backgroundColor,"hsla")}),/*!
{
  "name": "CSS Hyphens",
  "caniuse": "css-hyphens",
  "property": ["csshyphens", "softhyphens", "softhyphensfind"],
  "tags": ["css"],
  "builderAliases": ["css_hyphens"],
  "async" : true,
  "authors": ["David Newton"],
  "warnings": [
    "These tests currently require document.body to be present",
    "If loading Hyphenator.js via yepnope, be cautious of issue 158: http://code.google.com/p/hyphenator/issues/detail?id=158",
    "This is very large – only include it if you absolutely need it"
    ],
  "notes": [{
    "name": "The Current State of Hyphenation on the Web.",
    "href": "http://davidnewton.ca/the-current-state-of-hyphenation-on-the-web"
  },{
    "name": "Hyphenation Test Page",
    "href": "http://davidnewton.ca/demos/hyphenation/test.html"
  },{
    "name": "Hyphenation is Language Specific",
    "href": " http://code.google.com/p/hyphenator/source/diff?spec=svn975&r=975&format=side&path=/trunk/Hyphenator.js#sc_svn975_313"
  },{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/312"
  }]
}
!*/
Modernizr.addAsyncTest(function(){function e(){function n(){try{var e=createElement("div"),t=createElement("span"),n=e.style,i=0,r=0,o=!1,s=document.body.firstElementChild||document.body.firstChild;return e.appendChild(t),t.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",document.body.insertBefore(e,s),n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",i=t.offsetHeight,r=t.offsetWidth,n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+prefixes.join("hyphens:auto; "),o=t.offsetHeight!=i||t.offsetWidth!=r,document.body.removeChild(e),e.removeChild(t),o}catch(a){return!1}}function i(e,t){try{var n=createElement("div"),i=createElement("span"),r=n.style,o=0,s=!1,a=!1,l=!1,d=document.body.firstElementChild||document.body.firstChild;return r.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",n.appendChild(i),document.body.insertBefore(n,d),i.innerHTML="mm",o=i.offsetHeight,i.innerHTML="m"+e+"m",a=i.offsetHeight>o,t?(i.innerHTML="m<br />m",o=i.offsetWidth,i.innerHTML="m"+e+"m",l=i.offsetWidth>o):l=!0,a===!0&&l===!0&&(s=!0),document.body.removeChild(n),n.removeChild(i),s}catch(c){return!1}}function r(e){try{var t,n=createElement("input"),i=createElement("div"),r="lebowski",o=!1,s=document.body.firstElementChild||document.body.firstChild;i.innerHTML=r+e+r,document.body.insertBefore(i,s),document.body.insertBefore(n,i),n.setSelectionRange?(n.focus(),n.setSelectionRange(0,0)):n.createTextRange&&(t=n.createTextRange(),t.collapse(!0),t.moveEnd("character",0),t.moveStart("character",0),t.select());try{window.find?o=window.find(r+r):(t=window.self.document.body.createTextRange(),o=t.findText(r+r))}catch(a){o=!1}return document.body.removeChild(i),document.body.removeChild(n),o}catch(a){return!1}}return document.body||document.getElementsByTagName("body")[0]?(addTest("csshyphens",function(){if(!testAllProps("hyphens","auto",!0))return!1;try{return n()}catch(e){return!1}}),addTest("softhyphens",function(){try{return i("&#173;",!0)&&i("&#8203;",!1)}catch(e){return!1}}),void addTest("softhyphensfind",function(){try{return r("&#173;")&&r("&#8203;")}catch(e){return!1}})):void setTimeout(e,t)}var t=300;setTimeout(e,t)}),/*!
{
  "name": "CSS :invalid pseudo-class",
  "property": "cssinvalid",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid"
  }]
}
!*/
Modernizr.addTest("cssinvalid",function(){return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=createElement("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),/*!
{
  "name": "CSS :last-child pseudo-selector",
  "caniuse": "css-sel3",
  "property": "lastchild",
  "tags": ["css"],
  "builderAliases": ["css_lastchild"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/304"
  }]
}
!*/
testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),/*!
{
  "name": "CSS Mask",
  "caniuse": "css-masks",
  "property": "cssmask",
  "tags": ["css"],
  "builderAliases": ["css_mask"],
  "notes": [
    {
      "name": "Webkit blog on CSS Masks",
      "href": "http://www.webkit.org/blog/181/css-masks/"
    },
    {
      "name": "Safari Docs",
      "href": "http://developer.apple.com/library/safari/#documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Masks/Masks.html"
    },
    {
      "name": "Mozilla css svg mask (not this)",
      "href": "http://developer.mozilla.org/en/CSS/mask"
    },
    {
      "name": "Combine with clippaths for awesomeness",
      "href": "http://generic.cx/for/webkit/test.html"
    }
  ]
}
!*/
Modernizr.addTest("cssmask",testAllProps("maskRepeat","repeat-x",!0)),/*!
{
  "name": "CSS Media Queries",
  "caniuse": "css-mediaqueries",
  "property": "mediaqueries",
  "tags": ["css"],
  "builderAliases": ["css_mediaqueries"]
}
!*/
Modernizr.addTest("mediaqueries",mq("only all")),/*!
{
  "name": "CSS Multiple Backgrounds",
  "caniuse": "multibackgrounds",
  "property": "multiplebgs",
  "tags": ["css"]
}
!*/
Modernizr.addTest("multiplebgs",function(){var e=createElement("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),/*!
{
  "name": "CSS :nth-child pseudo-selector",
  "caniuse": "css-sel3",
  "property": "nthchild",
  "tags": ["css"],
  "notes": [
    {
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/pull/685"
    },
    {
      "name": "Sitepoint :nth-child documentation",
      "href": "http://reference.sitepoint.com/css/pseudoclass-nthchild"
    }
  ],
  "authors": ["@emilchristensen"],
  "warnings": ["Known false negative in Safari 3.1 and Safari 3.2.2"]
}
!*/
testStyles("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){Modernizr.addTest("nthchild",function(){for(var t=e.getElementsByTagName("div"),n=!0,i=0;5>i;i++)n=n&&t[i].offsetWidth===i%2+1;return n})},5),/*!
{
  "name": "CSS Object Fit",
  "caniuse": "object-fit",
  "property": "objectfit",
  "tags": ["css"],
  "builderAliases": ["css_objectfit"],
  "notes": [{
    "name": "Opera Article on Object Fit",
    "href": "http://dev.opera.com/articles/view/css3-object-fit-object-position/"
  }]
}
!*/
Modernizr.addTest("objectfit",!!prefixed("objectFit"),{aliases:["object-fit"]}),/*!
{
  "name": "CSS Opacity",
  "caniuse": "css-opacity",
  "property": "opacity",
  "tags": ["css"]
}
!*/
Modernizr.addTest("opacity",function(){var e=createElement("a").style;return e.cssText=prefixes.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),/*!
{
  "name": "CSS Overflow Scrolling",
  "property": "overflowscrolling",
  "tags": ["css"],
  "builderAliases": ["css_overflow_scrolling"],
  "warnings": ["Introduced in iOS5b2. API is subject to change."],
  "notes": [{
    "name": "Article on iOS overflow scrolling",
    "href": "http://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/"
  }]
}
!*/
Modernizr.addTest("overflowscrolling",testAllProps("overflowScrolling","touch",!0)),/*!
{
  "name": "CSS Pointer Events",
  "caniuse": "pointer-events",
  "property": "csspointerevents",
  "authors": ["ausi"],
  "tags": ["css"],
  "builderAliases": ["css_pointerevents"],
  "notes": [
    {
      "name": "MDN Docs",
      "href": "http://developer.mozilla.org/en/CSS/pointer-events"
    },{
      "name": "Test Project Page",
      "href": "http://ausi.github.com/Feature-detection-technique-for-pointer-events/"
    },{
      "name": "Test Project Wiki",
      "href": "http://github.com/ausi/Feature-detection-technique-for-pointer-events/wiki"
    },
    {
      "name": "Related Github Issue",
      "href": "http://github.com/Modernizr/Modernizr/issues/80"
    }
  ]
}
!*/
Modernizr.addTest("csspointerevents",function(){var e=createElement("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),/*!
{
  "name": "CSS position: sticky",
  "property": "csspositionsticky",
  "tags": ["css"],
  "builderAliases": ["css_positionsticky"],
  "notes": [{
    "name": "Chrome bug report",
    "href":"https://code.google.com/p/chromium/issues/detail?id=322972"
  }],
  "warnings": [ "using position:sticky on anything but top aligned elements is buggy in Chrome < 37 and iOS <=7+" ]
}
!*/
Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=createElement("a"),i=n.style;return i.cssText=e+prefixes.join(t+";"+e).slice(0,-e.length),-1!==i.position.indexOf(t)}),/*!
{
  "name": "CSS Generated Content Animations",
  "property": "csspseudoanimations",
  "tags": ["css"]
}
!*/
Modernizr.addTest("csspseudoanimations",function(){var e=!1;if(!Modernizr.cssanimations||!window.getComputedStyle)return e;var t=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return Modernizr.testStyles(t,function(t){e="10px"===window.getComputedStyle(t,":before").getPropertyValue("font-size")}),e}),/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/
Modernizr.addTest("csstransitions",testAllProps("transition","all",!0)),/*!
{
  "name": "CSS Generated Content Transitions",
  "property": "csspseudotransitions",
  "tags": ["css"]
}
!*/
Modernizr.addTest("csspseudotransitions",function(){var e=!1;if(!Modernizr.csstransitions||!window.getComputedStyle)return e;var t='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(t,function(t){window.getComputedStyle(t,":before").getPropertyValue("font-size"),t.className+="trigger",e="5px"===window.getComputedStyle(t,":before").getPropertyValue("font-size")}),e}),/*!
{
  "name": "CSS Reflections",
  "caniuse": "css-reflections",
  "property": "cssreflections",
  "tags": ["css"]
}
!*/
Modernizr.addTest("cssreflections",testAllProps("boxReflect","above",!0)),/*!
{
  "name": "CSS Regions",
  "caniuse": "css-regions",
  "authors": ["Mihai Balan"],
  "property": "regions",
  "tags": ["css"],
  "builderAliases": ["css_regions"],
  "notes": [{
    "name": "W3C Specification",
    "href": "http://www.w3.org/TR/css3-regions/"
  }]
}
!*/
Modernizr.addTest("regions",function(){if(isSVG)return!1;var e=Modernizr.prefixed("flowFrom"),t=Modernizr.prefixed("flowInto"),n=!1;if(!e||!t)return n;var i=createElement("iframe"),r=createElement("div"),o=createElement("div"),s=createElement("div"),a="modernizr_flow_for_regions_check";o.innerText="M",r.style.cssText="top: 150px; left: 150px; padding: 0px;",s.style.cssText="width: 50px; height: 50px; padding: 42px;",s.style[e]=a,r.appendChild(o),r.appendChild(s),docElement.appendChild(r);var l,d,c=o.getBoundingClientRect();return o.style[t]=a,l=o.getBoundingClientRect(),d=parseInt(l.left-c.left,10),docElement.removeChild(r),42==d?n=!0:(docElement.appendChild(i),c=i.getBoundingClientRect(),i.style[t]=a,l=i.getBoundingClientRect(),c.height>0&&c.height!==l.height&&0===l.height&&(n=!0)),o=s=r=i=undefined,n}),/*!
{
  "name": "CSS Font rem Units",
  "caniuse": "rem",
  "authors": ["nsfmc"],
  "property": "cssremunit",
  "tags": ["css"],
  "builderAliases": ["css_remunit"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/css3-values/#relative0"
  },{
    "name": "Font Size with rem by Jonathan Snook",
    "href": "http://snook.ca/archives/html_and_css/font-size-with-rem"
  }]
}
!*/
Modernizr.addTest("cssremunit",function(){var e=createElement("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),/*!
{
  "name": "CSS UI Resize",
  "property": "cssresize",
  "caniuse": "css-resize",
  "tags": ["css"],
  "builderAliases": ["css_resize"],
  "notes": [{
    "name": "W3C Specification",
    "href": "http://www.w3.org/TR/css3-ui/#resize"
  },{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/resize"
  }]
}
!*/
Modernizr.addTest("cssresize",testAllProps("resize","both",!0)),/*!
{
  "name": "CSS rgba",
  "caniuse": "css3-colors",
  "property": "rgba",
  "tags": ["css"],
  "notes": [{
    "name": "CSSTricks Tutorial",
    "href": "http://css-tricks.com/rgba-browser-support/"
  }]
}
!*/
Modernizr.addTest("rgba",function(){var e=createElement("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),/*!
{
  "name": "CSS Stylable Scrollbars",
  "property": "cssscrollbar",
  "tags": ["css"],
  "builderAliases": ["css_scrollbars"]
}
!*/
testStyles("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+prefixes.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(e){Modernizr.addTest("cssscrollbar",40==e.scrollWidth)}),/*!
{
  "name": "CSS Shapes",
  "property": "shapes",
  "tags": ["css"],
  "notes": [{
    "name": "CSS Shapes W3C specification",
    "href": "http://www.w3.org/TR/css-shapes"
  },{
    "name": "Examples from Adobe",
    "href": "http://html.adobe.com/webplatform/layout/shapes"
  }, {
    "name": "Samples showcasing uses of Shapes",
    "href": "http://codepen.io/collection/qFesk"
  }]
}
!*/
Modernizr.addTest("shapes",testAllProps("shapeOutside","content-box",!0)),/*!
{
  "name": "CSS general sibling selector",
  "caniuse": "css-sel3",
  "property": "siblinggeneral",
  "tags": ["css"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/889"
  }]
}
!*/
Modernizr.addTest("siblinggeneral",function(){return testStyles("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),/*!
{
  "name": "CSS Subpixel Fonts",
  "property": "subpixelfont",
  "tags": ["css"],
  "builderAliases": ["css_subpixelfont"],
  "authors": [
    "@derSchepp",
    "@gerritvanaaken",
    "@rodneyrehm",
    "@yatil",
    "@ryanseddon"
  ],
  "notes": [{
    "name": "Origin Test",
    "href": "https://github.com/gerritvanaaken/subpixeldetect"
  }]
}
!*/
testStyles("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",function(e){var t=e.firstChild;t.innerHTML="This is a text written in Arial",Modernizr.addTest("subpixelfont",window.getComputedStyle?"44px"!==window.getComputedStyle(t,null).getPropertyValue("width"):!1)},1,["subpixel"]),/*!
{
  "name": "CSS :target pseudo-class",
  "caniuse": "css-sel3",
  "property": "target",
  "tags": ["css"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:target"
  }],
  "authors": ["@zachleat"],
  "warnings": ["Opera Mini supports :target but doesn't update the hash for anchor links."]
}
!*/
Modernizr.addTest("target",function(){var e=window.document;if(!("querySelectorAll"in e))return!1;try{return e.querySelectorAll(":target"),!0}catch(t){return!1}}),/*!
{
  "name": "CSS text-align-last",
  "property": "textalignlast",
  "tags": ["css"],
  "knownBugs": ["IE does not support the 'start' or 'end' values."],
  "notes": [{
      "name": "Quicksmode",
      "href": "http://www.quirksmode.org/css/text/textalignlast.html"
    },{
      "name": "MDN",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last"
    }]
}
!*/
Modernizr.addTest("textalignlast",testAllProps("textAlignLast")),/*!
{
  "name": "CSS textshadow",
  "property": "textshadow",
  "caniuse": "css-textshadow",
  "tags": ["css"],
  "knownBugs": ["FF3.0 will false positive on this test"]
}
!*/
Modernizr.addTest("textshadow",testProp("textShadow","1px 1px")),/*!
{
  "name": "CSS Transforms",
  "property": "csstransforms",
  "caniuse": "transforms2d",
  "tags": ["css"]
}
!*/
Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&testAllProps("transform","scale(1)",!0)}),/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
!*/
Modernizr.addTest("csstransforms3d",function(){var e=!!testAllProps("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in docElement.style)){var n,i="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",testStyles(i+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),/*!
{
  "name": "CSS Transform Style preserve-3d",
  "property": "preserve3d",
  "authors": ["edmellum"],
  "tags": ["css"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/762"
  }]
}
!*/
Modernizr.addTest("preserve3d",testAllProps("transformStyle","preserve-3d")),/*!
{
  "name": "CSS user-select",
  "property": "userselect",
  "caniuse": "user-select-none",
  "authors": ["ryan seddon"],
  "tags": ["css"],
  "builderAliases": ["css_userselect"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/250"
  }]
}
!*/
Modernizr.addTest("userselect",testAllProps("userSelect","none",!0)),/*!
{
  "name": "CSS :valid pseudo-class",
  "property": "cssvalid",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:valid"
  }]
}
!*/
Modernizr.addTest("cssvalid",function(){return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=createElement("input");return e.appendChild(t),t.clientWidth>10})}),/*!
{
  "name": "CSS vh unit",
  "property": "cssvhunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vhunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "Similar JSFiddle",
    "href": "http://jsfiddle.net/FWeinb/etnYC/"
  }]
}
!*/
testStyles("#modernizr { height: 50vh; }",function(e){var t=parseInt(window.innerHeight/2,10),n=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).height,10);Modernizr.addTest("cssvhunit",n==t)}),/*!
{
  "name": "CSS vmax unit",
  "property": "cssvmaxunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vmaxunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "http://jsfiddle.net/glsee/JDsWQ/4/"
  }]
}
!*/
testStyles("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],i=e.childNodes[0],r=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=i.clientWidth/100,s=i.clientHeight/100,a=parseInt(50*Math.max(o,s),10),l=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvmaxunit",roundedEquals(a,l)||roundedEquals(a,l-r))},3),/*!
{
  "name": "CSS vmin unit",
  "property": "cssvminunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vminunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "http://jsfiddle.net/glsee/JRmdq/8/"
  }]
}
!*/
testStyles("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],i=e.childNodes[0],r=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=i.clientWidth/100,s=i.clientHeight/100,a=parseInt(50*Math.min(o,s),10),l=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvminunit",roundedEquals(a,l)||roundedEquals(a,l-r))},3),/*!
{
  "name": "CSS vw unit",
  "property": "cssvwunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vwunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "http://jsfiddle.net/FWeinb/etnYC/"
  }]
}
!*/
testStyles("#modernizr { width: 50vw; }",function(e){var t=parseInt(window.innerWidth/2,10),n=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).width,10);Modernizr.addTest("cssvwunit",n==t)}),/*!
{
  "name": "will-change",
  "property": "willchange",
  "notes": [{
    "name": "Spec",
    "href": "http://tabatkins.github.io/specs/css-will-change/"
  }]
}
!*/
Modernizr.addTest("willchange","willChange"in docElement.style),/*!
{
  "name": "CSS wrap-flow",
  "property": "wrapflow",
  "tags": ["css"],
  "notes": [
    {
      "name": "W3C Exclusions spec",
      "href": "http://www.w3.org/TR/css3-exclusions"
    },
    {
      "name": "Example by Adobe",
      "href": "http://html.adobe.com/webstandards/cssexclusions"
    }
  ]
}
!*/
Modernizr.addTest("wrapflow",function(){var e=prefixed("wrapFlow");if(!e||isSVG)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),n=createElement("div"),i=createElement("div"),r=createElement("span");i.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",r.innerText="X",n.appendChild(i),n.appendChild(r),docElement.appendChild(n);var o=r.offsetLeft;return docElement.removeChild(n),i=r=n=undefined,150==o}),/*!
{
  "name": "Custom protocol handler",
  "property": "customprotocolhandler",
  "authors": ["Ben Schwarz"],
  "builderAliases": ["custom_protocol_handler"],
  "notes": [{
    "name": "WHATWG overview",
    "href": "http://developers.whatwg.org/timers.html#custom-handlers"
  },{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/navigator.registerProtocolHandler"
  }],
  "warnings": [],
  "polyfills": []
}
!*/
Modernizr.addTest("customprotocolhandler",function(){if(!navigator.registerProtocolHandler)return!1;try{navigator.registerProtocolHandler("thisShouldFail")}catch(e){return e instanceof TypeError}return!1}),/*!
{
  "name": "CustomEvent",
  "property": "customevent",
  "tags": ["customevent"],
  "authors": ["Alberto Elias"],
  "notes": [{
    "name": "W3C DOM reference",
    "href": "http://www.w3.org/TR/DOM-Level-3-Events/#interface-CustomEvent"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/docs/Web/API/CustomEvent"
  }],
  "polyfills": ["eventlistener"]
}
!*/
Modernizr.addTest("customevent","CustomEvent"in window&&"function"==typeof window.CustomEvent),/*!
{
  "name": "Dart",
  "property": "dart",
  "authors": ["Theodoor van Donge"],
  "notes": [{
    "name": "Language website",
    "href": "http://www.dartlang.org/"
  }]
}
!*/
Modernizr.addTest("dart",!!prefixed("startDart",navigator)),/*!
{
  "name": "DataView",
  "property": "dataview",
  "authors": ["Addy Osmani"],
  "builderAliases": ["dataview_api"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/JavaScript_typed_arrays/DataView"
  }],
  "polyfills": ["jdataview"]
}
!*/
Modernizr.addTest("dataview","undefined"!=typeof DataView&&"getFloat64"in DataView.prototype),/*!
{
  "name": "classList",
  "caniuse": "classlist",
  "property": "classlist",
  "tags": ["dom"],
  "builderAliases": ["dataview_api"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/DOM/element.classList"
  }]
}
!*/
Modernizr.addTest("classlist","classList"in docElement),/*!
{
  "name": "createElement with Attributes",
  "property": ["createelementattrs", "createelement-attrs"],
  "tags": ["dom"],
  "builderAliases": ["dom_createElement_attrs"],
  "authors": ["James A. Rosen"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/258"
  }]
}
!*/
Modernizr.addTest("createelementattrs",function(){try{return"test"==createElement('<input name="test" />').getAttribute("name")}catch(e){return!1}},{aliases:["createelement-attrs"]}),/*!
{
  "name": "dataset API",
  "caniuse": "dataset",
  "property": "dataset",
  "tags": ["dom"],
  "builderAliases": ["dom_dataset"],
  "authors": ["@phiggins42"]
}
!*/
Modernizr.addTest("dataset",function(){var e=createElement("div");return e.setAttribute("data-a-b","c"),!(!e.dataset||"c"!==e.dataset.aB)}),/*!
{
  "name": "Document Fragment",
  "property": "documentfragment",
  "notes": [{
    "name": "W3C DOM Level 1 Reference",
    "href": "http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-B63ED1A3"
  }, {
    "name": "SitePoint Reference",
    "href": "http://reference.sitepoint.com/javascript/DocumentFragment"
  }, {
    "name": "QuirksMode Compatibility Tables",
    "href": "http://www.quirksmode.org/m/w3c_core.html#t112"
  }],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "knownBugs": ["false-positive on Blackberry 9500, see QuirksMode note"],
  "tags": []
}
!*/
Modernizr.addTest("documentfragment",function(){return"createDocumentFragment"in document&&"appendChild"in docElement}),/*!
{
  "name": "[hidden] Attribute",
  "property": "hidden",
  "tags": ["dom"],
  "notes": [{
    "name": "WHATWG: The hidden attribute",
    "href": "http://developers.whatwg.org/editing.html#the-hidden-attribute"
  }, {
    "name": "original implementation of detect code",
    "href": "https://github.com/aFarkas/html5shiv/blob/bf4fcc4/src/html5shiv.js#L38"
  }],
  "polyfills": ["html5shiv"],
  "authors": ["Ron Waldon (@jokeyrhyme)"]
}
!*/
Modernizr.addTest("hidden","hidden"in createElement("a")),/*!
{
  "name": "microdata",
  "property": "microdata",
  "tags": ["dom"],
  "builderAliases": ["dom_microdata"],
  "notes": [{
    "name": "W3 Spec",
    "href": "http://www.w3.org/TR/html5/microdata.html"
  }]
}
!*/
Modernizr.addTest("microdata","getItems"in document),/*!
{
  "name": "DOM4 MutationObserver",
  "property": "mutationobserver",
  "caniuse": "mutationobserver",
  "tags": ["dom"],
  "authors": ["Karel Sedláček (@ksdlck)"],
  "polyfills": ["mutationobservers"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver"
  }]
}
!*/
Modernizr.addTest("mutationobserver",!!window.MutationObserver||!!window.WebKitMutationObserver);var inputElem=createElement("input"),inputattrs="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),attrs={};Modernizr.input=function(e){for(var t=0,n=e.length;n>t;t++)attrs[e[t]]=!!(e[t]in inputElem);return attrs.list&&(attrs.list=!(!createElement("datalist")||!window.HTMLDataListElement)),attrs}(inputattrs),/*!
{
  "name": "datalist Element",
  "caniuse": "datalist",
  "property": "datalistelem",
  "tags": ["elem"],
  "builderAliases": ["elem_datalist"],
  "warnings": ["This test is a dupe of Modernizr.input.list. Only around for legacy reasons."],
  "notes": [{
    "name": "CSS Tricks Article",
    "href": "http://css-tricks.com/15346-relevant-dropdowns-polyfill-for-datalist/"
  },{
    "name": "Mike Taylor Test",
    "href": "http://miketaylr.com/test/datalist.html"
  },{
    "name": "Mike Taylor Code",
    "href": "http://miketaylr.com/code/datalist.html"
  }]
}
!*/
Modernizr.addTest("datalistelem",Modernizr.input.list),/*!
{
  "name": "details Element",
  "caniuse": "details",
  "property": "details",
  "tags": ["elem"],
  "builderAliases": ["elem_details"],
  "authors": ["@mathias"],
  "notes": [{
    "name": "Mathias' Original",
    "href": "http://mths.be/axh"
  }]
}
!*/
Modernizr.addTest("details",function(){var e,t=createElement("details");return"open"in t?(testStyles("#modernizr details{display:block}",function(n){n.appendChild(t),t.innerHTML="<summary>a</summary>b",e=t.offsetHeight,t.open=!0,e=e!=t.offsetHeight}),e):!1}),/*!
{
  "name": "output Element",
  "property": "outputelem",
  "tags": ["elem"],
  "builderAliases": ["elem_output"],
  "notes": [{
    "name": "WhatWG Spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-button-element.html#the-output-element"
  }]
}
!*/
Modernizr.addTest("outputelem","value"in createElement("output")),/*!
{
  "name": "picture Element",
  "property": "picture",
  "tags": ["elem"],
  "authors": ["Scott Jehl", "Mat Marquis"],
  "notes": [{
    "name": "Specification",
    "href": "http://picture.responsiveimages.org"
  },{
    "name": "Relevant spec issue",
    "href": "https://github.com/ResponsiveImagesCG/picture-element/issues/87"
  }]
}
!*/
Modernizr.addTest("picture","HTMLPictureElement"in window),/*!
{
  "name": "progress Element",
  "caniuse": "progressmeter",
  "property": ["progressbar", "meter"],
  "tags": ["elem"],
  "builderAliases": ["elem_progress_meter"],
  "authors": ["Stefan Wallin"]
}
!*/
Modernizr.addTest("progressbar",createElement("progress").max!==undefined),Modernizr.addTest("meter",createElement("meter").max!==undefined),/*!
{
  "name": "ruby, rp, rt Elements",
  "caniuse": "ruby",
  "property": "ruby",
  "tags": ["elem"],
  "builderAliases": ["elem_ruby"],
  "authors": ["Cătălin Mariș"],
  "notes": [{
    "name": "WHATWG Specification",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-ruby-element"
  }]
}
!*/
Modernizr.addTest("ruby",function(){function e(e,t){var n;return window.getComputedStyle?n=document.defaultView.getComputedStyle(e,null).getPropertyValue(t):e.currentStyle&&(n=e.currentStyle[t]),n}function t(){docElement.removeChild(n),n=null,i=null,r=null}var n=createElement("ruby"),i=createElement("rt"),r=createElement("rp"),o="display",s="fontSize";return n.appendChild(r),n.appendChild(i),docElement.appendChild(n),"none"==e(r,o)||"ruby"==e(n,o)&&"ruby-text"==e(i,o)||"6pt"==e(r,s)&&"6pt"==e(i,s)?(t(),!0):(t(),!1)}),/*!
{
  "name": "Template Tag",
  "property": "template",
  "tags": ["elem"],
  "notes": [{
    "name": "HTML5Rocks Article",
    "href": "http://www.html5rocks.com/en/tutorials/webcomponents/template/"
  },{
    "name": "W3 Spec",
    "href": "https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/templates/index.html"
  }]
}
!*/
Modernizr.addTest("template","content"in createElement("template")),/*!
{
  "name": "time Element",
  "property": "time",
  "tags": ["elem"],
  "builderAliases": ["elem_time"],
  "notes": [{
    "name": "WhatWG Spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-time-element"
  }]
}
!*/
Modernizr.addTest("time","valueAsDate"in createElement("time")),/*!
{
  "name": "Track element and Timed Text Track",
  "property": ["texttrackapi", "track"],
  "tags": ["elem"],
  "builderAliases": ["elem_track"],
  "authors": ["Addy Osmani"],
  "notes": [{
    "name": "W3 track Element Spec",
    "href": "http://www.w3.org/TR/html5/video.html#the-track-element"
  },{
    "name": "W3 track API Spec",
    "href": "http://www.w3.org/TR/html5/media-elements.html#text-track-api"
  }],
  "warnings": ["While IE10 has implemented the track element, IE10 does not expose the underlying APIs to create timed text tracks by JS (really sad)"]
}
!*/
Modernizr.addTest("texttrackapi","function"==typeof createElement("video").addTextTrack),Modernizr.addTest("track","kind"in createElement("track")),/*!
{
  "name": "Unknown Elements",
  "property": "unknownelements",
  "tags": ["elem"],
  "notes": [{
    "name": "The Story of the HTML5 Shiv",
    "href": "http://www.paulirish.com/2011/the-history-of-the-html5-shiv/"
  }, {
    "name": "original implementation of detect code",
    "href": "https://github.com/aFarkas/html5shiv/blob/bf4fcc4/src/html5shiv.js#L36"
  }],
  "polyfills": ["html5shiv"],
  "authors": ["Ron Waldon (@jokeyrhyme)"]
}
!*/
Modernizr.addTest("unknownelements",function(){var e=createElement("a");return e.innerHTML="<xyz></xyz>",1===e.childNodes.length}),/*!
{
  "name": "Emoji",
  "property": "emoji"
}
!*/
Modernizr.addTest("emoji",function(){if(!Modernizr.canvastext)return!1;var e=window.devicePixelRatio||1,t=12*e,n=createElement("canvas"),i=n.getContext("2d");return i.fillStyle="#f00",i.textBaseline="top",i.font="32px Arial",i.fillText("\ud83d\udc28",0,0),0!==i.getImageData(t,t,1,1).data[0]}),/*!
{
  "name": "ES5 Array",
  "property": "es5array",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5array",function(){return!!(Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray)}),/*!
{
  "name": "ES5 Date",
  "property": "es5date",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5date",function(){var e="2013-04-12T06:06:37.307Z",t=!1;try{t=!!Date.parse(e)}catch(n){}return!!(Date.now&&Date.prototype&&Date.prototype.toISOString&&Date.prototype.toJSON&&t)}),/*!
{
  "name": "ES5 Function",
  "property": "es5function",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5function",function(){return!(!Function.prototype||!Function.prototype.bind)}),/*!
{
  "name": "ES5 Object",
  "property": "es5object",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim", "es5sham"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5object",function(){return!!(Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions)}),/*!
{
  "name": "ES5 Strict Mode",
  "property": "strictmode",
  "caniuse": "sctrict-mode",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "authors": ["@kangax"],
  "tags": ["es5"],
  "builderAliases": ["es5_strictmode"]
}
!*/
Modernizr.addTest("strictmode",function(){"use strict";return!this}()),/*!
{
  "name": "ES5 String",
  "property": "es5string",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5string",function(){return!(!String.prototype||!String.prototype.trim)}),/*!
{
  "name": "JSON",
  "property": "json",
  "caniuse": "json",
  "notes": [{
    "name": "MDN documentation",
    "href": "http://developer.mozilla.org/en/JSON"
  }],
  "polyfills": ["json2"]
}
!*/
Modernizr.addTest("json","JSON"in window&&"parse"in JSON&&"stringify"in JSON),/*!
{
  "name": "ES5 Syntax",
  "property": "es5syntax",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }, {
    "name": "original implementation of detect code",
    "href": "http://kangax.github.io/es5-compat-table/"
  }],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["This detect uses `eval()`, so CSP may be a problem."],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5syntax",function(){var value,obj,stringAccess,getter,setter,reservedWords,zeroWidthChars;try{return stringAccess=eval('"foobar"[3] === "b"'),getter=eval("({ get x(){ return 1 } }).x === 1"),eval("({ set x(v){ value = v; } }).x = 1"),setter=1===value,eval("obj = ({ if: 1 })"),reservedWords=1===obj["if"],zeroWidthChars=eval("_\u200c\u200d = true"),stringAccess&&getter&&setter&&reservedWords&&zeroWidthChars}catch(ignore){return!1}}),/*!
{
  "name": "ES5 Immutable Undefined",
  "property": "es5undefined",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }, {
    "name": "original implementation of detect code",
    "href": "http://kangax.github.io/es5-compat-table/"
  }],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5undefined",function(){var e,t;try{t=window.undefined,window.undefined=12345,e="undefined"==typeof window.undefined,window.undefined=t}catch(n){return!1}return e}),/*!
{
  "name": "ES5",
  "property": "es5",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim", "es5sham"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5",function(){return!!(Modernizr.es5array&&Modernizr.es5date&&Modernizr.es5function&&Modernizr.es5object&&Modernizr.strictmode&&Modernizr.es5string&&Modernizr.json&&Modernizr.es5syntax&&Modernizr.es5undefined)}),/*!
{
  "name": "ES6 Array",
  "property": "es6array",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
    "href": "http://people.mozilla.org/~jorendorff/es6-draft.html"
  }],
  "polyfills": ["es6shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("es6array",!!(Array.prototype&&Array.prototype.copyWithin&&Array.prototype.fill&&Array.prototype.find&&Array.prototype.findIndex&&Array.prototype.keys&&Array.prototype.entries&&Array.prototype.values&&Array.from&&Array.of)),/*!
{
  "name": "ES5 String.prototype.contains",
  "property": "contains",
  "authors": ["Robert Kowalski"],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("contains",is(String.prototype.contains,"function")),/*!
{
  "name": "ES6 Generators",
  "property": "generators",
  "authors": ["Michael Kachanovskyi"],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("generators",function(){try{new Function("function* test() {}")()}catch(e){return!1}return!0}),/*!
{
  "name": "ES6 Math",
  "property": "es6math",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
    "href": "http://people.mozilla.org/~jorendorff/es6-draft.html"
  }],
  "polyfills": ["es6shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("es6math",!!(Math&&Math.clz32&&Math.cbrt&&Math.imul&&Math.sign&&Math.log10&&Math.log2&&Math.log1p&&Math.expm1&&Math.cosh&&Math.sinh&&Math.tanh&&Math.acosh&&Math.asinh&&Math.atanh&&Math.hypot&&Math.trunc&&Math.fround)),/*!
{
  "name": "ES6 Number",
  "property": "es6number",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
    "href": "http://people.mozilla.org/~jorendorff/es6-draft.html"
  }],
  "polyfills": ["es6shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("es6number",!!(Number.isFinite&&Number.isInteger&&Number.isSafeInteger&&Number.isNaN&&Number.parseInt&&Number.parseFloat&&Number.isInteger(Number.MAX_SAFE_INTEGER)&&Number.isInteger(Number.MIN_SAFE_INTEGER)&&Number.isFinite(Number.EPSILON))),/*!
{
  "name": "ES6 Object",
  "property": "es6object",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
    "href": "http://people.mozilla.org/~jorendorff/es6-draft.html"
  }],
  "polyfills": ["es6shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("es6object",!!(Object.assign&&Object.is&&Object.setPrototypeOf)),/*!
{
  "name": "ES6 Promises",
  "property": "promises",
  "caniuse": "promises",
  "polyfills": ["es6promises"],
  "authors": ["Krister Kari", "Jake Archibald"],
  "tags": ["es6"],
  "notes": [{
    "name": "The ES6 promises spec",
    "href": "https://github.com/domenic/promises-unwrapping"
  },{
    "name": "Chromium dashboard - ES6 Promises",
    "href": "http://www.chromestatus.com/features/5681726336532480"
  },{
    "name": "JavaScript Promises: There and back again - HTML5 Rocks",
    "href": "http://www.html5rocks.com/en/tutorials/es6/promises/"
  }]
}
!*/
Modernizr.addTest("promises",function(){return"Promise"in window&&"resolve"in window.Promise&&"reject"in window.Promise&&"all"in window.Promise&&"race"in window.Promise&&function(){var e;return new window.Promise(function(t){e=t}),"function"==typeof e}()}),/*!
{
  "name": "ES6 String",
  "property": "es6string",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
    "href": "http://people.mozilla.org/~jorendorff/es6-draft.html"
  }],
  "polyfills": ["es6shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("es6string",!!(String.fromCodePoint&&String.raw&&String.prototype.codePointAt&&String.prototype.repeat&&String.prototype.startsWith&&String.prototype.endsWith&&String.prototype.contains)),/*!
{
  "name": "Orientation and Motion Events",
  "property": ["devicemotion", "deviceorientation"],
  "caniuse": "deviceorientation",
  "notes": [{
    "name": "W3C Editor's Draft",
    "href": "http://dev.w3.org/geo/api/spec-source-orientation.html"
  },{
    "name": "Implementation by iOS Safari (Orientation)",
    "href": "http://goo.gl/fhce3"
  },{
    "name": "Implementation by iOS Safari (Motion)",
    "href": "http://goo.gl/rLKz8"
  }],
  "authors": ["Shi Chuan"],
  "tags": ["event"],
  "builderAliases": ["event_deviceorientation_motion"]
}
!*/
Modernizr.addTest("devicemotion","DeviceMotionEvent"in window),Modernizr.addTest("deviceorientation","DeviceOrientationEvent"in window),/*!
{
  "name": "onInput Event",
  "property": "oninput",
  "notes": [{
    "name": "MDN article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.oninput"
  },{
    "name": "WHATWG spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/common-input-element-attributes.html#common-event-behaviors"
  },{
    "name": "Detecting onInput support",
    "href": "http://danielfriesen.name/blog/2010/02/16/html5-browser-maze-oninput-support"
  }],
  "authors": ["Patrick Kettner"],
  "tags": ["event"]
}
!*/
Modernizr.addTest("oninput",function(){var e,t=createElement("input");if(t.setAttribute("oninput","return"),hasEvent("oninput",docElement)||"function"==typeof t.oninput)return!0;try{var n=document.createEvent("KeyboardEvent");e=!1;var i=function(t){e=!0,t.preventDefault(),t.stopPropagation()};n.initKeyEvent("keypress",!0,!0,window,!1,!1,!1,!1,0,"e".charCodeAt(0)),docElement.appendChild(t),t.addEventListener("input",i,!1),t.focus(),t.dispatchEvent(n),t.removeEventListener("input",i,!1),docElement.removeChild(t)}catch(r){e=!1}return e}),/*!
{
  "name": "Event Listener",
  "property": "eventlistener",
  "authors": ["Andrew Betts (@triblondon)"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Registration-interfaces"
  }],
  "polyfills": ["eventlistener"]
}
!*/
Modernizr.addTest("eventlistener","addEventListener"in window),/*!
{
  "name": "EXIF Orientation",
  "property": "exiforientation",
  "tags": ["image"],
  "builderAliases": ["exif_orientation"],
  "async": true,
  "authors": ["Paul Sayre"],
  "notes": [{
    "name": "Article by Dave Perrett",
    "href": "http://recursive-design.com/blog/2012/07/28/exif-orientation-handling-is-a-ghetto/"
  },{
    "name": "Article by Calvin Hass",
    "href": "http://www.impulseadventure.com/photo/exif-orientation.html"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){addTest("exiforientation",!1,{aliases:["exif-orientation"]})},e.onload=function(){addTest("exiforientation",2!==e.width,{aliases:["exif-orientation"]})},e.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgASAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q=="}),/*!
{
  "name": "File API",
  "property": "filereader",
  "caniuse": "fileapi",
  "notes": [{
    "name": "W3C Working Draft",
    "href": "http://www.w3.org/TR/FileAPI/"
  }],
  "tags": ["file"],
  "builderAliases": ["file_api"],
  "knownBugs": ["Will fail in Safari 5 due to its lack of support for the standards defined FileReader object"]
}
!*/
Modernizr.addTest("filereader",!!(window.File&&window.FileList&&window.FileReader)),/*!
{
  "name": "Filesystem API",
  "property": "filesystem",
  "caniuse": "filesystem",
  "notes": [{
    "name": "W3 Draft",
    "href": "dev.w3.org/2009/dap/file-system/file-dir-sys.html"
  }],
  "authors": ["Eric Bidelman (@ebidel)"],
  "tags": ["file"],
  "builderAliases": ["file_filesystem"],
  "knownBugs": ["The API will be present in Chrome incognito, but will throw an exception. See crbug.com/93417"]
}
!*/
Modernizr.addTest("filesystem",!!prefixed("requestFileSystem",window)),/*!
  {
  "name": "Flash",
  "property": "flash",
  "tags": ["flash"],
  "polyfills": ["shumway"]
  }
  !*/
Modernizr.addAsyncTest(function(){var e,t,n=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},i=function(e,t){var n=!!e;if(n&&(n=new Boolean(n),n.blocked="blocked"===e),addTest("flash",function(){return n}),t&&l.contains(t)){for(;t.parentNode!==l;)t=t.parentNode;l.removeChild(t)}};try{t="ActiveXObject"in window&&"Pan"in new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(r){}if(e=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||t),e||isSVG)i(!1);else{var o,s,a=createElement("embed"),l=getBody();if(a.type="application/x-shockwave-flash",l.appendChild(a),docElement.appendChild(l),!("Pan"in a||t))return i("blocked",a),void n(l);o=function(){return docElement.contains(l)?(docElement.contains(a)?(s=a.style.cssText,""!==s?i("blocked",a):i(!0,a)):i("blocked"),void n(l)):(l=document.body||l,a=createElement("embed"),a.type="application/x-shockwave-flash",l.appendChild(a),setTimeout(o,1e3))},setTimeout(o,10)}}),/*!
{
  "name": "input[capture] Attribute",
  "property": "capture",
  "tags": ["video", "image", "audio", "media", "attribute"],
  "notes": [{
    "name": "W3C draft: HTML Media Capture",
    "href": "http://www.w3.org/TR/html-media-capture/"
  }]
}
!*/
Modernizr.addTest("capture","capture"in createElement("input")),/*!
{
  "name": "input[file] Attribute",
  "property": "fileinput",
  "caniuse" : "forms",
  "tags": ["file", "forms", "input"],
  "builderAliases": ["forms_fileinput"]
}
!*/
Modernizr.addTest("fileinput",function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var e=createElement("input");return e.type="file",!e.disabled}),/*!
{
  "name": "input[directory] Attribute",
  "property": "directory",
  "authors": ["silverwind"],
  "tags": ["file", "input", "attribute"]
}
!*/
Modernizr.addTest("fileinputdirectory",function(){var e=createElement("input"),t="directory";if(e.type="file",t in e)return!0;for(var n=0,i=domPrefixes.length;i>n;n++)if(domPrefixes[n]+t in e)return!0;return!1}),/*!
{
  "name": "input[form] Attribute",
  "property": "formattribute",
  "tags": ["attribute", "forms", "input"],
  "builderAliases": ["forms_formattribute"]
}
!*/
Modernizr.addTest("formattribute",function(){var e,t=createElement("form"),n=createElement("input"),i=createElement("div"),r="formtest"+(new Date).getTime(),o=!1;t.id=r;try{n.setAttribute("form",r)}catch(s){document.createAttribute&&(e=document.createAttribute("form"),e.nodeValue=r,n.setAttributeNode(e))}return i.appendChild(t),i.appendChild(n),docElement.appendChild(i),o=t.elements&&1===t.elements.length&&n.form==t,i.parentNode.removeChild(i),o});/*!
{
  "name": "Form input types",
  "property": "inputtypes",
  "caniuse": "forms",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "polyfills": [
    "jquerytools",
    "webshims",
    "h5f",
    "webforms2",
    "nwxforms",
    "fdslider",
    "html5slider",
    "galleryhtml5forms",
    "jscolor",
    "html5formshim",
    "selectedoptionsjs",
    "formvalidationjs"
  ]
}
!*/
var inputtypes="search tel url email datetime date month week time datetime-local number range color".split(" "),inputs={};Modernizr.inputtypes=function(e){for(var t,n,i,r=e.length,o=":)",s=0;r>s;s++)inputElem.setAttribute("type",t=e[s]),i="text"!==inputElem.type&&"style"in inputElem,i&&(inputElem.value=o,inputElem.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(t)&&inputElem.style.WebkitAppearance!==undefined?(docElement.appendChild(inputElem),n=document.defaultView,i=n.getComputedStyle&&"textfield"!==n.getComputedStyle(inputElem,null).WebkitAppearance&&0!==inputElem.offsetHeight,docElement.removeChild(inputElem)):/^(search|tel)$/.test(t)||(i=/^(url|email|number)$/.test(t)?inputElem.checkValidity&&inputElem.checkValidity()===!1:inputElem.value!=o)),inputs[e[s]]=!!i;return inputs}(inputtypes),/*!
{
  "name": "Form Validation",
  "property": "formvalidation",
  "tags": ["forms", "validation", "attribute"],
  "builderAliases": ["forms_validation"]
}
!*/
Modernizr.addTest("formvalidation",function(){var e=createElement("form");if(!("checkValidity"in e&&"addEventListener"in e))return!1;if("reportValidity"in e)return!0;var t,n=!1;return Modernizr.formvalidationapi=!0,e.addEventListener("submit",function(e){(!window.opera||window.operamini)&&e.preventDefault(),e.stopPropagation()},!1),e.innerHTML='<input name="modTest" required><button></button>',testStyles("#modernizr form{position:absolute;top:-99999em}",function(i){i.appendChild(e),t=e.getElementsByTagName("input")[0],t.addEventListener("invalid",function(e){n=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!t.validationMessage,e.getElementsByTagName("button")[0].click()}),n}),/*!
{
  "name": "input[type=\"number\"] Localization",
  "property": "localizednumber",
  "tags": ["forms", "localization", "attribute"],
  "authors": ["Peter Janes"],
  "notes": [{
    "name": "Webkit Bug Tracker Listing",
    "href": "https://bugs.webkit.org/show_bug.cgi?id=42484"
  },{
    "name": "Based on This",
    "href": "http://trac.webkit.org/browser/trunk/LayoutTests/fast/forms/script-tests/input-number-keyoperation.js?rev=80096#L9"
  }],
  "knownBugs": ["Only ever returns true if the browser/OS is configured to use comma as a decimal separator. This is probably fine for most use cases."]
}
!*/
Modernizr.addTest("localizednumber",function(){if(!Modernizr.inputtypes.number)return!1;if(!Modernizr.formvalidation)return!1;var e,t=createElement("div"),n=getBody(),i=function(){return docElement.insertBefore(n,docElement.firstElementChild||docElement.firstChild)}();t.innerHTML='<input type="number" value="1.0" step="0.1"/>';var r=t.childNodes[0];i.appendChild(t),r.focus();try{document.execCommand("InsertText",!1,"1,1")}catch(o){}return e="number"===r.type&&1.1===r.valueAsNumber&&r.checkValidity(),i.removeChild(t),n.fake&&i.parentNode.removeChild(i),e}),/*!
{
  "name": "placeholder attribute",
  "property": "placeholder",
  "tags": ["forms", "attribute"],
  "builderAliases": ["forms_placeholder"]
}
!*/
Modernizr.addTest("placeholder","placeholder"in createElement("input")&&"placeholder"in createElement("textarea")),/*!
{
  "name": "form#requestAutocomplete()",
  "property": "requestautocomplete",
  "tags": ["form", "forms", "requestAutocomplete", "payments"],
  "notes": [{
    "name": "WHATWG proposed spec",
    "href": "http://wiki.whatwg.org/wiki/RequestAutocomplete"
  }]
}
!*/
Modernizr.addTest("requestautocomplete",!!prefixed("requestAutocomplete",createElement("form"))),/*!
{
  "name": "Fullscreen API",
  "property": "fullscreen",
  "caniuse": "fullscreen",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/API/Fullscreen"
  }],
  "polyfills": ["screenfulljs"],
  "builderAliases": ["fullscreen_api"]
}
!*/
Modernizr.addTest("fullscreen",!(!prefixed("exitFullscreen",document,!1)&&!prefixed("cancelFullScreen",document,!1))),/*!
{
  "name": "GamePad API",
  "property": "gamepads",
  "authors": ["Eric Bidelman"],
  "tags": ["media"],
  "notes": [{
    "name": "W3C spec",
    "href": "http://www.w3.org/TR/gamepad/"
  },{
    "name": "HTML5 Rocks tutorial",
    "href": "http://www.html5rocks.com/en/tutorials/doodles/gamepad/#toc-featuredetect"
  }],
  "warnings": [],
  "polyfills": []
}
!*/
Modernizr.addTest("gamepads",!!prefixed("getGamepads",navigator)),/*!
{
  "name": "Geolocation API",
  "property": "geolocation",
  "caniuse": "geolocation",
  "tags": ["media"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation"
  }],
  "polyfills": [
    "joshuabell-polyfill",
    "webshims",
    "geo-location-javascript",
    "geolocation-api-polyfill"
  ]
}
!*/
Modernizr.addTest("geolocation","geolocation"in navigator),/*!
{
  "name": "Hashchange event",
  "property": "hashchange",
  "caniuse": "hashchange",
  "tags": ["history"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.onhashchange"
  }],
  "polyfills": [
    "jquery-hashchange",
    "moo-historymanager",
    "jquery-ajaxy",
    "hasher",
    "shistory"
  ]
}
!*/
Modernizr.addTest("hashchange",function(){return hasEvent("hashchange",window)===!1?!1:document.documentMode===undefined||document.documentMode>7}),/*!
{
  "name": "Hidden Scrollbar",
  "property": "hiddenscroll",
  "authors": ["Oleg Korsunsky"],
  "tags": ["overlay"],
  "notes": [{
    "name": "Overlay Scrollbar description",
    "href": "https://developer.apple.com/library/mac/releasenotes/MacOSX/WhatsNewInOSX/Articles/MacOSX10_7.html#//apple_ref/doc/uid/TP40010355-SW39"
  },{
    "name": "Video example of overlay scrollbars",
    "href": "http://gfycat.com/FoolishMeaslyAtlanticsharpnosepuffer"
  }]
}
!*/
Modernizr.addTest("hiddenscroll",function(){return testStyles("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})}),/*!
{
  "name": "History API",
  "property": "history",
  "caniuse": "history",
  "tags": ["history"],
  "authors": ["Hay Kranen", "Alexander Farkas"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/html51/browsers.html#the-history-interface"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.history"
  }],
  "polyfills": ["historyjs", "html5historyapi"]
}
!*/
Modernizr.addTest("history",function(){var e=navigator.userAgent;return-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")?window.history&&"pushState"in window.history:!1}),/*!
{
  "name": "HTML Imports",
  "notes": [
    {
      "name": "W3C HTML Imports Specification",
      "href": "http://w3c.github.io/webcomponents/spec/imports/"
    },
    {
      "name": "HTML Imports - #include for the web",
      "href": "http://www.html5rocks.com/en/tutorials/webcomponents/imports/"
    }
  ],
  "polyfills": ["polymer-htmlimports"],
  "property": "htmlimports",
  "tags": ["html", "import"]
}
!*/
addTest("htmlimports","import"in createElement("link")),/*!
{
  "name": "IE8 compat mode",
  "property": "ie8compat",
  "authors": ["Erich Ocean"]
}
!*/
Modernizr.addTest("ie8compat",!window.addEventListener&&!!document.documentMode&&7===document.documentMode),/*!
{
  "name": "iframe[sandbox] Attribute",
  "property": "sandbox",
  "tags": ["iframe"],
  "builderAliases": ["iframe_sandbox"],
  "notes": [
  {
    "name": "WhatWG Spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-iframe-element.html#attr-iframe-sandbox"
  }],
  "knownBugs": [ "False-positive on Firefox < 29" ]
}
!*/
Modernizr.addTest("sandbox","sandbox"in createElement("iframe")),/*!
{
  "name": "iframe[seamless] Attribute",
  "property": "seamless",
  "tags": ["iframe"],
  "builderAliases": ["iframe_seamless"],
  "notes": [{
    "name": "WhatWG Spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-iframe-element.html#attr-iframe-seamless"
  }]
}
!*/
Modernizr.addTest("seamless","seamless"in createElement("iframe")),/*!
{
  "name": "iframe[srcdoc] Attribute",
  "property": "srcdoc",
  "tags": ["iframe"],
  "builderAliases": ["iframe_srcdoc"],
  "notes": [{
    "name": "WhatWG Spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-iframe-element.html#attr-iframe-srcdoc"
  }]
}
!*/
Modernizr.addTest("srcdoc","srcdoc"in createElement("iframe")),/*!
{
  "name": "Animated PNG",
  "async": true,
  "property": "apng",
  "tags": ["image"],
  "builderAliases": ["img_apng"],
  "notes": [{
    "name": "Wikipedia Article",
    "href": "http://en.wikipedia.org/wiki/APNG"
  }]
}
!*/
Modernizr.addAsyncTest(function(){if(!Modernizr.canvas)return!1;var e=new Image,t=createElement("canvas"),n=t.getContext("2d");e.onload=function(){addTest("apng",function(){return"undefined"==typeof t.getContext?!1:(n.drawImage(e,0,0),0===n.getImageData(0,0,1,1).data[3])})},e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="}),/*!
{
  "name": "JPEG 2000",
  "async": true,
  "aliases": ["jpeg-2000", "jpg2"],
  "property": "jpeg2000",
  "tags": ["image"],
  "authors": ["@eric_wvgg"],
  "notes": [{
    "name": "Wikipedia Article",
    "href": "http://en.wikipedia.org/wiki/JPEG_2000"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onload=e.onerror=function(){addTest("jpeg2000",1==e.width)},e.src="data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k="}),/*!
{
  "name": "JPEG XR (extended range)",
  "async": true,
  "aliases": ["jpeg-xr"],
  "property": "jpegxr",
  "tags": ["image"],
  "notes": [{
    "name": "Wikipedia Article",
    "href": "http://en.wikipedia.org/wiki/JPEG_XR"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onload=e.onerror=function(){addTest("jpegxr",1==e.width,{aliases:["jpeg-xr"]})},e.src="data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="}),/*!
{
  "name": "sizes attribute",
  "async": true,
  "property": "sizes",
  "tags": ["image"],
  "authors": ["Mat Marquis"],
  "notes": [{
    "name": "Spec",
    "href": "http://picture.responsiveimages.org/#parse-sizes-attr"
    },{
    "name": "Usage Details",
    "href": "http://ericportis.com/posts/2014/srcset-sizes/"
    }]
}
!*/
Modernizr.addAsyncTest(function(){var e,t,n,i=createElement("img"),r="sizes"in i;!r&&"srcset"in i?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){addTest("sizes",2==i.width)},i.onload=n,i.onerror=n,i.setAttribute("sizes","9px"),i.srcset=e+" 1w,"+t+" 8w",i.src=e):addTest("sizes",r)}),/*!
{
  "name": "srcset attribute",
  "property": "srcset",
  "tags": ["image"],
  "notes": [{
    "name": "Smashing Magazine Article",
    "href": "http://en.wikipedia.org/wiki/APNG"
    },{
    "name": "Generate multi-resolution images for srcset with Grunt",
    "href": "http://addyosmani.com/blog/generate-multi-resolution-images-for-srcset-with-grunt/"
    }]
}
!*/
Modernizr.addTest("srcset","srcset"in createElement("img")),/*!
{
  "name": "Webp",
  "async": true,
  "property": "webp",
  "tags": ["image"],
  "builderAliases": ["img_webp"],
  "authors": ["Krister Kari", "@amandeep", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "Webp Info",
    "href": "http://code.google.com/speed/webp/"
  }, {
    "name": "Chormium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
    "href": "http://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
  }, {
    "name": "Webp Lossless Spec",
    "href": "https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
  }, {
    "name": "Article about WebP support on Android browsers",
    "href": "http://www.wope-framework.com/en/2013/06/24/webp-support-on-android-browsers/"
  }, {
    "name": "Chormium WebP announcement",
    "href": "http://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
  }]
}
!*/
Modernizr.addAsyncTest(function(){function e(e,t,n){function i(t){var i=t&&"load"===t.type?1==r.width:!1,o="webp"===e;addTest(e,o?new Boolean(i):i),n&&n(t)}var r=new Image;r.onerror=i,r.onload=i,r.src=t}var t=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=t.shift();e(n.name,n.uri,function(n){if(n&&"load"===n.type)for(var i=0;i<t.length;i++)e(t[i].name,t[i].uri)})}),/*!
{
  "name": "Webp Alpha",
  "async": true,
  "property": "webpalpha",
  "aliases": ["webp-alpha"],
  "tags": ["image"],
  "authors": ["Krister Kari", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "WebP Info",
    "href": "http://code.google.com/speed/webp/"
  },{
    "name": "Article about WebP support on Android browsers",
    "href": "http://www.wope-framework.com/en/2013/06/24/webp-support-on-android-browsers/"
  },{
    "name": "Chromium WebP announcement",
    "href": "http://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){addTest("webpalpha",!1,{aliases:["webp-alpha"]})},e.onload=function(){addTest("webpalpha",1==e.width,{aliases:["webp-alpha"]})},e.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="}),/*!
{
  "name": "Webp Animation",
  "async": true,
  "property": "webpanimation",
  "aliases": ["webp-animation"],
  "tags": ["image"],
  "authors": ["Krister Kari", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "WebP Info",
    "href": "http://code.google.com/speed/webp/"
  },{
    "name": "Chromium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
    "href": "http://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){addTest("webpanimation",!1,{aliases:["webp-animation"]})},e.onload=function(){addTest("webpanimation",1==e.width,{aliases:["webp-animation"]})},e.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}),/*!
{
  "name": "Webp Lossless",
  "async": true,
  "property": ["webplossless", "webp-lossless"],
  "tags": ["image"],
  "authors": ["@amandeep", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "Webp Info",
    "href": "http://code.google.com/speed/webp/"
  },{
    "name": "Webp Lossless Spec",
    "href": "https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){addTest("webplossless",!1,{aliases:["webp-lossless"]})},e.onload=function(){addTest("webplossless",1==e.width,{aliases:["webp-lossless"]})},e.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="});/*!
{
  "name": "IndexedDB",
  "property": "indexeddb",
  "caniuse": "indexeddb",
  "tags": ["storage"],
  "polyfills": ["indexeddb"]
}
!*/
var indexeddb=prefixed("indexedDB",window);Modernizr.addTest("indexeddb",!!indexeddb),indexeddb&&Modernizr.addTest("indexeddb.deletedatabase","deleteDatabase"in indexeddb),/*!
{
  "name": "IndexedDB Blob",
  "property": "indexeddbblob"
}
!*/
Modernizr.addAsyncTest(function(){var e,t,n=prefixed("indexedDB",window),i="detect-blob-support",r=!1;if(!Modernizr.indexeddb||!Modernizr.indexeddb.deleteDatabase)return!1;try{n.deleteDatabase(i).onsuccess=function(){e=n.open(i,1),e.onupgradeneeded=function(){e.result.createObjectStore("store")},e.onsuccess=function(){t=e.result;try{t.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),r=!0}catch(o){r=!1}finally{addTest("indexeddbblob",r),t.close(),n.deleteDatabase(i)}}}}catch(o){addTest("indexeddbblob",!1)}}),/*!
{
  "name": "input formaction",
  "property": "inputformaction",
  "aliases": ["input-formaction"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#attr-fs-formaction"
  }, {
    "name": "Wufoo demo",
    "href": "http://www.wufoo.com/html5/attributes/13-formaction.html"
  }],
  "polyfills": [
    "webshims"
  ]
}
!*/
Modernizr.addTest("inputformaction",!!("formAction"in createElement("input")),{aliases:["input-formaction"]}),/*!
{
  "name": "input formenctype",
  "property": "inputformenctype",
  "aliases": ["input-formenctype"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#attr-fs-formenctype"
  }, {
    "name": "Wufoo demo",
    "href": "http://www.wufoo.com/html5/attributes/16-formenctype.html"
  }],
  "polyfills": [
    "html5formshim"
  ]
}
!*/
Modernizr.addTest("inputformenctype",!!("formEnctype"in createElement("input")),{aliases:["input-formenctype"]}),/*!
{
  "name": "input formmethod",
  "property": "inputformmethod",
  "notes": [{
    "name": "WHATWG Spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#attr-fs-formmethod"
  }, {
    "name": "Wufoo demo",
    "href": "http://www.wufoo.com/html5/attributes/14-formmethod.html"
  }],
  "polyfills": [
    "webshims"
  ]
}
!*/
Modernizr.addTest("inputformmethod",!!("formMethod"in createElement("input"))),/*!
{
  "name": "input formtarget",
  "property": "inputformtarget",
  "aliases": ["input-formtarget"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#attr-fs-formtarget"
  }, {
    "name": "Wufoo demo",
    "href": "http://www.wufoo.com/html5/attributes/15-formtarget.html"
  }],
  "polyfills": [
    "html5formshim"
  ]
}
!*/
Modernizr.addTest("inputformtarget",!!("formtarget"in createElement("input")),{aliases:["input-formtarget"]}),/*!
{
  "name": "input[search] search event",
  "property": "search",
  "tags": ["input","search"],
  "authors": ["Calvin Webster"],
  "notes": [{
    "name": "Wufoo demo",
    "href": "http://www.wufoo.com/html5/types/5-search.html?"
  }, {
    "name": "CSS Tricks",
    "href": "http://css-tricks.com/webkit-html5-search-inputs/"
  }]
}
!*/
Modernizr.addTest("inputsearchevent",hasEvent("search")),/*!
 {
 "name": "Internationalization API",
 "property": "intl",
 "notes": [{
 "name": "MDN documentation",
 "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"
 },{
 "name": "ECMAScript spec",
 "href": "http://www.ecma-international.org/ecma-402/1.0/"
 }]
 }
 !*/
Modernizr.addTest("intl",!!prefixed("Intl",window)),/*!
{
  "name": "Reverse Ordered Lists",
  "property": "olreversed",
  "notes": [{
    "name": "Impressive Webs article",
    "href": "http://impressivewebs.com/reverse-ordered-lists-html5"
  }],
  "builderAliases": ["lists_reversed"]
}
!*/
Modernizr.addTest("olreversed","reversed"in createElement("ol")),/*!
{
  "name": "MathML",
  "property": "mathml",
  "caniuse": "mathml",
  "authors": ["Addy Osmani", "Davide P. Cervone", "David Carlisle"],
  "knownBugs": ["Firefox < 4 will likely return a false, however it does support MathML inside XHTML documents"],
  "notes": [{
    "name": "W3C spec",
    "href": "http://www.w3.org/Math/"
  }],
  "polyfills": ["mathjax"]
}
!*/
Modernizr.addTest("mathml",function(){var e;return testStyles("#modernizr{position:absolute;display:inline-block}",function(t){t.innerHTML+="<math><mfrac><mi>xx</mi><mi>yy</mi></mfrac></math>",e=t.offsetHeight>t.offsetWidth}),e}),/*!
{
  "name": "Beacon API",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon"
  },{
    "name": "W3C specification",
    "href": "https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/Beacon/Overview.html"
  }],
  "property": "beacon",
  "tags": ["beacon", "network"],
  "authors": ["Cătălin Mariș"]
}
!*/
Modernizr.addTest("beacon","sendBeacon"in navigator),/*!
{
  "name": "Low Bandwidth Connection",
  "property": "lowbandwidth",
  "tags": ["network"],
  "builderAliases": ["network_connection"]
}
!*/
Modernizr.addTest("lowbandwidth",function(){var e=navigator.connection||{type:0};return 3==e.type||4==e.type||/^[23]g$/.test(e.type)}),/*!
{
  "name": "Server Sent Events",
  "property": "eventsource",
  "tags": ["network"],
  "builderAliases": ["network_eventsource"],
  "notes": [{
    "name": "W3 Spec",
    "href": "http://dev.w3.org/html5/eventsource/"
  }]
}
!*/
Modernizr.addTest("eventsource","EventSource"in window),/*!
{
  "name": "Fetch API",
  "property": "fetch",
  "tags": ["network"],
  "caniuse": "fetch",
  "notes": [{
    "name": "Fetch Living Standard",
    "href": "https://fetch.spec.whatwg.org/"
  }],
  "polyfills": ["fetch"]
}
!*/
Modernizr.addTest("fetch","fetch"in window),/*!
{
  "name": "XHR responseType",
  "property": "xhrresponsetype",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "http://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
Modernizr.addTest("xhrresponsetype",function(){if("undefined"==typeof XMLHttpRequest)return!1;var e=new XMLHttpRequest;return e.open("get","/",!0),"response"in e}());var testXhrType=function(e){if("undefined"==typeof XMLHttpRequest)return!1;var t=new XMLHttpRequest;t.open("get","/",!0);try{t.responseType=e}catch(n){return!1}return"response"in t&&t.responseType==e};/*!
{
  "name": "XHR responseType='arraybuffer'",
  "property": "xhrresponsetypearraybuffer",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "http://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
Modernizr.addTest("xhrresponsetypearraybuffer",testXhrType("arraybuffer")),/*!
{
  "name": "XHR responseType='blob'",
  "property": "xhrresponsetypeblob",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "http://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
Modernizr.addTest("xhrresponsetypeblob",testXhrType("blob")),/*!
{
  "name": "XHR responseType='document'",
  "property": "xhrresponsetypedocument",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "http://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
Modernizr.addTest("xhrresponsetypedocument",testXhrType("document")),/*!
{
  "name": "XHR responseType='json'",
  "property": "xhrresponsetypejson",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "http://xhr.spec.whatwg.org/#the-responsetype-attribute"
  },{
    "name": "Explanation of xhr.responseType='json'",
    "href": "http://mathiasbynens.be/notes/xhr-responsetype-json"
  }]
}
!*/
Modernizr.addTest("xhrresponsetypejson",testXhrType("json")),/*!
{
  "name": "XHR responseType='text'",
  "property": "xhrresponsetypetext",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "http://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
Modernizr.addTest("xhrresponsetypetext",testXhrType("text")),/*!
{
  "name": "XML HTTP Request Level 2 XHR2",
  "property": "xhr2",
  "tags": ["network"],
  "builderAliases": ["network_xhr2"],
  "notes": [{
    "name": "W3 Spec",
    "href": "http://www.w3.org/TR/XMLHttpRequest2/"
  },{
    "name": "Details on Related Github Issue",
    "href": "http://github.com/Modernizr/Modernizr/issues/385"
  }]
}
!*/
Modernizr.addTest("xhr2","XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest),/*!
{
  "name": "Notification",
  "property": "notification",
  "caniuse": "notifications",
  "authors": ["Theodoor van Donge", "Hendrik Beskow"],
  "notes": [{
    "name": "HTML5 Rocks tutorial",
    "href": "http://www.html5rocks.com/en/tutorials/notifications/quick/"
  },{
    "name": "W3C spec",
    "href": "www.w3.org/TR/notifications/"
  }],
  "polyfills": ["desktop-notify", "html5-notifications"]
}
!*/
Modernizr.addTest("notification","Notification"in window&&"permission"in window.Notification&&"requestPermission"in window.Notification),/*!
{
  "name": "Page Visibility API",
  "property": "pagevisibility",
  "caniuse": "pagevisibility",
  "tags": ["performance"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/DOM/Using_the_Page_Visibility_API"
  },{
    "name": "W3C spec",
    "href": "http://www.w3.org/TR/2011/WD-page-visibility-20110602/"
  },{
    "name": "HTML5 Rocks tutorial",
    "href": "http://www.html5rocks.com/en/tutorials/pagevisibility/intro/"
  }],
  "polyfills": ["visibilityjs", "visiblyjs", "jquery-visibility"]
}
!*/
Modernizr.addTest("pagevisibility",!!prefixed("hidden",document,!1)),/*!
{
  "name": "Navigation Timing API",
  "property": "performance",
  "caniuse": "nav-timing",
  "tags": ["performance"],
  "authors": ["Scott Murphy (@uxder)"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/navigation-timing/"
  },{
    "name": "HTML5 Rocks article",
    "href": "http://www.html5rocks.com/en/tutorials/webperformance/basics/"
  }],
  "polyfills": ["perfnow"]
}
!*/
Modernizr.addTest("performance",!!prefixed("performance",window)),/*!
{
  "name": "DOM Pointer Events API",
  "property": "pointerevents",
  "tags": ["input"],
  "authors": ["Stu Cox"],
  "notes": [
    {
      "name": "W3C spec",
      "href": "http://www.w3.org/TR/pointerevents/"
    }
  ],
  "warnings": ["This property name now refers to W3C DOM PointerEvents: https://github.com/Modernizr/Modernizr/issues/548#issuecomment-12812099"],
  "polyfills": ["handjs"]
}
!*/
Modernizr.addTest("pointerevents",function(){var e=!1,t=domPrefixes.length;for(e=Modernizr.hasEvent("pointerdown");t--&&!e;)hasEvent(domPrefixes[t]+"pointerdown")&&(e=!0);return e}),/*!
{
  "name": "Pointer Lock API",
  "property": "pointerlock",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/API/Pointer_Lock_API"
  }],
  "builderAliases": ["pointerlock_api"]
}
!*/
Modernizr.addTest("pointerlock",!!prefixed("exitPointerLock",document)),/*!
{
  "name": "postMessage",
  "property": "postmessage",
  "caniuse": "x-doc-messaging",
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/html5/comms.html#posting-messages"
  }],
  "polyfills": ["easyxdm", "postmessage-jquery"]
}
!*/
Modernizr.addTest("postmessage","postMessage"in window),/*!
{
  "authors": ["Cătălin Mariș"],
  "caniuse": "proximity",
  "name": "Proximity API",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Proximity_Events"
  },{
    "name": "W3C specification",
    "href": "http://www.w3.org/TR/proximity/"
  }],
  "property": "proximity",
  "tags": ["events", "proximity"]
}
!*/
Modernizr.addAsyncTest(function(){function e(){clearTimeout(t),window.removeEventListener("deviceproximity",e),addTest("proximity",!0)}var t,n=300;"ondeviceproximity"in window&&"onuserproximity"in window?(window.addEventListener("deviceproximity",e),t=setTimeout(function(){window.removeEventListener("deviceproximity",e),addTest("proximity",!1)},n)):addTest("proximity",!1)}),/*!
{
  "name": "QuerySelector",
  "property": "queryselector",
  "caniuse": "queryselector",
  "tags": ["queryselector"],
  "authors": ["Andrew Betts (@triblondon)"],
  "notes": [{
    "name" : "W3C Selectors reference",
    "href": "http://www.w3.org/TR/selectors-api/#queryselectorall"
  }],
  "polyfills": ["css-selector-engine"]
}
!*/
Modernizr.addTest("queryselector","querySelector"in document&&"querySelectorAll"in document),/*!
{
  "name": "Quota Storage Management API",
  "property": "quotamanagement",
  "tags": ["storage"],
  "builderAliases": ["quota_management_api"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/quota-api/"
  }]
}
!*/
Modernizr.addTest("quotamanagement",function(){var e=prefixed("temporaryStorage",navigator),t=prefixed("persistentStorage",navigator);return!(!e||!t)}),/*!
{
  "name": "requestAnimationFrame",
  "property": "requestanimationframe",
  "aliases": ["raf"],
  "caniuse": "requestanimationframe",
  "tags": ["animation"],
  "authors": ["Addy Osmani"],
  "notes": [{
    "name": "W3C spec",
    "href": "http://www.w3.org/TR/animation-timing/"
  }],
  "polyfills": ["raf"]
}
!*/
Modernizr.addTest("requestanimationframe",!!prefixed("requestAnimationFrame",window),{aliases:["raf"]}),/*!
{
  "name": "script[async]",
  "property": "scriptasync",
  "caniuse": "script-async",
  "tags": ["script"],
  "builderAliases": ["script_async"],
  "authors": ["Theodoor van Donge"]
}
!*/
Modernizr.addTest("scriptasync","async"in createElement("script")),/*!
{
  "name": "script[defer]",
  "property": "scriptdefer",
  "caniuse": "script-defer",
  "tags": ["script"],
  "builderAliases": ["script_defer"],
  "authors": ["Theodoor van Donge"],
  "warnings": ["Browser implementation of the `defer` attribute vary: http://stackoverflow.com/questions/3952009/defer-attribute-chrome#answer-3982619"],
  "knownBugs": ["False positive in Opera 12"]
}
!*/
Modernizr.addTest("scriptdefer","defer"in createElement("script")),/*!
{
  "name": "ServiceWorker API",
  "property": "serviceworker",
  "notes": [{
    "name": "ServiceWorkers Explained",
    "href": "https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md"
  }]
}
!*/
Modernizr.addTest("serviceworker","serviceWorker"in navigator),/*!
{
  "authors": ["Cătălin Mariș"],
  "name": "Speech Recognition API",
  "notes": [
    {
      "name": "W3C Web Speech API Specification - The SpeechRecognition Interface",
      "href": "https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#speechreco-section"
    },
    {
      "name": "Introduction to the Web Speech API",
      "href": "http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API"
    }
  ],
  "property": "speechrecognition",
  "tags": ["input", "speech"]
}
!*/
Modernizr.addTest("speechrecognition",!!prefixed("SpeechRecognition",window)),/*!
{
  "authors": ["Cătălin Mariș"],
  "name": "Speech Synthesis API",
  "notes": [
    {
      "name": "W3C Web Speech API Specification - The SpeechSynthesis Interface",
      "href": "https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#tts-section"
    }
  ],
  "property": "speechsynthesis",
  "tags": ["input", "speech"]
}
!*/
Modernizr.addTest("speechsynthesis","SpeechSynthesisUtterance"in window),/*!
{
  "name": "Local Storage",
  "property": "localstorage",
  "caniuse": "namevalue-storage",
  "tags": ["storage"],
  "knownBugs": [],
  "notes": [],
  "warnings": [],
  "polyfills": [
    "joshuabell-polyfill",
    "cupcake",
    "storagepolyfill",
    "amplifyjs",
    "yui-cacheoffline"
  ]
}
!*/
Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),/*!
{
  "name": "Session Storage",
  "property": "sessionstorage",
  "tags": ["storage"],
  "polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]
}
!*/
Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),/*!
{
  "name": "Web SQL Database",
  "property": "websqldatabase",
  "caniuse": "sql-storage",
  "tags": ["storage"]
}
!*/
Modernizr.addTest("websqldatabase","openDatabase"in window),/*!
{
  "name": "style[scoped]",
  "property": "stylescoped",
  "caniuse": "style-scoped",
  "tags": ["dom"],
  "builderAliases": ["style_scoped"],
  "authors": ["Cătălin Mariș"],
  "notes": [{
    "name": "WHATWG Specification",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/semantics.html#attr-style-scoped"
  }],
  "polyfills": ["scoped-styles"]
}
!*/
Modernizr.addTest("stylescoped","scoped"in createElement("style")),/*!
{
  "name": "SVG",
  "property": "svg",
  "caniuse": "svg",
  "tags": ["svg"],
  "authors": ["Erik Dahlstrom"],
  "polyfills": [
    "svgweb",
    "raphael",
    "amplesdk",
    "canvg",
    "svg-boilerplate",
    "sie",
    "dojogfx",
    "fabricjs"
  ]
}
!*/
Modernizr.addTest("svg",!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),/*!
{
  "name": "SVG as an <img> tag source",
  "property": "svgasimg",
  "caniuse" : "svg-img",
  "tags": ["svg"],
  "authors": ["Chris Coyier"],
  "notes": [{
    "name": "HTML5 Spec",
    "href": "http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element"
  }]
}
!*/
Modernizr.addTest("svgasimg",document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var toStringFn={}.toString;/*!
{
  "name": "SVG clip paths",
  "property": "svgclippaths",
  "tags": ["svg"],
  "notes": [{
    "name": "Demo",
    "href": "http://srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg"
  }]
}
!*/
Modernizr.addTest("svgclippaths",function(){return!!document.createElementNS&&/SVGClipPath/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),/*!
{
  "name": "SVG filters",
  "property": "svgfilters",
  "caniuse": "svg-filters",
  "tags": ["svg"],
  "builderAliases": ["svg_filters"],
  "authors": ["Erik Dahlstrom"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/SVG11/filters.html"
  }]
}
!*/
Modernizr.addTest("svgfilters",function(){var e=!1;try{e="SVGFEColorMatrixElement"in window&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(t){}return e}),/*!
{
  "name": "SVG foreignObject",
  "property": "svgforeignobject",
  "tags": ["svg"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/SVG11/extend.html"
  }]
}
!*/
Modernizr.addTest("svgforeignobject",function(){return!!document.createElementNS&&/SVGForeignObject/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),/*!
{
  "name": "Inline SVG",
  "property": "inlinesvg",
  "caniuse": "svg-html5",
  "tags": ["svg"],
  "notes": [{
    "name": "Test page",
    "href": "http://paulirish.com/demo/inline-svg"
  }, {
    "name": "Test page and results",
    "href": "http://codepen.io/eltonmesquita/full/GgXbvo/"
  }],
  "polyfills": ["inline-svg-polyfill"],
  "knownBugs": ["False negative on some Chromia browsers."]
}
!*/
Modernizr.addTest("inlinesvg",function(){var e=createElement("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),/*!
{
  "name": "SVG SMIL animation",
  "property": "smil",
  "caniuse": "svg-smil",
  "tags": ["svg"],
  "notes": [{
  "name": "W3C Synchronised Multimedia spec",
  "href": "http://www.w3.org/AudioVideo/"
  }]
}
!*/
Modernizr.addTest("smil",function(){return!!document.createElementNS&&/SVGAnimate/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","animate")))}),/*!
{
  "name": "Template strings",
  "property": "templatestrings",
  "notes": [{
    "name": "MDN Reference",
    "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings#Browser_compatibility"
  }]
}
!*/
Modernizr.addTest("templatestrings",function(){var supports;try{eval("``"),supports=!0}catch(e){}return!!supports}),/*!
{
  "name": "bdi Element",
  "property": "bdi",
  "notes": [{
    "name": "MDN Overview",
    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi"
  }]
}
!*/
Modernizr.addTest("bdi",function(){var e=createElement("div"),t=createElement("bdi");t.innerHTML="&#1573",e.appendChild(t),docElement.appendChild(e);var n="rtl"===(window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).direction;return docElement.removeChild(e),n}),/*!
{
  "name": "textarea maxlength",
  "property": "textareamaxlength",
  "aliases": ["textarea-maxlength"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"
  }],
  "polyfills": [
    "maxlength"
  ]
}
!*/
Modernizr.addTest("textareamaxlength",!!("maxLength"in createElement("textarea"))),/*!
{
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse" : "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "http://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
}
!*/
Modernizr.addTest("touchevents",function(){var e;if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)e=!0;else{var t=["@media (",prefixes.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");testStyles(t,function(t){e=9===t.offsetTop})}return e}),/*!
{
  "name": "Typed arrays",
  "property": "typedarrays",
  "caniuse": "typedarrays",
  "tags": ["js"],
  "authors": ["Stanley Stuart (@fivetanley)"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/JavaScript_typed_arrays"
  },{
    "name": "Kronos spec",
    "href": "http://www.khronos.org/registry/typedarray/specs/latest/"
  }],
  "polyfills": ["joshuabell-polyfill"]
}
!*/
Modernizr.addTest("typedarrays","ArrayBuffer"in window),/*!
{
  "name": "Unicode characters",
  "property": "unicode",
  "tags": ["encoding"],
  "warnings": [
    "positive Unicode support doesn't mean you can use it inside <title>, this seems more related to OS & Language packs"
  ]
}
!*/
Modernizr.addTest("unicode",function(){var e,t=createElement("span"),n=createElement("span");return testStyles("#modernizr{font-family:Arial,sans;font-size:300em;}",function(i){t.innerHTML=isSVG?"\u5987":"&#5987",n.innerHTML=isSVG?"\u2606":"&#9734",i.appendChild(t),i.appendChild(n),e="offsetWidth"in t&&t.offsetWidth!==n.offsetWidth}),e}),/*!
{
  "name": "Unicode Range",
  "property": "unicoderange",
  "notes": [{
    "name" : "W3C reference",
    "href": "http://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#descdef-unicode-range"
  }, {
    "name" : "24 Way article",
    "href": "http://24ways.org/2011/creating-custom-font-stacks-with-unicode-range"
  }]
}
!*/
Modernizr.addTest("unicoderange",function(){return Modernizr.testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}',function(e){for(var t=[".",".","m","m"],n=0;n<t.length;n++){var i=createElement("span");i.innerHTML=t[n],i.className=n%2?"mono":"",e.appendChild(i),t[n]=i.clientWidth}return t[0]!==t[1]&&t[2]===t[3]})});/*!
{
  "name": "Blob URLs",
  "property": "bloburls",
  "caniuse": "bloburls",
  "notes": [{
    "name": "W3C Working Draft",
    "href": "http://www.w3.org/TR/FileAPI/#creating-revoking"
  }],
  "tags": ["file", "url"],
  "authors": ["Ron Waldon (@jokeyrhyme)"]
}
!*/
var url=prefixed("URL",window,!1);url=url&&window[url],Modernizr.addTest("bloburls",url&&"revokeObjectURL"in url&&"createObjectURL"in url),/*!
{
  "name": "Data URI",
  "property": "datauri",
  "caniuse": "datauri",
  "tags": ["url"],
  "builderAliases": ["url_data_uri"],
  "async": true,
  "notes": [{
    "name": "Wikipedia article",
    "href": "http://en.wikipedia.org/wiki/Data_URI_scheme"
  }],
  "warnings": ["Support in Internet Explorer 8 is limited to images and linked resources like CSS files, not HTML files"]
}
!*/
Modernizr.addAsyncTest(function(){function e(){var e=new Image;e.onerror=function(){addTest("datauri",!0),Modernizr.datauri=new Boolean(!0),Modernizr.datauri.over32kb=!1},e.onload=function(){addTest("datauri",!0),Modernizr.datauri=new Boolean(!0),Modernizr.datauri.over32kb=1==e.width&&1==e.height};for(var t="R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.length<33e3;)t="\r\n"+t;e.src="data:image/gif;base64,"+t}-1!==navigator.userAgent.indexOf("MSIE 7.")&&setTimeout(function(){addTest("datauri",!1)},10);var t=new Image;t.onerror=function(){addTest("datauri",!1)},t.onload=function(){1==t.width&&1==t.height?e():addTest("datauri",!1)},t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}),/*!
{
  "name": "URL parser",
  "property": "urlparser",
  "notes": [{
    "name": "URL",
    "href": "https://dvcs.w3.org/hg/url/raw-file/tip/Overview.html"
  }],
  "polyfills": ["urlparser"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["url"]
}
!*/
Modernizr.addTest("urlparser",function(){var e;try{return e=new URL("http://modernizr.com/"),"http://modernizr.com/"===e.href}catch(t){return!1}}),/*!
{
  "name": "IE User Data API",
  "property": "userdata",
  "tags": ["storage"],
  "authors": ["@stereobooster"],
  "notes": [{
    "name": "MSDN Documentation",
    "href": "http://msdn.microsoft.com/en-us/library/ms531424(v=vs.85).aspx"
  }]
}
!*/
Modernizr.addTest("userdata",!!createElement("div").addBehavior),/*!
{
  "name": "Vibration API",
  "property": "vibrate",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/DOM/window.navigator.mozVibrate"
  },{
    "name": "W3C spec",
    "href": "http://www.w3.org/TR/vibration/"
  }]
}
!*/
Modernizr.addTest("vibrate",!!prefixed("vibrate",navigator)),/*!
{
  "name": "HTML5 Video",
  "property": "video",
  "caniuse": "video",
  "tags": ["html5"],
  "knownBugs": [
    "Without QuickTime, `Modernizr.video.h264` will be `undefined`; http://github.com/Modernizr/Modernizr/issues/546"
  ],
  "polyfills": [
    "html5media",
    "mediaelementjs",
    "sublimevideo",
    "videojs",
    "leanbackplayer",
    "videoforeverybody"
  ]
}
!*/
Modernizr.addTest("video",function(){var e=createElement("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),/*!
{
  "name": "Video Autoplay",
  "property": "videoautoplay",
  "tags": ["video"],
  "async" : true,
  "warnings": ["This test is very large – only include it if you absolutely need it"],
  "knownBugs": ["crashes with an alert on iOS7 when added to homescreen"]
}
!*/
Modernizr.addAsyncTest(function(){function e(n){clearTimeout(t),i.removeEventListener("playing",e,!1),addTest("videoautoplay",n&&"playing"===n.type||0!==i.currentTime),i.parentNode.removeChild(i)}var t,n=300,i=createElement("video"),r=i.style;if(!(Modernizr.video&&"autoplay"in i))return void addTest("videoautoplay",!1);r.position="absolute",r.height=0,r.width=0;try{if(Modernizr.video.ogg)i.src="data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A";else{if(!Modernizr.video.h264)return void addTest("videoautoplay",!1);i.src="data:video/mp4;base64,AAAAHGZ0eXBtcDQyAAAAAG1wNDJpc29tYXZjMQAAAz5tb292AAAAbG12aGQAAAAAzaNacc2jWnEAAV+QAAFfkAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAGGlvZHMAAAAAEICAgAcAT////3//AAACQ3RyYWsAAABcdGtoZAAAAAHNo1pxzaNacQAAAAEAAAAAAAFfkAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAEAAAABAAAAAAAd9tZGlhAAAAIG1kaGQAAAAAzaNacc2jWnEAAV+QAAFfkFXEAAAAAAAhaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAAAAAAGWbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAABVnN0YmwAAACpc3RzZAAAAAAAAAABAAAAmWF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAEAAQAEgAAABIAAAAAAAAAAEOSlZUL0FWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwH0AAr/4QAZZ/QACq609NQYBBkAAAMAAQAAAwAKjxImoAEABWjOAa8gAAAAEmNvbHJuY2xjAAYAAQAGAAAAGHN0dHMAAAAAAAAAAQAAAAUAAEZQAAAAKHN0c3oAAAAAAAAAAAAAAAUAAAIqAAAACAAAAAgAAAAIAAAACAAAAChzdHNjAAAAAAAAAAIAAAABAAAABAAAAAEAAAACAAAAAQAAAAEAAAAYc3RjbwAAAAAAAAACAAADYgAABaQAAAAUc3RzcwAAAAAAAAABAAAAAQAAABFzZHRwAAAAAAREREREAAAAb3VkdGEAAABnbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcgAAAAAAAAAAAAAAAAAAAAA6aWxzdAAAADKpdG9vAAAAKmRhdGEAAAABAAAAAEhhbmRCcmFrZSAwLjkuOCAyMDEyMDcxODAwAAACUm1kYXQAAAHkBgX/4NxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxMjAgLSBILjI2NC9NUEVHLTQgQVZDIGNvZGVjIC0gQ29weWxlZnQgMjAwMy0yMDExIC0gaHR0cDovL3d3dy52aWRlb2xhbi5vcmcveDI2NC5odG1sIC0gb3B0aW9uczogY2FiYWM9MCByZWY9MSBkZWJsb2NrPTE6MDowIGFuYWx5c2U9MHgxOjAgbWU9ZXNhIHN1Ym1lPTkgcHN5PTAgbWl4ZWRfcmVmPTAgbWVfcmFuZ2U9NCBjaHJvbWFfbWU9MSB0cmVsbGlzPTAgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0wIGNocm9tYV9xcF9vZmZzZXQ9MCB0aHJlYWRzPTYgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTUwIGtleWludF9taW49NSBzY2VuZWN1dD00MCBpbnRyYV9yZWZyZXNoPTAgcmM9Y3FwIG1idHJlZT0wIHFwPTAAgAAAAD5liISscR8A+E4ACAACFoAAITAAAgsAAPgYCoKgoC+L4vi+KAvi+L4YfAEAACMzgABF9AAEUGUgABDJiXnf4AAAAARBmiKUAAAABEGaQpQAAAAEQZpilAAAAARBmoKU"}}catch(o){return void addTest("videoautoplay",!1)}i.setAttribute("autoplay",""),i.style.cssText="display:none",docElement.appendChild(i),setTimeout(function(){i.addEventListener("playing",e,!1),t=setTimeout(e,n)},0)}),/*!
{
  "name": "Video Loop Attribute",
  "property": "videoloop",
  "tags": ["video", "media"]
}
!*/
Modernizr.addTest("videoloop","loop"in createElement("video")),/*!
{
  "name": "Video Preload Attribute",
  "property": "videopreload",
  "tags": ["video", "media"]
}
!*/
Modernizr.addTest("videopreload","preload"in createElement("video")),/*!
{
  "name": "VML",
  "property": "vml",
  "caniuse": "vml",
  "tags": ["vml"],
  "authors": ["Craig Andrews (@candrews)"],
  "notes": [{
    "name" : "W3C VML reference",
    "href": "http://www.w3.org/TR/NOTE-VML"
  },{
    "name" : "Microsoft VML reference",
    "href": "http://msdn.microsoft.com/en-us/library/bb263898%28VS.85%29.aspx"
  }]
}
!*/
Modernizr.addTest("vml",function(){var e,t=createElement("div"),n=!1;return isSVG||(t.innerHTML='<v:shape id="vml_flag1" adj="1" />',e=t.firstChild,e.style.behavior="url(#default#VML)",n=e?"object"==typeof e.adj:!0),n}),/*!
{
  "name": "Web Intents",
  "property": "webintents",
  "authors": ["Eric Bidelman"],
  "notes": [{
    "name": "Web Intents project site",
    "href": "http://webintents.org/"
  }],
  "polyfills": ["webintents"],
  "builderAliases": ["web_intents"]
}
!*/
Modernizr.addTest("webintents",!!prefixed("startActivity",navigator)),/*!
{
  "name": "Web Animation API",
  "property": "animation",
  "tags": ["webanimations"],
  "polyfills": ["webanimationsjs"],
  "notes": [{
    "name": "Introducing Web Animations",
    "href": "http://brian.sol1.net/svg/2013/06/26/introducing-web-animations/"
  }]
}
!*/
Modernizr.addTest("webanimations","animate"in createElement("div")),/*!
{
  "name": "WebGL",
  "property": "webgl",
  "caniuse": "webgl",
  "tags": ["webgl", "graphics"],
  "polyfills": ["jebgl", "cwebgl", "iewebgl"]
}
!*/
Modernizr.addTest("webgl",function(){var e=createElement("canvas"),t="probablySupportsContext"in e?"probablySupportsContext":"supportsContext";return t in e?e[t]("webgl")||e[t]("experimental-webgl"):"WebGLRenderingContext"in window}),/*!
{
  "name": "WebGL Extensions",
  "property": "webglextensions",
  "tags": ["webgl", "graphics"],
  "builderAliases": ["webgl_extensions"],
  "async" : true,
  "authors": ["Ilmari Heikkinen"],
  "knownBugs": [],
  "notes": [{
    "name": "Kronos extensions registry",
    "href": "http://www.khronos.org/registry/webgl/extensions/"
  }]
}
!*/
Modernizr.addAsyncTest(function(){if(Modernizr.webglextensions=new Boolean(!1),Modernizr.webgl){var e,t,n;try{e=createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl"),n=t.getSupportedExtensions()}catch(i){return}t!==undefined&&(Modernizr.webglextensions=new Boolean(!0));for(var r=-1,o=n.length;++r<o;)Modernizr.webglextensions[n[r]]=!0;e=undefined}}),/*!
{
  "name": "RTC Peer Connection",
  "property": "peerconnection",
  "tags": ["webrtc"],
  "authors": ["Ankur Oberoi"],
  "notes": [{
    "name": "W3C Web RTC spec",
    "href": "http://www.w3.org/TR/webrtc/"
  }]
}
!*/
Modernizr.addTest("peerconnection",!!prefixed("RTCPeerConnection",window)),/*!
{
  "name": "RTC Data Channel",
  "property": "datachannel",
  "notes": [{
    "name": "HTML5 Rocks! Article",
    "href": "http://www.html5rocks.com/en/tutorials/webrtc/datachannels/"
  }]
}
!*/
Modernizr.addTest("datachannel",function(){if(!Modernizr.peerconnection)return!1;for(var e=0,t=domPrefixes.length;t>e;e++){var n=window[domPrefixes[e]+"RTCPeerConnection"];if(n){var i=new n({iceServers:[{url:"stun:0"}]});return"createDataChannel"in i}}return!1}),/*!
{
  "name": "getUserMedia",
  "property": "getusermedia",
  "caniuse": "stream",
  "tags": ["webrtc"],
  "authors": ["Eric Bidelman"],
  "notes": [{
    "name": "W3C Media Capture and Streams spec",
    "href": "http://www.w3.org/TR/mediacapture-streams/"
  }],
  "polyfills": ["getusermedia"]
}
!*/
Modernizr.addTest("getusermedia",!!prefixed("getUserMedia",navigator)),/*!
{
  "name": "WebSockets Support",
  "property": "websockets",
  "authors": ["Phread [fearphage]", "Mike Sherov [mikesherov]", "Burak Yigit Kaya [BYK]"],
  "caniuse": "websockets",
  "tags": ["html5"],
  "warnings": [
    "This test will reject any old version of WebSockets even if it is not prefixed such as in Safari 5.1"
  ],
  "notes": [{
    "name": "CLOSING State and Spec",
    "href": "http://www.w3.org/TR/websockets/#the-websocket-interface"
  }],
  "polyfills": [
    "sockjs",
    "socketio",
    "kaazing-websocket-gateway",
    "websocketjs",
    "atmosphere",
    "graceful-websocket",
    "portal",
    "datachannel"
  ]
}
!*/
Modernizr.addTest("websockets","WebSocket"in window&&2===window.WebSocket.CLOSING),/*!
{
  "name": "Binary WebSockets",
  "property": "websocketsbinary",
  "tags": ["websockets"],
  "builderAliases": ["websockets_binary"]
}
!*/
Modernizr.addTest("websocketsbinary",function(){var e,t="https:"==location.protocol?"wss":"ws";if("WebSocket"in window){if(e="binaryType"in WebSocket.prototype)return e;try{return!!new WebSocket(t+"://.").binaryType}catch(n){}}return!1}),/*!
{
  "name": "Framed window",
  "property": "framed",
  "tags": ["window"],
  "builderAliases": ["window_framed"]
}
!*/
Modernizr.addTest("framed",window.location!=top.location),/*!
{
  "name": "Workers from Blob URIs",
  "property": "blobworkers",
  "tags": ["performance", "workers"],
  "builderAliases": ["workers_blobworkers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "http://www.w3.org/TR/workers/"
  }],
  "knownBugs": ["This test may output garbage to console."],
  "authors": ["Jussi Kalliokoski"],
  "async": true
}
!*/
Modernizr.addAsyncTest(function(){function e(){addTest("blobworkers",!1),t()}function t(){a&&i.revokeObjectURL(a),s&&s.terminate(),l&&clearTimeout(l)}try{var n=window.BlobBuilder,i=window.URL;Modernizr._config.usePrefix&&(n=n||window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder,i=i||window.MozURL||window.webkitURL||window.MSURL||window.OURL);var r,o,s,a,l,d="Modernizr",c="this.onmessage=function(e){postMessage(e.data)}";try{r=new Blob([c],{type:"text/javascript"})}catch(u){}r||(o=new n,o.append(c),r=o.getBlob()),a=i.createObjectURL(r),s=new Worker(a),s.onmessage=function(e){addTest("blobworkers",d===e.data),t()},s.onerror=e,l=setTimeout(e,200),s.postMessage(d)}catch(u){e()}}),/*!
{
  "name": "Workers from Data URIs",
  "property": "dataworkers",
  "tags": ["performance", "workers"],
  "builderAliases": ["workers_dataworkers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "http://www.w3.org/TR/workers/"
  }],
  "knownBugs": ["This test may output garbage to console."],
  "authors": ["Jussi Kalliokoski"],
  "async": true
}
!*/
Modernizr.addAsyncTest(function(){try{var e="Modernizr",t=new Worker("data:text/javascript;base64,dGhpcy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7cG9zdE1lc3NhZ2UoZS5kYXRhKX0=");t.onmessage=function(n){t.terminate(),addTest("dataworkers",e===n.data),t=null},t.onerror=function(){addTest("dataworkers",!1),t=null},setTimeout(function(){addTest("dataworkers",!1)},200),t.postMessage(e)}catch(n){setTimeout(function(){addTest("dataworkers",!1)},0)}}),/*!
{
  "name": "Shared Workers",
  "property": "sharedworkers",
  "caniuse" : "sharedworkers",
  "tags": ["performance", "workers"],
  "builderAliases": ["workers_sharedworkers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "http://www.w3.org/TR/workers/"
  }]
}
!*/
Modernizr.addTest("sharedworkers","SharedWorker"in window),/*!
{
  "name": "Web Workers",
  "property": "webworkers",
  "caniuse" : "webworkers",
  "tags": ["performance", "workers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "http://www.w3.org/TR/workers/"
  }, {
    "name": "HTML5 Rocks article",
    "href": "http://www.html5rocks.com/en/tutorials/workers/basics/"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers"
  }],
  "polyfills": ["fakeworker", "html5shims"]
}
!*/
Modernizr.addTest("webworkers","Worker"in window),/*!
{
  "name": "Transferables Objects",
  "property": "transferables",
  "tags": ["performance", "workers"],
  "builderAliases": ["transferables"],
  "notes": [{
    "name": "HTML5 Rocks article",
    "href": "http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast"
  }],
  "async": true
}
!*/
Modernizr.addAsyncTest(function(){function e(){addTest("transferables",!1),t()}function t(){a&&URL.revokeObjectURL(a),l&&l.terminate(),r&&clearTimeout(r)}var n=!!(Modernizr.blobconstructor&&Modernizr.bloburls&&Modernizr.webworkers&&Modernizr.typedarrays);if(!n)return addTest("transferables",!1);try{var i,r,o='var hello = "world"',s=new Blob([o],{type:"text/javascript"}),a=URL.createObjectURL(s),l=new Worker(a);l.onerror=e,r=setTimeout(e,200),i=new ArrayBuffer(1),l.postMessage(i,[i]),addTest("transferables",0===i.byteLength),t()}catch(d){e()}}),/*!
{
  "name": "XDomainRequest",
  "property": "xdomainrequest",
  "tags": ["cors", "xdomainrequest", "ie9", "ie8"],
  "authors": ["Ivan Pan (@hypotenuse)"],
  "notes": [
  {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest"
  },
  {
    "name": "MSDN documentation",
    "href": "https://msdn.microsoft.com/library/ie/cc288060.aspx/"
  }]
}
!*/
Modernizr.addTest("xdomainrequest","XDomainRequest"in window),testRunner(),setClasses(classes),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(window,document),/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */
function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t="length"in e&&e.length,n=K.type(e);return"function"===n||K.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function i(e,t,n){if(K.isFunction(t))return K.grep(e,function(e,i){return!!t.call(e,i,e)!==n});if(t.nodeType)return K.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(ae.test(t))return K.filter(t,e,n);t=K.filter(t,e)}return K.grep(e,function(e){return L.call(t,e)>=0!==n})}function r(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t=he[e]={};return K.each(e.match(pe)||[],function(e,n){t[n]=!0}),t}function s(){J.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1),K.ready()}function a(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=K.expando+a.uid++}function l(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(ye,"-$1").toLowerCase(),n=e.getAttribute(i),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:we.test(n)?K.parseJSON(n):n}catch(r){}ve.set(e,t,n)}else n=void 0;return n}function d(){return!0}function c(){return!1}function u(){try{return J.activeElement}catch(e){}}function A(e,t){return K.nodeName(e,"table")&&K.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function p(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function h(e){var t=je.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function f(e,t){for(var n=0,i=e.length;i>n;n++)me.set(e[n],"globalEval",!t||me.get(t[n],"globalEval"))}function g(e,t){var n,i,r,o,s,a,l,d;if(1===t.nodeType){if(me.hasData(e)&&(o=me.access(e),s=me.set(t,o),d=o.events)){delete s.handle,s.events={};for(r in d)for(n=0,i=d[r].length;i>n;n++)K.event.add(t,r,d[r][n])}ve.hasData(e)&&(a=ve.access(e),l=K.extend({},a),ve.set(t,l))}}function m(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&K.nodeName(e,t)?K.merge([e],n):n}function v(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Se.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function w(t,n){var i,r=K(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(i=e.getDefaultComputedStyle(r[0]))?i.display:K.css(r[0],"display");return r.detach(),o}function y(e){var t=J,n=He[e];return n||(n=w(e,t),"none"!==n&&n||(Fe=(Fe||K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Fe[0].contentDocument,t.write(),t.close(),n=w(e,t),Fe.detach()),He[e]=n),n}function b(e,t,n){var i,r,o,s,a=e.style;return n=n||Oe(e),n&&(s=n.getPropertyValue(t)||n[t]),n&&(""!==s||K.contains(e.ownerDocument,e)||(s=K.style(e,t)),Ne.test(s)&&$e.test(t)&&(i=a.width,r=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=r,a.maxWidth=o)),void 0!==s?s+"":s}function x(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function _(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),i=t,r=Ge.length;r--;)if(t=Ge[r]+n,t in e)return t;return i}function S(e,t,n){var i=Ue.exec(t);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function T(e,t,n,i,r){for(var o=n===(i?"border":"content")?4:"width"===t?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=K.css(e,n+xe[o],!0,r)),i?("content"===n&&(s-=K.css(e,"padding"+xe[o],!0,r)),"margin"!==n&&(s-=K.css(e,"border"+xe[o]+"Width",!0,r))):(s+=K.css(e,"padding"+xe[o],!0,r),"padding"!==n&&(s+=K.css(e,"border"+xe[o]+"Width",!0,r)));return s}function C(e,t,n){var i=!0,r="width"===t?e.offsetWidth:e.offsetHeight,o=Oe(e),s="border-box"===K.css(e,"boxSizing",!1,o);if(0>=r||null==r){if(r=b(e,t,o),(0>r||null==r)&&(r=e.style[t]),Ne.test(r))return r;i=s&&(Y.boxSizingReliable()||r===e.style[t]),r=parseFloat(r)||0}return r+T(e,t,n||(s?"border":"content"),i,o)+"px"}function k(e,t){for(var n,i,r,o=[],s=0,a=e.length;a>s;s++)i=e[s],i.style&&(o[s]=me.get(i,"olddisplay"),n=i.style.display,t?(o[s]||"none"!==n||(i.style.display=""),""===i.style.display&&_e(i)&&(o[s]=me.access(i,"olddisplay",y(i.nodeName)))):(r=_e(i),"none"===n&&r||me.set(i,"olddisplay",r?n:K.css(i,"display"))));for(s=0;a>s;s++)i=e[s],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?o[s]||"":"none"));return e}function E(e,t,n,i,r){return new E.prototype.init(e,t,n,i,r)}function D(){return setTimeout(function(){Ye=void 0}),Ye=K.now()}function P(e,t){var n,i=0,r={height:e};for(t=t?1:0;4>i;i+=2-t)n=xe[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function M(e,t,n){for(var i,r=(nt[t]||[]).concat(nt["*"]),o=0,s=r.length;s>o;o++)if(i=r[o].call(n,t,e))return i}function z(e,t,n){var i,r,o,s,a,l,d,c,u=this,A={},p=e.style,h=e.nodeType&&_e(e),f=me.get(e,"fxshow");n.queue||(a=K._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,u.always(function(){u.always(function(){a.unqueued--,K.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],d=K.css(e,"display"),c="none"===d?me.get(e,"olddisplay")||y(e.nodeName):d,"inline"===c&&"none"===K.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(i in t)if(r=t[i],Xe.exec(r)){if(delete t[i],o=o||"toggle"===r,r===(h?"hide":"show")){if("show"!==r||!f||void 0===f[i])continue;h=!0}A[i]=f&&f[i]||K.style(e,i)}else d=void 0;if(K.isEmptyObject(A))"inline"===("none"===d?y(e.nodeName):d)&&(p.display=d);else{f?"hidden"in f&&(h=f.hidden):f=me.access(e,"fxshow",{}),o&&(f.hidden=!h),h?K(e).show():u.done(function(){K(e).hide()}),u.done(function(){var t;me.remove(e,"fxshow");for(t in A)K.style(e,t,A[t])});for(i in A)s=M(h?f[i]:0,i,u),i in f||(f[i]=s.start,h&&(s.end=s.start,s.start="width"===i||"height"===i?1:0))}}function B(e,t){var n,i,r,o,s;for(n in e)if(i=K.camelCase(n),r=t[i],o=e[n],K.isArray(o)&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),s=K.cssHooks[i],s&&"expand"in s){o=s.expand(o),delete e[i];for(n in o)n in e||(e[n]=o[n],t[n]=r)}else t[i]=r}function Q(e,t,n){var i,r,o=0,s=tt.length,a=K.Deferred().always(function(){delete l.elem}),l=function(){if(r)return!1;for(var t=Ye||D(),n=Math.max(0,d.startTime+d.duration-t),i=n/d.duration||0,o=1-i,s=0,l=d.tweens.length;l>s;s++)d.tweens[s].run(o);return a.notifyWith(e,[d,o,n]),1>o&&l?n:(a.resolveWith(e,[d]),!1)},d=a.promise({elem:e,props:K.extend({},t),opts:K.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Ye||D(),duration:n.duration,tweens:[],createTween:function(t,n){var i=K.Tween(e,d.opts,t,n,d.opts.specialEasing[t]||d.opts.easing);return d.tweens.push(i),i},stop:function(t){var n=0,i=t?d.tweens.length:0;if(r)return this;for(r=!0;i>n;n++)d.tweens[n].run(1);return t?a.resolveWith(e,[d,t]):a.rejectWith(e,[d,t]),this}}),c=d.props;for(B(c,d.opts.specialEasing);s>o;o++)if(i=tt[o].call(d,e,c,d.opts))return i;return K.map(c,M,d),K.isFunction(d.opts.start)&&d.opts.start.call(e,d),K.fx.timer(K.extend(l,{elem:e,anim:d,queue:d.opts.queue})),d.progress(d.opts.progress).done(d.opts.done,d.opts.complete).fail(d.opts.fail).always(d.opts.always)}function I(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,o=t.toLowerCase().match(pe)||[];if(K.isFunction(n))for(;i=o[r++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function j(e,t,n,i){function r(a){var l;return o[a]=!0,K.each(e[a]||[],function(e,a){var d=a(t,n,i);return"string"!=typeof d||s||o[d]?s?!(l=d):void 0:(t.dataTypes.unshift(d),r(d),!1)}),l}var o={},s=e===wt;return r(t.dataTypes[0])||!o["*"]&&r("*")}function q(e,t){var n,i,r=K.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&K.extend(!0,e,i),e}function R(e,t,n){for(var i,r,o,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(r in a)if(a[r]&&a[r].test(i)){l.unshift(r);break}if(l[0]in n)o=l[0];else{for(r in n){if(!l[0]||e.converters[r+" "+l[0]]){o=r;break}s||(s=r)}o=o||s}return o?(o!==l[0]&&l.unshift(o),n[o]):void 0}function F(e,t,n,i){var r,o,s,a,l,d={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)d[s.toLowerCase()]=e.converters[s];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(s=d[l+" "+o]||d["* "+o],!s)for(r in d)if(a=r.split(" "),a[1]===o&&(s=d[l+" "+a[0]]||d["* "+a[0]])){s===!0?s=d[r]:d[r]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(u){return{state:"parsererror",error:s?u:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}function H(e,t,n,i){var r;if(K.isArray(t))K.each(t,function(t,r){n||St.test(e)?i(e,r):H(e+"["+("object"==typeof r?t:"")+"]",r,n,i)});else if(n||"object"!==K.type(t))i(e,t);else for(r in t)H(e+"["+r+"]",t[r],n,i)}function $(e){return K.isWindow(e)?e:9===e.nodeType&&e.defaultView}var N=[],O=N.slice,W=N.concat,U=N.push,L=N.indexOf,V={},Z=V.toString,G=V.hasOwnProperty,Y={},J=e.document,X="2.1.4",K=function(e,t){return new K.fn.init(e,t)},ee=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,te=/^-ms-/,ne=/-([\da-z])/gi,ie=function(e,t){return t.toUpperCase()};K.fn=K.prototype={jquery:X,constructor:K,selector:"",length:0,toArray:function(){return O.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:O.call(this)},pushStack:function(e){var t=K.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return K.each(this,e,t)},map:function(e){return this.pushStack(K.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(O.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:U,sort:N.sort,splice:N.splice},K.extend=K.fn.extend=function(){var e,t,n,i,r,o,s=arguments[0]||{},a=1,l=arguments.length,d=!1;for("boolean"==typeof s&&(d=s,s=arguments[a]||{},a++),"object"==typeof s||K.isFunction(s)||(s={}),a===l&&(s=this,a--);l>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],i=e[t],s!==i&&(d&&i&&(K.isPlainObject(i)||(r=K.isArray(i)))?(r?(r=!1,o=n&&K.isArray(n)?n:[]):o=n&&K.isPlainObject(n)?n:{},s[t]=K.extend(d,o,i)):void 0!==i&&(s[t]=i));return s},K.extend({expando:"jQuery"+(X+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===K.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!K.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"!==K.type(e)||e.nodeType||K.isWindow(e)?!1:e.constructor&&!G.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?V[Z.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=K.trim(e),e&&(1===e.indexOf("use strict")?(t=J.createElement("script"),t.text=e,J.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(te,"ms-").replace(ne,ie)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,i){var r,o=0,s=e.length,a=n(e);if(i){if(a)for(;s>o&&(r=t.apply(e[o],i),r!==!1);o++);else for(o in e)if(r=t.apply(e[o],i),r===!1)break}else if(a)for(;s>o&&(r=t.call(e[o],o,e[o]),r!==!1);o++);else for(o in e)if(r=t.call(e[o],o,e[o]),r===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(ee,"")},makeArray:function(e,t){var i=t||[];return null!=e&&(n(Object(e))?K.merge(i,"string"==typeof e?[e]:e):U.call(i,e)),i},inArray:function(e,t,n){return null==t?-1:L.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;n>i;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){for(var i,r=[],o=0,s=e.length,a=!n;s>o;o++)i=!t(e[o],o),i!==a&&r.push(e[o]);return r},map:function(e,t,i){var r,o=0,s=e.length,a=n(e),l=[];if(a)for(;s>o;o++)r=t(e[o],o,i),null!=r&&l.push(r);else for(o in e)r=t(e[o],o,i),null!=r&&l.push(r);return W.apply([],l)},guid:1,proxy:function(e,t){var n,i,r;return"string"==typeof t&&(n=e[t],t=e,e=n),K.isFunction(e)?(i=O.call(arguments,2),r=function(){return e.apply(t||this,i.concat(O.call(arguments)))},r.guid=e.guid=e.guid||K.guid++,r):void 0},now:Date.now,support:Y}),K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){V["[object "+t+"]"]=t.toLowerCase()});var re=/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
function(e){function t(e,t,n,i){var r,o,s,a,l,d,u,p,h,f;if((t?t.ownerDocument||t:H)!==z&&M(t),t=t||z,n=n||[],a=t.nodeType,"string"!=typeof e||!e||1!==a&&9!==a&&11!==a)return n;if(!i&&Q){if(11!==a&&(r=ve.exec(e)))if(s=r[1]){if(9===a){if(o=t.getElementById(s),!o||!o.parentNode)return n;if(o.id===s)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&R(t,o)&&o.id===s)return n.push(o),n}else{if(r[2])return X.apply(n,t.getElementsByTagName(e)),n;if((s=r[3])&&b.getElementsByClassName)return X.apply(n,t.getElementsByClassName(s)),n}if(b.qsa&&(!I||!I.test(e))){if(p=u=F,h=t,f=1!==a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){for(d=T(e),(u=t.getAttribute("id"))?p=u.replace(ye,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",l=d.length;l--;)d[l]=p+A(d[l]);h=we.test(e)&&c(t.parentNode)||t,f=d.join(",")}if(f)try{return X.apply(n,h.querySelectorAll(f)),n}catch(g){}finally{u||t.removeAttribute("id")}}}return k(e.replace(le,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>x.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[F]=!0,e}function r(e){var t=z.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),i=e.length;i--;)x.attrHandle[n[i]]=t}function s(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||V)-(~e.sourceIndex||V);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function d(e){return i(function(t){return t=+t,i(function(n,i){for(var r,o=e([],n.length,t),s=o.length;s--;)n[r=o[s]]&&(n[r]=!(i[r]=n[r]))})})}function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function u(){}function A(e){for(var t=0,n=e.length,i="";n>t;t++)i+=e[t].value;return i}function p(e,t,n){var i=t.dir,r=n&&"parentNode"===i,o=N++;return t.first?function(t,n,o){for(;t=t[i];)if(1===t.nodeType||r)return e(t,n,o)}:function(t,n,s){var a,l,d=[$,o];if(s){for(;t=t[i];)if((1===t.nodeType||r)&&e(t,n,s))return!0}else for(;t=t[i];)if(1===t.nodeType||r){if(l=t[F]||(t[F]={}),(a=l[i])&&a[0]===$&&a[1]===o)return d[2]=a[2];if(l[i]=d,d[2]=e(t,n,s))return!0}}}function h(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function f(e,n,i){for(var r=0,o=n.length;o>r;r++)t(e,n[r],i);return i}function g(e,t,n,i,r){for(var o,s=[],a=0,l=e.length,d=null!=t;l>a;a++)(o=e[a])&&(!n||n(o,i,r))&&(s.push(o),d&&t.push(a));return s}function m(e,t,n,r,o,s){return r&&!r[F]&&(r=m(r)),o&&!o[F]&&(o=m(o,s)),i(function(i,s,a,l){var d,c,u,A=[],p=[],h=s.length,m=i||f(t||"*",a.nodeType?[a]:a,[]),v=!e||!i&&t?m:g(m,A,e,a,l),w=n?o||(i?e:h||r)?[]:s:v;if(n&&n(v,w,a,l),r)for(d=g(w,p),r(d,[],a,l),c=d.length;c--;)(u=d[c])&&(w[p[c]]=!(v[p[c]]=u));if(i){if(o||e){if(o){for(d=[],c=w.length;c--;)(u=w[c])&&d.push(v[c]=u);o(null,w=[],d,l)}for(c=w.length;c--;)(u=w[c])&&(d=o?ee(i,u):A[c])>-1&&(i[d]=!(s[d]=u))}}else w=g(w===s?w.splice(h,w.length):w),o?o(null,s,w,l):X.apply(s,w)})}function v(e){for(var t,n,i,r=e.length,o=x.relative[e[0].type],s=o||x.relative[" "],a=o?1:0,l=p(function(e){return e===t},s,!0),d=p(function(e){return ee(t,e)>-1},s,!0),c=[function(e,n,i){var r=!o&&(i||n!==E)||((t=n).nodeType?l(e,n,i):d(e,n,i));return t=null,r}];r>a;a++)if(n=x.relative[e[a].type])c=[p(h(c),n)];else{if(n=x.filter[e[a].type].apply(null,e[a].matches),n[F]){for(i=++a;r>i&&!x.relative[e[i].type];i++);return m(a>1&&h(c),a>1&&A(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(le,"$1"),n,i>a&&v(e.slice(a,i)),r>i&&v(e=e.slice(i)),r>i&&A(e))}c.push(n)}return h(c)}function w(e,n){var r=n.length>0,o=e.length>0,s=function(i,s,a,l,d){var c,u,A,p=0,h="0",f=i&&[],m=[],v=E,w=i||o&&x.find.TAG("*",d),y=$+=null==v?1:Math.random()||.1,b=w.length;for(d&&(E=s!==z&&s);h!==b&&null!=(c=w[h]);h++){if(o&&c){for(u=0;A=e[u++];)if(A(c,s,a)){l.push(c);break}d&&($=y)}r&&((c=!A&&c)&&p--,i&&f.push(c))}if(p+=h,r&&h!==p){for(u=0;A=n[u++];)A(f,m,s,a);if(i){if(p>0)for(;h--;)f[h]||m[h]||(m[h]=Y.call(l));m=g(m)}X.apply(l,m),d&&!i&&m.length>0&&p+n.length>1&&t.uniqueSort(l)}return d&&($=y,E=v),f};return r?i(s):s}var y,b,x,_,S,T,C,k,E,D,P,M,z,B,Q,I,j,q,R,F="sizzle"+1*new Date,H=e.document,$=0,N=0,O=n(),W=n(),U=n(),L=function(e,t){return e===t&&(P=!0),0},V=1<<31,Z={}.hasOwnProperty,G=[],Y=G.pop,J=G.push,X=G.push,K=G.slice,ee=function(e,t){for(var n=0,i=e.length;i>n;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",re=ie.replace("w","w#"),oe="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",se=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",ae=new RegExp(ne+"+","g"),le=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),de=new RegExp("^"+ne+"*,"+ne+"*"),ce=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ue=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),Ae=new RegExp(se),pe=new RegExp("^"+re+"$"),he={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie.replace("w","w*")+")"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+se),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},fe=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,we=/[+~]/,ye=/'|\\/g,be=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),xe=function(e,t,n){var i="0x"+t-65536;return i!==i||n?t:0>i?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},_e=function(){M()};try{X.apply(G=K.call(H.childNodes),H.childNodes),G[H.childNodes.length].nodeType}catch(Se){X={apply:G.length?function(e,t){J.apply(e,K.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}b=t.support={},S=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},M=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:H;return i!==z&&9===i.nodeType&&i.documentElement?(z=i,B=i.documentElement,n=i.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",_e,!1):n.attachEvent&&n.attachEvent("onunload",_e)),Q=!S(i),b.attributes=r(function(e){return e.className="i",!e.getAttribute("className")}),b.getElementsByTagName=r(function(e){return e.appendChild(i.createComment("")),!e.getElementsByTagName("*").length}),b.getElementsByClassName=me.test(i.getElementsByClassName),b.getById=r(function(e){return B.appendChild(e).id=F,!i.getElementsByName||!i.getElementsByName(F).length}),b.getById?(x.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&Q){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},x.filter.ID=function(e){var t=e.replace(be,xe);return function(e){return e.getAttribute("id")===t}}):(delete x.find.ID,x.filter.ID=function(e){var t=e.replace(be,xe);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),x.find.TAG=b.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):b.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[r++];)1===n.nodeType&&i.push(n);return i}return o},x.find.CLASS=b.getElementsByClassName&&function(e,t){return Q?t.getElementsByClassName(e):void 0},j=[],I=[],(b.qsa=me.test(i.querySelectorAll))&&(r(function(e){B.appendChild(e).innerHTML="<a id='"+F+"'></a><select id='"+F+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&I.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||I.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+F+"-]").length||I.push("~="),e.querySelectorAll(":checked").length||I.push(":checked"),e.querySelectorAll("a#"+F+"+*").length||I.push(".#.+[+~]")}),r(function(e){var t=i.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&I.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||I.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),I.push(",.*:")})),(b.matchesSelector=me.test(q=B.matches||B.webkitMatchesSelector||B.mozMatchesSelector||B.oMatchesSelector||B.msMatchesSelector))&&r(function(e){b.disconnectedMatch=q.call(e,"div"),q.call(e,"[s!='']:x"),j.push("!=",se)}),I=I.length&&new RegExp(I.join("|")),j=j.length&&new RegExp(j.join("|")),t=me.test(B.compareDocumentPosition),R=t||me.test(B.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},L=t?function(e,t){if(e===t)return P=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!b.sortDetached&&t.compareDocumentPosition(e)===n?e===i||e.ownerDocument===H&&R(H,e)?-1:t===i||t.ownerDocument===H&&R(H,t)?1:D?ee(D,e)-ee(D,t):0:4&n?-1:1)}:function(e,t){if(e===t)return P=!0,0;var n,r=0,o=e.parentNode,a=t.parentNode,l=[e],d=[t];if(!o||!a)return e===i?-1:t===i?1:o?-1:a?1:D?ee(D,e)-ee(D,t):0;if(o===a)return s(e,t);for(n=e;n=n.parentNode;)l.unshift(n);for(n=t;n=n.parentNode;)d.unshift(n);for(;l[r]===d[r];)r++;return r?s(l[r],d[r]):l[r]===H?-1:d[r]===H?1:0},i):z},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==z&&M(e),n=n.replace(ue,"='$1']"),b.matchesSelector&&Q&&(!j||!j.test(n))&&(!I||!I.test(n)))try{var i=q.call(e,n);if(i||b.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(r){}return t(n,z,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==z&&M(e),R(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==z&&M(e);var n=x.attrHandle[t.toLowerCase()],i=n&&Z.call(x.attrHandle,t.toLowerCase())?n(e,t,!Q):void 0;return void 0!==i?i:b.attributes||!Q?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,r=0;if(P=!b.detectDuplicates,D=!b.sortStable&&e.slice(0),e.sort(L),P){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return D=null,e},_=t.getText=function(e){var t,n="",i=0,r=e.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=_(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=_(t);return n},x=t.selectors={cacheLength:50,createPseudo:i,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(be,xe),e[3]=(e[3]||e[4]||e[5]||"").replace(be,xe),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return he.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&Ae.test(n)&&(t=T(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(be,xe).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=O[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&O(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,i){return function(r){var o=t.attr(r,e);return null==o?"!="===n:n?(o+="","="===n?o===i:"!="===n?o!==i:"^="===n?i&&0===o.indexOf(i):"*="===n?i&&o.indexOf(i)>-1:"$="===n?i&&o.slice(-i.length)===i:"~="===n?(" "+o.replace(ae," ")+" ").indexOf(i)>-1:"|="===n?o===i||o.slice(0,i.length+1)===i+"-":!1):!0}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,l){var d,c,u,A,p,h,f=o!==s?"nextSibling":"previousSibling",g=t.parentNode,m=a&&t.nodeName.toLowerCase(),v=!l&&!a;if(g){if(o){for(;f;){for(u=t;u=u[f];)if(a?u.nodeName.toLowerCase()===m:1===u.nodeType)return!1;h=f="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?g.firstChild:g.lastChild],s&&v){for(c=g[F]||(g[F]={}),d=c[e]||[],p=d[0]===$&&d[1],A=d[0]===$&&d[2],u=p&&g.childNodes[p];u=++p&&u&&u[f]||(A=p=0)||h.pop();)if(1===u.nodeType&&++A&&u===t){c[e]=[$,p,A];break}}else if(v&&(d=(t[F]||(t[F]={}))[e])&&d[0]===$)A=d[1];else for(;(u=++p&&u&&u[f]||(A=p=0)||h.pop())&&((a?u.nodeName.toLowerCase()!==m:1!==u.nodeType)||!++A||(v&&((u[F]||(u[F]={}))[e]=[$,A]),u!==t)););return A-=r,A===i||A%i===0&&A/i>=0}}},PSEUDO:function(e,n){var r,o=x.pseudos[e]||x.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[F]?o(n):o.length>1?(r=[e,e,"",n],x.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,t){for(var i,r=o(e,n),s=r.length;s--;)i=ee(e,r[s]),e[i]=!(t[i]=r[s])}):function(e){return o(e,0,r)}):o}},pseudos:{not:i(function(e){var t=[],n=[],r=C(e.replace(le,"$1"));return r[F]?i(function(e,t,n,i){for(var o,s=r(e,null,i,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:i(function(e){return function(n){return t(e,n).length>0}}),contains:i(function(e){return e=e.replace(be,xe),function(t){return(t.textContent||t.innerText||_(t)).indexOf(e)>-1}}),lang:i(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(be,xe).toLowerCase(),function(t){var n;do if(n=Q?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===B},focus:function(e){return e===z.activeElement&&(!z.hasFocus||z.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!x.pseudos.empty(e)},header:function(e){return ge.test(e.nodeName)},input:function(e){return fe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:d(function(){return[0]}),last:d(function(e,t){return[t-1]}),eq:d(function(e,t,n){return[0>n?n+t:n]}),even:d(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:d(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:d(function(e,t,n){for(var i=0>n?n+t:n;--i>=0;)e.push(i);return e}),gt:d(function(e,t,n){for(var i=0>n?n+t:n;++i<t;)e.push(i);return e})}},x.pseudos.nth=x.pseudos.eq;for(y in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[y]=a(y);for(y in{submit:!0,reset:!0})x.pseudos[y]=l(y);return u.prototype=x.filters=x.pseudos,x.setFilters=new u,T=t.tokenize=function(e,n){var i,r,o,s,a,l,d,c=W[e+" "];if(c)return n?0:c.slice(0);for(a=e,l=[],d=x.preFilter;a;){(!i||(r=de.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),l.push(o=[])),i=!1,(r=ce.exec(a))&&(i=r.shift(),o.push({value:i,type:r[0].replace(le," ")}),a=a.slice(i.length));for(s in x.filter)!(r=he[s].exec(a))||d[s]&&!(r=d[s](r))||(i=r.shift(),o.push({value:i,type:s,matches:r}),a=a.slice(i.length));if(!i)break}return n?a.length:a?t.error(e):W(e,l).slice(0)},C=t.compile=function(e,t){var n,i=[],r=[],o=U[e+" "];if(!o){for(t||(t=T(e)),n=t.length;n--;)o=v(t[n]),o[F]?i.push(o):r.push(o);o=U(e,w(r,i)),o.selector=e}return o},k=t.select=function(e,t,n,i){var r,o,s,a,l,d="function"==typeof e&&e,u=!i&&T(e=d.selector||e);if(n=n||[],1===u.length){if(o=u[0]=u[0].slice(0),o.length>2&&"ID"===(s=o[0]).type&&b.getById&&9===t.nodeType&&Q&&x.relative[o[1].type]){if(t=(x.find.ID(s.matches[0].replace(be,xe),t)||[])[0],!t)return n;d&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(r=he.needsContext.test(e)?0:o.length;r--&&(s=o[r],!x.relative[a=s.type]);)if((l=x.find[a])&&(i=l(s.matches[0].replace(be,xe),we.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(r,1),e=i.length&&A(o),!e)return X.apply(n,i),n;break}}return(d||C(e,u))(i,t,!Q,n,we.test(e)&&c(t.parentNode)||t),n},b.sortStable=F.split("").sort(L).join("")===F,b.detectDuplicates=!!P,M(),b.sortDetached=r(function(e){return 1&e.compareDocumentPosition(z.createElement("div"))}),r(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),b.attributes&&r(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),r(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var i;return n?void 0:e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),t}(e);K.find=re,K.expr=re.selectors,K.expr[":"]=K.expr.pseudos,K.unique=re.uniqueSort,K.text=re.getText,K.isXMLDoc=re.isXML,K.contains=re.contains;var oe=K.expr.match.needsContext,se=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ae=/^.[^:#\[\.,]*$/;K.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?K.find.matchesSelector(i,e)?[i]:[]:K.find.matches(e,K.grep(t,function(e){return 1===e.nodeType}))},K.fn.extend({find:function(e){var t,n=this.length,i=[],r=this;if("string"!=typeof e)return this.pushStack(K(e).filter(function(){for(t=0;n>t;t++)if(K.contains(r[t],this))return!0}));for(t=0;n>t;t++)K.find(e,r[t],i);return i=this.pushStack(n>1?K.unique(i):i),i.selector=this.selector?this.selector+" "+e:e,i},filter:function(e){return this.pushStack(i(this,e||[],!1))},not:function(e){return this.pushStack(i(this,e||[],!0))},is:function(e){return!!i(this,"string"==typeof e&&oe.test(e)?K(e):e||[],!1).length}});var le,de=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ce=K.fn.init=function(e,t){var n,i;if(!e)return this;if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:de.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||le).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof K?t[0]:t,K.merge(this,K.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:J,!0)),se.test(n[1])&&K.isPlainObject(t))for(n in t)K.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return i=J.getElementById(n[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=J,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):K.isFunction(e)?"undefined"!=typeof le.ready?le.ready(e):e(K):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),K.makeArray(e,this))};ce.prototype=K.fn,le=K(J);var ue=/^(?:parents|prev(?:Until|All))/,Ae={children:!0,contents:!0,next:!0,prev:!0};K.extend({dir:function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&K(e).is(n))break;i.push(e)}return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),K.fn.extend({has:function(e){var t=K(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(K.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,i=0,r=this.length,o=[],s=oe.test(e)||"string"!=typeof e?K(e,t||this.context):0;r>i;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&K.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?K.unique(o):o)},index:function(e){return e?"string"==typeof e?L.call(K(e),this[0]):L.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(K.unique(K.merge(this.get(),K(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),K.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return K.dir(e,"parentNode")},parentsUntil:function(e,t,n){return K.dir(e,"parentNode",n)},next:function(e){return r(e,"nextSibling")},prev:function(e){return r(e,"previousSibling")},nextAll:function(e){return K.dir(e,"nextSibling")},prevAll:function(e){return K.dir(e,"previousSibling")},nextUntil:function(e,t,n){return K.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return K.dir(e,"previousSibling",n)},siblings:function(e){return K.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return K.sibling(e.firstChild)},contents:function(e){return e.contentDocument||K.merge([],e.childNodes)}},function(e,t){K.fn[e]=function(n,i){var r=K.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=K.filter(i,r)),this.length>1&&(Ae[e]||K.unique(r),ue.test(e)&&r.reverse()),this.pushStack(r)}});var pe=/\S+/g,he={};K.Callbacks=function(e){e="string"==typeof e?he[e]||o(e):K.extend({},e);var t,n,i,r,s,a,l=[],d=!e.once&&[],c=function(o){for(t=e.memory&&o,n=!0,a=r||0,r=0,s=l.length,i=!0;l&&s>a;a++)if(l[a].apply(o[0],o[1])===!1&&e.stopOnFalse){t=!1;break}i=!1,l&&(d?d.length&&c(d.shift()):t?l=[]:u.disable())},u={add:function(){if(l){var n=l.length;!function o(t){K.each(t,function(t,n){var i=K.type(n);"function"===i?e.unique&&u.has(n)||l.push(n):n&&n.length&&"string"!==i&&o(n)})}(arguments),i?s=l.length:t&&(r=n,c(t))}return this},remove:function(){return l&&K.each(arguments,function(e,t){for(var n;(n=K.inArray(t,l,n))>-1;)l.splice(n,1),i&&(s>=n&&s--,a>=n&&a--)}),this},has:function(e){return e?K.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],s=0,this},disable:function(){return l=d=t=void 0,this},disabled:function(){return!l},lock:function(){return d=void 0,t||u.disable(),this},locked:function(){return!d},fireWith:function(e,t){return!l||n&&!d||(t=t||[],t=[e,t.slice?t.slice():t],i?d.push(t):c(t)),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!n}};return u},K.extend({Deferred:function(e){var t=[["resolve","done",K.Callbacks("once memory"),"resolved"],["reject","fail",K.Callbacks("once memory"),"rejected"],["notify","progress",K.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var e=arguments;return K.Deferred(function(n){K.each(t,function(t,o){var s=K.isFunction(e[t])&&e[t];r[o[1]](function(){var e=s&&s.apply(this,arguments);e&&K.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===i?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?K.extend(e,i):i}},r={};return i.pipe=i.then,K.each(t,function(e,o){var s=o[2],a=o[3];i[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),r[o[0]]=function(){return r[o[0]+"With"](this===r?i:this,arguments),this},r[o[0]+"With"]=s.fireWith}),i.promise(r),e&&e.call(r,r),r},when:function(e){var t,n,i,r=0,o=O.call(arguments),s=o.length,a=1!==s||e&&K.isFunction(e.promise)?s:0,l=1===a?e:K.Deferred(),d=function(e,n,i){return function(r){n[e]=this,i[e]=arguments.length>1?O.call(arguments):r,i===t?l.notifyWith(n,i):--a||l.resolveWith(n,i)}};if(s>1)for(t=new Array(s),n=new Array(s),i=new Array(s);s>r;r++)o[r]&&K.isFunction(o[r].promise)?o[r].promise().done(d(r,i,o)).fail(l.reject).progress(d(r,n,t)):--a;return a||l.resolveWith(i,o),l.promise()}});var fe;K.fn.ready=function(e){return K.ready.promise().done(e),this},K.extend({isReady:!1,readyWait:1,holdReady:function(e){e?K.readyWait++:K.ready(!0)},ready:function(e){(e===!0?--K.readyWait:K.isReady)||(K.isReady=!0,e!==!0&&--K.readyWait>0||(fe.resolveWith(J,[K]),K.fn.triggerHandler&&(K(J).triggerHandler("ready"),K(J).off("ready"))))}}),K.ready.promise=function(t){return fe||(fe=K.Deferred(),"complete"===J.readyState?setTimeout(K.ready):(J.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1))),fe.promise(t)},K.ready.promise();var ge=K.access=function(e,t,n,i,r,o,s){var a=0,l=e.length,d=null==n;if("object"===K.type(n)){r=!0;for(a in n)K.access(e,t,a,n[a],!0,o,s)}else if(void 0!==i&&(r=!0,K.isFunction(i)||(s=!0),d&&(s?(t.call(e,i),t=null):(d=t,t=function(e,t,n){return d.call(K(e),n)})),t))for(;l>a;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return r?e:d?t.call(e):l?t(e[0],n):o};K.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},a.uid=1,a.accepts=K.acceptData,a.prototype={key:function(e){if(!a.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=a.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(i){t[this.expando]=n,K.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var i,r=this.key(e),o=this.cache[r];if("string"==typeof t)o[t]=n;else if(K.isEmptyObject(o))K.extend(this.cache[r],t);else for(i in t)o[i]=t[i];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var i;return void 0===t||t&&"string"==typeof t&&void 0===n?(i=this.get(e,t),void 0!==i?i:this.get(e,K.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i,r,o=this.key(e),s=this.cache[o];if(void 0===t)this.cache[o]={};else{K.isArray(t)?i=t.concat(t.map(K.camelCase)):(r=K.camelCase(t),t in s?i=[t,r]:(i=r,i=i in s?[i]:i.match(pe)||[])),n=i.length;for(;n--;)delete s[i[n]]}},hasData:function(e){return!K.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var me=new a,ve=new a,we=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ye=/([A-Z])/g;K.extend({hasData:function(e){return ve.hasData(e)||me.hasData(e)},data:function(e,t,n){return ve.access(e,t,n)},removeData:function(e,t){ve.remove(e,t)},_data:function(e,t,n){return me.access(e,t,n)},_removeData:function(e,t){me.remove(e,t)}}),K.fn.extend({data:function(e,t){var n,i,r,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(r=ve.get(o),1===o.nodeType&&!me.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(i=s[n].name,0===i.indexOf("data-")&&(i=K.camelCase(i.slice(5)),l(o,i,r[i])));me.set(o,"hasDataAttrs",!0)}return r}return"object"==typeof e?this.each(function(){ve.set(this,e)}):ge(this,function(t){var n,i=K.camelCase(e);if(o&&void 0===t){if(n=ve.get(o,e),void 0!==n)return n;if(n=ve.get(o,i),void 0!==n)return n;if(n=l(o,i,void 0),void 0!==n)return n}else this.each(function(){var n=ve.get(this,i);ve.set(this,i,t),-1!==e.indexOf("-")&&void 0!==n&&ve.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){ve.remove(this,e)})}}),K.extend({queue:function(e,t,n){var i;return e?(t=(t||"fx")+"queue",i=me.get(e,t),n&&(!i||K.isArray(n)?i=me.access(e,t,K.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=K.queue(e,t),i=n.length,r=n.shift(),o=K._queueHooks(e,t),s=function(){K.dequeue(e,t)};"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete o.stop,r.call(e,s,o)),!i&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return me.get(e,n)||me.access(e,n,{empty:K.Callbacks("once memory").add(function(){me.remove(e,[t+"queue",n])})})}}),K.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?K.queue(this[0],e):void 0===t?this:this.each(function(){var n=K.queue(this,e,t);K._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&K.dequeue(this,e)})},dequeue:function(e){return this.each(function(){K.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=K.Deferred(),o=this,s=this.length,a=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=me.get(o[s],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(t)}});var be=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,xe=["Top","Right","Bottom","Left"],_e=function(e,t){return e=t||e,"none"===K.css(e,"display")||!K.contains(e.ownerDocument,e)},Se=/^(?:checkbox|radio)$/i;!function(){var e=J.createDocumentFragment(),t=e.appendChild(J.createElement("div")),n=J.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),Y.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Te="undefined";Y.focusinBubbles="onfocusin"in e;var Ce=/^key/,ke=/^(?:mouse|pointer|contextmenu)|click/,Ee=/^(?:focusinfocus|focusoutblur)$/,De=/^([^.]*)(?:\.(.+)|)$/;K.event={global:{},add:function(e,t,n,i,r){var o,s,a,l,d,c,u,A,p,h,f,g=me.get(e);if(g)for(n.handler&&(o=n,n=o.handler,r=o.selector),n.guid||(n.guid=K.guid++),(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(t){return typeof K!==Te&&K.event.triggered!==t.type?K.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(pe)||[""],d=t.length;d--;)a=De.exec(t[d])||[],p=f=a[1],h=(a[2]||"").split(".").sort(),p&&(u=K.event.special[p]||{},p=(r?u.delegateType:u.bindType)||p,u=K.event.special[p]||{},c=K.extend({type:p,origType:f,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&K.expr.match.needsContext.test(r),namespace:h.join(".")},o),(A=l[p])||(A=l[p]=[],A.delegateCount=0,u.setup&&u.setup.call(e,i,h,s)!==!1||e.addEventListener&&e.addEventListener(p,s,!1)),u.add&&(u.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),r?A.splice(A.delegateCount++,0,c):A.push(c),K.event.global[p]=!0)},remove:function(e,t,n,i,r){var o,s,a,l,d,c,u,A,p,h,f,g=me.hasData(e)&&me.get(e);if(g&&(l=g.events)){for(t=(t||"").match(pe)||[""],d=t.length;d--;)if(a=De.exec(t[d])||[],p=f=a[1],h=(a[2]||"").split(".").sort(),p){for(u=K.event.special[p]||{},p=(i?u.delegateType:u.bindType)||p,A=l[p]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=A.length;o--;)c=A[o],!r&&f!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(A.splice(o,1),c.selector&&A.delegateCount--,u.remove&&u.remove.call(e,c));s&&!A.length&&(u.teardown&&u.teardown.call(e,h,g.handle)!==!1||K.removeEvent(e,p,g.handle),delete l[p])}else for(p in l)K.event.remove(e,p+t[d],n,i,!0);K.isEmptyObject(l)&&(delete g.handle,me.remove(e,"events"))}},trigger:function(t,n,i,r){var o,s,a,l,d,c,u,A=[i||J],p=G.call(t,"type")?t.type:t,h=G.call(t,"namespace")?t.namespace.split("."):[];if(s=a=i=i||J,3!==i.nodeType&&8!==i.nodeType&&!Ee.test(p+K.event.triggered)&&(p.indexOf(".")>=0&&(h=p.split("."),p=h.shift(),h.sort()),d=p.indexOf(":")<0&&"on"+p,t=t[K.expando]?t:new K.Event(p,"object"==typeof t&&t),t.isTrigger=r?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:K.makeArray(n,[t]),u=K.event.special[p]||{},r||!u.trigger||u.trigger.apply(i,n)!==!1)){if(!r&&!u.noBubble&&!K.isWindow(i)){for(l=u.delegateType||p,Ee.test(l+p)||(s=s.parentNode);s;s=s.parentNode)A.push(s),a=s;a===(i.ownerDocument||J)&&A.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=A[o++])&&!t.isPropagationStopped();)t.type=o>1?l:u.bindType||p,c=(me.get(s,"events")||{})[t.type]&&me.get(s,"handle"),c&&c.apply(s,n),c=d&&s[d],c&&c.apply&&K.acceptData(s)&&(t.result=c.apply(s,n),t.result===!1&&t.preventDefault());return t.type=p,r||t.isDefaultPrevented()||u._default&&u._default.apply(A.pop(),n)!==!1||!K.acceptData(i)||d&&K.isFunction(i[p])&&!K.isWindow(i)&&(a=i[d],a&&(i[d]=null),K.event.triggered=p,i[p](),K.event.triggered=void 0,
a&&(i[d]=a)),t.result}},dispatch:function(e){e=K.event.fix(e);var t,n,i,r,o,s=[],a=O.call(arguments),l=(me.get(this,"events")||{})[e.type]||[],d=K.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!d.preDispatch||d.preDispatch.call(this,e)!==!1){for(s=K.event.handlers.call(this,e,l),t=0;(r=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,i=((K.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,a),void 0!==i&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()));return d.postDispatch&&d.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,r,o,s=[],a=t.delegateCount,l=e.target;if(a&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!==this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==e.type){for(i=[],n=0;a>n;n++)o=t[n],r=o.selector+" ",void 0===i[r]&&(i[r]=o.needsContext?K(r,this).index(l)>=0:K.find(r,this,null,[l]).length),i[r]&&i.push(o);i.length&&s.push({elem:l,handlers:i})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,r,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||J,i=n.documentElement,r=n.body,e.pageX=t.clientX+(i&&i.scrollLeft||r&&r.scrollLeft||0)-(i&&i.clientLeft||r&&r.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||r&&r.scrollTop||0)-(i&&i.clientTop||r&&r.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[K.expando])return e;var t,n,i,r=e.type,o=e,s=this.fixHooks[r];for(s||(this.fixHooks[r]=s=ke.test(r)?this.mouseHooks:Ce.test(r)?this.keyHooks:{}),i=s.props?this.props.concat(s.props):this.props,e=new K.Event(o),t=i.length;t--;)n=i[t],e[n]=o[n];return e.target||(e.target=J),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==u()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===u()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&K.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return K.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,i){var r=K.extend(new K.Event,n,{type:e,isSimulated:!0,originalEvent:{}});i?K.event.trigger(r,null,t):K.event.dispatch.call(t,r),r.isDefaultPrevented()&&n.preventDefault()}},K.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},K.Event=function(e,t){return this instanceof K.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?d:c):this.type=e,t&&K.extend(this,t),this.timeStamp=e&&e.timeStamp||K.now(),void(this[K.expando]=!0)):new K.Event(e,t)},K.Event.prototype={isDefaultPrevented:c,isPropagationStopped:c,isImmediatePropagationStopped:c,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=d,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=d,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=d,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},K.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){K.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,o=e.handleObj;return(!r||r!==i&&!K.contains(i,r))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),Y.focusinBubbles||K.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){K.event.simulate(t,e.target,K.event.fix(e),!0)};K.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=me.access(i,t);r||i.addEventListener(e,n,!0),me.access(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=me.access(i,t)-1;r?me.access(i,t,r):(i.removeEventListener(e,n,!0),me.remove(i,t))}}}),K.fn.extend({on:function(e,t,n,i,r){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(s in e)this.on(s,t,n,e[s],r);return this}if(null==n&&null==i?(i=t,n=t=void 0):null==i&&("string"==typeof t?(i=n,n=void 0):(i=n,n=t,t=void 0)),i===!1)i=c;else if(!i)return this;return 1===r&&(o=i,i=function(e){return K().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=K.guid++)),this.each(function(){K.event.add(this,e,i,n,t)})},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,K(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=c),this.each(function(){K.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){K.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?K.event.trigger(e,t,n,!0):void 0}});var Pe=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Me=/<([\w:]+)/,ze=/<|&#?\w+;/,Be=/<(?:script|style|link)/i,Qe=/checked\s*(?:[^=]|=\s*.checked.)/i,Ie=/^$|\/(?:java|ecma)script/i,je=/^true\/(.*)/,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Re={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Re.optgroup=Re.option,Re.tbody=Re.tfoot=Re.colgroup=Re.caption=Re.thead,Re.th=Re.td,K.extend({clone:function(e,t,n){var i,r,o,s,a=e.cloneNode(!0),l=K.contains(e.ownerDocument,e);if(!(Y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||K.isXMLDoc(e)))for(s=m(a),o=m(e),i=0,r=o.length;r>i;i++)v(o[i],s[i]);if(t)if(n)for(o=o||m(e),s=s||m(a),i=0,r=o.length;r>i;i++)g(o[i],s[i]);else g(e,a);return s=m(a,"script"),s.length>0&&f(s,!l&&m(e,"script")),a},buildFragment:function(e,t,n,i){for(var r,o,s,a,l,d,c=t.createDocumentFragment(),u=[],A=0,p=e.length;p>A;A++)if(r=e[A],r||0===r)if("object"===K.type(r))K.merge(u,r.nodeType?[r]:r);else if(ze.test(r)){for(o=o||c.appendChild(t.createElement("div")),s=(Me.exec(r)||["",""])[1].toLowerCase(),a=Re[s]||Re._default,o.innerHTML=a[1]+r.replace(Pe,"<$1></$2>")+a[2],d=a[0];d--;)o=o.lastChild;K.merge(u,o.childNodes),o=c.firstChild,o.textContent=""}else u.push(t.createTextNode(r));for(c.textContent="",A=0;r=u[A++];)if((!i||-1===K.inArray(r,i))&&(l=K.contains(r.ownerDocument,r),o=m(c.appendChild(r),"script"),l&&f(o),n))for(d=0;r=o[d++];)Ie.test(r.type||"")&&n.push(r);return c},cleanData:function(e){for(var t,n,i,r,o=K.event.special,s=0;void 0!==(n=e[s]);s++){if(K.acceptData(n)&&(r=n[me.expando],r&&(t=me.cache[r]))){if(t.events)for(i in t.events)o[i]?K.event.remove(n,i):K.removeEvent(n,i,t.handle);me.cache[r]&&delete me.cache[r]}delete ve.cache[n[ve.expando]]}}}),K.fn.extend({text:function(e){return ge(this,function(e){return void 0===e?K.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=A(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=A(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,i=e?K.filter(e,this):this,r=0;null!=(n=i[r]);r++)t||1!==n.nodeType||K.cleanData(m(n)),n.parentNode&&(t&&K.contains(n.ownerDocument,n)&&f(m(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(K.cleanData(m(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return K.clone(this,e,t)})},html:function(e){return ge(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Be.test(e)&&!Re[(Me.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Pe,"<$1></$2>");try{for(;i>n;n++)t=this[n]||{},1===t.nodeType&&(K.cleanData(m(t,!1)),t.innerHTML=e);t=0}catch(r){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,K.cleanData(m(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=W.apply([],e);var n,i,r,o,s,a,l=0,d=this.length,c=this,u=d-1,A=e[0],f=K.isFunction(A);if(f||d>1&&"string"==typeof A&&!Y.checkClone&&Qe.test(A))return this.each(function(n){var i=c.eq(n);f&&(e[0]=A.call(this,n,i.html())),i.domManip(e,t)});if(d&&(n=K.buildFragment(e,this[0].ownerDocument,!1,this),i=n.firstChild,1===n.childNodes.length&&(n=i),i)){for(r=K.map(m(n,"script"),p),o=r.length;d>l;l++)s=n,l!==u&&(s=K.clone(s,!0,!0),o&&K.merge(r,m(s,"script"))),t.call(this[l],s,l);if(o)for(a=r[r.length-1].ownerDocument,K.map(r,h),l=0;o>l;l++)s=r[l],Ie.test(s.type||"")&&!me.access(s,"globalEval")&&K.contains(a,s)&&(s.src?K._evalUrl&&K._evalUrl(s.src):K.globalEval(s.textContent.replace(qe,"")))}return this}}),K.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){K.fn[e]=function(e){for(var n,i=[],r=K(e),o=r.length-1,s=0;o>=s;s++)n=s===o?this:this.clone(!0),K(r[s])[t](n),U.apply(i,n.get());return this.pushStack(i)}});var Fe,He={},$e=/^margin/,Ne=new RegExp("^("+be+")(?!px)[a-z%]+$","i"),Oe=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)};!function(){function t(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",s.innerHTML="",r.appendChild(o);var t=e.getComputedStyle(s,null);n="1%"!==t.top,i="4px"===t.width,r.removeChild(o)}var n,i,r=J.documentElement,o=J.createElement("div"),s=J.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===s.style.backgroundClip,o.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",o.appendChild(s),e.getComputedStyle&&K.extend(Y,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==i&&t(),i},reliableMarginRight:function(){var t,n=s.appendChild(J.createElement("div"));return n.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",s.style.width="1px",r.appendChild(o),t=!parseFloat(e.getComputedStyle(n,null).marginRight),r.removeChild(o),s.removeChild(n),t}}))}(),K.swap=function(e,t,n,i){var r,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];r=n.apply(e,i||[]);for(o in t)e.style[o]=s[o];return r};var We=/^(none|table(?!-c[ea]).+)/,Ue=new RegExp("^("+be+")(.*)$","i"),Le=new RegExp("^([+-])=("+be+")","i"),Ve={position:"absolute",visibility:"hidden",display:"block"},Ze={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","O","Moz","ms"];K.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=b(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,o,s,a=K.camelCase(t),l=e.style;return t=K.cssProps[a]||(K.cssProps[a]=_(l,a)),s=K.cssHooks[t]||K.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(r=s.get(e,!1,i))?r:l[t]:(o=typeof n,"string"===o&&(r=Le.exec(n))&&(n=(r[1]+1)*r[2]+parseFloat(K.css(e,t)),o="number"),null!=n&&n===n&&("number"!==o||K.cssNumber[a]||(n+="px"),Y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l[t]=n)),void 0)}},css:function(e,t,n,i){var r,o,s,a=K.camelCase(t);return t=K.cssProps[a]||(K.cssProps[a]=_(e.style,a)),s=K.cssHooks[t]||K.cssHooks[a],s&&"get"in s&&(r=s.get(e,!0,n)),void 0===r&&(r=b(e,t,i)),"normal"===r&&t in Ze&&(r=Ze[t]),""===n||n?(o=parseFloat(r),n===!0||K.isNumeric(o)?o||0:r):r}}),K.each(["height","width"],function(e,t){K.cssHooks[t]={get:function(e,n,i){return n?We.test(K.css(e,"display"))&&0===e.offsetWidth?K.swap(e,Ve,function(){return C(e,t,i)}):C(e,t,i):void 0},set:function(e,n,i){var r=i&&Oe(e);return S(e,n,i?T(e,t,i,"border-box"===K.css(e,"boxSizing",!1,r),r):0)}}}),K.cssHooks.marginRight=x(Y.reliableMarginRight,function(e,t){return t?K.swap(e,{display:"inline-block"},b,[e,"marginRight"]):void 0}),K.each({margin:"",padding:"",border:"Width"},function(e,t){K.cssHooks[e+t]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n.split(" "):[n];4>i;i++)r[e+xe[i]+t]=o[i]||o[i-2]||o[0];return r}},$e.test(e)||(K.cssHooks[e+t].set=S)}),K.fn.extend({css:function(e,t){return ge(this,function(e,t,n){var i,r,o={},s=0;if(K.isArray(t)){for(i=Oe(e),r=t.length;r>s;s++)o[t[s]]=K.css(e,t[s],!1,i);return o}return void 0!==n?K.style(e,t,n):K.css(e,t)},e,t,arguments.length>1)},show:function(){return k(this,!0)},hide:function(){return k(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){_e(this)?K(this).show():K(this).hide()})}}),K.Tween=E,E.prototype={constructor:E,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||"swing",this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(K.cssNumber[n]?"":"px")},cur:function(){var e=E.propHooks[this.prop];return e&&e.get?e.get(this):E.propHooks._default.get(this)},run:function(e){var t,n=E.propHooks[this.prop];return this.options.duration?this.pos=t=K.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):E.propHooks._default.set(this),this}},E.prototype.init.prototype=E.prototype,E.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=K.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){K.fx.step[e.prop]?K.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[K.cssProps[e.prop]]||K.cssHooks[e.prop])?K.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},E.propHooks.scrollTop=E.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},K.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},K.fx=E.prototype.init,K.fx.step={};var Ye,Je,Xe=/^(?:toggle|show|hide)$/,Ke=new RegExp("^(?:([+-])=|)("+be+")([a-z%]*)$","i"),et=/queueHooks$/,tt=[z],nt={"*":[function(e,t){var n=this.createTween(e,t),i=n.cur(),r=Ke.exec(t),o=r&&r[3]||(K.cssNumber[e]?"":"px"),s=(K.cssNumber[e]||"px"!==o&&+i)&&Ke.exec(K.css(n.elem,e)),a=1,l=20;if(s&&s[3]!==o){o=o||s[3],r=r||[],s=+i||1;do a=a||".5",s/=a,K.style(n.elem,e,s+o);while(a!==(a=n.cur()/i)&&1!==a&&--l)}return r&&(s=n.start=+s||+i||0,n.unit=o,n.end=r[1]?s+(r[1]+1)*r[2]:+r[2]),n}]};K.Animation=K.extend(Q,{tweener:function(e,t){K.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,i=0,r=e.length;r>i;i++)n=e[i],nt[n]=nt[n]||[],nt[n].unshift(t)},prefilter:function(e,t){t?tt.unshift(e):tt.push(e)}}),K.speed=function(e,t,n){var i=e&&"object"==typeof e?K.extend({},e):{complete:n||!n&&t||K.isFunction(e)&&e,duration:e,easing:n&&t||t&&!K.isFunction(t)&&t};return i.duration=K.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in K.fx.speeds?K.fx.speeds[i.duration]:K.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){K.isFunction(i.old)&&i.old.call(this),i.queue&&K.dequeue(this,i.queue)},i},K.fn.extend({fadeTo:function(e,t,n,i){return this.filter(_e).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=K.isEmptyObject(e),o=K.speed(t,n,i),s=function(){var t=Q(this,K.extend({},e),o);(r||me.get(this,"finish"))&&t.stop(!0)};return s.finish=s,r||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",o=K.timers,s=me.get(this);if(r)s[r]&&s[r].stop&&i(s[r]);else for(r in s)s[r]&&s[r].stop&&et.test(r)&&i(s[r]);for(r=o.length;r--;)o[r].elem!==this||null!=e&&o[r].queue!==e||(o[r].anim.stop(n),t=!1,o.splice(r,1));(t||!n)&&K.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=me.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=K.timers,s=i?i.length:0;for(n.finish=!0,K.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish})}}),K.each(["toggle","show","hide"],function(e,t){var n=K.fn[t];K.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(P(t,!0),e,i,r)}}),K.each({slideDown:P("show"),slideUp:P("hide"),slideToggle:P("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){K.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),K.timers=[],K.fx.tick=function(){var e,t=0,n=K.timers;for(Ye=K.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||K.fx.stop(),Ye=void 0},K.fx.timer=function(e){K.timers.push(e),e()?K.fx.start():K.timers.pop()},K.fx.interval=13,K.fx.start=function(){Je||(Je=setInterval(K.fx.tick,K.fx.interval))},K.fx.stop=function(){clearInterval(Je),Je=null},K.fx.speeds={slow:600,fast:200,_default:400},K.fn.delay=function(e,t){return e=K.fx?K.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var i=setTimeout(t,e);n.stop=function(){clearTimeout(i)}})},function(){var e=J.createElement("input"),t=J.createElement("select"),n=t.appendChild(J.createElement("option"));e.type="checkbox",Y.checkOn=""!==e.value,Y.optSelected=n.selected,t.disabled=!0,Y.optDisabled=!n.disabled,e=J.createElement("input"),e.value="t",e.type="radio",Y.radioValue="t"===e.value}();var it,rt,ot=K.expr.attrHandle;K.fn.extend({attr:function(e,t){return ge(this,K.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){K.removeAttr(this,e)})}}),K.extend({attr:function(e,t,n){var i,r,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===Te?K.prop(e,t,n):(1===o&&K.isXMLDoc(e)||(t=t.toLowerCase(),i=K.attrHooks[t]||(K.expr.match.bool.test(t)?rt:it)),void 0===n?i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=K.find.attr(e,t),null==r?void 0:r):null!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):void K.removeAttr(e,t))},removeAttr:function(e,t){var n,i,r=0,o=t&&t.match(pe);if(o&&1===e.nodeType)for(;n=o[r++];)i=K.propFix[n]||n,K.expr.match.bool.test(n)&&(e[i]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!Y.radioValue&&"radio"===t&&K.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),rt={set:function(e,t,n){return t===!1?K.removeAttr(e,n):e.setAttribute(n,n),n}},K.each(K.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ot[t]||K.find.attr;ot[t]=function(e,t,i){var r,o;return i||(o=ot[t],ot[t]=r,r=null!=n(e,t,i)?t.toLowerCase():null,ot[t]=o),r}});var st=/^(?:input|select|textarea|button)$/i;K.fn.extend({prop:function(e,t){return ge(this,K.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[K.propFix[e]||e]})}}),K.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var i,r,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!K.isXMLDoc(e),o&&(t=K.propFix[t]||t,r=K.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||st.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),Y.optSelected||(K.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),K.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){K.propFix[this.toLowerCase()]=this});var at=/[\t\r\n\f]/g;K.fn.extend({addClass:function(e){var t,n,i,r,o,s,a="string"==typeof e&&e,l=0,d=this.length;if(K.isFunction(e))return this.each(function(t){K(this).addClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(pe)||[];d>l;l++)if(n=this[l],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(at," "):" ")){for(o=0;r=t[o++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");s=K.trim(i),n.className!==s&&(n.className=s)}return this},removeClass:function(e){var t,n,i,r,o,s,a=0===arguments.length||"string"==typeof e&&e,l=0,d=this.length;if(K.isFunction(e))return this.each(function(t){K(this).removeClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(pe)||[];d>l;l++)if(n=this[l],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(at," "):"")){for(o=0;r=t[o++];)for(;i.indexOf(" "+r+" ")>=0;)i=i.replace(" "+r+" "," ");s=e?K.trim(i):"",n.className!==s&&(n.className=s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):K.isFunction(e)?this.each(function(n){K(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var t,i=0,r=K(this),o=e.match(pe)||[];t=o[i++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else(n===Te||"boolean"===n)&&(this.className&&me.set(this,"__className__",this.className),this.className=this.className||e===!1?"":me.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,i=this.length;i>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(at," ").indexOf(t)>=0)return!0;return!1}});var lt=/\r/g;K.fn.extend({val:function(e){var t,n,i,r=this[0];{if(arguments.length)return i=K.isFunction(e),this.each(function(n){var r;1===this.nodeType&&(r=i?e.call(this,n,K(this).val()):e,null==r?r="":"number"==typeof r?r+="":K.isArray(r)&&(r=K.map(r,function(e){return null==e?"":e+""})),t=K.valHooks[this.type]||K.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))});if(r)return t=K.valHooks[r.type]||K.valHooks[r.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:(n=r.value,"string"==typeof n?n.replace(lt,""):null==n?"":n)}}}),K.extend({valHooks:{option:{get:function(e){var t=K.find.attr(e,"value");return null!=t?t:K.trim(K.text(e))}},select:{get:function(e){for(var t,n,i=e.options,r=e.selectedIndex,o="select-one"===e.type||0>r,s=o?null:[],a=o?r+1:i.length,l=0>r?a:o?r:0;a>l;l++)if(n=i[l],(n.selected||l===r)&&(Y.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!K.nodeName(n.parentNode,"optgroup"))){if(t=K(n).val(),o)return t;s.push(t)}return s},set:function(e,t){for(var n,i,r=e.options,o=K.makeArray(t),s=r.length;s--;)i=r[s],(i.selected=K.inArray(i.value,o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),K.each(["radio","checkbox"],function(){K.valHooks[this]={set:function(e,t){return K.isArray(t)?e.checked=K.inArray(K(e).val(),t)>=0:void 0}},Y.checkOn||(K.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){K.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),K.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var dt=K.now(),ct=/\?/;K.parseJSON=function(e){return JSON.parse(e+"")},K.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(i){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&K.error("Invalid XML: "+e),t};var ut=/#.*$/,At=/([?&])_=[^&]*/,pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,ht=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ft=/^(?:GET|HEAD)$/,gt=/^\/\//,mt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,vt={},wt={},yt="*/".concat("*"),bt=e.location.href,xt=mt.exec(bt.toLowerCase())||[];K.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt,type:"GET",isLocal:ht.test(xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":yt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":K.parseJSON,"text xml":K.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?q(q(e,K.ajaxSettings),t):q(K.ajaxSettings,e)},ajaxPrefilter:I(vt),ajaxTransport:I(wt),ajax:function(e,t){function n(e,t,n,s){var l,c,m,v,y,x=t;2!==w&&(w=2,a&&clearTimeout(a),i=void 0,o=s||"",b.readyState=e>0?4:0,l=e>=200&&300>e||304===e,n&&(v=R(u,b,n)),v=F(u,v,b,l),l?(u.ifModified&&(y=b.getResponseHeader("Last-Modified"),y&&(K.lastModified[r]=y),y=b.getResponseHeader("etag"),y&&(K.etag[r]=y)),204===e||"HEAD"===u.type?x="nocontent":304===e?x="notmodified":(x=v.state,c=v.data,m=v.error,l=!m)):(m=x,(e||!x)&&(x="error",0>e&&(e=0))),b.status=e,b.statusText=(t||x)+"",l?h.resolveWith(A,[c,x,b]):h.rejectWith(A,[b,x,m]),b.statusCode(g),g=void 0,d&&p.trigger(l?"ajaxSuccess":"ajaxError",[b,u,l?c:m]),f.fireWith(A,[b,x]),d&&(p.trigger("ajaxComplete",[b,u]),--K.active||K.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var i,r,o,s,a,l,d,c,u=K.ajaxSetup({},t),A=u.context||u,p=u.context&&(A.nodeType||A.jquery)?K(A):K.event,h=K.Deferred(),f=K.Callbacks("once memory"),g=u.statusCode||{},m={},v={},w=0,y="canceled",b={readyState:0,getResponseHeader:function(e){var t;if(2===w){if(!s)for(s={};t=pt.exec(o);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===w?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return w||(e=v[n]=v[n]||e,m[e]=t),this},overrideMimeType:function(e){return w||(u.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>w)for(t in e)g[t]=[g[t],e[t]];else b.always(e[b.status]);return this},abort:function(e){var t=e||y;return i&&i.abort(t),n(0,t),this}};if(h.promise(b).complete=f.add,b.success=b.done,b.error=b.fail,u.url=((e||u.url||bt)+"").replace(ut,"").replace(gt,xt[1]+"//"),u.type=t.method||t.type||u.method||u.type,u.dataTypes=K.trim(u.dataType||"*").toLowerCase().match(pe)||[""],null==u.crossDomain&&(l=mt.exec(u.url.toLowerCase()),u.crossDomain=!(!l||l[1]===xt[1]&&l[2]===xt[2]&&(l[3]||("http:"===l[1]?"80":"443"))===(xt[3]||("http:"===xt[1]?"80":"443")))),u.data&&u.processData&&"string"!=typeof u.data&&(u.data=K.param(u.data,u.traditional)),j(vt,u,t,b),2===w)return b;d=K.event&&u.global,d&&0===K.active++&&K.event.trigger("ajaxStart"),u.type=u.type.toUpperCase(),u.hasContent=!ft.test(u.type),r=u.url,u.hasContent||(u.data&&(r=u.url+=(ct.test(r)?"&":"?")+u.data,delete u.data),u.cache===!1&&(u.url=At.test(r)?r.replace(At,"$1_="+dt++):r+(ct.test(r)?"&":"?")+"_="+dt++)),u.ifModified&&(K.lastModified[r]&&b.setRequestHeader("If-Modified-Since",K.lastModified[r]),K.etag[r]&&b.setRequestHeader("If-None-Match",K.etag[r])),(u.data&&u.hasContent&&u.contentType!==!1||t.contentType)&&b.setRequestHeader("Content-Type",u.contentType),b.setRequestHeader("Accept",u.dataTypes[0]&&u.accepts[u.dataTypes[0]]?u.accepts[u.dataTypes[0]]+("*"!==u.dataTypes[0]?", "+yt+"; q=0.01":""):u.accepts["*"]);for(c in u.headers)b.setRequestHeader(c,u.headers[c]);if(u.beforeSend&&(u.beforeSend.call(A,b,u)===!1||2===w))return b.abort();y="abort";for(c in{success:1,error:1,complete:1})b[c](u[c]);if(i=j(wt,u,t,b)){b.readyState=1,d&&p.trigger("ajaxSend",[b,u]),u.async&&u.timeout>0&&(a=setTimeout(function(){b.abort("timeout")},u.timeout));try{w=1,i.send(m,n)}catch(x){if(!(2>w))throw x;n(-1,x)}}else n(-1,"No Transport");return b},getJSON:function(e,t,n){return K.get(e,t,n,"json")},getScript:function(e,t){return K.get(e,void 0,t,"script")}}),K.each(["get","post"],function(e,t){K[t]=function(e,n,i,r){return K.isFunction(n)&&(r=r||i,i=n,n=void 0),K.ajax({url:e,type:t,dataType:r,data:n,success:i})}}),K._evalUrl=function(e){return K.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},K.fn.extend({wrapAll:function(e){var t;return K.isFunction(e)?this.each(function(t){K(this).wrapAll(e.call(this,t))}):(this[0]&&(t=K(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return K.isFunction(e)?this.each(function(t){K(this).wrapInner(e.call(this,t))}):this.each(function(){var t=K(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=K.isFunction(e);return this.each(function(n){K(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){K.nodeName(this,"body")||K(this).replaceWith(this.childNodes)}).end()}}),K.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},K.expr.filters.visible=function(e){return!K.expr.filters.hidden(e)};var _t=/%20/g,St=/\[\]$/,Tt=/\r?\n/g,Ct=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;K.param=function(e,t){var n,i=[],r=function(e,t){t=K.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=K.ajaxSettings&&K.ajaxSettings.traditional),K.isArray(e)||e.jquery&&!K.isPlainObject(e))K.each(e,function(){r(this.name,this.value)});else for(n in e)H(n,e[n],t,r);return i.join("&").replace(_t,"+")},K.fn.extend({serialize:function(){return K.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=K.prop(this,"elements");return e?K.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!K(this).is(":disabled")&&kt.test(this.nodeName)&&!Ct.test(e)&&(this.checked||!Se.test(e))}).map(function(e,t){var n=K(this).val();return null==n?null:K.isArray(n)?K.map(n,function(e){return{name:t.name,value:e.replace(Tt,"\r\n")}}):{name:t.name,value:n.replace(Tt,"\r\n")}}).get()}}),K.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var Et=0,Dt={},Pt={0:200,1223:204},Mt=K.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var e in Dt)Dt[e]()}),Y.cors=!!Mt&&"withCredentials"in Mt,Y.ajax=Mt=!!Mt,K.ajaxTransport(function(e){var t;return Y.cors||Mt&&!e.crossDomain?{send:function(n,i){var r,o=e.xhr(),s=++Et;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(r in e.xhrFields)o[r]=e.xhrFields[r];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(r in n)o.setRequestHeader(r,n[r]);t=function(e){return function(){t&&(delete Dt[s],
t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?i(o.status,o.statusText):i(Pt[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=Dt[s]=t("abort");try{o.send(e.hasContent&&e.data||null)}catch(a){if(t)throw a}},abort:function(){t&&t()}}:void 0}),K.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return K.globalEval(e),e}}}),K.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),K.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,r){t=K("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),J.head.appendChild(t[0])},abort:function(){n&&n()}}}});var zt=[],Bt=/(=)\?(?=&|$)|\?\?/;K.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||K.expando+"_"+dt++;return this[e]=!0,e}}),K.ajaxPrefilter("json jsonp",function(t,n,i){var r,o,s,a=t.jsonp!==!1&&(Bt.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bt.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(r=t.jsonpCallback=K.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Bt,"$1"+r):t.jsonp!==!1&&(t.url+=(ct.test(t.url)?"&":"?")+t.jsonp+"="+r),t.converters["script json"]=function(){return s||K.error(r+" was not called"),s[0]},t.dataTypes[0]="json",o=e[r],e[r]=function(){s=arguments},i.always(function(){e[r]=o,t[r]&&(t.jsonpCallback=n.jsonpCallback,zt.push(r)),s&&K.isFunction(o)&&o(s[0]),s=o=void 0}),"script"):void 0}),K.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||J;var i=se.exec(e),r=!n&&[];return i?[t.createElement(i[1])]:(i=K.buildFragment([e],t,r),r&&r.length&&K(r).remove(),K.merge([],i.childNodes))};var Qt=K.fn.load;K.fn.load=function(e,t,n){if("string"!=typeof e&&Qt)return Qt.apply(this,arguments);var i,r,o,s=this,a=e.indexOf(" ");return a>=0&&(i=K.trim(e.slice(a)),e=e.slice(0,a)),K.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),s.length>0&&K.ajax({url:e,type:r,dataType:"html",data:t}).done(function(e){o=arguments,s.html(i?K("<div>").append(K.parseHTML(e)).find(i):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},K.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){K.fn[t]=function(e){return this.on(t,e)}}),K.expr.filters.animated=function(e){return K.grep(K.timers,function(t){return e===t.elem}).length};var It=e.document.documentElement;K.offset={setOffset:function(e,t,n){var i,r,o,s,a,l,d,c=K.css(e,"position"),u=K(e),A={};"static"===c&&(e.style.position="relative"),a=u.offset(),o=K.css(e,"top"),l=K.css(e,"left"),d=("absolute"===c||"fixed"===c)&&(o+l).indexOf("auto")>-1,d?(i=u.position(),s=i.top,r=i.left):(s=parseFloat(o)||0,r=parseFloat(l)||0),K.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(A.top=t.top-a.top+s),null!=t.left&&(A.left=t.left-a.left+r),"using"in t?t.using.call(e,A):u.css(A)}},K.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){K.offset.setOffset(this,e,t)});var t,n,i=this[0],r={top:0,left:0},o=i&&i.ownerDocument;if(o)return t=o.documentElement,K.contains(t,i)?(typeof i.getBoundingClientRect!==Te&&(r=i.getBoundingClientRect()),n=$(o),{top:r.top+n.pageYOffset-t.clientTop,left:r.left+n.pageXOffset-t.clientLeft}):r},position:function(){if(this[0]){var e,t,n=this[0],i={top:0,left:0};return"fixed"===K.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),K.nodeName(e[0],"html")||(i=e.offset()),i.top+=K.css(e[0],"borderTopWidth",!0),i.left+=K.css(e[0],"borderLeftWidth",!0)),{top:t.top-i.top-K.css(n,"marginTop",!0),left:t.left-i.left-K.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||It;e&&!K.nodeName(e,"html")&&"static"===K.css(e,"position");)e=e.offsetParent;return e||It})}}),K.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var i="pageYOffset"===n;K.fn[t]=function(r){return ge(this,function(t,r,o){var s=$(t);return void 0===o?s?s[n]:t[r]:void(s?s.scrollTo(i?e.pageXOffset:o,i?o:e.pageYOffset):t[r]=o)},t,r,arguments.length,null)}}),K.each(["top","left"],function(e,t){K.cssHooks[t]=x(Y.pixelPosition,function(e,n){return n?(n=b(e,t),Ne.test(n)?K(e).position()[t]+"px":n):void 0})}),K.each({Height:"height",Width:"width"},function(e,t){K.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){K.fn[i]=function(i,r){var o=arguments.length&&(n||"boolean"!=typeof i),s=n||(i===!0||r===!0?"margin":"border");return ge(this,function(t,n,i){var r;return K.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===i?K.css(t,n,s):K.style(t,n,i,s)},t,o?i:void 0,o,null)}})}),K.fn.size=function(){return this.length},K.fn.andSelf=K.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return K});var jt=e.jQuery,qt=e.$;return K.noConflict=function(t){return e.$===K&&(e.$=qt),t&&e.jQuery===K&&(e.jQuery=jt),K},typeof t===Te&&(e.jQuery=e.$=K),K}),/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2015, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
function(e,t,n,i){"use strict";function r(e){return("string"==typeof e||e instanceof String)&&(e=e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),e}function o(e){this.selector=e,this.query=""}var s=function(t){var n=e("head");n.prepend(e.map(t,function(e){return 0===n.has("."+e).length?'<meta class="'+e+'" />':void 0}))};s(["foundation-mq-small","foundation-mq-small-only","foundation-mq-medium","foundation-mq-medium-only","foundation-mq-large","foundation-mq-large-only","foundation-mq-xlarge","foundation-mq-xlarge-only","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),e(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof n.body&&FastClick.attach(n.body)});var a=function(t,i){if("string"==typeof t){if(i){var r;if(i.jquery){if(r=i[0],!r)return i}else r=i;return e(r.querySelectorAll(t))}return e(n.querySelectorAll(t))}return e(t,i)},l=function(e){var t=[];return e||t.push("data"),this.namespace.length>0&&t.push(this.namespace),t.push(this.name),t.join("-")},d=function(e){for(var t=e.split("-"),n=t.length,i=[];n--;)0!==n?i.push(t[n]):this.namespace.length>0?i.push(this.namespace,t[n]):i.push(t[n]);return i.reverse().join("-")},c=function(t,n){var i=this,r=function(){var r=a(this),o=!r.data(i.attr_name(!0)+"-init");r.data(i.attr_name(!0)+"-init",e.extend({},i.settings,n||t,i.data_options(r))),o&&i.events(this)};return a(this.scope).is("["+this.attr_name()+"]")?r.call(this.scope):a("["+this.attr_name()+"]",this.scope).each(r),"string"==typeof t?this[t].call(this,n):void 0},u=function(e,t){function n(){t(e[0])}function i(){if(this.one("load",n),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var e=this.attr("src"),t=e.match(/\?/)?"&":"?";t+="random="+(new Date).getTime(),this.attr("src",e+t)}}return e.attr("src")?void(e[0].complete||4===e[0].readyState?n():i.call(e)):void n()};/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
t.matchMedia||(t.matchMedia=function(){var e=t.styleMedia||t.media;if(!e){var i=n.createElement("style"),r=n.getElementsByTagName("script")[0],o=null;i.type="text/css",i.id="matchmediajs-test",r.parentNode.insertBefore(i,r),o="getComputedStyle"in t&&t.getComputedStyle(i,null)||i.currentStyle,e={matchMedium:function(e){var t="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return i.styleSheet?i.styleSheet.cssText=t:i.textContent=t,"1px"===o.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),/*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */
function(e){function n(){i&&(s(n),l&&e.fx.tick())}for(var i,r=0,o=["webkit","moz"],s=t.requestAnimationFrame,a=t.cancelAnimationFrame,l="undefined"!=typeof e.fx;r<o.length&&!s;r++)s=t[o[r]+"RequestAnimationFrame"],a=a||t[o[r]+"CancelAnimationFrame"]||t[o[r]+"CancelRequestAnimationFrame"];s?(t.requestAnimationFrame=s,t.cancelAnimationFrame=a,l&&(e.fx.timer=function(t){t()&&e.timers.push(t)&&!i&&(i=!0,n())},e.fx.stop=function(){i=!1})):(t.requestAnimationFrame=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-r)),o=t.setTimeout(function(){e(n+i)},i);return r=n+i,o},t.cancelAnimationFrame=function(e){clearTimeout(e)})}(e),o.prototype.toString=function(){return this.query||(this.query=a(this.selector).css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""))},t.Foundation={name:"Foundation",version:"5.5.3",media_queries:{small:new o(".foundation-mq-small"),"small-only":new o(".foundation-mq-small-only"),medium:new o(".foundation-mq-medium"),"medium-only":new o(".foundation-mq-medium-only"),large:new o(".foundation-mq-large"),"large-only":new o(".foundation-mq-large-only"),xlarge:new o(".foundation-mq-xlarge"),"xlarge-only":new o(".foundation-mq-xlarge-only"),xxlarge:new o(".foundation-mq-xxlarge")},stylesheet:e("<style></style>").appendTo("head")[0].sheet,global:{namespace:i},init:function(e,n,i,r,o){var s=[e,i,r,o],l=[];if(this.rtl=/rtl/i.test(a("html").attr("dir")),this.scope=e||this.scope,this.set_namespace(),n&&"string"==typeof n&&!/reflow/i.test(n))this.libs.hasOwnProperty(n)&&l.push(this.init_lib(n,s));else for(var d in this.libs)l.push(this.init_lib(d,n));return a(t).load(function(){a(t).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),e},init_lib:function(t,n){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),n&&n.hasOwnProperty(t)?("undefined"!=typeof this.libs[t].settings?e.extend(!0,this.libs[t].settings,n[t]):"undefined"!=typeof this.libs[t].defaults&&e.extend(!0,this.libs[t].defaults,n[t]),this.libs[t].init.apply(this.libs[t],[this.scope,n[t]])):(n=n instanceof Array?n:new Array(n),this.libs[t].init.apply(this.libs[t],n))):function(){}},patch:function(e){e.scope=this.scope,e.namespace=this.global.namespace,e.rtl=this.rtl,e.data_options=this.utils.data_options,e.attr_name=l,e.add_namespace=d,e.bindings=c,e.S=this.utils.S},inherit:function(e,t){for(var n=t.split(" "),i=n.length;i--;)this.utils.hasOwnProperty(n[i])&&(e[n[i]]=this.utils[n[i]])},set_namespace:function(){var t=this.global.namespace===i?e(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=t===i||/false/i.test(t)?"":t},libs:{},utils:{S:a,throttle:function(e,t){var n=null;return function(){var i=this,r=arguments;null==n&&(n=setTimeout(function(){e.apply(i,r),n=null},t))}},debounce:function(e,t,n){var i,r;return function(){var o=this,s=arguments,a=function(){i=null,n||(r=e.apply(o,s))},l=n&&!i;return clearTimeout(i),i=setTimeout(a,t),l&&(r=e.apply(o,s)),r}},data_options:function(t,n){function i(e){return!isNaN(e-0)&&null!==e&&""!==e&&e!==!1&&e!==!0}function r(t){return"string"==typeof t?e.trim(t):t}n=n||"options";var o,s,a,l={},d=function(e){var t=Foundation.global.namespace;return t.length>0?e.data(t+"-"+n):e.data(n)},c=d(t);if("object"==typeof c)return c;for(a=(c||":").split(";"),o=a.length;o--;)s=a[o].split(":"),s=[s[0],s.slice(1).join(":")],/true/i.test(s[1])&&(s[1]=!0),/false/i.test(s[1])&&(s[1]=!1),i(s[1])&&(-1===s[1].indexOf(".")?s[1]=parseInt(s[1],10):s[1]=parseFloat(s[1])),2===s.length&&s[0].length>0&&(l[r(s[0])]=r(s[1]));return l},register_media:function(t,n){Foundation.media_queries[t]===i&&(e("head").append('<meta class="'+n+'"/>'),Foundation.media_queries[t]=r(e("."+n).css("font-family")))},add_custom_rule:function(e,t){if(t===i&&Foundation.stylesheet)Foundation.stylesheet.insertRule(e,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[t];n!==i&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[t]+"{ "+e+" }",Foundation.stylesheet.cssRules.length)}},image_loaded:function(e,t){function n(e){for(var t=e.length,n=t-1;n>=0;n--)if(e.attr("height")===i)return!1;return!0}var r=this,o=e.length;(0===o||n(e))&&t(e),e.each(function(){u(r.S(this),function(){o-=1,0===o&&t(e)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)},match:function(e){return t.matchMedia(e).matches},is_small_up:function(){return this.match(Foundation.media_queries.small)},is_medium_up:function(){return this.match(Foundation.media_queries.medium)},is_large_up:function(){return this.match(Foundation.media_queries.large)},is_xlarge_up:function(){return this.match(Foundation.media_queries.xlarge)},is_xxlarge_up:function(){return this.match(Foundation.media_queries.xxlarge)},is_small_only:function(){return!(this.is_medium_up()||this.is_large_up()||this.is_xlarge_up()||this.is_xxlarge_up())},is_medium_only:function(){return this.is_medium_up()&&!this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_large_only:function(){return this.is_medium_up()&&this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xxlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&this.is_xxlarge_up()}}},e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(e)),this})}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.abide={name:"abide",version:"5.5.3",settings:{live_validate:!0,validate_on_blur:!0,focus_on_invalid:!0,error_labels:!0,error_class:"error",timeout:1e3,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^(https?|ftp|file|ssh):\/\/([-;:&=\+\$,\w]+@{1})?([-A-Za-z0-9\.]+)+:?(\d+)?((\/[-\+~%\/\.\w]+)?\??([-\+=&;%@\.\w]+)?#?([\w]+)?)?/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(e,t,i){var r=n.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,o=e.value,s=r===o;return s}}},timer:null,init:function(e,t,n){this.bindings(t,n)},events:function(t){function n(e,t){clearTimeout(i.timer),i.timer=setTimeout(function(){i.validate([e],t)}.bind(e),o.timeout)}var i=this,r=i.S(t).attr("novalidate","novalidate"),o=r.data(this.attr_name(!0)+"-init")||{};this.invalid_attr=this.add_namespace("data-invalid"),r.off(".abide").on("submit.fndtn.abide",function(e){var t=/ajax/i.test(i.S(this).attr(i.attr_name()));return i.validate(i.S(this).find("input, textarea, select").not(":hidden, [data-abide-ignore]").get(),e,t)}).on("validate.fndtn.abide",function(e){"manual"===o.validate_on&&i.validate([e.target],e)}).on("reset",function(t){return i.reset(e(this),t)}).find("input, textarea, select").not(":hidden, [data-abide-ignore]").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function(e){var t=this.getAttribute("id"),i=r.find('[data-equalto="'+t+'"]');o.validate_on_blur&&o.validate_on_blur===!0&&n(this,e),"undefined"!=typeof i.get(0)&&i.val().length&&n(i.get(0),e),"change"===o.validate_on&&n(this,e)}).on("keydown.fndtn.abide",function(e){var t=this.getAttribute("id"),i=r.find('[data-equalto="'+t+'"]');o.live_validate&&o.live_validate===!0&&9!=e.which&&n(this,e),"undefined"!=typeof i.get(0)&&i.val().length&&n(i.get(0),e),"tab"===o.validate_on&&9===e.which?n(this,e):"change"===o.validate_on&&n(this,e)}).on("focus",function(t){navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i)&&e("html, body").animate({scrollTop:e(t.target).offset().top},100)})},reset:function(t,n){var i=this;t.removeAttr(i.invalid_attr),e("["+i.invalid_attr+"]",t).removeAttr(i.invalid_attr),e("."+i.settings.error_class,t).not("small").removeClass(i.settings.error_class),e(":input",t).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr(i.invalid_attr)},validate:function(e,t,n){for(var i=this.parse_patterns(e),r=i.length,o=this.S(e[0]).closest("form"),s=/submit/.test(t.type),a=0;r>a;a++)if(!i[a]&&(s||n))return this.settings.focus_on_invalid&&e[a].focus(),o.trigger("invalid.fndtn.abide"),this.S(e[a]).closest("form").attr(this.invalid_attr,""),!1;return(s||n)&&o.trigger("valid.fndtn.abide"),o.removeAttr(this.invalid_attr),n?!1:!0},parse_patterns:function(e){for(var t=e.length,n=[];t--;)n.push(this.pattern(e[t]));return this.check_validation_and_apply_styles(n)},pattern:function(e){var t=e.getAttribute("type"),n="string"==typeof e.getAttribute("required"),i=e.getAttribute("pattern")||"";return this.settings.patterns.hasOwnProperty(i)&&i.length>0?[e,this.settings.patterns[i],n]:i.length>0?[e,new RegExp(i),n]:this.settings.patterns.hasOwnProperty(t)?[e,this.settings.patterns[t],n]:(i=/.*/,[e,i,n])},check_validation_and_apply_styles:function(t){var n=t.length,i=[];if(0==n)return i;var r=this.S(t[0][0]).closest("[data-"+this.attr_name(!0)+"]");for(r.data(this.attr_name(!0)+"-init")||{};n--;){var o,s,a=t[n][0],l=t[n][2],d=a.value.trim(),c=this.S(a).parent(),u=a.getAttribute(this.add_namespace("data-abide-validator")),A="radio"===a.type,p="checkbox"===a.type,h=this.S('label[for="'+a.getAttribute("id")+'"]'),f=l?a.value.length>0:!0,g=[];if(a.getAttribute(this.add_namespace("data-equalto"))&&(u="equalTo"),o=c.is("label")?c.parent():c,A&&l)g.push(this.valid_radio(a,l));else if(p&&l)g.push(this.valid_checkbox(a,l));else if(u){for(var m=u.split(" "),v=!0,w=!0,y=0;y<m.length;y++)s=this.settings.validators[m[y]].apply(this,[a,l,o]),g.push(s),w=s&&v,v=s;w?(this.S(a).removeAttr(this.invalid_attr),o.removeClass("error"),h.length>0&&this.settings.error_labels&&h.removeClass(this.settings.error_class).removeAttr("role"),e(a).triggerHandler("valid")):(this.S(a).attr(this.invalid_attr,""),o.addClass("error"),h.length>0&&this.settings.error_labels&&h.addClass(this.settings.error_class).attr("role","alert"),e(a).triggerHandler("invalid"))}else if(t[n][1].test(d)&&f||!l&&a.value.length<1||e(a).attr("disabled")?g.push(!0):g.push(!1),g=[g.every(function(e){return e})],g[0])this.S(a).removeAttr(this.invalid_attr),a.setAttribute("aria-invalid","false"),a.removeAttribute("aria-describedby"),o.removeClass(this.settings.error_class),h.length>0&&this.settings.error_labels&&h.removeClass(this.settings.error_class).removeAttr("role"),e(a).triggerHandler("valid");else{this.S(a).attr(this.invalid_attr,""),a.setAttribute("aria-invalid","true");var b=o.find("small."+this.settings.error_class,"span."+this.settings.error_class),x=b.length>0?b[0].id:"";x.length>0&&a.setAttribute("aria-describedby",x),o.addClass(this.settings.error_class),h.length>0&&this.settings.error_labels&&h.addClass(this.settings.error_class).attr("role","alert"),e(a).triggerHandler("invalid")}i=i.concat(g)}return i},valid_checkbox:function(t,n){var t=this.S(t),i=t.is(":checked")||!n||t.get(0).getAttribute("disabled");return i?(t.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class),e(t).triggerHandler("valid")):(t.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),e(t).triggerHandler("invalid")),i},valid_radio:function(t,n){for(var i=t.getAttribute("name"),r=this.S(t).closest("[data-"+this.attr_name(!0)+"]").find("[name='"+i+"']"),o=r.length,s=!1,a=!1,l=0;o>l;l++)r[l].getAttribute("disabled")?(a=!0,s=!0):r[l].checked?s=!0:a&&(s=!1);for(var l=0;o>l;l++)s?(this.S(r[l]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class),e(r[l]).triggerHandler("valid")):(this.S(r[l]).attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),e(r[l]).triggerHandler("invalid"));return s},valid_equal:function(e,t,i){var r=n.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,o=e.value,s=r===o;return s?(this.S(e).removeAttr(this.invalid_attr),i.removeClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.removeClass(this.settings.error_class)):(this.S(e).attr(this.invalid_attr,""),i.addClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.addClass(this.settings.error_class)),s},valid_oneof:function(e,t,n,i){var e=this.S(e),r=this.S("["+this.add_namespace("data-oneof")+"]"),o=r.filter(":checked").length>0;if(o?e.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class):e.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),!i){var s=this;r.each(function(){s.valid_oneof.call(s,this,null,null,!0)})}return o},reflow:function(e,t){var n=this,i=n.S("["+this.attr_name()+"]").attr("novalidate","novalidate");n.S(i).each(function(e,t){n.events(t)})}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.5.3",settings:{content_class:"content",active_class:"active",multi_expand:!1,toggleable:!0,callback:function(){}},init:function(e,t,n){this.bindings(t,n)},events:function(t){var n=this,i=this.S;n.create(this.S(t)),i(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] > dd > a, ["+this.attr_name()+"] > li > a",function(t){var r=i(this).closest("["+n.attr_name()+"]"),o=n.attr_name()+"="+r.attr(n.attr_name()),s=r.data(n.attr_name(!0)+"-init")||n.settings,a=i("#"+this.href.split("#")[1]),l=e("> dd, > li",r),d=l.children("."+s.content_class),c=d.filter("."+s.active_class);return t.preventDefault(),r.attr(n.attr_name())&&(d=d.add("["+o+"] dd > ."+s.content_class+", ["+o+"] li > ."+s.content_class),l=l.add("["+o+"] dd, ["+o+"] li")),s.toggleable&&a.is(c)?(a.parent("dd, li").toggleClass(s.active_class,!1),a.toggleClass(s.active_class,!1),i(this).attr("aria-expanded",function(e,t){return"true"===t?"false":"true"}),s.callback(a),a.triggerHandler("toggled",[r]),void r.triggerHandler("toggled",[a])):(s.multi_expand||(d.removeClass(s.active_class),l.removeClass(s.active_class),l.children("a").attr("aria-expanded","false")),a.addClass(s.active_class).parent().addClass(s.active_class),s.callback(a),a.triggerHandler("toggled",[r]),r.triggerHandler("toggled",[a]),void i(this).attr("aria-expanded","true"))})},create:function(t){var n=this,i=t,r=e("> .accordion-navigation",i),o=i.data(n.attr_name(!0)+"-init")||n.settings;r.children("a").attr("aria-expanded","false"),r.has("."+o.content_class+"."+o.active_class).addClass(o.active_class).children("a").attr("aria-expanded","true"),o.multi_expand&&t.attr("aria-multiselectable","true")},toggle:function(e){var e="undefined"!=typeof e?e:{},n="undefined"!=typeof e.selector?e.selector:"",i="undefined"!=typeof e.toggle_state?e.toggle_state:"",r="undefined"!=typeof e.$accordion?e.$accordion:this.S(this.scope).closest("["+this.attr_name()+"]"),o=r.find("> dd"+n+", > li"+n);if(o.length<1)return t.console&&console.error("Selection not found.",n),!1;var s=this.S,a=this.settings.active_class;o.each(function(){var e=s(this),t=e.hasClass(a);(t&&"close"===i||!t&&"open"===i||""===i)&&e.find("> a").trigger("click.fndtn.accordion")})},open:function(e){var e="undefined"!=typeof e?e:{};e.toggle_state="open",this.toggle(e)},close:function(e){var e="undefined"!=typeof e?e:{};e.toggle_state="close",this.toggle(e)},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.alert={name:"alert",version:"5.5.3",settings:{callback:function(){}},init:function(e,t,n){this.bindings(t,n)},events:function(){var t=this,n=this.S;e(this.scope).off(".alert").on("click.fndtn.alert","["+this.attr_name()+"] .close",function(e){var i=n(this).closest("["+t.attr_name()+"]"),r=i.data(t.attr_name(!0)+"-init")||t.settings;e.preventDefault(),Modernizr.csstransitions?(i.addClass("alert-close"),i.on("transitionend webkitTransitionEnd oTransitionEnd",function(e){n(this).trigger("close.fndtn.alert").remove(),r.callback()})):i.fadeOut(300,function(){n(this).trigger("close.fndtn.alert").remove(),r.callback()})})},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.clearing={name:"clearing",version:"5.5.3",settings:{templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div><img class="clearing-preload-next" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><img class="clearing-preload-prev" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />'},close_selectors:".clearing-close, div.clearing-blackout",open_selectors:"",skip_selector:"",touch_label:"",init:!1,locked:!1},init:function(e,t,n){var i=this;Foundation.inherit(this,"throttle image_loaded"),this.bindings(t,n),i.S(this.scope).is("["+this.attr_name()+"]")?this.assemble(i.S("li",this.scope)):i.S("["+this.attr_name()+"]",this.scope).each(function(){i.assemble(i.S("li",this))})},events:function(i){var r=this,o=r.S,s=e(".scroll-container");s.length>0&&(this.scope=s),o(this.scope).off(".clearing").on("click.fndtn.clearing","ul["+this.attr_name()+"] li "+this.settings.open_selectors,function(e,t,n){var t=t||o(this),n=n||t,i=t.next("li"),s=t.closest("["+r.attr_name()+"]").data(r.attr_name(!0)+"-init"),a=o(e.target);e.preventDefault(),s||(r.init(),s=t.closest("["+r.attr_name()+"]").data(r.attr_name(!0)+"-init")),n.hasClass("visible")&&t[0]===n[0]&&i.length>0&&r.is_open(t)&&(n=i,a=o("img",n)),r.open(a,t,n),r.update_paddles(n)}).on("click.fndtn.clearing",".clearing-main-next",function(e){r.nav(e,"next")}).on("click.fndtn.clearing",".clearing-main-prev",function(e){r.nav(e,"prev")}).on("click.fndtn.clearing",this.settings.close_selectors,function(e){Foundation.libs.clearing.close(e,this)}),e(n).on("keydown.fndtn.clearing",function(e){r.keydown(e)}),o(t).off(".clearing").on("resize.fndtn.clearing",function(){r.resize()}),this.swipe_events(i)},swipe_events:function(e){var t=this,n=t.S;n(this.scope).on("touchstart.fndtn.clearing",".visible-img",function(e){e.touches||(e=e.originalEvent);var t={start_page_x:e.touches[0].pageX,start_page_y:e.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:i};n(this).data("swipe-transition",t),e.stopPropagation()}).on("touchmove.fndtn.clearing",".visible-img",function(e){if(e.touches||(e=e.originalEvent),!(e.touches.length>1||e.scale&&1!==e.scale)){var i=n(this).data("swipe-transition");if("undefined"==typeof i&&(i={}),i.delta_x=e.touches[0].pageX-i.start_page_x,Foundation.rtl&&(i.delta_x=-i.delta_x),"undefined"==typeof i.is_scrolling&&(i.is_scrolling=!!(i.is_scrolling||Math.abs(i.delta_x)<Math.abs(e.touches[0].pageY-i.start_page_y))),!i.is_scrolling&&!i.active){e.preventDefault();var r=i.delta_x<0?"next":"prev";i.active=!0,t.nav(e,r)}}}).on("touchend.fndtn.clearing",".visible-img",function(e){n(this).data("swipe-transition",{}),e.stopPropagation()})},assemble:function(t){var n=t.parent();if(!n.parent().hasClass("carousel")){n.after('<div id="foundationClearingHolder"></div>');var i=n.detach(),r="";if(null!=i[0]){r=i[0].outerHTML;var o=this.S("#foundationClearingHolder"),s=n.data(this.attr_name(!0)+"-init"),a={grid:'<div class="carousel">'+r+"</div>",viewing:s.templates.viewing},l='<div class="clearing-assembled"><div>'+a.viewing+a.grid+"</div></div>",d=this.settings.touch_label;Modernizr.touch&&(l=e(l).find(".clearing-touch-label").html(d).end()),o.after(l).remove()}}},open:function(t,i,r){function o(){setTimeout(function(){this.image_loaded(A,function(){1!==A.outerWidth()||h?s.call(this,A):o.call(this)}.bind(this))}.bind(this),100)}function s(t){var n=e(t);n.css("visibility","visible"),n.trigger("imageVisible"),l.css("overflow","hidden"),d.addClass("clearing-blackout"),c.addClass("clearing-container"),u.show(),this.fix_height(r).caption(a.S(".clearing-caption",u),a.S("img",r)).center_and_label(t,p).shift(i,r,function(){r.closest("li").siblings().removeClass("visible"),r.closest("li").addClass("visible")}),u.trigger("opened.fndtn.clearing")}var a=this,l=e(n.body),d=r.closest(".clearing-assembled"),c=a.S("div",d).first(),u=a.S(".visible-img",c),A=a.S("img",u).not(t),p=a.S(".clearing-touch-label",c),h=!1,f={};e("body").on("touchmove",function(e){e.preventDefault()}),A.error(function(){h=!0}),this.locked()||(u.trigger("open.fndtn.clearing"),f=this.load(t),f.interchange?A.attr("data-interchange",f.interchange).foundation("interchange","reflow"):A.attr("src",f.src).attr("data-interchange",""),A.css("visibility","hidden"),o.call(this))},close:function(t,i){t.preventDefault();var r,o,s=function(e){return/blackout/.test(e.selector)?e:e.closest(".clearing-blackout")}(e(i)),a=e(n.body);return i===t.target&&s&&(a.css("overflow",""),r=e("div",s).first(),o=e(".visible-img",r),o.trigger("close.fndtn.clearing"),this.settings.prev_index=0,e("ul["+this.attr_name()+"]",s).attr("style","").closest(".clearing-blackout").removeClass("clearing-blackout"),r.removeClass("clearing-container"),o.hide(),o.trigger("closed.fndtn.clearing")),e("body").off("touchmove"),!1},is_open:function(e){return e.parent().prop("style").length>0},keydown:function(t){var n=e(".clearing-blackout ul["+this.attr_name()+"]"),i=this.rtl?37:39,r=this.rtl?39:37,o=27;t.which===i&&this.go(n,"next"),t.which===r&&this.go(n,"prev"),t.which===o&&this.S("a.clearing-close").trigger("click.fndtn.clearing")},nav:function(t,n){var i=e("ul["+this.attr_name()+"]",".clearing-blackout");t.preventDefault(),this.go(i,n)},resize:function(){var t=e("img",".clearing-blackout .visible-img"),n=e(".clearing-touch-label",".clearing-blackout");t.length&&(this.center_and_label(t,n),t.trigger("resized.fndtn.clearing"))},fix_height:function(e){var t=e.parent().children(),n=this;return t.each(function(){var e=n.S(this),t=e.find("img");e.height()>t.outerHeight()&&e.addClass("fix-height")}).closest("ul").width(100*t.length+"%"),this},update_paddles:function(e){e=e.closest("li");var t=e.closest(".carousel").siblings(".visible-img");e.next().length>0?this.S(".clearing-main-next",t).removeClass("disabled"):this.S(".clearing-main-next",t).addClass("disabled"),e.prev().length>0?this.S(".clearing-main-prev",t).removeClass("disabled"):this.S(".clearing-main-prev",t).addClass("disabled")},center_and_label:function(e,t){return!this.rtl&&t.length>0?t.css({marginLeft:-(t.outerWidth()/2),marginTop:-(e.outerHeight()/2)-t.outerHeight()-10}):t.css({marginRight:-(t.outerWidth()/2),marginTop:-(e.outerHeight()/2)-t.outerHeight()-10,left:"auto",right:"50%"}),this},load:function(e){var t,n,i;return"A"===e[0].nodeName?(t=e.attr("href"),n=e.data("clearing-interchange")):(i=e.closest("a"),t=i.attr("href"),n=i.data("clearing-interchange")),this.preload(e),{src:t?t:e.attr("src"),interchange:t?n:e.data("clearing-interchange")}},preload:function(e){this.img(e.closest("li").next(),"next").img(e.closest("li").prev(),"prev")},img:function(t,n){if(t.length){var i,r,o,s=e(".clearing-preload-"+n),a=this.S("a",t);a.length?(i=a.attr("href"),r=a.data("clearing-interchange")):(o=this.S("img",t),i=o.attr("src"),r=o.data("clearing-interchange")),r?s.attr("data-interchange",r):(s.attr("src",i),s.attr("data-interchange",""))}return this},caption:function(e,t){var n=t.attr("data-caption");if(n){var i=e.get(0);i.innerHTML=n,e.show()}else e.text("").hide();return this},go:function(e,t){var n=this.S(".visible",e),i=n[t]();this.settings.skip_selector&&0!=i.find(this.settings.skip_selector).length&&(i=i[t]()),i.length&&this.S("img",i).trigger("click.fndtn.clearing",[n,i]).trigger("change.fndtn.clearing")},shift:function(e,t,n){var i,r=t.parent(),o=this.settings.prev_index||t.index(),s=this.direction(r,e,t),a=this.rtl?"right":"left",l=parseInt(r.css("left"),10),d=t.outerWidth(),c={};t.index()===o||/skip/.test(s)?/skip/.test(s)&&(i=t.index()-this.settings.up_count,this.lock(),i>0?(c[a]=-(i*d),r.animate(c,300,this.unlock())):(c[a]=0,r.animate(c,300,this.unlock()))):/left/.test(s)?(this.lock(),c[a]=l+d,r.animate(c,300,this.unlock())):/right/.test(s)&&(this.lock(),c[a]=l-d,r.animate(c,300,this.unlock())),n()},direction:function(e,t,n){var i,r=this.S("li",e),o=r.outerWidth()+r.outerWidth()/4,s=Math.floor(this.S(".clearing-container").outerWidth()/o)-1,a=r.index(n);return this.settings.up_count=s,i=this.adjacent(this.settings.prev_index,a)?a>s&&a>this.settings.prev_index?"right":a>s-1&&a<=this.settings.prev_index?"left":!1:"skip",this.settings.prev_index=a,i},adjacent:function(e,t){for(var n=t+1;n>=t-1;n--)if(n===e)return!0;return!1},lock:function(){this.settings.locked=!0},unlock:function(){this.settings.locked=!1},locked:function(){return this.settings.locked},off:function(){this.S(this.scope).off(".fndtn.clearing"),this.S(t).off(".fndtn.clearing")},reflow:function(){this.init()}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.dropdown={name:"dropdown",version:"5.5.3",settings:{active_class:"open",disabled_class:"disabled",mega_class:"mega",align:"bottom",is_hover:!1,hover_timeout:150,opened:function(){},closed:function(){}},init:function(t,n,i){Foundation.inherit(this,"throttle"),e.extend(!0,this.settings,n,i),this.bindings(n,i)},events:function(i){var r=this,o=r.S;o(this.scope).off(".dropdown").on("click.fndtn.dropdown","["+this.attr_name()+"]",function(t){var n=o(this).data(r.attr_name(!0)+"-init")||r.settings;(!n.is_hover||Modernizr.touch)&&(t.preventDefault(),o(this).parent("[data-reveal-id]").length&&t.stopPropagation(),r.toggle(e(this)))}).on("mouseenter.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(e){var t,n,i=o(this);clearTimeout(r.timeout),i.data(r.data_attr())?(t=o("#"+i.data(r.data_attr())),n=i):(t=i,n=o("["+r.attr_name()+'="'+t.attr("id")+'"]'));var s=n.data(r.attr_name(!0)+"-init")||r.settings;o(e.currentTarget).data(r.data_attr())&&s.is_hover&&r.closeall.call(r),s.is_hover&&r.open.apply(r,[t,n])}).on("mouseleave.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(e){var t,n=o(this);if(n.data(r.data_attr()))t=n.data(r.data_attr(!0)+"-init")||r.settings;else var i=o("["+r.attr_name()+'="'+o(this).attr("id")+'"]'),t=i.data(r.attr_name(!0)+"-init")||r.settings;r.timeout=setTimeout(function(){n.data(r.data_attr())?t.is_hover&&r.close.call(r,o("#"+n.data(r.data_attr()))):t.is_hover&&r.close.call(r,n)}.bind(this),t.hover_timeout)}).on("click.fndtn.dropdown",function(t){var i=o(t.target).closest("["+r.attr_name()+"-content]"),s=i.find("a");return s.length>0&&"false"!==i.attr("aria-autoclose")&&r.close.call(r,o("["+r.attr_name()+"-content]")),t.target!==n&&!e.contains(n.documentElement,t.target)||o(t.target).closest("["+r.attr_name()+"]").length>0?void 0:!o(t.target).data("revealId")&&i.length>0&&(o(t.target).is("["+r.attr_name()+"-content]")||e.contains(i.first()[0],t.target))?void t.stopPropagation():void r.close.call(r,o("["+r.attr_name()+"-content]"))}).on("opened.fndtn.dropdown","["+r.attr_name()+"-content]",function(){r.settings.opened.call(this)}).on("closed.fndtn.dropdown","["+r.attr_name()+"-content]",function(){r.settings.closed.call(this)}),o(t).off(".dropdown").on("resize.fndtn.dropdown",r.throttle(function(){r.resize.call(r)},50)),this.resize()},close:function(t){var n=this;t.each(function(i){var r=e("["+n.attr_name()+"="+t[i].id+"]")||e("aria-controls="+t[i].id+"]");r.attr("aria-expanded","false"),n.S(this).hasClass(n.settings.active_class)&&(n.S(this).css(Foundation.rtl?"right":"left","-99999px").attr("aria-hidden","true").removeClass(n.settings.active_class).prev("["+n.attr_name()+"]").removeClass(n.settings.active_class).removeData("target"),n.S(this).trigger("closed.fndtn.dropdown",[t]))}),t.removeClass("f-open-"+this.attr_name(!0))},closeall:function(){var t=this;e.each(t.S(".f-open-"+this.attr_name(!0)),function(){t.close.call(t,t.S(this))})},open:function(e,t){this.css(e.addClass(this.settings.active_class),t),e.prev("["+this.attr_name()+"]").addClass(this.settings.active_class),e.data("target",t.get(0)).trigger("opened.fndtn.dropdown",[e,t]),e.attr("aria-hidden","false"),t.attr("aria-expanded","true"),e.focus(),e.addClass("f-open-"+this.attr_name(!0))},data_attr:function(){return this.namespace.length>0?this.namespace+"-"+this.name:this.name},toggle:function(e){if(!e.hasClass(this.settings.disabled_class)){var t=this.S("#"+e.data(this.data_attr()));0!==t.length&&(this.close.call(this,this.S("["+this.attr_name()+"-content]").not(t)),t.hasClass(this.settings.active_class)?(this.close.call(this,t),t.data("target")!==e.get(0)&&this.open.call(this,t,e)):this.open.call(this,t,e))}},resize:function(){var t=this.S("["+this.attr_name()+"-content].open"),n=e(t.data("target"));t.length&&n.length&&this.css(t,n)},css:function(e,t){var n=Math.max((t.width()-e.width())/2,8),i=t.data(this.attr_name(!0)+"-init")||this.settings,r=e.parent().css("overflow-y")||e.parent().css("overflow");if(this.clear_idx(),this.small()){var o=this.dirs.bottom.call(e,t,i);e.attr("style","").removeClass("drop-left drop-right drop-top").css({position:"absolute",width:"95%","max-width":"none",top:o.top}),e.css(Foundation.rtl?"right":"left",n)}else if("visible"!==r){var s=t[0].offsetTop+t[0].offsetHeight;e.attr("style","").css({position:"absolute",top:s}),e.css(Foundation.rtl?"right":"left",n)}else this.style(e,t,i);return e},style:function(t,n,i){var r=e.extend({position:"absolute"},this.dirs[i.align].call(t,n,i));t.attr("style","").css(r)},dirs:{_base:function(e,i){var r=this.offsetParent(),o=r.offset(),s=e.offset();s.top-=o.top,s.left-=o.left,s.missRight=!1,s.missTop=!1,s.missLeft=!1,s.leftRightFlag=!1;var a,l=t.innerWidth;a=n.getElementsByClassName("row")[0]?n.getElementsByClassName("row")[0].clientWidth:l;var d=(l-a)/2,c=a;if(!this.hasClass("mega")&&!i.ignore_repositioning){var u=this.outerWidth(),A=e.offset().left;e.offset().top<=this.outerHeight()&&(s.missTop=!0,c=l-d,s.leftRightFlag=!0),A+u>A+d&&A-d>u&&(s.missRight=!0,s.missLeft=!1),0>=A-u&&(s.missLeft=!0,s.missRight=!1)}return s},top:function(e,t){var n=Foundation.libs.dropdown,i=n.dirs._base.call(this,e,t);return this.addClass("drop-top"),1==i.missTop&&(i.top=i.top+e.outerHeight()+this.outerHeight(),this.removeClass("drop-top")),1==i.missRight&&(i.left=i.left-this.outerWidth()+e.outerWidth()),(e.outerWidth()<this.outerWidth()||n.small()||this.hasClass(t.mega_menu))&&n.adjust_pip(this,e,t,i),Foundation.rtl?{left:i.left-this.outerWidth()+e.outerWidth(),top:i.top-this.outerHeight()}:{left:i.left,top:i.top-this.outerHeight()}},bottom:function(e,t){var n=Foundation.libs.dropdown,i=n.dirs._base.call(this,e,t);return 1==i.missRight&&(i.left=i.left-this.outerWidth()+e.outerWidth()),(e.outerWidth()<this.outerWidth()||n.small()||this.hasClass(t.mega_menu))&&n.adjust_pip(this,e,t,i),n.rtl?{left:i.left-this.outerWidth()+e.outerWidth(),top:i.top+e.outerHeight()}:{left:i.left,top:i.top+e.outerHeight()}},left:function(e,t){var n=Foundation.libs.dropdown.dirs._base.call(this,e,t);return this.addClass("drop-left"),1==n.missLeft&&(n.left=n.left+this.outerWidth(),n.top=n.top+e.outerHeight(),this.removeClass("drop-left")),{left:n.left-this.outerWidth(),top:n.top}},right:function(e,t){var n=Foundation.libs.dropdown.dirs._base.call(this,e,t);this.addClass("drop-right"),1==n.missRight?(n.left=n.left-this.outerWidth(),n.top=n.top+e.outerHeight(),this.removeClass("drop-right")):n.triggeredRight=!0;var i=Foundation.libs.dropdown;return(e.outerWidth()<this.outerWidth()||i.small()||this.hasClass(t.mega_menu))&&i.adjust_pip(this,e,t,n),
{left:n.left+e.outerWidth(),top:n.top}}},adjust_pip:function(e,t,n,i){var r=Foundation.stylesheet,o=8;e.hasClass(n.mega_class)?o=i.left+t.outerWidth()/2-8:this.small()&&(o+=i.left-8),this.rule_idx=r.cssRules.length;var s=".f-dropdown.open:before",a=".f-dropdown.open:after",l="left: "+o+"px;",d="left: "+(o-1)+"px;";1==i.missRight&&(o=e.outerWidth()-23,s=".f-dropdown.open:before",a=".f-dropdown.open:after",l="left: "+o+"px;",d="left: "+(o-1)+"px;"),1==i.triggeredRight&&(s=".f-dropdown.open:before",a=".f-dropdown.open:after",l="left:-12px;",d="left:-14px;"),r.insertRule?(r.insertRule([s,"{",l,"}"].join(" "),this.rule_idx),r.insertRule([a,"{",d,"}"].join(" "),this.rule_idx+1)):(r.addRule(s,l,this.rule_idx),r.addRule(a,d,this.rule_idx+1))},clear_idx:function(){var e=Foundation.stylesheet;"undefined"!=typeof this.rule_idx&&(e.deleteRule(this.rule_idx),e.deleteRule(this.rule_idx),delete this.rule_idx)},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},off:function(){this.S(this.scope).off(".fndtn.dropdown"),this.S("html, body").off(".fndtn.dropdown"),this.S(t).off(".fndtn.dropdown"),this.S("[data-dropdown-content]").off(".fndtn.dropdown")},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.5.3",settings:{use_tallest:!0,before_height_change:e.noop,after_height_change:e.noop,equalize_on_stack:!1,act_on_hidden_el:!1},init:function(e,t,n){Foundation.inherit(this,"image_loaded"),this.bindings(t,n),this.reflow()},events:function(){this.S(t).off(".equalizer").on("resize.fndtn.equalizer",function(e){this.reflow()}.bind(this))},equalize:function(t){var n,i,r=!1,o=t.data("equalizer"),s=t.data(this.attr_name(!0)+"-init")||this.settings;if(n=s.act_on_hidden_el?o?t.find("["+this.attr_name()+'-watch="'+o+'"]'):t.find("["+this.attr_name()+"-watch]"):o?t.find("["+this.attr_name()+'-watch="'+o+'"]:visible'):t.find("["+this.attr_name()+"-watch]:visible"),0!==n.length&&(s.before_height_change(),t.trigger("before-height-change.fndth.equalizer"),n.height("inherit"),s.equalize_on_stack!==!1||(i=n.first().offset().top,n.each(function(){return e(this).offset().top!==i?(r=!0,!1):void 0}),!r))){var a=n.map(function(){return e(this).outerHeight(!1)}).get();if(s.use_tallest){var l=Math.max.apply(null,a);n.css("height",l)}else{var d=Math.min.apply(null,a);n.css("height",d)}s.after_height_change(),t.trigger("after-height-change.fndtn.equalizer")}},reflow:function(){var t=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){var n=e(this),i=n.data("equalizer-mq"),r=!0;i&&(i="is_"+i.replace(/-/g,"_"),Foundation.utils.hasOwnProperty(i)&&(r=!1)),t.image_loaded(t.S("img",this),function(){if(r||Foundation.utils[i]())t.equalize(n);else{var e=n.find("["+t.attr_name()+"-watch]:visible");e.css("height","auto")}})})}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.interchange={name:"interchange",version:"5.5.3",cache:{},images_loaded:!1,nodes_loaded:!1,settings:{load_attr:"interchange",named_queries:{"default":"only screen",small:Foundation.media_queries.small,"small-only":Foundation.media_queries["small-only"],medium:Foundation.media_queries.medium,"medium-only":Foundation.media_queries["medium-only"],large:Foundation.media_queries.large,"large-only":Foundation.media_queries["large-only"],xlarge:Foundation.media_queries.xlarge,"xlarge-only":Foundation.media_queries["xlarge-only"],xxlarge:Foundation.media_queries.xxlarge,landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(t,n,i){if(null!==t&&/IMG/.test(t[0].nodeName)){var r=e.each(t,function(){this.src=n});if(new RegExp(n,"i").test(r))return;return t.attr("src",n),i(t[0].src)}var o=t.data(this.data_attr+"-last-path"),s=this;if(o!=n)return/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(n)?(e(t).css("background-image","url("+n+")"),t.data("interchange-last-path",n),i(n)):e.get(n,function(e){t.html(e),t.data(s.data_attr+"-last-path",n),i()})}}},init:function(t,n,i){Foundation.inherit(this,"throttle random_str"),this.data_attr=this.set_data_attr(),e.extend(!0,this.settings,n,i),this.bindings(n,i),this.reflow()},get_media_hash:function(){var e="";for(var t in this.settings.named_queries)e+=matchMedia(this.settings.named_queries[t]).matches.toString();return e},events:function(){var n,i=this;return e(t).off(".interchange").on("resize.fndtn.interchange",i.throttle(function(){var e=i.get_media_hash();e!==n&&i.resize(),n=e},50)),this},resize:function(){var t=this.cache;if(!this.images_loaded||!this.nodes_loaded)return void setTimeout(e.proxy(this.resize,this),50);for(var n in t)if(t.hasOwnProperty(n)){var i=this.results(n,t[n]);i&&this.settings.directives[i.scenario[1]].call(this,i.el,i.scenario[0],function(e){if(arguments[0]instanceof Array)var t=arguments[0];else var t=Array.prototype.slice.call(arguments,0);return function(){e.el.trigger(e.scenario[1],t)}}(i))}},results:function(e,t){var n=t.length;if(n>0)for(var i=this.S("["+this.add_namespace("data-uuid")+'="'+e+'"]');n--;){var r,o=t[n][2];if(r=this.settings.named_queries.hasOwnProperty(o)?matchMedia(this.settings.named_queries[o]):matchMedia(o),r.matches)return{el:i,scenario:t[n]}}return!1},load:function(e,t){return("undefined"==typeof this["cached_"+e]||t)&&this["update_"+e](),this["cached_"+e]},update_images:function(){var e=this.S("img["+this.data_attr+"]"),t=e.length,n=t,i=0,r=this.data_attr;for(this.cache={},this.cached_images=[],this.images_loaded=0===t;n--;){if(i++,e[n]){var o=e[n].getAttribute(r)||"";o.length>0&&this.cached_images.push(e[n])}i===t&&(this.images_loaded=!0,this.enhance("images"))}return this},update_nodes:function(){var e=this.S("["+this.data_attr+"]").not("img"),t=e.length,n=t,i=0,r=this.data_attr;for(this.cached_nodes=[],this.nodes_loaded=0===t;n--;){i++;var o=e[n].getAttribute(r)||"";o.length>0&&this.cached_nodes.push(e[n]),i===t&&(this.nodes_loaded=!0,this.enhance("nodes"))}return this},enhance:function(n){for(var i=this["cached_"+n].length;i--;)this.object(e(this["cached_"+n][i]));return e(t).trigger("resize.fndtn.interchange")},convert_directive:function(e){var t=this.trim(e);return t.length>0?t:"replace"},parse_scenario:function(e){var t=e[0].match(/(.+),\s*(\w+)\s*$/),n=e[1].match(/(.*)\)/);if(t)var i=t[1],r=t[2];else var o=e[0].split(/,\s*$/),i=o[0],r="";return[this.trim(i),this.convert_directive(r),this.trim(n[1])]},object:function(e){var t=this.parse_data_attr(e),n=[],i=t.length;if(i>0)for(;i--;){var r=t[i].split(/,\s?\(/);if(r.length>1){var o=this.parse_scenario(r);n.push(o)}}return this.store(e,n)},store:function(e,t){var n=this.random_str(),i=e.data(this.add_namespace("uuid",!0));return this.cache[i]?this.cache[i]:(e.attr(this.add_namespace("data-uuid"),n),this.cache[n]=t)},trim:function(t){return"string"==typeof t?e.trim(t):t},set_data_attr:function(e){return e?this.namespace.length>0?this.namespace+"-"+this.settings.load_attr:this.settings.load_attr:this.namespace.length>0?"data-"+this.namespace+"-"+this.settings.load_attr:"data-"+this.settings.load_attr},parse_data_attr:function(e){for(var t=e.attr(this.attr_name()).split(/\[(.*?)\]/),n=t.length,i=[];n--;)t[n].replace(/[\W\d]+/,"").length>4&&i.push(t[n]);return i},reflow:function(){this.load("images",!0),this.load("nodes",!0)}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.joyride={name:"joyride",version:"5.5.3",defaults:{expose:!1,modal:!0,keyboard:!0,tip_location:"bottom",nub_position:"auto",scroll_speed:1500,scroll_animation:"linear",timer:0,start_timer_on_click:!0,start_offset:0,next_button:!0,prev_button:!0,tip_animation:"fade",pause_after:[],exposed:[],tip_animation_fade_speed:300,cookie_monster:!1,cookie_name:"joyride",cookie_domain:!1,cookie_expires:365,tip_container:"body",abort_on_close:!0,tip_location_patterns:{top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},post_ride_callback:function(){},post_step_callback:function(){},pre_step_callback:function(){},pre_ride_callback:function(){},post_expose_callback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>',prev_button:'<a href="#" class="small button joyride-prev-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',expose_cover:'<div class="joyride-expose-cover"></div>'},expose_add_class:""},init:function(t,n,i){Foundation.inherit(this,"throttle random_str"),this.settings=this.settings||e.extend({},this.defaults,i||n),this.bindings(n,i)},go_next:function(){this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())},go_prev:function(){this.settings.$li.prev().length<1||(this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(null,!0),this.startTimer()):(this.hide(),this.show(null,!0)))},events:function(){var n=this;e(this.scope).off(".joyride").on("click.fndtn.joyride",".joyride-next-tip, .joyride-modal-bg",function(e){e.preventDefault(),this.go_next()}.bind(this)).on("click.fndtn.joyride",".joyride-prev-tip",function(e){e.preventDefault(),this.go_prev()}.bind(this)).on("click.fndtn.joyride",".joyride-close-tip",function(e){e.preventDefault(),this.end(this.settings.abort_on_close)}.bind(this)).on("keyup.fndtn.joyride",function(e){if(this.settings.keyboard&&this.settings.riding)switch(e.which){case 39:e.preventDefault(),this.go_next();break;case 37:e.preventDefault(),this.go_prev();break;case 27:e.preventDefault(),this.end(this.settings.abort_on_close)}}.bind(this)),e(t).off(".joyride").on("resize.fndtn.joyride",n.throttle(function(){if(e("["+n.attr_name()+"]").length>0&&n.settings.$next_tip&&n.settings.riding){if(n.settings.exposed.length>0){var t=e(n.settings.exposed);t.each(function(){var t=e(this);n.un_expose(t),n.expose(t)})}n.is_phone()?n.pos_phone():n.pos_default(!1)}},100))},start:function(){var t=this,n=e("["+this.attr_name()+"]",this.scope),i=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],r=i.length;!n.length>0||(this.settings.init||this.events(),this.settings=n.data(this.attr_name(!0)+"-init"),this.settings.$content_el=n,this.settings.$body=e(this.settings.tip_container),this.settings.body_offset=e(this.settings.tip_container).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,this.settings.riding=!0,"function"!=typeof e.cookie&&(this.settings.cookie_monster=!1),(!this.settings.cookie_monster||this.settings.cookie_monster&&!e.cookie(this.settings.cookie_name))&&(this.settings.$tip_content.each(function(n){var o=e(this);this.settings=e.extend({},t.defaults,t.data_options(o));for(var s=r;s--;)t.settings[i[s]]=parseInt(t.settings[i[s]],10);t.create({$li:o,index:n})}),!this.settings.start_timer_on_click&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init")))},resume:function(){this.set_li(),this.show()},tip_template:function(t){var n,i;return t.tip_class=t.tip_class||"",n=e(this.settings.template.tip).addClass(t.tip_class),i=e.trim(e(t.li).html())+this.prev_button_text(t.prev_button_text,t.index)+this.button_text(t.button_text)+this.settings.template.link+this.timer_instance(t.index),n.append(e(this.settings.template.wrapper)),n.first().attr(this.add_namespace("data-index"),t.index),e(".joyride-content-wrapper",n).append(i),n[0]},timer_instance:function(t){var n;return n=0===t&&this.settings.start_timer_on_click&&this.settings.timer>0||0===this.settings.timer?"":e(this.settings.template.timer)[0].outerHTML},button_text:function(t){return this.settings.tip_settings.next_button?(t=e.trim(t)||"Next",t=e(this.settings.template.button).append(t)[0].outerHTML):t="",t},prev_button_text:function(t,n){return this.settings.tip_settings.prev_button?(t=e.trim(t)||"Previous",t=0==n?e(this.settings.template.prev_button).append(t).addClass("disabled")[0].outerHTML:e(this.settings.template.prev_button).append(t)[0].outerHTML):t="",t},create:function(t){this.settings.tip_settings=e.extend({},this.settings,this.data_options(t.$li));var n=t.$li.attr(this.add_namespace("data-button"))||t.$li.attr(this.add_namespace("data-text")),i=t.$li.attr(this.add_namespace("data-button-prev"))||t.$li.attr(this.add_namespace("data-prev-text")),r=t.$li.attr("class"),o=e(this.tip_template({tip_class:r,index:t.index,button_text:n,prev_button_text:i,li:t.$li}));e(this.settings.tip_container).append(o)},show:function(t,n){var r=null;if(this.settings.$li===i||-1===e.inArray(this.settings.$li.index(),this.settings.pause_after))if(this.settings.paused?this.settings.paused=!1:this.set_li(t,n),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0){if(t&&(this.settings.pre_ride_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.pre_step_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tip_settings=e.extend({},this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tip_settings.tip_location_pattern=this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],!/body/i.test(this.settings.$target.selector)&&!this.settings.expose){var o=e(".joyride-modal-bg");/pop/i.test(this.settings.tipAnimation)?o.hide():o.fadeOut(this.settings.tipAnimationFadeSpeed),this.scroll_to()}this.is_phone()?this.pos_phone(!0):this.pos_default(!0),r=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tip_animation)?(r.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),setTimeout(function(){r.animate({width:r.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tip_animation)&&(r.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),setTimeout(function(){r.animate({width:r.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),this.settings.$current_tip=this.settings.$next_tip}else this.settings.$li&&this.settings.$target.length<1?this.show(t,n):this.end();else this.settings.paused=!0},is_phone:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.modal||e(".joyride-modal-bg").hide(),this.settings.$current_tip.css("visibility","hidden"),setTimeout(e.proxy(function(){this.hide(),this.css("visibility","visible")},this.settings.$current_tip),0),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(e,t){e?(this.settings.$li=this.settings.$tip_content.eq(this.settings.start_offset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(t?this.settings.$li=this.settings.$li.prev():this.settings.$li=this.settings.$li.next(),this.set_next_tip()),this.set_target()},set_next_tip:function(){this.settings.$next_tip=e(".joyride-tip-guide").eq(this.settings.$li.index()),this.settings.$next_tip.data("closed","")},set_target:function(){var t=this.settings.$li.attr(this.add_namespace("data-class")),i=this.settings.$li.attr(this.add_namespace("data-id")),r=function(){return i?e(n.getElementById(i)):t?e("."+t).first():e("body")};this.settings.$target=r()},scroll_to:function(){var n,i;n=e(t).height()/2,i=Math.ceil(this.settings.$target.offset().top-n+this.settings.$next_tip.outerHeight()),0!=i&&e("html, body").stop().animate({scrollTop:i},this.settings.scroll_speed,"swing")},paused:function(){return-1===e.inArray(this.settings.$li.index()+1,this.settings.pause_after)},restart:function(){this.hide(),this.settings.$li=i,this.show("init")},pos_default:function(e){var t=this.settings.$next_tip.find(".joyride-nub"),n=Math.ceil(t.outerWidth()/2),i=Math.ceil(t.outerHeight()/2),r=e||!1;if(r&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector))this.settings.$li.length&&this.pos_modal(t);else{var o=this.settings.tip_settings.tipAdjustmentY?parseInt(this.settings.tip_settings.tipAdjustmentY):0,s=this.settings.tip_settings.tipAdjustmentX?parseInt(this.settings.tip_settings.tipAdjustmentX):0;this.bottom()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top+i+this.settings.$target.outerHeight()+o,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()+s}):this.settings.$next_tip.css({top:this.settings.$target.offset().top+i+this.settings.$target.outerHeight()+o,left:this.settings.$target.offset().left+s}),this.nub_position(t,this.settings.tip_settings.nub_position,"top")):this.top()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-i+o,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}):this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-i+o,left:this.settings.$target.offset().left+s}),this.nub_position(t,this.settings.tip_settings.nub_position,"bottom")):this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top+o,left:this.settings.$target.outerWidth()+this.settings.$target.offset().left+n+s}),this.nub_position(t,this.settings.tip_settings.nub_position,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top+o,left:this.settings.$target.offset().left-this.settings.$next_tip.outerWidth()-n+s}),this.nub_position(t,this.settings.tip_settings.nub_position,"right")),!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tip_settings.tip_location_pattern.length&&(t.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tip_settings.tip_location=this.settings.tip_settings.tip_location_pattern[this.settings.attempts],this.settings.attempts++,this.pos_default())}r&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(t){var n=this.settings.$next_tip.outerHeight(),i=(this.settings.$next_tip.offset(),this.settings.$target.outerHeight()),r=e(".joyride-nub",this.settings.$next_tip),o=Math.ceil(r.outerHeight()/2),s=t||!1;r.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),s&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(r):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top-n-o}),r.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+i+o}),r.addClass("top")),s&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(e){this.center(),e.hide(),this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var t=e(".joyride-modal-bg");if(t.length<1){var t=e(this.settings.template.modal);t.appendTo("body")}/pop/i.test(this.settings.tip_animation)?t.show():t.fadeIn(this.settings.tip_animation_fade_speed)}},expose:function(){var n,i,r,o,s,a="expose-"+this.random_str(6);if(arguments.length>0&&arguments[0]instanceof e)r=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;r=this.settings.$target}return r.length<1?(t.console&&console.error("element not valid",r),!1):(n=e(this.settings.template.expose),this.settings.$body.append(n),n.css({top:r.offset().top,left:r.offset().left,width:r.outerWidth(!0),height:r.outerHeight(!0)}),i=e(this.settings.template.expose_cover),o={zIndex:r.css("z-index"),position:r.css("position")},s=null==r.attr("class")?"":r.attr("class"),r.css("z-index",parseInt(n.css("z-index"))+1),"static"==o.position&&r.css("position","relative"),r.data("expose-css",o),r.data("orig-class",s),r.attr("class",s+" "+this.settings.expose_add_class),i.css({top:r.offset().top,left:r.offset().left,width:r.outerWidth(!0),height:r.outerHeight(!0)}),this.settings.modal&&this.show_modal(),this.settings.$body.append(i),n.addClass(a),i.addClass(a),r.data("expose",a),this.settings.post_expose_callback(this.settings.$li.index(),this.settings.$next_tip,r),void this.add_exposed(r))},un_expose:function(){var n,i,r,o,s,a=!1;if(arguments.length>0&&arguments[0]instanceof e)i=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;i=this.settings.$target}return i.length<1?(t.console&&console.error("element not valid",i),!1):(n=i.data("expose"),r=e("."+n),arguments.length>1&&(a=arguments[1]),a===!0?e(".joyride-expose-wrapper,.joyride-expose-cover").remove():r.remove(),o=i.data("expose-css"),"auto"==o.zIndex?i.css("z-index",""):i.css("z-index",o.zIndex),o.position!=i.css("position")&&("static"==o.position?i.css("position",""):i.css("position",o.position)),s=i.data("orig-class"),i.attr("class",s),i.removeData("orig-classes"),i.removeData("expose"),i.removeData("expose-z-index"),void this.remove_exposed(i))},add_exposed:function(t){this.settings.exposed=this.settings.exposed||[],t instanceof e||"object"==typeof t?this.settings.exposed.push(t[0]):"string"==typeof t&&this.settings.exposed.push(t)},remove_exposed:function(t){var n,i;for(t instanceof e?n=t[0]:"string"==typeof t&&(n=t),this.settings.exposed=this.settings.exposed||[],i=this.settings.exposed.length;i--;)if(this.settings.exposed[i]==n)return void this.settings.exposed.splice(i,1)},center:function(){var n=e(t);return this.settings.$next_tip.css({top:(n.height()-this.settings.$next_tip.outerHeight())/2+n.scrollTop(),left:(n.width()-this.settings.$next_tip.outerWidth())/2+n.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(this.settings.tip_settings.tip_location)},top:function(){return/top/i.test(this.settings.tip_settings.tip_location)},right:function(){return/right/i.test(this.settings.tip_settings.tip_location)},left:function(){return/left/i.test(this.settings.tip_settings.tip_location)},corners:function(n){if(0===n.length)return[!1,!1,!1,!1];var i=e(t),r=i.height()/2,o=Math.ceil(this.settings.$target.offset().top-r+this.settings.$next_tip.outerHeight()),s=i.width()+i.scrollLeft(),a=i.height()+o,l=i.height()+i.scrollTop(),d=i.scrollTop();return d>o&&(d=0>o?0:o),a>l&&(l=a),[n.offset().top<d,s<n.offset().left+n.outerWidth(),l<n.offset().top+n.outerHeight(),i.scrollLeft()>n.offset().left]},visible:function(e){for(var t=e.length;t--;)if(e[t])return!1;return!0},nub_position:function(e,t,n){"auto"===t?e.addClass(n):e.addClass(t)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide(),this.show(),this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(t){this.settings.cookie_monster&&e.cookie(this.settings.cookie_name,"ridden",{expires:this.settings.cookie_expires,domain:this.settings.cookie_domain}),this.settings.timer>0&&clearTimeout(this.settings.automate),this.settings.modal&&this.settings.expose&&this.un_expose(),e(this.scope).off("keyup.joyride"),this.settings.$next_tip.data("closed",!0),this.settings.riding=!1,e(".joyride-modal-bg").hide(),this.settings.$current_tip.hide(),("undefined"==typeof t||t===!1)&&(this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip),this.settings.post_ride_callback(this.settings.$li.index(),this.settings.$current_tip)),e(".joyride-tip-guide").remove()},off:function(){e(this.scope).off(".joyride"),e(t).off(".joyride"),e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),e(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(this.settings.automate)},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs["magellan-expedition"]={name:"magellan-expedition",version:"5.5.3",settings:{active_class:"active",threshold:0,destination_threshold:20,throttle_delay:30,fixed_top:0,offset_by_height:!0,duration:700,easing:"swing"},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.bindings(t,n)},events:function(){var t=this,n=t.S,i=t.settings;t.set_expedition_position(),n(t.scope).off(".magellan").on("click.fndtn.magellan","["+t.add_namespace("data-magellan-arrival")+"] a[href*=#]",function(n){var i=this.hostname===location.hostname||!this.hostname,r=t.filterPathname(location.pathname)===t.filterPathname(this.pathname),o=this.hash.replace(/(:|\.|\/)/g,"\\$1"),s=this;if(i&&r&&o){n.preventDefault();var a=e(this).closest("["+t.attr_name()+"]"),l=a.data("magellan-expedition-init"),d=this.hash.split("#").join(""),c=e('a[name="'+d+'"]');0===c.length&&(c=e("#"+d));var u=c.offset().top-l.destination_threshold+1;l.offset_by_height&&(u-=a.outerHeight()),e("html, body").stop().animate({scrollTop:u},l.duration,l.easing,function(){history.pushState?history.pushState(null,null,s.pathname+s.search+"#"+d):location.hash=s.pathname+s.search+"#"+d})}}).on("scroll.fndtn.magellan",t.throttle(this.check_for_arrivals.bind(this),i.throttle_delay))},check_for_arrivals:function(){var e=this;e.update_arrivals(),e.update_expedition_positions()},set_expedition_position:function(){var t=this;e("["+this.attr_name()+"=fixed]",t.scope).each(function(n,i){var r,o,s=e(this),a=s.data("magellan-expedition-init"),l=s.attr("styles");s.attr("style",""),r=s.offset().top+a.threshold,o=parseInt(s.data("magellan-fixed-top")),isNaN(o)||(t.settings.fixed_top=o),s.data(t.data_attr("magellan-top-offset"),r),s.attr("style",l)})},update_expedition_positions:function(){var n=this,i=e(t).scrollTop();e("["+this.attr_name()+"=fixed]",n.scope).each(function(){var t=e(this),r=t.data("magellan-expedition-init"),o=t.attr("style"),s=t.data("magellan-top-offset");if(i+n.settings.fixed_top>=s){var a=t.prev("["+n.add_namespace("data-magellan-expedition-clone")+"]");0===a.length&&(a=t.clone(),a.removeAttr(n.attr_name()),a.attr(n.add_namespace("data-magellan-expedition-clone"),""),t.before(a)),t.css({position:"fixed",top:r.fixed_top}).addClass("fixed")}else t.prev("["+n.add_namespace("data-magellan-expedition-clone")+"]").remove(),t.attr("style",o).css("position","").css("top","").removeClass("fixed")})},update_arrivals:function(){var n=this,i=e(t).scrollTop();e("["+this.attr_name()+"]",n.scope).each(function(){var t=e(this),r=t.data(n.attr_name(!0)+"-init"),o=n.offsets(t,i),s=t.find("["+n.add_namespace("data-magellan-arrival")+"]"),a=!1;o.each(function(e,i){if(i.viewport_offset>=i.top_offset){var o=t.find("["+n.add_namespace("data-magellan-arrival")+"]");return o.not(i.arrival).removeClass(r.active_class),i.arrival.addClass(r.active_class),a=!0,!0}}),a||s.removeClass(r.active_class)})},offsets:function(t,n){var i=this,r=t.data(i.attr_name(!0)+"-init"),o=n;return t.find("["+i.add_namespace("data-magellan-arrival")+"]").map(function(n,s){var a=e(this).data(i.data_attr("magellan-arrival")),l=e("["+i.add_namespace("data-magellan-destination")+"="+a+"]");if(l.length>0){var d=l.offset().top-r.destination_threshold;return r.offset_by_height&&(d-=t.outerHeight()),d=Math.floor(d),{destination:l,arrival:e(this),top_offset:d,viewport_offset:o}}}).sort(function(e,t){return e.top_offset<t.top_offset?-1:e.top_offset>t.top_offset?1:0})},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},off:function(){this.S(this.scope).off(".magellan"),this.S(t).off(".magellan")},filterPathname:function(e){return e=e||"",e.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},reflow:function(){var t=this;e("["+t.add_namespace("data-magellan-expedition-clone")+"]",t.scope).remove()}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.offcanvas={name:"offcanvas",version:"5.5.3",settings:{open_method:"move",close_on_click:!1},init:function(e,t,n){this.bindings(t,n)},events:function(){var t=this,n=t.S,i="",r="",o="",s="",a="";"move"===this.settings.open_method?(i="move-",r="right",o="left",s="top",a="bottom"):"overlap_single"===this.settings.open_method?(i="offcanvas-overlap-",r="right",o="left",s="top",a="bottom"):"overlap"===this.settings.open_method&&(i="offcanvas-overlap"),n(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",".left-off-canvas-toggle",function(o){t.click_toggle_class(o,i+r),"overlap"!==t.settings.open_method&&n(".left-submenu").removeClass(i+r),e(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".left-off-canvas-menu a",function(o){var s=t.get_settings(o),a=n(this).parent();!s.close_on_click||a.hasClass("has-submenu")||a.hasClass("back")?n(this).parent().hasClass("has-submenu")?(o.preventDefault(),n(this).siblings(".left-submenu").toggleClass(i+r)):a.hasClass("back")&&(o.preventDefault(),a.parent().removeClass(i+r)):(t.hide.call(t,i+r,t.get_wrapper(o)),a.parent().removeClass(i+r)),e(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-toggle",function(r){t.click_toggle_class(r,i+o),"overlap"!==t.settings.open_method&&n(".right-submenu").removeClass(i+o),e(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-menu a",function(r){var s=t.get_settings(r),a=n(this).parent();!s.close_on_click||a.hasClass("has-submenu")||a.hasClass("back")?n(this).parent().hasClass("has-submenu")?(r.preventDefault(),n(this).siblings(".right-submenu").toggleClass(i+o)):a.hasClass("back")&&(r.preventDefault(),a.parent().removeClass(i+o)):(t.hide.call(t,i+o,t.get_wrapper(r)),a.parent().removeClass(i+o)),e(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".top-off-canvas-toggle",function(r){t.click_toggle_class(r,i+a),"overlap"!==t.settings.open_method&&n(".top-submenu").removeClass(i+a),e(".top-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".top-off-canvas-menu a",function(r){var o=t.get_settings(r),s=n(this).parent();!o.close_on_click||s.hasClass("has-submenu")||s.hasClass("back")?n(this).parent().hasClass("has-submenu")?(r.preventDefault(),n(this).siblings(".top-submenu").toggleClass(i+a)):s.hasClass("back")&&(r.preventDefault(),s.parent().removeClass(i+a)):(t.hide.call(t,i+a,t.get_wrapper(r)),s.parent().removeClass(i+a)),e(".top-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".bottom-off-canvas-toggle",function(r){t.click_toggle_class(r,i+s),"overlap"!==t.settings.open_method&&n(".bottom-submenu").removeClass(i+s),e(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".bottom-off-canvas-menu a",function(r){var o=t.get_settings(r),a=n(this).parent();!o.close_on_click||a.hasClass("has-submenu")||a.hasClass("back")?n(this).parent().hasClass("has-submenu")?(r.preventDefault(),n(this).siblings(".bottom-submenu").toggleClass(i+s)):a.hasClass("back")&&(r.preventDefault(),a.parent().removeClass(i+s)):(t.hide.call(t,i+s,t.get_wrapper(r)),a.parent().removeClass(i+s)),e(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(s){t.click_remove_class(s,i+o),n(".right-submenu").removeClass(i+o),r&&(t.click_remove_class(s,i+r),n(".left-submenu").removeClass(i+o)),e(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(n){t.click_remove_class(n,i+o),e(".left-off-canvas-toggle").attr("aria-expanded","false"),r&&(t.click_remove_class(n,i+r),e(".right-off-canvas-toggle").attr("aria-expanded","false"))}).on("click.fndtn.offcanvas",".exit-off-canvas",function(r){t.click_remove_class(r,i+s),n(".bottom-submenu").removeClass(i+s),a&&(t.click_remove_class(r,i+a),n(".top-submenu").removeClass(i+s)),
e(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(n){t.click_remove_class(n,i+s),e(".top-off-canvas-toggle").attr("aria-expanded","false"),a&&(t.click_remove_class(n,i+a),e(".bottom-off-canvas-toggle").attr("aria-expanded","false"))})},toggle:function(e,t){t=t||this.get_wrapper(),t.is("."+e)?this.hide(e,t):this.show(e,t)},show:function(e,t){t=t||this.get_wrapper(),t.trigger("open.fndtn.offcanvas"),t.addClass(e)},hide:function(e,t){t=t||this.get_wrapper(),t.trigger("close.fndtn.offcanvas"),t.removeClass(e)},click_toggle_class:function(e,t){e.preventDefault();var n=this.get_wrapper(e);this.toggle(t,n)},click_remove_class:function(e,t){e.preventDefault();var n=this.get_wrapper(e);this.hide(t,n)},get_settings:function(e){var t=this.S(e.target).closest("["+this.attr_name()+"]");return t.data(this.attr_name(!0)+"-init")||this.settings},get_wrapper:function(e){var t=this.S(e?e.target:this.scope).closest(".off-canvas-wrap");return 0===t.length&&(t=this.S(".off-canvas-wrap")),t},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";var r=function(){},o=function(r,o){if(r.hasClass(o.slides_container_class))return this;var d,c,u,A,p,h,f=this,g=r,m=0,v=!1;f.slides=function(){return g.children(o.slide_selector)},f.slides().first().addClass(o.active_slide_class),f.update_slide_number=function(t){o.slide_number&&(c.find("span:first").text(parseInt(t)+1),c.find("span:last").text(f.slides().length)),o.bullets&&(u.children().removeClass(o.bullets_active_class),e(u.children().get(t)).addClass(o.bullets_active_class))},f.update_active_link=function(t){var n=e('[data-orbit-link="'+f.slides().eq(t).attr("data-orbit-slide")+'"]');n.siblings().removeClass(o.bullets_active_class),n.addClass(o.bullets_active_class)},f.build_markup=function(){g.wrap('<div class="'+o.container_class+'"></div>'),d=g.parent(),g.addClass(o.slides_container_class),o.stack_on_small&&d.addClass(o.stack_on_small_class),o.navigation_arrows&&(d.append(e('<a href="#"><span></span></a>').addClass(o.prev_class)),d.append(e('<a href="#"><span></span></a>').addClass(o.next_class))),o.timer&&(A=e("<div>").addClass(o.timer_container_class),A.append("<span>"),A.append(e("<div>").addClass(o.timer_progress_class)),A.addClass(o.timer_paused_class),d.append(A)),o.slide_number&&(c=e("<div>").addClass(o.slide_number_class),c.append("<span></span> "+o.slide_number_text+" <span></span>"),d.append(c)),o.bullets&&(u=e("<ol>").addClass(o.bullets_container_class),d.append(u),u.wrap('<div class="orbit-bullets-container"></div>'),f.slides().each(function(t,n){var i=e("<li>").attr("data-orbit-slide",t).on("click",f.link_bullet);u.append(i)}))},f._goto=function(t,n){if(t===m)return!1;"object"==typeof h&&h.restart();var i=f.slides(),r="next";if(v=!0,m>t&&(r="prev"),t>=i.length){if(!o.circular)return!1;t=0}else if(0>t){if(!o.circular)return!1;t=i.length-1}var s=e(i.get(m)),a=e(i.get(t));s.css("zIndex",2),s.removeClass(o.active_slide_class),a.css("zIndex",4).addClass(o.active_slide_class),g.trigger("before-slide-change.fndtn.orbit"),o.before_slide_change(),f.update_active_link(t);var l=function(){var e=function(){m=t,v=!1,n===!0&&(h=f.create_timer(),h.start()),f.update_slide_number(m),g.trigger("after-slide-change.fndtn.orbit",[{slide_number:m,total_slides:i.length}]),o.after_slide_change(m,i.length)};g.outerHeight()!=a.outerHeight()&&o.variable_height?g.animate({height:a.outerHeight()},250,"linear",e):e()};if(1===i.length)return l(),!1;var d=function(){"next"===r&&p.next(s,a,l),"prev"===r&&p.prev(s,a,l)};a.outerHeight()>g.outerHeight()&&o.variable_height?g.animate({height:a.outerHeight()},250,"linear",d):d()},f.next=function(e){e.stopImmediatePropagation(),e.preventDefault(),f._goto(m+1)},f.prev=function(e){e.stopImmediatePropagation(),e.preventDefault(),f._goto(m-1)},f.link_custom=function(t){t.preventDefault();var n=e(this).attr("data-orbit-link");if("string"==typeof n&&""!=(n=e.trim(n))){var i=d.find("[data-orbit-slide="+n+"]");-1!=i.index()&&f._goto(i.index())}},f.link_bullet=function(t){var n=e(this).attr("data-orbit-slide");if("string"==typeof n&&""!=(n=e.trim(n)))if(isNaN(parseInt(n))){var i=d.find("[data-orbit-slide="+n+"]");-1!=i.index()&&f._goto(i.index()+1)}else f._goto(parseInt(n))},f.timer_callback=function(){f._goto(m+1,!0)},f.compute_dimensions=function(){var t=e(f.slides().get(m)),n=t.outerHeight();o.variable_height||f.slides().each(function(){e(this).outerHeight()>n&&(n=e(this).outerHeight())}),g.height(n)},f.create_timer=function(){var e=new s(d.find("."+o.timer_container_class),o,f.timer_callback);return e},f.stop_timer=function(){"object"==typeof h&&h.stop()},f.toggle_timer=function(){var e=d.find("."+o.timer_container_class);e.hasClass(o.timer_paused_class)?("undefined"==typeof h&&(h=f.create_timer()),h.start()):"object"==typeof h&&h.stop()},f.init=function(){f.build_markup(),o.timer&&(h=f.create_timer(),Foundation.utils.image_loaded(this.slides().children("img"),h.start)),p=new l(o,g),"slide"===o.animation&&(p=new a(o,g)),d.on("click","."+o.next_class,f.next),d.on("click","."+o.prev_class,f.prev),o.next_on_click&&d.on("click","."+o.slides_container_class+" [data-orbit-slide]",f.link_bullet),d.on("click",f.toggle_timer),o.swipe&&d.on("touchstart.fndtn.orbit",function(e){e.touches||(e=e.originalEvent);var t={start_page_x:e.touches[0].pageX,start_page_y:e.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:i};d.data("swipe-transition",t),e.stopPropagation()}).on("touchmove.fndtn.orbit",function(e){if(e.touches||(e=e.originalEvent),!(e.touches.length>1||e.scale&&1!==e.scale)){var t=d.data("swipe-transition");if("undefined"==typeof t&&(t={}),t.delta_x=e.touches[0].pageX-t.start_page_x,"undefined"==typeof t.is_scrolling&&(t.is_scrolling=!!(t.is_scrolling||Math.abs(t.delta_x)<Math.abs(e.touches[0].pageY-t.start_page_y))),!t.is_scrolling&&!t.active){e.preventDefault();var n=t.delta_x<0?m+1:m-1;t.active=!0,f._goto(n)}}}).on("touchend.fndtn.orbit",function(e){d.data("swipe-transition",{}),e.stopPropagation()}),d.on("mouseenter.fndtn.orbit",function(e){o.timer&&o.pause_on_hover&&f.stop_timer()}).on("mouseleave.fndtn.orbit",function(e){o.timer&&o.resume_on_mouseout&&h.start()}),e(n).on("click","[data-orbit-link]",f.link_custom),e(t).on("load resize",f.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),f.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),function(){d.prev("."+o.preloader_class).css("display","none"),f.update_slide_number(0),f.update_active_link(0),g.trigger("ready.fndtn.orbit")})},f.init()},s=function(e,t,n){var i,r,o=this,s=t.timer_speed,a=e.find("."+t.timer_progress_class),l=-1;this.update_progress=function(e){var t=a.clone();t.attr("style",""),t.css("width",e+"%"),a.replaceWith(t),a=t},this.restart=function(){clearTimeout(r),e.addClass(t.timer_paused_class),l=-1,o.update_progress(0)},this.start=function(){return e.hasClass(t.timer_paused_class)?(l=-1===l?s:l,e.removeClass(t.timer_paused_class),i=(new Date).getTime(),a.animate({width:"100%"},l,"linear"),r=setTimeout(function(){o.restart(),n()},l),void e.trigger("timer-started.fndtn.orbit")):!0},this.stop=function(){if(e.hasClass(t.timer_paused_class))return!0;clearTimeout(r),e.addClass(t.timer_paused_class);var n=(new Date).getTime();l-=n-i;var a=100-l/s*100;o.update_progress(a),e.trigger("timer-stopped.fndtn.orbit")}},a=function(t,n){var i=t.animation_speed,r=1===e("html[dir=rtl]").length,o=r?"marginRight":"marginLeft",s={};s[o]="0%",this.next=function(e,t,n){e.animate({marginLeft:"-100%"},i),t.animate(s,i,function(){e.css(o,"100%"),n()})},this.prev=function(e,t,n){e.animate({marginLeft:"100%"},i),t.css(o,"-100%"),t.animate(s,i,function(){e.css(o,"100%"),n()})}},l=function(t,n){var i=t.animation_speed;1===e("html[dir=rtl]").length;this.next=function(e,t,n){t.css({margin:"0%",opacity:"0.01"}),t.animate({opacity:"1"},i,"linear",function(){e.css("margin","100%"),n()})},this.prev=function(e,t,n){t.css({margin:"0%",opacity:"0.01"}),t.animate({opacity:"1"},i,"linear",function(){e.css("margin","100%"),n()})}};Foundation.libs=Foundation.libs||{},Foundation.libs.orbit={name:"orbit",version:"5.5.3",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:!0,resume_on_mouseout:!1,next_on_click:!0,animation_speed:500,stack_on_small:!1,navigation_arrows:!0,slide_number:!0,slide_number_text:"of",container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",preloader_class:"preloader",slide_selector:"*",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:!0,circular:!0,timer:!0,variable_height:!1,swipe:!0,before_slide_change:r,after_slide_change:r},init:function(e,t,n){this.bindings(t,n)},events:function(e){var t=new o(this.S(e),this.S(e).data("orbit-init"));this.S(e).data(this.name+"-instance",t)},reflow:function(){var e=this;if(e.S(e.scope).is("[data-orbit]")){var t=e.S(e.scope),n=t.data(e.name+"-instance");n.compute_dimensions()}else e.S("[data-orbit]",e.scope).each(function(t,n){var i=e.S(n),r=(e.data_options(i),i.data(e.name+"-instance"));r.compute_dimensions()})}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";function r(e){var t=/fade/i.test(e),n=/pop/i.test(e);return{animate:t||n,pop:n,fade:t}}var o=[];Foundation.libs.reveal={name:"reveal",version:"5.5.3",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",multiple_opened:!1,bg_class:"reveal-modal-bg",root_element:"body",open:function(){},opened:function(){},close:function(){},closed:function(){},on_ajax_error:e.noop,bg:e(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(t,n,i){e.extend(!0,this.settings,n,i),this.bindings(n,i)},events:function(e){var t=this,i=t.S;return i(this.scope).off(".reveal").on("click.fndtn.reveal","["+this.add_namespace("data-reveal-id")+"]:not([disabled])",function(e){if(e.preventDefault(),!t.locked){var n=i(this),r=n.data(t.data_attr("reveal-ajax")),o=n.data(t.data_attr("reveal-replace-content"));if(t.locked=!0,"undefined"==typeof r)t.open.call(t,n);else{var s=r===!0?n.attr("href"):r;t.open.call(t,n,{url:s},{replaceContentSel:o})}}}),i(n).on("click.fndtn.reveal",this.close_targets(),function(e){if(e.preventDefault(),!t.locked){var n=i("["+t.attr_name()+"].open").data(t.attr_name(!0)+"-init")||t.settings,r=i(e.target)[0]===i("."+n.bg_class)[0];if(r){if(!n.close_on_background_click)return;e.stopPropagation()}t.locked=!0,t.close.call(t,r?i("["+t.attr_name()+"].open:not(.toback)"):i(this).closest("["+t.attr_name()+"]"))}}),i("["+t.attr_name()+"]",this.scope).length>0?i(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video):i(this.scope).on("open.fndtn.reveal","["+t.attr_name()+"]",this.settings.open).on("opened.fndtn.reveal","["+t.attr_name()+"]",this.settings.opened).on("opened.fndtn.reveal","["+t.attr_name()+"]",this.open_video).on("close.fndtn.reveal","["+t.attr_name()+"]",this.settings.close).on("closed.fndtn.reveal","["+t.attr_name()+"]",this.settings.closed).on("closed.fndtn.reveal","["+t.attr_name()+"]",this.close_video),!0},key_up_on:function(e){var t=this;return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal",function(e){var n=t.S("["+t.attr_name()+"].open"),i=n.data(t.attr_name(!0)+"-init")||t.settings;i&&27===e.which&&i.close_on_esc&&!t.locked&&t.close.call(t,n)}),!0},key_up_off:function(e){return this.S("body").off("keyup.fndtn.reveal"),!0},open:function(n,r){var s,a=this;n?"undefined"!=typeof n.selector?s=a.S("#"+n.data(a.data_attr("reveal-id"))).first():(s=a.S(this.scope),r=n):s=a.S(this.scope);var l=s.data(a.attr_name(!0)+"-init");if(l=l||this.settings,s.hasClass("open")&&n!==i&&n.attr("data-reveal-id")==s.attr("id"))return a.close(s);if(!s.hasClass("open")){var d=a.S("["+a.attr_name()+"].open");"undefined"==typeof s.data("css-top")&&s.data("css-top",parseInt(s.css("top"),10)).data("offset",this.cache_offset(s)),s.attr("tabindex","0").attr("aria-hidden","false"),this.key_up_on(s),s.on("open.fndtn.reveal",function(e){"fndtn.reveal"!==e.namespace}),s.on("open.fndtn.reveal").trigger("open.fndtn.reveal"),d.length<1&&this.toggle_bg(s,!0),"string"==typeof r&&(r={url:r});var c=function(){d.length>0&&(l.multiple_opened?a.to_back(d):a.hide(d,l.css.close)),l.multiple_opened&&o.push(s),a.show(s,l.css.open)};if("undefined"!=typeof r&&r.url){var u="undefined"!=typeof r.success?r.success:null;e.extend(r,{success:function(t,n,i){if(e.isFunction(u)){var r=u(t,n,i);"string"==typeof r&&(t=r)}"undefined"!=typeof options&&"undefined"!=typeof options.replaceContentSel?s.find(options.replaceContentSel).html(t):s.html(t),a.S(s).foundation("section","reflow"),a.S(s).children().foundation(),c()}}),l.on_ajax_error!==e.noop&&e.extend(r,{error:l.on_ajax_error}),e.ajax(r)}else c()}a.S(t).trigger("resize")},close:function(t){var t=t&&t.length?t:this.S(this.scope),n=this.S("["+this.attr_name()+"].open"),i=t.data(this.attr_name(!0)+"-init")||this.settings,r=this;if(n.length>0)if(t.removeAttr("tabindex","0").attr("aria-hidden","true"),this.locked=!0,this.key_up_off(t),t.trigger("close.fndtn.reveal"),(i.multiple_opened&&1===n.length||!i.multiple_opened||t.length>1)&&(r.toggle_bg(t,!1),r.to_front(t)),i.multiple_opened){var s=t.is(":not(.toback)");r.hide(t,i.css.close,i),s?o.pop():o=e.grep(o,function(e){var n=e[0]===t[0];return n&&r.to_front(t),!n}),o.length>0&&r.to_front(o[o.length-1])}else r.hide(n,i.css.close,i)},close_targets:function(){var e="."+this.settings.dismiss_modal_class;return this.settings.close_on_background_click?e+", ."+this.settings.bg_class:e},toggle_bg:function(t,n){0===this.S("."+this.settings.bg_class).length&&(this.settings.bg=e("<div />",{"class":this.settings.bg_class}).appendTo("body").hide());var r=this.settings.bg.filter(":visible").length>0;n!=r&&((n==i?r:!n)?this.hide(this.settings.bg):this.show(this.settings.bg))},show:function(n,i){if(i){var o=n.data(this.attr_name(!0)+"-init")||this.settings,s=o.root_element,a=this;if(0===n.parent(s).length){var l=n.wrap('<div style="display: none;" />').parent();n.on("closed.fndtn.reveal.wrapped",function(){n.detach().appendTo(l),n.unwrap().unbind("closed.fndtn.reveal.wrapped")}),n.detach().appendTo(s)}var d=r(o.animation);if(d.animate||(this.locked=!1),d.pop){i.top=e(t).scrollTop()-n.data("offset")+"px";var c={top:e(t).scrollTop()+n.data("css-top")+"px",opacity:1};return setTimeout(function(){return n.css(i).animate(c,o.animation_speed,"linear",function(){a.locked=!1,n.trigger("opened.fndtn.reveal")}).addClass("open")},o.animation_speed/2)}if(i.top=e(t).scrollTop()+n.data("css-top")+"px",d.fade){var c={opacity:1};return setTimeout(function(){return n.css(i).animate(c,o.animation_speed,"linear",function(){a.locked=!1,n.trigger("opened.fndtn.reveal")}).addClass("open")},o.animation_speed/2)}return n.css(i).show().css({opacity:1}).addClass("open").trigger("opened.fndtn.reveal")}var o=this.settings;return r(o.animation).fade?n.fadeIn(o.animation_speed/2):(this.locked=!1,n.show())},to_back:function(e){e.addClass("toback")},to_front:function(e){e.removeClass("toback")},hide:function(n,i){if(i){var o=n.data(this.attr_name(!0)+"-init"),s=this;o=o||this.settings;var a=r(o.animation);if(a.animate||(this.locked=!1),a.pop){var l={top:-e(t).scrollTop()-n.data("offset")+"px",opacity:0};return setTimeout(function(){return n.animate(l,o.animation_speed,"linear",function(){s.locked=!1,n.css(i).trigger("closed.fndtn.reveal")}).removeClass("open")},o.animation_speed/2)}if(a.fade){var l={opacity:0};return setTimeout(function(){return n.animate(l,o.animation_speed,"linear",function(){s.locked=!1,n.css(i).trigger("closed.fndtn.reveal")}).removeClass("open")},o.animation_speed/2)}return n.hide().css(i).removeClass("open").trigger("closed.fndtn.reveal")}var o=this.settings;return r(o.animation).fade?n.fadeOut(o.animation_speed/2):n.hide()},close_video:function(t){var n=e(".flex-video",t.target),i=e("iframe",n);i.length>0&&(i.attr("data-src",i[0].src),i.attr("src",i.attr("src")),n.hide())},open_video:function(t){var n=e(".flex-video",t.target),r=n.find("iframe");if(r.length>0){var o=r.attr("data-src");if("string"==typeof o)r[0].src=r.attr("data-src");else{var s=r[0].src;r[0].src=i,r[0].src=s}n.show()}},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},cache_offset:function(e){var t=e.show().height()+parseInt(e.css("top"),10)+e.scrollY;return e.hide(),t},off:function(){e(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.slider={name:"slider",version:"5.5.3",settings:{start:0,end:100,step:1,precision:2,initial:null,display_selector:"",vertical:!1,trigger_input_change:!1,on_change:function(){}},cache:{},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.bindings(t,n),this.reflow()},events:function(){var n=this;e(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider","["+n.attr_name()+"]:not(.disabled, [disabled]) .range-slider-handle",function(t){n.cache.active||(t.preventDefault(),n.set_active_slider(e(t.target)))}).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",function(i){if(n.cache.active)if(i.preventDefault(),e.data(n.cache.active[0],"settings").vertical){var r=0;i.pageY||(r=t.scrollY),n.calculate_position(n.cache.active,n.get_cursor_position(i,"y")+r)}else n.calculate_position(n.cache.active,n.get_cursor_position(i,"x"))}).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",function(i){if(!n.cache.active){var r="slider"===e(i.target).attr("role")?e(i.target):e(i.target).closest(".range-slider").find("[role='slider']");if(r.length&&!r.parent().hasClass("disabled")&&!r.parent().attr("disabled"))if(n.set_active_slider(r),e.data(n.cache.active[0],"settings").vertical){var o=0;i.pageY||(o=t.scrollY),n.calculate_position(n.cache.active,n.get_cursor_position(i,"y")+o)}else n.calculate_position(n.cache.active,n.get_cursor_position(i,"x"))}n.remove_active_slider()}).on("change.fndtn.slider",function(e){n.settings.on_change()}),n.S(t).on("resize.fndtn.slider",n.throttle(function(e){n.reflow()},300)),this.S("["+this.attr_name()+"]").each(function(){var t=e(this),i=t.children(".range-slider-handle")[0],r=n.initialize_settings(i);""!=r.display_selector&&e(r.display_selector).each(function(){e(this).attr("value")&&e(this).off("change").on("change",function(){t.foundation("slider","set_value",e(this).val())})})})},get_cursor_position:function(e,t){var n,i="page"+t.toUpperCase(),r="client"+t.toUpperCase();return"undefined"!=typeof e[i]?n=e[i]:"undefined"!=typeof e.originalEvent[r]?n=e.originalEvent[r]:e.originalEvent.touches&&e.originalEvent.touches[0]&&"undefined"!=typeof e.originalEvent.touches[0][r]?n=e.originalEvent.touches[0][r]:e.currentPoint&&"undefined"!=typeof e.currentPoint[t]&&(n=e.currentPoint[t]),n},set_active_slider:function(e){this.cache.active=e},remove_active_slider:function(){this.cache.active=null},calculate_position:function(t,n){var i=this,r=e.data(t[0],"settings"),o=(e.data(t[0],"handle_l"),e.data(t[0],"handle_o"),e.data(t[0],"bar_l")),s=e.data(t[0],"bar_o");requestAnimationFrame(function(){var e;e=Foundation.rtl&&!r.vertical?i.limit_to((s+o-n)/o,0,1):i.limit_to((n-s)/o,0,1),e=r.vertical?1-e:e;var a=i.normalized_value(e,r.start,r.end,r.step,r.precision);i.set_ui(t,a)})},set_ui:function(t,n){var i=e.data(t[0],"settings"),r=e.data(t[0],"handle_l"),o=e.data(t[0],"bar_l"),s=this.normalized_percentage(n,i.start,i.end),a=s*(o-r)-1,l=100*s,d=t.parent(),c=t.parent().children("input[type=hidden]");Foundation.rtl&&!i.vertical&&(a=-a),a=i.vertical?-a+o-r+1:a,this.set_translate(t,a,i.vertical),i.vertical?t.siblings(".range-slider-active-segment").css("height",l+"%"):t.siblings(".range-slider-active-segment").css("width",l+"%"),d.attr(this.attr_name(),n).trigger("change.fndtn.slider"),c.val(n),i.trigger_input_change&&c.trigger("change.fndtn.slider"),t[0].hasAttribute("aria-valuemin")||t.attr({"aria-valuemin":i.start,"aria-valuemax":i.end}),t.attr("aria-valuenow",n),""!=i.display_selector&&e(i.display_selector).each(function(){this.hasAttribute("value")?e(this).val(n):e(this).text(n)})},normalized_percentage:function(e,t,n){return Math.min(1,(e-t)/(n-t))},normalized_value:function(e,t,n,i,r){var o=n-t,s=e*o,a=(s-s%i)/i,l=s%i,d=l>=.5*i?i:0;return(a*i+d+t).toFixed(r)},set_translate:function(t,n,i){i?e(t).css("-webkit-transform","translateY("+n+"px)").css("-moz-transform","translateY("+n+"px)").css("-ms-transform","translateY("+n+"px)").css("-o-transform","translateY("+n+"px)").css("transform","translateY("+n+"px)"):e(t).css("-webkit-transform","translateX("+n+"px)").css("-moz-transform","translateX("+n+"px)").css("-ms-transform","translateX("+n+"px)").css("-o-transform","translateX("+n+"px)").css("transform","translateX("+n+"px)")},limit_to:function(e,t,n){return Math.min(Math.max(e,t),n)},initialize_settings:function(t){var n,i=e.extend({},this.settings,this.data_options(e(t).parent()));return null===i.precision&&(n=(""+i.step).match(/\.([\d]*)/),i.precision=n&&n[1]?n[1].length:0),i.vertical?(e.data(t,"bar_o",e(t).parent().offset().top),e.data(t,"bar_l",e(t).parent().outerHeight()),e.data(t,"handle_o",e(t).offset().top),e.data(t,"handle_l",e(t).outerHeight())):(e.data(t,"bar_o",e(t).parent().offset().left),e.data(t,"bar_l",e(t).parent().outerWidth()),e.data(t,"handle_o",e(t).offset().left),e.data(t,"handle_l",e(t).outerWidth())),e.data(t,"bar",e(t).parent()),e.data(t,"settings",i)},set_initial_position:function(t){var n=e.data(t.children(".range-slider-handle")[0],"settings"),i="number"!=typeof n.initial||isNaN(n.initial)?Math.floor(.5*(n.end-n.start)/n.step)*n.step+n.start:n.initial,r=t.children(".range-slider-handle");this.set_ui(r,i)},set_value:function(t){var n=this;e("["+n.attr_name()+"]",this.scope).each(function(){e(this).attr(n.attr_name(),t)}),e(this.scope).attr(n.attr_name())&&e(this.scope).attr(n.attr_name(),t),n.reflow()},reflow:function(){var t=this;t.S("["+this.attr_name()+"]").each(function(){var n=e(this).children(".range-slider-handle")[0],i=e(this).attr(t.attr_name());t.initialize_settings(n),i?t.set_ui(e(n),parseFloat(i)):t.set_initial_position(e(this))})}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.tab={name:"tab",version:"5.5.3",settings:{active_class:"active",callback:function(){},deep_linking:!1,scroll_to_content:!0,is_hover:!1},default_tab_hashes:[],init:function(e,t,n){var i=this,r=this.S;r("["+this.attr_name()+"] > .active > a",this.scope).each(function(){i.default_tab_hashes.push(this.hash)}),this.bindings(t,n),this.handle_location_hash_change()},events:function(){var e=this,n=this.S,i=function(t,i){var r=n(i).closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init");if(!r.is_hover||Modernizr.touch){var o=t.keyCode||t.which;9!==o&&(t.preventDefault(),t.stopPropagation()),e.toggle_active_tab(n(i).parent())}};n(this.scope).off(".tab").on("keydown.fndtn.tab","["+this.attr_name()+"] > * > a",function(e){var t=e.keyCode||e.which;if(13===t||32===t){var n=this;i(e,n)}}).on("click.fndtn.tab","["+this.attr_name()+"] > * > a",function(e){var t=this;i(e,t)}).on("mouseenter.fndtn.tab","["+this.attr_name()+"] > * > a",function(t){var i=n(this).closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init");i.is_hover&&e.toggle_active_tab(n(this).parent())}),n(t).on("hashchange.fndtn.tab",function(t){t.preventDefault(),e.handle_location_hash_change()})},handle_location_hash_change:function(){var t=this,n=this.S;n("["+this.attr_name()+"]",this.scope).each(function(){var r=n(this).data(t.attr_name(!0)+"-init");if(r.deep_linking){var o;if(o=r.scroll_to_content?t.scope.location.hash:t.scope.location.hash.replace("fndtn-",""),""!=o){var s=n(o);if(s.hasClass("content")&&s.parent().hasClass("tabs-content"))t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href="+o+"]").parent());else{var a=s.closest(".content").attr("id");a!=i&&t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href=#"+a+"]").parent(),o)}}else for(var l=0;l<t.default_tab_hashes.length;l++)t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href="+t.default_tab_hashes[l]+"]").parent())}})},toggle_active_tab:function(r,o){var s=this,a=s.S,l=r.closest("["+this.attr_name()+"]"),d=r.find("a"),c=r.children("a").first(),u="#"+c.attr("href").split("#")[1],A=a(u),p=r.siblings(),h=l.data(this.attr_name(!0)+"-init"),f=function(t){var i,r=e(this),o=e(this).parents("li").prev().children('[role="tab"]'),s=e(this).parents("li").next().children('[role="tab"]');switch(t.keyCode){case 37:i=o;break;case 39:i=s;break;default:i=!1}i.length&&(r.attr({tabindex:"-1","aria-selected":null}),i.attr({tabindex:"0","aria-selected":!0}).focus()),e('[role="tabpanel"]').attr("aria-hidden","true"),e("#"+e(n.activeElement).attr("href").substring(1)).attr("aria-hidden",null)},g=function(e){var n=h.scroll_to_content?s.default_tab_hashes[0]:"fndtn-"+s.default_tab_hashes[0].replace("#","");(e!==n||t.location.hash)&&(t.location.hash=e)};c.data("tab-content")&&(u="#"+c.data("tab-content").split("#")[1],A=a(u)),h.deep_linking&&(h.scroll_to_content?(g(o||u),o==i||o==u?r.parent()[0].scrollIntoView():a(u)[0].scrollIntoView()):g(o!=i?"fndtn-"+o.replace("#",""):"fndtn-"+u.replace("#",""))),r.addClass(h.active_class).triggerHandler("opened"),d.attr({"aria-selected":"true",tabindex:0}),p.removeClass(h.active_class),p.find("a").attr({"aria-selected":"false"}),A.siblings().removeClass(h.active_class).attr({"aria-hidden":"true"}),A.addClass(h.active_class).attr("aria-hidden","false").removeAttr("tabindex"),h.callback(r),A.triggerHandler("toggled",[A]),l.triggerHandler("toggled",[r]),d.off("keydown").on("keydown",f)},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.5.3",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,hover_delay:200,fade_in_duration:150,fade_out_duration:150,show_on:"all",tip_template:function(e,t){return'<span data-selector="'+e+'" id="'+e+'" class="'+Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'" role="tooltip">'+t+'<span class="nub"></span></span>'}},cache:{},init:function(e,t,n){Foundation.inherit(this,"random_str"),this.bindings(t,n)},should_show:function(t,n){var i=e.extend({},this.settings,this.data_options(t));return"all"===i.show_on?!0:this.small()&&"small"===i.show_on?!0:this.medium()&&"medium"===i.show_on?!0:this.large()&&"large"===i.show_on?!0:!1},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},events:function(t){function n(e,t,n){e.timer||(n?(e.timer=null,r.showTip(t)):e.timer=setTimeout(function(){e.timer=null,r.showTip(t)}.bind(e),r.settings.hover_delay))}function i(e,t){e.timer&&(clearTimeout(e.timer),e.timer=null),r.hide(t)}var r=this,o=r.S;r.create(this.S(t)),e(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"]",function(t){var s=o(this),a=e.extend({},r.settings,r.data_options(s)),l=!1;if(Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&o(t.target).is("a"))return!1;if(/mouse/i.test(t.type)&&r.ie_touch(t))return!1;if(s.hasClass("open"))Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&t.preventDefault(),r.hide(s);else{if(a.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type))return;if(!a.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&(t.preventDefault(),o(a.tooltip_class+".open").hide(),l=!0,e(".open["+r.attr_name()+"]").length>0)){var d=o(e(".open["+r.attr_name()+"]")[0]);r.hide(d)}/enter|over/i.test(t.type)?n(this,s):"mouseout"===t.type||"mouseleave"===t.type?i(this,s):n(this,s,!0)}}).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"].open",function(t){return/mouse/i.test(t.type)&&r.ie_touch(t)?!1:void(("touch"!=e(this).data("tooltip-open-event-type")||"mouseleave"!=t.type)&&("mouse"==e(this).data("tooltip-open-event-type")&&/MSPointerDown|touchstart/i.test(t.type)?r.convert_to_touch(e(this)):i(this,e(this))))}).on("DOMNodeRemoved DOMAttrModified","["+this.attr_name()+"]:not(a)",function(e){i(this,o(this))})},ie_touch:function(e){return!1},showTip:function(e){var t=this.getTip(e);return this.should_show(e,t)?this.show(e):void 0},getTip:function(t){var n=this.selector(t),i=e.extend({},this.settings,this.data_options(t)),r=null;return n&&(r=this.S('span[data-selector="'+n+'"]'+i.tooltip_class)),"object"==typeof r?r:!1},selector:function(e){var t=e.attr(this.attr_name())||e.attr("data-selector");return"string"!=typeof t&&(t=this.random_str(6),e.attr("data-selector",t).attr("aria-describedby",t)),t},create:function(n){var i=this,r=e.extend({},this.settings,this.data_options(n)),o=this.settings.tip_template;"string"==typeof r.tip_template&&t.hasOwnProperty(r.tip_template)&&(o=t[r.tip_template]);var s=e(o(this.selector(n),e("<div></div>").html(n.attr("title")).html())),a=this.inheritable_classes(n);s.addClass(a).appendTo(r.append_to),Modernizr.touch&&(s.append('<span class="tap-to-close">'+r.touch_close_text+"</span>"),s.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",function(e){i.hide(n)})),n.removeAttr("title").attr("title","")},reposition:function(t,n,i){var r,o,s,a,l;n.css("visibility","hidden").show(),r=t.data("width"),o=n.children(".nub"),s=o.outerHeight(),a=o.outerWidth(),this.small()?n.css({width:"100%"}):n.css({width:r?r:"auto"}),l=function(e,t,n,i,r,o){return e.css({top:t?t:"auto",bottom:i?i:"auto",left:r?r:"auto",right:n?n:"auto"}).end()};var d=t.offset().top,c=t.offset().left,u=t.outerHeight();if(l(n,d+u+10,"auto","auto",c),this.small())l(n,d+u+10,"auto","auto",12.5,e(this.scope).width()),n.addClass("tip-override"),l(o,-s,"auto","auto",c);else{Foundation.rtl&&(o.addClass("rtl"),c=c+t.outerWidth()-n.outerWidth()),l(n,d+u+10,"auto","auto",c),o.attr("style")&&o.removeAttr("style"),n.removeClass("tip-override");var A=n.outerHeight();i&&i.indexOf("tip-top")>-1?(Foundation.rtl&&o.addClass("rtl"),l(n,d-A,"auto","auto",c).removeClass("tip-override")):i&&i.indexOf("tip-left")>-1?(l(n,d+u/2-A/2,"auto","auto",c-n.outerWidth()-s).removeClass("tip-override"),o.removeClass("rtl")):i&&i.indexOf("tip-right")>-1&&(l(n,d+u/2-A/2,"auto","auto",c+t.outerWidth()+s).removeClass("tip-override"),o.removeClass("rtl"))}n.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},inheritable_classes:function(t){var n=e.extend({},this.settings,this.data_options(t)),i=["tip-top","tip-left","tip-bottom","tip-right","radius","round"].concat(n.additional_inheritable_classes),r=t.attr("class"),o=r?e.map(r.split(" "),function(t,n){return-1!==e.inArray(t,i)?t:void 0}).join(" "):"";return e.trim(o)},convert_to_touch:function(t){var n=this,i=n.getTip(t),r=e.extend({},n.settings,n.data_options(t));0===i.find(".tap-to-close").length&&(i.append('<span class="tap-to-close">'+r.touch_close_text+"</span>"),i.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",function(e){n.hide(t)})),t.data("tooltip-open-event-type","touch")},show:function(e){var t=this.getTip(e);"touch"==e.data("tooltip-open-event-type")&&this.convert_to_touch(e),this.reposition(e,t,e.attr("class")),e.addClass("open"),t.fadeIn(this.settings.fade_in_duration)},hide:function(e){var t=this.getTip(e);t.fadeOut(this.settings.fade_out_duration,function(){t.find(".tap-to-close").remove(),t.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),e.removeClass("open")})},off:function(){var t=this;this.S(this.scope).off(".fndtn.tooltip"),this.S(this.settings.tooltip_class).each(function(n){e("["+t.attr_name()+"]").eq(n).attr("title",e(this).text());
}).remove()},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.5.3",settings:{index:0,start_offset:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",mobile_show_parent_link:!0,is_hover:!0,scrolltop:!0,sticky_on:"all",dropdown_autoclose:!0},init:function(t,n,i){Foundation.inherit(this,"add_custom_rule register_media throttle");var r=this;r.register_media("topbar","foundation-mq-topbar"),this.bindings(n,i),r.S("["+this.attr_name()+"]",this.scope).each(function(){var t=e(this),n=t.data(r.attr_name(!0)+"-init");r.S("section, .top-bar-section",this);t.data("index",0);var i=t.parent();i.hasClass("fixed")||r.is_sticky(t,i,n)?(r.settings.sticky_class=n.sticky_class,r.settings.sticky_topbar=t,t.data("height",i.outerHeight()),t.data("stickyoffset",i.offset().top)):t.data("height",t.outerHeight()),n.assembled||r.assemble(t),n.is_hover?r.S(".has-dropdown",t).addClass("not-click"):r.S(".has-dropdown",t).removeClass("not-click"),r.add_custom_rule(".f-topbar-fixed { padding-top: "+t.data("height")+"px }"),i.hasClass("fixed")&&r.S("body").addClass("f-topbar-fixed")})},is_sticky:function(e,t,n){var i=t.hasClass(n.sticky_class),r=matchMedia(Foundation.media_queries.small).matches,o=matchMedia(Foundation.media_queries.medium).matches,s=matchMedia(Foundation.media_queries.large).matches;return i&&"all"===n.sticky_on?!0:i&&this.small()&&-1!==n.sticky_on.indexOf("small")&&r&&!o&&!s?!0:i&&this.medium()&&-1!==n.sticky_on.indexOf("medium")&&r&&o&&!s?!0:i&&this.large()&&-1!==n.sticky_on.indexOf("large")&&r&&o&&s?!0:!1},toggle:function(n){var i,r=this;i=n?r.S(n).closest("["+this.attr_name()+"]"):r.S("["+this.attr_name()+"]");var o=i.data(this.attr_name(!0)+"-init"),s=r.S("section, .top-bar-section",i);r.breakpoint()&&(r.rtl?(s.css({right:"0%"}),e(">.name",s).css({right:"100%"})):(s.css({left:"0%"}),e(">.name",s).css({left:"100%"})),r.S("li.moved",s).removeClass("moved"),i.data("index",0),i.toggleClass("expanded").css("height","")),o.scrolltop?i.hasClass("expanded")?i.parent().hasClass("fixed")&&(o.scrolltop?(i.parent().removeClass("fixed"),i.addClass("fixed"),r.S("body").removeClass("f-topbar-fixed"),t.scrollTo(0,0)):i.parent().removeClass("expanded")):i.hasClass("fixed")&&(i.parent().addClass("fixed"),i.removeClass("fixed"),r.S("body").addClass("f-topbar-fixed")):(r.is_sticky(i,i.parent(),o)&&i.parent().addClass("fixed"),i.parent().hasClass("fixed")&&(i.hasClass("expanded")?(i.addClass("fixed"),i.parent().addClass("expanded"),r.S("body").addClass("f-topbar-fixed")):(i.removeClass("fixed"),i.parent().removeClass("expanded"),r.update_sticky_positioning())))},timer:null,events:function(n){var i=this,r=this.S;r(this.scope).off(".topbar").on("click.fndtn.topbar","["+this.attr_name()+"] .toggle-topbar",function(e){e.preventDefault(),i.toggle(this)}).on("click.fndtn.topbar contextmenu.fndtn.topbar",'.top-bar .top-bar-section li a[href^="#"],['+this.attr_name()+'] .top-bar-section li a[href^="#"]',function(t){var n=e(this).closest("li"),r=n.closest("["+i.attr_name()+"]"),o=r.data(i.attr_name(!0)+"-init");if(o.dropdown_autoclose&&o.is_hover){var s=e(this).closest(".hover");s.removeClass("hover")}!i.breakpoint()||n.hasClass("back")||n.hasClass("has-dropdown")||i.toggle()}).on("click.fndtn.topbar","["+this.attr_name()+"] li.has-dropdown",function(t){var n=r(this),o=r(t.target),s=n.closest("["+i.attr_name()+"]"),a=s.data(i.attr_name(!0)+"-init");return o.data("revealId")?void i.toggle():void(i.breakpoint()||(!a.is_hover||Modernizr.touch)&&(t.stopImmediatePropagation(),n.hasClass("hover")?(n.removeClass("hover").find("li").removeClass("hover"),n.parents("li.hover").removeClass("hover")):(n.addClass("hover"),e(n).siblings().removeClass("hover"),"A"===o[0].nodeName&&o.parent().hasClass("has-dropdown")&&t.preventDefault())))}).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown>a",function(e){if(i.breakpoint()){e.preventDefault();var t=r(this),n=t.closest("["+i.attr_name()+"]"),o=n.find("section, .top-bar-section"),s=(t.next(".dropdown").outerHeight(),t.closest("li"));n.data("index",n.data("index")+1),s.addClass("moved"),i.rtl?(o.css({right:-(100*n.data("index"))+"%"}),o.find(">.name").css({right:100*n.data("index")+"%"})):(o.css({left:-(100*n.data("index"))+"%"}),o.find(">.name").css({left:100*n.data("index")+"%"})),n.css("height",t.siblings("ul").outerHeight(!0)+n.data("height"))}}),r(t).off(".topbar").on("resize.fndtn.topbar",i.throttle(function(){i.resize.call(i)},50)).trigger("resize.fndtn.topbar").load(function(){r(this).trigger("resize.fndtn.topbar")}),r("body").off(".topbar").on("click.fndtn.topbar",function(e){var t=r(e.target).closest("li").closest("li.hover");t.length>0||r("["+i.attr_name()+"] li.hover").removeClass("hover")}),r(this.scope).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown .back",function(e){e.preventDefault();var t=r(this),n=t.closest("["+i.attr_name()+"]"),o=n.find("section, .top-bar-section"),s=(n.data(i.attr_name(!0)+"-init"),t.closest("li.moved")),a=s.parent();n.data("index",n.data("index")-1),i.rtl?(o.css({right:-(100*n.data("index"))+"%"}),o.find(">.name").css({right:100*n.data("index")+"%"})):(o.css({left:-(100*n.data("index"))+"%"}),o.find(">.name").css({left:100*n.data("index")+"%"})),0===n.data("index")?n.css("height",""):n.css("height",a.outerHeight(!0)+n.data("height")),setTimeout(function(){s.removeClass("moved")},300)}),r(this.scope).find(".dropdown a").focus(function(){e(this).parents(".has-dropdown").addClass("hover")}).blur(function(){e(this).parents(".has-dropdown").removeClass("hover")})},resize:function(){var e=this;e.S("["+this.attr_name()+"]").each(function(){var t,i=e.S(this),r=i.data(e.attr_name(!0)+"-init"),o=i.parent("."+e.settings.sticky_class);if(!e.breakpoint()){var s=i.hasClass("expanded");i.css("height","").removeClass("expanded").find("li").removeClass("hover"),s&&e.toggle(i)}e.is_sticky(i,o,r)&&(o.hasClass("fixed")?(o.removeClass("fixed"),t=o.offset().top,e.S(n.body).hasClass("f-topbar-fixed")&&(t-=i.data("height")),i.data("stickyoffset",t),o.addClass("fixed")):(t=o.offset().top,i.data("stickyoffset",t)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},small:function(){return matchMedia(Foundation.media_queries.small).matches},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},assemble:function(t){var n=this,i=t.data(this.attr_name(!0)+"-init"),r=n.S("section, .top-bar-section",t);r.detach(),n.S(".has-dropdown>a",r).each(function(){var t,r=n.S(this),o=r.siblings(".dropdown"),s=r.attr("href");o.find(".title.back").length||(t=e(1==i.mobile_show_parent_link&&s?'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="'+s+'">'+r.html()+"</a></li>":'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'),1==i.custom_back_text?e("h5>a",t).html(i.back_text):e("h5>a",t).html("&laquo; "+r.html()),o.prepend(t))}),r.appendTo(t),this.sticky(),this.assembled(t)},assembled:function(t){t.data(this.attr_name(!0),e.extend({},t.data(this.attr_name(!0)),{assembled:!0}))},height:function(t){var n=0,i=this;return e("> li",t).each(function(){n+=i.S(this).outerHeight(!0)}),n},sticky:function(){var e=this;this.S(t).on("scroll",function(){e.update_sticky_positioning()})},update_sticky_positioning:function(){var e="."+this.settings.sticky_class,n=this.S(t),i=this;if(i.settings.sticky_topbar&&i.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(),this.settings)){var r=this.settings.sticky_topbar.data("stickyoffset")+this.settings.start_offset;i.S(e).hasClass("expanded")||(n.scrollTop()>r?i.S(e).hasClass("fixed")||(i.S(e).addClass("fixed"),i.S("body").addClass("f-topbar-fixed")):n.scrollTop()<=r&&i.S(e).hasClass("fixed")&&(i.S(e).removeClass("fixed"),i.S("body").removeClass("f-topbar-fixed")))}},off:function(){this.S(this.scope).off(".fndtn.topbar"),this.S(t).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,window,window.document),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var t=window.Slick||{};t=function(){function t(t,i){var r,o=this;o.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:e(t),appendDots:e(t),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(t+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!1,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},o.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},e.extend(o,o.initials),o.activeBreakpoint=null,o.animType=null,o.animProp=null,o.breakpoints=[],o.breakpointSettings=[],o.cssTransitions=!1,o.hidden="hidden",o.paused=!1,o.positionProp=null,o.respondTo=null,o.rowCount=1,o.shouldClick=!0,o.$slider=e(t),o.$slidesCache=null,o.transformType=null,o.transitionType=null,o.visibilityChange="visibilitychange",o.windowWidth=0,o.windowTimer=null,r=e(t).data("slick")||{},o.options=e.extend({},o.defaults,r,i),o.currentSlide=o.options.initialSlide,o.originalSettings=o.options,"undefined"!=typeof document.mozHidden?(o.hidden="mozHidden",o.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(o.hidden="webkitHidden",o.visibilityChange="webkitvisibilitychange"),o.autoPlay=e.proxy(o.autoPlay,o),o.autoPlayClear=e.proxy(o.autoPlayClear,o),o.changeSlide=e.proxy(o.changeSlide,o),o.clickHandler=e.proxy(o.clickHandler,o),o.selectHandler=e.proxy(o.selectHandler,o),o.setPosition=e.proxy(o.setPosition,o),o.swipeHandler=e.proxy(o.swipeHandler,o),o.dragHandler=e.proxy(o.dragHandler,o),o.keyHandler=e.proxy(o.keyHandler,o),o.autoPlayIterator=e.proxy(o.autoPlayIterator,o),o.instanceUid=n++,o.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,o.registerBreakpoints(),o.init(!0),o.checkResponsive(!0)}var n=0;return t}(),t.prototype.addSlide=t.prototype.slickAdd=function(t,n,i){var r=this;if("boolean"==typeof n)i=n,n=null;else if(0>n||n>=r.slideCount)return!1;r.unload(),"number"==typeof n?0===n&&0===r.$slides.length?e(t).appendTo(r.$slideTrack):i?e(t).insertBefore(r.$slides.eq(n)):e(t).insertAfter(r.$slides.eq(n)):i===!0?e(t).prependTo(r.$slideTrack):e(t).appendTo(r.$slideTrack),r.$slides=r.$slideTrack.children(this.options.slide),r.$slideTrack.children(this.options.slide).detach(),r.$slideTrack.append(r.$slides),r.$slides.each(function(t,n){e(n).attr("data-slick-index",t)}),r.$slidesCache=r.$slides,r.reinit()},t.prototype.animateHeight=function(){var e=this;if(1===e.options.slidesToShow&&e.options.adaptiveHeight===!0&&e.options.vertical===!1){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({height:t},e.options.speed)}},t.prototype.animateSlide=function(t,n){var i={},r=this;r.animateHeight(),r.options.rtl===!0&&r.options.vertical===!1&&(t=-t),r.transformsEnabled===!1?r.options.vertical===!1?r.$slideTrack.animate({left:t},r.options.speed,r.options.easing,n):r.$slideTrack.animate({top:t},r.options.speed,r.options.easing,n):r.cssTransitions===!1?(r.options.rtl===!0&&(r.currentLeft=-r.currentLeft),e({animStart:r.currentLeft}).animate({animStart:t},{duration:r.options.speed,easing:r.options.easing,step:function(e){e=Math.ceil(e),r.options.vertical===!1?(i[r.animType]="translate("+e+"px, 0px)",r.$slideTrack.css(i)):(i[r.animType]="translate(0px,"+e+"px)",r.$slideTrack.css(i))},complete:function(){n&&n.call()}})):(r.applyTransition(),t=Math.ceil(t),r.options.vertical===!1?i[r.animType]="translate3d("+t+"px, 0px, 0px)":i[r.animType]="translate3d(0px,"+t+"px, 0px)",r.$slideTrack.css(i),n&&setTimeout(function(){r.disableTransition(),n.call()},r.options.speed))},t.prototype.asNavFor=function(t){var n=this,i=n.options.asNavFor;i&&null!==i&&(i=e(i).not(n.$slider)),null!==i&&"object"==typeof i&&i.each(function(){var n=e(this).slick("getSlick");n.unslicked||n.slideHandler(t,!0)})},t.prototype.applyTransition=function(e){var t=this,n={};t.options.fade===!1?n[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:n[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,t.options.fade===!1?t.$slideTrack.css(n):t.$slides.eq(e).css(n)},t.prototype.autoPlay=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer),e.slideCount>e.options.slidesToShow&&e.paused!==!0&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},t.prototype.autoPlayClear=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer)},t.prototype.autoPlayIterator=function(){var e=this;e.options.infinite===!1?1===e.direction?(e.currentSlide+1===e.slideCount-1&&(e.direction=0),e.slideHandler(e.currentSlide+e.options.slidesToScroll)):(e.currentSlide-1===0&&(e.direction=1),e.slideHandler(e.currentSlide-e.options.slidesToScroll)):e.slideHandler(e.currentSlide+e.options.slidesToScroll)},t.prototype.buildArrows=function(){var t=this;t.options.arrows===!0&&(t.$prevArrow=e(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=e(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),t.options.infinite!==!0&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},t.prototype.buildDots=function(){var t,n,i=this;if(i.options.dots===!0&&i.slideCount>i.options.slidesToShow){for(n='<ul class="'+i.options.dotsClass+'">',t=0;t<=i.getDotCount();t+=1)n+="<li>"+i.options.customPaging.call(this,i,t)+"</li>";n+="</ul>",i.$dots=e(n).appendTo(i.options.appendDots),i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},t.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each(function(t,n){e(n).attr("data-slick-index",t).data("originalStyling",e(n).attr("style")||"")}),t.$slider.addClass("slick-slider"),t.$slideTrack=0===t.slideCount?e('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),(t.options.centerMode===!0||t.options.swipeToSlide===!0)&&(t.options.slidesToScroll=1),e("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.options.draggable===!0&&t.$list.addClass("draggable")},t.prototype.buildRows=function(){var e,t,n,i,r,o,s,a=this;if(i=document.createDocumentFragment(),o=a.$slider.children(),a.options.rows>1){for(s=a.options.slidesPerRow*a.options.rows,r=Math.ceil(o.length/s),e=0;r>e;e++){var l=document.createElement("div");for(t=0;t<a.options.rows;t++){var d=document.createElement("div");for(n=0;n<a.options.slidesPerRow;n++){var c=e*s+(t*a.options.slidesPerRow+n);o.get(c)&&d.appendChild(o.get(c))}l.appendChild(d)}i.appendChild(l)}a.$slider.html(i),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},t.prototype.checkResponsive=function(t,n){var i,r,o,s=this,a=!1,l=s.$slider.width(),d=window.innerWidth||e(window).width();if("window"===s.respondTo?o=d:"slider"===s.respondTo?o=l:"min"===s.respondTo&&(o=Math.min(d,l)),s.options.responsive&&s.options.responsive.length&&null!==s.options.responsive){r=null;for(i in s.breakpoints)s.breakpoints.hasOwnProperty(i)&&(s.originalSettings.mobileFirst===!1?o<s.breakpoints[i]&&(r=s.breakpoints[i]):o>s.breakpoints[i]&&(r=s.breakpoints[i]));null!==r?null!==s.activeBreakpoint?(r!==s.activeBreakpoint||n)&&(s.activeBreakpoint=r,"unslick"===s.breakpointSettings[r]?s.unslick(r):(s.options=e.extend({},s.originalSettings,s.breakpointSettings[r]),t===!0&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=r):(s.activeBreakpoint=r,"unslick"===s.breakpointSettings[r]?s.unslick(r):(s.options=e.extend({},s.originalSettings,s.breakpointSettings[r]),t===!0&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=r):null!==s.activeBreakpoint&&(s.activeBreakpoint=null,s.options=s.originalSettings,t===!0&&(s.currentSlide=s.options.initialSlide),s.refresh(t),a=r),t||a===!1||s.$slider.trigger("breakpoint",[s,a])}},t.prototype.changeSlide=function(t,n){var i,r,o,s=this,a=e(t.target);switch(a.is("a")&&t.preventDefault(),a.is("li")||(a=a.closest("li")),o=s.slideCount%s.options.slidesToScroll!==0,i=o?0:(s.slideCount-s.currentSlide)%s.options.slidesToScroll,t.data.message){case"previous":r=0===i?s.options.slidesToScroll:s.options.slidesToShow-i,s.slideCount>s.options.slidesToShow&&s.slideHandler(s.currentSlide-r,!1,n);break;case"next":r=0===i?s.options.slidesToScroll:i,s.slideCount>s.options.slidesToShow&&s.slideHandler(s.currentSlide+r,!1,n);break;case"index":var l=0===t.data.index?0:t.data.index||a.index()*s.options.slidesToScroll;s.slideHandler(s.checkNavigable(l),!1,n),a.children().trigger("focus");break;default:return}},t.prototype.checkNavigable=function(e){var t,n,i=this;if(t=i.getNavigableIndexes(),n=0,e>t[t.length-1])e=t[t.length-1];else for(var r in t){if(e<t[r]){e=n;break}n=t[r]}return e},t.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&null!==t.$dots&&(e("li",t.$dots).off("click.slick",t.changeSlide),t.options.pauseOnDotsHover===!0&&t.options.autoplay===!0&&e("li",t.$dots).off("mouseenter.slick",e.proxy(t.setPaused,t,!0)).off("mouseleave.slick",e.proxy(t.setPaused,t,!1))),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide)),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),e(document).off(t.visibilityChange,t.visibility),t.$list.off("mouseenter.slick",e.proxy(t.setPaused,t,!0)),t.$list.off("mouseleave.slick",e.proxy(t.setPaused,t,!1)),t.options.accessibility===!0&&t.$list.off("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().off("click.slick",t.selectHandler),e(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),e(window).off("resize.slick.slick-"+t.instanceUid,t.resize),e("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),e(window).off("load.slick.slick-"+t.instanceUid,t.setPosition),e(document).off("ready.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.cleanUpRows=function(){var e,t=this;t.options.rows>1&&(e=t.$slides.children().children(),e.removeAttr("style"),t.$slider.html(e))},t.prototype.clickHandler=function(e){var t=this;t.shouldClick===!1&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},t.prototype.destroy=function(t){var n=this;n.autoPlayClear(),n.touchObject={},n.cleanUpEvents(),e(".slick-cloned",n.$slider).detach(),n.$dots&&n.$dots.remove(),n.$prevArrow&&n.$prevArrow.length&&(n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.prevArrow)&&n.$prevArrow.remove()),n.$nextArrow&&n.$nextArrow.length&&(n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.nextArrow)&&n.$nextArrow.remove()),n.$slides&&(n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){e(this).attr("style",e(this).data("originalStyling"))}),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.detach(),n.$list.detach(),n.$slider.append(n.$slides)),n.cleanUpRows(),n.$slider.removeClass("slick-slider"),n.$slider.removeClass("slick-initialized"),n.unslicked=!0,t||n.$slider.trigger("destroy",[n])},t.prototype.disableTransition=function(e){var t=this,n={};n[t.transitionType]="",t.options.fade===!1?t.$slideTrack.css(n):t.$slides.eq(e).css(n)},t.prototype.fadeSlide=function(e,t){var n=this;n.cssTransitions===!1?(n.$slides.eq(e).css({zIndex:n.options.zIndex}),n.$slides.eq(e).animate({opacity:1},n.options.speed,n.options.easing,t)):(n.applyTransition(e),n.$slides.eq(e).css({opacity:1,zIndex:n.options.zIndex}),t&&setTimeout(function(){n.disableTransition(e),t.call()},n.options.speed))},t.prototype.fadeSlideOut=function(e){var t=this;t.cssTransitions===!1?t.$slides.eq(e).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(e),t.$slides.eq(e).css({opacity:0,zIndex:t.options.zIndex-2}))},t.prototype.filterSlides=t.prototype.slickFilter=function(e){var t=this;null!==e&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(e).appendTo(t.$slideTrack),t.reinit())},t.prototype.getCurrent=t.prototype.slickCurrentSlide=function(){var e=this;return e.currentSlide},t.prototype.getDotCount=function(){var e=this,t=0,n=0,i=0;if(e.options.infinite===!0)for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else if(e.options.centerMode===!0)i=e.slideCount;else for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return i-1},t.prototype.getLeft=function(e){var t,n,i,r=this,o=0;return r.slideOffset=0,n=r.$slides.first().outerHeight(!0),r.options.infinite===!0?(r.slideCount>r.options.slidesToShow&&(r.slideOffset=r.slideWidth*r.options.slidesToShow*-1,o=n*r.options.slidesToShow*-1),r.slideCount%r.options.slidesToScroll!==0&&e+r.options.slidesToScroll>r.slideCount&&r.slideCount>r.options.slidesToShow&&(e>r.slideCount?(r.slideOffset=(r.options.slidesToShow-(e-r.slideCount))*r.slideWidth*-1,o=(r.options.slidesToShow-(e-r.slideCount))*n*-1):(r.slideOffset=r.slideCount%r.options.slidesToScroll*r.slideWidth*-1,o=r.slideCount%r.options.slidesToScroll*n*-1))):e+r.options.slidesToShow>r.slideCount&&(r.slideOffset=(e+r.options.slidesToShow-r.slideCount)*r.slideWidth,o=(e+r.options.slidesToShow-r.slideCount)*n),r.slideCount<=r.options.slidesToShow&&(r.slideOffset=0,o=0),r.options.centerMode===!0&&r.options.infinite===!0?r.slideOffset+=r.slideWidth*Math.floor(r.options.slidesToShow/2)-r.slideWidth:r.options.centerMode===!0&&(r.slideOffset=0,r.slideOffset+=r.slideWidth*Math.floor(r.options.slidesToShow/2)),t=r.options.vertical===!1?e*r.slideWidth*-1+r.slideOffset:e*n*-1+o,r.options.variableWidth===!0&&(i=r.slideCount<=r.options.slidesToShow||r.options.infinite===!1?r.$slideTrack.children(".slick-slide").eq(e):r.$slideTrack.children(".slick-slide").eq(e+r.options.slidesToShow),t=r.options.rtl===!0?i[0]?-1*(r.$slideTrack.width()-i[0].offsetLeft-i.width()):0:i[0]?-1*i[0].offsetLeft:0,r.options.centerMode===!0&&(i=r.slideCount<=r.options.slidesToShow||r.options.infinite===!1?r.$slideTrack.children(".slick-slide").eq(e):r.$slideTrack.children(".slick-slide").eq(e+r.options.slidesToShow+1),t=r.options.rtl===!0?i[0]?-1*(r.$slideTrack.width()-i[0].offsetLeft-i.width()):0:i[0]?-1*i[0].offsetLeft:0,t+=(r.$list.width()-i.outerWidth())/2)),t},t.prototype.getOption=t.prototype.slickGetOption=function(e){var t=this;return t.options[e]},t.prototype.getNavigableIndexes=function(){var e,t=this,n=0,i=0,r=[];for(t.options.infinite===!1?e=t.slideCount:(n=-1*t.options.slidesToScroll,i=-1*t.options.slidesToScroll,e=2*t.slideCount);e>n;)r.push(n),n=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return r},t.prototype.getSlick=function(){return this},t.prototype.getSlideCount=function(){var t,n,i,r=this;return i=r.options.centerMode===!0?r.slideWidth*Math.floor(r.options.slidesToShow/2):0,r.options.swipeToSlide===!0?(r.$slideTrack.find(".slick-slide").each(function(t,o){return o.offsetLeft-i+e(o).outerWidth()/2>-1*r.swipeLeft?(n=o,!1):void 0}),t=Math.abs(e(n).attr("data-slick-index")-r.currentSlide)||1):r.options.slidesToScroll},t.prototype.goTo=t.prototype.slickGoTo=function(e,t){var n=this;n.changeSlide({data:{message:"index",index:parseInt(e)}},t)},t.prototype.init=function(t){var n=this;e(n.$slider).hasClass("slick-initialized")||(e(n.$slider).addClass("slick-initialized"),n.buildRows(),n.buildOut(),n.setProps(),n.startLoad(),n.loadSlider(),n.initializeEvents(),n.updateArrows(),n.updateDots()),t&&n.$slider.trigger("init",[n]),n.options.accessibility===!0&&n.initADA()},t.prototype.initArrowEvents=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.on("click.slick",{message:"next"},e.changeSlide))},t.prototype.initDotEvents=function(){var t=this;t.options.dots===!0&&t.slideCount>t.options.slidesToShow&&e("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),t.options.dots===!0&&t.options.pauseOnDotsHover===!0&&t.options.autoplay===!0&&e("li",t.$dots).on("mouseenter.slick",e.proxy(t.setPaused,t,!0)).on("mouseleave.slick",e.proxy(t.setPaused,t,!1))},t.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),e(document).on(t.visibilityChange,e.proxy(t.visibility,t)),t.$list.on("mouseenter.slick",e.proxy(t.setPaused,t,!0)),t.$list.on("mouseleave.slick",e.proxy(t.setPaused,t,!1)),t.options.accessibility===!0&&t.$list.on("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),e(window).on("orientationchange.slick.slick-"+t.instanceUid,e.proxy(t.orientationChange,t)),e(window).on("resize.slick.slick-"+t.instanceUid,e.proxy(t.resize,t)),e("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),e(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),e(document).on("ready.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.initUI=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&e.$dots.show(),e.options.autoplay===!0&&e.autoPlay()},t.prototype.keyHandler=function(e){var t=this;e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&t.options.accessibility===!0?t.changeSlide({data:{message:"previous"}}):39===e.keyCode&&t.options.accessibility===!0&&t.changeSlide({data:{message:"next"}}))},t.prototype.lazyLoad=function(){function t(t){e("img[data-lazy]",t).each(function(){var t=e(this),n=e(this).attr("data-lazy"),i=document.createElement("img");i.onload=function(){t.animate({opacity:0},100,function(){t.attr("src",n).animate({opacity:1},200,function(){t.removeAttr("data-lazy").removeClass("slick-loading")})})},i.src=n})}var n,i,r,o,s=this;s.options.centerMode===!0?s.options.infinite===!0?(r=s.currentSlide+(s.options.slidesToShow/2+1),o=r+s.options.slidesToShow+2):(r=Math.max(0,s.currentSlide-(s.options.slidesToShow/2+1)),o=2+(s.options.slidesToShow/2+1)+s.currentSlide):(r=s.options.infinite?s.options.slidesToShow+s.currentSlide:s.currentSlide,o=r+s.options.slidesToShow,s.options.fade===!0&&(r>0&&r--,o<=s.slideCount&&o++)),n=s.$slider.find(".slick-slide").slice(r,o),t(n),s.slideCount<=s.options.slidesToShow?(i=s.$slider.find(".slick-slide"),t(i)):s.currentSlide>=s.slideCount-s.options.slidesToShow?(i=s.$slider.find(".slick-cloned").slice(0,s.options.slidesToShow),t(i)):0===s.currentSlide&&(i=s.$slider.find(".slick-cloned").slice(-1*s.options.slidesToShow),t(i))},t.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI(),"progressive"===e.options.lazyLoad&&e.progressiveLazyLoad()},t.prototype.next=t.prototype.slickNext=function(){var e=this;e.changeSlide({data:{message:"next"}})},t.prototype.orientationChange=function(){var e=this;e.checkResponsive(),e.setPosition()},t.prototype.pause=t.prototype.slickPause=function(){var e=this;e.autoPlayClear(),e.paused=!0},t.prototype.play=t.prototype.slickPlay=function(){var e=this;e.paused=!1,e.autoPlay()},t.prototype.postSlide=function(e){var t=this;t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.setPosition(),t.swipeLeft=null,t.options.autoplay===!0&&t.paused===!1&&t.autoPlay(),t.options.accessibility===!0&&t.initADA()},t.prototype.prev=t.prototype.slickPrev=function(){var e=this;e.changeSlide({data:{message:"previous"}})},t.prototype.preventDefault=function(e){e.preventDefault()},t.prototype.progressiveLazyLoad=function(){var t,n,i=this;t=e("img[data-lazy]",i.$slider).length,t>0&&(n=e("img[data-lazy]",i.$slider).first(),n.attr("src",null),n.attr("src",n.attr("data-lazy")).removeClass("slick-loading").load(function(){n.removeAttr("data-lazy"),i.progressiveLazyLoad(),i.options.adaptiveHeight===!0&&i.setPosition()}).error(function(){n.removeAttr("data-lazy"),i.progressiveLazyLoad()}))},t.prototype.refresh=function(t){var n,i,r=this;i=r.slideCount-r.options.slidesToShow,r.options.infinite||(r.slideCount<=r.options.slidesToShow?r.currentSlide=0:r.currentSlide>i&&(r.currentSlide=i)),n=r.currentSlide,r.destroy(!0),e.extend(r,r.initials,{currentSlide:n}),r.init(),t||r.changeSlide({data:{message:"index",index:n}},!1)},t.prototype.registerBreakpoints=function(){var t,n,i,r=this,o=r.options.responsive||null;if("array"===e.type(o)&&o.length){r.respondTo=r.options.respondTo||"window";for(t in o)if(i=r.breakpoints.length-1,n=o[t].breakpoint,o.hasOwnProperty(t)){for(;i>=0;)r.breakpoints[i]&&r.breakpoints[i]===n&&r.breakpoints.splice(i,1),i--;r.breakpoints.push(n),r.breakpointSettings[n]=o[t].settings}r.breakpoints.sort(function(e,t){return r.options.mobileFirst?e-t:t-e})}},t.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&0!==t.currentSlide&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.checkResponsive(!1,!0),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses(0),t.setPosition(),t.$slider.trigger("reInit",[t]),t.options.autoplay===!0&&t.focusHandler()},t.prototype.resize=function(){var t=this;e(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout(function(){t.windowWidth=e(window).width(),t.checkResponsive(),t.unslicked||t.setPosition();
},50))},t.prototype.removeSlide=t.prototype.slickRemove=function(e,t,n){var i=this;return"boolean"==typeof e?(t=e,e=t===!0?0:i.slideCount-1):e=t===!0?--e:e,i.slideCount<1||0>e||e>i.slideCount-1?!1:(i.unload(),n===!0?i.$slideTrack.children().remove():i.$slideTrack.children(this.options.slide).eq(e).remove(),i.$slides=i.$slideTrack.children(this.options.slide),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.append(i.$slides),i.$slidesCache=i.$slides,void i.reinit())},t.prototype.setCSS=function(e){var t,n,i=this,r={};i.options.rtl===!0&&(e=-e),t="left"==i.positionProp?Math.ceil(e)+"px":"0px",n="top"==i.positionProp?Math.ceil(e)+"px":"0px",r[i.positionProp]=e,i.transformsEnabled===!1?i.$slideTrack.css(r):(r={},i.cssTransitions===!1?(r[i.animType]="translate("+t+", "+n+")",i.$slideTrack.css(r)):(r[i.animType]="translate3d("+t+", "+n+", 0px)",i.$slideTrack.css(r)))},t.prototype.setDimensions=function(){var e=this;e.options.vertical===!1?e.options.centerMode===!0&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),e.options.centerMode===!0&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),e.options.vertical===!1&&e.options.variableWidth===!1?(e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length))):e.options.variableWidth===!0?e.$slideTrack.width(5e3*e.slideCount):(e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length)));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();e.options.variableWidth===!1&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},t.prototype.setFade=function(){var t,n=this;n.$slides.each(function(i,r){t=n.slideWidth*i*-1,n.options.rtl===!0?e(r).css({position:"relative",right:t,top:0,zIndex:n.options.zIndex-2,opacity:0}):e(r).css({position:"relative",left:t,top:0,zIndex:n.options.zIndex-2,opacity:0})}),n.$slides.eq(n.currentSlide).css({zIndex:n.options.zIndex-1,opacity:1})},t.prototype.setHeight=function(){var e=this;if(1===e.options.slidesToShow&&e.options.adaptiveHeight===!0&&e.options.vertical===!1){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.css("height",t)}},t.prototype.setOption=t.prototype.slickSetOption=function(t,n,i){var r,o,s=this;if("responsive"===t&&"array"===e.type(n))for(o in n)if("array"!==e.type(s.options.responsive))s.options.responsive=[n[o]];else{for(r=s.options.responsive.length-1;r>=0;)s.options.responsive[r].breakpoint===n[o].breakpoint&&s.options.responsive.splice(r,1),r--;s.options.responsive.push(n[o])}else s.options[t]=n;i===!0&&(s.unload(),s.reinit())},t.prototype.setPosition=function(){var e=this;e.setDimensions(),e.setHeight(),e.options.fade===!1?e.setCSS(e.getLeft(e.currentSlide)):e.setFade(),e.$slider.trigger("setPosition",[e])},t.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp=e.options.vertical===!0?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),(void 0!==t.WebkitTransition||void 0!==t.MozTransition||void 0!==t.msTransition)&&e.options.useCSS===!0&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&e.animType!==!1&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&e.animType!==!1},t.prototype.setSlideClasses=function(e){var t,n,i,r,o=this;n=o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),o.$slides.eq(e).addClass("slick-current"),o.options.centerMode===!0?(t=Math.floor(o.options.slidesToShow/2),o.options.infinite===!0&&(e>=t&&e<=o.slideCount-1-t?o.$slides.slice(e-t,e+t+1).addClass("slick-active").attr("aria-hidden","false"):(i=o.options.slidesToShow+e,n.slice(i-t+1,i+t+2).addClass("slick-active").attr("aria-hidden","false")),0===e?n.eq(n.length-1-o.options.slidesToShow).addClass("slick-center"):e===o.slideCount-1&&n.eq(o.options.slidesToShow).addClass("slick-center")),o.$slides.eq(e).addClass("slick-center")):e>=0&&e<=o.slideCount-o.options.slidesToShow?o.$slides.slice(e,e+o.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):n.length<=o.options.slidesToShow?n.addClass("slick-active").attr("aria-hidden","false"):(r=o.slideCount%o.options.slidesToShow,i=o.options.infinite===!0?o.options.slidesToShow+e:e,o.options.slidesToShow==o.options.slidesToScroll&&o.slideCount-e<o.options.slidesToShow?n.slice(i-(o.options.slidesToShow-r),i+r).addClass("slick-active").attr("aria-hidden","false"):n.slice(i,i+o.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===o.options.lazyLoad&&o.lazyLoad()},t.prototype.setupInfinite=function(){var t,n,i,r=this;if(r.options.fade===!0&&(r.options.centerMode=!1),r.options.infinite===!0&&r.options.fade===!1&&(n=null,r.slideCount>r.options.slidesToShow)){for(i=r.options.centerMode===!0?r.options.slidesToShow+1:r.options.slidesToShow,t=r.slideCount;t>r.slideCount-i;t-=1)n=t-1,e(r.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n-r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");for(t=0;i>t;t+=1)n=t,e(r.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n+r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");r.$slideTrack.find(".slick-cloned").find("[id]").each(function(){e(this).attr("id","")})}},t.prototype.setPaused=function(e){var t=this;t.options.autoplay===!0&&t.options.pauseOnHover===!0&&(t.paused=e,e?t.autoPlayClear():t.autoPlay())},t.prototype.selectHandler=function(t){var n=this,i=e(t.target).is(".slick-slide")?e(t.target):e(t.target).parents(".slick-slide"),r=parseInt(i.attr("data-slick-index"));return r||(r=0),n.slideCount<=n.options.slidesToShow?(n.setSlideClasses(r),void n.asNavFor(r)):void n.slideHandler(r)},t.prototype.slideHandler=function(e,t,n){var i,r,o,s,a=null,l=this;return t=t||!1,l.animating===!0&&l.options.waitForAnimate===!0||l.options.fade===!0&&l.currentSlide===e||l.slideCount<=l.options.slidesToShow?void 0:(t===!1&&l.asNavFor(e),i=e,a=l.getLeft(i),s=l.getLeft(l.currentSlide),l.currentLeft=null===l.swipeLeft?s:l.swipeLeft,l.options.infinite===!1&&l.options.centerMode===!1&&(0>e||e>l.getDotCount()*l.options.slidesToScroll)?void(l.options.fade===!1&&(i=l.currentSlide,n!==!0?l.animateSlide(s,function(){l.postSlide(i)}):l.postSlide(i))):l.options.infinite===!1&&l.options.centerMode===!0&&(0>e||e>l.slideCount-l.options.slidesToScroll)?void(l.options.fade===!1&&(i=l.currentSlide,n!==!0?l.animateSlide(s,function(){l.postSlide(i)}):l.postSlide(i))):(l.options.autoplay===!0&&clearInterval(l.autoPlayTimer),r=0>i?l.slideCount%l.options.slidesToScroll!==0?l.slideCount-l.slideCount%l.options.slidesToScroll:l.slideCount+i:i>=l.slideCount?l.slideCount%l.options.slidesToScroll!==0?0:i-l.slideCount:i,l.animating=!0,l.$slider.trigger("beforeChange",[l,l.currentSlide,r]),o=l.currentSlide,l.currentSlide=r,l.setSlideClasses(l.currentSlide),l.updateDots(),l.updateArrows(),l.options.fade===!0?(n!==!0?(l.fadeSlideOut(o),l.fadeSlide(r,function(){l.postSlide(r)})):l.postSlide(r),void l.animateHeight()):void(n!==!0?l.animateSlide(a,function(){l.postSlide(r)}):l.postSlide(r))))},t.prototype.startLoad=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},t.prototype.swipeDirection=function(){var e,t,n,i,r=this;return e=r.touchObject.startX-r.touchObject.curX,t=r.touchObject.startY-r.touchObject.curY,n=Math.atan2(t,e),i=Math.round(180*n/Math.PI),0>i&&(i=360-Math.abs(i)),45>=i&&i>=0?r.options.rtl===!1?"left":"right":360>=i&&i>=315?r.options.rtl===!1?"left":"right":i>=135&&225>=i?r.options.rtl===!1?"right":"left":r.options.verticalSwiping===!0?i>=35&&135>=i?"left":"right":"vertical"},t.prototype.swipeEnd=function(e){var t,n=this;if(n.dragging=!1,n.shouldClick=n.touchObject.swipeLength>10?!1:!0,void 0===n.touchObject.curX)return!1;if(n.touchObject.edgeHit===!0&&n.$slider.trigger("edge",[n,n.swipeDirection()]),n.touchObject.swipeLength>=n.touchObject.minSwipe)switch(n.swipeDirection()){case"left":t=n.options.swipeToSlide?n.checkNavigable(n.currentSlide+n.getSlideCount()):n.currentSlide+n.getSlideCount(),n.slideHandler(t),n.currentDirection=0,n.touchObject={},n.$slider.trigger("swipe",[n,"left"]);break;case"right":t=n.options.swipeToSlide?n.checkNavigable(n.currentSlide-n.getSlideCount()):n.currentSlide-n.getSlideCount(),n.slideHandler(t),n.currentDirection=1,n.touchObject={},n.$slider.trigger("swipe",[n,"right"])}else n.touchObject.startX!==n.touchObject.curX&&(n.slideHandler(n.currentSlide),n.touchObject={})},t.prototype.swipeHandler=function(e){var t=this;if(!(t.options.swipe===!1||"ontouchend"in document&&t.options.swipe===!1||t.options.draggable===!1&&-1!==e.type.indexOf("mouse")))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,t.options.verticalSwiping===!0&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold),e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},t.prototype.swipeMove=function(e){var t,n,i,r,o,s=this;return o=void 0!==e.originalEvent?e.originalEvent.touches:null,!s.dragging||o&&1!==o.length?!1:(t=s.getLeft(s.currentSlide),s.touchObject.curX=void 0!==o?o[0].pageX:e.clientX,s.touchObject.curY=void 0!==o?o[0].pageY:e.clientY,s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curX-s.touchObject.startX,2))),s.options.verticalSwiping===!0&&(s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curY-s.touchObject.startY,2)))),n=s.swipeDirection(),"vertical"!==n?(void 0!==e.originalEvent&&s.touchObject.swipeLength>4&&e.preventDefault(),r=(s.options.rtl===!1?1:-1)*(s.touchObject.curX>s.touchObject.startX?1:-1),s.options.verticalSwiping===!0&&(r=s.touchObject.curY>s.touchObject.startY?1:-1),i=s.touchObject.swipeLength,s.touchObject.edgeHit=!1,s.options.infinite===!1&&(0===s.currentSlide&&"right"===n||s.currentSlide>=s.getDotCount()&&"left"===n)&&(i=s.touchObject.swipeLength*s.options.edgeFriction,s.touchObject.edgeHit=!0),s.options.vertical===!1?s.swipeLeft=t+i*r:s.swipeLeft=t+i*(s.$list.height()/s.listWidth)*r,s.options.verticalSwiping===!0&&(s.swipeLeft=t+i*r),s.options.fade===!0||s.options.touchMove===!1?!1:s.animating===!0?(s.swipeLeft=null,!1):void s.setCSS(s.swipeLeft)):void 0)},t.prototype.swipeStart=function(e){var t,n=this;return 1!==n.touchObject.fingerCount||n.slideCount<=n.options.slidesToShow?(n.touchObject={},!1):(void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),n.touchObject.startX=n.touchObject.curX=void 0!==t?t.pageX:e.clientX,n.touchObject.startY=n.touchObject.curY=void 0!==t?t.pageY:e.clientY,void(n.dragging=!0))},t.prototype.unfilterSlides=t.prototype.slickUnfilter=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},t.prototype.unload=function(){var t=this;e(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},t.prototype.unslick=function(e){var t=this;t.$slider.trigger("unslick",[t,e]),t.destroy()},t.prototype.updateArrows=function(){var e,t=this;e=Math.floor(t.options.slidesToShow/2),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&!t.options.infinite&&(t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===t.currentSlide?(t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-t.options.slidesToShow&&t.options.centerMode===!1?(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-1&&t.options.centerMode===!0&&(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},t.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),e.$dots.find("li").eq(Math.floor(e.currentSlide/e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},t.prototype.visibility=function(){var e=this;document[e.hidden]?(e.paused=!0,e.autoPlayClear()):e.options.autoplay===!0&&(e.paused=!1,e.autoPlay())},t.prototype.initADA=function(){var t=this;t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),t.$slideTrack.attr("role","listbox"),t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n){e(this).attr({role:"option","aria-describedby":"slick-slide"+t.instanceUid+n})}),null!==t.$dots&&t.$dots.attr("role","tablist").find("li").each(function(n){e(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+t.instanceUid+n,id:"slick-slide"+t.instanceUid+n})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),t.activateADA()},t.prototype.activateADA=function(){var e=this;e.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},t.prototype.focusHandler=function(){var t=this;t.$slider.on("focus.slick blur.slick","*",function(n){n.stopImmediatePropagation();var i=e(this);setTimeout(function(){t.isPlay&&(i.is(":focus")?(t.autoPlayClear(),t.paused=!0):(t.paused=!1,t.autoPlay()))},0)})},e.fn.slick=function(){var e,n,i=this,r=arguments[0],o=Array.prototype.slice.call(arguments,1),s=i.length;for(e=0;s>e;e++)if("object"==typeof r||"undefined"==typeof r?i[e].slick=new t(i[e],r):n=i[e].slick[r].apply(i[e].slick,o),"undefined"!=typeof n)return n;return i}}),/**
 * History.js Core
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
function(e,t){"use strict";var n=e.console||t,i=e.document,r=e.navigator,o=e.amplify||!1,s=e.setTimeout,a=e.clearTimeout,l=e.setInterval,d=e.clearInterval,c=e.JSON,u=e.alert,A=e.History=e.History||{},p=e.history;if(c.stringify=c.stringify||c.encode,c.parse=c.parse||c.decode,"undefined"!=typeof A.init)throw new Error("History.js Core has already been loaded...");A.init=function(){return"undefined"==typeof A.Adapter?!1:("undefined"!=typeof A.initCore&&A.initCore(),"undefined"!=typeof A.initHtml4&&A.initHtml4(),!0)},A.initCore=function(){if("undefined"!=typeof A.initCore.initialized)return!1;A.initCore.initialized=!0;var h,f;A.options=A.options||{},A.options.hashChangeInterval=A.options.hashChangeInterval||100,A.options.safariPollInterval=A.options.safariPollInterval||500,A.options.doubleCheckInterval=A.options.doubleCheckInterval||500,A.options.storeInterval=A.options.storeInterval||1e3,A.options.busyDelay=A.options.busyDelay||250,A.options.debug=A.options.debug||!1,A.options.initialTitle=A.options.initialTitle||i.title,A.temp={internal:!1,expectedStateId:!1,ignore:0,same:!1,anchor:!1},A.intervalList=[],A.clearAllIntervals=function(){var e,t=A.intervalList;if("undefined"!=typeof t&&null!==t){for(e=0;e<t.length;e++)d(t[e]);A.intervalList=null}},A.Adapter.bind(e,"beforeunload",A.clearAllIntervals),A.Adapter.bind(e,"unload",A.clearAllIntervals),A.debug=function(){A.options.debug&&A.log.apply(A,arguments)},A.log=function(){var e,t,r,o,s,a=!("undefined"==typeof n||"undefined"==typeof n.log||"undefined"==typeof n.log.apply),l=i.getElementById("log");for(a?(o=Array.prototype.slice.call(arguments),e=o.shift(),"undefined"!=typeof n.debug?n.debug.apply(n,[e,o]):n.log.apply(n,[e,o])):e="\n"+arguments[0]+"\n",t=1,r=arguments.length;r>t;++t){if(s=arguments[t],"object"==typeof s&&"undefined"!=typeof c)try{s=c.stringify(s)}catch(d){}e+="\n"+s+"\n"}l?(l.value+=e+"\n-----\n",l.scrollTop=l.scrollHeight-l.clientHeight):a||u(e)},A.getInternetExplorerMajorVersion=function(){var e=A.getInternetExplorerMajorVersion.cached="undefined"!=typeof A.getInternetExplorerMajorVersion.cached?A.getInternetExplorerMajorVersion.cached:function(){for(var e=3,t=i.createElement("div"),n=t.getElementsByTagName("i");(t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")&&n[0];);return e>4?e:!1}();return e},A.isInternetExplorer=function(){var e=A.isInternetExplorer.cached="undefined"!=typeof A.isInternetExplorer.cached?A.isInternetExplorer.cached:Boolean(A.getInternetExplorerMajorVersion());return e},A.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!(/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(r.userAgent)||/AppleWebKit\/5([0-2]|3[0-2])/i.test(r.userAgent))),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in i)||A.isInternetExplorer()&&A.getInternetExplorerMajorVersion()<8)},A.bugs={},A.bugs.safariIFrame=Boolean(!A.emulated.pushState&&"Apple Computer, Inc."===r.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)&&e.parent!==e),A.bugs.safariHash=Boolean(!A.emulated.pushState&&"Apple Computer, Inc."===r.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),A.bugs.safariPoll=Boolean(!A.emulated.pushState&&"Apple Computer, Inc."===r.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),A.bugs.noHashPopState=Boolean(!A.emulated.pushState&&"Apple Computer, Inc."===r.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),A.bugs.noInitialPopState=Boolean(!A.emulated.pushState&&("Apple Computer, Inc."===r.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)||/Gecko\//.test(r.userAgent))),A.bugs.ieDoubleCheck=Boolean(A.isInternetExplorer()&&A.getInternetExplorerMajorVersion()<8),A.bugs.hashEscape=Boolean(A.isInternetExplorer()&&A.getInternetExplorerMajorVersion()<7),A.enabled=!A.emulated.pushState,A.isEmptyObject=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},A.cloneObject=function(e){var t,n;return e?(t=c.stringify(e),n=c.parse(t)):n={},n},A.getRootUrl=function(){var e=i.location.protocol+"//"+(i.location.hostname||i.location.host);return i.location.port&&(e+=":"+i.location.port),e+="/"},A.getBaseHref=function(){var e=i.getElementsByTagName("base"),t=null,n="";return 1===e.length&&(t=e[0],n=t.href.replace(/[^\/]+$/,"")),n=n.replace(/\/+$/,""),n&&(n+="/"),n},A.getBaseUrl=function(){var e=A.getBaseHref()||A.getBasePageUrl()||A.getRootUrl();return e},A.getPageUrl=function(){var e,t=A.getState(!1,!1),n=(t||{}).url||i.location.href;return e=n.replace(/\/+$/,"").replace(/[^\/]+$/,function(e,t,n){return/\./.test(e)?e:e+"/"})},A.getBasePageUrl=function(){var e=i.location.href.replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e,t,n){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/";return e},A.getFullUrl=function(e,t){var n=e,i=e.substring(0,1);return t="undefined"==typeof t?!0:t,/[a-z]+\:\/\//.test(e)||(n="/"===i?A.getRootUrl()+e.replace(/^\/+/,""):"#"===i?A.getPageUrl().replace(/#.*/,"")+e:"?"===i?A.getPageUrl().replace(/[\?#].*/,"")+e:t?A.getBaseUrl()+e.replace(/^(\.\/)+/,""):A.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),n.replace(/\#$/,"")},A.getShortUrl=function(e){var t=A.getFullUrl(e),n=t,i=A.getBaseUrl(),r=A.getRootUrl();return A.emulated.pushState&&(n=n.replace(i,"")),n=n.replace(r,"/"),/^\.?\.?\//.test(n)===!1&&(n=r+n===t?"/"+n:"./"+n),n=n.replace(/^(\.\/)+/g,"./").replace(/\#$/,"")},A.store=o?o.store("History.store")||{}:{},A.store.idToState=A.store.idToState||{},A.store.urlToId=A.store.urlToId||{},A.store.stateToId=A.store.stateToId||{},A.idToState=A.idToState||{},A.stateToId=A.stateToId||{},A.urlToId=A.urlToId||{},A.storedStates=A.storedStates||[],A.savedStates=A.savedStates||[],A.getState=function(e,t){"undefined"==typeof e&&(e=!0),"undefined"==typeof t&&(t=!0);var n=A.getLastSavedState();return!n&&t&&(n=A.createStateObject()),e&&(n=A.cloneObject(n),n.url=n.cleanUrl||n.url,n.internal=A.temp.internal,n.same=A.temp.same,n.anchor=n.anchor||A.temp.anchor),n},A.getIdByState=function(e){var t,n=A.extractId(e.url);if(!n)if(t=A.getStateString(e),"undefined"!=typeof A.stateToId[t])n=A.stateToId[t];else if("undefined"!=typeof A.store.stateToId[t])n=A.store.stateToId[t];else{for(;;)if(n=String(Math.floor(1e3*Math.random())),"undefined"==typeof A.idToState[n]&&"undefined"==typeof A.store.idToState[n])break;A.stateToId[t]=n,A.idToState[n]=e}return n},A.normalizeState=function(e){var t,n;return e&&"object"==typeof e||(e={}),"undefined"!=typeof e.normalized?e:(e.data&&"object"==typeof e.data||(e.data={}),t={},t.normalized=!0,t.title=e.title||"",t.url=A.getFullUrl(A.unescapeString(e.url||i.location.href)),t.data=A.cloneObject(e.data),t.anchor=A.extractAnchor(t.url),t.hash=A.getShortUrl(t.url),t.id=A.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_anchor.*/,"").replace(/\??\&_suid.*/,"").replace(/#.*/,""),t.url=t.cleanUrl,n=!A.isEmptyObject(t.data),(t.title||n)&&(t.hash=A.getShortUrl(t.url),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.anchor&&(/\?/.test(t.hash)||(t.hash+="?"),A.emulated.pushState&&(t.hash+="&_anchor="+t.anchor),t.url+="#"+t.anchor),t.hashedUrl=A.getFullUrl(t.hash),(A.emulated.pushState||A.bugs.safariPoll)&&A.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t)},A.createStateObject=function(e,t,n){var i={data:e,title:t,url:n};return i=A.normalizeState(i)},A.getStateById=function(e){e=String(e);var n=A.idToState[e]||A.store.idToState[e]||t;return n},A.getStateString=function(e){var t,n,i=A.normalizeState(e);return t={data:i.data,title:e.title,url:e.url},n=c.stringify(t)},A.getStateId=function(e){var t,n=A.normalizeState(e);return t=n.id},A.getHashByState=function(e){var t,n=A.normalizeState(e);return t=n.hash},A.extractAnchor=function(e){var t,n,i;return t=e.replace(/^[^#]+#?/,""),t||(n=/(.*)\&_anchor=([a-zA-Z0-9_\-]+)$/.exec(e),i=n?n[1]||e:e,t=n?String(n[2]||""):""),t||!1},A.extractId=function(e){var t,n,i;return n=/(.*)\&_suid=([0-9]+)$/.exec(e),i=n?n[1]||e:e,t=n?String(n[2]||""):"",t||!1},A.isTraditionalAnchor=function(e){var t=!/[^a-zA-Z0-9_\-]/.test(e);return t},A.extractState=function(e,t,n){var i,r,o=null;return t=t||!1,n="undefined"==typeof n?!0:n,e=e,i=A.extractId(e),i&&(o=A.getStateById(i)),o||(r=A.getFullUrl(e),i=A.getIdByUrl(r)||!1,i&&(o=A.getStateById(i)),!o&&t&&(!n&&A.isTraditionalAnchor(e)||(o=A.createStateObject(null,null,r)))),o},A.getIdByUrl=function(e){var n=A.urlToId[e]||A.store.urlToId[e]||t;return n},A.getLastSavedState=function(){return A.getStateById(A.savedStates[A.savedStates.length-1])},A.getLastStoredState=function(){return A.getStateById(A.storedStates[A.storedStates.length-1])},A.hasUrlDuplicate=function(e){var t,n=!1;return t=A.extractState(e.url),n=t&&t.id!==e.id},A.storeState=function(e){return A.isLastStoredState(e)?e:(A.urlToId[e.url]=e.id,A.storedStates.push(e.id),e)},A.isLastStoredState=function(e){var t,n,i,r=!1;return A.storedStates.length&&(t=A.getLastStoredState(),n=e.id,i=t.id,r=n===i),r},A.isLastSavedState=function(e,t){var n,i,r,o,s,a=!1;return A.savedStates.length&&(n=A.getLastSavedState(),t?(o={data:e.data,title:e.title,url:e.cleanUrl},s={data:n.data,title:n.title,url:n.cleanUrl},a=c.stringify(o)===c.stringify(s)):(i=e.id,r=n.id,a=i===r)),a},A.saveState=function(e){return A.isLastSavedState(e)?e:(A.savedStates.push(e.id),e)},A.getStateByIndex=function(e){var t,n=null;return t="undefined"==typeof e?A.savedStates[A.savedStates.length-1]:0>e?A.savedStates[A.savedStates.length+e]:A.savedStates[e],n=A.getStateById(t)},A.getHash=function(){var e=A.unescapeHash(i.location.hash);return e},A.unescapeString=function(t){for(var n,i=t;;){if(n=e.decodeURI(i),n===i)break;i=n}return i},A.unescapeHash=function(e){var t=A.normalizeHash(e);return t=A.unescapeString(t)},A.normalizeHash=function(e){var t=e.replace(/[^#]*#/,"").replace(/#.*/,"");return t},A.setHash=function(e,t){if(t!==!1&&A.busy())return A.debug("History.setHash: we must wait",arguments),A.pushQueue({scope:A,callback:A.setHash,args:arguments,queue:t}),!1;A.debug("History.setHash: called",e);var n,r,o,s=A.escapeHash(e);return A.busy(!0),n=A.extractState(e,!0,!1),n&&!A.emulated.pushState?(A.debug("History.setHash: Hash is a state so skipping the hash set with a direct pushState call",arguments),A.pushState(n.data,n.title,n.url,!1)):i.location.hash!==s&&(A.bugs.safariHash?(r=A.getPageUrl(),o=A.extractState(r.replace(/#.*/,"")),o?A.pushState(o.data,o.title,o.url+"#"+s,!1):A.pushState(null,null,r+"#"+s,!1)):i.location.hash=s),A},A.escapeHash=function(t){var n=A.normalizeHash(t);return n=e.encodeURI(n),A.bugs.hashEscape||(n=n.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),n},A.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=A.unescapeHash(t)},A.setTitle=function(e){var t,n,r="string"==typeof e?e:e.title;if(r||(n=A.getStateByIndex(0),n&&n.url===(e.url||i.location.href)&&(r=n.title||A.options.initialTitle)),t=i.getElementsByTagName("title"),1===t.length)try{t[0].innerHTML=r.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(o){}return i.title=r,A},A.queues=[],A.busy=function(e){"undefined"!=typeof e?(A.debug("History.busy: changing ["+(A.busy.flag||!1)+"] to ["+(e||!1)+"]",A.queues.length),A.busy.flag=e):"undefined"==typeof A.busy.flag&&(A.busy.flag=!1);var t,n,i,r;return A.busy.flag||(a(A.busy.timeout),t=function(){if(!A.busy.flag)for(n=A.queues.length-1;n>=0;--n)i=A.queues[n],0!==i.length&&(r=i.shift(),A.fireQueueItem(r),A.busy.timeout=s(t,A.options.busyDelay))},A.busy.timeout=s(t,A.options.busyDelay)),A.busy.flag},A.fireQueueItem=function(e){return e.callback.apply(e.scope||A,e.args||[])},A.pushQueue=function(e){return A.queues[e.queue||0]=A.queues[e.queue||0]||[],A.queues[e.queue||0].push(e),A},A.queue=function(e,t){return"function"==typeof e&&(e={callback:e}),"undefined"!=typeof t&&(e.queue=t),A.busy()?A.pushQueue(e):A.fireQueueItem(e),A},A.clearQueue=function(){return A.busy.flag=!1,A.queues=[],A},A.stateChanged=!1,A.doubleChecker=!1,A.doubleCheckComplete=function(){return A.stateChanged=!0,A.doubleCheckClear(),A},A.doubleCheckClear=function(){return A.doubleChecker&&(a(A.doubleChecker),A.doubleChecker=!1),A},A.doubleCheck=function(e){return A.stateChanged=!1,A.doubleCheckClear(),A.bugs.ieDoubleCheck&&(A.doubleChecker=s(function(){return A.doubleCheckClear(),A.stateChanged||(A.debug("History.doubleCheck: State has not yet changed, trying again",arguments),e()),!0},A.options.doubleCheckInterval)),A},A.safariStatePoll=function(){var t,n=A.extractState(i.location.href);if(n&&!A.isLastSavedState(n))return t=n,t||(A.debug("History.safariStatePoll: new"),t=A.createStateObject()),A.debug("History.safariStatePoll: trigger"),A.Adapter.trigger(e,"popstate"),A},A.back=function(e){return A.debug("History.back: called",arguments),e!==!1&&A.busy()?(A.debug("History.back: we must wait",arguments),A.pushQueue({scope:A,callback:A.back,args:arguments,queue:e}),!1):(A.busy(!0),A.doubleCheck(function(){A.back(!1)}),p.go(-1),!0)},A.forward=function(e){return A.debug("History.forward: called",arguments),e!==!1&&A.busy()?(A.debug("History.forward: we must wait",arguments),A.pushQueue({scope:A,callback:A.forward,args:arguments,queue:e}),!1):(A.busy(!0),A.doubleCheck(function(){A.forward(!1)}),p.go(1),!0)},A.go=function(e){A.debug("History.go: called",arguments);var t,n;if(n=(0>e?-1*e:e)-1,n&&A.queue(function(){A.temp.ignore=n,A.busy(!1)}),e>0)for(t=1;e>=t;++t)A.forward();else{if(!(0>e))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(t=-1;t>=e;--t)A.back()}return A},A.saveState(A.storeState(A.extractState(i.location.href,!0))),o&&(A.onUnload=function(){var e,t=o.store("History.store")||{};t.idToState=t.idToState||{},t.urlToId=t.urlToId||{},t.stateToId=t.stateToId||{};for(e in A.idToState)A.idToState.hasOwnProperty(e)&&(t.idToState[e]=A.idToState[e]);for(e in A.urlToId)A.urlToId.hasOwnProperty(e)&&(t.urlToId[e]=A.urlToId[e]);for(e in A.stateToId)A.stateToId.hasOwnProperty(e)&&(t.stateToId[e]=A.stateToId[e]);A.store=t,o.store("History.store",t)},A.intervalList.push(l(A.onUnload,A.options.storeInterval)),A.Adapter.bind(e,"beforeunload",A.onUnload),A.Adapter.bind(e,"unload",A.onUnload)),A.emulated.pushState?(f=function(){},A.pushState=A.pushState||f,A.replaceState=A.replaceState||f):(A.onPopState=function(t,n){var r,o,s,a=!1,l=!1;if(A.doubleCheckComplete(),r=A.getHash()){if(o=A.extractState(r||i.location.href,!0,!1))return A.debug("History.onPopState: state anchor",r,o),A.replaceState(o.data,o.title,o.url,!1),!1;A.debug("History.onPopState: traditional anchor",r)}if(l=A.Adapter.extractEventData("state",t,n)||!1,a=l?A.getStateById(l):A.temp.expectedStateId?A.getStateById(A.temp.expectedStateId):A.extractState(i.location.href),a||(r&&(s=A.extractState(i.location.href.replace(/#.*/,"")),s&&(a=A.createStateObject(s.data,s.title,i.location.href))),a||(a=A.createStateObject(null,null,i.location.href))),A.temp.ignore)return--A.temp.ignore,A.busy(!1),!1;if("hashchange"===A.temp.internal){if(A.isLastSavedState(a))return A.busy(!1),!1;A.temp.internal=!1}return A.temp.expectedStateId||(A.temp.internal=!1),A.temp.expectedStateId=!1,A.temp.same=A.isLastSavedState(a,!0),A.storeState(a),A.saveState(a),A.setTitle(a),A.Adapter.trigger(e,"statechange"),A.busy(!1),!0},A.Adapter.bind(e,"popstate",A.onPopState),A.pushState=function(t,n,i,r){if(A.debug("History.pushState: called",arguments),r!==!1&&A.busy())return A.debug("History.pushState: we must wait",arguments),A.pushQueue({scope:A,callback:A.pushState,args:arguments,queue:r}),!1;A.busy(!0);var o=A.createStateObject(t,n,i);return r!==!1&&(A.temp.internal="pushState"),A.temp.same=A.isLastSavedState(o,!0),A.isLastSavedState(o)?(A.Adapter.trigger(e,"statechange"),A.busy(!1)):(A.storeState(o),p.pushState(o.id,o.title,o.url),A.temp.expectedStateId=o.id,A.Adapter.trigger(e,"popstate")),!0},A.replaceState=function(t,n,i,r){if(A.debug("History.replaceState: called",arguments),r!==!1&&A.busy())return A.debug("History.replaceState: we must wait",arguments),A.pushQueue({scope:A,callback:A.replaceState,args:arguments,queue:r}),!1;A.busy(!0);var o=A.createStateObject(t,n,i);return r!==!1&&(A.temp.internal="replaceState"),A.temp.same=A.isLastSavedState(o,!0),A.isLastSavedState(o)?(A.Adapter.trigger(e,"statechange"),A.busy(!1)):(A.storeState(o),p.replaceState(o.id,o.title,o.url),A.temp.expectedStateId=o.id,A.Adapter.trigger(e,"popstate")),!0},++A.temp.ignore,A.bugs.safariPoll&&A.intervalList.push(l(A.safariStatePoll,A.options.safariPollInterval)),A.bugs.safariIFrame&&(h=A.getState(),p.pushState(h.data,h.title,h.url)),A.bugs.noHashPopState&&(A.Adapter.bind(e,"hashchange",function(){A.temp.internal="hashchange",A.Adapter.trigger(e,"popstate")}),A.getHash()&&A.bugs.noInitialPopState&&A.Adapter.onDomLoad(function(){A.Adapter.trigger(e,"popstate")})),A.bugs.noInitialPopState&&A.Adapter.trigger(e,"popstate"))},A.init()}(window),function(){var e,t,n,i,r,o,s,a,l,d,c,u,A,p,h,f,g,m,v,w,y,b,x,_,S,T,C,k,E,D,P,M,z,B,Q,I,j,q,R,F,H,$,N,O,W,U,L,V,Z=[].slice,G={}.hasOwnProperty,Y=function(e,t){function n(){this.constructor=e}for(var i in t)G.call(t,i)&&(e[i]=t[i]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e},J=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};for(C={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},j=function(){var e;return null!=(e="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?e:+new Date},F=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,T=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==F&&(F=function(e){return setTimeout(e,50)},T=function(e){return clearTimeout(e)}),$=function(e){var t,n;return t=j(),(n=function(){var i;return i=j()-t,i>=33?(t=j(),e(i,function(){return F(n)})):setTimeout(n,33-i)})()},H=function(){var e,t,n;return n=arguments[0],t=arguments[1],e=3<=arguments.length?Z.call(arguments,2):[],"function"==typeof n[t]?n[t].apply(n,e):n[t]},k=function(){var e,t,n,i,r,o,s;for(i=arguments[0],o=2<=arguments.length?Z.call(arguments,1):[],e=0,n=o.length;n>e;e++)if(r=o[e])for(t in r)G.call(r,t)&&(s=r[t],null!=i[t]&&"object"==typeof i[t]&&null!=s&&"object"==typeof s?k(i[t],s):i[t]=s);return i},x=function(e){var t,n,i,r,o;for(r=t=0,n=0,i=e.length;i>n;n++)o=e[n],r+=Math.abs(o),t++;return r/t},D=function(e,t){var n,i,r,o;if(null==e&&(e="options"),null==t&&(t=!0),r=document.querySelector("[data-pace-"+e+"]")){if(n=r.getAttribute("data-pace-"+e),!t)return n;try{return JSON.parse(n)}catch(o){return i=o,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",i):void 0}}},s=function(){function e(){}return e.prototype.on=function(e,t,n,i){var r;return null==i&&(i=!1),null==this.bindings&&(this.bindings={}),null==(r=this.bindings)[e]&&(r[e]=[]),this.bindings[e].push({handler:t,ctx:n,once:i})},e.prototype.once=function(e,t,n){return this.on(e,t,n,!0)},e.prototype.off=function(e,t){var n,i,r;if(null!=(null!=(i=this.bindings)?i[e]:void 0)){if(null==t)return delete this.bindings[e];for(n=0,r=[];n<this.bindings[e].length;)this.bindings[e][n].handler===t?r.push(this.bindings[e].splice(n,1)):r.push(n++);return r}},e.prototype.trigger=function(){var e,t,n,i,r,o,s,a,l;if(n=arguments[0],e=2<=arguments.length?Z.call(arguments,1):[],null!=(s=this.bindings)?s[n]:void 0){for(r=0,l=[];r<this.bindings[n].length;)a=this.bindings[n][r],i=a.handler,t=a.ctx,o=a.once,i.apply(null!=t?t:this,e),o?l.push(this.bindings[n].splice(r,1)):l.push(r++);return l}},e}(),d=window.Pace||{},window.Pace=d,k(d,s.prototype),q=d.options=k({},C,window.paceOptions,D()),R=["ajax","document","eventLag","elements"],Q=0,I=R.length;I>Q;Q++)U=R[Q],q[U]===!0&&(q[U]=C[U]);l=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return Y(t,e),t}(Error),t=function(){function e(){this.progress=0}return e.prototype.getElement=function(){var e;if(null==this.el){if(e=document.querySelector(q.target),!e)throw new l;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=e.firstChild?e.insertBefore(this.el,e.firstChild):e.appendChild(this.el)}return this.el},e.prototype.finish=function(){var e;return e=this.getElement(),e.className=e.className.replace("pace-active",""),e.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},e.prototype.update=function(e){return this.progress=e,this.render()},e.prototype.destroy=function(){var e;try{this.getElement().parentNode.removeChild(this.getElement())}catch(e){l=e}return this.el=void 0},e.prototype.render=function(){var e,t,n,i,r,o,s;if(null==document.querySelector(q.target))return!1;for(e=this.getElement(),s="translate3d("+this.progress+"%, 0, 0)",o=["webkitTransform","msTransform","transform"],n=0,i=o.length;i>n;n++)t=o[n],e.children[0].style[t]=s;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(e.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),this.progress>=100?r="99":(r=this.progress<10?"0":"",r+=0|this.progress),e.children[0].setAttribute("data-progress",""+r)),this.lastRenderedProgress=this.progress},e.prototype.done=function(){return this.progress>=100},e}(),a=function(){function e(){this.bindings={}}return e.prototype.trigger=function(e,t){var n,i,r,o,s;if(null!=this.bindings[e]){for(o=this.bindings[e],s=[],i=0,r=o.length;r>i;i++)n=o[i],s.push(n.call(this,t));return s}},e.prototype.on=function(e,t){var n;return null==(n=this.bindings)[e]&&(n[e]=[]),this.bindings[e].push(t)},e}(),m=window.XMLHttpRequest,g=window.XDomainRequest,f=window.WebSocket,E=function(e,t){var n,i,r,o;o=[];for(r in t.prototype)try{null==e[r]&&"function"!=typeof t[r]?"function"==typeof Object.defineProperty?o.push(Object.defineProperty(e,r,{get:function(){return t.prototype[r]},configurable:!0,enumerable:!0})):o.push(e[r]=t.prototype[r]):o.push(void 0)}catch(i){n=i}return o},z=[],d.ignore=function(){var e,t,n;return t=arguments[0],e=2<=arguments.length?Z.call(arguments,1):[],z.unshift("ignore"),n=t.apply(null,e),z.shift(),n},d.track=function(){var e,t,n;return t=arguments[0],e=2<=arguments.length?Z.call(arguments,1):[],z.unshift("track"),n=t.apply(null,e),z.shift(),n},W=function(e){var t;if(null==e&&(e="GET"),"track"===z[0])return"force";if(!z.length&&q.ajax){if("socket"===e&&q.ajax.trackWebSockets)return!0;if(t=e.toUpperCase(),J.call(q.ajax.trackMethods,t)>=0)return!0}return!1},c=function(e){function t(){var e;t.__super__.constructor.apply(this,arguments),e=function(e){return function(t){var n;return n=t.open,t.open=function(i,r,o){return W(i)&&e.trigger("request",{type:i,url:r,request:t}),n.apply(t,arguments)}}}(this),window.XMLHttpRequest=function(t){var n;return n=new m(t),e(n),n};try{E(window.XMLHttpRequest,m)}catch(n){}if(null!=g){window.XDomainRequest=function(){var t;return t=new g,e(t),t};try{E(window.XDomainRequest,g)}catch(n){}}if(null!=f&&q.ajax.trackWebSockets){window.WebSocket=function(e){return function(t,n){var i;return i=null!=n?new f(t,n):new f(t),W("socket")&&e.trigger("request",{type:"socket",url:t,protocols:n,request:i}),i}}(this);try{E(window.WebSocket,f)}catch(n){}}}return Y(t,e),t}(a),v=null,P=function(){return null==v&&(v=new c),v},O=function(e){var t,n,i,r;for(r=q.ajax.ignoreURLs,t=0,n=r.length;n>t;t++)if(i=r[t],"string"==typeof i){if(-1!==e.indexOf(i))return!0}else if(i.test(e))return!0;return!1},P().on("request",function(t){var n,i,r,o,s;return o=t.type,r=t.request,s=t.url,O(s)?void 0:d.running||q.restartOnRequestAfter===!1&&"force"!==W(o)?void 0:(i=arguments,n=q.restartOnRequestAfter||0,"boolean"==typeof n&&(n=0),setTimeout(function(){var t,n,s,a,l,c;if(c="socket"===o?r.readyState<2:0<(s=r.readyState)&&4>s){for(d.restart(),a=d.sources,l=[],t=0,n=a.length;n>t;t++){if(U=a[t],U instanceof e){U.watch.apply(U,i);break}l.push(void 0)}return l}},n))}),e=function(){function e(){this.elements=[],P().on("request",function(e){return function(){return e.watch.apply(e,arguments)}}(this))}return e.prototype.watch=function(e){var t,n,i,r;return i=e.type,t=e.request,r=e.url,O(r)?void 0:(n="socket"===i?new p(t):new h(t),this.elements.push(n))},e}(),h=function(){function e(e){var t,n,i,r,o,s;if(this.progress=0,null!=window.ProgressEvent)for(s=null,e.addEventListener("progress",function(e){return function(t){return t.lengthComputable?e.progress=100*t.loaded/t.total:e.progress=e.progress+(100-e.progress)/2}}(this),!1),o=["load","abort","timeout","error"],i=0,r=o.length;r>i;i++)n=o[i],e.addEventListener(n,function(e){return function(){return e.progress=100}}(this),!1);else t=e.onreadystatechange,e.onreadystatechange=function(n){return function(){var i;return 0===(i=e.readyState)||4===i?n.progress=100:3===e.readyState&&(n.progress=50),"function"==typeof t?t.apply(null,arguments):void 0}}(this)}return e}(),p=function(){function e(e){var t,n,i,r;for(this.progress=0,r=["error","open"],n=0,i=r.length;i>n;n++)t=r[n],e.addEventListener(t,function(e){return function(){return e.progress=100}}(this),!1)}return e}(),i=function(){function e(e){var t,n,i,o;for(null==e&&(e={}),this.elements=[],null==e.selectors&&(e.selectors=[]),i=e.selectors,t=0,n=i.length;n>t;t++)o=i[t],this.elements.push(new r(o))}return e}(),r=function(){function e(e){this.selector=e,this.progress=0,this.check()}return e.prototype.check=function(){return document.querySelector(this.selector)?this.done():setTimeout(function(e){return function(){return e.check()}}(this),q.elements.checkInterval)},e.prototype.done=function(){return this.progress=100},e}(),n=function(){function e(){var e,t;this.progress=null!=(t=this.states[document.readyState])?t:100,e=document.onreadystatechange,document.onreadystatechange=function(t){return function(){return null!=t.states[document.readyState]&&(t.progress=t.states[document.readyState]),"function"==typeof e?e.apply(null,arguments):void 0}}(this)}return e.prototype.states={loading:0,interactive:50,complete:100},e}(),o=function(){function e(){var e,t,n,i,r;this.progress=0,e=0,r=[],i=0,n=j(),t=setInterval(function(o){return function(){var s;return s=j()-n-50,n=j(),r.push(s),r.length>q.eventLag.sampleCount&&r.shift(),e=x(r),++i>=q.eventLag.minSamples&&e<q.eventLag.lagThreshold?(o.progress=100,clearInterval(t)):o.progress=100*(3/(e+3))}}(this),50)}return e}(),A=function(){function e(e){this.source=e,this.last=this.sinceLastUpdate=0,this.rate=q.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=H(this.source,"progress"))}return e.prototype.tick=function(e,t){var n;return null==t&&(t=H(this.source,"progress")),t>=100&&(this.done=!0),t===this.last?this.sinceLastUpdate+=e:(this.sinceLastUpdate&&(this.rate=(t-this.last)/this.sinceLastUpdate),this.catchup=(t-this.progress)/q.catchupTime,this.sinceLastUpdate=0,this.last=t),t>this.progress&&(this.progress+=this.catchup*e),n=1-Math.pow(this.progress/100,q.easeFactor),this.progress+=n*this.rate*e,this.progress=Math.min(this.lastProgress+q.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},e}(),L=null,N=null,_=null,V=null,b=null,S=null,d.running=!1,M=function(){return q.restartOnPushState?d.restart():void 0},null!=window.history.pushState&&(w=window.history.pushState,window.history.pushState=function(){return M(),w.apply(window.history,arguments)}),null!=window.history.replaceState&&(y=window.history.replaceState,window.history.replaceState=function(){return M(),y.apply(window.history,arguments)}),u={ajax:e,elements:i,document:n,eventLag:o},(B=function(){var e,n,i,r,o,s,a,l;for(d.sources=L=[],o=["ajax","elements","document","eventLag"],e=0,n=o.length;n>e;e++)l=o[e],q[l]!==!1&&L.push(new u[l](q[l]));for(a=null!=(s=q.extraSources)?s:[],r=0,i=a.length;i>r;r++)U=a[r],L.push(new U(q));return d.bar=_=new t,N=[],V=new A})(),d.stop=function(){return d.trigger("stop"),d.running=!1,_.destroy(),S=!0,null!=b&&("function"==typeof T&&T(b),b=null),B()},d.restart=function(){return d.trigger("restart"),d.stop(),d.start()},d.go=function(){var e;return d.running=!0,_.render(),e=j(),S=!1,b=$(function(t,n){var i,r,o,s,a,l,c,u,p,h,f,g,m,v,w,y;for(m=100-_.progress,r=y=0,o=!0,l=u=0,p=L.length;p>u;l=++u)for(U=L[l],w=null!=N[l]?N[l]:N[l]=[],a=null!=(g=U.elements)?g:[U],c=f=0,h=a.length;h>f;c=++f)s=a[c],v=null!=w[c]?w[c]:w[c]=new A(s),o&=v.done,v.done||(r++,y+=v.tick(t));return i=y/r,_.update(V.tick(t,i)),_.done()||o||S?(_.update(100),d.trigger("done"),setTimeout(function(){return _.finish(),d.running=!1,d.trigger("hide")},Math.max(q.ghostTime,Math.max(q.minTime-(j()-e),0)))):n()})},d.start=function(e){var t;k(q,e),d.running=!0;try{_.render()}catch(t){l=t}return document.querySelector(".pace")?(d.trigger("start"),d.go()):setTimeout(d.start,50)},"function"==typeof define&&define.amd?define(["pace"],function(){return d}):"object"==typeof exports?module.exports=d:q.startOnPageLoad&&d.start()}.call(this),function(e){"strict";e(window).on("smoothload",function(){e(".general-content").find(".collapsible").each(function(){var t=e(this),n=e('<a class="collapsible-more" href="#">[more]</a>');t.prev().append(n)}),e("#rbox-loader-script").each(function(){var t="//w.recruiterbox.com/static/client-src-served/widget/",n=43199;window._rbox||(window._rbox={host_protocol:document.location.protocol,ready:function(e){this.onready=e}},e.getScript(t+n+"/rbox_api.js")),window._rbox_exec_impl=!1,e.getScript(t+n+"/rbox_impl.js");var i=e(this).data("expand-hash");i&&(location.hash=i)}),e('meta[name="x-unique-key"]').each(function(){var t=JSON.stringify(e(this).prop("content"));e(".main-content-sidebar a").removeClass("current"),e(".main-content-sidebar a[data-unique-key="+t+"]").addClass("current")})}),e(document.body).on("click","a.collapsible-more",function(t){var n=e(this),i=n.parent().next();i.toggleClass("expanded"),t.preventDefault()})}(jQuery),function(e){"strict";e(window).on("smoothload",function(){e(".hero-container:not(.slick-slider)").slick({dots:!0,pauseOnDotsHover:!0,autoplay:!0,autoplaySpeed:4200})})}(jQuery),function(e){"strict";function t(){var t=e(this),n=s(t.attr("href")),i=function(){var t=e(this),i=t.find("title").text();document.title=i,e.each(o,function(n,i){var r=e(n).get(0),o=t.find(n).get(0);r&&e.each(i,function(e,t){t.call(r,o)})}),history.pushState(null,i,n),e(window).trigger("smoothload"),window.onload&&"function"==typeof window.onload&&window.onload()};if(n in r){var a=r[n];e("<div>").html(a).each(i)}else e.get(n).success(function(t){t=t.replace(/<script.*? src=.+?><\/script>/g,""),t=t.replace(/<link.*? rel="stylesheet".*?>/g,""),t=t.split(/<body/),t[0]=t[0].replace(/<script.*?>[\s\S]*?<\/script>/g,""),t=t.join("<body"),r[n]=t,e("<div>").html(t).each(i)})}function n(t){e(this).replaceWith(t)}var i=e(document.body),r={},o={};window.addSmoothLoadHandler=function(e,t){e in o?o[e].push(t):o[e]=[t]};var s=function(){var e;return function(t){return e||(e=document.createElement("a")),e.href=t,e.href}}();addSmoothLoadHandler('meta[name="x-unique-key"]',n),addSmoothLoadHandler('link[rel="canonical"]',n),addSmoothLoadHandler("header",n),addSmoothLoadHandler("footer",n),addSmoothLoadHandler("article",function(t){var n=e(this),i=e(t);n.find("a:internal").each(function(){var t=e(this),n=t.attr("href");"#"!==n[0]&&t.attr("href",s(n))}),1===n.find("section.hero-container").length&&1===i.find("section.hero-container").length?(n.find("section.arrow-tabs").attr("data-current-tab",i.find("section.arrow-tabs").data("current-tab")),n.find("section.main-content").replaceWith(i.find("section.main-content"))):n.replaceWith(t)}),e.expr[":"].internal=function(t){return!e(t).attr("target")&&t.hostname==location.hostname},i.on("click","a:internal",function(e){e.preventDefault(),t.call(this)}),e(window).on("load",function(){e(this).trigger("smoothload")})}(jQuery),function(e,t,n,i,r,o,s){e.GoogleAnalyticsObject=r,e[r]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},e[r].l=1*new Date,o=t.createElement(n),s=t.getElementsByTagName(n)[0],o.async=1,o.src=i,s.parentNode.insertBefore(o,s)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),function(e){
e(window).on("smoothload",function(){ga("create","UA-58119300-1","auto"),ga("send","pageview")})}(jQuery),$(document).foundation();