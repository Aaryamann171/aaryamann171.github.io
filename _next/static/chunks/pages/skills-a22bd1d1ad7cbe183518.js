(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{1911:function(e,t,n){"use strict";var a=n(5893);t.Z=function(){return(0,a.jsx)("footer",{className:"bg-light text-center text-lg-start footer navbar-fixed-bottom",children:(0,a.jsx)("div",{className:"text-center p-3",children:"</> with <3 by aaryamann"})})}},7304:function(e,t,n){"use strict";var a=n(1664),r=n(5893);t.Z=function(){return(0,r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"navbar-toggler-icon"})}),(0,r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:[(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{className:"navbar-brand",children:"Aaryamann"})}),(0,r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(a.default,{href:"/skills",children:(0,r.jsx)("a",{className:"nav-link","aria-current":"page",children:"Skills"})})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(a.default,{href:"/projects",children:(0,r.jsx)("a",{className:"nav-link",children:"Projects"})})})]}),(0,r.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(a.default,{href:"https://github.com/aaryamann171",children:(0,r.jsx)("a",{className:"nav-link",target:"_blank",rel:"noreferrer",children:"GitHub"})})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(a.default,{href:"https://aaryamann171.github.io/blog/",children:(0,r.jsx)("a",{className:"nav-link",target:"_blank",rel:"noreferrer",children:"Blog"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"mailto:aaryamann171@gmail.com",children:(0,r.jsx)("a",{className:"nav-link",children:"E-mail"})})})]})]})]})})}},2167:function(e,t,n){"use strict";var a=n(3038);t.default=void 0;var r,l=(r=n(7294))&&r.__esModule?r:{default:r},s=n(1063),i=n(4651),o=n(7426);var c={};function u(e,t,n,a){if(e&&s.isLocalURL(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;c[t+"%"+n+(r?"%"+r:"")]=!0}}var m=function(e){var t,n=!1!==e.prefetch,r=i.useRouter(),m=l.default.useMemo((function(){var t=s.resolveHref(r,e.href,!0),n=a(t,2),l=n[0],i=n[1];return{href:l,as:e.as?s.resolveHref(r,e.as):i||l}}),[r,e.href,e.as]),d=m.href,h=m.as,f=e.children,p=e.replace,g=e.shallow,v=e.scroll,b=e.locale;"string"===typeof f&&(f=l.default.createElement("a",null,f));var x=(t=l.default.Children.only(f))&&"object"===typeof t&&t.ref,j=o.useIntersection({rootMargin:"200px"}),y=a(j,2),N=y[0],k=y[1],S=l.default.useCallback((function(e){N(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,N]);l.default.useEffect((function(){var e=k&&n&&s.isLocalURL(d),t="undefined"!==typeof b?b:r&&r.locale,a=c[d+"%"+h+(t?"%"+t:"")];e&&!a&&u(r,d,h,{locale:t})}),[h,d,k,b,n,r]);var _={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,l,i,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),null==i&&a.indexOf("#")>=0&&(i=!1),t[r?"replace":"push"](n,a,{shallow:l,locale:o,scroll:i}))}(e,r,d,h,p,g,v,b)},onMouseEnter:function(e){s.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(r,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var w="undefined"!==typeof b?b:r&&r.locale,E=r&&r.isLocaleDomain&&s.getDomainLocale(h,w,r&&r.locales,r&&r.domainLocales);_.href=E||s.addBasePath(s.addLocale(h,w,r&&r.defaultLocale))}return l.default.cloneElement(t,_)};t.default=m},7426:function(e,t,n){"use strict";var a=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,o=r.useRef(),c=r.useState(!1),u=a(c,2),m=u[0],d=u[1],h=r.useCallback((function(e){o.current&&(o.current(),o.current=void 0),n||m||e&&e.tagName&&(o.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:r,elements:a}),n}(n),r=a.id,l=a.observer,s=a.elements;return s.set(e,t),l.observe(e),function(){s.delete(e),l.unobserve(e),0===s.size&&(l.disconnect(),i.delete(r))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,m]);return r.useEffect((function(){if(!s&&!m){var e=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[m]),[h,m]};var r=n(7294),l=n(3447),s="undefined"!==typeof IntersectionObserver;var i=new Map},9997:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(5893),r={width:"10%",padding:"5px"},l=function(e){return(0,a.jsx)("img",{style:r,src:e.thumbnailSrc,title:e.title})},s=n(7304),i=n(1911),o={border:"1px solid black",borderRadius:"8px",padding:"20px"},c=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"d-flex flex-column min-vh-100",children:[(0,a.jsx)(s.Z,{}),(0,a.jsx)("div",{className:"container my-auto",children:(0,a.jsxs)("div",{className:"row container",children:[(0,a.jsx)("div",{className:"col-md-6 col-sm-12",children:(0,a.jsx)("img",{src:"/images/others/coder_vector.png",alt:"coder",width:500,height:500})}),(0,a.jsxs)("div",{className:"col-md-6 col-sm-12",style:o,children:[(0,a.jsx)("h4",{children:"Programming"}),(0,a.jsx)(l,{thumbnailSrc:"https://img.icons8.com/color/144/000000/python.png",title:"python"}),(0,a.jsx)(l,{thumbnailSrc:"https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",title:"c++"}),(0,a.jsx)(l,{thumbnailSrc:"https://img.icons8.com/color/144/000000/java-coffee-cup-logo.png",title:"java"}),(0,a.jsx)("h4",{children:"Web Development"}),(0,a.jsx)(l,{thumbnailSrc:"https://img.icons8.com/color/144/000000/html-5.png",title:"html5"}),(0,a.jsx)(l,{thumbnailSrc:"https://img.icons8.com/color/144/000000/css3.png",title:"css3"}),(0,a.jsx)(l,{thumbnailSrc:"https://img.icons8.com/color/144/000000/javascript.png",title:"javascript"}),(0,a.jsx)(l,{thumbnailSrc:"https://img.icons8.com/color/144/000000/bootstrap.png",title:"bootstrap"}),(0,a.jsx)("h4",{children:"Database"}),(0,a.jsx)(l,{thumbnailSrc:"https://img.icons8.com/ios/50/000000/mysql-logo.png",title:"my-sql"}),(0,a.jsx)(l,{thumbnailSrc:"https://img.icons8.com/color/48/000000/mongodb.png",title:"mongodb"}),(0,a.jsx)(l,{thumbnailSrc:"https://img.icons8.com/color/48/000000/postgreesql.png",title:"postgresql"}),(0,a.jsx)("h4",{children:"Frameworks"}),(0,a.jsx)(l,{thumbnailSrc:"https://img.icons8.com/color/144/000000/django.png",title:"django"}),(0,a.jsx)(l,{thumbnailSrc:"https://img.icons8.com/plasticine/100/000000/react.png",title:"react"}),(0,a.jsx)(l,{thumbnailSrc:"https://img.icons8.com/color/144/000000/angularjs.png",title:"angularjs"}),(0,a.jsx)(l,{thumbnailSrc:"https://img.icons8.com/color/144/000000/flutter.png",title:"flutter"}),(0,a.jsx)("h4",{children:"Platforms and Tools"}),(0,a.jsx)(l,{thumbnailSrc:"https://img.icons8.com/color/144/000000/linux.png",title:"linux"}),(0,a.jsx)(l,{thumbnailSrc:"https://img.icons8.com/color/144/000000/git.png",title:"git"}),(0,a.jsx)(l,{thumbnailSrc:"https://img.icons8.com/ios-filled/50/000000/github.png",title:"github"}),(0,a.jsx)(l,{thumbnailSrc:"https://img.icons8.com/color/144/000000/adobe-xd.png",title:"adobe-xd"})]})]})}),(0,a.jsx)(i.Z,{})]})})}},8413:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/skills",function(){return n(9997)}])},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=8413,e(e.s=t);var t}));var t=e.O();_N_E=t}]);