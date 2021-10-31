import { app } from "../firebaseconfig.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth();

export function getInput() {
  let userobj = {
    username: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  console.log(userobj);

  createUserWithEmailAndPassword(auth, userobj.username, userobj.password)
    .then((userCredential) => {
      const user = userCredential.user;
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
