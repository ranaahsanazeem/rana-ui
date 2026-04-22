import React, { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Modal from './components/Modal';
import VoiceAI from './components/VoiceAI';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="bg-glow"></div>
            <div className="container">
                <header style={{ textAlign: 'center', padding: '60px 0' }}>
                    <h1 style={{ fontSize: '4rem', marginBottom: '10px' }} className="gradient-text">Obsidian UI</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Professional React Component Library for Modern Web Apps</p>
                </header>

                <section id="btn-section" style={{ marginBottom: '80px', padding: '20px', borderRadius: '24px' }}>
                    <div className="section-header">
                        <h2>Precision Buttons</h2>
                        <p>Fully customizable interaction points with smooth transitions.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button variant="primary">Primary Action</Button>
                        <Button variant="glass">Secondary Option</Button>
                        <Button variant="primary" onClick={() => setIsModalOpen(true)}>Open Modal</Button>
                    </div>
                </section>

                <section id="card-section" style={{ marginBottom: '80px', padding: '20px', borderRadius: '24px' }}>
                    <div className="section-header">
                        <h2>Glassmorphic Cards</h2>
                        <p>Content containers with depth and visual hierarchy.</p>
                    </div>
                    <div className="grid">
                        <Card 
                            title="Analytics Dashboard" 
                            description="Real-time data visualization with glassmorphic depth and premium hover effects."
                            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                        >
                            <Button variant="glass" style={{ width: '100%', justifyContent: 'center' }}>View Report</Button>
                        </Card>
                        <Card 
                            title="Cloud Infrastructure" 
                            description="Scalable resources managed with our custom UI components."
                            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                        >
                            <Button variant="glass" style={{ width: '100%', justifyContent: 'center' }}>Configure</Button>
                        </Card>
                        <Card 
                            title="Network Security" 
                            description="Advanced protection layers integrated seamlessly into your workflow."
                            image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
                        >
                            <Button variant="glass" style={{ width: '100%', justifyContent: 'center' }}>Launch Shield</Button>
                        </Card>
                    </div>
                </section>

                <section id="modal-section" style={{ marginBottom: '80px', padding: '20px', borderRadius: '24px' }}>
                    <div className="section-header">
                        <h2>Contextual Modals</h2>
                        <p>Focused overlays for critical user tasks.</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Button variant="primary" onClick={() => setIsModalOpen(true)}>Trigger Demo Modal</Button>
                    </div>
                </section>

                <Modal 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)} 
                    title="Professional Modal"
                >
                    <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                        This modal features a backdrop blur effect and a smooth scale animation. It's designed to keep users focused while maintaining the aesthetic of the application.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                        <Button variant="glass" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button variant="primary" onClick={() => setIsModalOpen(false)}>Confirm</Button>
                    </div>
                </Modal>

                <VoiceAI />

                <footer style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid var(--card-border)', marginTop: '40px' }}>
                    <p style={{ color: 'var(--text-muted)' }}>© 2026 Obsidian UI Framework. Built for Professionals.</p>
                </footer>
            </div>
        </>
    );
};

export default App;
