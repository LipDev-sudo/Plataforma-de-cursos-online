import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedCourses } from "./components/FeaturedCourses";
import { Benefits } from "./components/Benefits";
import { LearningJourney } from "./components/LearningJourney";
import { Footer } from "./components/Footer";
import { StudentDashboard } from "./components/StudentDashboard";
import { LessonView } from "./components/LessonView";
import { demoCourse } from "./data/demoCourse";
import { useLearningProgress } from "./hooks/useLearningProgress";

type View = "home" | "student" | "lesson";

export default function App() {
  const [view, setView] = useState<View>("home");
  const [lessonId, setLessonId] = useState(demoCourse.lessons[0].id);
  const progress = useLearningProgress();

  const openStudentArea = () => {
    setView("student");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const openLesson = (id = demoCourse.lessons[0].id) => {
    setLessonId(id);
    setView("lesson");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  if (view === "student") {
    return <StudentDashboard completedLessonIds={progress.completedLessonIds} onBack={() => setView("home")} onOpenLesson={openLesson} onReset={progress.resetProgress} />;
  }

  if (view === "lesson") {
    return <LessonView lessonId={lessonId} completedLessonIds={progress.completedLessonIds} onBack={openStudentArea} onOpenLesson={openLesson} onToggleComplete={progress.toggleLesson} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
      <Header onOpenStudentArea={openStudentArea} />
      <main id="main-content">
        <Hero onStartDemo={() => openLesson()} onOpenStudentArea={openStudentArea} completedLessons={progress.completedLessonIds.length} />
        <FeaturedCourses onStartDemo={() => openLesson()} />
        <Benefits />
        <LearningJourney onStartDemo={() => openLesson()} />
      </main>
      <Footer />
    </div>
  );
}
