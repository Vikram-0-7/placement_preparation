import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  
  const projectList = [
    {
      id: 1,
      category: "AI LEARNING ASSISTANT",
      title: "StudyMate Pro",
      desc: "A full-stack AI application built with Streamlit and Hugging Face APIs that integrates chatbot, note summarization, and quiz generation features.",
      tags: ["Streamlit", "Hugging Face", "Python", "AI/ML"],
      image: "/studymate_pro_preview_1777708766720.png"
    },
    {
      id: 2,
      category: "ANDROID HEALTH PLATFORM",
      title: "Medicare App",
      desc: "A multi-screen Android application using Java and SQLite with authentication, prescription generation, and profile management.",
      tags: ["Java", "Android", "SQLite", "XML"],
      image: "/medicare_app_preview_1777708782464.png"
    },
    {
      id: 3,
      category: "WEB APPLICATION",
      title: "Image Compressor",
      desc: "A Flask-based web application for image compression supporting multiple formats (PNG, JPG, WEBP) with real-time preview comparison.",
      tags: ["Flask", "Python", "HTML/CSS", "Pillow"],
      image: "/image_compressor_preview_1777708798114.png"
    }
  ];

  return (
    <div style={{ paddingBottom: '4rem' }}>
      <button 
        onClick={() => navigate(-1)} 
        className="btn" 
        style={{ marginBottom: '2rem', border: 'none' }}
      >
        <ArrowLeft size={20} /> Back
      </button>

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ 
          background: 'rgba(79, 70, 229, 0.1)', 
          color: 'var(--primary-light)', 
          padding: '0.4rem 1rem', 
          borderRadius: '2rem', 
          fontSize: '0.8rem', 
          fontWeight: '600' 
        }}>
          🚀 Featured Work
        </span>
        <h1 style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '0.5rem' }}>My Projects</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Applications built with passion — from AI-powered platforms to mobile health apps and web tools.
        </p>
      </div>

      <div className="card-grid">
        {projectList.map((project, index) => (
          <motion.div 
            key={project.id}
            className="card"
            style={{ padding: 0, overflow: 'hidden' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.1em' }}>
                {project.category}
              </span>
              <h3 style={{ margin: '0.5rem 0 1rem', fontSize: '1.5rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {project.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ background: 'var(--bg-dark)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', border: '1px solid var(--border)' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button className="btn btn-sm" style={{ flex: 1 }}><Code size={14} /> Code</button>
                <button className="btn btn-sm btn-primary" style={{ flex: 1 }}><ExternalLink size={14} /> Demo</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
