(this["webpackJsonpreact-timeline-test"]=this["webpackJsonpreact-timeline-test"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),c=n(11),l=n.n(c),r=(n(21),n(12)),s=n(13),o=n(15),d=n(14),h=(n.p,n(22),n(6)),u=n(0),j=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).onAddTileLine=function(){var e=null,t=new Date,n="",a="",c="";if(isNaN(i.state.inputText))alert("\uc22b\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.");else{for(var l=[],r=0;r<=i.state.inputText;)r%2===0?(c="#fcd804",e=new Date(t.setTime(t.getTime()+1))):(c="#0aaf0c",e=new Date(t.setDate(t.getDate()+1))),n=e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear(),a=e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+":"+e.getMilliseconds(),l.push({date:n,dateString:a,event:r,color:c}),r++;var s=i.state.events;i.setState({events:s.concat(l)})}},i.onInputTextChange=function(e){i.setState({inputText:e.target.value})},i.maxLengthCheck=function(e){e.target.value.length>e.target.maxLength&&(e.target.value=e.target.value.slice(0,e.target.maxLength))},i.addDate=function(e){return Object(u.jsx)(h.VerticalTimelineElement,{icon:Object(u.jsx)("a",{children:e}),iconStyle:{background:"#a1a1a0",color:"#ffffff",width:120,left:-42,borderRadius:2,height:25,lineHeight:2}})},i.state={newEvent:[{date:"01/01/2021",dateString:"01/01/2021'<br/>'11:00:00:121",event:"\uc2dc\uc791"}],events:[{date:"22/09/2017",dateString:"22/09/2017 11:00:11",event:'Naissance du projet suite \xe0 la publication de l\'<a href="https://www.legifrance.gouv.fr/affichTexteArticle.do;jsessionid=AE9DCF75DDCF0465784CEE0E7D62729F.tplgfr37s_2?idArticle=JORFARTI000035607420&cidTexte=JORFTEXT000035607388&dateTexte=29990101&categorieLien=id">ordonnance du 22 Septembre 2017</a>',color:"#fcd804"}],inputText:0},i}return Object(s.a)(n,[{key:"render",value:function(){var e="12/8/2021";return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{style:{height:100},children:[Object(u.jsx)("span",{children:"Enter the number to add of timeline :\xa0"}),Object(u.jsx)("input",{type:"number",value:this.state.inputText,onChange:this.onInputTextChange,maxLength:5,onInput:this.maxLengthCheck}),"\xa0",Object(u.jsx)("button",{onClick:this.onAddTileLine,children:" add timeline "})]}),Object(u.jsxs)("div",{className:"App",style:{fontFamily:"Trebuchet Ms"},children:[Object(u.jsx)("h1",{children:"Timeline Test"}),Object(u.jsxs)(h.VerticalTimeline,{layout:"1-column",children:[Object(u.jsx)(h.VerticalTimelineElement,{icon:Object(u.jsx)("a",{children:"Waiting to accept"}),iconStyle:{background:"#fcd804",width:120,left:-42,borderRadius:2,height:25,lineHeight:2},children:Object(u.jsx)("h3",{children:"\uac00\ub098\ub2e4\ub77c"})}),this.state.events.map((function(t){return e===t.date?Object(u.jsxs)(h.VerticalTimelineElement,{date:t.date,icon:Object(u.jsx)("a",{}),iconStyle:{background:t.color},children:[Object(u.jsx)("h3",{className:"vertical-timeline-element-title",dangerouslySetInnerHTML:{__html:t.event}}),Object(u.jsx)("button",{onClick:function(){alert(t.date)},children:"show date"})]}):(e=t.date,Object(u.jsxs)("div",{children:[Object(u.jsx)(h.VerticalTimelineElement,{icon:Object(u.jsx)("a",{children:t.date}),iconStyle:{background:"#a1a1a0",color:"#ffffff",width:120,left:-42,borderRadius:2,height:25,lineHeight:2}}),Object(u.jsxs)(h.VerticalTimelineElement,{date:t.dateString,icon:Object(u.jsx)("a",{}),iconStyle:{background:t.color},children:[Object(u.jsx)("h3",{className:"vertical-timeline-element-title",dangerouslySetInnerHTML:{__html:t.event}}),Object(u.jsx)("button",{onClick:function(){alert(t.dateString)},children:"show date"})]})]}))}))]})]})]})}}]),n}(a.a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),i(e),a(e),c(e),l(e)}))};l.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),g()}},[[29,1,2]]]);
//# sourceMappingURL=main.941cdadd.chunk.js.map