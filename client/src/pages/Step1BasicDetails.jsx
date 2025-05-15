import React from 'react';

const Step1BasicDetails = ({ formData, handleInputChange, handleSubmit, setErrorMessage }) => {
    const [localError, setLocalError] = React.useState('');

    const validateForm = () => {
        // Prioritize contact number validation first
        if (!/^09\d{9}$/.test(formData.contactNo)) {
            setLocalError('⚠️ Invalid number. Must be 11 digits and start with 09.');
            return false;
        }

        const requiredFields = [
            'firstName', 'lastName', 'gender',
            'birthday', 'age', 'contactNo', 'facebookLink'
        ];

        for (let field of requiredFields) {
            if (!formData[field] || formData[field].toString().trim() === '') {
                setLocalError('⚠️ Please fill in all the required fields.');
                return false;
            }
        }

        setLocalError('');
        return true;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            handleSubmit(e);
        }
    };

    return (
        <div className="form-container-register">
            <h1 className="title-register">CREATE MSL ACCOUNT</h1>
            <h2 className="subtitle-register">BASIC DETAILS</h2>

            <form className="form-register" onSubmit={handleFormSubmit}>
                <div className="form-row-register">
                    <div className="input-group-register left-side-register">
                        <label htmlFor="firstName" className="label-register">First Name<span className="required"> *</span></label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="input-field-register"
                            placeholder="e.g. Crisostomo"
                            required
                        />
                    </div>
                    <div className="input-group-register right-side-register">
                        <label htmlFor="lastName" className="label-register">Last Name<span className="required"> *</span></label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="input-field-register"
                            placeholder="e.g. Ibarra"
                            required
                        />
                    </div>
                </div>

                <div className="form-row-register">
                    <div className="input-group-register left-side-register">
                        <label htmlFor="suffix" className="label-register">Suffix<span className="required"> *</span></label>
                        <select
                            id="suffix"
                            name="suffix"
                            value={formData.suffix}
                            onChange={handleInputChange}
                            className="input-field-register suffix-select"
                            required
                        >
                            <option value=""></option>
                            <option value="Jr">Jr</option>
                            <option value="Sr">Sr</option>
                            <option value="II">II</option>
                            <option value="III">III</option>
                            <option value="IV">IV</option>
                        </select>
                    </div>
                    <div className="input-group-register left-side-register">
                        <label htmlFor="gender" className="label-register">Gender<span className="required"> *</span></label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="input-field-register gender-select"
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                    </div>
                </div>

                <div className="form-row-register">
                    <div className="input-group-register full-width-register">
                        <label htmlFor="birthday" className="label-register">Birthday<span className="required"> *</span></label>
                        <input
                            type="date"
                            id="birthday"
                            name="birthday"
                            max={new Date().toISOString().split("T")[0]} // 🛑 Prevent future dates
                            value={formData.birthday}
                            onChange={(e) => {
                                const inputDate = new Date(e.target.value);
                                const today = new Date();

                                // Remove time for accurate comparison
                                today.setHours(0, 0, 0, 0);
                                inputDate.setHours(0, 0, 0, 0);

                                if (inputDate > today) {
                                    setErrorMessage("⚠️ Future dates are not allowed. Please select a valid birthday.");
                                    return;
                                } else {
                                    setErrorMessage(""); // Clear if valid
                                }

                                handleInputChange(e);

                                // Calculate age
                                let age = today.getFullYear() - inputDate.getFullYear();
                                const monthDiff = today.getMonth() - inputDate.getMonth();
                                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < inputDate.getDate())) {
                                    age -= 1;
                                }

                                handleInputChange({ target: { name: 'age', value: age } });
                            }}
                            className={`input-field-register birthday ${!formData.birthday ? 'mobile-date-placeholder' : ''}`}
                            required
                        />
                    </div>
                </div>

                <div className="form-row-register">
                    <div className="input-group-register right-side-register">
                        <label htmlFor="age" className="label-register">Age<span className="required"> *</span></label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            className="input-field-register"
                            readOnly
                        />
                    </div>
                    <div className="input-group-register right-side-register">
                        <label htmlFor="contactNo" className="label-register">Contact No.<span className="required"> *</span></label>
                        <input
                            type="text"
                            id="contactNo"
                            name="contactNo"
                            value={formData.contactNo}
                            onChange={(e) => {
                                const contact = e.target.value;

                                // Only allow numeric input
                                if (/^\d*$/.test(contact) && contact.length <= 11) {
                                    handleInputChange(e);
                                }
                            }}
                            onBlur={(e) => {
                                const contact = e.target.value;
                                if (!/^09\d{9}$/.test(contact)) {
                                    setErrorMessage("⚠️ Invalid number. Must be 11 digits and start with 09.");
                                } else {
                                    setErrorMessage("");
                                }
                            }}
                            className="input-field-register"
                            placeholder="e.g. 09123456789"
                            required
                        />
                    </div>
                </div>

                <div className="form-row-register">
                    <div className="input-group-register full-width-register">
                        <label htmlFor="facebookLink" className="label-register">Facebook Profile Link<span className="required"> *</span></label>
                        <input
                            type="text"
                            id="facebookLink"
                            name="facebookLink"
                            value={formData.facebookLink}
                            onChange={handleInputChange}
                            className="input-field-register"
                            placeholder="e.g. http://facebook.com/username"
                            required
                        />
                    </div>
                </div>

                {localError && <p className="error-message">{localError}</p>}
            </form>
        </div>
    );
};

export default Step1BasicDetails;
