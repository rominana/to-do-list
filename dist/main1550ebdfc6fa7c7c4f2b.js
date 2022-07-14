"use strict";(self.webpackChunkto_do_list=self.webpackChunkto_do_list||[]).push([[179],{602:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  color: black;\n  background-color: whitesmoke;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\nh1 {\n  text-align: center;\n  color: black;\n  margin: 0 auto;\n  padding-top: 20vh;\n  font-size: 35px;\n}\n\nbutton,\ninput {\n  background-color: transparent;\n  border: none;\n  font-size: 1rem;\n}\n\n.box {\n  width: 45%;\n  margin: 0 auto;\n  padding: 3rem;\n  background-color: whitesmoke;\n}\n\n.task {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  width: 100%;\n  padding: 0.5rem;\n}\n\n.text {\n  flex: 1;\n}\n\n.done {\n  text-decoration: line-through;\n  color: black;\n}\n\n.head {\n  display: flex;\n}\n\n.head h2 {\n  flex: 1;\n}\n\n.edit {\n  display: none;\n  flex: 1;\n  outline: 1px solid greenyellow;\n}\n\n#alert {\n  display: none;\n  padding: 0.8rem;\n  background-color: #c30;\n  color: whitesmoke;\n}\n\n#container {\n  width: 100%;\n  display: flex;\n  gap: 1rem;\n}\n\n#clear {\n  width: 100%;\n}\n\n#add-task,\n#clear {\n  color: black;\n  background-color: whitesmoke;\n  padding: 0.8rem;\n  outline: 1px solid black;\n}\n\n#add-task:active,\n#clear:active {\n  color: whitesmoke;\n  background-color: gray;\n  padding: 0.7rem;\n  border: 0.1rem solid gray;\n}\n\n#new-task {\n  flex: 1;\n  color: black;\n  background-color: whitesmoke;\n  padding: 0.7rem;\n  border: 0.1rem solid black;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=o(e,r),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},426:(e,t,n)=>{var o=n(379),r=n.n(o),a=n(795),i=n.n(a),c=n(569),s=n.n(c),l=n(565),d=n.n(l),u=n(216),p=n.n(u),m=n(589),h=n.n(m),f=n(602),y={};y.styleTagTransform=h(),y.setAttributes=d(),y.insert=s().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=p(),r()(f.Z,y),f.Z&&f.Z.locals&&f.Z.locals;const g=()=>{const e=localStorage.getItem("toDoData");return e?JSON.parse(e):[]};class v{constructor(e,t,n=!1){this.description=e,this.completed=n,this.index=t}}const b=e=>{e.parentElement.remove(),(()=>{const e=document.querySelectorAll(".task"),t=[];e.forEach(((e,n)=>{const o=n+1;e.setAttribute("id",`task${o}`);const r=e.querySelector(".check"),a=e.querySelector(".text"),i=e.querySelector(".edit");r.setAttribute("name",`check${o}`),r.setAttribute("id",`check${o}`),i.setAttribute("name",`text${o}`),i.setAttribute("id",`text${o}`),t.push(new v(a.innerHTML,o,r.checked))})),localStorage.setItem("toDoData",JSON.stringify(t))})()},k=e=>{const t=document.getElementById("task-list"),n=document.createElement("li"),o=document.createElement("input"),r=document.createElement("div"),a=document.createElement("button"),i=document.createElement("button"),c=document.createElement("input");n.setAttribute("id",`task${e.index}`),n.classList.add("task"),o.checked=e.completed,o.classList.add("check"),o.setAttribute("type","checkbox"),o.setAttribute("name",`check${e.index}`),o.setAttribute("id",`check${e.index}`),c.classList.add("edit"),c.setAttribute("type","text"),c.setAttribute("name",`text${e.index}`),c.setAttribute("id",`text${e.index}`),c.value=e.description,r.classList.add("text"),r.innerHTML=e.description,o.checked&&r.classList.add("done"),a.classList.add("options"),a.innerHTML='<i class="fa-solid fa-check"></i>',i.classList.add("remove"),i.innerHTML='<i class="fa-solid fa-trash-can"></i>',n.appendChild(o),n.appendChild(r),n.appendChild(c),n.appendChild(a),n.appendChild(i),t.appendChild(n);const s=()=>{r.style.display="inherit",c.style.display="none"};o.addEventListener("change",(()=>{r.classList.toggle("done"),((e,t=!1)=>{const n=g();n[Number(e.substring(4))-1].completed=t,localStorage.setItem("toDoData",JSON.stringify(n))})(n.id,o.checked)})),r.addEventListener("click",(()=>{r.style.display="none",c.style.display="inherit"})),c.addEventListener("change",(()=>{r.innerHTML=c.value,((e,t="",n=!1)=>{const o=g(),r=Number(e.substring(4));t&&(o[r-1].description=t),o[r-1].completed=n,localStorage.setItem("toDoData",JSON.stringify(o))})(n.id,c.value,o.checked),s()})),c.addEventListener("focusout",s),i.addEventListener("click",(()=>{b(i)}))},x=()=>{const e=document.getElementById("new-task"),t=document.getElementById("alert"),n=g();if(e.value){const t=new v(e.value,n.length+1);k(t),n.push(t),localStorage.setItem("toDoData",JSON.stringify(n)),e.value=""}else t.innerHTML="Empty field!",t.style.display="block",setTimeout((()=>{t.style.display="none"}),1e3)},E=document.getElementById("add-task");g().forEach((e=>k(e))),document.getElementById("clear").addEventListener("click",(()=>{[...document.querySelectorAll(".task")].filter((e=>e.querySelector(".check").checked)).forEach((e=>{const t=e.querySelector(".remove");b(t)}))})),E.addEventListener("click",x)}},e=>{e(e.s=426)}]);