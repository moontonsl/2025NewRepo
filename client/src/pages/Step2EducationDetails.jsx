import { useState } from "react";

const universityData = {
    "University of the Philippines": { island: "Luzon", region: "NCR" },
    "University of San Carlos": { island: "Visayas", region: "Region VII" },
    "Ateneo de Davao University": { island: "Mindanao", region: "Region XI" },
    // Add more universities and their corresponding island and region here
};

const Step2EducationDetails = ({ formData, handleInputChange, handleSubmit }) => {
    const [localFormData, setLocalFormData] = useState(formData);

    const handleUniversityChange = (e) => {
        const { value } = e.target;
        handleInputChange(e); // Update the parent form data
        setLocalFormData((prevData) => {
            const updatedData = { ...prevData, university: value };

            // Check if the university exists in the mapping
            if (universityData[value]) {
                updatedData.island = universityData[value].island;
                updatedData.region = universityData[value].region;
            } else {
                updatedData.island = "";
                updatedData.region = "";
            }

            return updatedData;
        });
    };

    return (
        <>
             <div className="form-container-register">
                <h1 className="title-register">CREATE MSL ACCOUNT</h1>
                <h2 className="subtitle-register">SCHOOL DETAILS</h2>
         
                <form className="form-register" onSubmit={handleSubmit}>
                    <div className="form-row-register">
                        <div className="input-group-register left-side-register">
                            <label htmlFor="yearLevel" className="label-register">Year Level<span className="required"> *</span></label>
                            <select
                                id="yearLevel"
                                name="yearLevel"
                                value={localFormData.yearLevel}
                                onChange={handleInputChange}
                                className="input-field-register year-level-select"
                                required
                            >
                                <option value="">Select Year Level</option>
                                <option value="Grade 11 SHS">Grade 11 SHS</option>
                                <option value="Grade 12 SHS">Grade 12 SHS</option>
                                <option value="Freshmen (1st Yr)">Freshmen (1st Yr)</option>
                                <option value="Sophomore (2nd Yr)">Sophomore (2nd Yr)</option>
                                <option value="Junior (3rd Yr)">Junior (3rd Yr)</option>
                                <option value="Senior (4th Yr Up)">Senior (4th Yr Up)</option>
                                <option value="Alumni">Alumni</option>
                                <option value="Masters">Masters</option>
                                <option value="Doctorate">Doctorate</option>
                            </select>
                        </div>
                        <div className="input-group-register right-side-register">
                            <label htmlFor="university" className="label-register">University / College / Institute<span className="required"> *</span></label>
                            <input
                                type="text"
                                id="university"
                                name="university"
                                value={localFormData.university}
                                onChange={handleUniversityChange}
                                className="input-field-register"
                                placeholder="e.g. University of XYZ"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row-register">
                        <div className="input-group-register left-side-register">
                            <label htmlFor="island" className="label-register">Island<span className="required"> *</span></label>
                            <input
                                type="text"
                                id="island"
                                name="island"
                                value={localFormData.island}
                                className="input-field-register"
                                readOnly
                            />
                        </div>
                        <div className="input-group-register right-side-register">
                            <label htmlFor="region" className="label-register">Region<span className="required"> *</span></label>
                            <input
                                type="text"
                                id="region"
                                name="region"
                                value={localFormData.region}
                                className="input-field-register"
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="form-row-register">
                        <div className="input-group-register left-side-register">
                            <label htmlFor="studentId" className="label-register">Student ID<span className="required"> *</span></label>
                            <input
                                type="text"
                                id="studentId"
                                name="studentId"
                                value={formData.studentId}
                                onChange={handleInputChange}
                                className="input-field-register"
                                placeholder="e.g. 12345678"
                                required
                            />
                        </div>
                        <div className="input-group-register right-side-register">
                            <label htmlFor="course" className="label-register">Course or Program<span className="required"> *</span></label>
                            <input
                                type="text"
                                id="course"
                                name="course"
                                value={formData.course}
                                onChange={handleInputChange}
                                className="input-field-register"
                                placeholder="e.g. BS Computer Science"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row-register">
                        <div className="input-group-register full-width-register">
                            <label htmlFor="proofOfEnrollment" className="label-register">
                                Proof of Enrolment / School ID with Validation<span className="required"> *</span>
                            </label>
                            <input
                                type="file"
                                id="proofOfEnrollment"
                                name="proofOfEnrollment"
                                onChange={handleInputChange}
                                className="input-field-register file-input"
                                required
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Step2EducationDetails;
