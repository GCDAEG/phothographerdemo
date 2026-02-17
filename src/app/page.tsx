import Image from "next/image";
import { Bebas_Neue, Lora, Montserrat, Oswald, Roboto } from "next/font/google";
import HeroSection from "../components/layout/Sections/HeroSection";
import FeatureSection from "../components/layout/Sections/FeatureSection";
import FAQS from "../components/layout/Sections/FAQs";
import StatsSection from "../components/layout/Sections/StatsSection";
import PracticeArea from "../components/layout/Sections/PracticeArea";
import WhyChooseUs from "../components/layout/Sections/WhyChooseUs";
import ExampleMessage from "@/components/layout/Sections/Example";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const lora = Lora({
  subsets: ["latin"],
  display: "optional",
});

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
export const title = lora.className;
export const titleH2 = montserrat.className;
export const base = roboto.className;

export default function Home() {
  return (
    <main className={`min-h-screen w-full ${base} bg-background`}>
      <HeroSection />
      <StatsSection />
      {/* <FeatureSection /> */}
      <PracticeArea />
      <WhyChooseUs />
      <FAQS />
    </main>
  );
}
