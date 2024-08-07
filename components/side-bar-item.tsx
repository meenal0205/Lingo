"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

type Props = {
  label: string;
  iconSrc: StaticImageData;
  href: string;
};

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
export const SideBaritem = ({ label, iconSrc, href }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[52px]"
      asChild
    >
      <Link href={href}>
        <Image src={iconSrc} alt="" className="mr-5" height={32} width={32} />

        {label}
      </Link>
    </Button>
  );
};
