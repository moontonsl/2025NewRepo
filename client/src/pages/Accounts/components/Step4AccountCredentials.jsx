import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Add this line if you're using Lucide

const Step4AccountCredentials = ({ formData, handleInputChange, handleSubmit }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
            <div className="form-container-register">
                <h1 className="title-register">CREATE MSL ACCOUNT</h1>

                {/* Logo */}
                <div className="image-container-login">
                    <img 
                        src="msl-logo.png"
                        alt="MSL Account Logo"
                        className="image-logo-login"
                    />
                </div>

                <form className="form-register" onSubmit={handleSubmit}>
                    {/* Username */}
                    <div className="form-row-register">
                        <div className="input-group-register full-width-register">
                            <label htmlFor="username" className="label-register">Username<span className="required"> *</span></label>
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

                    {/* Password */}
                    <div className="form-row-register">
                        <div className="input-group-register full-width-register">
                            <label htmlFor="password" className="label-register">Create a password<span className="required"> *</span></label>
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
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="form-row-register">
                        <div className="input-group-register full-width-register">
                            <label htmlFor="confirmPassword" className="label-register">Confirm password<span className="required"> *</span></label>
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
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Captcha */}
                    <div className="form-row-register">
                        <div className="input-group-register full-width-register captcha-row" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                            <input
                                type="text"
                                id="captcha"
                                name="captcha"
                                value={formData.captcha}
                                onChange={handleInputChange}
                                className="input-field-register captcha-input"
                                placeholder="Enter the captcha"
                                required
                                style={{ flex: 3 }}
                            />
                            <span className="captcha-icon" style={{ flex: 1, fontSize: "2rem", textAlign: "center" }}>
                                🐱
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Step4AccountCredentials;
