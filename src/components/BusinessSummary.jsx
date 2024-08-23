import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VerifiedIcon from '@mui/icons-material/Verified';
import PeopleIcon from '@mui/icons-material/People';
import CommunityIcon from '@mui/icons-material/Groups';

const Section = styled('div')({
    marginBottom: '40px',
});

const Headline = styled(Typography)({
    color: 'green',
    marginBottom: '20px',
});

const CoreValueItem = styled(Paper)({
    padding: '20px',
    textAlign: 'center',
    height: '100%',
});

const BusinessSummary = () => {
    const coreValues = [
        {
            title: 'Customer-Centricity',
            description: 'Our customers are the cornerstone of our business. We prioritize their needs, seek their feedback, and strive to exceed their expectations with every meal we serve.',
            icon: <EmojiPeopleIcon fontSize="large" />,
        },
        {
            title: 'Innovation',
            description: 'Innovation is at the heart of everything we do. We continually explore new ideas, technologies, and culinary trends to stay ahead of the curve and offer unique, exciting dining experiences.',
            icon: <LightbulbIcon fontSize="large" />,
        },
        {
            title: 'Quality',
            description: 'Quality is our top priority. We maintain rigorous standards for taste, nutrition, and hygiene, ensuring that every dish we serve meets our high expectations.',
            icon: <VerifiedIcon fontSize="large" />,
        },
        {
            title: 'Sustainability',
            description: 'We are committed to sustainable practices that minimize our environmental footprint. From responsibly sourced ingredients to eco-friendly packaging, we make choices that benefit both our customers and the planet.',
          
        },
        {
            title: 'Employee Well-being',
            description: 'Our employees are our greatest asset. We foster a positive and inclusive work culture, support professional development, and promote a healthy work-life balance to ensure our team members thrive.',
            icon: <PeopleIcon fontSize="large" />,
        },
        {
            title: 'Community Engagement',
            description: 'We believe in giving back to the communities we serve. By participating in local initiatives, supporting charitable causes, and fostering community relationships, we aim to make a positive impact beyond our business.',
            icon: <CommunityIcon fontSize="large" />,
        },
    ];

    return (
        <Container sx={{ paddingY: 4 }}>
            {/* Executive Summary Section */}
           

            {/* Core Values Section */}
      

            {/* Strategic Goals Section */}
            <Section>
                <Headline variant="h4" component="h2">Strategic Goals</Headline>
                <Typography variant="body1">
                    <ul>
                        <li>Market Expansion: We aim to expand our presence in new markets, leveraging our strong brand portfolio and delivery partnerships to reach more customers.</li>
                        <li>Operational Excellence: We focus on optimizing our operations, from supply chain management to customer service, ensuring efficiency and superior quality at every touchpoint.</li>
                        <li>Technological Advancements: We invest in the latest technologies to enhance our ordering, delivery, and customer engagement processes, providing a seamless and convenient experience for our customers.</li>
                        <li>Brand Differentiation: We continuously innovate our menu offerings and marketing strategies to differentiate our brands, creating a unique value proposition that sets us apart from competitors.</li>
                    </ul>
                </Typography>
            </Section>

            {/* Business Model Section */}
            <Section>
                <Headline variant="h4" component="h2">Business Model</Headline>
                <Typography variant="body1">
                    <ul>
                        <li><strong>Revenue Streams:</strong> Direct Sales, Delivery Platforms, Loyalty Programs.</li>
                        <li><strong>Cost Structure:</strong> Operational Costs, Supply Chain, Technology.</li>
                        <li><strong>Key Partners:</strong> Suppliers, Delivery Platforms, Technology Providers.</li>
                    </ul>
                </Typography>
            </Section>

            {/* Marketing Strategy Section */}
            <Section>
                <Headline variant="h4" component="h2">Marketing Strategy</Headline>
                <Typography variant="body1">
                    <ul>
                        <li><strong>Brand Positioning:</strong> Pioxno is positioned as a high-quality, innovative foodtech brand that offers a diverse range of cuisines to cater to various tastes and dietary preferences.</li>
                        <li><strong>Target Market:</strong> Urban professionals and health-conscious individuals (Primary), Families and food enthusiasts (Secondary).</li>
                        <li><strong>Marketing Channels:</strong> Digital Marketing, Partnerships, Customer Engagement.</li>
                    </ul>
                </Typography>
            </Section>

            {/* Financial Projections Section */}
            <Section>
                <Headline variant="h4" component="h2">Financial Projections</Headline>
                <Typography variant="body1">
                    <ul>
                        <li><strong>Revenue Forecast:</strong> Year 1: $X million, Year 2: $Y million, Year 3: $Z million.</li>
                        <li><strong>Expense Forecast:</strong> Operational Costs: $A million, Marketing & Advertising: $B million, Technology Investments: $C million.</li>
                        <li><strong>Profitability:</strong> Year 1: $D million, Year 2: $E million, Year 3: $F million.</li>
                    </ul>
                </Typography>
            </Section>

            {/* Management Team Section */}
            <Section>
                <Headline variant="h4" component="h2">Management Team</Headline>
                <Typography variant="body1">
                    <ul>
                        <li><strong>Founder & CEO:</strong> [Name] - Background in foodtech and entrepreneurship. Proven track record of leading successful ventures.</li>
                        <li><strong>CTO:</strong> [Name] - Expertise in technology and innovation. Experience in developing scalable tech solutions.</li>
                        <li><strong>COO:</strong> [Name] - Extensive experience in operations and supply chain management. Strong leadership and organizational skills.</li>
                        <li><strong>CMO:</strong> [Name] - Skilled in digital marketing and brand strategy. Success in driving customer engagement and growth.</li>
                    </ul>
                </Typography>
            </Section>

            {/* Conclusion Section */}
            <Section>
                <Headline variant="h4" component="h2">Conclusion</Headline>
                <Typography variant="body1">
                    At Pioxno, we are committed to redefining the dining experience through innovation, quality, and exceptional customer service. Our strategic goals, robust business model, and dedicated team position us for sustained growth and success in the foodtech industry. Join us as we revolutionize the way people enjoy food.
                </Typography>
            </Section>

            {/* Contact Information Section */}
            <Section>
                <Headline variant="h4" component="h2">Contact Information</Headline>
                <Typography variant="body1">
                    Pioxno
                    <br />
                    [Address]
                    <br />
                    [Email]
                    <br />
                    [Phone]
                    <br />
                    [Website]
                </Typography>
            </Section>
        </Container>
    );
};

export default BusinessSummary;
