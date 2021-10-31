import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";

function loggedin() {
  const router = useRouter();

  const auth = getAuth();
  function handleClick() {
    signOut(auth)
      .then(() => {
        console.log("logged out");
        router.push("/");
      })
      .catch((e) => {
        console.log(e.message, e.code);
      });
  }
  return (
    <div>
      <h1>You're logged in!!</h1>
      <button onClick={handleClick} className="w-36 h-36">
        logout
      </button>
    </div>
  );
}

export default loggedin;
