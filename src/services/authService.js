import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../firebase/firebase";

export const registerUser = async (
  name,
  email,
  password
) => {
  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  const user =
    userCredential.user;

  await setDoc(
    doc(db, "users", user.uid),
    {
      uid: user.uid,
      name,
      email,
      role: "user",
      createdAt:
        serverTimestamp(),
    }
  );

  return userCredential;
};

export const loginUser = async (
  email,
  password
) => {
  return signInWithEmailAndPassword(
    auth,
    email,
    password
  );
};

export const logoutUser = async () => {
  return signOut(auth);
};

export const getUserProfile =
  async (uid) => {
    const docRef = doc(
      db,
      "users",
      uid
    );

    const docSnap =
      await getDoc(docRef);

    if (
      docSnap.exists()
    ) {
      return docSnap.data();
    }

    return null;
  };