import TeamMember from "@/components/TeamMember";

export default function TeamMemberGrid() {
  return (
    <>
      <h2>Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        <TeamMember
          name="Shuwei Guo"
          role="Founder (placeholder image is used here, please replace)"
          imageSrc="https://cdn-icons-png.flaticon.com/512/8136/8136031.png"
        />
      </div>
    </>
  );
}
