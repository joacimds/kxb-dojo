const event = {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: ["Dojo", "Fagkveld"],
      },
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "about",
      title: "About",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default event;
