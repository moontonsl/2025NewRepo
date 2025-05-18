import React from 'react';

const Step1BasicDetails = ({ formData, handleInputChange, handleSubmit }) => {
    return (
            <div className="form-container-register">
                <h1 className="title-register">CREATE MSL ACCOUNT</h1>
                <h2 className="subtitle-register">BASIC DETAILS</h2>

                <form className="form-register" onSubmit={handleSubmit}>

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
                            <label htmlFor="suffix" className="label-register">
                                Suffix<span className="required"> *</span>
                            </label>
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
                        <div className="input-group-register right-side-register">
                            <label htmlFor="email" className="label-register">Email Address<span className="required"> *</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="input-field-register"
                                placeholder="e.g. crislbarra@gmail.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row-register">
                        <div className="input-group-register left-side-register">
                            <label htmlFor="birthday" className="label-register">Birthday<span className="required"> *</span></label>
                            <input
                                type="date"
                                id="birthday"
                                name="birthday"
                                value={formData.birthday}
                                onChange={(e) => {
                                    handleInputChange(e);
                                    const birthDate = new Date(e.target.value);
                                    const today = new Date();
                                    const age = today.getFullYear() - birthDate.getFullYear();
                                    const monthDiff = today.getMonth() - birthDate.getMonth();
                                    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                                        formData.age = age - 1; // Adjust age if the birthday hasn't occurred yet this year
                                    } else {
                                        formData.age = age;
                                    }
                                }}
                                className="input-field-register"
                                required
                            />
                        </div>
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
                    </div>

                    <div className="form-row-register">
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
                        <div className="input-group-register right-side-register">
                            <label htmlFor="contactNo" className="label-register">Contact No.<span className="required"> *</span></label>
                            <input
                                type="text"
                                id="contactNo"
                                name="contactNo"
                                value={formData.contactNo}
                                onChange={handleInputChange}
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

                </form>
            </div>
    );
};

export default Step1BasicDetails;
