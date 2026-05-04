import { useState } from "react";
import API from "./api";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    const res = await API.post("/auth/login", data);
    localStorage.setItem("token", res.data.token);
    alert("Login Success");
  };

  return (
    <div>
      <input placeholder="Email" onChange={e=>setData({...data,email:e.target.value})}/>
      <input placeholder="Password" onChange={e=>setData({...data,password:e.target.value})}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}