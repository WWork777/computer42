import { Metadata } from "next";
import Achievements from "./components/home/achievements";
import Brand from "./components/home/brand";
import CreativeMind from "./components/home/creative-mind";
import CustomerStories from "./components/home/customer-stories";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Innovation from "./components/home/innovation";
import OnlinePresence from "./components/home/online-presence";
import Solutions from "./components/home/solution";
import Subscription from "./components/home/subscription";
import WebResult from "./components/home/web-result";
import Brands from "./components/brands/brands";

export const metadata: Metadata = {
	metadataBase: new URL('https://computer42.ru'),
	title: 'Ремонт компьютеров в Кемерово — надежно и недорого!',
	description:
		'Ваш компьютер тормозит, не включается или перегревается? Мы устраним любую неисправность в день обращения!',
	keywords:
		'ремонт компьютеров кемерово, ремонт ноутбуков кемерово недорого, компьютерный сервис кемерово, чистка компьютера от пыли кемерово, установка виндовс кемерово срочно',
	alternates: {
		canonical: '/',
	},
	openGraph: {
		url: '/', 
		title: 'Ремонт компьютеров в Кемерово — надежно и недорого!',
		description:
			'Ваш компьютер тормозит, не включается или перегревается? Мы устраним любую неисправность в день обращения!',
		images: {
			url: '/og/og.jpg',
			width: 1200,
			height: 630,
		},
	},
}


export default function Home() {
  return (
    <main>
      {/* ---------------------Hero section Starts-----------------  */}
      <HeroSection />
      {/* ---------------------Hero section Ends-----------------  */}

      {/* ---------------------Brand logo section Starts-----------------  */}
      {/* <Brand /> */}
      <Brands/>
      {/* ---------------------Brand logo section Ends-----------------  */}

      {/* ---------------------Web result section Starts-----------------  */}
      <WebResult />
      {/* ---------------------Web result section Ends-----------------  */}

      {/* ---------------------Innovation section Starts-----------------  */}
      <Innovation />
      {/* ---------------------Innovation section Ends-----------------  */}

      {/* ---------------------Online presence section Starts-----------------  */}
      <OnlinePresence />
      {/* ---------------------Online presence section Ends-----------------  */}

      {/* ---------------------Creative mind section Starts-----------------  */}
      {/* <CreativeMind /> */}
      {/* ---------------------Creative mind section Ends-----------------  */}

      {/* ---------------------Customer Stories section Starts-----------------  */}
      <CustomerStories />
      {/* ---------------------Customer Stories section Ends-----------------  */}

      {/* ---------------------Subscription section Starts-----------------  */}
      <Subscription />
      {/* ---------------------Subscription section Ends-----------------  */}

      {/* ---------------------Faq section Starts-----------------  */}
      <Faq />
      {/* ---------------------Faq section Ends-----------------  */}

      {/* ---------------------Achievements section Starts-----------------  */}
      {/* <Achievements /> */}
      {/* ---------------------Achievements section Ends-----------------  */}

      {/* ---------------------Solutions section Starts-----------------  */}
      <Solutions />
      {/* ---------------------Solutions section Ends-----------------  */}
    </main>
  )
}
