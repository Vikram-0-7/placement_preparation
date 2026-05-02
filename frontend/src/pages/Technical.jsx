import React, { useEffect, useState } from 'react';
import { getTechQuestions } from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Code, Hash, Search, FileText, Globe, ExternalLink, Upload, Download, Filter, Info, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Technical = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  
  const [isResumeExpanded, setIsResumeExpanded] = useState(false);

  const categories = [
    { id: "All", label: "All Questions", icon: Filter },
    { id: "DSA", label: "DSA Questions", icon: Code },
    { id: "Core", label: "CS Core Questions", icon: Hash },
    { id: "Skills", label: "Skills Based Questions", icon: FileText }
  ];

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getTechQuestions();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const getFilteredQuestions = () => {
    let filtered = questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (activeTab === "DSA") {
      filtered = filtered.filter(q => q.category.toUpperCase() === "DSA");
    } else if (activeTab === "Core") {
      filtered = filtered.filter(q => ["OS", "DBMS", "CN", "OOPS"].includes(q.category.toUpperCase()));
    } else if (activeTab === "Skills") {
      filtered = filtered.filter(q => ["PROJECTS", "RESUME", "HR"].includes(q.category.toUpperCase()));
    }

    return filtered;
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '2rem' }}>Technical Interview Prep</h2>
        <div style={{ position: 'relative', width: '300px' }}>
          <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={18} />
          <input 
            type="text" 
            placeholder="Search questions or tags..." 
            className="card"
            style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', margin: 0, borderRadius: '0.75rem', background: 'var(--bg-card)' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Interactive Project & Resume Cards */}
      <section style={{ marginBottom: '4rem' }}>
        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
           <FileText size={24} color="var(--primary-light)" /> Projects & Resume
        </h3>
        <div className="card-grid">
          {/* PROJECT CARD */}
          <div 
            className="card" 
            style={{ borderLeft: '4px solid var(--primary)', cursor: 'pointer' }}
            onClick={() => navigate('/projects')}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
               <h4 style={{ fontSize: '1.25rem' }}>View My Projects</h4>
               <ArrowRight size={20} />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Explore my technical projects, applications, and source code in a detailed view.
            </p>
            <div style={{ marginTop: '1rem', color: 'var(--primary-light)', fontWeight: '600', fontSize: '0.9rem' }}>
               Open Projects Gallery →
            </div>
          </div>

          {/* INTERACTIVE RESUME CARD */}
          <div 
            className="card" 
            style={{ borderLeft: '4px solid var(--accent)', cursor: 'pointer' }}
            onClick={() => setIsResumeExpanded(!isResumeExpanded)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
               <h4 style={{ fontSize: '1.25rem' }}>Your Resume</h4>
               {isResumeExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Manage your resume, download as PDF, or update your information.
            </p>

            <AnimatePresence>
              {isResumeExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginTop: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                      <button className="btn btn-sm" style={{ flex: 1 }} onClick={(e) => e.stopPropagation()}>
                        <Upload size={14} /> Upload New
                      </button>
                      <a 
                        href="/resume.pdf" 
                        download="Vikram_Resume.pdf"
                        className="btn btn-sm btn-primary" 
                        style={{ flex: 1, textDecoration: 'none', justifyContent: 'center' }} 
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Download size={14} /> Download PDF
                      </a>
                    </div>
                    <div className="card" style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderStyle: 'dashed' }}>
                       <h5 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                         <Info size={14} /> Resume Tip
                       </h5>
                       <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                         Ensure your resume is ATS-friendly. Use a simple single-column layout and standard font names.
                       </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Question Categories Tabs */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button 
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className="btn"
            style={{ 
              background: activeTab === cat.id ? 'var(--primary)' : 'var(--bg-card)',
              color: activeTab === cat.id ? 'white' : 'var(--text-main)',
              borderColor: activeTab === cat.id ? 'var(--primary)' : 'var(--border)'
            }}
          >
            <cat.icon size={16} /> {cat.label}
          </button>
        ))}
      </div>
      
      <div style={{ maxWidth: '900px' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>{activeTab === "All" ? "Question Bank" : `${activeTab} Questions`}</h3>
        {loading ? <div>Loading...</div> : (
          getFilteredQuestions().length > 0 ? (
            getFilteredQuestions().map((q) => (
              <div key={q.id} className="expandable">
                <div 
                  className="expandable-header" 
                  onClick={() => setExpanded(expanded === q.id ? null : q.id)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.5rem', borderRadius: '4px', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary-light)', textTransform: 'uppercase' }}>
                      {q.category}
                    </span>
                    <h4 style={{ fontSize: '1rem' }}>{q.question}</h4>
                  </div>
                  {expanded === q.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                <AnimatePresence>
                  {expanded === q.id && (
                    <motion.div 
                      className="expandable-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>{q.answer}</p>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {q.tags.map(tag => (
                          <span key={tag} style={{ fontSize: '0.7rem', color: 'var(--text-muted)', border: '1px solid var(--border)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              No questions found for this category.
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Technical;
