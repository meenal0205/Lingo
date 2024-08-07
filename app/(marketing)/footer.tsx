import { Button } from "@/components/ui/button";
import IND from "../../public/in.png";
import CHI from "../../public/ch.png";
import ESP from "../../public/es.png";
import NG from "../../public/ng.png";
import JP from "../../public/jp.png";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 h-29 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full ">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src={IND}
            alt=""
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Hindi
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src={CHI}
            alt=""
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Chinese
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src={NG}
            alt=""
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Hausa
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src={ESP}
            alt=""
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src={JP}
            alt=""
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
};
