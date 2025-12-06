import { NextResponse } from "next/server";
import {
  avatar,
  brand,
  innovation,
  onlinePresence,
  creativeMind,
  WebResultTag,
  startupPlan,
  faq,
  achievements,
} from "@/app/types/menu";

const avatarList: avatar[] = [
  {
    image: "/images/home/avatar_1.jpg",
    title: "Sarah Johnson",
  },
  {
    image: "/images/home/avatar_2.jpg",
    title: "Olivia Miller",
  },
  {
    image: "/images/home/avatar_3.jpg",
    title: "Sophia Roberts",
  },
  {
    image: "/images/home/avatar_4.jpg",
    title: "Isabella Clark",
  },
];

const brandList: brand[] = [
  {
    image: "/images/home/brand/brand-icon-1.svg",
    darkImg: "/images/home/brand/brand-darkicon-1.svg",
    title: "Adobe",
  },
  {
    image: "/images/home/brand/brand-icon-2.svg",
    darkImg: "/images/home/brand/brand-darkicon-2.svg",
    title: "Figma",
  },
  {
    image: "/images/home/brand/brand-icon-3.svg",
    darkImg: "/images/home/brand/brand-darkicon-3.svg",
    title: "Shopify",
  },
  {
    image: "/images/home/brand/brand-icon-4.svg",
    darkImg: "/images/home/brand/brand-darkicon-4.svg",
    title: "Dribble",
  },
  {
    image: "/images/home/brand/brand-icon-5.svg",
    darkImg: "/images/home/brand/brand-darkicon-5.svg",
    title: "Webflow",
  },
];

const innovationList: innovation[] = [
  {
    image: "/images/home/innovation/webdevp.svg",
    title: "Диагностика",
    bg_color: "bg-pink/20",
    txt_color: "text-pink",
  },
  {
    image: "/images/home/innovation/brand.svg",
    title: "Обслуживание",
    bg_color: "bg-purple/20",
    txt_color: "text-purple",
  },
  {
    image: "/images/home/innovation/digitalmarketing.svg",
    title: "Сборка",
    bg_color: "bg-blue/20",
    txt_color: "text-blue",
  },
  {
    image: "/images/home/innovation/uiux.svg",
    title: "Ремонт",
    bg_color: "bg-orange/20",
    txt_color: "text-orange",
  },
  {
    image: "/images/home/innovation/analitics.svg",
    title: "Установка ПО",
    bg_color: "bg-green/20",
    txt_color: "text-green",
  },
];

const onlinePresenceList: onlinePresence[] = [
  {
    image: "/images/converted.webp",
    title: "Архитек",
    tag: ["Аутсорсинг Юр.лиц", "Обслуживание ПК"],
    link: "https://wa.me/79505940280?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%B8%D1%88%D1%83%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20computer42,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83...",
  },
  {
    image: "/images/converted_1.webp",
    title: "КодексЪ",
    tag: ["Обслуживание юр.лиц", "Изготовление вывески"],
    link: "https://wa.me/79505940280?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%B8%D1%88%D1%83%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20computer42,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83...",
  },
];

