import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getTopTenUsers, getUserProgress } from "@/database/queries";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Items } from "../shop/items";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Progress } from "@/components/ui/progress";
import { Promo } from "@/components/promo";

const quests = [
  {
    title: "Earn 20 XP",
    value: 20,
  },
  {
    title: "Earn 50 XP",
    value: 50,
  },
  {
    title: "Earn 100 XP",
    value: 100,
  },
  {
    title: "Earn 500 XP",
    value: 500,
  },
  {
    title: "Earn 1000 XP",
    value: 1000,
  },
];

const QuestsPage = async () => {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activecourse) {
    redirect("/courses");
  }
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6 ">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activecourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
        <Promo />
      </StickyWrapper>

      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src="/Quest.png" alt="shop" width={90} height={90} />
        </div>
        <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
          Quests
        </h1>
        <p className="text-muted-foreground text-center text-lg mb-6">
          Complete Quests by earning points.
        </p>
        <ul className="w-full">
          {quests.map((quest) => {
            const progress = (userProgress.points / quest.value) * 100;
            return (
              <div
                className="flex items-center w-full p-4 gap-x-4 border-t-2"
                key={quest.title}
              >
                <Image src="/points.svg" alt="points" width={60} height={60} />
                <div className="flex flec-col gap-y-2 w-full">
                  <p className="text-neutral-700 text-xl font-bold">
                    {quest.title}
                  </p>
                  <Progress value={progress} className="h-3" />
                </div>
              </div>
            );
          })}
        </ul>
      </FeedWrapper>
    </div>
  );
};

export default QuestsPage;
