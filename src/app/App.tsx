import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Curriculum } from "./components/Curriculum";
import { Campus } from "./components/Campus";
import { Admissions } from "./components/Admissions";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="w-full" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Hero />
      <About />
      <WhyChooseUs />
      {/* <Curriculum /> */}
      <Campus />
      <Admissions />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}