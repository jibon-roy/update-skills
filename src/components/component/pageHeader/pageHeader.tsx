"use client"
import FlexSimple from '@/components/sections/flex-simple'
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {
    heading: string;
    children: any;
}

const PageHeader: React.FC<Props> = ({ heading, children }: Props) => {

    const location: string = usePathname()
    const paths: string[] = location.split('/');


    return (
        <div className='bg-main-primary-violet'>
            <FlexSimple flexDirection='column' flexDirectionMd='column' className='text-center py-10 text-white' justifyContent='center' alignItems='center'>
                <h1 className='mb-10 font-semibold text-4xl'>
                    {heading}
                </h1>
                <Breadcrumb>
                    <BreadcrumbList  >
                        {paths.map((path, key) => (
                            <div className='flex justify-center text-white items-center gap-2' key={key}>
                                <BreadcrumbItem >
                                    <BreadcrumbLink className='text-white hover:text-main-primary-yellow' href={path === '' ? '/' : path}>{path === '' ? 'Home' : path}</BreadcrumbLink>
                                </BreadcrumbItem>
                                {key < paths.length - 1 &&
                                    <BreadcrumbSeparator />
                                }
                            </div>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
                {children}
            </FlexSimple>
        </div>
    )
}

export default PageHeader
