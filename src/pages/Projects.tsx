import { motion } from 'framer-motion';
import ChangeTitle from '@/lib/ChangeTitle';
import { blurFade } from '@/components/ui/animations';
import { DATA } from '@/data/resume';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
    ChangeTitle({ name: `${DATA.name} • Projects` });

    return (
        <main className="max-w-6xl mx-auto px-4 py-8 text-center">
            <h1 className="text-6xl font-semibold text-gray-50 font-mono mb-6 uppercase">
                Projects
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-inter mb-12">
                Explore a list of my projects showcasing various skills and
                technologies.
            </p>
            <motion.section
                variants={blurFade(0.6)}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                    <ProjectCard />
                </div>
            </motion.section>
        </main>
    );
};

export default Projects;
