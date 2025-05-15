import React, { useState } from 'react';
import Step1BasicDetails from './Step1BasicDetails';
import Step2EducationDetails from './Step2EducationDetails';
import Step3GameDetails from './Step3GameDetails';
import Step4AccountCredentials from './Step4AccountCredentials';
import '../styles/register.css'; // Import the CSS file

const Register = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1 - Basic Details
        firstName: '', lastName: '', suffix: '', birthday: '', age: '', gender: '', contactNo: '', facebookLink: '',
        // Step 2 - Education Details
        yearLevel: '', university: '', island: '', region: '', studentId: '', course: '', proofOfEnrollment: null,
        // Step 3 - Game Details
        userId: '', serverId: '', ign: '', squadName: '', squadAbbreviation: '', currentRank: '', inGameRole: '', mainHero: '',
        // Step 4 - Credentials
        username: '', password: '', confirmPassword: '', email: '', captcha: ''
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleNext = () => {
        // First, validate the current step before moving to the next one
        if (!isFormValid()) {
            setErrorMessage("⚠️ Please fill in all the required fields.");
            return; // Do not move to next step
        }
        setErrorMessage(""); // Clear error message
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
    };

    const isFormValid = () => {
        const currentStepData = formData;
        switch (currentStep) {
            case 1:
                return currentStepData.firstName && currentStepData.lastName && currentStepData.suffix &&
                    currentStepData.gender && currentStepData.birthday && currentStepData.contactNo &&
                    currentStepData.facebookLink;
            case 2:
                return currentStepData.yearLevel && currentStepData.university && currentStepData.island &&
                    currentStepData.region && currentStepData.studentId && currentStepData.course &&
                    currentStepData.proofOfEnrollment;
            case 3:
                return currentStepData.userId && currentStepData.serverId && currentStepData.ign &&
                    currentStepData.squadName && currentStepData.squadAbbreviation && currentStepData.currentRank &&
                    currentStepData.inGameRole && currentStepData.mainHero;
            case 4:
                return currentStepData.username && currentStepData.password && currentStepData.confirmPassword &&
                    currentStepData.captcha;
            default:
                return false;
        }
    };

    const stepComponents = {
        1: <Step1BasicDetails formData={formData} handleInputChange={handleInputChange} setErrorMessage={setErrorMessage} />,
        2: <Step2EducationDetails formData={formData} handleInputChange={handleInputChange} setErrorMessage={setErrorMessage} />,
        3: <Step3GameDetails formData={formData} handleInputChange={handleInputChange} setErrorMessage={setErrorMessage} />,
        4: <Step4AccountCredentials formData={formData} handleInputChange={handleInputChange} setErrorMessage={setErrorMessage} />
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} className="form-register">
                {stepComponents[currentStep]}

                {errorMessage && (
                    <div className="error-message-box">
                        <p>{errorMessage}</p>
                    </div>
                )}

                <div className="navigation-buttons">
                    {currentStep > 1 && (
                        <button type="button" onClick={handlePrev} className="register-btn">
                            Prev
                        </button>
                    )}
                    {currentStep < 4 ? (
                        <button
                            type="button"
                            onClick={handleNext}
                            className="register-btn"
                            disabled={!isFormValid()}
                        >
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
                    <p className="footer-text-login">
                        Already have an account? <a href="/login" className="sign-in-link-login">Sign In</a>
                    </p>
                </div>
                <br />
            </form>
        </div>
    );
};


export default Register;
