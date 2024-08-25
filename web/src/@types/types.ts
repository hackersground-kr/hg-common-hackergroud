export interface Chats {
    userType: UserType;
    message: string;
}

export enum UserType {
    Hero,
    Narration
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
    }
}