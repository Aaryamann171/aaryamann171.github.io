(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{8947:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return t(326)}])},6151:function(e,r,t){"use strict";var n=t(5893),a={background:"#FFFFFF",color:"#000000",borderTop:"2px black solid",fontWeight:"bold"};r.Z=function(){return(0,n.jsx)("footer",{className:"text-center text-lg-start footer navbar-fixed-bottom mt-2",style:a,children:(0,n.jsx)("div",{className:"text-center p-3",children:"[</> with <3 by aaryamann]"})})}},1127:function(e,r,t){"use strict";var n=t(5893),a=t(1664),o={color:"#000000",fontWeight:"bold"},l={background:"#FFFFFF",borderBottom:"2px black solid",color:"#000000"};r.Z=function(){return(0,n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light mb-2",style:l,children:(0,n.jsxs)("div",{className:"container-fluid",children:[(0,n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,n.jsx)("span",{className:"navbar-toggler-icon"})}),(0,n.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:[(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{className:"navbar-brand",style:o,children:"[Aaryamann]"})}),(0,n.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(a.default,{href:"/skills",children:(0,n.jsx)("a",{className:"nav-link","aria-current":"page",style:o,children:"[Skills]"})})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(a.default,{href:"/projects",children:(0,n.jsx)("a",{className:"nav-link",style:o,children:"[Projects]"})})})]}),(0,n.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(a.default,{href:"https://github.com/aaryamann171",children:(0,n.jsx)("a",{className:"nav-link",target:"_blank",rel:"noreferrer",style:o,children:"[GitHub]"})})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(a.default,{href:"https://aaryamann171.github.io/blog/",children:(0,n.jsx)("a",{className:"nav-link",target:"_blank",rel:"noreferrer",style:o,children:"[Blog]"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(a.default,{href:"mailto:aaryamann171@gmail.com",children:(0,n.jsx)("a",{className:"nav-link",style:o,children:"[E-mail]"})})})]})]})]})})}},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(s){i=!0,a=s}finally{try{l||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var o,l=(o=t(7294))&&o.__esModule?o:{default:o},i=t(6273),s=t(387),c=t(7190);var u={};function d(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var r,t=!1!==e.prefetch,n=s.useRouter(),o=l.default.useMemo((function(){var r=a(i.resolveHref(n,e.href,!0),2),t=r[0],o=r[1];return{href:t,as:e.as?i.resolveHref(n,e.as):o||t}}),[n,e.href,e.as]),f=o.href,m=o.as,p=e.children,b=e.replace,g=e.shallow,h=e.scroll,v=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var y=(r=l.default.Children.only(p))&&"object"===typeof r&&r.ref,x=a(c.useIntersection({rootMargin:"200px"}),2),j=x[0],k=x[1],N=l.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);l.default.useEffect((function(){var e=k&&t&&i.isLocalURL(f),r="undefined"!==typeof v?v:n&&n.locale,a=u[f+"%"+m+(r?"%"+r:"")];e&&!a&&d(n,f,m,{locale:r})}),[m,f,k,v,t,n]);var w={ref:N,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,o,l,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),r[a?"replace":"push"](t,n,{shallow:o,locale:s,scroll:l}))}(e,n,f,m,b,g,h,v)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(f)&&d(n,f,m,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var L="undefined"!==typeof v?v:n&&n.locale,R=n&&n.isLocaleDomain&&i.getDomainLocale(m,L,n&&n.locales,n&&n.domainLocales);w.href=R||i.addBasePath(i.addLocale(m,L,n&&n.defaultLocale))}return l.default.cloneElement(r,w)};r.default=f},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(s){i=!0,a=s}finally{try{l||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!i,u=o.useRef(),d=a(o.useState(!1),2),f=d[0],m=d[1],p=a(o.useState(r?r.current:null),2),b=p[0],g=p[1],h=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=s.get(n):(r=s.get(t),c.push(t));if(r)return r;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=a.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return s.set(t,r={id:t,observer:o,elements:a}),r}(t),a=n.id,o=n.observer,l=n.elements;return l.set(e,r),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),s.delete(a);var r=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&m(e)}),{root:b,rootMargin:t}))}),[n,b,t,f]);return o.useEffect((function(){if(!i&&!f){var e=l.requestIdleCallback((function(){return m(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){r&&g(r.current)}),[r]),[h,f]};var o=t(7294),l=t(9311),i="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},326:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return b}});var n=t(5893),a=t(1664),o={color:"white",textDecoration:"none"},l={color:"black",textDecoration:"none"},i={borderLeft:"2px black solid",borderTop:"2px black solid",borderBottom:"4px black solid",borderRight:"4px black solid",borderRadius:"8px"},s={borderLeft:"2px black solid",borderTop:"2px black solid",borderBottom:"4px black solid",borderRight:"4px black solid",borderRadius:"8px"},c={backgroundColor:"#5D6EC7",borderLeft:"2px black solid",borderTop:"2px black solid",borderBottom:"4px black solid",borderRight:"4px black solid",borderRadius:"8px"},u=function(e){var r,t;return e.sourceCodeURL&&(r=(0,n.jsx)("button",{className:"btn btn-primary",style:c,children:(0,n.jsx)(a.default,{href:e.sourceCodeURL,children:(0,n.jsx)("a",{target:"_blank",style:o,children:"Source Code"})})})),e.deploymentURL&&(t=(0,n.jsx)("button",{className:"btn btn-light mx-2 mb-mx-0",style:s,children:(0,n.jsx)(a.default,{href:e.deploymentURL,children:(0,n.jsx)("a",{target:"_blank",style:l,children:"Check it out"})})})),(0,n.jsx)("div",{className:"container my-auto",children:(0,n.jsxs)("div",{className:"row my-4",children:[(0,n.jsxs)("div",{className:"col-md-4 col-sm-12 my-3",children:[(0,n.jsx)("h1",{className:"display-2 font-weight-bold",children:e.projectName}),(0,n.jsx)("p",{className:"lead",children:e.projectDesc}),r,t]}),(0,n.jsx)("div",{className:"col-md-8 col-sm-12",children:(0,n.jsx)("img",{src:e.imgSrc,className:"d-block w-100",style:i,alt:e.imgAlt,loading:"lazy"})})]})})},d=t(1127),f=t(6151),m={backgroundColor:"#F6F6F6",color:"#000000"},p={backgroundColor:"#FFFFFF",borderLeft:"2px black solid",borderTop:"2px black solid",borderBottom:"4px black solid",borderRight:"4px black solid",borderRadius:"8px",padding:"20px",marginBottom:"20px"},b=function(){return(0,n.jsxs)("div",{style:m,children:[(0,n.jsx)(d.Z,{}),(0,n.jsx)("div",{className:"container my-5",children:[{projectName:"dbug",projectDesc:"An online code review tool developed using django.",imgSrc:"/images/dbug/dbug1.png",imgAlt:"dubg1",sourceCodeURL:"https://github.com/Aaryamann171/dbug-django",deploymentURL:"http://d-bug.herokuapp.com/"},{projectName:"Fang Stonks",projectDesc:"A stock price visualization tools built using Streamlit a python Framework.",imgSrc:"/images/fang-stonks/fs-1.png",imgAlt:"fs-1",sourceCodeURL:"https://github.com/Aaryamann171/fang-stonks",deploymentURL:"https://share.streamlit.io/aaryamann171/fang-stonks/main/streamlit_app.py"},{projectName:"uniFy",projectDesc:"University utility app developed using Flutter a Dart Framework.",imgSrc:"/images/uniFy/unify.png",imgAlt:"unify"},{projectName:"Synthwave - Vroom! Vroom!",projectDesc:"A driving game developed using PyGame a Python library.",imgSrc:"/images/svv/svv1.png",imgAlt:"svv1",sourceCodeURL:"https://github.com/Aaryamann171/Synthwave-Vroom-Vroom"}].map((function(e){return(0,n.jsx)("div",{style:p,children:(0,n.jsx)(u,{projectName:e.projectName,projectDesc:e.projectDesc,imgSrc:e.imgSrc,imgAlt:e.imgAlt,sourceCodeURL:e.sourceCodeURL,deploymentURL:e.deploymentURL})},e.projectName)}))}),(0,n.jsx)(f.Z,{})]})}},1664:function(e,r,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=8947,e(e.s=r);var r}));var r=e.O();_N_E=r}]);