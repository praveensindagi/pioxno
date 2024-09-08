import React from 'react';
import { Container, Typography, TextField, Grid, Card, CardContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BlogCard from './BlogCard'; // You can create a separate BlogCard component to display individual blogs
import { Helmet } from 'react-helmet';

const blogPosts = [
  {
    title: "Pioxno Launches New Website: A Hub for Food Enthusiasts and Loyal Customers", 
    description:"Welcome to the New Pioxno Experience We are thrilled to announce the launch of our brand-new website, designed to bring the Pioxno experience to life online. As a premier foodtech startup, Pioxno has always been committed to delivering diverse, high-quality cuisines through our multi-brand outlets. Now, we're taking that commitment a step further with a website that not only showcases our offerings but also introduces exciting new features to enhance your experience with us. Explore Our Diverse Range of Brands Our website is a one-stop destination for all things Pioxno. Whether you’re craving Italian, Indian, or high-protein meals, you can explore our flagship brands and discover the perfect dish to satisfy your taste buds. Each brand has its own dedicated section, making it easy for you to navigate through our diverse menu and learn more about the unique flavors we offer. Introducing the Pioxno Customer Loyalty Program At Pioxno, we value our customers and their loyalty. That’s why we’re excited to introduce our Customer Loyalty Program. Every time you make a purchase, you earn Pioxno points that can be redeemed for discounts, exclusive merchandise, or even special offers. It’s our way of saying thank you for being a part of the Pioxno family. How It Works: Earn Points: With every purchase, you accumulate Pioxno points. Redeem Rewards: Use your points to get discounts on your favorite meals, or choose from a range of exclusive Pioxno merchandise. Enjoy Perks: As a loyal customer, you’ll have access to special offers, early access to new products, and more. Business Insights: Pioxno's Growth and Innovation Since our inception, Pioxno has been on a mission to revolutionize the food industry. Our website is more than just a digital storefront; it’s a reflection of our growth and the innovative spirit that drives us forward. We’ve integrated advanced technology to ensure a seamless and user-friendly experience, making it easier than ever to order your favorite meals, join our loyalty program, and stay updated with the latest from Pioxno. Our commitment to quality, sustainability, and customer satisfaction remains at the core of everything we do. As we continue to expand our reach, we are also exploring new markets and developing partnerships that will allow us to bring the Pioxno experience to more people. Join Us on This Journey We invite you to explore our new website and see all that Pioxno has to offer. Whether you’re a first-time visitor or a long-time customer, there’s something for everyone. Don’t forget to sign up for our loyalty program to start earning points and enjoy exclusive perks. Thank you for being a part of the Pioxno journey. We look forward to serving you better and continuing to redefine the dining experience, one delicious meal at a time." },
  
    { 
        title: "Unlocking the Ultimate Dining Experience: How the Pioxno Loyalty Program Transforms Every Bite into Rewards", 
         description: "a new way to elevate your dining experience and maximize the benefits of every purchase. At Pioxno, we’re dedicated to delivering not just exceptional food but also incredible value to our loyal customers. With the Pioxno Loyalty Program, every time you enjoy your favorite dishes—whether it's a savory Italian pasta, a flavorful Indian curry, or a protein-packed meal—you’ll earn Pioxno Points that can be redeemed for a variety of rewards. These rewards include exclusive merchandise, special discounts on future orders, and access to members-only offers and events. The Pioxno Loyalty Program is designed to help you save more and enjoy more with every meal. By accumulating points, you can unlock discounts or even get free items, making every order an opportunity to profit. Plus, as a loyalty program member, you’ll gain access to limited-time promotions, early-bird deals, and other exclusive perks that keep you ahead of the curve. Joining the Pioxno Loyalty Program is easy and free—just sign up on our website and start earning points with every order, whether you’re dining through Zomato, Swiggy, or directly from our platform. At Pioxno, we believe in rewarding loyalty, and this program is our way of showing appreciation for our customers. Experience the ultimate in dining rewards with the Pioxno Loyalty Program—where every bite brings you closer to something special. Don’t miss out on the chance to make the most of your meals; join today and start reaping the rewards!"
     },
  { 
    title: "Boost Your Restaurant's Growth: Essential Strategies for Mastering Online Presence",
    description: "In the digital age, establishing a robust online presence is essential for restaurant brands aiming to thrive and grow. A compelling online brand identity starts with a visually appealing and user-friendly website that reflects your restaurant’s unique personality and values. Optimizing your site for search engines through effective SEO strategies—such as incorporating relevant keywords, focusing on local SEO, and regularly updating with engaging content—ensures higher visibility and attracts potential customers. Social media platforms are invaluable for connecting with your audience, so maintaining consistent posting, engaging directly with customers, and running promotions can significantly boost brand loyalty and reach. Additionally, leveraging online ordering and delivery platforms like Zomato and Swiggy can increase your restaurant’s exposure and sales, while an efficient online ordering system on your own site enhances customer convenience. Implementing a well-designed loyalty program encourages repeat business and strengthens customer retention by offering rewards and exclusive benefits. Regularly monitoring and analyzing online performance with tools like Google Analytics and social media insights allows you to refine your strategies and make data-driven decisions. Investing in targeted online advertising further amplifies your reach, driving traffic to your restaurant’s website and attracting new patrons. By embracing these comprehensive digital strategies, restaurant brands can effectively enhance their online presence, engage with customers, and achieve substantial growth in a competitive market." 
},
{
    title:"Understanding FSSAI Licenses for Cloud Kitchens: Requirements and How to Obtain Them",
    description:"<p>As the cloud kitchen model gains popularity in the food industry, ensuring compliance with food safety regulations becomes crucial. The Food Safety and Standards Authority of India (FSSAI) oversees food safety and hygiene standards across the country. For cloud kitchens—businesses that operate exclusively online and do not have a physical dining area—obtaining the appropriate FSSAI licenses is essential to operate legally and ensure consumer trust.</p> <p>FSSAI licenses are mandatory for any food business in India, including cloud kitchens. These licenses ensure that food safety practices are followed, and consumers receive safe, hygienic, and quality food. For cloud kitchens, which often cater to a wide audience through online platforms, maintaining high standards of food safety is vital to build and sustain a positive reputation.</p>"
}
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
     <Helmet>
      <title>Pioxno Blog | Insights on Food, Lifestyle, and Innovation</title>
      <meta name="description" content="Dive into the Pioxno Blog for the latest insights on food trends, lifestyle tips, and innovations in the foodtech industry. Stay informed and inspired with our expert articles." />
      <meta name="keywords" content="Pioxno blog, food trends, lifestyle tips, foodtech innovations, expert articles, food industry insights" />
    </Helmet>
  
    <div>
      {/* Banner Section */}
      <div style={{ background: 'linear-gradient(to right, #ffffff, #fcfcfc)', padding: '50px 0' ,marginTop:'120px'}}>
        <Container>
          <Typography sx={{fontSize:'36',fontWeight:'600'}} variant="h1" color="#333" align="center">
            Pioxno Blog
          </Typography>
          <Typography variant="h5" color="#333" align="center" style={{ marginTop: '10px' }}>
            Discover the latest updates, Bussiness topics, and insights.
          </Typography>
        </Container>
      </div>

      {/* Search Bar */}
      <Container style={{ marginTop: '30px' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search topics..."
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
          onChange={handleSearch}
          value={searchTerm}
        />
      </Container>

      {/* Blog Posts Grid */}
      <Container style={{ marginTop: '30px' }}>
        <Grid container spacing={3}>
          {filteredPosts.map((post, index) => (
            <Grid item xs={12} md={12} key={index}>
              <BlogCard title={post.title} description={post.description} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
    </>
  );
};

export default BlogPage;
