export interface Chats {
    userType: UserType;
    message: string;
}

export enum UserType {
    Hero,
    Narration,
    KimSeongMin
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
    [UserType.KimSeongMin]: {
        name: '김성민 팀장',
        image: 'image/char2.png',
    }
}