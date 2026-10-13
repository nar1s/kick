(function () {
  'use strict';

  const grid = document.getElementById('grid');

  function attachPhotoFallback(img) {
    const swap = () => {
      if (!img.isConnected) return;
      const ph = document.createElement('div');
      ph.className = img.className + ' photo-placeholder';
      ph.innerHTML = '<span>Фото модели</span>';
      img.replaceWith(ph);
    };
    if (img.complete && img.naturalWidth === 0) swap();
    else img.addEventListener('error', swap, { once: true });
  }

  /* ---------- Каталог ---------- */
  function cardTemplate(p) {
    return `
      <article class="card" id="model-${p.id}">
        <div class="card__media">
          <img src="${p.photo}" alt="${p.name} — ${p.surface}" loading="lazy" class="card__img js-photo">
        </div>
        <div class="card__body">
          <p class="card__meta">${p.surface}</p>
          <h3 class="card__name">${p.name}</h3>
          <p class="card__desc">${p.desc}</p>
          <div class="card__foot">
            <a class="btn btn--primary btn--sm" href="#contacts">Купить</a>
          </div>
        </div>
      </article>`;
  }

  function renderCatalog() {
    grid.innerHTML = PRODUCTS.map(cardTemplate).join('');
    grid.querySelectorAll('.js-photo').forEach(attachPhotoFallback);
  }

  /* ---------- Мобильное меню ---------- */
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---------- Старт ---------- */
  document.querySelectorAll('.hero .js-photo').forEach(attachPhotoFallback);
  renderCatalog();
})();
