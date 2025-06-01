import { motion } from 'framer-motion';
import ChangeTitle from '@/lib/ChangeTitle';
import { blurFade } from '@/components/ui/animations';
import { DATA } from '@/data/resume';
import Skills from '@/components/Skills';

const About = () => {
    ChangeTitle({ name: `${DATA.name} • About` });

    return (
        <main className="max-w-4xl mx-auto px-4 py-8 text-center">
            {/* Header Section */}
            <motion.section
                variants={blurFade()}
                initial="initial"
                animate="animate"
                className="pb-12 mx-auto container max-w-3xl px-4 md:px-0 md:pb-12 z-50 space-y-4 text-center animate-fade animate-once animate-duration-1000 animate-delay-300"
            >
                <h1 className="text-4xl text-gray-50 font-semibold md:text-4xl lg:text-6xl second-font">
                    Hi, I'm {DATA.name}.
                </h1>
                <h2 className="text-2xl text-neutral-300 font-thin md:text-2xl lg:text-2xl">
                    {DATA.summary}
                </h2>
            </motion.section>

            {/* Main Content Section */}
            <motion.section
                variants={blurFade(0.2)}
                initial="initial"
                animate="animate"
                className="max-w-3xl mx-auto space-y-12 text-left text-gray-300"
            >
                {/* Skills */}
                <Skills />
            </motion.section>
        </main>
    );
};

export default About;
