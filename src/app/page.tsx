import Header from "@/components/Header";
import Content from "../components/Content";
export default function Home() {
  return (
    <main className="bg-[#0f172a]">
      <div className="relative w-full bg max-w-[1330px] mx-auto px-5 flex flex-col lg:flex lg:flex-row lg:justify-center  xl:gap-40 lg:gap-4 lg:pl-8 ">
        <Header />
        <Content />
      </div>
    </main>
  );
}
