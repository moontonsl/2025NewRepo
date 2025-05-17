import { useState, useRef, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

const Step4AccountCredentials = ({
  formData,
  handleInputChange,
  errorMessage,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  const handleSendCode = () => {
    if (timer > 0) return;
    setTimer(60);
    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    // Add code sending logic here
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="">
      <h1 className="title-register">CREATE MSL ACCOUNT</h1>
      <div className="image-container-login">
        <img
          src="msl-logo.png"
          alt="MSL Account Logo"
          className="image-logo-login"
        />
      </div>

      <div className="form-row-register">
        <div className="input-group-register full-width-register">
          <label htmlFor="username" className="label-register">
            Username<span className="required"> *</span>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="input-field-register"
            placeholder="e.g. Simoun"
            required
          />
        </div>
      </div>

      <div className="form-row-register">
        <div className="input-group-register full-width-register">
          <label htmlFor="password" className="label-register">
            Create a password<span className="required"> *</span>
          </label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="input-field-register"
              placeholder="must be 8 characters"
              required
            />
            <button
              type="button"
              className="eye-icon-login"
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className="form-row-register">
        <div className="input-group-register full-width-register">
          <label htmlFor="confirmPassword" className="label-register">
            Confirm password<span className="required"> *</span>
          </label>
          <div className="password-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="input-field-register"
              placeholder="repeat password"
              required
            />
            <button
              type="button"
              className="eye-icon-login"
              onClick={() => setShowConfirmPassword((v) => !v)}
            >
              {showConfirmPassword ? <EyeOff size={24} /> : <Eye size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className="form-row-register">
        <div className="input-group-register full-width-register">
          <label htmlFor="email" className="label-register">
            Email Address<span className="required"> *</span>
          </label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input-field-register"
              placeholder="e.g. crislbarra@gmail.com"
              required
              style={{ flex: 3, marginRight: 8 }}
            />
            <button
              type="button"
              className="register-btn-sendcode"
              style={{ flex: 1, minWidth: 0 }}
              onClick={handleSendCode}
              disabled={timer > 0 || !formData.email}
              title={
                !formData.email
                  ? "Enter your email to enable"
                  : timer > 0
                  ? `Please wait ${timer}s before resending`
                  : ""
              }
            >
              {timer > 0 ? `Resend in ${timer}s` : "Send Code"}
            </button>
          </div>
        </div>
      </div>

      <div className="form-row-register">
        <div className="input-group-register full-width-register">
          <label htmlFor="captcha" className="label-register">
            Code <span className="required"> *</span>
          </label>
          <input
            type="text"
            id="captcha"
            name="captcha"
            value={formData.captcha}
            onChange={handleInputChange}
            className="input-field-register captcha-input"
            placeholder="Enter the code"
            required
            style={{ flex: 3 }}
          />
        </div>
      </div>

    </div>
  );
};

export default Step4AccountCredentials;
