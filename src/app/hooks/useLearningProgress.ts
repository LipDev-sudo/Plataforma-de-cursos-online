import { useState } from "react";

const STORAGE_KEY = "trilhara:demo-progress:v1";

function readProgress(): string[] {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export function useLearningProgress() {
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(readProgress);

  const update = (next: string[]) => {
    setCompletedLessonIds(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  return {
    completedLessonIds,
    toggleLesson(lessonId: string) {
      update(
        completedLessonIds.includes(lessonId)
          ? completedLessonIds.filter((id) => id !== lessonId)
          : [...completedLessonIds, lessonId],
      );
    },
    resetProgress() {
      update([]);
    },
  };
}
