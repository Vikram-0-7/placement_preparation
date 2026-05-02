import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Award, Terminal, MessageSquare, BookText, Calendar, Target, AlertTriangle, Lightbulb } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const sections = [
    { title: 'Eligibility', path: '/eligibility', icon: CheckCircle, desc: 'Master DSA, Aptitude and Core CS subjects.' },
    { title: 'Skills', path: '/skills', icon: Award, desc: 'Explore career paths like AI, Cloud, and Software Dev.' },
    { title: 'Technical', path: '/technical', icon: Terminal, desc: 'Prepare for CS fundamentals and project explanations.' },
    { title: 'HR Interview', path: '/hr', icon: MessageSquare, desc: 'Perfect your behavioral questions and soft skills.' },
  ];

  const roadmapSteps = [
    { period: "Months 1-2", title: "Aptitude & Reasoning (60 Days)", desc: "Foundation is crucial. Service-based companies have aptitude tests in first rounds." },
    { period: "Months 3-4", title: "CS Fundamentals (8 Weeks)", desc: "OOPS, DBMS, OS, Computer Networks - these 4 subjects are asked in every technical interview." },
    { period: "Months 5-7", title: "DSA - Data Structures & Algorithms", desc: "Key for product-based companies. Follow Striver's A2Z DSA Sheet. Solve 3-5 problems daily consistently." },
    { period: "Month 8", title: "Projects, Resume & Mock Interviews", desc: "Build 2-3 solid projects, perfect your resume, and take mock interviews to build confidence." }
  ];

  const successPrinciples = [
    "Consistency > Intensity - Daily small steps beat irregular big efforts",
    "Maintain Notes - Document aptitude formulas, CS concepts, DSA patterns",
    "Practice Daily - 2nd year: 2-3 hours | 3rd year: 4-5 hours minimum",
    "Weekly Revision - Review everything you learned each weekend",
    "Mock Tests - Take one mock test every week to track progress"
  ];

  return (
    <div>
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Placement Preparation
        </motion.h1>
        
        <motion.div 
          className="quote-banner"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          WRITING NOTES → REVISE → WRITING TESTS
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Your all-in-one free resource platform for placement preparation and career roadmaps.
        </motion.p>
      </section>

      {/* ROADMAP CONTENT */}
      <section style={{ margin: '4rem 0' }}>
        <div className="card" style={{ border: '1px solid #facc15', background: 'rgba(250, 204, 21, 0.05)', marginBottom: '3rem' }}>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#eab308', marginBottom: '1rem' }}>
            <AlertTriangle size={20} /> Critical Truth
          </h4>
          <p>You must be fully prepared before 4th year placements begin! Starting preparation in final year is the biggest mistake students make.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
           <div className="card">
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-light)' }}>✅ What You'll Crack</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Service-Based:</strong> TCS, Infosys, Wipro, Cognizant, Accenture, Capgemini</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Product-Based:</strong> Zoho, Deloitte, Tech Mahindra, Early-stage Startups</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Off-Campus:</strong> Amazon, Microsoft, Flipkart (with dedicated effort)</li>
              </ul>
           </div>
           <div className="card">
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>💡 Success Principles</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {successPrinciples.map((p, i) => (
                  <li key={i} style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <Lightbulb size={16} color="var(--accent)" /> {p}
                  </li>
                ))}
              </ul>
           </div>
        </div>

        <div className="card-grid" style={{ marginTop: '3rem' }}>
          {roadmapSteps.map((step, i) => (
            <div key={i} className="card" style={{ borderTop: `4px solid var(--primary)` }}>
               <span style={{ fontWeight: '800', color: 'var(--primary-light)', fontSize: '0.8rem' }}>{step.period}</span>
               <h4 style={{ margin: '0.5rem 0 1rem' }}>{step.title}</h4>
               <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ margin: '4rem 0' }}>
        <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <BookText size={28} color="var(--primary-light)" /> About Prep Hub
        </h2>
        <div className="card" style={{ background: 'rgba(79, 70, 229, 0.02)', borderStyle: 'dashed' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Placement Prep Hub is a dedicated platform for college students to access high-quality, free resources for campus placements. 
            We provide structured roadmaps for skills like AI, Cloud, and Software Development, along with curated practice links for DSA, Aptitude, and Core CS subjects.
          </p>
        </div>
      </section>

      <div className="card-grid">
        {sections.map((section, index) => (
          <motion.div 
            key={section.title}
            className="card"
            onClick={() => navigate(section.path)}
            style={{ cursor: 'pointer' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.02, borderColor: 'var(--primary-light)' }}
          >
            <div className="card-icon" style={{ width: '48px', height: '48px', background: 'rgba(79, 70, 229, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-light)', marginBottom: '1.5rem' }}>
              <section.icon size={24} />
            </div>
            <h3>{section.title}</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              {section.desc}
            </p>
            <div style={{ padding: 0, color: 'var(--primary-light)', fontWeight: '600', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Explore <ArrowRight size={16} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
