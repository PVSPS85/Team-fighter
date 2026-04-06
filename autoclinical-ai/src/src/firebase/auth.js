import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "./firebaseConfig";

export const auth = getAuth(app);

export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => {
  return signOut(auth);
};

export const watchAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};
