import React, { useState, useEffect } from 'react';

const VoiceAI = () => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [progress, setProgress] = useState(0);

    const script = [
        { text: "Welcome to the Obsidian React Component Library. I am your AI guide. Over the next two minutes, I will walk you through our professional design system.", time: 0 },
        { text: "Our library is built on a foundation of 'Glassmorphism'—notice the subtle blurring and translucency in our cards and modals. We use a deep obsidian background with electric blue accents to create a premium, high-tech feel.", time: 15 },
        { text: "Let's look at our Buttons. They aren't just buttons; they are interactive experiences. Each variant—Primary, Secondary, and Glass—features optimized hover states and ripple effects, ensuring maximum engagement and accessibility.", time: 45 },
        { text: "Moving to our Cards. These are the building blocks of modern dashboards. They feature interactive lift effects, clean typography using the 'Outfit' font family, and responsive padding that adapts to any screen size.", time: 75 },
        { text: "Finally, our Modals. We use smooth scale-in animations and backdrop blurring to keep the user focused on the task at hand without losing context. This library is designed for performance, modularity, and visual excellence.", time: 100 },
        { text: "Thank you for exploring Obsidian. Our code is clean, our design is bold, and our components are ready for production. Enjoy the tour!", time: 115 }
    ];

    const speak = () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
            setProgress(0);
            return;
        }

        setIsSpeaking(true);
        let currentIndex = 0;

        const processNext = () => {
            if (currentIndex >= script.length) {
                setIsSpeaking(false);
                setProgress(100);
                return;
            }

            const part = script[currentIndex];
            const utterance = new SpeechSynthesisUtterance(part.text);
            utterance.rate = 0.9;
            utterance.pitch = 1.1;

            utterance.onend = () => {
                currentIndex++;
                setProgress((currentIndex / script.length) * 100);
                processNext();
            };

            // Highlight elements based on timing
            if (part.text.includes("Buttons")) document.getElementById('btn-section')?.classList.add('tour-highlight');
            if (part.text.includes("Cards")) {
                document.getElementById('btn-section')?.classList.remove('tour-highlight');
                document.getElementById('card-section')?.classList.add('tour-highlight');
            }
            if (part.text.includes("Modals")) {
                document.getElementById('card-section')?.classList.remove('tour-highlight');
                document.getElementById('modal-section')?.classList.add('tour-highlight');
            }

            window.speechSynthesis.speak(utterance);
        };

        processNext();
    };

    useEffect(() => {
        return () => window.speechSynthesis.cancel();
    }, []);

    return (
        <div className="glass" style={{ padding: '20px', position: 'fixed', bottom: '20px', right: '20px', width: '300px', zIndex: 2000 }}>
            <h4 style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '10px', height: '10px', background: isSpeaking ? '#10b981' : '#ef4444', borderRadius: '50%', display: 'inline-block' }}></span>
                AI Project Guide
            </h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '15px' }}>
                {isSpeaking ? "Explaining the project (2 min)..." : "Click to start the voice-guided tour."}
            </p>
            <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginBottom: '15px', overflow: 'hidden' }}>
                <div style={{ width: `${progress}%`, height: '100%', background: 'var(--primary)', transition: 'width 0.3s ease' }}></div>
            </div>
            <button className="btn btn-primary" onClick={speak} style={{ width: '100%', justifyContent: 'center' }}>
                {isSpeaking ? "Stop Tour" : "Start Voice AI"}
            </button>
        </div>
    );
};

export default VoiceAI;
