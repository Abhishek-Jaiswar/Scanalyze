import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Scanalyse" },
    { name: "description", content: "Smart feedback for your resume" },
  ];
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="flex h-[92vh] items-baseline-last justify-center pb-6">
        <div className="space-y-1 max-w-4xl ">
          <h1 className=" text-4xl font text-slate-300 text-center md:text-6xl lg:text-7xl">Stay Ahead in Your Job Hunt</h1>
          <h2 className="text-lg text-slate-400 md:text-2xl text-center ">Use Scanalyse to analyze your resume, monitor submission status, and get actionable feedback—powered by AI.</h2>
        </div>
      </section>

      {
        
      }
    </main>
  )
};
