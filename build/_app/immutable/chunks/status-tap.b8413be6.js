import{r as i,w as a}from"./platform.7f1c6cbc.js";import{f as c,c as d,s as l}from"./_layout.7144f342.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const p=()=>{const e=window;e.addEventListener("statusTap",()=>{i(()=>{const n=e.innerWidth,s=e.innerHeight,o=document.elementFromPoint(n/2,s/2);if(!o)return;const t=c(o);t&&new Promise(r=>d(t,r)).then(()=>{a(async()=>{t.style.setProperty("--overflow","hidden"),await l(t,300),t.style.removeProperty("--overflow")})})})})};export{p as startStatusTap};
