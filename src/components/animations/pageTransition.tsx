"use client"
// components/Transition.tsx
import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';


const variants = {
    hidden: { opacity: 0, x: 0, y: 100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 100 },
};

const PageTransition = ({ children }: any) => {
    const pathname = usePathname();
    const router = useRouter();
    const [currentPath, setCurrentPath] = useState(pathname);

    useEffect(() => {
        const handleRouteChange = () => {
            setCurrentPath(pathname);
        };

        if (window === undefined || window) {
            handleRouteChange()
        }

        return () => {

        };
    }, [pathname, router]);

    return (
        <AnimatePresence exitBeforeEnter={false}>
            <motion.div
                key={currentPath}
                initial="hidden"
                animate="enter"
                variants={variants}
                transition={{ type: 'linear' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;


