export interface Chats {
    userType: UserType;
    message: string;
    music?: string;
}

export enum UserType {
    Hero,
    Narration,
    KangSeongMin,
    KimMinji,
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
    [UserType.Unknown]: {
        name: '??',
        image: 'image/char4.png',
    }
}