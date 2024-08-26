export interface Chats {
    userType: UserType;
    message: string | string[];
    music?: string;
    vibration?: boolean;
    callback?: (text: string) => void;
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
        image: 'image/char3.png',
    },
    [UserType.Hero2]: {
        image: 'image/char6.png',
    },
    [UserType.Narration]: {
        name: '나레이션',
        image: ''
    },
    [UserType.KangSeongMin]: {
        name: '강성민 팀장',
        image: 'image/char2.png',
    },
    [UserType.KimMinji]: {
        name: '김민지',
        image: 'image/char1.png',
    },
    [UserType.KimChunBae]: {
        name: '김춘배 이장',
        image: 'image/char2.png',
    },
    [UserType.HongGilDong]: {
        name: '홍길동',
        image: 'image/char2.png',
    },
    [UserType.ParkJinSoo]: {
        name: '박진수',
        image: 'image/char5.png',
    },
    [UserType.Unknown]: {
        name: '??',
        image: 'image/char4.png',
    }
}