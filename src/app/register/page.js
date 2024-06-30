"use client";

import Link from "next/link";
import React, { useActionState } from "react";
import { registerAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(registerAction, null);

  return (
    <main className="flex flex-col justify-center items-center text-center h-screen space-y-6">
      <section>
        <h3>Register</h3>
        <p>Create an account to continue</p>
      </section>
      <form action={formAction} className="flex flex-col justify-center items-center space-y-2">
        <input defaultValue={state?.data?.username} name="username" placeholder="Name" />
        <input defaultValue={state?.data?.email} name="email" placeholder="Email" type="email" />
        <input defaultValue={state?.data?.password} name="password" placeholder="password" type="password" />
        <button disabled={pending} className="w-full">
          Register
        </button>
        {state?.success === "false" && <p className="msg-error">{state.message}</p>}
        {state?.success === "true" && <p className="msg-success">Register success, please login</p>}
      </form>
      <p>
        Have an account ? <Link href="/login" className="link">Login</Link>
      </p>
      <p>
		Back to <Link href="/" className="link">Homepage</Link>
      </p>
    </main>
  );
}
