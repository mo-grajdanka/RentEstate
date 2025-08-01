var dataByPurpose = {
  land: [
    {
      id: 1,
      name: "Участок A",
      place: "Кушелевская дорога",
      area: 120,
      mainSlider: true,
      adSlider: true,
      suitableFor: ["Кафе", "Футбол", "Магазин"],
      images: [
        "https://images.unsplash.com/photo-1656537191526-22109a84cd92?w=400&h=200&fit=crop",
        "https://plus.unsplash.com/premium_photo-1674019235838-df82b9c83f4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1697644693174-216346d85792?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhbmR8ZW58MHx8MHx8fDA%3D",
      ],
    },
    {
      id: 2,
      name: "Участок B",
      place: "Лабораторный проспект",
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
      area: 300,
      place: "Кушелевская дорога",
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 2,
      name: "Производство B",
      area: 450,
      place: "Бестужевская",
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
      images: [
        "https://images.unsplash.com/photo-1584194655379-ff80a8fec339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1700824490100-f82146b2441f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1555529771-122e5d9f2341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
  ],
};
