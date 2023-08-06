import { PortableTextBlock } from "sanity";

export type Event = {
  _id: string;
  _createdAt: Date;
  title: string;
  type: string;
  date: Date;
  about: PortableTextBlock[];
};
