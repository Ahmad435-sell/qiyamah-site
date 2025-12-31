(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const d=Array.from({length:52},(i,e)=>({id:e+1,title:`Признак ${e+1}`,description:`Краткое описание признака ${e+1}. Здесь можно вставить полный текст и детали.`})),c=document.getElementById("app");function a(i=""){return`
    <div class="header">
      <h1>Признаки Судного дня</h1>
      <input id="search" placeholder="Поиск по признакам..." />
    </div>
    <ul class="signs">
      ${d.filter(r=>r.title.toLowerCase().includes(i.toLowerCase())||r.description.toLowerCase().includes(i.toLowerCase())).map(r=>`<li><a href="#/sign/${r.id}">${r.id}. ${r.title}</a></li>`).join("")}
    </ul>
  `}function f(i){const e=d.find(r=>r.id===Number(i));return e?`
    <article class="detail">
      <a class="back" href="#/">← Назад</a>
      <h2>${e.id}. ${e.title}</h2>
      <p>${e.description}</p>
    </article>
  `:"<p>Признак не найден</p>"}function u(){const e=(location.hash||"#/").match(/^#\/sign\/(\d+)$/);e?c.innerHTML=f(e[1]):(c.innerHTML=a(),document.getElementById("search").addEventListener("input",o=>{c.innerHTML=a(o.target.value),l()})),l()}function l(){document.querySelectorAll('a[href^="#/"]').forEach(i=>{i.addEventListener("click",e=>{})})}window.addEventListener("hashchange",u);u();
