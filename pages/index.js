import Banner2 from "../components2/Banner2/Banner2";
import Projects2 from "../components2/Projetc2/Projects2";
import Statistics from "../components2/statistic/Statistics";
import Mail from "../components2/mail/Mail";
import Hero from "../components2/hero/Hero";

export default function Home() {
  return (
    <div className=" max-w-[95%] mx-auto">
      <Banner2></Banner2>
      <Hero />
      <Statistics />
      <Projects2></Projects2>
      <Mail />
    </div>
  );
}
