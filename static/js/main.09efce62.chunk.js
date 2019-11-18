(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(n,e,t){n.exports=t(23)},23:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(8),i=t.n(o),c=t(3),u=t(1),l=t(2);function s(){var n=Object(u.a)(["\n  margin: 24px;\n  font-size: 16px;\n  transition: all 0.3s;\n  text-decoration: none;\n  color: dodgerblue;\n  cursor: pointer;\n\n  @media (prefers-color-scheme: dark) {\n    :hover {\n      filter: brightness(1.3);\n    }\n  }\n"]);return s=function(){return n},n}function f(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]);return f=function(){return n},n}function d(){var n=Object(u.a)(["\n  margin: 0;\n  font-size: calc(18px + 1vw);\n  font-weight: 400;\n\n  @media screen and (max-width: 735px) {\n    font-weight: 300;\n  }\n"]);return d=function(){return n},n}function m(){var n=Object(u.a)(["\n  margin: 3vw 0 0 0;\n  font-size: calc(24px + 3vw);\n  font-weight: 800;\n"]);return m=function(){return n},n}function p(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (max-width: 735px) {\n    margin-top: 4vh;\n  }\n"]);return p=function(){return n},n}var b=l.b.div(p()),h=l.b.h1(m()),v=l.b.h3(d()),g=l.b.div(f()),x=l.b.a(s()),w=function(){return a.a.createElement(b,null,a.a.createElement(h,null,"Tanner Villarete"),a.a.createElement(v,null,"Frontend Developer"),a.a.createElement(g,null,a.a.createElement(x,{target:"_blank",href:"https://www.github.com/tvillarete"},"GitHub"),a.a.createElement(x,{target:"_blank",href:"https://www.linkedin.com/in/tvillarete/"},"LinkedIn")))};function j(){var n=Object(u.a)(['\n  position: absolute;\n  bottom: 1.4%;\n  left: 13%;\n  height: 5.5%;\n  width: 3.5%;\n  background: url("/safari.png");\n  background-size: cover;\n  animation-name: bounce;\n  animation-timing-function: ease;\n  animation-duration: 2s;\n  transform-origin: bottom;\n\n  @keyframes bounce {\n    0% {\n      transform: scale(1, 1) translateY(0);\n    }\n    10% {\n      transform: scale(1.1, 0.9) translateY(0);\n    }\n    30% {\n      transform: scale(0.9, 1.1) translateY(-10px);\n    }\n    50% {\n      transform: scale(1.05, 0.95) translateY(0);\n    }\n    57% {\n      transform: scale(1, 1) translateY(-7px);\n    }\n    64% {\n      transform: scale(1, 1) translateY(0);\n    }\n    100% {\n      transform: scale(1, 1) translateY(0);\n    }\n  }\n']);return j=function(){return n},n}var k=l.b.div(j()),y=function(){return a.a.createElement(k,null)};function E(){var n=Object(u.a)(["\n  width: 100%;\n"]);return E=function(){return n},n}function O(){var n=Object(u.a)(["\n  position: absolute;\n  top: 3.8%;\n  left: 0.3%;\n  right: 0.3%;\n  bottom: 0;\n  background-size: cover;\n"]);return O=function(){return n},n}function P(){var n=Object(u.a)(["\n  position: absolute;\n  max-width: 100%;\n"]);return P=function(){return n},n}function S(){var n=Object(u.a)(["\n  display: ",";\n  position: relative;\n  top: 10%;\n  margin: 0 auto;\n  height: 70%;\n  width: 80%;\n  background: #2b2e33;\n  background-size: 100% 100%;\n  -webkit-animation: scale 3s;\n  animation: scale 3s;\n  overflow: hidden;\n  border-radius: 2px;\n"]);return S=function(){return n},n}function z(){var n=Object(u.a)(['\n  position: absolute;\n  top: 5%;\n  left: 12%;\n  width: 76%;\n  height: 84%;\n  background: url("/desktop.jpg");\n  background-size: cover;\n  animation: fadeIn 1s;\n\n  @keyframes fadeIn {\n    0% {\n      filter: brightness(0);\n      transform: scale(0.5);\n      opacity: 0;\n    }\n\n    100% {\n      filter: brightness(1);\n      transform: scale(1);\n      opacity: 1;\n    }\n  }\n']);return z=function(){return n},n}function C(){var n=Object(u.a)(['\n  position: relative;\n  margin: 10vh 0;\n  width: 697px;\n  max-width: 900px;\n  height: 408px;\n  background: url("/macbook.png");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  position: relative;\n  transition: all 0.1s ease;\n  pointer-events: none;\n  user-select: none;\n\n  @media screen and (max-width: 735px) {\n    margin: 5vh 0;\n    width: 375px;\n    height: 217px;\n  }\n']);return C=function(){return n},n}var Y=l.b.div(C()),I=l.b.div(z()),B=l.b.div(S(),(function(n){return n.isHidden&&"none"})),F=l.b.img(P()),H=l.b.div(O()),A=l.b.video(E()),J=function(n){var e=n.projects,t=n.curProject,o=(n.setCurProject,Object(r.useState)(!0)),i=Object(c.a)(o,2),u=i[0],l=i[1],s=e[t].videoSrc;return Object(r.useEffect)((function(){setTimeout((function(){l(!1)}),1500)}),[]),a.a.createElement(Y,null,a.a.createElement(I,null,a.a.createElement(B,{isHidden:u},a.a.createElement(F,{src:"/BrowserHeader.jpg"}),a.a.createElement(H,null,a.a.createElement(A,{key:s,autoPlay:!0,muted:!0,playsInline:!0,loop:!0},a.a.createElement("source",{src:s,type:"video/mp4"})))),a.a.createElement(y,null)))};function M(){var n=Object(u.a)(["\n  max-width: 16px;\n"]);return M=function(){return n},n}function R(){var n=Object(u.a)(["\n  margin: 0 4px;\n  font-size: 16px;\n  font-weight: 300;\n  transition: all 0.3s;\n  text-decoration: none;\n  color: #0070c9;\n  cursor: pointer;\n\n  @media (prefers-color-scheme: dark) {\n    :hover {\n      filter: brightness(1.3);\n    }\n  }\n"]);return R=function(){return n},n}function _(){var n=Object(u.a)(["\n  margin: 0;\n  font-weight: 500;\n"]);return _=function(){return n},n}function D(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 8px;\n  border-bottom: 1px solid lightgray;\n  cursor: default;\n  transition: background 0.3s;\n  background: ",";\n\n  "," {\n    display: ",";\n  }\n\n  :hover {\n    background: ",";\n\n    "," {\n      display: flex;\n    }\n  }\n\n  @media (prefers-color-scheme: dark) {\n    border-bottom: 1px solid #404040;\n    background: ",";\n\n    :hover {\n      background: ",";\n    }\n  }\n"]);return D=function(){return n},n}function T(){var n=Object(u.a)(["\n  display: none;\n"]);return T=function(){return n},n}var V=l.b.a(T()),W=l.b.div(D(),(function(n){return n.selected&&"#0070c91c"}),V,(function(n){return n.selected&&"flex"}),(function(n){return!n.selected&&"rgba(0, 0, 0, 0.02)"}),V,(function(n){return n.selected&&"#ffffff1f"}),(function(n){return!n.selected&&"#ffffff0d"})),G=l.b.h3(_()),L=l.b.h3(R()),N=l.b.img(M()),$=function(n){var e=n.project,t=n.selected,r=n.onClick;return a.a.createElement(W,{selected:t,onClick:r},a.a.createElement(G,null,e.name),a.a.createElement(V,{style:{textDecoration:"none"},href:e.url,target:"_blank"},a.a.createElement(L,null,"Visit"),a.a.createElement(N,{src:"/external-link.svg"})))};function q(){var n=Object(u.a)(["\n  flex: 0 0 25%;\n  margin: 10vh 0;\n  border-radius: 4px;\n  overflow: hidden;\n\n  @media screen and (max-width: 930px) {\n    margin: 0 0 10vh 0;\n    flex: 1;\n    width: 90vw;\n    max-width: 540px;\n  }\n"]);return q=function(){return n},n}var K=l.b.div(q()),Q=function(n){var e=n.projects,t=n.curProject,r=n.setCurProject;return a.a.createElement(K,null,e.map((function(n,e){return a.a.createElement($,{key:"project-".concat(e),onClick:function(){return r(e)},project:n,selected:e===t})})))};function U(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n\n  @media screen and (max-width: 930px) {\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n  }\n"]);return U=function(){return n},n}function X(){var n=Object(u.a)(["\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\n    @media (prefers-color-scheme: dark) {\n      background: black;\n\n      h1,h2,h3,h4,h5,h6 {\n        color: white;\n      }\n\n      a {\n        color: dodgerblue;\n      }\n    }\n  }\n"]);return X=function(){return n},n}var Z=Object(l.a)(X()),nn=l.b.div(U()),en=[{name:"Apple Music.js",url:"http://tannerv.com/music",videoSrc:"/AppleMusicJS.mp4"},{name:"Playce",url:"http://tannerv.com/playce",videoSrc:"/Playce.mp4"},{name:"Sprinter",url:"http://tannerv.com/Sprinter",videoSrc:"/Sprinter.mp4"},{name:"iFixit Product Reviews",url:"https://www.ifixit.com/Store/iPhone/iPhone-7-Replacement-Battery/IF332-005?o=11",videoSrc:"/Reviews.mp4"}],tn=function(){var n=Object(r.useState)(0),e=Object(c.a)(n,2),t=e[0],o=e[1];return a.a.createElement("div",{className:"App"},a.a.createElement(Z,null),a.a.createElement(w,null),a.a.createElement(nn,null,a.a.createElement(J,{projects:en,curProject:t,setCurProject:o}),a.a.createElement(Q,{projects:en,curProject:t,setCurProject:o})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(tn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.09efce62.chunk.js.map