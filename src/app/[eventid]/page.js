import { prisma } from "@/utils/prisma";
import { JoinEvent } from "./join-form";
import { Header } from "../components/header";

export default async function Page({ params }) {
  const event = await prisma.event.findFirst({
    where: {
      id: params.eventid,
    },

  });

  return (
    <main>
      <Header />
      <section className="w-full h-screen px-44 grid grid-cols-3">
        <section className="col-span-2">
          <h1>{event.title}</h1>
          <p>{event.description}</p>
        </section>
        <section className="col-span-1">
          <JoinEvent eventId={event.id} />
          <section></section>
        </section>
      </section>
    </main>
  );
}
