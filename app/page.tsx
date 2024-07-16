import { signIn, auth, signOut } from "@/auth";
import { setUser } from "./store/userSlice";
import { useDispatch } from "react-redux";
import { redirect } from "next/navigation";
import { getDexieUser, setDexieUser } from "@/utils/dexieUtils";
import { useEffect } from "react";

function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <p>You are not logged in</p>
      <button type="submit">Sign in with Google</button>
    </form>
  );
}

function SignOut({ children }: { children: React.ReactNode }) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <p>{children}</p>
      <button type="submit">Sign out</button>
    </form>
  );
}

export default async function Page() {
  let session = await auth();
  let user = session?.user?.email;
  console.log(session);
  if (user) {
    redirect("/dashboard");
  }
  return (
    <section>
      <h1>Homeewe</h1>
      <div>{user ? <SignOut>{`Welcome ${user}`}</SignOut> : <SignIn />}</div>
    </section>
  );
}
