import React, { useEffect, useState } from 'react';
import { getHRQuestions } from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Check, X, Info, ChevronDown, ChevronUp } from 'lucide-react';

const HR = () => {
  const [questions, setQuestions] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getHRQuestions();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem' }}>HR & Behavioral Preparation</h2>
      
      <div style={{ maxWidth: '900px' }}>
        {loading ? <div>Loading...</div> : (
          questions.map((q) => (
            <div key={q.id} className="expandable" style={{ marginBottom: '1.5rem' }}>
              <div 
                className="expandable-header" 
                onClick={() => setExpanded(expanded === q.id ? null : q.id)}
                style={{ padding: '1.5rem' }}
              >
                <h3 style={{ fontSize: '1.1rem' }}>{q.question}</h3>
                {expanded === q.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              
              <AnimatePresence>
                {expanded === q.id && (
                  <motion.div 
                    className="expandable-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ padding: '0 1.5rem 1.5rem' }}
                  >
                    <div className="card" style={{ background: 'rgba(79, 70, 229, 0.05)', marginBottom: '1.5rem', border: 'none' }}>
                      <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--primary-light)' }}>
                        <Info size={16} /> RECOMMENDED APPROACH
                      </h4>
                      <p>{q.answer}</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                      <div className="card" style={{ border: '1px solid rgba(16, 185, 129, 0.2)', background: 'rgba(16, 185, 129, 0.02)' }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '0.85rem', color: '#10b981' }}>
                          <Check size={16} /> GOOD ANSWER
                        </h4>
                        <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>"{q.good_example}"</p>
                      </div>
                      <div className="card" style={{ border: '1px solid rgba(239, 68, 68, 0.2)', background: 'rgba(239, 68, 68, 0.02)' }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '0.85rem', color: '#ef4444' }}>
                          <X size={16} /> AVOID THIS
                        </h4>
                        <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>"{q.bad_example}"</p>
                      </div>
                    </div>

                    <div style={{ marginTop: '1.5rem', padding: '1rem', borderTop: '1px solid var(--border)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <strong>Tip:</strong> {q.tips}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HR;
