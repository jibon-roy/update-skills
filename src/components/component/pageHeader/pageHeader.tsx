"use client"
import FlexSimple from '@/components/sections/flex-simple'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

type Props = {
    heading: string;
    children: any;
}

const PageHeader: React.FC<Props> = ({ heading, children }: Props) => {
    const location: string = usePathname();
    const paths: string[] = location.split('/').filter(path => path); // Filter out empty segments
    const [num, setNum] = useState(0)
    const buildPath = (index: number) => {
        return '/' + paths.slice(0, index + 1).join('/');
    }

    const maxVisibleBreadcrumbs = 3;
    const overflow = paths.length > maxVisibleBreadcrumbs;
    useEffect(() => {
        if (paths.length >= 2) {
            setNum(1)
        } else {
            setNum(2)
        }
    }, [paths])


    return (
        <div className='bg-main-primary-violet'>
            <FlexSimple flexDirection='column' flexDirectionMd='column' className='text-center py-10 text-white' justifyContent='center' alignItems='center'>
                <h1 className='font-semibold text-4xl mb-3'>
                    {heading}
                </h1>
                <Breadcrumb className='mx-auto mb-7'>
                    <BreadcrumbList className='flex text-white items-center'>
                        <BreadcrumbItem>
                            <BreadcrumbLink className='text-white hover:text-main-primary-yellow' href='/'>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        {overflow && <BreadcrumbSeparator />}
                        {overflow && (
                            <BreadcrumbItem>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className='text-white hover:text-main-primary-yellow'>
                                        ...
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        {paths.slice(0, -maxVisibleBreadcrumbs).map((path, index) => (
                                            <DropdownMenuItem key={index}>
                                                <BreadcrumbLink className='text-black' href={buildPath(index)}>{path}</BreadcrumbLink>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </BreadcrumbItem>
                        )}
                        {paths.slice(-maxVisibleBreadcrumbs).map((path, index) => (
                            <React.Fragment key={index}>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink className='text-white hover:text-main-primary-yellow' href={buildPath(paths.length - maxVisibleBreadcrumbs + index + num)}>{path}</BreadcrumbLink>
                                </BreadcrumbItem>
                            </React.Fragment>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
                {children}
            </FlexSimple>
        </div>
    )
}

export default PageHeader
