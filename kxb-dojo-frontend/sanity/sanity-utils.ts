// Here lies all functions that we are going to use to grab data from Sanity.
// Will be using GROQ Queries to fetch data

import { Member } from "@/types/Member";
import { Event } from "@/types/Event";
import { Qa } from "@/types/Qa";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getEvents(): Promise<Event[]> {
  return createClient(clientConfig)
    .fetch(groq`*[_type == "event"] | order(date asc){
    _id,
    _createdAt,
    title,
    type,
    date,
    about
  }`);
}

export async function getMembers(): Promise<Member[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "member"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    about
  }`);
}

export async function getQuestions(): Promise<Qa[]> {
  return createClient(clientConfig)
    .fetch(groq`*[_type == "qa"] | order(_createdAt asc){
    _id,
    _createdAt,
    question,
    answer
  }`);
}
