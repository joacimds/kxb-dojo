// Here lies all functions that we are going to use to grab data from Sanity.
// Will be using GROQ Queries to fetch data

import { Member } from "@/types/Member";
import { Event } from "@/types/Event";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getEvents(): Promise<Event[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "event"]{
    _id,
    _createAt,
    title,
    type,
    date,
    about
  }`);
}

export async function getMembers(): Promise<Member[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "member"]{
    _id,
    _createAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    about
  }`);
}
