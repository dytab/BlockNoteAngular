class f{constructor(e,a,t){this.property=e,this.normal=a,t&&(this.space=t)}}f.prototype.property={};f.prototype.normal={};f.prototype.space=null;function x(l,e){const a={},t={};let s=-1;for(;++s<l.length;)Object.assign(a,l[s].property),Object.assign(t,l[s].normal);return new f(a,t,e)}function v(l){return l.toLowerCase()}class p{constructor(e,a){this.property=e,this.attribute=a}}p.prototype.space=null;p.prototype.boolean=!1;p.prototype.booleanish=!1;p.prototype.overloadedBoolean=!1;p.prototype.number=!1;p.prototype.commaSeparated=!1;p.prototype.spaceSeparated=!1;p.prototype.commaOrSpaceSeparated=!1;p.prototype.mustUseProperty=!1;p.prototype.defined=!1;let T=0;const o=g(),u=g(),w=g(),n=g(),r=g(),h=g(),c=g();function g(){return 2**++T}const k=Object.freeze(Object.defineProperty({__proto__:null,boolean:o,booleanish:u,commaOrSpaceSeparated:c,commaSeparated:h,number:n,overloadedBoolean:w,spaceSeparated:r},Symbol.toStringTag,{value:"Module"})),y=Object.keys(k);class S extends p{constructor(e,a,t,s){let i=-1;if(super(e,a),b(this,"space",s),typeof t=="number")for(;++i<y.length;){const d=y[i];b(this,y[i],(t&k[d])===k[d])}}}S.prototype.defined=!0;function b(l,e,a){a&&(l[e]=a)}const E={}.hasOwnProperty;function m(l){const e={},a={};let t;for(t in l.properties)if(E.call(l.properties,t)){const s=l.properties[t],i=new S(t,l.transform(l.attributes||{},t),s,l.space);l.mustUseProperty&&l.mustUseProperty.includes(t)&&(i.mustUseProperty=!0),e[t]=i,a[v(t)]=t,a[v(i.attribute)]=t}return new f(e,a,l.space)}const P=m({space:"xlink",transform(l,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),M=m({space:"xml",transform(l,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function L(l,e){return e in l?l[e]:e}function O(l,e){return L(l,e.toLowerCase())}const D=m({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:O,properties:{xmlns:null,xmlnsXLink:null}}),R=m({transform(l,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:u,ariaAutoComplete:null,ariaBusy:u,ariaChecked:u,ariaColCount:n,ariaColIndex:n,ariaColSpan:n,ariaControls:r,ariaCurrent:null,ariaDescribedBy:r,ariaDetails:null,ariaDisabled:u,ariaDropEffect:r,ariaErrorMessage:null,ariaExpanded:u,ariaFlowTo:r,ariaGrabbed:u,ariaHasPopup:null,ariaHidden:u,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:r,ariaLevel:n,ariaLive:null,ariaModal:u,ariaMultiLine:u,ariaMultiSelectable:u,ariaOrientation:null,ariaOwns:r,ariaPlaceholder:null,ariaPosInSet:n,ariaPressed:u,ariaReadOnly:u,ariaRelevant:null,ariaRequired:u,ariaRoleDescription:r,ariaRowCount:n,ariaRowIndex:n,ariaRowSpan:n,ariaSelected:u,ariaSetSize:n,ariaSort:null,ariaValueMax:n,ariaValueMin:n,ariaValueNow:n,ariaValueText:null,role:null}}),A=m({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:O,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:h,acceptCharset:r,accessKey:r,action:null,allow:null,allowFullScreen:o,allowPaymentRequest:o,allowUserMedia:o,alt:null,as:null,async:o,autoCapitalize:null,autoComplete:r,autoFocus:o,autoPlay:o,blocking:r,capture:null,charSet:null,checked:o,cite:null,className:r,cols:n,colSpan:null,content:null,contentEditable:u,controls:o,controlsList:r,coords:n|h,crossOrigin:null,data:null,dateTime:null,decoding:null,default:o,defer:o,dir:null,dirName:null,disabled:o,download:w,draggable:u,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:o,formTarget:null,headers:r,height:n,hidden:o,high:n,href:null,hrefLang:null,htmlFor:r,httpEquiv:r,id:null,imageSizes:null,imageSrcSet:null,inert:o,inputMode:null,integrity:null,is:null,isMap:o,itemId:null,itemProp:r,itemRef:r,itemScope:o,itemType:r,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:o,low:n,manifest:null,max:null,maxLength:n,media:null,method:null,min:null,minLength:n,multiple:o,muted:o,name:null,nonce:null,noModule:o,noValidate:o,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:o,optimum:n,pattern:null,ping:r,placeholder:null,playsInline:o,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:o,referrerPolicy:null,rel:r,required:o,reversed:o,rows:n,rowSpan:n,sandbox:r,scope:null,scoped:o,seamless:o,selected:o,shadowRootClonable:o,shadowRootDelegatesFocus:o,shadowRootMode:null,shape:null,size:n,sizes:null,slot:null,span:n,spellCheck:u,src:null,srcDoc:null,srcLang:null,srcSet:null,start:n,step:null,style:null,tabIndex:n,target:null,title:null,translate:null,type:null,typeMustMatch:o,useMap:null,value:u,width:n,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:r,axis:null,background:null,bgColor:null,border:n,borderColor:null,bottomMargin:n,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:o,declare:o,event:null,face:null,frame:null,frameBorder:null,hSpace:n,leftMargin:n,link:null,longDesc:null,lowSrc:null,marginHeight:n,marginWidth:n,noResize:o,noHref:o,noShade:o,noWrap:o,object:null,profile:null,prompt:null,rev:null,rightMargin:n,rules:null,scheme:null,scrolling:u,standby:null,summary:null,text:null,topMargin:n,valueType:null,version:null,vAlign:null,vLink:null,vSpace:n,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:o,disableRemotePlayback:o,prefix:null,property:null,results:n,security:null,unselectable:null}}),U=m({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:L,properties:{about:c,accentHeight:n,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:n,amplitude:n,arabicForm:null,ascent:n,attributeName:null,attributeType:null,azimuth:n,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:n,by:null,calcMode:null,capHeight:n,className:r,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:n,diffuseConstant:n,direction:null,display:null,dur:null,divisor:n,dominantBaseline:null,download:o,dx:null,dy:null,edgeMode:null,editable:null,elevation:n,enableBackground:null,end:null,event:null,exponent:n,externalResourcesRequired:null,fill:null,fillOpacity:n,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:h,g2:h,glyphName:h,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:n,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:n,horizOriginX:n,horizOriginY:n,id:null,ideographic:n,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:n,k:n,k1:n,k2:n,k3:n,k4:n,kernelMatrix:c,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:n,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:n,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:n,overlineThickness:n,paintOrder:null,panose1:null,path:null,pathLength:n,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:r,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:n,pointsAtY:n,pointsAtZ:n,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:c,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:c,rev:c,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:c,requiredFeatures:c,requiredFonts:c,requiredFormats:c,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:n,specularExponent:n,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:n,strikethroughThickness:n,string:null,stroke:null,strokeDashArray:c,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:n,strokeOpacity:n,strokeWidth:null,style:null,surfaceScale:n,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:c,tabIndex:n,tableValues:null,target:null,targetX:n,targetY:n,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:c,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:n,underlineThickness:n,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:n,values:null,vAlphabetic:n,vMathematical:n,vectorEffect:null,vHanging:n,vIdeographic:n,version:null,vertAdvY:n,vertOriginX:n,vertOriginY:n,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:n,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),z=/^data[-\w.:]+$/i,C=/-[a-z]/g,B=/[A-Z]/g;function F(l,e){const a=v(e);let t=e,s=p;if(a in l.normal)return l.property[l.normal[a]];if(a.length>4&&a.slice(0,4)==="data"&&z.test(e)){if(e.charAt(4)==="-"){const i=e.slice(5).replace(C,H);t="data"+i.charAt(0).toUpperCase()+i.slice(1)}else{const i=e.slice(4);if(!C.test(i)){let d=i.replace(B,I);d.charAt(0)!=="-"&&(d="-"+d),e="data"+d}}s=S}return new s(t,e)}function I(l){return"-"+l.toLowerCase()}function H(l){return l.charAt(1).toUpperCase()}const V=x([M,P,D,R,A],"html"),j=x([M,P,D,R,U],"svg");function W(l){const e=String(l||"").trim();return e?e.split(/[ \t\n\r\f]+/g):[]}function q(l){return l.join(" ").trim()}function K(l){const e=[],a=String(l||"");let t=a.indexOf(","),s=0,i=!1;for(;!i;){t===-1&&(t=a.length,i=!0);const d=a.slice(s,t).trim();(d||!i)&&e.push(d),s=t+1,t=a.indexOf(",",s)}return e}function N(l,e){const a=e||{};return(l[l.length-1]===""?[...l,""]:l).join((a.padRight?" ":"")+","+(a.padLeft===!1?"":" ")).trim()}export{N as a,q as b,K as c,F as f,V as h,v as n,W as p,j as s};
