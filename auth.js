// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCvSA5DR23W42dyCtgw12cZD4fLRbDBRGs",
  authDomain: "hangtime-dec96.firebaseapp.com",
  projectId: "hangtime-dec96",
  storageBucket: "hangtime-dec96.firebasestorage.app",
  messagingSenderId: "324453681821",
  appId: "1:324453681821:web:1d803461e5438cddc9a274"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Variable to store UID
let currentUserUID = null;

// Sign in and save user
window.signInAndSaveUser = async function () {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    currentUserUID = user.uid; // Store UID

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      const userData = {
        user_id: user.uid,
        email: user.email,
        display_name: user.displayName,
        created_at: serverTimestamp()
      };

      await setDoc(userRef, userData);
      alert("New user signed in and saved!");
    } else {
      alert("User already exists. Signed in successfully!");
    }
  } catch (error) {
    console.error("Error during sign-in:", error);
    alert("Sign-in failed. Check console for details.");
  }
};

// Export UID for other modules
export function getCurrentUserUID() {
  return currentUserUID;
}
