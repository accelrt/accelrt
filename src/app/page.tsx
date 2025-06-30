import Image from "next/image";
import HomeMD from "@/markdown/home.mdx";
import TeamMemberGrid from "./TeamMemberGrid";

export default function Home() {
  return (
    <>
      <header className="p-4">
        <span className="font-bold">Accelrt</span>
      </header>
      <main className="max-w-2xl m-auto">
        <div className="text-center py-16">
          <h1 className="text-6xl font-bold text-center">Accelrt</h1>
          <p>[insert contact details here]</p>
        </div>
        <HomeMD />
        <TeamMemberGrid />
      </main>
    </>
  );
}
