"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{4277:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(6771),i=n(7294),a=n(4878),o=n(396);var l=(0,r.Z)(o.G,{target:"e1lerpm43"})({name:"1g06x11",styles:"width:12.5rem;height:12.5rem;margin-bottom:1.875rem;border-radius:50%;@media (max-width: 767px){width:9.375rem;height:9.375rem;}"}),u=(0,r.Z)("div",{target:"e1lerpm42"})({name:"5lxcg5",styles:"height:calc(var(--vh, 1vh) * 100);display:flex;flex-direction:column;justify-content:center;align-items:center;width:67.5rem;margin:0 auto;padding:0rem 6.25rem;@media (max-width: 767px){width:100%;}@media (min-width: 768px) and (max-width: 1023px){width:48rem;}"}),s=(0,r.Z)("div",{target:"e1lerpm41"})({name:"1muq76c",styles:"font-size:1.5rem;font-weight:400;@media (max-width: 479px){font-size:0.875rem;}@media (min-width: 480px) and (max-width: 767px){font-size:1rem;}@media (min-width: 768px) and (max-width: 1023px){font-size:1.25rem;}"}),c=(0,r.Z)("div",{target:"e1lerpm40"})({name:"1yc6dso",styles:"margin-top:0.3125rem;font-size:2.1875rem;font-weight:700;@media (max-width: 479px){font-size:0.75rem;}@media (min-width: 480px) and (max-width: 767px){font-size:1.25rem;}@media (min-width: 768px) and (max-width: 1023px){font-size:1.5rem;}"}),m=n(3431),d=function(e){var t=e.image;return(0,m.tZ)(u,null,(0,m.tZ)(l,{image:t,alt:"Profile Image"}),(0,m.tZ)(s,null,'"안녕하세요."'),(0,m.tZ)(c,null,'"프론트엔드를 사랑하는"'),(0,m.tZ)(c,null,'"웹 성능 개선을 좋아하는"'),(0,m.tZ)(c,null,'"협업에 진심인 주니어 개발자입니다."'))};var f=(0,r.Z)("ul",{target:"e1qe0k9l1"})({name:"xp7mzn",styles:"display:flex;flex-direction:row;justify-content:space-around;position:fixed;right:6.25rem;width:18.75rem;height:6.25rem;align-items:center;z-index:100;@media (max-width: 767px){position:fixed;right:0rem;justify-content:space-evenly;}"}),h=(0,r.Z)("li",{target:"e1qe0k9l0"})("list-style:none;cursor:pointer;font-size:1.125rem;font-weight:",(function(e){return e.isSelected?"bold":400}),";border-bottom:",(function(e){return e.isSelected?"1px solid #ffffff":"none"}),";&:hover{border-bottom:0.0625rem solid #ffffff;}@media (max-width: 767px){font-size:0.875rem;}"),v=function(e){var t=e.currentPageName,n=e.onClickNavBar;return(0,m.tZ)(f,null,(0,m.tZ)(h,{isSelected:"About"===t,onClick:n},"About"),(0,m.tZ)(h,{isSelected:"Project"===t,onClick:n},"Project"),(0,m.tZ)(h,{isSelected:"Blog"===t,onClick:n},"Blog"),(0,m.tZ)(h,{isSelected:"Contact"===t,onClick:n},"Contact"))};var g=(0,r.Z)("div",{target:"e1rwe9qh1"})({name:"1erfa7j",styles:"height:calc(var(--vh, 1vh) * 100);position:relative;display:flex;flex-direction:column"}),p=(0,r.Z)("div",{target:"e1rwe9qh0"})({name:"1rzu5pb",styles:"position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);line-height:24px;font-size:18px"}),x=n(832),w=function(){return(0,m.tZ)(g,null,(0,m.tZ)(p,null,(0,m.tZ)("div",null,"Phone: 010-3292-7923"),(0,m.tZ)("div",null,"Mail: sjman223@naver.com"),(0,m.tZ)("div",null,"Github:",(0,m.tZ)("a",{href:"https://github.com/seongjunme"},"https://github.com/seongjunme"))),(0,m.tZ)(x.Z,null))},Z=n(7462),b=n(2407),y=n(1597);var k=(0,r.Z)("div",{target:"e1ss8j5b2"})({name:"viakpa",styles:"display:grid;justify-content:center;align-content:center;grid-template-columns:1fr 1fr 1fr;grid-gap:30px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)"}),C=(0,r.Z)("div",{target:"e1ss8j5b1"})({name:"108vaby",styles:"height:calc(var(--vh, 1vh) * 100);position:relative;margin:0 auto"}),z=(0,r.Z)(y.rU,{target:"e1ss8j5b0"})({name:"ntpw8m",styles:"position:absolute;top:-12%;right:1%;font-size:16px"}),j=function(e){var t=e.posts,n=e.moreURL;return(0,m.tZ)(C,null,(0,m.tZ)(k,null,t.slice(0,3).map((function(e){var t=e.node,n=t.id,r=t.fields.slug,i=t.frontmatter;return(0,m.tZ)(b.Z,(0,Z.Z)({key:n,link:r},i))})),n&&(0,m.tZ)(z,{to:n},"more ",">")))},P=function(e,t){var n;return function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];clearTimeout(n),n=setTimeout((function(){return e.apply(void 0,i)}),t)}},E=["About","Project","Blog","Contact"],B=function(e){var t=e.maxPageCount,n=(0,i.useRef)(null),r=(0,i.useRef)(0),a=(0,i.useState)(E[r.current]),o=a[0],l=a[1],u=(0,i.useCallback)((function(){var e;null===(e=n.current)||void 0===e||e.scrollTo({top:window.innerHeight*r.current,left:0,behavior:"smooth"})}),[]),s=(0,i.useCallback)((function(){r.current+=1,u(),l(E[r.current])}),[]),c=(0,i.useCallback)((function(){r.current-=1,u(),l(E[r.current])}),[]);(0,i.useEffect)((function(){var e,i=P((function(e){e.preventDefault();var n=e.deltaY;n>0&&r.current<t?s():n<0&&r.current>0&&c()}),50);return null===(e=n.current)||void 0===e||e.addEventListener("wheel",i),function(){var e;null===(e=n.current)||void 0===e||e.removeEventListener("wheel",i)}}),[]),(0,i.useEffect)((function(){return window.addEventListener("resize",u),function(){window.removeEventListener("resize",u)}}),[]),(0,i.useEffect)((function(){var e=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")};e(),window.addEventListener("resize",e)}),[]);var m=(0,i.useCallback)((function(e){var t=e.currentTarget.innerText;r.current=E.indexOf(t),u(),l(t)}),[]);return{outerRef:n,currentPageName:o,onClickNavBar:m}};var N=function(e){var t=e.data,n=t.allMarkdownRemark.edges,r=t.file.childImageSharp.gatsbyImageData,o=B({maxPageCount:3}),l=o.outerRef,u=o.currentPageName,s=o.onClickNavBar,c=(0,i.useMemo)((function(){return n.filter((function(e){return"Project"===e.node.frontmatter.type}))}),[]),f=(0,i.useMemo)((function(){return n.filter((function(e){return"Blog"===e.node.frontmatter.type}))}),[]);return(0,m.tZ)(S,{ref:l},(0,m.tZ)(v,{currentPageName:u,onClickNavBar:s}),(0,m.tZ)(d,{image:r}),(0,m.tZ)(j,{posts:c}),(0,m.tZ)(j,{posts:f,moreURL:"/blog"}),(0,m.tZ)(w,null),(0,m.tZ)(a.Z,null))},S=(0,r.Z)("div",{target:"ewcmato0"})({name:"1ecenrx",styles:"height:calc(var(--vh, 1vh) * 100);overflow-y:hidden;overflow-x:hidden;&::--webkit-scrollbar{display:none;}width:100%;background-color:#121212;color:#ffffff"})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a8483458ef77fb69a74d.js.map