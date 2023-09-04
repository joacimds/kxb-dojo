import { getQuestions } from "@/sanity/sanity-utils";

export default async function Questions() {
  const qas = await getQuestions();

  return (
    <>
      <div>
        {qas.map((qa) => (
          <div key={qa._id}>
            <div>{qa.question}</div>
            <div>{qa.answer.toString()}</div>
          </div>
        ))}
      </div>
    </>
  );
}
