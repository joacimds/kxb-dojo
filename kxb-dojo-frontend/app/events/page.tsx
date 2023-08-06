import { getEvents } from "@/sanity/sanity-utils";

export default async function Events() {
  const events = await getEvents();

  return (
    <>
      <div>
        <h1>Fremtidige arrangementer</h1>
        <div>
          {events.map((event) => (
            <div key={event._id}>
              <div>{event.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
