import { useEffect, useState } from "react";
import API from "./api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    API.get("/tasks", {
      headers: { authorization: localStorage.getItem("token") }
    }).then(res => setTasks(res.data));
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map(t => (
        <div key={t._id}>
          {t.title} - {t.status}
        </div>
      ))}
    </div>
  );
}