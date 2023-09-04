import { PortableTextBlock } from "sanity";

export type Qa = {
  _id: string;
  _createdAt: Date;
  question: string;
  answer: PortableTextBlock[];
};
