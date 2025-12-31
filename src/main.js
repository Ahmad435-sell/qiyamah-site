import "./style.css";
import { SIGNS } from "./data";

const app = document.getElementById("app");

function renderList(filter = "") {
  const list = SIGNS.filter(s => s.title.toLowerCase().includes(filter.toLowerCase()) || s.description.toLowerCase().includes(filter.toLowerCase()));
  return `
    <div class="header">
      <h1>Признаки Судного дня</h1>
      <input id="search" placeholder="Поиск по признакам..." />
    </div>
    <ul class="signs">
      ${list.map(s => `<li><a href="#/sign/${s.id}">${s.id}. ${s.title}</a></li>`).join("")}
    </ul>
  `;
}

function renderSign(id) {
  const sign = SIGNS.find(s => s.id === Number(id));
  if (!sign) return `<p>Признак не найден</p>`;
  return `
    <article class="detail">
      <a class="back" href="#/">← Назад</a>
      <h2>${sign.id}. ${sign.title}</h2>
      <p>${sign.description}</p>
    </article>
  `;
}

function router() {
  const hash = location.hash || "#/";
  const match = hash.match(/^#\/sign\/(\d+)$/);
  if (match) {
    app.innerHTML = renderSign(match[1]);
  } else {
    app.innerHTML = renderList();
    const search = document.getElementById("search");
    search.addEventListener("input", (e) => {
      app.innerHTML = renderList(e.target.value);
      // reattach routing listeners after re-render
      attachLinks();
    });
  }
  attachLinks();
}

function attachLinks() {
  document.querySelectorAll('a[href^="#/"]').forEach(a => {
    a.addEventListener('click', (e) => {
      // let hash change trigger router
    });
  });
}

window.addEventListener("hashchange", router);
router();

if (import.meta.hot) {
  import.meta.hot.accept();
}
