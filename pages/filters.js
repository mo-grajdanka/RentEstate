function applyFilters(dataArray, filterState) {
    return dataArray.filter(item => {
               // Фильтр по purpose
        if (filterState.purpose && filterState.purpose !== "" && item.purpose !== filterState.purpose) {
            return false;
        }
        // Фильтр по place (если указан и не "все")
        if (filterState.place && filterState.place !== "" && item.place !== filterState.place) {
            return false;
        }
        // Фильтр по minArea (включительно, если указано и не "любая")
        if (filterState.minArea !== null && filterState.minArea !== "" && item.area < Number(filterState.minArea)) {
            return false;
        }
        // Фильтр по maxArea (включительно, если указано и не "любая")
        if (filterState.maxArea !== null && filterState.maxArea !== "" && item.area > Number(filterState.maxArea)) {
            return false;
        }
        // Добавьте сюда логику для других фильтров, если потребуется (например, purpose на главной)
        return true;
    });
}

function updateAreaFilterOptions(filteredData, currentFilters, allPossibleAreas) {
    // 1. Получаем уникальные площади из ТЕКУЩЕГО отфильтрованного результата
    const uniqueAreasFromFilteredData = [...new Set(filteredData.map(item => item.area))].sort((a, b) => a - b);

    // 2. Обновляем фильтр "Площадь от" (minArea)
    const minAreaMenu = document.querySelector('[data-filter-key="minArea"] .filter-options');
    if (minAreaMenu) {
        // Начинаем с площадей из отфильтрованных данных
        let areasToShow = [...uniqueAreasFromFilteredData];
        // Фильтруем: оставляем площади, которые <= текущему filters.maxArea (если он задан)
        if (currentFilters.maxArea !== null && currentFilters.maxArea !== "") {
            const maxLimit = Number(currentFilters.maxArea);
            areasToShow = areasToShow.filter(area => area <= maxLimit);
        }
        // Генерируем и вставляем пункты
        minAreaMenu.innerHTML = areasToShow.map(area => `
            <li><a href="#" data-value="${area}" class="block px-4 py-2 hover:bg-purple-100">${area} м²</a></li>
        `).join('');
        // Добавляем пункт "Любая от" в начало, если нужно
        // const anyMinOption = document.createElement('li');
        // anyMinOption.innerHTML = `<a href="#" data-value="" class="block px-4 py-2 hover:bg-purple-100 font-medium">Любая от</a>`;
        // minAreaMenu.insertBefore(anyMinOption, minAreaMenu.firstChild);
    }

    // 3. Обновляем фильтр "Площадь до" (maxArea)
    const maxAreaMenu = document.querySelector('[data-filter-key="maxArea"] .filter-options');
    if (maxAreaMenu) {
        // Начинаем с площадей из отфильтрованных данных
        let areasToShow = [...uniqueAreasFromFilteredData];
        // Фильтруем: оставляем площади, которые >= текущему filters.minArea (если он задан)
        if (currentFilters.minArea !== null && currentFilters.minArea !== "") {
            const minLimit = Number(currentFilters.minArea);
            areasToShow = areasToShow.filter(area => area >= minLimit);
        }
        // Генерируем и вставляем пункты
        maxAreaMenu.innerHTML = areasToShow.map(area => `
            <li><a href="#" data-value="${area}" class="block px-4 py-2 hover:bg-purple-100">${area} м²</a></li>
        `).join('');
        // Добавляем пункт "Любая до" в начало, если нужно
        // const anyMaxOption = document.createElement('li');
        // anyMaxOption.innerHTML = `<a href="#" data-value="" class="block px-4 py-2 hover:bg-purple-100 font-medium">Любая до</a>`;
        // maxAreaMenu.insertBefore(anyMaxOption, maxAreaMenu.firstChild);
    }
}

