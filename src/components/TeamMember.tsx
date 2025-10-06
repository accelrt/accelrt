interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageSrc }) => {
  return (
    <div className="team-member text-center">
      <img
        src={imageSrc}
        alt={`${name}'s photo`}
        width={150}
        height={150}
        className="rounded-full mx-auto"
      />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-gray-500">{role}</p>
    </div>
  );
};

export default TeamMember;
