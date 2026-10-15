"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButtons() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Po kontrollohet hyrja...</p>;
  }

  if (session?.user) {
    return (
      <div>
        <span>Hyrë si {session.user.name ?? session.user.email ?? session.user.id}</span>
        <button onClick={() => signOut({ callbackUrl: "/" })}>
          Dil
        </button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn("github")}>
      Hyr me GitHub
    </button>
  );
}
