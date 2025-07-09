      // Import Firebase modules
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
      import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
      import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

    // Your Firebase config
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

    // Sign in and save user
    window.signInAndSaveUser = async function () {
        const provider = new GoogleAuthProvider();

      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        
        const userData = {
            user_id: user.uid,
            email: user.email,
            display_name: user.displayName
        };
        
        await setDoc(doc(db, "users", user.uid), userData);
        alert("User signed in and saved!");
    } catch (error) {
        console.error("Error during sign-in:", error);
        alert("Sign-in failed. Check console for details.");
    }
};