const creativeMindList: creativeMind[] = [
  {
    image: "/images/home/creative/creative_img_1.png",
    name: "Logan Dang",
    position: "WordPress Developer",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
  {
    image: "/images/home/creative/creative_img_2.png",
    name: "Ana Belić",
    position: "Social Media Specialist",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
  {
    image: "/images/home/creative/creative_img_3.png",
    name: "Brian Hanley",
    position: "Product Designer",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
  {
    image: "/images/home/creative/creative_img_4.png",
    name: "Darko Stanković",
    position: "UI Designer",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
];

const WebResultTagList: WebResultTag[] = [
  {
    image: "/images/home/result/creativity.svg",
    name: "Обслуживаем",
    bg_color: "bg-purple/20",
    txt_color: "text-purple",
  },
  {
    image: "/images/home/result/innovation.svg",
    name: "Ремонтируем",
    bg_color: "bg-blue/20",
    txt_color: "text-blue",
  },
  {
    image: "/images/home/result/strategy.svg",
    name: "Собираем",
    bg_color: "bg-orange/20",
    txt_color: "text-orange",
  },
];

const startupPlanList: startupPlan[] = [
  {
    plan_bg_color: "bg-pale-yellow",
    text_color: "text-dark_black",
    descp_color: "dark_black/60",
    border_color: "border-dark_black/10",
    plan_name: "Базовый",
    plan_descp: "Для офисов до 5 ПК",
    plan_price: "4 990",
    icon_img: "/images/home/startupPlan/white_tick.svg",
    plan_feature: [
      "Профилактика ПК (1 раз в 2 месяца)",
      "Экстренные выезды (1 раз в месяц)",
      "Удаленная поддержка с 10:00 до 18:00",
      "Настройка ПО",
      "Мониторинг состояния ПК",
    ],
  },
  {
    plan_bg_color: "bg-purple_blue",
    text_color: "text-white",
    descp_color: "white/60",
    border_color: "border-white/10",
    plan_name: "Продвинутый",
    plan_descp: "Для компаний до 10 ПК с гарантированным выездом",
    plan_price: "9 900",
    icon_img: "/images/home/startupPlan/black_tick.svg",
    plan_feature: [
      "Профилактика ПК (1 раз в месяц)",
      "Экстренные выезды (5 раз в месяц)",
      "Удаленная поддержка 24/7",
      "Настройка ПО",
      "Мониторинг состояния ПК",
    ],
  },
];

const faqList: faq[] = [
  {
    faq_que: 'Можно ли у вас купить компьютер "под ключ"?',
    faq_ans:
      "Да! Мы: Подберем конфигурацию под ваш бюджет и задачи, соберем и протестируем систему, установим все необходимое ПО, дадим гарантию на всю сборку.",
  },
  {
    faq_que: "Можно вызвать мастера на дом/в офис?",
    faq_ans:
      "Конечно! Выезд по Кемерово – от 500 руб. (при заказе ремонта стоимость выезда вычитается из итогового чека).",
  },
  {
    faq_que: "Работаете с юридическими лицами?",
    faq_ans:
      "Да! Заключаем договор на IT-аутсорсинг с ежемесячной поддержкой. Персональные условия для бизнеса.",
  },
  {
    faq_que: "После обновления Windows не работает принтер/сканер...",
    faq_ans:
      "Это частая проблема. Мы: Восстановим работу драйверов, настроим совместимость, вернем предыдущую версию системы при необходимости.",
  },
  {
    faq_que: "Как часто нужно чистить компьютер?",
    faq_ans:
      "Рекомендуем: Офисные ПК - раз в 6-8 месяцев, игровые системы - каждые 3-4 месяца, ноутбуки - минимум раз в год.",
  },
  {
    faq_que: "Почему оригинальные запчасти такие дорогие?",
    faq_ans:
      "Оригинальные детали: Имеют заводскую гарантию, полностью совместимы с вашим устройством, проходят многоуровневый контроль качества, мы можем предложить качественные аналоги дешевле.",
  },
];

const achievementsList: achievements[] = [
  {
    icon: "/images/home/achievement/framer_award.svg",
    dark_icon: "/images/home/achievement/dark_framer_award.svg",
    sub_title: "Framer Awards",
    title:
      "Celebrated for cutting-edge interaction design and seamless user experiences.",
    year: "2024",
    url: "https://www.framer.com/@wrap-pixel/",
  },
  {
    icon: "/images/home/achievement/dribble_award.svg",
    dark_icon: "/images/home/achievement/dribble_award.svg",
    sub_title: "Dribbble Awards",
    title: "Recognized for creative excellence and innovative design solutions",
    year: "2023",
    url: "https://www.framer.com/@wrap-pixel/",
  },
  {
    icon: "/images/home/achievement/awward_award.svg",
    dark_icon: "/images/home/achievement/dark_awward_award.svg",
    sub_title: "awwwards Awards",
    title:
      "Honored with the Best Website Design for creativity, usability, and innovation.",
    year: "2022",
    url: "https://www.framer.com/@wrap-pixel/",
  },
];

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};
