"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[3213],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||p[d]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1813:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o={id:"useAnimatedSensor",title:"useAnimatedSensor",sidebar_label:"useAnimatedSensor"},l=void 0,s={unversionedId:"api/hooks/useAnimatedSensor",id:"version-2.5.x/api/hooks/useAnimatedSensor",isDocsHomePage:!1,title:"useAnimatedSensor",description:"With the useAnimatedSensor hook, you can easily create cool interactive animations based on data from sensors in the device such as gyroscope, accelerometer etc.",source:"@site/versioned_docs/version-2.5.x/api/hooks/useAnimatedSensor.md",sourceDirName:"api/hooks",slug:"/api/hooks/useAnimatedSensor",permalink:"/react-native-reanimated/docs/api/hooks/useAnimatedSensor",version:"2.5.x",frontMatter:{id:"useAnimatedSensor",title:"useAnimatedSensor",sidebar_label:"useAnimatedSensor"},sidebar:"version-2.5.x/docs",previous:{title:"useAnimatedScrollHandler",permalink:"/react-native-reanimated/docs/api/hooks/useAnimatedScrollHandler"},next:{title:"useAnimatedStyle",permalink:"/react-native-reanimated/docs/api/hooks/useAnimatedStyle"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Types",id:"types",children:[]},{value:"Example",id:"example",children:[]},{value:"Live example",id:"live-example",children:[]},{value:"Tips",id:"tips",children:[]}],m={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"With the ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedSensor")," hook, you can easily create cool interactive animations based on data from sensors in the device such as gyroscope, accelerometer etc."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"useAnimatedSensor(sensorType: [SensorType], config?: [UserConfig]) -> [AnimatedSensor]\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"sensortype---sensortype"},(0,i.kt)("inlineCode",{parentName:"h4"},"sensorType")," - [",(0,i.kt)("a",{parentName:"h4",href:"#sensortype-enum"},"SensorType"),"]"),(0,i.kt)("p",null,"You can select the sensor available in [",(0,i.kt)("a",{parentName:"p",href:"#sensortype-enum"},"SensorType"),"] enum."),(0,i.kt)("h4",{id:"config---userconfig"},(0,i.kt)("inlineCode",{parentName:"h4"},"config")," - [",(0,i.kt)("a",{parentName:"h4",href:"#userconfig-object"},"UserConfig"),"]"),(0,i.kt)("p",null,"Optionally, you can pass configuration to customize the sensor behavior."),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,"Hook ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedSensor")," returns an instance of [",(0,i.kt)("a",{parentName:"p",href:"#animatedsensor-object"},"AnimatedSensor"),"];"),(0,i.kt)("h3",{id:"types"},"Types"),(0,i.kt)("h4",{id:"animatedsensor-object"},(0,i.kt)("inlineCode",{parentName:"h4"},"AnimatedSensor: [object]")),(0,i.kt)("p",null,"Properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sensor"),": [",(0,i.kt)("a",{parentName:"li",href:"../../api/hooks/useSharedValue"},"SharedValue"),"] contains [",(0,i.kt)("a",{parentName:"li",href:"#3dvector-object"},"3DVector"),"] or [",(0,i.kt)("a",{parentName:"li",href:"#rotationvector-object"},"RotationVector"),"] or ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),(0,i.kt)("br",{parentName:"li"}),"contains actual sensor measurements as a shared value"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unregister: [function]"),(0,i.kt)("br",{parentName:"li"}),"allows you to stop listening to sensor updates"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isAvailable: [boolean]"),(0,i.kt)("br",{parentName:"li"}),"the flag contains information on the availability of sensors in a device"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config"),": [",(0,i.kt)("a",{parentName:"li",href:"#userconfig-object"},"UserConfig"),"]",(0,i.kt)("br",{parentName:"li"}),"the configuration provided by a user")),(0,i.kt)("h4",{id:"sensortype-enum"},(0,i.kt)("inlineCode",{parentName:"h4"},"SensorType: [enum]")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SensorType")," is an enum that contains possibly supported sensors.\nValues:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ACCELEROMETER"),(0,i.kt)("br",{parentName:"li"}),"measurements output as [",(0,i.kt)("a",{parentName:"li",href:"#3dvector-object"},"3DVector"),"]. Measured in m/s\xb2, excluding gravity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GYROSCOPE"),(0,i.kt)("br",{parentName:"li"}),"measurements output as [",(0,i.kt)("a",{parentName:"li",href:"#3dvector-object"},"3DVector"),"]. Measured in rad/s."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GRAVITY"),(0,i.kt)("br",{parentName:"li"}),"measurements output as [",(0,i.kt)("a",{parentName:"li",href:"#3dvector-object"},"3DVector"),"]. Measured in m/s\xb2."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MAGNETIC_FIELD"),(0,i.kt)("br",{parentName:"li"}),"measurements output as [",(0,i.kt)("a",{parentName:"li",href:"#3dvector-object"},"3DVector"),"]. Measured in \u03bcT."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ROTATION"),(0,i.kt)("br",{parentName:"li"}),"measurements output as [",(0,i.kt)("a",{parentName:"li",href:"#rotationvector-object"},"RotationVector"),"]. ","[qx, qy, qz, qw]"," is a normalized quaternion. ","[yaw, pitch, roll]"," are rotations measured in radians along respective axes.")),(0,i.kt)("h4",{id:"userconfig-object"},(0,i.kt)("inlineCode",{parentName:"h4"},"UserConfig: [object]")),(0,i.kt)("p",null,"Properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"interval: [number | auto]")," - interval in milliseconds between shared value updates. Pass ",(0,i.kt)("inlineCode",{parentName:"li"},"'auto'")," to select interval based on device frame rate. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'auto'"),".")),(0,i.kt)("h4",{id:"3dvector-object"},(0,i.kt)("inlineCode",{parentName:"h4"},"3DVector: [object]")),(0,i.kt)("p",null,"Properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x: number")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y: number")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"z: number"))),(0,i.kt)("h4",{id:"rotationvector-object"},(0,i.kt)("inlineCode",{parentName:"h4"},"RotationVector: [object]")),(0,i.kt)("p",null,"Properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"qw: number")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"qx: number")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"qy: number")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"qz: number")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yaw: number")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pitch: number")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"roll: number"))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function UseAnimatedSensorExample() {\n  const animatedSensor = useAnimatedSensor(SensorType.ROTATION, { interval: 10 }); // <- initialization\n  const style = useAnimatedStyle(() => {\n    const yaw = Math.abs(animatedSensor.sensor.value.yaw);\n    const pitch = Math.abs(animatedSensor.sensor.value.pitch);\n    return {\n      height: withTiming(yaw * 200 + 20, { duration: 100 }), // <- usage\n      width: withTiming(pitch * 200 + 20, { duration: 100 }), // <- usage\n    };\n  });\n\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Animated.View\n        style={[{ backgroundColor: 'black' }, style]}\n      />\n    </View>\n  );\n}\n")),(0,i.kt)("h3",{id:"live-example"},"Live example"),(0,i.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/158634922-eaad656e-c837-44d5-8d51-8e7fa27c5a16.mp4",controls:"controls",muted:"muted",width:"400"}),(0,i.kt)("h3",{id:"tips"},"Tips"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"On iOS, if you want to read sensor data you need to enable location services on your device (",(0,i.kt)("inlineCode",{parentName:"p"},"Settings > Privacy > Location Services"),")."))))}p.isMDXComponent=!0}}]);