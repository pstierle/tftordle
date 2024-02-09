"use strict";(self.webpackChunktftordle_fe=self.webpackChunktftordle_fe||[]).push([[430],{3430:(gt,A,c)=>{c.r(A),c.d(A,{TraitGuessModule:()=>ht});var $=c(4006),l=c(6895),L=c(4281),u=c(655),F=c(4004),_=c(2722),i=c(3214),v=c(661),d=c(3993),t=c(8274);class o{static getGuessChampion(s){return s.guessChampion}static getVictoryData(s){return s.victoryData}static getCorrecctGuessCount(s){return s.correctGuessCount}static getLastGuessChampion(s){return s.lastGuessChampion}static getGuessChecks(s){return s.guessChecks}static getWrongGuessCheckCount(s){return s.guessChecks.filter(n=>!n.correct).length}static getStatClue(s){return s.statClue}static getQueryResults(s){return s.queryResults}static getSameTraitClue(s){return s.sameTraitClue}static isFinished(s){return!!s.guessChecks.find(n=>n.finished)}}o.\u0275fac=function(s){return new(s||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),(0,u.gn)([(0,i.Qf)([d.e])],o,"getGuessChampion",null),(0,u.gn)([(0,i.Qf)([d.e])],o,"getVictoryData",null),(0,u.gn)([(0,i.Qf)([d.e])],o,"getCorrecctGuessCount",null),(0,u.gn)([(0,i.Qf)([d.e])],o,"getLastGuessChampion",null),(0,u.gn)([(0,i.Qf)([d.e])],o,"getGuessChecks",null),(0,u.gn)([(0,i.Qf)([d.e])],o,"getWrongGuessCheckCount",null),(0,u.gn)([(0,i.Qf)([d.e])],o,"getStatClue",null),(0,u.gn)([(0,i.Qf)([d.e])],o,"getQueryResults",null),(0,u.gn)([(0,i.Qf)([d.e])],o,"getSameTraitClue",null),(0,u.gn)([(0,i.Qf)([d.e])],o,"isFinished",null);var h=c(3394);class p extends v.h{constructor(s,n){super(s),this.store=n,this.guessCheckCount$=this.guessChecks$.pipe((0,F.U)(a=>a.length))}init(){this.initBase(),this.observeLoadingActions([h.aO]),this.store.dispatch(new h.aO),this.isFinished$.pipe((0,_.R)(this.onDestroy$)).subscribe(s=>{s&&this.store.dispatch(new h.Bl)})}}p.\u0275fac=function(s){return new(s||p)(t.LFG(i.eX),t.LFG(i.yh))},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac}),(0,u.gn)([(0,i.Ph)(o.getLastGuessChampion)],p.prototype,"lastGuessChampion$",void 0),(0,u.gn)([(0,i.Ph)(o.isFinished)],p.prototype,"isFinished$",void 0),(0,u.gn)([(0,i.Ph)(o.getCorrecctGuessCount)],p.prototype,"correcctGuessCount$",void 0),(0,u.gn)([(0,i.Ph)(o.getVictoryData)],p.prototype,"victoryData$",void 0),(0,u.gn)([(0,i.Ph)(o.getGuessChecks)],p.prototype,"guessChecks$",void 0);var G=(()=>{return(e=G||(G={})).TRAIT="TRAIT",e.CHAMPION="CHAMPION",G;var e})(),O=c(3319),x=c(3372),I=c(9219),Q=c(5434),J=c(1977);class y extends v.h{constructor(s){super(s)}init(){this.initBase()}}function U(e,s){1&e&&t._UZ(0,"app-loading-spinner")}function w(e,s){if(1&e&&(t.TgZ(0,"div",3)(1,"h1"),t._uU(2),t.qZA(),t._UZ(3,"img",4),t.qZA()),2&e){const n=s.ngIf;t.xp6(2),t.AsE("",n.name," - Set: ",n.set,""),t.xp6(1),t.Q6J("src",n.icon,t.LSH)}}function Y(e,s){if(1&e&&(t.YNc(0,w,4,3,"div",2),t.ALo(1,"async")),2&e){const n=t.oxw();t.Q6J("ngIf",t.lcZ(1,1,n.guessChampion$))}}y.\u0275fac=function(s){return new(s||y)(t.LFG(i.eX))},y.\u0275prov=t.Yz7({token:y,factory:y.\u0275fac}),(0,u.gn)([(0,i.Ph)(o.getGuessChampion)],y.prototype,"guessChampion$",void 0);let b=(()=>{class e{constructor(n){this.guessChampionFacade=n,this.guessChampion$=this.guessChampionFacade.guessChampion$,this.isLoading$=this.guessChampionFacade.isLoading$}ngOnInit(){this.guessChampionFacade.init()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-guess-champion"]],features:[t._Bn([y])],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["champion",""],["class","flex flex-col justify-center items-center",4,"ngIf"],[1,"flex","flex-col","justify-center","items-center"],["alt","Champion Icon",1,"w-28","h-28","mt-2",3,"src"]],template:function(n,a){if(1&n&&(t.YNc(0,U,1,0,"app-loading-spinner",0),t.ALo(1,"async"),t.YNc(2,Y,2,3,"ng-template",null,1,t.W1O)),2&n){const r=t.MAs(3);t.Q6J("ngIf",t.lcZ(1,2,a.isLoading$))("ngIfElse",r)}},dependencies:[l.O5,x.g,l.Ov],changeDetection:0}),e})();class C extends v.h{constructor(s,n){super(s),this.store=n,this.tryCounter$=this.wrongGuessCheckCount$.pipe((0,F.U)(a=>3-a))}init(){this.initBase(),this.observeLoadingActions([h.nh]),this.tryCounter$.pipe((0,_.R)(this.onDestroy$)).subscribe(s=>{0===s&&this.store.dispatch(new h.nh)})}}C.\u0275fac=function(s){return new(s||C)(t.LFG(i.eX),t.LFG(i.yh))},C.\u0275prov=t.Yz7({token:C,factory:C.\u0275fac}),(0,u.gn)([(0,i.Ph)(o.getStatClue)],C.prototype,"statClue$",void 0),(0,u.gn)([(0,i.Ph)(o.getWrongGuessCheckCount)],C.prototype,"wrongGuessCheckCount$",void 0);var S=c(7465);function R(e,s){if(1&e&&(t.TgZ(0,"div")(1,"p")(2,"span",2),t._uU(3,"Cost:"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"p")(6,"span",2),t._uU(7,"Traits start with:"),t.qZA(),t._uU(8),t.qZA()()),2&e){const n=s.ngIf;t.xp6(4),t.hij(" ",n.cost,""),t.xp6(4),t.hij(" ",n.traitsFirstChars," ")}}let M=(()=>{class e{constructor(n){this.statClueFacade=n,this.tryCounter$=this.statClueFacade.tryCounter$,this.statClue$=this.statClueFacade.statClue$,this.isLoading$=this.statClueFacade.isLoading$}ngOnInit(){this.statClueFacade.init()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(C))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-stat-clue"]],features:[t._Bn([C])],decls:5,vars:9,consts:[["label","Stat Clue",3,"counter","loading"],[4,"ngIf"],[1,"text-gray-400","text-sm"]],template:function(n,a){if(1&n&&(t.TgZ(0,"app-clue",0),t.ALo(1,"async"),t.ALo(2,"async"),t.YNc(3,R,9,2,"div",1),t.ALo(4,"async"),t.qZA()),2&n){let r;t.Q6J("counter",null!==(r=t.lcZ(1,3,a.tryCounter$))&&void 0!==r?r:0)("loading",!!t.lcZ(2,5,a.isLoading$)),t.xp6(3),t.Q6J("ngIf",t.lcZ(4,7,a.statClue$))}},dependencies:[l.O5,S.J,l.Ov],changeDetection:0}),e})();class f extends v.h{constructor(s,n){super(s),this.store=n,this.tryCounter$=this.wrongGuessCheckCount$.pipe((0,F.U)(a=>5-a))}init(){this.initBase(),this.observeLoadingActions([h.mA]),this.tryCounter$.pipe((0,_.R)(this.onDestroy$)).subscribe(s=>{0===s&&this.store.dispatch(new h.mA)})}}function N(e,s){1&e&&(t.TgZ(0,"span"),t._uU(1,","),t.qZA())}function q(e,s){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.YNc(2,N,2,0,"span",4),t.qZA()),2&e){const n=s.$implicit,a=s.last;t.xp6(1),t.Oqu(n),t.xp6(1),t.Q6J("ngIf",!a)}}f.\u0275fac=function(s){return new(s||f)(t.LFG(i.eX),t.LFG(i.yh))},f.\u0275prov=t.Yz7({token:f,factory:f.\u0275fac}),(0,u.gn)([(0,i.Ph)(o.getSameTraitClue)],f.prototype,"sameTraitClue$",void 0),(0,u.gn)([(0,i.Ph)(o.getWrongGuessCheckCount)],f.prototype,"wrongGuessCheckCount$",void 0);const D=function(){return[]};let j=(()=>{class e{constructor(n){this.sameTraitClueFacade=n,this.tryCounter$=this.sameTraitClueFacade.tryCounter$,this.isLoading$=this.sameTraitClueFacade.isLoading$,this.sameTraitClue$=this.sameTraitClueFacade.sameTraitClue$}ngOnInit(){this.sameTraitClueFacade.init()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-same-trait-clue"]],features:[t._Bn([f])],decls:8,vars:10,consts:[["label","Same Trait Clue",3,"counter","loading"],[1,"max-w-[15rem]","flex","flex-wrap"],[1,"text-gray-400","text-sm"],[4,"ngFor","ngForOf"],[4,"ngIf"]],template:function(n,a){if(1&n&&(t.TgZ(0,"app-clue",0),t.ALo(1,"async"),t.ALo(2,"async"),t.TgZ(3,"p",1)(4,"span",2),t._uU(5,"Champion in set with same one Trait:"),t.qZA(),t.YNc(6,q,3,2,"span",3),t.ALo(7,"async"),t.qZA()()),2&n){let r,g;t.Q6J("counter",null!==(r=t.lcZ(1,3,a.tryCounter$))&&void 0!==r?r:0)("loading",!!t.lcZ(2,5,a.isLoading$)),t.xp6(6),t.Q6J("ngForOf",null!==(g=null==(g=t.lcZ(7,7,a.sameTraitClue$))?null:g.championNamesWithSameTrait)&&void 0!==g?g:t.DdM(9,D))}},dependencies:[l.sg,l.O5,S.J,l.Ov],changeDetection:0}),e})();var B=c(9841),P=c(158),k=c(1135),X=c(9300);class m extends v.h{constructor(s,n){super(s),this.store=n,this.selectedTrait$=new k.X(null),this.query$=new k.X("")}init(){this.initBase(),this.observeLoadingActions([h.$6]),this.query$.pipe((0,_.R)(this.onDestroy$),(0,X.h)(s=>!!s)).subscribe(s=>{this.selectedTrait$.next(null);const n=this.store.selectSnapshot(o.getGuessChecks);this.store.dispatch(new h.$6(s,n.map(a=>a.guess.id)))})}queryTraits(s){this.query$.next(s)}selectTrait(s){this.selectedTrait$.next(s),this.resetResults()}checkGuess(){const s=this.selectedTrait$.getValue()?.id;s&&(this.selectedTrait$.next(null),this.store.dispatch(new h.jJ(s)))}handleClickOutside(){this.resetResults()}resetResults(){this.query$.next(""),this.store.dispatch(new h.EW)}}m.\u0275fac=function(s){return new(s||m)(t.LFG(i.eX),t.LFG(i.yh))},m.\u0275prov=t.Yz7({token:m,factory:m.\u0275fac}),(0,u.gn)([(0,i.Ph)(o.isFinished)],m.prototype,"isFinished$",void 0),(0,u.gn)([(0,i.Ph)(o.getQueryResults)],m.prototype,"queryResults$",void 0),(0,u.gn)([(0,i.Ph)(o.getGuessChecks)],m.prototype,"guessChecks$",void 0);var E=c(42),W=c(6205);function z(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"div",6)(1,"div",7)(2,"span",8),t._uU(3,"Selected: "),t.qZA(),t.TgZ(4,"span",9),t._uU(5),t.qZA(),t._UZ(6,"img",10),t.qZA(),t.TgZ(7,"app-button",11),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.checkGuess())}),t.ALo(8,"async"),t.ALo(9,"async"),t._uU(10,"Guess"),t.qZA()()}if(2&e){const n=s.ngIf,a=t.oxw();t.xp6(5),t.Oqu(n.name),t.xp6(1),t.Q6J("src",n.icon,t.LSH),t.xp6(1),t.Q6J("type",a.buttonType.SECONDARY)("disabled",!t.lcZ(8,5,a.selectedTrait$))("isLoading",!!t.lcZ(9,7,a.isLoading$))}}function H(e,s){1&e&&(t.TgZ(0,"div",12),t._UZ(1,"app-loading-spinner"),t.qZA())}function V(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){const g=t.CHM(n).$implicit,Z=t.oxw(2);return t.KtG(Z.selectTrait(g))}),t.TgZ(1,"span"),t._uU(2),t.qZA(),t._UZ(3,"img",10),t.qZA()}if(2&e){const n=s.$implicit;t.xp6(2),t.hij(" ",n.name," "),t.xp6(1),t.Q6J("src",n.icon,t.LSH)}}function K(e,s){if(1&e&&(t.YNc(0,V,4,2,"button",13),t.ALo(1,"async")),2&e){const n=t.oxw();t.Q6J("ngForOf",t.lcZ(1,1,n.queryResults$))}}let tt=(()=>{class e{constructor(n){this.traitSearchFacade=n,this.buttonType=P.L,this.query=""}get selectedTrait$(){return this.traitSearchFacade.selectedTrait$}get isFinished$(){return this.traitSearchFacade.isFinished$}get queryResults$(){return(0,B.a)([this.traitSearchFacade.queryResults$,this.traitSearchFacade.guessChecks$]).pipe((0,F.U)(n=>{const r=n[1];return n[0].filter(g=>!r.find(Z=>Z.guess.id===g.id))}))}get isLoading$(){return this.traitSearchFacade.isLoading$}ngOnInit(){this.traitSearchFacade.init()}handleChange(){this.traitSearchFacade.queryTraits(this.query)}selectTrait(n){this.traitSearchFacade.selectTrait(n),this.query=""}checkGuess(){this.traitSearchFacade.checkGuess()}handleClickOutside(){this.query="",this.traitSearchFacade.handleClickOutside()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-trait-search"]],features:[t._Bn([m])],decls:10,vars:11,consts:[[1,"relative"],["placeholder","Search Traits",1,"px-4","py-2","rounded-sm","w-full","disabled:cursor-not-allowed",3,"disabled","ngModel","ngModelChange"],["class","flex items-center justify-between gap-4 mt-4",4,"ngIf"],["appClickOutside","",1,"absolute","flex","flex-col","mt-0","w-full","max-h-[350px]","overflow-auto",3,"clickOutside"],["class","bg-[#14181b]",4,"ngIf","ngIfElse"],["results",""],[1,"flex","items-center","justify-between","gap-4","mt-4"],[1,"flex","items-center","gap-2"],[1,"text-gray-400"],[1,"text-blue-600"],["alt","Trait Icon",1,"w-5","h-5",3,"src"],[3,"type","disabled","isLoading","click"],[1,"bg-[#14181b]"],["class","flex items-center justify-between gap-3 px-4 py-2 bg-[#14181b] transition-all hover:bg-[#1d2328]",3,"click",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-between","gap-3","px-4","py-2","bg-[#14181b]","transition-all","hover:bg-[#1d2328]",3,"click"]],template:function(n,a){if(1&n&&(t.TgZ(0,"div",0)(1,"input",1),t.NdJ("ngModelChange",function(g){return a.query=g})("ngModelChange",function(){return a.handleChange()}),t.ALo(2,"async"),t.qZA(),t.YNc(3,z,11,9,"div",2),t.ALo(4,"async"),t.TgZ(5,"div",3),t.NdJ("clickOutside",function(){return a.handleClickOutside()}),t.YNc(6,H,2,0,"div",4),t.ALo(7,"async"),t.YNc(8,K,2,3,"ng-template",null,5,t.W1O),t.qZA()()),2&n){const r=t.MAs(9);t.xp6(1),t.Q6J("disabled",!!t.lcZ(2,5,a.isFinished$))("ngModel",a.query),t.xp6(2),t.Q6J("ngIf",t.lcZ(4,7,a.selectedTrait$)),t.xp6(3),t.Q6J("ngIf",t.lcZ(7,9,a.isLoading$))("ngIfElse",r)}},dependencies:[l.sg,l.O5,x.g,E.r,W._,$.Fj,$.JJ,$.On,l.Ov]}),e})();class T extends v.h{constructor(s,n){super(s),this.store=n}init(){this.initBase()}}T.\u0275fac=function(s){return new(s||T)(t.LFG(i.eX),t.LFG(i.yh))},T.\u0275prov=t.Yz7({token:T,factory:T.\u0275fac}),(0,u.gn)([(0,i.Ph)(o.getGuessChecks)],T.prototype,"guessChecks$",void 0);const et=function(e,s){return{"green-border":e,"red-border":s}};function st(e,s){if(1&e&&(t.TgZ(0,"div",2)(1,"p"),t._uU(2),t.qZA(),t._UZ(3,"img",3),t.qZA()),2&e){const n=s.$implicit;t.ekj("incorrect",!n.correct),t.Q6J("ngClass",t.WLB(5,et,n.correct,!n.correct)),t.xp6(2),t.Oqu(n.guess.name),t.xp6(1),t.Q6J("src",n.guess.icon,t.LSH)}}let nt=(()=>{class e{constructor(n){this.resultsFacade=n,this.guessChecks$=this.resultsFacade.guessChecks$}ngOnInit(){this.resultsFacade.init()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(T))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-results"]],features:[t._Bn([T])],decls:3,vars:3,consts:[[1,"flex","gap-3","flex-col"],["class","flex items-center justify-between gap-5 px-4 py-2",3,"incorrect","ngClass",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-between","gap-5","px-4","py-2",3,"ngClass"],["alt","Trait Icon",1,"w-6","h-6",3,"src"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.YNc(1,st,4,8,"div",1),t.ALo(2,"async"),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,a.guessChecks$)))},dependencies:[l.mk,l.sg,l.Ov],styles:[".incorrect[_ngcontent-%COMP%]{animation:shake .4s}@keyframes shake{0%{transform:translate(0)}20%{transform:translate(2em)}40%{transform:translate(-2em)}60%{transform:translate(2em)}80%{transform:translate(-2em)}to{transform:translate(0)}}"],changeDetection:0}),e})();function at(e,s){1&e&&t._UZ(0,"app-loading-spinner")}function it(e,s){1&e&&(t.ynx(0),t._UZ(1,"app-stat-clue")(2,"app-same-trait-clue")(3,"app-trait-search"),t.BQk())}function ot(e,s){1&e&&(t.TgZ(0,"p"),t._uU(1,"You correctly guessed all Traits!"),t.qZA())}function ct(e,s){if(1&e&&(t._UZ(0,"app-last-guess-champion",5),t.ALo(1,"async"),t.TgZ(2,"app-card")(3,"div",6),t._UZ(4,"app-guess-champion"),t.YNc(5,it,4,0,"ng-container",2),t.ALo(6,"async"),t.YNc(7,ot,2,0,"ng-template",null,7,t.W1O),t.qZA()(),t._UZ(9,"app-correct-guess-count",8),t.ALo(10,"async")),2&e){const n=t.MAs(8),a=t.oxw();let r;t.Q6J("lastGuessChampion",t.lcZ(1,4,a.lastGuessChampion$)),t.xp6(5),t.Q6J("ngIf",!t.lcZ(6,6,a.isFinished$))("ngIfElse",n),t.xp6(4),t.Q6J("count",null!==(r=t.lcZ(10,8,a.correcctGuessCount$))&&void 0!==r?r:0)}}function rt(e,s){if(1&e&&(t.TgZ(0,"app-victory",9),t.ALo(1,"async"),t.TgZ(2,"div",10)(3,"p"),t._uU(4,"You guessed"),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA()()()),2&e){const n=s.ngIf,a=t.oxw();t.Q6J("victoryData",n)("guessCheckCount",t.lcZ(1,3,a.guessCheckCount$)),t.xp6(6),t.hij(" ",a.getTraitNames(n)," ")}}const ut=[{path:"",component:(()=>{class e{constructor(n){this.traitGuessFacade=n,this.isLoading$=this.traitGuessFacade.isLoading$,this.lastGuessChampion$=this.traitGuessFacade.lastGuessChampion$,this.correcctGuessCount$=this.traitGuessFacade.correcctGuessCount$,this.isFinished$=this.traitGuessFacade.isFinished$,this.victoryData$=this.traitGuessFacade.victoryData$,this.guessCheckCount$=this.traitGuessFacade.guessCheckCount$,this.guessType=G}ngOnInit(){this.traitGuessFacade.init()}getTraitNames(n){return n.correctGuess.map(a=>a.name).join(", ")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-trait-guess"]],features:[t._Bn([p])],decls:10,vars:7,consts:[[1,"w-screen","h-screen","flex","gap-5","items-center","flex-col","overflow-y-auto","p-20"],[1,"text-2xl"],[4,"ngIf","ngIfElse"],["content",""],[3,"victoryData","guessCheckCount",4,"ngIf"],[3,"lastGuessChampion"],[1,"flex","flex-col","gap-3"],["finished",""],[1,"-mt-3",3,"count"],[3,"victoryData","guessCheckCount"],[1,"flex","flex-col","items-center","justify-center"]],template:function(n,a){if(1&n&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2,"Guess the Trait's"),t.qZA(),t.YNc(3,at,1,0,"app-loading-spinner",2),t.ALo(4,"async"),t.YNc(5,ct,11,10,"ng-template",null,3,t.W1O),t.YNc(7,rt,7,5,"app-victory",4),t.ALo(8,"async"),t._UZ(9,"app-results"),t.qZA()),2&n){const r=t.MAs(6);t.xp6(3),t.Q6J("ngIf",t.lcZ(4,3,a.isLoading$))("ngIfElse",r),t.xp6(4),t.Q6J("ngIf",t.lcZ(8,5,a.victoryData$))}},dependencies:[l.O5,O.Q,x.g,I.A,Q.Y,J.f,b,M,j,tt,nt,l.Ov],styles:["[_nghost-%COMP%]{height:100vh;width:100vw}app-results[_ngcontent-%COMP%]{max-height:50%}"],changeDetection:0}),e})()}];let lt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[L.Bz.forChild(ut),L.Bz]}),e})();var pt=c(4466);let ht=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,lt,pt.m,$.u5]}),e})()}}]);