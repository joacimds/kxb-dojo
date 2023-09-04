import { getEvents } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Events() {
  const events = await getEvents();

  // TODO: Create styling for events that will be listed. That also includes formatting date.

  return (
    <>
      <div>
        <h1>Fremtidige arrangementer</h1>
        <div>
          {events.map((event) => (
            <div key={event._id}>
              <div>{event.title}</div>
              <PortableText value={event.about}></PortableText>
              <div>{new Date(event.date).toDateString()}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
