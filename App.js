import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw_8z1pnPxq1A-q2O5o27tOUcCNl4EIyU",
  authDomain: "graduation-awards-464da.firebaseapp.com",
  projectId: "graduation-awards-464da",
  storageBucket: "graduation-awards-464da.firebasestorage.app",
  messagingSenderId: "612391305312",
  appId: "1:612391305312:web:af9acad11fafa646854305",
  measurementId: "G-JWF93WPN82"
};
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const students = [/* your list here */];

const categories = [/* your 47 categories here */];

export default function App() {
  const [votes, setVotes] = useState({});
  const [code, setCode] = useState("");

  const submitVotes = async () => {
    await setDoc(doc(db, "votes", code), votes);
    alert("Submitted!");
  };

  return (
    <div style={{ background: "black", color: "gold", minHeight: "100vh", padding: 20 }}>
      <h1>🏆 Graduation Awards</h1>

      <input
        placeholder="Enter your code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      {categories.map((cat) => (
        <div key={cat}>
          <h3>{cat}</h3>
          <select onChange={(e) => setVotes({ ...votes, [cat]: e.target.value })}>
            <option>Select</option>
            {students.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
      ))}

      <button onClick={submitVotes}>Submit</button>
    </div>
  );
}
