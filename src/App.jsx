import React, { useContext } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import { useFetch } from "./useFetch";
import { ThemeContext } from "./ThemeContext";

const API_URL = "https://6ad85faf95e98f36aef3453f.mockapi.io/api/v1/students";

export default function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { data: students, setData: setStudents, loading, error } = useFetch(API_URL);

  const handleAddStudent = (newStudent) => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent),
    })
      .then((res) => res.json())
      .then((data) => setStudents([...students, data]))
      .catch((err) => console.log(err));
  };

  const handleDeleteStudent = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => setStudents(students.filter((s) => s.id !== id)))
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "0 auto",
        background: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        border: "1px solid #ccc",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
        <h2>Quản lý sinh viên</h2>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Đổi sang Dark" : "Đổi sang Light"}
        </button>
      </div>

      <StudentForm onAdd={handleAddStudent} />

      {loading && <p>Đang tải...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <StudentList students={students} onDelete={handleDeleteStudent} />
      )}
    </div>
  );
}