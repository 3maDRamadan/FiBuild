import About from "./components/about/About";
import Land from "./components/land/Land";
import Map from "./components/map/Map";
import Service from "./components/services/Service";

export const metadata = {
  title: "مقاولات عامة في الكويت - 94903036",
  description:
    "مقاولات عامة ترميمات عامة تشطيب تسليم علي المفتاح مقاول شركات مقاول فلل مقاول هدم وتكسير",
};

export default function Home() {
  return (
    <div>
      <Land />
      <About />
      <Service />
      <Map />
    </div>
  );
}
