import { useState } from 'react';
import Step1BasicDetails from '@/pages/Accounts/components/Step1BasicDetails.jsx';
import Step2EducationDetails from '@/pages/Accounts/components/Step2EducationDetails.jsx';
import Step3GameDetails from '@/pages/Accounts/components/Step3GameDetails.jsx';
import Step4AccountCredentials from '@/pages/Accounts/components/Step4AccountCredentials.jsx';
import '../styles/register.css'; // Import the CSS file

const Register = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1 - Basic Details
        firstName: '', lastName: '', suffix: '', email: '', birthday: '', age: '', gender: '', contactNo: '', facebookLink: '',

        // Step 2 - Education Details
        yearLevel: '', university: '', island: '', region: '', studentId: '', course: '', proofOfEnrollment: null,

        // Step 3 - Game Details
        userId: '', serverId: '', ign: '', squadName: '', squadAbbreviation: '', currentRank: '', inGameRole: '', mainHero: '',

        // Step 4 - Credentials
        username: '', password: '', confirmPassword: '', captcha: ''
    });

    const handleNext = () => {
        if (currentStep < 4) setCurrentStep(prev => prev + 1);
    };

    const handlePrev = () => {
        if (currentStep > 1) setCurrentStep(prev => prev - 1);
    };

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', formData);
        // Add actual submission logic here
    };

    const stepComponents = {
        1: <Step1BasicDetails formData={formData} handleInputChange={handleInputChange} />,
        2: <Step2EducationDetails formData={formData} handleInputChange={handleInputChange} />,
        3: <Step3GameDetails formData={formData} handleInputChange={handleInputChange} />,
        4: <Step4AccountCredentials formData={formData} handleInputChange={handleInputChange} />
    };

    return (
        <div className="register-wrapper">
            <div className="register-container">
                <form onSubmit={handleSubmit} className="form-register">
                    {stepComponents[currentStep]}

                    <div className="navigation-buttons">
                        {currentStep > 1 && (
                            <button type="button" onClick={handlePrev} className="register-btn">
                                Prev
                            </button>
                        )}
                        {currentStep < 4 ? (
                            <button type="button" onClick={handleNext} className="register-btn">
                                Next
                            </button>
                        ) : (
                            <button type="submit" className="register-btn">
                                Submit
                            </button>
                        )}
                    </div>

                    {/* Footer text placed inside a div to center it */}
                    <div className="footer-container">
                        <p className="footer-text-login">Already have an account? <a href="/client/src/pages/Accounts/Login/Login" className="sign-in-link-login">Sign In</a>
                        </p>
                    </div>
                    <br></br>
                </form>
            </div>
        </div>
    );
};

export default Register;
