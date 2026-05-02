import React, { useEffect, useState } from 'react';
import { getRoadmaps } from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Circle, ArrowRight, Wrench, Loader } from 'lucide-react';

const Skills = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        console.log("Fetching roadmaps...");
        const data = await getRoadmaps();
        console.log("Roadmaps received:", data);
        setRoadmaps(data);
        if (data && data.length > 0) {
          setSelectedRoadmap(data[0]);
        }
      } catch (err) {
        console.error("Error fetching roadmaps:", err);
        setError("Failed to load roadmaps. Please ensure the backend is running.");
      } finally {
        setLoading(false);
      }
    };
    fetchRoadmaps();
  }, []);

  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh', gap: '1rem' }}>
      <Loader className="animate-spin" /> Loading roadmaps...
    </div>
  );

  if (error) return <div style={{ color: '#ef4444', padding: '2rem', textAlign: 'center' }}>{error}</div>;

  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Career Roadmaps</h2>
      
      {/* Category Selection Tabs */}
      <div style={{ 
        display: 'flex', 
        gap: '0.75rem', 
        marginBottom: '3rem', 
        overflowX: 'auto', 
        paddingBottom: '1rem',
        scrollbarWidth: 'none'
      }}>
        {roadmaps.map((rm) => (
          <button 
            key={rm.id}
            onClick={() => setSelectedRoadmap(rm)}
            className="btn"
            style={{ 
              background: selectedRoadmap?.id === rm.id ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
              color: selectedRoadmap?.id === rm.id ? 'white' : 'var(--text-muted)',
              whiteSpace: 'nowrap',
              border: selectedRoadmap?.id === rm.id ? 'none' : '1px solid var(--border)'
            }}
          >
            {rm.category}
          </button>
        ))}
      </div>

      {/* Roadmap Timeline */}
      <AnimatePresence mode="wait">
        {selectedRoadmap ? (
          <motion.div 
            key={selectedRoadmap.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{ position: 'relative', paddingLeft: '2.5rem' }}
          >
            {/* Vertical Line */}
            <div style={{ 
              position: 'absolute', 
              left: '9px', 
              top: '0', 
              bottom: '0', 
              width: '2px', 
              background: 'linear-gradient(to bottom, var(--primary) 0%, rgba(79, 70, 229, 0.1) 100%)' 
            }}></div>
            
            {selectedRoadmap.steps.map((step, idx) => (
              <motion.div 
                key={idx}
                className="card"
                style={{ marginBottom: '2.5rem', position: 'relative' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Timeline Dot */}
                <div style={{ 
                  position: 'absolute', 
                  left: '-2.25rem', 
                  top: '1.5rem', 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '50%', 
                  background: 'var(--bg-dark)',
                  border: '4px solid var(--primary)',
                  zIndex: 2
                }}></div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{ color: 'var(--primary-light)', fontSize: '1.25rem' }}>{step.step} Level</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Complete <input type="checkbox" style={{ cursor: 'pointer' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>CORE SKILLS</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {step.skills.map((s, i) => (
                        <span key={i} style={{ background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary-light)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: '500' }}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>TOOLS</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {step.tools.map((t, i) => (
                        <span key={i} style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: '500' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>RESOURCES</h4>
                    <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                      {step.resources.map((r, i) => (
                        <li key={i} style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                          <ArrowRight size={14} style={{ marginTop: '0.2rem', color: 'var(--primary-light)' }} /> <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
            No roadmap selected. Please click a category above.
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skills;
