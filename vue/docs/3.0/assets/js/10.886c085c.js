(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{347:function(t,e,n){var i={"./chart-imports.txt":468};function o(t){return r(t).then(function(t){return n.t(t,7)})}function r(t){return n.e(3).then(function(){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]})}o.keys=function(){return Object.keys(i)},o.resolve=r,o.id=347,t.exports=o},514:function(t,e,n){"use strict";n.r(e);n(327);var i=n(466),o=n.n(i),r=(n(467),{props:{filename:String,code:String,language:{type:String,default:"html"}},data:function(){return{importedCode:void 0}},mounted:function(){var t=this;this.filename&&n(347)("./".concat(this.filename,".txt")).then(function(e){t.importedCode=e.default.trim()})},watch:{computedCode:{immediate:!0,handler:function(t){var e=this;this.computedCode&&this.$nextTick(function(){o.a.highlightBlock(e.$el.firstElementChild)})}}},computed:{computedCode:function(){return this.importedCode||this.code}}}),c=n(0),u=Object(c.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return this.computedCode?e("pre",{staticClass:"c-px-2",staticStyle:{"background-color":"#1D1F21"}},[e("code",{class:this.language},[this._t("default",[this._v(this._s(this.computedCode))])],2)]):this._e()},[],!1,null,null,null);e.default=u.exports}}]);