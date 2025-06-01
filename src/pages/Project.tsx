import { useParams } from 'react-router-dom';
import { DATA } from '@/data/resume';
import ChangeTitle from '@/lib/ChangeTitle';

const Project = () => {
    const { id } = useParams();
    const project = DATA.projects.find((p) => p.id === id);
    const game = DATA.games.find((p) => p.id === id);

    const content = project || game;

    ChangeTitle({ name: `${DATA.name} • ${content?.title ?? 'Project'}` });

    if (!content) {
        return (
            <div className="text-center text-red-500 mt-10">
                Project not found.
            </div>
        );
    }

    return (
        <main className="flex flex-col items-center bg-black relative overflow-hidden">
            <section className="pb-32 mx-auto container max-w-3xl px-4 md:px-0 z-50 space-y-4 text-center animate-fade animate-once animate-duration-1000 animate-delay-300">
                <h1 className="text-4xl text-gray-50 font-semibold md:text-4xl lg:text-6xl font-mono uppercase mt-12">
                    {content.title}
                </h1>
                <h2 className="text-2xl text-neutral-300 font-thin">
                    {content.description}
                </h2>
            </section>
            <section className="py-20 w-screen px-6 border-t border-neutral-800 rounded-t-2xl mx-auto">
                <p className="text-7xl font-thin text-neutral-500 tracking-widest text-center">
                    COMING SOON
                </p>
            </section>
        </main>
    );
};

export default Project;
