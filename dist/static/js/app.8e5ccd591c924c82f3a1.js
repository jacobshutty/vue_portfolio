webpackJsonp([171],{"+708":function(e,t,a){"use strict";var i={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var e=this;a("JAHf"),this.$nextTick(function(){e.initParticleJS(e.color,e.particleOpacity,e.particlesNumber,e.shapeType,e.particleSize,e.linesColor,e.linesWidth,e.lineLinked,e.lineOpacity,e.linesDistance,e.moveSpeed,e.hoverEffect,e.hoverMode,e.clickEffect,e.clickMode)})},methods:{initParticleJS:function(e,t,a,i,n,s,c,r,o,l,p,d,m,u,b){particlesJS("particles-js",{particles:{number:{value:a,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:i,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:t,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:n,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:r,distance:l,color:s,opacity:o,width:c},move:{enable:!0,speed:p,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:d,mode:m},onclick:{enable:u,mode:b},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},n={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"particles-js",color:e.color,particleOpacity:e.particleOpacity,linesColor:e.linesColor,particlesNumber:e.particlesNumber,shapeType:e.shapeType,particleSize:e.particleSize,linesWidth:e.linesWidth,lineLinked:e.lineLinked,lineOpacity:e.lineOpacity,linesDistance:e.linesDistance,moveSpeed:e.moveSpeed,hoverEffect:e.hoverEffect,hoverMode:e.hoverMode,clickEffect:e.clickEffect,clickMode:e.clickMode}})},staticRenderFns:[]},s=a("VU/8")(i,n,!1,null,null,null);t.a=s.exports},"/Djd":function(e,t,a){var i={"./78-EUC-H.bcmap":["0lHY",168],"./78-EUC-V.bcmap":["8cwC",167],"./78-H.bcmap":["Hj0Y",166],"./78-RKSJ-H.bcmap":["rDt0",165],"./78-RKSJ-V.bcmap":["69NQ",164],"./78-V.bcmap":["OfM+",163],"./78ms-RKSJ-H.bcmap":["uB/y",162],"./78ms-RKSJ-V.bcmap":["h5K9",161],"./83pv-RKSJ-H.bcmap":["9WfI",160],"./90ms-RKSJ-H.bcmap":["0WCd",159],"./90ms-RKSJ-V.bcmap":["IlPF",158],"./90msp-RKSJ-H.bcmap":["JgNn",157],"./90msp-RKSJ-V.bcmap":["vmWD",156],"./90pv-RKSJ-H.bcmap":["yxD0",155],"./90pv-RKSJ-V.bcmap":["5WXK",154],"./Add-H.bcmap":["xhCb",153],"./Add-RKSJ-H.bcmap":["6VbT",152],"./Add-RKSJ-V.bcmap":["RLMU",151],"./Add-V.bcmap":["yp9I",150],"./Adobe-CNS1-0.bcmap":["hUem",149],"./Adobe-CNS1-1.bcmap":["ino3",148],"./Adobe-CNS1-2.bcmap":["ibfO",147],"./Adobe-CNS1-3.bcmap":["GiTj",146],"./Adobe-CNS1-4.bcmap":["hsjj",145],"./Adobe-CNS1-5.bcmap":["YRpi",144],"./Adobe-CNS1-6.bcmap":["w8o3",143],"./Adobe-CNS1-UCS2.bcmap":["rX6d",142],"./Adobe-GB1-0.bcmap":["iD5p",141],"./Adobe-GB1-1.bcmap":["4jEs",140],"./Adobe-GB1-2.bcmap":["Afaj",139],"./Adobe-GB1-3.bcmap":["toY7",138],"./Adobe-GB1-4.bcmap":["faDD",137],"./Adobe-GB1-5.bcmap":["4gVq",136],"./Adobe-GB1-UCS2.bcmap":["L8gf",135],"./Adobe-Japan1-0.bcmap":["hIDG",134],"./Adobe-Japan1-1.bcmap":["iPSW",133],"./Adobe-Japan1-2.bcmap":["S/ep",132],"./Adobe-Japan1-3.bcmap":["YhiS",131],"./Adobe-Japan1-4.bcmap":["wm/L",130],"./Adobe-Japan1-5.bcmap":["Zkyi",129],"./Adobe-Japan1-6.bcmap":["aB41",128],"./Adobe-Japan1-UCS2.bcmap":["2Us0",127],"./Adobe-Korea1-0.bcmap":["Mv2w",126],"./Adobe-Korea1-1.bcmap":["s/Eq",125],"./Adobe-Korea1-2.bcmap":["3o6+",124],"./Adobe-Korea1-UCS2.bcmap":["SV2h",123],"./B5-H.bcmap":["HF7q",122],"./B5-V.bcmap":["fwp9",121],"./B5pc-H.bcmap":["rWMu",120],"./B5pc-V.bcmap":["xFEU",119],"./CNS-EUC-H.bcmap":["B0Kb",118],"./CNS-EUC-V.bcmap":["azx/",117],"./CNS1-H.bcmap":["p4ms",116],"./CNS1-V.bcmap":["9eW7",115],"./CNS2-H.bcmap":["zc6H",114],"./CNS2-V.bcmap":["dvni",113],"./ETHK-B5-H.bcmap":["EOs2",112],"./ETHK-B5-V.bcmap":["3Wsc",111],"./ETen-B5-H.bcmap":["gQjr",110],"./ETen-B5-V.bcmap":["kLXg",109],"./ETenms-B5-H.bcmap":["imo+",108],"./ETenms-B5-V.bcmap":["zm2u",107],"./EUC-H.bcmap":["Q2D6",106],"./EUC-V.bcmap":["k2qw",105],"./Ext-H.bcmap":["YgQs",104],"./Ext-RKSJ-H.bcmap":["hIym",103],"./Ext-RKSJ-V.bcmap":["N32G",102],"./Ext-V.bcmap":["M1wV",101],"./GB-EUC-H.bcmap":["HcIz",100],"./GB-EUC-V.bcmap":["UJd/",99],"./GB-H.bcmap":["IhXA",98],"./GB-V.bcmap":["hcdP",97],"./GBK-EUC-H.bcmap":["1Knm",96],"./GBK-EUC-V.bcmap":["YMus",95],"./GBK2K-H.bcmap":["nBsz",94],"./GBK2K-V.bcmap":["vkSo",93],"./GBKp-EUC-H.bcmap":["dk46",92],"./GBKp-EUC-V.bcmap":["cDOd",91],"./GBT-EUC-H.bcmap":["DdPg",90],"./GBT-EUC-V.bcmap":["hqV7",89],"./GBT-H.bcmap":["7XA5",88],"./GBT-V.bcmap":["qhQE",87],"./GBTpc-EUC-H.bcmap":["1Eun",86],"./GBTpc-EUC-V.bcmap":["849d",85],"./GBpc-EUC-H.bcmap":["A4XZ",84],"./GBpc-EUC-V.bcmap":["an5Q",83],"./H.bcmap":["jg+6",82],"./HKdla-B5-H.bcmap":["dKoA",81],"./HKdla-B5-V.bcmap":["Axzi",80],"./HKdlb-B5-H.bcmap":["Z6Fe",79],"./HKdlb-B5-V.bcmap":["Swbl",78],"./HKgccs-B5-H.bcmap":["4mx8",77],"./HKgccs-B5-V.bcmap":["TbQ6",76],"./HKm314-B5-H.bcmap":["zfm+",75],"./HKm314-B5-V.bcmap":["lr6o",74],"./HKm471-B5-H.bcmap":["EyHw",73],"./HKm471-B5-V.bcmap":["YRl9",72],"./HKscs-B5-H.bcmap":["mP3G",71],"./HKscs-B5-V.bcmap":["6sQV",70],"./Hankaku.bcmap":["Boma",69],"./Hiragana.bcmap":["Aqml",68],"./KSC-EUC-H.bcmap":["RBad",67],"./KSC-EUC-V.bcmap":["C6eU",66],"./KSC-H.bcmap":["Q2pl",65],"./KSC-Johab-H.bcmap":["330r",64],"./KSC-Johab-V.bcmap":["jriO",63],"./KSC-V.bcmap":["qRx5",62],"./KSCms-UHC-H.bcmap":["xEph",61],"./KSCms-UHC-HW-H.bcmap":["JSwJ",60],"./KSCms-UHC-HW-V.bcmap":["G/Oj",59],"./KSCms-UHC-V.bcmap":["/RsT",58],"./KSCpc-EUC-H.bcmap":["D4WR",57],"./KSCpc-EUC-V.bcmap":["OqUO",56],"./Katakana.bcmap":["clhU",55],"./NWP-H.bcmap":["xDZB",54],"./NWP-V.bcmap":["lHHt",53],"./RKSJ-H.bcmap":["1bQs",52],"./RKSJ-V.bcmap":["KD7s",51],"./Roman.bcmap":["KDYN",50],"./UniCNS-UCS2-H.bcmap":["bBFw",49],"./UniCNS-UCS2-V.bcmap":["ne9Q",48],"./UniCNS-UTF16-H.bcmap":["7mve",47],"./UniCNS-UTF16-V.bcmap":["fDmo",46],"./UniCNS-UTF32-H.bcmap":["oBG3",45],"./UniCNS-UTF32-V.bcmap":["R8UX",44],"./UniCNS-UTF8-H.bcmap":["9p4U",43],"./UniCNS-UTF8-V.bcmap":["mrGD",42],"./UniGB-UCS2-H.bcmap":["8bey",41],"./UniGB-UCS2-V.bcmap":["lngy",40],"./UniGB-UTF16-H.bcmap":["Jjcy",39],"./UniGB-UTF16-V.bcmap":["0PdA",38],"./UniGB-UTF32-H.bcmap":["nl8J",37],"./UniGB-UTF32-V.bcmap":["k/6v",36],"./UniGB-UTF8-H.bcmap":["5y08",35],"./UniGB-UTF8-V.bcmap":["Mx+T",34],"./UniJIS-UCS2-H.bcmap":["h4hU",33],"./UniJIS-UCS2-HW-H.bcmap":["Uz5R",32],"./UniJIS-UCS2-HW-V.bcmap":["LdTY",31],"./UniJIS-UCS2-V.bcmap":["cBwd",30],"./UniJIS-UTF16-H.bcmap":["+S0o",29],"./UniJIS-UTF16-V.bcmap":["VEBc",28],"./UniJIS-UTF32-H.bcmap":["m4Cs",27],"./UniJIS-UTF32-V.bcmap":["dWl0",26],"./UniJIS-UTF8-H.bcmap":["leWl",25],"./UniJIS-UTF8-V.bcmap":["ulcQ",24],"./UniJIS2004-UTF16-H.bcmap":["fZfZ",23],"./UniJIS2004-UTF16-V.bcmap":["yeFf",22],"./UniJIS2004-UTF32-H.bcmap":["StCN",21],"./UniJIS2004-UTF32-V.bcmap":["4axz",20],"./UniJIS2004-UTF8-H.bcmap":["petH",19],"./UniJIS2004-UTF8-V.bcmap":["ebP/",18],"./UniJISPro-UCS2-HW-V.bcmap":["bJiI",17],"./UniJISPro-UCS2-V.bcmap":["eCeG",16],"./UniJISPro-UTF8-V.bcmap":["gGQY",15],"./UniJISX0213-UTF32-H.bcmap":["yvQh",14],"./UniJISX0213-UTF32-V.bcmap":["/rlZ",13],"./UniJISX02132004-UTF32-H.bcmap":["0dQZ",12],"./UniJISX02132004-UTF32-V.bcmap":["+GS9",11],"./UniKS-UCS2-H.bcmap":["fGKg",10],"./UniKS-UCS2-V.bcmap":["X3cO",9],"./UniKS-UTF16-H.bcmap":["TMpY",8],"./UniKS-UTF16-V.bcmap":["hTx4",7],"./UniKS-UTF32-H.bcmap":["kbYn",6],"./UniKS-UTF32-V.bcmap":["t4S0",5],"./UniKS-UTF8-H.bcmap":["6InH",4],"./UniKS-UTF8-V.bcmap":["oEkN",3],"./V.bcmap":["xBln",2],"./WP-Symbol.bcmap":["A12k",1]};function n(e){var t=i[e];return t?a.e(t[1]).then(function(){return a(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}n.keys=function(){return Object.keys(i)},n.id="/Djd",e.exports=n},0:function(e,t){},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"5xog":function(e,t){},6:function(e,t){},"6vTJ":function(e,t){},7:function(e,t){},"8Y90":function(e,t){},"9xbj":function(e,t){},AgTH:function(e,t){},Aq9P:function(e,t){},Du0T:function(e,t){},JNrq:function(e,t,a){"use strict";(function(e){var i=a("JJsi"),n=a.n(i),s=a("FhMH"),c=s.RichText.Elements,r=function(e){return"/doc/"+e.id},o=function(t,a,i){switch(t.type){case c.heading1:return"<h1>"+i.join("")+"</h1>";case c.heading2:return"<h2>"+i.join("")+"</h2>";case c.heading3:return"<h3>"+i.join("")+"</h3>";case c.heading4:return"<h4>"+i.join("")+"</h4>";case c.heading5:return"<h5>"+i.join("")+"</h5>";case c.heading6:return"<h6>"+i.join("")+"</h6>";case c.paragraph:return console.log("paragraph element"),"<p>"+i.join("")+"</p>";case c.preformatted:return"<pre>"+i.join("")+"</pre>";case c.strong:return"<strong>"+i.join("")+"</strong>";case c.em:return"<em>"+i.join("")+"</em>";case c.listItem:case c.oListItem:return"<li>"+i.join("")+"</li>";case c.list:return"<ul>"+i.join("")+"</ul>";case c.oList:return"<ol>"+i.join("")+"</ol>";case c.image:var n=t.linkTo?s.Link.url(t.linkTo,e.exports.linkResolver):null,r=t.linkTo&&t.linkTo.target?'target="'+t.linkTo.target+'" rel="noopener"':"",o=[t.label||"","block-img"],l='<img src="'+t.url+'" alt="'+(t.alt||"")+'" copyright="'+(t.copyright||"")+'">';return'\n        <p class="'+o.join(" ")+'">\n          '+(n?"<a "+r+' href="'+n+'">'+l+"</a>":l)+"\n        </p>\n      ";case c.embed:return'\n        <div data-oembed="'+t.oembed.embed_url+'"\n          data-oembed-type="'+t.oembed.type+'"\n          data-oembed-provider="'+t.oembed.provider_name+'"\n        >\n          '+t.oembed.html+"\n        </div>\n      ";case c.hyperlink:return"<a "+(t.data.target?'target="'+t.data.target+'" rel="noopener"':"")+' href="'+(n=s.Link.url(t.data,e.exports.linkResolver))+'">'+i.join("")+"</a>";case c.label:return"<span "+(t.data.label?' class="'+t.data.label+'"':"")+">"+i.join("")+"</span>";case c.span:return a?a.replace(/\n/g,"<br />"):"";default:return null}};t.a={components:{PrismicRichText:n.a},props:["content"],name:"Serializer",data:function(){return{serializedContent:null}},methods:{serialize:function(){this.serializedContent=s.RichText.asHtml(this.content,r,o)}},created:function(){this.serialize()},watch:{content:function(){this.serialize()}}}}).call(t,a("f1Eh")(e))},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("mtWM"),n=a.n(i),s=a("Rf8U"),c=a.n(s),r=a("7cGW"),o=a.n(r),l=a("FhMH"),p=a.n(l),d=a("7+uW"),m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var u=a("VU/8")({name:"App"},m,!1,function(e){a("5xog")},null,null).exports,b=a("/ocq"),h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("nav",{attrs:{id:"header-nav"}},[t("span",{staticClass:"left"},[this._v("\n      Left\n    ")]),this._v(" "),t("span",{staticClass:"logo"},[this._v("\n      Logo\n    ")]),this._v(" "),t("span",{staticClass:"right"},[this._v("\n      Right\n    ")])])])}]};var f=a("VU/8")({name:"Navbar"},h,!1,function(e){a("9xbj")},"data-v-35fc1547",null).exports,v=a("JNrq"),U={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"serialized"},[t("span",{domProps:{innerHTML:this._s(this.serializedContent)}})])},staticRenderFns:[]};var S=function(e){a("Aq9P")},C=a("VU/8")(v.a,U,!1,S,"data-v-6841433c",null).exports,H={components:{Serializer:C},data:function(){return{endpoint:"https://shuttyja-portfolio.cdn.prismic.io/api/v2",skills:null,showInfo:!1,selectedInfo:null}},methods:{pullData:function(){var e=this;o.a.getApi(this.endpoint,{}).then(function(e){return e.query(o.a.Predicates.at("document.type","skill"),{orderings:"[my.skill.index]"})}).then(function(t){e.skills=t.results})},skillInfo:function(e){this.showInfo=!0,this.selectedInfo=e},clearSkill:function(){this.showInfo=!1}},computed:{},created:function(){this.pullData()}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"skills"},[a("div",{staticClass:"fullwidth"},[a("div",{staticClass:"container"},[a("div",{staticClass:"header"},[e._v("Primary Skills")]),e._v(" "),a("div",{staticClass:"skill-grid"},[a("vue-particles",{attrs:{color:"#f19c79",linesColor:"#2e0219",hoverEffect:!1,clickEffect:!1,linesDistance:200,particleSize:5}}),e._v(" "),e._l(e.skills,function(t){return a("div",{key:t.id,staticClass:"skill-wrap",class:{selected:t==e.selectedInfo},on:{click:function(a){e.skillInfo(t)}}},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.data.logo.url,alt:t.data.logo.alt}})]),e._v(" "),a("div",{staticClass:"title"},[e._v(e._s(t.data.skill_name[0].text))])])})],2)])]),e._v(" "),e.showInfo?a("div",{staticClass:"info-pop"},[a("span",{staticClass:"close-pop",on:{click:e.clearSkill}},[e._v("×")]),e._v(" "),a("img",{attrs:{src:e.selectedInfo.data.logo.url,alt:e.selectedInfo.data.logo.alt}}),e._v(" "),a("serializer",{attrs:{content:e.selectedInfo.data.skill_info}})],1):e._e(),e._v(" "),a("div",{staticClass:"desktop container"},[e.showInfo?a("div",{staticClass:"info"},[a("serializer",{attrs:{content:e.selectedInfo.data.skill_info}})],1):e._e()])])},staticRenderFns:[]};var y=a("VU/8")(H,_,!1,function(e){a("6vTJ")},"data-v-7c8aa52c",null).exports,g={data:function(){return{}},methods:{perspectiveHover:function(e,t){var a=this,i=document.querySelector(".rel");this.perspective=function(e,a){var i=a.offsetLeft,n=a.offsetTop,s=a.offsetWidth,c=a.offsetHeight,r=e.pageX,o=e.pageY,l=-(s/2-(r-i))/(s/2)*t,p=(c/2-(o-n))/(c/2)*t;a.style.transform="rotateX("+p+"deg) rotateY("+l+"deg)"},i.addEventListener("mousemove",function(e){e.target.classList.contains("js-perspective-card")&&a.perspective(e,e.target)})}},computed:{},mounted:function(){this.perspectiveHover(".js-perspective-card",2)}},V={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"rel"},[t("div",{staticClass:"js-perspective"},[t("div",{staticClass:"perspective-card-wrap"},[t("div",{staticClass:"js-perspective-card perspective-card"},[t("div",{staticClass:"perspective-card__content"},[t("h1",[this._v("Jacob Shutty")])])])])])])}]};var B=a("VU/8")(g,V,!1,function(e){a("fB6B")},"data-v-2bcbd185",null).exports,T={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-banner"},[t("div",{staticClass:"container"},[t("div",{staticClass:"banner-header"},[t("h1",[this._v("Portfolio")]),this._v(" "),t("p",[this._v("Lorem ipsum dolor sit amet consectetur adipisicing elit.")])])])])}]};var E=a("VU/8")({name:"Banner",components:{}},T,!1,function(e){a("Y8ZH")},"data-v-570ddd84",null).exports,k={components:{Serializer:C},data:function(){return{endpoint:"https://shuttyja-portfolio.cdn.prismic.io/api/v2",artwork:null,hoveredItem:null,expandedItem:null}},methods:{pullData:function(){var e=this;o.a.getApi(this.endpoint,{}).then(function(e){return e.query(o.a.Predicates.at("document.type","art"),{orderings:"[my.art.index]"})}).then(function(t){e.artwork=t.results})},hovered:function(e){this.hoveredItem=e},expand:function(e){this.expandedItem==e?this.expandedItem=null:this.expandedItem=e}},mounted:function(){this.pullData()}},K={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"art"},[e._m(0),e._v(" "),a("div",{staticClass:"fullwidth"},[a("div",{staticClass:"art-section"},e._l(e.artwork,function(t){return a("div",{key:t.id,staticClass:"art-wrap",class:{open:t==e.hoveredItem,closed:t!=e.hoveredItem,expanded:t==e.expandedItem},style:{backgroundImage:"url("+t.data.art_image.url+")"},on:{mouseover:function(a){e.hovered(t)},click:function(a){e.expand(t)}}},[a("div",{staticClass:"expanded-wrap"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.data.art_image.url,expression:"art.data.art_image.url"}],staticClass:"expanded-img"}),e._v(" "),a("serializer",{attrs:{content:t.data.info}})],1),e._v(" "),a("span",{staticClass:"dim"}),e._v(" "),a("span",{staticClass:"plus"},[e._v("+")])])}))])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"header"},[this._v("Art/Design Work")])])}]};var J=a("VU/8")(k,K,!1,function(e){a("Du0T")},"data-v-61310b2d",null).exports,w=a("iwQb");if("server"===Object({NODE_ENV:"production"}).VUE_ENV)var x=Object(w.a)({});else{var I=a("ytml").default,N=a("N1Pc");x=Object(w.a)(I(N))}var A=x;var F={components:{pdf:a("VU/8")(A,null,!1,function(e){a("AgTH")},null,null).exports},data:function(){return{email:"jacobshutty@gmail.com",copySuccess:null,resume:!1}},methods:{copied:function(e){this.copySuccess=e},showResume:function(){this.resume=!0},hideResume:function(){this.resume=!1}}},R={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact"},[a("div",{staticClass:"container"},[a("div",{staticClass:"contact-wrap"},[a("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.email,expression:"email",arg:"copy"}]},[e._v("jacobshutty@gmail.com")]),e._v(" "),a("div",{staticClass:"desktop"},[e.resume?a("div",{staticClass:"hide-resume button",on:{click:e.hideResume}},[e._v("Hide")]):a("div",{staticClass:"view-resume button",on:{click:e.showResume}},[e._v("View Resume")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.resume,expression:"resume"}],staticClass:"resume-wrap"},[a("a",{staticClass:"download",attrs:{href:"static/JacobShuttyResume.pdf",download:""}},[e._v("Download ⇓")]),e._v(" "),a("pdf",{attrs:{src:"static/JacobShuttyResume.pdf"}})],1)]),e._v(" "),e._m(0)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mobile"},[t("a",{staticClass:"view-resume button",attrs:{href:"static/JacobShuttyResume.pdf"}},[this._v("View Resume")])])}]};var j={name:"Home",components:{Navbar:f,SkillGrid:y,PerspectiveBanner:B,Banner:E,Art:J,Contact:a("VU/8")(F,R,!1,function(e){a("Odgj")},"data-v-354b1d44",null).exports}},z={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home page"},[t("perspective-banner"),this._v(" "),t("skill-grid"),this._v(" "),t("art"),this._v(" "),t("contact")],1)},staticRenderFns:[]};var G=a("VU/8")(j,z,!1,function(e){a("Nx/r")},"data-v-20251147",null).exports;d.a.use(b.a);var D=new b.a({mode:"history",routes:[{path:"/",name:"Home",component:G}]}),$=a("mM94"),P=a("wvfG"),W=a.n(P),O=a("cTzj"),L=a.n(O);d.a.use(L.a),d.a.use(W.a),d.a.use($.a),d.a.use(c.a,n.a),d.a.use(o.a),d.a.use(p.a),d.a.config.productionTip=!1,new d.a({el:"#app",router:D,components:{App:u},template:"<App/>"})},"Nx/r":function(e,t){},Odgj:function(e,t){},POKh:function(e,t,a){"use strict";var i={props:{initial:{type:Boolean,default:!1}},data:function(){return{size:{width:-1,height:-1}}},methods:{reset:function(){var e=this.$el.firstChild,t=this.$el.lastChild;e.scrollLeft=1e5,e.scrollTop=1e5,t.scrollLeft=1e5,t.scrollTop=1e5},update:function(){this.size.width=this.$el.offsetWidth,this.size.height=this.$el.offsetHeight}},watch:{size:{deep:!0,handler:function(e){this.reset(),this.$emit("resize",{width:this.size.width,height:this.size.height})}}},render:function(e){var t="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",a="position: absolute; left: 0; top: 0;";return e("div",{style:t+"animation-name: resizeSensorVisibility;",on:{"~animationstart":this.update}},[e("div",{style:t,on:{scroll:this.update}},[e("div",{style:a+"width: 100000px; height: 100000px;"})]),e("div",{style:t,on:{scroll:this.update}},[e("div",{style:a+"width: 200%; height: 200%;"})])])},beforeDestroy:function(){this.$emit("resize",{width:0,height:0}),this.$emit("resizeSensorBeforeDestroy")},mounted:function(){if(!0===this.initial&&this.$nextTick(this.update),this.$el.offsetParent!==this.$el.parentNode&&(this.$el.parentNode.style.position="relative"),"attachEvent"in this.$el&&!("AnimationEvent"in window)){var e=function(){this.update(),t()}.bind(this),t=function(){this.$el.detachEvent("onresize",e),this.$off("resizeSensorBeforeDestroy",t)}.bind(this);this.$el.attachEvent("onresize",e),this.$on("resizeSensorBeforeDestroy",t),this.reset()}}};var n=a("VU/8")(i,null,!1,function(e){a("8Y90")},null,null);t.a=n.exports},Y8ZH:function(e,t){},fB6B:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.8e5ccd591c924c82f3a1.js.map