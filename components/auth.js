import { app } from "../firebaseconfig.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth();

export function signUpFunc(router) {
  let userobj = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  console.log(userobj);

  createUserWithEmailAndPassword(auth, userobj.email, userobj.password)
    .then((userCredential) => {
      const user = userCredential.user;
      router.push("/loggedin");
    })
    .catch((e) => {
      console.log(e.message, e.code);
    });
}

export function loginFunc(router) {
  let userobj = {
    email: document.getElementById("email-login").value,
    password: document.getElementById("password-login").value,
  };
  console.log(userobj);
  signInWithEmailAndPassword(auth, "test@test.com", userobj.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      router.push("/loggedin");
      // ...
    })
    .catch((e) => {
      console.log(e.message, e.code);
    });
}

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("logged in!");
  } else {
    console.log("no user");
  }
});
