import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "@/database/queries";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Items } from "./items";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
const ShopPage = async () => {
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
        <Quests points={userProgress.points} />
      </StickyWrapper>

      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src="/shop.svg" alt="shop" width={90} height={90} />
        </div>
        <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
          Shop
        </h1>
        <p className="text-muted-foreground text-center text-lg mb-6">
          Spend your points on cool stuff
        </p>
        <Items
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </FeedWrapper>
    </div>
  );
};

export default ShopPage;
