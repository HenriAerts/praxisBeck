import Bewertungen from "@/components/home/Bewertungen";
import CallToAction from "@/components/home/CallToAction";
import Hero from "@/components/home/Hero";
import Philosophie from "@/components/home/Philosophie";
import QA from "@/components/home/QA";
import UnsereLeistungen from "@/components/home/UnsereLeistungen";
import ÜberUns from "@/components/home/ÜberUns"


export default function Home() {
  return (
    <>
      <Hero />
      <Philosophie />
      <ÜberUns />
      <UnsereLeistungen />
      <Bewertungen />
      <QA />
      <CallToAction />
    </>
  );
}
