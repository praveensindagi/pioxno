import React, { useState } from 'react';
import { Container, Typography, Button, TextField, Box, Grid, Paper, Dialog, DialogTitle, DialogActions } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CategoryIcon from '@mui/icons-material/Category';
import ExperienceIcon from '@mui/icons-material/AccessTime';
import { styled } from '@mui/system';
import emailjs from 'emailjs-com';

const Banner = styled(Paper)({
    padding: '20px',
    marginBottom: '20px',
    marginTop:'60px',
    background: '#e9ecef',
    color:'#000000',
    textAlign: 'center',
});

const JobApplicationPage = () => {
    const jobDetails = {
        title: 'Software Developer Intern',
        category: 'Engineering',
        location: 'Remote',
        experience: '0-1 years',
        overview: 'We are seeking a motivated and talented Software Developer Intern with a focus on the MERN stack (MongoDB, Express.js, React.js, Node.js) to join our dynamic team. As an intern at Pioxno, you will gain hands-on experience in developing scalable web applications and contribute to exciting projects that drive our business forward.',
        responsibilities: [
            'Collaborate with senior developers to design, develop, and maintain web applications using the MERN stack.',
            'Write clean, maintainable, and efficient code.',
            'Participate in code reviews and contribute to team learning and improvement.',
            'Assist in troubleshooting, debugging, and optimizing performance.',
            'Stay up-to-date with the latest industry trends and technologies to ensure our solutions are cutting-edge.',
            'Develop and maintain web applications',
            'Collaborate with cross-functional teams',
            'Write clean and efficient code',
        ],
        qualifications: [
            'Bachelor’s degree in Computer Science or related field',
            'Proficiency in JavaScript, React, and Node.js',
            'Basic understanding of the MERN stack (MongoDB, Express.js, React.js, Node.js).',
            'Knowledge of JavaScript, HTML, CSS, and related web technologies.',
            'Familiarity with version control systems (e.g., Git).',
            'Strong problem-solving skills and attention to detail.',
            'Ability to work both independently and collaboratively in a team environment.',
            'Excellent communication skills and a willingness to learn.',
        ],
        perks: [
            'Competitive salary',
            'Health insurance',
            'Flexible working hours',
        ],
        applyInstructions: 'To apply for a position at Pioxno, please email your resume and cover letter to info@pioxno.com. Use the subject line: Application for [Position Name] – [Your Full Name]. Be sure to mention the position youre applying for, introduce yourself briefly, and highlight your relevant experience and skills. Once we receive your application, our team will review it, and if selected, we’ll reach out to you for the next steps in the hiring process. This keeps everything concise in one paragraph.',
    };

    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        resume: null, // Handle file upload
        coverLetter: '',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'resume') {
            // Handle file input separately
            setForm({
                ...form,
                resume: files[0], // Store the file object
            });
        } else {
            setForm({
                ...form,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('firstName', form.firstName);
        formData.append('lastName', form.lastName);
        formData.append('email', form.email);
        formData.append('phone', form.phone);
        formData.append('resume', form.resume); // Attach the resume file
        formData.append('coverLetter', form.coverLetter);

        emailjs.sendForm(
            'service_z4kzmxq', // Replace with your EmailJS service ID
            'template_or1basc', // Replace with your EmailJS template ID
            formData,           // Send the form data with the file
            'Q-WUw-VvLz0CeTkpm' // Replace with your EmailJS user ID
        )
        .then((result) => {
            console.log(result.text);
            setOpen(true);
        }, (error) => {
            console.log(error.text);
        });

        // Reset the form
        setForm({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            resume: null, // Reset resume to null
            coverLetter: '',
        });
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {/* Banner Section */}
            <Banner elevation={1} sx={{ padding: 10 }}>
                <Typography variant="h4" component="h1" gutterBottom>{jobDetails.title}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                    <Typography variant="body1">
                        <CategoryIcon fontSize="small" /> {jobDetails.category}
                    </Typography>
                    <Typography variant="body1">
                        <LocationOnIcon fontSize="small" /> {jobDetails.location}
                    </Typography>
                    <Typography variant="body1">
                        <ExperienceIcon fontSize="small" /> {jobDetails.experience}
                    </Typography>
                </Box>
            </Banner>

            <Container maxWidth="md">
                {/* Position Overview Section */}
                <Typography variant="h5" sx={{ marginTop: 2 }}>About Pioxno</Typography>
                <Typography variant="body1" sx={{ marginTop: 1, fontSize:'12px' }}>
                    Pioxno is a fast-growing foodtech startup with multibrand outlets, customer-focused and rewarding loyal customers with crazy perks. We are passionate about work culture, supporting and implementing high standards of working culture, and ensuring quality time with employees.
                </Typography>

                <Typography variant="h5" sx={{ marginTop: 2 }}>Position Overview</Typography>
                <Typography variant="body1" sx={{ marginTop: 1, fontSize:'12px' }}>
                    {jobDetails.overview}
                </Typography>

                {/* Key Responsibilities Section */}
                <Typography variant="h5" sx={{ marginTop: 2}}>Key Responsibilities</Typography>
                <ul>
                    {jobDetails.responsibilities.map((resp, index) => (
                        <li key={index}>
                            <Typography variant="body1" sx={{ marginTop: 1, fontSize:'12px' }}>{resp}</Typography>
                        </li>
                    ))}
                </ul>

                {/* Qualifications Section */}
                <Typography variant="h5" sx={{ marginTop: 2 }}>Qualifications</Typography>
                <ul>
                    {jobDetails.qualifications.map((qual, index) => (
                        <li key={index}>
                            <Typography variant="body1" sx={{ marginTop: 1, fontSize:'12px' }}>{qual}</Typography>
                        </li>
                    ))}
                </ul>

                {/* Perks and Benefits Section */}
                <Typography variant="h5" sx={{ marginTop: 2 }}>Perks and Benefits</Typography>
                <ul>
                    {jobDetails.perks.map((perk, index) => (
                        <li key={index}>
                            <Typography variant="body1" sx={{ marginTop: 1, fontSize:'12px' }}>{perk}</Typography>
                        </li>
                    ))}
                </ul>

                {/* How to Apply Section */}
                <Typography variant="h5" sx={{ marginTop: 4 }}>How to Apply</Typography>
                <Typography variant="body1" sx={{ marginTop: 2, fontSize:'12px' }}>{jobDetails.applyInstructions}</Typography>

                {/* Application Form Section 
                <Box sx={{ marginTop: 4 }}>
                    <Typography variant="h4">Apply for this job</Typography>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Grid container spacing={2} sx={{ marginTop: 2 }}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="First Name"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="outlined"
                                    value={form.firstName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    fullWidth
                                    autoComplete="family-name"
                                    variant="outlined"
                                    value={form.lastName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Email Address"
                                    fullWidth
                                    autoComplete="email"
                                    variant="outlined"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="phone"
                                    name="phone"
                                    label="Phone Number"
                                    fullWidth
                                    autoComplete="tel"
                                    variant="outlined"
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="resume"
                                    name="resume"
                                    label="Resume"
                                    type="file"
                                    fullWidth
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{ accept: '.pdf,.doc,.docx' }} // Accept PDF, DOC, and DOCX files
                                    onChange={handleChange} // Handle file upload
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="coverLetter"
                                    name="coverLetter"
                                    label="Cover Letter"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    variant="outlined"
                                    value={form.coverLetter}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit"  variant="contained" color="primary" fullWidth>
                                    Submit Application
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>*/}
            </Container>

            {/* Success Dialog 
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Application Submitted</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog> */}
        </div>
    );
};

export default JobApplicationPage;
