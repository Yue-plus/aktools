!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,(function(key){return value[key]}).bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s="QKe9")}({QKe9:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);let ItemHashList=[],NumbersHashList=[{number:5,hash:[6,3,0,0,1,1,0,0,6,1,0,0,0,0,0,0,6,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,6,1,0,0,2,3,1,0,1,0,0,0,4,6,6,0,0,0,0,0,0,5,6,2,0,0,0,0,0,6,6,0,1,0,0,0,5,6,6,0,6,4,1,1,0,0,0,0],count:6},{number:4,hash:[0,0,0,11,13,5,0,0,0,0,11,13,5,0,0,0,0,3,13,8,0,0,0,0,3,12,13,1,10,10,0,0,13,11,0,0,13,13,0,0,13,2,0,0,12,13,0,0,1,0,0,3,6,2,0,0,0,0,1,3,13,13,0,0,0,0,0,0,12,13,0,0,0,0,0,0,12,13,0,0],count:13},{number:0,hash:[7,9,8,2,0,0,0,0,9,5,0,1,9,8,2,0,7,0,0,0,2,8,6,0,3,0,0,0,2,7,6,1,2,0,0,0,2,7,8,2,1,0,0,0,1,7,8,2,3,0,0,0,1,9,8,2,5,0,0,0,2,8,6,0,8,4,1,0,6,8,2,0,5,9,7,3,0,0,0,0],count:9},{number:3,hash:[8,6,4,1,0,0,0,0,4,0,0,0,8,8,2,0,0,0,0,0,5,9,4,0,0,0,0,2,9,7,3,0,3,9,9,2,1,0,0,0,0,6,8,5,7,4,1,0,0,0,0,0,3,8,7,4,0,0,0,0,1,5,8,4,0,0,0,2,5,8,6,2,9,6,4,2,1,0,0,0],count:9},{number:1,hash:[11,8,6,3,0,0,0,0,10,4,10,4,1,1,0,0,0,1,7,10,1,1,0,0,0,0,6,10,0,1,1,0,0,0,6,10,1,1,1,0,1,1,7,10,0,0,1,0,0,1,8,7,0,1,1,0,0,1,8,7,1,1,0,0,1,2,9,8,1,1,0,0,2,1,1,0,0,1,1,0],count:12},{number:2,hash:[9,7,5,1,0,0,0,0,1,0,0,0,8,9,3,0,0,0,0,0,5,9,4,0,0,0,0,0,5,9,4,0,0,0,0,0,9,9,3,0,0,0,0,6,9,4,0,0,0,2,8,9,2,0,0,0,4,9,8,1,0,0,0,0,9,7,1,0,0,1,1,0,1,0,0,0,0,0,0,0],count:9},{number:6,hash:[2,5,5,4,0,0,0,0,5,4,0,0,0,4,4,0,4,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,3,5,3,0,0,0,0,0,0,5,5,1,4,0,0,0,0,5,5,1,5,0,0,0,3,5,4,0,5,5,5,2,1,1,0,0],count:5},{number:7,hash:[3,1,0,0,0,0,0,0,1,0,0,0,3,3,1,0,1,0,0,0,3,3,0,0,1,0,0,1,3,0,0,0,1,0,1,3,1,0,0,0,1,0,3,3,1,1,1,0,0,0,3,3,0,1,1,0,0,0,3,2,0,1,1,0,0,0,3,2,1,1,1,0,1,1,3,2,0,0,0,0],count:4},{number:8,hash:[5,6,6,1,0,0,0,0,6,3,0,0,4,6,3,0,5,0,0,0,0,6,5,0,6,3,0,0,2,6,4,0,6,6,3,0,1,1,0,0,6,5,0,0,6,2,0,0,4,0,0,0,3,6,6,1,0,0,0,0,0,5,6,2,3,0,0,0,2,6,6,1,6,6,4,0,1,0,0,0],count:6},{number:9,hash:[6,6,2,0,0,0,0,0,4,0,0,1,6,5,1,0,0,0,0,0,3,6,3,0,0,0,0,0,0,6,6,0,2,0,0,0,5,6,6,0,6,5,0,0,1,3,4,0,1,0,1,1,1,6,6,0,1,0,0,0,4,6,3,0,4,1,1,1,5,5,0,0,5,5,2,1,0,0,0,0],count:6}];for(let hash of NumbersHashList)hash.hash instanceof Array&&(hash.hash=hash.hash.map(v=>v/hash.count).map(v=>.5==v?2:v<.5?0:1).join(""));for(let hash of ItemHashList)hash.hash instanceof Array&&(hash.hash=hash.hash.map(v=>v/hash.count).map(v=>.5==v?2:v<.5?0:1).join(""));let XPoint,YPoint,BoundDatas=[{R:[225,255],G:[175,205],B:[0,10]},{R:[208,222],G:[185,205],B:[208,222]},{R:[0,5],G:[170,190],B:[240,255]},{R:[215,245],G:[225,240],B:[50,60]},{R:[0,10],G:[0,4],B:[0,4]},{R:[200,220],G:[165,179],B:[0,4]}],XBound=[[]],YBound=[[]],HashList=[],NumberHashList=[],OriginHashList=[];addEventListener("message",message=>{switch(message.data.method){case"LoadHashData":ItemHashList=message.data.Data;for(let hash of ItemHashList)hash.hash instanceof Array&&(hash.hash=hash.hash.map(v=>v/hash.count).map(v=>.5==v?2:v<.5?0:1).join(""));break;case"ImageDataLoad":postMessage({text:"图像数据预处理 - 边界识别",progress:.1}),XPoint=new Uint16Array(message.data.data.width),YPoint=new Uint16Array(message.data.data.height),XBound=[[]],YBound=[[]],HashList=[],NumberHashList=[],function(ImageData){for(let index=0;index<ImageData.data.length;index+=4){const r=ImageData.data[index],g=ImageData.data[index+1],b=ImageData.data[index+2],x=Math.floor(index/4)%ImageData.width,y=Math.floor(Math.floor(index/4)/ImageData.width);BoundDatas.some(val=>val.R[0]<=r&&val.R[1]>=r&&val.G[0]<=g&&val.G[1]>=g&&val.B[0]<=b&&val.B[1]>=b)&&(XPoint[x]++,YPoint[y]++)}}(message.data.data),postMessage({method:"status",text:"分析图像边界",progress:.2}),function(){for(let x=0,WhiteSpace=0,LastBlank=0;x<XPoint.length;x++)XPoint[x]>8?(0==XBound[XBound.length-1].length&&(XBound[XBound.length-1][0]=x,WhiteSpace=0),LastBlank=x,WhiteSpace=0):XPoint[x]>2&&XPoint[x]<=8?(XPoint[x-1]>8||XPoint[x+1]>8)&&(0==XBound[XBound.length-1].length&&(XBound[XBound.length-1][0]=x,WhiteSpace=0),LastBlank=x,WhiteSpace=0):1==XBound[XBound.length-1].length&&WhiteSpace>=10?(XBound[XBound.length-1][1]=LastBlank,XBound.push([]),WhiteSpace=0):1==XBound[XBound.length-1].length&&WhiteSpace++;1==XBound[XBound.length-1].length&&Math.abs(XPoint.length-1-XBound[XBound.length-1][0]-(XBound[XBound.length-2][1]-XBound[XBound.length-2][0]))<5?XBound[XBound.length-1][1]=XPoint.length-1:XBound.pop();let MaxWidthinLine=[];for(let x=0;x<XBound.length;x++)MaxWidthinLine.push(XBound[x][1]-XBound[x][0]);let mw=Math.round(MaxWidthinLine.reduce((a,b)=>a+b)/MaxWidthinLine.length);for(let x=0;x<XBound.length;x++)XBound[x][1]-XBound[x][0]<50?(XBound.splice(x,1),x--):Math.abs(XBound[x][1]-XBound[x][0]-mw)>20&&(XBound[x][1]=XBound[x][0]+Math.max(...MaxWidthinLine));for(let y=0,WhiteSpace=0,LastBlank=0;y<YPoint.length;y++)YPoint[y]>8?(0==YBound[YBound.length-1].length&&(YBound[YBound.length-1][0]=y,WhiteSpace=0),LastBlank=y):1==YBound[YBound.length-1].length&&WhiteSpace>=10?(YBound[YBound.length-1][1]=LastBlank,YBound.push([]),WhiteSpace=0):1==YBound[YBound.length-1].length&&WhiteSpace++;1==YBound[YBound.length-1].length?YBound[YBound.length-1][1]=YPoint.length-1:YBound.pop();for(let y=0;y<YBound.length;y++)YBound[y][0]==YBound[y][1]&&(YBound.splice(y,1),y--)}(),postMessage({method:"status",text:"主线程切图(页面可能暂时卡死)",progress:.35}),postMessage({method:"clipImage",XBound:XBound,YBound:YBound});break;case"calcDhash":HashList=message.data.ImageDatas.map(item=>{let HashString="";for(let index=0;index<item.data.length;index+=4)Math.floor(index/4)%item.width!=0&&(Math.floor((item.data[index-4]+item.data[index-3]+item.data[index-2])/3)>Math.floor((item.data[index]+item.data[index+1]+item.data[index+2])/3)?HashString+=1:HashString+=0);return HashString}),OriginHashList=[...HashList],postMessage({method:"status",text:"正在判断图像对应的物品",progress:.45}),HashList=HashList.map(hash=>{const ConfidenceFilter=ItemHashList.map(hashs=>{let Confidence=0,AllLength=144;for(let i=0;i<hash.length;i++)hash[i]==hashs.hash[i]&&Confidence++,2==hashs.hash[i]&&AllLength--;return hashs.confidence=Confidence/=AllLength,hashs}).sort((a,b)=>b.confidence-a.confidence);return ConfidenceFilter[0].confidence<=.75&&ConfidenceFilter.unshift({id:"0000",hash:"",count:0,confidence:1}),ConfidenceFilter}),postMessage({method:"status",text:"主线程切割数字(页面可能暂时卡死)",progress:.57}),postMessage({method:"getNumberData"});break;case"getItemCount":postMessage({method:"status",text:"正在识别物品数量",progress:.6});let Numbers=(NumberHashList=message.data.ImageDatas.map(v=>v.map(item=>{let HashString="";for(let index=0;index<item.data.length;index+=4)Math.floor(index/4)%item.width!=0&&(Math.floor((item.data[index-4]+item.data[index-3]+item.data[index-2])/3)>Math.floor((item.data[index]+item.data[index+1]+item.data[index+2])/3)?HashString+=1:HashString+=0);return HashString}))).map(Items=>Number(Items.map(hash=>{let MaybeNumbers=NumbersHashList.map(hashs=>{let Confidence=0,AllLength=80;for(let i=0;i<hash.length;i++)hash[i]==hashs.hash[i]&&Confidence++,2==hashs.hash[i]&&AllLength--;return hashs.confidence=Confidence/=AllLength,hashs}).sort((a,b)=>b.confidence-a.confidence);return MaybeNumbers[0].confidence>.75?MaybeNumbers[0].number:null}).join("")));postMessage({method:"status",text:"识别完成，点击下方物品可以进行修改。",progress:1}),postMessage({method:"DetectResult",NumberResult:Numbers,Items:HashList});break;case"getItemHashs":postMessage({method:"SingleItemHash",Item:HashList[message.data.index],OriginHash:OriginHashList[message.data.index]})}})}});