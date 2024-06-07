"use client"
import FlexSimple from '@/components/sections/flex-simple'
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {
    heading: string;
    children: any;
}

const PageHeader: React.FC<Props> = ({ heading, children }: Props) => {

    const location = usePathname()
    console.log(location)
    return (
        <div className='bg-main-primary-violet'>
            <FlexSimple flexDirection='column' flexDirectionMd='column' className='text-center py-10 text-white' justifyContent='center' alignItems='center'>
                <h1 className='mb-10 font-semibold text-4xl'>
                    {heading}
                </h1>
                { }
                {children}
            </FlexSimple>
        </div>
    )
}

export default PageHeader
