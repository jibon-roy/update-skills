import logo from '@/assets/logo2.png'
import Image from 'next/image';
type Props = {
    sm?: boolean;
    md?: boolean;
    xl?: boolean;
}
function Logo({ sm, md, xl }: Props) {

    return (
        <span className={`bg-main-primary-violet p-1 aspect-square flex justify-center items-center rounded-lg ${xl ? "w-32 h-32" : md ? "w-16 h-16" : sm ? 'w-8 h-8' : 'w-10 h-10'}`}>
            <Image alt='Update Skills'
                className='w-auto h-auto aspect-square'
                src={logo}
                width={400}
                height={400}
                priority
            />
        </span>
    )
};

export default Logo;