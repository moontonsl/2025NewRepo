import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; 
import '../styles/login.css';  // Import the CSS file

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
      <div className="login-container-login">
        <div className="form-container-login">
            <h1 className="title-login">LOGIN MSL ACCOUNT</h1>

            {/* Image Below the Heading */}
            <div className="image-container-login">
                <img 
                    src="msl-logo.png"  // Adjust the path if necessary
                    alt="MSL Account Logo" 
                    className="image-logo-login" 
                />
            </div>

            <form className="form-login" onSubmit={handleSubmit}>
                <div className="input-group-login">
                    <label htmlFor="username" className="label-login">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="eg. Simeon"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="input-field-login"
                    />
                </div>
                <div className="input-group-login">
                    <label htmlFor="password" className="label-login">Password</label>
                    <div className="password-container-login">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            id="password"
                            name="password"
                            placeholder="********"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="input-field-login"
                        />
                        <button 
                            type="button"
                            className="eye-icon-login"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                            {passwordVisible ? <EyeOff size={24} /> : <Eye size={24} />}
                        </button>
                    </div>
                </div>
                <div className="footer-container-login">
                <button type="submit" className="login-btn-login">
                    Login
                </button>
                <p className="footer-text-login">
                    <a href="/forgot-password" className="forgot-password-link-login">Forgot Password</a><br />
                    Already have an account? <a href="/register" className="sign-in-link-login">Sign Up</a>
                </p>
            </div>
            </form>
        </div>
      </div>
    );
};

export default Login;
