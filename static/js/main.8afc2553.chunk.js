(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(1),r=n.n(i),o=n(4),a=n.n(o),c=(n(10),n(11),n(2)),l={display:"flex"},x={width:"60px",height:"60px",backgroundColor:"#ddd",margin:"4px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px",color:"white"},d={backgroundColor:"#eee",width:"208px",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",border:"3px #eee solid"},j={display:"flex",alignItems:"center",flexDirection:"column"},p={marginTop:"5px",marginBottom:"5px",fontWeight:"bold",fontSize:"16px"},b={marginTop:"15px",marginBottom:"16px",width:"80px",height:"40px",backgroundColor:"#8acaca",color:"white",fontSize:"16px"};var O=function(e){var t=e.index,n=e.options,i=e.setOptions,r=e.nextPlayer,o=e.setNextPlayer,a=e.setWinner,c=function(){var e=""!==n[0]&&""!==n[1]&&""!==n[2]&&n[0]===n[1]&&n[1]===n[2],t=""!==n[3]&&""!==n[4]&&""!==n[5]&&n[3]===n[4]&&n[4]===n[5],s=""!==n[6]&&""!==n[7]&&""!==n[8]&&n[6]===n[7]&&n[7]===n[8],i=""!==n[0]&&""!==n[4]&&""!==n[8]&&n[0]===n[4]&&n[4]===n[8],r=""!==n[2]&&""!==n[4]&&""!==n[6]&&n[2]===n[4]&&n[4]===n[6],o=""!==n[0]&&""!==n[3]&&""!==n[6]&&n[0]===n[3]&&n[3]===n[6],a=""!==n[1]&&""!==n[4]&&""!==n[7]&&n[1]===n[4]&&n[4]===n[7],c=""!==n[2]&&""!==n[5]&&""!==n[8]&&n[2]===n[5]&&n[5]===n[8];return e||t||s||i||r||o||a||c};return Object(s.jsx)("div",{className:"square",style:x,onClick:function(){if(""===n[t]&&!c()){var e=n;e[t]=r;var s="X"===r?"O":"X";i(e),c()?a(r):a(""),o(s)}},children:n[t]})};var u=function(){var e=Object(i.useState)("X"),t=Object(c.a)(e,2),n=t[0],r=t[1],o=["","","","","","","","",""],a=Object(i.useState)(o),x=Object(c.a)(a,2),u=x[0],y=x[1],h=Object(i.useState)(""),f=Object(c.a)(h,2),m=f[0],g=f[1];return Object(i.useEffect)((function(){r(0===Math.round(Math.random())?"X":"O")}),[]),Object(s.jsxs)("div",{style:j,className:"gameBoard",children:[Object(s.jsxs)("div",{className:"status",style:p,children:["Next player: ",n]}),Object(s.jsxs)("div",{className:"winner",style:p,children:["Winner: ",m]}),Object(s.jsx)("button",{style:b,onClick:function(){r(0===Math.round(Math.random())?"X":"O"),y(o),g("")},children:"Reset"}),Object(s.jsxs)("div",{style:d,children:[Object(s.jsxs)("div",{className:"board-row",style:l,children:[Object(s.jsx)(O,{index:0,nextPlayer:n,setNextPlayer:r,options:u,setOptions:y,setWinner:g}),Object(s.jsx)(O,{index:1,nextPlayer:n,setNextPlayer:r,options:u,setOptions:y,setWinner:g}),Object(s.jsx)(O,{index:2,nextPlayer:n,setNextPlayer:r,options:u,setOptions:y,setWinner:g})]}),Object(s.jsxs)("div",{className:"board-row",style:l,children:[Object(s.jsx)(O,{index:3,nextPlayer:n,setNextPlayer:r,options:u,setOptions:y,setWinner:g}),Object(s.jsx)(O,{index:4,nextPlayer:n,setNextPlayer:r,options:u,setOptions:y,setWinner:g}),Object(s.jsx)(O,{index:5,nextPlayer:n,setNextPlayer:r,options:u,setOptions:y,setWinner:g})]}),Object(s.jsxs)("div",{className:"board-row",style:l,children:[Object(s.jsx)(O,{index:6,nextPlayer:n,setNextPlayer:r,options:u,setOptions:y,setWinner:g}),Object(s.jsx)(O,{index:7,nextPlayer:n,setNextPlayer:r,options:u,setOptions:y,setWinner:g}),Object(s.jsx)(O,{index:8,nextPlayer:n,setNextPlayer:r,options:u,setOptions:y,setWinner:g})]})]})]})};var y=function(){return Object(s.jsx)("div",{className:"game",children:Object(s.jsx)("div",{className:"game-board",children:Object(s.jsx)(u,{})})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),i(e),r(e),o(e)}))};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root")),h()}},[[12,1,2]]]);
//# sourceMappingURL=main.8afc2553.chunk.js.map