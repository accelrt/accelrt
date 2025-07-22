import TeamMemberGrid from "./TeamMemberGrid";
import Header from "./Header";
import ProspectusButton from "./Prospectus";
import "./blur.css";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main className="max-w-2xl m-auto linear-blur">
        <div className="h-96 py-72 flex flex-col justify-center ">
          <h1 className="text-6xl font-bold text-center">AccelRT</h1>
          <a href="mailto:aushackathons@gmail.com" className="text-center">
            Email Us
          </a>
          <br />
          <h2 className="text-2xl font-bold">Currently Planning — Submerged</h2>
          <p>
            AccelRT's upcoming 36-hour hackathon designed for high school
            students to dive into a world transformed by rising sea levels.
            <br /> Set in Sydney, this event challenges teams to invent bold,
            unconventional solutions — software or hardware — that help people
            thrive in a future where much of civilization is underwater.
            <br />
            Participants will collaborate, attend hands-on workshops, and
            receive mentorship from experienced university students, all while
            building real prototypes and forming lasting friendships.
          </p>
          <br />
          <div className="flex justify-center">
            <ProspectusButton />
          </div>
        </div>

        {/* This section is for previous projects */}
        <div>
          <h2 className="text-2xl font-bold">Previous Projects</h2>
          <h3 className="text-xl font-bold">Scrapyard Sydney</h3>
          <p>
            Scrapyard Sydney was an energetic, beginner-friendly hackathon held
            in Sydney, Australia in March 2025, running simultaneously with
            other Scrapyard events glbally, specifically for participants under
            18. Over two days, participants built games, apps, websites, or even
            hardware, tasked to solve a problem with the most absurd and
            creative solution. The event promoted learning and having fun, with
            workshops to help beginners get started. There were silly prizes for
            the most inventive creations, and the weekend saw ~
            <strong>120</strong> students come together to ship 🚀.
          </p>
          <h3 className="text-xl font-bold">Counterspell</h3>
          <p>
            Counterspell Sydney was a high-energy, student-led game jam in
            November 2024 where teams of high school students came together to
            design and build original games from scratch. The event provided a
            creative, collaborative space filled with workshops, mentorship, and
            hands-on learning opportunities. Participants tackled a surprise
            theme, rapidly prototyped their ideas, and showcased their finished
            games to a supportive community. The event celebrated creativity,
            teamwork, and technical skill, leaving everyone with new friends,
            practical experience, and a sense of accomplishment.
          </p>
        </div>
        <TeamMemberGrid />
      </main>
    </>
  );
}
