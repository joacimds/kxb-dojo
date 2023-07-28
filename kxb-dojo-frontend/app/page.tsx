import { getMembers } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const members = await getMembers();

  return (
    <>
      <div className="mx-auto">
        <h1 className="grid justify-center text-4xl lg:text-7xl pb-10">
          Faggruppens hjemmeside
        </h1>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-1 pl-8 pr-8">
          {members.map((member) => (
            <div className="" key={member._id}>
              {member.image && (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="mx-auto border border-black rounded-full"
                />
              )}
              <div className="grid justify-center">{member.name}</div>
            </div>
          ))}
        </div>
        <div>
          {/* TODO: Add calendar or something to show when next dojo or fagkveld is. */}
        </div>
      </div>
    </>
  );
}
