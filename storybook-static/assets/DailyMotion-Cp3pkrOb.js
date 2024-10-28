import{g as P,r as v}from"./index-BP8_t0zE.js";import{u as D,p as O}from"./VideoPlayer-zgMX9sg5.js";function b(e,t){for(var r=0;r<t.length;r++){const n=t[r];if("string"!=typeof n&&!Array.isArray(n))for(const t in n)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(n,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>n[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var M=Object.create,s=Object.defineProperty,w=Object.getOwnPropertyDescriptor,S=Object.getOwnPropertyNames,j=Object.getPrototypeOf,T=Object.prototype.hasOwnProperty,E=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})},h=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of S(t))!T.call(e,o)&&o!==r&&s(e,o,{get:()=>t[o],enumerable:!(n=w(t,o))||n.enumerable});return e},L=(e,t,r)=>(r=null!=e?M(j(e)):{},h(e&&e.__esModule?r:s(r,"default",{value:e,enumerable:!0}),e)),C=e=>h(s({},"__esModule",{value:!0}),e),n=(e,t,r)=>(E(e,"symbol"!=typeof t?t+"":t,r),r),d={};A(d,{default:()=>p});var _=C(d),c=L(v),l=D,f=O;const N="https://api.dmcdn.net/all.js",x="DM",K="dmAsyncInit";class p extends c.Component{constructor(){super(...arguments),n(this,"callPlayer",l.callPlayer),n(this,"onDurationChange",(()=>{const e=this.getDuration();this.props.onDuration(e)})),n(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),n(this,"unmute",(()=>{this.callPlayer("setMuted",!1)})),n(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{controls:t,config:r,onError:n,playing:o}=this.props,[,a]=e.match(f.MATCH_URL_DAILYMOTION);this.player?this.player.load(a,{start:(0,l.parseStartTime)(e),autoplay:o}):(0,l.getSDK)(N,x,K,(e=>e.player)).then((o=>{if(!this.container)return;const s=o.player;this.player=new s(this.container,{width:"100%",height:"100%",video:a,params:{controls:t,autoplay:this.props.playing,mute:this.props.muted,start:(0,l.parseStartTime)(e),origin:window.location.origin,...r.params},events:{apiready:this.props.onReady,seeked:()=>this.props.onSeek(this.player.currentTime),video_end:this.props.onEnded,durationchange:this.onDurationChange,pause:this.props.onPause,playing:this.props.onPlay,waiting:this.props.onBuffer,error:e=>n(e)}})}),n)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.player.duration||null}getCurrentTime(){return this.player.currentTime}getSecondsLoaded(){return this.player.bufferedTime}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return c.default.createElement("div",{style:t},c.default.createElement("div",{ref:this.ref}))}}n(p,"displayName","DailyMotion"),n(p,"canPlay",f.canPlay.dailymotion),n(p,"loopOnEnded",!0);const R=P(_),k=b({__proto__:null,default:R},[_]);export{k as D};