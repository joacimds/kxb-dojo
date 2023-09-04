import { getQuestions } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Questions() {
  const qas = await getQuestions();

  return (
    <>
      <div>
        {qas.map((qa) => (
          <div key={qa._id}>
            <div>{qa.question}</div>
            <PortableText value={qa.answer}></PortableText>
          </div>
        ))}
      </div>
    </>
  );
}
