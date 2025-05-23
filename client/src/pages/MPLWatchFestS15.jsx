import React, { useState, useEffect } from "react";
import "../styles/MPLWatchFestS15.css";

const MPLWatchFestS15 = () => {
  const [form, setForm] = useState({
    fullName: "",
    region: "Luzon",
    venue: "",
    birthday: "",
    email: "",
    mlbbId: "",
    mlbbServer: "",
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedForm = Object.fromEntries(
      Object.entries(form).map(([k, v]) => [k, typeof v === "string" ? v.trim() : v])
    );
    // Use trimmedForm for submission
    window.alert("Registration submitted!");
  };

  return (
    <div className="mplwf-bg">
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <img src="MPLWFLOGO.png" alt="MPL Logo" className="mplwf-logo" />
        <div className="mplwf-form-container">
          <div className="mplwf-title">REGISTRATION DETAILS</div>
          <form onSubmit={handleSubmit} className="mplwf-form">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
            />
            <select
              name="region"
              value={form.region}
              onChange={handleChange}
              required
            >
              <option value="Luzon">Luzon</option>
              <option value="Visayas">Visayas</option>
              <option value="Mindanao">Mindanao</option>
            </select>
            <select
              name="venue"
              value={form.venue}
              onChange={handleChange}
              required
            >
              <option value="">Select Venue</option>
              <option value="Venue 1">Venue 1</option>
              <option value="Venue 2">Venue 2</option>
              <option value="Venue 3">Venue 3</option>
            </select>
            <div className="mplwf-date-wrapper">
              <input
                type="date"
                id="birthday"
                name="birthday"
                max={new Date().toISOString().split('T')[0]}
                value={form.birthday}
                onChange={handleChange}
                className={`birthday${isMobile ? " mplwf-date-mobile" : ""}`}
                required
                autoComplete="off"
              />
              {isMobile && !form.birthday && (
                <span className="mplwf-date-placeholder">Please click to select date</span>
              )}
            </div>
            <input
              type="email"
              name="email"
              placeholder="Valid Email Address"
              value={form.email}
              onChange={handleChange}
              
              required
            />
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              name="mlbbId"
              placeholder="MLBB ID (ie. 9923103)"
              value={form.mlbbId}
              onChange={e => {
                const val = e.target.value.replace(/\D/g, "");
                setForm(prev => ({ ...prev, mlbbId: val }));
              }}
              required
            />
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              name="mlbbServer"
              placeholder="MLBB Server (ie. 5932)"
              value={form.mlbbServer}
              onChange={e => {
                const val = e.target.value.replace(/\D/g, "");
                setForm(prev => ({ ...prev, mlbbServer: val }));
              }}
              required
            />
            <button type="submit">
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MPLWatchFestS15;