(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{gaSu:function(t,e,n){"use strict";n.r(e),n.d(e,"DevTestModule",function(){return Pt});var i=n("tyNb"),c=n("ofXK"),o=n("zwnO"),s=n("EF3F"),l=n("XNiG"),a=n("1G5W"),r=n("fXoL");const d=["host"];function u(t,e){1&t&&r.mc(0)}const b=["*"];let h=(()=>{class t{constructor(){this.hidden="none",this.direction="right"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Jb({type:t,selectors:[["layout-default-header-item"]],viewQuery:function(t,e){if(1&t&&r.Ic(d,!0),2&t){let t;r.xc(t=r.dc())&&(e.host=t.first)}},inputs:{hidden:"hidden",direction:"direction"},ngContentSelectors:b,decls:2,vars:0,consts:[["host",""]],template:function(t,e){1&t&&(r.nc(),r.Nc(0,u,1,0,"ng-template",null,0,r.Oc))},encapsulation:2}),t})();var p=n("PScX");function g(t,e){1&t&&r.Qb(0,"div",6)}function f(t,e){1&t&&r.Rb(0)}function m(t,e){1&t&&r.Rb(0)}function v(t,e){1&t&&r.Rb(0)}const _=["*"];let y=(()=>{class t{constructor(t,e,n,c,o,s){this.settings=n,this.el=c,this.renderer=o,this.doc=s,this.destroy$=new l.a,this.isFetching=!1,t.events.pipe(Object(a.a)(this.destroy$)).subscribe(t=>{if(!this.isFetching&&t instanceof i.i&&(this.isFetching=!0),t instanceof i.d||t instanceof i.b)return this.isFetching=!1,void(t instanceof i.d&&e.error(`Could not load ${t.url} route`,{nzDuration:3e3}));(t instanceof i.c||t instanceof i.h)&&this.isFetching&&setTimeout(()=>{this.isFetching=!1},100)})}setClass(){const{el:t,doc:e,renderer:n,settings:i}=this,c=i.layout;Object(s.r)(t.nativeElement,n,{"alain-default":!0,"alain-default__fixed":c.fixed,"alain-default__collapsed":c.collapsed}),e.body.classList[c.colorWeak?"add":"remove"]("color-weak")}ngOnInit(){if(null==this.options)throw new Error("Please specify the [options] parameter, otherwise the layout display cannot be completed");const{settings:t,destroy$:e}=this;t.notify.pipe(Object(a.a)(e)).subscribe(()=>this.setClass()),this.setClass()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(i.j),r.Pb(p.b),r.Pb(o.n),r.Pb(r.l),r.Pb(r.E),r.Pb(c.e))},t.\u0275cmp=r.Jb({type:t,selectors:[["layout-default"]],contentQueries:function(t,e,n){if(1&t&&r.Ib(n,h,!1),2&t){let t;r.xc(t=r.dc())&&(e.headerItems=t)}},inputs:{options:"options",asideUser:"asideUser",nav:"nav",content:"content"},ngContentSelectors:_,decls:10,vars:4,consts:[["class","alain-default__progress-bar",4,"ngIf"],[1,"alain-default__aside"],[1,"alain-default__aside-inner"],[4,"ngTemplateOutlet"],[1,"d-block","py-lg"],[1,"alain-default__content"],[1,"alain-default__progress-bar"]],template:function(t,e){1&t&&(r.nc(),r.Nc(0,g,1,0,"div",0),r.Qb(1,"layout-default-header"),r.Vb(2,"div",1),r.Vb(3,"div",2),r.Nc(4,f,1,0,"ng-container",3),r.Nc(5,m,1,0,"ng-container",3),r.Qb(6,"layout-default-nav",4),r.Ub(),r.Ub(),r.Vb(7,"section",5),r.Nc(8,v,1,0,"ng-container",3),r.mc(9),r.Ub()),2&t&&(r.oc("ngIf",e.isFetching),r.Bb(4),r.oc("ngTemplateOutlet",e.asideUser),r.Bb(1),r.oc("ngTemplateOutlet",e.nav),r.Bb(3),r.oc("ngTemplateOutlet",e.content))},encapsulation:2}),t})();var O=n("ZE2D"),x=n("Nqz0"),w=n("FwiY"),C=n("nJia");function T(t,e){1&t&&r.Rb(0)}function k(t,e){if(1&t&&(r.Vb(0,"li"),r.Nc(1,T,1,0,"ng-container",12),r.Ub()),2&t){const t=e.$implicit;r.Hb("hidden-mobile","mobile"===t.hidden)("hidden-pc","pc"===t.hidden),r.Bb(1),r.oc("ngTemplateOutlet",t.host)}}function z(t,e){1&t&&r.Nc(0,k,2,5,"li",11),2&t&&r.oc("ngForOf",e.$implicit)}function B(t,e){}function P(t,e){1&t&&r.Rb(0)}function S(t,e){if(1&t&&(r.Vb(0,"div",13),r.Nc(1,P,1,0,"ng-container",12),r.Ub()),2&t){const t=r.gc();r.Bb(1),r.oc("ngTemplateOutlet",t.middle[0].host)}}function N(t,e){}const I=function(){return["/"]},U=function(t){return{$implicit:t}};let L=(()=>{class t{constructor(t,e,n){this.settings=t,this.parent=e,this.cdr=n,this.destroy$=new l.a,this.left=[],this.middle=[],this.right=[]}get options(){return this.parent.options}get app(){return this.settings.app}get collapsed(){return this.settings.layout.collapsed}get collapsedIcon(){let t=this.collapsed?"unfold":"fold";return"rtl"===this.settings.layout.direction&&(t=this.collapsed?"fold":"unfold"),`menu-${t}`}refresh(){const t=this.parent.headerItems.toArray();this.left=t.filter(t=>"left"===t.direction),this.middle=t.filter(t=>"middle"===t.direction),this.right=t.filter(t=>"right"===t.direction),this.cdr.detectChanges()}ngAfterViewInit(){this.parent.headerItems.changes.pipe(Object(a.a)(this.destroy$)).subscribe(()=>this.refresh()),this.refresh()}toggleCollapsed(){this.settings.setLayout("collapsed",!this.settings.layout.collapsed)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(o.n),r.Pb(y),r.Pb(r.h))},t.\u0275cmp=r.Jb({type:t,selectors:[["layout-default-header"]],hostVars:2,hostBindings:function(t,e){2&t&&r.Hb("alain-default__header",!0)},decls:15,vars:16,consts:[["render",""],[1,"alain-default__header-logo"],[1,"alain-default__header-logo-link",3,"routerLink"],[1,"alain-default__header-logo-expanded",2,"max-height","40px"],[1,"alain-default__header-logo-collapsed",2,"max-height","30px"],[1,"alain-default__nav-wrap"],[1,"alain-default__nav"],[1,"alain-default__nav-item",3,"click"],["nz-icon","",3,"nzType"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","alain-default__nav alain-default__nav-middle",4,"ngIf"],[3,"hidden-mobile","hidden-pc",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet"],[1,"alain-default__nav","alain-default__nav-middle"]],template:function(t,e){if(1&t&&(r.Nc(0,z,1,1,"ng-template",null,0,r.Oc),r.Vb(2,"div",1),r.Vb(3,"a",2),r.Qb(4,"img",3),r.Qb(5,"img",4),r.Ub(),r.Ub(),r.Vb(6,"div",5),r.Vb(7,"ul",6),r.Vb(8,"li"),r.Vb(9,"div",7),r.cc("click",function(){return e.toggleCollapsed()}),r.Qb(10,"i",8),r.Ub(),r.Ub(),r.Nc(11,B,0,0,"ng-template",9),r.Ub(),r.Nc(12,S,2,1,"div",10),r.Vb(13,"ul",6),r.Nc(14,N,0,0,"ng-template",9),r.Ub(),r.Ub()),2&t){const t=r.yc(1);r.Bb(3),r.oc("routerLink",r.sc(11,I)),r.Bb(1),r.Cb("src",e.options.logoExpanded,r.Ec)("alt",e.app.name),r.Bb(1),r.Cb("src",e.options.logoCollapsed,r.Ec)("alt",e.app.name),r.Bb(5),r.oc("nzType",e.collapsedIcon),r.Bb(1),r.oc("ngTemplateOutlet",t)("ngTemplateOutletContext",r.tc(12,U,e.left)),r.Bb(1),r.oc("ngIf",e.middle.length>0),r.Bb(2),r.oc("ngTemplateOutlet",t)("ngTemplateOutletContext",r.tc(14,U,e.right))}},directives:[i.m,w.a,c.t,c.o,c.n],encapsulation:2,changeDetection:0}),t})();var E=n("mrSG"),V=n("pLZG"),j=n("jhN1"),$=n("cH1L");function M(t,e){if(1&t&&r.Qb(0,"i",10),2&t){const t=r.gc(2).$implicit;r.oc("nzType",t.value)("nzTheme",t.theme)("nzSpin",t.spin)("nzTwotoneColor",t.twoToneColor)("nzIconfont",t.iconfont)("nzRotate",t.rotate)}}function D(t,e){if(1&t&&r.Qb(0,"i",11),2&t){const t=r.gc(2).$implicit;r.oc("nzIconfont",t.iconfont)}}function Q(t,e){if(1&t&&r.Qb(0,"img",12),2&t){const t=r.gc(2).$implicit;r.oc("src",t.value,r.Ec)}}function A(t,e){if(1&t&&r.Qb(0,"i"),2&t){const t=r.gc(2).$implicit;r.Eb("sidebar-nav__item-icon ",t.value,"")}}function F(t,e){if(1&t&&(r.Tb(0,5),r.Nc(1,M,1,6,"i",6),r.Nc(2,D,1,1,"i",7),r.Nc(3,Q,1,1,"img",8),r.Nc(4,A,1,3,"i",9),r.Sb()),2&t){const t=r.gc().$implicit;r.oc("ngSwitch",t.type),r.Bb(1),r.oc("ngSwitchCase","icon"),r.Bb(1),r.oc("ngSwitchCase","iconfont"),r.Bb(1),r.oc("ngSwitchCase","img")}}function H(t,e){1&t&&r.Nc(0,F,5,4,"ng-container",4),2&t&&r.oc("ngIf",e.$implicit)}function R(t,e){}const J=function(t){return{$implicit:t}};function W(t,e){if(1&t&&(r.Tb(0),r.Nc(1,R,0,0,"ng-template",23),r.Sb()),2&t){const t=r.gc(4).$implicit;r.gc(2);const e=r.yc(1);r.Bb(1),r.oc("ngTemplateOutlet",e)("ngTemplateOutletContext",r.tc(2,J,t.icon))}}function q(t,e){}function G(t,e){if(1&t&&(r.Vb(0,"span",24),r.Nc(1,q,0,0,"ng-template",23),r.Ub()),2&t){const t=r.gc(4).$implicit;r.gc(2);const e=r.yc(1);r.oc("nzTooltipTitle",t.text),r.Bb(1),r.oc("ngTemplateOutlet",e)("ngTemplateOutletContext",r.tc(3,J,t.icon))}}function Z(t,e){if(1&t&&(r.Tb(0),r.Nc(1,W,2,4,"ng-container",20),r.Nc(2,G,2,5,"span",22),r.Sb()),2&t){const t=r.gc(5);r.Bb(1),r.oc("ngIf",!t.collapsed),r.Bb(1),r.oc("ngIf",t.collapsed)}}const X=function(t){return{"sidebar-nav__item-disabled":t}};function K(t,e){if(1&t){const t=r.Wb();r.Vb(0,"a",19),r.cc("click",function(){r.Bc(t);const e=r.gc(2).$implicit;return r.gc(2).to(e)}),r.Nc(1,Z,3,2,"ng-container",20),r.Qb(2,"span",21),r.Ub()}if(2&t){const t=r.gc(2).$implicit;r.oc("ngClass",r.tc(5,X,t.disabled)),r.Cb("data-id",t._id),r.Bb(1),r.oc("ngIf",t._needIcon),r.Bb(1),r.oc("innerHTML",t._text,r.Cc),r.Cb("title",t.text)}}function Y(t,e){}function tt(t,e){if(1&t){const t=r.Wb();r.Vb(0,"a",25),r.cc("click",function(){r.Bc(t);const e=r.gc(2).$implicit;return r.gc(2).toggleOpen(e)})("mouseenter",function(e){r.Bc(t);const n=r.gc(2).$implicit;return r.gc(2).showSubMenu(e,n)}),r.Nc(1,Y,0,0,"ng-template",23),r.Qb(2,"span",21),r.Qb(3,"i",26),r.Ub()}if(2&t){const t=r.gc(2).$implicit;r.gc(2);const e=r.yc(1);r.Bb(1),r.oc("ngTemplateOutlet",e)("ngTemplateOutletContext",r.tc(4,J,t.icon)),r.Bb(1),r.oc("innerHTML",t._text,r.Cc),r.Cb("title",t.text)}}function et(t,e){if(1&t&&(r.Vb(0,"div"),r.Vb(1,"em"),r.Pc(2),r.Ub(),r.Ub()),2&t){const t=r.gc(2).$implicit;r.Eb("badge badge-",t.badgeStatus,""),r.Hb("badge-dot",t.badgeDot),r.Cb("title",t.badge),r.Bb(2),r.Qc(t.badge)}}function nt(t,e){}function it(t,e){if(1&t&&(r.Vb(0,"ul"),r.Nc(1,nt,0,0,"ng-template",23),r.Ub()),2&t){const t=r.gc(2).$implicit;r.gc(2);const e=r.yc(3);r.Eb("sidebar-nav sidebar-nav__sub sidebar-nav__depth",t._depth,""),r.Bb(1),r.oc("ngTemplateOutlet",e)("ngTemplateOutletContext",r.tc(5,J,t.children))}}function ct(t,e){if(1&t&&(r.Vb(0,"li",14),r.Nc(1,K,3,7,"a",15),r.Nc(2,tt,4,6,"a",16),r.Nc(3,et,3,7,"div",17),r.Nc(4,it,2,7,"ul",18),r.Ub()),2&t){const t=r.gc().$implicit;r.Hb("sidebar-nav__selected",t._selected)("sidebar-nav__open",t._open),r.Bb(1),r.oc("ngIf",0===t.children.length),r.Bb(1),r.oc("ngIf",t.children.length>0),r.Bb(1),r.oc("ngIf",t.badge),r.Bb(1),r.oc("ngIf",t.children.length>0)}}function ot(t,e){if(1&t&&(r.Tb(0),r.Nc(1,ct,5,8,"li",13),r.Sb()),2&t){const t=e.$implicit;r.Bb(1),r.oc("ngIf",!0!==t._hidden)}}function st(t,e){1&t&&r.Nc(0,ot,2,1,"ng-container",3),2&t&&r.oc("ngForOf",e.$implicit)}function lt(t,e){if(1&t&&(r.Vb(0,"li",28),r.Qb(1,"span",29),r.Ub()),2&t){const t=r.gc().$implicit;r.Bb(1),r.oc("innerHTML",t._text,r.Cc)}}function at(t,e){}function rt(t,e){if(1&t&&(r.Tb(0),r.Nc(1,lt,2,1,"li",27),r.Nc(2,at,0,0,"ng-template",23),r.Sb()),2&t){const t=e.$implicit;r.gc();const n=r.yc(3);r.Bb(1),r.oc("ngIf",t.group),r.Bb(1),r.oc("ngTemplateOutlet",n)("ngTemplateOutletContext",r.tc(3,J,t.children))}}const dt="sidebar-nav__floating-show",ut="sidebar-nav__floating";let bt=(()=>{class t{constructor(t,e,n,i,c,o,s,a,d,u){this.menuSrv=t,this.settings=e,this.router=n,this.render=i,this.cdr=c,this.ngZone=o,this.sanitizer=s,this.doc=a,this.win=d,this.directionality=u,this.destroy$=new l.a,this.dir="ltr",this.list=[],this.disabledAcl=!1,this.autoCloseUnderPad=!0,this.recursivePath=!0,this.openStrictly=!1,this.maxLevelIcon=3,this.select=new r.n}get collapsed(){return this.settings.layout.collapsed}getLinkNode(t){return"A"!==(t="A"===t.nodeName?t:t.parentNode).nodeName?null:t}floatingClickHandle(t){t.stopPropagation();const e=this.getLinkNode(t.target);if(null==e)return!1;const n=+e.dataset.id;if(isNaN(n))return!1;let i;return this.menuSrv.visit(this.list,t=>{i||t._id!==n||(i=t)}),this.to(i),this.hideAll(),t.preventDefault(),!1}clearFloating(){this.floatingEl&&(this.floatingEl.removeEventListener("click",this.floatingClickHandle.bind(this)),this.floatingEl.hasOwnProperty("remove")?this.floatingEl.remove():this.floatingEl.parentNode&&this.floatingEl.parentNode.removeChild(this.floatingEl))}genFloating(){this.clearFloating(),this.floatingEl=this.render.createElement("div"),this.floatingEl.classList.add(ut+"-container"),this.floatingEl.addEventListener("click",this.floatingClickHandle.bind(this),!1),this.bodyEl.appendChild(this.floatingEl)}genSubNode(t,e){const n=`_sidebar-nav-${e._id}`,i=(e.badge?t.nextElementSibling.nextElementSibling:t.nextElementSibling).cloneNode(!0);return i.id=n,i.classList.add(ut),i.addEventListener("mouseleave",()=>{i.classList.remove(dt)},!1),this.floatingEl.appendChild(i),i}hideAll(){const t=this.floatingEl.querySelectorAll("."+ut);for(let e=0;e<t.length;e++)t[e].classList.remove(dt)}calPos(t,e){const n=t.getBoundingClientRect(),i=Math.max(this.doc.documentElement.scrollTop,this.bodyEl.scrollTop),c=Math.max(this.doc.documentElement.clientHeight,this.bodyEl.clientHeight);let o=-5;c<n.top+e.clientHeight&&(o=n.top+e.clientHeight-c+5),e.style.top=n.top+i-o+"px","rtl"===this.dir?e.style.right=`${n.width+5}px`:e.style.left=`${n.right+5}px`}showSubMenu(t,e){!0===this.collapsed&&this.ngZone.runOutsideAngular(()=>{t.preventDefault();const n=t.target;this.genFloating();const i=this.genSubNode(n,e);this.hideAll(),i.classList.add(dt),this.calPos(n,i)})}to(t){this.select.emit(t),t.disabled||(t.externalLink?"_blank"===t.target?this.win.open(t.externalLink):this.win.location.href=t.externalLink:this.ngZone.run(()=>this.router.navigateByUrl(t.link)))}toggleOpen(t){if(!this.openStrictly){this.menuSrv.visit(this.list,e=>{e!==t&&(e._open=!1)});let e=t._parent;for(;e;)e._open=!0,e=e._parent}t._open=!t._open,this.cdr.markForCheck()}_click(){this.isPad&&this.collapsed&&(this.openAside(!1),this.hideAll())}_docClick(){this.collapsed&&this.hideAll()}openedByUrl(t){const{menuSrv:e,recursivePath:n,openStrictly:i}=this;let c=e.getHit(this.menuSrv.menus,t,n,t=>{t._selected=!1,i||(t._open=!1)});if(null!=c)do{c._selected=!0,i||(c._open=!0),c=c._parent}while(c)}ngOnInit(){var t;const{doc:e,router:n,destroy$:c,menuSrv:o,settings:s,cdr:l}=this;this.bodyEl=e.querySelector("body"),this.openedByUrl(n.url),this.ngZone.runOutsideAngular(()=>this.genFloating()),o.change.pipe(Object(a.a)(c)).subscribe(t=>{o.visit(t,(t,e,n)=>{t._text=this.sanitizer.bypassSecurityTrustHtml(t.text),t._needIcon=n<=this.maxLevelIcon&&!!t.icon,t._aclResult||(this.disabledAcl?t.disabled=!0:t._hidden=!0),this.openStrictly&&(t._open=null!=t.open&&t.open)}),this.list=o.menus.filter(t=>!0!==t._hidden),l.detectChanges()}),n.events.pipe(Object(a.a)(c)).subscribe(t=>{t instanceof i.c&&(this.openedByUrl(t.urlAfterRedirects),this.underPad(),this.cdr.detectChanges())}),s.notify.pipe(Object(a.a)(c),Object(V.a)(t=>"layout"===t.type&&"collapsed"===t.name)).subscribe(()=>this.clearFloating()),this.underPad(),this.dir=this.directionality.value,null===(t=this.directionality.change)||void 0===t||t.pipe(Object(a.a)(c)).subscribe(t=>{this.dir=t})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.clearFloating()}get isPad(){return this.doc.defaultView.innerWidth<768}underPad(){this.autoCloseUnderPad&&this.isPad&&!this.collapsed&&setTimeout(()=>this.openAside(!0))}openAside(t){this.settings.setLayout("collapsed",t)}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(o.h),r.Pb(o.n),r.Pb(i.j),r.Pb(r.E),r.Pb(r.h),r.Pb(r.z),r.Pb(j.b),r.Pb(c.e),r.Pb(o.q),r.Pb($.c,8))},t.\u0275cmp=r.Jb({type:t,selectors:[["layout-default-nav"]],hostBindings:function(t,e){1&t&&r.cc("click",function(){return e._click()})("click",function(){return e._docClick()},!1,r.zc)},inputs:{disabledAcl:"disabledAcl",autoCloseUnderPad:"autoCloseUnderPad",recursivePath:"recursivePath",openStrictly:"openStrictly",maxLevelIcon:"maxLevelIcon"},outputs:{select:"select"},decls:6,vars:1,consts:[["icon",""],["tree",""],[1,"sidebar-nav"],[4,"ngFor","ngForOf"],[3,"ngSwitch",4,"ngIf"],[3,"ngSwitch"],["class","sidebar-nav__item-icon","nz-icon","",3,"nzType","nzTheme","nzSpin","nzTwotoneColor","nzIconfont","nzRotate",4,"ngSwitchCase"],["class","sidebar-nav__item-icon","nz-icon","",3,"nzIconfont",4,"ngSwitchCase"],["class","sidebar-nav__item-icon sidebar-nav__item-img",3,"src",4,"ngSwitchCase"],[3,"class",4,"ngSwitchDefault"],["nz-icon","",1,"sidebar-nav__item-icon",3,"nzType","nzTheme","nzSpin","nzTwotoneColor","nzIconfont","nzRotate"],["nz-icon","",1,"sidebar-nav__item-icon",3,"nzIconfont"],[1,"sidebar-nav__item-icon","sidebar-nav__item-img",3,"src"],["class","sidebar-nav__item",3,"sidebar-nav__selected","sidebar-nav__open",4,"ngIf"],[1,"sidebar-nav__item"],["class","sidebar-nav__item-link",3,"ngClass","click",4,"ngIf"],["class","sidebar-nav__item-link",3,"click","mouseenter",4,"ngIf"],[3,"class","badge-dot",4,"ngIf"],[3,"class",4,"ngIf"],[1,"sidebar-nav__item-link",3,"ngClass","click"],[4,"ngIf"],[1,"sidebar-nav__item-text",3,"innerHTML"],["nz-tooltip","","nzTooltipPlacement","right",3,"nzTooltipTitle",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["nz-tooltip","","nzTooltipPlacement","right",3,"nzTooltipTitle"],[1,"sidebar-nav__item-link",3,"click","mouseenter"],[1,"sidebar-nav__sub-arrow"],["class","sidebar-nav__item sidebar-nav__group-title",4,"ngIf"],[1,"sidebar-nav__item","sidebar-nav__group-title"],[3,"innerHTML"]],template:function(t,e){1&t&&(r.Nc(0,H,1,1,"ng-template",null,0,r.Oc),r.Nc(2,st,1,1,"ng-template",null,1,r.Oc),r.Vb(4,"ul",2),r.Nc(5,rt,3,5,"ng-container",3),r.Ub()),2&t&&(r.Bb(5),r.oc("ngForOf",e.list))},directives:[c.n,c.o,c.q,c.r,c.s,w.a,c.m,c.t,C.d],encapsulation:2,changeDetection:0}),Object(E.b)([Object(s.d)(),Object(E.c)("design:type",Object)],t.prototype,"disabledAcl",void 0),Object(E.b)([Object(s.d)(),Object(E.c)("design:type",Object)],t.prototype,"autoCloseUnderPad",void 0),Object(E.b)([Object(s.d)(),Object(E.c)("design:type",Object)],t.prototype,"recursivePath",void 0),Object(E.b)([Object(s.d)(),Object(E.c)("design:type",Object)],t.prototype,"openStrictly",void 0),Object(E.b)([Object(s.e)(),Object(E.c)("design:type",Object)],t.prototype,"maxLevelIcon",void 0),t})(),ht=(()=>{class t{}return t.\u0275mod=r.Nb({type:t}),t.\u0275inj=r.Mb({factory:function(e){return new(e||t)},imports:[[c.c,i.n,C.b,w.b,O.b,x.c]]}),t})();r.Fc(y,[c.o,L,c.t,bt],[]);var pt=n("PCNd"),gt=n("Isyt");let ft=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Jb({type:t,selectors:[["app-demo"]],decls:1,vars:0,template:function(t,e){1&t&&r.Qb(0,"setting-drawer")},directives:[gt.a],encapsulation:2}),t})();var mt=n("ByMC");let vt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Jb({type:t,selectors:[["dev-home"]],decls:2,vars:1,consts:[[3,"autoBreadcrumb"]],template:function(t,e){1&t&&(r.Qb(0,"page-header",0),r.Pc(1," home ")),2&t&&r.oc("autoBreadcrumb",!1)},directives:[mt.a],encapsulation:2}),t})();var _t=n("kVq8"),yt=n("C2AL"),Ot=n("UKzi"),xt=n("Q8cG");function wt(t,e){if(1&t&&(r.Vb(0,"div",10),r.Qb(1,"nz-avatar",11),r.Vb(2,"div",12),r.Vb(3,"strong"),r.Pc(4),r.Ub(),r.Vb(5,"p",13),r.Pc(6),r.Ub(),r.Ub(),r.Ub(),r.Vb(7,"nz-dropdown-menu",null,14),r.Vb(9,"ul",15),r.Vb(10,"li",16),r.Pc(11),r.Ub(),r.Vb(12,"li",17),r.Pc(13),r.Ub(),r.Ub(),r.Ub()),2&t){const t=r.yc(8),e=r.gc();r.oc("nzDropdownMenu",t),r.Bb(1),r.oc("nzSrc",e.user.avatar),r.Bb(3),r.Qc(e.user.name),r.Bb(2),r.Qc(e.user.email),r.Bb(5),r.Qc("menu.account.center"),r.Bb(2),r.Qc("menu.account.settings")}}const Ct=[_t.Y,_t.ab,_t.ib,_t.jb,_t.M,_t.L,_t.c,_t.W,_t.cb,_t.ub,_t.X,_t.A,_t.O,_t.N,_t.a];let Tt=(()=>{class t{constructor(t,e,n,i,c,o){this.menuSrv=e,this.settings=n,this.msgSrv=i,this.i18n=c,this.rtl=o,this.options={logoExpanded:"./assets/logo-full.svg",logoCollapsed:"./assets/logo.svg"},this.lang="zh-CN",this.menus=[{text:"test",group:!0,children:[{text:"Dashboard-DISABLED",link:"/dev",icon:"anticon anticon-dashboard",i18n:"app.header.menu.home",badge:5,disabled:!0},{text:"\u6d4b\u8bd5view1-id",link:"/dev/view/1"},{text:"\u6d4b\u8bd5view2-id",link:"/dev/view/2"},{text:"lazy\u6d4b\u8bd51",link:"/dev/lazy/p1"},{text:"lazy\u6d4b\u8bd52",link:"/dev/lazy/p2"},{text:"lazy\u6d4b\u8bd5view1-id",link:"/dev/lazy/1/view"},{text:"lazy\u6d4b\u8bd5view2-id",link:"/dev/lazy/2/view"},{text:"Level1",link:"#",icon:"anticon anticon-appstore",children:[{text:"Level2",link:"#",children:[{text:"Level3A",link:"/dev/l1"},{text:"Level3B-DISABLED",link:"/dev/l1",disabled:!0}]},{text:"Level2-DISABLED",link:"/dev/l2",disabled:!0}]},{text:"ABC",icon:"anticon anticon-appstore",children:[{text:"Reuse Tab1",link:"/dev/l1",i18n:"app.header.menu.docs"},{text:"Reuse Tab2",link:"/dev/l2"},{text:"Reuse Tab3",link:"/dev/l3"},{text:"Reuse Tab4",link:"/dev/l4"},{text:"Reuse Tab5",link:"/dev/l5"},{text:"Reuse Tab6",link:"/dev/l6"},{text:"Reuse Tab7",link:"/dev/l7"},{text:"Ellipsis",link:"/dev/l8"}]},{text:"LIST",icon:"anticon anticon-appstore",children:[{text:"list",link:"/dev/list"},{text:"list/item",link:"/dev/list/item"}]}]}],this.customContextMenu=[{id:"custom1",title:"\u81ea\u5b9a\u4e491",fn:(t,e)=>{console.log("\u81ea\u5b9a\u4e491",t,e)}},{id:"custom2",title:"\u81ea\u5b9a\u4e492",disabled:()=>!0,fn:(t,e)=>{console.log("\u81ea\u5b9a\u4e492",t,e)}}],t.addIcon(...Ct)}get user(){return this.settings.user}toggleCollapsedSideabar(){this.settings.setLayout("collapsed",!this.settings.layout.collapsed)}toggleLang(){this.lang="zh-CN"===this.lang?"en-US":"zh-CN",this.i18n.use(this.lang)}ngOnInit(){this.menuSrv.add(this.menus)}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(w.c),r.Pb(o.h),r.Pb(o.n),r.Pb(p.b),r.Pb(o.a),r.Pb(o.k))},t.\u0275cmp=r.Jb({type:t,selectors:[["dev-layout"]],hostVars:2,hostBindings:function(t,e){2&t&&r.Hb("alain-default",!0)},decls:16,vars:7,consts:[[3,"options","asideUser"],["direction","left"],["href","//github.com/ng-alain/ng-alain","target","_blank",1,"alain-default__nav-item"],["nz-icon","","nzType","github"],["direction","right"],[1,"alain-default__nav-item",3,"click"],["asideUserTpl",""],[3,"mode","customContextMenu"],["reuseTab",""],[3,"activate"],["nz-dropdown","","nzTrigger","click",1,"alain-default__aside-user",3,"nzDropdownMenu"],[1,"alain-default__aside-user-avatar",3,"nzSrc"],[1,"alain-default__aside-user-info"],[1,"mb0"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","","routerLink","/pro/account/center"],["nz-menu-item","","routerLink","/pro/account/settings"]],template:function(t,e){if(1&t){const t=r.Wb();r.Vb(0,"layout-default",0),r.Vb(1,"layout-default-header-item",1),r.Vb(2,"a",2),r.Qb(3,"i",3),r.Ub(),r.Ub(),r.Vb(4,"layout-default-header-item",4),r.Vb(5,"a",5),r.cc("click",function(){return e.rtl.toggle()}),r.Pc(6),r.hc(7,"uppercase"),r.Ub(),r.Ub(),r.Vb(8,"layout-default-header-item",4),r.Vb(9,"a",2),r.Pc(10," githbu "),r.Ub(),r.Ub(),r.Nc(11,wt,14,6,"ng-template",null,6,r.Oc),r.Qb(13,"reuse-tab",7,8),r.Vb(15,"router-outlet",9),r.cc("activate",function(e){return r.Bc(t),r.yc(14).activate(e)}),r.Ub(),r.Ub()}if(2&t){const t=r.yc(12);r.oc("options",e.options)("asideUser",t),r.Bb(6),r.Qc(r.ic(7,5,e.rtl.nextDir)),r.Bb(7),r.oc("mode",2)("customContextMenu",e.customContextMenu)}},directives:[y,h,yt.a,w.a,Ot.a,i.o,x.b,O.a,x.e,xt.c,xt.f,i.k],pipes:[c.y],encapsulation:2}),t})();var kt=n("sWYD");let zt=(()=>{class t{constructor(t){this.route=t,this.first=Object(kt.a)(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=Object(kt.a)(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("ngoninit"),this.route.params.subscribe(t=>this.id=+t.id)}_onReuseInit(){this.now=Object(kt.a)(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("by _onReuseInit",this.route.snapshot.url.toString())}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(i.a))},t.\u0275cmp=r.Jb({type:t,selectors:[["dev-page"]],decls:10,vars:12,template:function(t,e){1&t&&(r.Qb(0,"page-header"),r.Vb(1,"p"),r.Pc(2),r.hc(3,"json"),r.hc(4,"json"),r.Ub(),r.Vb(5,"p"),r.Pc(6),r.hc(7,"json"),r.Ub(),r.Pc(8),r.hc(9,"json")),2&t&&(r.Bb(2),r.Sc("first: ",r.ic(3,4,e.first),"\uff0cnow: ",r.ic(4,6,e.now),""),r.Bb(4),r.Rc("id: ",r.ic(7,8,e.id),""),r.Bb(2),r.Rc(" page: ",r.ic(9,10,e.route.url)," "))},directives:[mt.a],pipes:[c.i],encapsulation:2}),t})();const Bt=[{path:"demo",component:ft},{path:"",component:Tt,children:[{path:"",component:vt},{path:"l1",component:zt},{path:"l2",component:zt},{path:"l3",component:zt},{path:"l4",component:zt},{path:"l5",component:zt},{path:"l6",component:zt},{path:"l7",component:zt},{path:"l8",component:zt},{path:"login",component:zt},{path:"view/:id",component:zt},{path:"lazy",loadChildren:()=>n.e(17).then(n.bind(null,"MKz1")).then(t=>t.DevLazyModule)},{path:"list",loadChildren:()=>n.e(18).then(n.bind(null,"PG4m")).then(t=>t.DevListModule)}]}];let Pt=(()=>{class t{}return t.\u0275mod=r.Nb({type:t}),t.\u0275inj=r.Mb({factory:function(e){return new(e||t)},imports:[[pt.a,i.n.forChild(Bt),ht]]}),t})()}}]);