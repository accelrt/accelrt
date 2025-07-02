import HomeMD from "@/markdown/home.mdx";
import TeamMemberGrid from "./TeamMemberGrid";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-2xl m-auto">
        <div className="text-center py-16">
          <h1 className="text-6xl font-bold text-center">AccelRT</h1>
          <p>[insert contact details here]</p>
        </div>
        <HomeMD />
        <br />
        <TeamMemberGrid />
      </main>
    </>
  );
}
