import { NextResponse } from "next/server";

const footerData = {
<<<<<<< HEAD
  brand: {
    name: "Computer42",
    tagline:
      "Обслуживаем, собираем и ремонтируем компьютеры физическим и юридическим лицам",
    socialLinks: [
      {
        icon: "/svg/telegram-dark.svg",
        dark_icon: "/svg/telegram-dark.svg",
        link: "https://twitter.com",
      },
      {
        icon: "/svg/whatsapp-dark.svg",
        dark_icon: "/svg/whatsapp-dark.svg",
        link: "https://linkedin.com/in",
      },
    ],
  },
  sitemap: {
    // name: "Sitemap",
    links: [
      { name: "О нас", url: "/#aboutus" },
      { name: "Наши работы", url: "/#work" },
      { name: "Услуги", url: "/#services" },
      { name: "IT-Аутсорсинг", url: "/#pricing" },
    ],
  },
  otherPages: {
    name: "Other Pages",
    links: [
      { name: "Error 404", url: "/not-found" },
      { name: "Terms & Conditions", url: "/terms-and-conditions" },
      { name: "Политика конфиденциальности", url: "/privacy-policy" },
      { name: "Documentation", url: "/documentation" },
    ],
  },
  contactDetails: {
    name: "Контакты",
    address: "Кемерово, Орджоникидзе 4 (площадь Пушкина)",
    email: "evgeny-nikitin03102003@mail.ru",
    phone: "+79505940280",
  },
  copyright: "©2025 Компьютер42. Все права защищены",
=======
    brand: {
        name: "Computer42",
        tagline: "Обслуживаем, собираем и ремонтируем компьютеры физическим и юридическим лицам",
            socialLinks: [
                {
                    icon: "/svg/telegram-dark.svg",
                    dark_icon: "/svg/telegram-dark.svg",
                    link: "https://t.me/nev_3d"
                },
                {
                    icon: "/svg/whatsapp-dark.svg",
                    dark_icon: "/svg/whatsapp-dark.svg",
                    link: "https://wa.me/79505940280?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%B8%D1%88%D1%83%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20computer42,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83..."
                }
            ]
    },
    sitemap: {
        // name: "Sitemap",
        links: [
            // { name: "Контакты", url: "/contact" },
            { name: "О нас", url: "/#aboutus" },
            { name: "Наши работы", url: "/#work" },
            { name: "Услуги", url: "/#services" },
            { name: "IT-Аутсорсинг", url: "/#pricing" }
        ]
    },
    otherPages: {
        name: "Other Pages",
        links: [
            { name: "Error 404", url: "/not-found" },
            { name: "Terms & Conditions", url: "/terms-and-conditions" },
            { name: "Политика конфиденциальности", url: "/privacy-policy" },
            { name: "Documentation", url: "/documentation" }
        ]
    },
    contactDetails: {
        name:"Контакты",
        address: "г. Кемерово",
        email: "evgeny-nikitin03102003@mail.ru",
        phone: "+79505940280"
    },
    copyright: "©2026 Компьютер42. Все права защищены"
>>>>>>> 5bd4f5e (upd)
};

export const GET = async () => {
  return NextResponse.json({
    footerData,
  });
};
