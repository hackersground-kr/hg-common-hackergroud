import React, {useState, useEffect} from "react";

interface TypingTextProps {
    text: string;
    speed: number;
    onEnded: () => void;
}

export default function TypingText(
    {
        text,
        speed,
        onEnded
    }: TypingTextProps
) {
    const [isEnded, setIsEnded] = useState(false);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        setDisplayText('');
        setIsEnded(false);
    }, [text]);

    useEffect(() => {
        window.onkeydown = (e: any) => {
            if (e.key === 'Enter' || e.key === ' ') {
                if (isEnded) {
                    onEnded();
                } else {
                    setDisplayText(text);
                    setIsEnded(true);
                }
            }
        }
    }, [isEnded, onEnded, text]);

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            const t = text[currentIndex];
            if (t !== undefined && !isEnded) {
                setDisplayText(prev => prev + t);
                currentIndex += 1;
            }
            if (currentIndex === text.length) {
                clearInterval(intervalId);
                setIsEnded(true);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [speed, onEnded, text, isEnded]);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: 8
            }}
        >
            <span>{displayText}</span>
            {isEnded && (
                <img
                    style={{
                        alignSelf: 'center',
                    }}
                    src={'polygon/chat-indicator.png'}
                    width={7}
                    height={10}
                    className={'blinking-text'}
                />
            )}
        </div>
    );
};