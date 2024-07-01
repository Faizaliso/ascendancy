import { prisma } from "@/utils/prisma";
import { CardEvent } from "../components/card-event";
import { Header } from "../components/header";

export default async function Home() {
  //query
  const events = await prisma.event.findMany({
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });

  return (
    <main className=" flex flex-col justify-center items-center ">
      <h1>Workshop and Event</h1>
      <div className="grid grid-cols-3 gap-4">
        {events.map((item) => (
          <CardEvent key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
