import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedCourses } from "./components/FeaturedCourses";
import { Benefits } from "./components/Benefits";
import { Categories } from "./components/Categories";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedCourses />
      <Benefits />
      <Categories />
      <Footer />
    </div>
  );
}
