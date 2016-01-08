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
!function(window,document,undefined){function is(e,t){return typeof e===t}function testRunner(){var e,t,i,n,s,o,r;for(var a in tests)if(tests.hasOwnProperty(a)){if(e=[],t=tests[a],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(i=0;i<t.options.aliases.length;i++)e.push(t.options.aliases[i].toLowerCase());for(n=is(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)o=e[s],r=o.split("."),1===r.length?Modernizr[r[0]]=n:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=n),classes.push((n?"":"no-")+r.join("-"))}}function setClasses(e){var t=docElement.className,i=Modernizr._config.classPrefix||"";if(isSVG&&(t=t.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+i+"no-js(\\s|$)");t=t.replace(n,"$1"+i+"js$2")}Modernizr._config.enableClasses&&(t+=" "+i+e.join(" "+i),isSVG?docElement.className.baseVal=t:docElement.className=t)}function addTest(e,t){if("object"==typeof e)for(var i in e)hasOwnProp(e,i)&&addTest(i,e[i]);else{e=e.toLowerCase();var n=e.split("."),s=Modernizr[n[0]];if(2==n.length&&(s=s[n[1]]),"undefined"!=typeof s)return Modernizr;t="function"==typeof t?t():t,1==n.length?Modernizr[n[0]]=t:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=t),setClasses([(t&&0!=t?"":"no-")+n.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function createElement(){return"function"!=typeof document.createElement?document.createElement(arguments[0]):isSVG?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)}function getBody(){var e=document.body;return e||(e=createElement(isSVG?"svg":"body"),e.fake=!0),e}function injectElementWithStyles(e,t,i,n){var s,o,r,a,l="modernizr",d=createElement("div"),c=getBody();if(parseInt(i,10))for(;i--;)r=createElement("div"),r.id=n?n[i]:l+(i+1),d.appendChild(r);return s=createElement("style"),s.type="text/css",s.id="s"+l,(c.fake?c:d).appendChild(s),c.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e)),d.id=l,c.fake&&(c.style.background="",c.style.overflow="hidden",a=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(c)),o=t(d,e),c.fake?(c.parentNode.removeChild(c),docElement.style.overflow=a,docElement.offsetHeight):d.parentNode.removeChild(d),!!o}function contains(e,t){return!!~(""+e).indexOf(t)}function domToCSS(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function nativeTestProps(e,t){var i=e.length;if("CSS"in window&&"supports"in window.CSS){for(;i--;)if(window.CSS.supports(domToCSS(e[i]),t))return!0;return!1}if("CSSSupportsRule"in window){for(var n=[];i--;)n.push("("+domToCSS(e[i])+":"+t+")");return n=n.join(" or "),injectElementWithStyles("@supports ("+n+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return undefined}function cssToDOM(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,i){return t+i.toUpperCase()}).replace(/^-/,"")}function testProps(e,t,i,n){function s(){r&&(delete mStyle.style,delete mStyle.modElem)}if(n=is(n,"undefined")?!1:n,!is(i,"undefined")){var o=nativeTestProps(e,i);if(!is(o,"undefined"))return o}for(var r,a,l,d,c,A=["modernizr","tspan"];!mStyle.style;)r=!0,mStyle.modElem=createElement(A.shift()),mStyle.style=mStyle.modElem.style;for(l=e.length,a=0;l>a;a++)if(d=e[a],c=mStyle.style[d],contains(d,"-")&&(d=cssToDOM(d)),mStyle.style[d]!==undefined){if(n||is(i,"undefined"))return s(),"pfx"==t?d:!0;try{mStyle.style[d]=i}catch(u){}if(mStyle.style[d]!=c)return s(),"pfx"==t?d:!0}return s(),!1}function fnBind(e,t){return function(){return e.apply(t,arguments)}}function testDOMProps(e,t,i){var n;for(var s in e)if(e[s]in t)return i===!1?e[s]:(n=t[e[s]],is(n,"function")?fnBind(n,i||t):n);return!1}function testPropsAll(e,t,i,n,s){var o=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+cssomPrefixes.join(o+" ")+o).split(" ");return is(t,"string")||is(t,"undefined")?testProps(r,t,n,s):(r=(e+" "+domPrefixes.join(o+" ")+o).split(" "),testDOMProps(r,t,i))}function testAllProps(e,t,i){return testPropsAll(e,undefined,undefined,t,i)}function roundedEquals(e,t){return e-1===t||e===t||e+1===t}var tests=[],ModernizrProto={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var i=this;setTimeout(function(){t(i[e])},0)},addTest:function(e,t,i){tests.push({name:e,fn:t,options:i})},addAsyncTest:function(e){tests.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr;var classes=[],docElement=document.documentElement,isSVG="svg"===docElement.nodeName.toLowerCase(),hasOwnProp;!function(){var e={}.hasOwnProperty;hasOwnProp=is(e,"undefined")||is(e.call,"undefined")?function(e,t){return t in e&&is(e.constructor.prototype[t],"undefined")}:function(t,i){return e.call(t,i)}}(),ModernizrProto._l={},ModernizrProto.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},ModernizrProto._trigger=function(e,t){if(this._l[e]){var i=this._l[e];setTimeout(function(){var e,n;for(e=0;e<i.length;e++)(n=i[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){ModernizrProto.addTest=addTest});var omPrefixes="Moz O ms Webkit",cssomPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.split(" "):[];ModernizrProto._cssomPrefixes=cssomPrefixes;var atRule=function(e){var t,i=prefixes.length,n=window.CSSRule;if("undefined"==typeof n)return undefined;if(!e)return!1;if(e=e.replace(/^@/,""),t=e.replace(/-/g,"_").toUpperCase()+"_RULE",t in n)return"@"+e;for(var s=0;i>s;s++){var o=prefixes[s],r=o.toUpperCase()+"_"+t;if(r in n)return"@-"+o.toLowerCase()+"-"+e}return!1};ModernizrProto.atRule=atRule;var domPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(" "):[];ModernizrProto._domPrefixes=domPrefixes;var hasEvent=function(e){function t(t,n){var s;return t?(n&&"string"!=typeof n||(n=createElement(n||"div")),t="on"+t,s=t in n,!s&&i&&(n.setAttribute||(n=createElement("div")),n.setAttribute(t,""),s="function"==typeof n[t],n[t]!==e&&(n[t]=e),n.removeAttribute(t)),s):!1}var i=!("onblur"in document.documentElement);return t}();ModernizrProto.hasEvent=hasEvent;var html5;isSVG||!function(e,t){function i(e,t){var i=e.createElement("p"),n=e.getElementsByTagName("head")[0]||e.documentElement;return i.innerHTML="x<style>"+t+"</style>",n.insertBefore(i.lastChild,n.firstChild)}function n(){var e=T.elements;return"string"==typeof e?e.split(" "):e}function s(e,t){var i=T.elements;"string"!=typeof i&&(i=i.join(" ")),"string"!=typeof e&&(e=e.join(" ")),T.elements=i+" "+e,d(t)}function o(e){var t=_[e[b]];return t||(t={},x++,e[b]=x,_[x]=t),t}function r(e,i,n){if(i||(i=t),g)return i.createElement(e);n||(n=o(i));var s;return s=n.cache[e]?n.cache[e].cloneNode():y.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e),!s.canHaveChildren||w.test(e)||s.tagUrn?s:n.frag.appendChild(s)}function a(e,i){if(e||(e=t),g)return e.createDocumentFragment();i=i||o(e);for(var s=i.frag.cloneNode(),r=0,a=n(),l=a.length;l>r;r++)s.createElement(a[r]);return s}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(i){return T.shivMethods?r(i,e,t):t.createElem(i)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(T,t.frag)}function d(e){e||(e=t);var n=o(e);return!T.shivCSS||f||n.hasCSS||(n.hasCSS=!!i(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||l(e,n),e}function c(e){for(var t,i=e.getElementsByTagName("*"),s=i.length,o=RegExp("^(?:"+n().join("|")+")$","i"),r=[];s--;)t=i[s],o.test(t.nodeName)&&r.push(t.applyElement(A(t)));return r}function A(e){for(var t,i=e.attributes,n=i.length,s=e.ownerDocument.createElement(k+":"+e.nodeName);n--;)t=i[n],t.specified&&s.setAttribute(t.nodeName,t.nodeValue);return s.style.cssText=e.style.cssText,s}function u(e){for(var t,i=e.split("{"),s=i.length,o=RegExp("(^|[\\s,>+~])("+n().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),r="$1"+k+"\\:$2";s--;)t=i[s]=i[s].split("}"),t[t.length-1]=t[t.length-1].replace(o,r),i[s]=t.join("}");return i.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function h(e){function t(){clearTimeout(r._removeSheetTimer),n&&n.removeNode(!0),n=null}var n,s,r=o(e),a=e.namespaces,l=e.parentWindow;return!E||e.printShived?e:("undefined"==typeof a[k]&&a.add(k),l.attachEvent("onbeforeprint",function(){t();for(var o,r,a,l=e.styleSheets,d=[],A=l.length,p=Array(A);A--;)p[A]=l[A];for(;a=p.pop();)if(!a.disabled&&C.test(a.media)){try{o=a.imports,r=o.length}catch(h){r=0}for(A=0;r>A;A++)p.push(o[A]);try{d.push(a.cssText)}catch(h){}}d=u(d.reverse().join("")),s=c(e),n=i(e,d)}),l.attachEvent("onafterprint",function(){p(s),clearTimeout(r._removeSheetTimer),r._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var f,g,m="3.7.3",v=e.html5||{},w=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,b="_html5shiv",x=0,_={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,g=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(i){f=!0,g=!0}}();var T={elements:v.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:v.shivCSS!==!1,supportsUnknownElements:g,shivMethods:v.shivMethods!==!1,type:"default",shivDocument:d,createElement:r,createDocumentFragment:a,addElements:s};e.html5=T,d(t);var C=/^$|\b(?:all|print)\b/,k="html5shiv",E=!g&&function(){var i=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof i.applyElement||"undefined"==typeof i.removeNode||"undefined"==typeof e.attachEvent)}();T.type+=" print",T.shivPrint=h,h(t),"object"==typeof module&&module.exports&&(module.exports=T)}("undefined"!=typeof window?window:this,document);var err=function(){},warn=function(){};window.console&&(err=function(){var e=console.error?"error":"log";window.console[e].apply(window.console,Array.prototype.slice.call(arguments))},warn=function(){var e=console.warn?"warn":"log";window.console[e].apply(window.console,Array.prototype.slice.call(arguments))}),ModernizrProto.load=function(){"yepnope"in window?(warn("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. yepnope appears to be available on the page, so we\u2019ll use it to handle this call to Modernizr.load, but please update your code to use yepnope directly.\n See http://github.com/Modernizr/Modernizr/issues/1182 for more information."),window.yepnope.apply(window,[].slice.call(arguments,0))):err("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. Get it from http://yepnopejs.com. See http://github.com/Modernizr/Modernizr/issues/1182 for more information.")};var mq=function(){var e=window.matchMedia||window.msMatchMedia;return e?function(t){var i=e(t);return i&&i.matches||!1}:function(e){var t=!1;return injectElementWithStyles("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"==(window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle).position}),t}}();ModernizrProto.mq=mq;var modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem});var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style}),ModernizrProto.testAllProps=testPropsAll;var prefixed=ModernizrProto.prefixed=function(e,t,i){return 0===e.indexOf("@")?atRule(e):(-1!=e.indexOf("-")&&(e=cssToDOM(e)),t?testPropsAll(e,t,i):testPropsAll(e,"pfx"))},prefixes=ModernizrProto._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];ModernizrProto._prefixes=prefixes;var prefixedCSS=ModernizrProto.prefixedCSS=function(e){var t=prefixed(e);return t&&domToCSS(t)};ModernizrProto.testAllProps=testAllProps;var testProp=ModernizrProto.testProp=function(e,t,i){return testProps([e],undefined,t,i)},testStyles=ModernizrProto.testStyles=injectElementWithStyles;/*!
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
Modernizr.addTest("audio",function(){var e=createElement("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(i){}return t}),/*!
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
Modernizr.addAsyncTest(function(){function e(i){clearTimeout(t);var s=i!==undefined&&"loadeddata"===i.type?!0:!1;n.removeEventListener("loadeddata",e,!1),addTest("audiopreload",s),n.parentNode.removeChild(n)}var t,i=300,n=createElement("audio"),s=n.style;if(!(Modernizr.audio&&"preload"in n))return void addTest("audiopreload",!1);s.position="absolute",s.height=0,s.width=0;try{if(Modernizr.audio.mp3)n.src="data:audio/mpeg;base64,//MUxAAB6AXgAAAAAPP+c6nf//yi/6f3//MUxAMAAAIAAAjEcH//0fTX6C9Lf//0//MUxA4BeAIAAAAAAKX2/6zv//+IlR4f//MUxBMCMAH8AAAAABYWalVMQU1FMy45//MUxBUB0AH0AAAAADkuM1VVVVVVVVVV//MUxBgBUATowAAAAFVVVVVVVVVVVVVV";else if(Modernizr.audio.m4a)n.src="data:audio/x-m4a;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAAAfbWRhdN4EAABsaWJmYWFjIDEuMjgAAAFoAQBHAAACiG1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAYAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAG0dHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAYAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAABUG1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAArEQAAAQAVcQAAAAAAC1oZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU291bmRIYW5kbGVyAAAAAPttaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAL9zdGJsAAAAW3N0c2QAAAAAAAAAAQAAAEttcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAACdlc2RzAAAAAAMZAAEABBFAFQAAAAABftAAAAAABQISCAYBAgAAABhzdHRzAAAAAAAAAAEAAAABAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAXAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAoAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1Mi42NC4y";else if(Modernizr.audio.ogg)n.src="data:audio/ogg;base64,T2dnUwACAAAAAAAAAAD/QwAAAAAAAM2LVKsBHgF2b3JiaXMAAAAAAUSsAAAAAAAAgLsAAAAAAAC4AU9nZ1MAAAAAAAAAAAAA/0MAAAEAAADmvOe6Dy3/////////////////MgN2b3JiaXMdAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAwNzA2MjIAAAAAAQV2b3JiaXMfQkNWAQAAAQAYY1QpRplS0kqJGXOUMUaZYpJKiaWEFkJInXMUU6k515xrrLm1IIQQGlNQKQWZUo5SaRljkCkFmVIQS0kldBI6J51jEFtJwdaYa4tBthyEDZpSTCnElFKKQggZU4wpxZRSSkIHJXQOOuYcU45KKEG4nHOrtZaWY4updJJK5yRkTEJIKYWSSgelU05CSDWW1lIpHXNSUmpB6CCEEEK2IIQNgtCQVQAAAQDAQBAasgoAUAAAEIqhGIoChIasAgAyAAAEoCiO4iiOIzmSY0kWEBqyCgAAAgAQAADAcBRJkRTJsSRL0ixL00RRVX3VNlVV9nVd13Vd13UgNGQVAAABAEBIp5mlGiDCDGQYCA1ZBQAgAAAARijCEANCQ1YBAAABAABiKDmIJrTmfHOOg2Y5aCrF5nRwItXmSW4q5uacc845J5tzxjjnnHOKcmYxaCa05pxzEoNmKWgmtOacc57E5kFrqrTmnHPGOaeDcUYY55xzmrTmQWo21uaccxa0pjlqLsXmnHMi5eZJbS7V5pxzzjnnnHPOOeecc6oXp3NwTjjnnHOi9uZabkIX55xzPhmne3NCOOecc84555xzzjnnnHOC0JBVAAAQAABBGDaGcacgSJ+jgRhFiGnIpAfdo8MkaAxyCqlHo6ORUuoglFTGSSmdIDRkFQAACAAAIYQUUkghhRRSSCGFFFKIIYYYYsgpp5yCCiqppKKKMsoss8wyyyyzzDLrsLPOOuwwxBBDDK20EktNtdVYY62555xrDtJaaa211koppZRSSikIDVkFAIAAABAIGWSQQUYhhRRSiCGmnHLKKaigAkJDVgEAgAAAAgAAADzJc0RHdERHdERHdERHdETHczxHlERJlERJtEzL1ExPFVXVlV1b1mXd9m1hF3bd93Xf93Xj14VhWZZlWZZlWZZlWZZlWZZlWYLQkFUAAAgAAIAQQgghhRRSSCGlGGPMMeegk1BCIDRkFQAACAAgAAAAwFEcxXEkR3IkyZIsSZM0S7M8zdM8TfREURRN01RFV3RF3bRF2ZRN13RN2XRVWbVdWbZt2dZtX5Zt3/d93/d93/d93/d93/d1HQgNWQUASAAA6EiOpEiKpEiO4ziSJAGhIasAABkAAAEAKIqjOI7jSJIkSZakSZ7lWaJmaqZneqqoAqEhqwAAQAAAAQAAAAAAKJriKabiKaLiOaIjSqJlWqKmaq4om7Lruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7rui4QGrIKAJAAANCRHMmRHEmRFEmRHMkBQkNWAQAyAAACAHAMx5AUybEsS9M8zdM8TfRET/RMTxVd0QVCQ1YBAIAAAAIAAAAAADAkw1IsR3M0SZRUS7VUTbVUSxVVT1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTVN0zRNIDRkJQAABADAYo3B5SAhJSXl3hDCEJOeMSYhtV4hBJGS3jEGFYOeMqIMct5C4xCDHggNWREARAEAAMYgxxBzyDlHqZMSOeeodJQa5xyljlJnKcWYYs0oldhSrI1zjlJHraOUYiwtdpRSjanGAgAAAhwAAAIshEJDVgQAUQAAhDFIKaQUYow5p5xDjCnnmHOGMeYcc44556B0UirnnHROSsQYc445p5xzUjonlXNOSiehAACAAAcAgAALodCQFQFAnACAQZI8T/I0UZQ0TxRFU3RdUTRd1/I81fRMU1U90VRVU1Vt2VRVWZY8zzQ901RVzzRV1VRVWTZVVZZFVdVt03V123RV3ZZt2/ddWxZ2UVVt3VRd2zdV1/Zd2fZ9WdZ1Y/I8VfVM03U903Rl1XVtW3VdXfdMU5ZN15Vl03Vt25VlXXdl2fc103Rd01Vl2XRd2XZlV7ddWfZ903WF35VlX1dlWRh2XfeFW9eV5XRd3VdlVzdWWfZ9W9eF4dZ1YZk8T1U903RdzzRdV3VdX1dd19Y105Rl03Vt2VRdWXZl2fddV9Z1zzRl2XRd2zZdV5ZdWfZ9V5Z13XRdX1dlWfhVV/Z1WdeV4dZt4Tdd1/dVWfaFV5Z14dZ1Ybl1XRg+VfV9U3aF4XRl39eF31luXTiW0XV9YZVt4VhlWTl+4ViW3feVZXRdX1ht2RhWWRaGX/id5fZ943h1XRlu3efMuu8Mx++k+8rT1W1jmX3dWWZfd47hGDq/8OOpqq+brisMpywLv+3rxrP7vrKMruv7qiwLvyrbwrHrvvP8vrAso+z6wmrLwrDatjHcvm4sv3Acy2vryjHrvlG2dXxfeArD83R1XXlmXcf2dXTjRzh+ygAAgAEHAIAAE8pAoSErAoA4AQCPJImiZFmiKFmWKIqm6LqiaLqupGmmqWmeaVqaZ5qmaaqyKZquLGmaaVqeZpqap5mmaJqua5qmrIqmKcumasqyaZqy7LqybbuubNuiacqyaZqybJqmLLuyq9uu7Oq6pFmmqXmeaWqeZ5qmasqyaZquq3meanqeaKqeKKqqaqqqraqqLFueZ5qa6KmmJ4qqaqqmrZqqKsumqtqyaaq2bKqqbbuq7Pqybeu6aaqybaqmLZuqatuu7OqyLNu6L2maaWqeZ5qa55mmaZqybJqqK1uep5qeKKqq5ommaqqqLJumqsqW55mqJ4qq6omea5qqKsumatqqaZq2bKqqLZumKsuubfu+68qybqqqbJuqauumasqybMu+78qq7oqmKcumqtqyaaqyLduy78uyrPuiacqyaaqybaqqLsuybRuzbPu6aJqybaqmLZuqKtuyLfu6LNu678qub6uqrOuyLfu67vqucOu6MLyybPuqrPq6K9u6b+sy2/Z9RNOUZVM1bdtUVVl2Zdn2Zdv2fdE0bVtVVVs2TdW2ZVn2fVm2bWE0Tdk2VVXWTdW0bVmWbWG2ZeF2Zdm3ZVv2ddeVdV/XfePXZd3murLty7Kt+6qr+rbu+8Jw667wCgAAGHAAAAgwoQwUGrISAIgCAACMYYwxCI1SzjkHoVHKOecgZM5BCCGVzDkIIZSSOQehlJQy5yCUklIIoZSUWgshlJRSawUAABQ4AAAE2KApsThAoSErAYBUAACD41iW55miatqyY0meJ4qqqaq27UiW54miaaqqbVueJ4qmqaqu6+ua54miaaqq6+q6aJqmqaqu67q6Lpqiqaqq67qyrpumqqquK7uy7Oumqqqq68quLPvCqrquK8uybevCsKqu68qybNu2b9y6ruu+7/vCka3rui78wjEMRwEA4AkOAEAFNqyOcFI0FlhoyEoAIAMAgDAGIYMQQgYhhJBSSiGllBIAADDgAAAQYEIZKDRkRQAQJwAAGEMppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkgppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkqppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoplVJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSCgCQinAAkHowoQwUGrISAEgFAACMUUopxpyDEDHmGGPQSSgpYsw5xhyUklLlHIQQUmktt8o5CCGk1FJtmXNSWosx5hgz56SkFFvNOYdSUoux5ppr7qS0VmuuNedaWqs115xzzbm0FmuuOdecc8sx15xzzjnnGHPOOeecc84FAOA0OACAHtiwOsJJ0VhgoSErAYBUAAACGaUYc8456BBSjDnnHIQQIoUYc845CCFUjDnnHHQQQqgYc8w5CCGEkDnnHIQQQgghcw466CCEEEIHHYQQQgihlM5BCCGEEEooIYQQQgghhBA6CCGEEEIIIYQQQgghhFJKCCGEEEIJoZRQAABggQMAQIANqyOcFI0FFhqyEgAAAgCAHJagUs6EQY5Bjw1BylEzDUJMOdGZYk5qMxVTkDkQnXQSGWpB2V4yCwAAgCAAIMAEEBggKPhCCIgxAABBiMwQCYVVsMCgDBoc5gHAA0SERACQmKBIu7iALgNc0MVdB0IIQhCCWBxAAQk4OOGGJ97whBucoFNU6iAAAAAAAAwA4AEA4KAAIiKaq7C4wMjQ2ODo8AgAAAAAABYA+AAAOD6AiIjmKiwuMDI0Njg6PAIAAAAAAAAAAICAgAAAAAAAQAAAAICAT2dnUwAE7AwAAAAAAAD/QwAAAgAAADuydfsFAQEBAQEACg4ODg==";else{if(!Modernizr.audio.wav)return void addTest("audiopreload",!1);n.src="data:audio/wav;base64,UklGRvwZAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YdgZAAAAAAEA/v8CAP//AAABAP////8DAPz/BAD9/wEAAAAAAAAAAAABAP7/AgD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAAD//wIA/v8BAAAA//8BAAAA//8BAP//AQAAAP//AQD//wEAAAD//wEA//8BAP//AQD//wEA//8BAP//AQD+/wMA/f8DAP3/AgD+/wIA/////wMA/f8CAP7/AgD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAQD+/wIA/v8CAP7/AwD9/wIA/v8BAAEA/v8CAP7/AQAAAAAAAAD//wEAAAD//wIA/f8DAP7/AQD//wEAAAD//wEA//8CAP7/AQD//wIA/v8CAP7/AQAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD9/wQA+/8FAPz/AgAAAP//AgD+/wEAAAD//wIA/v8CAP3/BAD8/wQA/P8DAP7/AwD8/wQA/P8DAP7/AQAAAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAP//AQD//wEAAAD//wEA//8BAAAAAAAAAP//AgD+/wEAAAAAAAAAAAD//wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AgD+/wIA/v8BAP//AQABAP7/AQD//wIA/v8CAP3/AwD/////AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AAABAP//AAABAP//AQD//wAAAAACAP3/AwD9/wIA//8BAP//AQD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8CAAAA/v8EAPv/BAD9/wIAAAD+/wQA+v8HAPr/BAD+/wEAAAD//wIA/f8EAPz/BAD7/wUA/P8EAPz/AwD+/wEAAAD//wEAAAAAAP//AgD8/wUA+/8FAPz/AwD9/wIA//8AAAEA/v8CAP//AQD//wAAAAABAP//AgD9/wMA/f8EAPz/AwD+/wAAAwD7/wUA/P8DAP7/AQAAAP//AgD+/wEAAQD+/wIA/v8BAAEA/v8CAP7/AQAAAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA//8AAAEA/v8DAP3/AgD//wEA//8BAP7/AwD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AgD+/wEAAQD+/wIA/////wIA//8AAAEA/f8DAP//AAABAP////8DAP3/AwD+/wEA//8BAP//AQAAAAAA//8BAP//AQD//wEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAAAAAAAAAAD//wIA/v8BAAAA//8BAAEA/v8BAAAA//8DAPz/AwD+/wIA/v8CAP3/AwD+/wEAAAD//wEA//8BAAAA//8BAAAA/v8EAPv/BAD+/wAAAAABAP7/AgD//wAAAAABAP7/AgD//wAAAAAAAAAAAAABAP3/BAD8/wQA/f8BAAAAAAABAP7/AgD+/wIA/v8CAP7/AgD+/wIA/v8BAAAAAAD//wIA/f8DAP7/AAABAP//AAACAPz/BAD9/wIA//8AAP//AwD9/wMA/P8EAP3/AwD9/wIA//8BAP//AQD+/wMA/f8DAP7/AAABAP//AQAAAP//AQD//wIA/f8DAP7/AQAAAP//AQAAAAAA//8CAP7/AQABAP7/AgD+/wEAAQD+/wIA/v8CAP////8CAP7/AgD//wAAAAABAP7/AwD9/wIAAAD+/wMA/f8CAP//AQD+/wMA/f8CAP//AAACAPz/BQD6/wUA/v///wIA/v8CAP3/BAD7/wYA+v8FAPz/AwD/////AgD+/wEAAAD//wEAAAD//wIA/f8DAP7/AQAAAP//AgD//wAA//8BAAAAAAAAAP//AQD//wEA//8AAAIA/f8DAP3/AgAAAP//AQD//wEA//8AAAEA//8BAP////8CAP//AAABAP3/BAD9/wIA/v8BAAEA//8BAP7/AgD//wEA//8AAAEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAQD+/wIA/v8BAAAAAAD//wIA/v8BAAAAAAAAAAAAAQD+/wMA/f8CAP//AQD//wIA/f8DAP7/AQD//wEA//8CAP7/AAABAP7/AwD9/wMA/v8AAAEA//8BAAAAAAD//wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP7/AgD//wAAAAAAAAAAAQD//wEA/v8DAPz/BQD8/wIA//8AAAEAAAD//wEA//8BAP//AQAAAAAA//8BAP//AgD+/wEAAAAAAP//AQD+/wMA/////wEA/v8CAP//AQD//wEA//8AAAEA//8BAAAA/v8EAPz/AwD+/wEAAAAAAAAA//8CAP7/AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AQD//wEA//8AAAEA/v8EAPv/BAD9/wIA//8BAP7/AwD9/wIA//8AAAEA//8BAP//AQD//wAAAQD//wEAAAD+/wMA/v8AAAIA/f8DAP7/AQD//wAAAQD+/wMA/f8CAP//AAABAP7/AgD+/wMA/f8CAP7/AQABAP7/AgD+/wIA/v8CAP7/AwD8/wMA//8AAAEA//8AAAAAAAABAP//AQD//wAAAQD//wIA/f8DAP3/AwD+/wAAAgD9/wIA//8AAAEAAAD+/wMA/P8FAPv/BAD9/wIA//8AAP//AgD+/wIA/v8BAAAAAAD//wEAAAAAAP//AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AAABAP//AQD//wAAAQD//wEA//8BAP//AAABAAAA//8BAP7/AwD9/wMA/f8DAP3/AgD//wEA//8BAP7/AgD//wAAAgD8/wQA/f8CAP//AQD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAAABAP7/AwD9/wIA/v8DAP3/AwD9/wIA/v8DAPz/BQD7/wQA/f8CAP7/AwD9/wMA/f8CAP//AQAAAP7/AwD+/wEA//8AAAEAAAAAAP//AAABAP//AQAAAP7/AwD9/wMA/f8CAP//AQD//wEA//8AAAIA/f8CAAAA//8BAAAA//8BAAAA/v8EAPv/BAD9/wIA//8AAAEA/v8CAP//AAABAP//AAABAP//AAABAP7/AwD8/wQA/f8CAAAA/v8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAAAAAAAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AgD//wAAAQD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAQD+/wMA/f8CAP//AQD//wEA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD9/wIA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD8/wMA/v8CAP//AAD//wIA/v8CAP7/AQABAP7/AQAAAP//AgD/////AQD//wEAAAD//wEA/v8EAPv/BAD9/wMA/v8BAAAA//8BAAEA/P8GAPr/BQD8/wMA/v8BAAAA//8CAP7/AQABAP3/BAD7/wYA+/8EAPz/AwD//wEA//8BAP7/BAD8/wMA/v8AAAIA/v8BAAAA//8BAAAA//8BAAAA//8CAP3/AwD+/wAAAgD8/wUA/P8DAP7/AAABAAAAAAD//wEAAAD//wIA/f8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/f8EAPz/AwD/////AgD+/wIA/f8DAP7/AgD+/wEA//8CAP7/AQD//wEAAAAAAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAP//AQAAAP//AAACAP3/BAD7/wQA/v8BAAAA//8BAP//AQAAAP//AQAAAP7/BAD7/wUA+/8EAP3/AgD//wAAAQD+/wIA//8AAAEA/v8CAP//AQD+/wEAAAAAAAAAAAD//wEA//8CAP3/AwD9/wIA//8AAAAAAAAAAAAA//8BAP//AgD+/wEA//8CAP7/AQAAAP//AgD/////AgD/////AgD+/wIA//8AAP//AQABAP7/AgD9/wMA/v8CAP////8BAAAAAAAAAAAA//8CAP////8DAPz/AwD+/wEAAAAAAP//AQD//wEAAAD//wEAAAD+/wQA+/8FAPz/AgAAAP//AgD9/wMA/v8BAAAAAAD//wEAAAD//wIA/v8BAAAAAAD//wIA/v8BAAAA//8BAAAA//8CAP7/AQD//wEA//8BAAAA//8BAP//AAABAP//AQAAAP7/AgD//wEA//8AAAAAAQD+/wMA/P8EAP7///8DAPz/BQD8/wEAAQD+/wMA/v8AAAEA//8BAP//AQD//wEA/v8CAP//AQD//wAAAAABAAAA//8BAP//AQAAAAAA//8BAP//AgD+/wAAAQD//wIA/f8CAP//AQAAAP7/AwD9/wMA/v8BAP//AAABAP//AgD9/wIA//8BAAAA//8BAAAA//8CAP3/AwD+/wEAAAD+/wQA/P8DAP7/AAACAP7/AQAAAP//AQAAAP//AQAAAP//AgD9/wIAAAD//wIA/f8DAP7/AQD//wEA//8CAP7/AQD//wAAAQD//wEA//8AAAAAAQD//wEAAAD9/wUA+/8FAPz/AgD//wAAAQD//wAAAQD+/wMA/f8BAAEA/v8CAP7/AgD+/wIA/v8BAAAAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP7/AQAAAP//AQAAAP//AQD//wAAAQD//wAAAQD+/wMA/f8CAAAA/v8DAP3/AgAAAP//AQAAAP7/AwD9/wMA/v8BAP//AQD//wEAAAD+/wMA/f8CAAAA/v8CAP//AAAAAAEA//8AAAEA/v8DAP3/AwD9/wIA//8BAP//AgD8/wQA/v8BAAAA/v8CAP//AQD//wAAAAAAAAEA/f8EAPz/BAD9/wIA//8AAAAAAAABAP//AAAAAAAAAAABAP3/BAD9/wIA/v8BAAEA//8AAAAA//8CAP7/AgD9/wQA+/8FAPv/BQD8/wMA/f8DAP3/AwD+/wAAAgD9/wMA/f8CAAAA/v8EAPv/BQD7/wUA/P8DAP///v8DAP3/BAD8/wMA/f8DAP7/AQD//wEAAAD//wEA/v8CAAAA/v8CAP7/AgD//wAAAAAAAAAAAQD+/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAP//AgD//wEA/v8BAAAAAQD//wAAAAAAAAEA//8AAAEA//8BAP//AAABAP//AQD+/wIA/v8DAPz/BAD8/wQA/f8BAAAAAQD+/wMA/P8DAP//AAAAAAAAAAD//wMA+/8FAP3/AQABAP3/BAD8/wMA/v8BAAAA//8CAP3/AwD+/wEAAQD9/wMA/f8EAPz/BAD7/wQA/v8BAAEA/f8DAP7/AQAAAP//AgD+/wEAAAD//wIA/v8CAP7/AgD+/wEAAQD//wEA/v8CAP7/BAD7/wQA/f8CAAAA//8AAAAAAAABAP//AQD+/wEAAQD+/wMA/f8BAAEA/v8DAPz/AwD/////AwD8/wQA/P8DAP7/AgD//wAA//8BAAAAAAAAAP//AgD+/wEAAAD//wIA/v8BAAAA//8CAP3/AgD//wAAAQD+/wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP3/BAD7/wQA/v8BAAAA//8AAAEAAAD//wIA/f8DAP7/AgD+/wIA/v8CAP7/AgD+/wEAAAAAAP//AgD9/wMA/v8BAP//AgD9/wMA/v8AAAEA//8BAP//AQD//wEA//8AAAEA/v8EAPz/AgD//wAAAQAAAP//AAABAP//AQD//wEAAAD//wEA//8BAAEA/f8DAP7/AQABAP3/AwD+/wIA/////wEAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD//wAA//8CAP3/BAD9/wAAAgD9/wMA/v8BAP//AQAAAP//AQAAAP//AgD9/wMA/f8EAPz/AwD+/wEAAAAAAAAAAAD//wIA/f8EAP3/AAABAAAA//8CAP7/AQAAAP//AQAAAAAA//8BAP//AQAAAP//AQAAAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wIA/v8CAP3/BAD9/wEAAAD//wEAAQD9/wMA/f8CAAAA/v8DAP3/AgD//wAAAQD+/wIA/v8CAP7/AQAAAP//AgD+/wEAAAAAAP//AwD7/wUA/f8BAAEA/v8BAAEA/v8DAP3/AgD//wEA//8BAP//AQD//wEA//8CAP3/BAD7/wQA/////wIA/v8AAAIA/v8CAP3/BAD7/wUA/P8DAP3/AwD9/wMA/v8AAAIA/v8CAP7/AgD+/wIA//8AAAEA/v8CAP7/AgD//wAAAAD//wEAAAAAAAAA//8BAP7/BAD7/wUA/P8CAAAA//8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD+/wEA//8CAP3/AwD+/wAAAwD8/wIAAAD//wIA/////wIA/v8CAP7/AgD+/wEAAAAAAAAAAAAAAP//AgD+/wIA//8AAAAA//8CAP7/AgD+/wEA//8CAP3/AwD9/wMA/v8BAP7/AwD9/wMA/f8CAP//AQD+/wIA//8BAP//AQD+/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAP//AgD+/wIA/v8CAP//AAAAAAEA//8BAP//AAABAAAA//8BAP//AQD//wEA//8BAP//AQAAAP//AQD//wEAAAD//wIA/f8CAAAA//8BAAAA//8BAP//AAABAP//AQD//wAAAAAAAAEA/v8CAP//AQD//wAAAAABAP7/AwD9/wIAAAD+/wIA//8BAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA/v8CAP7/AgD//wAAAAAAAAAAAAAAAP//AgD/////AgD9/wQA/f8BAAAAAAAAAAEA/f8DAP////8DAP3/AQABAP7/AgD//wAAAQD+/wMA/f8CAP7/AQABAP7/AwD7/wYA+v8FAP3/AQABAP7/AgD+/wMA/f8CAP7/AwD+/wEA//8BAP//AQAAAP7/BQD5/wcA+v8FAPz/AwD+/wIA/v8BAAAA//8DAPv/BQD8/wMA/////wEAAAAAAAAAAAD//wIA/f8DAP7/AQAAAP//AQAAAP//AgD+/wIA/v8BAAEA/f8EAPz/AwD+/wEA//8CAP7/AQD//wEA//8CAP7/AQAAAP//AgD+/wEAAAAAAAAAAAAAAAAAAAD//wIA/f8EAPz/AwD+/wEA//8CAP7/AgD+/wEAAQD+/wEAAQD+/wIA/////wIA//8AAAAAAAAAAAAAAAD//wEAAAAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AQD//wEA//8BAP//AQAAAP7/AwD9/wMA/v8BAP7/AwD9/wMA/v8BAP//AAABAP//AQD//wAAAAABAP//AAAAAAAAAQD//wEA/v8CAAAA/v8EAPv/BAD9/wIAAAD+/wMA/P8DAP//AAAAAP//AQD//wIA/f8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD9/wQA+/8FAPv/BQD8/wMA/v8BAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAAEA/f8DAP3/AgAAAP//AQD//wAAAQD//wEA//8BAP//AQD//wEA/v8DAP3/AgAAAP7/AwD9/wIAAAD//wEAAAD//wIA/f8DAP7/AgD9/wQA+/8FAPz/AgAAAP//AgD9/wIA//8BAP//AQD//wEA//8BAP//AQD//wIA/f8DAP3/AgD//wAAAQD+/wIA/v8BAAEA/v8CAP7/AgD+/wMA/P8DAP//AAABAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/v8CAP3/BAD8/wMA/v8BAAAAAAD//wEAAAAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD+/wEA//8CAP3/AwD9/wMA/f8EAPv/BAD+/wAAAQD//wEA//8BAP//AAABAP//AQD//wEAAAD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8DAP7/AAACAP3/AwD+/wEA//8BAP//AQAAAP//AQAAAP7/AwD9/wMA/v8AAAEA//8BAP//AAAAAAEA//8AAAEA/v8CAP//AAAAAAEA/v8DAPz/BAD9/wEAAQD+/wEAAQD9/wQA/P8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAQD+/wIA/////wIA/v8BAAAA//8BAP//AQD//wEA//8BAAAA/v8EAPz/AwD///7/BAD8/wMA/////wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP////8CAP7/AwD9/wIA/v8CAP//AAABAP7/AwD9/wEAAQD+/wMA/f8CAP//AAAAAAEA/v8DAPz/BAD9/wIA/v8CAP7/AgD//wAAAAD//wIA/v8CAP7/AQAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AwD8/wUA+v8GAPv/AwD//wAAAAAAAAAA//8DAPv/BQD9/wAAAgD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAAAAAAAP//AQAAAAAAAAD//wEA//8CAP3/AwD+/wAAAgD+/wEAAAD//wIA/v8CAP7/AgD/////AwD8/wUA/P8CAP//AQD//wIA/f8DAP3/AwD+/wAAAQD+/wMA/f8DAP3/AgD//wAAAQD//wEA//8BAP7/AwD+/wEA//8AAAEA//8CAPz/BAD9/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAAEA/v8CAP7/AgD//wEA/f8EAPz/BAD+////AgD//wAAAQD//wAAAQD//wEA//8BAP7/AwD+/wEA"}}catch(o){return void addTest("audiopreload",!1)}n.setAttribute("preload","auto"),n.style.cssText="display:none",docElement.appendChild(n),setTimeout(function(){n.addEventListener("loadeddata",e,!1),t=setTimeout(e,i)},0)}),/*!
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
Modernizr.addTest("bgpositionshorthand",function(){var e=createElement("a"),t=e.style,i="right 10px bottom 10px";return t.cssText="background-position: "+i+";",t.backgroundPosition===i}),/*!
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
Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",i=createElement("a");return i.style.cssText=e+prefixes.join(t+e),!!i.style.length}),/*!
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
Modernizr.addTest("csschunit",function(){var e,t=modElem.elem.style;try{t.fontSize="3ch",e=-1!==t.fontSize.indexOf("ch")}catch(i){e=!1}return e}),/*!
{
  "name": "CSS Columns",
  "property": "csscolumns",
  "caniuse": "multicolumn",
  "polyfills": ["css3multicolumnjs"],
  "tags": ["css"]
}
!*/
function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=testAllProps("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(i){}return e});for(var e,t,i=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],n=0;n<i.length;n++)e=i[n].toLowerCase(),t=testAllProps("column"+i[n]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||testAllProps(i[n])),Modernizr.addTest("csscolumns."+e,t)}(),/*!
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
testStyles("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,i=e.childNodes;t=i[0].offsetLeft<i[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2),/*!
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
Modernizr.addTest("cssexunit",function(){var e,t=modElem.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(i){e=!1}return e});/*!
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
var blacklist=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),i=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,s=533>t&&e.match(/android/gi);return i||s||n}();blacklist?Modernizr.addTest("fontface",!1):testStyles('@font-face {font-family:"font";src:url("https://")}',function(e,t){var i=document.getElementById("smodernizr"),n=i.sheet||i.styleSheet,s=n?n.cssRules&&n.cssRules[0]?n.cssRules[0].cssText:n.cssText||"":"",o=/src/i.test(s)&&0===s.indexOf(t.split(" ")[0]);Modernizr.addTest("fontface",o)}),/*!
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
Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",i="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="",s=0,o=prefixes.length-1;o>s;s++)e=0===s?"to ":"",n+=t+prefixes[s]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(n+=t+"-webkit-"+i);var r=createElement("a"),a=r.style;return a.cssText=n,(""+a.backgroundImage).indexOf("gradient")>-1}),/*!
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
Modernizr.addAsyncTest(function(){function e(){function i(){try{var e=createElement("div"),t=createElement("span"),i=e.style,n=0,s=0,o=!1,r=document.body.firstElementChild||document.body.firstChild;return e.appendChild(t),t.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",document.body.insertBefore(e,r),i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",n=t.offsetHeight,s=t.offsetWidth,i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+prefixes.join("hyphens:auto; "),o=t.offsetHeight!=n||t.offsetWidth!=s,document.body.removeChild(e),e.removeChild(t),o}catch(a){return!1}}function n(e,t){try{var i=createElement("div"),n=createElement("span"),s=i.style,o=0,r=!1,a=!1,l=!1,d=document.body.firstElementChild||document.body.firstChild;return s.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",i.appendChild(n),document.body.insertBefore(i,d),n.innerHTML="mm",o=n.offsetHeight,n.innerHTML="m"+e+"m",a=n.offsetHeight>o,t?(n.innerHTML="m<br />m",o=n.offsetWidth,n.innerHTML="m"+e+"m",l=n.offsetWidth>o):l=!0,a===!0&&l===!0&&(r=!0),document.body.removeChild(i),i.removeChild(n),r}catch(c){return!1}}function s(e){try{var t,i=createElement("input"),n=createElement("div"),s="lebowski",o=!1,r=document.body.firstElementChild||document.body.firstChild;n.innerHTML=s+e+s,document.body.insertBefore(n,r),document.body.insertBefore(i,n),i.setSelectionRange?(i.focus(),i.setSelectionRange(0,0)):i.createTextRange&&(t=i.createTextRange(),t.collapse(!0),t.moveEnd("character",0),t.moveStart("character",0),t.select());try{window.find?o=window.find(s+s):(t=window.self.document.body.createTextRange(),o=t.findText(s+s))}catch(a){o=!1}return document.body.removeChild(n),document.body.removeChild(i),o}catch(a){return!1}}return document.body||document.getElementsByTagName("body")[0]?(addTest("csshyphens",function(){if(!testAllProps("hyphens","auto",!0))return!1;try{return i()}catch(e){return!1}}),addTest("softhyphens",function(){try{return n("&#173;",!0)&&n("&#8203;",!1)}catch(e){return!1}}),void addTest("softhyphensfind",function(){try{return s("&#173;")&&s("&#8203;")}catch(e){return!1}})):void setTimeout(e,t)}var t=300;setTimeout(e,t)}),/*!
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
testStyles("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){Modernizr.addTest("nthchild",function(){for(var t=e.getElementsByTagName("div"),i=!0,n=0;5>n;n++)i=i&&t[n].offsetWidth===n%2+1;return i})},5),/*!
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
Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",i=createElement("a"),n=i.style;return n.cssText=e+prefixes.join(t+";"+e).slice(0,-e.length),-1!==n.position.indexOf(t)}),/*!
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
Modernizr.addTest("regions",function(){if(isSVG)return!1;var e=Modernizr.prefixed("flowFrom"),t=Modernizr.prefixed("flowInto"),i=!1;if(!e||!t)return i;var n=createElement("iframe"),s=createElement("div"),o=createElement("div"),r=createElement("div"),a="modernizr_flow_for_regions_check";o.innerText="M",s.style.cssText="top: 150px; left: 150px; padding: 0px;",r.style.cssText="width: 50px; height: 50px; padding: 42px;",r.style[e]=a,s.appendChild(o),s.appendChild(r),docElement.appendChild(s);var l,d,c=o.getBoundingClientRect();return o.style[t]=a,l=o.getBoundingClientRect(),d=parseInt(l.left-c.left,10),docElement.removeChild(s),42==d?i=!0:(docElement.appendChild(n),c=n.getBoundingClientRect(),n.style[t]=a,l=n.getBoundingClientRect(),c.height>0&&c.height!==l.height&&0===l.height&&(i=!0)),o=r=s=n=undefined,i}),/*!
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
Modernizr.addTest("csstransforms3d",function(){var e=!!testAllProps("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in docElement.style)){var i,n="#modernizr{width:0;height:0}";Modernizr.supports?i="@supports (perspective: 1px)":(i="@media (transform-3d)",t&&(i+=",(-webkit-transform-3d)")),i+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",testStyles(n+i,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),/*!
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
testStyles("#modernizr { height: 50vh; }",function(e){var t=parseInt(window.innerHeight/2,10),i=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).height,10);Modernizr.addTest("cssvhunit",i==t)}),/*!
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
testStyles("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],i=e.childNodes[1],n=e.childNodes[0],s=parseInt((i.offsetWidth-i.clientWidth)/2,10),o=n.clientWidth/100,r=n.clientHeight/100,a=parseInt(50*Math.max(o,r),10),l=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvmaxunit",roundedEquals(a,l)||roundedEquals(a,l-s))},3),/*!
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
testStyles("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],i=e.childNodes[1],n=e.childNodes[0],s=parseInt((i.offsetWidth-i.clientWidth)/2,10),o=n.clientWidth/100,r=n.clientHeight/100,a=parseInt(50*Math.min(o,r),10),l=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvminunit",roundedEquals(a,l)||roundedEquals(a,l-s))},3),/*!
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
testStyles("#modernizr { width: 50vw; }",function(e){var t=parseInt(window.innerWidth/2,10),i=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).width,10);Modernizr.addTest("cssvwunit",i==t)}),/*!
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
Modernizr.addTest("wrapflow",function(){var e=prefixed("wrapFlow");if(!e||isSVG)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),i=createElement("div"),n=createElement("div"),s=createElement("span");n.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",s.innerText="X",i.appendChild(n),i.appendChild(s),docElement.appendChild(i);var o=s.offsetLeft;return docElement.removeChild(i),n=s=i=undefined,150==o}),/*!
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
Modernizr.addTest("mutationobserver",!!window.MutationObserver||!!window.WebKitMutationObserver);var inputElem=createElement("input"),inputattrs="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),attrs={};Modernizr.input=function(e){for(var t=0,i=e.length;i>t;t++)attrs[e[t]]=!!(e[t]in inputElem);return attrs.list&&(attrs.list=!(!createElement("datalist")||!window.HTMLDataListElement)),attrs}(inputattrs),/*!
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
Modernizr.addTest("details",function(){var e,t=createElement("details");return"open"in t?(testStyles("#modernizr details{display:block}",function(i){i.appendChild(t),t.innerHTML="<summary>a</summary>b",e=t.offsetHeight,t.open=!0,e=e!=t.offsetHeight}),e):!1}),/*!
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
Modernizr.addTest("ruby",function(){function e(e,t){var i;return window.getComputedStyle?i=document.defaultView.getComputedStyle(e,null).getPropertyValue(t):e.currentStyle&&(i=e.currentStyle[t]),i}function t(){docElement.removeChild(i),i=null,n=null,s=null}var i=createElement("ruby"),n=createElement("rt"),s=createElement("rp"),o="display",r="fontSize";return i.appendChild(s),i.appendChild(n),docElement.appendChild(i),"none"==e(s,o)||"ruby"==e(i,o)&&"ruby-text"==e(n,o)||"6pt"==e(s,r)&&"6pt"==e(n,r)?(t(),!0):(t(),!1)}),/*!
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
Modernizr.addTest("emoji",function(){if(!Modernizr.canvastext)return!1;var e=window.devicePixelRatio||1,t=12*e,i=createElement("canvas"),n=i.getContext("2d");return n.fillStyle="#f00",n.textBaseline="top",n.font="32px Arial",n.fillText("\ud83d\udc28",0,0),0!==n.getImageData(t,t,1,1).data[0]}),/*!
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
Modernizr.addTest("es5date",function(){var e="2013-04-12T06:06:37.307Z",t=!1;try{t=!!Date.parse(e)}catch(i){}return!!(Date.now&&Date.prototype&&Date.prototype.toISOString&&Date.prototype.toJSON&&t)}),/*!
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
Modernizr.addTest("es5undefined",function(){var e,t;try{t=window.undefined,window.undefined=12345,e="undefined"==typeof window.undefined,window.undefined=t}catch(i){return!1}return e}),/*!
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
Modernizr.addTest("oninput",function(){var e,t=createElement("input");if(t.setAttribute("oninput","return"),hasEvent("oninput",docElement)||"function"==typeof t.oninput)return!0;try{var i=document.createEvent("KeyboardEvent");e=!1;var n=function(t){e=!0,t.preventDefault(),t.stopPropagation()};i.initKeyEvent("keypress",!0,!0,window,!1,!1,!1,!1,0,"e".charCodeAt(0)),docElement.appendChild(t),t.addEventListener("input",n,!1),t.focus(),t.dispatchEvent(i),t.removeEventListener("input",n,!1),docElement.removeChild(t)}catch(s){e=!1}return e}),/*!
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
Modernizr.addAsyncTest(function(){var e,t,i=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},n=function(e,t){var i=!!e;if(i&&(i=new Boolean(i),i.blocked="blocked"===e),addTest("flash",function(){return i}),t&&l.contains(t)){for(;t.parentNode!==l;)t=t.parentNode;l.removeChild(t)}};try{t="ActiveXObject"in window&&"Pan"in new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(s){}if(e=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||t),e||isSVG)n(!1);else{var o,r,a=createElement("embed"),l=getBody();if(a.type="application/x-shockwave-flash",l.appendChild(a),docElement.appendChild(l),!("Pan"in a||t))return n("blocked",a),void i(l);o=function(){return docElement.contains(l)?(docElement.contains(a)?(r=a.style.cssText,""!==r?n("blocked",a):n(!0,a)):n("blocked"),void i(l)):(l=document.body||l,a=createElement("embed"),a.type="application/x-shockwave-flash",l.appendChild(a),setTimeout(o,1e3))},setTimeout(o,10)}}),/*!
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
Modernizr.addTest("fileinputdirectory",function(){var e=createElement("input"),t="directory";if(e.type="file",t in e)return!0;for(var i=0,n=domPrefixes.length;n>i;i++)if(domPrefixes[i]+t in e)return!0;return!1}),/*!
{
  "name": "input[form] Attribute",
  "property": "formattribute",
  "tags": ["attribute", "forms", "input"],
  "builderAliases": ["forms_formattribute"]
}
!*/
Modernizr.addTest("formattribute",function(){var e,t=createElement("form"),i=createElement("input"),n=createElement("div"),s="formtest"+(new Date).getTime(),o=!1;t.id=s;try{i.setAttribute("form",s)}catch(r){document.createAttribute&&(e=document.createAttribute("form"),e.nodeValue=s,i.setAttributeNode(e))}return n.appendChild(t),n.appendChild(i),docElement.appendChild(n),o=t.elements&&1===t.elements.length&&i.form==t,n.parentNode.removeChild(n),o});/*!
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
var inputtypes="search tel url email datetime date month week time datetime-local number range color".split(" "),inputs={};Modernizr.inputtypes=function(e){for(var t,i,n,s=e.length,o=":)",r=0;s>r;r++)inputElem.setAttribute("type",t=e[r]),n="text"!==inputElem.type&&"style"in inputElem,n&&(inputElem.value=o,inputElem.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(t)&&inputElem.style.WebkitAppearance!==undefined?(docElement.appendChild(inputElem),i=document.defaultView,n=i.getComputedStyle&&"textfield"!==i.getComputedStyle(inputElem,null).WebkitAppearance&&0!==inputElem.offsetHeight,docElement.removeChild(inputElem)):/^(search|tel)$/.test(t)||(n=/^(url|email|number)$/.test(t)?inputElem.checkValidity&&inputElem.checkValidity()===!1:inputElem.value!=o)),inputs[e[r]]=!!n;return inputs}(inputtypes),/*!
{
  "name": "Form Validation",
  "property": "formvalidation",
  "tags": ["forms", "validation", "attribute"],
  "builderAliases": ["forms_validation"]
}
!*/
Modernizr.addTest("formvalidation",function(){var e=createElement("form");if(!("checkValidity"in e&&"addEventListener"in e))return!1;if("reportValidity"in e)return!0;var t,i=!1;return Modernizr.formvalidationapi=!0,e.addEventListener("submit",function(e){(!window.opera||window.operamini)&&e.preventDefault(),e.stopPropagation()},!1),e.innerHTML='<input name="modTest" required><button></button>',testStyles("#modernizr form{position:absolute;top:-99999em}",function(n){n.appendChild(e),t=e.getElementsByTagName("input")[0],t.addEventListener("invalid",function(e){i=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!t.validationMessage,e.getElementsByTagName("button")[0].click()}),i}),/*!
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
Modernizr.addTest("localizednumber",function(){if(!Modernizr.inputtypes.number)return!1;if(!Modernizr.formvalidation)return!1;var e,t=createElement("div"),i=getBody(),n=function(){return docElement.insertBefore(i,docElement.firstElementChild||docElement.firstChild)}();t.innerHTML='<input type="number" value="1.0" step="0.1"/>';var s=t.childNodes[0];n.appendChild(t),s.focus();try{document.execCommand("InsertText",!1,"1,1")}catch(o){}return e="number"===s.type&&1.1===s.valueAsNumber&&s.checkValidity(),n.removeChild(t),i.fake&&n.parentNode.removeChild(n),e}),/*!
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
Modernizr.addAsyncTest(function(){if(!Modernizr.canvas)return!1;var e=new Image,t=createElement("canvas"),i=t.getContext("2d");e.onload=function(){addTest("apng",function(){return"undefined"==typeof t.getContext?!1:(i.drawImage(e,0,0),0===i.getImageData(0,0,1,1).data[3])})},e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="}),/*!
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
Modernizr.addAsyncTest(function(){var e,t,i,n=createElement("img"),s="sizes"in n;!s&&"srcset"in n?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",i=function(){addTest("sizes",2==n.width)},n.onload=i,n.onerror=i,n.setAttribute("sizes","9px"),n.srcset=e+" 1w,"+t+" 8w",n.src=e):addTest("sizes",s)}),/*!
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
Modernizr.addAsyncTest(function(){function e(e,t,i){function n(t){var n=t&&"load"===t.type?1==s.width:!1,o="webp"===e;addTest(e,o?new Boolean(n):n),i&&i(t)}var s=new Image;s.onerror=n,s.onload=n,s.src=t}var t=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],i=t.shift();e(i.name,i.uri,function(i){if(i&&"load"===i.type)for(var n=0;n<t.length;n++)e(t[n].name,t[n].uri)})}),/*!
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
Modernizr.addAsyncTest(function(){var e,t,i=prefixed("indexedDB",window),n="detect-blob-support",s=!1;if(!Modernizr.indexeddb||!Modernizr.indexeddb.deleteDatabase)return!1;try{i.deleteDatabase(n).onsuccess=function(){e=i.open(n,1),e.onupgradeneeded=function(){e.result.createObjectStore("store")},e.onsuccess=function(){t=e.result;try{t.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),s=!0}catch(o){s=!1}finally{addTest("indexeddbblob",s),t.close(),i.deleteDatabase(n)}}}}catch(o){addTest("indexeddbblob",!1)}}),/*!
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
Modernizr.addTest("xhrresponsetype",function(){if("undefined"==typeof XMLHttpRequest)return!1;var e=new XMLHttpRequest;return e.open("get","/",!0),"response"in e}());var testXhrType=function(e){if("undefined"==typeof XMLHttpRequest)return!1;var t=new XMLHttpRequest;t.open("get","/",!0);try{t.responseType=e}catch(i){return!1}return"response"in t&&t.responseType==e};/*!
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
Modernizr.addAsyncTest(function(){function e(){clearTimeout(t),window.removeEventListener("deviceproximity",e),addTest("proximity",!0)}var t,i=300;"ondeviceproximity"in window&&"onuserproximity"in window?(window.addEventListener("deviceproximity",e),t=setTimeout(function(){window.removeEventListener("deviceproximity",e),addTest("proximity",!1)},i)):addTest("proximity",!1)}),/*!
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
Modernizr.addTest("bdi",function(){var e=createElement("div"),t=createElement("bdi");t.innerHTML="&#1573",e.appendChild(t),docElement.appendChild(e);var i="rtl"===(window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).direction;return docElement.removeChild(e),i}),/*!
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
Modernizr.addTest("unicode",function(){var e,t=createElement("span"),i=createElement("span");return testStyles("#modernizr{font-family:Arial,sans;font-size:300em;}",function(n){t.innerHTML=isSVG?"\u5987":"&#5987",i.innerHTML=isSVG?"\u2606":"&#9734",n.appendChild(t),n.appendChild(i),e="offsetWidth"in t&&t.offsetWidth!==i.offsetWidth}),e}),/*!
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
Modernizr.addTest("unicoderange",function(){return Modernizr.testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}',function(e){for(var t=[".",".","m","m"],i=0;i<t.length;i++){var n=createElement("span");n.innerHTML=t[i],n.className=i%2?"mono":"",e.appendChild(n),t[i]=n.clientWidth}return t[0]!==t[1]&&t[2]===t[3]})});/*!
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
Modernizr.addTest("video",function(){var e=createElement("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(i){}return t}),/*!
{
  "name": "Video Autoplay",
  "property": "videoautoplay",
  "tags": ["video"],
  "async" : true,
  "warnings": ["This test is very large – only include it if you absolutely need it"],
  "knownBugs": ["crashes with an alert on iOS7 when added to homescreen"]
}
!*/
Modernizr.addAsyncTest(function(){function e(i){clearTimeout(t),n.removeEventListener("playing",e,!1),addTest("videoautoplay",i&&"playing"===i.type||0!==n.currentTime),n.parentNode.removeChild(n)}var t,i=300,n=createElement("video"),s=n.style;if(!(Modernizr.video&&"autoplay"in n))return void addTest("videoautoplay",!1);s.position="absolute",s.height=0,s.width=0;try{if(Modernizr.video.ogg)n.src="data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A";else{if(!Modernizr.video.h264)return void addTest("videoautoplay",!1);n.src="data:video/mp4;base64,AAAAHGZ0eXBtcDQyAAAAAG1wNDJpc29tYXZjMQAAAz5tb292AAAAbG12aGQAAAAAzaNacc2jWnEAAV+QAAFfkAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAGGlvZHMAAAAAEICAgAcAT////3//AAACQ3RyYWsAAABcdGtoZAAAAAHNo1pxzaNacQAAAAEAAAAAAAFfkAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAEAAAABAAAAAAAd9tZGlhAAAAIG1kaGQAAAAAzaNacc2jWnEAAV+QAAFfkFXEAAAAAAAhaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAAAAAAGWbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAABVnN0YmwAAACpc3RzZAAAAAAAAAABAAAAmWF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAEAAQAEgAAABIAAAAAAAAAAEOSlZUL0FWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwH0AAr/4QAZZ/QACq609NQYBBkAAAMAAQAAAwAKjxImoAEABWjOAa8gAAAAEmNvbHJuY2xjAAYAAQAGAAAAGHN0dHMAAAAAAAAAAQAAAAUAAEZQAAAAKHN0c3oAAAAAAAAAAAAAAAUAAAIqAAAACAAAAAgAAAAIAAAACAAAAChzdHNjAAAAAAAAAAIAAAABAAAABAAAAAEAAAACAAAAAQAAAAEAAAAYc3RjbwAAAAAAAAACAAADYgAABaQAAAAUc3RzcwAAAAAAAAABAAAAAQAAABFzZHRwAAAAAAREREREAAAAb3VkdGEAAABnbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcgAAAAAAAAAAAAAAAAAAAAA6aWxzdAAAADKpdG9vAAAAKmRhdGEAAAABAAAAAEhhbmRCcmFrZSAwLjkuOCAyMDEyMDcxODAwAAACUm1kYXQAAAHkBgX/4NxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxMjAgLSBILjI2NC9NUEVHLTQgQVZDIGNvZGVjIC0gQ29weWxlZnQgMjAwMy0yMDExIC0gaHR0cDovL3d3dy52aWRlb2xhbi5vcmcveDI2NC5odG1sIC0gb3B0aW9uczogY2FiYWM9MCByZWY9MSBkZWJsb2NrPTE6MDowIGFuYWx5c2U9MHgxOjAgbWU9ZXNhIHN1Ym1lPTkgcHN5PTAgbWl4ZWRfcmVmPTAgbWVfcmFuZ2U9NCBjaHJvbWFfbWU9MSB0cmVsbGlzPTAgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0wIGNocm9tYV9xcF9vZmZzZXQ9MCB0aHJlYWRzPTYgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTUwIGtleWludF9taW49NSBzY2VuZWN1dD00MCBpbnRyYV9yZWZyZXNoPTAgcmM9Y3FwIG1idHJlZT0wIHFwPTAAgAAAAD5liISscR8A+E4ACAACFoAAITAAAgsAAPgYCoKgoC+L4vi+KAvi+L4YfAEAACMzgABF9AAEUGUgABDJiXnf4AAAAARBmiKUAAAABEGaQpQAAAAEQZpilAAAAARBmoKU"}}catch(o){return void addTest("videoautoplay",!1)}n.setAttribute("autoplay",""),n.style.cssText="display:none",docElement.appendChild(n),setTimeout(function(){n.addEventListener("playing",e,!1),t=setTimeout(e,i)},0)}),/*!
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
Modernizr.addTest("vml",function(){var e,t=createElement("div"),i=!1;return isSVG||(t.innerHTML='<v:shape id="vml_flag1" adj="1" />',e=t.firstChild,e.style.behavior="url(#default#VML)",i=e?"object"==typeof e.adj:!0),i}),/*!
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
Modernizr.addAsyncTest(function(){if(Modernizr.webglextensions=new Boolean(!1),Modernizr.webgl){var e,t,i;try{e=createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl"),i=t.getSupportedExtensions()}catch(n){return}t!==undefined&&(Modernizr.webglextensions=new Boolean(!0));for(var s=-1,o=i.length;++s<o;)Modernizr.webglextensions[i[s]]=!0;e=undefined}}),/*!
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
Modernizr.addTest("datachannel",function(){if(!Modernizr.peerconnection)return!1;for(var e=0,t=domPrefixes.length;t>e;e++){var i=window[domPrefixes[e]+"RTCPeerConnection"];if(i){var n=new i({iceServers:[{url:"stun:0"}]});return"createDataChannel"in n}}return!1}),/*!
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
Modernizr.addTest("websocketsbinary",function(){var e,t="https:"==location.protocol?"wss":"ws";if("WebSocket"in window){if(e="binaryType"in WebSocket.prototype)return e;try{return!!new WebSocket(t+"://.").binaryType}catch(i){}}return!1}),/*!
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
Modernizr.addAsyncTest(function(){function e(){addTest("blobworkers",!1),t()}function t(){a&&n.revokeObjectURL(a),r&&r.terminate(),l&&clearTimeout(l)}try{var i=window.BlobBuilder,n=window.URL;Modernizr._config.usePrefix&&(i=i||window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder,n=n||window.MozURL||window.webkitURL||window.MSURL||window.OURL);var s,o,r,a,l,d="Modernizr",c="this.onmessage=function(e){postMessage(e.data)}";try{s=new Blob([c],{type:"text/javascript"})}catch(A){}s||(o=new i,o.append(c),s=o.getBlob()),a=n.createObjectURL(s),r=new Worker(a),r.onmessage=function(e){addTest("blobworkers",d===e.data),t()},r.onerror=e,l=setTimeout(e,200),r.postMessage(d)}catch(A){e()}}),/*!
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
Modernizr.addAsyncTest(function(){try{var e="Modernizr",t=new Worker("data:text/javascript;base64,dGhpcy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7cG9zdE1lc3NhZ2UoZS5kYXRhKX0=");t.onmessage=function(i){t.terminate(),addTest("dataworkers",e===i.data),t=null},t.onerror=function(){addTest("dataworkers",!1),t=null},setTimeout(function(){addTest("dataworkers",!1)},200),t.postMessage(e)}catch(i){setTimeout(function(){addTest("dataworkers",!1)},0)}}),/*!
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
Modernizr.addAsyncTest(function(){function e(){addTest("transferables",!1),t()}function t(){a&&URL.revokeObjectURL(a),l&&l.terminate(),s&&clearTimeout(s)}var i=!!(Modernizr.blobconstructor&&Modernizr.bloburls&&Modernizr.webworkers&&Modernizr.typedarrays);if(!i)return addTest("transferables",!1);try{var n,s,o='var hello = "world"',r=new Blob([o],{type:"text/javascript"}),a=URL.createObjectURL(r),l=new Worker(a);l.onerror=e,s=setTimeout(e,200),n=new ArrayBuffer(1),l.postMessage(n,[n]),addTest("transferables",0===n.byteLength),t()}catch(d){e()}}),/*!
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
function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function i(e){var t="length"in e&&e.length,i=K.type(e);return"function"===i||K.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===i||0===t||"number"==typeof t&&t>0&&t-1 in e}function n(e,t,i){if(K.isFunction(t))return K.grep(e,function(e,n){return!!t.call(e,n,e)!==i});if(t.nodeType)return K.grep(e,function(e){return e===t!==i});if("string"==typeof t){if(ae.test(t))return K.filter(t,e,i);t=K.filter(t,e)}return K.grep(e,function(e){return V.call(t,e)>=0!==i})}function s(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t=he[e]={};return K.each(e.match(pe)||[],function(e,i){t[i]=!0}),t}function r(){J.removeEventListener("DOMContentLoaded",r,!1),e.removeEventListener("load",r,!1),K.ready()}function a(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=K.expando+a.uid++}function l(e,t,i){var n;if(void 0===i&&1===e.nodeType)if(n="data-"+t.replace(ye,"-$1").toLowerCase(),i=e.getAttribute(n),"string"==typeof i){try{i="true"===i?!0:"false"===i?!1:"null"===i?null:+i+""===i?+i:we.test(i)?K.parseJSON(i):i}catch(s){}ve.set(e,t,i)}else i=void 0;return i}function d(){return!0}function c(){return!1}function A(){try{return J.activeElement}catch(e){}}function u(e,t){return K.nodeName(e,"table")&&K.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function p(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function h(e){var t=Re.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function f(e,t){for(var i=0,n=e.length;n>i;i++)me.set(e[i],"globalEval",!t||me.get(t[i],"globalEval"))}function g(e,t){var i,n,s,o,r,a,l,d;if(1===t.nodeType){if(me.hasData(e)&&(o=me.access(e),r=me.set(t,o),d=o.events)){delete r.handle,r.events={};for(s in d)for(i=0,n=d[s].length;n>i;i++)K.event.add(t,s,d[s][i])}ve.hasData(e)&&(a=ve.access(e),l=K.extend({},a),ve.set(t,l))}}function m(e,t){var i=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&K.nodeName(e,t)?K.merge([e],i):i}function v(e,t){var i=t.nodeName.toLowerCase();"input"===i&&Te.test(e.type)?t.checked=e.checked:("input"===i||"textarea"===i)&&(t.defaultValue=e.defaultValue)}function w(t,i){var n,s=K(i.createElement(t)).appendTo(i.body),o=e.getDefaultComputedStyle&&(n=e.getDefaultComputedStyle(s[0]))?n.display:K.css(s[0],"display");return s.detach(),o}function y(e){var t=J,i=$e[e];return i||(i=w(e,t),"none"!==i&&i||(qe=(qe||K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=qe[0].contentDocument,t.write(),t.close(),i=w(e,t),qe.detach()),$e[e]=i),i}function b(e,t,i){var n,s,o,r,a=e.style;return i=i||We(e),i&&(r=i.getPropertyValue(t)||i[t]),i&&(""!==r||K.contains(e.ownerDocument,e)||(r=K.style(e,t)),Ne.test(r)&&He.test(t)&&(n=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=i.width,a.width=n,a.minWidth=s,a.maxWidth=o)),void 0!==r?r+"":r}function x(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function _(e,t){if(t in e)return t;for(var i=t[0].toUpperCase()+t.slice(1),n=t,s=Ge.length;s--;)if(t=Ge[s]+i,t in e)return t;return n}function T(e,t,i){var n=Ue.exec(t);return n?Math.max(0,n[1]-(i||0))+(n[2]||"px"):t}function C(e,t,i,n,s){for(var o=i===(n?"border":"content")?4:"width"===t?1:0,r=0;4>o;o+=2)"margin"===i&&(r+=K.css(e,i+xe[o],!0,s)),n?("content"===i&&(r-=K.css(e,"padding"+xe[o],!0,s)),"margin"!==i&&(r-=K.css(e,"border"+xe[o]+"Width",!0,s))):(r+=K.css(e,"padding"+xe[o],!0,s),"padding"!==i&&(r+=K.css(e,"border"+xe[o]+"Width",!0,s)));return r}function k(e,t,i){var n=!0,s="width"===t?e.offsetWidth:e.offsetHeight,o=We(e),r="border-box"===K.css(e,"boxSizing",!1,o);if(0>=s||null==s){if(s=b(e,t,o),(0>s||null==s)&&(s=e.style[t]),Ne.test(s))return s;n=r&&(Y.boxSizingReliable()||s===e.style[t]),s=parseFloat(s)||0}return s+C(e,t,i||(r?"border":"content"),n,o)+"px"}function E(e,t){for(var i,n,s,o=[],r=0,a=e.length;a>r;r++)n=e[r],n.style&&(o[r]=me.get(n,"olddisplay"),i=n.style.display,t?(o[r]||"none"!==i||(n.style.display=""),""===n.style.display&&_e(n)&&(o[r]=me.access(n,"olddisplay",y(n.nodeName)))):(s=_e(n),"none"===i&&s||me.set(n,"olddisplay",s?i:K.css(n,"display"))));for(r=0;a>r;r++)n=e[r],n.style&&(t&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=t?o[r]||"":"none"));return e}function S(e,t,i,n,s){return new S.prototype.init(e,t,i,n,s)}function D(){return setTimeout(function(){Ye=void 0}),Ye=K.now()}function P(e,t){var i,n=0,s={height:e};for(t=t?1:0;4>n;n+=2-t)i=xe[n],s["margin"+i]=s["padding"+i]=e;return t&&(s.opacity=s.width=e),s}function M(e,t,i){for(var n,s=(it[t]||[]).concat(it["*"]),o=0,r=s.length;r>o;o++)if(n=s[o].call(i,t,e))return n}function z(e,t,i){var n,s,o,r,a,l,d,c,A=this,u={},p=e.style,h=e.nodeType&&_e(e),f=me.get(e,"fxshow");i.queue||(a=K._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,A.always(function(){A.always(function(){a.unqueued--,K.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(i.overflow=[p.overflow,p.overflowX,p.overflowY],d=K.css(e,"display"),c="none"===d?me.get(e,"olddisplay")||y(e.nodeName):d,"inline"===c&&"none"===K.css(e,"float")&&(p.display="inline-block")),i.overflow&&(p.overflow="hidden",A.always(function(){p.overflow=i.overflow[0],p.overflowX=i.overflow[1],p.overflowY=i.overflow[2]}));for(n in t)if(s=t[n],Xe.exec(s)){if(delete t[n],o=o||"toggle"===s,s===(h?"hide":"show")){if("show"!==s||!f||void 0===f[n])continue;h=!0}u[n]=f&&f[n]||K.style(e,n)}else d=void 0;if(K.isEmptyObject(u))"inline"===("none"===d?y(e.nodeName):d)&&(p.display=d);else{f?"hidden"in f&&(h=f.hidden):f=me.access(e,"fxshow",{}),o&&(f.hidden=!h),h?K(e).show():A.done(function(){K(e).hide()}),A.done(function(){var t;me.remove(e,"fxshow");for(t in u)K.style(e,t,u[t])});for(n in u)r=M(h?f[n]:0,n,A),n in f||(f[n]=r.start,h&&(r.end=r.start,r.start="width"===n||"height"===n?1:0))}}function B(e,t){var i,n,s,o,r;for(i in e)if(n=K.camelCase(i),s=t[n],o=e[i],K.isArray(o)&&(s=o[1],o=e[i]=o[0]),i!==n&&(e[n]=o,delete e[i]),r=K.cssHooks[n],r&&"expand"in r){o=r.expand(o),delete e[n];for(i in o)i in e||(e[i]=o[i],t[i]=s)}else t[n]=s}function Q(e,t,i){var n,s,o=0,r=tt.length,a=K.Deferred().always(function(){delete l.elem}),l=function(){if(s)return!1;for(var t=Ye||D(),i=Math.max(0,d.startTime+d.duration-t),n=i/d.duration||0,o=1-n,r=0,l=d.tweens.length;l>r;r++)d.tweens[r].run(o);return a.notifyWith(e,[d,o,i]),1>o&&l?i:(a.resolveWith(e,[d]),!1)},d=a.promise({elem:e,props:K.extend({},t),opts:K.extend(!0,{specialEasing:{}},i),originalProperties:t,originalOptions:i,startTime:Ye||D(),duration:i.duration,tweens:[],createTween:function(t,i){var n=K.Tween(e,d.opts,t,i,d.opts.specialEasing[t]||d.opts.easing);return d.tweens.push(n),n},stop:function(t){var i=0,n=t?d.tweens.length:0;if(s)return this;for(s=!0;n>i;i++)d.tweens[i].run(1);return t?a.resolveWith(e,[d,t]):a.rejectWith(e,[d,t]),this}}),c=d.props;for(B(c,d.opts.specialEasing);r>o;o++)if(n=tt[o].call(d,e,c,d.opts))return n;return K.map(c,M,d),K.isFunction(d.opts.start)&&d.opts.start.call(e,d),K.fx.timer(K.extend(l,{elem:e,anim:d,queue:d.opts.queue})),d.progress(d.opts.progress).done(d.opts.done,d.opts.complete).fail(d.opts.fail).always(d.opts.always)}function I(e){return function(t,i){"string"!=typeof t&&(i=t,t="*");var n,s=0,o=t.toLowerCase().match(pe)||[];if(K.isFunction(i))for(;n=o[s++];)"+"===n[0]?(n=n.slice(1)||"*",(e[n]=e[n]||[]).unshift(i)):(e[n]=e[n]||[]).push(i)}}function R(e,t,i,n){function s(a){var l;return o[a]=!0,K.each(e[a]||[],function(e,a){var d=a(t,i,n);return"string"!=typeof d||r||o[d]?r?!(l=d):void 0:(t.dataTypes.unshift(d),s(d),!1)}),l}var o={},r=e===wt;return s(t.dataTypes[0])||!o["*"]&&s("*")}function j(e,t){var i,n,s=K.ajaxSettings.flatOptions||{};for(i in t)void 0!==t[i]&&((s[i]?e:n||(n={}))[i]=t[i]);return n&&K.extend(!0,e,n),e}function F(e,t,i){for(var n,s,o,r,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===n&&(n=e.mimeType||t.getResponseHeader("Content-Type"));if(n)for(s in a)if(a[s]&&a[s].test(n)){l.unshift(s);break}if(l[0]in i)o=l[0];else{for(s in i){if(!l[0]||e.converters[s+" "+l[0]]){o=s;break}r||(r=s)}o=o||r}return o?(o!==l[0]&&l.unshift(o),i[o]):void 0}function q(e,t,i,n){var s,o,r,a,l,d={},c=e.dataTypes.slice();if(c[1])for(r in e.converters)d[r.toLowerCase()]=e.converters[r];for(o=c.shift();o;)if(e.responseFields[o]&&(i[e.responseFields[o]]=t),!l&&n&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(r=d[l+" "+o]||d["* "+o],!r)for(s in d)if(a=s.split(" "),a[1]===o&&(r=d[l+" "+a[0]]||d["* "+a[0]])){r===!0?r=d[s]:d[s]!==!0&&(o=a[0],c.unshift(a[1]));break}if(r!==!0)if(r&&e["throws"])t=r(t);else try{t=r(t)}catch(A){return{state:"parsererror",error:r?A:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}function $(e,t,i,n){var s;if(K.isArray(t))K.each(t,function(t,s){i||Tt.test(e)?n(e,s):$(e+"["+("object"==typeof s?t:"")+"]",s,i,n)});else if(i||"object"!==K.type(t))n(e,t);else for(s in t)$(e+"["+s+"]",t[s],i,n)}function H(e){return K.isWindow(e)?e:9===e.nodeType&&e.defaultView}var N=[],W=N.slice,O=N.concat,U=N.push,V=N.indexOf,L={},Z=L.toString,G=L.hasOwnProperty,Y={},J=e.document,X="2.1.4",K=function(e,t){return new K.fn.init(e,t)},ee=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,te=/^-ms-/,ie=/-([\da-z])/gi,ne=function(e,t){return t.toUpperCase()};K.fn=K.prototype={jquery:X,constructor:K,selector:"",length:0,toArray:function(){return W.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:W.call(this)},pushStack:function(e){var t=K.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return K.each(this,e,t)},map:function(e){return this.pushStack(K.map(this,function(t,i){return e.call(t,i,t)}))},slice:function(){return this.pushStack(W.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,i=+e+(0>e?t:0);return this.pushStack(i>=0&&t>i?[this[i]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:U,sort:N.sort,splice:N.splice},K.extend=K.fn.extend=function(){var e,t,i,n,s,o,r=arguments[0]||{},a=1,l=arguments.length,d=!1;for("boolean"==typeof r&&(d=r,r=arguments[a]||{},a++),"object"==typeof r||K.isFunction(r)||(r={}),a===l&&(r=this,a--);l>a;a++)if(null!=(e=arguments[a]))for(t in e)i=r[t],n=e[t],r!==n&&(d&&n&&(K.isPlainObject(n)||(s=K.isArray(n)))?(s?(s=!1,o=i&&K.isArray(i)?i:[]):o=i&&K.isPlainObject(i)?i:{},r[t]=K.extend(d,o,n)):void 0!==n&&(r[t]=n));return r},K.extend({expando:"jQuery"+(X+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===K.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!K.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"!==K.type(e)||e.nodeType||K.isWindow(e)?!1:e.constructor&&!G.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?L[Z.call(e)]||"object":typeof e},globalEval:function(e){var t,i=eval;e=K.trim(e),e&&(1===e.indexOf("use strict")?(t=J.createElement("script"),t.text=e,J.head.appendChild(t).parentNode.removeChild(t)):i(e))},camelCase:function(e){return e.replace(te,"ms-").replace(ie,ne)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var s,o=0,r=e.length,a=i(e);if(n){if(a)for(;r>o&&(s=t.apply(e[o],n),s!==!1);o++);else for(o in e)if(s=t.apply(e[o],n),s===!1)break}else if(a)for(;r>o&&(s=t.call(e[o],o,e[o]),s!==!1);o++);else for(o in e)if(s=t.call(e[o],o,e[o]),s===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(ee,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(i(Object(e))?K.merge(n,"string"==typeof e?[e]:e):U.call(n,e)),n},inArray:function(e,t,i){return null==t?-1:V.call(t,e,i)},merge:function(e,t){for(var i=+t.length,n=0,s=e.length;i>n;n++)e[s++]=t[n];return e.length=s,e},grep:function(e,t,i){for(var n,s=[],o=0,r=e.length,a=!i;r>o;o++)n=!t(e[o],o),n!==a&&s.push(e[o]);return s},map:function(e,t,n){var s,o=0,r=e.length,a=i(e),l=[];if(a)for(;r>o;o++)s=t(e[o],o,n),null!=s&&l.push(s);else for(o in e)s=t(e[o],o,n),null!=s&&l.push(s);return O.apply([],l)},guid:1,proxy:function(e,t){var i,n,s;return"string"==typeof t&&(i=e[t],t=e,e=i),K.isFunction(e)?(n=W.call(arguments,2),s=function(){return e.apply(t||this,n.concat(W.call(arguments)))},s.guid=e.guid=e.guid||K.guid++,s):void 0},now:Date.now,support:Y}),K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){L["[object "+t+"]"]=t.toLowerCase()});var se=/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
function(e){function t(e,t,i,n){var s,o,r,a,l,d,A,p,h,f;if((t?t.ownerDocument||t:$)!==z&&M(t),t=t||z,i=i||[],a=t.nodeType,"string"!=typeof e||!e||1!==a&&9!==a&&11!==a)return i;if(!n&&Q){if(11!==a&&(s=ve.exec(e)))if(r=s[1]){if(9===a){if(o=t.getElementById(r),!o||!o.parentNode)return i;if(o.id===r)return i.push(o),i}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(r))&&F(t,o)&&o.id===r)return i.push(o),i}else{if(s[2])return X.apply(i,t.getElementsByTagName(e)),i;if((r=s[3])&&b.getElementsByClassName)return X.apply(i,t.getElementsByClassName(r)),i}if(b.qsa&&(!I||!I.test(e))){if(p=A=q,h=t,f=1!==a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){for(d=C(e),(A=t.getAttribute("id"))?p=A.replace(ye,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",l=d.length;l--;)d[l]=p+u(d[l]);h=we.test(e)&&c(t.parentNode)||t,f=d.join(",")}if(f)try{return X.apply(i,h.querySelectorAll(f)),i}catch(g){}finally{A||t.removeAttribute("id")}}}return E(e.replace(le,"$1"),t,i,n)}function i(){function e(i,n){return t.push(i+" ")>x.cacheLength&&delete e[t.shift()],e[i+" "]=n}var t=[];return e}function n(e){return e[q]=!0,e}function s(e){var t=z.createElement("div");try{return!!e(t)}catch(i){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var i=e.split("|"),n=e.length;n--;)x.attrHandle[i[n]]=t}function r(e,t){var i=t&&e,n=i&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||L)-(~e.sourceIndex||L);if(n)return n;if(i)for(;i=i.nextSibling;)if(i===t)return-1;return e?1:-1}function a(e){return function(t){var i=t.nodeName.toLowerCase();return"input"===i&&t.type===e}}function l(e){return function(t){var i=t.nodeName.toLowerCase();return("input"===i||"button"===i)&&t.type===e}}function d(e){return n(function(t){return t=+t,n(function(i,n){for(var s,o=e([],i.length,t),r=o.length;r--;)i[s=o[r]]&&(i[s]=!(n[s]=i[s]))})})}function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function A(){}function u(e){for(var t=0,i=e.length,n="";i>t;t++)n+=e[t].value;return n}function p(e,t,i){var n=t.dir,s=i&&"parentNode"===n,o=N++;return t.first?function(t,i,o){for(;t=t[n];)if(1===t.nodeType||s)return e(t,i,o)}:function(t,i,r){var a,l,d=[H,o];if(r){for(;t=t[n];)if((1===t.nodeType||s)&&e(t,i,r))return!0}else for(;t=t[n];)if(1===t.nodeType||s){if(l=t[q]||(t[q]={}),(a=l[n])&&a[0]===H&&a[1]===o)return d[2]=a[2];if(l[n]=d,d[2]=e(t,i,r))return!0}}}function h(e){return e.length>1?function(t,i,n){for(var s=e.length;s--;)if(!e[s](t,i,n))return!1;return!0}:e[0]}function f(e,i,n){for(var s=0,o=i.length;o>s;s++)t(e,i[s],n);return n}function g(e,t,i,n,s){for(var o,r=[],a=0,l=e.length,d=null!=t;l>a;a++)(o=e[a])&&(!i||i(o,n,s))&&(r.push(o),d&&t.push(a));return r}function m(e,t,i,s,o,r){return s&&!s[q]&&(s=m(s)),o&&!o[q]&&(o=m(o,r)),n(function(n,r,a,l){var d,c,A,u=[],p=[],h=r.length,m=n||f(t||"*",a.nodeType?[a]:a,[]),v=!e||!n&&t?m:g(m,u,e,a,l),w=i?o||(n?e:h||s)?[]:r:v;if(i&&i(v,w,a,l),s)for(d=g(w,p),s(d,[],a,l),c=d.length;c--;)(A=d[c])&&(w[p[c]]=!(v[p[c]]=A));if(n){if(o||e){if(o){for(d=[],c=w.length;c--;)(A=w[c])&&d.push(v[c]=A);o(null,w=[],d,l)}for(c=w.length;c--;)(A=w[c])&&(d=o?ee(n,A):u[c])>-1&&(n[d]=!(r[d]=A))}}else w=g(w===r?w.splice(h,w.length):w),o?o(null,r,w,l):X.apply(r,w)})}function v(e){for(var t,i,n,s=e.length,o=x.relative[e[0].type],r=o||x.relative[" "],a=o?1:0,l=p(function(e){return e===t},r,!0),d=p(function(e){return ee(t,e)>-1},r,!0),c=[function(e,i,n){var s=!o&&(n||i!==S)||((t=i).nodeType?l(e,i,n):d(e,i,n));return t=null,s}];s>a;a++)if(i=x.relative[e[a].type])c=[p(h(c),i)];else{if(i=x.filter[e[a].type].apply(null,e[a].matches),i[q]){for(n=++a;s>n&&!x.relative[e[n].type];n++);return m(a>1&&h(c),a>1&&u(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(le,"$1"),i,n>a&&v(e.slice(a,n)),s>n&&v(e=e.slice(n)),s>n&&u(e))}c.push(i)}return h(c)}function w(e,i){var s=i.length>0,o=e.length>0,r=function(n,r,a,l,d){var c,A,u,p=0,h="0",f=n&&[],m=[],v=S,w=n||o&&x.find.TAG("*",d),y=H+=null==v?1:Math.random()||.1,b=w.length;for(d&&(S=r!==z&&r);h!==b&&null!=(c=w[h]);h++){if(o&&c){for(A=0;u=e[A++];)if(u(c,r,a)){l.push(c);break}d&&(H=y)}s&&((c=!u&&c)&&p--,n&&f.push(c))}if(p+=h,s&&h!==p){for(A=0;u=i[A++];)u(f,m,r,a);if(n){if(p>0)for(;h--;)f[h]||m[h]||(m[h]=Y.call(l));m=g(m)}X.apply(l,m),d&&!n&&m.length>0&&p+i.length>1&&t.uniqueSort(l)}return d&&(H=y,S=v),f};return s?n(r):r}var y,b,x,_,T,C,k,E,S,D,P,M,z,B,Q,I,R,j,F,q="sizzle"+1*new Date,$=e.document,H=0,N=0,W=i(),O=i(),U=i(),V=function(e,t){return e===t&&(P=!0),0},L=1<<31,Z={}.hasOwnProperty,G=[],Y=G.pop,J=G.push,X=G.push,K=G.slice,ee=function(e,t){for(var i=0,n=e.length;n>i;i++)if(e[i]===t)return i;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ie="[\\x20\\t\\r\\n\\f]",ne="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",se=ne.replace("w","w#"),oe="\\["+ie+"*("+ne+")(?:"+ie+"*([*^$|!~]?=)"+ie+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+se+"))|)"+ie+"*\\]",re=":("+ne+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",ae=new RegExp(ie+"+","g"),le=new RegExp("^"+ie+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ie+"+$","g"),de=new RegExp("^"+ie+"*,"+ie+"*"),ce=new RegExp("^"+ie+"*([>+~]|"+ie+")"+ie+"*"),Ae=new RegExp("="+ie+"*([^\\]'\"]*?)"+ie+"*\\]","g"),ue=new RegExp(re),pe=new RegExp("^"+se+"$"),he={ID:new RegExp("^#("+ne+")"),CLASS:new RegExp("^\\.("+ne+")"),TAG:new RegExp("^("+ne.replace("w","w*")+")"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ie+"*(even|odd|(([+-]|)(\\d*)n|)"+ie+"*(?:([+-]|)"+ie+"*(\\d+)|))"+ie+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ie+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ie+"*((?:-\\d)?\\d*)"+ie+"*\\)|)(?=[^-]|$)","i")},fe=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,we=/[+~]/,ye=/'|\\/g,be=new RegExp("\\\\([\\da-f]{1,6}"+ie+"?|("+ie+")|.)","ig"),xe=function(e,t,i){var n="0x"+t-65536;return n!==n||i?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)},_e=function(){M()};try{X.apply(G=K.call($.childNodes),$.childNodes),G[$.childNodes.length].nodeType}catch(Te){X={apply:G.length?function(e,t){J.apply(e,K.call(t))}:function(e,t){for(var i=e.length,n=0;e[i++]=t[n++];);e.length=i-1}}}b=t.support={},T=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},M=t.setDocument=function(e){var t,i,n=e?e.ownerDocument||e:$;return n!==z&&9===n.nodeType&&n.documentElement?(z=n,B=n.documentElement,i=n.defaultView,i&&i!==i.top&&(i.addEventListener?i.addEventListener("unload",_e,!1):i.attachEvent&&i.attachEvent("onunload",_e)),Q=!T(n),b.attributes=s(function(e){return e.className="i",!e.getAttribute("className")}),b.getElementsByTagName=s(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),b.getElementsByClassName=me.test(n.getElementsByClassName),b.getById=s(function(e){return B.appendChild(e).id=q,!n.getElementsByName||!n.getElementsByName(q).length}),b.getById?(x.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&Q){var i=t.getElementById(e);return i&&i.parentNode?[i]:[]}},x.filter.ID=function(e){var t=e.replace(be,xe);return function(e){return e.getAttribute("id")===t}}):(delete x.find.ID,x.filter.ID=function(e){var t=e.replace(be,xe);return function(e){var i="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return i&&i.value===t}}),x.find.TAG=b.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):b.qsa?t.querySelectorAll(e):void 0}:function(e,t){var i,n=[],s=0,o=t.getElementsByTagName(e);if("*"===e){for(;i=o[s++];)1===i.nodeType&&n.push(i);return n}return o},x.find.CLASS=b.getElementsByClassName&&function(e,t){return Q?t.getElementsByClassName(e):void 0},R=[],I=[],(b.qsa=me.test(n.querySelectorAll))&&(s(function(e){B.appendChild(e).innerHTML="<a id='"+q+"'></a><select id='"+q+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&I.push("[*^$]="+ie+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||I.push("\\["+ie+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+q+"-]").length||I.push("~="),e.querySelectorAll(":checked").length||I.push(":checked"),e.querySelectorAll("a#"+q+"+*").length||I.push(".#.+[+~]")}),s(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&I.push("name"+ie+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||I.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),I.push(",.*:")})),(b.matchesSelector=me.test(j=B.matches||B.webkitMatchesSelector||B.mozMatchesSelector||B.oMatchesSelector||B.msMatchesSelector))&&s(function(e){b.disconnectedMatch=j.call(e,"div"),j.call(e,"[s!='']:x"),R.push("!=",re)}),I=I.length&&new RegExp(I.join("|")),R=R.length&&new RegExp(R.join("|")),t=me.test(B.compareDocumentPosition),F=t||me.test(B.contains)?function(e,t){var i=9===e.nodeType?e.documentElement:e,n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(i.contains?i.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},V=t?function(e,t){if(e===t)return P=!0,0;var i=!e.compareDocumentPosition-!t.compareDocumentPosition;return i?i:(i=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&i||!b.sortDetached&&t.compareDocumentPosition(e)===i?e===n||e.ownerDocument===$&&F($,e)?-1:t===n||t.ownerDocument===$&&F($,t)?1:D?ee(D,e)-ee(D,t):0:4&i?-1:1)}:function(e,t){if(e===t)return P=!0,0;var i,s=0,o=e.parentNode,a=t.parentNode,l=[e],d=[t];if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:D?ee(D,e)-ee(D,t):0;if(o===a)return r(e,t);for(i=e;i=i.parentNode;)l.unshift(i);for(i=t;i=i.parentNode;)d.unshift(i);for(;l[s]===d[s];)s++;return s?r(l[s],d[s]):l[s]===$?-1:d[s]===$?1:0},n):z},t.matches=function(e,i){return t(e,null,null,i)},t.matchesSelector=function(e,i){if((e.ownerDocument||e)!==z&&M(e),i=i.replace(Ae,"='$1']"),b.matchesSelector&&Q&&(!R||!R.test(i))&&(!I||!I.test(i)))try{var n=j.call(e,i);if(n||b.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(s){}return t(i,z,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==z&&M(e),F(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==z&&M(e);var i=x.attrHandle[t.toLowerCase()],n=i&&Z.call(x.attrHandle,t.toLowerCase())?i(e,t,!Q):void 0;return void 0!==n?n:b.attributes||!Q?e.getAttribute(t):(n=e.getAttributeNode(t))&&n.specified?n.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,i=[],n=0,s=0;if(P=!b.detectDuplicates,D=!b.sortStable&&e.slice(0),e.sort(V),P){for(;t=e[s++];)t===e[s]&&(n=i.push(s));for(;n--;)e.splice(i[n],1)}return D=null,e},_=t.getText=function(e){var t,i="",n=0,s=e.nodeType;if(s){if(1===s||9===s||11===s){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)i+=_(e)}else if(3===s||4===s)return e.nodeValue}else for(;t=e[n++];)i+=_(t);return i},x=t.selectors={cacheLength:50,createPseudo:n,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(be,xe),e[3]=(e[3]||e[4]||e[5]||"").replace(be,xe),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,i=!e[6]&&e[2];return he.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":i&&ue.test(i)&&(t=C(i,!0))&&(t=i.indexOf(")",i.length-t)-i.length)&&(e[0]=e[0].slice(0,t),e[2]=i.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(be,xe).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=W[e+" "];return t||(t=new RegExp("(^|"+ie+")"+e+"("+ie+"|$)"))&&W(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,i,n){return function(s){var o=t.attr(s,e);return null==o?"!="===i:i?(o+="","="===i?o===n:"!="===i?o!==n:"^="===i?n&&0===o.indexOf(n):"*="===i?n&&o.indexOf(n)>-1:"$="===i?n&&o.slice(-n.length)===n:"~="===i?(" "+o.replace(ae," ")+" ").indexOf(n)>-1:"|="===i?o===n||o.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,i,n,s){var o="nth"!==e.slice(0,3),r="last"!==e.slice(-4),a="of-type"===t;return 1===n&&0===s?function(e){return!!e.parentNode}:function(t,i,l){var d,c,A,u,p,h,f=o!==r?"nextSibling":"previousSibling",g=t.parentNode,m=a&&t.nodeName.toLowerCase(),v=!l&&!a;if(g){if(o){for(;f;){for(A=t;A=A[f];)if(a?A.nodeName.toLowerCase()===m:1===A.nodeType)return!1;h=f="only"===e&&!h&&"nextSibling"}return!0}if(h=[r?g.firstChild:g.lastChild],r&&v){for(c=g[q]||(g[q]={}),d=c[e]||[],p=d[0]===H&&d[1],u=d[0]===H&&d[2],A=p&&g.childNodes[p];A=++p&&A&&A[f]||(u=p=0)||h.pop();)if(1===A.nodeType&&++u&&A===t){c[e]=[H,p,u];break}}else if(v&&(d=(t[q]||(t[q]={}))[e])&&d[0]===H)u=d[1];else for(;(A=++p&&A&&A[f]||(u=p=0)||h.pop())&&((a?A.nodeName.toLowerCase()!==m:1!==A.nodeType)||!++u||(v&&((A[q]||(A[q]={}))[e]=[H,u]),A!==t)););return u-=s,u===n||u%n===0&&u/n>=0}}},PSEUDO:function(e,i){var s,o=x.pseudos[e]||x.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[q]?o(i):o.length>1?(s=[e,e,"",i],x.setFilters.hasOwnProperty(e.toLowerCase())?n(function(e,t){for(var n,s=o(e,i),r=s.length;r--;)n=ee(e,s[r]),e[n]=!(t[n]=s[r])}):function(e){return o(e,0,s)}):o}},pseudos:{not:n(function(e){var t=[],i=[],s=k(e.replace(le,"$1"));return s[q]?n(function(e,t,i,n){for(var o,r=s(e,null,n,[]),a=e.length;a--;)(o=r[a])&&(e[a]=!(t[a]=o))}):function(e,n,o){return t[0]=e,s(t,null,o,i),t[0]=null,!i.pop()}}),has:n(function(e){return function(i){return t(e,i).length>0}}),contains:n(function(e){return e=e.replace(be,xe),function(t){return(t.textContent||t.innerText||_(t)).indexOf(e)>-1}}),lang:n(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(be,xe).toLowerCase(),function(t){var i;do if(i=Q?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return i=i.toLowerCase(),i===e||0===i.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var i=e.location&&e.location.hash;return i&&i.slice(1)===t.id},root:function(e){return e===B},focus:function(e){return e===z.activeElement&&(!z.hasFocus||z.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!x.pseudos.empty(e)},header:function(e){return ge.test(e.nodeName)},input:function(e){return fe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:d(function(){return[0]}),last:d(function(e,t){return[t-1]}),eq:d(function(e,t,i){return[0>i?i+t:i]}),even:d(function(e,t){for(var i=0;t>i;i+=2)e.push(i);return e}),odd:d(function(e,t){for(var i=1;t>i;i+=2)e.push(i);return e}),lt:d(function(e,t,i){for(var n=0>i?i+t:i;--n>=0;)e.push(n);return e}),gt:d(function(e,t,i){for(var n=0>i?i+t:i;++n<t;)e.push(n);return e})}},x.pseudos.nth=x.pseudos.eq;for(y in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[y]=a(y);for(y in{submit:!0,reset:!0})x.pseudos[y]=l(y);return A.prototype=x.filters=x.pseudos,x.setFilters=new A,C=t.tokenize=function(e,i){var n,s,o,r,a,l,d,c=O[e+" "];if(c)return i?0:c.slice(0);for(a=e,l=[],d=x.preFilter;a;){(!n||(s=de.exec(a)))&&(s&&(a=a.slice(s[0].length)||a),l.push(o=[])),n=!1,(s=ce.exec(a))&&(n=s.shift(),o.push({value:n,type:s[0].replace(le," ")}),a=a.slice(n.length));for(r in x.filter)!(s=he[r].exec(a))||d[r]&&!(s=d[r](s))||(n=s.shift(),o.push({value:n,type:r,matches:s}),a=a.slice(n.length));if(!n)break}return i?a.length:a?t.error(e):O(e,l).slice(0)},k=t.compile=function(e,t){var i,n=[],s=[],o=U[e+" "];if(!o){for(t||(t=C(e)),i=t.length;i--;)o=v(t[i]),o[q]?n.push(o):s.push(o);o=U(e,w(s,n)),o.selector=e}return o},E=t.select=function(e,t,i,n){var s,o,r,a,l,d="function"==typeof e&&e,A=!n&&C(e=d.selector||e);if(i=i||[],1===A.length){if(o=A[0]=A[0].slice(0),o.length>2&&"ID"===(r=o[0]).type&&b.getById&&9===t.nodeType&&Q&&x.relative[o[1].type]){if(t=(x.find.ID(r.matches[0].replace(be,xe),t)||[])[0],!t)return i;d&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(s=he.needsContext.test(e)?0:o.length;s--&&(r=o[s],!x.relative[a=r.type]);)if((l=x.find[a])&&(n=l(r.matches[0].replace(be,xe),we.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(s,1),e=n.length&&u(o),!e)return X.apply(i,n),i;break}}return(d||k(e,A))(n,t,!Q,i,we.test(e)&&c(t.parentNode)||t),i},b.sortStable=q.split("").sort(V).join("")===q,b.detectDuplicates=!!P,M(),b.sortDetached=s(function(e){return 1&e.compareDocumentPosition(z.createElement("div"))}),s(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,i){return i?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),b.attributes&&s(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,i){return i||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),s(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,i){var n;return i?void 0:e[t]===!0?t.toLowerCase():(n=e.getAttributeNode(t))&&n.specified?n.value:null}),t}(e);K.find=se,K.expr=se.selectors,K.expr[":"]=K.expr.pseudos,K.unique=se.uniqueSort,K.text=se.getText,K.isXMLDoc=se.isXML,K.contains=se.contains;var oe=K.expr.match.needsContext,re=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ae=/^.[^:#\[\.,]*$/;K.filter=function(e,t,i){var n=t[0];return i&&(e=":not("+e+")"),1===t.length&&1===n.nodeType?K.find.matchesSelector(n,e)?[n]:[]:K.find.matches(e,K.grep(t,function(e){return 1===e.nodeType}))},K.fn.extend({find:function(e){var t,i=this.length,n=[],s=this;if("string"!=typeof e)return this.pushStack(K(e).filter(function(){for(t=0;i>t;t++)if(K.contains(s[t],this))return!0}));for(t=0;i>t;t++)K.find(e,s[t],n);return n=this.pushStack(i>1?K.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(n(this,e||[],!1))},not:function(e){return this.pushStack(n(this,e||[],!0))},is:function(e){return!!n(this,"string"==typeof e&&oe.test(e)?K(e):e||[],!1).length}});var le,de=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ce=K.fn.init=function(e,t){var i,n;if(!e)return this;if("string"==typeof e){if(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:de.exec(e),!i||!i[1]&&t)return!t||t.jquery?(t||le).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof K?t[0]:t,K.merge(this,K.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:J,!0)),re.test(i[1])&&K.isPlainObject(t))for(i in t)K.isFunction(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return n=J.getElementById(i[2]),n&&n.parentNode&&(this.length=1,this[0]=n),this.context=J,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):K.isFunction(e)?"undefined"!=typeof le.ready?le.ready(e):e(K):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),K.makeArray(e,this))};ce.prototype=K.fn,le=K(J);var Ae=/^(?:parents|prev(?:Until|All))/,ue={children:!0,contents:!0,next:!0,prev:!0};K.extend({dir:function(e,t,i){for(var n=[],s=void 0!==i;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(s&&K(e).is(i))break;n.push(e)}return n},sibling:function(e,t){for(var i=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&i.push(e);return i}}),K.fn.extend({has:function(e){var t=K(e,this),i=t.length;return this.filter(function(){for(var e=0;i>e;e++)if(K.contains(this,t[e]))return!0})},closest:function(e,t){for(var i,n=0,s=this.length,o=[],r=oe.test(e)||"string"!=typeof e?K(e,t||this.context):0;s>n;n++)for(i=this[n];i&&i!==t;i=i.parentNode)if(i.nodeType<11&&(r?r.index(i)>-1:1===i.nodeType&&K.find.matchesSelector(i,e))){o.push(i);break}return this.pushStack(o.length>1?K.unique(o):o)},index:function(e){return e?"string"==typeof e?V.call(K(e),this[0]):V.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(K.unique(K.merge(this.get(),K(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),K.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return K.dir(e,"parentNode")},parentsUntil:function(e,t,i){return K.dir(e,"parentNode",i)},next:function(e){return s(e,"nextSibling")},prev:function(e){return s(e,"previousSibling")},nextAll:function(e){return K.dir(e,"nextSibling")},prevAll:function(e){return K.dir(e,"previousSibling")},nextUntil:function(e,t,i){return K.dir(e,"nextSibling",i)},prevUntil:function(e,t,i){return K.dir(e,"previousSibling",i)},siblings:function(e){return K.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return K.sibling(e.firstChild)},contents:function(e){return e.contentDocument||K.merge([],e.childNodes)}},function(e,t){K.fn[e]=function(i,n){var s=K.map(this,t,i);return"Until"!==e.slice(-5)&&(n=i),n&&"string"==typeof n&&(s=K.filter(n,s)),this.length>1&&(ue[e]||K.unique(s),Ae.test(e)&&s.reverse()),this.pushStack(s)}});var pe=/\S+/g,he={};K.Callbacks=function(e){e="string"==typeof e?he[e]||o(e):K.extend({},e);var t,i,n,s,r,a,l=[],d=!e.once&&[],c=function(o){for(t=e.memory&&o,i=!0,a=s||0,s=0,r=l.length,n=!0;l&&r>a;a++)if(l[a].apply(o[0],o[1])===!1&&e.stopOnFalse){t=!1;break}n=!1,l&&(d?d.length&&c(d.shift()):t?l=[]:A.disable())},A={add:function(){if(l){var i=l.length;!function o(t){K.each(t,function(t,i){var n=K.type(i);"function"===n?e.unique&&A.has(i)||l.push(i):i&&i.length&&"string"!==n&&o(i)})}(arguments),n?r=l.length:t&&(s=i,c(t))}return this},remove:function(){return l&&K.each(arguments,function(e,t){for(var i;(i=K.inArray(t,l,i))>-1;)l.splice(i,1),n&&(r>=i&&r--,a>=i&&a--)}),this},has:function(e){return e?K.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],r=0,this},disable:function(){return l=d=t=void 0,this},disabled:function(){return!l},lock:function(){return d=void 0,t||A.disable(),this},locked:function(){return!d},fireWith:function(e,t){return!l||i&&!d||(t=t||[],t=[e,t.slice?t.slice():t],n?d.push(t):c(t)),this},fire:function(){return A.fireWith(this,arguments),this},fired:function(){return!!i}};return A},K.extend({Deferred:function(e){var t=[["resolve","done",K.Callbacks("once memory"),"resolved"],["reject","fail",K.Callbacks("once memory"),"rejected"],["notify","progress",K.Callbacks("memory")]],i="pending",n={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},then:function(){var e=arguments;return K.Deferred(function(i){K.each(t,function(t,o){var r=K.isFunction(e[t])&&e[t];s[o[1]](function(){var e=r&&r.apply(this,arguments);e&&K.isFunction(e.promise)?e.promise().done(i.resolve).fail(i.reject).progress(i.notify):i[o[0]+"With"](this===n?i.promise():this,r?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?K.extend(e,n):n}},s={};return n.pipe=n.then,K.each(t,function(e,o){var r=o[2],a=o[3];n[o[1]]=r.add,a&&r.add(function(){i=a},t[1^e][2].disable,t[2][2].lock),s[o[0]]=function(){return s[o[0]+"With"](this===s?n:this,arguments),this},s[o[0]+"With"]=r.fireWith}),n.promise(s),e&&e.call(s,s),s},when:function(e){var t,i,n,s=0,o=W.call(arguments),r=o.length,a=1!==r||e&&K.isFunction(e.promise)?r:0,l=1===a?e:K.Deferred(),d=function(e,i,n){return function(s){i[e]=this,n[e]=arguments.length>1?W.call(arguments):s,n===t?l.notifyWith(i,n):--a||l.resolveWith(i,n)}};if(r>1)for(t=new Array(r),i=new Array(r),n=new Array(r);r>s;s++)o[s]&&K.isFunction(o[s].promise)?o[s].promise().done(d(s,n,o)).fail(l.reject).progress(d(s,i,t)):--a;return a||l.resolveWith(n,o),l.promise()}});var fe;K.fn.ready=function(e){return K.ready.promise().done(e),this},K.extend({isReady:!1,readyWait:1,holdReady:function(e){e?K.readyWait++:K.ready(!0)},ready:function(e){(e===!0?--K.readyWait:K.isReady)||(K.isReady=!0,e!==!0&&--K.readyWait>0||(fe.resolveWith(J,[K]),K.fn.triggerHandler&&(K(J).triggerHandler("ready"),K(J).off("ready"))))}}),K.ready.promise=function(t){return fe||(fe=K.Deferred(),"complete"===J.readyState?setTimeout(K.ready):(J.addEventListener("DOMContentLoaded",r,!1),e.addEventListener("load",r,!1))),fe.promise(t)},K.ready.promise();var ge=K.access=function(e,t,i,n,s,o,r){var a=0,l=e.length,d=null==i;if("object"===K.type(i)){s=!0;for(a in i)K.access(e,t,a,i[a],!0,o,r)}else if(void 0!==n&&(s=!0,K.isFunction(n)||(r=!0),d&&(r?(t.call(e,n),t=null):(d=t,t=function(e,t,i){return d.call(K(e),i)})),t))for(;l>a;a++)t(e[a],i,r?n:n.call(e[a],a,t(e[a],i)));return s?e:d?t.call(e):l?t(e[0],i):o};K.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},a.uid=1,a.accepts=K.acceptData,a.prototype={key:function(e){if(!a.accepts(e))return 0;var t={},i=e[this.expando];if(!i){i=a.uid++;try{t[this.expando]={value:i},Object.defineProperties(e,t)}catch(n){t[this.expando]=i,K.extend(e,t)}}return this.cache[i]||(this.cache[i]={}),i},set:function(e,t,i){var n,s=this.key(e),o=this.cache[s];if("string"==typeof t)o[t]=i;else if(K.isEmptyObject(o))K.extend(this.cache[s],t);else for(n in t)o[n]=t[n];return o},get:function(e,t){var i=this.cache[this.key(e)];return void 0===t?i:i[t]},access:function(e,t,i){var n;return void 0===t||t&&"string"==typeof t&&void 0===i?(n=this.get(e,t),void 0!==n?n:this.get(e,K.camelCase(t))):(this.set(e,t,i),void 0!==i?i:t)},remove:function(e,t){var i,n,s,o=this.key(e),r=this.cache[o];if(void 0===t)this.cache[o]={};else{K.isArray(t)?n=t.concat(t.map(K.camelCase)):(s=K.camelCase(t),t in r?n=[t,s]:(n=s,n=n in r?[n]:n.match(pe)||[])),i=n.length;for(;i--;)delete r[n[i]]}},hasData:function(e){return!K.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var me=new a,ve=new a,we=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ye=/([A-Z])/g;K.extend({hasData:function(e){return ve.hasData(e)||me.hasData(e)},data:function(e,t,i){return ve.access(e,t,i)},removeData:function(e,t){ve.remove(e,t)},_data:function(e,t,i){return me.access(e,t,i)},_removeData:function(e,t){me.remove(e,t)}}),K.fn.extend({data:function(e,t){var i,n,s,o=this[0],r=o&&o.attributes;if(void 0===e){if(this.length&&(s=ve.get(o),1===o.nodeType&&!me.get(o,"hasDataAttrs"))){for(i=r.length;i--;)r[i]&&(n=r[i].name,0===n.indexOf("data-")&&(n=K.camelCase(n.slice(5)),l(o,n,s[n])));me.set(o,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){ve.set(this,e)}):ge(this,function(t){var i,n=K.camelCase(e);if(o&&void 0===t){if(i=ve.get(o,e),void 0!==i)return i;if(i=ve.get(o,n),void 0!==i)return i;if(i=l(o,n,void 0),void 0!==i)return i}else this.each(function(){var i=ve.get(this,n);ve.set(this,n,t),-1!==e.indexOf("-")&&void 0!==i&&ve.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){ve.remove(this,e)})}}),K.extend({queue:function(e,t,i){var n;return e?(t=(t||"fx")+"queue",n=me.get(e,t),i&&(!n||K.isArray(i)?n=me.access(e,t,K.makeArray(i)):n.push(i)),n||[]):void 0},dequeue:function(e,t){t=t||"fx";var i=K.queue(e,t),n=i.length,s=i.shift(),o=K._queueHooks(e,t),r=function(){K.dequeue(e,t)};"inprogress"===s&&(s=i.shift(),n--),s&&("fx"===t&&i.unshift("inprogress"),delete o.stop,s.call(e,r,o)),!n&&o&&o.empty.fire()},_queueHooks:function(e,t){var i=t+"queueHooks";return me.get(e,i)||me.access(e,i,{empty:K.Callbacks("once memory").add(function(){me.remove(e,[t+"queue",i])})})}}),K.fn.extend({queue:function(e,t){var i=2;return"string"!=typeof e&&(t=e,e="fx",i--),arguments.length<i?K.queue(this[0],e):void 0===t?this:this.each(function(){var i=K.queue(this,e,t);K._queueHooks(this,e),"fx"===e&&"inprogress"!==i[0]&&K.dequeue(this,e)})},dequeue:function(e){return this.each(function(){K.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var i,n=1,s=K.Deferred(),o=this,r=this.length,a=function(){--n||s.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";r--;)i=me.get(o[r],e+"queueHooks"),i&&i.empty&&(n++,i.empty.add(a));return a(),s.promise(t)}});var be=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,xe=["Top","Right","Bottom","Left"],_e=function(e,t){return e=t||e,"none"===K.css(e,"display")||!K.contains(e.ownerDocument,e)},Te=/^(?:checkbox|radio)$/i;!function(){var e=J.createDocumentFragment(),t=e.appendChild(J.createElement("div")),i=J.createElement("input");i.setAttribute("type","radio"),i.setAttribute("checked","checked"),i.setAttribute("name","t"),t.appendChild(i),Y.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Ce="undefined";Y.focusinBubbles="onfocusin"in e;var ke=/^key/,Ee=/^(?:mouse|pointer|contextmenu)|click/,Se=/^(?:focusinfocus|focusoutblur)$/,De=/^([^.]*)(?:\.(.+)|)$/;K.event={global:{},add:function(e,t,i,n,s){var o,r,a,l,d,c,A,u,p,h,f,g=me.get(e);if(g)for(i.handler&&(o=i,i=o.handler,s=o.selector),i.guid||(i.guid=K.guid++),(l=g.events)||(l=g.events={}),(r=g.handle)||(r=g.handle=function(t){return typeof K!==Ce&&K.event.triggered!==t.type?K.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(pe)||[""],d=t.length;d--;)a=De.exec(t[d])||[],p=f=a[1],h=(a[2]||"").split(".").sort(),p&&(A=K.event.special[p]||{},p=(s?A.delegateType:A.bindType)||p,A=K.event.special[p]||{},c=K.extend({type:p,origType:f,data:n,handler:i,guid:i.guid,selector:s,needsContext:s&&K.expr.match.needsContext.test(s),namespace:h.join(".")},o),(u=l[p])||(u=l[p]=[],u.delegateCount=0,A.setup&&A.setup.call(e,n,h,r)!==!1||e.addEventListener&&e.addEventListener(p,r,!1)),A.add&&(A.add.call(e,c),c.handler.guid||(c.handler.guid=i.guid)),s?u.splice(u.delegateCount++,0,c):u.push(c),K.event.global[p]=!0)},remove:function(e,t,i,n,s){var o,r,a,l,d,c,A,u,p,h,f,g=me.hasData(e)&&me.get(e);if(g&&(l=g.events)){for(t=(t||"").match(pe)||[""],d=t.length;d--;)if(a=De.exec(t[d])||[],p=f=a[1],h=(a[2]||"").split(".").sort(),p){for(A=K.event.special[p]||{},p=(n?A.delegateType:A.bindType)||p,u=l[p]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),r=o=u.length;o--;)c=u[o],!s&&f!==c.origType||i&&i.guid!==c.guid||a&&!a.test(c.namespace)||n&&n!==c.selector&&("**"!==n||!c.selector)||(u.splice(o,1),c.selector&&u.delegateCount--,A.remove&&A.remove.call(e,c));r&&!u.length&&(A.teardown&&A.teardown.call(e,h,g.handle)!==!1||K.removeEvent(e,p,g.handle),delete l[p])}else for(p in l)K.event.remove(e,p+t[d],i,n,!0);K.isEmptyObject(l)&&(delete g.handle,me.remove(e,"events"))}},trigger:function(t,i,n,s){var o,r,a,l,d,c,A,u=[n||J],p=G.call(t,"type")?t.type:t,h=G.call(t,"namespace")?t.namespace.split("."):[];if(r=a=n=n||J,3!==n.nodeType&&8!==n.nodeType&&!Se.test(p+K.event.triggered)&&(p.indexOf(".")>=0&&(h=p.split("."),p=h.shift(),h.sort()),d=p.indexOf(":")<0&&"on"+p,t=t[K.expando]?t:new K.Event(p,"object"==typeof t&&t),t.isTrigger=s?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=n),i=null==i?[t]:K.makeArray(i,[t]),A=K.event.special[p]||{},s||!A.trigger||A.trigger.apply(n,i)!==!1)){if(!s&&!A.noBubble&&!K.isWindow(n)){for(l=A.delegateType||p,Se.test(l+p)||(r=r.parentNode);r;r=r.parentNode)u.push(r),a=r;a===(n.ownerDocument||J)&&u.push(a.defaultView||a.parentWindow||e)}for(o=0;(r=u[o++])&&!t.isPropagationStopped();)t.type=o>1?l:A.bindType||p,c=(me.get(r,"events")||{})[t.type]&&me.get(r,"handle"),c&&c.apply(r,i),c=d&&r[d],c&&c.apply&&K.acceptData(r)&&(t.result=c.apply(r,i),t.result===!1&&t.preventDefault());return t.type=p,s||t.isDefaultPrevented()||A._default&&A._default.apply(u.pop(),i)!==!1||!K.acceptData(n)||d&&K.isFunction(n[p])&&!K.isWindow(n)&&(a=n[d],a&&(n[d]=null),K.event.triggered=p,n[p](),K.event.triggered=void 0,
a&&(n[d]=a)),t.result}},dispatch:function(e){e=K.event.fix(e);var t,i,n,s,o,r=[],a=W.call(arguments),l=(me.get(this,"events")||{})[e.type]||[],d=K.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!d.preDispatch||d.preDispatch.call(this,e)!==!1){for(r=K.event.handlers.call(this,e,l),t=0;(s=r[t++])&&!e.isPropagationStopped();)for(e.currentTarget=s.elem,i=0;(o=s.handlers[i++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,n=((K.event.special[o.origType]||{}).handle||o.handler).apply(s.elem,a),void 0!==n&&(e.result=n)===!1&&(e.preventDefault(),e.stopPropagation()));return d.postDispatch&&d.postDispatch.call(this,e),e.result}},handlers:function(e,t){var i,n,s,o,r=[],a=t.delegateCount,l=e.target;if(a&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!==this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==e.type){for(n=[],i=0;a>i;i++)o=t[i],s=o.selector+" ",void 0===n[s]&&(n[s]=o.needsContext?K(s,this).index(l)>=0:K.find(s,this,null,[l]).length),n[s]&&n.push(o);n.length&&r.push({elem:l,handlers:n})}return a<t.length&&r.push({elem:this,handlers:t.slice(a)}),r},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var i,n,s,o=t.button;return null==e.pageX&&null!=t.clientX&&(i=e.target.ownerDocument||J,n=i.documentElement,s=i.body,e.pageX=t.clientX+(n&&n.scrollLeft||s&&s.scrollLeft||0)-(n&&n.clientLeft||s&&s.clientLeft||0),e.pageY=t.clientY+(n&&n.scrollTop||s&&s.scrollTop||0)-(n&&n.clientTop||s&&s.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[K.expando])return e;var t,i,n,s=e.type,o=e,r=this.fixHooks[s];for(r||(this.fixHooks[s]=r=Ee.test(s)?this.mouseHooks:ke.test(s)?this.keyHooks:{}),n=r.props?this.props.concat(r.props):this.props,e=new K.Event(o),t=n.length;t--;)i=n[t],e[i]=o[i];return e.target||(e.target=J),3===e.target.nodeType&&(e.target=e.target.parentNode),r.filter?r.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==A()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===A()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&K.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return K.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,i,n){var s=K.extend(new K.Event,i,{type:e,isSimulated:!0,originalEvent:{}});n?K.event.trigger(s,null,t):K.event.dispatch.call(t,s),s.isDefaultPrevented()&&i.preventDefault()}},K.removeEvent=function(e,t,i){e.removeEventListener&&e.removeEventListener(t,i,!1)},K.Event=function(e,t){return this instanceof K.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?d:c):this.type=e,t&&K.extend(this,t),this.timeStamp=e&&e.timeStamp||K.now(),void(this[K.expando]=!0)):new K.Event(e,t)},K.Event.prototype={isDefaultPrevented:c,isPropagationStopped:c,isImmediatePropagationStopped:c,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=d,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=d,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=d,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},K.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){K.event.special[e]={delegateType:t,bindType:t,handle:function(e){var i,n=this,s=e.relatedTarget,o=e.handleObj;return(!s||s!==n&&!K.contains(n,s))&&(e.type=o.origType,i=o.handler.apply(this,arguments),e.type=t),i}}}),Y.focusinBubbles||K.each({focus:"focusin",blur:"focusout"},function(e,t){var i=function(e){K.event.simulate(t,e.target,K.event.fix(e),!0)};K.event.special[t]={setup:function(){var n=this.ownerDocument||this,s=me.access(n,t);s||n.addEventListener(e,i,!0),me.access(n,t,(s||0)+1)},teardown:function(){var n=this.ownerDocument||this,s=me.access(n,t)-1;s?me.access(n,t,s):(n.removeEventListener(e,i,!0),me.remove(n,t))}}}),K.fn.extend({on:function(e,t,i,n,s){var o,r;if("object"==typeof e){"string"!=typeof t&&(i=i||t,t=void 0);for(r in e)this.on(r,t,i,e[r],s);return this}if(null==i&&null==n?(n=t,i=t=void 0):null==n&&("string"==typeof t?(n=i,i=void 0):(n=i,i=t,t=void 0)),n===!1)n=c;else if(!n)return this;return 1===s&&(o=n,n=function(e){return K().off(e),o.apply(this,arguments)},n.guid=o.guid||(o.guid=K.guid++)),this.each(function(){K.event.add(this,e,n,i,t)})},one:function(e,t,i,n){return this.on(e,t,i,n,1)},off:function(e,t,i){var n,s;if(e&&e.preventDefault&&e.handleObj)return n=e.handleObj,K(e.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;if("object"==typeof e){for(s in e)this.off(s,t,e[s]);return this}return(t===!1||"function"==typeof t)&&(i=t,t=void 0),i===!1&&(i=c),this.each(function(){K.event.remove(this,e,i,t)})},trigger:function(e,t){return this.each(function(){K.event.trigger(e,t,this)})},triggerHandler:function(e,t){var i=this[0];return i?K.event.trigger(e,t,i,!0):void 0}});var Pe=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Me=/<([\w:]+)/,ze=/<|&#?\w+;/,Be=/<(?:script|style|link)/i,Qe=/checked\s*(?:[^=]|=\s*.checked.)/i,Ie=/^$|\/(?:java|ecma)script/i,Re=/^true\/(.*)/,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Fe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Fe.optgroup=Fe.option,Fe.tbody=Fe.tfoot=Fe.colgroup=Fe.caption=Fe.thead,Fe.th=Fe.td,K.extend({clone:function(e,t,i){var n,s,o,r,a=e.cloneNode(!0),l=K.contains(e.ownerDocument,e);if(!(Y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||K.isXMLDoc(e)))for(r=m(a),o=m(e),n=0,s=o.length;s>n;n++)v(o[n],r[n]);if(t)if(i)for(o=o||m(e),r=r||m(a),n=0,s=o.length;s>n;n++)g(o[n],r[n]);else g(e,a);return r=m(a,"script"),r.length>0&&f(r,!l&&m(e,"script")),a},buildFragment:function(e,t,i,n){for(var s,o,r,a,l,d,c=t.createDocumentFragment(),A=[],u=0,p=e.length;p>u;u++)if(s=e[u],s||0===s)if("object"===K.type(s))K.merge(A,s.nodeType?[s]:s);else if(ze.test(s)){for(o=o||c.appendChild(t.createElement("div")),r=(Me.exec(s)||["",""])[1].toLowerCase(),a=Fe[r]||Fe._default,o.innerHTML=a[1]+s.replace(Pe,"<$1></$2>")+a[2],d=a[0];d--;)o=o.lastChild;K.merge(A,o.childNodes),o=c.firstChild,o.textContent=""}else A.push(t.createTextNode(s));for(c.textContent="",u=0;s=A[u++];)if((!n||-1===K.inArray(s,n))&&(l=K.contains(s.ownerDocument,s),o=m(c.appendChild(s),"script"),l&&f(o),i))for(d=0;s=o[d++];)Ie.test(s.type||"")&&i.push(s);return c},cleanData:function(e){for(var t,i,n,s,o=K.event.special,r=0;void 0!==(i=e[r]);r++){if(K.acceptData(i)&&(s=i[me.expando],s&&(t=me.cache[s]))){if(t.events)for(n in t.events)o[n]?K.event.remove(i,n):K.removeEvent(i,n,t.handle);me.cache[s]&&delete me.cache[s]}delete ve.cache[i[ve.expando]]}}}),K.fn.extend({text:function(e){return ge(this,function(e){return void 0===e?K.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=u(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=u(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var i,n=e?K.filter(e,this):this,s=0;null!=(i=n[s]);s++)t||1!==i.nodeType||K.cleanData(m(i)),i.parentNode&&(t&&K.contains(i.ownerDocument,i)&&f(m(i,"script")),i.parentNode.removeChild(i));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(K.cleanData(m(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return K.clone(this,e,t)})},html:function(e){return ge(this,function(e){var t=this[0]||{},i=0,n=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Be.test(e)&&!Fe[(Me.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Pe,"<$1></$2>");try{for(;n>i;i++)t=this[i]||{},1===t.nodeType&&(K.cleanData(m(t,!1)),t.innerHTML=e);t=0}catch(s){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,K.cleanData(m(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=O.apply([],e);var i,n,s,o,r,a,l=0,d=this.length,c=this,A=d-1,u=e[0],f=K.isFunction(u);if(f||d>1&&"string"==typeof u&&!Y.checkClone&&Qe.test(u))return this.each(function(i){var n=c.eq(i);f&&(e[0]=u.call(this,i,n.html())),n.domManip(e,t)});if(d&&(i=K.buildFragment(e,this[0].ownerDocument,!1,this),n=i.firstChild,1===i.childNodes.length&&(i=n),n)){for(s=K.map(m(i,"script"),p),o=s.length;d>l;l++)r=i,l!==A&&(r=K.clone(r,!0,!0),o&&K.merge(s,m(r,"script"))),t.call(this[l],r,l);if(o)for(a=s[s.length-1].ownerDocument,K.map(s,h),l=0;o>l;l++)r=s[l],Ie.test(r.type||"")&&!me.access(r,"globalEval")&&K.contains(a,r)&&(r.src?K._evalUrl&&K._evalUrl(r.src):K.globalEval(r.textContent.replace(je,"")))}return this}}),K.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){K.fn[e]=function(e){for(var i,n=[],s=K(e),o=s.length-1,r=0;o>=r;r++)i=r===o?this:this.clone(!0),K(s[r])[t](i),U.apply(n,i.get());return this.pushStack(n)}});var qe,$e={},He=/^margin/,Ne=new RegExp("^("+be+")(?!px)[a-z%]+$","i"),We=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)};!function(){function t(){r.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",r.innerHTML="",s.appendChild(o);var t=e.getComputedStyle(r,null);i="1%"!==t.top,n="4px"===t.width,s.removeChild(o)}var i,n,s=J.documentElement,o=J.createElement("div"),r=J.createElement("div");r.style&&(r.style.backgroundClip="content-box",r.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===r.style.backgroundClip,o.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",o.appendChild(r),e.getComputedStyle&&K.extend(Y,{pixelPosition:function(){return t(),i},boxSizingReliable:function(){return null==n&&t(),n},reliableMarginRight:function(){var t,i=r.appendChild(J.createElement("div"));return i.style.cssText=r.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",r.style.width="1px",s.appendChild(o),t=!parseFloat(e.getComputedStyle(i,null).marginRight),s.removeChild(o),r.removeChild(i),t}}))}(),K.swap=function(e,t,i,n){var s,o,r={};for(o in t)r[o]=e.style[o],e.style[o]=t[o];s=i.apply(e,n||[]);for(o in t)e.style[o]=r[o];return s};var Oe=/^(none|table(?!-c[ea]).+)/,Ue=new RegExp("^("+be+")(.*)$","i"),Ve=new RegExp("^([+-])=("+be+")","i"),Le={position:"absolute",visibility:"hidden",display:"block"},Ze={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","O","Moz","ms"];K.extend({cssHooks:{opacity:{get:function(e,t){if(t){var i=b(e,"opacity");return""===i?"1":i}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,i,n){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var s,o,r,a=K.camelCase(t),l=e.style;return t=K.cssProps[a]||(K.cssProps[a]=_(l,a)),r=K.cssHooks[t]||K.cssHooks[a],void 0===i?r&&"get"in r&&void 0!==(s=r.get(e,!1,n))?s:l[t]:(o=typeof i,"string"===o&&(s=Ve.exec(i))&&(i=(s[1]+1)*s[2]+parseFloat(K.css(e,t)),o="number"),null!=i&&i===i&&("number"!==o||K.cssNumber[a]||(i+="px"),Y.clearCloneStyle||""!==i||0!==t.indexOf("background")||(l[t]="inherit"),r&&"set"in r&&void 0===(i=r.set(e,i,n))||(l[t]=i)),void 0)}},css:function(e,t,i,n){var s,o,r,a=K.camelCase(t);return t=K.cssProps[a]||(K.cssProps[a]=_(e.style,a)),r=K.cssHooks[t]||K.cssHooks[a],r&&"get"in r&&(s=r.get(e,!0,i)),void 0===s&&(s=b(e,t,n)),"normal"===s&&t in Ze&&(s=Ze[t]),""===i||i?(o=parseFloat(s),i===!0||K.isNumeric(o)?o||0:s):s}}),K.each(["height","width"],function(e,t){K.cssHooks[t]={get:function(e,i,n){return i?Oe.test(K.css(e,"display"))&&0===e.offsetWidth?K.swap(e,Le,function(){return k(e,t,n)}):k(e,t,n):void 0},set:function(e,i,n){var s=n&&We(e);return T(e,i,n?C(e,t,n,"border-box"===K.css(e,"boxSizing",!1,s),s):0)}}}),K.cssHooks.marginRight=x(Y.reliableMarginRight,function(e,t){return t?K.swap(e,{display:"inline-block"},b,[e,"marginRight"]):void 0}),K.each({margin:"",padding:"",border:"Width"},function(e,t){K.cssHooks[e+t]={expand:function(i){for(var n=0,s={},o="string"==typeof i?i.split(" "):[i];4>n;n++)s[e+xe[n]+t]=o[n]||o[n-2]||o[0];return s}},He.test(e)||(K.cssHooks[e+t].set=T)}),K.fn.extend({css:function(e,t){return ge(this,function(e,t,i){var n,s,o={},r=0;if(K.isArray(t)){for(n=We(e),s=t.length;s>r;r++)o[t[r]]=K.css(e,t[r],!1,n);return o}return void 0!==i?K.style(e,t,i):K.css(e,t)},e,t,arguments.length>1)},show:function(){return E(this,!0)},hide:function(){return E(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){_e(this)?K(this).show():K(this).hide()})}}),K.Tween=S,S.prototype={constructor:S,init:function(e,t,i,n,s,o){this.elem=e,this.prop=i,this.easing=s||"swing",this.options=t,this.start=this.now=this.cur(),this.end=n,this.unit=o||(K.cssNumber[i]?"":"px")},cur:function(){var e=S.propHooks[this.prop];return e&&e.get?e.get(this):S.propHooks._default.get(this)},run:function(e){var t,i=S.propHooks[this.prop];return this.options.duration?this.pos=t=K.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):S.propHooks._default.set(this),this}},S.prototype.init.prototype=S.prototype,S.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=K.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){K.fx.step[e.prop]?K.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[K.cssProps[e.prop]]||K.cssHooks[e.prop])?K.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},S.propHooks.scrollTop=S.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},K.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},K.fx=S.prototype.init,K.fx.step={};var Ye,Je,Xe=/^(?:toggle|show|hide)$/,Ke=new RegExp("^(?:([+-])=|)("+be+")([a-z%]*)$","i"),et=/queueHooks$/,tt=[z],it={"*":[function(e,t){var i=this.createTween(e,t),n=i.cur(),s=Ke.exec(t),o=s&&s[3]||(K.cssNumber[e]?"":"px"),r=(K.cssNumber[e]||"px"!==o&&+n)&&Ke.exec(K.css(i.elem,e)),a=1,l=20;if(r&&r[3]!==o){o=o||r[3],s=s||[],r=+n||1;do a=a||".5",r/=a,K.style(i.elem,e,r+o);while(a!==(a=i.cur()/n)&&1!==a&&--l)}return s&&(r=i.start=+r||+n||0,i.unit=o,i.end=s[1]?r+(s[1]+1)*s[2]:+s[2]),i}]};K.Animation=K.extend(Q,{tweener:function(e,t){K.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var i,n=0,s=e.length;s>n;n++)i=e[n],it[i]=it[i]||[],it[i].unshift(t)},prefilter:function(e,t){t?tt.unshift(e):tt.push(e)}}),K.speed=function(e,t,i){var n=e&&"object"==typeof e?K.extend({},e):{complete:i||!i&&t||K.isFunction(e)&&e,duration:e,easing:i&&t||t&&!K.isFunction(t)&&t};return n.duration=K.fx.off?0:"number"==typeof n.duration?n.duration:n.duration in K.fx.speeds?K.fx.speeds[n.duration]:K.fx.speeds._default,(null==n.queue||n.queue===!0)&&(n.queue="fx"),n.old=n.complete,n.complete=function(){K.isFunction(n.old)&&n.old.call(this),n.queue&&K.dequeue(this,n.queue)},n},K.fn.extend({fadeTo:function(e,t,i,n){return this.filter(_e).css("opacity",0).show().end().animate({opacity:t},e,i,n)},animate:function(e,t,i,n){var s=K.isEmptyObject(e),o=K.speed(t,i,n),r=function(){var t=Q(this,K.extend({},e),o);(s||me.get(this,"finish"))&&t.stop(!0)};return r.finish=r,s||o.queue===!1?this.each(r):this.queue(o.queue,r)},stop:function(e,t,i){var n=function(e){var t=e.stop;delete e.stop,t(i)};return"string"!=typeof e&&(i=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,s=null!=e&&e+"queueHooks",o=K.timers,r=me.get(this);if(s)r[s]&&r[s].stop&&n(r[s]);else for(s in r)r[s]&&r[s].stop&&et.test(s)&&n(r[s]);for(s=o.length;s--;)o[s].elem!==this||null!=e&&o[s].queue!==e||(o[s].anim.stop(i),t=!1,o.splice(s,1));(t||!i)&&K.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,i=me.get(this),n=i[e+"queue"],s=i[e+"queueHooks"],o=K.timers,r=n?n.length:0;for(i.finish=!0,K.queue(this,e,[]),s&&s.stop&&s.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;r>t;t++)n[t]&&n[t].finish&&n[t].finish.call(this);delete i.finish})}}),K.each(["toggle","show","hide"],function(e,t){var i=K.fn[t];K.fn[t]=function(e,n,s){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(P(t,!0),e,n,s)}}),K.each({slideDown:P("show"),slideUp:P("hide"),slideToggle:P("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){K.fn[e]=function(e,i,n){return this.animate(t,e,i,n)}}),K.timers=[],K.fx.tick=function(){var e,t=0,i=K.timers;for(Ye=K.now();t<i.length;t++)e=i[t],e()||i[t]!==e||i.splice(t--,1);i.length||K.fx.stop(),Ye=void 0},K.fx.timer=function(e){K.timers.push(e),e()?K.fx.start():K.timers.pop()},K.fx.interval=13,K.fx.start=function(){Je||(Je=setInterval(K.fx.tick,K.fx.interval))},K.fx.stop=function(){clearInterval(Je),Je=null},K.fx.speeds={slow:600,fast:200,_default:400},K.fn.delay=function(e,t){return e=K.fx?K.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,i){var n=setTimeout(t,e);i.stop=function(){clearTimeout(n)}})},function(){var e=J.createElement("input"),t=J.createElement("select"),i=t.appendChild(J.createElement("option"));e.type="checkbox",Y.checkOn=""!==e.value,Y.optSelected=i.selected,t.disabled=!0,Y.optDisabled=!i.disabled,e=J.createElement("input"),e.value="t",e.type="radio",Y.radioValue="t"===e.value}();var nt,st,ot=K.expr.attrHandle;K.fn.extend({attr:function(e,t){return ge(this,K.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){K.removeAttr(this,e)})}}),K.extend({attr:function(e,t,i){var n,s,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===Ce?K.prop(e,t,i):(1===o&&K.isXMLDoc(e)||(t=t.toLowerCase(),n=K.attrHooks[t]||(K.expr.match.bool.test(t)?st:nt)),void 0===i?n&&"get"in n&&null!==(s=n.get(e,t))?s:(s=K.find.attr(e,t),null==s?void 0:s):null!==i?n&&"set"in n&&void 0!==(s=n.set(e,i,t))?s:(e.setAttribute(t,i+""),i):void K.removeAttr(e,t))},removeAttr:function(e,t){var i,n,s=0,o=t&&t.match(pe);if(o&&1===e.nodeType)for(;i=o[s++];)n=K.propFix[i]||i,K.expr.match.bool.test(i)&&(e[n]=!1),e.removeAttribute(i)},attrHooks:{type:{set:function(e,t){if(!Y.radioValue&&"radio"===t&&K.nodeName(e,"input")){var i=e.value;return e.setAttribute("type",t),i&&(e.value=i),t}}}}}),st={set:function(e,t,i){return t===!1?K.removeAttr(e,i):e.setAttribute(i,i),i}},K.each(K.expr.match.bool.source.match(/\w+/g),function(e,t){var i=ot[t]||K.find.attr;ot[t]=function(e,t,n){var s,o;return n||(o=ot[t],ot[t]=s,s=null!=i(e,t,n)?t.toLowerCase():null,ot[t]=o),s}});var rt=/^(?:input|select|textarea|button)$/i;K.fn.extend({prop:function(e,t){return ge(this,K.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[K.propFix[e]||e]})}}),K.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,i){var n,s,o,r=e.nodeType;if(e&&3!==r&&8!==r&&2!==r)return o=1!==r||!K.isXMLDoc(e),o&&(t=K.propFix[t]||t,s=K.propHooks[t]),void 0!==i?s&&"set"in s&&void 0!==(n=s.set(e,i,t))?n:e[t]=i:s&&"get"in s&&null!==(n=s.get(e,t))?n:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||rt.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),Y.optSelected||(K.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),K.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){K.propFix[this.toLowerCase()]=this});var at=/[\t\r\n\f]/g;K.fn.extend({addClass:function(e){var t,i,n,s,o,r,a="string"==typeof e&&e,l=0,d=this.length;if(K.isFunction(e))return this.each(function(t){K(this).addClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(pe)||[];d>l;l++)if(i=this[l],n=1===i.nodeType&&(i.className?(" "+i.className+" ").replace(at," "):" ")){for(o=0;s=t[o++];)n.indexOf(" "+s+" ")<0&&(n+=s+" ");r=K.trim(n),i.className!==r&&(i.className=r)}return this},removeClass:function(e){var t,i,n,s,o,r,a=0===arguments.length||"string"==typeof e&&e,l=0,d=this.length;if(K.isFunction(e))return this.each(function(t){K(this).removeClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(pe)||[];d>l;l++)if(i=this[l],n=1===i.nodeType&&(i.className?(" "+i.className+" ").replace(at," "):"")){for(o=0;s=t[o++];)for(;n.indexOf(" "+s+" ")>=0;)n=n.replace(" "+s+" "," ");r=e?K.trim(n):"",i.className!==r&&(i.className=r)}return this},toggleClass:function(e,t){var i=typeof e;return"boolean"==typeof t&&"string"===i?t?this.addClass(e):this.removeClass(e):K.isFunction(e)?this.each(function(i){K(this).toggleClass(e.call(this,i,this.className,t),t)}):this.each(function(){if("string"===i)for(var t,n=0,s=K(this),o=e.match(pe)||[];t=o[n++];)s.hasClass(t)?s.removeClass(t):s.addClass(t);else(i===Ce||"boolean"===i)&&(this.className&&me.set(this,"__className__",this.className),this.className=this.className||e===!1?"":me.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",i=0,n=this.length;n>i;i++)if(1===this[i].nodeType&&(" "+this[i].className+" ").replace(at," ").indexOf(t)>=0)return!0;return!1}});var lt=/\r/g;K.fn.extend({val:function(e){var t,i,n,s=this[0];{if(arguments.length)return n=K.isFunction(e),this.each(function(i){var s;1===this.nodeType&&(s=n?e.call(this,i,K(this).val()):e,null==s?s="":"number"==typeof s?s+="":K.isArray(s)&&(s=K.map(s,function(e){return null==e?"":e+""})),t=K.valHooks[this.type]||K.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,s,"value")||(this.value=s))});if(s)return t=K.valHooks[s.type]||K.valHooks[s.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(i=t.get(s,"value"))?i:(i=s.value,"string"==typeof i?i.replace(lt,""):null==i?"":i)}}}),K.extend({valHooks:{option:{get:function(e){var t=K.find.attr(e,"value");return null!=t?t:K.trim(K.text(e))}},select:{get:function(e){for(var t,i,n=e.options,s=e.selectedIndex,o="select-one"===e.type||0>s,r=o?null:[],a=o?s+1:n.length,l=0>s?a:o?s:0;a>l;l++)if(i=n[l],(i.selected||l===s)&&(Y.optDisabled?!i.disabled:null===i.getAttribute("disabled"))&&(!i.parentNode.disabled||!K.nodeName(i.parentNode,"optgroup"))){if(t=K(i).val(),o)return t;r.push(t)}return r},set:function(e,t){for(var i,n,s=e.options,o=K.makeArray(t),r=s.length;r--;)n=s[r],(n.selected=K.inArray(n.value,o)>=0)&&(i=!0);return i||(e.selectedIndex=-1),o}}}}),K.each(["radio","checkbox"],function(){K.valHooks[this]={set:function(e,t){return K.isArray(t)?e.checked=K.inArray(K(e).val(),t)>=0:void 0}},Y.checkOn||(K.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){K.fn[t]=function(e,i){return arguments.length>0?this.on(t,null,e,i):this.trigger(t)}}),K.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,i){return this.on(e,null,t,i)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,i,n){return this.on(t,e,i,n)},undelegate:function(e,t,i){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",i)}});var dt=K.now(),ct=/\?/;K.parseJSON=function(e){return JSON.parse(e+"")},K.parseXML=function(e){var t,i;if(!e||"string"!=typeof e)return null;try{i=new DOMParser,t=i.parseFromString(e,"text/xml")}catch(n){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&K.error("Invalid XML: "+e),t};var At=/#.*$/,ut=/([?&])_=[^&]*/,pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,ht=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ft=/^(?:GET|HEAD)$/,gt=/^\/\//,mt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,vt={},wt={},yt="*/".concat("*"),bt=e.location.href,xt=mt.exec(bt.toLowerCase())||[];K.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt,type:"GET",isLocal:ht.test(xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":yt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":K.parseJSON,"text xml":K.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?j(j(e,K.ajaxSettings),t):j(K.ajaxSettings,e)},ajaxPrefilter:I(vt),ajaxTransport:I(wt),ajax:function(e,t){function i(e,t,i,r){var l,c,m,v,y,x=t;2!==w&&(w=2,a&&clearTimeout(a),n=void 0,o=r||"",b.readyState=e>0?4:0,l=e>=200&&300>e||304===e,i&&(v=F(A,b,i)),v=q(A,v,b,l),l?(A.ifModified&&(y=b.getResponseHeader("Last-Modified"),y&&(K.lastModified[s]=y),y=b.getResponseHeader("etag"),y&&(K.etag[s]=y)),204===e||"HEAD"===A.type?x="nocontent":304===e?x="notmodified":(x=v.state,c=v.data,m=v.error,l=!m)):(m=x,(e||!x)&&(x="error",0>e&&(e=0))),b.status=e,b.statusText=(t||x)+"",l?h.resolveWith(u,[c,x,b]):h.rejectWith(u,[b,x,m]),b.statusCode(g),g=void 0,d&&p.trigger(l?"ajaxSuccess":"ajaxError",[b,A,l?c:m]),f.fireWith(u,[b,x]),d&&(p.trigger("ajaxComplete",[b,A]),--K.active||K.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var n,s,o,r,a,l,d,c,A=K.ajaxSetup({},t),u=A.context||A,p=A.context&&(u.nodeType||u.jquery)?K(u):K.event,h=K.Deferred(),f=K.Callbacks("once memory"),g=A.statusCode||{},m={},v={},w=0,y="canceled",b={readyState:0,getResponseHeader:function(e){var t;if(2===w){if(!r)for(r={};t=pt.exec(o);)r[t[1].toLowerCase()]=t[2];t=r[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===w?o:null},setRequestHeader:function(e,t){var i=e.toLowerCase();return w||(e=v[i]=v[i]||e,m[e]=t),this},overrideMimeType:function(e){return w||(A.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>w)for(t in e)g[t]=[g[t],e[t]];else b.always(e[b.status]);return this},abort:function(e){var t=e||y;return n&&n.abort(t),i(0,t),this}};if(h.promise(b).complete=f.add,b.success=b.done,b.error=b.fail,A.url=((e||A.url||bt)+"").replace(At,"").replace(gt,xt[1]+"//"),A.type=t.method||t.type||A.method||A.type,A.dataTypes=K.trim(A.dataType||"*").toLowerCase().match(pe)||[""],null==A.crossDomain&&(l=mt.exec(A.url.toLowerCase()),A.crossDomain=!(!l||l[1]===xt[1]&&l[2]===xt[2]&&(l[3]||("http:"===l[1]?"80":"443"))===(xt[3]||("http:"===xt[1]?"80":"443")))),A.data&&A.processData&&"string"!=typeof A.data&&(A.data=K.param(A.data,A.traditional)),R(vt,A,t,b),2===w)return b;d=K.event&&A.global,d&&0===K.active++&&K.event.trigger("ajaxStart"),A.type=A.type.toUpperCase(),A.hasContent=!ft.test(A.type),s=A.url,A.hasContent||(A.data&&(s=A.url+=(ct.test(s)?"&":"?")+A.data,delete A.data),A.cache===!1&&(A.url=ut.test(s)?s.replace(ut,"$1_="+dt++):s+(ct.test(s)?"&":"?")+"_="+dt++)),A.ifModified&&(K.lastModified[s]&&b.setRequestHeader("If-Modified-Since",K.lastModified[s]),K.etag[s]&&b.setRequestHeader("If-None-Match",K.etag[s])),(A.data&&A.hasContent&&A.contentType!==!1||t.contentType)&&b.setRequestHeader("Content-Type",A.contentType),b.setRequestHeader("Accept",A.dataTypes[0]&&A.accepts[A.dataTypes[0]]?A.accepts[A.dataTypes[0]]+("*"!==A.dataTypes[0]?", "+yt+"; q=0.01":""):A.accepts["*"]);for(c in A.headers)b.setRequestHeader(c,A.headers[c]);if(A.beforeSend&&(A.beforeSend.call(u,b,A)===!1||2===w))return b.abort();y="abort";for(c in{success:1,error:1,complete:1})b[c](A[c]);if(n=R(wt,A,t,b)){b.readyState=1,d&&p.trigger("ajaxSend",[b,A]),A.async&&A.timeout>0&&(a=setTimeout(function(){b.abort("timeout")},A.timeout));try{w=1,n.send(m,i)}catch(x){if(!(2>w))throw x;i(-1,x)}}else i(-1,"No Transport");return b},getJSON:function(e,t,i){return K.get(e,t,i,"json")},getScript:function(e,t){return K.get(e,void 0,t,"script")}}),K.each(["get","post"],function(e,t){K[t]=function(e,i,n,s){return K.isFunction(i)&&(s=s||n,n=i,i=void 0),K.ajax({url:e,type:t,dataType:s,data:i,success:n})}}),K._evalUrl=function(e){return K.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},K.fn.extend({wrapAll:function(e){var t;return K.isFunction(e)?this.each(function(t){K(this).wrapAll(e.call(this,t))}):(this[0]&&(t=K(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return K.isFunction(e)?this.each(function(t){K(this).wrapInner(e.call(this,t))}):this.each(function(){var t=K(this),i=t.contents();i.length?i.wrapAll(e):t.append(e)})},wrap:function(e){var t=K.isFunction(e);return this.each(function(i){K(this).wrapAll(t?e.call(this,i):e)})},unwrap:function(){return this.parent().each(function(){K.nodeName(this,"body")||K(this).replaceWith(this.childNodes)}).end()}}),K.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},K.expr.filters.visible=function(e){return!K.expr.filters.hidden(e)};var _t=/%20/g,Tt=/\[\]$/,Ct=/\r?\n/g,kt=/^(?:submit|button|image|reset|file)$/i,Et=/^(?:input|select|textarea|keygen)/i;K.param=function(e,t){var i,n=[],s=function(e,t){t=K.isFunction(t)?t():null==t?"":t,n[n.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=K.ajaxSettings&&K.ajaxSettings.traditional),K.isArray(e)||e.jquery&&!K.isPlainObject(e))K.each(e,function(){s(this.name,this.value)});else for(i in e)$(i,e[i],t,s);return n.join("&").replace(_t,"+")},K.fn.extend({serialize:function(){return K.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=K.prop(this,"elements");return e?K.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!K(this).is(":disabled")&&Et.test(this.nodeName)&&!kt.test(e)&&(this.checked||!Te.test(e))}).map(function(e,t){var i=K(this).val();return null==i?null:K.isArray(i)?K.map(i,function(e){return{name:t.name,value:e.replace(Ct,"\r\n")}}):{name:t.name,value:i.replace(Ct,"\r\n")}}).get()}}),K.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var St=0,Dt={},Pt={0:200,1223:204},Mt=K.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var e in Dt)Dt[e]()}),Y.cors=!!Mt&&"withCredentials"in Mt,Y.ajax=Mt=!!Mt,K.ajaxTransport(function(e){var t;return Y.cors||Mt&&!e.crossDomain?{send:function(i,n){var s,o=e.xhr(),r=++St;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)o[s]=e.xhrFields[s];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(s in i)o.setRequestHeader(s,i[s]);t=function(e){return function(){t&&(delete Dt[r],
t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?n(o.status,o.statusText):n(Pt[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=Dt[r]=t("abort");try{o.send(e.hasContent&&e.data||null)}catch(a){if(t)throw a}},abort:function(){t&&t()}}:void 0}),K.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return K.globalEval(e),e}}}),K.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),K.ajaxTransport("script",function(e){if(e.crossDomain){var t,i;return{send:function(n,s){t=K("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",i=function(e){t.remove(),i=null,e&&s("error"===e.type?404:200,e.type)}),J.head.appendChild(t[0])},abort:function(){i&&i()}}}});var zt=[],Bt=/(=)\?(?=&|$)|\?\?/;K.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||K.expando+"_"+dt++;return this[e]=!0,e}}),K.ajaxPrefilter("json jsonp",function(t,i,n){var s,o,r,a=t.jsonp!==!1&&(Bt.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bt.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(s=t.jsonpCallback=K.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Bt,"$1"+s):t.jsonp!==!1&&(t.url+=(ct.test(t.url)?"&":"?")+t.jsonp+"="+s),t.converters["script json"]=function(){return r||K.error(s+" was not called"),r[0]},t.dataTypes[0]="json",o=e[s],e[s]=function(){r=arguments},n.always(function(){e[s]=o,t[s]&&(t.jsonpCallback=i.jsonpCallback,zt.push(s)),r&&K.isFunction(o)&&o(r[0]),r=o=void 0}),"script"):void 0}),K.parseHTML=function(e,t,i){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(i=t,t=!1),t=t||J;var n=re.exec(e),s=!i&&[];return n?[t.createElement(n[1])]:(n=K.buildFragment([e],t,s),s&&s.length&&K(s).remove(),K.merge([],n.childNodes))};var Qt=K.fn.load;K.fn.load=function(e,t,i){if("string"!=typeof e&&Qt)return Qt.apply(this,arguments);var n,s,o,r=this,a=e.indexOf(" ");return a>=0&&(n=K.trim(e.slice(a)),e=e.slice(0,a)),K.isFunction(t)?(i=t,t=void 0):t&&"object"==typeof t&&(s="POST"),r.length>0&&K.ajax({url:e,type:s,dataType:"html",data:t}).done(function(e){o=arguments,r.html(n?K("<div>").append(K.parseHTML(e)).find(n):e)}).complete(i&&function(e,t){r.each(i,o||[e.responseText,t,e])}),this},K.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){K.fn[t]=function(e){return this.on(t,e)}}),K.expr.filters.animated=function(e){return K.grep(K.timers,function(t){return e===t.elem}).length};var It=e.document.documentElement;K.offset={setOffset:function(e,t,i){var n,s,o,r,a,l,d,c=K.css(e,"position"),A=K(e),u={};"static"===c&&(e.style.position="relative"),a=A.offset(),o=K.css(e,"top"),l=K.css(e,"left"),d=("absolute"===c||"fixed"===c)&&(o+l).indexOf("auto")>-1,d?(n=A.position(),r=n.top,s=n.left):(r=parseFloat(o)||0,s=parseFloat(l)||0),K.isFunction(t)&&(t=t.call(e,i,a)),null!=t.top&&(u.top=t.top-a.top+r),null!=t.left&&(u.left=t.left-a.left+s),"using"in t?t.using.call(e,u):A.css(u)}},K.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){K.offset.setOffset(this,e,t)});var t,i,n=this[0],s={top:0,left:0},o=n&&n.ownerDocument;if(o)return t=o.documentElement,K.contains(t,n)?(typeof n.getBoundingClientRect!==Ce&&(s=n.getBoundingClientRect()),i=H(o),{top:s.top+i.pageYOffset-t.clientTop,left:s.left+i.pageXOffset-t.clientLeft}):s},position:function(){if(this[0]){var e,t,i=this[0],n={top:0,left:0};return"fixed"===K.css(i,"position")?t=i.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),K.nodeName(e[0],"html")||(n=e.offset()),n.top+=K.css(e[0],"borderTopWidth",!0),n.left+=K.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-K.css(i,"marginTop",!0),left:t.left-n.left-K.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||It;e&&!K.nodeName(e,"html")&&"static"===K.css(e,"position");)e=e.offsetParent;return e||It})}}),K.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var n="pageYOffset"===i;K.fn[t]=function(s){return ge(this,function(t,s,o){var r=H(t);return void 0===o?r?r[i]:t[s]:void(r?r.scrollTo(n?e.pageXOffset:o,n?o:e.pageYOffset):t[s]=o)},t,s,arguments.length,null)}}),K.each(["top","left"],function(e,t){K.cssHooks[t]=x(Y.pixelPosition,function(e,i){return i?(i=b(e,t),Ne.test(i)?K(e).position()[t]+"px":i):void 0})}),K.each({Height:"height",Width:"width"},function(e,t){K.each({padding:"inner"+e,content:t,"":"outer"+e},function(i,n){K.fn[n]=function(n,s){var o=arguments.length&&(i||"boolean"!=typeof n),r=i||(n===!0||s===!0?"margin":"border");return ge(this,function(t,i,n){var s;return K.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(s=t.documentElement,Math.max(t.body["scroll"+e],s["scroll"+e],t.body["offset"+e],s["offset"+e],s["client"+e])):void 0===n?K.css(t,i,r):K.style(t,i,n,r)},t,o?n:void 0,o,null)}})}),K.fn.size=function(){return this.length},K.fn.andSelf=K.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return K});var Rt=e.jQuery,jt=e.$;return K.noConflict=function(t){return e.$===K&&(e.$=jt),t&&e.jQuery===K&&(e.jQuery=Rt),K},typeof t===Ce&&(e.jQuery=e.$=K),K}),/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2015, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
function(e,t,i,n){"use strict";function s(e){return("string"==typeof e||e instanceof String)&&(e=e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),e}function o(e){this.selector=e,this.query=""}var r=function(t){var i=e("head");i.prepend(e.map(t,function(e){return 0===i.has("."+e).length?'<meta class="'+e+'" />':void 0}))};r(["foundation-mq-small","foundation-mq-small-only","foundation-mq-medium","foundation-mq-medium-only","foundation-mq-large","foundation-mq-large-only","foundation-mq-xlarge","foundation-mq-xlarge-only","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),e(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof i.body&&FastClick.attach(i.body)});var a=function(t,n){if("string"==typeof t){if(n){var s;if(n.jquery){if(s=n[0],!s)return n}else s=n;return e(s.querySelectorAll(t))}return e(i.querySelectorAll(t))}return e(t,n)},l=function(e){var t=[];return e||t.push("data"),this.namespace.length>0&&t.push(this.namespace),t.push(this.name),t.join("-")},d=function(e){for(var t=e.split("-"),i=t.length,n=[];i--;)0!==i?n.push(t[i]):this.namespace.length>0?n.push(this.namespace,t[i]):n.push(t[i]);return n.reverse().join("-")},c=function(t,i){var n=this,s=function(){var s=a(this),o=!s.data(n.attr_name(!0)+"-init");s.data(n.attr_name(!0)+"-init",e.extend({},n.settings,i||t,n.data_options(s))),o&&n.events(this)};return a(this.scope).is("["+this.attr_name()+"]")?s.call(this.scope):a("["+this.attr_name()+"]",this.scope).each(s),"string"==typeof t?this[t].call(this,i):void 0},A=function(e,t){function i(){t(e[0])}function n(){if(this.one("load",i),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var e=this.attr("src"),t=e.match(/\?/)?"&":"?";t+="random="+(new Date).getTime(),this.attr("src",e+t)}}return e.attr("src")?void(e[0].complete||4===e[0].readyState?i():n.call(e)):void i()};/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
t.matchMedia||(t.matchMedia=function(){var e=t.styleMedia||t.media;if(!e){var n=i.createElement("style"),s=i.getElementsByTagName("script")[0],o=null;n.type="text/css",n.id="matchmediajs-test",s.parentNode.insertBefore(n,s),o="getComputedStyle"in t&&t.getComputedStyle(n,null)||n.currentStyle,e={matchMedium:function(e){var t="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return n.styleSheet?n.styleSheet.cssText=t:n.textContent=t,"1px"===o.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),/*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */
function(e){function i(){n&&(r(i),l&&e.fx.tick())}for(var n,s=0,o=["webkit","moz"],r=t.requestAnimationFrame,a=t.cancelAnimationFrame,l="undefined"!=typeof e.fx;s<o.length&&!r;s++)r=t[o[s]+"RequestAnimationFrame"],a=a||t[o[s]+"CancelAnimationFrame"]||t[o[s]+"CancelRequestAnimationFrame"];r?(t.requestAnimationFrame=r,t.cancelAnimationFrame=a,l&&(e.fx.timer=function(t){t()&&e.timers.push(t)&&!n&&(n=!0,i())},e.fx.stop=function(){n=!1})):(t.requestAnimationFrame=function(e){var i=(new Date).getTime(),n=Math.max(0,16-(i-s)),o=t.setTimeout(function(){e(i+n)},n);return s=i+n,o},t.cancelAnimationFrame=function(e){clearTimeout(e)})}(e),o.prototype.toString=function(){return this.query||(this.query=a(this.selector).css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""))},t.Foundation={name:"Foundation",version:"5.5.3",media_queries:{small:new o(".foundation-mq-small"),"small-only":new o(".foundation-mq-small-only"),medium:new o(".foundation-mq-medium"),"medium-only":new o(".foundation-mq-medium-only"),large:new o(".foundation-mq-large"),"large-only":new o(".foundation-mq-large-only"),xlarge:new o(".foundation-mq-xlarge"),"xlarge-only":new o(".foundation-mq-xlarge-only"),xxlarge:new o(".foundation-mq-xxlarge")},stylesheet:e("<style></style>").appendTo("head")[0].sheet,global:{namespace:n},init:function(e,i,n,s,o){var r=[e,n,s,o],l=[];if(this.rtl=/rtl/i.test(a("html").attr("dir")),this.scope=e||this.scope,this.set_namespace(),i&&"string"==typeof i&&!/reflow/i.test(i))this.libs.hasOwnProperty(i)&&l.push(this.init_lib(i,r));else for(var d in this.libs)l.push(this.init_lib(d,i));return a(t).load(function(){a(t).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),e},init_lib:function(t,i){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),i&&i.hasOwnProperty(t)?("undefined"!=typeof this.libs[t].settings?e.extend(!0,this.libs[t].settings,i[t]):"undefined"!=typeof this.libs[t].defaults&&e.extend(!0,this.libs[t].defaults,i[t]),this.libs[t].init.apply(this.libs[t],[this.scope,i[t]])):(i=i instanceof Array?i:new Array(i),this.libs[t].init.apply(this.libs[t],i))):function(){}},patch:function(e){e.scope=this.scope,e.namespace=this.global.namespace,e.rtl=this.rtl,e.data_options=this.utils.data_options,e.attr_name=l,e.add_namespace=d,e.bindings=c,e.S=this.utils.S},inherit:function(e,t){for(var i=t.split(" "),n=i.length;n--;)this.utils.hasOwnProperty(i[n])&&(e[i[n]]=this.utils[i[n]])},set_namespace:function(){var t=this.global.namespace===n?e(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=t===n||/false/i.test(t)?"":t},libs:{},utils:{S:a,throttle:function(e,t){var i=null;return function(){var n=this,s=arguments;null==i&&(i=setTimeout(function(){e.apply(n,s),i=null},t))}},debounce:function(e,t,i){var n,s;return function(){var o=this,r=arguments,a=function(){n=null,i||(s=e.apply(o,r))},l=i&&!n;return clearTimeout(n),n=setTimeout(a,t),l&&(s=e.apply(o,r)),s}},data_options:function(t,i){function n(e){return!isNaN(e-0)&&null!==e&&""!==e&&e!==!1&&e!==!0}function s(t){return"string"==typeof t?e.trim(t):t}i=i||"options";var o,r,a,l={},d=function(e){var t=Foundation.global.namespace;return t.length>0?e.data(t+"-"+i):e.data(i)},c=d(t);if("object"==typeof c)return c;for(a=(c||":").split(";"),o=a.length;o--;)r=a[o].split(":"),r=[r[0],r.slice(1).join(":")],/true/i.test(r[1])&&(r[1]=!0),/false/i.test(r[1])&&(r[1]=!1),n(r[1])&&(-1===r[1].indexOf(".")?r[1]=parseInt(r[1],10):r[1]=parseFloat(r[1])),2===r.length&&r[0].length>0&&(l[s(r[0])]=s(r[1]));return l},register_media:function(t,i){Foundation.media_queries[t]===n&&(e("head").append('<meta class="'+i+'"/>'),Foundation.media_queries[t]=s(e("."+i).css("font-family")))},add_custom_rule:function(e,t){if(t===n&&Foundation.stylesheet)Foundation.stylesheet.insertRule(e,Foundation.stylesheet.cssRules.length);else{var i=Foundation.media_queries[t];i!==n&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[t]+"{ "+e+" }",Foundation.stylesheet.cssRules.length)}},image_loaded:function(e,t){function i(e){for(var t=e.length,i=t-1;i>=0;i--)if(e.attr("height")===n)return!1;return!0}var s=this,o=e.length;(0===o||i(e))&&t(e),e.each(function(){A(s.S(this),function(){o-=1,0===o&&t(e)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)},match:function(e){return t.matchMedia(e).matches},is_small_up:function(){return this.match(Foundation.media_queries.small)},is_medium_up:function(){return this.match(Foundation.media_queries.medium)},is_large_up:function(){return this.match(Foundation.media_queries.large)},is_xlarge_up:function(){return this.match(Foundation.media_queries.xlarge)},is_xxlarge_up:function(){return this.match(Foundation.media_queries.xxlarge)},is_small_only:function(){return!(this.is_medium_up()||this.is_large_up()||this.is_xlarge_up()||this.is_xxlarge_up())},is_medium_only:function(){return this.is_medium_up()&&!this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_large_only:function(){return this.is_medium_up()&&this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xxlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&this.is_xxlarge_up()}}},e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(e)),this})}}(jQuery,window,window.document),function(e,t,i,n){"use strict";Foundation.libs.abide={name:"abide",version:"5.5.3",settings:{live_validate:!0,validate_on_blur:!0,focus_on_invalid:!0,error_labels:!0,error_class:"error",timeout:1e3,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^(https?|ftp|file|ssh):\/\/([-;:&=\+\$,\w]+@{1})?([-A-Za-z0-9\.]+)+:?(\d+)?((\/[-\+~%\/\.\w]+)?\??([-\+=&;%@\.\w]+)?#?([\w]+)?)?/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(e,t,n){var s=i.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,o=e.value,r=s===o;return r}}},timer:null,init:function(e,t,i){this.bindings(t,i)},events:function(t){function i(e,t){clearTimeout(n.timer),n.timer=setTimeout(function(){n.validate([e],t)}.bind(e),o.timeout)}var n=this,s=n.S(t).attr("novalidate","novalidate"),o=s.data(this.attr_name(!0)+"-init")||{};this.invalid_attr=this.add_namespace("data-invalid"),s.off(".abide").on("submit.fndtn.abide",function(e){var t=/ajax/i.test(n.S(this).attr(n.attr_name()));return n.validate(n.S(this).find("input, textarea, select").not(":hidden, [data-abide-ignore]").get(),e,t)}).on("validate.fndtn.abide",function(e){"manual"===o.validate_on&&n.validate([e.target],e)}).on("reset",function(t){return n.reset(e(this),t)}).find("input, textarea, select").not(":hidden, [data-abide-ignore]").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function(e){var t=this.getAttribute("id"),n=s.find('[data-equalto="'+t+'"]');o.validate_on_blur&&o.validate_on_blur===!0&&i(this,e),"undefined"!=typeof n.get(0)&&n.val().length&&i(n.get(0),e),"change"===o.validate_on&&i(this,e)}).on("keydown.fndtn.abide",function(e){var t=this.getAttribute("id"),n=s.find('[data-equalto="'+t+'"]');o.live_validate&&o.live_validate===!0&&9!=e.which&&i(this,e),"undefined"!=typeof n.get(0)&&n.val().length&&i(n.get(0),e),"tab"===o.validate_on&&9===e.which?i(this,e):"change"===o.validate_on&&i(this,e)}).on("focus",function(t){navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i)&&e("html, body").animate({scrollTop:e(t.target).offset().top},100)})},reset:function(t,i){var n=this;t.removeAttr(n.invalid_attr),e("["+n.invalid_attr+"]",t).removeAttr(n.invalid_attr),e("."+n.settings.error_class,t).not("small").removeClass(n.settings.error_class),e(":input",t).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr(n.invalid_attr)},validate:function(e,t,i){for(var n=this.parse_patterns(e),s=n.length,o=this.S(e[0]).closest("form"),r=/submit/.test(t.type),a=0;s>a;a++)if(!n[a]&&(r||i))return this.settings.focus_on_invalid&&e[a].focus(),o.trigger("invalid.fndtn.abide"),this.S(e[a]).closest("form").attr(this.invalid_attr,""),!1;return(r||i)&&o.trigger("valid.fndtn.abide"),o.removeAttr(this.invalid_attr),i?!1:!0},parse_patterns:function(e){for(var t=e.length,i=[];t--;)i.push(this.pattern(e[t]));return this.check_validation_and_apply_styles(i)},pattern:function(e){var t=e.getAttribute("type"),i="string"==typeof e.getAttribute("required"),n=e.getAttribute("pattern")||"";return this.settings.patterns.hasOwnProperty(n)&&n.length>0?[e,this.settings.patterns[n],i]:n.length>0?[e,new RegExp(n),i]:this.settings.patterns.hasOwnProperty(t)?[e,this.settings.patterns[t],i]:(n=/.*/,[e,n,i])},check_validation_and_apply_styles:function(t){var i=t.length,n=[];if(0==i)return n;var s=this.S(t[0][0]).closest("[data-"+this.attr_name(!0)+"]");for(s.data(this.attr_name(!0)+"-init")||{};i--;){var o,r,a=t[i][0],l=t[i][2],d=a.value.trim(),c=this.S(a).parent(),A=a.getAttribute(this.add_namespace("data-abide-validator")),u="radio"===a.type,p="checkbox"===a.type,h=this.S('label[for="'+a.getAttribute("id")+'"]'),f=l?a.value.length>0:!0,g=[];if(a.getAttribute(this.add_namespace("data-equalto"))&&(A="equalTo"),o=c.is("label")?c.parent():c,u&&l)g.push(this.valid_radio(a,l));else if(p&&l)g.push(this.valid_checkbox(a,l));else if(A){for(var m=A.split(" "),v=!0,w=!0,y=0;y<m.length;y++)r=this.settings.validators[m[y]].apply(this,[a,l,o]),g.push(r),w=r&&v,v=r;w?(this.S(a).removeAttr(this.invalid_attr),o.removeClass("error"),h.length>0&&this.settings.error_labels&&h.removeClass(this.settings.error_class).removeAttr("role"),e(a).triggerHandler("valid")):(this.S(a).attr(this.invalid_attr,""),o.addClass("error"),h.length>0&&this.settings.error_labels&&h.addClass(this.settings.error_class).attr("role","alert"),e(a).triggerHandler("invalid"))}else if(t[i][1].test(d)&&f||!l&&a.value.length<1||e(a).attr("disabled")?g.push(!0):g.push(!1),g=[g.every(function(e){return e})],g[0])this.S(a).removeAttr(this.invalid_attr),a.setAttribute("aria-invalid","false"),a.removeAttribute("aria-describedby"),o.removeClass(this.settings.error_class),h.length>0&&this.settings.error_labels&&h.removeClass(this.settings.error_class).removeAttr("role"),e(a).triggerHandler("valid");else{this.S(a).attr(this.invalid_attr,""),a.setAttribute("aria-invalid","true");var b=o.find("small."+this.settings.error_class,"span."+this.settings.error_class),x=b.length>0?b[0].id:"";x.length>0&&a.setAttribute("aria-describedby",x),o.addClass(this.settings.error_class),h.length>0&&this.settings.error_labels&&h.addClass(this.settings.error_class).attr("role","alert"),e(a).triggerHandler("invalid")}n=n.concat(g)}return n},valid_checkbox:function(t,i){var t=this.S(t),n=t.is(":checked")||!i||t.get(0).getAttribute("disabled");return n?(t.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class),e(t).triggerHandler("valid")):(t.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),e(t).triggerHandler("invalid")),n},valid_radio:function(t,i){for(var n=t.getAttribute("name"),s=this.S(t).closest("[data-"+this.attr_name(!0)+"]").find("[name='"+n+"']"),o=s.length,r=!1,a=!1,l=0;o>l;l++)s[l].getAttribute("disabled")?(a=!0,r=!0):s[l].checked?r=!0:a&&(r=!1);for(var l=0;o>l;l++)r?(this.S(s[l]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class),e(s[l]).triggerHandler("valid")):(this.S(s[l]).attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),e(s[l]).triggerHandler("invalid"));return r},valid_equal:function(e,t,n){var s=i.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,o=e.value,r=s===o;return r?(this.S(e).removeAttr(this.invalid_attr),n.removeClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.removeClass(this.settings.error_class)):(this.S(e).attr(this.invalid_attr,""),n.addClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.addClass(this.settings.error_class)),r},valid_oneof:function(e,t,i,n){var e=this.S(e),s=this.S("["+this.add_namespace("data-oneof")+"]"),o=s.filter(":checked").length>0;if(o?e.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class):e.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),!n){var r=this;s.each(function(){r.valid_oneof.call(r,this,null,null,!0)})}return o},reflow:function(e,t){var i=this,n=i.S("["+this.attr_name()+"]").attr("novalidate","novalidate");i.S(n).each(function(e,t){i.events(t)})}}}(jQuery,window,window.document),function(e,t,i,n){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.5.3",settings:{content_class:"content",active_class:"active",multi_expand:!1,toggleable:!0,callback:function(){}},init:function(e,t,i){this.bindings(t,i)},events:function(t){var i=this,n=this.S;i.create(this.S(t)),n(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] > dd > a, ["+this.attr_name()+"] > li > a",function(t){var s=n(this).closest("["+i.attr_name()+"]"),o=i.attr_name()+"="+s.attr(i.attr_name()),r=s.data(i.attr_name(!0)+"-init")||i.settings,a=n("#"+this.href.split("#")[1]),l=e("> dd, > li",s),d=l.children("."+r.content_class),c=d.filter("."+r.active_class);return t.preventDefault(),s.attr(i.attr_name())&&(d=d.add("["+o+"] dd > ."+r.content_class+", ["+o+"] li > ."+r.content_class),l=l.add("["+o+"] dd, ["+o+"] li")),r.toggleable&&a.is(c)?(a.parent("dd, li").toggleClass(r.active_class,!1),a.toggleClass(r.active_class,!1),n(this).attr("aria-expanded",function(e,t){return"true"===t?"false":"true"}),r.callback(a),a.triggerHandler("toggled",[s]),void s.triggerHandler("toggled",[a])):(r.multi_expand||(d.removeClass(r.active_class),l.removeClass(r.active_class),l.children("a").attr("aria-expanded","false")),a.addClass(r.active_class).parent().addClass(r.active_class),r.callback(a),a.triggerHandler("toggled",[s]),s.triggerHandler("toggled",[a]),void n(this).attr("aria-expanded","true"))})},create:function(t){var i=this,n=t,s=e("> .accordion-navigation",n),o=n.data(i.attr_name(!0)+"-init")||i.settings;s.children("a").attr("aria-expanded","false"),s.has("."+o.content_class+"."+o.active_class).addClass(o.active_class).children("a").attr("aria-expanded","true"),o.multi_expand&&t.attr("aria-multiselectable","true")},toggle:function(e){var e="undefined"!=typeof e?e:{},i="undefined"!=typeof e.selector?e.selector:"",n="undefined"!=typeof e.toggle_state?e.toggle_state:"",s="undefined"!=typeof e.$accordion?e.$accordion:this.S(this.scope).closest("["+this.attr_name()+"]"),o=s.find("> dd"+i+", > li"+i);if(o.length<1)return t.console&&console.error("Selection not found.",i),!1;var r=this.S,a=this.settings.active_class;o.each(function(){var e=r(this),t=e.hasClass(a);(t&&"close"===n||!t&&"open"===n||""===n)&&e.find("> a").trigger("click.fndtn.accordion")})},open:function(e){var e="undefined"!=typeof e?e:{};e.toggle_state="open",this.toggle(e)},close:function(e){var e="undefined"!=typeof e?e:{};e.toggle_state="close",this.toggle(e)},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(e,t,i,n){"use strict";Foundation.libs.alert={name:"alert",version:"5.5.3",settings:{callback:function(){}},init:function(e,t,i){this.bindings(t,i)},events:function(){var t=this,i=this.S;e(this.scope).off(".alert").on("click.fndtn.alert","["+this.attr_name()+"] .close",function(e){var n=i(this).closest("["+t.attr_name()+"]"),s=n.data(t.attr_name(!0)+"-init")||t.settings;e.preventDefault(),Modernizr.csstransitions?(n.addClass("alert-close"),n.on("transitionend webkitTransitionEnd oTransitionEnd",function(e){i(this).trigger("close.fndtn.alert").remove(),s.callback()})):n.fadeOut(300,function(){i(this).trigger("close.fndtn.alert").remove(),s.callback()})})},reflow:function(){}}}(jQuery,window,window.document),function(e,t,i,n){"use strict";Foundation.libs.clearing={name:"clearing",version:"5.5.3",settings:{templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div><img class="clearing-preload-next" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><img class="clearing-preload-prev" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />'},close_selectors:".clearing-close, div.clearing-blackout",open_selectors:"",skip_selector:"",touch_label:"",init:!1,locked:!1},init:function(e,t,i){var n=this;Foundation.inherit(this,"throttle image_loaded"),this.bindings(t,i),n.S(this.scope).is("["+this.attr_name()+"]")?this.assemble(n.S("li",this.scope)):n.S("["+this.attr_name()+"]",this.scope).each(function(){n.assemble(n.S("li",this))})},events:function(n){var s=this,o=s.S,r=e(".scroll-container");r.length>0&&(this.scope=r),o(this.scope).off(".clearing").on("click.fndtn.clearing","ul["+this.attr_name()+"] li "+this.settings.open_selectors,function(e,t,i){var t=t||o(this),i=i||t,n=t.next("li"),r=t.closest("["+s.attr_name()+"]").data(s.attr_name(!0)+"-init"),a=o(e.target);e.preventDefault(),r||(s.init(),r=t.closest("["+s.attr_name()+"]").data(s.attr_name(!0)+"-init")),i.hasClass("visible")&&t[0]===i[0]&&n.length>0&&s.is_open(t)&&(i=n,a=o("img",i)),s.open(a,t,i),s.update_paddles(i)}).on("click.fndtn.clearing",".clearing-main-next",function(e){s.nav(e,"next")}).on("click.fndtn.clearing",".clearing-main-prev",function(e){s.nav(e,"prev")}).on("click.fndtn.clearing",this.settings.close_selectors,function(e){Foundation.libs.clearing.close(e,this)}),e(i).on("keydown.fndtn.clearing",function(e){s.keydown(e)}),o(t).off(".clearing").on("resize.fndtn.clearing",function(){s.resize()}),this.swipe_events(n)},swipe_events:function(e){var t=this,i=t.S;i(this.scope).on("touchstart.fndtn.clearing",".visible-img",function(e){e.touches||(e=e.originalEvent);var t={start_page_x:e.touches[0].pageX,start_page_y:e.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:n};i(this).data("swipe-transition",t),e.stopPropagation()}).on("touchmove.fndtn.clearing",".visible-img",function(e){if(e.touches||(e=e.originalEvent),!(e.touches.length>1||e.scale&&1!==e.scale)){var n=i(this).data("swipe-transition");if("undefined"==typeof n&&(n={}),n.delta_x=e.touches[0].pageX-n.start_page_x,Foundation.rtl&&(n.delta_x=-n.delta_x),"undefined"==typeof n.is_scrolling&&(n.is_scrolling=!!(n.is_scrolling||Math.abs(n.delta_x)<Math.abs(e.touches[0].pageY-n.start_page_y))),!n.is_scrolling&&!n.active){e.preventDefault();var s=n.delta_x<0?"next":"prev";n.active=!0,t.nav(e,s)}}}).on("touchend.fndtn.clearing",".visible-img",function(e){i(this).data("swipe-transition",{}),e.stopPropagation()})},assemble:function(t){var i=t.parent();if(!i.parent().hasClass("carousel")){i.after('<div id="foundationClearingHolder"></div>');var n=i.detach(),s="";if(null!=n[0]){s=n[0].outerHTML;var o=this.S("#foundationClearingHolder"),r=i.data(this.attr_name(!0)+"-init"),a={grid:'<div class="carousel">'+s+"</div>",viewing:r.templates.viewing},l='<div class="clearing-assembled"><div>'+a.viewing+a.grid+"</div></div>",d=this.settings.touch_label;Modernizr.touch&&(l=e(l).find(".clearing-touch-label").html(d).end()),o.after(l).remove()}}},open:function(t,n,s){function o(){setTimeout(function(){this.image_loaded(u,function(){1!==u.outerWidth()||h?r.call(this,u):o.call(this)}.bind(this))}.bind(this),100)}function r(t){var i=e(t);i.css("visibility","visible"),i.trigger("imageVisible"),l.css("overflow","hidden"),d.addClass("clearing-blackout"),c.addClass("clearing-container"),A.show(),this.fix_height(s).caption(a.S(".clearing-caption",A),a.S("img",s)).center_and_label(t,p).shift(n,s,function(){s.closest("li").siblings().removeClass("visible"),s.closest("li").addClass("visible")}),A.trigger("opened.fndtn.clearing")}var a=this,l=e(i.body),d=s.closest(".clearing-assembled"),c=a.S("div",d).first(),A=a.S(".visible-img",c),u=a.S("img",A).not(t),p=a.S(".clearing-touch-label",c),h=!1,f={};e("body").on("touchmove",function(e){e.preventDefault()}),u.error(function(){h=!0}),this.locked()||(A.trigger("open.fndtn.clearing"),f=this.load(t),f.interchange?u.attr("data-interchange",f.interchange).foundation("interchange","reflow"):u.attr("src",f.src).attr("data-interchange",""),u.css("visibility","hidden"),o.call(this))},close:function(t,n){t.preventDefault();var s,o,r=function(e){return/blackout/.test(e.selector)?e:e.closest(".clearing-blackout")}(e(n)),a=e(i.body);return n===t.target&&r&&(a.css("overflow",""),s=e("div",r).first(),o=e(".visible-img",s),o.trigger("close.fndtn.clearing"),this.settings.prev_index=0,e("ul["+this.attr_name()+"]",r).attr("style","").closest(".clearing-blackout").removeClass("clearing-blackout"),s.removeClass("clearing-container"),o.hide(),o.trigger("closed.fndtn.clearing")),e("body").off("touchmove"),!1},is_open:function(e){return e.parent().prop("style").length>0},keydown:function(t){var i=e(".clearing-blackout ul["+this.attr_name()+"]"),n=this.rtl?37:39,s=this.rtl?39:37,o=27;t.which===n&&this.go(i,"next"),t.which===s&&this.go(i,"prev"),t.which===o&&this.S("a.clearing-close").trigger("click.fndtn.clearing")},nav:function(t,i){var n=e("ul["+this.attr_name()+"]",".clearing-blackout");t.preventDefault(),this.go(n,i)},resize:function(){var t=e("img",".clearing-blackout .visible-img"),i=e(".clearing-touch-label",".clearing-blackout");t.length&&(this.center_and_label(t,i),t.trigger("resized.fndtn.clearing"))},fix_height:function(e){var t=e.parent().children(),i=this;return t.each(function(){var e=i.S(this),t=e.find("img");e.height()>t.outerHeight()&&e.addClass("fix-height")}).closest("ul").width(100*t.length+"%"),this},update_paddles:function(e){e=e.closest("li");var t=e.closest(".carousel").siblings(".visible-img");e.next().length>0?this.S(".clearing-main-next",t).removeClass("disabled"):this.S(".clearing-main-next",t).addClass("disabled"),e.prev().length>0?this.S(".clearing-main-prev",t).removeClass("disabled"):this.S(".clearing-main-prev",t).addClass("disabled")},center_and_label:function(e,t){return!this.rtl&&t.length>0?t.css({marginLeft:-(t.outerWidth()/2),marginTop:-(e.outerHeight()/2)-t.outerHeight()-10}):t.css({marginRight:-(t.outerWidth()/2),marginTop:-(e.outerHeight()/2)-t.outerHeight()-10,left:"auto",right:"50%"}),this},load:function(e){var t,i,n;return"A"===e[0].nodeName?(t=e.attr("href"),i=e.data("clearing-interchange")):(n=e.closest("a"),t=n.attr("href"),i=n.data("clearing-interchange")),this.preload(e),{src:t?t:e.attr("src"),interchange:t?i:e.data("clearing-interchange")}},preload:function(e){this.img(e.closest("li").next(),"next").img(e.closest("li").prev(),"prev")},img:function(t,i){if(t.length){var n,s,o,r=e(".clearing-preload-"+i),a=this.S("a",t);a.length?(n=a.attr("href"),s=a.data("clearing-interchange")):(o=this.S("img",t),n=o.attr("src"),s=o.data("clearing-interchange")),s?r.attr("data-interchange",s):(r.attr("src",n),r.attr("data-interchange",""))}return this},caption:function(e,t){var i=t.attr("data-caption");if(i){var n=e.get(0);n.innerHTML=i,e.show()}else e.text("").hide();return this},go:function(e,t){var i=this.S(".visible",e),n=i[t]();this.settings.skip_selector&&0!=n.find(this.settings.skip_selector).length&&(n=n[t]()),n.length&&this.S("img",n).trigger("click.fndtn.clearing",[i,n]).trigger("change.fndtn.clearing")},shift:function(e,t,i){var n,s=t.parent(),o=this.settings.prev_index||t.index(),r=this.direction(s,e,t),a=this.rtl?"right":"left",l=parseInt(s.css("left"),10),d=t.outerWidth(),c={};t.index()===o||/skip/.test(r)?/skip/.test(r)&&(n=t.index()-this.settings.up_count,this.lock(),n>0?(c[a]=-(n*d),s.animate(c,300,this.unlock())):(c[a]=0,s.animate(c,300,this.unlock()))):/left/.test(r)?(this.lock(),c[a]=l+d,s.animate(c,300,this.unlock())):/right/.test(r)&&(this.lock(),c[a]=l-d,s.animate(c,300,this.unlock())),i()},direction:function(e,t,i){var n,s=this.S("li",e),o=s.outerWidth()+s.outerWidth()/4,r=Math.floor(this.S(".clearing-container").outerWidth()/o)-1,a=s.index(i);return this.settings.up_count=r,n=this.adjacent(this.settings.prev_index,a)?a>r&&a>this.settings.prev_index?"right":a>r-1&&a<=this.settings.prev_index?"left":!1:"skip",this.settings.prev_index=a,n},adjacent:function(e,t){for(var i=t+1;i>=t-1;i--)if(i===e)return!0;return!1},lock:function(){this.settings.locked=!0},unlock:function(){this.settings.locked=!1},locked:function(){return this.settings.locked},off:function(){this.S(this.scope).off(".fndtn.clearing"),this.S(t).off(".fndtn.clearing")},reflow:function(){this.init()}}}(jQuery,window,window.document),function(e,t,i,n){"use strict";Foundation.libs.dropdown={name:"dropdown",version:"5.5.3",settings:{active_class:"open",disabled_class:"disabled",mega_class:"mega",align:"bottom",is_hover:!1,hover_timeout:150,opened:function(){},closed:function(){}},init:function(t,i,n){Foundation.inherit(this,"throttle"),e.extend(!0,this.settings,i,n),this.bindings(i,n)},events:function(n){var s=this,o=s.S;o(this.scope).off(".dropdown").on("click.fndtn.dropdown","["+this.attr_name()+"]",function(t){var i=o(this).data(s.attr_name(!0)+"-init")||s.settings;(!i.is_hover||Modernizr.touch)&&(t.preventDefault(),o(this).parent("[data-reveal-id]").length&&t.stopPropagation(),s.toggle(e(this)))}).on("mouseenter.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(e){var t,i,n=o(this);clearTimeout(s.timeout),n.data(s.data_attr())?(t=o("#"+n.data(s.data_attr())),i=n):(t=n,i=o("["+s.attr_name()+'="'+t.attr("id")+'"]'));var r=i.data(s.attr_name(!0)+"-init")||s.settings;o(e.currentTarget).data(s.data_attr())&&r.is_hover&&s.closeall.call(s),r.is_hover&&s.open.apply(s,[t,i])}).on("mouseleave.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(e){var t,i=o(this);if(i.data(s.data_attr()))t=i.data(s.data_attr(!0)+"-init")||s.settings;else var n=o("["+s.attr_name()+'="'+o(this).attr("id")+'"]'),t=n.data(s.attr_name(!0)+"-init")||s.settings;s.timeout=setTimeout(function(){i.data(s.data_attr())?t.is_hover&&s.close.call(s,o("#"+i.data(s.data_attr()))):t.is_hover&&s.close.call(s,i)}.bind(this),t.hover_timeout)}).on("click.fndtn.dropdown",function(t){var n=o(t.target).closest("["+s.attr_name()+"-content]"),r=n.find("a");return r.length>0&&"false"!==n.attr("aria-autoclose")&&s.close.call(s,o("["+s.attr_name()+"-content]")),t.target!==i&&!e.contains(i.documentElement,t.target)||o(t.target).closest("["+s.attr_name()+"]").length>0?void 0:!o(t.target).data("revealId")&&n.length>0&&(o(t.target).is("["+s.attr_name()+"-content]")||e.contains(n.first()[0],t.target))?void t.stopPropagation():void s.close.call(s,o("["+s.attr_name()+"-content]"))}).on("opened.fndtn.dropdown","["+s.attr_name()+"-content]",function(){s.settings.opened.call(this)}).on("closed.fndtn.dropdown","["+s.attr_name()+"-content]",function(){s.settings.closed.call(this)}),o(t).off(".dropdown").on("resize.fndtn.dropdown",s.throttle(function(){s.resize.call(s)},50)),this.resize()},close:function(t){var i=this;t.each(function(n){var s=e("["+i.attr_name()+"="+t[n].id+"]")||e("aria-controls="+t[n].id+"]");s.attr("aria-expanded","false"),i.S(this).hasClass(i.settings.active_class)&&(i.S(this).css(Foundation.rtl?"right":"left","-99999px").attr("aria-hidden","true").removeClass(i.settings.active_class).prev("["+i.attr_name()+"]").removeClass(i.settings.active_class).removeData("target"),i.S(this).trigger("closed.fndtn.dropdown",[t]))}),t.removeClass("f-open-"+this.attr_name(!0))},closeall:function(){var t=this;e.each(t.S(".f-open-"+this.attr_name(!0)),function(){t.close.call(t,t.S(this))})},open:function(e,t){this.css(e.addClass(this.settings.active_class),t),e.prev("["+this.attr_name()+"]").addClass(this.settings.active_class),e.data("target",t.get(0)).trigger("opened.fndtn.dropdown",[e,t]),e.attr("aria-hidden","false"),t.attr("aria-expanded","true"),e.focus(),e.addClass("f-open-"+this.attr_name(!0))},data_attr:function(){return this.namespace.length>0?this.namespace+"-"+this.name:this.name},toggle:function(e){if(!e.hasClass(this.settings.disabled_class)){var t=this.S("#"+e.data(this.data_attr()));0!==t.length&&(this.close.call(this,this.S("["+this.attr_name()+"-content]").not(t)),t.hasClass(this.settings.active_class)?(this.close.call(this,t),t.data("target")!==e.get(0)&&this.open.call(this,t,e)):this.open.call(this,t,e))}},resize:function(){var t=this.S("["+this.attr_name()+"-content].open"),i=e(t.data("target"));t.length&&i.length&&this.css(t,i)},css:function(e,t){var i=Math.max((t.width()-e.width())/2,8),n=t.data(this.attr_name(!0)+"-init")||this.settings,s=e.parent().css("overflow-y")||e.parent().css("overflow");if(this.clear_idx(),this.small()){var o=this.dirs.bottom.call(e,t,n);e.attr("style","").removeClass("drop-left drop-right drop-top").css({position:"absolute",width:"95%","max-width":"none",top:o.top}),e.css(Foundation.rtl?"right":"left",i)}else if("visible"!==s){var r=t[0].offsetTop+t[0].offsetHeight;e.attr("style","").css({position:"absolute",top:r}),e.css(Foundation.rtl?"right":"left",i)}else this.style(e,t,n);return e},style:function(t,i,n){var s=e.extend({position:"absolute"},this.dirs[n.align].call(t,i,n));t.attr("style","").css(s)},dirs:{_base:function(e,n){var s=this.offsetParent(),o=s.offset(),r=e.offset();r.top-=o.top,r.left-=o.left,r.missRight=!1,r.missTop=!1,r.missLeft=!1,r.leftRightFlag=!1;var a,l=t.innerWidth;a=i.getElementsByClassName("row")[0]?i.getElementsByClassName("row")[0].clientWidth:l;var d=(l-a)/2,c=a;if(!this.hasClass("mega")&&!n.ignore_repositioning){var A=this.outerWidth(),u=e.offset().left;e.offset().top<=this.outerHeight()&&(r.missTop=!0,c=l-d,r.leftRightFlag=!0),u+A>u+d&&u-d>A&&(r.missRight=!0,r.missLeft=!1),0>=u-A&&(r.missLeft=!0,r.missRight=!1)}return r},top:function(e,t){var i=Foundation.libs.dropdown,n=i.dirs._base.call(this,e,t);return this.addClass("drop-top"),1==n.missTop&&(n.top=n.top+e.outerHeight()+this.outerHeight(),this.removeClass("drop-top")),1==n.missRight&&(n.left=n.left-this.outerWidth()+e.outerWidth()),(e.outerWidth()<this.outerWidth()||i.small()||this.hasClass(t.mega_menu))&&i.adjust_pip(this,e,t,n),Foundation.rtl?{left:n.left-this.outerWidth()+e.outerWidth(),top:n.top-this.outerHeight()}:{left:n.left,top:n.top-this.outerHeight()}},bottom:function(e,t){var i=Foundation.libs.dropdown,n=i.dirs._base.call(this,e,t);return 1==n.missRight&&(n.left=n.left-this.outerWidth()+e.outerWidth()),(e.outerWidth()<this.outerWidth()||i.small()||this.hasClass(t.mega_menu))&&i.adjust_pip(this,e,t,n),i.rtl?{left:n.left-this.outerWidth()+e.outerWidth(),top:n.top+e.outerHeight()}:{left:n.left,top:n.top+e.outerHeight()}},left:function(e,t){var i=Foundation.libs.dropdown.dirs._base.call(this,e,t);return this.addClass("drop-left"),1==i.missLeft&&(i.left=i.left+this.outerWidth(),i.top=i.top+e.outerHeight(),this.removeClass("drop-left")),{left:i.left-this.outerWidth(),top:i.top}},right:function(e,t){var i=Foundation.libs.dropdown.dirs._base.call(this,e,t);this.addClass("drop-right"),1==i.missRight?(i.left=i.left-this.outerWidth(),i.top=i.top+e.outerHeight(),this.removeClass("drop-right")):i.triggeredRight=!0;var n=Foundation.libs.dropdown;return(e.outerWidth()<this.outerWidth()||n.small()||this.hasClass(t.mega_menu))&&n.adjust_pip(this,e,t,i),
{left:i.left+e.outerWidth(),top:i.top}}},adjust_pip:function(e,t,i,n){var s=Foundation.stylesheet,o=8;e.hasClass(i.mega_class)?o=n.left+t.outerWidth()/2-8:this.small()&&(o+=n.left-8),this.rule_idx=s.cssRules.length;var r=".f-dropdown.open:before",a=".f-dropdown.open:after",l="left: "+o+"px;",d="left: "+(o-1)+"px;";1==n.missRight&&(o=e.outerWidth()-23,r=".f-dropdown.open:before",a=".f-dropdown.open:after",l="left: "+o+"px;",d="left: "+(o-1)+"px;"),1==n.triggeredRight&&(r=".f-dropdown.open:before",a=".f-dropdown.open:after",l="left:-12px;",d="left:-14px;"),s.insertRule?(s.insertRule([r,"{",l,"}"].join(" "),this.rule_idx),s.insertRule([a,"{",d,"}"].join(" "),this.rule_idx+1)):(s.addRule(r,l,this.rule_idx),s.addRule(a,d,this.rule_idx+1))},clear_idx:function(){var e=Foundation.stylesheet;"undefined"!=typeof this.rule_idx&&(e.deleteRule(this.rule_idx),e.deleteRule(this.rule_idx),delete this.rule_idx)},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},off:function(){this.S(this.scope).off(".fndtn.dropdown"),this.S("html, body").off(".fndtn.dropdown"),this.S(t).off(".fndtn.dropdown"),this.S("[data-dropdown-content]").off(".fndtn.dropdown")},reflow:function(){}}}(jQuery,window,window.document),function(e,t,i,n){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.5.3",settings:{use_tallest:!0,before_height_change:e.noop,after_height_change:e.noop,equalize_on_stack:!1,act_on_hidden_el:!1},init:function(e,t,i){Foundation.inherit(this,"image_loaded"),this.bindings(t,i),this.reflow()},events:function(){this.S(t).off(".equalizer").on("resize.fndtn.equalizer",function(e){this.reflow()}.bind(this))},equalize:function(t){var i,n,s=!1,o=t.data("equalizer"),r=t.data(this.attr_name(!0)+"-init")||this.settings;if(i=r.act_on_hidden_el?o?t.find("["+this.attr_name()+'-watch="'+o+'"]'):t.find("["+this.attr_name()+"-watch]"):o?t.find("["+this.attr_name()+'-watch="'+o+'"]:visible'):t.find("["+this.attr_name()+"-watch]:visible"),0!==i.length&&(r.before_height_change(),t.trigger("before-height-change.fndth.equalizer"),i.height("inherit"),r.equalize_on_stack!==!1||(n=i.first().offset().top,i.each(function(){return e(this).offset().top!==n?(s=!0,!1):void 0}),!s))){var a=i.map(function(){return e(this).outerHeight(!1)}).get();if(r.use_tallest){var l=Math.max.apply(null,a);i.css("height",l)}else{var d=Math.min.apply(null,a);i.css("height",d)}r.after_height_change(),t.trigger("after-height-change.fndtn.equalizer")}},reflow:function(){var t=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){var i=e(this),n=i.data("equalizer-mq"),s=!0;n&&(n="is_"+n.replace(/-/g,"_"),Foundation.utils.hasOwnProperty(n)&&(s=!1)),t.image_loaded(t.S("img",this),function(){if(s||Foundation.utils[n]())t.equalize(i);else{var e=i.find("["+t.attr_name()+"-watch]:visible");e.css("height","auto")}})})}}}(jQuery,window,window.document),function(e,t,i,n){"use strict";Foundation.libs.interchange={name:"interchange",version:"5.5.3",cache:{},images_loaded:!1,nodes_loaded:!1,settings:{load_attr:"interchange",named_queries:{"default":"only screen",small:Foundation.media_queries.small,"small-only":Foundation.media_queries["small-only"],medium:Foundation.media_queries.medium,"medium-only":Foundation.media_queries["medium-only"],large:Foundation.media_queries.large,"large-only":Foundation.media_queries["large-only"],xlarge:Foundation.media_queries.xlarge,"xlarge-only":Foundation.media_queries["xlarge-only"],xxlarge:Foundation.media_queries.xxlarge,landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(t,i,n){if(null!==t&&/IMG/.test(t[0].nodeName)){var s=e.each(t,function(){this.src=i});if(new RegExp(i,"i").test(s))return;return t.attr("src",i),n(t[0].src)}var o=t.data(this.data_attr+"-last-path"),r=this;if(o!=i)return/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(i)?(e(t).css("background-image","url("+i+")"),t.data("interchange-last-path",i),n(i)):e.get(i,function(e){t.html(e),t.data(r.data_attr+"-last-path",i),n()})}}},init:function(t,i,n){Foundation.inherit(this,"throttle random_str"),this.data_attr=this.set_data_attr(),e.extend(!0,this.settings,i,n),this.bindings(i,n),this.reflow()},get_media_hash:function(){var e="";for(var t in this.settings.named_queries)e+=matchMedia(this.settings.named_queries[t]).matches.toString();return e},events:function(){var i,n=this;return e(t).off(".interchange").on("resize.fndtn.interchange",n.throttle(function(){var e=n.get_media_hash();e!==i&&n.resize(),i=e},50)),this},resize:function(){var t=this.cache;if(!this.images_loaded||!this.nodes_loaded)return void setTimeout(e.proxy(this.resize,this),50);for(var i in t)if(t.hasOwnProperty(i)){var n=this.results(i,t[i]);n&&this.settings.directives[n.scenario[1]].call(this,n.el,n.scenario[0],function(e){if(arguments[0]instanceof Array)var t=arguments[0];else var t=Array.prototype.slice.call(arguments,0);return function(){e.el.trigger(e.scenario[1],t)}}(n))}},results:function(e,t){var i=t.length;if(i>0)for(var n=this.S("["+this.add_namespace("data-uuid")+'="'+e+'"]');i--;){var s,o=t[i][2];if(s=this.settings.named_queries.hasOwnProperty(o)?matchMedia(this.settings.named_queries[o]):matchMedia(o),s.matches)return{el:n,scenario:t[i]}}return!1},load:function(e,t){return("undefined"==typeof this["cached_"+e]||t)&&this["update_"+e](),this["cached_"+e]},update_images:function(){var e=this.S("img["+this.data_attr+"]"),t=e.length,i=t,n=0,s=this.data_attr;for(this.cache={},this.cached_images=[],this.images_loaded=0===t;i--;){if(n++,e[i]){var o=e[i].getAttribute(s)||"";o.length>0&&this.cached_images.push(e[i])}n===t&&(this.images_loaded=!0,this.enhance("images"))}return this},update_nodes:function(){var e=this.S("["+this.data_attr+"]").not("img"),t=e.length,i=t,n=0,s=this.data_attr;for(this.cached_nodes=[],this.nodes_loaded=0===t;i--;){n++;var o=e[i].getAttribute(s)||"";o.length>0&&this.cached_nodes.push(e[i]),n===t&&(this.nodes_loaded=!0,this.enhance("nodes"))}return this},enhance:function(i){for(var n=this["cached_"+i].length;n--;)this.object(e(this["cached_"+i][n]));return e(t).trigger("resize.fndtn.interchange")},convert_directive:function(e){var t=this.trim(e);return t.length>0?t:"replace"},parse_scenario:function(e){var t=e[0].match(/(.+),\s*(\w+)\s*$/),i=e[1].match(/(.*)\)/);if(t)var n=t[1],s=t[2];else var o=e[0].split(/,\s*$/),n=o[0],s="";return[this.trim(n),this.convert_directive(s),this.trim(i[1])]},object:function(e){var t=this.parse_data_attr(e),i=[],n=t.length;if(n>0)for(;n--;){var s=t[n].split(/,\s?\(/);if(s.length>1){var o=this.parse_scenario(s);i.push(o)}}return this.store(e,i)},store:function(e,t){var i=this.random_str(),n=e.data(this.add_namespace("uuid",!0));return this.cache[n]?this.cache[n]:(e.attr(this.add_namespace("data-uuid"),i),this.cache[i]=t)},trim:function(t){return"string"==typeof t?e.trim(t):t},set_data_attr:function(e){return e?this.namespace.length>0?this.namespace+"-"+this.settings.load_attr:this.settings.load_attr:this.namespace.length>0?"data-"+this.namespace+"-"+this.settings.load_attr:"data-"+this.settings.load_attr},parse_data_attr:function(e){for(var t=e.attr(this.attr_name()).split(/\[(.*?)\]/),i=t.length,n=[];i--;)t[i].replace(/[\W\d]+/,"").length>4&&n.push(t[i]);return n},reflow:function(){this.load("images",!0),this.load("nodes",!0)}}}(jQuery,window,window.document),function(e,t,i,n){"use strict";Foundation.libs.joyride={name:"joyride",version:"5.5.3",defaults:{expose:!1,modal:!0,keyboard:!0,tip_location:"bottom",nub_position:"auto",scroll_speed:1500,scroll_animation:"linear",timer:0,start_timer_on_click:!0,start_offset:0,next_button:!0,prev_button:!0,tip_animation:"fade",pause_after:[],exposed:[],tip_animation_fade_speed:300,cookie_monster:!1,cookie_name:"joyride",cookie_domain:!1,cookie_expires:365,tip_container:"body",abort_on_close:!0,tip_location_patterns:{top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},post_ride_callback:function(){},post_step_callback:function(){},pre_step_callback:function(){},pre_ride_callback:function(){},post_expose_callback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>',prev_button:'<a href="#" class="small button joyride-prev-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',expose_cover:'<div class="joyride-expose-cover"></div>'},expose_add_class:""},init:function(t,i,n){Foundation.inherit(this,"throttle random_str"),this.settings=this.settings||e.extend({},this.defaults,n||i),this.bindings(i,n)},go_next:function(){this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())},go_prev:function(){this.settings.$li.prev().length<1||(this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(null,!0),this.startTimer()):(this.hide(),this.show(null,!0)))},events:function(){var i=this;e(this.scope).off(".joyride").on("click.fndtn.joyride",".joyride-next-tip, .joyride-modal-bg",function(e){e.preventDefault(),this.go_next()}.bind(this)).on("click.fndtn.joyride",".joyride-prev-tip",function(e){e.preventDefault(),this.go_prev()}.bind(this)).on("click.fndtn.joyride",".joyride-close-tip",function(e){e.preventDefault(),this.end(this.settings.abort_on_close)}.bind(this)).on("keyup.fndtn.joyride",function(e){if(this.settings.keyboard&&this.settings.riding)switch(e.which){case 39:e.preventDefault(),this.go_next();break;case 37:e.preventDefault(),this.go_prev();break;case 27:e.preventDefault(),this.end(this.settings.abort_on_close)}}.bind(this)),e(t).off(".joyride").on("resize.fndtn.joyride",i.throttle(function(){if(e("["+i.attr_name()+"]").length>0&&i.settings.$next_tip&&i.settings.riding){if(i.settings.exposed.length>0){var t=e(i.settings.exposed);t.each(function(){var t=e(this);i.un_expose(t),i.expose(t)})}i.is_phone()?i.pos_phone():i.pos_default(!1)}},100))},start:function(){var t=this,i=e("["+this.attr_name()+"]",this.scope),n=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],s=n.length;!i.length>0||(this.settings.init||this.events(),this.settings=i.data(this.attr_name(!0)+"-init"),this.settings.$content_el=i,this.settings.$body=e(this.settings.tip_container),this.settings.body_offset=e(this.settings.tip_container).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,this.settings.riding=!0,"function"!=typeof e.cookie&&(this.settings.cookie_monster=!1),(!this.settings.cookie_monster||this.settings.cookie_monster&&!e.cookie(this.settings.cookie_name))&&(this.settings.$tip_content.each(function(i){var o=e(this);this.settings=e.extend({},t.defaults,t.data_options(o));for(var r=s;r--;)t.settings[n[r]]=parseInt(t.settings[n[r]],10);t.create({$li:o,index:i})}),!this.settings.start_timer_on_click&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init")))},resume:function(){this.set_li(),this.show()},tip_template:function(t){var i,n;return t.tip_class=t.tip_class||"",i=e(this.settings.template.tip).addClass(t.tip_class),n=e.trim(e(t.li).html())+this.prev_button_text(t.prev_button_text,t.index)+this.button_text(t.button_text)+this.settings.template.link+this.timer_instance(t.index),i.append(e(this.settings.template.wrapper)),i.first().attr(this.add_namespace("data-index"),t.index),e(".joyride-content-wrapper",i).append(n),i[0]},timer_instance:function(t){var i;return i=0===t&&this.settings.start_timer_on_click&&this.settings.timer>0||0===this.settings.timer?"":e(this.settings.template.timer)[0].outerHTML},button_text:function(t){return this.settings.tip_settings.next_button?(t=e.trim(t)||"Next",t=e(this.settings.template.button).append(t)[0].outerHTML):t="",t},prev_button_text:function(t,i){return this.settings.tip_settings.prev_button?(t=e.trim(t)||"Previous",t=0==i?e(this.settings.template.prev_button).append(t).addClass("disabled")[0].outerHTML:e(this.settings.template.prev_button).append(t)[0].outerHTML):t="",t},create:function(t){this.settings.tip_settings=e.extend({},this.settings,this.data_options(t.$li));var i=t.$li.attr(this.add_namespace("data-button"))||t.$li.attr(this.add_namespace("data-text")),n=t.$li.attr(this.add_namespace("data-button-prev"))||t.$li.attr(this.add_namespace("data-prev-text")),s=t.$li.attr("class"),o=e(this.tip_template({tip_class:s,index:t.index,button_text:i,prev_button_text:n,li:t.$li}));e(this.settings.tip_container).append(o)},show:function(t,i){var s=null;if(this.settings.$li===n||-1===e.inArray(this.settings.$li.index(),this.settings.pause_after))if(this.settings.paused?this.settings.paused=!1:this.set_li(t,i),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0){if(t&&(this.settings.pre_ride_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.pre_step_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tip_settings=e.extend({},this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tip_settings.tip_location_pattern=this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],!/body/i.test(this.settings.$target.selector)&&!this.settings.expose){var o=e(".joyride-modal-bg");/pop/i.test(this.settings.tipAnimation)?o.hide():o.fadeOut(this.settings.tipAnimationFadeSpeed),this.scroll_to()}this.is_phone()?this.pos_phone(!0):this.pos_default(!0),s=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tip_animation)?(s.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),setTimeout(function(){s.animate({width:s.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tip_animation)&&(s.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),setTimeout(function(){s.animate({width:s.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),this.settings.$current_tip=this.settings.$next_tip}else this.settings.$li&&this.settings.$target.length<1?this.show(t,i):this.end();else this.settings.paused=!0},is_phone:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.modal||e(".joyride-modal-bg").hide(),this.settings.$current_tip.css("visibility","hidden"),setTimeout(e.proxy(function(){this.hide(),this.css("visibility","visible")},this.settings.$current_tip),0),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(e,t){e?(this.settings.$li=this.settings.$tip_content.eq(this.settings.start_offset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(t?this.settings.$li=this.settings.$li.prev():this.settings.$li=this.settings.$li.next(),this.set_next_tip()),this.set_target()},set_next_tip:function(){this.settings.$next_tip=e(".joyride-tip-guide").eq(this.settings.$li.index()),this.settings.$next_tip.data("closed","")},set_target:function(){var t=this.settings.$li.attr(this.add_namespace("data-class")),n=this.settings.$li.attr(this.add_namespace("data-id")),s=function(){return n?e(i.getElementById(n)):t?e("."+t).first():e("body")};this.settings.$target=s()},scroll_to:function(){var i,n;i=e(t).height()/2,n=Math.ceil(this.settings.$target.offset().top-i+this.settings.$next_tip.outerHeight()),0!=n&&e("html, body").stop().animate({scrollTop:n},this.settings.scroll_speed,"swing")},paused:function(){return-1===e.inArray(this.settings.$li.index()+1,this.settings.pause_after)},restart:function(){this.hide(),this.settings.$li=n,this.show("init")},pos_default:function(e){var t=this.settings.$next_tip.find(".joyride-nub"),i=Math.ceil(t.outerWidth()/2),n=Math.ceil(t.outerHeight()/2),s=e||!1;if(s&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector))this.settings.$li.length&&this.pos_modal(t);else{var o=this.settings.tip_settings.tipAdjustmentY?parseInt(this.settings.tip_settings.tipAdjustmentY):0,r=this.settings.tip_settings.tipAdjustmentX?parseInt(this.settings.tip_settings.tipAdjustmentX):0;this.bottom()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top+n+this.settings.$target.outerHeight()+o,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()+r}):this.settings.$next_tip.css({top:this.settings.$target.offset().top+n+this.settings.$target.outerHeight()+o,left:this.settings.$target.offset().left+r}),this.nub_position(t,this.settings.tip_settings.nub_position,"top")):this.top()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-n+o,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}):this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-n+o,left:this.settings.$target.offset().left+r}),this.nub_position(t,this.settings.tip_settings.nub_position,"bottom")):this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top+o,left:this.settings.$target.outerWidth()+this.settings.$target.offset().left+i+r}),this.nub_position(t,this.settings.tip_settings.nub_position,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top+o,left:this.settings.$target.offset().left-this.settings.$next_tip.outerWidth()-i+r}),this.nub_position(t,this.settings.tip_settings.nub_position,"right")),!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tip_settings.tip_location_pattern.length&&(t.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tip_settings.tip_location=this.settings.tip_settings.tip_location_pattern[this.settings.attempts],this.settings.attempts++,this.pos_default())}s&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(t){var i=this.settings.$next_tip.outerHeight(),n=(this.settings.$next_tip.offset(),this.settings.$target.outerHeight()),s=e(".joyride-nub",this.settings.$next_tip),o=Math.ceil(s.outerHeight()/2),r=t||!1;s.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),r&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(s):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top-i-o}),s.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+n+o}),s.addClass("top")),r&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(e){this.center(),e.hide(),this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var t=e(".joyride-modal-bg");if(t.length<1){var t=e(this.settings.template.modal);t.appendTo("body")}/pop/i.test(this.settings.tip_animation)?t.show():t.fadeIn(this.settings.tip_animation_fade_speed)}},expose:function(){var i,n,s,o,r,a="expose-"+this.random_str(6);if(arguments.length>0&&arguments[0]instanceof e)s=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;s=this.settings.$target}return s.length<1?(t.console&&console.error("element not valid",s),!1):(i=e(this.settings.template.expose),this.settings.$body.append(i),i.css({top:s.offset().top,left:s.offset().left,width:s.outerWidth(!0),height:s.outerHeight(!0)}),n=e(this.settings.template.expose_cover),o={zIndex:s.css("z-index"),position:s.css("position")},r=null==s.attr("class")?"":s.attr("class"),s.css("z-index",parseInt(i.css("z-index"))+1),"static"==o.position&&s.css("position","relative"),s.data("expose-css",o),s.data("orig-class",r),s.attr("class",r+" "+this.settings.expose_add_class),n.css({top:s.offset().top,left:s.offset().left,width:s.outerWidth(!0),height:s.outerHeight(!0)}),this.settings.modal&&this.show_modal(),this.settings.$body.append(n),i.addClass(a),n.addClass(a),s.data("expose",a),this.settings.post_expose_callback(this.settings.$li.index(),this.settings.$next_tip,s),void this.add_exposed(s))},un_expose:function(){var i,n,s,o,r,a=!1;if(arguments.length>0&&arguments[0]instanceof e)n=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;n=this.settings.$target}return n.length<1?(t.console&&console.error("element not valid",n),!1):(i=n.data("expose"),s=e("."+i),arguments.length>1&&(a=arguments[1]),a===!0?e(".joyride-expose-wrapper,.joyride-expose-cover").remove():s.remove(),o=n.data("expose-css"),"auto"==o.zIndex?n.css("z-index",""):n.css("z-index",o.zIndex),o.position!=n.css("position")&&("static"==o.position?n.css("position",""):n.css("position",o.position)),r=n.data("orig-class"),n.attr("class",r),n.removeData("orig-classes"),n.removeData("expose"),n.removeData("expose-z-index"),void this.remove_exposed(n))},add_exposed:function(t){this.settings.exposed=this.settings.exposed||[],t instanceof e||"object"==typeof t?this.settings.exposed.push(t[0]):"string"==typeof t&&this.settings.exposed.push(t)},remove_exposed:function(t){var i,n;for(t instanceof e?i=t[0]:"string"==typeof t&&(i=t),this.settings.exposed=this.settings.exposed||[],n=this.settings.exposed.length;n--;)if(this.settings.exposed[n]==i)return void this.settings.exposed.splice(n,1)},center:function(){var i=e(t);return this.settings.$next_tip.css({top:(i.height()-this.settings.$next_tip.outerHeight())/2+i.scrollTop(),left:(i.width()-this.settings.$next_tip.outerWidth())/2+i.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(this.settings.tip_settings.tip_location)},top:function(){return/top/i.test(this.settings.tip_settings.tip_location)},right:function(){return/right/i.test(this.settings.tip_settings.tip_location)},left:function(){return/left/i.test(this.settings.tip_settings.tip_location)},corners:function(i){if(0===i.length)return[!1,!1,!1,!1];var n=e(t),s=n.height()/2,o=Math.ceil(this.settings.$target.offset().top-s+this.settings.$next_tip.outerHeight()),r=n.width()+n.scrollLeft(),a=n.height()+o,l=n.height()+n.scrollTop(),d=n.scrollTop();return d>o&&(d=0>o?0:o),a>l&&(l=a),[i.offset().top<d,r<i.offset().left+i.outerWidth(),l<i.offset().top+i.outerHeight(),n.scrollLeft()>i.offset().left]},visible:function(e){for(var t=e.length;t--;)if(e[t])return!1;return!0},nub_position:function(e,t,i){"auto"===t?e.addClass(i):e.addClass(t)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide(),this.show(),this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(t){this.settings.cookie_monster&&e.cookie(this.settings.cookie_name,"ridden",{expires:this.settings.cookie_expires,domain:this.settings.cookie_domain}),this.settings.timer>0&&clearTimeout(this.settings.automate),this.settings.modal&&this.settings.expose&&this.un_expose(),e(this.scope).off("keyup.joyride"),this.settings.$next_tip.data("closed",!0),this.settings.riding=!1,e(".joyride-modal-bg").hide(),this.settings.$current_tip.hide(),("undefined"==typeof t||t===!1)&&(this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip),this.settings.post_ride_callback(this.settings.$li.index(),this.settings.$current_tip)),e(".joyride-tip-guide").remove()},off:function(){e(this.scope).off(".joyride"),e(t).off(".joyride"),e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),e(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(this.settings.automate)},reflow:function(){}}}(jQuery,window,window.document),function(e,t,i,n){"use strict";Foundation.libs["magellan-expedition"]={name:"magellan-expedition",version:"5.5.3",settings:{active_class:"active",threshold:0,destination_threshold:20,throttle_delay:30,fixed_top:0,offset_by_height:!0,duration:700,easing:"swing"},init:function(e,t,i){Foundation.inherit(this,"throttle"),this.bindings(t,i)},events:function(){var t=this,i=t.S,n=t.settings;t.set_expedition_position(),i(t.scope).off(".magellan").on("click.fndtn.magellan","["+t.add_namespace("data-magellan-arrival")+"] a[href*=#]",function(i){var n=this.hostname===location.hostname||!this.hostname,s=t.filterPathname(location.pathname)===t.filterPathname(this.pathname),o=this.hash.replace(/(:|\.|\/)/g,"\\$1"),r=this;if(n&&s&&o){i.preventDefault();var a=e(this).closest("["+t.attr_name()+"]"),l=a.data("magellan-expedition-init"),d=this.hash.split("#").join(""),c=e('a[name="'+d+'"]');0===c.length&&(c=e("#"+d));var A=c.offset().top-l.destination_threshold+1;l.offset_by_height&&(A-=a.outerHeight()),e("html, body").stop().animate({scrollTop:A},l.duration,l.easing,function(){history.pushState?history.pushState(null,null,r.pathname+r.search+"#"+d):location.hash=r.pathname+r.search+"#"+d})}}).on("scroll.fndtn.magellan",t.throttle(this.check_for_arrivals.bind(this),n.throttle_delay))},check_for_arrivals:function(){var e=this;e.update_arrivals(),e.update_expedition_positions()},set_expedition_position:function(){var t=this;e("["+this.attr_name()+"=fixed]",t.scope).each(function(i,n){var s,o,r=e(this),a=r.data("magellan-expedition-init"),l=r.attr("styles");r.attr("style",""),s=r.offset().top+a.threshold,o=parseInt(r.data("magellan-fixed-top")),isNaN(o)||(t.settings.fixed_top=o),r.data(t.data_attr("magellan-top-offset"),s),r.attr("style",l)})},update_expedition_positions:function(){var i=this,n=e(t).scrollTop();e("["+this.attr_name()+"=fixed]",i.scope).each(function(){var t=e(this),s=t.data("magellan-expedition-init"),o=t.attr("style"),r=t.data("magellan-top-offset");if(n+i.settings.fixed_top>=r){var a=t.prev("["+i.add_namespace("data-magellan-expedition-clone")+"]");0===a.length&&(a=t.clone(),a.removeAttr(i.attr_name()),a.attr(i.add_namespace("data-magellan-expedition-clone"),""),t.before(a)),t.css({position:"fixed",top:s.fixed_top}).addClass("fixed")}else t.prev("["+i.add_namespace("data-magellan-expedition-clone")+"]").remove(),t.attr("style",o).css("position","").css("top","").removeClass("fixed")})},update_arrivals:function(){var i=this,n=e(t).scrollTop();e("["+this.attr_name()+"]",i.scope).each(function(){var t=e(this),s=t.data(i.attr_name(!0)+"-init"),o=i.offsets(t,n),r=t.find("["+i.add_namespace("data-magellan-arrival")+"]"),a=!1;o.each(function(e,n){if(n.viewport_offset>=n.top_offset){var o=t.find("["+i.add_namespace("data-magellan-arrival")+"]");return o.not(n.arrival).removeClass(s.active_class),n.arrival.addClass(s.active_class),a=!0,!0}}),a||r.removeClass(s.active_class)})},offsets:function(t,i){var n=this,s=t.data(n.attr_name(!0)+"-init"),o=i;return t.find("["+n.add_namespace("data-magellan-arrival")+"]").map(function(i,r){var a=e(this).data(n.data_attr("magellan-arrival")),l=e("["+n.add_namespace("data-magellan-destination")+"="+a+"]");if(l.length>0){var d=l.offset().top-s.destination_threshold;return s.offset_by_height&&(d-=t.outerHeight()),d=Math.floor(d),{destination:l,arrival:e(this),top_offset:d,viewport_offset:o}}}).sort(function(e,t){return e.top_offset<t.top_offset?-1:e.top_offset>t.top_offset?1:0})},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},off:function(){this.S(this.scope).off(".magellan"),this.S(t).off(".magellan")},filterPathname:function(e){return e=e||"",e.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},reflow:function(){var t=this;e("["+t.add_namespace("data-magellan-expedition-clone")+"]",t.scope).remove()}}}(jQuery,window,window.document),function(e,t,i,n){"use strict";Foundation.libs.offcanvas={name:"offcanvas",version:"5.5.3",settings:{open_method:"move",close_on_click:!1},init:function(e,t,i){this.bindings(t,i)},events:function(){var t=this,i=t.S,n="",s="",o="",r="",a="";"move"===this.settings.open_method?(n="move-",s="right",o="left",r="top",a="bottom"):"overlap_single"===this.settings.open_method?(n="offcanvas-overlap-",s="right",o="left",r="top",a="bottom"):"overlap"===this.settings.open_method&&(n="offcanvas-overlap"),i(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",".left-off-canvas-toggle",function(o){t.click_toggle_class(o,n+s),"overlap"!==t.settings.open_method&&i(".left-submenu").removeClass(n+s),e(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".left-off-canvas-menu a",function(o){var r=t.get_settings(o),a=i(this).parent();!r.close_on_click||a.hasClass("has-submenu")||a.hasClass("back")?i(this).parent().hasClass("has-submenu")?(o.preventDefault(),i(this).siblings(".left-submenu").toggleClass(n+s)):a.hasClass("back")&&(o.preventDefault(),a.parent().removeClass(n+s)):(t.hide.call(t,n+s,t.get_wrapper(o)),a.parent().removeClass(n+s)),e(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-toggle",function(s){t.click_toggle_class(s,n+o),"overlap"!==t.settings.open_method&&i(".right-submenu").removeClass(n+o),e(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-menu a",function(s){var r=t.get_settings(s),a=i(this).parent();!r.close_on_click||a.hasClass("has-submenu")||a.hasClass("back")?i(this).parent().hasClass("has-submenu")?(s.preventDefault(),i(this).siblings(".right-submenu").toggleClass(n+o)):a.hasClass("back")&&(s.preventDefault(),a.parent().removeClass(n+o)):(t.hide.call(t,n+o,t.get_wrapper(s)),a.parent().removeClass(n+o)),e(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".top-off-canvas-toggle",function(s){t.click_toggle_class(s,n+a),"overlap"!==t.settings.open_method&&i(".top-submenu").removeClass(n+a),e(".top-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".top-off-canvas-menu a",function(s){var o=t.get_settings(s),r=i(this).parent();!o.close_on_click||r.hasClass("has-submenu")||r.hasClass("back")?i(this).parent().hasClass("has-submenu")?(s.preventDefault(),i(this).siblings(".top-submenu").toggleClass(n+a)):r.hasClass("back")&&(s.preventDefault(),r.parent().removeClass(n+a)):(t.hide.call(t,n+a,t.get_wrapper(s)),r.parent().removeClass(n+a)),e(".top-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".bottom-off-canvas-toggle",function(s){t.click_toggle_class(s,n+r),"overlap"!==t.settings.open_method&&i(".bottom-submenu").removeClass(n+r),e(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".bottom-off-canvas-menu a",function(s){var o=t.get_settings(s),a=i(this).parent();!o.close_on_click||a.hasClass("has-submenu")||a.hasClass("back")?i(this).parent().hasClass("has-submenu")?(s.preventDefault(),i(this).siblings(".bottom-submenu").toggleClass(n+r)):a.hasClass("back")&&(s.preventDefault(),a.parent().removeClass(n+r)):(t.hide.call(t,n+r,t.get_wrapper(s)),a.parent().removeClass(n+r)),e(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(r){t.click_remove_class(r,n+o),i(".right-submenu").removeClass(n+o),s&&(t.click_remove_class(r,n+s),i(".left-submenu").removeClass(n+o)),e(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(i){t.click_remove_class(i,n+o),e(".left-off-canvas-toggle").attr("aria-expanded","false"),s&&(t.click_remove_class(i,n+s),e(".right-off-canvas-toggle").attr("aria-expanded","false"))}).on("click.fndtn.offcanvas",".exit-off-canvas",function(s){t.click_remove_class(s,n+r),i(".bottom-submenu").removeClass(n+r),a&&(t.click_remove_class(s,n+a),i(".top-submenu").removeClass(n+r)),
e(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(i){t.click_remove_class(i,n+r),e(".top-off-canvas-toggle").attr("aria-expanded","false"),a&&(t.click_remove_class(i,n+a),e(".bottom-off-canvas-toggle").attr("aria-expanded","false"))})},toggle:function(e,t){t=t||this.get_wrapper(),t.is("."+e)?this.hide(e,t):this.show(e,t)},show:function(e,t){t=t||this.get_wrapper(),t.trigger("open.fndtn.offcanvas"),t.addClass(e)},hide:function(e,t){t=t||this.get_wrapper(),t.trigger("close.fndtn.offcanvas"),t.removeClass(e)},click_toggle_class:function(e,t){e.preventDefault();var i=this.get_wrapper(e);this.toggle(t,i)},click_remove_class:function(e,t){e.preventDefault();var i=this.get_wrapper(e);this.hide(t,i)},get_settings:function(e){var t=this.S(e.target).closest("["+this.attr_name()+"]");return t.data(this.attr_name(!0)+"-init")||this.settings},get_wrapper:function(e){var t=this.S(e?e.target:this.scope).closest(".off-canvas-wrap");return 0===t.length&&(t=this.S(".off-canvas-wrap")),t},reflow:function(){}}}(jQuery,window,window.document),function(e,t,i,n){"use strict";var s=function(){},o=function(s,o){if(s.hasClass(o.slides_container_class))return this;var d,c,A,u,p,h,f=this,g=s,m=0,v=!1;f.slides=function(){return g.children(o.slide_selector)},f.slides().first().addClass(o.active_slide_class),f.update_slide_number=function(t){o.slide_number&&(c.find("span:first").text(parseInt(t)+1),c.find("span:last").text(f.slides().length)),o.bullets&&(A.children().removeClass(o.bullets_active_class),e(A.children().get(t)).addClass(o.bullets_active_class))},f.update_active_link=function(t){var i=e('[data-orbit-link="'+f.slides().eq(t).attr("data-orbit-slide")+'"]');i.siblings().removeClass(o.bullets_active_class),i.addClass(o.bullets_active_class)},f.build_markup=function(){g.wrap('<div class="'+o.container_class+'"></div>'),d=g.parent(),g.addClass(o.slides_container_class),o.stack_on_small&&d.addClass(o.stack_on_small_class),o.navigation_arrows&&(d.append(e('<a href="#"><span></span></a>').addClass(o.prev_class)),d.append(e('<a href="#"><span></span></a>').addClass(o.next_class))),o.timer&&(u=e("<div>").addClass(o.timer_container_class),u.append("<span>"),u.append(e("<div>").addClass(o.timer_progress_class)),u.addClass(o.timer_paused_class),d.append(u)),o.slide_number&&(c=e("<div>").addClass(o.slide_number_class),c.append("<span></span> "+o.slide_number_text+" <span></span>"),d.append(c)),o.bullets&&(A=e("<ol>").addClass(o.bullets_container_class),d.append(A),A.wrap('<div class="orbit-bullets-container"></div>'),f.slides().each(function(t,i){var n=e("<li>").attr("data-orbit-slide",t).on("click",f.link_bullet);A.append(n)}))},f._goto=function(t,i){if(t===m)return!1;"object"==typeof h&&h.restart();var n=f.slides(),s="next";if(v=!0,m>t&&(s="prev"),t>=n.length){if(!o.circular)return!1;t=0}else if(0>t){if(!o.circular)return!1;t=n.length-1}var r=e(n.get(m)),a=e(n.get(t));r.css("zIndex",2),r.removeClass(o.active_slide_class),a.css("zIndex",4).addClass(o.active_slide_class),g.trigger("before-slide-change.fndtn.orbit"),o.before_slide_change(),f.update_active_link(t);var l=function(){var e=function(){m=t,v=!1,i===!0&&(h=f.create_timer(),h.start()),f.update_slide_number(m),g.trigger("after-slide-change.fndtn.orbit",[{slide_number:m,total_slides:n.length}]),o.after_slide_change(m,n.length)};g.outerHeight()!=a.outerHeight()&&o.variable_height?g.animate({height:a.outerHeight()},250,"linear",e):e()};if(1===n.length)return l(),!1;var d=function(){"next"===s&&p.next(r,a,l),"prev"===s&&p.prev(r,a,l)};a.outerHeight()>g.outerHeight()&&o.variable_height?g.animate({height:a.outerHeight()},250,"linear",d):d()},f.next=function(e){e.stopImmediatePropagation(),e.preventDefault(),f._goto(m+1)},f.prev=function(e){e.stopImmediatePropagation(),e.preventDefault(),f._goto(m-1)},f.link_custom=function(t){t.preventDefault();var i=e(this).attr("data-orbit-link");if("string"==typeof i&&""!=(i=e.trim(i))){var n=d.find("[data-orbit-slide="+i+"]");-1!=n.index()&&f._goto(n.index())}},f.link_bullet=function(t){var i=e(this).attr("data-orbit-slide");if("string"==typeof i&&""!=(i=e.trim(i)))if(isNaN(parseInt(i))){var n=d.find("[data-orbit-slide="+i+"]");-1!=n.index()&&f._goto(n.index()+1)}else f._goto(parseInt(i))},f.timer_callback=function(){f._goto(m+1,!0)},f.compute_dimensions=function(){var t=e(f.slides().get(m)),i=t.outerHeight();o.variable_height||f.slides().each(function(){e(this).outerHeight()>i&&(i=e(this).outerHeight())}),g.height(i)},f.create_timer=function(){var e=new r(d.find("."+o.timer_container_class),o,f.timer_callback);return e},f.stop_timer=function(){"object"==typeof h&&h.stop()},f.toggle_timer=function(){var e=d.find("."+o.timer_container_class);e.hasClass(o.timer_paused_class)?("undefined"==typeof h&&(h=f.create_timer()),h.start()):"object"==typeof h&&h.stop()},f.init=function(){f.build_markup(),o.timer&&(h=f.create_timer(),Foundation.utils.image_loaded(this.slides().children("img"),h.start)),p=new l(o,g),"slide"===o.animation&&(p=new a(o,g)),d.on("click","."+o.next_class,f.next),d.on("click","."+o.prev_class,f.prev),o.next_on_click&&d.on("click","."+o.slides_container_class+" [data-orbit-slide]",f.link_bullet),d.on("click",f.toggle_timer),o.swipe&&d.on("touchstart.fndtn.orbit",function(e){e.touches||(e=e.originalEvent);var t={start_page_x:e.touches[0].pageX,start_page_y:e.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:n};d.data("swipe-transition",t),e.stopPropagation()}).on("touchmove.fndtn.orbit",function(e){if(e.touches||(e=e.originalEvent),!(e.touches.length>1||e.scale&&1!==e.scale)){var t=d.data("swipe-transition");if("undefined"==typeof t&&(t={}),t.delta_x=e.touches[0].pageX-t.start_page_x,"undefined"==typeof t.is_scrolling&&(t.is_scrolling=!!(t.is_scrolling||Math.abs(t.delta_x)<Math.abs(e.touches[0].pageY-t.start_page_y))),!t.is_scrolling&&!t.active){e.preventDefault();var i=t.delta_x<0?m+1:m-1;t.active=!0,f._goto(i)}}}).on("touchend.fndtn.orbit",function(e){d.data("swipe-transition",{}),e.stopPropagation()}),d.on("mouseenter.fndtn.orbit",function(e){o.timer&&o.pause_on_hover&&f.stop_timer()}).on("mouseleave.fndtn.orbit",function(e){o.timer&&o.resume_on_mouseout&&h.start()}),e(i).on("click","[data-orbit-link]",f.link_custom),e(t).on("load resize",f.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),f.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),function(){d.prev("."+o.preloader_class).css("display","none"),f.update_slide_number(0),f.update_active_link(0),g.trigger("ready.fndtn.orbit")})},f.init()},r=function(e,t,i){var n,s,o=this,r=t.timer_speed,a=e.find("."+t.timer_progress_class),l=-1;this.update_progress=function(e){var t=a.clone();t.attr("style",""),t.css("width",e+"%"),a.replaceWith(t),a=t},this.restart=function(){clearTimeout(s),e.addClass(t.timer_paused_class),l=-1,o.update_progress(0)},this.start=function(){return e.hasClass(t.timer_paused_class)?(l=-1===l?r:l,e.removeClass(t.timer_paused_class),n=(new Date).getTime(),a.animate({width:"100%"},l,"linear"),s=setTimeout(function(){o.restart(),i()},l),void e.trigger("timer-started.fndtn.orbit")):!0},this.stop=function(){if(e.hasClass(t.timer_paused_class))return!0;clearTimeout(s),e.addClass(t.timer_paused_class);var i=(new Date).getTime();l-=i-n;var a=100-l/r*100;o.update_progress(a),e.trigger("timer-stopped.fndtn.orbit")}},a=function(t,i){var n=t.animation_speed,s=1===e("html[dir=rtl]").length,o=s?"marginRight":"marginLeft",r={};r[o]="0%",this.next=function(e,t,i){e.animate({marginLeft:"-100%"},n),t.animate(r,n,function(){e.css(o,"100%"),i()})},this.prev=function(e,t,i){e.animate({marginLeft:"100%"},n),t.css(o,"-100%"),t.animate(r,n,function(){e.css(o,"100%"),i()})}},l=function(t,i){var n=t.animation_speed;1===e("html[dir=rtl]").length;this.next=function(e,t,i){t.css({margin:"0%",opacity:"0.01"}),t.animate({opacity:"1"},n,"linear",function(){e.css("margin","100%"),i()})},this.prev=function(e,t,i){t.css({margin:"0%",opacity:"0.01"}),t.animate({opacity:"1"},n,"linear",function(){e.css("margin","100%"),i()})}};Foundation.libs=Foundation.libs||{},Foundation.libs.orbit={name:"orbit",version:"5.5.3",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:!0,resume_on_mouseout:!1,next_on_click:!0,animation_speed:500,stack_on_small:!1,navigation_arrows:!0,slide_number:!0,slide_number_text:"of",container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",preloader_class:"preloader",slide_selector:"*",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:!0,circular:!0,timer:!0,variable_height:!1,swipe:!0,before_slide_change:s,after_slide_change:s},init:function(e,t,i){this.bindings(t,i)},events:function(e){var t=new o(this.S(e),this.S(e).data("orbit-init"));this.S(e).data(this.name+"-instance",t)},reflow:function(){var e=this;if(e.S(e.scope).is("[data-orbit]")){var t=e.S(e.scope),i=t.data(e.name+"-instance");i.compute_dimensions()}else e.S("[data-orbit]",e.scope).each(function(t,i){var n=e.S(i),s=(e.data_options(n),n.data(e.name+"-instance"));s.compute_dimensions()})}}}(jQuery,window,window.document),function(e,t,i,n){"use strict";function s(e){var t=/fade/i.test(e),i=/pop/i.test(e);return{animate:t||i,pop:i,fade:t}}var o=[];Foundation.libs.reveal={name:"reveal",version:"5.5.3",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",multiple_opened:!1,bg_class:"reveal-modal-bg",root_element:"body",open:function(){},opened:function(){},close:function(){},closed:function(){},on_ajax_error:e.noop,bg:e(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(t,i,n){e.extend(!0,this.settings,i,n),this.bindings(i,n)},events:function(e){var t=this,n=t.S;return n(this.scope).off(".reveal").on("click.fndtn.reveal","["+this.add_namespace("data-reveal-id")+"]:not([disabled])",function(e){if(e.preventDefault(),!t.locked){var i=n(this),s=i.data(t.data_attr("reveal-ajax")),o=i.data(t.data_attr("reveal-replace-content"));if(t.locked=!0,"undefined"==typeof s)t.open.call(t,i);else{var r=s===!0?i.attr("href"):s;t.open.call(t,i,{url:r},{replaceContentSel:o})}}}),n(i).on("click.fndtn.reveal",this.close_targets(),function(e){if(e.preventDefault(),!t.locked){var i=n("["+t.attr_name()+"].open").data(t.attr_name(!0)+"-init")||t.settings,s=n(e.target)[0]===n("."+i.bg_class)[0];if(s){if(!i.close_on_background_click)return;e.stopPropagation()}t.locked=!0,t.close.call(t,s?n("["+t.attr_name()+"].open:not(.toback)"):n(this).closest("["+t.attr_name()+"]"))}}),n("["+t.attr_name()+"]",this.scope).length>0?n(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video):n(this.scope).on("open.fndtn.reveal","["+t.attr_name()+"]",this.settings.open).on("opened.fndtn.reveal","["+t.attr_name()+"]",this.settings.opened).on("opened.fndtn.reveal","["+t.attr_name()+"]",this.open_video).on("close.fndtn.reveal","["+t.attr_name()+"]",this.settings.close).on("closed.fndtn.reveal","["+t.attr_name()+"]",this.settings.closed).on("closed.fndtn.reveal","["+t.attr_name()+"]",this.close_video),!0},key_up_on:function(e){var t=this;return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal",function(e){var i=t.S("["+t.attr_name()+"].open"),n=i.data(t.attr_name(!0)+"-init")||t.settings;n&&27===e.which&&n.close_on_esc&&!t.locked&&t.close.call(t,i)}),!0},key_up_off:function(e){return this.S("body").off("keyup.fndtn.reveal"),!0},open:function(i,s){var r,a=this;i?"undefined"!=typeof i.selector?r=a.S("#"+i.data(a.data_attr("reveal-id"))).first():(r=a.S(this.scope),s=i):r=a.S(this.scope);var l=r.data(a.attr_name(!0)+"-init");if(l=l||this.settings,r.hasClass("open")&&i!==n&&i.attr("data-reveal-id")==r.attr("id"))return a.close(r);if(!r.hasClass("open")){var d=a.S("["+a.attr_name()+"].open");"undefined"==typeof r.data("css-top")&&r.data("css-top",parseInt(r.css("top"),10)).data("offset",this.cache_offset(r)),r.attr("tabindex","0").attr("aria-hidden","false"),this.key_up_on(r),r.on("open.fndtn.reveal",function(e){"fndtn.reveal"!==e.namespace}),r.on("open.fndtn.reveal").trigger("open.fndtn.reveal"),d.length<1&&this.toggle_bg(r,!0),"string"==typeof s&&(s={url:s});var c=function(){d.length>0&&(l.multiple_opened?a.to_back(d):a.hide(d,l.css.close)),l.multiple_opened&&o.push(r),a.show(r,l.css.open)};if("undefined"!=typeof s&&s.url){var A="undefined"!=typeof s.success?s.success:null;e.extend(s,{success:function(t,i,n){if(e.isFunction(A)){var s=A(t,i,n);"string"==typeof s&&(t=s)}"undefined"!=typeof options&&"undefined"!=typeof options.replaceContentSel?r.find(options.replaceContentSel).html(t):r.html(t),a.S(r).foundation("section","reflow"),a.S(r).children().foundation(),c()}}),l.on_ajax_error!==e.noop&&e.extend(s,{error:l.on_ajax_error}),e.ajax(s)}else c()}a.S(t).trigger("resize")},close:function(t){var t=t&&t.length?t:this.S(this.scope),i=this.S("["+this.attr_name()+"].open"),n=t.data(this.attr_name(!0)+"-init")||this.settings,s=this;if(i.length>0)if(t.removeAttr("tabindex","0").attr("aria-hidden","true"),this.locked=!0,this.key_up_off(t),t.trigger("close.fndtn.reveal"),(n.multiple_opened&&1===i.length||!n.multiple_opened||t.length>1)&&(s.toggle_bg(t,!1),s.to_front(t)),n.multiple_opened){var r=t.is(":not(.toback)");s.hide(t,n.css.close,n),r?o.pop():o=e.grep(o,function(e){var i=e[0]===t[0];return i&&s.to_front(t),!i}),o.length>0&&s.to_front(o[o.length-1])}else s.hide(i,n.css.close,n)},close_targets:function(){var e="."+this.settings.dismiss_modal_class;return this.settings.close_on_background_click?e+", ."+this.settings.bg_class:e},toggle_bg:function(t,i){0===this.S("."+this.settings.bg_class).length&&(this.settings.bg=e("<div />",{"class":this.settings.bg_class}).appendTo("body").hide());var s=this.settings.bg.filter(":visible").length>0;i!=s&&((i==n?s:!i)?this.hide(this.settings.bg):this.show(this.settings.bg))},show:function(i,n){if(n){var o=i.data(this.attr_name(!0)+"-init")||this.settings,r=o.root_element,a=this;if(0===i.parent(r).length){var l=i.wrap('<div style="display: none;" />').parent();i.on("closed.fndtn.reveal.wrapped",function(){i.detach().appendTo(l),i.unwrap().unbind("closed.fndtn.reveal.wrapped")}),i.detach().appendTo(r)}var d=s(o.animation);if(d.animate||(this.locked=!1),d.pop){n.top=e(t).scrollTop()-i.data("offset")+"px";var c={top:e(t).scrollTop()+i.data("css-top")+"px",opacity:1};return setTimeout(function(){return i.css(n).animate(c,o.animation_speed,"linear",function(){a.locked=!1,i.trigger("opened.fndtn.reveal")}).addClass("open")},o.animation_speed/2)}if(n.top=e(t).scrollTop()+i.data("css-top")+"px",d.fade){var c={opacity:1};return setTimeout(function(){return i.css(n).animate(c,o.animation_speed,"linear",function(){a.locked=!1,i.trigger("opened.fndtn.reveal")}).addClass("open")},o.animation_speed/2)}return i.css(n).show().css({opacity:1}).addClass("open").trigger("opened.fndtn.reveal")}var o=this.settings;return s(o.animation).fade?i.fadeIn(o.animation_speed/2):(this.locked=!1,i.show())},to_back:function(e){e.addClass("toback")},to_front:function(e){e.removeClass("toback")},hide:function(i,n){if(n){var o=i.data(this.attr_name(!0)+"-init"),r=this;o=o||this.settings;var a=s(o.animation);if(a.animate||(this.locked=!1),a.pop){var l={top:-e(t).scrollTop()-i.data("offset")+"px",opacity:0};return setTimeout(function(){return i.animate(l,o.animation_speed,"linear",function(){r.locked=!1,i.css(n).trigger("closed.fndtn.reveal")}).removeClass("open")},o.animation_speed/2)}if(a.fade){var l={opacity:0};return setTimeout(function(){return i.animate(l,o.animation_speed,"linear",function(){r.locked=!1,i.css(n).trigger("closed.fndtn.reveal")}).removeClass("open")},o.animation_speed/2)}return i.hide().css(n).removeClass("open").trigger("closed.fndtn.reveal")}var o=this.settings;return s(o.animation).fade?i.fadeOut(o.animation_speed/2):i.hide()},close_video:function(t){var i=e(".flex-video",t.target),n=e("iframe",i);n.length>0&&(n.attr("data-src",n[0].src),n.attr("src",n.attr("src")),i.hide())},open_video:function(t){var i=e(".flex-video",t.target),s=i.find("iframe");if(s.length>0){var o=s.attr("data-src");if("string"==typeof o)s[0].src=s.attr("data-src");else{var r=s[0].src;s[0].src=n,s[0].src=r}i.show()}},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},cache_offset:function(e){var t=e.show().height()+parseInt(e.css("top"),10)+e.scrollY;return e.hide(),t},off:function(){e(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,window,window.document),function(e,t,i,n){"use strict";Foundation.libs.slider={name:"slider",version:"5.5.3",settings:{start:0,end:100,step:1,precision:2,initial:null,display_selector:"",vertical:!1,trigger_input_change:!1,on_change:function(){}},cache:{},init:function(e,t,i){Foundation.inherit(this,"throttle"),this.bindings(t,i),this.reflow()},events:function(){var i=this;e(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider","["+i.attr_name()+"]:not(.disabled, [disabled]) .range-slider-handle",function(t){i.cache.active||(t.preventDefault(),i.set_active_slider(e(t.target)))}).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",function(n){if(i.cache.active)if(n.preventDefault(),e.data(i.cache.active[0],"settings").vertical){var s=0;n.pageY||(s=t.scrollY),i.calculate_position(i.cache.active,i.get_cursor_position(n,"y")+s)}else i.calculate_position(i.cache.active,i.get_cursor_position(n,"x"))}).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",function(n){if(!i.cache.active){var s="slider"===e(n.target).attr("role")?e(n.target):e(n.target).closest(".range-slider").find("[role='slider']");if(s.length&&!s.parent().hasClass("disabled")&&!s.parent().attr("disabled"))if(i.set_active_slider(s),e.data(i.cache.active[0],"settings").vertical){var o=0;n.pageY||(o=t.scrollY),i.calculate_position(i.cache.active,i.get_cursor_position(n,"y")+o)}else i.calculate_position(i.cache.active,i.get_cursor_position(n,"x"))}i.remove_active_slider()}).on("change.fndtn.slider",function(e){i.settings.on_change()}),i.S(t).on("resize.fndtn.slider",i.throttle(function(e){i.reflow()},300)),this.S("["+this.attr_name()+"]").each(function(){var t=e(this),n=t.children(".range-slider-handle")[0],s=i.initialize_settings(n);""!=s.display_selector&&e(s.display_selector).each(function(){e(this).attr("value")&&e(this).off("change").on("change",function(){t.foundation("slider","set_value",e(this).val())})})})},get_cursor_position:function(e,t){var i,n="page"+t.toUpperCase(),s="client"+t.toUpperCase();return"undefined"!=typeof e[n]?i=e[n]:"undefined"!=typeof e.originalEvent[s]?i=e.originalEvent[s]:e.originalEvent.touches&&e.originalEvent.touches[0]&&"undefined"!=typeof e.originalEvent.touches[0][s]?i=e.originalEvent.touches[0][s]:e.currentPoint&&"undefined"!=typeof e.currentPoint[t]&&(i=e.currentPoint[t]),i},set_active_slider:function(e){this.cache.active=e},remove_active_slider:function(){this.cache.active=null},calculate_position:function(t,i){var n=this,s=e.data(t[0],"settings"),o=(e.data(t[0],"handle_l"),e.data(t[0],"handle_o"),e.data(t[0],"bar_l")),r=e.data(t[0],"bar_o");requestAnimationFrame(function(){var e;e=Foundation.rtl&&!s.vertical?n.limit_to((r+o-i)/o,0,1):n.limit_to((i-r)/o,0,1),e=s.vertical?1-e:e;var a=n.normalized_value(e,s.start,s.end,s.step,s.precision);n.set_ui(t,a)})},set_ui:function(t,i){var n=e.data(t[0],"settings"),s=e.data(t[0],"handle_l"),o=e.data(t[0],"bar_l"),r=this.normalized_percentage(i,n.start,n.end),a=r*(o-s)-1,l=100*r,d=t.parent(),c=t.parent().children("input[type=hidden]");Foundation.rtl&&!n.vertical&&(a=-a),a=n.vertical?-a+o-s+1:a,this.set_translate(t,a,n.vertical),n.vertical?t.siblings(".range-slider-active-segment").css("height",l+"%"):t.siblings(".range-slider-active-segment").css("width",l+"%"),d.attr(this.attr_name(),i).trigger("change.fndtn.slider"),c.val(i),n.trigger_input_change&&c.trigger("change.fndtn.slider"),t[0].hasAttribute("aria-valuemin")||t.attr({"aria-valuemin":n.start,"aria-valuemax":n.end}),t.attr("aria-valuenow",i),""!=n.display_selector&&e(n.display_selector).each(function(){this.hasAttribute("value")?e(this).val(i):e(this).text(i)})},normalized_percentage:function(e,t,i){return Math.min(1,(e-t)/(i-t))},normalized_value:function(e,t,i,n,s){var o=i-t,r=e*o,a=(r-r%n)/n,l=r%n,d=l>=.5*n?n:0;return(a*n+d+t).toFixed(s)},set_translate:function(t,i,n){n?e(t).css("-webkit-transform","translateY("+i+"px)").css("-moz-transform","translateY("+i+"px)").css("-ms-transform","translateY("+i+"px)").css("-o-transform","translateY("+i+"px)").css("transform","translateY("+i+"px)"):e(t).css("-webkit-transform","translateX("+i+"px)").css("-moz-transform","translateX("+i+"px)").css("-ms-transform","translateX("+i+"px)").css("-o-transform","translateX("+i+"px)").css("transform","translateX("+i+"px)")},limit_to:function(e,t,i){return Math.min(Math.max(e,t),i)},initialize_settings:function(t){var i,n=e.extend({},this.settings,this.data_options(e(t).parent()));return null===n.precision&&(i=(""+n.step).match(/\.([\d]*)/),n.precision=i&&i[1]?i[1].length:0),n.vertical?(e.data(t,"bar_o",e(t).parent().offset().top),e.data(t,"bar_l",e(t).parent().outerHeight()),e.data(t,"handle_o",e(t).offset().top),e.data(t,"handle_l",e(t).outerHeight())):(e.data(t,"bar_o",e(t).parent().offset().left),e.data(t,"bar_l",e(t).parent().outerWidth()),e.data(t,"handle_o",e(t).offset().left),e.data(t,"handle_l",e(t).outerWidth())),e.data(t,"bar",e(t).parent()),e.data(t,"settings",n)},set_initial_position:function(t){var i=e.data(t.children(".range-slider-handle")[0],"settings"),n="number"!=typeof i.initial||isNaN(i.initial)?Math.floor(.5*(i.end-i.start)/i.step)*i.step+i.start:i.initial,s=t.children(".range-slider-handle");this.set_ui(s,n)},set_value:function(t){var i=this;e("["+i.attr_name()+"]",this.scope).each(function(){e(this).attr(i.attr_name(),t)}),e(this.scope).attr(i.attr_name())&&e(this.scope).attr(i.attr_name(),t),i.reflow()},reflow:function(){var t=this;t.S("["+this.attr_name()+"]").each(function(){var i=e(this).children(".range-slider-handle")[0],n=e(this).attr(t.attr_name());t.initialize_settings(i),n?t.set_ui(e(i),parseFloat(n)):t.set_initial_position(e(this))})}}}(jQuery,window,window.document),function(e,t,i,n){"use strict";Foundation.libs.tab={name:"tab",version:"5.5.3",settings:{active_class:"active",callback:function(){},deep_linking:!1,scroll_to_content:!0,is_hover:!1},default_tab_hashes:[],init:function(e,t,i){var n=this,s=this.S;s("["+this.attr_name()+"] > .active > a",this.scope).each(function(){n.default_tab_hashes.push(this.hash)}),this.bindings(t,i),this.handle_location_hash_change()},events:function(){var e=this,i=this.S,n=function(t,n){var s=i(n).closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init");if(!s.is_hover||Modernizr.touch){var o=t.keyCode||t.which;9!==o&&(t.preventDefault(),t.stopPropagation()),e.toggle_active_tab(i(n).parent())}};i(this.scope).off(".tab").on("keydown.fndtn.tab","["+this.attr_name()+"] > * > a",function(e){var t=e.keyCode||e.which;if(13===t||32===t){var i=this;n(e,i)}}).on("click.fndtn.tab","["+this.attr_name()+"] > * > a",function(e){var t=this;n(e,t)}).on("mouseenter.fndtn.tab","["+this.attr_name()+"] > * > a",function(t){var n=i(this).closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init");n.is_hover&&e.toggle_active_tab(i(this).parent())}),i(t).on("hashchange.fndtn.tab",function(t){t.preventDefault(),e.handle_location_hash_change()})},handle_location_hash_change:function(){var t=this,i=this.S;i("["+this.attr_name()+"]",this.scope).each(function(){var s=i(this).data(t.attr_name(!0)+"-init");if(s.deep_linking){var o;if(o=s.scroll_to_content?t.scope.location.hash:t.scope.location.hash.replace("fndtn-",""),""!=o){var r=i(o);if(r.hasClass("content")&&r.parent().hasClass("tabs-content"))t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href="+o+"]").parent());else{var a=r.closest(".content").attr("id");a!=n&&t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href=#"+a+"]").parent(),o)}}else for(var l=0;l<t.default_tab_hashes.length;l++)t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href="+t.default_tab_hashes[l]+"]").parent())}})},toggle_active_tab:function(s,o){var r=this,a=r.S,l=s.closest("["+this.attr_name()+"]"),d=s.find("a"),c=s.children("a").first(),A="#"+c.attr("href").split("#")[1],u=a(A),p=s.siblings(),h=l.data(this.attr_name(!0)+"-init"),f=function(t){var n,s=e(this),o=e(this).parents("li").prev().children('[role="tab"]'),r=e(this).parents("li").next().children('[role="tab"]');switch(t.keyCode){case 37:n=o;break;case 39:n=r;break;default:n=!1}n.length&&(s.attr({tabindex:"-1","aria-selected":null}),n.attr({tabindex:"0","aria-selected":!0}).focus()),e('[role="tabpanel"]').attr("aria-hidden","true"),e("#"+e(i.activeElement).attr("href").substring(1)).attr("aria-hidden",null)},g=function(e){var i=h.scroll_to_content?r.default_tab_hashes[0]:"fndtn-"+r.default_tab_hashes[0].replace("#","");(e!==i||t.location.hash)&&(t.location.hash=e)};c.data("tab-content")&&(A="#"+c.data("tab-content").split("#")[1],u=a(A)),h.deep_linking&&(h.scroll_to_content?(g(o||A),o==n||o==A?s.parent()[0].scrollIntoView():a(A)[0].scrollIntoView()):g(o!=n?"fndtn-"+o.replace("#",""):"fndtn-"+A.replace("#",""))),s.addClass(h.active_class).triggerHandler("opened"),d.attr({"aria-selected":"true",tabindex:0}),p.removeClass(h.active_class),p.find("a").attr({"aria-selected":"false"}),u.siblings().removeClass(h.active_class).attr({"aria-hidden":"true"}),u.addClass(h.active_class).attr("aria-hidden","false").removeAttr("tabindex"),h.callback(s),u.triggerHandler("toggled",[u]),l.triggerHandler("toggled",[s]),d.off("keydown").on("keydown",f)},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(e,t,i,n){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.5.3",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,hover_delay:200,fade_in_duration:150,fade_out_duration:150,show_on:"all",tip_template:function(e,t){return'<span data-selector="'+e+'" id="'+e+'" class="'+Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'" role="tooltip">'+t+'<span class="nub"></span></span>'}},cache:{},init:function(e,t,i){Foundation.inherit(this,"random_str"),this.bindings(t,i)},should_show:function(t,i){var n=e.extend({},this.settings,this.data_options(t));return"all"===n.show_on?!0:this.small()&&"small"===n.show_on?!0:this.medium()&&"medium"===n.show_on?!0:this.large()&&"large"===n.show_on?!0:!1},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},events:function(t){function i(e,t,i){e.timer||(i?(e.timer=null,s.showTip(t)):e.timer=setTimeout(function(){e.timer=null,s.showTip(t)}.bind(e),s.settings.hover_delay))}function n(e,t){e.timer&&(clearTimeout(e.timer),e.timer=null),s.hide(t)}var s=this,o=s.S;s.create(this.S(t)),e(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"]",function(t){var r=o(this),a=e.extend({},s.settings,s.data_options(r)),l=!1;if(Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&o(t.target).is("a"))return!1;if(/mouse/i.test(t.type)&&s.ie_touch(t))return!1;if(r.hasClass("open"))Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&t.preventDefault(),s.hide(r);else{if(a.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type))return;if(!a.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&(t.preventDefault(),o(a.tooltip_class+".open").hide(),l=!0,e(".open["+s.attr_name()+"]").length>0)){var d=o(e(".open["+s.attr_name()+"]")[0]);s.hide(d)}/enter|over/i.test(t.type)?i(this,r):"mouseout"===t.type||"mouseleave"===t.type?n(this,r):i(this,r,!0)}}).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"].open",function(t){return/mouse/i.test(t.type)&&s.ie_touch(t)?!1:void(("touch"!=e(this).data("tooltip-open-event-type")||"mouseleave"!=t.type)&&("mouse"==e(this).data("tooltip-open-event-type")&&/MSPointerDown|touchstart/i.test(t.type)?s.convert_to_touch(e(this)):n(this,e(this))))}).on("DOMNodeRemoved DOMAttrModified","["+this.attr_name()+"]:not(a)",function(e){n(this,o(this))})},ie_touch:function(e){return!1},showTip:function(e){var t=this.getTip(e);return this.should_show(e,t)?this.show(e):void 0},getTip:function(t){var i=this.selector(t),n=e.extend({},this.settings,this.data_options(t)),s=null;return i&&(s=this.S('span[data-selector="'+i+'"]'+n.tooltip_class)),"object"==typeof s?s:!1},selector:function(e){var t=e.attr(this.attr_name())||e.attr("data-selector");return"string"!=typeof t&&(t=this.random_str(6),e.attr("data-selector",t).attr("aria-describedby",t)),t},create:function(i){var n=this,s=e.extend({},this.settings,this.data_options(i)),o=this.settings.tip_template;"string"==typeof s.tip_template&&t.hasOwnProperty(s.tip_template)&&(o=t[s.tip_template]);var r=e(o(this.selector(i),e("<div></div>").html(i.attr("title")).html())),a=this.inheritable_classes(i);r.addClass(a).appendTo(s.append_to),Modernizr.touch&&(r.append('<span class="tap-to-close">'+s.touch_close_text+"</span>"),r.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",function(e){n.hide(i)})),i.removeAttr("title").attr("title","")},reposition:function(t,i,n){var s,o,r,a,l;i.css("visibility","hidden").show(),s=t.data("width"),o=i.children(".nub"),r=o.outerHeight(),a=o.outerWidth(),this.small()?i.css({width:"100%"}):i.css({width:s?s:"auto"}),l=function(e,t,i,n,s,o){return e.css({top:t?t:"auto",bottom:n?n:"auto",left:s?s:"auto",right:i?i:"auto"}).end()};var d=t.offset().top,c=t.offset().left,A=t.outerHeight();if(l(i,d+A+10,"auto","auto",c),this.small())l(i,d+A+10,"auto","auto",12.5,e(this.scope).width()),i.addClass("tip-override"),l(o,-r,"auto","auto",c);else{Foundation.rtl&&(o.addClass("rtl"),c=c+t.outerWidth()-i.outerWidth()),l(i,d+A+10,"auto","auto",c),o.attr("style")&&o.removeAttr("style"),i.removeClass("tip-override");var u=i.outerHeight();n&&n.indexOf("tip-top")>-1?(Foundation.rtl&&o.addClass("rtl"),l(i,d-u,"auto","auto",c).removeClass("tip-override")):n&&n.indexOf("tip-left")>-1?(l(i,d+A/2-u/2,"auto","auto",c-i.outerWidth()-r).removeClass("tip-override"),o.removeClass("rtl")):n&&n.indexOf("tip-right")>-1&&(l(i,d+A/2-u/2,"auto","auto",c+t.outerWidth()+r).removeClass("tip-override"),o.removeClass("rtl"))}i.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},inheritable_classes:function(t){var i=e.extend({},this.settings,this.data_options(t)),n=["tip-top","tip-left","tip-bottom","tip-right","radius","round"].concat(i.additional_inheritable_classes),s=t.attr("class"),o=s?e.map(s.split(" "),function(t,i){return-1!==e.inArray(t,n)?t:void 0}).join(" "):"";return e.trim(o)},convert_to_touch:function(t){var i=this,n=i.getTip(t),s=e.extend({},i.settings,i.data_options(t));0===n.find(".tap-to-close").length&&(n.append('<span class="tap-to-close">'+s.touch_close_text+"</span>"),n.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",function(e){i.hide(t)})),t.data("tooltip-open-event-type","touch")},show:function(e){var t=this.getTip(e);"touch"==e.data("tooltip-open-event-type")&&this.convert_to_touch(e),this.reposition(e,t,e.attr("class")),e.addClass("open"),t.fadeIn(this.settings.fade_in_duration)},hide:function(e){var t=this.getTip(e);t.fadeOut(this.settings.fade_out_duration,function(){t.find(".tap-to-close").remove(),t.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),e.removeClass("open")})},off:function(){var t=this;this.S(this.scope).off(".fndtn.tooltip"),this.S(this.settings.tooltip_class).each(function(i){e("["+t.attr_name()+"]").eq(i).attr("title",e(this).text());
}).remove()},reflow:function(){}}}(jQuery,window,window.document),function(e,t,i,n){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.5.3",settings:{index:0,start_offset:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",mobile_show_parent_link:!0,is_hover:!0,scrolltop:!0,sticky_on:"all",dropdown_autoclose:!0},init:function(t,i,n){Foundation.inherit(this,"add_custom_rule register_media throttle");var s=this;s.register_media("topbar","foundation-mq-topbar"),this.bindings(i,n),s.S("["+this.attr_name()+"]",this.scope).each(function(){var t=e(this),i=t.data(s.attr_name(!0)+"-init");s.S("section, .top-bar-section",this);t.data("index",0);var n=t.parent();n.hasClass("fixed")||s.is_sticky(t,n,i)?(s.settings.sticky_class=i.sticky_class,s.settings.sticky_topbar=t,t.data("height",n.outerHeight()),t.data("stickyoffset",n.offset().top)):t.data("height",t.outerHeight()),i.assembled||s.assemble(t),i.is_hover?s.S(".has-dropdown",t).addClass("not-click"):s.S(".has-dropdown",t).removeClass("not-click"),s.add_custom_rule(".f-topbar-fixed { padding-top: "+t.data("height")+"px }"),n.hasClass("fixed")&&s.S("body").addClass("f-topbar-fixed")})},is_sticky:function(e,t,i){var n=t.hasClass(i.sticky_class),s=matchMedia(Foundation.media_queries.small).matches,o=matchMedia(Foundation.media_queries.medium).matches,r=matchMedia(Foundation.media_queries.large).matches;return n&&"all"===i.sticky_on?!0:n&&this.small()&&-1!==i.sticky_on.indexOf("small")&&s&&!o&&!r?!0:n&&this.medium()&&-1!==i.sticky_on.indexOf("medium")&&s&&o&&!r?!0:n&&this.large()&&-1!==i.sticky_on.indexOf("large")&&s&&o&&r?!0:!1},toggle:function(i){var n,s=this;n=i?s.S(i).closest("["+this.attr_name()+"]"):s.S("["+this.attr_name()+"]");var o=n.data(this.attr_name(!0)+"-init"),r=s.S("section, .top-bar-section",n);s.breakpoint()&&(s.rtl?(r.css({right:"0%"}),e(">.name",r).css({right:"100%"})):(r.css({left:"0%"}),e(">.name",r).css({left:"100%"})),s.S("li.moved",r).removeClass("moved"),n.data("index",0),n.toggleClass("expanded").css("height","")),o.scrolltop?n.hasClass("expanded")?n.parent().hasClass("fixed")&&(o.scrolltop?(n.parent().removeClass("fixed"),n.addClass("fixed"),s.S("body").removeClass("f-topbar-fixed"),t.scrollTo(0,0)):n.parent().removeClass("expanded")):n.hasClass("fixed")&&(n.parent().addClass("fixed"),n.removeClass("fixed"),s.S("body").addClass("f-topbar-fixed")):(s.is_sticky(n,n.parent(),o)&&n.parent().addClass("fixed"),n.parent().hasClass("fixed")&&(n.hasClass("expanded")?(n.addClass("fixed"),n.parent().addClass("expanded"),s.S("body").addClass("f-topbar-fixed")):(n.removeClass("fixed"),n.parent().removeClass("expanded"),s.update_sticky_positioning())))},timer:null,events:function(i){var n=this,s=this.S;s(this.scope).off(".topbar").on("click.fndtn.topbar","["+this.attr_name()+"] .toggle-topbar",function(e){e.preventDefault(),n.toggle(this)}).on("click.fndtn.topbar contextmenu.fndtn.topbar",'.top-bar .top-bar-section li a[href^="#"],['+this.attr_name()+'] .top-bar-section li a[href^="#"]',function(t){var i=e(this).closest("li"),s=i.closest("["+n.attr_name()+"]"),o=s.data(n.attr_name(!0)+"-init");if(o.dropdown_autoclose&&o.is_hover){var r=e(this).closest(".hover");r.removeClass("hover")}!n.breakpoint()||i.hasClass("back")||i.hasClass("has-dropdown")||n.toggle()}).on("click.fndtn.topbar","["+this.attr_name()+"] li.has-dropdown",function(t){var i=s(this),o=s(t.target),r=i.closest("["+n.attr_name()+"]"),a=r.data(n.attr_name(!0)+"-init");return o.data("revealId")?void n.toggle():void(n.breakpoint()||(!a.is_hover||Modernizr.touch)&&(t.stopImmediatePropagation(),i.hasClass("hover")?(i.removeClass("hover").find("li").removeClass("hover"),i.parents("li.hover").removeClass("hover")):(i.addClass("hover"),e(i).siblings().removeClass("hover"),"A"===o[0].nodeName&&o.parent().hasClass("has-dropdown")&&t.preventDefault())))}).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown>a",function(e){if(n.breakpoint()){e.preventDefault();var t=s(this),i=t.closest("["+n.attr_name()+"]"),o=i.find("section, .top-bar-section"),r=(t.next(".dropdown").outerHeight(),t.closest("li"));i.data("index",i.data("index")+1),r.addClass("moved"),n.rtl?(o.css({right:-(100*i.data("index"))+"%"}),o.find(">.name").css({right:100*i.data("index")+"%"})):(o.css({left:-(100*i.data("index"))+"%"}),o.find(">.name").css({left:100*i.data("index")+"%"})),i.css("height",t.siblings("ul").outerHeight(!0)+i.data("height"))}}),s(t).off(".topbar").on("resize.fndtn.topbar",n.throttle(function(){n.resize.call(n)},50)).trigger("resize.fndtn.topbar").load(function(){s(this).trigger("resize.fndtn.topbar")}),s("body").off(".topbar").on("click.fndtn.topbar",function(e){var t=s(e.target).closest("li").closest("li.hover");t.length>0||s("["+n.attr_name()+"] li.hover").removeClass("hover")}),s(this.scope).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown .back",function(e){e.preventDefault();var t=s(this),i=t.closest("["+n.attr_name()+"]"),o=i.find("section, .top-bar-section"),r=(i.data(n.attr_name(!0)+"-init"),t.closest("li.moved")),a=r.parent();i.data("index",i.data("index")-1),n.rtl?(o.css({right:-(100*i.data("index"))+"%"}),o.find(">.name").css({right:100*i.data("index")+"%"})):(o.css({left:-(100*i.data("index"))+"%"}),o.find(">.name").css({left:100*i.data("index")+"%"})),0===i.data("index")?i.css("height",""):i.css("height",a.outerHeight(!0)+i.data("height")),setTimeout(function(){r.removeClass("moved")},300)}),s(this.scope).find(".dropdown a").focus(function(){e(this).parents(".has-dropdown").addClass("hover")}).blur(function(){e(this).parents(".has-dropdown").removeClass("hover")})},resize:function(){var e=this;e.S("["+this.attr_name()+"]").each(function(){var t,n=e.S(this),s=n.data(e.attr_name(!0)+"-init"),o=n.parent("."+e.settings.sticky_class);if(!e.breakpoint()){var r=n.hasClass("expanded");n.css("height","").removeClass("expanded").find("li").removeClass("hover"),r&&e.toggle(n)}e.is_sticky(n,o,s)&&(o.hasClass("fixed")?(o.removeClass("fixed"),t=o.offset().top,e.S(i.body).hasClass("f-topbar-fixed")&&(t-=n.data("height")),n.data("stickyoffset",t),o.addClass("fixed")):(t=o.offset().top,n.data("stickyoffset",t)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},small:function(){return matchMedia(Foundation.media_queries.small).matches},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},assemble:function(t){var i=this,n=t.data(this.attr_name(!0)+"-init"),s=i.S("section, .top-bar-section",t);s.detach(),i.S(".has-dropdown>a",s).each(function(){var t,s=i.S(this),o=s.siblings(".dropdown"),r=s.attr("href");o.find(".title.back").length||(t=e(1==n.mobile_show_parent_link&&r?'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="'+r+'">'+s.html()+"</a></li>":'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'),1==n.custom_back_text?e("h5>a",t).html(n.back_text):e("h5>a",t).html("&laquo; "+s.html()),o.prepend(t))}),s.appendTo(t),this.sticky(),this.assembled(t)},assembled:function(t){t.data(this.attr_name(!0),e.extend({},t.data(this.attr_name(!0)),{assembled:!0}))},height:function(t){var i=0,n=this;return e("> li",t).each(function(){i+=n.S(this).outerHeight(!0)}),i},sticky:function(){var e=this;this.S(t).on("scroll",function(){e.update_sticky_positioning()})},update_sticky_positioning:function(){var e="."+this.settings.sticky_class,i=this.S(t),n=this;if(n.settings.sticky_topbar&&n.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(),this.settings)){var s=this.settings.sticky_topbar.data("stickyoffset")+this.settings.start_offset;n.S(e).hasClass("expanded")||(i.scrollTop()>s?n.S(e).hasClass("fixed")||(n.S(e).addClass("fixed"),n.S("body").addClass("f-topbar-fixed")):i.scrollTop()<=s&&n.S(e).hasClass("fixed")&&(n.S(e).removeClass("fixed"),n.S("body").removeClass("f-topbar-fixed")))}},off:function(){this.S(this.scope).off(".fndtn.topbar"),this.S(t).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,window,window.document),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var t=window.Slick||{};t=function(){function t(t,n){var s,o=this;o.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:e(t),appendDots:e(t),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(t+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!1,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},o.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},e.extend(o,o.initials),o.activeBreakpoint=null,o.animType=null,o.animProp=null,o.breakpoints=[],o.breakpointSettings=[],o.cssTransitions=!1,o.hidden="hidden",o.paused=!1,o.positionProp=null,o.respondTo=null,o.rowCount=1,o.shouldClick=!0,o.$slider=e(t),o.$slidesCache=null,o.transformType=null,o.transitionType=null,o.visibilityChange="visibilitychange",o.windowWidth=0,o.windowTimer=null,s=e(t).data("slick")||{},o.options=e.extend({},o.defaults,s,n),o.currentSlide=o.options.initialSlide,o.originalSettings=o.options,"undefined"!=typeof document.mozHidden?(o.hidden="mozHidden",o.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(o.hidden="webkitHidden",o.visibilityChange="webkitvisibilitychange"),o.autoPlay=e.proxy(o.autoPlay,o),o.autoPlayClear=e.proxy(o.autoPlayClear,o),o.changeSlide=e.proxy(o.changeSlide,o),o.clickHandler=e.proxy(o.clickHandler,o),o.selectHandler=e.proxy(o.selectHandler,o),o.setPosition=e.proxy(o.setPosition,o),o.swipeHandler=e.proxy(o.swipeHandler,o),o.dragHandler=e.proxy(o.dragHandler,o),o.keyHandler=e.proxy(o.keyHandler,o),o.autoPlayIterator=e.proxy(o.autoPlayIterator,o),o.instanceUid=i++,o.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,o.registerBreakpoints(),o.init(!0),o.checkResponsive(!0)}var i=0;return t}(),t.prototype.addSlide=t.prototype.slickAdd=function(t,i,n){var s=this;if("boolean"==typeof i)n=i,i=null;else if(0>i||i>=s.slideCount)return!1;s.unload(),"number"==typeof i?0===i&&0===s.$slides.length?e(t).appendTo(s.$slideTrack):n?e(t).insertBefore(s.$slides.eq(i)):e(t).insertAfter(s.$slides.eq(i)):n===!0?e(t).prependTo(s.$slideTrack):e(t).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(t,i){e(i).attr("data-slick-index",t)}),s.$slidesCache=s.$slides,s.reinit()},t.prototype.animateHeight=function(){var e=this;if(1===e.options.slidesToShow&&e.options.adaptiveHeight===!0&&e.options.vertical===!1){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({height:t},e.options.speed)}},t.prototype.animateSlide=function(t,i){var n={},s=this;s.animateHeight(),s.options.rtl===!0&&s.options.vertical===!1&&(t=-t),s.transformsEnabled===!1?s.options.vertical===!1?s.$slideTrack.animate({left:t},s.options.speed,s.options.easing,i):s.$slideTrack.animate({top:t},s.options.speed,s.options.easing,i):s.cssTransitions===!1?(s.options.rtl===!0&&(s.currentLeft=-s.currentLeft),e({animStart:s.currentLeft}).animate({animStart:t},{duration:s.options.speed,easing:s.options.easing,step:function(e){e=Math.ceil(e),s.options.vertical===!1?(n[s.animType]="translate("+e+"px, 0px)",s.$slideTrack.css(n)):(n[s.animType]="translate(0px,"+e+"px)",s.$slideTrack.css(n))},complete:function(){i&&i.call()}})):(s.applyTransition(),t=Math.ceil(t),s.options.vertical===!1?n[s.animType]="translate3d("+t+"px, 0px, 0px)":n[s.animType]="translate3d(0px,"+t+"px, 0px)",s.$slideTrack.css(n),i&&setTimeout(function(){s.disableTransition(),i.call()},s.options.speed))},t.prototype.asNavFor=function(t){var i=this,n=i.options.asNavFor;n&&null!==n&&(n=e(n).not(i.$slider)),null!==n&&"object"==typeof n&&n.each(function(){var i=e(this).slick("getSlick");i.unslicked||i.slideHandler(t,!0)})},t.prototype.applyTransition=function(e){var t=this,i={};t.options.fade===!1?i[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:i[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,t.options.fade===!1?t.$slideTrack.css(i):t.$slides.eq(e).css(i)},t.prototype.autoPlay=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer),e.slideCount>e.options.slidesToShow&&e.paused!==!0&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},t.prototype.autoPlayClear=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer)},t.prototype.autoPlayIterator=function(){var e=this;e.options.infinite===!1?1===e.direction?(e.currentSlide+1===e.slideCount-1&&(e.direction=0),e.slideHandler(e.currentSlide+e.options.slidesToScroll)):(e.currentSlide-1===0&&(e.direction=1),e.slideHandler(e.currentSlide-e.options.slidesToScroll)):e.slideHandler(e.currentSlide+e.options.slidesToScroll)},t.prototype.buildArrows=function(){var t=this;t.options.arrows===!0&&(t.$prevArrow=e(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=e(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),t.options.infinite!==!0&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},t.prototype.buildDots=function(){var t,i,n=this;if(n.options.dots===!0&&n.slideCount>n.options.slidesToShow){for(i='<ul class="'+n.options.dotsClass+'">',t=0;t<=n.getDotCount();t+=1)i+="<li>"+n.options.customPaging.call(this,n,t)+"</li>";i+="</ul>",n.$dots=e(i).appendTo(n.options.appendDots),n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},t.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each(function(t,i){e(i).attr("data-slick-index",t).data("originalStyling",e(i).attr("style")||"")}),t.$slider.addClass("slick-slider"),t.$slideTrack=0===t.slideCount?e('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),(t.options.centerMode===!0||t.options.swipeToSlide===!0)&&(t.options.slidesToScroll=1),e("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.options.draggable===!0&&t.$list.addClass("draggable")},t.prototype.buildRows=function(){var e,t,i,n,s,o,r,a=this;if(n=document.createDocumentFragment(),o=a.$slider.children(),a.options.rows>1){for(r=a.options.slidesPerRow*a.options.rows,s=Math.ceil(o.length/r),e=0;s>e;e++){var l=document.createElement("div");for(t=0;t<a.options.rows;t++){var d=document.createElement("div");for(i=0;i<a.options.slidesPerRow;i++){var c=e*r+(t*a.options.slidesPerRow+i);o.get(c)&&d.appendChild(o.get(c))}l.appendChild(d)}n.appendChild(l)}a.$slider.html(n),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},t.prototype.checkResponsive=function(t,i){var n,s,o,r=this,a=!1,l=r.$slider.width(),d=window.innerWidth||e(window).width();if("window"===r.respondTo?o=d:"slider"===r.respondTo?o=l:"min"===r.respondTo&&(o=Math.min(d,l)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(n in r.breakpoints)r.breakpoints.hasOwnProperty(n)&&(r.originalSettings.mobileFirst===!1?o<r.breakpoints[n]&&(s=r.breakpoints[n]):o>r.breakpoints[n]&&(s=r.breakpoints[n]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||i)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=e.extend({},r.originalSettings,r.breakpointSettings[s]),t===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(t)),a=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=e.extend({},r.originalSettings,r.breakpointSettings[s]),t===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(t)),a=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,t===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(t),a=s),t||a===!1||r.$slider.trigger("breakpoint",[r,a])}},t.prototype.changeSlide=function(t,i){var n,s,o,r=this,a=e(t.target);switch(a.is("a")&&t.preventDefault(),a.is("li")||(a=a.closest("li")),o=r.slideCount%r.options.slidesToScroll!==0,n=o?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,t.data.message){case"previous":s=0===n?r.options.slidesToScroll:r.options.slidesToShow-n,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,i);break;case"next":s=0===n?r.options.slidesToScroll:n,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,i);break;case"index":var l=0===t.data.index?0:t.data.index||a.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(l),!1,i),a.children().trigger("focus");break;default:return}},t.prototype.checkNavigable=function(e){var t,i,n=this;if(t=n.getNavigableIndexes(),i=0,e>t[t.length-1])e=t[t.length-1];else for(var s in t){if(e<t[s]){e=i;break}i=t[s]}return e},t.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&null!==t.$dots&&(e("li",t.$dots).off("click.slick",t.changeSlide),t.options.pauseOnDotsHover===!0&&t.options.autoplay===!0&&e("li",t.$dots).off("mouseenter.slick",e.proxy(t.setPaused,t,!0)).off("mouseleave.slick",e.proxy(t.setPaused,t,!1))),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide)),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),e(document).off(t.visibilityChange,t.visibility),t.$list.off("mouseenter.slick",e.proxy(t.setPaused,t,!0)),t.$list.off("mouseleave.slick",e.proxy(t.setPaused,t,!1)),t.options.accessibility===!0&&t.$list.off("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().off("click.slick",t.selectHandler),e(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),e(window).off("resize.slick.slick-"+t.instanceUid,t.resize),e("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),e(window).off("load.slick.slick-"+t.instanceUid,t.setPosition),e(document).off("ready.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.cleanUpRows=function(){var e,t=this;t.options.rows>1&&(e=t.$slides.children().children(),e.removeAttr("style"),t.$slider.html(e))},t.prototype.clickHandler=function(e){var t=this;t.shouldClick===!1&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},t.prototype.destroy=function(t){var i=this;i.autoPlayClear(),i.touchObject={},i.cleanUpEvents(),e(".slick-cloned",i.$slider).detach(),i.$dots&&i.$dots.remove(),i.$prevArrow&&i.$prevArrow.length&&(i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.prevArrow)&&i.$prevArrow.remove()),i.$nextArrow&&i.$nextArrow.length&&(i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.nextArrow)&&i.$nextArrow.remove()),i.$slides&&(i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){e(this).attr("style",e(this).data("originalStyling"))}),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.detach(),i.$list.detach(),i.$slider.append(i.$slides)),i.cleanUpRows(),i.$slider.removeClass("slick-slider"),i.$slider.removeClass("slick-initialized"),i.unslicked=!0,t||i.$slider.trigger("destroy",[i])},t.prototype.disableTransition=function(e){var t=this,i={};i[t.transitionType]="",t.options.fade===!1?t.$slideTrack.css(i):t.$slides.eq(e).css(i)},t.prototype.fadeSlide=function(e,t){var i=this;i.cssTransitions===!1?(i.$slides.eq(e).css({zIndex:i.options.zIndex}),i.$slides.eq(e).animate({opacity:1},i.options.speed,i.options.easing,t)):(i.applyTransition(e),i.$slides.eq(e).css({opacity:1,zIndex:i.options.zIndex}),t&&setTimeout(function(){i.disableTransition(e),t.call()},i.options.speed))},t.prototype.fadeSlideOut=function(e){var t=this;t.cssTransitions===!1?t.$slides.eq(e).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(e),t.$slides.eq(e).css({opacity:0,zIndex:t.options.zIndex-2}))},t.prototype.filterSlides=t.prototype.slickFilter=function(e){var t=this;null!==e&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(e).appendTo(t.$slideTrack),t.reinit())},t.prototype.getCurrent=t.prototype.slickCurrentSlide=function(){var e=this;return e.currentSlide},t.prototype.getDotCount=function(){var e=this,t=0,i=0,n=0;if(e.options.infinite===!0)for(;t<e.slideCount;)++n,t=i+e.options.slidesToScroll,i+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else if(e.options.centerMode===!0)n=e.slideCount;else for(;t<e.slideCount;)++n,t=i+e.options.slidesToScroll,i+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return n-1},t.prototype.getLeft=function(e){var t,i,n,s=this,o=0;return s.slideOffset=0,i=s.$slides.first().outerHeight(!0),s.options.infinite===!0?(s.slideCount>s.options.slidesToShow&&(s.slideOffset=s.slideWidth*s.options.slidesToShow*-1,o=i*s.options.slidesToShow*-1),s.slideCount%s.options.slidesToScroll!==0&&e+s.options.slidesToScroll>s.slideCount&&s.slideCount>s.options.slidesToShow&&(e>s.slideCount?(s.slideOffset=(s.options.slidesToShow-(e-s.slideCount))*s.slideWidth*-1,o=(s.options.slidesToShow-(e-s.slideCount))*i*-1):(s.slideOffset=s.slideCount%s.options.slidesToScroll*s.slideWidth*-1,o=s.slideCount%s.options.slidesToScroll*i*-1))):e+s.options.slidesToShow>s.slideCount&&(s.slideOffset=(e+s.options.slidesToShow-s.slideCount)*s.slideWidth,o=(e+s.options.slidesToShow-s.slideCount)*i),s.slideCount<=s.options.slidesToShow&&(s.slideOffset=0,o=0),s.options.centerMode===!0&&s.options.infinite===!0?s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)-s.slideWidth:s.options.centerMode===!0&&(s.slideOffset=0,s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)),t=s.options.vertical===!1?e*s.slideWidth*-1+s.slideOffset:e*i*-1+o,s.options.variableWidth===!0&&(n=s.slideCount<=s.options.slidesToShow||s.options.infinite===!1?s.$slideTrack.children(".slick-slide").eq(e):s.$slideTrack.children(".slick-slide").eq(e+s.options.slidesToShow),t=s.options.rtl===!0?n[0]?-1*(s.$slideTrack.width()-n[0].offsetLeft-n.width()):0:n[0]?-1*n[0].offsetLeft:0,s.options.centerMode===!0&&(n=s.slideCount<=s.options.slidesToShow||s.options.infinite===!1?s.$slideTrack.children(".slick-slide").eq(e):s.$slideTrack.children(".slick-slide").eq(e+s.options.slidesToShow+1),t=s.options.rtl===!0?n[0]?-1*(s.$slideTrack.width()-n[0].offsetLeft-n.width()):0:n[0]?-1*n[0].offsetLeft:0,t+=(s.$list.width()-n.outerWidth())/2)),t},t.prototype.getOption=t.prototype.slickGetOption=function(e){var t=this;return t.options[e]},t.prototype.getNavigableIndexes=function(){var e,t=this,i=0,n=0,s=[];for(t.options.infinite===!1?e=t.slideCount:(i=-1*t.options.slidesToScroll,n=-1*t.options.slidesToScroll,e=2*t.slideCount);e>i;)s.push(i),i=n+t.options.slidesToScroll,n+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return s},t.prototype.getSlick=function(){return this},t.prototype.getSlideCount=function(){var t,i,n,s=this;return n=s.options.centerMode===!0?s.slideWidth*Math.floor(s.options.slidesToShow/2):0,s.options.swipeToSlide===!0?(s.$slideTrack.find(".slick-slide").each(function(t,o){return o.offsetLeft-n+e(o).outerWidth()/2>-1*s.swipeLeft?(i=o,!1):void 0}),t=Math.abs(e(i).attr("data-slick-index")-s.currentSlide)||1):s.options.slidesToScroll},t.prototype.goTo=t.prototype.slickGoTo=function(e,t){var i=this;i.changeSlide({data:{message:"index",index:parseInt(e)}},t)},t.prototype.init=function(t){var i=this;e(i.$slider).hasClass("slick-initialized")||(e(i.$slider).addClass("slick-initialized"),i.buildRows(),i.buildOut(),i.setProps(),i.startLoad(),i.loadSlider(),i.initializeEvents(),i.updateArrows(),i.updateDots()),t&&i.$slider.trigger("init",[i]),i.options.accessibility===!0&&i.initADA()},t.prototype.initArrowEvents=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.on("click.slick",{message:"next"},e.changeSlide))},t.prototype.initDotEvents=function(){var t=this;t.options.dots===!0&&t.slideCount>t.options.slidesToShow&&e("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),t.options.dots===!0&&t.options.pauseOnDotsHover===!0&&t.options.autoplay===!0&&e("li",t.$dots).on("mouseenter.slick",e.proxy(t.setPaused,t,!0)).on("mouseleave.slick",e.proxy(t.setPaused,t,!1))},t.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),e(document).on(t.visibilityChange,e.proxy(t.visibility,t)),t.$list.on("mouseenter.slick",e.proxy(t.setPaused,t,!0)),t.$list.on("mouseleave.slick",e.proxy(t.setPaused,t,!1)),t.options.accessibility===!0&&t.$list.on("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),e(window).on("orientationchange.slick.slick-"+t.instanceUid,e.proxy(t.orientationChange,t)),e(window).on("resize.slick.slick-"+t.instanceUid,e.proxy(t.resize,t)),e("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),e(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),e(document).on("ready.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.initUI=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&e.$dots.show(),e.options.autoplay===!0&&e.autoPlay()},t.prototype.keyHandler=function(e){var t=this;e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&t.options.accessibility===!0?t.changeSlide({data:{message:"previous"}}):39===e.keyCode&&t.options.accessibility===!0&&t.changeSlide({data:{message:"next"}}))},t.prototype.lazyLoad=function(){function t(t){e("img[data-lazy]",t).each(function(){var t=e(this),i=e(this).attr("data-lazy"),n=document.createElement("img");n.onload=function(){t.animate({opacity:0},100,function(){t.attr("src",i).animate({opacity:1},200,function(){t.removeAttr("data-lazy").removeClass("slick-loading")})})},n.src=i})}var i,n,s,o,r=this;r.options.centerMode===!0?r.options.infinite===!0?(s=r.currentSlide+(r.options.slidesToShow/2+1),o=s+r.options.slidesToShow+2):(s=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),o=2+(r.options.slidesToShow/2+1)+r.currentSlide):(s=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,o=s+r.options.slidesToShow,r.options.fade===!0&&(s>0&&s--,o<=r.slideCount&&o++)),i=r.$slider.find(".slick-slide").slice(s,o),t(i),r.slideCount<=r.options.slidesToShow?(n=r.$slider.find(".slick-slide"),t(n)):r.currentSlide>=r.slideCount-r.options.slidesToShow?(n=r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow),t(n)):0===r.currentSlide&&(n=r.$slider.find(".slick-cloned").slice(-1*r.options.slidesToShow),t(n))},t.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI(),"progressive"===e.options.lazyLoad&&e.progressiveLazyLoad()},t.prototype.next=t.prototype.slickNext=function(){var e=this;e.changeSlide({data:{message:"next"}})},t.prototype.orientationChange=function(){var e=this;e.checkResponsive(),e.setPosition()},t.prototype.pause=t.prototype.slickPause=function(){var e=this;e.autoPlayClear(),e.paused=!0},t.prototype.play=t.prototype.slickPlay=function(){var e=this;e.paused=!1,e.autoPlay()},t.prototype.postSlide=function(e){var t=this;t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.setPosition(),t.swipeLeft=null,t.options.autoplay===!0&&t.paused===!1&&t.autoPlay(),t.options.accessibility===!0&&t.initADA()},t.prototype.prev=t.prototype.slickPrev=function(){var e=this;e.changeSlide({data:{message:"previous"}})},t.prototype.preventDefault=function(e){e.preventDefault()},t.prototype.progressiveLazyLoad=function(){var t,i,n=this;t=e("img[data-lazy]",n.$slider).length,t>0&&(i=e("img[data-lazy]",n.$slider).first(),i.attr("src",null),i.attr("src",i.attr("data-lazy")).removeClass("slick-loading").load(function(){i.removeAttr("data-lazy"),n.progressiveLazyLoad(),n.options.adaptiveHeight===!0&&n.setPosition()}).error(function(){i.removeAttr("data-lazy"),n.progressiveLazyLoad()}))},t.prototype.refresh=function(t){var i,n,s=this;n=s.slideCount-s.options.slidesToShow,s.options.infinite||(s.slideCount<=s.options.slidesToShow?s.currentSlide=0:s.currentSlide>n&&(s.currentSlide=n)),i=s.currentSlide,s.destroy(!0),e.extend(s,s.initials,{currentSlide:i}),s.init(),t||s.changeSlide({data:{message:"index",index:i}},!1)},t.prototype.registerBreakpoints=function(){var t,i,n,s=this,o=s.options.responsive||null;if("array"===e.type(o)&&o.length){s.respondTo=s.options.respondTo||"window";for(t in o)if(n=s.breakpoints.length-1,i=o[t].breakpoint,o.hasOwnProperty(t)){for(;n>=0;)s.breakpoints[n]&&s.breakpoints[n]===i&&s.breakpoints.splice(n,1),n--;s.breakpoints.push(i),s.breakpointSettings[i]=o[t].settings}s.breakpoints.sort(function(e,t){return s.options.mobileFirst?e-t:t-e})}},t.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&0!==t.currentSlide&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.checkResponsive(!1,!0),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses(0),t.setPosition(),t.$slider.trigger("reInit",[t]),t.options.autoplay===!0&&t.focusHandler()},t.prototype.resize=function(){var t=this;e(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout(function(){t.windowWidth=e(window).width(),t.checkResponsive(),t.unslicked||t.setPosition();
},50))},t.prototype.removeSlide=t.prototype.slickRemove=function(e,t,i){var n=this;return"boolean"==typeof e?(t=e,e=t===!0?0:n.slideCount-1):e=t===!0?--e:e,n.slideCount<1||0>e||e>n.slideCount-1?!1:(n.unload(),i===!0?n.$slideTrack.children().remove():n.$slideTrack.children(this.options.slide).eq(e).remove(),n.$slides=n.$slideTrack.children(this.options.slide),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.append(n.$slides),n.$slidesCache=n.$slides,void n.reinit())},t.prototype.setCSS=function(e){var t,i,n=this,s={};n.options.rtl===!0&&(e=-e),t="left"==n.positionProp?Math.ceil(e)+"px":"0px",i="top"==n.positionProp?Math.ceil(e)+"px":"0px",s[n.positionProp]=e,n.transformsEnabled===!1?n.$slideTrack.css(s):(s={},n.cssTransitions===!1?(s[n.animType]="translate("+t+", "+i+")",n.$slideTrack.css(s)):(s[n.animType]="translate3d("+t+", "+i+", 0px)",n.$slideTrack.css(s)))},t.prototype.setDimensions=function(){var e=this;e.options.vertical===!1?e.options.centerMode===!0&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),e.options.centerMode===!0&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),e.options.vertical===!1&&e.options.variableWidth===!1?(e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length))):e.options.variableWidth===!0?e.$slideTrack.width(5e3*e.slideCount):(e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length)));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();e.options.variableWidth===!1&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},t.prototype.setFade=function(){var t,i=this;i.$slides.each(function(n,s){t=i.slideWidth*n*-1,i.options.rtl===!0?e(s).css({position:"relative",right:t,top:0,zIndex:i.options.zIndex-2,opacity:0}):e(s).css({position:"relative",left:t,top:0,zIndex:i.options.zIndex-2,opacity:0})}),i.$slides.eq(i.currentSlide).css({zIndex:i.options.zIndex-1,opacity:1})},t.prototype.setHeight=function(){var e=this;if(1===e.options.slidesToShow&&e.options.adaptiveHeight===!0&&e.options.vertical===!1){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.css("height",t)}},t.prototype.setOption=t.prototype.slickSetOption=function(t,i,n){var s,o,r=this;if("responsive"===t&&"array"===e.type(i))for(o in i)if("array"!==e.type(r.options.responsive))r.options.responsive=[i[o]];else{for(s=r.options.responsive.length-1;s>=0;)r.options.responsive[s].breakpoint===i[o].breakpoint&&r.options.responsive.splice(s,1),s--;r.options.responsive.push(i[o])}else r.options[t]=i;n===!0&&(r.unload(),r.reinit())},t.prototype.setPosition=function(){var e=this;e.setDimensions(),e.setHeight(),e.options.fade===!1?e.setCSS(e.getLeft(e.currentSlide)):e.setFade(),e.$slider.trigger("setPosition",[e])},t.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp=e.options.vertical===!0?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),(void 0!==t.WebkitTransition||void 0!==t.MozTransition||void 0!==t.msTransition)&&e.options.useCSS===!0&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&e.animType!==!1&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&e.animType!==!1},t.prototype.setSlideClasses=function(e){var t,i,n,s,o=this;i=o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),o.$slides.eq(e).addClass("slick-current"),o.options.centerMode===!0?(t=Math.floor(o.options.slidesToShow/2),o.options.infinite===!0&&(e>=t&&e<=o.slideCount-1-t?o.$slides.slice(e-t,e+t+1).addClass("slick-active").attr("aria-hidden","false"):(n=o.options.slidesToShow+e,i.slice(n-t+1,n+t+2).addClass("slick-active").attr("aria-hidden","false")),0===e?i.eq(i.length-1-o.options.slidesToShow).addClass("slick-center"):e===o.slideCount-1&&i.eq(o.options.slidesToShow).addClass("slick-center")),o.$slides.eq(e).addClass("slick-center")):e>=0&&e<=o.slideCount-o.options.slidesToShow?o.$slides.slice(e,e+o.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):i.length<=o.options.slidesToShow?i.addClass("slick-active").attr("aria-hidden","false"):(s=o.slideCount%o.options.slidesToShow,n=o.options.infinite===!0?o.options.slidesToShow+e:e,o.options.slidesToShow==o.options.slidesToScroll&&o.slideCount-e<o.options.slidesToShow?i.slice(n-(o.options.slidesToShow-s),n+s).addClass("slick-active").attr("aria-hidden","false"):i.slice(n,n+o.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===o.options.lazyLoad&&o.lazyLoad()},t.prototype.setupInfinite=function(){var t,i,n,s=this;if(s.options.fade===!0&&(s.options.centerMode=!1),s.options.infinite===!0&&s.options.fade===!1&&(i=null,s.slideCount>s.options.slidesToShow)){for(n=s.options.centerMode===!0?s.options.slidesToShow+1:s.options.slidesToShow,t=s.slideCount;t>s.slideCount-n;t-=1)i=t-1,e(s.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(t=0;n>t;t+=1)i=t,e(s.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){e(this).attr("id","")})}},t.prototype.setPaused=function(e){var t=this;t.options.autoplay===!0&&t.options.pauseOnHover===!0&&(t.paused=e,e?t.autoPlayClear():t.autoPlay())},t.prototype.selectHandler=function(t){var i=this,n=e(t.target).is(".slick-slide")?e(t.target):e(t.target).parents(".slick-slide"),s=parseInt(n.attr("data-slick-index"));return s||(s=0),i.slideCount<=i.options.slidesToShow?(i.setSlideClasses(s),void i.asNavFor(s)):void i.slideHandler(s)},t.prototype.slideHandler=function(e,t,i){var n,s,o,r,a=null,l=this;return t=t||!1,l.animating===!0&&l.options.waitForAnimate===!0||l.options.fade===!0&&l.currentSlide===e||l.slideCount<=l.options.slidesToShow?void 0:(t===!1&&l.asNavFor(e),n=e,a=l.getLeft(n),r=l.getLeft(l.currentSlide),l.currentLeft=null===l.swipeLeft?r:l.swipeLeft,l.options.infinite===!1&&l.options.centerMode===!1&&(0>e||e>l.getDotCount()*l.options.slidesToScroll)?void(l.options.fade===!1&&(n=l.currentSlide,i!==!0?l.animateSlide(r,function(){l.postSlide(n)}):l.postSlide(n))):l.options.infinite===!1&&l.options.centerMode===!0&&(0>e||e>l.slideCount-l.options.slidesToScroll)?void(l.options.fade===!1&&(n=l.currentSlide,i!==!0?l.animateSlide(r,function(){l.postSlide(n)}):l.postSlide(n))):(l.options.autoplay===!0&&clearInterval(l.autoPlayTimer),s=0>n?l.slideCount%l.options.slidesToScroll!==0?l.slideCount-l.slideCount%l.options.slidesToScroll:l.slideCount+n:n>=l.slideCount?l.slideCount%l.options.slidesToScroll!==0?0:n-l.slideCount:n,l.animating=!0,l.$slider.trigger("beforeChange",[l,l.currentSlide,s]),o=l.currentSlide,l.currentSlide=s,l.setSlideClasses(l.currentSlide),l.updateDots(),l.updateArrows(),l.options.fade===!0?(i!==!0?(l.fadeSlideOut(o),l.fadeSlide(s,function(){l.postSlide(s)})):l.postSlide(s),void l.animateHeight()):void(i!==!0?l.animateSlide(a,function(){l.postSlide(s)}):l.postSlide(s))))},t.prototype.startLoad=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},t.prototype.swipeDirection=function(){var e,t,i,n,s=this;return e=s.touchObject.startX-s.touchObject.curX,t=s.touchObject.startY-s.touchObject.curY,i=Math.atan2(t,e),n=Math.round(180*i/Math.PI),0>n&&(n=360-Math.abs(n)),45>=n&&n>=0?s.options.rtl===!1?"left":"right":360>=n&&n>=315?s.options.rtl===!1?"left":"right":n>=135&&225>=n?s.options.rtl===!1?"right":"left":s.options.verticalSwiping===!0?n>=35&&135>=n?"left":"right":"vertical"},t.prototype.swipeEnd=function(e){var t,i=this;if(i.dragging=!1,i.shouldClick=i.touchObject.swipeLength>10?!1:!0,void 0===i.touchObject.curX)return!1;if(i.touchObject.edgeHit===!0&&i.$slider.trigger("edge",[i,i.swipeDirection()]),i.touchObject.swipeLength>=i.touchObject.minSwipe)switch(i.swipeDirection()){case"left":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide+i.getSlideCount()):i.currentSlide+i.getSlideCount(),i.slideHandler(t),i.currentDirection=0,i.touchObject={},i.$slider.trigger("swipe",[i,"left"]);break;case"right":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide-i.getSlideCount()):i.currentSlide-i.getSlideCount(),i.slideHandler(t),i.currentDirection=1,i.touchObject={},i.$slider.trigger("swipe",[i,"right"])}else i.touchObject.startX!==i.touchObject.curX&&(i.slideHandler(i.currentSlide),i.touchObject={})},t.prototype.swipeHandler=function(e){var t=this;if(!(t.options.swipe===!1||"ontouchend"in document&&t.options.swipe===!1||t.options.draggable===!1&&-1!==e.type.indexOf("mouse")))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,t.options.verticalSwiping===!0&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold),e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},t.prototype.swipeMove=function(e){var t,i,n,s,o,r=this;return o=void 0!==e.originalEvent?e.originalEvent.touches:null,!r.dragging||o&&1!==o.length?!1:(t=r.getLeft(r.currentSlide),r.touchObject.curX=void 0!==o?o[0].pageX:e.clientX,r.touchObject.curY=void 0!==o?o[0].pageY:e.clientY,r.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(r.touchObject.curX-r.touchObject.startX,2))),r.options.verticalSwiping===!0&&(r.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(r.touchObject.curY-r.touchObject.startY,2)))),i=r.swipeDirection(),"vertical"!==i?(void 0!==e.originalEvent&&r.touchObject.swipeLength>4&&e.preventDefault(),s=(r.options.rtl===!1?1:-1)*(r.touchObject.curX>r.touchObject.startX?1:-1),r.options.verticalSwiping===!0&&(s=r.touchObject.curY>r.touchObject.startY?1:-1),n=r.touchObject.swipeLength,r.touchObject.edgeHit=!1,r.options.infinite===!1&&(0===r.currentSlide&&"right"===i||r.currentSlide>=r.getDotCount()&&"left"===i)&&(n=r.touchObject.swipeLength*r.options.edgeFriction,r.touchObject.edgeHit=!0),r.options.vertical===!1?r.swipeLeft=t+n*s:r.swipeLeft=t+n*(r.$list.height()/r.listWidth)*s,r.options.verticalSwiping===!0&&(r.swipeLeft=t+n*s),r.options.fade===!0||r.options.touchMove===!1?!1:r.animating===!0?(r.swipeLeft=null,!1):void r.setCSS(r.swipeLeft)):void 0)},t.prototype.swipeStart=function(e){var t,i=this;return 1!==i.touchObject.fingerCount||i.slideCount<=i.options.slidesToShow?(i.touchObject={},!1):(void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),i.touchObject.startX=i.touchObject.curX=void 0!==t?t.pageX:e.clientX,i.touchObject.startY=i.touchObject.curY=void 0!==t?t.pageY:e.clientY,void(i.dragging=!0))},t.prototype.unfilterSlides=t.prototype.slickUnfilter=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},t.prototype.unload=function(){var t=this;e(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},t.prototype.unslick=function(e){var t=this;t.$slider.trigger("unslick",[t,e]),t.destroy()},t.prototype.updateArrows=function(){var e,t=this;e=Math.floor(t.options.slidesToShow/2),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&!t.options.infinite&&(t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===t.currentSlide?(t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-t.options.slidesToShow&&t.options.centerMode===!1?(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-1&&t.options.centerMode===!0&&(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},t.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),e.$dots.find("li").eq(Math.floor(e.currentSlide/e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},t.prototype.visibility=function(){var e=this;document[e.hidden]?(e.paused=!0,e.autoPlayClear()):e.options.autoplay===!0&&(e.paused=!1,e.autoPlay())},t.prototype.initADA=function(){var t=this;t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),t.$slideTrack.attr("role","listbox"),t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i){e(this).attr({role:"option","aria-describedby":"slick-slide"+t.instanceUid+i})}),null!==t.$dots&&t.$dots.attr("role","tablist").find("li").each(function(i){e(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+t.instanceUid+i,id:"slick-slide"+t.instanceUid+i})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),t.activateADA()},t.prototype.activateADA=function(){var e=this;e.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},t.prototype.focusHandler=function(){var t=this;t.$slider.on("focus.slick blur.slick","*",function(i){i.stopImmediatePropagation();var n=e(this);setTimeout(function(){t.isPlay&&(n.is(":focus")?(t.autoPlayClear(),t.paused=!0):(t.paused=!1,t.autoPlay()))},0)})},e.fn.slick=function(){var e,i,n=this,s=arguments[0],o=Array.prototype.slice.call(arguments,1),r=n.length;for(e=0;r>e;e++)if("object"==typeof s||"undefined"==typeof s?n[e].slick=new t(n[e],s):i=n[e].slick[s].apply(n[e].slick,o),"undefined"!=typeof i)return i;return n}}),function(e){"strict";e(".hero-container").slick({dots:!0,pauseOnDotsHover:!0,autoplay:!0,autoplaySpeed:4200})}(jQuery),function(e){"strict";function t(){var t=e(this);i.attr("data-current-tab",t.index()+1)}var i=e(".arrow-tabs");i.on("click",".arrow-tab",function(e){e.preventDefault(),t.call(this)})}(jQuery),$(document).foundation();