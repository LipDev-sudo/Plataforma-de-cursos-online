import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedCourses } from "./components/FeaturedCourses";
import { Benefits } from "./components/Benefits";
import { Categories } from "./components/Categories";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedCourses />
      <Benefits />
      <Categories />
      <Testimonials />
      <Footer />
    </div>
  );
}
