import Explore from "@/components/explore-section/Explore";
import HeroHome from "@/components/hero-home/HeroHome";
import HomeTranding from "@/components/home-tranding/HomeTranding";
import Newsletter from "@/components/newsletter/Newsletter";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroHome />
      <HomeTranding />
      <HomeTranding />
      <HomeTranding />
      <Explore />
      <Newsletter />
    </>
  );
}
