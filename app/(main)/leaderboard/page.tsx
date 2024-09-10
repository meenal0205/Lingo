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
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";

const LeaderBoardPage = async () => {
  const userProgressData = getUserProgress();
  const leaderboardData = getTopTenUsers();

  const [userProgress, leaderboard] = await Promise.all([
    userProgressData,
    leaderboardData,
  ]);

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
        <Quests points={userProgress.points} />
      </StickyWrapper>

      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src="/leaderboard.svg" alt="shop" width={90} height={90} />
        </div>
        <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
          Leaderboard
        </h1>
        <p className="text-muted-foreground text-center text-lg mb-6">
          See where you stand among other learners inthe community.
        </p>

        <Separator className="mb-4 h-0.5 rounded-full " />
        {leaderboard.map((userProgress, index) => (
          <div
            key={userProgress.userId}
            className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50 "
          >
            <p className="font-bold text-lime-700 mr-4">{index + 1} </p>
            <Avatar className="border bg-green-500 h-12 w-12 ml-3 mr-6">
              <AvatarImage
                src={userProgress.userImageSrc}
                className="object-cover"
              />
            </Avatar>
            <p className="font-bold text-neutral-800 flex-1 ">
              {userProgress.userName}
            </p>
            <p className="text-muted-foreground">{userProgress.points} XP</p>
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

export default LeaderBoardPage;
