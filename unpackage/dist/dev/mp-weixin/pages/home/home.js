"use strict";var e=require("../../common/vendor.js");Array||e.resolveComponent("uni-icons")();const s=()=>"../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";Math||s();const i={__name:"home",setup(c){const n=e.ref(e.index.getStorageSync("token")),o=e.ref([]),r=()=>{e.pn.callFunction({name:"userInfo",data:{api:"getUserInfo",token:n.value}}).then(a=>{o.value=a.result,console.log(a.result)})};return e.onLoad(()=>{r()}),(a,l)=>e.e({a:e.p({type:"gear",size:"20"}),b:n.value&&o.value.avatarUrl},n.value&&o.value.avatarUrl?{c:o.value.avatarUrl}:{},{d:n.value&&o.value.nickName},n.value&&o.value.nickName?{e:e.t(o.value.nickName)}:{},{f:e.p({color:"#004dfc",type:"calendar",size:"24"}),g:e.p({color:"#00ba9d",type:"medal",size:"24"}),h:e.p({color:"#715fc2",type:"chat",size:"24"}),i:e.p({color:"#ff562d",type:"star",size:"24"}),j:e.p({color:"#ff562d",type:"redo-filled",size:"28"}),k:e.p({color:"#ff562d",type:"weixin",size:"28"})})}};var t=e._export_sfc(i,[["__file","/Users/huangqiang/Documents/HBuilderProjects/iihao/pages/home/home.vue"]]);wx.createPage(t);
