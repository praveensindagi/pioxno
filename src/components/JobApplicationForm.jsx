import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import ProfessionalDetails from './ProfessionalDetails';
import ReviewSubmit from './ReviewSubmit';
import './job.css';
const JobApplicationForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
    const saveData = (data) => setFormData({ ...formData, ...data });

    switch (step) {
        case 1:
            return <PersonalInfo nextStep={nextStep} saveData={saveData} />;
        case 2:
            return <ProfessionalDetails nextStep={nextStep} prevStep={prevStep} saveData={saveData} />;
        case 3:
            return <ReviewSubmit formData={formData} prevStep={prevStep} />;
        default:
            return <div>Form Completed</div>;
    }
};

export default JobApplicationForm;
