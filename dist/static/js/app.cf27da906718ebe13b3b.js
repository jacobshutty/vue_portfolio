webpackJsonp([1],{"+708":function(e,t,n){"use strict";var i={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var e=this;n("JAHf"),this.$nextTick(function(){e.initParticleJS(e.color,e.particleOpacity,e.particlesNumber,e.shapeType,e.particleSize,e.linesColor,e.linesWidth,e.lineLinked,e.lineOpacity,e.linesDistance,e.moveSpeed,e.hoverEffect,e.hoverMode,e.clickEffect,e.clickMode)})},methods:{initParticleJS:function(e,t,n,i,a,s,r,o,l,c,d,u,p,h,f){particlesJS("particles-js",{particles:{number:{value:n,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:i,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:t,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:a,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:o,distance:c,color:s,opacity:l,width:r},move:{enable:!0,speed:d,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:u,mode:p},onclick:{enable:h,mode:f},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},a={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"particles-js",color:e.color,particleOpacity:e.particleOpacity,linesColor:e.linesColor,particlesNumber:e.particlesNumber,shapeType:e.shapeType,particleSize:e.particleSize,linesWidth:e.linesWidth,lineLinked:e.lineLinked,lineOpacity:e.lineOpacity,linesDistance:e.linesDistance,moveSpeed:e.moveSpeed,hoverEffect:e.hoverEffect,hoverMode:e.hoverMode,clickEffect:e.clickEffect,clickMode:e.clickMode}})},staticRenderFns:[]},s=n("VU/8")(i,a,!1,null,null,null);t.a=s.exports},"3pC+":function(e,t){},"5xog":function(e,t){},"6npt":function(e,t){},"9xbj":function(e,t){},Aq9P:function(e,t){},JNrq:function(e,t,n){"use strict";(function(e){var i=n("JJsi"),a=n.n(i),s=n("FhMH"),r=s.RichText.Elements,o=function(e){return"/doc/"+e.id},l=function(t,n,i){switch(t.type){case r.heading1:return"<h1>"+i.join("")+"</h1>";case r.heading2:return"<h2>"+i.join("")+"</h2>";case r.heading3:return"<h3>"+i.join("")+"</h3>";case r.heading4:return"<h4>"+i.join("")+"</h4>";case r.heading5:return"<h5>"+i.join("")+"</h5>";case r.heading6:return"<h6>"+i.join("")+"</h6>";case r.paragraph:return console.log("paragraph element"),"<p>"+i.join("")+"</p>";case r.preformatted:return"<pre>"+i.join("")+"</pre>";case r.strong:return"<strong>"+i.join("")+"</strong>";case r.em:return"<em>"+i.join("")+"</em>";case r.listItem:case r.oListItem:return"<li>"+i.join("")+"</li>";case r.list:return"<ul>"+i.join("")+"</ul>";case r.oList:return"<ol>"+i.join("")+"</ol>";case r.image:var a=t.linkTo?s.Link.url(t.linkTo,e.exports.linkResolver):null,o=t.linkTo&&t.linkTo.target?'target="'+t.linkTo.target+'" rel="noopener"':"",l=[t.label||"","block-img"],c='<img src="'+t.url+'" alt="'+(t.alt||"")+'" copyright="'+(t.copyright||"")+'">';return'\n        <p class="'+l.join(" ")+'">\n          '+(a?"<a "+o+' href="'+a+'">'+c+"</a>":c)+"\n        </p>\n      ";case r.embed:return'\n        <div data-oembed="'+t.oembed.embed_url+'"\n          data-oembed-type="'+t.oembed.type+'"\n          data-oembed-provider="'+t.oembed.provider_name+'"\n        >\n          '+t.oembed.html+"\n        </div>\n      ";case r.hyperlink:return"<a "+(t.data.target?'target="'+t.data.target+'" rel="noopener"':"")+' href="'+(a=s.Link.url(t.data,e.exports.linkResolver))+'">'+i.join("")+"</a>";case r.label:return"<span "+(t.data.label?' class="'+t.data.label+'"':"")+">"+i.join("")+"</span>";case r.span:return n?n.replace(/\n/g,"<br />"):"";default:return null}};t.a={components:{PrismicRichText:a.a},props:["content"],name:"Serializer",data:function(){return{serializedContent:null}},methods:{serialize:function(){this.serializedContent=s.RichText.asHtml(this.content,o,l)}},created:function(){this.serialize()},watch:{content:function(){this.serialize()}}}}).call(t,n("f1Eh")(e))},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("mtWM"),a=n.n(i),s=n("Rf8U"),r=n.n(s),o=n("7cGW"),l=n.n(o),c=n("FhMH"),d=n.n(c),u=n("7+uW"),p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var h=n("VU/8")({name:"App"},p,!1,function(e){n("5xog")},null,null).exports,f=n("/ocq"),v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("nav",{attrs:{id:"header-nav"}},[t("span",{staticClass:"left"},[this._v("\n      Left\n    ")]),this._v(" "),t("span",{staticClass:"logo"},[this._v("\n      Logo\n    ")]),this._v(" "),t("span",{staticClass:"right"},[this._v("\n      Right\n    ")])])])}]};var m=n("VU/8")({name:"Navbar"},v,!1,function(e){n("9xbj")},"data-v-35fc1547",null).exports,_=n("JNrq"),g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"serialized"},[t("span",{domProps:{innerHTML:this._s(this.serializedContent)}})])},staticRenderFns:[]};var y=function(e){n("Aq9P")},b=n("VU/8")(_.a,g,!1,y,"data-v-6841433c",null).exports,k={components:{Serializer:b},data:function(){return{endpoint:"https://shuttyja-portfolio.cdn.prismic.io/api/v2",skills:null,showInfo:!1,selectedInfo:null}},methods:{pullData:function(){var e=this;l.a.getApi(this.endpoint,{}).then(function(e){return e.query(l.a.Predicates.at("document.type","skill"),{orderings:"[my.skill.index]"})}).then(function(t){e.skills=t.results})},skillInfo:function(e){this.showInfo=!0,this.selectedInfo=e},clearSkill:function(){this.showInfo=!1}},computed:{},created:function(){this.pullData()}},C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"skills"},[n("div",{staticClass:"fullwidth"},[n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[e._v("Primary Skills")]),e._v(" "),n("div",{staticClass:"skill-grid"},e._l(e.skills,function(t){return n("div",{key:t.id,staticClass:"skill-wrap",class:{selected:t==e.selectedInfo},on:{mouseover:function(n){e.skillInfo(t)}}},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:t.data.logo.url,alt:t.data.logo.alt}})]),e._v(" "),n("div",{staticClass:"title"},[e._v(e._s(t.data.skill_name[0].text))])])}))])]),e._v(" "),e.showInfo?n("div",{staticClass:"info-pop"},[n("span",{staticClass:"close-pop",on:{click:e.clearSkill}},[e._v("×")]),e._v(" "),n("img",{attrs:{src:e.selectedInfo.data.logo.url,alt:e.selectedInfo.data.logo.alt}}),e._v(" "),n("serializer",{attrs:{content:e.selectedInfo.data.skill_info}})],1):e._e(),e._v(" "),n("div",{staticClass:"desktop container"},[e.showInfo?n("div",{staticClass:"info"},[n("serializer",{attrs:{content:e.selectedInfo.data.skill_info}})],1):e._e()])])},staticRenderFns:[]};var x={data:function(){return{}},methods:{perspectiveHover:function(e,t){var n=this,i=document.querySelector(".rel");this.perspective=function(e,n){var i=n.offsetLeft,a=n.offsetTop,s=n.offsetWidth,r=n.offsetHeight,o=e.pageX,l=e.pageY,c=-(s/2-(o-i))/(s/2)*t,d=(r/2-(l-a))/(r/2)*t;n.style.transform="rotateX("+d+"deg) rotateY("+c+"deg)"},i.addEventListener("mousemove",function(e){e.target.classList.contains("js-perspective-card")&&n.perspective(e,e.target)})}},computed:{},mounted:function(){this.perspectiveHover(".js-perspective-card",2)}},j={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"rel"},[t("div",{staticClass:"js-perspective"},[t("div",{staticClass:"perspective-card-wrap"},[t("div",{staticClass:"js-perspective-card perspective-card"},[t("div",{staticClass:"perspective-card__content"},[t("h1",[this._v("Jacob Shutty")])])])])])])}]};var S={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-banner"},[t("div",{staticClass:"container"},[t("div",{staticClass:"banner-header"},[t("h1",[this._v("Portfolio")]),this._v(" "),t("p",[this._v("Lorem ipsum dolor sit amet consectetur adipisicing elit.")])])])])}]};var I={components:{Serializer:b},data:function(){return{endpoint:"https://shuttyja-portfolio.cdn.prismic.io/api/v2",artwork:null,hoveredItem:null,expandedItem:null}},methods:{pullData:function(){var e=this;l.a.getApi(this.endpoint,{}).then(function(e){return e.query(l.a.Predicates.at("document.type","art"))}).then(function(t){e.artwork=t.results})},hovered:function(e){this.hoveredItem=e},expand:function(e){this.expandedItem==e?this.expandedItem=null:this.expandedItem=e}},mounted:function(){this.pullData()}},E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"art"},[e._m(0),e._v(" "),n("div",{staticClass:"fullwidth"},[n("div",{staticClass:"art-section"},e._l(e.artwork,function(t){return n("div",{key:t.id,staticClass:"art-wrap",class:{open:t==e.hoveredItem,closed:t!=e.hoveredItem,expanded:t==e.expandedItem},style:{backgroundImage:"url("+t.data.art_image.url+")"},on:{mouseover:function(n){e.hovered(t)},click:function(n){e.expand(t)}}},[n("div",{staticClass:"expanded-wrap"},[n("img",{staticClass:"expanded-img",attrs:{src:t.data.art_image.url}}),e._v(" "),n("serializer",{attrs:{content:t.data.info}})],1),e._v(" "),n("span",{staticClass:"dim"}),e._v(" "),n("span",{staticClass:"plus"},[e._v("+")])])}))])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"header"},[this._v("Art/Design Work")])])}]};var w={name:"Home",components:{Navbar:m,SkillGrid:n("VU/8")(k,C,!1,function(e){n("3pC+")},"data-v-484b14e1",null).exports,PerspectiveBanner:n("VU/8")(x,j,!1,function(e){n("QhAf")},"data-v-0c9c265d",null).exports,Banner:n("VU/8")({name:"Banner",components:{}},S,!1,function(e){n("Y8ZH")},"data-v-570ddd84",null).exports,Art:n("VU/8")(I,E,!1,function(e){n("6npt")},"data-v-23a6efcf",null).exports}},z={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home page"},[t("perspective-banner"),this._v(" "),t("skill-grid"),this._v(" "),t("art")],1)},staticRenderFns:[]};var N=n("VU/8")(w,z,!1,function(e){n("SnFB")},"data-v-53c9647f",null).exports;u.a.use(f.a);var R=new f.a({mode:"history",routes:[{path:"/",name:"Home",component:N}]}),T=n("mM94");u.a.use(T.a),u.a.use(r.a,a.a),u.a.use(l.a),u.a.use(d.a),u.a.config.productionTip=!1,new u.a({el:"#app",router:R,components:{App:h},template:"<App/>"})},QhAf:function(e,t){},SnFB:function(e,t){},Y8ZH:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.cf27da906718ebe13b3b.js.map