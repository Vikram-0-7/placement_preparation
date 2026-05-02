import React, { useEffect, useState } from 'react';
import { getResources } from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Book, Play, ArrowLeft, Trophy, Globe, Target, AlertTriangle, CheckCircle as CheckIcon } from 'lucide-react';

const Eligibility = () => {
  const [resources, setResources] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const categories = ["DSA", "Aptitude", "Core Subjects"];

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const data = await getResources(selectedCategory);
        setResources(data);
      } catch (error) {
        console.error("Error fetching resources:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchResources();
  }, [selectedCategory]);

  const renderDsaExtras = () => (
    <div className="card" style={{ gridColumn: '1 / -1', marginTop: '2rem' }}>
      <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-light)' }}>🔥 Essential DSA Roadmap</h3>
      
      <div className="sub-section">
        <h4>1. Learn Language</h4>
        <div className="list-item">
          <span>Java (W3Schools)</span>
          <a href="https://www.w3schools.com/java/" target="_blank" rel="noreferrer" className="btn btn-sm">Open</a>
        </div>
        <div className="list-item">
          <span>Python (W3Schools)</span>
          <a href="https://www.w3schools.com/python/default.asp" target="_blank" rel="noreferrer" className="btn btn-sm">Open</a>
        </div>
        <div className="list-item">
          <span>C++ (CodeWithHarry)</span>
          <a href="https://archive.codewithharry.com/videos/cpp-tutorials-in-hindi-1/" target="_blank" rel="noreferrer" className="btn btn-sm">Open</a>
        </div>
      </div>

      <div className="sub-section">
        <h4>2. Learn OOPS / STL</h4>
        <div className="list-item">
          <span>OOPS/STL Tutorial</span>
          <a href="https://archive.codewithharry.com/videos/cpp-tutorials-in-hindi-20/" target="_blank" rel="noreferrer" className="btn btn-sm">Open</a>
        </div>
      </div>

      <div className="sub-section">
        <h4>3. Practice Sheets</h4>
        <div className="list-item">
          <span>Striver's A2Z Sheet (TUF)</span>
          <a href="https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" target="_blank" rel="noreferrer" className="btn btn-sm">Open</a>
        </div>
        <div className="list-item">
          <span>Apna College DSA Sheet</span>
          <a href="https://dsa.apnacollege.in/sheet/dsa-sheet" target="_blank" rel="noreferrer" className="btn btn-sm">Open</a>
        </div>
        <div className="list-item">
          <span>NeetCode Roadmap</span>
          <a href="https://neetcode.io/roadmap" target="_blank" rel="noreferrer" className="btn btn-sm">Open</a>
        </div>
      </div>
    </div>
  );

  const renderAptitudeExtras = () => (
    <div className="card" style={{ gridColumn: '1 / -1', marginTop: '2rem' }}>
      <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-light)' }}>🧠 Aptitude Resources</h3>
      <div className="list-item">
        <span>Learn Aptitude (GeeksforGeeks)</span>
        <a href="https://www.geeksforgeeks.org/aptitude/aptitude-questions-and-answers/" target="_blank" rel="noreferrer" className="btn btn-sm">Open</a>
      </div>
      <div className="list-item">
        <span>Practice Test (IndiaBix)</span>
        <a href="https://www.indiabix.com/aptitude/questions-and-answers/" target="_blank" rel="noreferrer" className="btn btn-sm">Open</a>
      </div>
    </div>
  );

  const renderCoreExtras = () => (
    <div className="card" style={{ gridColumn: '1 / -1', marginTop: '2rem' }}>

      <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-light)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Book size={24} /> CS Fundamentals - 8 Weeks Plan
      </h3>

      <div className="card" style={{ border: '1px solid var(--primary-light)', background: 'rgba(79, 70, 229, 0.02)', marginBottom: '2rem' }}>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-light)', marginBottom: '0.75rem' }}>
            <AlertTriangle size={18} /> Why CS Fundamentals Matter
          </h4>
          <p style={{ fontSize: '0.9rem' }}>Just like aptitude is crucial for first rounds, CS Fundamentals are mandatory for technical interviews. OOPS, DBMS, OS, Networks - these 4 subjects test your computer science knowledge.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* WEEK 1-2: OOPS */}
        <div className="card" style={{ padding: '1.25rem' }}>
          <h4 style={{ color: 'var(--primary-light)', marginBottom: '1rem' }}>Week 1-2: OOPS</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
            <li style={{ marginBottom: '0.4rem' }}>✅ 4 Pillars: Encapsulation, Inheritance, Polymorphism, Abstraction</li>
            <li style={{ marginBottom: '0.4rem' }}>✅ Classes & Objects with real-world examples</li>
            <li style={{ marginBottom: '0.4rem' }}>✅ Constructors & Destructors</li>
            <li style={{ marginBottom: '0.4rem' }}>✅ Method Overloading vs Overriding</li>
          </ul>
        </div>
        
        {/* WEEK 3-4: DBMS */}
        <div className="card" style={{ padding: '1.25rem' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Week 3-4: DBMS</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
            <li style={{ marginBottom: '0.4rem' }}>✅ Normalization: 1NF, 2NF, 3NF, BCNF</li>
            <li style={{ marginBottom: '0.4rem' }}>✅ SQL Queries: JOINs, WHERE, GROUP BY</li>
            <li style={{ marginBottom: '0.4rem' }}>✅ ACID Properties & Transactions</li>
            <li style={{ marginBottom: '0.4rem' }}>✅ Indexing & B+ Trees</li>
          </ul>
        </div>

        {/* WEEK 5-6: OS */}
        <div className="card" style={{ padding: '1.25rem' }}>
          <h4 style={{ color: '#f59e0b', marginBottom: '1rem' }}>Week 5-6: Operating Systems</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
            <li style={{ marginBottom: '0.4rem' }}>✅ Process vs Thread (Most asked!)</li>
            <li style={{ marginBottom: '0.4rem' }}>✅ Scheduling Algorithms</li>
            <li style={{ marginBottom: '0.4rem' }}>✅ Deadlocks: Prevention & Avoidance</li>
            <li style={{ marginBottom: '0.4rem' }}>✅ Paging & Virtual Memory</li>
          </ul>
        </div>

        {/* WEEK 7-8: CN */}
        <div className="card" style={{ padding: '1.25rem' }}>
          <h4 style={{ color: '#ec4899', marginBottom: '1rem' }}>Week 7-8: Computer Networks</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
            <li style={{ marginBottom: '0.4rem' }}>✅ OSI Model (All 7 Layers)</li>
            <li style={{ marginBottom: '0.4rem' }}>✅ TCP vs UDP & Protocols</li>
            <li style={{ marginBottom: '0.4rem' }}>✅ IP Addressing & Subnetting</li>
            <li style={{ marginBottom: '0.4rem' }}>✅ Network Security basics</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '2.5rem' }}>
        <h4 style={{ marginBottom: '1rem', color: 'var(--primary-light)' }}>📘 Best Video Resources</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
           <a href="https://www.geeksforgeeks.org/gfg-academy/last-minute-notes-lmns/" target="_blank" rel="noreferrer" className="btn btn-sm">LMN Notes</a>
           <a href="https://www.youtube.com/@GateSmashers" target="_blank" rel="noreferrer" className="btn btn-sm"><Play size={14} /> Gate Smashers</a>
           <a href="https://www.youtube.com/@KnowledgeGate" target="_blank" rel="noreferrer" className="btn btn-sm"><Play size={14} /> Knowledge Gate</a>
           <a href="https://www.youtube.com/@JennyslecturesCSIT" target="_blank" rel="noreferrer" className="btn btn-sm"><Play size={14} /> Jenny's Lectures</a>
           <a href="https://www.youtube.com/@nesoacademy" target="_blank" rel="noreferrer" className="btn btn-sm"><Play size={14} /> Neso Academy</a>
        </div>
      </div>
    </div>
  );

  if (loading && !selectedCategory) return <div style={{ padding: '2rem' }}>Loading preparation materials...</div>;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        {selectedCategory && (
          <button onClick={() => setSelectedCategory(null)} className="btn" style={{ padding: '0.5rem', border: 'none' }}>
            <ArrowLeft size={20} />
          </button>
        )}
        <h2 style={{ fontSize: '2rem' }}>{selectedCategory ? `${selectedCategory} Resources` : "Eligibility Preparation"}</h2>
      </div>

      <AnimatePresence mode="wait">
        {!selectedCategory ? (
          <motion.div 
            key="grid"
            className="card-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {categories.map((cat) => (
              <div 
                key={cat} 
                className="card" 
                onClick={() => setSelectedCategory(cat)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-icon" style={{ width: '48px', height: '48px', background: 'rgba(79, 70, 229, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-light)', marginBottom: '1.5rem' }}>
                  <Book size={24} />
                </div>
                <h3>{cat}</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Access tutorials, practice sheets, and revision notes for {cat}.</p>
                <div style={{ marginTop: '1.5rem', color: 'var(--primary-light)', fontWeight: '600', fontSize: '0.9rem' }}>
                  Open Section →
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="card-grid">
              {/* Dynamic Content from API if any */}
              {resources.map((res) => (
                <div key={res.id} className="card">
                   <h3 style={{ color: 'var(--primary-light)', marginBottom: '1rem' }}>{res.topic}</h3>
                   <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>{res.notes}</p>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {res.links.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noreferrer" className="btn btn-sm" style={{ justifyContent: 'start' }}>
                        <ExternalLink size={14} /> {link.name}
                      </a>
                    ))}
                   </div>
                </div>
              ))}

              {/* Hardcoded Specific Sections Requested */}
              {selectedCategory === "DSA" && renderDsaExtras()}
              {selectedCategory === "Aptitude" && renderAptitudeExtras()}
              {selectedCategory === "Core Subjects" && renderCoreExtras()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Eligibility;
