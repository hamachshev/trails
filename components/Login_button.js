import { useSession, signIn, signOut } from "next-auth/react";

export default function Login_button() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button
          onClick={() => signOut()}
          className="font-Inter hidden md:inline font-semibold cursor-pointer"
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={() => signIn()}
        className="font-Inter hidden md:inline font-semibold cursor-pointer"
      >
        Sign in
      </button>
    </>
  );
}
