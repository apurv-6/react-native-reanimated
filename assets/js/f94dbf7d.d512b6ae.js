"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[8535],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),h=a,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5562:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l={id:"useHandler",title:"useHandler",sidebar_label:"useHandler"},i=void 0,c={unversionedId:"api/hooks/useHandler",id:"api/hooks/useHandler",isDocsHomePage:!1,title:"useHandler",description:"This is low-level hook returning context object and value indicating whether worklet should be rebuilt, which should be used in order to create custom event handler hook like useAnimatedGestureHandler or useAnimatedScrollHandler.",source:"@site/docs/api/hooks/useHandler.md",sourceDirName:"api/hooks",slug:"/api/hooks/useHandler",permalink:"/react-native-reanimated/docs/next/api/hooks/useHandler",version:"current",frontMatter:{id:"useHandler",title:"useHandler",sidebar_label:"useHandler"},sidebar:"docs",previous:{title:"useFrameCallback",permalink:"/react-native-reanimated/docs/next/api/hooks/useFrameCallback"},next:{title:"useSharedValue",permalink:"/react-native-reanimated/docs/next/api/hooks/useSharedValue"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],u={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is low-level hook returning context object and value indicating whether worklet should be rebuilt, which should be used in order to create custom event handler hook like ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedGestureHandler")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedScrollHandler"),"."),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"handlerorhandlersobject-object-with-worklets"},(0,o.kt)("inlineCode",{parentName:"h4"},"handlerOrHandlersObject")," ","[object with worklets]"),(0,o.kt)("p",null,"Object containing custom keys matching native event names.\nThe values in the object should be individual worklets.\nEach of the worklet will be triggered when the corresponding event is dispatched on the connected animated component."),(0,o.kt)("p",null,"Each of the event worklets will receive the following parameters when called:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"event")," ","[object]"," - event object.\nThe payload can differ depending on the type of the event.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"context")," ","[object]"," - plain JS object that can be used to store some state.\nThis object will persist in between event occurrences and you can read and write any data to it.\nWhen there are several event handlers provided in a form of an object of worklets, the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," object will be shared in between the worklets allowing them to communicate with each other."))),(0,o.kt)("h4",{id:"dependencies-array"},(0,o.kt)("inlineCode",{parentName:"h4"},"dependencies")," ","[Array]"),(0,o.kt)("p",null,"Optional array of values which changes cause this hook to receive updated values during rerender of the wrapping component. This matters when, for instance, worklet uses values dependent on the component's state."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dependencies")," here may be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"undefined"),"(argument skipped) - worklet will be rebuilt if there is any change in any of the callbacks' bodies or any values from their closure(variables from outer scope used in worklet),"),(0,o.kt)("li",{parentName:"ul"},"empty array(",(0,o.kt)("inlineCode",{parentName:"li"},"[]"),") - worklet will be rebuilt only if any of the callbacks' bodies changes,"),(0,o.kt)("li",{parentName:"ul"},"array of values(",(0,o.kt)("inlineCode",{parentName:"li"},"[val1, val2, ..., valN]"),") - worklet will be rebuilt if there is any change in any of the callbacks bodies or in any values from the given array.")),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,"The hook returns a context that will be reused by event handlers and value that indicates whether worklets should be rebuilt. If different implementation is needed for web, ",(0,o.kt)("inlineCode",{parentName:"p"},"useWeb")," boolean is returned to check for web environment"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function useAnimatedPagerScrollHandler(handlers, dependencies) {\n  const { context, doDependenciesDiffer, useWeb } = useHandler(handlers, dependencies);\n\n  return useEvent(\n    (event) => {\n      'worklet';\n      const { onPageScroll } = handlers;\n\n      if (onPageScroll && event.eventName.endsWith('onPageScroll')) {\n        onPageScroll(event, context);\n      }\n    },\n    ['onPageScroll'],\n    doDependenciesDiffer,\n  );\n")))}d.isMDXComponent=!0}}]);