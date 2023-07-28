// Here lies all functions that we are going to use to grab data from Sanity.
// Will be using GROQ Queries to fetch data

import { Member } from "@/types/Member";
import { createClient, groq } from "next-sanity";

export async function getMembers(): Promise<Member[]> {
  const client = createClient({
    projectId: "hir8lmw6",
    dataset: "production",
    apiVersion: "2023-07-26",
  });

  return client.fetch(groq`*[_type == "member"]{
    _id,
    _createAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    content
  }`);
}
