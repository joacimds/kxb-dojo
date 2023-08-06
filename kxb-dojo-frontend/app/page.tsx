import { getMembers } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const members = await getMembers();

  return (
    <>
      <div>
        <h1 className="grid justify-center text-4xl lg:text-7xl pb-10">
          Faggruppens hjemmeside
        </h1>
        <div className="grid grid-cols-3 lg:grid-cols-6 pl-8 pr-8">
          {members.map((member) => (
            <div key={member._id}>
              {member.image && (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={60}
                  height={60}
                  className="mx-auto border border-black rounded-full"
                />
              )}
              <div className="grid justify-center">{member.name}</div>
            </div>
          ))}
        </div>
        <div>
          {/* TODO: Countdown until next event such as dojo or fagkveld? */}
        </div>
      </div>
    </>
  );
}
