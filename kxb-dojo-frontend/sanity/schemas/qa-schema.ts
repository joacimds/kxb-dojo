const qa = {
  name: "qa",
  title: "Q&As",
  type: "document",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
    },
    {
      name: "answer",
      title: "Answer",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default qa;
