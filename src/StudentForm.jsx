import React, { useState } from "react";

export function StudentForm({ onAdd }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [major, setMajor] = useState("AIoT");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fullName.trim().length < 3) {
      newErrors.fullName = "Họ tên phải có ít nhất 3 ký tự!";
    }

    if (!emailRegex.test(email.trim())) {
      newErrors.email = "Email ko đúng định dạng!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAdd({
        fullName: fullName.trim(),
        email: email.trim(),
        major,
      });

      setFullName("");
      setEmail("");
      setMajor("CNTT");
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <h3>Thêm sinh viên</h3>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>Họ tên</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={styles.input}
          placeholder="Phạm Lê Thiên Tường"
        />
        {errors.fullName && <span style={styles.error}>{errors.fullName}</span>}
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          placeholder="tuong@ptit.edu.vn"
        />
        {errors.email && <span style={styles.error}>{errors.email}</span>}
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>Ngành</label>
        <select
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          style={styles.input}
        >
          <option value="AIoT">AIoT</option>
          <option value="CNTT">CNTT</option>
          <option value="ATTT">ATTT</option>
          <option value="DTVT">DTVT</option>
          <option value="MKT">MKT</option>
        </select>
      </div>

      <button type="submit" style={styles.btnSubmit}>
        Thêm
      </button>
    </form>
  );
}

const styles = {
  formContainer: { marginBottom: "20px" },
  fieldGroup: { display: "flex", flexDirection: "column", marginBottom: "12px" },
  label: { fontWeight: "bold", marginBottom: "4px" },
  input: { padding: "8px", borderRadius: "4px", border: "1px solid #ccc" },
  error: { color: "#e53e3e", fontSize: "12px", marginTop: "4px" },
  btnSubmit: {
    backgroundColor: "#d92323",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    width: "100%",
  },
};

export default StudentForm;