(window["webpackJsonpyoutube-clone"]=window["webpackJsonpyoutube-clone"]||[]).push([[0],{221:function(e,t,n){},222:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(37),i=n.n(c),o=n(9),l=n(5),s=n(26),u=n.n(s),d=n(21),m=n.n(d),p=n(38),f=n(91),v=n.n(f).a.create({baseURL:"https://www.googleapis.com/youtube/v3/"}),E=function(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"AIzaSyCDRq6ohA6Ka3PGJrCk4wuiX1niCm-gFxU",t.next=3,v.get("search/",{params:{part:"snippet",q:e,key:"AIzaSyCDRq6ohA6Ka3PGJrCk4wuiX1niCm-gFxU"}});case 3:a=t.sent,n({type:"FETCH_VIDEOS",payload:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return{type:"FETCH_VIDEO_INDEX",payload:e}},b=Object(o.b)((function(e){return{videos:e.videos}}),{fetchVideos:E,fetchVideoIndex:h})((function(e){var t=e.videos,n=e.fetchVideos,c=e.fetchVideoIndex;Object(a.useEffect)((function(){n("top books")}),[]);return r.a.createElement("div",null,function(){if(t.length)return t[0].data.items.map((function(e,t){return r.a.createElement("div",{onClick:function(e){return c(e.target.id)},className:"video-item text-center card mx-3 my-2",key:e.snippet.description,id:t},r.a.createElement("p",{id:t,className:"video-item-title lead card-title p-2"},u()(e.snippet.title,"all")),r.a.createElement("img",{id:t,className:"m-2 rounded",src:e.snippet.thumbnails.medium.url,alt:e.id.videoId}))}))}())})),y=function(){return r.a.createElement("div",{className:"video-list mb-2"},r.a.createElement(b,null))},w=Object(o.b)((function(e){return{videos:e.videos,currentVideo:e.currentVideo}}))((function(e){var t=e.videos,n=e.currentVideo;return r.a.createElement("div",null,t.length&&t[0].data.pageInfo.totalResults?r.a.createElement("div",{className:"video-screen"},r.a.createElement("p",{className:"video-screen-title lead"},u()(t[0].data.items[n].snippet.title,"all")),r.a.createElement("div",{className:"iframe-container embed-responsive embed-responsive-16by9 w-auto"},r.a.createElement("iframe",{className:"rounded embed-responsive-item",title:"video",src:"https://www.youtube.com/embed/".concat(t[0].data.items[n].id.videoId),allow:"fullscreen"})),r.a.createElement("p",{className:"video-screen-description"},u()(t[0].data.items[n].snippet.description,"all"))):r.a.createElement("div",{style:{marginTop:200,marginLeft:550},className:"d-flex justify-content-center"},r.a.createElement("h1",null,"No results found!"),r.a.createElement("i",{className:"fas fa-exclamation-triangle mx-2 fa-3x ml-3"})))})),N=n(224),g=n(223),x=function(e){var t=e.input;return r.a.createElement("input",Object.assign({className:"search-input form-control mx-auto my-3",type:"text",placeholder:"Search"},t))},O=Object(g.a)({form:"searchInput"})((function(e){var t=e.fetchVideos,n=e.fetchVideoIndex,a=e.handleSubmit,c=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(a);case 2:n(0),a.search="";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:a(c)},r.a.createElement(N.a,{name:"search",component:x}))})),I=Object(o.b)(null,{fetchVideos:E,fetchVideoIndex:h})(O),V=(n(221),function(){return r.a.createElement("div",{className:"app container-fluid"},r.a.createElement(I,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-8"},r.a.createElement(w,null)),r.a.createElement("div",{className:"col-lg-4 d-flex justify-content-md-end justify-content-center"},r.a.createElement(y,null))))}),j=n(225),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_VIDEOS":return[t.payload];default:return e}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_VIDEO_INDEX":return t.payload;default:return e}},S=Object(l.c)({form:j.a,videos:_,currentVideo:C}),k=n(93),D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,T=Object(l.e)(S,D(Object(l.a)(k.a)));i.a.render(r.a.createElement(o.a,{store:T},r.a.createElement(V,null)),document.querySelector("#root"))},95:function(e,t,n){e.exports=n(222)}},[[95,1,2]]]);
//# sourceMappingURL=main.3c74df23.chunk.js.map