(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{8413:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/skills",function(){return n(672)}])},6151:function(e,t,n){"use strict";var r=n(5893),a={background:"#FFFFFF",color:"#000000",borderTop:"2px black solid",fontWeight:"bold"};t.Z=function(){return(0,r.jsx)("footer",{className:"text-center text-lg-start footer navbar-fixed-bottom mt-2",style:a,children:(0,r.jsx)("div",{className:"text-center p-3",children:"[</> with <3 by aaryamann]"})})}},1127:function(e,t,n){"use strict";var r=n(5893),a=n(1664),l={color:"#000000",fontWeight:"bold"},i={background:"#FFFFFF",borderBottom:"2px black solid",color:"#000000"};t.Z=function(){return(0,r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light mb-2",style:i,children:(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"navbar-toggler-icon"})}),(0,r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:[(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{className:"navbar-brand",style:l,children:"[Aaryamann]"})}),(0,r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(a.default,{href:"/skills",children:(0,r.jsx)("a",{className:"nav-link","aria-current":"page",style:l,children:"[Skills]"})})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(a.default,{href:"/projects",children:(0,r.jsx)("a",{className:"nav-link",style:l,children:"[Projects]"})})})]}),(0,r.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(a.default,{href:"https://github.com/aaryamann171",children:(0,r.jsx)("a",{className:"nav-link",target:"_blank",rel:"noreferrer",style:l,children:"[GitHub]"})})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(a.default,{href:"https://aaryamann171.github.io/blog/",children:(0,r.jsx)("a",{className:"nav-link",target:"_blank",rel:"noreferrer",style:l,children:"[Blog]"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"mailto:aaryamann171@gmail.com",children:(0,r.jsx)("a",{className:"nav-link",style:l,children:"[E-mail]"})})})]})]})]})})}},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(s){o=!0,a=s}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var l,i=(l=n(7294))&&l.__esModule?l:{default:l},o=n(6273),s=n(387),c=n(7190);var u={};function f(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=s.useRouter(),l=i.default.useMemo((function(){var t=a(o.resolveHref(r,e.href,!0),2),n=t[0],l=t[1];return{href:n,as:e.as?o.resolveHref(r,e.as):l||n}}),[r,e.href,e.as]),d=l.href,m=l.as,g=e.children,h=e.replace,p=e.shallow,b=e.scroll,v=e.locale;"string"===typeof g&&(g=i.default.createElement("a",null,g));var y=(t=i.default.Children.only(g))&&"object"===typeof t&&t.ref,x=a(c.useIntersection({rootMargin:"200px"}),2),j=x[0],k=x[1],S=i.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);i.default.useEffect((function(){var e=k&&n&&o.isLocalURL(d),t="undefined"!==typeof v?v:r&&r.locale,a=u[d+"%"+m+(t?"%"+t:"")];e&&!a&&f(r,d,m,{locale:t})}),[m,d,k,v,n,r]);var N={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,l,i,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),t[a?"replace":"push"](n,r,{shallow:l,locale:s,scroll:i}))}(e,r,d,m,h,p,b,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),o.isLocalURL(d)&&f(r,d,m,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var w="undefined"!==typeof v?v:r&&r.locale,F=r&&r.isLocaleDomain&&o.getDomainLocale(m,w,r&&r.locales,r&&r.domainLocales);N.href=F||o.addBasePath(o.addLocale(m,w,r&&r.defaultLocale))}return i.default.cloneElement(t,N)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(s){o=!0,a=s}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!o,u=l.useRef(),f=a(l.useState(!1),2),d=f[0],m=f[1],g=a(l.useState(t?t.current:null),2),h=g[0],p=g[1],b=l.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=s.get(r):(t=s.get(n),c.push(n));if(t)return t;var a=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(n,t={id:n,observer:l,elements:a}),t}(n),a=r.id,l=r.observer,i=r.elements;return i.set(e,t),l.observe(e),function(){if(i.delete(e),l.unobserve(e),0===i.size){l.disconnect(),s.delete(a);var t=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:h,rootMargin:n}))}),[r,h,n,d]);return l.useEffect((function(){if(!o&&!d){var e=i.requestIdleCallback((function(){return m(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),l.useEffect((function(){t&&p(t.current)}),[t]),[b,d]};var l=n(7294),i=n(9311),o="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},672:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893),a={width:"10%",padding:"5px"},l=function(e){return(0,r.jsx)("img",{style:a,src:e.thumbnailSrc,title:e.title,loading:"lazy"})},i=n(1127),o=n(6151),s={backgroundColor:"#FFFFFF",color:"#000000",borderRadius:"8px",padding:"20px",borderLeft:"2px black solid",borderTop:"2px black solid",borderBottom:"4px black solid",borderRight:"4px black solid"},c={backgroundColor:"#F6F6F6"},u={borderRadius:"8px",alignItems:"center",maxWidth:"90%"},f=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"d-flex flex-column min-vh-100 text-center",style:c,children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)("div",{className:"container my-auto",children:(0,r.jsxs)("div",{className:"row container",children:[(0,r.jsx)("div",{className:"col-md-6 col-sm-12",children:(0,r.jsx)("img",{src:"/images/others/coder_vector.png",alt:"coder",style:u})}),(0,r.jsx)("div",{className:"col-md-6 col-sm-12",style:s,children:[{category:"Programming",skills:[{thumbnailSrc:"/images/skill-icons/python.png",title:"python"},{thumbnailSrc:"/images/skill-icons/cpp.png",title:"c++"},{thumbnailSrc:"/images/skill-icons/java.png",title:"java"}]},{category:"Web Development",skills:[{thumbnailSrc:"/images/skill-icons/html5.png",title:"html5"},{thumbnailSrc:"/images/skill-icons/css3.png",title:"css3"},{thumbnailSrc:"/images/skill-icons/javascript.png",title:"javascript"},{thumbnailSrc:"/images/skill-icons/tailwindcss.png",title:"tailwind"},{thumbnailSrc:"/images/skill-icons/bootstrap.png",title:"bootstrap"}]},{category:"Database",skills:[{thumbnailSrc:"/images/skill-icons/mysql.png",title:"my-sql"},{thumbnailSrc:"/images/skill-icons/mongodb.png",title:"mongodb"},{thumbnailSrc:"/images/skill-icons/postgresql.png",title:"postgresql"}]},{category:"Frameworks",skills:[{thumbnailSrc:"/images/skill-icons/nextjs.png",title:"next.js"},{thumbnailSrc:"/images/skill-icons/django.png",title:"django"},{thumbnailSrc:"/images/skill-icons/react.png",title:"react"},{thumbnailSrc:"/images/skill-icons/flutter.png",title:"flutter"}]},{category:"Platforms and Tools",skills:[{thumbnailSrc:"/images/skill-icons/linux.png",title:"linux"},{thumbnailSrc:"/images/skill-icons/git.png",title:"git"},{thumbnailSrc:"/images/skill-icons/github.png",title:"github"},{thumbnailSrc:"/images/skill-icons/adobe-xd.png",title:"adobe-xd"}]}].map((function(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:e.category}),e.skills.map((function(e){return(0,r.jsx)(l,{thumbnailSrc:e.thumbnailSrc,title:e.title},e.title)}))]},e.category)}))})]})}),(0,r.jsx)(o.Z,{})]})})}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=8413,e(e.s=t);var t}));var t=e.O();_N_E=t}]);