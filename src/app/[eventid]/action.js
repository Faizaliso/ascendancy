"use server";

import { prisma } from "@/utils/prisma";

export async function joinEventAction(_, formData) {
  const eventId = formData.get("eventId");
  const name = formData.get("name");
  const email = formData.get("email");

  if (!name || !email || !eventId) {
    return {
      success: false,
      message: "⚠️ please fill all the field",
    };
  }

  await prisma.participant.create({
    data: {
      name,
      email,
      eventId,
    },
  });

  return {
    success: true,
    message: "Event Joined",
  };
}
