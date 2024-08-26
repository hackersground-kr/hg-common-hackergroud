import React, {useState, useEffect} from "react";

interface SelectTextProps {
    texts: string[];
    onEnded: (text: string) => void;
}

export default function SelectText(
    {
        texts,
        onEnded
    }: SelectTextProps
) {

    const [selectIndex, setSelectIndex] = useState(1)


    window.onkeydown = (e: any) => {
        if (e.key === 'Enter' || e.key === ' ') {
            onEnded(texts[selectIndex]);
        }
        if (e.key === 'ArrowUp') {
            if (selectIndex <= 0) {
                return
            }
            setSelectIndex(selectIndex - 1)
        }
        if (e.key === 'ArrowDown') {
            if (selectIndex >= texts.length - 1) {
                return
            }
            setSelectIndex(selectIndex + 1)
        }
    }

    useEffect(() => {
        setSelectIndex(0);
    }, [texts])

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexDirection: 'column',
            }}
        >
            {texts.map((text, idx) => (
                <div
                    key={idx}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        gap: 8,
                    }}
                >
                    <span
                        style={{
                            opacity: idx === selectIndex ? 1 : 0.5,
                        }}
                    >{text}</span>
                    <img
                        style={{
                            alignSelf: 'center',
                            visibility: idx === selectIndex ? 'visible' : 'hidden',
                        }}
                        src={'polygon/chat-indicator.png'}
                        width={7}
                        height={10}
                        alt={'chat indicator'}
                    />
                </div>
            ))}
        </div>
    );
};