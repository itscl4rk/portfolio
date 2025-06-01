import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { DATA } from '@/data/resume';
import { bounceOut } from './ui/animations';

type Position = {
    left: number;
    width: number;
    opacity: number;
};

const Navbar = () => {
    const [position, setPosition] = useState<Position>({
        left: 0,
        width: 0,
        opacity: 0,
    });

    const tabRefs = useRef<(HTMLLIElement | null)[]>([]);

    // Filter only active items
    const activeItems = DATA.navbar.filter((item) => item.active);
    return (
        <div className="overflow-hidden">
            <motion.nav
                variants={bounceOut()}
                initial="initial"
                animate="animate"
                exit="exit"
                className="px-4 py-10"
            >
                <ul
                    onMouseLeave={() => {
                        setPosition((pv) => ({
                            ...pv,
                            opacity: 0,
                        }));
                    }}
                    className="relative mx-auto flex w-fit rounded-full border border-white/20 p-1 backdrop-blur-3xl"
                >
                    {/* Highlight / Cursor */}
                    <motion.li
                        animate={{
                            ...position,
                        }}
                        className="absolute z-0 h-7 rounded-full bg-white/20 md:h-12"
                        style={{ pointerEvents: 'none' }}
                    />

                    {activeItems.map((item, idx) => (
                        <li
                            key={item.name}
                            ref={(el) => {
                                tabRefs.current[idx] = el;
                            }}
                            onMouseEnter={() => {
                                const el = tabRefs.current[idx];
                                if (!el) return;

                                const { width } = el.getBoundingClientRect();

                                setPosition({
                                    left: el.offsetLeft,
                                    width,
                                    opacity: 1,
                                });
                            }}
                            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs text-zinc-200 mix-blend-difference md:px-5 md:py-3 md:text-base"
                        >
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </motion.nav>
        </div>
    );
};

export default Navbar;
