export const projects = [
    {
        id: 1,
        title: 'Arduino Reflex Game',
        summary: 'Web + Arduino reflex game with LED input and scoring, built with Arduino and a React frontend.',
        tags: ['Arduino', 'Games', 'JS'],
        img: '/assets/arduino.png',
        link: '#',
        description: 'A fast-paced reflex game that challenges your reaction time. Built using an Arduino Uno for hardware control (LEDs and buttons) and a React frontend for scoring and visualization. The system communicates via serial connection, bridging the gap between hardware and web.',
        tools: ['Arduino', 'C++', 'React', 'Web Serial API']
    },
    {
        id: 2,
        title: 'Sign Language Detector (Mini)',
        summary: 'CNN + transformer experiments for sign detection with TTS and autofill.',
        tags: ['ML', 'Computer Vision'],
        img: '/assets/sign.png',
        link: '#',
        description: 'An experimental project exploring computer vision for accessibility. Uses a Convolutional Neural Network (CNN) trained on sign language gestures to detect and translate hand signs into text in real-time. Includes a text-to-speech feature for audio feedback.',
        tools: ['Python', 'TensorFlow', 'OpenCV', 'React']
    }
];

export const profile = {
    name: "Cute Angry Bird",
    role: "Creative Designer & AI Visuals",
    tagline: "I build visual systems, AI art experiments, and playful interfaces.",
    bio: "I’m a designer + student exploring AI, motion, and human-centered design. I love clean visuals and systems that teach.",
    mantra: "Design is intelligence made visible.",
    passions: ["AI", "Design", "Shayari", "Psychology", "Digital Marketing"],
    social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
        youtube: "https://youtube.com"
    },
    email: "hello@example.com" // Replace with actual email
};
