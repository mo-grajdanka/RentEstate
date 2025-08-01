document.addEventListener('DOMContentLoaded', function () {

    // Объект для хранения выбранных категорий
    let selectedServices = {};

    // --- Элементы для кнопки "Показать (N)" ---
    const showResultsContainer = document.getElementById('show-results-container');
    const showResultsBtn = document.getElementById('show-results-btn');
    const resultCountSpan = document.getElementById('result-count');

    // --- Функция подсчета подходящих объектов ---
    function countMatchingItems() {
        // Получаем плоский список всех выбранных сервисов (например, ['Кафе', 'Футбол', 'Магазин'])
        const selectedServiceNames = Object.values(selectedServices).map(s => s.service);

        // Если ничего не выбрано, возвращаем 0
        if (selectedServiceNames.length === 0) {
            return 0;
        }

        let totalCount = 0;

        // Проходим по всем типам недвижимости в dataByPurpose
        for (const purposeKey in dataByPurpose) {
            if (dataByPurpose.hasOwnProperty(purposeKey)) {
                const items = dataByPurpose[purposeKey];
                // Проходим по каждому объекту конкретного типа
                items.forEach(item => {
                    // Проверяем, есть ли у объекта suitableFor и является ли оно массивом
                    if (item.suitableFor && Array.isArray(item.suitableFor)) {
                        // Проверяем, пересекаются ли выбранные сервисы с suitableFor объекта
                        // Используем some для проверки наличия хотя бы одного совпадения
                        const isMatch = selectedServiceNames.some(serviceName =>
                            item.suitableFor.includes(serviceName)
                        );
                        if (isMatch) {
                            totalCount++;
                        }
                    }
                });
            }
        }
        return totalCount;
    }

    // --- Функция обновления состояния кнопки "Показать (N)" ---
    function updateShowResultsButton() {
        const count = countMatchingItems();
        if (resultCountSpan) {
            resultCountSpan.textContent = count;
        }

        // Показываем или скрываем кнопку в зависимости от количества выбранных сервисов
        if (showResultsContainer) {
            if (Object.keys(selectedServices).length > 0) {
                showResultsContainer.classList.remove('hidden');
            } else {
                showResultsContainer.classList.add('hidden');
            }
        }
    }

    // --- Обработчик клика по кнопке "Показать (N)" ---
    if (showResultsBtn) {
        showResultsBtn.addEventListener('click', function () {
            // Получаем список выбранных сервисов
            const selectedServiceNames = Object.values(selectedServices).map(s => s.service);

            // Проверка: если вдруг кнопка была видна, но сервисов нет (на всякий случай)
            if (selectedServiceNames.length === 0) return;

            // Формируем строку параметров для URL
            // Например: ?suitableFor=Кафе&suitableFor=Футбол
            const params = new URLSearchParams();
            selectedServiceNames.forEach(name => {
                // Кодируем имя сервиса для корректной передачи в URL
                params.append('suitableFor', encodeURIComponent(name));
            });

            // Формируем URL для перехода на list.html с параметрами
            const url = `./pages/list.html?${params.toString()}`;

            // Переходим на страницу списка
            window.location.href = url;
        });
    }

    // --- Функция для открытия/закрытия dropdown ---
    function toggleDropdown(button) {
        const dropdownMenu = button.nextElementSibling;
        const isOpen = !dropdownMenu.classList.contains('hidden');

        // Закрываем все dropdown'ы
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.add('hidden');
        });

        // Открываем/закрываем текущий
        if (!isOpen) {
            dropdownMenu.classList.remove('hidden');
        }
    }

    // --- Обработчик клика по кнопке категории ---
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleDropdown(this);
        });
    });

    // --- Обработчик клика по элементу сервиса ---
    document.querySelectorAll('.service-item').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const category = this.dataset.category;
            const service = this.dataset.service;
            const key = `${category}-${service}`;

            // Переключаем выбор
            if (selectedServices[key]) {
                delete selectedServices[key];
                this.classList.remove('bg-blue-100', 'text-blue-700');
            } else {
                selectedServices[key] = { category, service };
                this.classList.add('bg-blue-100', 'text-blue-700');
            }

            // --- Обновлённый вызов: обновляем и категории, и кнопку ---
            updateSelectedCategories();
            updateShowResultsButton(); // Обновляем кнопку после изменения выбора

            // Закрываем dropdown
            this.closest('.dropdown-menu').classList.add('hidden');
        });
    });

    // --- Функция обновления отображения выбранных категорий ---
    function updateSelectedCategories() {
        const container = document.getElementById('selected-categories');
        if (!container) return; // На всякий случай проверяем наличие элемента
        container.innerHTML = '';

        Object.values(selectedServices).forEach(item => {
            const badge = document.createElement('div');
            badge.className = 'bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2 text-sm';
            badge.innerHTML = `
                <span>${item.category} - ${item.service}</span>
                <button class="remove-btn text-blue-600 hover:text-blue-800 font-bold w-5 h-5 flex items-center justify-center rounded-full hover:bg-blue-200 transition" data-key="${item.category}-${item.service}">×</button>
            `;
            container.appendChild(badge);
        });
    }

    // --- Обработчик удаления выбранной категории ---
    const selectedCategoriesContainer = document.getElementById('selected-categories');
    if (selectedCategoriesContainer) {
        selectedCategoriesContainer.addEventListener('click', function (e) {
            if (e.target.classList.contains('remove-btn')) {
                const key = e.target.dataset.key;
                delete selectedServices[key];

                // Убираем подсветку с соответствующего элемента
                document.querySelectorAll(`.service-item[data-category="${key.split('-')[0]}"][data-service="${key.split('-')[1]}"]`).forEach(item => {
                    item.classList.remove('bg-blue-100', 'text-blue-700');
                });

                // --- Обновлённый вызов: обновляем и категории, и кнопку ---
                updateSelectedCategories();
                updateShowResultsButton(); // Обновляем кнопку после удаления
            }
        });
    }

    // --- Закрытие dropdown'ов при клике вне их ---
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.add('hidden');
            });
        }
    });

    // --- Предотвращаем закрытие dropdown при клике внутри ---
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });
});