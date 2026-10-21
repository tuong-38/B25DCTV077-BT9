import React from "react";

export function StudentList({ students, onDelete }) {
  if (!students || students.length === 0) {
    return <p style={{ textAlign: "center", color: "#888" }}>Chưa có sv</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {students.map((student) => (
        <li key={student.id} style={styles.item}>
          <span>
            <strong>{student.fullName}</strong> – {student.major} ({student.email})
          </span>
          <button onClick={() => onDelete(student.id)} style={styles.btnDelete}>
            [Xóa]
          </button>
        </li>
      ))}
    </ul>
  );
}

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    marginBottom: "8px",
    borderRadius: "4px",
    border: "1px solid #eee",
  },
  btnDelete: {
    background: "none",
    border: "none",
    color: "#d92323",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default StudentList;
