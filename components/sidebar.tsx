import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};
import sidebarlogo from "../public/sidebarlogo.png";
import Link from "next/link";
import Image from "next/image";
import { SideBaritem } from "./side-bar-item";
import houseIcon from "../public/Microsoft-Fluentui-Emoji-3d-House-3d.512.png";

import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import leaderboard from "../public/Graphicrating-Koloria-Chart-Bar-3D-Descending.32.png";

import quests from "../public/Pixelkit-Flat-Jewels-Arrow-Bulls-Eye.512.png";

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        " h-full lg:w-[256px] lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src={sidebarlogo} width={40} height={40} alt="" />

          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>

      <div className="flex flex-col gap-y-2 flex-1">
        <SideBaritem label="Learn" href="/learn" iconSrc="/Home.png" />
        <SideBaritem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.png"
        />
        <SideBaritem label="Quests" href="/quests" iconSrc="/Quest.png" />
        <SideBaritem label="Shop" href="/shop" iconSrc="/shop.png" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  );
};
