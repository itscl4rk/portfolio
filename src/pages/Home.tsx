import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, SendIcon } from 'lucide-react';

import SocialButton from '@/components/SocialButton';
import Experience from '@/components/Experience';
import ChangeTitle from '@/lib/ChangeTitle';
import { blurFade } from '@/components/ui/animations';
import { DATA } from '@/data/resume';
import ProjectCard from '@/components/ProjectCard';
import Skills from '@/components/Skills';

const Home = () => {
    ChangeTitle({ name: DATA.name });

    return (
        <main className="max-w-4xl mx-auto px-4 py-8 text-center">
            <motion.section
                variants={blurFade()}
                initial="initial"
                animate="animate"
            >
                <div className="flex items-center justify-center gap-4 mb-6">
                    <Link to="/about">
                        <img
                            src={DATA.avatarUrl}
                            alt={DATA.name}
                            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                        />
                    </Link>
                    <div className="text-left">
                        <Link to="/about">
                            <h1 className="text-xl font-semibold text-gray-50 font-inter">
                                {DATA.name}.
                            </h1>
                        </Link>
                        <Link
                            to={DATA.locationLink}
                            target="_blank"
                            className="text-sm flex items-center text-muted-foreground hover:underline mt-1"
                        >
                            <MapPin size={16} className="mr-1" />
                            {DATA.location}
                        </Link>
                    </div>
                </div>
            </motion.section>

            <motion.section
                variants={blurFade(0.2)}
                initial="initial"
                animate="animate"
            >
                <h2 className="text-5xl md:text-6xl lg:text-8xl font-semibold text-gray-50 font-inter">
                    FULLSTACK
                </h2>
                <div className="flex items-center justify-center gap-2 mt-2">
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-semibold text-gray-50 font-inter">
                        DEVELOPER
                    </h2>
                    <div className="relative ml-2">
                        <Link to="/contact">
                            <button className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 relative group overflow-hidden bg-transparent text-gray-50 rounded-full hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105">
                                <SendIcon size={16} className="mr-2" />
                                <span className="font-inter">Contact me</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition duration-700"></div>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="mt-6 flex justify-center gap-4">
                    <SocialButton />
                </div>
            </motion.section>
            <motion.section
                variants={blurFade(0.4)}
                initial="initial"
                animate="animate"
            >
                <Skills />
            </motion.section>
            {/* Experience Section */}
            <motion.section
                variants={blurFade(0.6)}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <h2 className="text-3xl font-semibold text-gray-50 font-mono mt-4 text-left px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
                    Experience
                </h2>
                <Experience />
            </motion.section>
            <motion.section
                variants={blurFade(0.8)}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <h2 className="text-3xl font-semibold text-gray-50 font-mono mt-4 text-left px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
                    Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-6 md:ml-8 ml-4">
                    <ProjectCard />
                </div>
            </motion.section>
        </main>
    );
};

export default Home;
