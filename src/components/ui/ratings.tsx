"use client"
import ReactStars from 'react-stars'
import React from 'react';


export default function StarRatings() {
    return (


        <ReactStars
            className='-mt-2'
            key={0}
            count={5}
            size={24}
            edit={false}
            value={4}
            color2={'#ffd700'} />

    )
} 