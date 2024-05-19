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
    title: string;
    thumbnail: string;
    enrolled: number;
    review_members: number;
    avg_review: number;
    price: number;

}