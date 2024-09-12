import React from 'react';
import { useForm } from 'react-hook-form';

const PersonalInfo = ({ nextStep, saveData }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        saveData(data);
        nextStep();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Personal Information</h2>
            <input {...register('name')} placeholder="Full Name" required />
            <input {...register('email')} type="email" placeholder="Email" required />
            <input {...register('phone')} type="tel" placeholder="Phone Number" required />
            <button type="submit">Next</button>
        </form>
    );
};

export default PersonalInfo;
