"use strict";(self["webpackChunkvue_cnode"]=self["webpackChunkvue_cnode"]||[]).push([[203],{8203:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var o=function(){var e=this,t=e._self._c;return t("div",[t("BasePanel",{scopedSlots:e._u([{key:"panel-head",fn:function(){return[t("router-link",{attrs:{to:"/"}},[e._v("主页")]),e._v(" / "),t("span",[e._v("登录")])]},proxy:!0},{key:"panel-content",fn:function(){return[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username","string"===typeof t?t.trim():t)},expression:"ruleForm.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"token"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.token,callback:function(t){e.$set(e.ruleForm,"token","string"===typeof t?t.trim():t)},expression:"ruleForm.token"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("提交")]),t("el-button",[e._v("重置")])],1)],1)]},proxy:!0}])})],1)},s=[],n=(r(7658),r(2732)),l=r(3150),u={components:{BasePanel:n.Z},data(){return{ruleForm:{username:"",token:"7de298fc-2bae-4afb-b20b-ca85130e4159"},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],token:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{login(){this.$refs.ruleForm.validate((async e=>{if(e){const e=await(0,l.x4)(this.ruleForm.token);console.log(e),sessionStorage.setItem("userInfo",JSON.stringify(e)),sessionStorage.setItem("accesstoken",this.ruleForm.token),this.$message({message:"恭喜你，登陆成功",type:"success"}),this.$router.push("/")}}))}}},a=u,i=r(1001),m=(0,i.Z)(a,o,s,!1,null,null,null),c=m.exports}}]);
//# sourceMappingURL=203.0f123849.js.map