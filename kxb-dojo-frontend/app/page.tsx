import { getMembers } from "@/sanity/sanity-utils";

export default async function Home() {
  const members = await getMembers();

  return (
    <>
      <h1>Faggruppens hjemmeside</h1>
      {members.map((member) => (
        <div key={member._id}>{member.name}</div>
      ))}
    </>
  );
}
