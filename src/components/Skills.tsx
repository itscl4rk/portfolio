import { DATA } from '@/data/resume';

const Skills = () => {
    const skills = DATA.skills;

    const formatFileName = (skill: string) =>
        skill.toLowerCase().replace(/\s+/g, '').replace(/\./g, 'dot');

    return (
        <>
            <h2 className="text-3xl font-semibold text-gray-50 font-mono mt-4 text-left px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
                Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2 mb-12 mt-6 max-w-[900px] mx-auto px-4 sm:px-6 md:px-8">
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className="flex items-center gap-2 bg-black border border-zinc-300 px-2 py-1 rounded-md w-fit"
                    >
                        <img
                            alt={skill}
                            loading="lazy"
                            width="25"
                            height="25"
                            decoding="async"
                            className="filter invert"
                            src={`/skills/${formatFileName(skill)}.svg`}
                        ></img>
                        {skill}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Skills;
