(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{DYYV:function(t,e,n){"use strict";n.r(e),n.d(e,"FormPagesModule",(function(){return F}));var o=n("tyNb"),i=n("fXoL"),s=n("3Pt+"),a=n("ofXK"),r=n("xgIS"),c=n("Kj3r");const l=new i.q("NU_MONACO_EDITOR_CONFIG");let h,u=!1,d=(()=>{class t{constructor(t,e,n,o){this.el=t,this.doc=n,this.ngZone=o,this._disabled=!1,this.height="200px",this.delay=0,this.event=new i.n,this._config=Object.assign({baseUrl:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min"},e),this.options=this._config.defaultOptions}set disabled(t){this._disabled="string"==typeof t||t,this.setDisabled()}set options(t){this._options=Object.assign(Object.assign({},this._config.defaultOptions),t)}get options(){return this._options}initMonaco(t,e){}notifyEvent(t,e){this.ngZone.run(()=>this.event.emit(Object.assign({type:t,editor:this._editor},e)))}setDisabled(){return this._editor&&this._editor.updateOptions({readOnly:this._disabled}),this}init(){u?h.then(()=>this.initMonaco(this.options,!0)):(u=!0,h=new Promise((t,e)=>{const n=window;if(null==n)return void t();if(n.monaco)return void t();const o=this._config.baseUrl,i=()=>{n.require.config({paths:{vs:o+"/vs"}}),n.require(["vs/editor/editor.main"],()=>{"function"==typeof this._config.monacoLoad&&this._config.monacoLoad(n.monaco),this.initMonaco(this.options,!0),t()},()=>{e("Unable to load editor/editor.main module, please check your network environment.")})};if(n.require)i();else{const t=this.doc.createElement("script");t.type="text/javascript",t.src=o+"/vs/loader.js",t.onload=i,t.onerror=()=>e(`Unable to load ${t.src}, please check your network environment.`),this.doc.getElementsByTagName("head")[0].appendChild(t)}}).catch(t=>this.notifyEvent("load-error",{error:t})))}cleanResize(){return this._resize$&&this._resize$.unsubscribe(),this}registerResize(){return this.cleanResize(),this._resize$=Object(r.a)(window,"resize").pipe(Object(c.a)(100)).subscribe(()=>{this._editor.layout(),this.notifyEvent("resize")}),this}updateOptions(){this._editor&&this.ngZone.runOutsideAngular(()=>{this._editor.dispose(),this.initMonaco(this._options,!1)})}ngAfterViewInit(){this.ngZone.runOutsideAngular(()=>setTimeout(()=>this.init(),+this.delay))}ngOnChanges(t){const e=Object.keys(t);1===e.length&&"disabled"===e[0]||this.updateOptions()}ngOnDestroy(){this.cleanResize(),this._editor&&(this._editor.dispose(),this._editor=void 0)}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(i.l),i.Pb(l),i.Pb(a.e),i.Pb(i.z))},t.\u0275cmp=i.Jb({type:t,selectors:[["nu-monaco-base"]],inputs:{height:"height",delay:"delay",options:"options",disabled:"disabled"},outputs:{event:"event"},features:[i.zb],decls:0,vars:0,template:function(t,e){},encapsulation:2}),t})(),m=(()=>{class t extends d{constructor(){super(...arguments),this._value="",this.onChange=t=>{},this.onTouched=()=>{}}get editor(){return this._editor}initMonaco(t,e){const n=!!this.model;if(n){const e=monaco.editor.getModel(this.model.uri||"");if(e)t.model=e,t.model.setValue(this._value);else{const{value:e,language:n,uri:o}=this.model;t.model=monaco.editor.createModel(e||this._value,n,o)}}const o=this._editor=monaco.editor.create(this.el.nativeElement,t);n||o.setValue(this._value),o.onDidChangeModelContent(()=>{const t=o.getValue();this.ngZone.run(()=>{this._value=t,this.onChange(t)})}),o.onDidBlurEditorWidget(()=>this.onTouched()),this.registerResize(),o.getAction("editor.action.formatDocument").run().then(()=>this.notifyEvent(e?"init":"re-init"))}writeValue(t){this._value=t||"",this._editor&&this._editor.setValue(this._value)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t,this.setDisabled()}}return t.\u0275fac=function(e){return b(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["nu-monaco-editor"]],hostVars:4,hostBindings:function(t,e){2&t&&i.Kc("display","block")("height",e.height)},inputs:{model:"model"},exportAs:["nuMonacoEditor"],features:[i.Ab([{provide:s.n,useExisting:Object(i.V)(()=>t),multi:!0}]),i.yb],decls:0,vars:0,template:function(t,e){},encapsulation:2,changeDetection:0}),t})();const b=i.Xb(m);let p=(()=>{class t{static forRoot(e){return{ngModule:t,providers:[{provide:l,useValue:e}]}}}return t.\u0275mod=i.Nb({type:t}),t.\u0275inj=i.Mb({factory:function(e){return new(e||t)},imports:[[a.c]]}),t})();var g=n("0qEG"),f=n("PCNd"),z=n("zwnO"),v=n("EF3F"),y=n("XNiG"),C=n("1G5W"),O=n("THAA"),V=n("lgOS"),S=n("PScX"),_=n("B+r4"),M=n("zAKX"),w=n("bE2y"),E=n("OzZK"),T=n("C2AL"),U=n("RwU8"),B=n("nJia"),D=n("FwiY"),k=n("oyxB"),x=n("w1IW"),j=n("sYmb");const N=["schemaEditor"],P=["formCodeEditor"],$=["uiEditor"];function L(t,e){if(1&t&&i.Qb(0,"nz-option",24),2&t){const t=e.$implicit;i.oc("nzValue",t.name)("nzLabel",t.title)}}function A(t,e){if(1&t){const t=i.Wb();i.Vb(0,"div",1),i.Vb(1,"sf",25),i.cc("formSubmit",(function(e){return i.Bc(t),i.gc().submit(e)}))("formChange",(function(e){return i.Bc(t),i.gc().change(e)}))("formValueChange",(function(e){return i.Bc(t),i.gc().valueChange(e)}))("formError",(function(e){return i.Bc(t),i.gc().error(e)})),i.Ub(),i.Ub()}if(2&t){const t=i.gc();i.oc("nzSpan",t.expand?12:24),i.Bb(1),i.oc("schema",t.schemaData)("formData",t.formData)("ui",t.uiSchema)("layout",t.layout)}}const J=[{path:"",component:g.a,children:[{path:"validator/:lang",component:(()=>{class t{constructor(t,e,n,o,i,s){this.i18n=t,this.codeSrv=e,this.http=n,this.msg=o,this.appService=i,this.cdr=s,this.destroy$=new y.a,this.files=[{name:"basic",title:"\u57fa\u672c"},{name:"conditional",title:"\u6761\u4ef6"},{name:"sort",title:"\u987a\u5e8f"},{name:"validation",title:"\u81ea\u5b9a\u4e49\u6821\u9a8c"},{name:"fixed",title:"\u4e0d\u89c4\u5219\u5e03\u5c40"}],this.layout="horizontal",this.expand=!0,this.editorOptions={language:"json",theme:"vs"},this.name=this.files[0].name,this.title=this.files[0].title,this.appService.theme$.pipe(Object(C.a)(this.destroy$)).subscribe(t=>{this.editorOptions={language:"json",theme:"dark"===t?"vs-dark":"vs"}})}ngOnInit(){this.getSchema()}refreshLayout(t){setTimeout(()=>{this[t].editor.layout()},100)}getSchema(){const t=this.files.find(t=>t.name===this.name);if(t){if(this.name=t.name,this.title=t.title,t.cache)return this.schema=t.cache,void this.run();this.http.get(`./assets/schema/${t.name}.json`,null,{responseType:"text"}).subscribe(e=>{t.cache=e,this.schema=t.cache,this.run()})}}run(){this.schemaData=JSON.parse(this.schema||"{}"),this.formData=JSON.parse(this.formCode||"{}"),this.uiSchema=JSON.parse(this.uiCode||"{}"),this.cdr.detectChanges()}openOnStackBlitz(){const t={schema:this.schema,layout:this.layout,formData:this.formCode||"{}",ui:this.uiCode||"{}"},e="\nimport { Component } from '@angular/core';\nimport { SFSchema } from '@delon/form';\nimport { NzMessageService } from 'ng-zorro-antd/message';\n\n@Component({\n  selector: 'demo',\n  template: `\n  <sf [schema]=\"schema\" [formData]=\"formData\" [ui]=\"ui\" [layout]=\"layout\"\n      (formSubmit)=\"submit($event)\"\n      (formChange)=\"change($event)\"\n      (formError)=\"error($event)\"></sf>\n    `\n})\nexport class DemoComponent {\n  schema = {schema};\n  formData = {formData};\n  ui = {ui};\n  layout = '{layout}';\n\n  constructor(private msg: NzMessageService) { }\n\n  submit(value: any) {\n    this.msg.success(JSON.stringify(value));\n  }\n\n  change(value: any) {\n    console.log('formChange', value);\n  }\n\n  error(value: any) {\n    console.log('formError', value);\n  }\n}".replace(/\{(\w+)\}/g,(e,n)=>(t[n]||"").trim());this.codeSrv.openOnStackBlitz(e)}onCopy(){Object(v.g)(this.schema).then(()=>this.msg.success(this.i18n.fanyi("app.demo.copied")))}submit(t){this.msg.success(JSON.stringify(t))}change(t){console.log("formChange",t)}valueChange(t){console.log("formChange",t)}error(t){console.log("formError",t)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(z.a),i.Pb(O.a),i.Pb(z.q),i.Pb(S.b),i.Pb(V.a),i.Pb(i.h))},t.\u0275cmp=i.Jb({type:t,selectors:[["form-validator"]],viewQuery:function(t,e){var n;1&t&&(i.Tc(N,!0),i.Tc(P,!0),i.Tc($,!0)),2&t&&(i.xc(n=i.dc())&&(e.schemaEditor=n.first),i.xc(n=i.dc())&&(e.formCodeEditor=n.first),i.xc(n=i.dc())&&(e.uiEditor=n.first))},decls:34,vars:22,consts:[["nz-row","",1,"border-bottom-1","pb-sm","mb-md"],["nz-col","",3,"nzSpan"],[3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[1,"ml-sm",3,"ngModel","ngModelChange"],["nz-radio-button","","nzValue","horizontal"],["nz-radio-button","","nzValue","vertical"],["nz-radio-button","","nzValue","inline"],["nz-col","",1,"text-right",3,"nzSpan"],["nz-tooltip","","nz-button","",3,"nzTooltipTitle","click"],["nz-icon","",3,"nzType"],["nz-tooltip","","nz-button","",1,"ml-sm",3,"nzTooltipTitle","click"],["nz-icon","","nzType","form"],["nz-icon","","nzType","copy"],["nz-row","","nzGutter","24",1,"border-bottom-1","pb-sm","mb-md"],["nz-col","",3,"nzSpan","hidden"],["nzTitle","Schema",3,"nzClick"],["height","500px",3,"ngModel","options","ngModelChange"],["schemaEditor",""],["nzTitle","Form Data",3,"nzClick"],["formCodeEditor",""],["nzTitle","UI Schema",3,"nzClick"],["uiEditor",""],["nz-col","",3,"nzSpan",4,"ngIf"],[3,"nzValue","nzLabel"],[3,"schema","formData","ui","layout","formSubmit","formChange","formValueChange","formError"]],template:function(t,e){1&t&&(i.Vb(0,"div",0),i.Vb(1,"div",1),i.Vb(2,"nz-select",2),i.cc("ngModelChange",(function(t){return e.name=t}))("ngModelChange",(function(){return e.getSchema()})),i.Nc(3,L,1,2,"nz-option",3),i.Ub(),i.Vb(4,"nz-radio-group",4),i.cc("ngModelChange",(function(t){return e.layout=t})),i.Vb(5,"label",5),i.Pc(6,"\u6c34\u5e73"),i.Ub(),i.Vb(7,"label",6),i.Pc(8,"\u5782\u76f4"),i.Ub(),i.Vb(9,"label",7),i.Pc(10,"\u884c\u5185"),i.Ub(),i.Ub(),i.Ub(),i.Vb(11,"div",8),i.Vb(12,"nz-button-group"),i.Vb(13,"button",9),i.cc("click",(function(){return e.expand=!e.expand})),i.Qb(14,"i",10),i.Ub(),i.Vb(15,"button",11),i.cc("click",(function(){return e.openOnStackBlitz()})),i.hc(16,"translate"),i.Qb(17,"i",12),i.Ub(),i.Vb(18,"button",11),i.cc("click",(function(){return e.onCopy()})),i.hc(19,"translate"),i.Qb(20,"i",13),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Vb(21,"div",14),i.Vb(22,"div",15),i.Vb(23,"nz-tabset"),i.Vb(24,"nz-tab",16),i.cc("nzClick",(function(){return e.refreshLayout("schemaEditor")})),i.Vb(25,"nu-monaco-editor",17,18),i.cc("ngModelChange",(function(t){return e.schema=t}))("ngModelChange",(function(){return e.run()})),i.Ub(),i.Ub(),i.Vb(27,"nz-tab",19),i.cc("nzClick",(function(){return e.refreshLayout("formCodeEditor")})),i.Vb(28,"nu-monaco-editor",17,20),i.cc("ngModelChange",(function(t){return e.formCode=t}))("ngModelChange",(function(){return e.run()})),i.Ub(),i.Ub(),i.Vb(30,"nz-tab",21),i.cc("nzClick",(function(){return e.refreshLayout("uiEditor")})),i.Vb(31,"nu-monaco-editor",17,22),i.cc("ngModelChange",(function(t){return e.uiCode=t}))("ngModelChange",(function(){return e.run()})),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Nc(33,A,2,5,"div",23),i.Ub()),2&t&&(i.Bb(1),i.oc("nzSpan",18),i.Bb(1),i.oc("ngModel",e.name),i.Bb(1),i.oc("ngForOf",e.files),i.Bb(1),i.oc("ngModel",e.layout),i.Bb(7),i.oc("nzSpan",6),i.Bb(2),i.oc("nzTooltipTitle",e.expand?"Hide Code":"Show Code"),i.Bb(1),i.qc("nzType","vertical-",e.expand?"right":"left",""),i.Bb(1),i.oc("nzTooltipTitle",i.ic(16,18,"app.demo.stackblitz")),i.Bb(3),i.oc("nzTooltipTitle",i.ic(19,20,"app.demo.copy")),i.Bb(4),i.oc("nzSpan",12)("hidden",!e.expand),i.Bb(3),i.oc("ngModel",e.schema)("options",e.editorOptions),i.Bb(3),i.oc("ngModel",e.formCode)("options",e.editorOptions),i.Bb(3),i.oc("ngModel",e.uiCode)("options",e.editorOptions),i.Bb(2),i.oc("ngIf",e.schemaData))},directives:[_.c,_.a,M.e,s.p,s.s,a.t,w.c,w.b,w.a,E.b,T.a,E.a,U.a,B.d,D.a,k.b,k.a,m,a.u,M.a,x.a],pipes:[j.b],encapsulation:2,changeDetection:0}),t})(),data:{titleI18n:"app.header.menu.form.validator"}}]}];let F=(()=>{class t{}return t.\u0275mod=i.Nb({type:t}),t.\u0275inj=i.Mb({factory:function(e){return new(e||t)},imports:[[f.a,p.forRoot({defaultOptions:{scrollBeyondLastLine:!1}}),o.l.forChild(J)]]}),t})()}}]);