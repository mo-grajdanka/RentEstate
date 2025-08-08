const placeDescriptions = {
  'Кушелевская дорога': 'Крупный квартал с развитой инфраструктурой: магазины, кафе и рекреационные зоны.',
  'Лабораторный проспект': 'Тихий проспект в пешей доступности от метро и большого городского парка — идеально для утренних пробежек.',
  'Бестужевская': 'Уютный жилой район с хорошей транспортной доступностью и большим выбором коммерческой недвижимости.',
  'АО «Сестрорецкий инструментальный»': 'Промышленная зона с развитой инженерной инфраструктурой и выходом к Сестрорецкому каналу.',
};

var dataByPurpose = {
  land: [
    {
      id: 1,
      name: "Участок A",
      place: "Кушелевская дорога",
coordinates: [59.986111, 30.368838],
address: "Санкт-Петербург, Кушелевская дорога, 1А", 
  transport: [                                              
    { line: "Лесная", icon: "🚇", time: "16–20 мин" },
    { line: "Площадь Мужества", icon: "🚊", time: "21–30 мин" },
    { line: "Выборгская", icon: "🚇", time: "от 31 мин" }
  ],
      area: 30,
      mainSlider: true,
      adSlider: true,
            suitableFor: ["Кафе", "Футбол", "Магазин"],
      description:
        "Просторный земельный участок в живописном районе Кушелевской дороги, идеально подходит для строительства загородного дома или дачи. Участок ровный, правильной формы, с легким уклоном. Развитая инфраструктура: рядом остановка общественного транспорта, магазины, школа и детский сад.",
            characteristics: [
        { label: "✔️", value: "уже заселены ЖК «Кирилл и Дарья», ЖК «Калейдоскоп», ЖК «Дом на Блюхера», ЖК «БелАрт», ЖК «Калина парк», ЖК «Калина-Парк 2»" },
        { label: "✔️", value: "в 2026 году сдается ЖК Rеsресt" },
        { label: "✔️", value: "более 7 общеобразовательных и частных школ" },
        { label: "✔️", value: "8 детских садов" },
        { label: "✔️", value: "взрослые и детские поликлиники" },
        { label: "✔️", value: "есть проход из жилого квартала" },
        { label: "✔️", value: "более 200 000 человек численность населения" },
        
      ],
      technicalCharacteristics: [
        {
          label: "Коммуникации",
          value: "❗️Есть точки подключения электроснабжения, водоснабжения и водоотведения.",
        },
        
      ],
  transportCharacteristics: [
    { label: "✔️", value: "в 1 минуте 4 остановки автобусов и троллейбусов" },
    { label: "✔️", value: "в 5 минутах ж/д станция Кушелевка" },
    { label: "✔️", value: "в 10 минутах м. Лесная" },
    { label: "✔️", value: "в 15 минутах м. Площадь Мужества" },
    { label: "✔️", value: "в 20 минутах центр города" },
    { label: "✔️", value: "более 3 000 м/ч транспортный поток" },
  ],
        images: [
        "https://50.img.avito.st/image/1/1.xaTRFLa5aU3no-tA13Pt7qW1a0tvtetb57hrT2OhbU8.E2Y6tPb0gXT8NIOJkDPJ4pwYTTByJjHAfbyY6tBok1I",
        "https://90.img.avito.st/image/1/1.FRgVLra5ufEjmTv8MwJ_e3GPu_erjzvnI4K786ebvfM.cnPwHM7OnpJATxfrH52vG__h3s-OI2EC4bH3D-nbh5Y",
        "https://90.img.avito.st/image/1/1.TEBU3ba54KliamKkQOh8Hi184q_qfGK_YnHiq-Zo5Ks.wAp4Zovc3KR2D9acs7JHz-jRCj_EkNGWHIlFXuC26c4",
        "https://50.img.avito.st/image/1/1.Av7lWLa5rhfT7ywa7XBMz_n5rBFb-SwB0_SsFVftqhU.fwP5qi9R_TV8bEPnxBszE-26bRstKaMs8QTE9oWbMtQ",
        "https://60.img.avito.st/image/1/1.gmCj77a5LomVWKyEq5nDUb9OLI8dTqyflUMsixFaKos.MDY6AO-GEl24pnPxIYiHfmaZ2W0xdP23YR5WPa36tqg",
      ],
    },
    {
      id: 2,
      name: "Участок B",
      place: "Лабораторный проспект",
coordinates: [59.982286, 30.382180],
      area: 80,
      mainSlider: true,
      images: [
        "https://images.unsplash.com/photo-1637603933595-2233155a67eb?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1451440063999-77a8b2960d2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbmR8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1548941489-3e64750ebbaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhbmR8ZW58MHx8MHx8fDA%3D",
      ],
    },
    {
      id: 3,
      name: "Участок C",
      place: "Бестужевская",
coordinates: [59.990552, 30.383626],
      area: 65,
      images: [
        "https://images.unsplash.com/photo-1640881100814-453f76b431be?w=400&h=200&fit=crop",
        "https://plus.unsplash.com/premium_photo-1661963324980-5a3a9ca16b4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhbmR8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1583699998579-5872a2117151?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhbmR8ZW58MHx8MHx8fDA%3D",
      ],
    },
    {
      id: 4,
      name: "Участок D",
      place: "АО «Сестрорецкий инструментальный»",
coordinates: [60.092746, 29.958752],
      area: 350,
      mainSlider: true,
      adSlider: true,
      suitableFor: ["Кафе", "Футбол", "Магазин"],
      description:
        "Просторный земельный участок в живописном районе Сестрорецка, идеально подходит для строительства загородного дома или дачи. Участок ровный, правильной формы, с легким уклоном. Развитая инфраструктура: рядом остановка общественного транспорта, магазины, школа и детский сад.",
      characteristics: [
        { label: "Назначение", value: "ИЖС" },
        { label: "Кадастровый номер", value: "78:18:0000000:8888" },
        { label: "Форма участка", value: "Прямоугольная" },
        { label: "Рельеф", value: "Плоский с легким уклоном" },
      ],
      technicalCharacteristics: [
        {
          label: "Коммуникации",
          value: "Электричество (15 кВт), Вода (скважина)",
        },
        { label: "Подъездные пути", value: "Асфальт" },
        { label: "Охрана", value: "Есть (поселковая)" },
        {
          label: "Дополнительно",
          value: "Газ по границе, возможность подключения",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1527506620952-3309b8ed6a1b?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1518655513281-e90740bd56b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661899405263-a0bee333068e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
  ],

  office: [
    {
      id: 1,
      name: "Офис A",
      floor: 3,
      area: 80,
      place: "Кушелевская дорога",
coordinates: [59.986111, 30.368838],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 2,
      name: "Офис B",
      floor: 1,
      area: 120,
      place: "Кушелевская дорога",
coordinates: [59.986111, 30.368838],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 3,
      name: "Офис C",
      floor: 5,
      area: 200,
      place: "Кушелевская дорога",
coordinates: [59.986111, 30.368838],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 4,
      name: "Офис D",
      floor: 7,
      area: 150,
      place: "Лабораторный проспект",
coordinates: [59.982286, 30.382180],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 5,
      name: "Офис E",
      floor: 2,
      area: 100,
      place: "Бестужевская",
coordinates: [59.990552, 30.383626],
      adSlider: true,
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
  ],

  warehouse: [
    {
      id: 1,
      name: "Склад A",
      area: 2000,
      place: "Лабораторный проспект",
coordinates: [59.982286, 30.382180],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 2,
      name: "Склад B",
      area: 5000,
      place: "Бестужевская",
coordinates: [59.990552, 30.383626],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 3,
      name: "Склад C",
      area: 3000,
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 4,
      name: "Склад D",
      area: 8000,
      place: "Бестужевская",
coordinates: [59.990552, 30.383626],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 5,
      name: "Склад E",
      area: 10000,
      place: "Бестужевская",
coordinates: [59.990552, 30.383626],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
  ],

  production: [
    {
      id: 1,
      name: "Производство A",
      area: 250,
      address: "Санкт-Петербург, Бестужевская ул., 2к4Б", 
  transport: [                                              
    { line: "Площадь Мужества", icon: "🚇", time: "21–30 мин" },
    { line: "Политехническая", icon: "🚊", time: "от 31 мин" },
    { line: "Академическая", icon: "🚇", time: "от 31 мин" }
  ],
    transportCharacteristics: [
    { label: "✔️", value: "5 минут до 2 остановок автобуса" },
    { label: "✔️", value: "10 минут от станции м. Лесная" },
    { label: "✔️", value: "15 минут до КАД" },
    { label: "✔️", value: "20 минут до центра города" },
    { label: "✔️", value: "более 3 000 м/ч транспортный поток" }
  ],
    

  characteristics: [
        { label: "✔️", value: "рядом ЖК «Cinema», ЖК «Кантемировский», ЖК «Суворов», ЖК «Полюстрово Парк»" },
        { label: "✔️", value: "более 100 000 человек численность населения" },
        { label: "✔️", value: "2 000 м/ч транспортный поток" },
        
      ],

  technicalCharacteristics: [
        {
          label: "✔️",
          value: "1 этаж",
        },
        {
          label: "✔️",
          value: "высота потолков 4-5м",
        },
        {
          label: "✔️",
          value: "высокие въездные ворота",
        },
        {
          label: "✔️",
          value: "полностью готовы к заезду",
        },
        
      ],

  
    internalTerritory: [
    "круглосуточный доступ",
    "въезд с Бестужевской улицы",
    "сформированная экосистема",
    "промышленно-деловая территория",
    "площадка для отстоя и манёврирования",
    "разворотные площадки для грузового транспорта",
    "парковка для легкового и грузового транспорта",
    "есть освещение"
  ],
        description:"⚡️ ПOMЕЩEHИЯ В OTДЕЛЬНОСTОЯЩEМ ЗДАНИИ HAПPЯMУЮ ОT COБCTBЕННИKА! Возмoжнa aрeндa пoмещeния от 100 до 400 кв.м.",
      place: "Бестужевская",
coordinates: [59.986111, 30.368838],
      images: [
        "https://00.img.avito.st/image/1/1.azT43ba5x93OakXQosRff4x8xdtGfEXLznHF30pow98.xwLL--AQhFyteFjO3UTo13uxYYBlP-0BKjulVYLRWkY?cqp=2.u3NCSNufGJscbkbcTnB31iWF9mNdkZV17CfHaAg72eFO7oRH9LnvmRn80XUuwm6DChCt8IaEfKU2EJELfVQEoXVU2aPjLQ==",
        "https://90.img.avito.st/image/1/1.cEnqJLa53KDck16thjlcBcOF3qZUhV623IjeoliR2KI.CTlUhQXZ0xZUlyZ-FiDr4ervUMt2l43cZXz4ZDXoDio",
        "https://90.img.avito.st/image/1/1.jmERyLa5Iognf6CFAYK8fRZpII6vaaCeJ2QgiqN9Joo.G1ECs2X3i0bEa-ULdTk7eHJoXmam2HYY1Xh9ESWjHLA",
        "https://20.img.avito.st/image/1/1.OlK4xba5lruOchS2wIlaT79klL0GZBStjmmUuQpwkrk.4H8kG0NSxaWWNRgdHzYKU40OUXZgGqRHP2n3-TOBWMA?cqp=2.u3NCSNufGJscbkbcTnB31iWF9mNdkZV17CfHaAg72eFO7oRH9LnvmRn80XUuwm6DChCt8IaEfKU2EJELfVQEoXVU2aPjLQ==",
        "https://10.img.avito.st/image/1/1.WoF8ura59mhKDXRlROtYz2Qb9G7CG3R-Shb0as4P8mo.hBtJFHLJ_rGrh4up0AGIt5tR8OJDGKFNAgUWxbRE6jM?cqp=2.u3NCSNufGJscbkbcTnB31iWF9mNdkZV17CfHaAg72eFO7oRH9LnvmRn80XUuwm6DChCt8IaEfKU2EJELfVQEoXVU2aPjLQ==",
      ],
    },
    {
      id: 2,
      name: "Производство B",
      area: 450,
      place: "Бестужевская",
coordinates: [59.990552, 30.383626],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 3,
      name: "Производство C",
      area: 600,
      place: "Бестужевская",
coordinates: [59.990552, 30.383626],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 4,
      name: "Производство D",
      area: 800,
      place: "Кушелевская дорога",
coordinates: [59.986111, 30.368838],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 5,
      name: "Производство E",
      area: 1000,
      place: "АО «Сестрорецкий инструментальный»",
coordinates: [60.092746, 29.958752],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
  ],

  retail: [
    {
      id: 1,
      name: "Торг. площадь A",
      area: 50,
      place: "Кушелевская дорога",
coordinates: [59.986111, 30.368838],
      adSlider: true,
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 2,
      name: "Торг. площадь B",
      area: 75,
      place: "АО «Сестрорецкий инструментальный»",
coordinates: [60.092746, 29.958752],
      images: [
        "https://plus.unsplash.com/premium_photo-1683133261283-78fe47339160?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmV0YWlsfGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1664202526047-405824c633e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmV0YWlsfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      id: 3,
      name: "Торг. площадь C",
      area: 100,
      place: "Бестужевская",
coordinates: [59.990552, 30.383626],
      images: [
        "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      id: 4,
      name: "Торг. площадь D",
      area: 150,
      place: "Бестужевская",
coordinates: [59.990552, 30.383626],
      images: [
        "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661661903883-6d0d444ace70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1518797814703-ed31ee241ef8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      id: 5,
      name: "Торг. площадь E",
      area: 200,
      place: "Кушелевская дорога",
coordinates: [59.986111, 30.368838],
      images: [
        "https://images.unsplash.com/photo-1584194655379-ff80a8fec339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1700824490100-f82146b2441f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1555529771-122e5d9f2341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
  ],
};
