import { NextResponse } from "next/server";

const footerData = {
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
    address: "г. Кемерово",
    email: "evgeny-nikitin03102003@mail.ru",
    phone: "+79505940280",
  },
  copyright: "©2025 Компьютер42. Все права защищены",
};

export const GET = async () => {
  return NextResponse.json({
    footerData,
  });
};
