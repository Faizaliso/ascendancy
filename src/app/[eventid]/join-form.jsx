"use client";

import { useActionState } from "react";
import { joinEventAction } from "./action";

export const JoinEvent = ({ eventId }) => {
  const [state, formAction, pending] = useActionState(joinEventAction, null);

  return (
    <form
      action={formAction}
      className="border border-slate-500 hover:border-slate-900 p-4 rounded-xl"
    >
      <input name="eventId" value={eventId} type="hidden" />
      <div>
        <h4>Name</h4>
        <input name="name" />
      </div>
      <div>
        <h4>Email</h4>
        <input name="email" />
      </div>
      <button disabled={pending}>Join event</button>
      {!state?.success && state?.message && (
        <div className="mt-1 flex justify-center items-center p-1 bg-rose-200 text-rose-600 text-sm rounded-lg">
          {state?.message}
        </div>
      )}
      {state?.success && (
        <div className="mt-1 flex justify-center items-center p-1 bg-emerald-200 text-emerald-500 text-sm rounded-lg">
          {state?.message}
        </div>
      )}
    </form>
  );
};
