parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"JXbL":[function(require,module,exports) {
module.exports="/countries.789a2546.csv";
},{}],"knfB":[function(require,module,exports) {
"undefined"!=typeof module&&module.hot&&module.hot.accept(function(){window.location.reload()});var t={top:20,right:50,bottom:50,left:50},a=800-t.left-t.right,e=500-t.top-t.bottom,r=d3.select("#chart").append("svg").attr("width",a+t.left+t.right).attr("height",e+t.top+t.bottom).append("g").attr("transform","translate("+t.left+","+t.top+")"),n=d3.scaleOrdinal().range(["red","orange","blue","green","purple","yellow"]),o=d3.scaleLinear().domain([0,8e4]).range([0,a]),l=d3.scaleLinear().domain([0,90]).range([e,0]);function c(t){console.log("Data is",t),r.selectAll("circle").data(t).enter().append("circle").attr("r",5).attr("cx",function(t){return o(t.gdp_per_capita)}).attr("cy",function(t){return l(t.life_expectancy)}).attr("fill",function(t){return n(t.continent)}).attr("opacity",.5);var a=d3.axisLeft(l);r.append("g").attr("class","axis y-axis").call(a);var c=d3.axisBottom(o);r.append("g").attr("class","axis x-axis").attr("transform","translate(0,"+e+")").call(c)}d3.csv(require("./countries.csv")).then(c).catch(function(t){console.log("Failed on",t)});
},{"./countries.csv":"JXbL"}]},{},["knfB"], null)
//# sourceMappingURL=/graph.08daf446.map