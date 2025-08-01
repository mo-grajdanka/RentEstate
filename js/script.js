document.addEventListener('DOMContentLoaded', () => {
    /* ───────────────────────── 1. базовые данные ───────────────────────── */
    const filters = { place: null, purpose: null, minArea: null, maxArea: null };
    const defaultAreas = [0, 50, 100, 200, 500, 1000];

    /* регистрируем обёртки всех выпадашек: place / purpose / minArea / maxArea */
    const wrappers = {};
    document.querySelectorAll('.relative[data-filter-key]')
        .forEach(w => wrappers[w.dataset.filterKey] = w);



    /* ─────────────────────── 2. help‑функции ─────────────────────── */

    /* подсветка активного пункта + текст на кнопке */
    function setFilterUI(key, text, value = null) {
        const wrap = wrappers[key];
        const btn = wrap.querySelector('.filter-toggle');
        const items = wrap.querySelectorAll('.filter-options a');

        items.forEach(a => {
            const active = value !== null && a.dataset.value === String(value);
            a.classList.toggle('bg-purple-600', active);
            a.classList.toggle('text-white', active);
        });

        btn.classList.toggle('bg-purple-600', value !== null);
        btn.classList.toggle('text-white', value !== null);
        btn.querySelector('.filter-label').textContent = text;
    }

    /* строим список площадей «от / до»;
       если purpose пуст — берём defaultAreas */
    function rebuildAreaOptions(limitKey = null) {
        let uniq;

        if (!filters.purpose) {
            // ✅ Если не выбрано назначение — используем defaultAreas
            uniq = [...defaultAreas];
        } else {
            // ✅ Если выбрано назначение — строим по реальным данным
            const src = dataByPurpose[filters.purpose].map(o => o.area);
            uniq = [...new Set(src)].sort((a, b) => a - b);
        }

        // Фильтруем по min / max, если они заданы
        if (limitKey !== 'minArea' && filters.minArea)
            uniq = uniq.filter(v => v >= +filters.minArea);
        if (limitKey !== 'maxArea' && filters.maxArea)
            uniq = uniq.filter(v => v <= +filters.maxArea);

        ['minArea', 'maxArea'].forEach(key => {
            const wrap = wrappers[key];
            const menu = wrap.querySelector('.filter-options');

            menu.innerHTML = uniq
                .map(v => `
        <li><a href="#" data-value="${v}"
               class="block px-4 py-2 hover:bg-purple-400">${v}&nbsp;м²</a></li>`
                ).join('');

            bindItemHandlers(menu, key); // навешиваем клики
        });
    }

    function handleItemClick(e, key, a, menu) {
        e.preventDefault();

        const val = a.dataset.value;
        const label = a.textContent.trim();

        // Снятие фильтра
        if (filters[key] === val) {
            filters[key] = null;
            setFilterUI(key, wrappers[key].querySelector('.filter-toggle').dataset.placeholder);
            rebuildAreaOptions(); // ✅ перерисовываем оба списка
            menu.classList.add('hidden');
            return;
        }

        // Установка фильтра
        filters[key] = val;
        setFilterUI(key, label, val);

        // Правило min ≤ max
        if (key === 'minArea' && filters.maxArea && +val > +filters.maxArea) {
            filters.maxArea = null;
            setFilterUI('maxArea', wrappers.maxArea.querySelector('.filter-toggle').dataset.placeholder);
        }
        if (key === 'maxArea' && filters.minArea && +val < +filters.minArea) {
            filters.minArea = null;
            setFilterUI('minArea', wrappers.minArea.querySelector('.filter-toggle').dataset.placeholder);
        }

        rebuildAreaOptions(); // ✅ перерисовываем оба списка с учётом новых фильтров
        menu.classList.add('hidden');
    }


    /* поставить клики на пункты меню (используем много раз) */
    function bindItemHandlers(menu, key) {
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', e => handleItemClick(e, key, a, menu));
        });
    }

    /* вешаем обработчики на конкретный dropdown */
    function bindMenuHandlers(wrap) {
        const key = wrap.dataset.filterKey;
        const btn = wrap.querySelector('.filter-toggle');
        const menu = wrap.querySelector('.filter-options');

        /* открыть / закрыть выпадашку */
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const open = !menu.classList.contains('hidden');
            document.querySelectorAll('.filter-options')
                .forEach(m => m.classList.add('hidden'));
            if (!open) menu.classList.remove('hidden');
        });

        /* клики по пунктам */
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', e => {
                e.preventDefault();
                const val = a.dataset.value;
                const label = a.textContent.trim();

                /* ───── 2.1 снять фильтр ───── */
                if (filters[key] === val) {
                    filters[key] = null;
                    setFilterUI(key, btn.dataset.placeholder);

                    if (key === 'purpose') {               // убрали назначение
                        filters.minArea = filters.maxArea = null;
                        rebuildAreaOptions();
                        setFilterUI('minArea', wrappers.minArea.querySelector('.filter-toggle').dataset.placeholder);
                        setFilterUI('maxArea', wrappers.maxArea.querySelector('.filter-toggle').dataset.placeholder);
                    }
                    menu.classList.add('hidden');
                    return;
                }

                /* ───── 2.2 выбрать новое ───── */
                filters[key] = val;
                setFilterUI(key, label, val);

                /* авто‑подставляем min/max по назначению */
                if (key === 'purpose') {
                    rebuildAreaOptions();
                    const arr = dataByPurpose[val].map(o => o.area);
                    const minV = Math.min(...arr), maxV = Math.max(...arr);

                    filters.minArea = String(minV);
                    filters.maxArea = String(maxV);
                    setFilterUI('minArea', `${minV} м²`, minV);
                    setFilterUI('maxArea', `${maxV} м²`, maxV);
                }

                /* правило min ≤ max */
                if (key === 'minArea' && filters.maxArea && +val > +filters.maxArea) {
                    filters.maxArea = null;
                    setFilterUI('maxArea', wrappers.maxArea.querySelector('.filter-toggle').dataset.placeholder);
                }
                if (key === 'maxArea' && filters.minArea && +val < +filters.minArea) {
                    filters.minArea = null;
                    setFilterUI('minArea', wrappers.minArea.querySelector('.filter-toggle').dataset.placeholder);
                }

                menu.classList.add('hidden');
            });
        });
    }

    /* ─────────────────────── 3. инициализация ─────────────────────── */

    /* вешаем обработчики на все четыре выпадашки */
    Object.values(wrappers).forEach(bindMenuHandlers);

    /* первый рендер списков площадей (покажет defaultAreas) */
    rebuildAreaOptions();

    /* кнопка «Показать предложения» */
    const showBtn = document.querySelector('.show-results');
    if (showBtn) {
        showBtn.addEventListener('click', () => {
            const qs = new URLSearchParams();
            Object.entries(filters).forEach(([k, v]) => { if (v !== null) qs.set(k, v); });
            window.location.href = 'pages/list.html?' + qs.toString();
        });
    }

    /* кликом по пустому месту закрываем любое открытое меню */
    document.addEventListener('click', () => {
        document.querySelectorAll('.filter-options:not(.hidden)')
            .forEach(m => m.classList.add('hidden'));
    });
});







