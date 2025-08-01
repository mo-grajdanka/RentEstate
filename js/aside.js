document.addEventListener("DOMContentLoaded", () => {
  // Используем dataByPurpose.land вместо homepageSettings.featuredSites
  const sitesData = window.dataByPurpose?.land;

  if (Array.isArray(sitesData)) {
    const siteList = document.getElementById("siteList");
    // Отображаем все земельные участки, а не только 4 первых
    const limitedSites = sitesData.slice(0, 4); 

    siteList.innerHTML = limitedSites.map(site => `
      <div class="property-card bg-white rounded-lg overflow-hidden shadow-md">
        <img src="${site.images[0]}" alt="${site.name}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">${site.name}</h3>
          <p class="text-gray-600 mb-4">${site.place}, ${site.area} кв.м</p>
          <a href="#" class="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            Подробнее <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    `).join("");
  } else {
    document.getElementById("sitesBlock")?.classList.add("hidden");
  }
});