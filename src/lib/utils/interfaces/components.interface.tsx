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
    _id: string | number;
    category?: string;
    launch_date?: string;
    title: string;
    thumbnail: string | { src: string };
    enrolled?: number;
    mentor?: string;
    review_members?: number;
    description?: string;
    review?: number;
    price?: number;

}

export interface UserInterface {
    name: string;
    dateOfBirth: string;
    email: string;
    password: string;
    gender: string;
    image: string;
}