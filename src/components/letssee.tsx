import { useEffect } from 'react';
import { gsap } from 'gsap';

const FloatingGeorgianText = () => {
    useEffect(() => {
        // Get all the span elements within the text container
        const letterElements = document.querySelectorAll('.falling-letter');

        // GSAP animation for the flying effect
        gsap.fromTo(letterElements, {
            opacity: 0,
            x: () => Math.random() * 100 - 50,  // Random horizontal start position
            y: () => Math.random() * 100 - 50,  // Random vertical start position
            rotation: () => Math.random() * 360  // Random rotation start
        }, {
            opacity: 1,
            x: () => Math.random() * 300 - 150,  // Random horizontal end position
            y: () => Math.random() * 300 - 150,  // Random vertical end position
            rotation: () => Math.random() * 720,  // Random rotation end
            duration: 3,
            repeat: -1,  // Infinite loop
            stagger: 0.1,
            ease: "power2.out"
        });
    }, []);

    // Georgian text to display
    const text = 'მოყვარულები'; // You can replace this with any Georgian text

    return (
        <div className="falling-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: '"Georgia", serif', color: '#fff', backgroundColor: '#222', textAlign: 'center' }}>
            {text.split('').map((letter, index) => (
                <span key={index} className="falling-letter" style={{ fontSize: '3rem', display: 'inline-block', position: 'relative' }}>
                    {letter}
                </span>
            ))}
        </div>
    );
};

export default FloatingGeorgianText;