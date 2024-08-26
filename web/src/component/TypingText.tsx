import React, {useState, useEffect, Dispatch, SetStateAction} from "react";

interface TypingTextProps {
    text: string;
    value: string;
    onChange: Dispatch<SetStateAction<string>>;
    speed: number;
    onEnded: () => void;
}

function TypingText(
    {
        text,
        value,
        onChange,
        speed,
        onEnded
    }: TypingTextProps
) {
    const [isEnded, setIsEnded] = useState(false);

    useEffect(() => {
        onChange('');
        setIsEnded(false);
    }, [onChange, text]);

    useEffect(() => {
        window.onkeydown = (e: any) => {
            if (e.key === 'Enter' || e.key === ' ') {
                if (isEnded) {
                    onEnded();
                } else {
                    onChange(text);
                    setIsEnded(true);
                }
            }
        }
    }, [isEnded, onChange, onEnded, text]);

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            const t = text[currentIndex];
            if (t !== undefined && !isEnded) {
                onChange(prev => prev + t);
                currentIndex += 1;
            }
            if (currentIndex === text.length) {
                clearInterval(intervalId);
                setIsEnded(true);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [speed, text, isEnded]);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: 8
            }}
        >
            <span>{value === '' ? '.' : value}</span>
            {isEnded && (
                <img
                    style={{
                        alignSelf: 'center',
                    }}
                    src={'polygon/chat-indicator.png'}
                    width={7}
                    height={10}
                    className={'blinking-text'}
                    alt={'chat indicator'}
                />
            )}
        </div>
    );
};

export default React.memo(TypingText);