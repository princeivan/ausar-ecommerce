import React from 'react'
import AboutImage from '../../assets/image1.jpeg'
import profile from '../../assets/noavatar.png'
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { CiDollar } from "react-icons/ci";
import { FaTshirt, FaMobileAlt, FaBullhorn, FaBoxes, FaLightbulb } from "react-icons/fa";
import './about.css'


const services = [
  {
    icon: <FaTshirt className="text-4xl text-blue-600" />, 
    title: "Branding & Customization",
    description: "We specialize in branding bottles, cups, hats, and other merchandise to give your business or personal items a unique touch."
  },
  {
    icon: <FaMobileAlt className="text-4xl text-green-600" />, 
    title: "Electronics Sales",
    description: "We offer quality electronics, including iPhones, smart bulbs, and other essential gadgets at competitive prices."
  },
  {
    icon: <FaBullhorn className="text-4xl text-yellow-600" />, 
    title: "Corporate & Promotional Branding",
    description: "Boost your brand visibility with our customized promotional products tailored to meet your marketing needs."
  },
  {
    icon: <FaBoxes className="text-4xl text-red-600" />, 
    title: "Bulk Orders & Wholesale",
    description: "Need large quantities? We provide bulk branding services and wholesale electronics for businesses and events."
  },
  {
    icon: <FaLightbulb className="text-4xl text-purple-600" />, 
    title: "Creative Consultation",
    description: "Our team helps you choose the best branding strategies and product designs to make your brand stand out."
  }
];

const About = () => {
  return (
    <section className='about-container'>
          <h4>Our Story</h4>
          <div className='our-story'>

            <p>Founded in 2022, Ausar Creative is a dynamic branding and electronics company specializing in customized merchandise and tech solutions. We offer high-quality branding services for bottles, cups, hats, and more, helping businesses and individuals create unique, personalized products. In addition, we provide a range of electronics, including iPhones, smart bulbs, and other essential gadgets, ensuring our customers get both style and functionality in one place. At Ausar Creative, we combine creativity and innovation to bring your brand to life while delivering top-tier electronic products.</p>
            <img src={AboutImage} alt="" />

          </div>
          <section className="services-section">
      <div className="container">
        <h2 className="about-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-container">{service.icon}</div>
              <h3 className="about-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      </section>

    
          <h2 className='about-title'> Our Team Members </h2>
          <div className='our-team'> 
            <div className='team-info'>
              <img src={profile} alt="" />
              <p>Ernest EKaji</p>
              <p>Founder & CEO</p>
              <div className="team-icons"> 
            </div>
            </div>
            <div className='team-info'>
              <img src={profile} alt="" />
              <p>James kariuki</p>
              <p>Managing Director</p>
              <div className="team-icons"> 
            </div>
            </div>
            <div className='team-info'>
              <img src={profile} alt="" />
              <p>Ivan Rono</p>
              <p>Chief Technology Officer</p>
              <div className="team-icons"> 
            </div>
            </div>
          </div>

    </section>
  )
}

export default About