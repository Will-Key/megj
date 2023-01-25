"use strict";(self.webpackChunkmegj=self.webpackChunkmegj||[]).push([[740],{1740:(q,m,a)=>{a.r(m),a.d(m,{LoginModule:()=>F});var l=a(6895),e=a(4650),p=a(8996),d=a(2095),f=a(1205);let g=(()=>{class t{constructor(o,n){this.firestore=o,this.auth=n,this.auth.authState.subscribe(i=>{i?(this.userData=i,localStorage.setItem("user",JSON.stringify(this.userData))):localStorage.setItem("user","null")})}login(o,n){return(0,p.D)(this.auth.signInWithEmailAndPassword(o,n).then(i=>(this.setUserData(i.user),i.user)).catch(()=>null))}setUserData(o){return this.firestore.doc(`users/${o.uid}`).set({uid:o.uid,email:o.email},{merge:!0})}signOut(){return this.auth.signOut().then(()=>{localStorage.removeItem("user")})}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(d.ST),e.LFG(f.zQ))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=a(7001),s=a(433),h=a(9235);function v(t,r){1&t&&(e.TgZ(0,"small",13),e._uU(1," Ce champs est requis "),e.qZA())}function C(t,r){1&t&&(e.TgZ(0,"small",13),e._uU(1," Cet email n'est pas valide "),e.qZA())}function b(t,r){1&t&&(e.TgZ(0,"small",13),e._uU(1," Ce champs est requis "),e.qZA())}function Z(t,r){1&t&&(e.TgZ(0,"small",13),e._uU(1," Au moins 8 caract\xe8res "),e.qZA())}const c=function(t){return{"border-rose-600":t}},x=function(t,r){return{"bg-slate-200":t,"bg-violet-700":r}};let T=(()=>{class t{constructor(o){this.fb=o,this.onsubmit=new e.vpe,this.errorMsg={required:"Ce champs est obligatoire",email:"Veuillez entrer un email valide",minLength:"8 caract\xe8res minimum"}}ngOnInit(){this.initForm()}initForm(){this.form=this.fb.group({email:["",[s.kI.required,s.kI.email]],password:["",[s.kI.required,s.kI.minLength(8)]]})}onSubmit(){this.onsubmit.emit(this.form.value)}getError(o,n){return(0,h.xT)(this.form,o,n)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login-form"]],outputs:{onsubmit:"onsubmit"},decls:23,vars:16,consts:[[3,"formGroup"],[1,"space-y-2","mb-2","text-center"],[1,"text-xl","font-bold","text-violet-800"],[1,"text-sm","font-normal","text-violet-600"],[1,"space-y-4"],[1,"flex","flex-col"],[1,"text-sm","text-slate-500","font-normal"],["type","text","placeholder","Email","formControlName","email",1,"form-input","rounded-md",3,"ngClass"],["class","text-rose-600",4,"ngIf"],["type","password","placeholder","Mot de passe","formControlName","password",1,"form-input","rounded-md",3,"ngClass"],[1,"text-center"],[1,"p-3","text-white","md:w-3/6","w-full","rounded-full",3,"disabled","ngClass","click"],["sbbtn",""],[1,"text-rose-600"]],template:function(o,n){if(1&o&&(e.TgZ(0,"form",0)(1,"div",1)(2,"h4",2),e._uU(3,"Connexion"),e.qZA(),e.TgZ(4,"h5",3),e._uU(5," Veuillez entrer vos param\xe8tres de connexion "),e.qZA()(),e.TgZ(6,"div",4)(7,"div",5)(8,"label",6),e._uU(9,"Email *"),e.qZA(),e._UZ(10,"input",7),e.YNc(11,v,2,0,"small",8),e.YNc(12,C,2,0,"small",8),e.qZA(),e.TgZ(13,"div",5)(14,"label",6),e._uU(15,"Mot de passe *"),e.qZA(),e._UZ(16,"input",9),e.YNc(17,b,2,0,"small",8),e.YNc(18,Z,2,0,"small",8),e.qZA(),e.TgZ(19,"div",10)(20,"button",11,12),e.NdJ("click",function(){return n.onSubmit()}),e._uU(22," Connexion "),e.qZA()()()()),2&o){const i=e.MAs(21);e.Q6J("formGroup",n.form),e.xp6(10),e.Q6J("ngClass",e.VKq(9,c,n.getError("email","required"))),e.xp6(1),e.Q6J("ngIf",n.getError("email","required")),e.xp6(1),e.Q6J("ngIf",n.getError("email","email")),e.xp6(4),e.Q6J("ngClass",e.VKq(11,c,n.getError("password","required"))),e.xp6(1),e.Q6J("ngIf",n.getError("password","required")),e.xp6(1),e.Q6J("ngIf",n.getError("password","minLength")),e.xp6(2),e.Q6J("disabled",n.form.invalid)("ngClass",e.WLB(13,x,i.disabled,!i.disabled))}},dependencies:[l.mk,l.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u]}),t})();const A=[{path:"",component:(()=>{class t{constructor(o,n){this.authService=o,this.router=n}submit(o){this.authService.login(o.email,o.password).subscribe(n=>{n&&this.router.navigate(["/dashboard"])})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(g),e.Y36(u.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:3,vars:0,consts:[[1,"min-h-2/4","rounded","overflow-hidden","shadow-lg"],[1,"px-6","py-4"],[3,"onsubmit"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"app-login-form",2),e.NdJ("onsubmit",function(L){return n.submit(L)}),e.qZA()()())},dependencies:[T]}),t})()}];let F=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,s.u5,s.UX,u.Bz.forChild(A)]}),t})()}}]);