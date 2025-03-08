import React, { useState } from "react";
import { auth, db } from "../../firebaseConfig"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  
  const [loading, setLoading] = useState(false);  
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setLoading(true);  
    setError("");  
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: name,
        surname: surname,
        email: email,
        uid: user.uid,
      });

      console.log("User signed up and saved to Firestore!");
      navigate("/login");
    } catch (error) {
      setError(error.message);
      console.error("Error signing up:", error.message);
    } finally {
      setLoading(false);  
    }
  };

  return (
    <div className ="SignUp">
      <h2>Sign Up</h2>

      {error.message}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Surname" 
        value={surname} 
        onChange={(e) => setSurname(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
        <div className= "loginnButtons">
      <button onClick={handleSignUp} disabled={loading}>
        {loading ? "Signed Up" : "Sign Up"}
      </button>
      <br></br>
      <br></br>
      <Link to= "/signIn">Click here to go to Sign in!</Link>
    </div>
    </div>
  );
};

export default SignUp;
