export type Slider = {
    key: string | number;
    content: {
        blurDataURL?: string
        blurHeight?: number
        blurWidth?: number
        height?: number
        src?: string
        width?: number

    }
}

export type PrimaryVideoDetails = {
    _id: string | number
    title: string;
    thumbnail: string | { src: string };
    enrolled: number;
    review_members: number;
    review: number;
    price: number;

}

export interface UserInterface {
    name: string;
    dateOfBirth: string;
    email: string;
    password: string;
    gender: string;
    image: string;
}