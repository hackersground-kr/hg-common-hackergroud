import React from "react";

interface SelectProps {
    data: string[];
    onSelect: (item: string) => void;
}

export interface Chats {
    userType: UserType;
    message: string;
    music?: string;
    vibration?: boolean;
    isLoading?: boolean;
    select?: SelectProps;
    disabledKeyDown?: boolean;
    children?: () => React.ReactNode;
}

export enum UserType {
    Hero,
    Hero2,
    Narration,
    KangSeongMin,
    KimMinji,
    KimChunBae,
    HongGilDong,
    ParkJinSoo,
    Unknown
}

export const UserDictionary: {
    [key in UserType]: {
        name?: string;
        image: string;
    }
} = {
    [UserType.Hero]: {
        image: 'image/char3.webp',
    },
    [UserType.Hero2]: {
        image: 'image/char6.webp',
    },
    [UserType.Narration]: {
        name: '나레이션',
        image: ''
    },
    [UserType.KangSeongMin]: {
        name: '강성민 팀장',
        image: 'image/char2.webp',
    },
    [UserType.KimMinji]: {
        name: '김민지',
        image: 'image/char1.webp',
    },
    [UserType.KimChunBae]: {
        name: '김춘배 이장',
        image: 'image/char7.webp',
    },
    [UserType.HongGilDong]: {
        name: '홍길동',
        image: 'image/char5.webp',
    },
    [UserType.ParkJinSoo]: {
        name: '박진수',
        image: 'image/char8.webp',
    },
    [UserType.Unknown]: {
        name: '??',
        image: 'image/char4.webp',
    }
}