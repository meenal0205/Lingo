import { lessons, units } from "@/database/schema";
import { desc } from "drizzle-orm";
import { UnitBanner } from "./unit-banner";
import { LessonsButton } from "./lesson-button";

type Props = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferInsert & {
    completed: boolean;
  })[];
  activeLesson:
    | (typeof lessons.$inferInsert & {
        unit: typeof units.$inferInsert;
      })
    | undefined;
  activeLessonPercentage: number;
};

export const Unit = ({
  id,
  order,
  title,
  description,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: Props) => {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;
          return (
            <LessonsButton
              key={lesson.id}
              id={index}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </>
  );
};
