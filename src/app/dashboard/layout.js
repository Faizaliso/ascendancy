import "@/styles/globals.css";
import { auth } from "@/libs/auth"
import { prisma } from "@/utils/prisma";
import { CardEvent } from "../components/card-event";


export default function Layout( {children}) {

  return (
    <main className="h-screen flex">
        <aside className="w-[240px] bg-slate-50 p-8 space-y-6">
            <div className="text-xl text-black font-bold mb-4">Eventmakers.</div>
            <div>Event</div>
            <div>Profile</div>
            <button>Create Event</button>
        </aside>
        <section className="w-[calc(100%-240px)] p-8">{children}</section>
    </main>
  )
}