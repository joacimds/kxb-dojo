import { PortableTextBlock } from "sanity";

export type Member = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  about: PortableTextBlock[];
};
