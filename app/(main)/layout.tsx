import { Sidebar } from "@/components/sidebar";
import { MobileHeader } from "@/components/mobileHeader";
type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-4">
        <div className="max-w-[1056px] mx-auto  h-full"> {children}</div>
      </main>
    </>
  );
};

export default MainLayout;