// --- Универсальная функция обновления UI кнопок фильтров ---
function updateFilterButtonLabels(filters, allPossibleAreas) {
     // Для place
    const placeWrapper = document.querySelector(`[data-filter-key="place"]`);
    if (placeWrapper) {
        const placeButton = placeWrapper.querySelector('.filter-toggle .filter-label');
        const placeholder = placeWrapper.querySelector('.filter-toggle').dataset.placeholder || 'Площадка';
        if (filters.place && filters.place !== "") {
            // Предполагается, что пункт меню уже существует или будет найден другим способом
            // Это может потребовать доработки в зависимости от того, как генерируются пункты place
            placeButton.textContent = filters.place; // Или искать текст в списке
            placeWrapper.querySelector('.filter-toggle').classList.add('bg-purple-600', 'text-white');
        } else {
            placeButton.textContent = placeholder;
            placeWrapper.querySelector('.filter-toggle').classList.remove('bg-purple-600', 'text-white');
        }
    }

   // Для purpose
    const purposeWrapper = document.querySelector('[data-filter-key="purpose"]');
    if (purposeWrapper) {
        const purposeButton = purposeWrapper.querySelector('.filter-toggle .filter-label');
        const placeholder   = purposeWrapper.querySelector('.filter-toggle').dataset.placeholder || 'Назначение';

        const labels = {
            land:       'Земельные участки',
            office:     'Офисные помещения',
            warehouse:  'Складские помещения',
            production: 'Производственные',
            retail:     'Торговые площади'
        };

        if (filters.purpose && filters.purpose !== "") {
            purposeButton.textContent = labels[filters.purpose] ?? filters.purpose;
            purposeWrapper.querySelector('.filter-toggle')
                          .classList.add('bg-purple-600', 'text-white');
        } else {
            purposeButton.textContent = placeholder;
            purposeWrapper.querySelector('.filter-toggle')
                          .classList.remove('bg-purple-600', 'text-white');
        }
    }

    // Для minArea
    const minAreaWrapper = document.querySelector(`[data-filter-key="minArea"]`);
    if (minAreaWrapper) {
        const minAreaButton = minAreaWrapper.querySelector('.filter-toggle .filter-label');
        const minAll = Math.min(...allPossibleAreas);
        if (filters.minArea !== null && filters.minArea !== "") {
            minAreaButton.textContent = `От ${filters.minArea} м²`;
            minAreaWrapper.querySelector('.filter-toggle').classList.add('bg-purple-600', 'text-white');
        } else {
            minAreaButton.textContent = `От ${minAll} м²`;
            minAreaWrapper.querySelector('.filter-toggle').classList.remove('bg-purple-600', 'text-white');
        }
    }

    // Для maxArea
    const maxAreaWrapper = document.querySelector(`[data-filter-key="maxArea"]`);
    if (maxAreaWrapper) {
        const maxAreaButton = maxAreaWrapper.querySelector('.filter-toggle .filter-label');
        const maxAll = Math.max(...allPossibleAreas);
        if (filters.maxArea !== null && filters.maxArea !== "") {
            maxAreaButton.textContent = `До ${filters.maxArea} м²`;
            maxAreaWrapper.querySelector('.filter-toggle').classList.add('bg-purple-600', 'text-white');
        } else {
            maxAreaButton.textContent = `До ${maxAll} м²`;
            maxAreaWrapper.querySelector('.filter-toggle').classList.remove('bg-purple-600', 'text-white');
        }
    }
}

// --- Универсальная функция получения состояния фильтров из URLSearchParams ---
function getFiltersFromUrl(urlSearchParams) {
    return {
        purpose: urlSearchParams.get('purpose'),
        place: urlSearchParams.get('place'),
        minArea: urlSearchParams.get('minArea'), // Получаем как строку или null
        maxArea: urlSearchParams.get('maxArea')  // Получаем как строку или null
        // Добавьте другие фильтры при необходимости
    };
}

// --- Универсальная функция обновления URL ---
function updateUrlWithFilters(currentUrl, filters, purposeFromUrl) {
    // Обновляем параметры URL
    Object.entries(filters).forEach(([key, value]) => {
        if (value === null || value === "" || value === undefined) {
            currentUrl.searchParams.delete(key);
        } else {
            currentUrl.searchParams.set(key, value);
        }
    });
    // Сохраняем purpose, если он был
    if (purposeFromUrl && !currentUrl.searchParams.has('purpose')) {
        currentUrl.searchParams.set('purpose', purposeFromUrl);
    }
    return currentUrl;
}

// --- Универсальная функция проверки и коррекции правила minArea <= maxArea ---
// Возвращает true, если фильтры были скорректированы
function enforceAreaFilterRules(filters, allPossibleAreas) {
    let corrected = false;
    if (filters.minArea !== null && filters.minArea !== "" &&
        filters.maxArea !== null && filters.maxArea !== "" &&
        Number(filters.minArea) > Number(filters.maxArea)) {
            // Нарушено правило. Сбрасываем один из фильтров.
            // Можно сбросить maxArea или minArea. Выберем maxArea.
            filters.maxArea = null;
            corrected = true;
    }
    return corrected;
}

