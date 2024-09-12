import React from 'react';
import emailjs from 'emailjs-com';

const ReviewSubmit = ({ formData, prevStep }) => {

    const sendEmail = () => {
        const formDataObj = new FormData();

        // Append text fields to FormData
        for (const [key, value] of Object.entries(formData)) {
            formDataObj.append(key, value);
        }

        // Send email with emailjs
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formDataObj, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                alert('Application Submitted!');
            }, (error) => {
                console.log(error.text);
                alert('An error occurred, please try again.');
            });
    };

    return (
        <div>
            <h2>Review Your Information</h2>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
            <button onClick={prevStep}>Back</button>
            <button onClick={sendEmail}>Submit</button>
        </div>
    );
};

export default ReviewSubmit;
