import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.clientHeight;
        if (window.scrollY >= top - height / 3) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Green color palette
  const colors = {
    primary: '#2E7D32',
    secondary: '#388E3C',
    accent: '#8BC34A',
    background: '#E8F5E9',
    text: '#1B5E20'
  };

  const experiences = [
    {
      company: "AskEVA",
      role: "Human Resources Generalist",
      duration: "Jan 2023 - Present",
      description: "Leading HR operations with focus on HRIS implementation and workforce analytics."
    },
    {
      company: "Sri Srinivasa Enterprises",
      role: "Sales And Marketing Associate",
      duration: "May 2020 - Jun 2023",
      description: "Developed strategic sales methodologies increasing revenue by 35% YoY."
    }
  ];

  const educations = [
    {
      institution: "PSNA College of Engineering and Technology",
      degree: "B.E. Mechanical Engineering",
      duration: "2018 - 2022",
      grade: "Grade A"
    },
    {
      institution: "TVS Matriculation HSS",
      degree: "Computer Science",
      duration: "2016 - 2018",
      grade: "HSC"
    }
  ];

  const skills = [
    "HR Analytics", "HRIS Management", "SQL", 
    "Data Visualization", "Employee Relations",
    "Strategic Planning", "HR Consulting", "CRM"
  ];

  return (
    <div className="container" style={{ background: colors.background }}>
      <nav className="nav" style={{ background: colors.primary }}>
        {['home', 'about', 'experience', 'education', 'skills', 'contact'].map(section => (
          <a
            key={section}
            href={`#${section}`}
            className={`nav-link ${activeSection === section ? 'active' : ''}`}
            style={{ color: activeSection === section ? colors.accent : '#fff' }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <section id="home" className={`section hero ${loaded ? 'fade-in' : ''}`}>
        <div className="hero-content">
          <img 
            src="src\assets\udhay.jpeg" // Replace with your photo path
            alt="Udhayakumar"
            className="profile-photo"
          />
          <h1 style={{ color: colors.text }}>Udhayakumar Ravichandran</h1>
          <h2 style={{ color: colors.secondary }}>HR Analytics Enthusiast</h2>
          <p className="location" style={{ color: colors.text }}>Madurai, Tamil Nadu, India</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section slide-in-left">
        <div className="content-box" style={{ background: '#fff' }}>
          <h2 style={{ color: colors.primary }}>About Me</h2>
          <p className="about-text" style={{ color: colors.text }}>
            Bridging technical expertise with HR innovation, I bring a unique perspective from 
            my background in Mechanical Engineering and Computer Science. Certified in SQL and 
            Data Analytics, I specialize in transforming HR operations through data-driven insights.
          </p>
          <div className="certifications">
            <a href="https://github.com/Udhaya7132/OIBSIP.git" className="cert-badge" style={{ background: colors.accent }}>
              GitHub Portfolio
            </a>
            <span className="cert-badge" style={{ background: colors.secondary }}>
              SQL Intermediate Certified
            </span>
            <span className="cert-badge" style={{ background: colors.primary }}>
              Data Analytics Certified
            </span>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section slide-in-right">
        <div className="content-box" style={{ background: '#fff' }}>
          <h2 style={{ color: colors.primary }}>Professional Journey</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-card" style={{ borderLeft: `4px solid ${colors.accent}` }}>
              <h3 style={{ color: colors.secondary }}>{exp.role}</h3>
              <h4 style={{ color: colors.primary }}>{exp.company}</h4>
              <p className="duration" style={{ color: colors.text }}>{exp.duration}</p>
              <p style={{ color: colors.text }}>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section slide-in-left">
        <div className="content-box" style={{ background: '#fff' }}>
          <h2 style={{ color: colors.primary }}>Education</h2>
          {educations.map((edu, index) => (
            <div key={index} className="edu-card" style={{ background: colors.background }}>
              <h3 style={{ color: colors.secondary }}>{edu.institution}</h3>
              <p style={{ color: colors.primary }}>{edu.degree}</p>
              <p className="duration" style={{ color: colors.text }}>{edu.duration}</p>
              <p style={{ color: colors.text }}>{edu.grade}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section slide-in-right">
        <div className="content-box" style={{ background: '#fff' }}>
          <h2 style={{ color: colors.primary }}>Core Competencies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-card"
                style={{ 
                  background: colors.background,
                  border: `2px solid ${colors.accent}`
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section fade-in">
        <div className="content-box" style={{ background: '#fff' }}>
          <h2 style={{ color: colors.primary }}>Connect With Me</h2>
          <div className="contact-info">
            <a 
              href="linkedin.com/in/udhayakumar7132" 
              className="contact-link"
              style={{ background: colors.primary }}
            >
              LinkedIn Profile
            </a>
            <div className="social-links">
              <span style={{ color: colors.text }}>📧 udhaya@example.com</span>
              <span style={{ color: colors.text }}>📱 +91 9876543210</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}