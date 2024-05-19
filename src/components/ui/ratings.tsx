"use client";
import { Rating } from 'react-custom-rating-component'

export default function StarRatings({ review, readonly }: any) {


    return (
        <div >
            <Rating size='15' defaultValue={review} readOnly={readonly} />

        </div>
    );
}
