import React from 'react';
import { useForm } from 'react-hook-form';

const ProfessionalDetails = ({ nextStep, prevStep, saveData }) => {
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = (data) => {
        saveData(data);
        nextStep();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setValue('resume', file);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Professional Details</h2>
            <input {...register('experience')} placeholder="Years of Experience" required />
            <input {...register('skills')} placeholder="Skills" required />
            <input type="file" onChange={handleFileChange} required />
            <button type="button" onClick={prevStep}>Back</button>
            <button type="submit">Next</button>
        </form>
    );
};

export default ProfessionalDetails;
